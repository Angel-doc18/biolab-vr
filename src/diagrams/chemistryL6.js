// A Level Chemistry figures for the 2026/2027 Lower Sixth scheme: orbital
// shapes, the gas laws, real gases (pV/nRT against pressure), colligative
// properties, first-order decay drawn to scale with its half-lives, entropy,
// Gibbs feasibility, the reaction quotient, halide ions with concentrated
// sulfuric acid, uses of halogens and the GCE papers (0715).
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const line = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

// ---------- s and p orbitals ----------
function OrbitalArt() {
  const panel = (cx, name, children) => (
    <G key={name}>
      <Line x1={cx - 34} y1={60} x2={cx + 34} y2={60} stroke={GREY} strokeWidth={0.7} />
      <Line x1={cx} y1={26} x2={cx} y2={94} stroke={GREY} strokeWidth={0.7} />
      {children}
      <Circle cx={cx} cy={60} r={2} fill={O} />
      <Txt x={cx} y={114} size={11} weight="700">
        {name}
      </Txt>
    </G>
  );
  const lobe = { fill: '#9ec3e6', fillOpacity: 0.8, stroke: O, strokeWidth: 1 };
  return (
    <G>
      {panel(46, 's', <Circle cx={46} cy={60} r={26} {...lobe} />)}
      {panel(128, 'p (x)', (
        <G>
          <Ellipse cx={112} cy={60} rx={15} ry={10} {...lobe} />
          <Ellipse cx={144} cy={60} rx={15} ry={10} {...lobe} />
        </G>
      ))}
      {panel(210, 'p (y)', (
        <G>
          <Ellipse cx={210} cy={44} rx={10} ry={15} {...lobe} />
          <Ellipse cx={210} cy={76} rx={10} ry={15} {...lobe} />
        </G>
      ))}
      {panel(292, 'p (z)', (
        <G>
          <Ellipse cx={281} cy={71} rx={15} ry={9} {...lobe} transform="rotate(-40 281 71)" />
          <Ellipse cx={303} cy={49} rx={15} ry={9} {...lobe} transform="rotate(-40 303 49)" />
        </G>
      ))}
      <Txt x={170} y={134} size={8.5} fill={GREY}>
        p orbitals: two lobes, a node at the nucleus, at right angles to each other
      </Txt>
    </G>
  );
}

// ---------- real gases ----------
const GX = (p) => 50 + p * 240;
const GZ = (z) => 160 - (z - 0.4) * 100;
const GASES = [
  { name: 'H₂', f: (p) => 1 + 0.55 * p, c: BLUE },
  { name: 'N₂', f: (p) => 1 - 0.15 * p + 0.5 * p * p, c: GREEN },
  { name: 'CO₂', f: (p) => 1 - 1.4 * p + 1.6 * p * p, c: RED },
  { name: 'ideal gas', f: () => 1, c: GREY },
];
function RealGasArt() {
  const pts = (f) => {
    const out = [];
    for (let p = 0; p <= 1.0001; p += 0.02) out.push([GX(p), GZ(f(p))]);
    return line(out);
  };
  return (
    <G>
      <Line x1={50} y1={170} x2={292} y2={170} stroke={O} strokeWidth={1.2} />
      <Line x1={50} y1={170} x2={50} y2={20} stroke={O} strokeWidth={1.2} />
      <Line x1={46} y1={GZ(1)} x2={50} y2={GZ(1)} stroke={O} strokeWidth={1} />
      <Txt x={43} y={GZ(1) + 3} size={8.5} anchor="end">
        1.0
      </Txt>
      <Txt x={170} y={186} size={9} weight="700">
        Pressure
      </Txt>
      <Txt x={22} y={96} size={9} weight="700" rotate={-90}>
        pV / nRT
      </Txt>
      {GASES.map((g) => (
        <G key={g.name}>
          <Path d={pts(g.f)} stroke={g.c} strokeWidth={g.name === 'ideal gas' ? 1.4 : 2} strokeDasharray={g.name === 'ideal gas' ? '5 3' : undefined} fill="none" />
          <Txt x={296} y={GZ(g.f(1)) + 3} size={8.5} anchor="start" weight="700" fill={g.c}>
            {g.name}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- first-order decay, to scale ----------
const DX = (t) => 50 + t * 3;
const DY = (c) => 180 - c * 150;
function FirstOrderArt() {
  const k = Math.LN2 / 20;
  const pts = [];
  for (let t = 0; t <= 80.001; t += 1) pts.push([DX(t), DY(Math.exp(-k * t))]);
  return (
    <G>
      <Line x1={50} y1={180} x2={292} y2={180} stroke={O} strokeWidth={1.2} />
      <Line x1={50} y1={180} x2={50} y2={22} stroke={O} strokeWidth={1.2} />
      {[0, 20, 40, 60, 80].map((t) => (
        <G key={`t${t}`}>
          <Line x1={DX(t)} y1={180} x2={DX(t)} y2={184} stroke={O} strokeWidth={1} />
          <Txt x={DX(t)} y={194} size={8.5}>
            {t}
          </Txt>
        </G>
      ))}
      {[0, 0.25, 0.5, 0.75, 1].map((c) => (
        <G key={`c${c}`}>
          <Line x1={46} y1={DY(c)} x2={50} y2={DY(c)} stroke={O} strokeWidth={1} />
          <Txt x={43} y={DY(c) + 3} size={8.5} anchor="end">
            {c.toFixed(2)}
          </Txt>
        </G>
      ))}
      {[[20, 0.5], [40, 0.25], [60, 0.125]].map(([t, c]) => (
        <G key={`h${t}`}>
          <Line x1={50} y1={DY(c)} x2={DX(t)} y2={DY(c)} stroke={GREY} strokeWidth={0.9} strokeDasharray="3 3" />
          <Line x1={DX(t)} y1={DY(c)} x2={DX(t)} y2={180} stroke={GREY} strokeWidth={0.9} strokeDasharray="3 3" />
        </G>
      ))}
      <Path d={line(pts)} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Txt x={200} y={60} size={9} weight="700" fill={BLUE}>
        t½ = 20 s, every time
      </Txt>
      <Txt x={170} y={210} size={9} weight="700">
        Time / s
      </Txt>
      <Txt x={14} y={100} size={9} weight="700" rotate={-90}>
        [A] / mol dm⁻³
      </Txt>
    </G>
  );
}

// ---------- Gibbs feasibility ----------
const CELLS = [
  { r: 0, c: 0, text: ['Always', 'feasible'], fill: '#dff0d8' },
  { r: 0, c: 1, text: ['Feasible at high T', '(T > ΔH ÷ ΔS)'], fill: '#fbefd0' },
  { r: 1, c: 0, text: ['Feasible at low T', '(T < ΔH ÷ ΔS)'], fill: '#fbefd0' },
  { r: 1, c: 1, text: ['Never', 'feasible'], fill: '#f8d7d3' },
];
function GibbsArt() {
  const x0 = 90;
  const y0 = 46;
  const cw = 110;
  const ch = 52;
  return (
    <G>
      <Txt x={x0 + cw} y={16} size={10.5} weight="700">
        ΔG = ΔH − TΔS
      </Txt>
      <Txt x={x0 + cw / 2} y={y0 - 8} size={9.5} weight="700">
        ΔH negative
      </Txt>
      <Txt x={x0 + cw * 1.5} y={y0 - 8} size={9.5} weight="700">
        ΔH positive
      </Txt>
      <Txt x={x0 - 8} y={y0 + ch / 2 + 4} size={9.5} weight="700" anchor="end">
        ΔS positive
      </Txt>
      <Txt x={x0 - 8} y={y0 + ch * 1.5 + 4} size={9.5} weight="700" anchor="end">
        ΔS negative
      </Txt>
      {CELLS.map((cell) => (
        <G key={`${cell.r}${cell.c}`}>
          <Rect x={x0 + cell.c * cw} y={y0 + cell.r * ch} width={cw} height={ch} fill={cell.fill} stroke={O} strokeWidth={1} />
          <Txt x={x0 + cell.c * cw + cw / 2} y={y0 + cell.r * ch + 22} size={9.5} weight="700">
            {cell.text[0]}
          </Txt>
          <Txt x={x0 + cell.c * cw + cw / 2} y={y0 + cell.r * ch + 37} size={9}>
            {cell.text[1]}
          </Txt>
        </G>
      ))}
    </G>
  );
}

export const CHEMISTRY_L6 = {
  'ac-orbital-shapes': {
    title: 'The shapes of s and p orbitals',
    w: 340,
    h: 142,
    art: OrbitalArt,
    labels: [],
    facts: [
      'An s orbital is spherical around the nucleus.',
      'There are three p orbitals in each p sub-shell, along three axes at right angles; each has two lobes and a node at the nucleus.',
      'Each orbital holds at most two electrons of opposite spin.',
    ],
  },
  'ac-gas-laws': columnsSpec('The gas laws', [
    { head: 'Ideal gas', items: ['pV = nRT', 'p in Pa, V in m³', 'T in K', 'R = 8.31'] },
    { head: 'Dalton', items: ['p(total) =', 'sum of partial', 'pressures', 'p = x × p(total)'] },
    { head: 'Graham', items: ['rate ∝ 1/√M', 'NH₃ faster', 'than HCl'] },
    { head: 'Victor Meyer', items: ['M = mRT ÷ pV', 'from air', 'displaced'] },
  ], { colW: 102 }),
  'ac-real-gas': {
    title: 'Real gases deviate from ideal behaviour',
    w: 330,
    h: 194,
    art: RealGasArt,
    labels: [],
    facts: [
      'For an ideal gas pV/nRT stays at 1 at all pressures.',
      'Attractions between molecules make pV/nRT fall below 1 at moderate pressures, most for CO₂, which has the strongest attractions here.',
      'At high pressures the volume of the molecules themselves makes pV/nRT rise above 1. Hydrogen, with very weak attractions, rises from the start.',
    ],
  },
  'ac-colligative': columnsSpec('Colligative properties', [
    { head: 'Vapour pressure', items: ['lowered', '(Raoult’s law)'] },
    { head: 'Boiling point', items: ['raised:', 'ΔTb = Kb × m', 'water Kb 0.52'] },
    { head: 'Freezing point', items: ['lowered:', 'ΔTf = Kf × m', 'water Kf 1.86'] },
    { head: 'Osmotic pressure', items: ['π = cRT', 'reverse osmosis', 'purifies water'] },
  ], { colW: 104 }),
  'ac-first-order': {
    title: 'A first-order reaction has a constant half-life',
    w: 310,
    h: 216,
    art: FirstOrderArt,
    labels: [],
    facts: [
      'The concentration falls exponentially: [A] = [A]₀ e^(−kt).',
      'It halves every 20 s whatever the starting concentration: 1.00 to 0.50 to 0.25 to 0.125 mol dm⁻³.',
      'k = 0.693 ÷ t½ = 0.693 ÷ 20 = 0.035 s⁻¹. A plot of ln[A] against time would be a straight line.',
    ],
  },
  'ac-entropy-states': columnsSpec('What increases entropy', [
    { head: 'State', items: ['solid < liquid', '< gas'] },
    { head: 'Moles of gas', items: ['more moles of', 'gas formed'] },
    { head: 'Temperature', items: ['higher T,', 'more disorder'] },
    { head: 'Mixing', items: ['dissolving,', 'gases mixing'] },
  ], { colW: 102 }),
  'ac-gibbs': {
    title: 'When is a reaction feasible?',
    w: 320,
    h: 160,
    art: GibbsArt,
    labels: [],
    facts: [
      'A reaction is feasible when ΔG = ΔH − TΔS is negative.',
      'Negative ΔH with positive ΔS: always feasible. Positive ΔH with negative ΔS: never feasible.',
      'If both are positive, it becomes feasible above T = ΔH ÷ ΔS; if both are negative, only below that temperature.',
    ],
  },
  'ac-q-vs-k': columnsSpec('Comparing Q with K', [
    { head: 'Q < K', items: ['too little product', 'reaction moves', 'forward'] },
    { head: 'Q = K', items: ['at equilibrium', 'no net change'] },
    { head: 'Q > K', items: ['too much product', 'reaction moves', 'backward'] },
    { head: 'K changes', items: ['only with', 'temperature'] },
  ], { colW: 102 }),
  'ac-halide-acid': columnsSpec('Halides with concentrated sulfuric acid', [
    { head: 'NaCl', items: ['HCl fumes only', 'Cl⁻ cannot reduce', 'H₂SO₄'] },
    { head: 'NaBr', items: ['HBr, Br₂ (orange)', 'and SO₂', 'S: +6 → +4'] },
    { head: 'NaI', items: ['HI, I₂ (purple),', 'SO₂, S and H₂S', 'S: +6 → −2'] },
  ], { colW: 118, arrow: true }),
  'ac-halogen-uses': columnsSpec('Uses of halogens and their compounds', [
    { head: 'Chlorine', items: ['water treatment', 'bleach (NaOCl)', 'PVC'] },
    { head: 'Fluorine', items: ['fluoride', 'toothpaste', 'PTFE'] },
    { head: 'Iodine', items: ['iodised salt', 'antiseptics'] },
    { head: 'Bromine', items: ['flame retardants', 'photography (AgBr)'] },
  ], { colW: 104 }),
  'ac-gce-0715': columnsSpec('GCE A Level Chemistry (0715)', [
    { head: 'Paper 1', items: ['multiple choice', '1½ hours'] },
    { head: 'Paper 2', items: ['six structured', 'questions: physical,', 'inorganic, organic', '3 hours'] },
    { head: 'Practical', items: ['held in May', '(5 to 8 May 2026)'] },
  ], { colW: 120 }),
};
