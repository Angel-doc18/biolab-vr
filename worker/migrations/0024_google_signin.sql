-- Signing up and in with a Google account. A Google user is linked by
-- Google's account id (google_sub); an existing account with the same
-- verified email is linked on the first Google sign-in. Google users without
-- a phone number get a private placeholder ('g:' and the Google id), never
-- shown, until they add their number.
ALTER TABLE users ADD COLUMN google_sub TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS users_google_sub ON users (google_sub) WHERE google_sub IS NOT NULL;

-- The phone app signs in with Google through a web page, which hands the app
-- a one-time code (bound to a secret only the app knows, as in OAuth PKCE).
CREATE TABLE IF NOT EXISTS oauth_codes (
  code TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  challenge TEXT NOT NULL,
  created INTEGER NOT NULL DEFAULT 0,
  expires_at INTEGER NOT NULL
);
