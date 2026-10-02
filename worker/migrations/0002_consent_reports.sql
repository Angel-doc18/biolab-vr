-- Parental consent (Cameroon Law No. 2024/017: consent of a parent or guardian
-- for anyone under 18) and reports on AI answers.

-- Students give their birth year and month; parents and teachers do not need consent.
ALTER TABLE users ADD COLUMN birth_year INTEGER;
ALTER TABLE users ADD COLUMN birth_month INTEGER;
-- NULL: not asked yet. 'not_needed': adult or non-student. 'pending', 'granted', 'refused'.
ALTER TABLE users ADD COLUMN consent_status TEXT;
ALTER TABLE users ADD COLUMN consent_at INTEGER;
ALTER TABLE users ADD COLUMN guardian_name TEXT;

-- One row per request sent to a parent. The token itself is never stored.
CREATE TABLE consent_requests (
  token_hash TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  guardian_name TEXT,
  guardian_phone TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  decision TEXT,
  decided_at INTEGER,
  decided_via TEXT,
  decided_ip_hash TEXT
);
CREATE INDEX idx_consent_user ON consent_requests(user_id);

-- "Report this answer" from the tutor (required for apps with AI-generated content).
CREATE TABLE ai_reports (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  question TEXT,
  answer TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  resolved_at INTEGER
);
CREATE INDEX idx_ai_reports_open ON ai_reports(resolved_at, created_at);

-- Photo markings are counted separately from typed ones.
ALTER TABLE ai_usage ADD COLUMN photos INTEGER NOT NULL DEFAULT 0;

-- Existing parents and teachers are adults.
UPDATE users SET consent_status = 'not_needed' WHERE role IN ('parent', 'teacher');
