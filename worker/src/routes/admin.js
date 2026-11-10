// Admin endpoints: for an admin account (users.is_admin, set on the server with
// make-admin.sh) signed in to the app, or for the operator's ADMIN_TOKEN.
import { HttpError, clientIp, created, limit, now, ok, readJson } from '../lib/http.js';
import { randomCode, safeEqual, sha256, uuid } from '../lib/crypto.js';
import { int, oneOf, str } from '../lib/validate.js';
import { accessEnd, isPro, paywallOn, requireUser } from '../lib/auth.js';
import { paymentsConfigured } from '../lib/providers.js';
import { notify } from '../lib/notify.js';

const DAY = 86_400_000;

// Anyone else gets "not found", so the admin endpoints do not show themselves.
async function requireAdmin(request, env) {
  const token = request.headers.get('x-admin-token');
  if (token) {
    await limit(env.AUTH_LIMITER, `admin:${clientIp(request)}`);
    if (env.ADMIN_TOKEN && env.ADMIN_TOKEN.length >= 32 && safeEqual(token, env.ADMIN_TOKEN)) return { id: null };
    throw new HttpError(404, 'Not found.', 'not_found');
  }
  const user = await requireUser(request, env);
  if (!user.is_admin) throw new HttpError(404, 'Not found.', 'not_found');
  return user;
}

const startOfMonth = () => {
  const d = new Date();
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1);
};

// The figures on the admin home: accounts, students' access and money.
export async function overview(request, env) {
  await requireAdmin(request, env);
  const t = now();
  const { results: roles } = await env.DB.prepare('SELECT role, COUNT(*) AS n FROM users WHERE deleted_at IS NULL GROUP BY role').all();
  const recent = await env.DB.prepare('SELECT COUNT(*) AS n FROM users WHERE deleted_at IS NULL AND created_at > ?').bind(t - 7 * DAY).first();
  const students = await env.DB.prepare(
    `SELECT
       SUM(CASE WHEN pro_until > ? THEN 1 ELSE 0 END) AS paid,
       SUM(CASE WHEN (pro_until IS NULL OR pro_until <= ?) AND created_at > ? THEN 1 ELSE 0 END) AS freeMonth,
       SUM(CASE WHEN (pro_until IS NULL OR pro_until <= ?) AND created_at <= ? THEN 1 ELSE 0 END) AS ended
     FROM users WHERE role = 'student' AND deleted_at IS NULL AND is_admin = 0`
  )
    .bind(t, t, t - 30 * DAY, t, t - 30 * DAY)
    .first();
  const money = await env.DB.prepare(
    `SELECT
       COALESCE(SUM(CASE WHEN status = 'SUCCESSFUL' THEN amount END), 0) AS total,
       COALESCE(SUM(CASE WHEN status = 'SUCCESSFUL' AND updated_at >= ? THEN amount END), 0) AS thisMonth,
       COUNT(CASE WHEN status = 'SUCCESSFUL' THEN 1 END) AS paid,
       COUNT(CASE WHEN status = 'PENDING' THEN 1 END) AS pending,
       COUNT(CASE WHEN status = 'REVIEW' THEN 1 END) AS review
     FROM payments`
  )
    .bind(startOfMonth())
    .first();
  const requests = await env.DB.prepare('SELECT COUNT(*) AS n FROM licence_requests').first();
  return ok({
    accounts: Object.fromEntries(roles.map((r) => [r.role, r.n])),
    newThisWeek: recent?.n || 0,
    students: { paid: students?.paid || 0, freeMonth: students?.freeMonth || 0, ended: students?.ended || 0 },
    // Fapshi keeps 3% of each payment.
    money: { ...money, afterFees: Math.round((money?.total || 0) * 0.97) },
    licenceRequests: requests?.n || 0,
    settings: { paymentsOpen: paymentsConfigured(env), paywall: paywallOn(env), checkout: env.FAPSHI_DIRECT_PAY === 'on' ? 'prompt' : 'link', fapshi: env.FAPSHI_ENV === 'live' ? 'live' : 'sandbox' },
  });
}

const userRow = (u, env) => ({
  id: u.id,
  role: u.role,
  name: u.name,
  phone: u.phone,
  email: u.email,
  className: u.class_name,
  schoolName: u.school_name,
  createdAt: u.created_at,
  proUntil: u.pro_until || null,
  accessUntil: u.role === 'student' && !u.is_admin ? accessEnd(u) : null,
  access: isPro(u, env),
  isAdmin: Boolean(u.is_admin),
});

// GET /v1/admin/users?q=  newest first, or those whose name, phone or email matches.
export async function listUsers(request, env) {
  await requireAdmin(request, env);
  const q = (new URL(request.url).searchParams.get('q') || '').trim().slice(0, 80);
  const digits = q.replace(/\D/g, '');
  const like = `%${q.replace(/[%_\\]/g, '')}%`;
  const phoneLike = digits.length >= 3 ? `%${digits}%` : '\u0000';
  const { results } = await env.DB.prepare(
    `SELECT * FROM users WHERE deleted_at IS NULL AND (? = '' OR name LIKE ? OR email LIKE ? OR phone LIKE ?)
     ORDER BY created_at DESC LIMIT 50`
  )
    .bind(q, like, like, phoneLike)
    .all();
  return ok({ items: results.map((u) => userRow(u, env)) });
}

// POST /v1/admin/users/:id/days { days, note }  gives days (or takes them away
// with a negative number), for example for platform charges paid in cash.
export async function grantDays(request, env, id) {
  const admin = await requireAdmin(request, env);
  const b = await readJson(request);
  const days = int(b.days, 'Days', { min: -400, max: 400 });
  if (days === 0) throw new HttpError(400, 'Days must not be 0.', 'invalid_input');
  const note = str(b.note, 'Note', { max: 200, optional: true });
  const u = await env.DB.prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL').bind(id).first();
  if (!u) throw new HttpError(404, 'Account not found.', 'not_found');
  const until = days > 0 ? Math.max(now(), accessEnd(u)) + days * DAY : Math.max(0, (u.pro_until || 0) + days * DAY);
  await env.DB.batch([
    env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(until || null, now(), u.id),
    env.DB.prepare('INSERT INTO admin_grants (id, admin_id, user_id, days, note, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(uuid(), admin.id, u.id, days, note, now()),
  ]);
  if (days > 0) await notify(env, u.id, 'payment', 'Access added', `Klass8 is open on your account until ${new Date(until).toLocaleDateString('en-GB')}.`);
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(u.id).first();
  return ok({ user: userRow(fresh, env) });
}

// GET /v1/admin/payments?status=  the latest payments, with who made them.
export async function listPayments(request, env) {
  await requireAdmin(request, env);
  const s = new URL(request.url).searchParams.get('status');
  const status = s ? oneOf(s, 'Status', ['SUCCESSFUL', 'PENDING', 'REVIEW', 'FAILED', 'EXPIRED']) : null;
  const { results } = await env.DB.prepare(
    `SELECT p.id, p.reference, p.plan, p.amount, p.status, p.operator, p.created_at AS createdAt, p.updated_at AS updatedAt,
            u.id AS userId, u.name, u.phone
     FROM payments p LEFT JOIN users u ON u.id = p.user_id
     WHERE (? IS NULL OR p.status = ?) ORDER BY p.created_at DESC LIMIT 100`
  )
    .bind(status, status)
    .all();
  return ok({ items: results });
}

// Creates school codes for a number of days. Codes are shown once and stored hashed.
export async function createVouchers(request, env) {
  await requireAdmin(request, env);
  const b = await readJson(request);
  const label = str(b.label, 'Label', { min: 3, max: 120 });
  const days = int(b.days, 'Days', { min: 1, max: 400 });
  const maxUses = int(b.maxUses, 'Max uses', { min: 1, max: 2000 });
  const count = int(b.count ?? 1, 'Count', { min: 1, max: 50 });
  const expiresInDays = int(b.expiresInDays ?? 180, 'Expiry', { min: 1, max: 730 });
  const codes = [];
  for (let i = 0; i < count; i++) {
    const code = `${randomCode(4)}-${randomCode(4)}-${randomCode(4)}`;
    await env.DB.prepare('INSERT INTO vouchers (code_hash, label, days, max_uses, uses, expires_at, created_at) VALUES (?, ?, ?, ?, 0, ?, ?)')
      .bind(await sha256(code.replace(/-/g, '')), label, days, maxUses, now() + expiresInDays * DAY, now())
      .run();
    codes.push(code);
  }
  return created({ codes, label, days, maxUses });
}

// The school codes made so far (the codes themselves are not kept).
export async function listVouchers(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    'SELECT label, days, max_uses AS maxUses, uses, expires_at AS expiresAt, created_at AS createdAt FROM vouchers ORDER BY created_at DESC LIMIT 100'
  ).all();
  return ok({ items: results });
}

export async function listLicenceRequests(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    `SELECT r.id, r.school_name AS schoolName, r.students, r.contact, r.message, r.created_at AS createdAt, u.name AS requestedBy
     FROM licence_requests r LEFT JOIN users u ON u.id = r.user_id ORDER BY r.created_at DESC LIMIT 100`
  ).all();
  return ok({ items: results });
}

// The newest error reports from the app, to find what breaks on phones.
export async function listAppErrors(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    `SELECT created_at AS createdAt, place, fatal, late, platform, os, build, message, stack
     FROM app_errors ORDER BY created_at DESC LIMIT 100`
  ).all();
  return ok({ items: results });
}
