// Advanced Level Physics diagrams: projectile motion, graphs of simple harmonic
// motion, the Wheatstone bridge, a stress-strain curve, capacitor discharge,
// Young's double slits, the photoelectric graph, the binding energy curve and
// rectification. Curves are calculated, so they are to scale.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { O } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#2f7d4f';
const pathOf = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

function Arrow({ x1, y1, x2, y2, c = O, w = 1.4, size = 6, dash }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} strokeDasharray={dash} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

function Axes({ x0, y0, x1, y1, xl, yl, xlDy = 16, ylDx = 14 }) {
  return (
    <G>
      <Line x1={x0} y1={y0} x2={x1} y2={y0} stroke={O} strokeWidth={1.2} />
      <Line x1={x0} y1={y0} x2={x0} y2={y1} stroke={O} strokeWidth={1.2} />
      <Head x={x1} y={y0} dx={1} dy={0} size={6} />
      <Head x={x0} y={y1} dx={0} dy={-1} size={6} />
      {xl && <Txt x={(x0 + x1) / 2} y={y0 + xlDy} size={9}>{xl}</Txt>}
      {yl && <Txt x={x0 - ylDx} y={(y0 + y1) / 2} size={9} rotate={-90}>{yl}</Txt>}
    </G>
  );
}

// ---------- projectile motion ----------
// Launched at 55° from (40, 160); range 240 drawing units on level ground.
const TAN = Math.tan((55 * Math.PI) / 180);
const projY = (x) => 160 - x * TAN * (1 - x / 240);
function ProjectileArt() {
  const xs = range(61, (i) => i * 4);
  const top = projY(120);
  return (
    <G>
      <Line x1={20} y1={160} x2={300} y2={160} stroke="#8b96a1" strokeWidth={2} />
      <Path d={pathOf(xs.map((x) => [40 + x, projY(x)]))} fill="none" stroke={BLUE} strokeWidth={1.8} strokeDasharray="5 3" />
      <Arrow x1={40} y1={160} x2={40 + 60 * Math.cos(0.96)} y2={160 - 60 * Math.sin(0.96)} c={RED} w={2} />
      <Arrow x1={40} y1={160} x2={40} y2={160 - 49} c={RED} w={1.2} dash="3 2" size={5} />
      <Arrow x1={40} y1={160} x2={74} y2={160} c={RED} w={1.2} dash="3 2" size={5} />
      <Circle cx={160} cy={top} r={4} fill={O} />
      <Arrow x1={160} y1={top} x2={194} y2={top} c={RED} w={2} />
      <Line x1={160} y1={top + 6} x2={160} y2={160} stroke={O} strokeWidth={0.9} strokeDasharray="3 3" />
      <Line x1={40} y1={176} x2={280} y2={176} stroke={O} strokeWidth={1} />
      <Head x={40} y={176} dx={-1} dy={0} size={5} />
      <Head x={280} y={176} dx={1} dy={0} size={5} />
      <Arrow x1={256} y1={projY(216) - 2} x2={268} y2={projY(216) + 28} c={RED} w={2} />
    </G>
  );
}

// ---------- simple harmonic motion: x, v and a against time ----------
function Trace({ y0, f, c, name }) {
  const ts = range(121, (i) => i / 40);
  return (
    <G>
      <Line x1={50} y1={y0} x2={300} y2={y0} stroke={O} strokeWidth={1} />
      <Line x1={50} y1={y0 - 26} x2={50} y2={y0 + 26} stroke={O} strokeWidth={1} />
      <Path d={pathOf(ts.map((t) => [50 + t * 80, y0 - 22 * f(t * Math.PI)]))} fill="none" stroke={c} strokeWidth={1.8} />
      <Txt x={40} y={y0 + 4} size={10} weight="700" anchor="end">{name}</Txt>
    </G>
  );
}
function ShmArt() {
  return (
    <G>
      <Trace y0={36} f={Math.sin} c={BLUE} name="x" />
      <Trace y0={106} f={Math.cos} c={GREEN} name="v" />
      <Trace y0={176} f={(t) => -Math.sin(t)} c={RED} name="a" />
      {[0, 1, 2, 3].map((k) => (
        <Line key={k} x1={50 + k * 40} y1={10} x2={50 + k * 40} y2={204} stroke="#c9ced3" strokeWidth={0.8} strokeDasharray="2 3" />
      ))}
      <Txt x={300} y={218} size={9} anchor="end">time</Txt>
    </G>
  );
}

// ---------- the Wheatstone bridge ----------
function Resistor({ x1, y1, x2, y2, name, nx, ny }) {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  const deg = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={1.4} />
      <Rect x={cx - 14} y={cy - 6} width={28} height={12} fill="#ffffff" stroke={O} strokeWidth={1.4} transform={`rotate(${deg} ${cx} ${cy})`} />
      <Txt x={cx + nx} y={cy + ny} size={11} weight="700">{name}</Txt>
    </G>
  );
}
function BridgeArt() {
  return (
    <G>
      <Resistor x1={160} y1={30} x2={80} y2={110} name="P" nx={-18} ny={-10} />
      <Resistor x1={160} y1={30} x2={240} y2={110} name="Q" nx={18} ny={-10} />
      <Resistor x1={80} y1={110} x2={160} y2={190} name="R" nx={-18} ny={16} />
      <Resistor x1={240} y1={110} x2={160} y2={190} name="S" nx={18} ny={16} />
      <Line x1={160} y1={30} x2={160} y2={96} stroke={O} strokeWidth={1.4} />
      <Line x1={160} y1={124} x2={160} y2={190} stroke={O} strokeWidth={1.4} />
      <Circle cx={160} cy={110} r={14} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Txt x={160} y={114} size={11} weight="700">G</Txt>
      <Path d="M80 110 L30 110 L30 222 L150 222" fill="none" stroke={O} strokeWidth={1.4} />
      <Path d="M170 222 L290 222 L290 110 L240 110" fill="none" stroke={O} strokeWidth={1.4} />
      <Line x1={150} y1={212} x2={150} y2={232} stroke={O} strokeWidth={2} />
      <Line x1={170} y1={216} x2={170} y2={228} stroke={O} strokeWidth={4} />
      {[[160, 30], [80, 110], [240, 110], [160, 190]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={3} fill={O} />
      ))}
    </G>
  );
}

// ---------- stress-strain curve of a ductile metal ----------
function StressStrainArt() {
  const d = 'M50 190 L100 90 Q106 79 112 77 Q118 86 126 84 C168 60 206 48 236 48 Q262 50 282 68';
  return (
    <G>
      <Axes x0={50} y0={190} x1={304} y1={30} xl="strain" yl="stress" />
      <Path d={d} fill="none" stroke={BLUE} strokeWidth={1.8} />
      <Path d="M276 62 L288 74 M288 62 L276 74" stroke={RED} strokeWidth={1.6} />
    </G>
  );
}

// ---------- capacitor charging and discharging ----------
const cx = (t) => 50 + t * 48;
const cy = (v) => 180 - v * 140;
function CapacitorArt() {
  const ts = range(101, (i) => i * 0.05);
  return (
    <G>
      <Axes x0={50} y0={180} x1={304} y1={26} xl="time t" yl="p.d. V" ylDx={34} />
      <Path d={pathOf(ts.map((t) => [cx(t), cy(Math.exp(-t))]))} fill="none" stroke={BLUE} strokeWidth={1.8} />
      <Path d={pathOf(ts.map((t) => [cx(t), cy(1 - Math.exp(-t))]))} fill="none" stroke={GREEN} strokeWidth={1.4} strokeDasharray="5 3" />
      <Line x1={cx(1)} y1={180} x2={cx(1)} y2={cy(Math.exp(-1))} stroke={O} strokeWidth={0.9} strokeDasharray="3 3" />
      <Line x1={50} y1={cy(Math.exp(-1))} x2={cx(1)} y2={cy(Math.exp(-1))} stroke={O} strokeWidth={0.9} strokeDasharray="3 3" />
      <Txt x={cx(1)} y={194} size={9}>RC</Txt>
      <Txt x={44} y={cy(Math.exp(-1)) + 3} size={9} anchor="end">0.37V₀</Txt>
      <Txt x={44} y={cy(1) + 3} size={9} anchor="end">V₀</Txt>
    </G>
  );
}

// ---------- Young's double-slit experiment ----------
function DoubleSlitArt() {
  const fringes = range(9, (i) => 70 + i * 18);
  return (
    <G>
      <Circle cx={22} cy={124} r={9} fill="#ffe9a3" stroke={O} strokeWidth={1} />
      <Path d="M60 50 L60 120 M60 128 L60 198" stroke={O} strokeWidth={3} />
      <Path d="M120 50 L120 113 M120 117 L120 131 M120 135 L120 198" stroke={O} strokeWidth={3} />
      {[115, 133].map((y) => (
        <G key={y}>
          {[106, 124, 142].map((p) => (
            <Line key={p} x1={120} y1={y} x2={300} y2={p} stroke="#e0a800" strokeWidth={0.7} />
          ))}
        </G>
      ))}
      <Line x1={60} y1={124} x2={120} y2={115} stroke="#e0a800" strokeWidth={0.7} />
      <Line x1={60} y1={124} x2={120} y2={133} stroke="#e0a800" strokeWidth={0.7} />
      <Rect x={300} y={60} width={10} height={170} fill="#2b3138" stroke={O} strokeWidth={1} />
      {fringes.map((y) => (
        <Rect key={y} x={300} y={y - 4} width={10} height={8} fill="#ffe27a" stroke="none" />
      ))}
      <Line x1={120} y1={214} x2={300} y2={214} stroke={O} strokeWidth={0.9} />
      <Head x={120} y={214} dx={-1} dy={0} size={5} />
      <Head x={300} y={214} dx={1} dy={0} size={5} />
      <Txt x={210} y={228} size={9}>D</Txt>
      <Line x1={318} y1={106} x2={318} y2={124} stroke={O} strokeWidth={0.9} />
      <Txt x={322} y={119} size={9} anchor="start">x</Txt>
    </G>
  );
}

// ---------- the photoelectric effect: Ek(max) against frequency ----------
function PhotoArt() {
  return (
    <G>
      <Line x1={60} y1={150} x2={304} y2={150} stroke={O} strokeWidth={1.2} />
      <Line x1={60} y1={210} x2={60} y2={26} stroke={O} strokeWidth={1.2} />
      <Head x={304} y={150} dx={1} dy={0} size={6} />
      <Head x={60} y={26} dx={0} dy={-1} size={6} />
      <Line x1={130} y1={150} x2={290} y2={40} stroke={BLUE} strokeWidth={2} />
      <Line x1={60} y1={198} x2={130} y2={150} stroke={BLUE} strokeWidth={1.2} strokeDasharray="4 3" />
      <Circle cx={130} cy={150} r={3} fill={O} />
      <Circle cx={60} cy={198} r={3} fill={O} />
      <Txt x={200} y={166} size={9}>frequency f</Txt>
      <Txt x={46} y={90} size={9} rotate={-90}>maximum kinetic energy</Txt>
      <Txt x={130} y={164} size={9}>f₀</Txt>
      <Txt x={54} y={202} size={9} anchor="end">−φ</Txt>
    </G>
  );
}

// ---------- binding energy per nucleon ----------
const BE = [[2, 1.11], [3, 2.57], [6, 5.33], [7, 5.61], [9, 6.46], [12, 7.68], [16, 7.98], [20, 8.03], [28, 8.45], [40, 8.55], [56, 8.79], [80, 8.71], [100, 8.6], [120, 8.51], [160, 8.25], [200, 7.92], [238, 7.57]];
const bex = (a) => 46 + a * 1.06;
const bey = (e) => 196 - e * 17;
function BindingArt() {
  return (
    <G>
      <Axes x0={46} y0={196} x1={306} y1={30} xl="nucleon number A" yl="binding energy per nucleon / MeV" xlDy={24} ylDx={20} />
      {[2, 4, 6, 8].map((e) => (
        <G key={e}>
          <Line x1={43} y1={bey(e)} x2={46} y2={bey(e)} stroke={O} strokeWidth={1} />
          <Txt x={40} y={bey(e) + 3} size={8} anchor="end">{e}</Txt>
        </G>
      ))}
      {[50, 100, 150, 200].map((a) => (
        <G key={a}>
          <Line x1={bex(a)} y1={196} x2={bex(a)} y2={199} stroke={O} strokeWidth={1} />
          <Txt x={bex(a)} y={207} size={8}>{a}</Txt>
        </G>
      ))}
      <Path d={pathOf(BE.map(([a, e]) => [bex(a), bey(e)]))} fill="none" stroke={BLUE} strokeWidth={1.8} />
      <Circle cx={bex(4)} cy={bey(7.07)} r={3} fill={RED} />
      <Circle cx={bex(56)} cy={bey(8.79)} r={3} fill={RED} />
      <Circle cx={bex(235)} cy={bey(7.59)} r={3} fill={RED} />
    </G>
  );
}

// ---------- rectification ----------
function Wave({ y0, f, c, title }) {
  const ts = range(161, (i) => i / 40);
  return (
    <G>
      <Line x1={70} y1={y0} x2={300} y2={y0} stroke={O} strokeWidth={1} />
      <Path d={pathOf(ts.map((t) => [70 + t * 57, y0 - 22 * f(t * Math.PI)]))} fill="none" stroke={c} strokeWidth={1.8} />
      <Txt x={62} y={y0 + 3} size={9} anchor="end">{title}</Txt>
    </G>
  );
}
// Full-wave output across a smoothing capacitor: after each peak the capacitor
// discharges slowly until the next half-cycle recharges it.
function smoothed(u) {
  if (u < Math.PI / 2) return Math.sin(u);
  const since = (u - Math.PI / 2) % Math.PI;
  return Math.max(Math.abs(Math.sin(u)), Math.exp(-0.08 * since));
}
function RectifyArt() {
  return (
    <G>
      <Wave y0={34} f={Math.sin} c={BLUE} title="a.c. input" />
      <Wave y0={96} f={(t) => Math.max(0, Math.sin(t))} c={RED} title="half-wave" />
      <Wave y0={158} f={(t) => Math.abs(Math.sin(t))} c={GREEN} title="full-wave" />
      <Wave y0={220} f={smoothed} c={O} title="smoothed" />
    </G>
  );
}

export const PHYSICS_A = {
  'projectile-path': {
    title: 'Projectile launched at an angle θ on level ground',
    w: 310,
    h: 190,
    art: ProjectileArt,
    labels: [
      ['Launch velocity u', 26, 100, 64, 126],
      ['u sin θ', 24, 132, 40, 132],
      ['u cos θ', 58, 150, 58, 160],
      ['At the top only u cos θ:\nvertical velocity is zero', 214, 44, 186, 64],
      ['Path: a parabola', 292, 112, 262, 118],
      ['Range R', 160, 190, 160, 177],
    ],
  },
  'shm-graphs': {
    title: 'Simple harmonic motion: displacement, velocity and acceleration',
    w: 310,
    h: 222,
    art: ShmArt,
    labels: [
      ['x = A sin ωt', 330, 30, 300, 36],
      ['v = Aω cos ωt:\ngreatest at x = 0', 330, 100, 300, 106],
      ['a = −ω²x:\nopposite to x', 330, 170, 300, 176],
    ],
  },
  'wheatstone-bridge': {
    title: 'The Wheatstone bridge: balanced when P/Q = R/S',
    w: 320,
    h: 240,
    art: BridgeArt,
    labels: [['Cell', 160, 246, 160, 232]],
  },
  'stress-strain': {
    title: 'Stress-strain graph for a ductile metal such as copper',
    w: 316,
    h: 206,
    art: StressStrainArt,
    labels: [
      ['Limit of proportionality:\nHooke’s law obeyed below it', 30, 60, 100, 90],
      ['Gradient = Young modulus', 138, 168, 78, 136],
      ['Elastic limit and\nyield point', 168, 106, 113, 80],
      ['Ultimate tensile stress', 236, 26, 236, 47],
      ['Breaking point', 300, 96, 282, 72],
      ['Plastic region', 196, 76, 190, 58],
    ],
  },
  'capacitor-discharge': {
    title: 'Charging and discharging a capacitor through a resistor',
    w: 312,
    h: 202,
    art: CapacitorArt,
    labels: [
      ['Charging', 150, 96, cx(1.6), cy(1 - Math.exp(-1.6))],
      ['After one time constant RC,\nV has fallen to 0.37 V₀', 150, 126, cx(1) + 2, cy(Math.exp(-1))],
      ['Discharging', 200, 156, cx(2.3), cy(Math.exp(-2.3))],
    ],
  },
  'double-slit': {
    title: 'Young’s double-slit experiment: λ = ax/D',
    w: 330,
    h: 236,
    art: DoubleSlitArt,
    labels: [
      ['Monochromatic\nsource', 22, 158, 22, 133],
      ['Single slit', 60, 34, 60, 50],
      ['Double slit,\nseparation a', 120, 28, 120, 50],
      ['Bright and dark fringes\non the screen', 300, 34, 305, 60],
      ['Fringe spacing x', 346, 140, 320, 116],
    ],
  },
  'photoelectric-graph': {
    title: 'Photoelectric effect: hf = φ + Ek(max)',
    w: 312,
    h: 212,
    art: PhotoArt,
    labels: [
      ['Threshold frequency f₀:\nno electrons below it', 150, 190, 132, 152],
      ['Gradient = Planck constant h', 186, 60, 230, 82],
      ['Intercept = −φ\n(work function)', 120, 214, 62, 199],
    ],
  },
  'binding-energy-curve': {
    title: 'Binding energy per nucleon against nucleon number',
    w: 316,
    h: 212,
    art: BindingArt,
    labels: [
      ['Iron-56: most stable\n(8.8 MeV per nucleon)', 130, 24, bex(56), bey(8.79)],
      ['Helium-4', 76, 64, bex(4), bey(7.07)],
      ['Fusion of light nuclei\nreleases energy', 90, 150, bex(9), bey(6.46)],
      ['Fission of heavy nuclei\nreleases energy', 250, 110, bex(235), bey(7.59)],
    ],
  },
  rectification: {
    title: 'Rectifying an alternating current with diodes',
    w: 312,
    h: 246,
    art: RectifyArt,
    labels: [
      ['One diode: negative\nhalves removed', 330, 84, 300, 96],
      ['Bridge of four diodes:\nevery half used', 330, 146, 300, 158],
      ['A capacitor smooths\nthe output (ripple)', 330, 210, 300, 210],
    ],
  },
};
