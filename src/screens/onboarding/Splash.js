import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Platform, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as Haptics from 'expo-haptics';
import { useApp } from '../../state/store';
import { routeAfterAuth } from '../../navigation/routes';
import { LOGO, LOGO_COLORS } from '../../ui/brand';
import { LOW_END, noSlide } from '../../lib/device';
import { firstName, greeting } from '../../state/selectors';
import { useL } from '../../i18n';
import { loadAdminSession } from '../../api/adminClient';

// The opening. It takes over from the system splash (the K8 mark alone,
// centred): a soft ring pulses out, the graduation cap is tossed up with a full
// turn and bounces back onto the K, which gives a little under its weight while
// a burst of sparks flies out (laid out differently on every launch, and the
// cap turns one way or the other); the mark rises to its place, the name comes
// in letter by letter with the 8 last, a glint sweeps across, "Learn.
// Practise. Excel." arrives word by word over an amber line, and the student
// is greeted by name. Every movement is a transform or a fade on the native
// side, so it stays smooth on any phone; light phones get fewer sparks. A tap
// skips it. With reduce motion the logo simply fades in.

const [LX, LY, LX1, LY1] = LOGO.box;
const [MX, MY, MX1, MY1] = LOGO.markBox;
const LETTERS = ['wK', 'wl', 'wa', 'ws1', 'ws2', 'w8'];
const WORDS = ['learn', 'practise', 'excel'];
const PAD = 6; // logo units around each piece, so its soft edge is not cut
// The system splash shows the mark 70% of 180 dp wide (app.json, splash-logo.png).
const SPLASH_MARK_DP = 126;
const MIN_MS = 3050; // the whole opening, before the first screen opens by itself
const NAVY = LOGO_COLORS.navy;
const AMBER = LOGO_COLORS.amber;
const SPARK_COLORS = [AMBER, NAVY, '#5b8fd6', AMBER, '#ffd36b'];
// Where the cap meets the K, in logo units: the sparks start here.
const LAND = [(LOGO.parts.cap.box[0] + LOGO.parts.cap.box[2]) / 2, LOGO.parts.k.box[1] + 8];
// The amber line under the motto, in logo units.
const WORDS_BOX = WORDS.map((id) => LOGO.parts[id].box).reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])]);

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

// The sparks for this launch: evenly spread round the circle with a random
// twist, random reach and size, falling a little as they fade.
function makeSparks(n) {
  const twist = Math.random() * Math.PI * 2;
  return Array.from({ length: n }, (_, i) => {
    const a = twist + (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const reach = 0.55 + Math.random() * 0.45; // share of the mark's width
    return { a, reach, size: 4 + Math.random() * 4, round: Math.random() < 0.6, color: SPARK_COLORS[i % SPARK_COLORS.length] };
  });
}

// A path sampled at five points, so a linear driver gives an eased flight with
// a little gravity.
const flight = (to, fall) => {
  const t = [0, 0.25, 0.5, 0.75, 1];
  return t.map((s) => to * (1 - (1 - s) ** 3) + fall * s * s);
};

export default function Splash({ navigation }) {
  const { ready, auth, user, prefs } = useApp();
  const L = useL();
  const { width } = useWindowDimensions();
  const [still] = useState(() => noSlide());
  const [turn] = useState(() => (Math.random() < 0.5 ? -1 : 1));
  const [sparks] = useState(() => makeSparks(LOW_END ? 6 : 12));
  const [v] = useState(() => ({
    ring: new Animated.Value(0),
    thud: new Animated.Value(0),
    capUp: new Animated.Value(0),
    capSpin: new Animated.Value(0),
    squash: new Animated.Value(0),
    burst: new Animated.Value(0),
    lift: new Animated.Value(still ? 1 : 0),
    letters: LETTERS.map(() => new Animated.Value(still ? 1 : 0)),
    words: WORDS.map(() => new Animated.Value(still ? 1 : 0)),
    shine: new Animated.Value(0),
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
  // Where the sparks start, in the logo box, while the mark is still centred.
  const sparkX = boxW / 2 + (LAND[0] - (MX + MX1) / 2) * k * s0;
  const sparkY = boxH / 2 + (LAND[1] - (MY + MY1) / 2) * k * s0;

  useEffect(() => {
    const t = (val, ms, delay, easing = Easing.out(Easing.cubic), to = 1) => Animated.timing(val, { toValue: to, duration: ms, delay, easing, useNativeDriver: true });
    const LANDS = 1060; // the cap is back on the K
    const run = still
      ? Animated.parallel([t(v.all, 420, 80), t(v.hello, 420, 300)])
      : Animated.parallel([
          // a soft ring pulses out from the mark
          t(v.ring, 1100, 120, Easing.out(Easing.quad)),
          // the cap is tossed up with a full turn and bounces back onto the K
          Animated.sequence([Animated.delay(150), t(v.capUp, 380, 0, Easing.out(Easing.quad)), t(v.capUp, 530, 0, Easing.bounce, 0)]),
          t(v.capSpin, 760, 150, Easing.inOut(Easing.quad)),
          // the K gives a little as the cap lands, then springs back
          Animated.sequence([Animated.delay(LANDS - 40), t(v.squash, 90, 0, Easing.out(Easing.quad)), Animated.spring(v.squash, { toValue: 0, friction: 4, tension: 160, useNativeDriver: true })]),
          // sparks and a second ring at the landing
          t(v.burst, 760, LANDS - 30, Easing.linear),
          t(v.thud, 900, LANDS - 20, Easing.out(Easing.quad)),
          // the mark rises to its place above the name
          t(v.lift, 680, 1150, Easing.inOut(Easing.cubic)),
          // the name, letter by letter; the 8 last, with a little more spring
          ...v.letters.map((x, i) => t(x, i === LETTERS.length - 1 ? 520 : 380, 1450 + i * 62, Easing.out(Easing.back(i === LETTERS.length - 1 ? 2.2 : 1.3)))),
          // a glint sweeps across the logo
          t(v.shine, 640, 2120, Easing.inOut(Easing.quad)),
          // the motto, word by word, over an amber line
          ...v.words.map((x, i) => t(x, 420, 2000 + i * 140)),
          t(v.line, 420, 2420, Easing.out(Easing.cubic)),
          // and the greeting
          t(v.hello, 480, 2520),
        ]);
    run.start();
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
      { scaleX: v.squash.interpolate({ inputRange: [0, 1], outputRange: [1, 1.04] }) },
      { scaleY: v.squash.interpolate({ inputRange: [0, 1], outputRange: [1, 0.93] }) },
    ],
  };
  const capStyle = {
    transform: [
      { translateY: v.capUp.interpolate({ inputRange: [0, 1], outputRange: [0, -300 * k] }) },
      { rotate: v.capSpin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', `${360 * turn}deg`] }) },
    ],
  };
  const eightStyle = {
    transform: [{ scale: v.burst.interpolate({ inputRange: [0, 0.18, 0.5, 1], outputRange: [1, 1.1, 1, 1], extrapolate: 'clamp' }) }],
  };
  const rise = (x, by) => ({
    opacity: x.interpolate({ inputRange: [0, 0.6, 1], outputRange: [0, 1, 1], extrapolate: 'clamp' }),
    transform: [{ translateY: x.interpolate({ inputRange: [0, 1], outputRange: [by * k, 0] }) }],
  });
  const pop = (x) => ({
    opacity: x.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, 1, 1], extrapolate: 'clamp' }),
    transform: [{ scale: x.interpolate({ inputRange: [0, 1], outputRange: [0.35, 1] }) }],
  });
  const ringStyle = (val, from, to, peak) => ({
    opacity: val.interpolate({ inputRange: [0, 0.12, 1], outputRange: [0, peak, 0] }),
    transform: [{ scale: val.interpolate({ inputRange: [0, 1], outputRange: [from, to] }) }],
  });
  const ringD = SPLASH_MARK_DP * 1.2;
  const markW = (MX1 - MX) * k * s0;

  return (
    <Pressable style={styles.screen} onPress={() => setShown(true)} accessibilityRole="button" accessibilityHint={L('Opens the app', 'Ouvre l’application')}>
      <Animated.View style={{ width: boxW, height: boxH, opacity: v.all }} accessibilityLabel="Klass8. Learn. Practise. Excel.">
        {!still && (
          <>
            <Animated.View pointerEvents="none" style={[styles.ring, { left: boxW / 2 - ringD / 2, top: boxH / 2 - ringD / 2, width: ringD, height: ringD, borderRadius: ringD / 2, borderColor: AMBER }, ringStyle(v.ring, 0.8, 2.3, 0.45)]} />
            <Animated.View pointerEvents="none" style={[styles.ring, { left: boxW / 2 - ringD / 2, top: boxH / 2 - ringD / 2, width: ringD, height: ringD, borderRadius: ringD / 2, borderColor: NAVY, borderWidth: 1.5 }, ringStyle(v.thud, 0.9, 1.9, 0.3)]} />
          </>
        )}
        {/* the mark: scaled around its own centre, so it has a box of its own */}
        <Animated.View style={[{ position: 'absolute', left: (MX - LX) * k, top: (MY - LY) * k, width: (MX1 - MX) * k, height: (MY1 - MY) * k }, markStyle]}>
          <Piece id="k" k={k} origin={[MX, MY]} />
          <Piece id="eight" k={k} origin={[MX, MY]} style={eightStyle} />
          <Piece id="cap" k={k} origin={[MX, MY]} style={capStyle} />
        </Animated.View>
        {!still &&
          sparks.map((s, i) => {
            const dx = Math.cos(s.a) * s.reach * markW;
            const dy = Math.sin(s.a) * s.reach * markW;
            return (
              <Animated.View
                key={i}
                pointerEvents="none"
                style={{
                  position: 'absolute',
                  left: sparkX - s.size / 2,
                  top: sparkY - s.size / 2,
                  width: s.size,
                  height: s.size,
                  borderRadius: s.round ? s.size / 2 : 1,
                  backgroundColor: s.color,
                  opacity: v.burst.interpolate({ inputRange: [0, 0.06, 0.65, 1], outputRange: [0, 1, 0.9, 0] }),
                  transform: [
                    { translateX: v.burst.interpolate({ inputRange: [0, 0.25, 0.5, 0.75, 1], outputRange: flight(dx, 0) }) },
                    { translateY: v.burst.interpolate({ inputRange: [0, 0.25, 0.5, 0.75, 1], outputRange: flight(dy, markW * 0.18) }) },
                    { scale: v.burst.interpolate({ inputRange: [0, 0.2, 1], outputRange: [0.3, 1.15, 0.5] }) },
                    { rotate: s.round ? '0deg' : '45deg' },
                  ],
                }}
              />
            );
          })}
        {LETTERS.map((id, i) => (
          <Piece key={id} id={id} k={k} origin={[LX, LY]} style={id === 'w8' ? pop(v.letters[i]) : rise(v.letters[i], 70)} />
        ))}
        {WORDS.map((id, i) => (
          <Piece key={id} id={id} k={k} origin={[LX, LY]} style={rise(v.words[i], 24)} />
        ))}
        <Animated.View
          pointerEvents="none"
          style={{
            position: 'absolute',
            left: (WORDS_BOX[0] - LX) * k,
            top: (WORDS_BOX[3] + 16 - LY) * k,
            width: (WORDS_BOX[2] - WORDS_BOX[0]) * k,
            height: Math.max(2, 7 * k),
            borderRadius: 2,
            backgroundColor: AMBER,
            opacity: v.line,
            transform: [{ scaleX: v.line }],
          }}
        />
        {/* the glint: a pale bar crossing the logo, unseen on the white ground */}
        {!still && (
          <View pointerEvents="none" style={[StyleSheet.absoluteFill, { overflow: 'hidden' }]}>
            <Animated.View
              style={{
                position: 'absolute',
                top: -boxH * 0.3,
                left: 0,
                width: boxW * 0.14,
                height: boxH * 1.6,
                backgroundColor: 'rgba(255,255,255,0.62)',
                transform: [{ translateX: v.shine.interpolate({ inputRange: [0, 1], outputRange: [-boxW * 0.35, boxW * 1.2] }) }, { rotate: '20deg' }],
              }}
            />
          </View>
        )}
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
  screen: { flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center' },
  ring: { position: 'absolute', borderWidth: 2.5 },
  hello: { position: 'absolute', bottom: '16%', fontFamily: 'Inter_600SemiBold', fontSize: 16, color: '#3d4b5c', letterSpacing: 0.2 },
});
