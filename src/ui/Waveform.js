import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { C } from './kit';

// Equaliser bars that breathe (scaleY 0.3 to 1.0) while narration plays.
export default function Waveform({ playing, bars = 14, height = 22, color = C.secondary }) {
  const vals = useRef(Array.from({ length: bars }, () => new Animated.Value(0.3))).current;
  useEffect(() => {
    if (!playing) {
      vals.forEach((v) => Animated.timing(v, { toValue: 0.3, duration: 200, useNativeDriver: true }).start());
      return undefined;
    }
    let alive = true;
    const run = (v) => {
      if (!alive) return;
      Animated.timing(v, { toValue: 0.3 + Math.random() * 0.7, duration: 180 + Math.random() * 260, easing: Easing.inOut(Easing.quad), useNativeDriver: true }).start(() => run(v));
    };
    vals.forEach(run);
    return () => {
      alive = false;
    };
  }, [playing, vals]);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, height }}>
      {vals.map((v, i) => (
        <Animated.View key={i} style={{ width: 3, height, borderRadius: 2, backgroundColor: color, opacity: 0.85, transform: [{ scaleY: v }] }} />
      ))}
    </View>
  );
}
