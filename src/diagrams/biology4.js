// Form 1 Biology figures for the scheme-of-work topics: the light microscope,
// Amoeba and Paramecium, and a savanna food web. Textbook style: outlines, light
// fills and ruled labels.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
const METAL = '#c9d2da';
const DARK = '#7d8b97';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

// ---------- the light microscope ----------
function MicroscopeArt() {
  return (
    <G>
      {/* base and pillar */}
      <Rect x={60} y={230} width={150} height={14} rx={4} fill={DARK} stroke={O} strokeWidth={1.4} />
      <Rect x={148} y={200} width={22} height={30} fill={METAL} stroke={O} strokeWidth={1.2} />
      {/* arm */}
      <Path d="M148 205 L172 205 C192 160 192 100 170 56 L148 68 C164 104 164 160 148 205 Z" fill={METAL} stroke={O} strokeWidth={1.4} />
      {/* tube carrier joining the arm */}
      <Rect x={120} y={64} width={34} height={12} fill={METAL} stroke={O} strokeWidth={1.2} />
      {/* eyepiece and body tube */}
      <Rect x={102} y={24} width={16} height={26} rx={2} fill={DARK} stroke={O} strokeWidth={1.3} />
      <Rect x={98} y={50} width={24} height={60} fill={METAL} stroke={O} strokeWidth={1.4} />
      {/* revolving nosepiece and objectives */}
      <Path d="M92 110 L128 110 L123 121 L97 121 Z" fill={DARK} stroke={O} strokeWidth={1.3} />
      <Rect x={104} y={121} width={12} height={18} rx={2} fill={METAL} stroke={O} strokeWidth={1.2} />
      <G transform="rotate(28 98 120)">
        <Rect x={93} y={120} width={9} height={13} rx={2} fill={METAL} stroke={O} strokeWidth={1.1} />
      </G>
      <G transform="rotate(-28 122 120)">
        <Rect x={118} y={120} width={9} height={11} rx={2} fill={METAL} stroke={O} strokeWidth={1.1} />
      </G>
      {/* stage, slide and clips */}
      <Rect x={70} y={150} width={100} height={8} fill={DARK} stroke={O} strokeWidth={1.3} />
      <Rect x={86} y={146} width={48} height={4} fill="#dcecf7" stroke={O} strokeWidth={0.8} />
      <Line x1={78} y1={145} x2={96} y2={145} stroke={O} strokeWidth={2} />
      <Line x1={138} y1={145} x2={156} y2={145} stroke={O} strokeWidth={2} />
      {/* condenser and diaphragm under the stage */}
      <Rect x={100} y={158} width={20} height={11} fill={METAL} stroke={O} strokeWidth={1.1} />
      {/* mirror on its mount */}
      <Line x1={124} y1={199} x2={150} y2={210} stroke={O} strokeWidth={2} />
      <G transform="rotate(-18 110 200)">
        <Ellipse cx={110} cy={200} rx={15} ry={5} fill="#eef4f8" stroke={O} strokeWidth={1.4} />
      </G>
      {/* light path */}
      <Line x1={110} y1={192} x2={110} y2={171} stroke="#e0a800" strokeWidth={1} strokeDasharray="3 3" />
      {/* focusing knobs */}
      <Circle cx={170} cy={110} r={12} fill={DARK} stroke={O} strokeWidth={1.3} />
      <Circle cx={174} cy={141} r={7} fill={DARK} stroke={O} strokeWidth={1.2} />
    </G>
  );
}

// ---------- Amoeba and Paramecium ----------
function ProtistsArt() {
  // Paramecium outline: a slipper, broad at the back (right), narrower at the front.
  const slipper = 'M176 86 C176 60 214 50 250 54 C286 58 312 66 312 86 C312 106 286 116 250 118 C214 120 176 112 176 86 Z';
  const cilia = range(40, (i) => {
    const t = (i / 40) * Math.PI * 2;
    const cx = 244 + 68 * Math.cos(t);
    const cy = 86 + 32 * Math.sin(t);
    const nx = Math.cos(t);
    const ny = Math.sin(t);
    return <Line key={i} x1={cx} y1={cy} x2={cx + nx * 7} y2={cy + ny * 7} stroke={O} strokeWidth={0.8} />;
  });
  const star = (x, y) => (
    <G>
      {range(8, (i) => {
        const a = (i / 8) * Math.PI * 2;
        return <Line key={i} x1={x + 5 * Math.cos(a)} y1={y + 5 * Math.sin(a)} x2={x + 11 * Math.cos(a)} y2={y + 11 * Math.sin(a)} stroke="#4a7ab0" strokeWidth={1.1} />;
      })}
      <Circle cx={x} cy={y} r={5} fill="#ffffff" stroke="#4a7ab0" strokeWidth={1.2} />
    </G>
  );
  return (
    <G>
      {/* Amoeba */}
      <Path d="M40 82 C26 56 50 40 70 54 C80 28 116 30 114 58 C138 60 140 92 116 100 C122 126 92 140 76 118 C58 134 28 120 44 100 C30 96 30 88 40 82 Z" fill="#eef3f8" stroke={O} strokeWidth={1.6} />
      <Path d="M44 82 C34 60 52 48 70 60 C82 38 108 40 108 62 C128 66 130 90 110 98 C114 120 92 130 78 112 C62 126 38 116 50 100 C38 96 38 88 44 82 Z" fill="none" stroke="#9fb2c4" strokeWidth={0.8} strokeDasharray="2 2" />
      <Circle cx={80} cy={84} r={11} fill="#cdd9ec" stroke="#34506b" strokeWidth={1.4} />
      <Circle cx={100} cy={70} r={6} fill="#ffffff" stroke="#4a7ab0" strokeWidth={1.2} />
      <Circle cx={60} cy={100} r={6} fill="#f6e7c8" stroke="#8a6a2b" strokeWidth={1.1} />
      <Circle cx={60} cy={100} r={2} fill="#8a6a2b" />
      <Txt x={80} y={160} size={11} weight="700" italic>Amoeba</Txt>
      {/* Paramecium */}
      {cilia}
      <Path d={slipper} fill="#f1f6ee" stroke={O} strokeWidth={1.6} />
      <Path d="M214 58 C226 70 236 80 244 88" fill="none" stroke={O} strokeWidth={1.3} />
      <Circle cx={246} cy={90} r={4} fill="#f6e7c8" stroke="#8a6a2b" strokeWidth={1} />
      <Ellipse cx={262} cy={92} rx={15} ry={8} fill="#cdd9ec" stroke="#34506b" strokeWidth={1.3} />
      <Circle cx={281} cy={86} r={3} fill="#8ea6c9" stroke="#34506b" strokeWidth={0.8} />
      {star(198, 86)}
      {star(296, 98)}
      <Circle cx={224} cy={98} r={4} fill="#f6e7c8" stroke="#8a6a2b" strokeWidth={1} />
      <Txt x={244} y={160} size={11} weight="700" italic>Paramecium</Txt>
    </G>
  );
}

// ---------- a savanna food web ----------
const NODES = {
  hawk: [150, 20, 'Hawk'],
  snake: [235, 72, 'Snake'],
  lizard: [70, 72, 'Lizard'],
  grasshopper: [70, 126, 'Grasshopper'],
  rat: [235, 126, 'Rat'],
  grass: [70, 180, 'Grass'],
  maize: [235, 180, 'Maize'],
};
const EATS = [
  ['grass', 'grasshopper'],
  ['maize', 'grasshopper'],
  ['maize', 'rat'],
  ['grass', 'rat'],
  ['grasshopper', 'lizard'],
  ['lizard', 'snake'],
  ['rat', 'snake'],
  ['lizard', 'hawk'],
  ['snake', 'hawk'],
];
function FoodWebArt() {
  const box = ([x, y, name], key, producer) => (
    <G key={key}>
      <Rect x={x - 38} y={y - 11} width={76} height={22} rx={6} fill={producer ? '#e3f0da' : '#f4f1ea'} stroke={producer ? '#4c6b3a' : O} strokeWidth={1.2} />
      <Txt x={x} y={y + 4} size={10.5} weight="700">{name}</Txt>
    </G>
  );
  const edge = ([from, to], i) => {
    const [x1, y1] = NODES[from];
    const [x2, y2] = NODES[to];
    // leave and enter each box where the line crosses its edge
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    const s = Math.min(Math.abs(ux) > 1e-6 ? 38 / Math.abs(ux) : Infinity, Math.abs(uy) > 1e-6 ? 11 / Math.abs(uy) : Infinity) + 2;
    const ax = x1 + ux * s;
    const ay = y1 + uy * s;
    const bx = x2 - ux * s;
    const by = y2 - uy * s;
    return (
      <G key={i}>
        <Line x1={ax} y1={ay} x2={bx} y2={by} stroke="#5a6b78" strokeWidth={1.2} />
        <Head x={bx} y={by} dx={ux} dy={uy} size={6} fill="#5a6b78" />
      </G>
    );
  };
  return (
    <G>
      {EATS.map(edge)}
      {Object.entries(NODES).map(([k, n]) => box(n, k, k === 'grass' || k === 'maize'))}
      <Txt x={152} y={210} size={9.5}>Arrows show the direction of energy flow (from food to feeder)</Txt>
    </G>
  );
}

export const BIOLOGY_4 = {
  'light-microscope': {
    title: 'The light microscope',
    w: 230,
    h: 250,
    art: MicroscopeArt,
    labels: [
      ['Eyepiece', 40, 36, 102, 36],
      ['Body tube', 40, 80, 98, 80],
      ['Revolving\nnosepiece', 40, 112, 92, 114],
      ['Objective lens', 40, 138, 104, 133],
      ['Stage', 40, 158, 70, 154],
      ['Condenser and\ndiaphragm', 40, 180, 100, 165],
      ['Mirror', 40, 206, 97, 203],
      ['Base', 40, 237, 60, 237],
      ['Arm', 214, 70, 178, 80],
      ['Coarse adjustment\nknob', 214, 106, 182, 110],
      ['Fine adjustment\nknob', 214, 140, 181, 141],
      ['Stage clip', 214, 172, 152, 145],
    ],
  },
  protists: {
    title: 'Two protoctists: Amoeba and Paramecium',
    w: 330,
    h: 168,
    art: ProtistsArt,
    labels: [
      ['Pseudopodium', 122, 4, 108, 44],
      ['Contractile\nvacuole', 18, 30, 95, 66],
      ['Nucleus', 18, 70, 69, 84],
      ['Food vacuole', 18, 112, 55, 102],
      ['Cell membrane', 18, 140, 70, 124],
      ['Oral groove', 216, 22, 222, 66],
      ['Cilia', 300, 22, 290, 58],
      ['Contractile\nvacuole', 340, 120, 304, 104],
      ['Macronucleus', 340, 80, 276, 92],
      ['Micronucleus', 340, 56, 283, 84],
      ['Food vacuole', 200, 140, 224, 102],
    ],
  },
  'food-web': {
    title: 'A food web in the savanna',
    w: 305,
    h: 218,
    art: FoodWebArt,
    labels: [],
  },
};
