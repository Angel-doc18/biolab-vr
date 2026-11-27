-- The AI study space: a student's (or a teacher's) chats, kept to come back
-- to. Each chat has its messages (text, uploaded files, the questions found in
-- them, worked solutions, notes explained, revision quizzes and their marking)
-- and the files themselves (photos, PDFs, Word documents) with their text.
CREATE TABLE IF NOT EXISTS study_chats (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT 'New chat',
  mode TEXT NOT NULL DEFAULT 'student',
  subject TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  deleted_at INTEGER
);
CREATE INDEX IF NOT EXISTS study_chats_user ON study_chats (user_id, updated_at);

CREATE TABLE IF NOT EXISTS study_messages (
  id TEXT PRIMARY KEY,
  chat_id TEXT NOT NULL,
  role TEXT NOT NULL,
  kind TEXT NOT NULL DEFAULT 'text',
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS study_messages_chat ON study_messages (chat_id, created_at);

CREATE TABLE IF NOT EXISTS study_files (
  id TEXT PRIMARY KEY,
  chat_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  mime TEXT NOT NULL,
  kind TEXT NOT NULL,
  size INTEGER NOT NULL,
  pages INTEGER,
  text TEXT,
  image TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS study_files_chat ON study_files (chat_id);

-- Daily use of the study space (each question solved, notes explained, quiz
-- written or answer marked counts one).
ALTER TABLE ai_usage ADD COLUMN study INTEGER NOT NULL DEFAULT 0;
