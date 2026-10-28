// Whether the phone can reach the internet. Screens use it to tell students
// clearly when something needs a connection, and the API client uses it to fail
// at once instead of waiting for a request to time out. Lessons, diagrams,
// quizzes, Paper 1 and anything already downloaded keep working offline.
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

let last = null; // true, false, or null while not known yet
let kind = null; // 'wifi', 'cellular', ...
const listeners = new Set();
let started = false;

const reachable = (s) => (s.isConnected === false || s.isInternetReachable === false ? false : s.isConnected == null ? null : true);

function start() {
  if (started) return;
  started = true;
  try {
    NetInfo.addEventListener((s) => {
      kind = s.type || null;
      const now = reachable(s);
      if (now === last) return;
      last = now;
      listeners.forEach((f) => f(now));
    });
  } catch {
    // no network information on this device: treat it as online
  }
}

// True only when the phone is known to have no connection.
export function knownOffline() {
  start();
  return last === false;
}

// True on Wi-Fi or a cable, for downloads the student keeps to Wi-Fi.
export async function onWifi() {
  start();
  try {
    const s = await NetInfo.fetch();
    return s.type === 'wifi' || s.type === 'ethernet';
  } catch {
    return kind === 'wifi' || kind === 'ethernet';
  }
}

// The connection as a value that updates the screen: false when offline.
export function useOnline() {
  start();
  const [online, setOnline] = useState(last !== false);
  useEffect(() => {
    const f = (v) => setOnline(v !== false);
    listeners.add(f);
    return () => listeners.delete(f);
  }, []);
  return online;
}
