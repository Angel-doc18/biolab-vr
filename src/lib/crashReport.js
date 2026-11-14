import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { API_BASE } from '../api/client';

// When something breaks on a phone, the error message and where it happened in
// the code are sent to Klass8's server so it can be found and fixed. Nothing
// about the student (name, phone, answers) is sent. A report that cannot be
// sent before the app closes is kept and sent at the next start.
const BUILD = process.env.EXPO_PUBLIC_BUILD || 'dev';
const KEY = 'klass8.pendingErrors';
const MAX_PER_RUN = 5;
const seen = new Set();
let sent = 0;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// A random id for this installation (not the person), so the CTO can see how
// many phones a problem reaches.
let device = null;
AsyncStorage.getItem('klass8.device')
  .then(async (v) => {
    device = v || `d${Math.random().toString(36).slice(2, 12)}${Date.now().toString(36)}`;
    if (!v) await AsyncStorage.setItem('klass8.device', device);
  })
  .catch(() => {});

function shape(error, where, fatal) {
  const message = error && typeof error === 'object' && 'message' in error ? error.message : error;
  return {
    message: String(message || 'Unknown error').slice(0, 500),
    stack: String((error && error.stack) || '').slice(0, 4000),
    where: String(where || 'app').slice(0, 40),
    fatal: !!fatal,
    platform: Platform.OS,
    os: String(Platform.Version ?? ''),
    build: BUILD,
    device,
  };
}

async function post(report) {
  const res = await fetch(`${API_BASE}/v1/app/errors`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-klass8-client': '2' },
    body: JSON.stringify(report),
  });
  return res.ok;
}

async function keep(report) {
  try {
    const list = JSON.parse((await AsyncStorage.getItem(KEY)) || '[]');
    list.push(report);
    await AsyncStorage.setItem(KEY, JSON.stringify(list.slice(-MAX_PER_RUN)));
  } catch {
    // Storage full or unavailable: the report is lost, the app carries on.
  }
}

// Once per run: the same error is reported once, and at most a few per run.
function firstTime(report) {
  const sig = `${report.where}|${report.message}`;
  if (seen.has(sig) || sent >= MAX_PER_RUN) return false;
  seen.add(sig);
  sent += 1;
  return true;
}

export function reportError(error, where = 'app') {
  try {
    const report = shape(error, where, false);
    if (!firstTime(report)) return;
    post(report).catch(() => keep(report));
  } catch {
    // Reporting must never break the app.
  }
}

// Sends reports kept from a run that closed before they went out.
export async function sendKeptReports() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return;
    await AsyncStorage.removeItem(KEY);
    for (const report of JSON.parse(raw)) await post({ ...report, late: true }).catch(() => false);
  } catch {
    // Try again at the next start.
  }
}

// Catches errors nothing else caught. For an error that will close the app,
// the report gets a moment to go out (or be kept) before the app closes as usual.
export function installCrashReporter() {
  const EU = global.ErrorUtils;
  if (!EU || typeof EU.getGlobalHandler !== 'function') return;
  const previous = EU.getGlobalHandler();
  EU.setGlobalHandler((error, isFatal) => {
    let report = null;
    try {
      report = shape(error, isFatal ? 'fatal' : 'uncaught', isFatal);
      if (!firstTime(report)) report = null;
    } catch {
      report = null;
    }
    if (!report) return previous?.(error, isFatal);
    if (!isFatal) {
      post(report).catch(() => keep(report));
      return previous?.(error, isFatal);
    }
    Promise.race([post(report).catch(() => false), wait(1500).then(() => false)])
      .then((ok) => (ok ? null : Promise.race([keep(report), wait(500)])))
      .finally(() => previous?.(error, isFatal));
    return undefined;
  });
  setTimeout(sendKeptReports, 8000);
}
