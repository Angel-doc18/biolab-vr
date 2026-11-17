// In a browser, an open tab keeps running the version it loaded, so people did
// not see new features until they reloaded by hand. The web app now checks every
// few minutes (and when the tab comes back to the front) whether a newer build
// has been published, and offers a one-tap refresh. Phones update through the APK.
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useL } from '../i18n';
import { Ic, P, T, V } from './kit';

const BUNDLE = /\/_expo\/static\/js\/web\/(index-[a-f0-9]+\.js)/;

function runningBundle() {
  const s = [...document.querySelectorAll('script[src]')].map((x) => x.getAttribute('src')).find((src) => BUNDLE.test(src));
  return s ? s.match(BUNDLE)[1] : null;
}

export default function WebUpdate() {
  const L = useL();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return undefined;
    const mine = runningBundle();
    if (!mine) return undefined; // a development server: nothing to compare
    let stop = false;
    const check = async () => {
      try {
        // the app's own page: /app/ on the website (the first part of the path)
        const first = location.pathname.split('/')[1];
        const base = first ? `/${first}/` : '/';
        const page = await fetch(`${base}?v=${Date.now()}`, { cache: 'no-store' }).then((r) => r.text());
        const now = page.match(BUNDLE)?.[1];
        if (!stop && now && now !== mine) setReady(true);
      } catch {
        // offline: try again later
      }
    };
    const timer = setInterval(check, 3 * 60 * 1000);
    const onShow = () => document.visibilityState === 'visible' && check();
    document.addEventListener('visibilitychange', onShow);
    check();
    return () => {
      stop = true;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onShow);
    };
  }, []);
  if (!ready) return null;
  return (
    <V style={{ position: 'absolute', left: 16, right: 16, bottom: 92, zIndex: 120 }}>
      <P c="flex-row items-center gap-2 p-space-sm px-space-md rounded-xl bg-primary shadow-md" onPress={() => location.reload()} accessibilityRole="button">
        <Ic n="system_update" s={20} c="on-primary" />
        <T c="flex-1 font-body-sm text-body-sm text-on-primary">{L('A new version of Klass8 is ready.', 'Une nouvelle version de Klass8 est prête.')}</T>
        <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
          {L('Refresh', 'Actualiser')}
        </T>
      </P>
    </V>
  );
}
