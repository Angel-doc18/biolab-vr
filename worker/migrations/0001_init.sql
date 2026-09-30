-- BioSpatial VR schema. Times are epoch milliseconds.

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('student', 'parent', 'teacher')),
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
  deleted_at INTEGER
);

CREATE TABLE refresh_tokens (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  revoked INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_refresh_user ON refresh_tokens(user_id);

CREATE TABLE otp_codes (
  phone TEXT NOT NULL,
  purpose TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (phone, purpose)
);

CREATE TABLE schools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  town TEXT NOT NULL,
  region TEXT,
  created_by TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX idx_schools_name ON schools(name);

CREATE TABLE classes (
  id TEXT PRIMARY KEY,
  school_id TEXT,
  teacher_id TEXT NOT NULL,
  name TEXT NOT NULL,
  join_code TEXT NOT NULL UNIQUE,
  created_at INTEGER NOT NULL
);
CREATE INDEX idx_classes_teacher ON classes(teacher_id);

CREATE TABLE class_members (
  class_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  joined_at INTEGER NOT NULL,
  PRIMARY KEY (class_id, student_id)
);
CREATE INDEX idx_members_student ON class_members(student_id);

-- Client-owned progress snapshot plus the derived numbers teachers and parents see.
CREATE TABLE progress (
  user_id TEXT PRIMARY KEY,
  data TEXT NOT NULL,
  mastery INTEGER NOT NULL DEFAULT 0,
  xp INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  labs_done INTEGER NOT NULL DEFAULT 0,
  mocks_done INTEGER NOT NULL DEFAULT 0,
  best_mock INTEGER,
  unit_mastery TEXT NOT NULL DEFAULT '{}',
  minutes_week INTEGER NOT NULL DEFAULT 0,
  last_active INTEGER,
  updated_at INTEGER NOT NULL
);

CREATE TABLE assignments (
  id TEXT PRIMARY KEY,
  class_id TEXT NOT NULL,
  teacher_id TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('quiz', 'mock', 'lab')),
  ref TEXT NOT NULL,
  title TEXT NOT NULL,
  due_at INTEGER NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX idx_assign_class ON assignments(class_id);

CREATE TABLE assignment_done (
  assignment_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  score INTEGER,
  done_at INTEGER NOT NULL,
  PRIMARY KEY (assignment_id, student_id)
);

CREATE TABLE notifications (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  kind TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  data TEXT,
  read INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE INDEX idx_notif_user ON notifications(user_id, created_at);

CREATE TABLE parent_links (
  parent_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  PRIMARY KEY (parent_id, student_id)
);

CREATE TABLE link_codes (
  code TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  expires_at INTEGER NOT NULL
);

CREATE TABLE payments (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  provider TEXT NOT NULL,
  reference TEXT UNIQUE,
  plan TEXT NOT NULL,
  amount INTEGER NOT NULL,
  phone TEXT NOT NULL,
  operator TEXT,
  status TEXT NOT NULL,
  applied INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX idx_payments_user ON payments(user_id, created_at);

CREATE TABLE vouchers (
  code_hash TEXT PRIMARY KEY,
  label TEXT,
  days INTEGER NOT NULL,
  max_uses INTEGER NOT NULL,
  uses INTEGER NOT NULL DEFAULT 0,
  expires_at INTEGER,
  created_at INTEGER NOT NULL
);

CREATE TABLE voucher_redemptions (
  code_hash TEXT NOT NULL,
  user_id TEXT NOT NULL,
  redeemed_at INTEGER NOT NULL,
  PRIMARY KEY (code_hash, user_id)
);

CREATE TABLE ai_usage (
  user_id TEXT NOT NULL,
  day TEXT NOT NULL,
  asks INTEGER NOT NULL DEFAULT 0,
  marks INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, day)
);

CREATE TABLE licence_requests (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  school_name TEXT NOT NULL,
  students INTEGER NOT NULL,
  contact TEXT NOT NULL,
  message TEXT,
  created_at INTEGER NOT NULL
);
