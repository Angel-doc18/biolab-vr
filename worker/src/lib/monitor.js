// The system watch, for the CTO: every API request is counted here (how many,
// how fast, how many failed), security events are written down, and once a
// minute the numbers are stored and checked. Anything unusual opens an alert
// (or adds to the open alert for the same problem), which the CTO sees in the
// System tab of the admin console with what to do about it.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { uuid } from './crypto.js';
import { now } from './http.js';

const MINUTE = 60_000;
const DAY = 86_400_000;

// ---------- this minute's requests ----------
let bucket = fresh();
function fresh() {
  return { minute: Math.floor(Date.now() / MINUTE), count: 0, err5: 0, err4: 0, limited: 0, authFail: 0, ms: [], ips: new Map(), paths5: new Map() };
}
// The last hour of minutes, for the live view and the checks.
const recent = [];

// Groups a path so /v1/classes/abc-123 and /v1/classes/def-456 count together.
export const pathGroup = (p) =>
  String(p || '')
    .replace(/\/[0-9a-f-]{8,64}(?=\/|$)/gi, '/:id')
    .replace(/\/[A-Za-z0-9]{20,}(?=\/|$)/g, '/:id')
    .slice(0, 60);

export function track(request, status, ms) {
  const m = Math.floor(Date.now() / MINUTE);
  if (m !== bucket.minute) rollover();
  bucket.count += 1;
  if (status >= 500) {
    bucket.err5 += 1;
    const g = pathGroup(new URL(request.url).pathname);
    bucket.paths5.set(g, (bucket.paths5.get(g) || 0) + 1);
  } else if (status >= 400) bucket.err4 += 1;
  if (status === 429) bucket.limited += 1;
  if (bucket.ms.length < 5000) bucket.ms.push(ms);
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  bucket.ips.set(ip, (bucket.ips.get(ip) || 0) + 1);
}
export const countAuthFailure = () => {
  bucket.authFail += 1;
};

function pct(list, p) {
  if (!list.length) return 0;
  const s = [...list].sort((a, b) => a - b);
  return Math.round(s[Math.min(s.length - 1, Math.floor((p / 100) * s.length))]);
}

function rollover() {
  const b = bucket;
  bucket = fresh();
  const row = {
    minute: b.minute,
    count: b.count,
    err5: b.err5,
    err4: b.err4,
    limited: b.limited,
    authFail: b.authFail,
    p50: pct(b.ms, 50),
    p95: pct(b.ms, 95),
    max: b.ms.length ? Math.round(Math.max(...b.ms)) : 0,
    topIp: [...b.ips.entries()].sort((x, y) => y[1] - x[1])[0] || null,
    paths5: [...b.paths5.entries()].sort((x, y) => y[1] - x[1]).slice(0, 3),
  };
  recent.push(row);
  while (recent.length > 60) recent.shift();
  pending.push(row);
}
const pending = [];
export const liveMinutes = () => {
  if (Math.floor(Date.now() / MINUTE) !== bucket.minute) rollover();
  return recent.slice();
};

// ---------- security events ----------
// Written as they happen; kept for 90 days.
export async function securityEvent(env, kind, request, detail) {
  try {
    const ip = request?.headers?.get?.('cf-connecting-ip') || null;
    await env.DB.prepare('INSERT INTO security_events (id, created_at, kind, ip, detail) VALUES (?, ?, ?, ?, ?)')
      .bind(uuid(), now(), kind, ip, String(detail || '').slice(0, 300))
      .run();
  } catch {
    // the watch must never break a request
  }
}

// ---------- alerts ----------
// Opens an alert, or adds to the open one with the same key.
export async function raise(env, { key, kind, level = 'warning', title, detail, action = null }) {
  try {
    const t = now();
    const open = await env.DB.prepare('SELECT id, level FROM alerts WHERE key = ? AND resolved_at IS NULL').bind(key).first();
    if (open) {
      const worse = level === 'critical' || (level === 'warning' && open.level === 'info') ? level : open.level;
      await env.DB.prepare('UPDATE alerts SET count = count + 1, last_at = ?, detail = ?, level = ?, action = COALESCE(?, action) WHERE id = ?')
        .bind(t, String(detail).slice(0, 600), worse, action, open.id)
        .run();
      return open.id;
    }
    const id = uuid();
    await env.DB.prepare('INSERT INTO alerts (id, key, kind, level, title, detail, action, count, first_at, last_at) VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?, ?)')
      .bind(id, key, kind, level, String(title).slice(0, 140), String(detail).slice(0, 600), action, t, t)
      .run();
    return id;
  } catch (e) {
    console.error('alert_failed', e?.message);
    return null;
  }
}

// Closes alerts of a key that has been quiet for a while (traffic, speed).
async function settle(env, prefix, quietMs) {
  await env.DB.prepare("UPDATE alerts SET resolved_at = ?, resolved_by = 'system' WHERE resolved_at IS NULL AND key LIKE ? AND last_at < ?")
    .bind(now(), `${prefix}%`, now() - quietMs)
    .run();
}

// ---------- blocked addresses ----------
let blocked = { at: 0, map: new Map() };
export async function loadBlocks(env, force = false) {
  if (!force && Date.now() - blocked.at < 30_000) return blocked.map;
  try {
    const { results } = await env.DB.prepare('SELECT ip, reason, until FROM ip_blocks').all();
    blocked = { at: Date.now(), map: new Map(results.map((r) => [r.ip, r])) };
  } catch {
    blocked = { at: Date.now(), map: new Map() };
  }
  return blocked.map;
}
export function isBlocked(ip) {
  const b = blocked.map.get(ip);
  return !!b && (!b.until || b.until > Date.now());
}

// ---------- the machine ----------
export function machine(dataDir) {
  const out = {
    uptimeHours: Math.round((process.uptime() / 3600) * 10) / 10,
    node: process.version,
    memory: { usedMb: Math.round(process.memoryUsage().rss / 1048576), freeMb: Math.round(os.freemem() / 1048576), totalMb: Math.round(os.totalmem() / 1048576) },
    load: os.loadavg().map((n) => Math.round(n * 100) / 100),
    cpus: os.cpus().length,
    disk: null,
    dbMb: null,
    backups: { count: 0, latestAt: null, mb: 0 },
  };
  try {
    const s = fs.statfsSync(dataDir);
    const total = s.blocks * s.bsize;
    const free = s.bavail * s.bsize;
    out.disk = { totalGb: Math.round((total / 1073741824) * 10) / 10, freeGb: Math.round((free / 1073741824) * 10) / 10, usedPct: total ? Math.round(((total - free) / total) * 100) : 0 };
  } catch {
    // not available on this system
  }
  try {
    out.dbMb = Math.round((fs.statSync(path.join(dataDir, 'klass8.db')).size / 1048576) * 10) / 10;
  } catch {
    // no database file (tests)
  }
  try {
    const dir = path.join(dataDir, 'backups');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.db'));
    let latest = 0;
    let bytes = 0;
    for (const f of files) {
      const st = fs.statSync(path.join(dir, f));
      bytes += st.size;
      latest = Math.max(latest, st.mtimeMs);
    }
    out.backups = { count: files.length, latestAt: latest || null, mb: Math.round(bytes / 1048576) };
  } catch {
    // no backups folder
  }
  return out;
}

// ---------- the once-a-minute check ----------
export async function tick(env, dataDir) {
  if (Math.floor(Date.now() / MINUTE) !== bucket.minute) rollover();
  const rows = pending.splice(0);
  for (const r of rows) {
    try {
      await env.DB.prepare('INSERT OR REPLACE INTO request_stats (minute, count, err5, err4, limited, auth_fail, p50, p95, max_ms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
        .bind(r.minute, r.count, r.err5, r.err4, r.limited, r.authFail, r.p50, r.p95, r.max)
        .run();
    } catch {
      // the table may not exist yet in an old database
    }
    await checkMinute(env, r);
  }
  const m = Math.floor(Date.now() / MINUTE);
  // Every 10 minutes: the machine, the backups and the phones.
  if (m % 10 === 0) await checkMachine(env, dataDir);
  if (m % 5 === 0) await checkSecurity(env);
  if (m % 15 === 0) await checkCrashes(env);
  if (m % 30 === 0) {
    await settle(env, 'traffic:', 30 * MINUTE);
    await settle(env, 'latency:', 30 * MINUTE);
    await settle(env, 'errors:', 30 * MINUTE);
  }
  if (m % 1440 === 0) {
    await env.DB.prepare('DELETE FROM request_stats WHERE minute < ?').bind(m - 60 * 24 * 90).run();
    await env.DB.prepare('DELETE FROM security_events WHERE created_at < ?').bind(now() - 90 * DAY).run();
    await env.DB.prepare('DELETE FROM alerts WHERE resolved_at IS NOT NULL AND resolved_at < ?').bind(now() - 180 * DAY).run();
  }
}

async function checkMinute(env, r) {
  if (r.count >= 20 && r.p95 > 4000) {
    await raise(env, { key: 'latency:slow', kind: 'latency', level: 'critical', title: 'Klass8 is answering very slowly', detail: `In the last minute 1 in 20 answers took over ${(r.p95 / 1000).toFixed(1)} s (slowest ${(r.max / 1000).toFixed(1)} s) across ${r.count} requests.`, action: 'Open System and look at memory, the processor load and AI or voice problems. Restart the API if it stays slow.' });
  } else if (r.count >= 20 && r.p95 > 1500) {
    await raise(env, { key: 'latency:slow', kind: 'latency', level: 'warning', title: 'Klass8 is slower than usual', detail: `1 in 20 answers took over ${(r.p95 / 1000).toFixed(1)} s in the last minute (${r.count} requests).`, action: 'Watch for a few minutes. If it continues, check the processor load and memory.' });
  }
  if (r.err5 >= 5 || (r.count >= 40 && r.err5 / r.count > 0.05)) {
    const where = r.paths5.map(([p, n]) => `${p} (${n})`).join(', ');
    await raise(env, { key: 'errors:server', kind: 'failure', level: r.err5 >= 20 ? 'critical' : 'warning', title: 'The server is failing requests', detail: `${r.err5} of ${r.count} requests failed with a server error in one minute. Where: ${where || 'several places'}.`, action: 'Open Problems for the server errors. Check that the AI, voice and payment services answer.' });
  }
  const avg = recent.length > 10 ? recent.slice(0, -1).reduce((s, x) => s + x.count, 0) / (recent.length - 1) : 0;
  if (r.count > 300 && avg > 0 && r.count > avg * 5) {
    await raise(env, { key: 'traffic:spike', kind: 'traffic', level: 'warning', title: 'Sudden rise in traffic', detail: `${r.count} requests in one minute, about ${Math.round(r.count / avg)} times the usual ${Math.round(avg)}.`, action: 'If it comes from one address, block that address in System. A school starting a lesson together is normal.' });
  }
  if (r.topIp && r.topIp[1] > 400) {
    await raise(env, { key: `security:flood:${r.topIp[0]}`, kind: 'security', level: 'critical', title: 'One address is flooding the server', detail: `${r.topIp[0]} sent ${r.topIp[1]} requests in one minute.`, action: `Block ${r.topIp[0]} in System unless you know it (a school network, for example).` });
  }
  if (r.limited >= 50) {
    await raise(env, { key: 'security:limits', kind: 'security', level: 'warning', title: 'Many requests turned away by the limits', detail: `${r.limited} requests were refused in one minute because they came too fast.`, action: 'Look at Security events for the address, and block it if it is an attack.' });
  }
}

async function checkSecurity(env) {
  const since = now() - 15 * MINUTE;
  const { results } = await env.DB.prepare(
    "SELECT ip, COUNT(*) AS n FROM security_events WHERE created_at > ? AND kind IN ('login_failed', 'admin_login_failed') GROUP BY ip HAVING n >= 15 ORDER BY n DESC LIMIT 5"
  )
    .bind(since)
    .all();
  for (const r of results) {
    await raise(env, { key: `security:guessing:${r.ip}`, kind: 'security', level: r.n >= 40 ? 'critical' : 'warning', title: 'Someone may be guessing passwords', detail: `${r.n} failed sign-ins from ${r.ip} in 15 minutes.`, action: `Block ${r.ip} in System. If it is aimed at one account, tell its owner to change their password.` });
  }
  const admin = await env.DB.prepare("SELECT COUNT(*) AS n FROM security_events WHERE created_at > ? AND kind = 'admin_login_failed'").bind(since).first();
  if ((admin?.n || 0) >= 5) {
    await raise(env, { key: 'security:admin-guessing', kind: 'security', level: 'critical', title: 'Failed sign-ins to admin accounts', detail: `${admin.n} wrong passwords for admin accounts in 15 minutes.`, action: 'Check Security events. Change admin passwords if needed and block the addresses.' });
  }
}

async function checkMachine(env, dataDir) {
  const m = machine(dataDir);
  if (m.disk) {
    if (m.disk.usedPct >= 95) await raise(env, { key: 'storage:disk', kind: 'storage', level: 'critical', title: 'The server disk is almost full', detail: `${m.disk.usedPct}% used, ${m.disk.freeGb} GB left. The database stops saving when it is full.`, action: 'Delete old backups or logs on the server now, then move to a bigger plan.' });
    else if (m.disk.usedPct >= 85) await raise(env, { key: 'storage:disk', kind: 'storage', level: 'warning', title: 'The server disk is filling up', detail: `${m.disk.usedPct}% used, ${m.disk.freeGb} GB left.`, action: 'Plan an upgrade of the server storage, or remove old backups and voice files.' });
  }
  const freePct = m.memory.totalMb ? (m.memory.freeMb / m.memory.totalMb) * 100 : 100;
  if (freePct < 5) await raise(env, { key: 'upgrade:memory', kind: 'upgrade', level: 'warning', title: 'The server is short of memory', detail: `Only ${m.memory.freeMb} MB of ${m.memory.totalMb} MB free. The API uses ${m.memory.usedMb} MB.`, action: 'Restart the voice service if it uses too much, or move to a plan with more memory.' });
  if (m.load[1] > m.cpus * 2) await raise(env, { key: 'upgrade:cpu', kind: 'upgrade', level: 'warning', title: 'The server processor is overloaded', detail: `Average load ${m.load[1]} for ${m.cpus} processors over 5 minutes.`, action: 'Check what is busy (often voice making). If it lasts, move to a plan with more processors.' });
  if (m.backups.latestAt && Date.now() - m.backups.latestAt > 36 * 3600_000) {
    await raise(env, { key: 'failure:backup', kind: 'failure', level: 'warning', title: 'The nightly backup did not run', detail: `The newest backup is from ${new Date(m.backups.latestAt).toISOString().slice(0, 16).replace('T', ' ')} UTC.`, action: 'Make a backup now in System, then check the server log.' });
  }
  if (m.dbMb && m.disk && m.dbMb * 3 > m.disk.freeGb * 1024) {
    await raise(env, { key: 'storage:db', kind: 'storage', level: 'warning', title: 'The database is large for the space left', detail: `The database is ${m.dbMb} MB with ${m.disk.freeGb} GB free; backups need room too.`, action: 'Move to more storage soon.' });
  }
}

async function checkCrashes(env) {
  const { results } = await env.DB.prepare(
    `SELECT e.sig, COUNT(*) AS n, MAX(e.message) AS message, MAX(e.place) AS place, MAX(e.fatal) AS fatal, MAX(e.platform) AS platform
     FROM app_errors e LEFT JOIN problem_status s ON s.sig = e.sig
     WHERE e.created_at > ? AND e.sig IS NOT NULL AND (s.resolved_at IS NULL OR e.created_at > s.resolved_at)
     GROUP BY e.sig HAVING n >= 5 ORDER BY n DESC LIMIT 5`
  )
    .bind(now() - 3600_000)
    .all();
  for (const r of results) {
    const server = r.platform === 'server';
    await raise(env, {
      key: `crash:${r.sig}`,
      kind: server ? 'malfunction' : 'crash',
      level: r.fatal || r.n >= 25 ? 'critical' : 'warning',
      title: server ? 'A server error keeps happening' : r.fatal ? 'The app keeps closing on phones' : 'A problem keeps happening on phones',
      detail: `${r.n} times in the last hour, at ${r.place || 'unknown place'}: ${r.message}`,
      action: 'Open Problems, copy the report and fix it. Mark it fixed once the new version is out.',
    });
  }
}

// ---------- problems ----------
// What makes two error reports "the same problem": where it happened and the
// message without numbers, ids and addresses.
export function problemSig(place, message) {
  const norm = String(message || '')
    .split('\n')[0]
    .replace(/https?:\/\/\S+/g, 'URL')
    .replace(/[0-9a-f]{8}-[0-9a-f-]{20,}/gi, 'ID')
    .replace(/\d+/g, 'N')
    .slice(0, 160);
  let h = 0;
  const s = `${place || ''}|${norm}`;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return `p${(h >>> 0).toString(36)}`;
}

// A server error, kept with the phones' problems so both are seen in one list.
export async function serverProblem(env, request, err) {
  try {
    const place = pathGroup(new URL(request.url).pathname);
    const message = String(err?.message || err || 'Server error').slice(0, 500);
    await env.DB.prepare(
      "INSERT INTO app_errors (id, created_at, place, fatal, late, platform, os, build, message, stack, sig) VALUES (?, ?, ?, 0, 0, 'server', ?, ?, ?, ?, ?)"
    )
      .bind(uuid(), now(), place, `node ${process.version}`, request.method, message, String(err?.stack || '').slice(0, 4000), problemSig(place, message))
      .run();
  } catch {
    // never let the watch break the answer
  }
}
