// Keys the CTO enters in the app (the AI providers' keys, the Brevo email key).
// They are kept in the settings table encrypted (AES-GCM, with a key derived
// from the server's JWT_SECRET), are never sent back to the app in full, and
// fall back to the server's environment when not set in the app.
import { saveSettings, setting } from './settings.js';

const enc = new TextEncoder();
const dec = new TextDecoder();
let keyCache = { secret: null, key: null };

async function aesKey(env) {
  if (keyCache.secret === env.JWT_SECRET && keyCache.key) return keyCache.key;
  const raw = await crypto.subtle.digest('SHA-256', enc.encode(`klass8-secrets:${env.JWT_SECRET}`));
  const key = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']);
  keyCache = { secret: env.JWT_SECRET, key };
  return key;
}

const b64 = (bytes) => btoa(String.fromCharCode(...bytes));
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function seal(env, text) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await aesKey(env), enc.encode(text)));
  const out = new Uint8Array(iv.length + ct.length);
  out.set(iv);
  out.set(ct, iv.length);
  return `v1:${b64(out)}`;
}

const opened = new Map(); // sealed value -> plain text, so each is decrypted once
async function unseal(env, blob) {
  if (!blob || !blob.startsWith('v1:')) return null;
  if (opened.has(blob)) return opened.get(blob);
  try {
    const all = unb64(blob.slice(3));
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: all.slice(0, 12) }, await aesKey(env), all.slice(12));
    const text = dec.decode(pt);
    opened.set(blob, text);
    return text;
  } catch {
    return null; // sealed with another JWT_SECRET: treated as not set
  }
}

// The key set in the app for `name`, else the environment variable, else null.
export async function secret(env, name, envName) {
  const fromApp = await unseal(env, setting(`secret_${name}`));
  if (fromApp) return { value: fromApp, from: 'app' };
  if (envName && env[envName]) return { value: env[envName], from: 'server' };
  return { value: null, from: null };
}

// Saves (or, with an empty value, removes) a key entered in the app.
export async function setSecret(env, name, value, by) {
  await saveSettings(env, { [`secret_${name}`]: value ? await seal(env, value) : '' }, by);
}

// The last 4 characters, to recognise a key without showing it.
export const hint = (value) => (value ? `…${String(value).slice(-4)}` : null);
