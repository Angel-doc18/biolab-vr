// Used by make-admin.sh on the server (inside the klass8-api container):
// finds an account by its phone number and marks it as an admin, or not.
//   node server/make-admin.mjs find|add|remove <phone>
// It never asks for, sets or shows a password: the account is made in the app.
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const [action, raw] = process.argv.slice(2);
if (!['find', 'add', 'remove'].includes(action)) {
  console.log('usage: node server/make-admin.mjs find|add|remove <phone>');
  process.exit(1);
}
const digits = String(raw || '').replace(/\D/g, '');
const phone = /^6\d{8}$/.test(digits) ? `237${digits}` : digits;
const db = new DatabaseSync(path.join(process.env.DATA_DIR || '/data', 'klass8.db'));
db.exec('PRAGMA busy_timeout = 5000');
const u = db.prepare('SELECT id, name, role, is_admin FROM users WHERE phone = ? AND deleted_at IS NULL').get(phone);
if (!u) {
  console.log('No account uses that number. Sign up in the Klass8 app with it first, then run this again.');
  process.exit(2);
}
if (action === 'find') {
  console.log(`${u.name} (${u.role}${u.is_admin ? ', already an admin' : ''})`);
  process.exit(0);
}
db.prepare('UPDATE users SET is_admin = ?, updated_at = ? WHERE id = ?').run(action === 'add' ? 1 : 0, Date.now(), u.id);
console.log(action === 'add' ? `${u.name} is now an admin. In the app, open Me, then Admin.` : `${u.name} is no longer an admin.`);
