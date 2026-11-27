// "Continue with Google", on the Log in and Create account screens.
// In a browser it is Google's own button (Google Identity Services); the ID
// token it gives is checked by the server, which answers with the session.
// In the app the same button is shown on a small klass8.com page opened in
// the phone's browser (public/google.html), which hands the app a one-time
// code; the code only works with a secret that never left the app (as in
// OAuth PKCE). Nothing shows until Google sign-in is set up on the server.
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Platform, View, useWindowDimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { P, T, V } from './kit';
import { API_BASE, get, post } from '../api/client';
import { useL, useLang } from '../i18n';

let config = null;
const clientId = () =>
  (config =
    config ||
    get('/v1/auth/google/config', { auth: false })
      .then((r) => r.clientId || null)
      .catch(() => {
        config = null;
        return null;
      }));

// ---------- in a browser ----------
let gis = null;
const loadGis = () =>
  (gis =
    gis ||
    new Promise((resolve, reject) => {
      if (window.google?.accounts?.id) return resolve(window.google);
      const el = document.createElement('script');
      el.src = 'https://accounts.google.com/gsi/client';
      el.async = true;
      el.onload = () => resolve(window.google);
      el.onerror = () => {
        gis = null;
        reject(new Error('Google could not be reached. Check the connection.'));
      };
      document.head.appendChild(el);
    }));

function WebGoogle({ id, text, onCredential }) {
  const ref = useRef(null);
  const latest = useRef(onCredential);
  latest.current = onCredential;
  const { width } = useWindowDimensions();
  useEffect(() => {
    let live = true;
    loadGis()
      .then((google) => {
        if (!live || !ref.current) return;
        google.accounts.id.initialize({ client_id: id, callback: (r) => latest.current(r.credential), ux_mode: 'popup', auto_select: false, cancel_on_tap_outside: true });
        google.accounts.id.renderButton(ref.current, { type: 'standard', theme: 'outline', size: 'large', text, shape: 'pill', logo_alignment: 'center', width: Math.max(220, Math.min(400, width - 48)) });
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [id, text, width]);
  return <View ref={ref} style={{ alignItems: 'center', minHeight: 44 }} />;
}

// ---------- in the app ----------
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
const b64url = (s) => s.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function appGoogle({ role, lang, referralCode }) {
  const WebBrowser = require('expo-web-browser');
  const Crypto = require('expo-crypto');
  const Linking = require('expo-linking');
  const bytes = Crypto.getRandomBytes(48);
  const verifier = b64url(btoa(String.fromCharCode(...bytes)));
  const challenge = b64url(await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, verifier, { encoding: Crypto.CryptoEncoding.BASE64 }));
  const redirect = Linking.createURL('google');
  const q = [`challenge=${challenge}`, `redirect=${encodeURIComponent(redirect)}`, `role=${role || 'student'}`, `lang=${lang}`, referralCode ? `ref=${encodeURIComponent(referralCode)}` : ''].filter(Boolean).join('&');
  const res = await WebBrowser.openAuthSessionAsync(`${API_BASE}/app/google.html?${q}`, redirect);
  if (res.type !== 'success' || !res.url) return null; // closed
  const err = /[?&]error=([^&#]+)/.exec(res.url)?.[1];
  if (err) throw new Error(decodeURIComponent(err.replace(/\+/g, ' ')));
  const code = /[?&]code=([^&#]+)/.exec(res.url)?.[1];
  if (!code) return null;
  return post('/v1/auth/google/exchange', { code: decodeURIComponent(code), verifier }, { auth: false });
}

// mode: 'signin' | 'signup'. onSession(r): r is the sign-in answer
// ({ user, accessToken, ..., created }).
export default function GoogleButton({ mode = 'signin', role, referralCode, onSession, onError }) {
  const L = useL();
  const lang = useLang();
  const [id, setId] = useState(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let live = true;
    clientId().then((v) => live && setId(v));
    return () => {
      live = false;
    };
  }, []);
  // the phone app signs in through klass8.com, so not against a test server
  if (!id || (Platform.OS !== 'web' && !/^https:/.test(API_BASE))) return null;

  const finish = async (get) => {
    setBusy(true);
    try {
      const r = await get();
      if (r) await onSession(r);
    } catch (e) {
      onError?.(e);
    } finally {
      setBusy(false);
    }
  };

  if (Platform.OS === 'web') {
    return (
      <V c="gap-1">
        <WebGoogle id={id} text={mode === 'signup' ? 'signup_with' : 'continue_with'} onCredential={(credential) => finish(() => post('/v1/auth/google', { credential, role, lang, referralCode }, { auth: false }))} />
        {busy && <ActivityIndicator style={{ marginTop: 4 }} />}
      </V>
    );
  }
  return (
    <P
      c="h-12 rounded-full flex-row items-center justify-center gap-space-sm"
      style={{ backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#747775' }}
      onPress={() => finish(() => appGoogle({ role, lang, referralCode }))}
      disabled={busy}
      accessibilityRole="button"
      accessibilityLabel={mode === 'signup' ? L('Sign up with Google', 'S’inscrire avec Google') : L('Continue with Google', 'Continuer avec Google')}
    >
      {busy ? <ActivityIndicator color="#1f1f1f" /> : <GoogleG />}
      <T c="font-label-lg text-label-lg" style={{ color: '#1f1f1f', fontWeight: '600' }}>
        {mode === 'signup' ? L('Sign up with Google', 'S’inscrire avec Google') : L('Continue with Google', 'Continuer avec Google')}
      </T>
    </P>
  );
}
