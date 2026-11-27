// "Continue with Google", on the Log in and Create account screens.
// The button is Klass8's own (styled to Google's rules), so it shows at once.
// A tap goes to the small klass8.com/google.html page, which sends the person
// to Google's standard sign-in page and, when Google sends them back, hands
// the app a one-time code. The code only works with a secret that never left
// the app (as in OAuth PKCE): on the web the secret waits in this browser, in
// the app it waits in the app.
//   web: the page goes back to klass8.com/app/?google_code=..., where the
//        opening screen (Splash) finishes the sign-in with googleReturn().
//   app: the page opens in the phone's browser and goes back to klass8://.
import { useEffect, useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Path } from 'react-native-svg';
import { P, T } from './kit';
import { API_BASE, get, post } from '../api/client';
import { useL, useLang } from '../i18n';

const SITE = 'https://klass8.com';
const ON = 'k8:google:on'; // whether Google sign-in was on last time (shows the button at once)
const SECRET = 'k8:google:secret'; // web: the secret, while the person is at Google

// ---------- is Google sign-in on? ----------
let known = null; // true | false | null (not known yet)
let asking = null;
function googleOn() {
  if (!asking) {
    asking = get('/v1/auth/google/config', { auth: false })
      .then((r) => {
        known = Boolean(r.clientId);
        AsyncStorage.setItem(ON, known ? '1' : '0').catch(() => {});
        return known;
      })
      .catch(() => {
        asking = null;
        return known;
      });
  }
  return asking;
}
AsyncStorage.getItem(ON)
  .then((v) => {
    if (known === null && v !== null) known = v === '1';
  })
  .catch(() => {});

// where the button can work: the web app on klass8.com, and the phone app
// against the live server (Google only returns to klass8.com)
const usable = () =>
  Platform.OS === 'web' ? typeof location !== 'undefined' && location.origin === SITE : /^https:\/\/klass8\.com$/.test(API_BASE);

// ---------- the secret and its fingerprint ----------
const b64url = (s) => s.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromBytes = (bytes) => b64url(btoa(String.fromCharCode(...bytes)));

async function secretPair() {
  if (Platform.OS === 'web') {
    const verifier = fromBytes(crypto.getRandomValues(new Uint8Array(48)));
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
    return { verifier, challenge: fromBytes(new Uint8Array(digest)) };
  }
  const Crypto = require('expo-crypto');
  const verifier = fromBytes(Crypto.getRandomBytes(48));
  const challenge = b64url(await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, verifier, { encoding: Crypto.CryptoEncoding.BASE64 }));
  return { verifier, challenge };
}

const pageUrl = ({ challenge, redirect, role, lang, referralCode }) =>
  `${SITE}/google.html?` +
  [`challenge=${challenge}`, `redirect=${encodeURIComponent(redirect)}`, `role=${role || 'student'}`, `lang=${lang}`, referralCode ? `ref=${encodeURIComponent(referralCode)}` : '']
    .filter(Boolean)
    .join('&');

// web: off to Google; this page is left, and the answer comes back to /app/
async function webGoogle(args) {
  const { verifier, challenge } = await secretPair();
  try {
    localStorage.setItem(SECRET, JSON.stringify({ verifier, at: Date.now() }));
  } catch {
    throw new Error('This browser blocks the storage Google sign-in needs. Allow site data for klass8.com, or log in with your phone number.');
  }
  location.assign(pageUrl({ ...args, challenge, redirect: `${SITE}/app/` }));
  return new Promise(() => {}); // the page is leaving
}

// app: the page in the phone's browser, back into the app with the code
async function appGoogle(args) {
  const WebBrowser = require('expo-web-browser');
  const Linking = require('expo-linking');
  const { verifier, challenge } = await secretPair();
  const redirect = Linking.createURL('google');
  const res = await WebBrowser.openAuthSessionAsync(pageUrl({ ...args, challenge, redirect }), redirect);
  if (res.type !== 'success' || !res.url) return null; // closed
  const err = /[?&]error=([^&#]+)/.exec(res.url)?.[1];
  if (err) throw new Error(decodeURIComponent(err.replace(/\+/g, ' ')));
  const code = /[?&]code=([^&#]+)/.exec(res.url)?.[1];
  if (!code) return null;
  return post('/v1/auth/google/exchange', { code: decodeURIComponent(code), verifier }, { auth: false });
}

// web: back from Google? Called by the opening screen. Gives
// { session } (the sign-in answer: { user, accessToken, ..., created }),
// { error }, or null when this is not a return from Google.
export async function googleReturn() {
  if (Platform.OS !== 'web' || typeof location === 'undefined') return null;
  const q = new URLSearchParams(location.search);
  const code = q.get('google_code');
  const error = q.get('google_error');
  if (!code && !error) return null;
  q.delete('google_code');
  q.delete('google_error');
  try {
    history.replaceState(null, '', location.pathname + (q.toString() ? `?${q}` : '') + location.hash);
  } catch {
    // the address keeps the code; it is single use anyway
  }
  if (error) return { error };
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(SECRET) || 'null');
    localStorage.removeItem(SECRET);
  } catch {
    saved = null;
  }
  if (!saved?.verifier || Date.now() - saved.at > 15 * 60_000) return { error: 'The Google sign-in took too long. Try again.' };
  try {
    return { session: await post('/v1/auth/google/exchange', { code, verifier: saved.verifier }, { auth: false }) };
  } catch (e) {
    return { error: e?.message || 'Google sign-in failed. Try again.' };
  }
}

function GoogleG() {
  return (
    <Svg width={18} height={18} viewBox="0 0 48 48">
      <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </Svg>
  );
}

// mode: 'signin' | 'signup'. onSession(r): r is the sign-in answer
// ({ user, accessToken, ..., created }). On the web onSession is not called:
// the page goes to Google and the sign-in ends on the opening screen.
export default function GoogleButton({ mode = 'signin', role, referralCode, onSession, onError }) {
  const L = useL();
  const lang = useLang();
  const [on, setOn] = useState(known);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let live = true;
    googleOn().then((v) => live && setOn(v));
    return () => {
      live = false;
    };
  }, []);
  // shown at once unless Google sign-in is known to be off
  if (on === false || !usable()) return null;

  const label = mode === 'signup' ? L('Sign up with Google', 'S’inscrire avec Google') : L('Continue with Google', 'Continuer avec Google');
  const press = async () => {
    setBusy(true);
    try {
      const args = { role, lang, referralCode };
      const r = await (Platform.OS === 'web' ? webGoogle(args) : appGoogle(args));
      if (r) await onSession(r);
    } catch (e) {
      onError?.(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <P
      c="h-12 rounded-full flex-row items-center justify-center gap-space-sm"
      style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#747775' }}
      onPress={press}
      disabled={busy}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      {busy ? <ActivityIndicator color="#1f1f1f" /> : <GoogleG />}
      <T c="font-label-lg text-label-lg" style={{ color: '#1f1f1f', fontWeight: '600' }}>
        {label}
      </T>
    </P>
  );
}
