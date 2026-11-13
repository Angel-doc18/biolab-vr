// Admin accounts and their sign-in. Admins are not users: they live in their
// own table, are created only on the server (make-admin.sh), and their tokens
// carry kind: 'admin', so an admin token never acts as a user and a user's
// token never opens the admin endpoints. The operator's ADMIN_TOKEN still
// works for scripts.
import { HttpError, clientIp, limit, now, ok, readJson } from './http.js';
import { randomToken, safeEqual, sha256, signJwt, uuid, verifyJwt, verifyPassword } from './crypto.js';
import { phone, str } from './validate.js';

const ACCESS_TTL = 15 * 60; // seconds
const REFRESH_TTL_MS = 12 * 60 * 60 * 1000; // an admin signs in again every 12 hours
const LOGIN_ERROR = 'This admin email or phone number, or the password, is incorrect.';
const DUMMY = { hash: '0'.repeat(64), salt: '00112233445566778899aabbccddeeff' };
const SESSION_ENDED = 'Your admin session has ended. Sign in again.';

// An email address in lower case, or a Cameroon number as 2376XXXXXXXX.
export function adminLogin(raw) {
  const v = String(raw || '').trim();
  if (v.includes('@')) return v.toLowerCase();
  try {
    return phone(v);
  } catch {
    return null;
  }
}

const publicAdmin = (a) => ({ id: a.id, name: a.name, login: a.login });

async function issue(env, admin) {
  const refresh = randomToken(32);
  await env.DB.prepare('INSERT INTO admin_sessions (id, admin_id, token_hash, expires_at, created_at, revoked) VALUES (?, ?, ?, ?, ?, 0)')
    .bind(uuid(), admin.id, await sha256(refresh), now() + REFRESH_TTL_MS, now())
    .run();
  const accessToken = await signJwt({ sub: admin.id, kind: 'admin' }, env.JWT_SECRET, ACCESS_TTL);
  return { admin: publicAdmin(admin), accessToken, refreshToken: refresh, expiresIn: ACCESS_TTL };
}

// Anyone who is not an admin gets "not found", so the admin endpoints do not show themselves.
export async function requireAdmin(request, env) {
  const token = request.headers.get('x-admin-token');
  if (token) {
    await limit(env.AUTH_LIMITER, `admin:${clientIp(request)}`);
    if (env.ADMIN_TOKEN && env.ADMIN_TOKEN.length >= 32 && safeEqual(token, env.ADMIN_TOKEN)) return { id: null, name: 'operator' };
    throw new HttpError(404, 'Not found.', 'not_found');
  }
  const header = request.headers.get('authorization') || '';
  const claims = await verifyJwt(header.startsWith('Bearer ') ? header.slice(7) : null, env.JWT_SECRET);
  if (!claims?.sub || claims.kind !== 'admin') throw new HttpError(404, 'Not found.', 'not_found');
  const admin = await env.DB.prepare('SELECT id, name, login, disabled FROM admins WHERE id = ?').bind(claims.sub).first();
  if (!admin || admin.disabled) throw new HttpError(401, SESSION_ENDED, 'admin_signed_out');
  return admin;
}

// POST /v1/admin/login { login, password }
export async function signIn(request, env) {
  await limit(env.AUTH_LIMITER, `admin-login:${clientIp(request)}`, 'Too many attempts. Wait a minute and try again.');
  const b = await readJson(request);
  const login = adminLogin(str(b.login, 'Email or phone number', { max: 254 }));
  const pw = str(b.password, 'Password', { max: 128 });
  const admin = login ? await env.DB.prepare('SELECT * FROM admins WHERE login = ?').bind(login).first() : null;
  // The password is checked even when no admin has that login, so the answer takes as long either way.
  const valid = await verifyPassword(pw, admin?.password_hash || DUMMY.hash, admin?.password_salt || DUMMY.salt);
  if (!admin || !valid) throw new HttpError(401, LOGIN_ERROR, 'invalid_credentials');
  if (admin.disabled) throw new HttpError(403, 'This admin account is switched off.', 'admin_disabled');
  await env.DB.prepare('UPDATE admins SET last_login_at = ? WHERE id = ?').bind(now(), admin.id).run();
  return ok(await issue(env, admin));
}

// POST /v1/admin/refresh { refreshToken }
export async function refreshAdmin(request, env) {
  await limit(env.AUTH_LIMITER, `admin-refresh:${clientIp(request)}`);
  const b = await readJson(request);
  const t = typeof b.refreshToken === 'string' && b.refreshToken.length >= 20 && b.refreshToken.length <= 100 ? b.refreshToken : null;
  if (!t) throw new HttpError(401, SESSION_ENDED, 'admin_signed_out');
  const row = await env.DB.prepare('SELECT * FROM admin_sessions WHERE token_hash = ?').bind(await sha256(t)).first();
  if (!row) throw new HttpError(401, SESSION_ENDED, 'admin_signed_out');
  if (row.revoked) {
    // A used token coming back means it leaked: end every session of this admin.
    await env.DB.prepare('UPDATE admin_sessions SET revoked = 1 WHERE admin_id = ?').bind(row.admin_id).run();
    throw new HttpError(401, SESSION_ENDED, 'admin_signed_out');
  }
  if (row.expires_at < now()) throw new HttpError(401, SESSION_ENDED, 'admin_signed_out');
  await env.DB.prepare('UPDATE admin_sessions SET revoked = 1 WHERE id = ?').bind(row.id).run();
  const admin = await env.DB.prepare('SELECT * FROM admins WHERE id = ?').bind(row.admin_id).first();
  if (!admin || admin.disabled) throw new HttpError(401, SESSION_ENDED, 'admin_signed_out');
  return ok(await issue(env, admin));
}

// POST /v1/admin/logout { refreshToken }
export async function signOut(request, env) {
  const b = await readJson(request);
  if (typeof b.refreshToken === 'string') await env.DB.prepare('UPDATE admin_sessions SET revoked = 1 WHERE token_hash = ?').bind(await sha256(b.refreshToken)).run();
  return ok();
}

// GET /v1/admin/me
export async function me(request, env) {
  const admin = await requireAdmin(request, env);
  return ok({ admin: admin.id ? publicAdmin(admin) : { id: null, name: 'operator', login: null } });
}
