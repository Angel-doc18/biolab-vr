-- A screenshot of the mobile money payment for a paid withdrawal, added by the
-- founder or the CTO, so the partner can see the money was sent. Stored like the
-- profile pictures: one compressed image per withdrawal, as base64.
CREATE TABLE IF NOT EXISTS withdrawal_proofs (
  withdrawal_id TEXT PRIMARY KEY,
  mime TEXT NOT NULL,
  data TEXT NOT NULL,
  added_by TEXT,
  created_at INTEGER NOT NULL
);
