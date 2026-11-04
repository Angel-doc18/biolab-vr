// Primitives that let each screen keep the Stitch utility classes:
//   <V c="flex-row items-center gap-2">  <T c="font-headline-sm text-headline-sm">  <Ic n="home" s={22} />
import { useRef } from 'react';
import { Animated, Image, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { createIconSet } from '@expo/vector-icons';
import Svg, { Circle, Path } from 'react-native-svg';
import { LOGO } from './brand';
import glyphMap from '../glyphmap.json';
import tw, { C, color } from './tw';
import { LOW_END } from '../lib/device';

const SymbolOutline = createIconSet(glyphMap, 'MaterialSymbols', require('../../assets/fonts/MaterialSymbols-fill0.ttf'));
const SymbolFilled = createIconSet(glyphMap, 'MaterialSymbolsFill', require('../../assets/fonts/MaterialSymbols-fill1.ttf'));

// On entry-level phones cards are drawn flat: shadows (Android elevation) are
// slow to draw there, and every card keeps its tint or border.
const SHADOW = /(^|\s)shadow(-(sm|md|lg|xl|2xl))?(?=\s|$)/g;
const cache = new Map();
export function s(c) {
  if (!c) return null;
  let v = cache.get(c);
  if (!v) {
    v = tw.style(LOW_END ? c.replace(SHADOW, ' ') : c);
    cache.set(c, v);
  }
  return v;
}

// Maps (family, weight) to the static font files that are actually loaded.
const FONTS = {
  Manrope: { 400: 'Manrope_500Medium', 500: 'Manrope_500Medium', 600: 'Manrope_600SemiBold', 700: 'Manrope_700Bold', 800: 'Manrope_800ExtraBold' },
  Inter: { 400: 'Inter_400Regular', 500: 'Inter_500Medium', 600: 'Inter_600SemiBold', 700: 'Inter_700Bold', 800: 'Inter_700Bold' },
};
const WEIGHT = { normal: 400, bold: 700 };
function resolveFont(style) {
  const fam = FONTS[style.fontFamily] ? style.fontFamily : 'Inter';
  let w = WEIGHT[style.fontWeight] || parseInt(style.fontWeight, 10) || 400;
  if (w < 400) w = 400;
  if (w > 800) w = 800;
  const out = { ...style, fontFamily: FONTS[fam][w] || FONTS[fam][700] };
  delete out.fontWeight;
  return out;
}

const BASE_TEXT = { fontFamily: 'Inter', fontSize: 14, lineHeight: 20, color: C['on-surface'] };

// Text styles are worked out once per class list (most text has no extra
// style), so long screens do not redo it for every line on every render.
const textCache = new Map();
export function T({ c, style, children, ...rest }) {
  let st = style ? null : textCache.get(c || '');
  if (!st) {
    const flat = StyleSheet.flatten([BASE_TEXT, s(c), style]);
    if (flat.fontSize && !flat.lineHeight) flat.lineHeight = Math.round(flat.fontSize * 1.4);
    st = resolveFont(flat);
    if (!style) textCache.set(c || '', st);
  }
  return (
    <Text {...rest} style={st}>
      {children}
    </Text>
  );
}

export function V({ c, style, children, ...rest }) {
  return (
    <View {...rest} style={[s(c), style]}>
      {children}
    </View>
  );
}

export function Ic({ n, s: size = 24, c = 'on-surface-variant', fill, style }) {
  const Set = fill ? SymbolFilled : SymbolOutline;
  return <Set name={n} size={size} color={color(c)} style={style} />;
}

// Every tappable surface: 0.98 press scale, as the motion spec asks.
// Layout props belong on the Pressable so sizing and spacing behave like a
// plain View; the visual box (and the press scale) stays on the inner view.
const OUTER = ['flex', 'flexGrow', 'flexShrink', 'flexBasis', 'alignSelf', 'width', 'minWidth', 'maxWidth', 'position', 'top', 'left', 'right', 'bottom', 'zIndex', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'marginHorizontal', 'marginVertical'];

// The split of a class list into the Pressable's layout and the inner box,
// worked out once per class list when there is no extra style.
const pressCache = new Map();
function pressStyles(c, style) {
  const hit = style ? null : pressCache.get(c || '');
  if (hit) return hit;
  const flat = StyleSheet.flatten([s(c), style]) || {};
  const outer = {};
  const inner = {};
  for (const [k, val] of Object.entries(flat)) (OUTER.includes(k) ? outer : inner)[k] = val;
  if (outer.width != null || outer.flex != null || outer.flexGrow != null || outer.alignSelf === 'stretch') inner.width = '100%';
  const out = { outer, inner };
  if (!style) pressCache.set(c || '', out);
  return out;
}

export function P({ c, style, children, onPress, disabled, scale = 0.98, hitSlop, accessibilityLabel, ...rest }) {
  const v = useRef(new Animated.Value(1)).current;
  const to = (x) => Animated.spring(v, { toValue: x, useNativeDriver: true, speed: 40, bounciness: 0 }).start();
  const { outer, inner } = pressStyles(c, style);
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={hitSlop}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPressIn={() => to(scale)}
      onPressOut={() => to(1)}
      style={outer}
      {...rest}
    >
      <Animated.View style={[inner, { transform: [{ scale: v }] }, disabled && { opacity: 0.5 }]}>{children}</Animated.View>
    </Pressable>
  );
}

export function Input({ c, style, ...rest }) {
  const flat = StyleSheet.flatten([BASE_TEXT, { fontSize: 16, lineHeight: undefined }, s(c), style]);
  // No browser focus ring on web; the field backgrounds already show focus.
  return <TextInput placeholderTextColor={C.outline} {...rest} style={[resolveFont(flat), Platform.OS === 'web' && { outlineStyle: 'none' }]} />;
}

// Circular progress ring (SVG, rotated to start at 12 o'clock).
export function Ring({ size = 32, stroke = 3, pct = 0, track = C['surface-container'], tint = C.secondary, children }) {
  const r = (size - stroke) / 2;
  const len = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(100, pct));
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size} style={{ position: 'absolute', transform: [{ rotate: '-90deg' }] }}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={track} strokeWidth={stroke} fill="none" />
        {p > 0 && (
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={tint}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${len} ${len}`}
            strokeDashoffset={len * (1 - p / 100)}
          />
        )}
      </Svg>
      {children}
    </View>
  );
}

export function Bar({ pct = 0, c = 'h-1.5 bg-surface-container-low', fill = 'bg-secondary' }) {
  return (
    <V c={`w-full rounded-full overflow-hidden ${c}`}>
      <V c={`h-full rounded-full ${fill}`} style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
    </V>
  );
}

// The user's own profile picture, or their initials, in a squircle. The design
// system's rounded-full is 12px, so avatars are soft squares.
export function Avatar({ name = '', size = 32, c = '', ring, uri }) {
  const radius = Math.min(12, size / 2.6);
  if (uri) {
    return (
      <Image
        source={{ uri }}
        accessibilityIgnoresInvertColors
        style={[{ width: size, height: size, borderRadius: radius }, ring && { borderWidth: 2, borderColor: color(ring) }]}
      />
    );
  }
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  const ini = ((parts[0]?.[0] || '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase() || 'B';
  return (
    <V
      c={`items-center justify-center bg-primary-fixed ${c}`}
      style={[{ width: size, height: size, borderRadius: radius }, ring && { borderWidth: 2, borderColor: color(ring) }]}
    >
      <T c="font-headline-sm text-on-primary-fixed-variant" style={{ fontSize: size * 0.38, lineHeight: size * 0.5, fontWeight: '700' }}>
        {ini}
      </T>
    </V>
  );
}

// The Klass8 logo, the same artwork as the opening (src/ui/brand.js LOGO),
// used the way a brand guide would:
//   <BrandLogo height={22} />                  the wordmark "Klass8", for headers
//   <BrandLogo layout="stack" height={100} />  the K8 mark above the name, for
//                                             the welcome and sign-in pages
//   <Logo size={28} />                         the K8 mark alone, beside page titles
// The motto is set as text under the stacked logo where it is needed, so it
// stays readable (inside the artwork it is too small below about 190 dp).
// mono draws the logo in one colour (for example white on a dark ground).
const MARK_IDS = ['cap', 'k', 'eight'];
const NAME_IDS = ['wK', 'wl', 'wa', 'ws1', 'ws2', 'w8'];
const boxOf = (ids) => ids.map((id) => LOGO.parts[id].box).reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])]);
const [MX0, MY0, MX1, MY1] = LOGO.markBox;
const MARK_VIEW = `${MX0 - 4} ${MY0 - 4} ${MX1 - MX0 + 8} ${MY1 - MY0 + 8}`;
const MARK_RATIO = (MY1 - MY0 + 8) / (MX1 - MX0 + 8);
const pieces = (ids, mono) => ids.map((id) => <Path key={id} d={LOGO.parts[id].d} fill={mono || LOGO.parts[id].fill} fillRule="evenodd" />);
export function Logo({ size = 32, mono }) {
  return (
    <Svg width={size} height={Math.round(size * MARK_RATIO)} viewBox={MARK_VIEW} accessibilityLabel="Klass8">
      {pieces(MARK_IDS, mono)}
    </Svg>
  );
}
const NAME_BOX = boxOf(NAME_IDS);
const STACK_BOX = boxOf([...MARK_IDS, ...NAME_IDS]);
export function BrandLogo({ height = 22, layout = 'name', mono }) {
  const ids = layout === 'stack' ? [...MARK_IDS, ...NAME_IDS] : NAME_IDS;
  const [x0, y0, x1, y1] = layout === 'stack' ? STACK_BOX : NAME_BOX;
  const pad = 4;
  const w = x1 - x0 + 2 * pad;
  const h = y1 - y0 + 2 * pad;
  return (
    <Svg width={(height * w) / h} height={height} viewBox={`${x0 - pad} ${y0 - pad} ${w} ${h}`} accessibilityLabel="Klass8">
      {pieces(ids, mono)}
    </Svg>
  );
}

export { tw, C, color };
