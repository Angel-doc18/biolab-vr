import { useRef, useState } from 'react';
import { PanResponder, View } from 'react-native';
import { C } from './kit';

// Range slider (min..max, integer steps) styled like the Stitch range input.
export default function Slider({ value, min = 0, max = 100, step = 1, onChange, accessibilityLabel }) {
  const [w, setW] = useState(0);
  const ref = useRef({ w: 0, start: 0 });
  ref.current.w = w;
  const pct = (value - min) / (max - min || 1);
  const set = (x) => {
    const p = Math.max(0, Math.min(1, x / (ref.current.w || 1)));
    const v = Math.round((min + p * (max - min)) / step) * step;
    if (v !== value) onChange(v);
  };
  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        ref.current.start = e.nativeEvent.locationX;
        ref.current.set(e.nativeEvent.locationX);
      },
      onPanResponderMove: (e, g) => ref.current.set(ref.current.start + g.dx),
    })
  ).current;
  ref.current.set = set;
  return (
    <View
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min, max, now: value }}
      onAccessibilityAction={(e) => onChange(Math.max(min, Math.min(max, value + (e.nativeEvent.actionName === 'increment' ? step : -step))))}
      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
      style={{ height: 32, justifyContent: 'center' }}
      onLayout={(e) => setW(e.nativeEvent.layout.width)}
      {...pan.panHandlers}
    >
      <View pointerEvents="none" style={{ height: 8, borderRadius: 4, backgroundColor: C['surface-container'] }}>
        <View style={{ height: 8, borderRadius: 4, width: `${pct * 100}%`, backgroundColor: C['primary-container'] }} />
      </View>
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: Math.max(0, pct * w - 11),
          width: 22,
          height: 22,
          borderRadius: 11,
          backgroundColor: C['primary-container'],
          borderWidth: 3,
          borderColor: '#fff',
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 1 },
          elevation: 3,
        }}
      />
    </View>
  );
}
