// HTTPS client for the ScienceAid API (the Worker keeps its original address). Tokens live in the OS keychain
// (expo-secure-store); the access token is short-lived and refreshed on demand.
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const API_BASE = (process.env.EXPO_PUBLIC_API_URL || process.env.EXPO_PUBLIC_AI_PROXY_URL || 'https://biospatial-vr-ai.biospatial-vr.workers.dev').replace(/\/+$/, '');

const KEY = 'biospatial.session';
const memory = { session: null };

// SecureStore is native only; the web preview keeps the session in memory.
async function readStored() {
  if (Platform.OS === 'web') return memory.session;
  try {
    const raw = await SecureStore.getItemAsync(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

async function writeStored(session) {
  memory.session = session;
  if (Platform.OS === 'web') return;
  try {
    if (session) await SecureStore.setItemAsync(KEY, JSON.stringify(session));
    else await SecureStore.deleteItemAsync(KEY);
  } catch {
    // keychain unavailable: the session only lasts for this launch
  }
}

let session = null;
let loaded = false;
let refreshing = null;
const listeners = new Set();

export class ApiError extends Error {
  constructor(message, { status = 0, code = 'error', details } = {}) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export async function loadSession() {
  if (!loaded) {
    session = await readStored();
    loaded = true;
  }
  return session;
}

export async function setSession(next) {
  session = next
    ? { accessToken: next.accessToken, refreshToken: next.refreshToken, expiresAt: Date.now() + (next.expiresIn || 900) * 1000 - 30_000 }
    : null;
  await writeStored(session);
}

// Fired when the server refuses the refresh token (session revoked or expired).
export function onSessionLost(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

async function raw(path, { method = 'GET', body, token, timeout = 20000, binary = false } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method,
      signal: ctrl.signal,
      headers: {
        Accept: 'application/json',
        ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch (e) {
    throw new ApiError(
      e?.name === 'AbortError' ? 'The connection timed out. Check your internet and try again.' : 'You are offline. Connect to the internet and try again.',
      { code: 'offline' }
    );
  } finally {
    clearTimeout(timer);
  }
  if (binary && res.ok) {
    try {
      return { bytes: await res.arrayBuffer(), type: res.headers.get('content-type') || '' };
    } catch {
      throw new ApiError('The connection was interrupted. Try again.', { code: 'offline' });
    }
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  if (!res.ok) {
    throw new ApiError(data?.error || 'Something went wrong. Please try again.', { status: res.status, code: data?.code || 'error', details: data });
  }
  return data;
}

async function refreshSession() {
  if (!session?.refreshToken) throw new ApiError('Please log in.', { status: 401, code: 'unauthorized' });
  if (!refreshing) {
    refreshing = raw('/v1/auth/refresh', { method: 'POST', body: { refreshToken: session.refreshToken } })
      .then((next) => setSession(next))
      .catch(async (e) => {
        if (e.status === 401) {
          await setSession(null);
          listeners.forEach((fn) => fn());
        }
        throw e;
      })
      .finally(() => {
        refreshing = null;
      });
  }
  await refreshing;
}

export async function api(path, opts = {}) {
  const { auth = true, ...rest } = opts;
  if (!auth) return raw(path, rest);
  await loadSession();
  if (!session) throw new ApiError('Please log in.', { status: 401, code: 'unauthorized' });
  if (Date.now() > session.expiresAt) await refreshSession();
  try {
    return await raw(path, { ...rest, token: session.accessToken });
  } catch (e) {
    if (e.status !== 401 || !session) throw e;
    await refreshSession();
    return raw(path, { ...rest, token: session.accessToken });
  }
}

export const get = (p, o) => api(p, o);
export const post = (p, body, o) => api(p, { ...o, method: 'POST', body: body ?? {} });
export const patch = (p, body, o) => api(p, { ...o, method: 'PATCH', body });
export const put = (p, body, o) => api(p, { ...o, method: 'PUT', body });
// For audio and other files: resolves to { bytes: ArrayBuffer, type }.
export const postBytes = (p, body, o) => api(p, { ...o, method: 'POST', body: body ?? {}, binary: true });
export const del = (p, body, o) => api(p, { ...o, method: 'DELETE', body });
