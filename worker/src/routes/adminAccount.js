// "My account" for each admin: their name, title, short bio, link, phone and
// photo (also their card in the website's team section), the email or phone
// they sign in with, and their password. Changes to the email or password are
// confirmed with the current password and noted in their account notices.
import { HttpError, now, ok, readJson } from '../lib/http.js';
import { hashPassword, uuid, verifyPassword } from '../lib/crypto.js';
import { bool, phone, str } from '../lib/validate.js';
import { ROLE_TITLES, adminLogin, adminNotice, publicAdmin, requireAdmin } from '../lib/adminAuth.js';
import { securityEvent } from '../lib/monitor.js';

const SORT = { ceo: -20, cto: -10 };

async function card(env, admin) {
  return env.DB.prepare('SELECT id, visible, on_home, photo_at FROM team_members WHERE admin_id = ?').bind(admin.id).first();
}

// The admin's card on the website, made when first needed and kept in step with the account.
async function syncCard(env, a, visible) {
  const t = now();
  const existing = await card(env, a);
  const title = a.title || ROLE_TITLES[a.role] || 'Klass8 team';
  if (existing) {
    await env.DB.prepare('UPDATE team_members SET name = ?, role = ?, bio = ?, link = ?, visible = COALESCE(?, visible), updated_at = ? WHERE id = ?')
      .bind(a.name, title, a.bio || '', a.link || null, visible == null ? null : visible ? 1 : 0, t, existing.id)
      .run();
    return existing.id;
  }
  const id = uuid();
  await env.DB.prepare('INSERT INTO team_members (id, name, role, bio, link, sort, on_home, visible, created_at, updated_at, admin_id) VALUES (?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?)')
    .bind(id, a.name, title, a.bio || '', a.link || null, SORT[a.role] ?? 0, visible == null ? (a.role === 'admin' ? 0 : 1) : visible ? 1 : 0, t, t, a.id)
    .run();
  return id;
}

async function body(env, adminId) {
  const a = await env.DB.prepare('SELECT * FROM admins WHERE id = ?').bind(adminId).first();
  const c = await card(env, a);
  const unread = await env.DB.prepare('SELECT COUNT(*) AS n FROM admin_notices WHERE admin_id = ? AND read = 0').bind(a.id).first();
  return {
    admin: publicAdmin(a),
    profile: {
      name: a.name,
      title: a.title || ROLE_TITLES[a.role] || 'Admin',
      bio: a.bio || '',
      link: a.link || '',
      phone: a.phone || '',
      login: a.login,
      onSite: Boolean(c?.visible),
      cardId: c?.id || null,
      photo: c?.photo_at ? `/v1/team/${c.id}/photo?v=${c.photo_at}` : null,
      lastLoginAt: a.last_login_at || null,
      createdAt: a.created_at,
    },
    unreadNotices: unread?.n || 0,
  };
}

function own(admin) {
  if (!admin.id) throw new HttpError(400, 'The operator key has no account to change. Sign in with an admin account.', 'operator');
  return admin;
}

// GET /v1/admin/account
export async function getAccount(request, env) {
  const admin = own(await requireAdmin(request, env));
  if (!(await card(env, admin)) && admin.role !== 'admin') await syncCard(env, await env.DB.prepare('SELECT * FROM admins WHERE id = ?').bind(admin.id).first(), null);
  return ok(await body(env, admin.id));
}

// PATCH /v1/admin/account { name?, title?, bio?, link?, phone?, onSite? }
export async function patchAccount(request, env) {
  const admin = own(await requireAdmin(request, env));
  const b = await readJson(request);
  const f = {};
  if (b.name !== undefined) f.name = str(b.name, 'Name', { min: 2, max: 80 });
  if (b.title !== undefined) f.title = str(b.title, 'Title', { min: 2, max: 80 });
  if (b.bio !== undefined) f.bio = str(b.bio, 'Short bio', { max: 280, optional: true }) || '';
  if (b.link !== undefined) {
    const link = str(b.link, 'Link', { max: 200, optional: true });
    if (link && !/^https:\/\/[^\s/$.?#][^\s]*$/i.test(link)) throw new HttpError(400, 'The link must start with https://', 'invalid');
    f.link = link || null;
  }
  if (b.phone !== undefined) f.phone = b.phone ? phone(b.phone, 'Phone number') : null;
  const keys = Object.keys(f);
  if (keys.length) {
    await env.DB.prepare(`UPDATE admins SET ${keys.map((k) => `${k} = ?`).join(', ')} WHERE id = ?`)
      .bind(...keys.map((k) => f[k]), admin.id)
      .run();
  }
  const onSite = b.onSite === undefined ? null : bool(b.onSite, 'Show on the website');
  await syncCard(env, await env.DB.prepare('SELECT * FROM admins WHERE id = ?').bind(admin.id).first(), onSite);
  return ok(await body(env, admin.id));
}

// POST /v1/admin/account/login { login, password }  a new email or phone to sign in with.
export async function changeLogin(request, env) {
  const admin = own(await requireAdmin(request, env));
  const b = await readJson(request);
  const login = adminLogin(str(b.login, 'Email or phone number', { max: 254 }));
  if (!login || (login.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login))) throw new HttpError(400, 'Enter a valid email address or a Cameroon phone number.', 'invalid_input');
  if (!(await verifyPassword(str(b.password, 'Password', { max: 128 }), admin.password_hash, admin.password_salt))) {
    await securityEvent(env, 'admin_password_wrong', request, `${admin.login} wrong password when changing sign-in`);
    throw new HttpError(400, 'Your current password is not correct.', 'invalid_credentials');
  }
  if (login === admin.login) return ok(await body(env, admin.id));
  const taken = await env.DB.prepare('SELECT 1 FROM admins WHERE login = ?').bind(login).first();
  const user = await env.DB.prepare('SELECT 1 FROM users WHERE (email = ? OR phone = ?) AND deleted_at IS NULL').bind(login, login).first();
  if (taken || user) throw new HttpError(409, 'Another Klass8 account already uses this. Choose another.', 'exists');
  await env.DB.prepare('UPDATE admins SET login = ? WHERE id = ?').bind(login, admin.id).run();
  await securityEvent(env, 'admin_login_changed', request, `${admin.login} now signs in as ${login}`);
  await adminNotice(env, admin.id, 'security', 'Your sign-in changed', `You now sign in with ${login} instead of ${admin.login}. If you did not do this, tell the CTO at once.`);
  return ok(await body(env, admin.id));
}

// POST /v1/admin/account/password { currentPassword, newPassword }
// Every other place the admin is signed in is signed out.
export async function changeAdminPassword(request, env) {
  const admin = own(await requireAdmin(request, env));
  const b = await readJson(request);
  if (!(await verifyPassword(str(b.currentPassword, 'Current password', { max: 128 }), admin.password_hash, admin.password_salt))) {
    await securityEvent(env, 'admin_password_wrong', request, `${admin.login} wrong current password`);
    throw new HttpError(400, 'Your current password is not correct.', 'invalid_credentials');
  }
  const pw = str(b.newPassword, 'New password', { max: 128 });
  if (pw.length < 10) throw new HttpError(400, 'Use at least 10 characters for an admin password.', 'weak_password');
  if (!/[A-Za-z]/.test(pw) || !/[0-9]/.test(pw)) throw new HttpError(400, 'Use letters and numbers in an admin password.', 'weak_password');
  const { hash, salt } = await hashPassword(pw);
  await env.DB.prepare('UPDATE admins SET password_hash = ?, password_salt = ? WHERE id = ?').bind(hash, salt, admin.id).run();
  await env.DB.prepare('UPDATE admin_sessions SET revoked = 1 WHERE admin_id = ?').bind(admin.id).run();
  await securityEvent(env, 'admin_password_changed', request, `${admin.login} changed their password`);
  await adminNotice(env, admin.id, 'security', 'Your password changed', `The password of your admin account was changed on ${new Date().toUTCString()}. Every other device was signed out. If you did not do this, tell the CTO at once.`);
  return ok({ changed: true });
}

// GET /v1/admin/notices  the admin's own account notices, newest first.
export async function listNotices(request, env) {
  const admin = own(await requireAdmin(request, env));
  const { results } = await env.DB.prepare('SELECT id, kind, title, body, read, created_at AS createdAt FROM admin_notices WHERE admin_id = ? ORDER BY created_at DESC LIMIT 100').bind(admin.id).all();
  await env.DB.prepare('UPDATE admin_notices SET read = 1 WHERE admin_id = ? AND read = 0').bind(admin.id).run();
  return ok({ items: results.map((n) => ({ ...n, read: Boolean(n.read) })) });
}

// GET /v1/admin/admins  who runs Klass8 (for the founder and the CTO).
export async function listAdmins(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare('SELECT * FROM admins ORDER BY created_at').all();
  return ok({ items: results.map((a) => ({ ...publicAdmin(a), disabled: Boolean(a.disabled), lastLoginAt: a.last_login_at || null, createdAt: a.created_at })) });
}
