// On the website (klass8.com/app), Klass8 can be installed like an app: an icon
// on the home screen, full screen, payments inside, updates by itself. This turns
// on the service worker that makes it installable, and offers to install:
// - Android and desktop Chrome: one "Install" button (the browser's own prompt);
// - iPhone and iPad (Safari): how to add it from the Share menu.
// Nothing shows once it is installed, or for a week after "Not now".
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useL } from '../i18n';
import { Ic, P, T, V } from './kit';

const LATER = 'klass8.install.later';
const WEEK = 7 * 24 * 60 * 60 * 1000;

const installed = () => {
  try {
    return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true;
  } catch {
    return false;
  }
};
const laterNow = () => {
  try {
    return Date.now() - Number(localStorage.getItem(LATER) || 0) < WEEK;
  } catch {
    return false;
  }
};
const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent || '') && !/crios|fxios/i.test(navigator.userAgent || '');

export default function InstallApp() {
  const L = useL();
  const [prompt, setPrompt] = useState(null);
  const [ios, setIos] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return undefined;
    if (location.protocol !== 'https:' || !location.pathname.startsWith('/app')) return undefined;
    navigator.serviceWorker?.register('/sw.js', { scope: '/app' }).catch(() => {});
    if (installed() || laterNow()) return undefined;
    const onPrompt = (e) => {
      e.preventDefault();
      setPrompt(e);
      setHidden(false);
    };
    const onInstalled = () => setHidden(true);
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    // Safari has no install prompt: show how to do it, a little after opening.
    let t;
    if (isIos()) {
      t = setTimeout(() => {
        setIos(true);
        setHidden(false);
      }, 8000);
    }
    return () => {
      clearTimeout(t);
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  if (hidden) return null;
  const later = () => {
    try {
      localStorage.setItem(LATER, String(Date.now()));
    } catch {
      // private browsing: it just shows again next time
    }
    setHidden(true);
  };
  const install = async () => {
    if (!prompt) return;
    prompt.prompt();
    try {
      await prompt.userChoice;
    } catch {
      // the browser closed the prompt
    }
    setPrompt(null);
    setHidden(true);
  };

  return (
    <V style={{ position: 'absolute', left: 16, right: 16, bottom: 160, zIndex: 110 }}>
      <V c="rounded-xl bg-surface-container-lowest p-space-md gap-space-sm shadow-md" style={{ borderWidth: 1, borderColor: '#dfe6f2' }}>
        <V c="flex-row items-center gap-space-sm">
          <V c="w-10 h-10 rounded-lg bg-primary-container items-center justify-center">
            <Ic n="install_mobile" s={22} c="on-primary" />
          </V>
          <V c="flex-1">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Install Klass8 on this phone', 'Installer Klass8 sur ce téléphone')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {ios
                ? L('Tap the Share button, then "Add to Home Screen".', 'Touchez le bouton Partager, puis « Sur l’écran d’accueil ».')
                : L('It opens like an app and updates itself.', 'Elle s’ouvre comme une application et se met à jour seule.')}
            </T>
          </V>
        </V>
        <V c="flex-row gap-space-sm">
          <P c="flex-1 h-11 rounded-xl bg-surface-container-low items-center justify-center" onPress={later} accessibilityRole="button">
            <T c="font-label-lg text-label-lg text-on-surface">{ios ? L('OK', 'OK') : L('Not now', 'Plus tard')}</T>
          </P>
          {!ios && (
            <P c="flex-1 h-11 rounded-xl bg-primary items-center justify-center" onPress={install} accessibilityRole="button">
              <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                {L('Install', 'Installer')}
              </T>
            </P>
          )}
        </V>
      </V>
    </V>
  );
}
