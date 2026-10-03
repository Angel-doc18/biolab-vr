// Labelled Physics diagrams: instruments, forces and motion, machines, pressure,
// heat, waves, optics, circuits, magnetism and radioactivity.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { Beaker, Bunsen, CellSymbol, LampSymbol, Meter, O, ResistorSymbol, Wire } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const RED = '#c8463d';
const BLUE = '#3f6fb5';

function Arrow({ x1, y1, x2, y2, c = O, w = 1.4, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}
// A dimension line with arrow heads at both ends.
function Span({ x1, y1, x2, y2, c = O }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={1} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={5} fill={c} />
      <Head x={x1} y={y1} dx={x1 - x2} dy={y1 - y2} size={5} fill={c} />
    </G>
  );
}
function Axes({ x0, y0, w, h, xl, yl, yOff = 22 }) {
  return (
    <G>
      <Line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={O} strokeWidth={1.3} />
      <Line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={O} strokeWidth={1.3} />
      <Head x={x0 + w} y={y0} dx={1} dy={0} size={5} />
      <Head x={x0} y={y0 - h} dx={0} dy={-1} size={5} />
      <Txt x={x0 + w / 2} y={y0 + 24} size={10} weight="700">{xl}</Txt>
      <Txt x={x0 - yOff} y={y0 - h / 2} size={10} weight="700" rotate={-90}>{yl}</Txt>
    </G>
  );
}

// ---------- measurement ----------
function MicrometerArt() {
  return (
    <G>
      <Path d="M58 64 L58 138 Q58 150 70 150 L150 150 Q162 150 162 138 L162 96" fill="none" stroke="#5f6b75" strokeWidth={10} strokeLinejoin="round" />
      <Rect x={58} y={70} width={14} height={20} fill="#9aa3ab" stroke={O} strokeWidth={1} />
      <Rect x={72} y={74} width={6} height={12} fill="#c87a4a" stroke={O} strokeWidth={0.8} />
      <Rect x={78} y={74} width={70} height={12} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Rect x={148} y={68} width={90} height={24} fill="#dfe4e9" stroke={O} strokeWidth={1.2} />
      <Line x1={150} y1={80} x2={236} y2={80} stroke={O} strokeWidth={1} />
      {range(9, (i) => (
        <Line key={i} x1={154 + i * 9} y1={80} x2={154 + i * 9} y2={74} stroke={O} strokeWidth={0.8} />
      ))}
      {range(8, (i) => (
        <Line key={`h${i}`} x1={158.5 + i * 9} y1={80} x2={158.5 + i * 9} y2={85} stroke={O} strokeWidth={0.8} />
      ))}
      <Txt x={154} y={71} size={7}>0</Txt>
      <Txt x={199} y={71} size={7}>5</Txt>
      <Rect x={238} y={60} width={56} height={40} rx={4} fill="#b9c1c8" stroke={O} strokeWidth={1.2} />
      {range(7, (i) => (
        <Line key={`t${i}`} x1={238} y1={64 + i * 5} x2={i % 5 === 0 ? 248 : 244} y2={64 + i * 5} stroke={O} strokeWidth={0.8} />
      ))}
      <Txt x={254} y={83} size={7}>28</Txt>
      <Rect x={294} y={70} width={24} height={20} rx={3} fill="#8d969f" stroke={O} strokeWidth={1} />
    </G>
  );
}

// ---------- forces ----------
function MomentsArt() {
  return (
    <G>
      <Rect x={30} y={76} width={300} height={9} fill="#f2d675" stroke={O} strokeWidth={1.2} />
      {range(31, (i) => (
        <Line key={i} x1={30 + i * 10} y1={76} x2={30 + i * 10} y2={i % 5 ? 80 : 83} stroke={O} strokeWidth={0.6} />
      ))}
      <Polygon points="180,86 164,122 196,122" fill="#9aa3ab" stroke={O} strokeWidth={1.2} />
      <Rect x={150} y={122} width={60} height={6} fill="#7d868f" />
      <Line x1={80} y1={85} x2={80} y2={110} stroke={O} strokeWidth={1} />
      <Rect x={68} y={110} width={24} height={24} rx={2} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Txt x={80} y={126} size={10} weight="700" fill="#ffffff">W₁</Txt>
      <Line x1={255} y1={85} x2={255} y2={110} stroke={O} strokeWidth={1} />
      <Rect x={245} y={110} width={20} height={20} rx={2} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Txt x={255} y={124} size={9} weight="700" fill="#ffffff">W₂</Txt>
      <Span x1={80} y1={158} x2={180} y2={158} />
      <Span x1={180} y1={158} x2={255} y2={158} />
      <Line x1={180} y1={128} x2={180} y2={164} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={130} y={152} size={10} weight="700">d₁</Txt>
      <Txt x={218} y={152} size={10} weight="700">d₂</Txt>
    </G>
  );
}
function HookeArt() {
  const X0 = 50;
  const Y0 = 190;
  return (
    <G>
      <Axes x0={X0} y0={Y0} w={250} h={165} xl="Load / N" yl="Extension / cm" />
      <Path d={`M${X0} ${Y0} L${X0 + 170} ${Y0 - 110} Q${X0 + 210} ${Y0 - 136} ${X0 + 235} ${Y0 - 160}`} fill="none" stroke={RED} strokeWidth={2} />
      {range(6, (i) => (
        <G key={i}>
          <Line x1={X0 + 28 * (i + 1) - 4} y1={Y0 - 18.1 * (i + 1) - 4} x2={X0 + 28 * (i + 1) + 4} y2={Y0 - 18.1 * (i + 1) + 4} stroke={O} strokeWidth={1.2} />
          <Line x1={X0 + 28 * (i + 1) - 4} y1={Y0 - 18.1 * (i + 1) + 4} x2={X0 + 28 * (i + 1) + 4} y2={Y0 - 18.1 * (i + 1) - 4} stroke={O} strokeWidth={1.2} />
        </G>
      ))}
      <Circle cx={X0 + 170} cy={Y0 - 110} r={4} fill="none" stroke={O} strokeWidth={1.4} />
    </G>
  );
}

// ---------- motion ----------
function SpeedTimeArt() {
  const X0 = 50;
  const Y0 = 180;
  return (
    <G>
      <Path d={`M${X0} ${Y0} L${X0 + 70} ${Y0 - 110} L${X0 + 190} ${Y0 - 110} L${X0 + 250} ${Y0} Z`} fill="#dcecf8" />
      <Axes x0={X0} y0={Y0} w={270} h={150} xl="Time / s" yl="Speed / m/s" />
      <Path d={`M${X0} ${Y0} L${X0 + 70} ${Y0 - 110} L${X0 + 190} ${Y0 - 110} L${X0 + 250} ${Y0}`} fill="none" stroke={BLUE} strokeWidth={2.2} />
    </G>
  );
}
function DistanceTimeArt() {
  const X0 = 50;
  const Y0 = 180;
  return (
    <G>
      <Axes x0={X0} y0={Y0} w={270} h={150} xl="Time / s" yl="Distance / m" />
      <Path d={`M${X0} ${Y0} L${X0 + 80} ${Y0 - 100} L${X0 + 160} ${Y0 - 100} L${X0 + 240} ${Y0 - 130}`} fill="none" stroke={BLUE} strokeWidth={2.2} />
    </G>
  );
}
function CarForcesArt() {
  return (
    <G>
      <Line x1={10} y1={150} x2={330} y2={150} stroke={O} strokeWidth={1.4} />
      <Path d="M110 128 L110 104 Q114 96 124 96 L150 96 L168 78 L214 78 L234 98 L252 100 Q262 102 262 112 L262 128 Z" fill="#7fa7d4" stroke={O} strokeWidth={1.4} />
      <Circle cx={140} cy={134} r={14} fill="#3b4650" stroke={O} strokeWidth={1} />
      <Circle cx={232} cy={134} r={14} fill="#3b4650" stroke={O} strokeWidth={1} />
      <Circle cx={140} cy={134} r={5} fill="#c4cbd2" />
      <Circle cx={232} cy={134} r={5} fill="#c4cbd2" />
      <Arrow x1={262} y1={112} x2={318} y2={112} c={BLUE} w={3} size={8} />
      <Arrow x1={110} y1={112} x2={54} y2={112} c={RED} w={3} size={8} />
      <Arrow x1={186} y1={118} x2={186} y2={176} c={O} w={3} size={8} />
      <Arrow x1={186} y1={96} x2={186} y2={40} c="#2f7d4f" w={3} size={8} />
    </G>
  );
}

// ---------- energy ----------
function PulleyArt() {
  return (
    <G>
      <Rect x={40} y={10} width={180} height={10} fill="#8d969f" stroke={O} strokeWidth={1} />
      {range(9, (i) => (
        <Line key={i} x1={44 + i * 20} y1={10} x2={52 + i * 20} y2={2} stroke={O} strokeWidth={0.8} />
      ))}
      <Line x1={150} y1={20} x2={150} y2={30} stroke={O} strokeWidth={2} />
      <Circle cx={150} cy={50} r={20} fill="#dfe4e9" stroke={O} strokeWidth={1.4} />
      <Circle cx={150} cy={50} r={4} fill={O} />
      <Line x1={90} y1={20} x2={90} y2={170} stroke="#a0522d" strokeWidth={1.6} />
      <Path d="M90 170 A20 20 0 0 0 130 170" fill="none" stroke="#a0522d" strokeWidth={1.6} />
      <Line x1={130} y1={170} x2={130} y2={50} stroke="#a0522d" strokeWidth={1.6} />
      <Path d="M130 50 A20 20 0 0 1 170 50" fill="none" stroke="#a0522d" strokeWidth={1.6} />
      <Line x1={170} y1={50} x2={170} y2={190} stroke="#a0522d" strokeWidth={1.6} />
      <Circle cx={110} cy={170} r={20} fill="#dfe4e9" stroke={O} strokeWidth={1.4} />
      <Circle cx={110} cy={170} r={4} fill={O} />
      <Line x1={110} y1={190} x2={110} y2={208} stroke={O} strokeWidth={2} />
      <Rect x={88} y={208} width={44} height={36} rx={3} fill="#8d969f" stroke={O} strokeWidth={1.2} />
      <Txt x={110} y={231} size={10} weight="700" fill="#ffffff">Load</Txt>
      <Arrow x1={170} y1={190} x2={170} y2={236} c={BLUE} w={2.4} size={8} />
    </G>
  );
}

// ---------- pressure ----------
function ManometerArt() {
  return (
    <G>
      <Path d="M100 40 L100 190 Q100 214 124 214 L176 214 Q200 214 200 190 L200 40" fill="none" stroke={O} strokeWidth={14} strokeLinejoin="round" />
      <Path d="M100 40 L100 190 Q100 214 124 214 L176 214 Q200 214 200 190 L200 40" fill="none" stroke="#f4f9fc" strokeWidth={10} strokeLinejoin="round" />
      <Path d="M100 150 L100 190 Q100 214 124 214 L176 214 Q200 214 200 190 L200 90" fill="none" stroke="#7fb3dd" strokeWidth={10} strokeLinejoin="round" />
      <Line x1={93} y1={150} x2={107} y2={150} stroke={O} strokeWidth={1} />
      <Line x1={193} y1={90} x2={207} y2={90} stroke={O} strokeWidth={1} />
      <Path d="M100 40 L100 28 L40 28" fill="none" stroke={O} strokeWidth={4} />
      <Rect x={20} y={20} width={24} height={16} rx={3} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Line x1={150} y1={90} x2={210} y2={90} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Line x1={107} y1={150} x2={240} y2={150} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Span x1={232} y1={90} x2={232} y2={150} />
      <Txt x={244} y={124} size={11} weight="700" anchor="start">h</Txt>
      <Arrow x1={200} y1={20} x2={200} y2={36} c={BLUE} />
    </G>
  );
}
function BarometerArt() {
  return (
    <G>
      <Path d="M30 200 L30 250 L190 250 L190 200" fill="none" stroke={O} strokeWidth={1.6} />
      <Rect x={32} y={216} width={156} height={33} fill="#b9c1c8" />
      <Rect x={98} y={20} width={24} height={220} fill="#f4f9fc" stroke={O} strokeWidth={1.4} />
      <Rect x={100} y={56} width={20} height={184} fill="#b9c1c8" />
      <Line x1={98} y1={20} x2={122} y2={20} stroke={O} strokeWidth={2} />
      <Line x1={150} y1={56} x2={110} y2={56} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Line x1={150} y1={216} x2={122} y2={216} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Span x1={150} y1={56} x2={150} y2={216} />
      <Txt x={158} y={140} size={10} weight="700" anchor="start">760 mm</Txt>
      <Arrow x1={50} y1={180} x2={50} y2={212} c={BLUE} />
      <Arrow x1={170} y1={180} x2={170} y2={212} c={BLUE} />
    </G>
  );
}
function HydraulicArt() {
  return (
    <G>
      <Path d="M60 60 L60 170 L300 170 L300 80 M100 60 L100 140 L240 140 L240 80" fill="none" stroke={O} strokeWidth={1.6} />
      <Path d="M61 90 L99 90 L99 141 L241 141 L241 110 L299 110 L299 169 L61 169 Z" fill="#f2d675" opacity={0.8} />
      <Rect x={62} y={80} width={36} height={10} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Rect x={242} y={100} width={56} height={10} fill="#8d969f" stroke={O} strokeWidth={1} />
      <Arrow x1={80} y1={40} x2={80} y2={78} c={BLUE} w={2.6} size={8} />
      <Rect x={250} y={62} width={40} height={38} rx={3} fill="#c87a4a" stroke={O} strokeWidth={1} />
      <Txt x={270} y={85} size={10} weight="700" fill="#ffffff">Load</Txt>
    </G>
  );
}

// ---------- thermal ----------
function HeatTransferArt() {
  return (
    <G>
      {/* conduction: rod heated at one end, wax pins dropping */}
      <Rect x={20} y={60} width={110} height={8} fill="#c87a4a" stroke={O} strokeWidth={1} />
      {range(4, (i) => (
        <G key={i}>
          <Rect x={46 + i * 22} y={68} width={4} height={10} fill="#efe4c2" stroke={O} strokeWidth={0.5} />
          <Circle cx={48 + i * 22} cy={80} r={3} fill="#f6f1df" stroke={O} strokeWidth={0.5} />
        </G>
      ))}
      <Bunsen x={24} y={84} h={50} flame="#f2a33d" />
      {/* convection: beaker of water heated on one side */}
      <Beaker x={160} y={40} w={80} h={100} level={0.85} fill="#e6f1fa" />
      <Path d="M178 120 L178 70 Q178 60 190 60 L212 60 Q224 60 224 70 L224 120 Q224 128 214 128 L188 128 Q178 128 178 120" fill="none" stroke={RED} strokeWidth={1.6} strokeDasharray="5 3" />
      <Head x={178} y={78} dx={0} dy={-1} size={6} fill={RED} />
      <Head x={224} y={112} dx={0} dy={1} size={6} fill={BLUE} />
      <Bunsen x={180} y={160} h={40} flame="#f2a33d" />
      {/* radiation: heater and two cans */}
      <Rect x={262} y={60} width={16} height={60} rx={3} fill={RED} stroke={O} strokeWidth={1} />
      {[74, 90, 106].map((y) => (
        <Path key={y} d={`M282 ${y} q6 -6 12 0 t12 0 t12 0`} fill="none" stroke={RED} strokeWidth={1.2} />
      ))}
      <Rect x={322} y={62} width={22} height={22} fill="#2a2f35" stroke={O} strokeWidth={1} />
      <Rect x={322} y={96} width={22} height={22} fill="#e4e8ec" stroke={O} strokeWidth={1} />
    </G>
  );
}
function HeatingCurveArt() {
  const X0 = 50;
  const Y0 = 190;
  return (
    <G>
      <Axes x0={X0} y0={Y0} w={280} h={165} xl="Time" yl="Temperature / °C" yOff={34} />
      <Path d={`M${X0} ${Y0 - 10} L${X0 + 30} ${Y0 - 40} L${X0 + 90} ${Y0 - 40} L${X0 + 150} ${Y0 - 130} L${X0 + 240} ${Y0 - 130} L${X0 + 270} ${Y0 - 155}`} fill="none" stroke={RED} strokeWidth={2.2} />
      <Line x1={X0} y1={Y0 - 40} x2={X0 + 30} y2={Y0 - 40} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Line x1={X0} y1={Y0 - 130} x2={X0 + 150} y2={Y0 - 130} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={X0 - 6} y={Y0 - 37} size={9} anchor="end">0</Txt>
      <Txt x={X0 - 6} y={Y0 - 127} size={9} anchor="end">100</Txt>
    </G>
  );
}

// ---------- waves ----------
function WavesArt() {
  const wave = range(121, (i) => {
    const x = 30 + i * 2.5;
    const y = 70 - 34 * Math.sin((i / 120) * Math.PI * 4);
    return `${i ? 'L' : 'M'}${x} ${y}`;
  }).join(' ');
  const coils = [];
  for (let i = 0; i < 46; i++) {
    const phase = (i / 46) * Math.PI * 4;
    coils.push(30 + i * 6.5 + 7 * Math.sin(phase));
  }
  return (
    <G>
      <Line x1={30} y1={70} x2={334} y2={70} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="4 3" />
      <Path d={wave} fill="none" stroke={BLUE} strokeWidth={2} />
      <Span x1={67.5} y1={20} x2={217.5} y2={20} />
      <Span x1={292} y1={70} x2={292} y2={104} />
      {coils.map((x, i) => (
        <Line key={i} x1={x} y1={160} x2={x} y2={196} stroke={O} strokeWidth={1.4} />
      ))}
      <Span x1={coils[11]} y1={212} x2={coils[34]} y2={212} />
    </G>
  );
}
function SpectrumArt() {
  const bands = [
    ['Radio', '#d9e6f2'],
    ['Microwave', '#cfe0ee'],
    ['Infrared', '#f2c7c0'],
    ['Visible', null],
    ['Ultraviolet', '#e6dcf3'],
    ['X-rays', '#dfe4e9'],
    ['Gamma', '#cfd6dd'],
  ];
  const rainbow = ['#d94a4a', '#f08a2a', '#f2d23a', '#5fb35a', '#3f6fb5', '#5a3fa0', '#8e44ad'];
  return (
    <G>
      {bands.map(([n, c], i) => (
        <G key={n}>
          {c ? <Rect x={20 + i * 50} y={40} width={50} height={40} fill={c} /> : rainbow.map((r, j) => <Rect key={j} x={20 + i * 50 + j * (50 / 7)} y={40} width={50 / 7 + 0.5} height={40} fill={r} />)}
          <Rect x={20 + i * 50} y={40} width={50} height={40} fill="none" stroke={O} strokeWidth={0.8} />
          <Txt x={45 + i * 50} y={98} size={8.5} weight="700">{n}</Txt>
        </G>
      ))}
      <Arrow x1={30} y1={124} x2={360} y2={124} />
      <Arrow x1={360} y1={20} x2={30} y2={20} />
    </G>
  );
}

// ---------- light ----------
function MirrorArt() {
  return (
    <G>
      <Line x1={150} y1={30} x2={150} y2={190} stroke={O} strokeWidth={3} />
      {range(9, (i) => (
        <Line key={i} x1={150} y1={36 + i * 18} x2={160} y2={28 + i * 18} stroke={O} strokeWidth={0.8} />
      ))}
      <Line x1={60} y1={110} x2={150} y2={110} stroke="#9aa3ab" strokeWidth={1} strokeDasharray="4 3" />
      <Arrow x1={50} y1={40} x2={100} y2={75} c={RED} w={1.8} />
      <Line x1={100} y1={75} x2={150} y2={110} stroke={RED} strokeWidth={1.8} />
      <Line x1={150} y1={110} x2={100} y2={145} stroke={RED} strokeWidth={1.8} />
      <Arrow x1={100} y1={145} x2={50} y2={180} c={RED} w={1.8} />
      <Path d="M122 110 A28 28 0 0 1 127 94" fill="none" stroke={O} strokeWidth={1} />
      <Path d="M122 110 A28 28 0 0 0 127 126" fill="none" stroke={O} strokeWidth={1} />
      <Txt x={114} y={102} size={10} weight="700">i</Txt>
      <Txt x={114} y={124} size={10} weight="700">r</Txt>
    </G>
  );
}
function RefractionArt() {
  return (
    <G>
      <Rect x={70} y={70} width={200} height={100} fill="#dcecf8" opacity={0.7} stroke={O} strokeWidth={1.6} />
      <Line x1={140} y1={30} x2={140} y2={110} stroke="#9aa3ab" strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={196} y1={130} x2={196} y2={210} stroke="#9aa3ab" strokeWidth={1} strokeDasharray="4 3" />
      <Arrow x1={80} y1={10} x2={110} y2={40} c={RED} w={1.8} />
      <Line x1={110} y1={40} x2={140} y2={70} stroke={RED} strokeWidth={1.8} />
      <Line x1={140} y1={70} x2={196} y2={170} stroke={RED} strokeWidth={1.8} />
      <Line x1={196} y1={170} x2={226} y2={200} stroke={RED} strokeWidth={1.8} />
      <Arrow x1={226} y1={200} x2={246} y2={220} c={RED} w={1.8} />
      <Line x1={140} y1={70} x2={180} y2={110} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="2 3" />
      <Path d="M140 46 A24 24 0 0 0 123 53" fill="none" stroke={O} strokeWidth={1} />
      <Path d="M140 96 A26 26 0 0 0 153 93" fill="none" stroke={O} strokeWidth={1} />
      <Txt x={128} y={44} size={10} weight="700">i</Txt>
      <Txt x={150} y={106} size={10} weight="700">r</Txt>
    </G>
  );
}
function TirArt() {
  const panel = (x, ang, kind) => {
    const sx = x + 60;
    const by = 110;
    const len = 70;
    const a = (ang * Math.PI) / 180;
    const ix = sx - Math.sin(a) * len;
    const iy = by + Math.cos(a) * len;
    return (
      <G key={x}>
        <Rect x={x} y={by} width={120} height={80} fill="#dcecf8" opacity={0.75} />
        <Line x1={x} y1={by} x2={x + 120} y2={by} stroke={O} strokeWidth={1.6} />
        <Line x1={sx} y1={by - 50} x2={sx} y2={by + 76} stroke="#9aa3ab" strokeWidth={0.8} strokeDasharray="3 3" />
        <Line x1={ix} y1={iy} x2={sx} y2={by} stroke={RED} strokeWidth={1.8} />
        {kind === 'out' && <Arrow x1={sx} y1={by} x2={sx + 40} y2={by - 44} c={RED} w={1.6} />}
        {kind === 'edge' && <Arrow x1={sx} y1={by} x2={sx + 58} y2={by - 1} c={RED} w={1.6} />}
        {kind !== 'edge' && <Arrow x1={sx} y1={by} x2={sx + Math.sin(a) * 60} y2={by + Math.cos(a) * 60} c={RED} w={kind === 'tir' ? 1.8 : 0.8} />}
        <Txt x={x + 60} y={by + 98} size={9} weight="700">{kind === 'out' ? 'Less than c' : kind === 'edge' ? 'Equal to c' : 'Greater than c'}</Txt>
      </G>
    );
  };
  return (
    <G>
      {panel(10, 25, 'out')}
      {panel(145, 42, 'edge')}
      {panel(280, 60, 'tir')}
      <Txt x={20} y={100} size={9} anchor="start">Air</Txt>
      <Txt x={20} y={180} size={9} anchor="start">Glass</Txt>
    </G>
  );
}
function LensArt() {
  const AX = 120;
  return (
    <G>
      <Line x1={10} y1={AX} x2={380} y2={AX} stroke={O} strokeWidth={1} />
      <Path d="M196 40 Q214 120 196 200 Q178 120 196 40 Z" fill="#dcecf8" stroke={O} strokeWidth={1.4} />
      {[136, 256, 76, 316].map((x, i) => (
        <G key={x}>
          <Line x1={x} y1={AX - 4} x2={x} y2={AX + 4} stroke={O} strokeWidth={1.4} />
          <Txt x={x} y={AX + 18} size={9} weight="700">{['F', 'F', '2F', '2F'][i]}</Txt>
        </G>
      ))}
      <Arrow x1={50} y1={AX} x2={50} y2={AX - 50} c={BLUE} w={2.4} size={7} />
      <Line x1={50} y1={AX - 50} x2={196} y2={AX - 50} stroke={RED} strokeWidth={1.4} />
      <Line x1={196} y1={AX - 50} x2={370} y2={AX + 95} stroke={RED} strokeWidth={1.4} />
      <Line x1={50} y1={AX - 50} x2={370} y2={AX + 59.6} stroke={RED} strokeWidth={1.4} />
      <Arrow x1={298} y1={AX} x2={298} y2={AX + 35} c={BLUE} w={2.4} size={7} />
      <Span x1={196} y1={AX + 34} x2={256} y2={AX + 34} />
      <Txt x={226} y={AX + 48} size={9} weight="700">f</Txt>
    </G>
  );
}

// ---------- electricity ----------
function SymbolsArt() {
  const cells = [
    ['Cell', (x, y) => <CellSymbol x={x} y={y} />],
    ['Lamp', (x, y) => <LampSymbol x={x} y={y} />],
    ['Resistor', (x, y) => <ResistorSymbol x={x} y={y} />],
    [
      'Variable resistor',
      (x, y) => (
        <G>
          <ResistorSymbol x={x} y={y} />
          <Arrow x1={x - 18} y1={y + 12} x2={x + 18} y2={y - 12} w={1} size={5} />
        </G>
      ),
    ],
    [
      'Switch (open)',
      (x, y) => (
        <G>
          <Circle cx={x - 14} cy={y} r={2.4} fill={O} />
          <Circle cx={x + 14} cy={y} r={2.4} fill="none" stroke={O} />
          <Line x1={x - 14} y1={y} x2={x + 10} y2={y - 12} stroke={O} strokeWidth={1.4} />
        </G>
      ),
    ],
    ['Ammeter', (x, y) => <Meter x={x} y={y} letter="A" />],
    ['Voltmeter', (x, y) => <Meter x={x} y={y} letter="V" />],
    [
      'Fuse',
      (x, y) => (
        <G>
          <Rect x={x - 15} y={y - 5} width={30} height={10} fill="#ffffff" stroke={O} strokeWidth={1.4} />
          <Line x1={x - 22} y1={y} x2={x + 22} y2={y} stroke={O} strokeWidth={1.2} />
        </G>
      ),
    ],
  ];
  return (
    <G>
      {cells.map(([n, draw], i) => {
        const x = 50 + (i % 4) * 90;
        const y = 50 + Math.floor(i / 4) * 90;
        return (
          <G key={n}>
            <Line x1={x - 32} y1={y} x2={x + 32} y2={y} stroke={O} strokeWidth={1.2} />
            <Rect x={x - 22} y={y - 16} width={44} height={32} fill="#ffffff" />
            {draw(x, y)}
            <Txt x={x} y={y + 34} size={9} weight="700">{n}</Txt>
          </G>
        );
      })}
    </G>
  );
}
function SeriesParallelArt() {
  return (
    <G>
      <Wire d="M30 40 L170 40 L170 150 L30 150 Z" />
      <Rect x={90} y={34} width={22} height={12} fill="#ffffff" />
      <CellSymbol x={100} y={40} />
      <Rect x={20} y={86} width={20} height={30} fill="#ffffff" />
      <LampSymbol x={30} y={100} />
      <Rect x={160} y={86} width={20} height={30} fill="#ffffff" />
      <LampSymbol x={170} y={100} />
      <Wire d="M210 40 L360 40 L360 150 L210 150 Z" />
      <Wire d="M260 40 L260 150 M310 40 L310 150" />
      <Rect x={226} y={34} width={22} height={12} fill="#ffffff" />
      <CellSymbol x={236} y={40} />
      <Rect x={250} y={86} width={20} height={30} fill="#ffffff" />
      <LampSymbol x={260} y={100} />
      <Rect x={300} y={86} width={20} height={30} fill="#ffffff" />
      <LampSymbol x={310} y={100} />
      <Rect x={350} y={86} width={20} height={30} fill="#ffffff" />
      <LampSymbol x={360} y={100} />
      <Txt x={100} y={178} size={11} weight="700">Series</Txt>
      <Txt x={285} y={178} size={11} weight="700">Parallel</Txt>
    </G>
  );
}

// ---------- magnetism ----------
function FieldArt() {
  const loops = [16, 30, 46];
  return (
    <G>
      {loops.map((h) => (
        <G key={h}>
          <Path d={`M230 100 C270 ${100 - h * 2.2} 70 ${100 - h * 2.2} 110 100`} fill="none" stroke={BLUE} strokeWidth={1.1} />
          <Path d={`M230 110 C270 ${110 + h * 2.2} 70 ${110 + h * 2.2} 110 110`} fill="none" stroke={BLUE} strokeWidth={1.1} />
          <Head x={170} y={100 - h * 1.65} dx={-1} dy={0} size={5} fill={BLUE} />
          <Head x={170} y={110 + h * 1.65} dx={-1} dy={0} size={5} fill={BLUE} />
        </G>
      ))}
      <Line x1={230} y1={105} x2={300} y2={105} stroke={BLUE} strokeWidth={1.1} />
      <Line x1={40} y1={105} x2={110} y2={105} stroke={BLUE} strokeWidth={1.1} />
      <Head x={290} y={105} dx={1} dy={0} size={5} fill={BLUE} />
      <Head x={70} y={105} dx={1} dy={0} size={5} fill={BLUE} />
      <Rect x={110} y={88} width={60} height={34} fill={RED} stroke={O} strokeWidth={1.2} />
      <Rect x={170} y={88} width={60} height={34} fill={BLUE} stroke={O} strokeWidth={1.2} />
      <Txt x={140} y={110} size={14} weight="700" fill="#ffffff">S</Txt>
      <Txt x={200} y={110} size={14} weight="700" fill="#ffffff">N</Txt>
    </G>
  );
}
function MotorArt() {
  return (
    <G>
      <Path d="M30 50 L90 50 L90 70 L70 70 L70 150 L90 150 L90 170 L30 170 Z" fill={RED} stroke={O} strokeWidth={1.2} />
      <Path d="M330 50 L270 50 L270 70 L290 70 L290 150 L270 150 L270 170 L330 170 Z" fill={BLUE} stroke={O} strokeWidth={1.2} />
      <Txt x={48} y={115} size={14} weight="700" fill="#ffffff">N</Txt>
      <Txt x={312} y={115} size={14} weight="700" fill="#ffffff">S</Txt>
      <Path d="M170 150 L120 150 L120 70 L240 70 L240 150 L190 150" fill="none" stroke="#c87a4a" strokeWidth={3.5} strokeLinejoin="round" />
      <Path d="M170 150 L170 182 M190 150 L190 182" stroke="#c87a4a" strokeWidth={3} />
      <Path d="M160 182 L178 182 L178 200 L160 200 Z M182 182 L200 182 L200 200 L182 200 Z" fill="#d9a07a" stroke={O} strokeWidth={1} />
      <Rect x={146} y={186} width={12} height={12} fill="#3d4650" />
      <Rect x={202} y={186} width={12} height={12} fill="#3d4650" />
      <Wire d="M146 192 L120 192 L120 226 L178 226 M184 226 L240 226 L240 192 L214 192" />
      <CellSymbol x={181} y={226} />
      <Arrow x1={120} y1={110} x2={120} y2={36} c="#2f7d4f" w={2.4} size={7} />
      <Arrow x1={240} y1={110} x2={240} y2={184} c="#2f7d4f" w={2.4} size={7} />
    </G>
  );
}
function TransformerArt() {
  return (
    <G>
      <Path d="M100 40 L260 40 L260 180 L100 180 Z M124 64 L236 64 L236 156 L124 156 Z" fill="#8d969f" fillRule="evenodd" stroke={O} strokeWidth={1.2} />
      {range(5, (i) => (
        <Ellipse key={`p${i}`} cx={112} cy={70 + i * 20} rx={18} ry={6} fill="none" stroke="#c87a4a" strokeWidth={2.4} />
      ))}
      {range(9, (i) => (
        <Ellipse key={`s${i}`} cx={248} cy={60 + i * 12.5} rx={18} ry={5} fill="none" stroke="#c87a4a" strokeWidth={2.2} />
      ))}
      <Wire d="M94 70 L40 70 L40 96 M40 124 L40 150 L94 150" />
      <Wire d="M266 60 L320 60 L320 98 M266 160 L320 160 L320 122" />
      <Meter x={320} y={110} letter="V" />
      <Path d="M28 110 q6 -10 12 0 t12 0" fill="none" stroke={O} strokeWidth={1.4} />
      <Circle cx={40} cy={110} r={14} fill="none" stroke={O} strokeWidth={1.2} />
    </G>
  );
}

// ---------- atomic ----------
function PenetrationArt() {
  return (
    <G>
      <Rect x={10} y={70} width={40} height={70} rx={4} fill="#8d969f" stroke={O} strokeWidth={1.2} />
      <Rect x={50} y={95} width={10} height={20} fill="#5f6b75" />
      <Rect x={130} y={40} width={6} height={130} fill="#fbf7ea" stroke={O} strokeWidth={1} />
      <Rect x={210} y={40} width={12} height={130} fill="#c4cbd2" stroke={O} strokeWidth={1} />
      <Rect x={300} y={40} width={30} height={130} fill="#6f777e" stroke={O} strokeWidth={1} />
      <Arrow x1={62} y1={70} x2={128} y2={70} c={RED} w={2.6} size={7} />
      <Path d="M62 105 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0" fill="none" stroke={BLUE} strokeWidth={2} />
      <Head x={208} y={105} dx={1} dy={0} size={7} fill={BLUE} />
      <Arrow x1={62} y1={140} x2={360} y2={140} c="#2f7d4f" w={2.6} size={7} />
      <Txt x={90} y={62} size={11} weight="700" fill={RED}>α</Txt>
      <Txt x={90} y={97} size={11} weight="700" fill={BLUE}>β</Txt>
      <Txt x={90} y={133} size={11} weight="700" fill="#2f7d4f">γ</Txt>
    </G>
  );
}
function DecayArt() {
  const X0 = 50;
  const Y0 = 190;
  const pts = range(61, (i) => {
    const t = i * 4;
    return `${i ? 'L' : 'M'}${X0 + t} ${Y0 - 150 * 0.5 ** (t / 60)}`;
  }).join(' ');
  return (
    <G>
      <Axes x0={X0} y0={Y0} w={270} h={165} xl="Time / min" yl="Count rate / counts per min" yOff={36} />
      <Path d={pts} fill="none" stroke={RED} strokeWidth={2.2} />
      <Path d={`M${X0} ${Y0 - 75} L${X0 + 60} ${Y0 - 75} L${X0 + 60} ${Y0}`} fill="none" stroke="#9aa3ab" strokeWidth={1} strokeDasharray="4 3" />
      <Path d={`M${X0} ${Y0 - 37.5} L${X0 + 120} ${Y0 - 37.5} L${X0 + 120} ${Y0}`} fill="none" stroke="#9aa3ab" strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={X0 - 6} y={Y0 - 147} size={9} anchor="end">800</Txt>
      <Txt x={X0 - 6} y={Y0 - 72} size={9} anchor="end">400</Txt>
      <Txt x={X0 - 6} y={Y0 - 34} size={9} anchor="end">200</Txt>
    </G>
  );
}

export const PHYSICS = {
  micrometer: {
    title: 'A micrometer screw gauge reading 5.78 mm',
    w: 340,
    h: 160,
    art: MicrometerArt,
    labels: [
      ['Frame', 40, 150, 58, 140],
      ['Anvil', 30, 40, 64, 70],
      ['Wire being measured', 75, 20, 75, 74],
      ['Spindle', 120, 40, 112, 74],
      ['Sleeve: 5.5 mm showing', 190, 130, 190, 92],
      ['Thimble: 28 × 0.01 mm', 270, 130, 266, 100],
      ['Ratchet', 320, 40, 306, 70],
    ],
  },
  'moments-beam': {
    title: 'The principle of moments: a balanced metre rule',
    w: 360,
    h: 170,
    art: MomentsArt,
    labels: [
      ['Anticlockwise moment\n= W₁ × d₁', 60, 30, 76, 76],
      ['Clockwise moment\n= W₂ × d₂', 300, 30, 258, 76],
      ['Pivot', 180, 30, 180, 86],
      ['Metre rule', 330, 110, 318, 84],
    ],
  },
  'hooke-graph': {
    title: 'Extension of a spring against the load on it',
    w: 330,
    h: 220,
    art: HookeArt,
    labels: [
      ['Straight line through the origin:\nextension ∝ load (Hooke’s law)', 160, 40, 150, 126],
      ['Limit of proportionality', 300, 90, 222, 80],
    ],
  },
  'speed-time': {
    title: 'Speed-time graph of a journey',
    w: 340,
    h: 210,
    art: SpeedTimeArt,
    labels: [
      ['Acceleration\n(gradient = a)', 96, 40, 84, 126],
      ['Constant speed', 180, 46, 180, 70],
      ['Deceleration', 300, 60, 270, 118],
      ['Area under the line\n= distance travelled', 180, 140],
    ],
  },
  'distance-time': {
    title: 'Distance-time graph',
    w: 340,
    h: 210,
    art: DistanceTimeArt,
    labels: [
      ['Steep line: fast\n(gradient = speed)', 104, 34, 92, 128],
      ['Flat line: not moving', 196, 66, 190, 80],
      ['Gentler slope: slower', 300, 30, 268, 62],
    ],
  },
  'forces-car': {
    title: 'The forces on a car moving at a steady speed',
    w: 340,
    h: 190,
    art: CarForcesArt,
    labels: [
      ['Driving force', 300, 92, 300, 112],
      ['Air resistance\nand friction', 54, 86, 70, 112],
      ['Weight', 230, 176, 188, 170],
      ['Normal reaction', 240, 36, 190, 46],
    ],
  },
  'pulley-system': {
    title: 'A pulley system with velocity ratio 2',
    w: 260,
    h: 250,
    art: PulleyArt,
    labels: [
      ['Fixed pulley', 230, 50, 170, 50],
      ['Moving pulley', 30, 140, 92, 162],
      ['Two rope sections\nsupport the load', 30, 70, 90, 80],
      ['Effort', 230, 200, 172, 214],
      ['Load', 30, 226, 88, 226],
    ],
  },
  manometer: {
    title: 'A manometer measuring the pressure of a gas supply',
    w: 290,
    h: 230,
    art: ManometerArt,
    labels: [
      ['Gas supply', 30, 60, 30, 36],
      ['Water', 60, 190, 100, 190],
      ['Open to the atmosphere', 260, 14, 202, 24],
      ['Height difference h:\nexcess pressure = hρg', 270, 180, 232, 140],
    ],
  },
  barometer: {
    title: 'A simple mercury barometer',
    w: 260,
    h: 260,
    art: BarometerArt,
    labels: [
      ['Vacuum', 60, 30, 110, 38],
      ['Mercury column', 50, 120, 100, 120],
      ['Atmospheric pressure\npushes on the mercury', 10, 176, 48, 196],
      ['Dish of mercury', 220, 240, 186, 236],
    ],
  },
  'hydraulic-press': {
    title: 'A hydraulic press',
    w: 340,
    h: 190,
    art: HydraulicArt,
    labels: [
      ['Small effort on\na small piston', 30, 30, 76, 42],
      ['Oil transmits the\npressure', 170, 186, 170, 160],
      ['Large piston: a\nlarge force out', 330, 130, 296, 106],
      ['Load lifted', 330, 60, 290, 76],
    ],
  },
  'heat-transfer': {
    title: 'Conduction, convection and radiation',
    w: 360,
    h: 244,
    art: HeatTransferArt,
    labels: [
      ['Conduction: wax pins\nfall nearest the flame first', 70, 20, 70, 64],
      ['Convection current: hot\nwater rises, cool water sinks', 250, 232, 224, 114],
      ['Radiation from a heater', 290, 30, 292, 74],
      ['Dull black surface\nabsorbs most', 392, 73, 346, 73],
      ['Shiny surface\nabsorbs least', 392, 110, 346, 107],
    ],
  },
  'heating-curve': {
    title: 'Heating ice until it boils: temperature against time',
    w: 340,
    h: 220,
    art: HeatingCurveArt,
    labels: [
      ['Melting at 0 °C:\nno temperature rise', 110, 176, 110, 150],
      ['Water warming up', 236, 112, 178, 100],
      ['Boiling at 100 °C', 230, 40, 240, 60],
      ['Ice warming', 40, 200, 64, 166],
    ],
  },
  'transverse-wave': {
    title: 'A transverse wave (top) and a longitudinal wave (bottom)',
    w: 360,
    h: 230,
    art: WavesArt,
    labels: [
      ['Wavelength λ', 142, 8],
      ['Crest', 60, 50, 67, 36],
      ['Trough', 142, 124, 142, 106],
      ['Amplitude', 330, 120, 296, 88],
      ['Compression', 60, 140, 112, 162],
      ['Rarefaction', 200, 140, 206, 162],
      ['Wavelength', 180, 228, 180, 212],
    ],
  },
  'em-spectrum': {
    title: 'The electromagnetic spectrum',
    w: 380,
    h: 140,
    art: SpectrumArt,
    labels: [
      ['Wavelength increases', 195, 12],
      ['Frequency and energy increase', 195, 136],
    ],
  },
  'plane-mirror': {
    title: 'Reflection at a plane mirror',
    w: 300,
    h: 200,
    art: MirrorArt,
    labels: [
      ['Mirror', 220, 40, 160, 46],
      ['Normal', 40, 110, 60, 110],
      ['Incident ray', 40, 30, 72, 56],
      ['Reflected ray', 40, 196, 72, 164],
      ['Angle of incidence =\nangle of reflection', 230, 110, 160, 110],
    ],
  },
  'refraction-block': {
    title: 'Refraction of light through a glass block',
    w: 340,
    h: 230,
    art: RefractionArt,
    labels: [
      ['Incident ray', 40, 30, 96, 26],
      ['Normal', 200, 26, 140, 36],
      ['Glass block', 300, 90, 270, 100],
      ['Refracted ray bends\ntowards the normal', 300, 140, 172, 126],
      ['Emergent ray parallel\nto the incident ray', 300, 210, 236, 210],
    ],
  },
  'total-internal-reflection': {
    title: 'Light meeting a glass to air boundary at different angles (c = critical angle)',
    w: 410,
    h: 220,
    art: TirArt,
    labels: [
      ['Refracted out', 120, 40, 100, 70],
      ['Along the surface', 260, 80, 224, 108],
      ['Totally internally\nreflected', 380, 230, 392, 150],
    ],
  },
  'converging-lens': {
    title: 'A converging lens forming a real image of a distant object',
    w: 390,
    h: 230,
    art: LensArt,
    labels: [
      ['Object', 50, 50, 50, 72],
      ['Converging lens', 196, 22, 196, 40],
      ['Principal axis', 360, 106, 360, 120],
      ['Real, inverted,\ndiminished image', 330, 196, 298, 150],
      ['Ray through the\ncentre is not bent', 100, 196, 120, 98],
    ],
  },
  'circuit-symbols': {
    title: 'Circuit symbols',
    w: 380,
    h: 200,
    art: SymbolsArt,
    labels: [],
  },
  'series-parallel': {
    title: 'Lamps in series and in parallel',
    w: 380,
    h: 190,
    art: SeriesParallelArt,
    labels: [
      ['One path: the same current\nflows through each lamp', 100, 210],
      ['Each lamp has its own branch\nand the full supply voltage', 285, 210],
    ],
  },
  'magnetic-field': {
    title: 'The magnetic field around a bar magnet',
    w: 340,
    h: 226,
    art: FieldArt,
    labels: [
      ['North pole', 260, 160, 210, 122],
      ['South pole', 80, 160, 130, 122],
      ['Field lines go from N to S\noutside the magnet', 170, 214],
      ['Field strongest where\nthe lines are closest', 330, 70, 236, 100],
    ],
  },
  'dc-motor': {
    title: 'A simple d.c. motor',
    w: 360,
    h: 240,
    art: MotorArt,
    labels: [
      ['Magnet', 30, 24, 50, 50],
      ['Coil', 180, 50, 180, 70],
      ['Force up', 80, 20, 118, 40],
      ['Force down', 290, 200, 242, 180],
      ['Split-ring commutator', 100, 210, 166, 196],
      ['Carbon brush', 270, 230, 212, 196],
    ],
  },
  transformer: {
    title: 'A step-up transformer',
    w: 340,
    h: 200,
    art: TransformerArt,
    labels: [
      ['a.c. input', 40, 136, 40, 124],
      ['Primary coil (fewer turns)', 70, 200, 112, 160],
      ['Soft iron core', 180, 20, 180, 40],
      ['Secondary coil (more turns)', 280, 200, 248, 168],
      ['Higher voltage\noutput', 366, 110, 332, 110],
    ],
  },
  'radiation-penetration': {
    title: 'How far alpha, beta and gamma radiation travel',
    w: 380,
    h: 190,
    art: PenetrationArt,
    labels: [
      ['Radioactive source', 30, 180, 30, 140],
      ['Paper stops alpha', 133, 22, 133, 40],
      ['Aluminium stops beta', 216, 186, 216, 170],
      ['Lead reduces gamma', 315, 22, 315, 40],
    ],
  },
  'decay-curve': {
    title: 'Count rate of a radioactive sample against time',
    w: 340,
    h: 220,
    art: DecayArt,
    labels: [
      ['One half-life:\n800 falls to 400', 180, 60, 110, 115],
      ['Two half-lives:\n400 falls to 200', 260, 120, 170, 152],
      ['Same time for each halving', 260, 200, 300, 186],
    ],
  },
};
