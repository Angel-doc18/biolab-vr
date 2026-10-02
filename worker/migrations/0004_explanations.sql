-- Spoken explanations of diagrams and practicals written by the tutor. The same
-- diagram in the same language always gets the same text, so each one is
-- generated once and shared. The key is a hash of everything that was explained.
CREATE TABLE ai_explanations (
  key TEXT PRIMARY KEY,
  kind TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
