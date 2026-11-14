// "Invite and earn", for every account: the person's promo code, who joined
// with it, what they earned, and withdrawals to mobile money.
import { HttpError, created, json, limit, now, ok, readJson } from '../lib/http.js';
import { uuid } from '../lib/crypto.js';
import { int, phone } from '../lib/validate.js';
import { requireUser } from '../lib/auth.js';
import { applyCode, balance, codeFor, programme, rateOf } from '../lib/partners.js';
import { notify } from '../lib/notify.js';
import { raise } from '../lib/monitor.js';

const DAY = 86_400_000;
const firstName = (n) => String(n || '').split(' ')[0];
const initial = (n) => {
  const parts = String(n || '').trim().split(/\s+/);
  return parts.length > 1 ? `${parts[0]} ${parts[parts.length - 1][0]}.` : parts[0] || 'Someone';
};

// GET /v1/partner/programme  the rules, for the public website (no account needed).
export async function publicProgramme() {
  const p = programme();
  return json({ on: p.on, rate: p.rate, months: p.months, minWithdraw: p.minWithdraw, holdDays: p.holdDays, bonusDays: p.bonusDays, fee: 3 }, 200, { 'cache-control': 'public, max-age=120' });
}

// GET /v1/partner
export async function myPartner(request, env) {
  const user = await requireUser(request, env);
  const p = programme();
  const code = await codeFor(env, user);
  const { results: people } = await env.DB.prepare(
    `SELECT r.created_at AS joinedAt, r.ends_at AS endsAt, u.name, u.role,
            (SELECT COALESCE(SUM(c.amount), 0) FROM commissions c WHERE c.referred_id = r.user_id AND c.referrer_id = r.referrer_id AND c.cancelled_at IS NULL) AS earned,
            (SELECT COUNT(*) FROM commissions c WHERE c.referred_id = r.user_id AND c.referrer_id = r.referrer_id AND c.cancelled_at IS NULL) AS payments
     FROM referrals r LEFT JOIN users u ON u.id = r.user_id WHERE r.referrer_id = ? ORDER BY r.created_at DESC LIMIT 200`
  )
    .bind(user.id)
    .all();
  const { results: earnings } = await env.DB.prepare(
    `SELECT c.id, c.paid, c.net, c.rate, c.amount, c.available_at AS availableAt, c.cancelled_at AS cancelledAt, c.cancel_reason AS cancelReason, c.created_at AS createdAt, u.name
     FROM commissions c LEFT JOIN users u ON u.id = c.referred_id WHERE c.referrer_id = ? ORDER BY c.created_at DESC LIMIT 100`
  )
    .bind(user.id)
    .all();
  const { results: withdrawals } = await env.DB.prepare(
    'SELECT id, amount, phone, status, reason, reference, created_at AS createdAt, decided_at AS decidedAt FROM withdrawals WHERE user_id = ? ORDER BY created_at DESC LIMIT 50'
  )
    .bind(user.id)
    .all();
  const ref = await env.DB.prepare('SELECT r.code, u.name FROM referrals r LEFT JOIN users u ON u.id = r.referrer_id WHERE r.user_id = ?').bind(user.id).first();
  return ok({
    code,
    link: `https://klass8.ebenesaid.com/download/?code=${code}`,
    paused: Boolean(user.ref_paused),
    programme: { ...p, rate: rateOf(user), usualRate: p.rate },
    balance: await balance(env, user.id),
    stats: { signups: people.length, paying: people.filter((x) => x.payments > 0).length },
    people: people.map((x) => ({ name: x.name ? initial(x.name) : 'Deleted account', role: x.role, joinedAt: x.joinedAt, endsAt: x.endsAt, earned: x.earned, payments: x.payments })),
    earnings: earnings.map((e) => ({ ...e, name: e.name ? initial(e.name) : 'Deleted account' })),
    withdrawals,
    invitedBy: ref ? { name: firstName(ref.name), code: ref.code } : null,
    canAddCode: !ref && now() - (user.created_at || 0) <= p.applyDays * DAY,
    payoutPhone: user.phone,
  });
}

// POST /v1/partner/apply { code }  for someone who joined without the code they were given.
export async function applyPromo(request, env) {
  const user = await requireUser(request, env);
  await limit(env.WRITE_LIMITER, `promo:${user.id}`, 'Please wait a moment.');
  const b = await readJson(request);
  return ok(await applyCode(env, user, b.code));
}

// POST /v1/partner/withdraw { amount, phone }
export async function withdraw(request, env) {
  const user = await requireUser(request, env);
  await limit(env.WRITE_LIMITER, `withdraw:${user.id}`, 'Please wait a moment.');
  if (user.ref_paused) throw new HttpError(403, 'Your earnings are on hold. Contact Klass8 to find out why.', 'paused');
  const b = await readJson(request);
  const p = programme();
  const amount = int(b.amount, 'Amount', { min: 1, max: 10_000_000 });
  const to = phone(b.phone ?? user.phone, 'Mobile money number');
  const bal = await balance(env, user.id);
  if (amount < p.minWithdraw) throw new HttpError(400, `The smallest withdrawal is ${p.minWithdraw.toLocaleString('en-US')} FCFA.`, 'below_minimum');
  if (amount > bal.available) throw new HttpError(400, `You can withdraw up to ${bal.available.toLocaleString('en-US')} FCFA now.`, 'too_much');
  const id = uuid();
  await env.DB.prepare("INSERT INTO withdrawals (id, user_id, amount, phone, status, created_at) VALUES (?, ?, ?, ?, 'requested', ?)").bind(id, user.id, amount, to, now()).run();
  await notify(env, user.id, 'partner', 'Withdrawal requested', `We received your request to withdraw ${amount.toLocaleString('en-US')} FCFA to ${to.replace(/^237/, '+237 ')}. Klass8 sends it by mobile money, usually within 3 working days, and tells you here when it is sent.`);
  await raise(env, {
    key: `partner:withdraw:${id}`,
    kind: 'partner',
    level: 'info',
    title: 'A partner asked to withdraw',
    detail: `${user.name} asked for ${amount.toLocaleString('en-US')} FCFA to ${to}.`,
    action: 'Open Partners, send the money by mobile money, then mark it paid with the transaction number.',
  });
  return created({ id, balance: await balance(env, user.id) });
}

// POST /v1/partner/withdrawals/:id/cancel  while it has not been paid.
export async function cancelWithdrawal(request, env, id) {
  const user = await requireUser(request, env);
  const r = await env.DB.prepare("UPDATE withdrawals SET status = 'cancelled', decided_at = ?, decided_by = 'self' WHERE id = ? AND user_id = ? AND status = 'requested'").bind(now(), id, user.id).run();
  if (!r.meta.changes) throw new HttpError(400, 'This withdrawal can no longer be cancelled.', 'not_open');
  await env.DB.prepare("UPDATE alerts SET resolved_at = ?, resolved_by = 'cancelled' WHERE key = ? AND resolved_at IS NULL").bind(now(), `partner:withdraw:${id}`).run();
  return ok({ balance: await balance(env, user.id) });
}
