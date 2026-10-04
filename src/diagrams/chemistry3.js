// Chemistry diagrams for the Form 1 and 2 topics: common laboratory apparatus,
// the composition of air and the experiment that measures the oxygen in air,
// drawn in the same style as the other Chemistry diagrams.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';

const O = '#33414d';
const GLASS = '#eef6fb';
const LIQ = '#cfe6f5';
const METAL = '#9aa5b1';
const COPPER = '#b8733a';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

function Flame({ x, y, h = 30 }) {
  return (
    <G>
      <Path d={`M${x - 5} ${y} Q${x} ${y - h * 1.6} ${x + 5} ${y} Z`} fill="#7fb3e6" stroke="#3b78c2" strokeWidth={0.8} />
      <Path d={`M${x - 2.5} ${y} Q${x} ${y - h * 0.8} ${x + 2.5} ${y} Z`} fill="#3b78c2" />
    </G>
  );
}

// ---------- common laboratory apparatus ----------
function ApparatusArt() {
  return (
    <G stroke={O} strokeWidth={1.3} strokeLinejoin="round">
      {/* beaker */}
      <Rect x={12} y={66} width={40} height={26} fill={LIQ} stroke="none" />
      <Path d="M8 34 L12 38 L12 92 L52 92 L52 38" fill="none" />
      {range(3, (i) => <Line key={i} x1={42} y1={48 + i * 9} x2={48} y2={48 + i * 9} strokeWidth={0.8} />)}

      {/* conical flask */}
      <Path d="M85 76 L77 92 L127 92 L119 76 Z" fill={LIQ} stroke="none" />
      <Path d="M95 34 L95 56 L77 92 L127 92 L109 56 L109 34" fill="none" />
      <Line x1={93} y1={34} x2={111} y2={34} />

      {/* test tube */}
      <Path d="M171 70 L171 85 A7 7 0 0 0 185 85 L185 70 Z" fill={LIQ} stroke="none" />
      <Path d="M171 28 L171 85 A7 7 0 0 0 185 85 L185 28" fill="none" />
      <Line x1={169} y1={28} x2={187} y2={28} />

      {/* measuring cylinder */}
      <Rect x={235} y={50} width={18} height={36} fill={LIQ} stroke="none" />
      <Path d="M233 18 L235 22 L235 86 L253 86 L253 20" fill="none" />
      <Rect x={223} y={86} width={42} height={6} fill={GLASS} />
      {range(8, (i) => <Line key={i} x1={247} y1={28 + i * 7} x2={253} y2={28 + i * 7} strokeWidth={0.8} />)}

      {/* filter funnel with its folded paper */}
      <Path d="M295 34 L333 34 L318 64 L318 92 L310 92 L310 64 Z" fill={GLASS} />
      <Path d="M299 37 L314 61 L329 37" fill="none" strokeDasharray="3 2" strokeWidth={0.9} />

      {/* Bunsen burner */}
      <Flame x={38} y={140} h={22} />
      <Rect x={33} y={140} width={10} height={50} fill={METAL} />
      <Rect x={31} y={174} width={14} height={8} fill="#5d6873" />
      <Rect x={35} y={176} width={5} height={4} fill="#1f2933" stroke="none" />
      <Rect x={43} y={183} width={16} height={5} fill={METAL} />
      <Rect x={18} y={190} width={40} height={6} rx={2} fill="#5d6873" />

      {/* tripod and gauze */}
      <Line x1={118} y1={150} x2={118} y2={192} stroke="#8b96a1" />
      <Line x1={96} y1={150} x2={88} y2={196} strokeWidth={1.8} />
      <Line x1={140} y1={150} x2={148} y2={196} strokeWidth={1.8} />
      <Rect x={90} y={146} width={56} height={4} fill="#c9ced3" />
      {range(9, (i) => <Line key={i} x1={94 + i * 6} y1={146} x2={94 + i * 6} y2={150} strokeWidth={0.6} />)}

      {/* evaporating dish */}
      <Path d="M176 174 Q192 184 208 174 Z" fill={LIQ} stroke="none" />
      <Path d="M170 168 Q192 194 214 168" fill={GLASS} />
      <Line x1={167} y1={168} x2={217} y2={168} />

      {/* burette */}
      <Rect x={254} y={140} width={8} height={40} fill={LIQ} stroke="none" />
      <Path d="M254 130 L254 180 L262 180 L262 130" fill="none" />
      {range(6, (i) => <Line key={i} x1={254} y1={136 + i * 8} x2={258} y2={136 + i * 8} strokeWidth={0.8} />)}
      <Rect x={250} y={180} width={16} height={5} fill="#5d6873" />
      <Path d="M255 185 L257 196 L259 196 L261 185" fill={GLASS} />

      {/* dropping pipette */}
      <Ellipse cx={322} cy={134} rx={6} ry={9} fill="#d0574b" />
      <Path d="M319 143 L319 182 L321.5 196 L322.5 196 L325 182 L325 143 Z" fill={GLASS} />
    </G>
  );
}

// ---------- the composition of air ----------
function slice(cx, cy, r, a0, a1) {
  const rad = (a) => (a * Math.PI) / 180;
  const p = (a) => `${(cx + r * Math.cos(rad(a))).toFixed(2)} ${(cy + r * Math.sin(rad(a))).toFixed(2)}`;
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${cx} ${cy} L${p(a0)} A${r} ${r} 0 ${large} 1 ${p(a1)} Z`;
}

function AirArt() {
  const cx = 170;
  const cy = 105;
  const r = 78;
  return (
    <G stroke={O} strokeWidth={1.2} strokeLinejoin="round">
      <Path d={slice(cx, cy, r, -90, 190.8)} fill="#cfe0f2" />
      <Path d={slice(cx, cy, r, 190.8, 266.4)} fill="#f4c9b8" />
      <Path d={slice(cx, cy, r, 266.4, 270)} fill="#5d6873" />
    </G>
  );
}

// ---------- measuring the oxygen in air ----------
function Syringe({ x, w, filled, rodOut }) {
  return (
    <G>
      <Rect x={x} y={50} width={w} height={20} fill={GLASS} />
      <Rect x={x + 1} y={51} width={filled} height={18} fill="#e8eef4" stroke="none" />
      {range(Math.floor(w / 10), (i) => <Line key={i} x1={x + 8 + i * 10} y1={50} x2={x + 8 + i * 10} y2={55} strokeWidth={0.7} />)}
      <Line x1={rodOut[0]} y1={60} x2={rodOut[1]} y2={60} strokeWidth={2.4} />
      <Line x1={rodOut[2]} y1={50} x2={rodOut[2]} y2={70} strokeWidth={2.4} />
    </G>
  );
}

function OxygenAirArt() {
  return (
    <G stroke={O} strokeWidth={1.2} strokeLinejoin="round">
      {/* left syringe full of air, plunger pulled out */}
      <Syringe x={22} w={84} filled={82} rodOut={[4, 24, 4]} />
      {/* right syringe almost empty, plunger pushed in */}
      <Syringe x={240} w={84} filled={6} rodOut={[248, 344, 344]} />
      <Line x1={106} y1={60} x2={112} y2={60} strokeWidth={4} />
      <Line x1={234} y1={60} x2={240} y2={60} strokeWidth={4} />
      {/* hard glass tube packed with copper */}
      <Rect x={112} y={52} width={122} height={16} rx={3} fill={GLASS} />
      {range(16, (i) => (
        <Circle key={i} cx={132 + (i % 8) * 11} cy={i < 8 ? 57 : 63} r={2.6} fill={i % 3 === 0 ? '#2b2b2b' : COPPER} stroke="none" />
      ))}
      {/* burner */}
      <Flame x={173} y={96} h={14} />
      <Rect x={168} y={96} width={10} height={20} fill={METAL} />
    </G>
  );
}

export const CHEMISTRY_3 = {
  'lab-apparatus': {
    title: 'Common laboratory apparatus',
    w: 352,
    h: 214,
    art: ApparatusArt,
    labels: [
      ['Beaker', 32, 108, 32, 93],
      ['Conical flask', 102, 108, 102, 93],
      ['Test tube', 178, 108, 178, 93],
      ['Measuring\ncylinder', 244, 112, 244, 93],
      ['Filter funnel', 314, 108, 314, 93],
      ['Bunsen burner', 38, 212, 38, 197],
      ['Tripod and\ngauze', 118, 214, 118, 193],
      ['Evaporating\ndish', 192, 214, 192, 182],
      ['Burette', 258, 212, 258, 197],
      ['Dropper', 322, 212, 322, 197],
    ],
  },
  'air-composition': {
    title: 'The composition of dry air by volume',
    w: 340,
    h: 200,
    art: AirArt,
    labels: [
      ['Nitrogen 78%', 280, 150, 200, 140],
      ['Oxygen 21%', 60, 60, 140, 71],
      ['Argon and other gases 1%\n(carbon dioxide 0.04%)', 280, 14, 169, 30],
    ],
  },
  'oxygen-in-air': {
    title: 'Measuring the oxygen in air with hot copper',
    w: 346,
    h: 130,
    art: OxygenAirArt,
    labels: [
      ['Syringe with\n100 cm³ of air', 64, 22, 64, 50],
      ['Copper turns black\nas it takes up oxygen', 176, 22, 176, 56],
      ['Second syringe', 286, 30, 286, 50],
      ['Heat', 214, 108, 180, 104],
    ],
  },
};
