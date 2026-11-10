-- Errors the app reports when something breaks on a phone: the message, where
-- in the code it happened and the app build. Nothing about the student.
-- Only the newest 2000 are kept.
CREATE TABLE IF NOT EXISTS app_errors (
  id TEXT PRIMARY KEY,
  created_at INTEGER NOT NULL,
  place TEXT,
  fatal INTEGER NOT NULL DEFAULT 0,
  late INTEGER NOT NULL DEFAULT 0,
  platform TEXT,
  os TEXT,
  build TEXT,
  message TEXT NOT NULL,
  stack TEXT
);
CREATE INDEX IF NOT EXISTS app_errors_created ON app_errors (created_at);
