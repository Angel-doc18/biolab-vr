// The partner programme, for admins: who brings the most people, each
// partner's share, withdrawals to pay, and the programme's rules (only the
// founder and the CTO change those and anyone's share).
import { HttpError, now, ok, readJson } from '../lib/http.js';
import { bool, int, str } from '../lib/validate.js';
import { requireAdmin, requireAdminCan } from '../lib/adminAuth.js';
import { currentPlans, saveSettings } from '../lib/settings.js';
import { balance, leaderboard, programme, rateOf } from '../lib/partners.js';
import { notify } from '../lib/notify.js';

const fcfa = (n) => `${Math.round(n).toLocaleString('en-US')} FCFA`;


// GET /v1/admin/partners?sort=signups|paying|earned
export async function listPartners(request, env) {
  await requireAdmin(request, env);
  const sort = new URL(request.url).searchParams.get('sort') || 'signups';
  const items = await leaderboard(env, sort, 100);
  const totals = await env.DB.prepare(
    `SELECT (SELECT COUNT(*) FROM users WHERE ref_code IS NOT NULL AND deleted_at IS NULL AND preview_of IS NULL) AS withCode,
            (SELECT COUNT(*) FROM users WHERE role = 'partner' AND deleted_at IS NULL AND preview_of IS NULL) AS partners,
            (SELECT COUNT(*) FROM referrals) AS signups,
            (SELECT COUNT(DISTINCT referred_id) FROM commissions WHERE cancelled_at IS NULL) AS paying,
            (SELECT COALESCE(SUM(amount), 0) FROM commissions WHERE cancelled_at IS NULL) AS earned,
            (SELECT COALESCE(SUM(amount), 0) FROM commissions WHERE cancelled_at IS NULL AND available_at > ?) AS held,
            (SELECT COALESCE(SUM(amount), 0) FROM withdrawals WHERE status = 'paid') AS paidOut,
            (SELECT COALESCE(SUM(amount), 0) FROM withdrawals WHERE status = 'requested') AS requested,
            (SELECT COUNT(*) FROM withdrawals WHERE status = 'requested') AS requests`
  )
    .bind(now())
    .first();
  return ok({ programme: programme(), monthPrice: currentPlans().month.amount, totals: { ...totals, owed: Math.max(0, totals.earned - totals.held - totals.paidOut) }, items });
}

// PUT /v1/admin/partners/settings { on?, rate?, months?, minWithdraw?, holdDays?, bonusDays?, tell? }
// Everyone with a code is told what changed, in plain words.
export async function putProgramme(request, env) {
  const admin = await requireAdminCan(request, env, 'owner');
  const b = await readJson(request);
  const before = programme();
  const c = {};
  if (b.on !== undefined) c.ref_on = bool(b.on, 'Programme on') ? 'on' : 'off';
  if (b.rate !== undefined) c.ref_rate = int(b.rate, 'Share', { min: 0, max: 90 });
  if (b.months !== undefined) c.ref_months = int(b.months, 'Months', { min: 0, max: 120 });
  if (b.minWithdraw !== undefined) c.ref_min = int(b.minWithdraw, 'Minimum withdrawal', { min: 100, max: 1_000_000 });
  if (b.holdDays !== undefined) c.ref_hold_days = int(b.holdDays, 'Waiting days', { min: 0, max: 60 });
  if (b.bonusDays !== undefined) c.ref_bonus_days = int(b.bonusDays, 'Extra free days', { min: 0, max: 90 });
  await saveSettings(env, c, admin.id || 'operator');
  const after = programme();
  const lines = [];
  if (after.on !== before.on) lines.push(after.on ? 'The partner programme is open again: promo codes work and payments earn again.' : 'The partner programme is paused: new promo codes cannot be used and new payments do not earn until it opens again. What you already earned stays yours.');
  if (after.rate !== before.rate) lines.push(`The usual share is now ${after.rate}% (it was ${before.rate}%) of what Klass8 receives after Fapshi's fee, for payments from today.`);
  if (after.months !== before.months) lines.push(after.months ? `You now earn for ${after.months} months after each person joins (it was ${before.months ? `${before.months} months` : 'for ever'}), for people who join from today.` : 'You now earn for as long as the people you invite keep paying, for people who join from today.');
  if (after.minWithdraw !== before.minWithdraw) lines.push(`The smallest withdrawal is now ${fcfa(after.minWithdraw)} (it was ${fcfa(before.minWithdraw)}).`);
  if (after.holdDays !== before.holdDays) lines.push(`New earnings can be withdrawn ${after.holdDays} days after the payment (it was ${before.holdDays} days).`);
  if (after.bonusDays !== before.bonusDays) lines.push(after.bonusDays ? `People who join with your code now get ${after.bonusDays} extra free days.` : 'People who join with a code no longer get extra free days.');
  if (lines.length && b.tell !== false) {
    const { results } = await env.DB.prepare('SELECT id, ref_rate FROM users WHERE ref_code IS NOT NULL AND deleted_at IS NULL').all();
    const t = now();
    for (let i = 0; i < results.length; i += 200) {
      await env.DB.batch(
        results.slice(i, i + 200).map((u) => {
          // Someone with their own share is not affected by the usual share.
          const mine = lines.filter((l) => !(u.ref_rate != null && l.startsWith('The usual share')));
          const text = mine.join(' ') || 'The partner programme rules changed. Your own share stays the same.';
          return env.DB.prepare("INSERT INTO notifications (id, user_id, kind, title, body, data, read, created_at) VALUES (lower(hex(randomblob(16))), ?, 'partner', 'Partner programme update', ?, NULL, 0, ?)").bind(u.id, text.slice(0, 500), t);
        })
      );
    }
  }
  return ok({ programme: after, told: lines.length });
}

async function partnerOf(env, id) {
  const u = await env.DB.prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL').bind(id).first();
  if (!u) throw new HttpError(404, 'This account no longer exists.', 'not_found');
  return u;
}

// GET /v1/admin/partners/:id
export async function getPartner(request, env, id) {
  await requireAdmin(request, env);
  const u = await partnerOf(env, id);
  const { results: people } = await env.DB.prepare(
    `SELECT r.user_id AS id, r.created_at AS joinedAt, r.ends_at AS endsAt, u.name, u.role,
            (SELECT COALESCE(SUM(c.amount), 0) FROM commissions c WHERE c.referred_id = r.user_id AND c.referrer_id = r.referrer_id AND c.cancelled_at IS NULL) AS earned
     FROM referrals r LEFT JOIN users u ON u.id = r.user_id WHERE r.referrer_id = ? ORDER BY r.created_at DESC LIMIT 200`
  )
    .bind(id)
    .all();
  const { results: earnings } = await env.DB.prepare(
    `SELECT c.id, c.paid, c.net, c.rate, c.amount, c.available_at AS availableAt, c.cancelled_at AS cancelledAt, c.cancel_reason AS cancelReason, c.created_at AS createdAt, u.name
     FROM commissions c LEFT JOIN users u ON u.id = c.referred_id WHERE c.referrer_id = ? ORDER BY c.created_at DESC LIMIT 100`
  )
    .bind(id)
    .all();
  const { results: withdrawals } = await env.DB.prepare('SELECT id, amount, phone, status, reason, reference, created_at AS createdAt, decided_at AS decidedAt, EXISTS(SELECT 1 FROM withdrawal_proofs p WHERE p.withdrawal_id = withdrawals.id) AS hasProof FROM withdrawals WHERE user_id = ? ORDER BY created_at DESC LIMIT 50').bind(id).all();
  return ok({
    partner: { id: u.id, name: u.name, role: u.role, partnerKind: u.partner_kind, phone: u.phone, email: u.email, code: u.ref_code, rate: rateOf(u), ownRate: u.ref_rate != null ? Number(u.ref_rate) : null, paused: Boolean(u.ref_paused), special: Boolean(u.special_partner), createdAt: u.created_at },
    programme: programme(),
    balance: await balance(env, id),
    people,
    earnings,
    withdrawals,
  });
}

// PATCH /v1/admin/partners/:id { rate (a number, or null for the usual share)?, paused?, reason? }
export async function patchPartner(request, env, id) {
  const admin = await requireAdmin(request, env);
  const b = await readJson(request);
  const u = await partnerOf(env, id);
  const before = rateOf(u);
  if (b.rate !== undefined) {
    await requireAdminCan(request, env, 'owner');
    const rate = b.rate === null ? null : int(b.rate, 'Share', { min: 0, max: 90 });
    await env.DB.prepare('UPDATE users SET ref_rate = ?, updated_at = ? WHERE id = ?').bind(rate, now(), id).run();
    const after = rate ?? programme().rate;
    if (after !== before) {
      await notify(env, id, 'partner', 'Your share changed', `From today you earn ${after}% (it was ${before}%) of what Klass8 receives after Fapshi's fee, each time someone you invited pays.`);
    }
  }
  if (b.paused !== undefined) {
    const paused = bool(b.paused, 'Paused');
    const reason = str(b.reason, 'Reason', { max: 300, optional: true });
    if (paused && !reason) throw new HttpError(400, 'Say why the earnings are put on hold. The partner will see it.', 'reason_required');
    await env.DB.prepare('UPDATE users SET ref_paused = ?, updated_at = ? WHERE id = ?').bind(paused ? 1 : 0, now(), id).run();
    if (paused !== Boolean(u.ref_paused)) {
      await notify(
        env,
        id,
        'partner',
        paused ? 'Your earnings are on hold' : 'Your earnings are open again',
        paused ? `Klass8 put your promo code and earnings on hold: ${reason} Your code does not work and you cannot withdraw until this is sorted out. Contact Klass8.` : 'Your promo code works again and you can withdraw what you have earned.'
      );
    }
  }
  if (b.special !== undefined) {
    await requireAdminCan(request, env, 'owner');
    const special = bool(b.special, 'Special partner');
    await env.DB.prepare('UPDATE users SET special_partner = ?, updated_at = ? WHERE id = ?').bind(special ? 1 : 0, now(), id).run();
    if (special !== Boolean(u.special_partner)) {
      await notify(
        env,
        id,
        'partner',
        special ? 'You are now a special partner' : 'Special partner access ended',
        special
          ? 'You can now see Klass8 as a student, a teacher and a parent, to show people every part of the app. Open Me and choose an account type.'
          : 'You can no longer switch to the student, teacher and parent views. Your promo code and earnings are unchanged.'
      );
    }
  }
  void admin;
  return getPartner(request, env, id);
}

// GET /v1/admin/withdrawals?status=requested|paid|rejected
export async function listWithdrawals(request, env) {
  await requireAdmin(request, env);
  const s = new URL(request.url).searchParams.get('status') || 'requested';
  const { results } = await env.DB.prepare(
    `SELECT w.id, w.amount, w.phone, w.status, w.reason, w.reference, w.created_at AS createdAt, w.decided_at AS decidedAt, u.id AS userId, u.name, u.role,
            EXISTS(SELECT 1 FROM withdrawal_proofs p WHERE p.withdrawal_id = w.id) AS hasProof
     FROM withdrawals w LEFT JOIN users u ON u.id = w.user_id WHERE (? = 'all' OR w.status = ?) ORDER BY w.created_at ${s === 'requested' ? 'ASC' : 'DESC'} LIMIT 200`
  )
    .bind(s, s)
    .all();
  return ok({ items: results });
}

async function openWithdrawal(env, id) {
  const w = await env.DB.prepare('SELECT * FROM withdrawals WHERE id = ?').bind(id).first();
  if (!w) throw new HttpError(404, 'This withdrawal no longer exists.', 'not_found');
  if (w.status !== 'requested') throw new HttpError(400, 'This withdrawal has already been dealt with.', 'not_open');
  return w;
}

// ---------- the screenshot of the payment ----------
// The founder or the CTO can add a screenshot of the mobile money payment, when
// marking a withdrawal paid or later, so the partner sees the money was sent.
const PROOF_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_PROOF = 1_200_000; // base64 characters, about 900 KB of image
const isOwner = (a) => a.role === 'ceo' || a.role === 'cto' || a.id === null;

function readProof(p) {
  if (p == null) return null;
  const mime = typeof p.mediaType === 'string' ? p.mediaType : '';
  const data = typeof p.base64 === 'string' ? p.base64.replace(/\s+/g, '') : '';
  if (!PROOF_TYPES.includes(mime)) throw new HttpError(400, 'The screenshot must be a JPEG, PNG or WebP picture.', 'invalid_input');
  if (!data || !/^[A-Za-z0-9+/]+={0,2}$/.test(data)) throw new HttpError(400, 'The screenshot could not be read. Choose it again.', 'invalid_input');
  if (data.length > MAX_PROOF) throw new HttpError(413, 'The screenshot is too large. Crop it to the payment message.', 'too_large');
  return { mime, data };
}

const saveProof = (env, id, proof, admin) =>
  env.DB.prepare('INSERT OR REPLACE INTO withdrawal_proofs (withdrawal_id, mime, data, added_by, created_at) VALUES (?, ?, ?, ?, ?)')
    .bind(id, proof.mime, proof.data, admin.id || 'operator', now())
    .run();

// PUT /v1/admin/withdrawals/:id/proof { mediaType, base64 }  for a withdrawal already paid.
export async function putProof(request, env, id) {
  const admin = await requireAdminCan(request, env, 'owner');
  const b = await readJson(request, MAX_PROOF + 4096);
  const proof = readProof(b);
  if (!proof) throw new HttpError(400, 'Choose the screenshot first.', 'invalid_input');
  const w = await env.DB.prepare('SELECT * FROM withdrawals WHERE id = ?').bind(id).first();
  if (!w) throw new HttpError(404, 'This withdrawal no longer exists.', 'not_found');
  if (w.status !== 'paid') throw new HttpError(400, 'Add the screenshot once the withdrawal is marked as paid.', 'not_paid');
  await saveProof(env, id, proof, admin);
  await notify(env, w.user_id, 'partner', 'Payment screenshot added', `Klass8 added the screenshot of the payment of ${fcfa(w.amount)} to your withdrawals. Open Invite and earn to see it.`);
  return ok({ saved: true });
}

// GET /v1/admin/withdrawals/:id/proof -> { mediaType, base64 }
export async function getProof(request, env, id) {
  await requireAdmin(request, env);
  const row = await env.DB.prepare('SELECT mime, data FROM withdrawal_proofs WHERE withdrawal_id = ?').bind(id).first();
  if (!row) throw new HttpError(404, 'There is no screenshot for this withdrawal.', 'not_found');
  return ok({ mediaType: row.mime, base64: row.data });
}

// POST /v1/admin/withdrawals/:id/paid { reference, proof? }  after sending the money by mobile money.
export async function markPaid(request, env, id) {
  const admin = await requireAdmin(request, env);
  const b = await readJson(request, MAX_PROOF + 4096);
  const reference = str(b.reference, 'Transaction number', { min: 3, max: 60 });
  const proof = readProof(b.proof);
  if (proof && !isOwner(admin)) throw new HttpError(403, 'Only the founder or the CTO can add the payment screenshot.', 'forbidden');
  const w = await openWithdrawal(env, id);
  await env.DB.prepare("UPDATE withdrawals SET status = 'paid', reference = ?, decided_at = ?, decided_by = ? WHERE id = ? AND status = 'requested'").bind(reference, now(), admin.id || 'operator', id).run();
  if (proof) await saveProof(env, id, proof, admin);
  await env.DB.prepare("UPDATE alerts SET resolved_at = ?, resolved_by = ? WHERE key = ? AND resolved_at IS NULL").bind(now(), admin.id || 'operator', `partner:withdraw:${id}`).run();
  await notify(env, w.user_id, 'partner', 'Withdrawal sent', `Klass8 sent ${fcfa(w.amount)} to ${w.phone.replace(/^237/, '+237 ')} by mobile money. Transaction number: ${reference}. If it has not arrived within a day, contact Klass8 with this number.${proof ? ' The screenshot of the payment is in your withdrawals.' : ''}`);
  return ok({ paid: true });
}

// POST /v1/admin/withdrawals/:id/reject { reason }  the amount goes back to the partner's balance.
export async function rejectWithdrawal(request, env, id) {
  const admin = await requireAdmin(request, env);
  const b = await readJson(request);
  const reason = str(b.reason, 'Reason', { min: 3, max: 300 });
  const w = await openWithdrawal(env, id);
  await env.DB.prepare("UPDATE withdrawals SET status = 'rejected', reason = ?, decided_at = ?, decided_by = ? WHERE id = ? AND status = 'requested'").bind(reason, now(), admin.id || 'operator', id).run();
  await env.DB.prepare("UPDATE alerts SET resolved_at = ?, resolved_by = ? WHERE key = ? AND resolved_at IS NULL").bind(now(), admin.id || 'operator', `partner:withdraw:${id}`).run();
  await notify(env, w.user_id, 'partner', 'Withdrawal not sent', `Your request to withdraw ${fcfa(w.amount)} was not sent: ${reason} The amount is back in your balance.`);
  return ok({ rejected: true });
}

// POST /v1/admin/commissions/:id/cancel { reason }  for a refunded payment or a misuse of a code.
export async function cancelCommission(request, env, id) {
  await requireAdminCan(request, env, 'owner');
  const b = await readJson(request);
  const reason = str(b.reason, 'Reason', { min: 3, max: 300 });
  const c = await env.DB.prepare('SELECT * FROM commissions WHERE id = ?').bind(id).first();
  if (!c || c.cancelled_at) throw new HttpError(400, 'This earning cannot be cancelled.', 'not_open');
  const bal = await balance(env, c.referrer_id);
  if (c.available_at <= now() && bal.available < c.amount) throw new HttpError(400, 'This earning was already withdrawn, so it cannot be cancelled.', 'withdrawn');
  await env.DB.prepare('UPDATE commissions SET cancelled_at = ?, cancel_reason = ? WHERE id = ?').bind(now(), reason, id).run();
  await notify(env, c.referrer_id, 'partner', 'An earning was cancelled', `Klass8 cancelled your earning of ${fcfa(c.amount)}: ${reason}`);
  return ok({ cancelled: true });
}


