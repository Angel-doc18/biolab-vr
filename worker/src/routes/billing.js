import { HttpError, created, limit, now, ok, readJson } from '../lib/http.js';
import { accessEnd, freeDays, isPro, paywallOn, publicUser, requireUser, trialUntil } from '../lib/auth.js';
import { sha256, uuid } from '../lib/crypto.js';
import { int, oneOf, phone, str } from '../lib/validate.js';
import { directPay, payLink, paymentStatus, paymentsConfigured, paymentsOf, verifyFapshiWebhook } from '../lib/providers.js';
import { notify } from '../lib/notify.js';
import { currentPlans, loadSettings, setting } from '../lib/settings.js';
import { balance, earnFromPayment } from '../lib/partners.js';

// A monthly plan can be paid for up to 11 months at once (12 is the yearly plan).
export const MAX_MONTHS = 11;
// The smallest amount Fapshi takes in one payment.
const MIN_MOMO = 100;

// The platform charges. Prices are decided on the server, never by the client:
// an admin sets them in the app (lib/settings.js), 350 and 3,500 FCFA until then.

// How students pay: 'prompt' (Fapshi Direct Pay, a request appears on the
// phone) once Fapshi has switched Direct Pay on for the account
// (FAPSHI_DIRECT_PAY=on), otherwise 'link' (Fapshi's own payment page).
const checkoutMode = (env) => (env.FAPSHI_DIRECT_PAY === 'on' ? 'prompt' : 'link');
const plain = (id) => id.replace(/[^a-zA-Z0-9]/g, '');
const publicBase = (request, env) => (env.PUBLIC_API_URL || new URL(request.url).origin).replace(/\/+$/, '');

export async function plans(request, env) {
  return ok({ plans: currentPlans(), maxMonths: MAX_MONTHS, paymentsOpen: paymentsConfigured(env), checkout: checkoutMode(env), paywall: paywallOn(env) });
}

// The payment is written down before Fapshi is asked, so one whose request
// timed out (Fapshi may still have made it) can be found and settled later.
// { plan, months? (1 to 11, monthly plan only), for?, self?, useEarnings?, phone?, medium? }
// Earnings from the partner programme can pay all of it (no mobile money at
// all) or part of it (mobile money pays the rest; the earnings are held until
// the payment ends, and given back if it fails).
export async function initiatePayment(request, env) {
  const user = await requireUser(request, env);
  await limit(env.WRITE_LIMITER, `pay:${user.id}`, 'Please wait a moment before trying again.');
  const b = await readJson(request);
  const PLANS = currentPlans();
  const planId = oneOf(b.plan, 'Plan', Object.keys(PLANS));
  const plan = PLANS[planId];
  const months = planId === 'month' ? int(b.months ?? 1, 'Months', { min: 1, max: MAX_MONTHS }) : 1;
  const mode = checkoutMode(env);
  if (setting('payments_off') === 'on') throw new HttpError(503, 'Payments are paused for a short while. Please try again later; your account stays open meanwhile.', 'payments_paused');
  // A parent can pay for their children in the same payment (and for
  // themselves or not). Only children linked to this parent can be chosen.
  const forIds = Array.isArray(b.for) ? [...new Set(b.for.map(String))].slice(0, 30) : [];
  if (forIds.length && user.role !== 'parent') throw new HttpError(403, 'Only a parent can pay for other accounts.', 'forbidden');
  if (forIds.length) {
    const marks = forIds.map(() => '?').join(', ');
    const { results: linked } = await env.DB.prepare(`SELECT l.student_id FROM parent_links l JOIN users u ON u.id = l.student_id WHERE l.parent_id = ? AND u.deleted_at IS NULL AND l.student_id IN (${marks})`)
      .bind(user.id, ...forIds)
      .all();
    if (linked.length !== forIds.length) throw new HttpError(400, 'One of these children is no longer linked to your account.', 'not_linked');
  }
  const self = forIds.length ? b.self === true : true;
  const accounts = [...(self ? [user.id] : []), ...forIds];
  if (!accounts.length) throw new HttpError(400, 'Choose who you are paying for.', 'invalid_input');
  const total = plan.amount * months * accounts.length;
  // Earnings first, mobile money for the rest (Fapshi takes at least 100 FCFA).
  let credit = 0;
  if (b.useEarnings === true) {
    const available = (await balance(env, user.id)).available;
    credit = Math.min(available, total);
    if (credit < total && total - credit < MIN_MOMO) credit = Math.max(0, total - MIN_MOMO);
  }
  const cash = total - credit;
  if (cash > 0 && !paymentsConfigured(env)) throw new HttpError(503, 'Mobile money payments are not open yet.', 'payments_unavailable');
  const id = uuid();
  const label = `${months > 1 ? `${months} months` : plan.label}${accounts.length > 1 ? ` x ${accounts.length}` : ''}`;
  await env.DB.prepare(
    `INSERT INTO payments (id, user_id, provider, reference, plan, amount, phone, operator, status, applied, created_at, updated_at, months, credit)
     VALUES (?, ?, ?, NULL, ?, ?, ?, ?, 'PENDING', 0, ?, ?, ?, ?)`
  )
    .bind(id, user.id, cash ? 'fapshi' : 'earnings', planId, total, '', null, now(), now(), months, credit)
    .run();
  if (forIds.length) await env.DB.batch(accounts.map((uid) => env.DB.prepare('INSERT INTO payment_for (payment_id, user_id) VALUES (?, ?)').bind(id, uid)));
  if (credit) {
    await env.DB.prepare('INSERT INTO withdrawals (id, user_id, amount, phone, status, created_at, payment_id) VALUES (?, ?, ?, ?, ?, ?, ?)')
      .bind(uuid(), user.id, credit, '', cash ? 'held' : 'spent', now(), id)
      .run();
  }

  // Paid in full from earnings: open at once.
  if (!cash) {
    const ref = `EARNINGS-${plain(id).slice(0, 10).toUpperCase()}`;
    await env.DB.prepare('UPDATE payments SET reference = ?, updated_at = ? WHERE id = ?').bind(ref, now(), id).run();
    await applyPayment(env, await env.DB.prepare('SELECT * FROM payments WHERE id = ?').bind(id).first(), { fromEarnings: true });
    const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
    return created({ payment: { id, reference: ref, plan: planId, months, amount: total, credit, cash: 0, accounts: accounts.length, status: 'SUCCESSFUL' }, user: publicUser(fresh, env), pro: isPro(fresh, env) });
  }

  const ph = mode === 'prompt' ? phone(b.phone, 'Mobile money number') : '';
  const medium = mode === 'prompt' ? oneOf(b.medium, 'Payment method', ['mobile money', 'orange money']) : null;
  await env.DB.prepare('UPDATE payments SET phone = ?, operator = ? WHERE id = ?').bind(ph, medium, id).run();
  const ask = { amount: cash, userId: plain(user.id), externalId: plain(id), message: `Klass8 ${label}` };
  let result;
  try {
    result =
      mode === 'prompt'
        ? await directPay(env, { ...ask, phone: ph, medium, name: user.name })
        : await payLink(env, { ...ask, redirectUrl: `${publicBase(request, env)}/v1/billing/return` });
  } catch (e) {
    // Refused outright: nothing was made at Fapshi. A time-out stays pending
    // and is looked up by reconcilePayments.
    if (e?.code !== 'payment_timeout') await failPayment(env, id, 'FAILED');
    throw e;
  }
  if (!result?.transId) {
    await failPayment(env, id, 'FAILED');
    throw new HttpError(502, 'The payment could not be started. Please try again.', 'payment_provider');
  }
  await env.DB.prepare('UPDATE payments SET reference = ?, updated_at = ? WHERE id = ?').bind(result.transId, now(), id).run();
  return created({
    payment: { id, reference: result.transId, plan: planId, months, amount: total, credit, cash, accounts: accounts.length, status: 'PENDING', checkout: mode, link: mode === 'link' ? result.link : undefined },
  });
}

// A payment that did not go through: earnings held for it go back to the balance.
async function failPayment(env, id, status) {
  await env.DB.prepare('UPDATE payments SET status = ?, updated_at = ? WHERE id = ? AND applied = 0').bind(status, now(), id).run();
  await env.DB.prepare("UPDATE withdrawals SET status = 'cancelled', decided_at = ? WHERE payment_id = ? AND status = 'held'").bind(now(), id).run();
}

// When a payment's time ends. A year paid while the student is still in the
// free month counts from the day they joined, so the free month is the year's
// first month. Anything else is added to the end of the access they have (or
// to today, once it has run out), so a month paid in the free month starts
// when the free month ends.
function paidUntil(user, planId, months = 1) {
  const length = currentPlans()[planId].days * Math.max(1, months) * 86_400_000;
  const freeEnd = user ? trialUntil(user) : null;
  const inFreeMonth = freeEnd && now() < freeEnd && !(user.pro_until > freeEnd);
  if (planId === 'year' && inFreeMonth) return user.created_at + length;
  return Math.max(now(), user ? accessEnd(user) : 0) + length;
}

const planText = (payment) => (payment.plan === 'month' && payment.months > 1 ? `Platform charges, ${payment.months} months` : currentPlans()[payment.plan].label);
const fcfaText = (n) => `${Math.round(n).toLocaleString('en-US')} FCFA`;

// Opens every account a payment is for, once (the payment must already be
// claimed as applied). Partners earn on the part paid in money, not earnings.
async function applyPayment(env, payment, { fromEarnings = false } = {}) {
  if (fromEarnings) {
    const claim = await env.DB.prepare("UPDATE payments SET status = 'SUCCESSFUL', applied = 1, updated_at = ? WHERE id = ? AND applied = 0").bind(now(), payment.id).run();
    if (claim.meta.changes !== 1) return;
  }
  await env.DB.prepare("UPDATE withdrawals SET status = 'spent', decided_at = ? WHERE payment_id = ? AND status = 'held'").bind(now(), payment.id).run();
  const months = payment.months || 1;
  const credit = payment.credit || 0;
  const cash = payment.amount - credit;
  const how = credit ? (cash ? ` (${fcfaText(credit)} from your earnings, ${fcfaText(cash)} by mobile money)` : ' from your earnings') : '';
  const { results: targets } = await env.DB.prepare('SELECT user_id FROM payment_for WHERE payment_id = ?').bind(payment.id).all();
  if (!targets.length) {
    const user = await env.DB.prepare('SELECT role, created_at, pro_until FROM users WHERE id = ?').bind(payment.user_id).first();
    const until = paidUntil(user, payment.plan, months);
    await env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(until, now(), payment.user_id).run();
    await notify(env, payment.user_id, 'payment', 'Payment received', `${planText(payment)}: ${fcfaText(payment.amount)} paid${how}. Klass8 is open until ${new Date(until).toLocaleDateString('en-GB')}.`, { reference: payment.reference });
    if (cash > 0) await earnFromPayment(env, { ...payment, amount: cash });
    return;
  }
  // A parent's payment for their children (and maybe themselves).
  const unit = Math.round(cash / targets.length);
  const payer = await env.DB.prepare('SELECT name FROM users WHERE id = ?').bind(payment.user_id).first();
  const lines = [];
  for (const { user_id: uid } of targets) {
    const u = await env.DB.prepare('SELECT id, name, role, created_at, pro_until FROM users WHERE id = ? AND deleted_at IS NULL').bind(uid).first();
    if (!u) continue;
    const until = paidUntil(u, payment.plan, months);
    await env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(until, now(), uid).run();
    const day = new Date(until).toLocaleDateString('en-GB');
    lines.push(`${uid === payment.user_id ? 'you' : u.name.split(' ')[0]} until ${day}`);
    if (uid !== payment.user_id) {
      await notify(env, uid, 'payment', 'Your parent paid for Klass8', `${String(payer?.name || 'Your parent').split(' ')[0]} paid the platform charges for you: ${planText(payment)}. Everything is open until ${day}.`, { reference: payment.reference });
    }
    if (unit > 0) await earnFromPayment(env, { ...payment, user_id: uid, amount: unit }, `${payment.id}:${uid}`);
  }
  await notify(env, payment.user_id, 'payment', 'Payment received', `${planText(payment)} for ${targets.length} ${targets.length === 1 ? 'account' : 'accounts'}: ${fcfaText(payment.amount)}${how}. Klass8 is open for ${lines.join(', ')}.`, { reference: payment.reference });
}

// Grants access exactly once per successful payment, after the provider confirms
// the amount and that the payment is this one. Called from polling, the webhook
// and reconcilePayments.
async function settle(env, payment, providerData) {
  const status = providerData?.status;
  if (!status || payment.applied) return payment.status;
  if (status === 'SUCCESSFUL') {
    const other = providerData.externalId && providerData.externalId !== plain(payment.id);
    if (Number(providerData.amount) < payment.amount - (payment.credit || 0) || other) {
      console.error('payment_mismatch', payment.id);
      await env.DB.prepare("UPDATE payments SET status = 'REVIEW', updated_at = ? WHERE id = ?").bind(now(), payment.id).run();
      return 'REVIEW';
    }
    const claim = await env.DB.prepare("UPDATE payments SET status = 'SUCCESSFUL', applied = 1, updated_at = ? WHERE id = ? AND applied = 0")
      .bind(now(), payment.id)
      .run();
    if (claim.meta.changes === 1) await applyPayment(env, payment);
    return 'SUCCESSFUL';
  }
  if (status === 'FAILED' || status === 'EXPIRED') {
    await failPayment(env, payment.id, status);
    return status;
  }
  return 'PENDING'; // CREATED (page not used yet) or PENDING (being paid)
}

// When someone's time has ended (or ends within a few hours) and they have
// earnings from the partner programme, Klass8 renews by itself from them: a
// year when the earnings cover a year, otherwise a month. Not enough for a
// month: they are told how much their earnings can take off. Anyone can turn
// this off on their Invite page. Run every 15 minutes by server/main.js.
export async function autoRenewFromEarnings(env) {
  if (!paywallOn(env)) return { renewed: 0 };
  const PLANS = currentPlans();
  const soon = now() + 6 * 3600_000;
  const free = freeDays() * 86_400_000;
  const { results } = await env.DB.prepare(
    `SELECT id, name, role, created_at, pro_until FROM users
     WHERE deleted_at IS NULL AND blocked_at IS NULL AND is_admin = 0 AND ref_autopay = 1 AND role IN ('student', 'parent', 'teacher')
       AND MAX(COALESCE(pro_until, 0), created_at + ?) < ?
       AND EXISTS (SELECT 1 FROM commissions c WHERE c.referrer_id = users.id AND c.cancelled_at IS NULL)`
  )
    .bind(free, soon)
    .all();
  let renewed = 0;
  for (const u of results) {
    const bal = await balance(env, u.id);
    const planId = bal.available >= PLANS.year.amount ? 'year' : bal.available >= PLANS.month.amount ? 'month' : null;
    if (!planId) {
      // Not enough for a month: say once a week what the earnings can do.
      if (bal.available >= MIN_MOMO) {
        const told = await env.DB.prepare("SELECT 1 FROM notifications WHERE user_id = ? AND title = 'Use your earnings to pay' AND created_at > ?").bind(u.id, now() - 7 * 86_400_000).first();
        if (!told) {
          await notify(env, u.id, 'payment', 'Use your earnings to pay', `Your ${fcfaText(bal.available)} of earnings can pay part of your platform charges: choose "Use my earnings" when you pay, and pay the rest (${fcfaText(PLANS.month.amount - bal.available)} for a month) by mobile money.`);
        }
      }
      continue;
    }
    const amount = PLANS[planId].amount;
    const id = uuid();
    await env.DB.batch([
      env.DB.prepare(
        "INSERT INTO payments (id, user_id, provider, reference, plan, amount, phone, operator, status, applied, created_at, updated_at, months, credit) VALUES (?, ?, 'earnings', ?, ?, ?, '', NULL, 'PENDING', 0, ?, ?, 1, ?)"
      ).bind(id, u.id, `EARNINGS-${plain(id).slice(0, 10).toUpperCase()}`, planId, amount, now(), now(), amount),
      env.DB.prepare("INSERT INTO withdrawals (id, user_id, amount, phone, status, created_at, payment_id) VALUES (?, ?, ?, '', 'spent', ?, ?)").bind(uuid(), u.id, amount, now(), id),
    ]);
    await applyPayment(env, await env.DB.prepare('SELECT * FROM payments WHERE id = ?').bind(id).first(), { fromEarnings: true });
    renewed += 1;
  }
  return { renewed };
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
