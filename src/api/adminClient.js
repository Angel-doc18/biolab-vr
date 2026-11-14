// The admin console's own session. Admin accounts are separate from students,
// parents and teachers (worker/src/lib/adminAuth.js) but sign in on the same
// page: when the sign-in answers with kind 'admin', the session is kept here,
// apart from the user's, and its tokens open only the admin endpoints. On a
// phone the session lives in the keychain; in a browser, only for the open tab.
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { ApiError, rawRequest } from './client';

const KEY = 'klass8.admin.session';
let session = null;
let loaded = false;
let refreshing = null;
const listeners = new Set();

async function readStored() {
  try {
    if (Platform.OS === 'web') return JSON.parse(globalThis.sessionStorage?.getItem(KEY) || 'null');
    const raw = await SecureStore.getItemAsync(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

async function writeStored(value) {
  try {
    if (Platform.OS === 'web') {
      if (value) globalThis.sessionStorage?.setItem(KEY, JSON.stringify(value));
      else globalThis.sessionStorage?.removeItem(KEY);
    } else if (value) await SecureStore.setItemAsync(KEY, JSON.stringify(value));
    else await SecureStore.deleteItemAsync(KEY);
  } catch {
    // storage unavailable: the admin stays signed in only while the app is open
  }
}

async function save(next) {
  session = next
    ? {
        admin: next.admin || session?.admin || null,
        accessToken: next.accessToken,
        refreshToken: next.refreshToken,
        expiresAt: Date.now() + (next.expiresIn || 900) * 1000 - 30_000,
      }
    : null;
  await writeStored(session);
}

export async function loadAdminSession() {
  if (!loaded) {
    session = await readStored();
    loaded = true;
  }
  return session;
}

// Keeps the newest details of the signed-in admin (their role and title).
export async function setCurrentAdmin(admin) {
  if (!session || !admin) return;
  session = { ...session, admin };
  await writeStored(session);
}

// The signed-in admin ({ id, name, login, role, title, can }), or null.
export const currentAdmin = () => session?.admin || null;

// Called when the session ends on its own (expired, signed out elsewhere, switched off).
export function onAdminSignedOut(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// Keeps the admin session a sign-in returned (kind: 'admin').
export async function adminUseSession(r) {
  await save(r);
  loaded = true;
  return r.admin;
}

export async function adminSignOut() {
  const refreshToken = session?.refreshToken;
  await save(null);
  if (refreshToken) await rawRequest('/v1/admin/logout', { method: 'POST', body: { refreshToken } }).catch(() => {});
}

async function lost() {
  await save(null);
  listeners.forEach((fn) => fn());
}

async function refresh() {
  if (!session?.refreshToken) {
    await lost();
    throw new ApiError('Your admin session has ended. Sign in again.', { status: 401, code: 'admin_signed_out' });
  }
  if (!refreshing) {
    refreshing = rawRequest('/v1/admin/refresh', { method: 'POST', body: { refreshToken: session.refreshToken } })
      .then((next) => save(next))
      .catch(async (e) => {
        if (e.status === 401 || e.status === 403) await lost();
        throw e;
      })
      .finally(() => {
        refreshing = null;
      });
  }
  await refreshing;
}

async function adminApi(path, opts = {}) {
  await loadAdminSession();
  if (!session) {
    await lost();
    throw new ApiError('Your admin session has ended. Sign in again.', { status: 401, code: 'admin_signed_out' });
  }
  if (Date.now() > session.expiresAt) await refresh();
  try {
    return await rawRequest(path, { ...opts, token: session.accessToken });
  } catch (e) {
    if (e.status !== 401 || !session) throw e;
    await refresh();
    return rawRequest(path, { ...opts, token: session.accessToken });
  }
}

export const get = (p, o) => adminApi(p, o);
export const post = (p, body, o) => adminApi(p, { ...o, method: 'POST', body: body ?? {} });
export const patch = (p, body, o) => adminApi(p, { ...o, method: 'PATCH', body });
export const put = (p, body, o) => adminApi(p, { ...o, method: 'PUT', body });
export const del = (p, body, o) => adminApi(p, { ...o, method: 'DELETE', body });
