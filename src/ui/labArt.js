// Specimen views for the virtual practicals.
import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import Svg, { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';

const lerp = (a, b, t) => a + (b - a) * t;
export function mixHex(a, b, t) {
  const ch = (h) => {
    const n = parseInt(h.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const [r1, g1, b1] = ch(a);
  const [r2, g2, b2] = ch(b);
  const h = (x) => Math.round(x).toString(16).padStart(2, '0');
  return `#${h(lerp(r1, r2, t))}${h(lerp(g1, g2, t))}${h(lerp(b1, b2, t))}`;
}

// Red onion epidermal cell. p = 0 fully turgid, 1 fully plasmolysed.
// The cellulose wall never changes; only the protoplast shrinks.
export function OsmosisCell({ p = 0, size = 112 }) {
  const inset = lerp(4, 20, p);
  const rad = lerp(11, 22, p);
  const vac = lerp(34, 13, p);
  const shrunk = p > 0.08;
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      <Rect x={14} y={14} width={92} height={92} rx={14} fill={shrunk ? '#F7F9FF' : '#E2EFF0'} stroke="#707881" strokeWidth={4} strokeLinejoin="round" />
      {shrunk && <Rect x={18} y={18} width={84} height={84} rx={11} fill="#CDE5FF" fillOpacity={0.35 * p + 0.05} />}
      <Rect
        x={14 + inset}
        y={14 + inset * 1.05}
        width={92 - inset * 2}
        height={92 - inset * 2.1}
        rx={rad}
        fill="#4FDCBE"
        fillOpacity={lerp(0.25, 0.4, p)}
        stroke="#006B5F"
        strokeWidth={2}
      />
      <Ellipse cx={lerp(56, 54, p)} cy={58} rx={vac} ry={lerp(34, 12, p)} fill={mixHex('#CDE5FF', '#94CCFF', p)} fillOpacity={lerp(1, 0.8, p)} stroke="#0369A1" strokeWidth={1.4} />
      <Circle cx={lerp(84, 70, p)} cy={62} r={lerp(10, 7, p)} fill="#94CCFF" stroke="#00507D" strokeWidth={1.5} />
      <Circle cx={lerp(84, 70, p)} cy={62} r={lerp(4, 4, p)} fill="#00507D" />
      {shrunk ? (
        <G stroke="#0369A1" strokeWidth={1.5} strokeDasharray="2 2">
          <Line x1={14 + inset + 6} y1={14 + inset + 4} x2={24} y2={24} />
          <Line x1={106 - inset - 6} y1={106 - inset - 4} x2={96} y2={96} />
        </G>
      ) : (
        <Path d="M 28 32 Q 40 40 48 48" fill="none" stroke="#00507D" strokeLinecap="round" strokeWidth={2} />
      )}
    </Svg>
  );
}

export function TestTube({ color = '#2563eb', precipitate, size = 112, layer }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Path d="M78,20 L122,20 L122,150 A22,22 0 0 1 78,150 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth={4} />
      <Path d="M81,80 L119,80 L119,150 A19,19 0 0 1 81,150 Z" fill={color} fillOpacity={0.85} />
      {layer && <Rect x={81} y={72} width={38} height={14} fill={layer} fillOpacity={0.9} />}
      {precipitate && <Path d="M82,150 L118,150 A18,18 0 0 1 82,150 Z" fill={precipitate} />}
      <Path d="M86,86 L86,145" stroke="#ffffff" strokeOpacity={0.55} strokeWidth={4} strokeLinecap="round" />
      <Rect x={72} y={14} width={56} height={8} rx={4} fill="#cbd5e1" />
    </Svg>
  );
}

// fractions[i] = starch left in the sample taken at minute i+1 (null = not sampled yet)
export function SpottingTile({ fractions, size = 112 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Rect x={20} y={20} width={160} height={160} rx={18} fill="#ffffff" stroke="#cbd5e1" strokeWidth={4} />
      {fractions.map((f, i) => {
        const cx = 50 + (i % 3) * 50;
        const cy = 50 + Math.floor(i / 3) * 50;
        return (
          <G key={i}>
            <Circle cx={cx} cy={cy} r={17} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth={2} />
            {f != null && <Circle cx={cx} cy={cy} r={13} fill={mixHex('#b45309', '#1e1b4b', f)} />}
          </G>
        );
      })}
    </Svg>
  );
}

// Pondweed in a boiling tube; bubbles rise at a rate set by light intensity.
export function ElodeaTube({ rate = 0, size = 112 }) {
  const bubbles = useRef([0, 1, 2, 3].map(() => new Animated.Value(0))).current;
  useEffect(() => {
    if (!rate) return undefined;
    const period = 2600 / rate;
    const loops = bubbles.map((b, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay((period / 4) * i),
          Animated.timing(b, { toValue: 1, duration: period, easing: Easing.in(Easing.quad), useNativeDriver: true }),
          Animated.timing(b, { toValue: 0, duration: 0, useNativeDriver: true }),
        ])
      )
    );
    loops.forEach((l) => l.start());
    return () => loops.forEach((l) => l.stop());
  }, [rate, bubbles]);
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 200 200" style={{ position: 'absolute' }}>
        <Path d="M70,14 L130,14 L130,170 A30,30 0 0 1 70,170 Z" fill="#e0f2fe" stroke="#94a3b8" strokeWidth={4} />
        <Path d="M100,178 C96,140 104,120 98,90 C94,70 102,60 100,48" fill="none" stroke="#15803d" strokeWidth={5} strokeLinecap="round" />
        {[60, 76, 92, 108, 124, 140, 156].map((y, i) => (
          <G key={y}>
            <Path d={`M100,${y} q-18,-4 -24,${i % 2 ? 6 : -4}`} stroke="#16a34a" strokeWidth={4} strokeLinecap="round" fill="none" />
            <Path d={`M100,${y + 6} q18,-4 24,${i % 2 ? -4 : 6}`} stroke="#16a34a" strokeWidth={4} strokeLinecap="round" fill="none" />
          </G>
        ))}
      </Svg>
      {rate > 0 &&
        bubbles.map((b, i) => (
          <Animated.View
            key={i}
            style={{
              position: 'absolute',
              left: size * (0.47 + (i % 2 ? 0.04 : -0.03)),
              top: size * 0.22,
              width: size * 0.045,
              height: size * 0.045,
              borderRadius: size,
              borderWidth: 1.2,
              borderColor: '#0369a1',
              backgroundColor: 'rgba(255,255,255,0.8)',
              opacity: b.interpolate({ inputRange: [0, 0.1, 0.9, 1], outputRange: [0, 1, 1, 0] }),
              transform: [{ translateY: b.interpolate({ inputRange: [0, 1], outputRange: [0, -size * 0.18] }) }],
            }}
          />
        ))}
    </View>
  );
}

// Bubble potometer: pos = 0..1 distance the air bubble has moved along the scale.
export function Potometer({ pos = 0, size = 112 }) {
  const x = lerp(38, 170, Math.max(0, Math.min(1, pos)));
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Path d="M58,40 C50,64 64,74 60,96" stroke="#15803d" strokeWidth={4} fill="none" />
      <Path d="M60,50 q-26,-10 -34,6 q16,8 34,-6 Z M60,62 q26,-12 34,4 q-16,10 -34,-4 Z M60,76 q-24,-6 -30,8 q14,6 30,-8 Z" fill="#22c55e" stroke="#15803d" strokeWidth={1.5} />
      <Rect x={52} y={96} width={16} height={24} rx={3} fill="#cbd5e1" />
      <Rect x={30} y={120} width={150} height={12} rx={6} fill="#e0f2fe" stroke="#94a3b8" strokeWidth={3} />
      {Array.from({ length: 11 }, (_, i) => (
        <Line key={i} x1={40 + i * 13} y1={136} x2={40 + i * 13} y2={i % 5 === 0 ? 146 : 141} stroke="#707881" strokeWidth={1.5} />
      ))}
      <Ellipse cx={x} cy={126} rx={7} ry={4} fill="#ffffff" stroke="#0369a1" strokeWidth={2} />
      <Rect x={150} y={60} width={34} height={50} rx={6} fill="#e0f2fe" stroke="#94a3b8" strokeWidth={3} />
      <Rect x={164} y={108} width={6} height={14} fill="#94a3b8" />
    </Svg>
  );
}
