-- The founder and the CTO can see the app as each kind of account: a student,
-- a teacher, a parent and a partner of their own. These preview accounts are
-- linked to the admin (preview_of), always free (is_admin = 1), cannot be signed
-- into with a password, and are left out of the figures, lists and leaderboard.
ALTER TABLE users ADD COLUMN preview_of TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_preview ON users (preview_of, role) WHERE preview_of IS NOT NULL;
