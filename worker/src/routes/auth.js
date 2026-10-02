import { HttpError, clientIp, created, limit, now, ok, readJson } from '../lib/http.js';
import { hashPassword, randomDigits, sha256, uuid, verifyPassword, safeEqual } from '../lib/crypto.js';
import { issueSession, publicUser, requireUser, revokeRefresh, rotateRefresh } from '../lib/auth.js';
import { email, oneOf, password, phone, str } from '../lib/validate.js';
import { channels, messagingConfigured, sendCode } from '../lib/messaging.js';

const GENERIC_LOGIN_ERROR = 'Phone number, email or password is incorrect.';
const OTP_TTL = 10 * 60 * 1000;

// A precomputed hash so failed logins for unknown users cost the same time.
const DUMMY = { hash: '0'.repeat(64), salt: '00112233445566778899aabbccddeeff' };

export async function register(request, env) {
  await limit(env.AUTH_LIMITER, `reg:${clientIp(request)}`, 'Too many attempts. Wait a minute and try again.');
  const body = await readJson(request);
  const name = str(body.name, 'Full name', { min: 2, max: 80 });
  const ph = phone(body.phone);
  const mail = email(body.email);
  const pw = password(body.password);
  const role = oneOf(body.role ?? 'student', 'Role', ['student', 'parent', 'teacher']);
  const lang = oneOf(body.lang ?? 'en', 'Language', ['en', 'fr']);

  const existing = await env.DB.prepare('SELECT id FROM users WHERE phone = ? OR (email IS NOT NULL AND email = ?)')
    .bind(ph, mail)
    .first();
  if (existing) throw new HttpError(409, 'An account already exists with this phone number or email.', 'exists');

  const { hash, salt } = await hashPassword(pw);
  const id = uuid();
  const t = now();
  await env.DB.prepare(
    `INSERT INTO users (id, role, name, phone, email, password_hash, password_salt, lang, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(id, role, name, ph, mail, hash, salt, lang, t, t)
    .run();
  const user = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).first();
  const session = await issueSession(env, user);
  return created({ user: publicUser(user), ...session, otpAvailable: messagingConfigured(env) });
}

export async function login(request, env) {
  await limit(env.AUTH_LIMITER, `login:${clientIp(request)}`, 'Too many attempts. Wait a minute and try again.');
  const body = await readJson(request);
  const identifier = str(body.identifier, 'Phone number or email', { max: 254 });
  const pw = str(body.password, 'Password', { max: 128 });
  let user = null;
  if (identifier.includes('@')) {
    user = await env.DB.prepare('SELECT * FROM users WHERE email = ? AND deleted_at IS NULL').bind(identifier.toLowerCase()).first();
  } else {
    let ph = null;
    try {
      ph = phone(identifier);
    } catch {
      ph = null;
    }
    if (ph) user = await env.DB.prepare('SELECT * FROM users WHERE phone = ? AND deleted_at IS NULL').bind(ph).first();
  }
  const valid = await verifyPassword(pw, user?.password_hash || DUMMY.hash, user?.password_salt || DUMMY.salt);
  if (!user || !valid) throw new HttpError(401, GENERIC_LOGIN_ERROR, 'invalid_credentials');
  const session = await issueSession(env, user);
  return ok({ user: publicUser(user), ...session });
}

export async function refresh(request, env) {
  await limit(env.AUTH_LIMITER, `refresh:${clientIp(request)}`);
  const body = await readJson(request);
  return ok(await rotateRefresh(env, body.refreshToken));
}

export async function logout(request, env) {
  const body = await readJson(request);
  await revokeRefresh(env, body.refreshToken);
  return ok();
}

// The channel a code is expected to arrive on, without revealing whether an account exists.
const usualChannel = (env) => (channels(env)[0] === 'whatsapp' ? 'whatsapp' : 'sms');

async function storeAndSendOtp(env, ph, purpose, lang) {
  const code = randomDigits(6);
  await env.DB.prepare(
    `INSERT INTO otp_codes (phone, purpose, code_hash, expires_at, attempts) VALUES (?, ?, ?, ?, 0)
     ON CONFLICT(phone, purpose) DO UPDATE SET code_hash = excluded.code_hash, expires_at = excluded.expires_at, attempts = 0`
  )
    .bind(ph, purpose, await sha256(`${ph}:${code}`), now() + OTP_TTL)
    .run();
  return sendCode(env, ph, code, lang);
}

async function checkOtp(env, ph, purpose, code) {
  if (!/^\d{6}$/.test(String(code || ''))) throw new HttpError(400, 'Enter the 6 digit code.', 'invalid_input');
  const row = await env.DB.prepare('SELECT * FROM otp_codes WHERE phone = ? AND purpose = ?').bind(ph, purpose).first();
  if (!row || row.expires_at < now() || row.attempts >= 5) {
    throw new HttpError(400, 'This code has expired. Request a new one.', 'otp_expired');
  }
  const matches = safeEqual(row.code_hash, await sha256(`${ph}:${code}`));
  if (!matches) {
    await env.DB.prepare('UPDATE otp_codes SET attempts = attempts + 1 WHERE phone = ? AND purpose = ?').bind(ph, purpose).run();
    throw new HttpError(400, 'That code is not correct.', 'otp_invalid');
  }
  await env.DB.prepare('DELETE FROM otp_codes WHERE phone = ? AND purpose = ?').bind(ph, purpose).run();
}

// Sends a verification code to the logged-in user's own phone.
export async function sendVerifyOtp(request, env) {
  const user = await requireUser(request, env);
  await limit(env.OTP_LIMITER, `otp:${user.phone}`, 'Please wait a minute before requesting another code.');
  const channel = await storeAndSendOtp(env, user.phone, 'verify', user.lang);
  return ok({ sentTo: user.phone.slice(0, 5) + '••••' + user.phone.slice(-2), channel });
}

export async function verifyOtp(request, env) {
  const user = await requireUser(request, env);
  const body = await readJson(request);
  await checkOtp(env, user.phone, 'verify', body.code);
  await env.DB.prepare('UPDATE users SET phone_verified = 1, updated_at = ? WHERE id = ?').bind(now(), user.id).run();
  return ok({ verified: true });
}

// Password reset: the response is identical whether or not the account exists.
export async function forgotPassword(request, env) {
  await limit(env.AUTH_LIMITER, `forgot:${clientIp(request)}`, 'Too many attempts. Wait a minute and try again.');
  const body = await readJson(request);
  const ph = phone(body.phone);
  if (!messagingConfigured(env)) throw new HttpError(503, 'Password reset by code is not available yet. Contact support.', 'messaging_unavailable');
  await limit(env.OTP_LIMITER, `otp:${ph}`, 'Please wait a minute before requesting another code.');
  const user = await env.DB.prepare('SELECT id, lang FROM users WHERE phone = ? AND deleted_at IS NULL').bind(ph).first();
  if (user) {
    try {
      await storeAndSendOtp(env, ph, 'reset', user.lang);
    } catch (e) {
      // Same answer either way; delivery problems are logged, not revealed.
      console.error('reset_code_failed', e?.code || e?.message);
    }
  }
  return ok({ sent: true, channel: usualChannel(env) });
}

export async function resetPassword(request, env) {
  await limit(env.AUTH_LIMITER, `reset:${clientIp(request)}`, 'Too many attempts. Wait a minute and try again.');
  const body = await readJson(request);
  const ph = phone(body.phone);
  const pw = password(body.password);
  await checkOtp(env, ph, 'reset', body.code);
  const user = await env.DB.prepare('SELECT id FROM users WHERE phone = ? AND deleted_at IS NULL').bind(ph).first();
  if (!user) throw new HttpError(400, 'This code has expired. Request a new one.', 'otp_expired');
  const { hash, salt } = await hashPassword(pw);
  await env.DB.batch([
    env.DB.prepare('UPDATE users SET password_hash = ?, password_salt = ?, phone_verified = 1, updated_at = ? WHERE id = ?').bind(hash, salt, now(), user.id),
    env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?').bind(user.id),
  ]);
  return ok({ reset: true });
}

export async function changePassword(request, env) {
  const user = await requireUser(request, env);
  const body = await readJson(request);
  const current = str(body.currentPassword, 'Current password', { max: 128 });
  if (!(await verifyPassword(current, user.password_hash, user.password_salt))) {
    throw new HttpError(400, 'Your current password is not correct.', 'invalid_credentials');
  }
  const { hash, salt } = await hashPassword(password(body.newPassword));
  await env.DB.batch([
    env.DB.prepare('UPDATE users SET password_hash = ?, password_salt = ?, updated_at = ? WHERE id = ?').bind(hash, salt, now(), user.id),
    env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?').bind(user.id),
  ]);
  const session = await issueSession(env, user);
  return ok(session);
}
