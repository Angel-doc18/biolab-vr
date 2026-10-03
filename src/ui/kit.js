// Primitives that let each screen keep the Stitch utility classes:
//   <V c="flex-row items-center gap-2">  <T c="font-headline-sm text-headline-sm">  <Ic n="home" s={22} />
import { useRef } from 'react';
import { Animated, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { createIconSet } from '@expo/vector-icons';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { LOGO_S } from './logoPath';
import glyphMap from '../glyphmap.json';
import tw, { C, color } from './tw';

const SymbolOutline = createIconSet(glyphMap, 'MaterialSymbols', require('../../assets/fonts/MaterialSymbols-fill0.ttf'));
const SymbolFilled = createIconSet(glyphMap, 'MaterialSymbolsFill', require('../../assets/fonts/MaterialSymbols-fill1.ttf'));

const cache = new Map();
export function s(c) {
  if (!c) return null;
  let v = cache.get(c);
  if (!v) {
    v = tw.style(c);
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

export function T({ c, style, children, ...rest }) {
  const flat = StyleSheet.flatten([BASE_TEXT, s(c), style]);
  if (flat.fontSize && !flat.lineHeight) flat.lineHeight = Math.round(flat.fontSize * 1.4);
  return (
    <Text {...rest} style={resolveFont(flat)}>
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

export function P({ c, style, children, onPress, disabled, scale = 0.98, hitSlop, accessibilityLabel, ...rest }) {
  const v = useRef(new Animated.Value(1)).current;
  const to = (x) => Animated.spring(v, { toValue: x, useNativeDriver: true, speed: 40, bounciness: 0 }).start();
  const flat = StyleSheet.flatten([s(c), style]) || {};
  const outer = {};
  const inner = {};
  for (const [k, val] of Object.entries(flat)) (OUTER.includes(k) ? outer : inner)[k] = val;
  if (outer.width != null || outer.flex != null || outer.flexGrow != null || outer.alignSelf === 'stretch') inner.width = '100%';
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

// Initials in a squircle. The design system's rounded-full is 12px, so avatars
// are soft squares, never stock portraits.
export function Avatar({ name = '', size = 32, c = '', ring }) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  const ini = ((parts[0]?.[0] || '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase() || 'B';
  return (
    <V
      c={`items-center justify-center bg-primary-fixed ${c}`}
      style={[{ width: size, height: size, borderRadius: Math.min(12, size / 2.6) }, ring && { borderWidth: 2, borderColor: color(ring) }]}
    >
      <T c="font-headline-sm text-on-primary-fixed-variant" style={{ fontSize: size * 0.38, lineHeight: size * 0.5, fontWeight: '700' }}>
        {ini}
      </T>
    </V>
  );
}

// Brand mark: the orbit cell from the approved logo.
// The ScienceAid mark: a white S on a rounded brand-blue tile (white S alone when mono).
export function Logo({ size = 32, mono }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      {!mono && <Rect x={0} y={0} width={100} height={100} rx={22} fill="#0369A1" />}
      <Path d={LOGO_S} fill="#FFFFFF" />
    </Svg>
  );
}

export { tw, C, color };
