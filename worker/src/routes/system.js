// The CTO's System tab: how the server is doing right now, the alerts, the
// problems phones and the server report (most repeated first), security
// events, blocked addresses, and the emergency switches that stop a problem
// at once while it is being fixed.
import { HttpError, clientIp, now, ok, readJson } from '../lib/http.js';
import { bool, int, oneOf, str } from '../lib/validate.js';
import { adminNotice, requireAdminCan } from '../lib/adminAuth.js';
import { saveSettings, setting } from '../lib/settings.js';
import { liveMinutes, loadBlocks, machine, problemSig, securityEvent } from '../lib/monitor.js';
import { aiProvider } from '../lib/ai.js';
import { paymentsConfigured } from '../lib/providers.js';

const DAY = 86_400_000;
const dataDir = (env) => env.DATA_DIR || '/data';

// The newest app version on the download page, asked at most every 10 minutes.
let latestApp = { at: 0, value: null };
async function appVersion() {
  if (Date.now() - latestApp.at < 600_000) return latestApp.value;
  latestApp.at = Date.now();
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3000);
    const r = await fetch('https://klass8.ebenesaid.com/download/version.json', { signal: ctrl.signal });
    clearTimeout(timer);
    latestApp.value = r.ok ? await r.json() : null;
  } catch {
    latestApp.value = null;
  }
  return latestApp.value;
}

async function voiceHealth(env) {
  if (!env.KOKORO_URL) return { state: 'off' };
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3000);
    const t = Date.now();
    const r = await fetch(`${env.KOKORO_URL.replace(/\/+$/, '')}/health`, { signal: ctrl.signal });
    clearTimeout(timer);
    const b = r.ok ? await r.json().catch(() => ({})) : {};
    return { state: r.ok ? 'ok' : 'down', ms: Date.now() - t, waiting: b.waiting ?? null };
  } catch {
    return { state: 'down' };
  }
}

export const switches = () => ({
  maintenance: setting('maintenance') === 'on',
  maintenanceMessage: setting('maintenance_message') || '',
  signups: setting('lock_signups') !== 'on',
  logins: setting('lock_logins') !== 'on',
  ai: setting('ai_off') !== 'on',
  payments: setting('payments_off') !== 'on',
  usersSignedOutAt: Number(setting('user_sessions_after') || 0) || null,
  adminsSignedOutAt: Number(setting('admin_sessions_after') || 0) || null,
});

// GET /v1/admin/system
export async function systemStatus(request, env) {
  await requireAdminCan(request, env, 'system');
  const live = liveMinutes();
  const last = live.slice(-5);
  const sum = (k) => last.reduce((s, r) => s + r[k], 0);
  const { results: hours } = await env.DB.prepare(
    `SELECT minute / 60 AS hour, SUM(count) AS count, SUM(err5) AS err5, MAX(p95) AS p95 FROM request_stats WHERE minute >= ? GROUP BY minute / 60 ORDER BY hour`
  )
    .bind(Math.floor((now() - DAY) / 60_000))
    .all();
  const { results: open } = await env.DB.prepare("SELECT kind, level, COUNT(*) AS n FROM alerts WHERE resolved_at IS NULL GROUP BY kind, level").all();
  const problems = await env.DB.prepare(
    `SELECT COUNT(*) AS n, COUNT(DISTINCT e.sig) AS kinds FROM app_errors e LEFT JOIN problem_status s ON s.sig = e.sig
     WHERE e.created_at > ? AND (s.resolved_at IS NULL OR e.created_at > s.resolved_at)`
  )
    .bind(now() - DAY)
    .first();
  const events = await env.DB.prepare("SELECT COUNT(*) AS n FROM security_events WHERE created_at > ? AND kind IN ('login_failed', 'admin_login_failed')").bind(now() - DAY).first();
  const users = await env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE deleted_at IS NULL').first();
  const { results: blocks } = await env.DB.prepare('SELECT ip, reason, created_at AS createdAt, until FROM ip_blocks ORDER BY created_at DESC').all();
  return ok({
    now: {
      perMinute: last.length ? Math.round(sum('count') / last.length) : 0,
      errorsLast5: sum('err5'),
      p95: last.length ? Math.max(...last.map((r) => r.p95)) : 0,
      limitedLast5: sum('limited'),
      signInFailuresLast5: sum('authFail'),
    },
    minutes: live.map((r) => ({ minute: r.minute, count: r.count, err5: r.err5, p95: r.p95 })),
    hours,
    machine: machine(dataDir(env)),
    services: {
      voice: await voiceHealth(env),
      ai: aiProvider(env) ? { state: setting('ai_off') === 'on' ? 'paused' : 'ok', provider: aiProvider(env) } : { state: 'off' },
      payments: { state: !paymentsConfigured(env) ? 'off' : setting('payments_off') === 'on' ? 'paused' : 'ok', mode: env.FAPSHI_ENV === 'live' ? 'live' : 'sandbox' },
      database: { state: 'ok', accounts: users?.n || 0 },
    },
    app: await appVersion(),
    alerts: open,
    problemsToday: { reports: problems?.n || 0, kinds: problems?.kinds || 0 },
    failedSignInsToday: events?.n || 0,
    switches: switches(),
    blocks,
    yourIp: clientIp(request),
  });
}

// GET /v1/admin/alerts?status=open|all&kind=
export async function listAlerts(request, env) {
  await requireAdminCan(request, env, 'system');
  const q = new URL(request.url).searchParams;
  const all = q.get('status') === 'all';
  const kind = q.get('kind') || '';
  const { results } = await env.DB.prepare(
    `SELECT id, kind, level, title, detail, action, count, first_at AS firstAt, last_at AS lastAt, resolved_at AS resolvedAt, resolved_by AS resolvedBy FROM alerts
     WHERE (? = 1 OR resolved_at IS NULL) AND (? = '' OR kind = ?)
     ORDER BY (resolved_at IS NOT NULL), CASE level WHEN 'critical' THEN 0 WHEN 'warning' THEN 1 ELSE 2 END, last_at DESC LIMIT 200`
  )
    .bind(all ? 1 : 0, kind, kind)
    .all();
  return ok({ items: results });
}

// POST /v1/admin/alerts/:id/resolve
export async function resolveAlert(request, env, id) {
  const admin = await requireAdminCan(request, env, 'system');
  await env.DB.prepare('UPDATE alerts SET resolved_at = ?, resolved_by = ? WHERE id = ? AND resolved_at IS NULL').bind(now(), admin.id || 'operator', id).run();
  return ok();
}

// GET /v1/admin/problems?days=  problems grouped, the most repeated first.
export async function listProblems(request, env) {
  await requireAdminCan(request, env, 'system');
  const days = Math.min(90, Math.max(1, Number(new URL(request.url).searchParams.get('days')) || 30));
  // Reports saved before problems were grouped get their group now.
  const { results: old } = await env.DB.prepare('SELECT id, place, message FROM app_errors WHERE sig IS NULL LIMIT 500').all();
  if (old.length) await env.DB.batch(old.map((r) => env.DB.prepare('UPDATE app_errors SET sig = ? WHERE id = ?').bind(problemSig(r.place, r.message), r.id)));
  const { results } = await env.DB.prepare(
    `SELECT e.sig, COUNT(*) AS count, COUNT(DISTINCT e.device) AS phones, MIN(e.created_at) AS firstAt, MAX(e.created_at) AS lastAt,
            MAX(e.fatal) AS fatal, MAX(e.place) AS place, MAX(e.message) AS message,
            GROUP_CONCAT(DISTINCT e.platform) AS platforms, GROUP_CONCAT(DISTINCT e.build) AS builds, GROUP_CONCAT(DISTINCT e.os) AS systems,
            SUM(CASE WHEN e.created_at > ? THEN 1 ELSE 0 END) AS today,
            s.resolved_at AS fixedAt
     FROM app_errors e LEFT JOIN problem_status s ON s.sig = e.sig
     WHERE e.created_at > ? AND e.sig IS NOT NULL
     GROUP BY e.sig ORDER BY (s.resolved_at IS NOT NULL AND MAX(e.created_at) <= s.resolved_at), count DESC LIMIT 100`
  )
    .bind(now() - DAY, now() - days * DAY)
    .all();
  const items = [];
  for (const r of results) {
    const sample = await env.DB.prepare('SELECT stack, os, build, platform, created_at AS at FROM app_errors WHERE sig = ? ORDER BY created_at DESC LIMIT 1').bind(r.sig).first();
    items.push({
      ...r,
      fatal: Boolean(r.fatal),
      server: (r.platforms || '').split(',').includes('server'),
      fixed: Boolean(r.fixedAt && r.lastAt <= r.fixedAt),
      cameBack: Boolean(r.fixedAt && r.lastAt > r.fixedAt),
      stack: sample?.stack || '',
    });
  }
  return ok({ days, items });
}

// POST /v1/admin/problems/:sig/fixed { fixed }  marks a problem as fixed; it shows again if it comes back.
export async function markProblem(request, env, sig) {
  const admin = await requireAdminCan(request, env, 'system');
  const b = await readJson(request);
  if (bool(b.fixed ?? true, 'Fixed')) {
    await env.DB.prepare('INSERT INTO problem_status (sig, resolved_at, resolved_by) VALUES (?, ?, ?) ON CONFLICT(sig) DO UPDATE SET resolved_at = excluded.resolved_at, resolved_by = excluded.resolved_by').bind(sig, now(), admin.id || 'operator').run();
    await env.DB.prepare("UPDATE alerts SET resolved_at = ?, resolved_by = ? WHERE key = ? AND resolved_at IS NULL").bind(now(), admin.id || 'operator', `crash:${sig}`).run();
  } else {
    await env.DB.prepare('DELETE FROM problem_status WHERE sig = ?').bind(sig).run();
  }
  return ok();
}

// GET /v1/admin/security-events?kind=
export async function listSecurityEvents(request, env) {
  await requireAdminCan(request, env, 'system');
  const kind = new URL(request.url).searchParams.get('kind') || '';
  const { results } = await env.DB.prepare('SELECT id, kind, ip, detail, created_at AS createdAt FROM security_events WHERE (? = \'\' OR kind = ?) ORDER BY created_at DESC LIMIT 200').bind(kind, kind).all();
  const { results: topIps } = await env.DB.prepare(
    "SELECT ip, COUNT(*) AS n FROM security_events WHERE created_at > ? AND kind IN ('login_failed', 'admin_login_failed', 'blocked_ip') AND ip IS NOT NULL GROUP BY ip ORDER BY n DESC LIMIT 10"
  )
    .bind(now() - DAY)
    .all();
  return ok({ items: results, topIps });
}

const IP_RE = /^[0-9a-fA-F:.]{3,45}$/;

// POST /v1/admin/ip-blocks { ip, reason, hours? }  (0 or missing hours: until unblocked)
export async function blockIp(request, env) {
  const admin = await requireAdminCan(request, env, 'system');
  const b = await readJson(request);
  const ip = str(b.ip, 'Address', { min: 3, max: 45 }).trim();
  if (!IP_RE.test(ip)) throw new HttpError(400, 'That is not an internet address.', 'invalid_input');
  if (ip === clientIp(request)) throw new HttpError(400, 'This is your own address: blocking it would lock you out.', 'own_ip');
  const reason = str(b.reason, 'Reason', { min: 3, max: 200 });
  const hours = int(b.hours ?? 0, 'Hours', { min: 0, max: 24 * 365 });
  await env.DB.prepare('INSERT INTO ip_blocks (ip, reason, created_at, until, created_by) VALUES (?, ?, ?, ?, ?) ON CONFLICT(ip) DO UPDATE SET reason = excluded.reason, until = excluded.until, created_by = excluded.created_by')
    .bind(ip, reason, now(), hours ? now() + hours * 3600_000 : null, admin.id || 'operator')
    .run();
  await loadBlocks(env, true);
  await securityEvent(env, 'ip_blocked', request, `${ip}: ${reason}`);
  return ok({ blocked: ip });
}

// DELETE /v1/admin/ip-blocks/:ip
export async function unblockIp(request, env, ip) {
  await requireAdminCan(request, env, 'system');
  await env.DB.prepare('DELETE FROM ip_blocks WHERE ip = ?').bind(ip).run();
  await loadBlocks(env, true);
  await securityEvent(env, 'ip_unblocked', request, ip);
  return ok();
}

// PUT /v1/admin/system/switches { maintenance?, maintenanceMessage?, signups?, logins?, ai?, payments? }
export async function putSwitches(request, env) {
  const admin = await requireAdminCan(request, env, 'system');
  const b = await readJson(request);
  const c = {};
  if (b.maintenance !== undefined) c.maintenance = bool(b.maintenance, 'Maintenance') ? 'on' : 'off';
  if (b.maintenanceMessage !== undefined) c.maintenance_message = str(b.maintenanceMessage, 'Message', { max: 200, optional: true }) || '';
  if (b.signups !== undefined) c.lock_signups = bool(b.signups, 'Sign-ups') ? 'off' : 'on';
  if (b.logins !== undefined) c.lock_logins = bool(b.logins, 'Sign-ins') ? 'off' : 'on';
  if (b.ai !== undefined) c.ai_off = bool(b.ai, 'AI') ? 'off' : 'on';
  if (b.payments !== undefined) c.payments_off = bool(b.payments, 'Payments') ? 'off' : 'on';
  await saveSettings(env, c, admin.id || 'operator');
  await securityEvent(env, 'switches', request, `${admin.name}: ${Object.entries(c).map(([k, v]) => `${k}=${String(v).slice(0, 40)}`).join(', ')}`);
  return ok({ switches: switches() });
}

// POST /v1/admin/system/sign-out { who: 'users' | 'admins' }  ends every session at once.
export async function signOutEveryone(request, env) {
  const admin = await requireAdminCan(request, env, 'system');
  const b = await readJson(request);
  const who = oneOf(b.who, 'Who', ['users', 'admins']);
  const t = now();
  if (who === 'users') {
    await env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE revoked = 0').run();
    await saveSettings(env, { user_sessions_after: t }, admin.id || 'operator');
  } else {
    await env.DB.prepare('UPDATE admin_sessions SET revoked = 1 WHERE revoked = 0 AND admin_id != ?').bind(admin.id || '').run();
    await saveSettings(env, { admin_sessions_after: t - 1000 }, admin.id || 'operator');
    const { results } = await env.DB.prepare('SELECT id FROM admins WHERE id != ?').bind(admin.id || '').all();
    for (const a of results) await adminNotice(env, a.id, 'security', 'You were signed out by the CTO', 'Every admin was signed out for safety. Sign in again with your password.');
  }
  await securityEvent(env, `signed_out_${who}`, request, `${admin.name} signed out every ${who === 'users' ? 'student, parent and teacher' : 'other admin'}`);
  return ok({ signedOut: who, at: t });
}

// POST /v1/admin/system/backup  a copy of the database now (kept beside the nightly ones).
export async function backupNow(request, env) {
  await requireAdminCan(request, env, 'system');
  if (typeof env.backupNow !== 'function') throw new HttpError(503, 'Backups are made by the server program only.', 'unavailable');
  const file = env.backupNow();
  await securityEvent(env, 'backup', request, file);
  return ok({ file, machine: machine(dataDir(env)) });
}

// POST /v1/admin/updates { version, title, body, audience }  tells people what a new version changed.
export async function announceUpdate(request, env) {
  await requireAdminCan(request, env, 'system');
  const b = await readJson(request);
  const version = str(b.version, 'Version', { max: 20, optional: true });
  const title = str(b.title, 'Title', { min: 3, max: 120 });
  const body = str(b.body, 'What changed', { min: 10, max: 500 });
  const audience = oneOf(b.audience ?? 'everyone', 'Who it is for', ['everyone', 'student', 'parent', 'teacher', 'partner']);
  const { results } = await env.DB.prepare("SELECT id FROM users WHERE deleted_at IS NULL AND blocked_at IS NULL AND (? = 'everyone' OR role = ?)").bind(audience, audience).all();
  const t = now();
  const data = JSON.stringify({ version: version || null });
  for (let i = 0; i < results.length; i += 200) {
    await env.DB.batch(
      results.slice(i, i + 200).map((u) =>
        env.DB.prepare("INSERT INTO notifications (id, user_id, kind, title, body, data, read, created_at) VALUES (lower(hex(randomblob(16))), ?, 'update', ?, ?, ?, 0, ?)").bind(u.id, title, body, data, t)
      )
    );
  }
  return ok({ sent: results.length });
}
