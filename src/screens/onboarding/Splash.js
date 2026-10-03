import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo, T, V } from '../../ui/kit';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { routeAfterAuth } from '../../navigation/routes';

// The mark and name fade in while the app loads, then the right first screen opens.
export default function Splash({ navigation }) {
  const insets = useSafeAreaInsets();
  const { ready, auth, user, prefs } = useApp();
  const L = useL();
  const shown = useRef(new Animated.Value(0)).current;
  const went = useRef(false);

  useEffect(() => {
    Animated.timing(shown, { toValue: 1, duration: 450, useNativeDriver: true }).start();
  }, [shown]);

  const go = () => {
    if (went.current || !ready) return;
    went.current = true;
    if (auth.status === 'authed') navigation.reset(routeAfterAuth(user));
    else navigation.replace(prefs.seenWelcome ? 'Login' : 'Welcome');
  };

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(go, 900);
    return () => clearTimeout(t);
  }, [ready]);

  return (
    <V c="flex-1 bg-surface-container-lowest items-center justify-center" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Animated.View style={{ opacity: shown, alignItems: 'center' }}>
        <Logo size={88} />
        <V c="mt-space-md items-center gap-1">
          <T c="font-display-lg text-display-lg text-on-surface tracking-tight">ScienceAid</T>
          <T c="font-body-md text-body-md text-on-surface-variant">{L('GCE Ordinary Level sciences, Cameroon', 'Sciences du GCE Ordinary Level, Cameroun')}</T>
        </V>
      </Animated.View>
    </V>
  );
}
