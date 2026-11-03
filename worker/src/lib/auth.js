// Session handling: short-lived signed access tokens plus rotating refresh
// tokens stored only as hashes. Reusing a rotated refresh token revokes every
// session of that user (token theft detection).
import { HttpError, now } from './http.js';
import { randomToken, sha256, signJwt, uuid, verifyJwt } from './crypto.js';
import { userSubjects } from './subjects.js';

const ACCESS_TTL = 15 * 60; // seconds
const REFRESH_TTL_MS = 60 * 24 * 60 * 60 * 1000; // 60 days

export async function issueSession(env, user) {
  const refresh = randomToken(32);
  await env.DB.prepare(
    'INSERT INTO refresh_tokens (id, user_id, token_hash, expires_at, created_at, revoked) VALUES (?, ?, ?, ?, ?, 0)'
  )
    .bind(uuid(), user.id, await sha256(refresh), now() + REFRESH_TTL_MS, now())
    .run();
  const accessToken = await signJwt({ sub: user.id, role: user.role }, env.JWT_SECRET, ACCESS_TTL);
  // `pro` lets the app open the full course straight after signing in.
  return { accessToken, refreshToken: refresh, expiresIn: ACCESS_TTL, pro: isPro(user, env) };
}

export async function rotateRefresh(env, refreshToken) {
  if (typeof refreshToken !== 'string' || refreshToken.length < 20 || refreshToken.length > 100) {
    throw new HttpError(401, 'Session expired. Please log in again.', 'unauthorized');
  }
  const hash = await sha256(refreshToken);
  const row = await env.DB.prepare('SELECT * FROM refresh_tokens WHERE token_hash = ?').bind(hash).first();
  if (!row) throw new HttpError(401, 'Session expired. Please log in again.', 'unauthorized');
  if (row.revoked) {
    // A revoked token being replayed means it leaked: end every session for this user.
    await env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?').bind(row.user_id).run();
    throw new HttpError(401, 'Session expired. Please log in again.', 'unauthorized');
  }
  if (row.expires_at < now()) throw new HttpError(401, 'Session expired. Please log in again.', 'unauthorized');
  await env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE id = ?').bind(row.id).run();
  const user = await env.DB.prepare('SELECT id, role FROM users WHERE id = ? AND deleted_at IS NULL').bind(row.user_id).first();
  if (!user) throw new HttpError(401, 'Session expired. Please log in again.', 'unauthorized');
  return issueSession(env, user);
}

export async function revokeRefresh(env, refreshToken) {
  if (typeof refreshToken !== 'string') return;
  await env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE token_hash = ?').bind(await sha256(refreshToken)).run();
}

export async function requireUser(request, env, roles) {
  // An app from before the paywall is signed out (401), then asked to update.
  if (outdatedApp(request, env)) throw new HttpError(401, UPDATE_MESSAGE, 'update_required');
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const claims = await verifyJwt(token, env.JWT_SECRET);
  if (!claims?.sub) throw new HttpError(401, 'Please log in.', 'unauthorized');
  const user = await env.DB.prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL').bind(claims.sub).first();
  if (!user) throw new HttpError(401, 'Please log in.', 'unauthorized');
  if (roles && !roles.includes(user.role)) throw new HttpError(403, 'You do not have access to this.', 'forbidden');
  return user;
}

// Until the paywall is switched on (PAYWALL=on, set with
// /opt/klass8-api/set-fapshi-keys.sh once payments work) every account gets the
// full course. The app takes its answer from `pro`, so no new build is needed.
export const paywallOn = (env) => env?.PAYWALL === 'on';
export const isPro = (user, env) => !paywallOn(env) || Boolean(user.pro_until && user.pro_until > now());

// Builds from before the paywall open the whole course on the phone whatever
// the server says, so once it is on they must update. Newer builds send
// x-klass8-client with their level.
const CLIENT_LEVEL = 2;
export const UPDATE_MESSAGE = 'This version of Klass8 is out of date. Install the new one from klass8.ebenesaid.com/download to continue.';
export const outdatedApp = (request, env) => paywallOn(env) && !(Number(request.headers.get('x-klass8-client')) >= CLIENT_LEVEL);

// Public shape of a user. Never includes hashes or internal flags.
export function publicUser(u) {
  return {
    id: u.id,
    role: u.role,
    name: u.name,
    phone: u.phone,
    email: u.email,
    phoneVerified: Boolean(u.phone_verified),
    lang: u.lang,
    level: u.level,
    examYear: u.exam_year,
    className: u.class_name,
    schoolId: u.school_id,
    schoolName: u.school_name,
    targetGrade: u.target_grade,
    dailyMinutes: u.daily_minutes,
    reminderTime: u.reminder_time,
    parentPhone: u.parent_phone,
    parentReportFreq: u.parent_report_freq,
    parentReportLang: u.parent_report_lang,
    inactivityAlert: Boolean(u.inactivity_alert),
    onboarded: Boolean(u.onboarded),
    avatarAt: u.avatar_at || null,
    subjects: userSubjects(u),
    proUntil: u.pro_until || null,
    createdAt: u.created_at,
  };
}
