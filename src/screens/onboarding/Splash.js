import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Platform, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, Defs, Path, RadialGradient, Stop } from 'react-native-svg';
import * as Haptics from 'expo-haptics';
import { useApp } from '../../state/store';
import { routeAfterAuth } from '../../navigation/routes';
import { LOGO, LOGO_COLORS } from '../../ui/brand';
import { noSlide } from '../../lib/device';
import { firstName, greeting } from '../../state/selectors';
import { useL } from '../../i18n';
import { loadAdminSession } from '../../api/adminClient';

// The opening, 2026. It takes over from the system splash (the K8 mark alone,
// centred). A soft navy and amber glow breathes in behind the mark, which
// settles with a small breath while the cap tips up and lands back on the K
// (the 8 answers with a beat). The mark rises to its place; the name rises
// letter by letter from behind a clean edge, then "Learn. Practise. Excel."
// word by word, and an amber line draws itself under them. The student is
// greeted by name and the glow fades to the white of the first screen. Every movement is a
// transform or a fade on the native side, so it stays smooth on any phone. A
// tap skips it. With reduce motion the logo simply fades in.

const [LX, LY, LX1, LY1] = LOGO.box;
const [MX, MY, MX1, MY1] = LOGO.markBox;
const LETTERS = ['wK', 'wl', 'wa', 'ws1', 'ws2', 'w8'];
const WORDS = ['learn', 'practise', 'excel'];
const PAD = 6; // logo units around each piece, so its soft edge is not cut
// The system splash shows the mark 70% of 180 dp wide (app.json, splash-logo.png).
const SPLASH_MARK_DP = 126;
const MIN_MS = 2900; // the whole opening, before the first screen opens by itself
const NAVY = LOGO_COLORS.navy;
const AMBER = LOGO_COLORS.amber;
// The modern "expo out" curve: fast, then a long soft landing.
const EXPO = Easing.bezier(0.16, 1, 0.3, 1);
const LANDS = 640; // the cap is back on the K

// The box around some pieces, in logo units, with their soft edge.
const boxOf = (ids) =>
  ids
    .map((id) => LOGO.parts[id].box)
    .reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])])
    .map((x, i) => (i < 2 ? x - PAD : x + PAD));
const NAME_BOX = boxOf(LETTERS);
const WORDS_BOX = boxOf(WORDS);

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

// A clean edge: what is inside rises into view from below it.
function Edge({ box, k, children }) {
  return (
    <View pointerEvents="none" style={{ position: 'absolute', left: (box[0] - LX) * k, top: (box[1] - LY) * k, width: (box[2] - box[0]) * k, height: (box[3] - box[1]) * k, overflow: 'hidden' }}>
      {children}
    </View>
  );
}

// A soft round glow: a radial gradient from the colour to nothing.
function Glow({ size, color, strength, id }) {
  return (
    <Svg width={size} height={size}>
      <Defs>
        <RadialGradient id={id} cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor={color} stopOpacity={strength} />
          <Stop offset="0.35" stopColor={color} stopOpacity={strength * 0.7} />
          <Stop offset="0.65" stopColor={color} stopOpacity={strength * 0.25} />
          <Stop offset="0.85" stopColor={color} stopOpacity={strength * 0.06} />
          <Stop offset="1" stopColor={color} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={`url(#${id})`} />
    </Svg>
  );
}

export default function Splash({ navigation }) {
  const { ready, auth, user, prefs } = useApp();
  const L = useL();
  const { width, height } = useWindowDimensions();
  const [still] = useState(() => noSlide());
  const [turn] = useState(() => (Math.random() < 0.5 ? -1 : 1));
  const [v] = useState(() => ({
    glow: new Animated.Value(still ? 1 : 0),
    drift: new Animated.Value(0),
    breath: new Animated.Value(0),
    cap: new Animated.Value(0),
    beat: new Animated.Value(0),
    lift: new Animated.Value(still ? 1 : 0),
    letters: LETTERS.map(() => new Animated.Value(still ? 1 : 0)),
    words: WORDS.map(() => new Animated.Value(still ? 1 : 0)),
    line: new Animated.Value(still ? 1 : 0),
    hello: new Animated.Value(still ? 1 : 0),
    all: new Animated.Value(still ? 0 : 1),
  }));
  const [shown, setShown] = useState(false);
  const went = useRef(false);
  // An admin signed in on this device opens straight on the admin console.
  const [admin, setAdmin] = useState(undefined);
  useEffect(() => {
    loadAdminSession().then((sess) => setAdmin(sess || null), () => setAdmin(null));
  }, []);
  const name = firstName(user?.name);

  // Sizes: the logo is up to 74% of the screen wide; k turns logo units into dp.
  const k = Math.min(width * 0.74, 330) / (LX1 - LX);
  const boxW = (LX1 - LX) * k;
  const boxH = (LY1 - LY) * k;
  // Where the mark starts: centred and as large as on the system splash.
  const s0 = SPLASH_MARK_DP / ((MX1 - MX) * k);
  const startY = (LY + (LY1 - LY) / 2 - (MY + (MY1 - MY) / 2)) * k;
  const startX = (LX + (LX1 - LX) / 2 - (MX + (MX1 - MX) / 2)) * k;
  const glowD = Math.max(width, height) * 0.95;

  useEffect(() => {
    const t = (val, ms, delay, easing = Easing.out(Easing.cubic), to = 1) => Animated.timing(val, { toValue: to, duration: ms, delay, easing, useNativeDriver: true });
    const drift = Animated.loop(
      Animated.sequence([t(v.drift, 2600, 0, Easing.inOut(Easing.sin), 1), t(v.drift, 2600, 0, Easing.inOut(Easing.sin), 0)])
    );
    const run = still
      ? Animated.parallel([t(v.all, 420, 80), t(v.hello, 420, 300)])
      : Animated.parallel([
          // the glow breathes in behind the mark
          Animated.sequence([t(v.glow, 1300, 0, Easing.out(Easing.quad)), t(v.glow, 500, 1150, Easing.inOut(Easing.quad), 0)]),
          // the mark takes a small breath
          t(v.breath, 560, 40, Easing.inOut(Easing.quad)),
          // the cap tips up and lands back on the K
          Animated.sequence([t(v.cap, 300, 60, Easing.out(Easing.quad)), Animated.spring(v.cap, { toValue: 0, friction: 6, tension: 140, useNativeDriver: true })]),
          // the 8 answers with a beat
          t(v.beat, 360, LANDS - 40, Easing.out(Easing.quad)),
          // the mark rises to its place above the name
          t(v.lift, 680, 720, Easing.inOut(Easing.cubic)),
          // the name rises letter by letter from behind its edge
          ...v.letters.map((x, i) => t(x, 640, 1060 + i * 48, EXPO)),
          // then the motto, word by word, and the amber line draws itself
          ...v.words.map((x, i) => t(x, 560, 1660 + i * 110, EXPO)),
          t(v.line, 620, 2020, EXPO),
          // and the greeting
          t(v.hello, 480, 2280),
        ]);
    run.start();
    if (!still) drift.start();
    const buzz =
      still || Platform.OS === 'web'
        ? null
        : setTimeout(() => {
            try {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
            } catch {
              // no haptics on this phone
            }
          }, LANDS);
    const timer = setTimeout(() => setShown(true), still ? 900 : MIN_MS);
    return () => {
      run.stop();
      drift.stop();
      clearTimeout(timer);
      if (buzz) clearTimeout(buzz);
    };
  }, [v, still]);

  // The first screen opens once the opening has played (or been tapped away)
  // and the app is ready.
  useEffect(() => {
    if (!shown || !ready || admin === undefined || went.current) return;
    went.current = true;
    if (admin) navigation.reset({ index: 0, routes: [{ name: 'Admin' }] });
    else if (auth.status === 'authed') navigation.reset(routeAfterAuth(user));
    else navigation.replace(prefs.seenWelcome ? 'Login' : 'Welcome');
  }, [shown, ready, admin, auth.status, user, prefs.seenWelcome, navigation]);

  const markStyle = {
    transform: [
      { translateX: v.lift.interpolate({ inputRange: [0, 1], outputRange: [startX, 0] }) },
      { translateY: v.lift.interpolate({ inputRange: [0, 1], outputRange: [startY, 0] }) },
      { scale: v.lift.interpolate({ inputRange: [0, 1], outputRange: [s0, 1] }) },
      { scale: v.breath.interpolate({ inputRange: [0, 0.45, 1], outputRange: [1, 0.94, 1] }) },
    ],
  };
  const capStyle = {
    transform: [
      { translateY: v.cap.interpolate({ inputRange: [0, 1], outputRange: [0, -34 * k] }) },
      { rotate: v.cap.interpolate({ inputRange: [0, 1], outputRange: ['0deg', `${-16 * turn}deg`] }) },
    ],
  };
  const eightStyle = { transform: [{ scale: v.beat.interpolate({ inputRange: [0, 0.4, 1], outputRange: [1, 1.08, 1] }) }] };
  // rising from behind an edge `by` logo units below
  const rise = (x, by) => ({ transform: [{ translateY: x.interpolate({ inputRange: [0, 1], outputRange: [by * k, 0] }) }] });
  const glowStyle = (dx, dy) => ({
    opacity: v.glow,
    transform: [
      { translateX: v.drift.interpolate({ inputRange: [0, 1], outputRange: [-dx, dx] }) },
      { translateY: v.drift.interpolate({ inputRange: [0, 1], outputRange: [dy, -dy] }) },
      { scale: v.glow.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] }) },
    ],
  });
  const nameH = NAME_BOX[3] - NAME_BOX[1];
  const wordsH = WORDS_BOX[3] - WORDS_BOX[1];
  const lineW = (WORDS_BOX[2] - WORDS_BOX[0] - 2 * PAD) * k;

  return (
    <Pressable style={styles.screen} onPress={() => setShown(true)} accessibilityRole="button" accessibilityHint={L('Opens the app', 'Ouvre l’application')}>
      {/* the glow: navy above left, amber below right, drifting slowly */}
      {!still && (
        <>
          <Animated.View pointerEvents="none" style={[styles.glow, { left: width * 0.28 - glowD / 2, top: height * 0.36 - glowD / 2 }, glowStyle(width * 0.04, height * 0.02)]}>
            <Glow size={glowD} color={NAVY} strength={0.16} id="gNavy" />
          </Animated.View>
          <Animated.View pointerEvents="none" style={[styles.glow, { left: width * 0.74 - glowD / 2, top: height * 0.6 - glowD / 2 }, glowStyle(-width * 0.05, -height * 0.025)]}>
            <Glow size={glowD} color={AMBER} strength={0.22} id="gAmber" />
          </Animated.View>
        </>
      )}
      <Animated.View style={{ width: boxW, height: boxH, opacity: v.all }} accessibilityLabel="Klass8. Learn. Practise. Excel.">
        {/* the mark: scaled around its own centre, so it has a box of its own */}
        <Animated.View style={[{ position: 'absolute', left: (MX - LX) * k, top: (MY - LY) * k, width: (MX1 - MX) * k, height: (MY1 - MY) * k }, markStyle]}>
          <Piece id="k" k={k} origin={[MX, MY]} />
          <Piece id="eight" k={k} origin={[MX, MY]} style={eightStyle} />
          <Piece id="cap" k={k} origin={[MX, MY]} style={capStyle} />
        </Animated.View>
        <Edge box={NAME_BOX} k={k}>
          {LETTERS.map((id, i) => (
            <Piece key={id} id={id} k={k} origin={NAME_BOX} style={rise(v.letters[i], nameH)} />
          ))}
        </Edge>
        <Edge box={WORDS_BOX} k={k}>
          {WORDS.map((id, i) => (
            <Piece key={id} id={id} k={k} origin={WORDS_BOX} style={rise(v.words[i], wordsH)} />
          ))}
        </Edge>
        {/* the amber line draws itself from the left */}
        <View
          pointerEvents="none"
          style={{ position: 'absolute', left: (WORDS_BOX[0] + PAD - LX) * k, top: (WORDS_BOX[3] + 12 - LY) * k, width: lineW, height: Math.max(2, 7 * k), borderRadius: 2, overflow: 'hidden' }}
        >
          <Animated.View style={{ flex: 1, backgroundColor: AMBER, transform: [{ translateX: v.line.interpolate({ inputRange: [0, 1], outputRange: [-lineW, 0] }) }] }} />
        </View>
      </Animated.View>
      {!!name && (
        <Animated.Text style={[styles.hello, { opacity: v.hello, transform: [{ translateY: v.hello.interpolate({ inputRange: [0, 1], outputRange: [10, 0] }) }] }]}>
          {`${greeting(L)}, ${name}`}
        </Animated.Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // white, like the system splash it takes over from
  screen: { flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  glow: { position: 'absolute' },
  hello: { position: 'absolute', bottom: '16%', fontFamily: 'Inter_600SemiBold', fontSize: 16, color: '#3d4b5c', letterSpacing: 0.2 },
});
