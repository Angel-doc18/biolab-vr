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

// Platform charges. Until the paywall is switched on (PAYWALL=on, set with
// /opt/klass8-api/set-fapshi-keys.sh once payments work) every account has the
// whole app. After that a student's first month is free, then the app is open
// while a payment (or a school code) lasts. Parents and teachers do not pay.
// The app takes its answer from `pro`, so no new build is needed to switch.
export const paywallOn = (env) => env?.PAYWALL === 'on';
// FREE_DAYS on the server sets the free first period (default 30 days; 0 means
// the charges apply from sign-up). Read from the server's environment.
export function freeDays() {
  const raw = globalThis.process?.env?.FREE_DAYS;
  const n = raw == null || String(raw).trim() === '' ? NaN : Number(raw);
  return Number.isFinite(n) && n >= 0 ? n : 30;
}
export const trialUntil = (u) => (u.role === 'student' ? (u.created_at || 0) + freeDays() * 86_400_000 : null);
// When the student's access ends (the later of the free month and what was
// paid); a payment or code adds its days after it.
export const accessEnd = (u) => Math.max(u.pro_until || 0, trialUntil(u) || 0);
export const isPro = (user, env) => !paywallOn(env) || user.role !== 'student' || Boolean(user.is_admin) || accessEnd(user) > now();
export function requireAccess(user, env) {
  if (!isPro(user, env)) {
    const msg = freeDays() > 0 ? 'Your free month has ended. Pay the platform charges to keep using Klass8.' : 'Pay the platform charges to use Klass8.';
    throw new HttpError(402, msg, 'payment_required');
  }
}

// Builds from before the paywall open the whole course on the phone whatever
// the server says, so once it is on they must update. Newer builds send
// x-klass8-client with their level.
const CLIENT_LEVEL = 2;
export const UPDATE_MESSAGE = 'This version of Klass8 is out of date. Install the new one from klass8.ebenesaid.com/download to continue.';
export const outdatedApp = (request, env) => paywallOn(env) && !(Number(request.headers.get('x-klass8-client')) >= CLIENT_LEVEL);

// Public shape of a user. Never includes hashes or internal flags.
export function publicUser(u, env) {
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
    schoolType: u.school_type || 'general',
    stream: u.stream || null,
    specialty: u.specialty || null,
    series: u.series || null,
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
    trialUntil: paywallOn(env) && !u.is_admin ? trialUntil(u) : null, // the free month, once charges apply
    isAdmin: Boolean(u.is_admin),
    createdAt: u.created_at,
  };
}
