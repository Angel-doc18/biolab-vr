// Operator-only endpoints, protected by the ADMIN_TOKEN secret.
import { HttpError, clientIp, created, limit, now, ok, readJson } from '../lib/http.js';
import { randomCode, safeEqual, sha256 } from '../lib/crypto.js';
import { int, str } from '../lib/validate.js';

async function requireAdmin(request, env) {
  await limit(env.AUTH_LIMITER, `admin:${clientIp(request)}`);
  const token = request.headers.get('x-admin-token') || '';
  if (!env.ADMIN_TOKEN || env.ADMIN_TOKEN.length < 32 || !safeEqual(token, env.ADMIN_TOKEN)) {
    throw new HttpError(404, 'Not found.', 'not_found');
  }
}

// Creates voucher codes for a school licence. Codes are shown once and stored hashed.
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
      .bind(await sha256(code.replace(/-/g, '')), label, days, maxUses, now() + expiresInDays * 86_400_000, now())
      .run();
    codes.push(code);
  }
  return created({ codes, label, days, maxUses });
}

export async function listLicenceRequests(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    `SELECT r.id, r.school_name AS schoolName, r.students, r.contact, r.message, r.created_at AS createdAt, u.name AS requestedBy
     FROM licence_requests r LEFT JOIN users u ON u.id = r.user_id ORDER BY r.created_at DESC LIMIT 100`
  ).all();
  return ok({ items: results });
}
