// Used by make-admin.sh on the server (inside the klass8-api container) to look
// after admin accounts. Admins are their own accounts, separate from students,
// parents and teachers, and sign in from the app's admin sign-in.
//   node server/make-admin.mjs list
//   node server/make-admin.mjs add "<name>" <email or phone> [ceo|cto|admin]   (password in K8_ADMIN_PASSWORD)
//   node server/make-admin.mjs role <email or phone> ceo|cto|admin
//   node server/make-admin.mjs password <email or phone>       (password in K8_ADMIN_PASSWORD)
//   node server/make-admin.mjs off|on <email or phone>
// The password comes only from make-admin.sh, which reads it without showing
// it; it is stored as a salted hash and never printed.
import path from 'node:path';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { hashPassword } from '../src/lib/crypto.js';
import { adminLogin } from '../src/lib/adminAuth.js';

const [action, a1, a2, a3] = process.argv.slice(2);
const TITLES = { ceo: 'Founder and CEO', cto: 'Co-founder and CTO', admin: 'Admin' };
const SORT = { ceo: -20, cto: -10, admin: 0 };
const roleOf = (r) => {
  const v = String(r || 'admin').toLowerCase();
  if (!TITLES[v]) fail('The role must be ceo, cto or admin.');
  return v;
};
// The founder's and the CTO's cards on the website's team section follow their accounts.
const ensureCard = (admin) => {
  if (admin.role === 'admin') return;
  const has = db.prepare('SELECT id FROM team_members WHERE admin_id = ?').get(admin.id);
  const t = Date.now();
  if (has) db.prepare('UPDATE team_members SET name = ?, role = ?, sort = ?, updated_at = ? WHERE id = ?').run(admin.name, admin.title || TITLES[admin.role], SORT[admin.role], t, has.id);
  else db.prepare('INSERT INTO team_members (id, name, role, bio, link, sort, on_home, visible, created_at, updated_at, admin_id) VALUES (?, ?, ?, \'\', NULL, ?, 1, 1, ?, ?, ?)').run(crypto.randomUUID().replace(/-/g, ''), admin.name, admin.title || TITLES[admin.role], SORT[admin.role], t, t, admin.id);
};
const db = new DatabaseSync(path.join(process.env.DATA_DIR || '/data', 'klass8.db'));
db.exec('PRAGMA busy_timeout = 5000');
const fail = (msg) => {
  console.log(msg);
  process.exit(1);
};
const date = (t) => (t ? new Date(t).toISOString().slice(0, 16).replace('T', ' ') : 'never');
const findBy = (raw) => {
  const login = adminLogin(raw);
  if (!login) fail('Give an email address or a Cameroon phone number (6XX XX XX XX).');
  return { login, admin: db.prepare('SELECT * FROM admins WHERE login = ?').get(login) };
};
const newPassword = () => {
  const pw = process.env.K8_ADMIN_PASSWORD || '';
  if (pw.length < 10) fail('The password must be at least 10 characters.');
  if (pw.length > 128) fail('The password must be at most 128 characters.');
  return pw;
};

if (action === 'list') {
  const rows = db.prepare('SELECT name, login, role, disabled, created_at, last_login_at FROM admins ORDER BY created_at').all();
  if (!rows.length) console.log('No admin accounts yet. Add one with: make-admin.sh add');
  for (const r of rows) console.log(`${r.name}  ${r.login}  ${TITLES[r.role] || r.role}  ${r.disabled ? 'SWITCHED OFF' : 'on'}  made ${date(r.created_at)}  last sign-in ${date(r.last_login_at)}`);
} else if (action === 'add') {
  const name = String(a1 || '').trim();
  if (name.length < 2 || name.length > 80) fail('Give the admin a name (2 to 80 characters).');
  const { login, admin } = findBy(a2);
  if (admin) fail('An admin account already uses that email or phone number.');
  const role = roleOf(a3);
  if (role !== 'admin' && db.prepare('SELECT 1 FROM admins WHERE role = ? AND disabled = 0').get(role)) fail(`There is already a ${TITLES[role]} account. Use "make-admin.sh role" to change roles.`);
  const { hash, salt } = await hashPassword(newPassword());
  const id = crypto.randomUUID();
  db.prepare('INSERT INTO admins (id, name, login, password_hash, password_salt, disabled, created_at, role, title) VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)').run(id, name, login, hash, salt, Date.now(), role, TITLES[role]);
  ensureCard({ id, name, role, title: TITLES[role] });
  console.log(`${TITLES[role]} account made for ${name} (${login}). Sign in on the usual Klass8 sign-in page with this email or phone number and the password you typed.`);
} else if (action === 'password') {
  const { admin } = findBy(a1);
  if (!admin) fail('No admin account uses that email or phone number.');
  const { hash, salt } = await hashPassword(newPassword());
  db.prepare('UPDATE admins SET password_hash = ?, password_salt = ? WHERE id = ?').run(hash, salt, admin.id);
  db.prepare('UPDATE admin_sessions SET revoked = 1 WHERE admin_id = ?').run(admin.id);
  console.log(`New password set for ${admin.name}. Every place they were signed in has been signed out.`);
} else if (action === 'role') {
  const { admin } = findBy(a1);
  if (!admin) fail('No admin account uses that email or phone number.');
  const role = roleOf(a2);
  db.prepare('UPDATE admins SET role = ?, title = ? WHERE id = ?').run(role, TITLES[role], admin.id);
  db.prepare('UPDATE admin_sessions SET revoked = 1 WHERE admin_id = ?').run(admin.id);
  ensureCard({ ...admin, role, title: TITLES[role] });
  console.log(`${admin.name} is now ${TITLES[role]}. They sign in again to see the change.`);
} else if (action === 'off' || action === 'on') {
  const { admin } = findBy(a1);
  if (!admin) fail('No admin account uses that email or phone number.');
  db.prepare('UPDATE admins SET disabled = ? WHERE id = ?').run(action === 'off' ? 1 : 0, admin.id);
  if (action === 'off') db.prepare('UPDATE admin_sessions SET revoked = 1 WHERE admin_id = ?').run(admin.id);
  console.log(action === 'off' ? `${admin.name} can no longer sign in, and has been signed out everywhere.` : `${admin.name} can sign in again.`);
} else {
  console.log('usage: node server/make-admin.mjs list | add "<name>" <email or phone> [ceo|cto|admin] | role <email or phone> <role> | password <email or phone> | off <email or phone> | on <email or phone>');
  process.exit(1);
}
