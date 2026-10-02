-- Characters of new speech made by the natural voice each day, per user and in
-- total (user_id '*'), so its cost stays within a set budget. The audio itself
-- is kept in the VOICE_CACHE KV namespace.
CREATE TABLE voice_usage (
  user_id TEXT NOT NULL,
  day TEXT NOT NULL,
  chars INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, day)
);
