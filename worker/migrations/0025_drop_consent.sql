-- Parental approval for students under 18 was taken out of the app on
-- 2026-10-13: every account is fully active from sign-up, whatever its age.
-- Its leftovers go too: the requests table (empty) and the age and approval
-- columns on users (no longer read or written anywhere).
DROP INDEX IF EXISTS idx_consent_user;
DROP TABLE IF EXISTS consent_requests;
ALTER TABLE users DROP COLUMN consent_status;
ALTER TABLE users DROP COLUMN consent_at;
ALTER TABLE users DROP COLUMN guardian_name;
ALTER TABLE users DROP COLUMN birth_year;
ALTER TABLE users DROP COLUMN birth_month;
