// Used by play-review.sh on the server (inside the klass8-api container): makes,
// or resets the password of, the student account Google's reviewers sign in
// with when they check Klass8 for the Play Store. They cannot sign up
// themselves, because that needs a Cameroonian phone number.
//   node server/play-review.mjs <email>      (password in K8_REVIEW_PASSWORD)
// The account signs in with its email. It is always free (is_admin), set up as a
// Form 5 student with several subjects, and kept out of the figures and lists
// (preview_of = 'play-review'). The password is stored as a salted hash and
// never printed here.
import path from 'node:path';
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { hashPassword } from '../src/lib/crypto.js';

const fail = (m) => {
  console.error(m);
  process.exit(1);
};
const email = String(process.argv[2] || '').trim().toLowerCase();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail('Give the email address the reviewers will sign in with.');
const pw = process.env.K8_REVIEW_PASSWORD || '';
if (pw.length < 10) fail('The password is missing or too short.');

const db = new DatabaseSync(path.join(process.env.DATA_DIR || '/data', 'klass8.db'));
const { hash, salt } = await hashPassword(pw);
const now = Date.now();
const d = new Date();
const examYear = d.getUTCMonth() >= 6 ? d.getUTCFullYear() + 1 : d.getUTCFullYear();

const found = db.prepare('SELECT id FROM users WHERE email = ? AND deleted_at IS NULL').get(email);
if (found) {
  db.prepare('UPDATE users SET password_hash = ?, password_salt = ?, blocked_at = NULL, blocked_reason = NULL, updated_at = ? WHERE id = ?').run(hash, salt, now, found.id);
  db.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?').run(found.id);
  console.log(`The reviewer account ${email} has a new password.`);
} else {
  db.prepare(
    `INSERT INTO users (id, role, name, phone, email, password_hash, password_salt, phone_verified, lang, level, exam_year, class_name,
       subjects, school_type, onboarded, is_admin, preview_of, birth_year, birth_month, created_at, updated_at)
     VALUES (?, 'student', 'Google Play Review', ?, ?, ?, ?, 1, 'en', 'O', ?, 'Form 5', 'biology,chemistry,physics,maths,english', 'general', 1, 1, 'play-review', 2000, 1, ?, ?)`
  ).run(crypto.randomUUID(), `play-review-${crypto.randomBytes(4).toString('hex')}`, email, hash, salt, examYear, now, now);
  console.log(`The reviewer account ${email} is ready.`);
}
