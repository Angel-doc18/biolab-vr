// Advanced Level Chemistry diagrams: shapes of molecules, the hydrogen emission
// spectrum, a boiling point-composition diagram, pH titration curves, the
// Daniell cell, the Maxwell-Boltzmann distribution and a Born-Haber cycle.
// Curves are calculated, not sketched, so they are to scale.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { O } from './kit';

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));
const ATOM = '#5d6873';
const OUTER = '#e6ecf1';
const BLUE = '#3f6fb5';
const RED = '#c8463d';

function Arrow({ x1, y1, x2, y2, c = O, w = 1.4, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

const pathOf = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

// ---------- shapes of molecules ----------
// kind: 'plain' bond, 'wedge' (towards the viewer) or 'dash' (away).
function Bond({ cx, cy, x, y, kind = 'plain' }) {
  if (kind === 'wedge') {
    const dx = x - cx;
    const dy = y - cy;
    const len = Math.hypot(dx, dy);
    const nx = (-dy / len) * 3.2;
    const ny = (dx / len) * 3.2;
    return <Path d={`M${cx} ${cy} L${x + nx} ${y + ny} L${x - nx} ${y - ny} Z`} fill={O} />;
  }
  return <Line x1={cx} y1={cy} x2={x} y2={y} stroke={O} strokeWidth={1.6} strokeDasharray={kind === 'dash' ? '2.5 2' : undefined} />;
}

function Molecule({ cx, cy, bonds, pairs = [], name, eg }) {
  return (
    <G>
      {bonds.map(([dx, dy, kind], i) => (
        <Bond key={i} cx={cx} cy={cy} x={cx + dx} y={cy + dy} kind={kind} />
      ))}
      {pairs.map(([dx, dy, rot], i) => (
        <Ellipse key={`p${i}`} cx={cx + dx} cy={cy + dy} rx={5} ry={9} fill="#f3e3b5" stroke={O} strokeWidth={0.8} transform={`rotate(${rot} ${cx + dx} ${cy + dy})`} />
      ))}
      <Circle cx={cx} cy={cy} r={8} fill={ATOM} stroke={O} strokeWidth={1} />
      {bonds.map(([dx, dy], i) => (
        <Circle key={`o${i}`} cx={cx + dx} cy={cy + dy} r={5.5} fill={OUTER} stroke={O} strokeWidth={1} />
      ))}
      <Txt x={cx} y={cy + 52} size={10} weight="700">{name}</Txt>
      <Txt x={cx} y={cy + 65} size={9}>{eg}</Txt>
    </G>
  );
}

function ShapesArt() {
  return (
    <G>
      <Molecule cx={60} cy={52} bonds={[[-38, 0], [38, 0]]} name="Linear" eg="CO₂, BeCl₂: 180°" />
      <Molecule cx={180} cy={56} bonds={[[0, -34], [29.4, 17], [-29.4, 17]]} name="Trigonal planar" eg="BF₃: 120°" />
      <Molecule cx={300} cy={56} bonds={[[0, -36], [-31, 16], [10, 27, 'wedge'], [31, 9, 'dash']]} name="Tetrahedral" eg="CH₄: 109.5°" />
      <Molecule cx={60} cy={176} bonds={[[-30, 16], [8, 27, 'wedge'], [30, 12, 'dash']]} pairs={[[0, -20, 0]]} name="Trigonal pyramidal" eg="NH₃: 107°" />
      <Molecule cx={180} cy={176} bonds={[[-28, 20], [28, 20]]} pairs={[[-13, -17, -35], [13, -17, 35]]} name="Bent (V-shaped)" eg="H₂O: 104.5°" />
      <Molecule cx={300} cy={176} bonds={[[0, -36], [0, 36], [-36, 0], [36, 0], [-20, -14, 'dash'], [20, 14, 'wedge']]} name="Octahedral" eg="SF₆: 90°" />
    </G>
  );
}

// ---------- the hydrogen emission spectrum ----------
const levelY = (n) => 62 + (13.6 / (n * n)) * (170 / 13.6);
function HydrogenArt() {
  const levels = [1, 2, 3, 4, 5, 6];
  return (
    <G>
      {levels.map((n) => (
        <Line key={n} x1={70} y1={levelY(n)} x2={300} y2={levelY(n)} stroke={O} strokeWidth={n === 1 ? 1.6 : 1} />
      ))}
      <Line x1={70} y1={62} x2={300} y2={62} stroke={O} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={62} y={65} size={9} anchor="end">n = ∞</Txt>
      <Txt x={62} y={levelY(3) + 3} size={9} anchor="end">n = 3</Txt>
      <Txt x={62} y={levelY(2) + 3} size={9} anchor="end">n = 2</Txt>
      <Txt x={62} y={levelY(1) + 3} size={9} anchor="end">n = 1</Txt>
      <Txt x={306} y={65} size={9} anchor="start">0</Txt>
      <Txt x={306} y={levelY(2) + 3} size={9} anchor="start">−3.4 eV</Txt>
      <Txt x={306} y={levelY(1) + 3} size={9} anchor="start">−13.6 eV</Txt>
      {[2, 3, 4, 5].map((n, i) => (
        <Arrow key={`l${n}`} x1={92 + i * 14} y1={levelY(n)} x2={92 + i * 14} y2={levelY(1)} c={'#6a4bb3'} />
      ))}
      {[3, 4, 5, 6].map((n, i) => (
        <Arrow key={`b${n}`} x1={196 + i * 14} y1={levelY(n)} x2={196 + i * 14} y2={levelY(2)} c={RED} size={5} />
      ))}
    </G>
  );
}

// ---------- boiling point-composition diagram (ideal mixture) ----------
// A boils at 100 °C, B at 60 °C; x is the mole fraction of B.
const TL = (x) => 100 - 40 * x - 8 * x * (1 - x);
const TV = (x) => 100 - 40 * x + 25 * x * (1 - x);
const bx = (x) => 50 + 240 * x;
const by = (t) => 200 - (t - 50) * 3;
function vapourAt(t) {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 40; i++) {
    const m = (lo + hi) / 2;
    if (TV(m) > t) lo = m;
    else hi = m;
  }
  return (lo + hi) / 2;
}
function BoilingArt() {
  const xs = range(51, (i) => i / 50);
  const steps = [];
  let x = 0.25;
  for (let i = 0; i < 3; i++) {
    const t = TL(x);
    const xv = vapourAt(t);
    steps.push([bx(x), by(t), bx(xv), by(t)]);
    steps.push([bx(xv), by(t), bx(xv), by(TL(xv))]);
    x = xv;
  }
  return (
    <G>
      <Line x1={50} y1={200} x2={292} y2={200} stroke={O} strokeWidth={1.2} />
      <Line x1={50} y1={200} x2={50} y2={36} stroke={O} strokeWidth={1.2} />
      <Head x={292} y={200} dx={1} dy={0} size={6} />
      <Head x={50} y={36} dx={0} dy={-1} size={6} />
      <Path d={pathOf(xs.map((v) => [bx(v), by(TV(v))]))} fill="none" stroke={RED} strokeWidth={1.8} />
      <Path d={pathOf(xs.map((v) => [bx(v), by(TL(v))]))} fill="none" stroke={BLUE} strokeWidth={1.8} />
      {steps.map(([x1, y1, x2, y2], i) => (
        <Line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={O} strokeWidth={0.9} strokeDasharray="3 2" />
      ))}
      <Txt x={44} y={by(100) + 3} size={9} anchor="end">100 °C</Txt>
      <Txt x={296} y={by(60) + 3} size={9} anchor="start">60 °C</Txt>
      <Txt x={50} y={214} size={9}>pure A</Txt>
      <Txt x={290} y={214} size={9}>pure B</Txt>
      <Txt x={170} y={228} size={9}>mole fraction of B</Txt>
      <Txt x={24} y={118} size={9} rotate={-90}>boiling temperature</Txt>
    </G>
  );
}

// ---------- pH titration curves ----------
// 25 cm³ of 0.1 mol/dm³ acid titrated with 0.1 mol/dm³ NaOH.
function pHStrong(v) {
  if (Math.abs(v - 25) < 1e-9) return 7;
  if (v < 25) return -Math.log10((0.1 * (25 - v)) / (25 + v));
  return 14 + Math.log10((0.1 * (v - 25)) / (25 + v));
}
function pHWeak(v) {
  const pKa = 4.76;
  if (v <= 0) return 0.5 * (pKa + 1);
  if (v < 25) return Math.max(0.5 * (pKa + 1), pKa + Math.log10(v / (25 - v)));
  if (Math.abs(v - 25) < 1e-9) return 14 - 0.5 * (9.24 - Math.log10(0.05));
  return Math.max(14 - 0.5 * (9.24 - Math.log10(0.05)), 14 + Math.log10((0.1 * (v - 25)) / (25 + v)));
}
function Panel({ x0, f, title }) {
  const px = (v) => x0 + v * 2.4;
  const py = (p) => 190 - p * 11;
  const vs = [...range(97, (i) => i * 0.25), ...range(40, (i) => 24.4 + i * 0.03), 25, ...range(40, (i) => 25.03 + i * 0.03), ...range(101, (i) => 26.2 + i * 0.238)].sort((a, b) => a - b);
  return (
    <G>
      <Rect x={x0} y={py(10)} width={120} height={py(8.3) - py(10)} fill="#f6d9e6" stroke="none" />
      <Rect x={x0} y={py(4.4)} width={120} height={py(3.1) - py(4.4)} fill="#fbe3c4" stroke="none" />
      <Line x1={x0} y1={190} x2={x0 + 124} y2={190} stroke={O} strokeWidth={1.1} />
      <Line x1={x0} y1={190} x2={x0} y2={30} stroke={O} strokeWidth={1.1} />
      {[0, 7, 14].map((p) => (
        <G key={p}>
          <Line x1={x0 - 3} y1={py(p)} x2={x0} y2={py(p)} stroke={O} strokeWidth={1} />
          <Txt x={x0 - 5} y={py(p) + 3} size={8} anchor="end">{p}</Txt>
        </G>
      ))}
      {[25, 50].map((v) => (
        <G key={v}>
          <Line x1={px(v)} y1={190} x2={px(v)} y2={193} stroke={O} strokeWidth={1} />
          <Txt x={px(v)} y={202} size={8}>{v}</Txt>
        </G>
      ))}
      <Path d={pathOf(vs.map((v) => [px(v), py(f(v))]))} fill="none" stroke={BLUE} strokeWidth={1.8} />
      <Txt x={x0 + 60} y={20} size={9.5} weight="700">{title}</Txt>
    </G>
  );
}
function TitrationArt() {
  return (
    <G>
      <Panel x0={34} f={pHStrong} title="Strong acid, strong base" />
      <Panel x0={200} f={pHWeak} title="Weak acid, strong base" />
      <Txt x={10} y={112} size={9} rotate={-90}>pH</Txt>
      <Txt x={186} y={218} size={9}>volume of NaOH added / cm³</Txt>
    </G>
  );
}

// ---------- the Daniell cell ----------
function Beaker({ x, fill }) {
  return (
    <G>
      <Rect x={x + 2} y={128} width={86} height={70} fill={fill} stroke="none" />
      <Path d={`M${x} 104 L${x} 200 L${x + 90} 200 L${x + 90} 104`} fill="none" stroke={O} strokeWidth={1.4} />
    </G>
  );
}
function DanielArt() {
  return (
    <G>
      <Beaker x={20} fill="#edf1f4" />
      <Beaker x={210} fill="#cfe1f5" />
      {/* salt bridge */}
      <Path d="M88 182 L88 120 Q88 96 112 96 L208 96 Q232 96 232 120 L232 182" fill="none" stroke="#c9a36b" strokeWidth={10} strokeLinecap="round" />
      <Path d="M88 182 L88 120 Q88 96 112 96 L208 96 Q232 96 232 120 L232 182" fill="none" stroke="#f3e3c4" strokeWidth={7} strokeLinecap="round" />
      {/* electrodes */}
      <Rect x={44} y={70} width={12} height={110} fill="#a7b0b8" stroke={O} strokeWidth={1} />
      <Rect x={264} y={70} width={12} height={110} fill="#c87a4a" stroke={O} strokeWidth={1} />
      {/* wires and voltmeter */}
      <Path d="M50 70 L50 30 L142 30" fill="none" stroke={O} strokeWidth={1.4} />
      <Path d="M178 30 L270 30 L270 70" fill="none" stroke={O} strokeWidth={1.4} />
      <Circle cx={160} cy={30} r={18} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Txt x={160} y={34} size={11} weight="700">V</Txt>
      <Arrow x1={76} y1={20} x2={124} y2={20} c={BLUE} size={5} />
      <Txt x={100} y={14} size={8.5}>electrons</Txt>
    </G>
  );
}

// ---------- Maxwell-Boltzmann distribution ----------
const mb = (E, kT) => (2 / Math.sqrt(Math.PI)) * Math.pow(1 / kT, 1.5) * Math.sqrt(E) * Math.exp(-E / kT);
const mx = (E) => 40 + E * 32;
const my = (f) => 190 - f * 300;
function MaxwellArt() {
  const Es = range(161, (i) => i * 0.05);
  const ea = 4;
  const tail = Es.filter((E) => E >= ea);
  const area = `${pathOf([[mx(ea), 190], ...tail.map((E) => [mx(E), my(mb(E, 1.6))])])} L${mx(8)} 190 Z`;
  return (
    <G>
      <Path d={area} fill="#f6d2cd" stroke="none" />
      <Line x1={40} y1={190} x2={306} y2={190} stroke={O} strokeWidth={1.2} />
      <Line x1={40} y1={190} x2={40} y2={30} stroke={O} strokeWidth={1.2} />
      <Head x={306} y={190} dx={1} dy={0} size={6} />
      <Head x={40} y={30} dx={0} dy={-1} size={6} />
      <Path d={pathOf(Es.map((E) => [mx(E), my(mb(E, 1))]))} fill="none" stroke={BLUE} strokeWidth={1.8} />
      <Path d={pathOf(Es.map((E) => [mx(E), my(mb(E, 1.6))]))} fill="none" stroke={RED} strokeWidth={1.8} />
      <Line x1={mx(ea)} y1={190} x2={mx(ea)} y2={60} stroke={O} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={174} y={206} size={9}>kinetic energy of the molecules</Txt>
      <Txt x={24} y={112} size={9} rotate={-90}>number of molecules</Txt>
    </G>
  );
}

// ---------- Born-Haber cycle for sodium chloride ----------
// Energies in kJ/mol above the elements, Na(s) + ½Cl₂(g).
const BH = { el: 0, naG: 107, ion: 603, clG: 725, ions: 376, salt: -411 };
const bhY = (e) => 150 - e * 0.18;
function BHLevel({ e, text }) {
  return (
    <G>
      <Line x1={10} y1={bhY(e)} x2={330} y2={bhY(e)} stroke={O} strokeWidth={1.1} />
      <Txt x={12} y={bhY(e) - 4} size={9} anchor="start">{text}</Txt>
    </G>
  );
}
function BHArrow({ x, from, to, value, left, at }) {
  const c = to > from ? RED : BLUE;
  const mid = at ?? (bhY(from) + bhY(to)) / 2;
  return (
    <G>
      <Arrow x1={x} y1={bhY(from)} x2={x} y2={bhY(to)} c={c} size={5} />
      <Txt x={left ? x - 4 : x + 4} y={mid + 3} size={8.5} anchor={left ? 'end' : 'start'}>{value}</Txt>
    </G>
  );
}
function BornHaberArt() {
  return (
    <G>
      <BHLevel e={BH.clG} text="Na⁺(g) + e⁻ + Cl(g)" />
      <BHLevel e={BH.ion} text="Na⁺(g) + e⁻ + ½Cl₂(g)" />
      <BHLevel e={BH.ions} text="Na⁺(g) + Cl⁻(g)" />
      <BHLevel e={BH.naG} text="Na(g) + ½Cl₂(g)" />
      <BHLevel e={BH.el} text="Na(s) + ½Cl₂(g)" />
      <BHLevel e={BH.salt} text="NaCl(s)" />
      <BHArrow x={158} from={BH.el} to={BH.salt} value="ΔHf −411" left />
      <BHArrow x={176} from={BH.el} to={BH.naG} value="+107" />
      <BHArrow x={204} from={BH.naG} to={BH.ion} value="+496" at={108} />
      <BHArrow x={232} from={BH.ion} to={BH.clG} value="+122" />
      <BHArrow x={262} from={BH.clG} to={BH.ions} value="−349" />
      <BHArrow x={292} from={BH.ions} to={BH.salt} value="−787" at={108} />
    </G>
  );
}

export const CHEMISTRY_A = {
  'vsepr-shapes': {
    title: 'Shapes of molecules and bond angles',
    w: 360,
    h: 250,
    art: ShapesArt,
    labels: [],
  },
  'hydrogen-spectrum': {
    title: 'Energy levels of the hydrogen atom and its emission lines',
    w: 340,
    h: 240,
    art: HydrogenArt,
    labels: [
      ['Lyman series:\nfalls to n = 1\n(ultraviolet)', 150, 176, 134, 176],
      ['Balmer series:\nfalls to n = 2\n(visible light)', 254, 140, 238, 100],
      ['Levels converge: the limit\ngives the ionisation energy', 185, 22, 185, 64],
    ],
  },
  'boiling-composition': {
    title: 'Boiling point-composition diagram of an ideal mixture',
    w: 310,
    h: 232,
    art: BoilingArt,
    labels: [
      ['Vapour curve', 150, 46, bx(0.3), by(TV(0.3))],
      ['Liquid curve', 236, 184, bx(0.72), by(TL(0.72))],
      ['Each step: boil,\nthen condense', 236, 62, 190, 108],
    ],
  },
  'titration-curves': {
    title: 'pH titration curves with 0.1 mol/dm³ sodium hydroxide',
    w: 360,
    h: 222,
    art: TitrationArt,
    labels: [
      ['Phenolphthalein\nchanges, pH 8.3 to 10', 372, 86, 322, 92],
      ['Methyl orange\nchanges, pH 3.1 to 4.4', 372, 150, 322, 148],
    ],
  },
  'daniell-cell': {
    title: 'The Daniell cell: Zn | Zn²⁺ || Cu²⁺ | Cu, e.m.f. 1.10 V',
    w: 320,
    h: 214,
    art: DanielArt,
    labels: [
      ['Zinc: negative\nelectrode (oxidation)', 12, 60, 44, 76],
      ['Copper: positive\nelectrode (reduction)', 308, 60, 276, 76],
      ['Salt bridge\n(KNO₃ solution)', 160, 72, 160, 92],
      ['ZnSO₄(aq)', 64, 214, 64, 186],
      ['CuSO₄(aq)', 256, 214, 256, 186],
      ['High-resistance\nvoltmeter', 214, 12, 176, 22],
    ],
  },
  'maxwell-boltzmann': {
    title: 'Maxwell-Boltzmann distribution at two temperatures',
    w: 320,
    h: 214,
    art: MaxwellArt,
    labels: [
      ['Lower temperature T₁', 96, 30, 66, 50],
      ['Higher temperature T₂:\nflatter, peak moves right', 240, 100, mx(3.4), my(mb(3.4, 1.6))],
      ['Activation energy, Ea', mx(4), 46, mx(4), 60],
      ['Molecules with E ≥ Ea:\nmany more at T₂', 270, 130, 210, 174],
    ],
  },
  'born-haber': {
    title: 'Born-Haber cycle for sodium chloride (kJ/mol)',
    w: 340,
    h: 232,
    art: BornHaberArt,
    labels: [
      ['Lattice enthalpy', 312, 200, 294, 190],
    ],
  },
};
