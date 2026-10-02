import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { T, V } from '../../ui/kit';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { routeAfterAuth } from '../../navigation/routes';

const APath = Animated.createAnimatedComponent(Path);
const RING = 330; // approximate length of the front orbit path

// Storyboard: (a) ring draws 0 to 0.8s, (b) cell emerges at 0.4s, (c) nucleus pops at 0.8s,
// (d) satellite orbits and the wordmark settles from 1.2s.
function OrbitMark() {
  const draw = useRef(new Animated.Value(0)).current;
  const cell = useRef(new Animated.Value(0)).current;
  const nucleus = useRef(new Animated.Value(0)).current;
  const spin = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(draw, { toValue: 1, duration: 800, easing: Easing.bezier(0.4, 0, 0.2, 1), useNativeDriver: false }),
      Animated.sequence([Animated.delay(400), Animated.spring(cell, { toValue: 1, useNativeDriver: true, stiffness: 220, damping: 18 })]),
      Animated.sequence([Animated.delay(800), Animated.spring(nucleus, { toValue: 1, useNativeDriver: true, stiffness: 420, damping: 10 })]),
    ]).start();
    const loop = Animated.loop(Animated.timing(spin, { toValue: 1, duration: 6000, easing: Easing.linear, useNativeDriver: true }));
    const t = setTimeout(() => loop.start(), 1200);
    return () => {
      clearTimeout(t);
      loop.stop();
    };
  }, [draw, cell, nucleus, spin]);
  const cellScale = cell.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] });
  return (
    <V c="w-44 h-44 items-center justify-center">
      <Svg width={160} height={160} viewBox="0 0 200 200" style={{ position: 'absolute' }}>
        <Defs>
          <LinearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#71f8e4" />
            <Stop offset="0.5" stopColor="#006b5f" />
            <Stop offset="1" stopColor="#6df5e1" />
          </LinearGradient>
        </Defs>
        <APath
          d="M 28 120 C 18 80, 72 38, 142 50 C 172 56, 185 75, 178 98"
          opacity={0.6}
          stroke="#6df5e1"
          strokeDasharray={`${RING} ${RING}`}
          strokeDashoffset={draw.interpolate({ inputRange: [0, 1], outputRange: [RING, 0] })}
          strokeLinecap="round"
          strokeWidth={7}
          fill="none"
        />
      </Svg>
      <Animated.View style={{ position: 'absolute', opacity: cell, transform: [{ scale: cellScale }] }}>
        <Svg width={160} height={160} viewBox="0 0 200 200">
          <Circle cx={100} cy={104} r={56} fill="#001e31" opacity={0.08} />
          <Circle cx={100} cy={100} r={56} fill="#ffffff" />
          <Circle cx={100} cy={100} r={52} fill="#0369a1" />
        </Svg>
      </Animated.View>
      <Animated.View style={{ position: 'absolute', transform: [{ scale: nucleus }] }}>
        <Svg width={160} height={160} viewBox="0 0 200 200">
          <Circle cx={100} cy={100} r={22} fill="#006b5f" />
          <Circle cx={94} cy={94} r={6} fill="#cbe4ff" opacity={0.9} />
        </Svg>
      </Animated.View>
      <Svg width={160} height={160} viewBox="0 0 200 200" style={{ position: 'absolute' }}>
        <APath
          d="M 180 94 C 188 122, 138 165, 68 156 C 36 152, 18 138, 24 116 C 30 96, 62 76, 102 70"
          stroke="#006b5f"
          strokeLinecap="round"
          strokeWidth={7}
          fill="none"
          strokeDasharray={`${RING} ${RING}`}
          strokeDashoffset={draw.interpolate({ inputRange: [0, 1], outputRange: [RING, 0] })}
        />
      </Svg>
      <Animated.View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: 176,
          height: 176,
          opacity: nucleus,
          transform: [{ rotate: spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }],
        }}
      >
        <V c="absolute top-3 w-4 h-4 rounded-full bg-surface-container-lowest shadow-md items-center justify-center" style={{ left: 80 }}>
          <V c="w-2 h-2 rounded-full bg-secondary" />
        </V>
      </Animated.View>
    </V>
  );
}

export default function Splash({ navigation }) {
  const insets = useSafeAreaInsets();
  const { ready, auth, user, prefs } = useApp();
  const L = useL();
  const words = useRef(new Animated.Value(0)).current;
  const went = useRef(false);

  useEffect(() => {
    Animated.sequence([Animated.delay(1200), Animated.timing(words, { toValue: 1, duration: 500, useNativeDriver: true })]).start();
  }, [words]);

  const go = () => {
    if (went.current || !ready) return;
    went.current = true;
    if (auth.status === 'authed') navigation.reset(routeAfterAuth(user));
    else navigation.replace(prefs.seenWelcome ? 'Login' : 'Welcome');
  };

  // Returning users skip ahead once the animation has played.
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(go, 1800);
    return () => clearTimeout(t);
  }, [ready]);

  return (
    <V c="flex-1 bg-surface-container-lowest items-center justify-center" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <OrbitMark />
      <Animated.View style={{ opacity: words, transform: [{ translateY: words.interpolate({ inputRange: [0, 1], outputRange: [8, 0] }) }] }}>
        <V c="mt-space-md items-center gap-1">
          <T c="font-display-lg text-display-lg text-on-surface tracking-tight">BioSpatial VR</T>
          <T c="font-body-md text-body-md text-on-surface-variant">{L('GCE Biology, Cameroon', 'Biologie GCE, Cameroun')}</T>
        </V>
      </Animated.View>
    </V>
  );
}
