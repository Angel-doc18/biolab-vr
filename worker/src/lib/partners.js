// The partner programme. Every account can have a promo code; people who join
// with it are linked to its owner, and for each payment they make the owner
// earns a share of what Klass8 receives after Fapshi's fee, for as long as the
// founders decide (for ever, or a number of months). Earnings can be withdrawn
// to mobile money after the refund window, once they reach the minimum.
import { HttpError, now } from './http.js';
import { randomCode, uuid } from './crypto.js';
import { setting } from './settings.js';
import { notify } from './notify.js';

const DAY = 86_400_000;
export const FAPSHI_FEE = 0.03;

const num = (key, fallback, min, max) => {
  const n = Number(setting(key));
  return Number.isFinite(n) && n >= min && n <= max ? n : fallback;
};

// The programme's rules, as the CEO or CTO set them.
export function programme() {
  return {
    on: setting('ref_on') !== 'off',
    rate: num('ref_rate', 20, 0, 90), // % of what Klass8 keeps after Fapshi's fee
    months: num('ref_months', 12, 0, 120), // 0 = for ever
    minWithdraw: num('ref_min', 1000, 100, 1_000_000),
    holdDays: num('ref_hold_days', 7, 0, 60), // the refund window
    bonusDays: num('ref_bonus_days', 0, 0, 90), // extra free days for whoever joins with a code
    applyDays: 14, // how long after joining a code can still be added
  };
}

export const rateOf = (u) => (u?.ref_rate != null ? Number(u.ref_rate) : programme().rate);
const fcfa = (n) => `${Math.round(n).toLocaleString('en-US')} FCFA`;
const day = (t) => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// The person's code, made the first time it is asked for: letters from their
// name and four digits, easy to read out (no 0/O or 1/I).
export async function codeFor(env, user) {
  if (user.ref_code) return user.ref_code;
  const letters = String(user.name || 'K8')
    .normalize('NFD')
    .replace(/[^A-Za-z]/g, '')
    .toUpperCase()
    .replace(/[IO]/g, '')
    .slice(0, 4) || 'KLAS';
  for (let i = 0; i < 8; i++) {
    const code = `${letters}${randomCode(4, '23456789')}`;
    const r = await env.DB.prepare('UPDATE users SET ref_code = ? WHERE id = ? AND ref_code IS NULL AND NOT EXISTS (SELECT 1 FROM users WHERE ref_code = ?)').bind(code, user.id, code).run();
    if (r.meta.changes === 1) return code;
    const again = await env.DB.prepare('SELECT ref_code FROM users WHERE id = ?').bind(user.id).first();
    if (again?.ref_code) return again.ref_code;
  }
  throw new HttpError(503, 'Could not make a code just now. Try again.', 'try_again');
}

export const cleanCode = (raw) =>
  String(raw || '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 12);

// Links a new account to the owner of a code. Used when joining and, for a
// short while after, from the Invite page.
export async function applyCode(env, user, raw) {
  const p = programme();
  if (!p.on) throw new HttpError(400, 'Promo codes are paused at the moment.', 'programme_off');
  const code = cleanCode(raw);
  if (code.length < 4) throw new HttpError(400, 'Enter the promo code you were given.', 'invalid_input');
  const owner = await env.DB.prepare('SELECT id, name, blocked_at, ref_paused FROM users WHERE ref_code = ? AND deleted_at IS NULL').bind(code).first();
  if (!owner || owner.blocked_at || owner.ref_paused) throw new HttpError(400, 'This promo code does not exist. Check it with the person who gave it to you.', 'invalid_code');
  if (owner.id === user.id) throw new HttpError(400, 'You cannot use your own promo code.', 'own_code');
  const already = await env.DB.prepare('SELECT referrer_id FROM referrals WHERE user_id = ?').bind(user.id).first();
  if (already) throw new HttpError(400, 'Your account already has a promo code.', 'already_referred');
  if (now() - (user.created_at || 0) > p.applyDays * DAY) throw new HttpError(400, `A promo code can only be added in the first ${p.applyDays} days after joining.`, 'too_late');
  // Someone the new account invited cannot be the one who invited them.
  const loop = await env.DB.prepare('SELECT 1 FROM referrals WHERE user_id = ? AND referrer_id = ?').bind(owner.id, user.id).first();
  if (loop) throw new HttpError(400, 'You cannot use the code of someone who joined with yours.', 'loop');
  const t = now();
  await env.DB.prepare('INSERT INTO referrals (user_id, referrer_id, code, created_at, ends_at) VALUES (?, ?, ?, ?, ?)')
    .bind(user.id, owner.id, code, t, p.months ? t + p.months * 30 * DAY : null)
    .run();
  if (p.bonusDays > 0 && user.role === 'student') {
    const fresh = await env.DB.prepare('SELECT created_at, pro_until FROM users WHERE id = ?').bind(user.id).first();
    const base = Math.max(t, fresh.pro_until || 0, (fresh.created_at || t) + 30 * DAY);
    await env.DB.prepare('UPDATE users SET pro_until = ?, updated_at = ? WHERE id = ?').bind(base + p.bonusDays * DAY, t, user.id).run();
    await notify(env, user.id, 'partner', 'Promo code added', `You joined with ${owner.name.split(' ')[0]}'s code, so ${p.bonusDays} extra free days were added to your account.`);
  } else {
    await notify(env, user.id, 'partner', 'Promo code added', `You joined with ${owner.name.split(' ')[0]}'s code.`);
  }
  const first = String(user.name || 'Someone').split(' ')[0];
  await notify(
    env,
    owner.id,
    'partner',
    'Someone joined with your code',
    `${first} joined Klass8 with your promo code ${code}. Each time they pay, you earn ${rateOf(owner)}% of what Klass8 receives after Fapshi's fee${p.months ? `, for ${p.months} months` : ''}.`
  );
  return { referrerName: owner.name.split(' ')[0] };
}

// Called once for each payment that went through: the share for whoever
// invited the payer.
export async function earnFromPayment(env, payment) {
  try {
    const ref = await env.DB.prepare('SELECT * FROM referrals WHERE user_id = ?').bind(payment.user_id).first();
    if (!ref || (ref.ends_at && ref.ends_at < now())) return;
    const owner = await env.DB.prepare('SELECT id, name, ref_rate, ref_paused, blocked_at, deleted_at FROM users WHERE id = ?').bind(ref.referrer_id).first();
    const p = programme();
    if (!owner || owner.deleted_at || owner.blocked_at || owner.ref_paused || !p.on) return;
    const rate = rateOf(owner);
    const net = Math.round(payment.amount * (1 - FAPSHI_FEE));
    const amount = Math.floor((net * rate) / 100);
    if (amount <= 0) return;
    const t = now();
    const availableAt = t + p.holdDays * DAY;
    const r = await env.DB.prepare(
      'INSERT OR IGNORE INTO commissions (id, referrer_id, referred_id, payment_id, paid, net, rate, amount, available_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    )
      .bind(uuid(), owner.id, payment.user_id, payment.id, payment.amount, net, rate, amount, availableAt, t)
      .run();
    if (r.meta.changes !== 1) return;
    const payer = await env.DB.prepare('SELECT name FROM users WHERE id = ?').bind(payment.user_id).first();
    await notify(
      env,
      owner.id,
      'partner',
      `You earned ${fcfa(amount)}`,
      `${String(payer?.name || 'Someone').split(' ')[0]} paid ${fcfa(payment.amount)}. After Fapshi's 3% fee Klass8 received ${fcfa(net)}, and your ${rate}% is ${fcfa(amount)}. ${p.holdDays ? `You can withdraw it from ${day(availableAt)}, after the refund window.` : 'You can withdraw it now.'}`
    );
  } catch (e) {
    console.error('commission_failed', payment?.id, e?.message);
  }
}

// What a person has earned and can withdraw.
export async function balance(env, userId) {
  const t = now();
  const c = await env.DB.prepare(
    `SELECT COALESCE(SUM(CASE WHEN cancelled_at IS NULL THEN amount END), 0) AS earned,
            COALESCE(SUM(CASE WHEN cancelled_at IS NULL AND available_at <= ? THEN amount END), 0) AS ready,
            COALESCE(SUM(CASE WHEN cancelled_at IS NULL AND available_at > ? THEN amount END), 0) AS held
     FROM commissions WHERE referrer_id = ?`
  )
    .bind(t, t, userId)
    .first();
  const w = await env.DB.prepare(
    `SELECT COALESCE(SUM(CASE WHEN status = 'paid' THEN amount END), 0) AS paidOut,
            COALESCE(SUM(CASE WHEN status = 'requested' THEN amount END), 0) AS requested
     FROM withdrawals WHERE user_id = ?`
  )
    .bind(userId)
    .first();
  const available = Math.max(0, (c?.ready || 0) - (w?.paidOut || 0) - (w?.requested || 0));
  return { earned: c?.earned || 0, available, held: c?.held || 0, paidOut: w?.paidOut || 0, requested: w?.requested || 0 };
}

// Everyone who invited people, with how they are doing.
export async function leaderboard(env, sort = 'signups', limit = 100) {
  const order = { signups: 'signups DESC, paying DESC', paying: 'paying DESC, signups DESC', earned: 'earned DESC, signups DESC' }[sort] || 'signups DESC';
  const { results } = await env.DB.prepare(
    `SELECT u.id, u.name, u.role, u.partner_kind AS partnerKind, u.ref_code AS code, u.ref_rate AS ownRate, u.ref_paused AS paused, u.phone,
            (SELECT COUNT(*) FROM referrals r WHERE r.referrer_id = u.id) AS signups,
            (SELECT COUNT(DISTINCT c.referred_id) FROM commissions c WHERE c.referrer_id = u.id AND c.cancelled_at IS NULL) AS paying,
            (SELECT COALESCE(SUM(c.amount), 0) FROM commissions c WHERE c.referrer_id = u.id AND c.cancelled_at IS NULL) AS earned,
            (SELECT COALESCE(SUM(w.amount), 0) FROM withdrawals w WHERE w.user_id = u.id AND w.status = 'paid') AS paidOut
     FROM users u WHERE u.deleted_at IS NULL AND u.ref_code IS NOT NULL
     ORDER BY ${order} LIMIT ?`
  )
    .bind(limit)
    .all();
  const rate = programme().rate;
  return results.map((r) => ({ ...r, paused: Boolean(r.paused), rate: r.ownRate != null ? Number(r.ownRate) : rate, ownRate: r.ownRate != null ? Number(r.ownRate) : null }));
}
