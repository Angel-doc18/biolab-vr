// Physics diagrams for the Form 1 and 2 topics: shadows from an extended source,
// pressure in a liquid, the greenhouse effect, the bimetallic strip and the
// energy changes in a torch.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { O } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const RAY = '#e0a800';
const HEAT = '#c8463d';
const WATER = '#cfe6f5';

function Arrow({ x1, y1, x2, y2, c = O, w = 1.6, size = 7 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// ---------- umbra and penumbra ----------
// Source: x = 40, y 90 to 130. Ball: centre (170, 110), radius 18. Screen at x = 320.
// The four edge rays pass the top and bottom of the ball.
function ShadowArt() {
  const rays = [
    [40, 90, 320, 94.3],
    [40, 130, 320, 125.7],
    [40, 130, 320, 48.2],
    [40, 90, 320, 171.9],
  ];
  return (
    <G>
      {rays.map(([x1, y1, x2, y2], i) => (
        <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={RAY} strokeWidth={0.9} strokeDasharray={i < 2 ? undefined : '4 3'} />
      ))}
      <Rect x={316} y={24} width={10} height={176} fill="#f4f1e6" stroke={O} strokeWidth={1.1} />
      <Rect x={316} y={48.2} width={10} height={46.1} fill="#9aa3ab" stroke="none" />
      <Rect x={316} y={125.7} width={10} height={46.2} fill="#9aa3ab" stroke="none" />
      <Rect x={316} y={94.3} width={10} height={31.4} fill="#2b3138" stroke="none" />
      <Rect x={316} y={24} width={10} height={176} fill="none" stroke={O} strokeWidth={1.1} />
      <Rect x={32} y={88} width={16} height={44} rx={7} fill="#ffe9a3" stroke={O} strokeWidth={1.1} />
      <Circle cx={170} cy={110} r={18} fill="#5d6873" stroke={O} strokeWidth={1.1} />
    </G>
  );
}

// ---------- pressure in a liquid ----------
// Jets drawn for the same short time after leaving the can: the faster jet
// travels further sideways while every jet drops the same height.
function LiquidPressureArt() {
  const jets = [
    [70, 48],
    [120, 72],
    [170, 90],
  ];
  return (
    <G>
      <Rect x={62} y={30} width={56} height={170} fill={WATER} stroke="none" />
      <Path d="M60 20 L60 202 L120 202 L120 20" fill="none" stroke={O} strokeWidth={1.6} />
      <Line x1={62} y1={30} x2={118} y2={30} stroke="#3f6fb5" strokeWidth={1} />
      {jets.map(([y, l], i) => (
        <G key={i}>
          <Path d={`M120 ${y} Q${120 + l * 0.55} ${y} ${120 + l} ${y + 30}`} fill="none" stroke="#3f6fb5" strokeWidth={2.4} />
          <Circle cx={120 + l + 2} cy={y + 36} r={1.6} fill="#3f6fb5" />
        </G>
      ))}
      <Line x1={40} y1={30} x2={40} y2={170} stroke={O} strokeWidth={0.9} />
      <Head x={40} y={170} dx={0} dy={1} size={6} />
      <Txt x={34} y={104} size={9} rotate={-90}>Depth increases</Txt>
    </G>
  );
}

// ---------- the greenhouse effect ----------
function GreenhouseArt() {
  return (
    <G>
      {/* sun */}
      {range(8, (i) => {
        const a = (i * Math.PI) / 4;
        return <Line key={i} x1={36 + 19 * Math.cos(a)} y1={30 + 19 * Math.sin(a)} x2={36 + 26 * Math.cos(a)} y2={30 + 26 * Math.sin(a)} stroke={RAY} strokeWidth={1.6} />;
      })}
      <Circle cx={36} cy={30} r={15} fill="#ffd34d" stroke={RAY} strokeWidth={1} />
      {/* atmosphere with greenhouse gases */}
      <Rect x={0} y={70} width={340} height={22} fill="#e3edf7" stroke="none" />
      {range(22, (i) => (
        <Circle key={i} cx={8 + i * 15.2} cy={i % 2 ? 76 : 86} r={2.2} fill="#7d8b99" />
      ))}
      {/* ground */}
      <Rect x={0} y={182} width={340} height={26} fill="#b9cf9a" stroke={O} strokeWidth={1} />
      {/* sunlight in */}
      <Arrow x1={52} y1={50} x2={112} y2={178} c={RAY} w={2.4} />
      <Arrow x1={66} y1={44} x2={132} y2={178} c={RAY} w={2.4} />
      {/* heat trapped and sent back */}
      <Path d="M186 180 L206 92" fill="none" stroke={HEAT} strokeWidth={2} strokeDasharray="5 3" />
      <Arrow x1={206} y1={92} x2={228} y2={178} c={HEAT} w={2} />
      {/* heat escaping */}
      <Path d="M262 180 L292 24" fill="none" stroke={HEAT} strokeWidth={2} strokeDasharray="5 3" />
      <Head x={292} y={24} dx={30} dy={-156} size={7} fill={HEAT} />
    </G>
  );
}

// ---------- the bimetallic strip ----------
function BimetalArt() {
  return (
    <G>
      {/* cold: straight */}
      <Rect x={12} y={52} width={12} height={24} fill="#5d6873" stroke={O} strokeWidth={1} />
      <Rect x={24} y={58} width={116} height={4} fill="#d4a72c" stroke={O} strokeWidth={0.6} />
      <Rect x={24} y={62} width={116} height={4} fill="#9aa3ab" stroke={O} strokeWidth={0.6} />
      <Txt x={80} y={108} size={10}>Cold: the strip is straight</Txt>
      {/* hot: bent */}
      <Rect x={182} y={52} width={12} height={24} fill="#5d6873" stroke={O} strokeWidth={1} />
      <Path d="M194 60 Q262 60 300 94" fill="none" stroke="#d4a72c" strokeWidth={4} />
      <Path d="M194 64 Q259 64 297 97" fill="none" stroke="#9aa3ab" strokeWidth={4} />
      <Path d="M245 140 Q252 112 259 140 Z" fill="#7fb3e6" stroke="#3b78c2" strokeWidth={0.8} />
      <Rect x={247} y={140} width={10} height={14} fill="#9aa3ab" stroke={O} strokeWidth={1} />
      <Txt x={262} y={172} size={10}>Heated: brass expands more,</Txt>
      <Txt x={262} y={185} size={10}>so the strip bends with brass outside</Txt>
    </G>
  );
}

// ---------- energy changes in a torch ----------
function Box({ x, top, bottom, fill }) {
  return (
    <G>
      <Rect x={x} y={34} width={96} height={46} rx={6} fill={fill} stroke={O} strokeWidth={1.1} />
      <Txt x={x + 48} y={53} size={10} weight="700">{top}</Txt>
      <Txt x={x + 48} y={68} size={9}>{bottom}</Txt>
    </G>
  );
}

function EnergyChainArt() {
  return (
    <G>
      <Box x={4} top="Chemical energy" bottom="stored in the cells" fill="#eef3e6" />
      <Arrow x1={102} y1={57} x2={124} y2={57} />
      <Box x={126} top="Electrical energy" bottom="carried by the current" fill="#e8f0fa" />
      <Arrow x1={224} y1={57} x2={246} y2={57} />
      <Box x={248} top="Light energy" bottom="from the lamp" fill="#fff6d6" />
      <Arrow x1={296} y1={82} x2={296} y2={104} c={HEAT} />
      <Txt x={296} y={118} size={9}>plus some heat (wasted)</Txt>
    </G>
  );
}

export const PHYSICS_3 = {
  'shadow-formation': {
    title: 'Shadows from an extended source: umbra and penumbra',
    w: 340,
    h: 214,
    art: ShadowArt,
    labels: [
      ['Extended source\n(frosted lamp)', 40, 160, 40, 133],
      ['Opaque ball', 170, 160, 170, 129],
      ['Screen', 321, 12, 321, 23],
      ['Penumbra:\npart shadow', 352, 64, 327, 70],
      ['Umbra:\ntotal shadow', 352, 110, 327, 110],
      ['Penumbra', 352, 150, 327, 148],
    ],
  },
  'liquid-pressure': {
    title: 'Water spurts faster from deeper holes',
    w: 236,
    h: 214,
    art: LiquidPressureArt,
    labels: [
      ['Hole near the top:\nslow jet', 228, 62, 160, 86],
      ['Middle hole', 228, 124, 182, 138],
      ['Deepest hole:\nfastest jet', 228, 186, 204, 192],
      ['Water', 90, 214, 90, 190],
    ],
  },
  'greenhouse-effect': {
    title: 'The greenhouse effect',
    w: 340,
    h: 208,
    art: GreenhouseArt,
    labels: [
      ['Sunlight passes\nthrough the air', 30, 140, 92, 126],
      ['Greenhouse gases\n(carbon dioxide,\nmethane) trap heat', 352, 72, 300, 82],
      ['Some heat\nescapes to space', 352, 22, 296, 30],
      ['The warm ground gives\nout heat (infrared)', 200, 226, 200, 190],
    ],
  },
  'bimetallic-strip': {
    title: 'A bimetallic strip of brass and iron',
    w: 340,
    h: 196,
    art: BimetalArt,
    labels: [
      ['Brass', 82, 38, 82, 59],
      ['Iron', 120, 86, 120, 65],
      ['Heat', 300, 140, 260, 132],
    ],
  },
  'energy-chain': {
    title: 'Energy changes in a torch',
    w: 348,
    h: 128,
    art: EnergyChainArt,
    labels: [],
  },
};
