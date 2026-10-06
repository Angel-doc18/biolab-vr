-- Profile pictures: one small square picture per user (JPEG, PNG or WebP),
-- stored as base64. users.avatar_at changes whenever the picture changes, so the
-- app knows when to fetch it again.
ALTER TABLE users ADD COLUMN avatar_at INTEGER;
CREATE TABLE avatars (
  user_id TEXT PRIMARY KEY,
  mime TEXT NOT NULL,
  data TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
