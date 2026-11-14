-- ---------- admin roles and profiles ----------
-- ceo: the founder and CEO; cto: the co-founder and CTO, who also has the
-- system tools; admin: everyone else who helps run Klass8.
ALTER TABLE admins ADD COLUMN role TEXT NOT NULL DEFAULT 'admin';
ALTER TABLE admins ADD COLUMN title TEXT;
ALTER TABLE admins ADD COLUMN phone TEXT;
ALTER TABLE admins ADD COLUMN bio TEXT NOT NULL DEFAULT '';
ALTER TABLE admins ADD COLUMN link TEXT;
-- The first admin account made is the founder's.
UPDATE admins SET role = 'ceo', title = 'Founder and CEO' WHERE id = (SELECT id FROM admins ORDER BY created_at LIMIT 1);

-- An admin's card on the website's team section follows their account.
ALTER TABLE team_members ADD COLUMN admin_id TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS team_members_admin ON team_members (admin_id) WHERE admin_id IS NOT NULL;
INSERT INTO team_members (id, name, role, bio, link, sort, on_home, visible, created_at, updated_at, admin_id)
  SELECT lower(hex(randomblob(16))), a.name, 'Founder and CEO', '', NULL, -20, 1, 1, a.created_at, a.created_at, a.id
  FROM admins a WHERE a.role = 'ceo' AND NOT EXISTS (SELECT 1 FROM team_members t WHERE t.admin_id = a.id);

-- Notes to an admin about their own account (password or email changed, and so on).
CREATE TABLE IF NOT EXISTS admin_notices (
  id TEXT PRIMARY KEY,
  admin_id TEXT NOT NULL,
  kind TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  read INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS admin_notices_admin ON admin_notices (admin_id, created_at);

-- ---------- accounts ----------
-- Why an account was blocked, shown to the person when they try to sign in.
ALTER TABLE users ADD COLUMN blocked_reason TEXT;

-- ---------- partner programme ----------
-- Anyone with an account can have a promo code. People who join with it are
-- "referred"; for each of their payments the code's owner earns a share of
-- what Klass8 receives after Fapshi's fee, for as long as the programme says.
ALTER TABLE users ADD COLUMN ref_code TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS users_ref_code ON users (ref_code) WHERE ref_code IS NOT NULL;
ALTER TABLE users ADD COLUMN ref_rate REAL;              -- this person's own share in %, or NULL for the usual share
ALTER TABLE users ADD COLUMN ref_paused INTEGER NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN partner_kind TEXT;          -- for partner accounts: person, school or business

CREATE TABLE IF NOT EXISTS referrals (
  user_id TEXT PRIMARY KEY,                 -- the person who joined with a code
  referrer_id TEXT NOT NULL,                -- the code's owner
  code TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  ends_at INTEGER                           -- earnings stop after this; NULL = for ever
);
CREATE INDEX IF NOT EXISTS referrals_referrer ON referrals (referrer_id, created_at);

CREATE TABLE IF NOT EXISTS commissions (
  id TEXT PRIMARY KEY,
  referrer_id TEXT NOT NULL,
  referred_id TEXT NOT NULL,
  payment_id TEXT NOT NULL UNIQUE,
  paid INTEGER NOT NULL,                    -- what the student paid
  net INTEGER NOT NULL,                     -- what Klass8 kept after Fapshi's fee
  rate REAL NOT NULL,                       -- the share in % at the time
  amount INTEGER NOT NULL,                  -- the partner's earning
  available_at INTEGER NOT NULL,            -- can be withdrawn from then (after the refund window)
  cancelled_at INTEGER,
  cancel_reason TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS commissions_referrer ON commissions (referrer_id, created_at);
CREATE INDEX IF NOT EXISTS commissions_created ON commissions (created_at);

CREATE TABLE IF NOT EXISTS withdrawals (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  amount INTEGER NOT NULL,
  phone TEXT NOT NULL,
  status TEXT NOT NULL,                     -- requested, paid, rejected, cancelled
  reason TEXT,                              -- why it was turned down
  reference TEXT,                           -- the mobile money transaction, once paid
  created_at INTEGER NOT NULL,
  decided_at INTEGER,
  decided_by TEXT
);
CREATE INDEX IF NOT EXISTS withdrawals_user ON withdrawals (user_id, created_at);
CREATE INDEX IF NOT EXISTS withdrawals_status ON withdrawals (status, created_at);

-- ---------- system watch (for the CTO) ----------
CREATE TABLE IF NOT EXISTS alerts (
  id TEXT PRIMARY KEY,
  key TEXT NOT NULL,                        -- the same problem updates one open alert
  kind TEXT NOT NULL,                       -- security, failure, malfunction, storage, upgrade, traffic, latency, crash, partner
  level TEXT NOT NULL,                      -- info, warning, critical
  title TEXT NOT NULL,
  detail TEXT NOT NULL,
  action TEXT,                              -- what to do about it
  count INTEGER NOT NULL DEFAULT 1,
  first_at INTEGER NOT NULL,
  last_at INTEGER NOT NULL,
  resolved_at INTEGER,
  resolved_by TEXT
);
CREATE UNIQUE INDEX IF NOT EXISTS alerts_open_key ON alerts (key) WHERE resolved_at IS NULL;
CREATE INDEX IF NOT EXISTS alerts_last ON alerts (last_at);

CREATE TABLE IF NOT EXISTS security_events (
  id TEXT PRIMARY KEY,
  created_at INTEGER NOT NULL,
  kind TEXT NOT NULL,
  ip TEXT,
  detail TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS security_events_time ON security_events (created_at);

-- One row per minute of API traffic.
CREATE TABLE IF NOT EXISTS request_stats (
  minute INTEGER PRIMARY KEY,               -- minutes since 1970
  count INTEGER NOT NULL,
  err5 INTEGER NOT NULL,
  err4 INTEGER NOT NULL,
  limited INTEGER NOT NULL,
  auth_fail INTEGER NOT NULL,
  p50 INTEGER NOT NULL,
  p95 INTEGER NOT NULL,
  max_ms INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS ip_blocks (
  ip TEXT PRIMARY KEY,
  reason TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  until INTEGER,                            -- NULL = until unblocked
  created_by TEXT
);

-- Problems from phones and from the server, grouped by what they are.
ALTER TABLE app_errors ADD COLUMN sig TEXT;
ALTER TABLE app_errors ADD COLUMN device TEXT;
CREATE INDEX IF NOT EXISTS app_errors_sig ON app_errors (sig, created_at);
CREATE TABLE IF NOT EXISTS problem_status (
  sig TEXT PRIMARY KEY,
  resolved_at INTEGER NOT NULL,
  resolved_by TEXT
);
