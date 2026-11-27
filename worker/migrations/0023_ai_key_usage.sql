-- Each AI key's use per day, for the CTO's System page: requests, tokens,
-- failures, speed, the last error, the provider's own counters (Groq and
-- Mistral send them), and until when a key is used up or refused (kept so a
-- restart does not try it again).
CREATE TABLE IF NOT EXISTS ai_key_usage (
  day TEXT NOT NULL,
  slot TEXT NOT NULL,
  requests INTEGER NOT NULL DEFAULT 0,
  tokens INTEGER NOT NULL DEFAULT 0,
  failures INTEGER NOT NULL DEFAULT 0,
  ms_total INTEGER NOT NULL DEFAULT 0,
  last_model TEXT,
  last_error TEXT,
  last_at INTEGER NOT NULL DEFAULT 0,
  used_up_until INTEGER NOT NULL DEFAULT 0,
  reason TEXT,
  limits TEXT,
  PRIMARY KEY (day, slot)
);
