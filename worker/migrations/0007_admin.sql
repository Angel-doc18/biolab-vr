-- Accounts that can open the admin screens in the app. Set on the server with
-- /opt/klass8-api/make-admin.sh (never from the app). Admins never pay.
ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0;

-- Days an admin gave or took from an account (for example platform charges
-- paid in cash), kept for the record.
CREATE TABLE admin_grants (
  id TEXT PRIMARY KEY,
  admin_id TEXT,
  user_id TEXT NOT NULL,
  days INTEGER NOT NULL,
  note TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX idx_admin_grants_user ON admin_grants(user_id, created_at);
