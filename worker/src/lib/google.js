// Checking a "Sign in with Google" ID token: signed by Google (its public
// keys, cached for a few hours), issued by Google, for our Client ID, not
// expired, and for a verified email address. No Google secret is needed: the
// Client ID is public.
import { HttpError } from './http.js';
import { setting } from './settings.js';

const CERTS = 'https://www.googleapis.com/oauth2/v3/certs';
let keys = { list: null, at: 0 };

async function googleKeys(force = false) {
  if (!force && keys.list && Date.now() - keys.at < 6 * 3_600_000) return keys.list;
  const r = await fetch(CERTS, { signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new HttpError(502, 'Google could not be reached. Try again in a moment.', 'google_unreachable');
  keys = { list: (await r.json()).keys || [], at: Date.now() };
  return keys.list;
}

const part = (s) => JSON.parse(Buffer.from(s, 'base64url').toString('utf8'));

// The Client ID(s) set for this app: the CTO's System page or the server.
export function googleClientIds(env) {
  return [setting('google_client_id'), env.GOOGLE_CLIENT_ID, ...(env.GOOGLE_CLIENT_IDS || '').split(',')].map((x) => String(x || '').trim()).filter(Boolean);
}

// The Google account in a token: { sub, email, name, picture }.
export async function verifyGoogleToken(env, token) {
  const ids = googleClientIds(env);
  if (!ids.length) throw new HttpError(503, 'Google sign-in is not set up yet.', 'google_off');
  const bad = () => new HttpError(401, 'Google sign-in could not be checked. Try again.', 'google_invalid');
  const [h, p, sig] = String(token || '').split('.');
  if (!h || !p || !sig) throw bad();
  let header;
  let claims;
  try {
    header = part(h);
    claims = part(p);
  } catch {
    throw bad();
  }
  if (header.alg !== 'RS256') throw bad();
  let jwk = (await googleKeys()).find((k) => k.kid === header.kid);
  if (!jwk) jwk = (await googleKeys(true)).find((k) => k.kid === header.kid); // Google rotated its keys
  if (!jwk) throw bad();
  const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
  const okSig = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, Buffer.from(sig, 'base64url'), new TextEncoder().encode(`${h}.${p}`));
  if (!okSig) throw bad();
  if (!['accounts.google.com', 'https://accounts.google.com'].includes(claims.iss)) throw bad();
  if (!ids.includes(claims.aud)) throw bad();
  if (!(claims.exp * 1000 > Date.now() - 60_000)) throw new HttpError(401, 'The Google sign-in took too long. Try again.', 'google_expired');
  if (!claims.email || !(claims.email_verified === true || claims.email_verified === 'true')) throw new HttpError(401, 'This Google account has no verified email address.', 'google_unverified');
  return { nonce: claims.nonce || null, sub: String(claims.sub), email: String(claims.email).toLowerCase(), name: String(claims.name || claims.given_name || claims.email.split('@')[0]).slice(0, 80), picture: claims.picture || null };
}
