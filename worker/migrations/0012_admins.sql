-- Admin accounts are their own accounts, apart from students, parents and
-- teachers: created only on the server (/opt/klass8-api/make-admin.sh), signed
-- in from the app's admin sign-in, and able to open nothing but the admin
-- screens. login is an email address or a phone number as 2376XXXXXXXX.
CREATE TABLE IF NOT EXISTS admins (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  login TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  disabled INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  last_login_at INTEGER
);

-- Admin sign-ins: rotating refresh tokens kept only as hashes, as for users.
CREATE TABLE IF NOT EXISTS admin_sessions (
  id TEXT PRIMARY KEY,
  admin_id TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  revoked INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS admin_sessions_admin ON admin_sessions (admin_id);

-- A student, parent or teacher account no longer opens the admin screens.
UPDATE users SET is_admin = 0 WHERE is_admin = 1;
