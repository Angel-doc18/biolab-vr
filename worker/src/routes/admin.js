// Admin endpoints: for an admin account (its own account, created on the server
// with make-admin.sh and signed in from the app's admin sign-in), or for the
// operator's ADMIN_TOKEN.
import { HttpError, created, now, ok, readJson } from '../lib/http.js';
import { randomCode, sha256, uuid } from '../lib/crypto.js';
import { bool, int, oneOf, str } from '../lib/validate.js';
import { accessEnd, freeDays, isPro, paywallOn } from '../lib/auth.js';
import { paymentsConfigured } from '../lib/providers.js';
import { notify } from '../lib/notify.js';
import { publicAdmin, requireAdmin, requireAdminCan } from '../lib/adminAuth.js';
import { currentPlans, saveSettings } from '../lib/settings.js';
import { securityEvent } from '../lib/monitor.js';
import { FAPSHI_FEE } from '../lib/partners.js';

const DAY = 86_400_000;

// Who may use these endpoints: an admin account (lib/adminAuth.js) or the operator's ADMIN_TOKEN.
export { requireAdmin };

const startOfMonth = () => {
  const d = new Date();
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1);
};

// The figures on the admin home: accounts, students' access and money.
export async function overview(request, env) {
  const admin = await requireAdmin(request, env);
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
    .bind(t, t, t - freeDays() * DAY, t, t - freeDays() * DAY)
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
  const messages = await env.DB.prepare('SELECT COUNT(*) AS n FROM contact_messages WHERE done_at IS NULL').first();
  const reports = await env.DB.prepare('SELECT COUNT(*) AS n FROM ai_reports WHERE resolved_at IS NULL').first();
  const withdraw = await env.DB.prepare("SELECT COUNT(*) AS n, COALESCE(SUM(amount), 0) AS amount FROM withdrawals WHERE status = 'requested'").first();
  const alerts = await env.DB.prepare("SELECT SUM(CASE WHEN level = 'critical' THEN 1 ELSE 0 END) AS critical, COUNT(*) AS n FROM alerts WHERE resolved_at IS NULL AND kind != 'partner'").first();
  const notices = admin.id ? await env.DB.prepare('SELECT COUNT(*) AS n FROM admin_notices WHERE admin_id = ? AND read = 0').bind(admin.id).first() : null;
  const firstDay = await env.DB.prepare('SELECT MIN(created_at) AS t FROM users').first();
  const { results: latest } = await env.DB.prepare(
    `SELECT p.id, p.plan, p.amount, p.status, p.created_at AS createdAt, u.name FROM payments p LEFT JOIN users u ON u.id = p.user_id
     ORDER BY p.created_at DESC LIMIT 5`
  ).all();
  return ok({
    accounts: Object.fromEntries(roles.map((r) => [r.role, r.n])),
    newThisWeek: recent?.n || 0,
    students: { paid: students?.paid || 0, freeMonth: students?.freeMonth || 0, ended: students?.ended || 0 },
    // Fapshi keeps 3% of each payment.
    money: { ...money, afterFees: Math.round((money?.total || 0) * 0.97) },
    licenceRequests: requests?.n || 0,
    newMessages: messages?.n || 0,
    openReports: reports?.n || 0,
    latestPayments: latest,
    withdrawRequests: { count: withdraw?.n || 0, amount: withdraw?.amount || 0 },
    alerts: { open: alerts?.n || 0, critical: alerts?.critical || 0 },
    unreadNotices: notices?.n || 0,
    startedAt: firstDay?.t || null,
    me: admin.id ? publicAdmin(admin) : publicAdmin({ id: null, name: 'operator', role: 'cto' }),
    prices: { month: currentPlans().month.amount, year: currentPlans().year.amount },
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
  blocked: Boolean(u.blocked_at),
  blockedReason: u.blocked_reason || null,
  partnerKind: u.partner_kind || null,
  lastActive: u.last_active || null,
});

// GET /v1/admin/users?q=&role=  newest first, or those whose name, phone or email matches.
export async function listUsers(request, env) {
  await requireAdmin(request, env);
  const q = (new URL(request.url).searchParams.get('q') || '').trim().slice(0, 80);
  const digits = q.replace(/\D/g, '');
  const like = `%${q.replace(/[%_\\]/g, '')}%`;
  const phoneLike = digits.length >= 3 ? `%${digits}%` : '\u0000';
  const r = new URL(request.url).searchParams.get('role') || '';
  const role = r ? oneOf(r, 'Role', ['student', 'parent', 'teacher', 'partner']) : '';
  const { results } = await env.DB.prepare(
    `SELECT u.*, p.last_active FROM users u LEFT JOIN progress p ON p.user_id = u.id
     WHERE u.deleted_at IS NULL AND (? = '' OR u.name LIKE ? OR u.email LIKE ? OR u.phone LIKE ?) AND (? = '' OR u.role = ?)
     ORDER BY u.created_at DESC LIMIT 60`
  )
    .bind(q, like, like, phoneLike, role, role)
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
  const end = new Date(until).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  if (days > 0) await notify(env, u.id, 'payment', `${days} days added to your account`, `Klass8 added ${days} days of full access to your account${note ? ` (${note})` : ''}. Everything is open until ${end}.`);
  else await notify(env, u.id, 'payment', `${-days} days taken off your account`, `Klass8 took ${-days} days off your account${note ? `: ${note}` : ', to correct days given by mistake'}. Your access now runs until ${until ? end : 'today'}. Contact Klass8 if you think this is wrong.`);
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

// Messages sent from the website's contact form, newest first.
export async function listContactMessages(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    'SELECT id, created_at AS createdAt, name, contact, topic, message, done_at AS doneAt FROM contact_messages ORDER BY (done_at IS NOT NULL), created_at DESC LIMIT 200'
  ).all();
  return ok({ items: results });
}

// ---------- people: one person's details, block, delete ----------

async function findUser(env, id) {
  const u = await env.DB.prepare('SELECT u.*, p.last_active FROM users u LEFT JOIN progress p ON p.user_id = u.id WHERE u.id = ? AND u.deleted_at IS NULL').bind(id).first();
  if (!u) throw new HttpError(404, 'This account no longer exists.', 'not_found');
  return u;
}

// GET /v1/admin/users/:id  everything an admin needs to help one person.
export async function getUser(request, env, id) {
  await requireAdmin(request, env);
  const u = await findUser(env, id);
  const { results: payments } = await env.DB.prepare(
    'SELECT id, plan, amount, status, operator, created_at AS createdAt FROM payments WHERE user_id = ? ORDER BY created_at DESC LIMIT 20'
  )
    .bind(id)
    .all();
  const { results: grants } = await env.DB.prepare('SELECT days, note, created_at AS createdAt FROM admin_grants WHERE user_id = ? ORDER BY created_at DESC LIMIT 20').bind(id).all();
  const { results: linked } = await env.DB.prepare(
    `SELECT u.name, u.role FROM parent_links l JOIN users u ON u.id = CASE WHEN l.parent_id = ? THEN l.student_id ELSE l.parent_id END
     WHERE (l.parent_id = ? OR l.student_id = ?) AND u.deleted_at IS NULL`
  )
    .bind(id, id, id)
    .all();
  const classes = await env.DB.prepare(
    u.role === 'teacher' ? 'SELECT COUNT(*) AS n FROM classes WHERE teacher_id = ?' : 'SELECT COUNT(*) AS n FROM class_members WHERE student_id = ?'
  )
    .bind(id)
    .first();
  const invitedBy = await env.DB.prepare('SELECT r.code, r.created_at AS at, x.id, x.name FROM referrals r LEFT JOIN users x ON x.id = r.referrer_id WHERE r.user_id = ?').bind(id).first();
  const invited = await env.DB.prepare('SELECT COUNT(*) AS n FROM referrals WHERE referrer_id = ?').bind(id).first();
  return ok({
    user: userRow(u, env),
    payments,
    grants,
    linked,
    classes: classes?.n || 0,
    partner: { code: u.ref_code || null, invited: invited?.n || 0, invitedBy: invitedBy ? { id: invitedBy.id, name: invitedBy.name, code: invitedBy.code, at: invitedBy.at } : null },
  });
}

// POST /v1/admin/users/:id/block { blocked }  a blocked account is signed out
// everywhere and cannot sign in until it is unblocked.
// The reason is shown to the person when they try to sign in.
export async function blockUser(request, env, id) {
  const admin = await requireAdmin(request, env);
  const b = await readJson(request);
  const blocked = bool(b.blocked, 'Blocked');
  const reason = blocked ? str(b.reason, 'Reason', { min: 5, max: 200 }) : null;
  const u = await findUser(env, id);
  await env.DB.batch([
    env.DB.prepare('UPDATE users SET blocked_at = ?, blocked_reason = ?, updated_at = ? WHERE id = ?').bind(blocked ? now() : null, reason, now(), id),
    ...(blocked ? [env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?').bind(id)] : []),
  ]);
  if (blocked) {
    await notify(env, id, 'account', 'Your account was blocked', `Klass8 blocked your account: ${reason} Contact Klass8 if you think this is a mistake.`);
  } else if (u.blocked_at) {
    await notify(env, id, 'account', 'Your account is open again', 'Klass8 unblocked your account. You can sign in and use it as before.');
  }
  await securityEvent(env, blocked ? 'user_blocked' : 'user_unblocked', request, `${admin.name}: ${u.name}${reason ? ` (${reason})` : ''}`);
  return ok({ user: userRow(await findUser(env, id), env) });
}

// DELETE /v1/admin/users/:id { confirm: true }  removes the account and
// everything about the person from Klass8. Payments stay for the accounts,
// with the amount and date only: the person's number and account are taken off.
export async function deleteUser(request, env, id) {
  const admin = await requireAdmin(request, env);
  const b = await readJson(request);
  if (b.confirm !== true) throw new HttpError(400, 'Confirm that the account should be deleted.', 'confirm_required');
  const u = await findUser(env, id);
  await env.DB.batch([
    env.DB.prepare('DELETE FROM refresh_tokens WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM otp_codes WHERE phone = ?').bind(u.phone || ''),
    env.DB.prepare('DELETE FROM progress WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM avatars WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM notifications WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM class_members WHERE student_id = ?').bind(id),
    env.DB.prepare('DELETE FROM assignment_done WHERE student_id = ?').bind(id),
    // a teacher's classes go with them, with their pupils' places and the work set
    env.DB.prepare('DELETE FROM assignment_done WHERE assignment_id IN (SELECT a.id FROM assignments a JOIN classes c ON c.id = a.class_id WHERE c.teacher_id = ?)').bind(id),
    env.DB.prepare('DELETE FROM assignments WHERE class_id IN (SELECT id FROM classes WHERE teacher_id = ?)').bind(id),
    env.DB.prepare('DELETE FROM class_members WHERE class_id IN (SELECT id FROM classes WHERE teacher_id = ?)').bind(id),
    env.DB.prepare('DELETE FROM classes WHERE teacher_id = ?').bind(id),
    env.DB.prepare('DELETE FROM parent_links WHERE parent_id = ? OR student_id = ?').bind(id, id),
    env.DB.prepare('DELETE FROM link_codes WHERE student_id = ?').bind(id),
    env.DB.prepare('DELETE FROM voucher_redemptions WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM ai_usage WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM voice_usage WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM ai_reports WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM consent_requests WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM admin_grants WHERE user_id = ?').bind(id),
    env.DB.prepare("UPDATE licence_requests SET user_id = 'deleted' WHERE user_id = ?").bind(id),
    env.DB.prepare("UPDATE schools SET created_by = 'deleted' WHERE created_by = ?").bind(id),
    env.DB.prepare("UPDATE payments SET user_id = 'deleted', phone = '' WHERE user_id = ?").bind(id),
    env.DB.prepare('DELETE FROM referrals WHERE user_id = ? OR referrer_id = ?').bind(id, id),
    env.DB.prepare('DELETE FROM commissions WHERE referrer_id = ?').bind(id),
    env.DB.prepare("UPDATE commissions SET referred_id = 'deleted' WHERE referred_id = ?").bind(id),
    env.DB.prepare("DELETE FROM withdrawals WHERE user_id = ? AND status != 'paid'").bind(id),
    env.DB.prepare("UPDATE withdrawals SET user_id = 'deleted', phone = '' WHERE user_id = ?").bind(id),
    env.DB.prepare('DELETE FROM users WHERE id = ?').bind(id),
  ]);
  await securityEvent(env, 'user_deleted', request, `${admin.name}: ${u.name} (${u.role})`);
  return ok({ deleted: true, name: u.name });
}

// ---------- prices and charges ----------

const settingsBody = (env) => {
  const plans = currentPlans();
  return {
    priceMonth: plans.month.amount,
    priceYear: plans.year.amount,
    charging: paywallOn(env),
    paymentsOpen: paymentsConfigured(env),
    freeDays: freeDays(),
    fapshi: env.FAPSHI_ENV === 'live' ? 'live' : 'sandbox',
  };
};

// GET /v1/admin/settings
export async function getSettings(request, env) {
  await requireAdmin(request, env);
  return ok(settingsBody(env));
}

// PUT /v1/admin/settings { priceMonth?, priceYear?, charging? }
export async function putSettings(request, env) {
  const admin = await requireAdminCan(request, env, 'owner');
  const b = await readJson(request);
  const before = { ...currentPlans(), charging: paywallOn(env) };
  const changes = {};
  if (b.priceMonth !== undefined) changes.price_month = int(b.priceMonth, 'The monthly price', { min: 100, max: 100000 });
  if (b.priceYear !== undefined) changes.price_year = int(b.priceYear, 'The yearly price', { min: 100, max: 1000000 });
  if (b.charging !== undefined) {
    const on = bool(b.charging, 'Charging');
    if (on && !paymentsConfigured(env)) throw new HttpError(400, 'Mobile money is not set up yet, so students could not pay. Set up Fapshi first.', 'payments_unavailable');
    changes.paywall = on ? 'on' : 'off';
  }
  await saveSettings(env, changes, admin.id || 'operator');
  // Students are told, in plain words, what changed for them.
  const after = { ...currentPlans(), charging: paywallOn(env) };
  const lines = [];
  const f = (n) => `${n.toLocaleString('en-US')} FCFA`;
  if (after.month.amount !== before.month.amount || after.year.amount !== before.year.amount) {
    lines.push(`New prices from today: ${f(after.month.amount)} for a month (was ${f(before.month.amount)}) and ${f(after.year.amount)} for a year (was ${f(before.year.amount)}). Days you already paid for are not changed.`);
  }
  if (after.charging !== before.charging) {
    lines.push(after.charging ? 'Platform charges now apply: after your free month, pay by mobile money to keep everything open.' : 'Klass8 is free for everyone for now: no payment is needed to use everything.');
  }
  if (lines.length && b.tell !== false) {
    const { results } = await env.DB.prepare("SELECT id FROM users WHERE role = 'student' AND deleted_at IS NULL").all();
    const t = now();
    const text = lines.join(' ');
    for (let i = 0; i < results.length; i += 200) {
      await env.DB.batch(
        results.slice(i, i + 200).map((u) =>
          env.DB.prepare("INSERT INTO notifications (id, user_id, kind, title, body, data, read, created_at) VALUES (lower(hex(randomblob(16))), ?, 'payment', 'Klass8 prices', ?, NULL, 0, ?)").bind(u.id, text.slice(0, 500), t)
        )
      );
    }
  }
  return ok(settingsBody(env));
}

// ---------- website messages ----------

// POST /v1/admin/contact-messages/:id/done { done }
export async function markMessage(request, env, id) {
  await requireAdmin(request, env);
  const b = await readJson(request);
  const done = bool(b.done, 'Done');
  const r = await env.DB.prepare('UPDATE contact_messages SET done_at = ? WHERE id = ?').bind(done ? now() : null, id).run();
  if (!r.meta.changes) throw new HttpError(404, 'This message no longer exists.', 'not_found');
  return ok();
}

// DELETE /v1/admin/contact-messages/:id
export async function deleteMessage(request, env, id) {
  await requireAdmin(request, env);
  await env.DB.prepare('DELETE FROM contact_messages WHERE id = ?').bind(id).run();
  return ok();
}

// ---------- reports on AI answers ----------

// GET /v1/admin/ai-reports  open reports first, newest first.
export async function listAiReports(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(
    `SELECT r.id, r.reason, r.question, r.answer, r.created_at AS createdAt, r.resolved_at AS resolvedAt, u.name
     FROM ai_reports r LEFT JOIN users u ON u.id = r.user_id ORDER BY (r.resolved_at IS NOT NULL), r.created_at DESC LIMIT 100`
  ).all();
  return ok({ items: results });
}

// POST /v1/admin/ai-reports/:id/resolve
export async function resolveAiReport(request, env, id) {
  await requireAdmin(request, env);
  const r = await env.DB.prepare('UPDATE ai_reports SET resolved_at = ? WHERE id = ?').bind(now(), id).run();
  if (!r.meta.changes) throw new HttpError(404, 'This report no longer exists.', 'not_found');
  return ok();
}

// ---------- announcements ----------

// POST /v1/admin/announce { audience, title, body }  a notification in the app
// for everyone, or for every student, parent or teacher.
export async function announce(request, env) {
  await requireAdmin(request, env);
  const b = await readJson(request);
  const audience = oneOf(b.audience, 'Who it is for', ['everyone', 'student', 'parent', 'teacher', 'partner']);
  const title = str(b.title, 'Title', { min: 3, max: 120 });
  const body = str(b.body, 'Message', { min: 3, max: 500 });
  const { results } = await env.DB.prepare("SELECT id FROM users WHERE deleted_at IS NULL AND blocked_at IS NULL AND (? = 'everyone' OR role = ?)").bind(audience, audience).all();
  const t = now();
  for (let i = 0; i < results.length; i += 200) {
    await env.DB.batch(
      results.slice(i, i + 200).map((u) =>
        env.DB.prepare("INSERT INTO notifications (id, user_id, kind, title, body, data, read, created_at) VALUES (?, ?, 'announcement', ?, ?, NULL, 0, ?)").bind(uuid(), u.id, title, body, t)
      )
    );
  }
  return ok({ sent: results.length });
}

// ---------- money over any period ----------

// GET /v1/admin/money?from=&to=&status=  (times in ms; by default the last 30 days)
// What came in over the period, by plan, over time, and what partners earned from it.
export async function money(request, env) {
  await requireAdmin(request, env);
  const q = new URL(request.url).searchParams;
  const t = now();
  const to = Math.min(t, Number(q.get('to')) || t);
  const from = Math.max(0, Math.min(to - 60_000, Number(q.get('from')) || to - 30 * DAY));
  const status = q.get('status') || '';
  const sums = await env.DB.prepare(
    `SELECT COALESCE(SUM(CASE WHEN status = 'SUCCESSFUL' THEN amount END), 0) AS total,
            COUNT(CASE WHEN status = 'SUCCESSFUL' THEN 1 END) AS paid,
            COUNT(DISTINCT CASE WHEN status = 'SUCCESSFUL' THEN user_id END) AS payers,
            COALESCE(SUM(CASE WHEN status = 'SUCCESSFUL' AND plan = 'month' THEN amount END), 0) AS monthAmount,
            COUNT(CASE WHEN status = 'SUCCESSFUL' AND plan = 'month' THEN 1 END) AS monthCount,
            COALESCE(SUM(CASE WHEN status = 'SUCCESSFUL' AND plan = 'year' THEN amount END), 0) AS yearAmount,
            COUNT(CASE WHEN status = 'SUCCESSFUL' AND plan = 'year' THEN 1 END) AS yearCount,
            COUNT(CASE WHEN status = 'PENDING' THEN 1 END) AS pending,
            COUNT(CASE WHEN status = 'REVIEW' THEN 1 END) AS review,
            COUNT(CASE WHEN status IN ('FAILED', 'EXPIRED') THEN 1 END) AS failed
     FROM payments WHERE created_at >= ? AND created_at < ?`
  )
    .bind(from, to)
    .first();
  const share = await env.DB.prepare('SELECT COALESCE(SUM(amount), 0) AS amount, COUNT(*) AS n FROM commissions WHERE cancelled_at IS NULL AND created_at >= ? AND created_at < ?').bind(from, to).first();
  const joined = await env.DB.prepare("SELECT COUNT(*) AS n, SUM(CASE WHEN role = 'student' THEN 1 ELSE 0 END) AS students FROM users WHERE created_at >= ? AND created_at < ?").bind(from, to).first();
  // Bars: by hour for up to 2 days, by day up to 62 days, by week up to a year, then by month.
  const span = to - from;
  const step = span <= 2 * DAY ? 'hour' : span <= 62 * DAY ? 'day' : span <= 366 * DAY ? 'week' : 'month';
  const { results: rows } = await env.DB.prepare("SELECT amount, created_at AS t FROM payments WHERE status = 'SUCCESSFUL' AND created_at >= ? AND created_at < ?").bind(from, to).all();
  const keyOf = (ms) => {
    const d = new Date(ms);
    if (step === 'hour') return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours());
    if (step === 'day') return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    if (step === 'week') return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - ((d.getUTCDay() + 6) % 7) * DAY;
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1);
  };
  const next = (k) => {
    if (step === 'hour') return k + 3600_000;
    if (step === 'day') return k + DAY;
    if (step === 'week') return k + 7 * DAY;
    const d = new Date(k);
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1);
  };
  const series = [];
  const index = new Map();
  for (let k = keyOf(from); k < to && series.length < 120; k = next(k)) {
    index.set(k, series.length);
    series.push({ t: k, amount: 0, count: 0 });
  }
  for (const r of rows) {
    const i = index.get(keyOf(r.t));
    if (i != null) {
      series[i].amount += r.amount;
      series[i].count += 1;
    }
  }
  const { results: items } = await env.DB.prepare(
    `SELECT p.id, p.reference, p.plan, p.amount, p.status, p.operator, p.created_at AS createdAt, u.id AS userId, u.name, u.phone
     FROM payments p LEFT JOIN users u ON u.id = p.user_id WHERE p.created_at >= ? AND p.created_at < ? AND (? = '' OR p.status = ?)
     ORDER BY p.created_at DESC LIMIT 200`
  )
    .bind(from, to, status, status)
    .all();
  const afterFees = Math.round((sums?.total || 0) * (1 - FAPSHI_FEE));
  const firstDay = await env.DB.prepare('SELECT MIN(created_at) AS t FROM users').first();
  return ok({
    from,
    to,
    step,
    startedAt: firstDay?.t || null,
    total: sums?.total || 0,
    afterFees,
    fees: (sums?.total || 0) - afterFees,
    partnerShare: share?.amount || 0,
    kept: afterFees - (share?.amount || 0),
    payments: sums?.paid || 0,
    payers: sums?.payers || 0,
    byPlan: { month: { amount: sums?.monthAmount || 0, count: sums?.monthCount || 0 }, year: { amount: sums?.yearAmount || 0, count: sums?.yearCount || 0 } },
    open: { pending: sums?.pending || 0, review: sums?.review || 0, failed: sums?.failed || 0 },
    joined: { accounts: joined?.n || 0, students: joined?.students || 0 },
    series,
    items,
  });
}
