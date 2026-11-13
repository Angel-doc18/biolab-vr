import { HttpError, created, limit, now, ok, readJson } from '../lib/http.js';
import { accessEnd, isPro, paywallOn, publicUser, requireUser, trialUntil } from '../lib/auth.js';
import { sha256, uuid } from '../lib/crypto.js';
import { int, oneOf, phone, str } from '../lib/validate.js';
import { directPay, payLink, paymentStatus, paymentsConfigured, paymentsOf, verifyFapshiWebhook } from '../lib/providers.js';
import { notify } from '../lib/notify.js';
import { currentPlans, loadSettings } from '../lib/settings.js';

// The platform charges. Prices are decided on the server, never by the client:
// an admin sets them in the app (lib/settings.js), 350 and 3,500 FCFA until then.

// How students pay: 'prompt' (Fapshi Direct Pay, a request appears on the
// phone) once Fapshi has switched Direct Pay on for the account
// (FAPSHI_DIRECT_PAY=on), otherwise 'link' (Fapshi's own payment page).
const checkoutMode = (env) => (env.FAPSHI_DIRECT_PAY === 'on' ? 'prompt' : 'link');
const plain = (id) => id.replace(/[^a-zA-Z0-9]/g, '');
const publicBase = (request, env) => (env.PUBLIC_API_URL || new URL(request.url).origin).replace(/\/+$/, '');

export async function plans(request, env) {
  return ok({ plans: currentPlans(), paymentsOpen: paymentsConfigured(env), checkout: checkoutMode(env), paywall: paywallOn(env) });
}

// The payment is written down before Fapshi is asked, so one whose request
// timed out (Fapshi may still have made it) can be found and settled later.
export async function initiatePayment(request, env) {
  const user = await requireUser(request, env);
  await limit(env.WRITE_LIMITER, `pay:${user.id}`, 'Please wait a moment before trying again.');
  const b = await readJson(request);
  const PLANS = currentPlans();
  const planId = oneOf(b.plan, 'Plan', Object.keys(PLANS));
  const plan = PLANS[planId];
  const mode = checkoutMode(env);
  if (!paymentsConfigured(env)) throw new HttpError(503, 'Mobile money payments are not open yet.', 'payments_unavailable');
  const ph = mode === 'prompt' ? phone(b.phone, 'Mobile money number') : '';
  const medium = mode === 'prompt' ? oneOf(b.medium, 'Payment method', ['mobile money', 'orange money']) : null;
  const id = uuid();
  const ask = { amount: plan.amount, userId: plain(user.id), externalId: plain(id), message: `Klass8 ${plan.label}` };
  await env.DB.prepare(
    `INSERT INTO payments (id, user_id, provider, reference, plan, amount, phone, operator, status, applied, created_at, updated_at)
     VALUES (?, ?, 'fapshi', NULL, ?, ?, ?, ?, 'PENDING', 0, ?, ?)`
  )
    .bind(id, user.id, planId, plan.amount, ph, medium, now(), now())
    .run();
  let result;
  try {
    result =
      mode === 'prompt'
        ? await directPay(env, { ...ask, phone: ph, medium, name: user.name })
        : await payLink(env, { ...ask, redirectUrl: `${publicBase(request, env)}/v1/billing/return` });
  } catch (e) {
    // Refused outright: nothing was made at Fapshi. A time-out stays pending
    // and is looked up by reconcilePayments.
    if (e?.code !== 'payment_timeout') await env.DB.prepare("UPDATE payments SET status = 'FAILED', updated_at = ? WHERE id = ?").bind(now(), id).run();
    throw e;
  }
  if (!result?.transId) {
    await env.DB.prepare("UPDATE payments SET status = 'FAILED', updated_at = ? WHERE id = ?").bind(now(), id).run();
    throw new HttpError(502, 'The payment could not be started. Please try again.', 'payment_provider');
  }
  await env.DB.prepare('UPDATE payments SET reference = ?, updated_at = ? WHERE id = ?').bind(result.transId, now(), id).run();
  return created({
    payment: { id, reference: result.transId, plan: planId, amount: plan.amount, status: 'PENDING', checkout: mode, link: mode === 'link' ? result.link : undefined },
  });
}

// When a payment's time ends. A year paid while the student is still in the
// free month counts from the day they joined, so the free month is the year's
// first month. Anything else is added to the end of the access they have (or
// to today, once it has run out), so a month paid in the free month starts
// when the free month ends.
function paidUntil(user, planId) {
  const length = currentPlans()[planId].days * 86_400_000;
  const freeEnd = user ? trialUntil(user) : null;
  const inFreeMonth = freeEnd && now() < freeEnd && !(user.pro_until > freeEnd);
  if (planId === 'year' && inFreeMonth) return user.created_at + length;
  return Math.max(now(), user ? accessEnd(user) : 0) + length;
}

// Grants access exactly once per successful payment, after the provider confirms
// the amount and that the payment is this one. Called from polling, the webhook
// and reconcilePayments.
async function settle(env, payment, providerData) {
  const status = providerData?.status;
  if (!status || payment.applied) return payment.status;
  if (status === 'SUCCESSFUL') {
    const other = providerData.externalId && providerData.externalId !== plain(payment.id);
    if (Number(providerData.amount) < payment.amount || other) {
      console.error('payment_mismatch', payment.id);
      await env.DB.prepare("UPDATE payments SET status = 'REVIEW', updated_at = ? WHERE id = ?").bind(now(), payment.id).run();
      return 'REVIEW';
    }
    const claim = await env.DB.prepare("UPDATE payments SET status = 'SUCCESSFUL', applied = 1, updated_at = ? WHERE id = ? AND applied = 0")
      .bind(now(), payment.id)
      .run();
    if (claim.meta.changes === 1) {
      const user = await env.DB.prepare('SELECT role, created_at, pro_until FROM users WHERE id = ?').bind(payment.user_id).first();
      const until = paidUntil(user, payment.plan);
      await env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(until, now(), payment.user_id).run();
      await notify(env, payment.user_id, 'payment', 'Payment received', `${currentPlans()[payment.plan].label}: ${payment.amount} FCFA. Klass8 is open until ${new Date(until).toLocaleDateString('en-GB')}.`, { reference: payment.reference });
    }
    return 'SUCCESSFUL';
  }
  if (status === 'FAILED' || status === 'EXPIRED') {
    await env.DB.prepare('UPDATE payments SET status = ?, updated_at = ? WHERE id = ? AND applied = 0').bind(status, now(), payment.id).run();
    return status;
  }
  return 'PENDING'; // CREATED (page not used yet) or PENDING (being paid)
}

// Fapshi answers at most 6 status checks a minute for one payment, and the app
// asks every few seconds: Fapshi is asked at most every 12 seconds per payment
// and the stored status is given in between.
const lastAsked = new Map();
function mayAsk(id) {
  if (now() - (lastAsked.get(id) || 0) < 12_000) return false;
  if (lastAsked.size > 5000) lastAsked.clear();
  lastAsked.set(id, now());
  return true;
}

// The latest word from Fapshi on a pending payment; a failure to reach Fapshi
// (or a payment Fapshi does not know yet) leaves it pending.
async function refresh(env, payment) {
  if (payment.status !== 'PENDING' || payment.applied || !mayAsk(payment.id)) return payment.status;
  try {
    if (!payment.reference) {
      const found = (await paymentsOf(env, plain(payment.user_id))).find((t) => t.externalId === plain(payment.id));
      if (!found?.transId) return payment.status;
      await env.DB.prepare('UPDATE payments SET reference = ?, updated_at = ? WHERE id = ?').bind(found.transId, now(), payment.id).run();
      payment = { ...payment, reference: found.transId };
    }
    return await settle(env, payment, await paymentStatus(env, payment.reference));
  } catch (e) {
    console.error('payment_check_failed', payment.id, e?.code || e?.message);
    return payment.status;
  }
}

export async function getPayment(request, env, id) {
  const user = await requireUser(request, env);
  const payment = await env.DB.prepare('SELECT * FROM payments WHERE id = ? AND user_id = ?').bind(id, user.id).first();
  if (!payment) throw new HttpError(404, 'Payment not found.', 'not_found');
  const status = await refresh(env, payment);
  const { reference } = await env.DB.prepare('SELECT reference FROM payments WHERE id = ?').bind(id).first(); // found by a look-up
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
  return ok({ payment: { id: payment.id, reference, plan: payment.plan, amount: payment.amount, status }, user: publicUser(fresh, env), pro: isPro(fresh, env) });
}

// Fapshi sends each webhook once and never again, so payments still open are
// checked every few minutes until they end: a payment page expires after 24
// hours, a request on the phone ends as paid or failed.
export async function reconcilePayments(env) {
  await loadSettings(env);
  if (!paymentsConfigured(env)) return;
  const { results } = await env.DB.prepare(
    "SELECT * FROM payments WHERE status = 'PENDING' AND applied = 0 AND created_at > ? ORDER BY created_at LIMIT 40"
  )
    .bind(now() - 3 * 86_400_000)
    .all();
  for (const p of results) await refresh(env, p);
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

// Where Fapshi's payment page sends the student once they have paid.
const RETURN_PAGE = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Klass8 payment</title>
<style>
body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#f6f8fb;color:#16202c}
main{max-width:30rem;margin:0 auto;padding:3rem 1.25rem}
h1{font-size:1.4rem;margin:0 0 .75rem}
p{line-height:1.55;margin:0 0 1rem}
.fr{color:#475569;border-top:1px solid #dde3ea;padding-top:1rem}
</style></head>
<body><main>
<h1>Thank you. Go back to Klass8.</h1>
<p>Your full course opens by itself as soon as your mobile money operator confirms the payment, usually within a minute. You can close this page.</p>
<p class="fr">Merci. Retournez dans Klass8 : votre cours complet s'ouvre tout seul dès que votre opérateur confirme le paiement, en général en moins d'une minute. Vous pouvez fermer cette page.</p>
</main></body></html>`;

export async function returnPage() {
  return new Response(RETURN_PAGE, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

// ---------- vouchers (school licences) ----------
export async function redeemVoucher(request, env) {
  const user = await requireUser(request, env);
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
  const base = Math.max(now(), accessEnd(user));
  const until = base + v.days * 86_400_000;
  await env.DB.batch([
    env.DB.prepare('INSERT INTO voucher_redemptions (code_hash, user_id, redeemed_at) VALUES (?, ?, ?)').bind(hash, user.id, now()),
    env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(until, now(), user.id),
  ]);
  await notify(env, user.id, 'payment', 'Code redeemed', `${v.label || 'School licence'}: Klass8 is open until ${new Date(until).toLocaleDateString('en-GB')}.`);
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
  return ok({ user: publicUser(fresh, env), pro: true, label: v.label });
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
