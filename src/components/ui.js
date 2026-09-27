import { Text, View, Pressable } from 'react-native';
import { createIconSet } from '@expo/vector-icons';
import glyphMap from '../glyphmap.json';
import { C, type } from '../theme';

// Material Symbols Outlined, bundled locally (two static instances: FILL 0 and FILL 1)
// so icons render with zero network.
const SymbolOutline = createIconSet(glyphMap, 'MaterialSymbols', require('../../assets/fonts/MaterialSymbols-fill0.ttf'));
const SymbolFilled = createIconSet(glyphMap, 'MaterialSymbolsFill', require('../../assets/fonts/MaterialSymbols-fill1.ttf'));

export function Icon({ name, size = 24, color = C['on-surface'], fill = false, style }) {
  const Set = fill ? SymbolFilled : SymbolOutline;
  return <Set name={name} size={size} color={color} style={style} />;
}

// <T v="title-md" w={500} c="on-surface">…</T>
export function T({ v = 'body-md', w, size, leading, c = 'on-surface', upper, style, children, ...rest }) {
  return (
    <Text
      {...rest}
      style={[
        type(v, { weight: w, size, leading }),
        { color: C[c] || c },
        upper && { textTransform: 'uppercase' },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

// Pressable that dims slightly on press, standing in for hover/active states.
export function Btn({ style, children, disabled, pressedStyle, ...rest }) {
  return (
    <Pressable
      disabled={disabled}
      {...rest}
      style={({ pressed }) => [
        typeof style === 'function' ? style({ pressed }) : style,
        pressed && (pressedStyle || { opacity: 0.85, transform: [{ scale: 0.99 }] }),
      ]}
    >
      {children}
    </Pressable>
  );
}

export function Row({ style, children, ...rest }) {
  return (
    <View {...rest} style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      {children}
    </View>
  );
}

export function Dot({ size = 8, color, style }) {
  return <View style={[{ width: size, height: size, borderRadius: size / 2, backgroundColor: C[color] || color }, style]} />;
}
