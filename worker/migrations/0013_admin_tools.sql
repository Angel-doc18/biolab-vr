-- Settings an admin changes in the app: the prices and whether students are
-- charged. Until one is set, the built-in value or the server's environment
-- (PAYWALL) applies.
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  updated_by TEXT
);

-- An account an admin has blocked cannot sign in or use the app until unblocked.
ALTER TABLE users ADD COLUMN blocked_at INTEGER;

-- Website messages an admin has dealt with.
ALTER TABLE contact_messages ADD COLUMN done_at INTEGER;
