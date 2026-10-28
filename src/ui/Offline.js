// What students see about the connection: a short notice that slides in when
// the phone goes offline or comes back, and a clear note beside anything that
// needs the internet, so they know what still works and what has to wait.
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useL } from '../i18n';
import { useOnline } from '../lib/online';
import { Ic, T, V } from './kit';

export function OfflineBanner() {
  const L = useL();
  const [msg, setMsg] = useState(null); // 'offline' | 'online'
  const [y] = useState(() => new Animated.Value(-80));
  const timer = useRef(null);
  const was = useRef(null);
  useEffect(() => {
    const show = (state) => {
      setMsg(state);
      clearTimeout(timer.current);
      Animated.spring(y, { toValue: 0, useNativeDriver: true, stiffness: 300, damping: 30 }).start();
      timer.current = setTimeout(() => Animated.timing(y, { toValue: -80, duration: 200, useNativeDriver: true }).start(() => setMsg(null)), state === 'offline' ? 5000 : 2600);
    };
    let unsub = () => {};
    try {
      unsub = NetInfo.addEventListener((s) => {
        const off = s.isConnected === false || s.isInternetReachable === false;
        if (s.isConnected == null && !off) return;
        if (was.current === null) {
          was.current = off;
          if (off) show('offline');
          return;
        }
        if (off !== was.current) {
          was.current = off;
          show(off ? 'offline' : 'online');
        }
      });
    } catch {
      // no network information: no notice
    }
    return () => {
      unsub();
      clearTimeout(timer.current);
    };
  }, [y]);
  if (!msg) return null;
  const off = msg === 'offline';
  return (
    <Animated.View pointerEvents="none" style={{ position: 'absolute', top: 70, left: 16, right: 16, zIndex: 100, transform: [{ translateY: y }] }}>
      <V c="flex-row items-center gap-2 p-space-sm px-space-md rounded-xl bg-inverse-surface shadow-md">
        <Ic n={off ? 'cloud_off' : 'wifi'} s={18} c="secondary-fixed-dim" />
        <T c="font-body-sm text-body-sm text-inverse-on-surface flex-1">
          {off
            ? L('You are offline. Lessons, diagrams, quizzes and anything you downloaded still work.', 'Vous êtes hors ligne. Les leçons, schémas, quiz et tout ce que vous avez téléchargé fonctionnent toujours.')
            : L('Back online.', 'De nouveau en ligne.')}
        </T>
      </V>
    </Animated.View>
  );
}

// A note shown only while offline, beside something that needs the internet.
// `what` names the action in each language, for example
// { en: 'ask the tutor', fr: 'poser une question au tuteur' }.
export function NeedsInternet({ what, c = '' }) {
  const online = useOnline();
  const L = useL();
  if (online) return null;
  return (
    <V c={`flex-row items-start gap-2 p-space-sm rounded-lg bg-surface-container-low ${c}`}>
      <Ic n="cloud_off" s={20} c="error" />
      <T c="flex-1 font-body-md text-body-md text-on-surface" style={{ lineHeight: 21 }}>
        {L(`You are offline. Connect to the internet to ${what.en}.`, `Vous êtes hors ligne. Connectez-vous à Internet pour ${what.fr}.`)}
      </T>
    </V>
  );
}
