// The Klass8 API on Klass8's own server. The routes in ../src are the same code
// that ran as a Cloudflare Worker; this file gives them what Cloudflare gave:
// the database (SQLite in place of D1), the 3D model files, the rate limits,
// the daily 17:00 UTC job, and the client's address from nginx.
//
//   DATA_DIR  where the database and its backups live (default /data)
//   PORT      default 8787; nginx passes /v1/ here
// Every other setting (JWT_SECRET, GROQ_API_KEY, VOICE_ENGINE, ...) is read
// from the environment, as the Worker read its variables and secrets.
import { Buffer } from 'node:buffer';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from '../src/index.js';
import { D1 } from './d1.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DATA = process.env.DATA_DIR || '/data';
const PORT = Number(process.env.PORT || 8787);
const MAX_BODY = 7 * 1024 * 1024; // the largest request is a photo of an answer (6 MB)
const BACKUPS_KEPT = 14;

fs.mkdirSync(path.join(DATA, 'backups'), { recursive: true });
const DB = new D1(path.join(DATA, 'klass8.db'));

// The schema: every file in ../migrations not yet applied, in order, recorded
// in the same table wrangler used, so a database copied from D1 carries on.
function migrate() {
  DB.sqlite.exec('CREATE TABLE IF NOT EXISTS d1_migrations (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE, applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)');
  const done = new Set(DB.sqlite.prepare('SELECT name FROM d1_migrations').all().map((r) => r.name));
  const dir = path.join(HERE, '../migrations');
  for (const name of fs.readdirSync(dir).filter((f) => f.endsWith('.sql')).sort()) {
    if (done.has(name)) continue;
    DB.sqlite.exec('BEGIN');
    try {
      DB.sqlite.exec(fs.readFileSync(path.join(dir, name), 'utf8'));
      DB.sqlite.prepare('INSERT INTO d1_migrations (name) VALUES (?)').run(name);
      DB.sqlite.exec('COMMIT');
      console.log('migration applied', name);
    } catch (e) {
      DB.sqlite.exec('ROLLBACK');
      throw new Error(`migration ${name} failed: ${e.message}`);
    }
  }
}
migrate();

// Fixed-window rate limits, per key, as configured for the Worker.
function limiter(limit, seconds) {
  const hits = new Map();
  let window = 0;
  return {
    async limit({ key }) {
      const w = Math.floor(Date.now() / (seconds * 1000));
      if (w !== window) {
        hits.clear();
        window = w;
      }
      const n = (hits.get(key) || 0) + 1;
      hits.set(key, n);
      return { success: n <= limit };
    },
  };
}

// The 3D model files, from ../assets as the Worker's static assets were.
const ASSETS_DIR = path.join(HERE, '../assets');
const ASSETS = {
  async fetch(request) {
    const rel = decodeURIComponent(new URL(request.url).pathname).replace(/^\/+/, '');
    const file = path.join(ASSETS_DIR, rel);
    if (!file.startsWith(ASSETS_DIR + path.sep) || !fs.existsSync(file)) return new Response('Not found', { status: 404 });
    return new Response(fs.readFileSync(file));
  },
};

const env = {
  ...process.env,
  DB,
  ASSETS,
  AUTH_LIMITER: limiter(10, 60),
  OTP_LIMITER: limiter(2, 60),
  AI_LIMITER: limiter(8, 60),
  WRITE_LIMITER: limiter(20, 60),
  VOICE_LIMITER: limiter(40, 60),
};
const ctx = { waitUntil: (p) => Promise.resolve(p).catch((e) => console.error('background', e?.stack || e)), passThroughOnException() {} };

const HOP = new Set(['connection', 'keep-alive', 'transfer-encoding', 'upgrade', 'proxy-connection', 'te', 'trailer']);

const server = http.createServer(async (req, res) => {
  try {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > MAX_BODY) {
        res.writeHead(413, { 'content-type': 'application/json' }).end('{"error":"Request body too large.","code":"error"}');
        return;
      }
      chunks.push(chunk);
    }
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) if (v != null && !HOP.has(k)) headers.set(k, Array.isArray(v) ? v.join(', ') : v);
    // The rate limits key on the client's address, which nginx passes on.
    headers.set('cf-connecting-ip', String(req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown'));
    const proto = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
    const hasBody = !['GET', 'HEAD'].includes(req.method);
    const request = new Request(`${proto}://${host}${req.url}`, { method: req.method, headers, body: hasBody ? Buffer.concat(chunks) : undefined });
    const response = await worker.fetch(request, env, ctx);
    res.writeHead(response.status, Object.fromEntries(response.headers));
    if (response.body && req.method !== 'HEAD') for await (const chunk of response.body) res.write(chunk);
    res.end();
  } catch (e) {
    console.error('server', e?.stack || e);
    if (!res.headersSent) res.writeHead(500, { 'content-type': 'application/json' });
    res.end('{"error":"Something went wrong. Please try again.","code":"server_error"}');
  }
});

// A copy of the database every night, the last 14 kept.
function backup() {
  const day = new Date().toISOString().slice(0, 10);
  const file = path.join(DATA, 'backups', `klass8-${day}.db`);
  if (!fs.existsSync(file)) DB.sqlite.exec(`VACUUM INTO '${file.replace(/'/g, "''")}'`);
  const old = fs.readdirSync(path.join(DATA, 'backups')).filter((f) => /^klass8-\d{4}-\d{2}-\d{2}\.db$/.test(f)).sort().slice(0, -BACKUPS_KEPT);
  for (const f of old) fs.rmSync(path.join(DATA, 'backups', f));
}

// Runs fn every day at hh:mm UTC.
function daily(hh, mm, name, fn) {
  const next = new Date();
  next.setUTCHours(hh, mm, 0, 0);
  if (next <= new Date()) next.setUTCDate(next.getUTCDate() + 1);
  setTimeout(async () => {
    try {
      await fn();
    } catch (e) {
      console.error(name, e?.stack || e);
    }
    daily(hh, mm, name, fn);
  }, next - Date.now());
}
daily(17, 0, 'scheduled', () => worker.scheduled({ cron: '0 17 * * *', scheduledTime: Date.now() }, env, ctx));
daily(2, 30, 'backup', backup);

server.listen(PORT, () => console.log(`Klass8 API on port ${PORT}, data in ${DATA}`));
const stop = () => server.close(() => process.exit(0));
process.on('SIGTERM', stop);
process.on('SIGINT', stop);
