-- The people behind Klass8, shown on the public website (the About page, and
-- the home page for those marked on_home). Admins manage them in the app's
-- admin screen. The photo is a small square JPEG, PNG or WebP kept as base64,
-- like profile pictures; photo_at changes with it so browsers fetch it again.
CREATE TABLE IF NOT EXISTS team_members (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT NOT NULL DEFAULT '',
  link TEXT,
  photo_mime TEXT,
  photo TEXT,
  photo_at INTEGER,
  sort INTEGER NOT NULL DEFAULT 0,
  on_home INTEGER NOT NULL DEFAULT 1,
  visible INTEGER NOT NULL DEFAULT 1,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS team_members_sort ON team_members (sort, created_at);
