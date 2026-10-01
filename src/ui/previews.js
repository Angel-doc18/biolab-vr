// Static previews of each unit's 3D specimen (the live model opens on tap).
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Rect, Stop } from 'react-native-svg';
import { AnimalCell, Mitochondrion } from './art';
import { Ic, V } from './kit';
import { unitById } from '../data/units';

function Backdrop({ children }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute' }}>
      <Defs>
        <LinearGradient id="bgp" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#f3f8ff" />
          <Stop offset="1" stopColor="#d7eaff" />
        </LinearGradient>
        <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect width="320" height="180" fill="url(#bgp)" />
      <Circle cx="160" cy="90" r="80" fill="url(#glow)" />
      <Ellipse cx="160" cy="92" rx="118" ry="38" fill="none" stroke="#4fdbc8" strokeOpacity="0.55" strokeWidth="2.5" transform="rotate(-12 160 92)" />
      <Circle cx="62" cy="116" r="4" fill="#ffffff" stroke="#0369a1" strokeWidth="1.5" />
      {children}
    </Svg>
  );
}

function Heart() {
  return (
    <Backdrop>
      <Path d="M160 150 C110 118 96 92 106 70 C116 50 142 50 160 72 C178 50 204 50 214 70 C224 92 210 118 160 150 Z" fill="#c43b52" stroke="#8f1f35" strokeWidth="3" />
      <Path d="M150 60 C148 40 158 30 172 28 M170 64 C176 46 190 40 204 42" fill="none" stroke="#0369a1" strokeWidth="7" strokeLinecap="round" />
      <Path d="M132 84 C142 96 150 110 160 128" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
    </Backdrop>
  );
}

function Leaf() {
  return (
    <Backdrop>
      <Path d="M100 130 C110 70 170 40 230 50 C226 110 170 146 100 130 Z" fill="#2f9e6e" stroke="#006b5f" strokeWidth="3" />
      <Path d="M104 128 C140 104 180 80 226 54" fill="none" stroke="#bff3dd" strokeWidth="2.5" />
      {[0, 1, 2, 3].map((i) => (
        <Path key={i} d={`M${130 + i * 22} ${112 - i * 14} l14 -22`} stroke="#bff3dd" strokeWidth="1.8" />
      ))}
    </Backdrop>
  );
}

function Dna() {
  const rungs = Array.from({ length: 9 }, (_, i) => i);
  return (
    <Backdrop>
      {rungs.map((i) => {
        const x = 96 + i * 16;
        const y1 = 90 + Math.sin(i * 0.8) * 34;
        const y2 = 90 - Math.sin(i * 0.8) * 34;
        return (
          <G key={i}>
            <Path d={`M${x} ${y1} L${x} ${y2}`} stroke="#94ccff" strokeWidth="3" />
            <Circle cx={x} cy={y1} r="6" fill="#0369a1" />
            <Circle cx={x} cy={y2} r="6" fill="#006b5f" />
          </G>
        );
      })}
    </Backdrop>
  );
}

const MAP = { cell: 'cell', transport: 'heart', genetics: 'dna', ecology: 'leaf' };

export function SpecimenPreview({ unitId }) {
  const kind = MAP[unitId];
  if (kind === 'cell') return <AnimalCell />;
  if (kind === 'heart') return <Heart />;
  if (kind === 'dna') return <Dna />;
  if (kind === 'leaf') return <Leaf />;
  if (kind === 'mito')
    return (
      <V c="w-full h-full bg-surface-container-low items-center justify-center">
        <Mitochondrion />
      </V>
    );
  const unit = unitById(unitId);
  return (
    <V c="w-full h-full">
      <Backdrop />
      <V c="absolute inset-0 items-center justify-center">
        <V c="w-20 h-20 rounded-3xl bg-surface-container-lowest items-center justify-center shadow-md">
          <Ic n={unit?.icon || 'view_in_ar'} s={44} c="primary-container" />
        </V>
      </V>
    </V>
  );
}
