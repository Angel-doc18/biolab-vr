// Password hashing, token signing and random identifiers, all on WebCrypto.

const enc = new TextEncoder();
const PBKDF2_ITERATIONS = 100000; // Workers' PBKDF2 ceiling

const toB64Url = (bytes) =>
  btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64Url = (s) => {
  const b = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4));
  return Uint8Array.from(b, (c) => c.charCodeAt(0));
};
const toHex = (bytes) => [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('');

export const randomToken = (n = 32) => toB64Url(crypto.getRandomValues(new Uint8Array(n)));
export const uuid = () => crypto.randomUUID();

// Human-friendly code without look-alike characters (0/O, 1/I).
export function randomCode(length = 6, alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789') {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return [...bytes].map((b) => alphabet[b % alphabet.length]).join('');
}
export function randomDigits(length = 6) {
  const bytes = crypto.getRandomValues(new Uint32Array(length));
  return [...bytes].map((b) => String(b % 10)).join('');
}

export async function sha256(text) {
  return toHex(await crypto.subtle.digest('SHA-256', enc.encode(text)));
}

// HMAC-SHA256 of a message, base64url. Used for short-lived signed download links.
export async function hmac(secret, message) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return toB64Url(await crypto.subtle.sign('HMAC', key, enc.encode(message)));
}

// Constant-time comparison for equal-length strings.
export function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function hashPassword(password, saltHex) {
  const salt = saltHex ? Uint8Array.from(saltHex.match(/../g).map((h) => parseInt(h, 16))) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: PBKDF2_ITERATIONS }, key, 256);
  return { hash: toHex(bits), salt: toHex(salt) };
}

export async function verifyPassword(password, hash, salt) {
  const { hash: candidate } = await hashPassword(password, salt);
  return safeEqual(candidate, hash);
}

async function hmacKey(secret) {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

// Minimal HS256 JWT (header fixed, so no algorithm confusion is possible).
export async function signJwt(payload, secret, ttlSeconds) {
  const header = toB64Url(enc.encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));
  const iat = Math.floor(Date.now() / 1000);
  const body = toB64Url(enc.encode(JSON.stringify({ ...payload, iat, exp: iat + ttlSeconds })));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(secret), enc.encode(`${header}.${body}`));
  return `${header}.${body}.${toB64Url(sig)}`;
}

export async function verifyJwt(token, secret, { requireAlg = 'HS256' } = {}) {
  if (typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const header = JSON.parse(new TextDecoder().decode(fromB64Url(parts[0])));
    if (header.alg !== requireAlg) return null;
    const valid = await crypto.subtle.verify('HMAC', await hmacKey(secret), fromB64Url(parts[2]), enc.encode(`${parts[0]}.${parts[1]}`));
    if (!valid) return null;
    const payload = JSON.parse(new TextDecoder().decode(fromB64Url(parts[1])));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
