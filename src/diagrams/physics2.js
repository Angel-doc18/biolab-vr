// More Physics diagrams for the class topics: the classes of lever, the clinical
// thermometer, a stationary wave, the gold-leaf electroscope, the wiring of a
// three-pin plug and the parallelogram of forces.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { O } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const RED = '#c8463d';
const BLUE = '#3f6fb5';
const METAL = '#c4cbd2';
const GLASS = '#eef6fb';

function Arrow({ x1, y1, x2, y2, c = O, w = 1.6, size = 7 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// ---------- the three classes of lever ----------
function Lever({ x, pivot, load, effort, up, title, eg }) {
  const at = (f) => x + 8 + f * 92;
  return (
    <G>
      <Rect x={x + 4} y={78} width={100} height={6} rx={2} fill="#c9a36b" stroke={O} strokeWidth={1} />
      <Polygon points={`${at(pivot)},84 ${at(pivot) - 9},102 ${at(pivot) + 9},102`} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Txt x={at(pivot)} y={116} size={9}>P</Txt>
      <Rect x={at(load) - 10} y={58} width={20} height={20} fill="#e8eef7" stroke={O} strokeWidth={1} />
      <Txt x={at(load)} y={72} size={10} weight="700">L</Txt>
      {up ? <Arrow x1={at(effort)} y1={76} x2={at(effort)} y2={44} c={RED} /> : <Arrow x1={at(effort)} y1={44} x2={at(effort)} y2={76} c={RED} />}
      <Txt x={at(effort) + (effort > 0.5 ? -9 : 9)} y={48} size={10} weight="700" fill={RED}>E</Txt>
      <Txt x={x + 54} y={140} size={10} weight="700">{title}</Txt>
      <Txt x={x + 54} y={154} size={9} italic>{eg}</Txt>
    </G>
  );
}
function LeverArt() {
  return (
    <G>
      <Lever x={4} pivot={0.5} load={0.05} effort={0.95} title="First class" eg="crowbar, scissors, see-saw" />
      <Lever x={124} pivot={0} load={0.5} effort={0.95} up title="Second class" eg="wheelbarrow, nutcracker" />
      <Lever x={244} pivot={0} load={0.95} effort={0.5} up title="Third class" eg="forearm, tweezers" />
      <Txt x={176} y={20} size={9.5}>P = pivot (fulcrum), L = load, E = effort</Txt>
    </G>
  );
}

// ---------- the clinical thermometer ----------
const degX = (t) => 90 + (t - 35) * 30;
function ClinicalArt() {
  return (
    <G>
      <Rect x={30} y={60} width={290} height={24} rx={12} fill={GLASS} stroke={O} strokeWidth={1.2} />
      <Ellipse cx={36} cy={72} rx={14} ry={9} fill="#9aa3ab" stroke={O} strokeWidth={1} />
      <Line x1={48} y1={72} x2={306} y2={72} stroke="#c9d2da" strokeWidth={1.4} />
      <Line x1={48} y1={72} x2={54} y2={72} stroke="#6f7881" strokeWidth={2.2} />
      <Path d="M54 69.5 Q57 72 60 69.5 M54 74.5 Q57 72 60 74.5" fill="none" stroke={O} strokeWidth={0.9} />
      <Line x1={60} y1={72} x2={degX(37)} y2={72} stroke="#6f7881" strokeWidth={2.2} />
      {range(15, (i) => {
        const t = 35 + i * 0.5;
        const whole = i % 2 === 0;
        return <Line key={i} x1={degX(t)} y1={60} x2={degX(t)} y2={whole ? 68 : 65} stroke={O} strokeWidth={whole ? 1 : 0.7} />;
      })}
      {range(8, (i) => (
        <Txt key={i} x={degX(35 + i)} y={54} size={9}>{String(35 + i)}</Txt>
      ))}
      <Line x1={degX(37)} y1={58} x2={degX(37)} y2={86} stroke={RED} strokeWidth={1.2} />
    </G>
  );
}

// ---------- a stationary wave on a string ----------
function StationaryArt() {
  const nodes = [30, 123.3, 216.7, 310];
  return (
    <G>
      <Rect x={20} y={55} width={10} height={40} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Rect x={310} y={55} width={10} height={40} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Path d="M30 75 Q76.7 19 123.3 75 Q170 131 216.7 75 Q263.3 19 310 75" fill="none" stroke={BLUE} strokeWidth={2} />
      <Path d="M30 75 Q76.7 131 123.3 75 Q170 19 216.7 75 Q263.3 131 310 75" fill="none" stroke={BLUE} strokeWidth={1.4} strokeDasharray="5 4" />
      <Line x1={30} y1={75} x2={310} y2={75} stroke="#b9c1c8" strokeWidth={0.8} strokeDasharray="2 3" />
      {nodes.map((x) => (
        <Circle key={x} cx={x} cy={75} r={3} fill={O} />
      ))}
      <Line x1={216.7} y1={112} x2={310} y2={112} stroke={O} strokeWidth={1} />
      <Head x={310} y={112} dx={1} dy={0} size={5} />
      <Head x={216.7} y={112} dx={-1} dy={0} size={5} />
      <Txt x={263.3} y={126} size={10} weight="700">½ λ</Txt>
    </G>
  );
}

// ---------- the gold-leaf electroscope ----------
function ElectroscopeArt() {
  return (
    <G>
      <Rect x={60} y={70} width={140} height={130} rx={4} fill="#d5dade" stroke={O} strokeWidth={1.3} />
      <Rect x={72} y={84} width={116} height={102} rx={3} fill="#eaf4fb" stroke={O} strokeWidth={0.9} />
      <Rect x={115} y={60} width={30} height={16} rx={2} fill="#e8d9a8" stroke={O} strokeWidth={1} />
      <Rect x={127} y={28} width={6} height={94} fill={METAL} stroke={O} strokeWidth={0.8} />
      <Rect x={124} y={120} width={12} height={50} fill={METAL} stroke={O} strokeWidth={0.8} />
      <Path d="M136 124 L164 166 L160 168 L134 129 Z" fill="#e3b23c" stroke="#a37a1e" strokeWidth={0.6} />
      <Rect x={90} y={18} width={80} height={10} rx={2} fill={METAL} stroke={O} strokeWidth={1} />
      {[100, 116, 144, 160].map((x) => (
        <Txt key={x} x={x} y={27} size={11} weight="700" fill={BLUE}>−</Txt>
      ))}
      <Txt x={118} y={150} size={11} weight="700" fill={BLUE}>−</Txt>
      <Txt x={172} y={160} size={11} weight="700" fill={BLUE}>−</Txt>
      <Line x1={130} y1={200} x2={130} y2={214} stroke={O} strokeWidth={1.2} />
      {[0, 1, 2].map((i) => (
        <Line key={i} x1={118 + i * 4} y1={214 + i * 4} x2={142 - i * 4} y2={214 + i * 4} stroke={O} strokeWidth={1.2} />
      ))}
    </G>
  );
}

// ---------- wiring a three-pin plug ----------
function PlugArt() {
  return (
    <G>
      <Rect x={60} y={20} width={220} height={200} rx={18} fill="#f4f1ea" stroke={O} strokeWidth={1.4} />
      <Rect x={158} y={36} width={24} height={44} rx={2} fill={METAL} stroke={O} strokeWidth={1} />
      <Rect x={100} y={118} width={24} height={34} rx={2} fill={METAL} stroke={O} strokeWidth={1} />
      <Rect x={216} y={112} width={24} height={34} rx={2} fill={METAL} stroke={O} strokeWidth={1} />
      <Line x1={228} y1={146} x2={228} y2={152} stroke={O} strokeWidth={2} />
      <Rect x={214} y={152} width={28} height={30} rx={6} fill="#e9e3d0" stroke={O} strokeWidth={1} />
      <Line x1={220} y1={167} x2={236} y2={167} stroke={O} strokeWidth={1} />
      <Rect x={130} y={194} width={80} height={14} rx={3} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Rect x={150} y={206} width={40} height={36} fill="#5b5f63" stroke={O} strokeWidth={1} />
      <Path d="M160 200 C150 180 120 176 112 152" fill="none" stroke="#2f6fb5" strokeWidth={4} strokeLinecap="round" />
      <Path d="M180 200 C192 192 222 196 228 182" fill="none" stroke="#7a4b2a" strokeWidth={4} strokeLinecap="round" />
      <Path d="M170 200 L170 82" fill="none" stroke="#3c9a4a" strokeWidth={4} strokeLinecap="round" />
      <Path d="M170 200 L170 82" fill="none" stroke="#f2d43a" strokeWidth={4} strokeDasharray="6 6" />
    </G>
  );
}

// ---------- the parallelogram of forces ----------
function VectorArt() {
  const o = [50, 170];
  const a = [210, 170];
  const b = [110, 66.1];
  const c = [270, 66.1];
  return (
    <G>
      <Line x1={a[0]} y1={a[1]} x2={c[0]} y2={c[1]} stroke={O} strokeWidth={1} strokeDasharray="5 4" />
      <Line x1={b[0]} y1={b[1]} x2={c[0]} y2={c[1]} stroke={O} strokeWidth={1} strokeDasharray="5 4" />
      <Arrow x1={o[0]} y1={o[1]} x2={a[0]} y2={a[1]} c={BLUE} w={2.4} />
      <Arrow x1={o[0]} y1={o[1]} x2={b[0]} y2={b[1]} c={BLUE} w={2.4} />
      <Arrow x1={o[0]} y1={o[1]} x2={c[0]} y2={c[1]} c={RED} w={2.8} size={8} />
      <Path d="M90 170 A40 40 0 0 0 86.2 152.9" fill="none" stroke={O} strokeWidth={1} />
      <Txt x={104} y={164} size={10} italic>θ</Txt>
      <Circle cx={o[0]} cy={o[1]} r={3} fill={O} />
      <Txt x={130} y={188} size={10} weight="700" fill={BLUE}>F₁ = 4 N</Txt>
      <Txt x={62} y={112} size={10} weight="700" fill={BLUE} anchor="end">F₂ = 3 N</Txt>
      <Txt x={170} y={108} size={10} weight="700" fill={RED} rotate={-25}>Resultant R = 6.1 N</Txt>
      <Txt x={175} y={214} size={9.5}>Angle between the forces 60°. Scale: 1 cm = 1 N. θ = 25°</Txt>
    </G>
  );
}

export const PHYSICS_MORE = {
  'lever-classes': {
    title: 'The three classes of lever',
    w: 364,
    h: 162,
    art: LeverArt,
    labels: [],
  },
  'clinical-thermometer': {
    title: 'A clinical thermometer',
    w: 340,
    h: 124,
    art: ClinicalArt,
    labels: [
      ['Bulb of mercury', 36, 112, 36, 82],
      ['Constriction', 57, 24, 57, 68],
      ['Mercury thread', 116, 112, 116, 74],
      ['37 °C: normal body\ntemperature', 210, 112, degX(37), 86],
      ['Scale from 35 °C to 42 °C', 285, 24, 285, 59],
    ],
  },
  'stationary-wave': {
    title: 'A stationary wave on a stretched string',
    w: 340,
    h: 140,
    art: StationaryArt,
    labels: [
      ['Fixed end (a node)', 25, 114, 25, 96],
      ['Node: no movement', 123.3, 138, 123.3, 79],
      ['Antinode: largest vibration', 263.3, 20, 263.3, 46],
    ],
  },
  electroscope: {
    title: 'A negatively charged gold-leaf electroscope',
    w: 260,
    h: 230,
    art: ElectroscopeArt,
    labels: [
      ['Metal cap', 40, 23, 90, 23],
      ['Insulating plug', 40, 68, 115, 68],
      ['Metal rod', 40, 104, 127, 104],
      ['Metal plate', 40, 140, 124, 140],
      ['Glass window', 40, 176, 78, 176],
      ['Gold leaf rises', 220, 140, 154, 150],
      ['Earthed metal case', 220, 196, 200, 196],
    ],
  },
  'three-pin-plug': {
    title: 'Inside a correctly wired three-pin plug',
    w: 340,
    h: 244,
    art: PlugArt,
    labels: [
      ['Earth wire\n(green and yellow)', 40, 100, 168, 120],
      ['Neutral wire\n(blue)', 40, 168, 128, 176],
      ['Cable grip', 40, 204, 130, 201],
      ['Earth pin', 300, 50, 182, 52],
      ['Live pin', 300, 126, 240, 128],
      ['Fuse', 300, 166, 242, 166],
      ['Live wire\n(brown)', 300, 204, 206, 194],
    ],
  },
  'vector-parallelogram': {
    title: 'Finding a resultant with the parallelogram of forces',
    w: 300,
    h: 222,
    art: VectorArt,
    labels: [],
  },
};
