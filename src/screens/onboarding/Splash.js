import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useApp } from '../../state/store';
import { routeAfterAuth } from '../../navigation/routes';
import { LOGO } from '../../ui/brand';
import { noSlide } from '../../lib/device';

// The opening: it starts from the system splash (the K8 mark alone, centred),
// the graduation cap tips and lands back on the K, the mark rises to its place,
// the name comes in letter by letter and "Learn. Practise. Excel." word by word.
// Every movement is a transform or a fade on the native side, so it stays
// smooth on any phone. With reduce motion the logo simply fades in.

const [LX, LY, LX1, LY1] = LOGO.box;
const [MX, MY, MX1, MY1] = LOGO.markBox;
const LETTERS = ['wK', 'wl', 'wa', 'ws1', 'ws2', 'w8'];
const WORDS = ['learn', 'practise', 'excel'];
const PAD = 6; // logo units around each piece, so its soft edge is not cut
// The system splash shows the mark 70% of 180 dp wide (app.json, splash-logo.png).
const SPLASH_MARK_DP = 126;
const MIN_MS = 2450; // the whole opening, before the first screen

// One piece of the logo, drawn in its own box; left/top are relative to `origin`.
function Piece({ id, k, origin, style }) {
  const p = LOGO.parts[id];
  const [x0, y0, x1, y1] = p.box;
  const w = x1 - x0 + 2 * PAD;
  const h = y1 - y0 + 2 * PAD;
  return (
    <Animated.View style={[{ position: 'absolute', left: (x0 - PAD - origin[0]) * k, top: (y0 - PAD - origin[1]) * k, width: w * k, height: h * k }, style]}>
      <Svg width={w * k} height={h * k} viewBox={`${x0 - PAD} ${y0 - PAD} ${w} ${h}`}>
        <Path d={p.d} fill={p.fill} fillRule="evenodd" />
      </Svg>
    </Animated.View>
  );
}

export default function Splash({ navigation }) {
  const { ready, auth, user, prefs } = useApp();
  const { width } = useWindowDimensions();
  const [still] = useState(() => noSlide());
  const [v] = useState(() => ({
    cap: new Animated.Value(0),
    lift: new Animated.Value(still ? 1 : 0),
    letters: LETTERS.map(() => new Animated.Value(still ? 1 : 0)),
    words: WORDS.map(() => new Animated.Value(still ? 1 : 0)),
    all: new Animated.Value(still ? 0 : 1),
  }));
  const [shown, setShown] = useState(false);
  const went = useRef(false);

  // Sizes: the logo is up to 74% of the screen wide; k turns logo units into dp.
  const k = Math.min(width * 0.74, 330) / (LX1 - LX);
  const boxW = (LX1 - LX) * k;
  const boxH = (LY1 - LY) * k;
  // Where the mark starts: centred and as large as on the system splash.
  const s0 = SPLASH_MARK_DP / ((MX1 - MX) * k);
  const startY = (LY + (LY1 - LY) / 2 - (MY + (MY1 - MY) / 2)) * k;
  const startX = (LX + (LX1 - LX) / 2 - (MX + (MX1 - MX) / 2)) * k;

  useEffect(() => {
    const t = (val, ms, delay, easing = Easing.out(Easing.cubic)) => Animated.timing(val, { toValue: 1, duration: ms, delay, easing, useNativeDriver: true });
    const run = still
      ? t(v.all, 420, 80)
      : Animated.parallel([
          // the cap tips up and lands back on the K
          Animated.sequence([
            Animated.delay(200),
            t(v.cap, 260, 0, Easing.out(Easing.quad)),
            Animated.spring(v.cap, { toValue: 0, friction: 5, tension: 110, useNativeDriver: true }),
          ]),
          // the mark rises to its place above the name
          t(v.lift, 720, 560, Easing.inOut(Easing.cubic)),
          // the name, letter by letter; the 8 last, with a little more spring
          ...v.letters.map((x, i) => t(x, i === LETTERS.length - 1 ? 520 : 380, 860 + i * 70, Easing.out(Easing.back(i === LETTERS.length - 1 ? 2.2 : 1.3)))),
          // the motto, word by word
          ...v.words.map((x, i) => t(x, 420, 1480 + i * 170)),
        ]);
    run.start();
    const timer = setTimeout(() => setShown(true), still ? 900 : MIN_MS);
    return () => {
      run.stop();
      clearTimeout(timer);
    };
  }, [v, still]);

  // The first screen opens once the opening has played and the app is ready.
  useEffect(() => {
    if (!shown || !ready || went.current) return;
    went.current = true;
    if (auth.status === 'authed') navigation.reset(routeAfterAuth(user));
    else navigation.replace(prefs.seenWelcome ? 'Login' : 'Welcome');
  }, [shown, ready, auth.status, user, prefs.seenWelcome, navigation]);

  const markStyle = {
    transform: [
      { translateX: v.lift.interpolate({ inputRange: [0, 1], outputRange: [startX, 0] }) },
      { translateY: v.lift.interpolate({ inputRange: [0, 1], outputRange: [startY, 0] }) },
      { scale: v.lift.interpolate({ inputRange: [0, 1], outputRange: [s0, 1] }) },
    ],
  };
  const capStyle = {
    transform: [
      { translateY: v.cap.interpolate({ inputRange: [0, 1], outputRange: [0, -46 * k] }) },
      { rotate: v.cap.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-11deg'] }) },
    ],
  };
  const rise = (x, by) => ({
    opacity: x.interpolate({ inputRange: [0, 0.6, 1], outputRange: [0, 1, 1], extrapolate: 'clamp' }),
    transform: [{ translateY: x.interpolate({ inputRange: [0, 1], outputRange: [by * k, 0] }) }],
  });
  const pop = (x) => ({
    opacity: x.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 1, 1], extrapolate: 'clamp' }),
    transform: [{ scale: x.interpolate({ inputRange: [0, 1], outputRange: [0.35, 1] }) }],
  });

  return (
    <View style={styles.screen}>
      <Animated.View style={{ width: boxW, height: boxH, opacity: v.all }} accessibilityLabel="Klass8. Learn. Practise. Excel.">
        {/* the mark: scaled around its own centre, so it has a box of its own */}
        <Animated.View style={[{ position: 'absolute', left: (MX - LX) * k, top: (MY - LY) * k, width: (MX1 - MX) * k, height: (MY1 - MY) * k }, markStyle]}>
          <Piece id="k" k={k} origin={[MX, MY]} />
          <Piece id="eight" k={k} origin={[MX, MY]} />
          <Piece id="cap" k={k} origin={[MX, MY]} style={capStyle} />
        </Animated.View>
        {LETTERS.map((id, i) => (
          <Piece key={id} id={id} k={k} origin={[LX, LY]} style={id === 'w8' ? pop(v.letters[i]) : rise(v.letters[i], 70)} />
        ))}
        {WORDS.map((id, i) => (
          <Piece key={id} id={id} k={k} origin={[LX, LY]} style={rise(v.words[i], 24)} />
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  // white, like the system splash it takes over from
  screen: { flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' },
});
