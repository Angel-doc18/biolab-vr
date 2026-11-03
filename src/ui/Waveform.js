import { useEffect, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { C } from './kit';
import { calmMotion } from '../lib/device';

// Each bar's own rise and fall, picked once: the bars then loop on the native
// side with no work for JavaScript while the voice plays.
const pattern = () => Array.from({ length: 4 }, () => ({ to: 0.3 + Math.random() * 0.7, ms: 180 + Math.random() * 260 }));

// Equaliser bars that breathe (scaleY 0.3 to 1.0) while narration plays; on
// entry-level phones (or with reduce motion) they stand still, half raised.
export default function Waveform({ playing, bars = 14, height = 22, color = C.secondary }) {
  const [vals] = useState(() => Array.from({ length: bars }, () => new Animated.Value(0.3)));
  const [steps] = useState(() => Array.from({ length: bars }, pattern));
  useEffect(() => {
    if (!playing || calmMotion()) {
      vals.forEach((v) => Animated.timing(v, { toValue: playing ? 0.6 : 0.3, duration: 200, useNativeDriver: true }).start());
      return undefined;
    }
    const loops = vals.map((v, i) =>
      Animated.loop(Animated.sequence(steps[i].map((st) => Animated.timing(v, { toValue: st.to, duration: st.ms, easing: Easing.inOut(Easing.quad), useNativeDriver: true }))))
    );
    loops.forEach((l) => l.start());
    return () => loops.forEach((l) => l.stop());
  }, [playing, vals, steps]);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, height }}>
      {vals.map((v, i) => (
        <Animated.View key={i} style={{ width: 3, height, borderRadius: 2, backgroundColor: color, opacity: 0.85, transform: [{ scaleY: v }] }} />
      ))}
    </View>
  );
}
