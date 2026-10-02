import { HttpError, created, limit, now, ok, readJson } from '../lib/http.js';
import { isPro, publicUser, requireUser, requireConsent } from '../lib/auth.js';
import { sha256, uuid } from '../lib/crypto.js';
import { int, oneOf, phone, str } from '../lib/validate.js';
import { directPay, paymentStatus, paymentsConfigured, verifyFapshiWebhook } from '../lib/providers.js';
import { notify } from '../lib/notify.js';

// Prices are decided here, never by the client.
export const PLANS = {
  term: { amount: 1500, days: 120, label: 'Term Pass' },
  year: { amount: 3500, days: 365, label: 'Academic Year Pass' },
};

export async function plans(request, env) {
  return ok({ plans: PLANS, paymentsOpen: paymentsConfigured(env) });
}

export async function initiatePayment(request, env) {
  const user = await requireUser(request, env);
  requireConsent(user);
  await limit(env.WRITE_LIMITER, `pay:${user.id}`, 'Please wait a moment before trying again.');
  const b = await readJson(request);
  const planId = oneOf(b.plan, 'Plan', Object.keys(PLANS));
  const plan = PLANS[planId];
  const ph = phone(b.phone, 'Mobile money number');
  const medium = oneOf(b.medium, 'Payment method', ['mobile money', 'orange money']);
  const id = uuid();
  const externalId = id.replace(/[^a-zA-Z0-9]/g, '');
  const result = await directPay(env, {
    amount: plan.amount,
    phone: ph,
    medium,
    name: user.name,
    userId: user.id.replace(/[^a-zA-Z0-9]/g, ''),
    externalId,
    message: `BioSpatial VR ${plan.label}`,
  });
  if (!result?.transId) throw new HttpError(502, 'The payment could not be started. Please try again.', 'payment_provider');
  await env.DB.prepare(
    `INSERT INTO payments (id, user_id, provider, reference, plan, amount, phone, operator, status, applied, created_at, updated_at)
     VALUES (?, ?, 'fapshi', ?, ?, ?, ?, ?, 'PENDING', 0, ?, ?)`
  )
    .bind(id, user.id, result.transId, planId, plan.amount, ph, medium, now(), now())
    .run();
  return created({ payment: { id, reference: result.transId, plan: planId, amount: plan.amount, status: 'PENDING' } });
}

// Grants access exactly once per successful payment, after the provider confirms
// the amount. Called from both polling and the webhook.
async function settle(env, payment, providerData) {
  const status = providerData?.status;
  if (!status || payment.applied) return payment.status;
  if (status === 'SUCCESSFUL') {
    if (Number(providerData.amount) < payment.amount) {
      console.error('amount_mismatch', payment.id);
      await env.DB.prepare("UPDATE payments SET status = 'REVIEW', updated_at = ? WHERE id = ?").bind(now(), payment.id).run();
      return 'REVIEW';
    }
    const claim = await env.DB.prepare("UPDATE payments SET status = 'SUCCESSFUL', applied = 1, updated_at = ? WHERE id = ? AND applied = 0")
      .bind(now(), payment.id)
      .run();
    if (claim.meta.changes === 1) {
      const user = await env.DB.prepare('SELECT pro_until FROM users WHERE id = ?').bind(payment.user_id).first();
      const base = Math.max(now(), user?.pro_until || 0);
      const until = base + PLANS[payment.plan].days * 86_400_000;
      await env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(until, now(), payment.user_id).run();
      await notify(env, payment.user_id, 'payment', 'Payment received', `${PLANS[payment.plan].label}: ${payment.amount} FCFA. Premium is active until ${new Date(until).toLocaleDateString('en-GB')}.`, { reference: payment.reference });
    }
    return 'SUCCESSFUL';
  }
  if (status === 'FAILED' || status === 'EXPIRED') {
    await env.DB.prepare('UPDATE payments SET status = ?, updated_at = ? WHERE id = ? AND applied = 0').bind(status, now(), payment.id).run();
    return status;
  }
  return 'PENDING';
}

export async function getPayment(request, env, id) {
  const user = await requireUser(request, env);
  const payment = await env.DB.prepare('SELECT * FROM payments WHERE id = ? AND user_id = ?').bind(id, user.id).first();
  if (!payment) throw new HttpError(404, 'Payment not found.', 'not_found');
  let status = payment.status;
  if (status === 'PENDING') {
    await limit(env.WRITE_LIMITER, `poll:${payment.id}`, 'Checking too often.');
    status = await settle(env, payment, await paymentStatus(env, payment.reference));
  }
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
  return ok({ payment: { id: payment.id, reference: payment.reference, plan: payment.plan, amount: payment.amount, status }, user: publicUser(fresh), pro: isPro(fresh) });
}

export async function listPayments(request, env) {
  const user = await requireUser(request, env);
  const { results } = await env.DB.prepare(
    'SELECT id, reference, plan, amount, operator, status, created_at AS createdAt FROM payments WHERE user_id = ? ORDER BY created_at DESC LIMIT 50'
  )
    .bind(user.id)
    .all();
  return ok({ items: results });
}

// Fapshi webhook. The shared secret proves the origin; the status is then
// re-read from Fapshi so a forged or replayed body can never grant access.
export async function fapshiWebhook(request, env) {
  if (!verifyFapshiWebhook(env, request)) return new Response('forbidden', { status: 403 });
  let body = {};
  try {
    body = await request.json();
  } catch {
    return new Response('bad request', { status: 400 });
  }
  const transId = typeof body.transId === 'string' ? body.transId : null;
  if (!transId) return new Response('ok');
  const payment = await env.DB.prepare('SELECT * FROM payments WHERE reference = ?').bind(transId).first();
  if (!payment) return new Response('ok');
  try {
    await settle(env, payment, await paymentStatus(env, transId));
  } catch (e) {
    console.error('webhook_settle_failed', e?.message);
  }
  return new Response('ok');
}

// ---------- vouchers (school licences) ----------
export async function redeemVoucher(request, env) {
  const user = await requireUser(request, env);
  requireConsent(user);
  await limit(env.AUTH_LIMITER, `voucher:${user.id}`, 'Too many attempts. Wait a minute and try again.');
  const b = await readJson(request);
  const code = str(b.code, 'Code', { min: 8, max: 24 }).toUpperCase().replace(/[^A-Z0-9]/g, '');
  const hash = await sha256(code);
  const v = await env.DB.prepare('SELECT * FROM vouchers WHERE code_hash = ?').bind(hash).first();
  if (!v || (v.expires_at && v.expires_at < now()) || v.uses >= v.max_uses) {
    throw new HttpError(404, 'This code is not valid or has been used up.', 'not_found');
  }
  const already = await env.DB.prepare('SELECT 1 FROM voucher_redemptions WHERE code_hash = ? AND user_id = ?').bind(hash, user.id).first();
  if (already) throw new HttpError(409, 'You have already used this code.', 'exists');
  const claim = await env.DB.prepare('UPDATE vouchers SET uses = uses + 1 WHERE code_hash = ? AND uses < max_uses').bind(hash).run();
  if (claim.meta.changes !== 1) throw new HttpError(404, 'This code has been used up.', 'not_found');
  const base = Math.max(now(), user.pro_until || 0);
  const until = base + v.days * 86_400_000;
  await env.DB.batch([
    env.DB.prepare('INSERT INTO voucher_redemptions (code_hash, user_id, redeemed_at) VALUES (?, ?, ?)').bind(hash, user.id, now()),
    env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(until, now(), user.id),
  ]);
  await notify(env, user.id, 'payment', 'Code redeemed', `${v.label || 'School licence'}: premium is active until ${new Date(until).toLocaleDateString('en-GB')}.`);
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
  return ok({ user: publicUser(fresh), pro: true, label: v.label });
}

export async function licenceRequest(request, env) {
  const user = await requireUser(request, env);
  await limit(env.WRITE_LIMITER, `licence:${user.id}`);
  const b = await readJson(request);
  await env.DB.prepare('INSERT INTO licence_requests (id, user_id, school_name, students, contact, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .bind(
      uuid(),
      user.id,
      str(b.schoolName, 'School name', { min: 3, max: 120 }),
      int(b.students, 'Number of students', { min: 10, max: 5000 }),
      str(b.contact, 'Contact', { min: 6, max: 120 }),
      str(b.message, 'Message', { max: 500, optional: true }),
      now()
    )
    .run();
  return created({ received: true });
}
