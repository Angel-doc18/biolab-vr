-- Partner accounts: the users table only allowed students, parents and
-- teachers. SQLite cannot change a CHECK in place, so the table is rebuilt with
-- the same columns and data, and 'partner' allowed. No other table refers to it.
CREATE TABLE users_next (
  id TEXT PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('student', 'parent', 'teacher', 'partner')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  email TEXT UNIQUE,
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  phone_verified INTEGER NOT NULL DEFAULT 0,
  lang TEXT NOT NULL DEFAULT 'en',
  level TEXT,
  exam_year INTEGER,
  class_name TEXT,
  school_id TEXT,
  school_name TEXT,
  target_grade TEXT,
  daily_minutes INTEGER,
  reminder_time TEXT,
  parent_phone TEXT,
  parent_report_freq TEXT NOT NULL DEFAULT 'weekly',
  parent_report_lang TEXT NOT NULL DEFAULT 'en',
  inactivity_alert INTEGER NOT NULL DEFAULT 0,
  onboarded INTEGER NOT NULL DEFAULT 0,
  pro_until INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  deleted_at INTEGER,
  birth_year INTEGER,
  birth_month INTEGER,
  consent_status TEXT,
  consent_at INTEGER,
  guardian_name TEXT,
  subjects TEXT,
  avatar_at INTEGER,
  is_admin INTEGER NOT NULL DEFAULT 0,
  school_type TEXT,
  stream TEXT,
  specialty TEXT,
  series TEXT,
  blocked_at INTEGER,
  blocked_reason TEXT,
  ref_code TEXT,
  ref_rate REAL,
  ref_paused INTEGER NOT NULL DEFAULT 0,
  partner_kind TEXT
);

INSERT INTO users_next (
  id, role, name, phone, email, password_hash, password_salt, phone_verified, lang, level, exam_year, class_name, school_id, school_name,
  target_grade, daily_minutes, reminder_time, parent_phone, parent_report_freq, parent_report_lang, inactivity_alert, onboarded, pro_until,
  created_at, updated_at, deleted_at, birth_year, birth_month, consent_status, consent_at, guardian_name, subjects, avatar_at, is_admin,
  school_type, stream, specialty, series, blocked_at, blocked_reason, ref_code, ref_rate, ref_paused, partner_kind
)
SELECT
  id, role, name, phone, email, password_hash, password_salt, phone_verified, lang, level, exam_year, class_name, school_id, school_name,
  target_grade, daily_minutes, reminder_time, parent_phone, parent_report_freq, parent_report_lang, inactivity_alert, onboarded, pro_until,
  created_at, updated_at, deleted_at, birth_year, birth_month, consent_status, consent_at, guardian_name, subjects, avatar_at, is_admin,
  school_type, stream, specialty, series, blocked_at, blocked_reason, ref_code, ref_rate, ref_paused, partner_kind
FROM users;

DROP TABLE users;
ALTER TABLE users_next RENAME TO users;
CREATE UNIQUE INDEX IF NOT EXISTS users_ref_code ON users (ref_code) WHERE ref_code IS NOT NULL;
