// Session handling: short-lived signed access tokens plus rotating refresh
// tokens stored only as hashes. Reusing a rotated refresh token revokes every
// session of that user (token theft detection).
import { HttpError, now } from './http.js';
import { randomToken, sha256, signJwt, uuid, verifyJwt } from './crypto.js';

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
  return { accessToken, refreshToken: refresh, expiresIn: ACCESS_TTL };
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
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const claims = await verifyJwt(token, env.JWT_SECRET);
  if (!claims?.sub) throw new HttpError(401, 'Please log in.', 'unauthorized');
  const user = await env.DB.prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL').bind(claims.sub).first();
  if (!user) throw new HttpError(401, 'Please log in.', 'unauthorized');
  if (roles && !roles.includes(user.role)) throw new HttpError(403, 'You do not have access to this.', 'forbidden');
  return user;
}

export const isPro = (user) => Boolean(user.pro_until && user.pro_until > now());

// Students under 18 need a parent's or guardian's approval before their data is
// processed on the server (Cameroon Law No. 2024/017).
export const consentOk = (user) => user.role !== 'student' || user.consent_status === 'granted' || user.consent_status === 'not_needed';
export function requireConsent(user) {
  if (!consentOk(user)) {
    throw new HttpError(
      403,
      user.consent_status === 'refused'
        ? 'Your parent or guardian has not approved your account, so this is not available.'
        : 'A parent or guardian needs to approve your account first.',
      'consent_required'
    );
  }
}

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
    birthYear: u.birth_year || null,
    birthMonth: u.birth_month || null,
    consentStatus: u.consent_status || null,
    guardianName: u.guardian_name || null,
    proUntil: u.pro_until || null,
    createdAt: u.created_at,
  };
}
