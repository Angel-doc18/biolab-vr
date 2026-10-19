// A Level Chemistry figures for the 2026/2027 Upper Sixth physical chemistry
// scheme: salt hydrolysis, a buffer tested against water and a weak acid
// titration curve (both calculated, drawn to scale), solubility products and
// precipitation, a labelled cell diagram, the Nernst equation as a straight
// line, E°cell with ΔG° and K, the copper electrolysis used to find the
// Faraday constant, an Arrhenius plot of real-looking class data and the
// physical chemistry formula matrix.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';
import { Beaker, CellSymbol, Meter, ResistorSymbol, Wire } from './kit';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const line = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

// pH axis shared by the buffer bars and the titration curve: 0 to 14.
const PY = (ph) => 190 - ph * 12;

function PhAxis({ x }) {
  return (
    <G>
      <Line x1={x} y1={PY(0)} x2={x} y2={PY(14) - 4} stroke={O} strokeWidth={1.2} />
      {[0, 2, 4, 6, 8, 10, 12, 14].map((p) => (
        <G key={p}>
          <Line x1={x - 4} y1={PY(p)} x2={x} y2={PY(p)} stroke={O} strokeWidth={1} />
          <Txt x={x - 7} y={PY(p) + 3} size={8.5} anchor="end">
            {p}
          </Txt>
        </G>
      ))}
      <Txt x={x - 26} y={PY(7)} size={9} weight="700" rotate={-90}>
        pH
      </Txt>
    </G>
  );
}

// ---------- a buffer against water ----------
// 50 cm³ of pure water, and 50 cm³ of buffer that is 0.050 mol dm⁻³ in both
// ethanoic acid and sodium ethanoate (pKa 4.76); 1 cm³ of 0.10 mol dm⁻³ HCl
// or NaOH added to each. The pH values are calculated, not invented.
const BUFFER = [
  { name: 'start', sub: '50 cm³ sample', water: 7.0, buffer: 4.76 },
  { name: '+ HCl', sub: '1 cm³ of 0.10 M', water: 2.71, buffer: 4.73 },
  { name: '+ NaOH', sub: '1 cm³ of 0.10 M', water: 11.29, buffer: 4.79 },
];

function BufferArt() {
  return (
    <G>
      <PhAxis x={44} />
      <Line x1={44} y1={PY(0)} x2={326} y2={PY(0)} stroke={O} strokeWidth={1.2} />
      {BUFFER.map((g, i) => {
        const cx = 96 + i * 92;
        return (
          <G key={g.name}>
            <Rect x={cx - 30} y={PY(g.water)} width={26} height={PY(0) - PY(g.water)} fill="#9ec3e6" stroke={O} strokeWidth={0.8} />
            <Rect x={cx + 4} y={PY(g.buffer)} width={26} height={PY(0) - PY(g.buffer)} fill="#a5d6a7" stroke={O} strokeWidth={0.8} />
            <Txt x={cx - 17} y={PY(g.water) - 4} size={8.5} weight="700" fill={BLUE}>
              {g.water.toFixed(2)}
            </Txt>
            <Txt x={cx + 17} y={PY(g.buffer) - 4} size={8.5} weight="700" fill={GREEN}>
              {g.buffer.toFixed(2)}
            </Txt>
            <Txt x={cx} y={204} size={9} weight="700">
              {g.name}
            </Txt>
            <Txt x={cx} y={215} size={8}>
              {g.sub}
            </Txt>
          </G>
        );
      })}
      <Rect x={132} y={14} width={10} height={10} fill="#9ec3e6" stroke={O} strokeWidth={0.8} />
      <Txt x={147} y={23} size={8.5} anchor="start">
        pure water
      </Txt>
      <Rect x={132} y={30} width={10} height={10} fill="#a5d6a7" stroke={O} strokeWidth={0.8} />
      <Txt x={147} y={39} size={8.5} anchor="start">
        ethanoate buffer
      </Txt>
    </G>
  );
}

// ---------- weak acid with strong base, calculated ----------
// 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid (Ka 1.74 × 10⁻⁵) with 0.100 mol dm⁻³
// NaOH. [H⁺] comes from the charge balance [H⁺] + [Na⁺] = [OH⁻] + [A⁻],
// solved by bisection on log[H⁺].
const KA = 1.74e-5;
const KW = 1.0e-14;
function phAfter(v) {
  const ca = (0.1 * 25) / (25 + v);
  const na = (0.1 * v) / (25 + v);
  let lo = -14;
  let hi = 0;
  for (let i = 0; i < 60; i += 1) {
    const m = (lo + hi) / 2;
    const h = 10 ** m;
    const f = h + na - KW / h - (ca * KA) / (KA + h);
    if (f > 0) hi = m;
    else lo = m;
  }
  return -(lo + hi) / 2;
}
const VX = (v) => 44 + v * 5.6;
const VOLS = [];
for (let v = 0; v <= 50.0001; v += v < 23 || v > 27 ? 0.5 : 0.05) VOLS.push(v);
const CURVE = line(VOLS.map((v) => [VX(v), PY(phAfter(v))]));

function TitrationArt() {
  const half = phAfter(12.5);
  const eq = phAfter(25);
  return (
    <G>
      <Rect x={VX(0)} y={PY(10)} width={VX(50) - VX(0)} height={PY(8.3) - PY(10)} fill="#f8d7e8" />
      <Rect x={VX(0)} y={PY(4.4)} width={VX(50) - VX(0)} height={PY(3.1) - PY(4.4)} fill="#fbe3c8" />
      <Txt x={VX(50) - 4} y={PY(9.15) + 3} size={8} anchor="end" fill="#a3326b">
        phenolphthalein 8.3 to 10.0
      </Txt>
      <Txt x={VX(50) - 4} y={PY(3.75) + 3} size={8} anchor="end" fill="#a35a1a">
        methyl orange 3.1 to 4.4
      </Txt>
      <PhAxis x={44} />
      <Line x1={VX(0)} y1={PY(0)} x2={VX(50) + 4} y2={PY(0)} stroke={O} strokeWidth={1.2} />
      {[0, 10, 20, 30, 40, 50].map((v) => (
        <G key={v}>
          <Line x1={VX(v)} y1={PY(0)} x2={VX(v)} y2={PY(0) + 4} stroke={O} strokeWidth={1} />
          <Txt x={VX(v)} y={PY(0) + 14} size={8.5}>
            {v}
          </Txt>
        </G>
      ))}
      <Txt x={VX(25)} y={PY(0) + 27} size={9} weight="700">
        Volume of NaOH added / cm³
      </Txt>
      {/* half-neutralisation and equivalence */}
      <Line x1={VX(0)} y1={PY(half)} x2={VX(12.5)} y2={PY(half)} stroke={GREY} strokeWidth={0.9} strokeDasharray="3 3" />
      <Line x1={VX(12.5)} y1={PY(half)} x2={VX(12.5)} y2={PY(0)} stroke={GREY} strokeWidth={0.9} strokeDasharray="3 3" />
      <Line x1={VX(25)} y1={PY(eq)} x2={VX(25)} y2={PY(0)} stroke={GREY} strokeWidth={0.9} strokeDasharray="3 3" />
      <Path d={CURVE} stroke={BLUE} strokeWidth={2.2} fill="none" />
      <Circle cx={VX(12.5)} cy={PY(half)} r={3} fill={RED} />
      <Circle cx={VX(25)} cy={PY(eq)} r={3} fill={RED} />
      <Txt x={VX(12.5)} y={PY(half) - 22} size={8.5} weight="700" fill={RED}>
        pH = pKa = 4.76
      </Txt>
      <Txt x={VX(12.5)} y={PY(half) - 11} size={8} fill={GREY}>
        buffer region
      </Txt>
      <Txt x={VX(25) + 6} y={PY(eq) + 16} size={8.5} weight="700" anchor="start" fill={RED}>
        equivalence point
      </Txt>
      <Txt x={VX(25) + 6} y={PY(eq) + 27} size={8.5} anchor="start" fill={RED}>
        25.0 cm³, pH 8.73
      </Txt>
    </G>
  );
}

// ---------- a cell diagram, labelled ----------
const PARTS = [
  ['Zn(s)', 40],
  ['|', 72],
  ['Zn²⁺(aq)', 112],
  ['||', 160],
  ['Cu²⁺(aq)', 208],
  ['|', 248],
  ['Cu(s)', 282],
];

function CellDiagramArt() {
  return (
    <G>
      {PARTS.map(([t, x]) => (
        <Txt key={`${t}${x}`} x={x} y={70} size={13} weight="700">
          {t}
        </Txt>
      ))}
      <Path d="M22 82 L22 88 L141 88 L141 82" fill="none" stroke={BLUE} strokeWidth={1.2} />
      <Path d="M179 82 L179 88 L300 88 L300 82" fill="none" stroke={RED} strokeWidth={1.2} />
      <Txt x={81} y={102} size={9} weight="700" fill={BLUE}>
        oxidation half-cell
      </Txt>
      <Txt x={81} y={114} size={8.5} fill={BLUE}>
        negative electrode, on the left
      </Txt>
      <Txt x={240} y={102} size={9} weight="700" fill={RED}>
        reduction half-cell
      </Txt>
      <Txt x={240} y={114} size={8.5} fill={RED}>
        positive electrode, on the right
      </Txt>
      <Txt x={161} y={140} size={10} weight="700">
        E°cell = E°(right) − E°(left) = 0.34 − (−0.76) = +1.10 V
      </Txt>
      <Txt x={161} y={160} size={8.5} fill={GREY}>
        Standard hydrogen electrode: Pt(s) | H₂(g) | H⁺(aq)
      </Txt>
      <Txt x={161} y={174} size={8.5} fill={GREY}>
        Ions in one solution share a platinum electrode: Pt(s) | Fe²⁺(aq), Fe³⁺(aq)
      </Txt>
    </G>
  );
}

// ---------- the Nernst equation for Cu²⁺/Cu ----------
const NX = (l) => 64 + (l + 4) * 58;
const NY = (e) => 180 - (e - 0.2) * 1000;
const nernst = (l) => 0.34 + (0.059 / 2) * l;

function NernstArt() {
  return (
    <G>
      <Line x1={NX(-4) - 10} y1={NY(0.2)} x2={NX(0) + 10} y2={NY(0.2)} stroke={O} strokeWidth={1.2} />
      <Line x1={NX(-4) - 10} y1={NY(0.2)} x2={NX(-4) - 10} y2={NY(0.36) - 6} stroke={O} strokeWidth={1.2} />
      {[0.2, 0.24, 0.28, 0.32, 0.36].map((e) => (
        <G key={e}>
          <Line x1={NX(-4) - 14} y1={NY(e)} x2={NX(-4) - 10} y2={NY(e)} stroke={O} strokeWidth={1} />
          <Txt x={NX(-4) - 17} y={NY(e) + 3} size={8.5} anchor="end">
            {e.toFixed(2)}
          </Txt>
        </G>
      ))}
      {[-4, -3, -2, -1, 0].map((l) => (
        <G key={l}>
          <Line x1={NX(l)} y1={NY(0.2)} x2={NX(l)} y2={NY(0.2) + 4} stroke={O} strokeWidth={1} />
          <Txt x={NX(l)} y={NY(0.2) + 14} size={8.5}>
            {l === 0 ? '0' : `−${-l}`}
          </Txt>
          <Txt x={NX(l)} y={NY(0.2) + 25} size={7.5} fill={GREY}>
            {['0.0001', '0.001', '0.01', '0.1', '1'][l + 4]}
          </Txt>
        </G>
      ))}
      <Txt x={NX(-2)} y={NY(0.2) + 38} size={9} weight="700">
        log[Cu²⁺] (grey: [Cu²⁺] in mol dm⁻³)
      </Txt>
      <Txt x={14} y={NY(0.28)} size={9} weight="700" rotate={-90}>
        E(Cu²⁺/Cu) / V
      </Txt>
      <Path d={line([[NX(-4), NY(nernst(-4))], [NX(0), NY(nernst(0))]])} stroke={BLUE} strokeWidth={2} fill="none" />
      {[-4, -3, -2, -1, 0].map((l) => (
        <Circle key={`p${l}`} cx={NX(l)} cy={NY(nernst(l))} r={3} fill={RED} />
      ))}
      <Txt x={NX(0) - 4} y={NY(0.34) - 9} size={8.5} weight="700" anchor="end" fill={RED}>
        E° = +0.34 V at 1.0 mol dm⁻³
      </Txt>
      <Txt x={NX(-2.6)} y={NY(0.33)} size={8.5} fill={BLUE}>
        gradient = 0.059 ÷ 2 = 0.0295 V
      </Txt>
      <Txt x={NX(-2.6)} y={NY(0.33) + 12} size={8.5} fill={BLUE}>
        E = 0.34 + 0.0295 log[Cu²⁺]
      </Txt>
    </G>
  );
}

// ---------- electrolysis of copper(II) sulfate to find F ----------
function ElectrolysisArt() {
  const copper = '#c8763a';
  return (
    <G>
      <Beaker x={104} y={104} w={132} h={92} fill="#9cc8ec" level={0.74} />
      <Rect x={128} y={86} width={9} height={96} fill={copper} stroke={O} strokeWidth={0.8} />
      <Rect x={203} y={86} width={9} height={96} fill={copper} stroke={O} strokeWidth={0.8} />
      <Wire d="M132.5 86 L132.5 40 L163 40" />
      <CellSymbol x={166} y={40} />
      <Wire d="M169 40 L206 40" />
      <Meter x={217} y={40} letter="A" />
      <Wire d="M228 40 L252 40" />
      <ResistorSymbol x={267} y={40} />
      <Line x1={254} y1={52} x2={282} y2={28} stroke={O} strokeWidth={1.1} />
      <Head x={282} y={28} dx={28} dy={-24} size={5} />
      <Wire d="M282 40 L306 40 L306 66 L207.5 66 L207.5 86" />
      <Txt x={157} y={32} size={9} weight="700">
        +
      </Txt>
      <Txt x={176} y={32} size={9} weight="700">
        −
      </Txt>
      <Txt x={121} y={84} size={10} weight="700" fill={RED}>
        +
      </Txt>
      <Txt x={220} y={84} size={10} weight="700" fill={BLUE}>
        −
      </Txt>
    </G>
  );
}

// ---------- Arrhenius plot of class data ----------
// Sodium thiosulfate with HCl: time for the cross to disappear at five
// temperatures. ln(1/t) against 1/T; best-fit gradient −5.07 × 10³ K.
const ARR = [
  [293, 80],
  [303, 45],
  [313, 27],
  [323, 16],
  [333, 10],
];
const AX = (u) => 56 + (u - 2.95) * 520;
const AY = (v) => 30 + (-2.0 - v) * 58;
const FIT = (u) => 12.915 - 5.0688 * u;

function ArrheniusArt() {
  return (
    <G>
      <Line x1={AX(2.95)} y1={AY(-4.6)} x2={AX(3.45) + 4} y2={AY(-4.6)} stroke={O} strokeWidth={1.2} />
      <Line x1={AX(2.95)} y1={AY(-4.6)} x2={AX(2.95)} y2={AY(-2.0) - 6} stroke={O} strokeWidth={1.2} />
      {[3.0, 3.1, 3.2, 3.3, 3.4].map((u) => (
        <G key={u}>
          <Line x1={AX(u)} y1={AY(-4.6)} x2={AX(u)} y2={AY(-4.6) + 4} stroke={O} strokeWidth={1} />
          <Txt x={AX(u)} y={AY(-4.6) + 14} size={8.5}>
            {u.toFixed(1)}
          </Txt>
        </G>
      ))}
      {[-4.5, -4.0, -3.5, -3.0, -2.5, -2.0].map((v) => (
        <G key={v}>
          <Line x1={AX(2.95) - 4} y1={AY(v)} x2={AX(2.95)} y2={AY(v)} stroke={O} strokeWidth={1} />
          <Txt x={AX(2.95) - 7} y={AY(v) + 3} size={8.5} anchor="end">
            {`−${(-v).toFixed(1)}`}
          </Txt>
        </G>
      ))}
      <Txt x={AX(3.2)} y={AY(-4.6) + 28} size={9} weight="700">
        (1/T) / 10⁻³ K⁻¹
      </Txt>
      <Txt x={14} y={AY(-3.3)} size={9} weight="700" rotate={-90}>
        ln(1/t), t in s
      </Txt>
      {/* the gradient triangle */}
      <Path d={line([[AX(3.0), AY(FIT(3.0))], [AX(3.4), AY(FIT(3.0))], [AX(3.4), AY(FIT(3.4))]])} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" fill="none" />
      <Path d={line([[AX(2.97), AY(FIT(2.97))], [AX(3.43), AY(FIT(3.43))]])} stroke={BLUE} strokeWidth={2} fill="none" />
      {ARR.map(([T, t]) => (
        <G key={T}>
          <Line x1={AX(1000 / T) - 4} y1={AY(Math.log(1 / t)) - 4} x2={AX(1000 / T) + 4} y2={AY(Math.log(1 / t)) + 4} stroke={RED} strokeWidth={1.6} />
          <Line x1={AX(1000 / T) - 4} y1={AY(Math.log(1 / t)) + 4} x2={AX(1000 / T) + 4} y2={AY(Math.log(1 / t)) - 4} stroke={RED} strokeWidth={1.6} />
        </G>
      ))}
      <Txt x={AX(3.2)} y={AY(FIT(3.0)) - 6} size={8.5} fill={GREY}>
        Δ(1/T) = 0.40 × 10⁻³ K⁻¹
      </Txt>
      <Txt x={AX(3.4) - 5} y={AY((FIT(3.0) + FIT(3.4)) / 2)} size={8.5} anchor="end" fill={GREY}>
        Δ = −2.03
      </Txt>
      <Txt x={AX(2.98)} y={AY(-4.15)} size={8.5} weight="700" anchor="start" fill={BLUE}>
        gradient = −5.07 × 10³ K
      </Txt>
      <Txt x={AX(2.98)} y={AY(-4.15) + 12} size={8.5} weight="700" anchor="start" fill={BLUE}>
        Ea = 5.07 × 10³ × 8.31 ≈ 42 kJ mol⁻¹
      </Txt>
    </G>
  );
}

export const CHEMISTRY_U6 = {
  'ac-salt-hydrolysis': columnsSpec('Salt hydrolysis: the pH of salt solutions', [
    { head: 'Strong acid +\nstrong base', items: ['NaCl, KNO₃', 'no ion reacts', 'neutral, pH 7'] },
    { head: 'Weak acid +\nstrong base', items: ['CH₃COONa, Na₂CO₃', 'anion + H₂O → OH⁻', 'alkaline, pH > 7'] },
    { head: 'Strong acid +\nweak base', items: ['NH₄Cl, (NH₄)₂SO₄', 'NH₄⁺ → NH₃ + H⁺', 'acidic, pH < 7'] },
    { head: 'Weak acid +\nweak base', items: ['CH₃COONH₄', 'both ions react', 'pH set by Ka and Kb'] },
  ], { colW: 108 }),
  'ac-buffer-test': {
    title: 'A buffer against water: adding acid and alkali',
    w: 340,
    h: 222,
    art: BufferArt,
    labels: [],
    facts: [
      'The samples are 50 cm³ of pure water and 50 cm³ of a buffer that is 0.050 mol dm⁻³ in both ethanoic acid and sodium ethanoate (pKa 4.76).',
      'Adding 1 cm³ of 0.10 mol dm⁻³ HCl takes the water from pH 7.00 to 2.71, but the buffer only from 4.76 to 4.73.',
      'Adding 1 cm³ of 0.10 mol dm⁻³ NaOH takes the water to pH 11.29, but the buffer only to 4.79: the ethanoate and ethanoic acid remove the added H⁺ and OH⁻.',
    ],
  },
  'ac-weak-titration': {
    title: 'Ethanoic acid titrated with sodium hydroxide, calculated',
    w: 340,
    h: 222,
    art: TitrationArt,
    labels: [],
    facts: [
      'The curve is calculated for 25.0 cm³ of 0.100 mol dm⁻³ ethanoic acid (Ka 1.74 × 10⁻⁵ mol dm⁻³) titrated with 0.100 mol dm⁻³ NaOH.',
      'It starts at pH 2.88, rises slowly through the buffer region and passes pH 4.76 (= pKa) at half-neutralisation, 12.5 cm³.',
      'The steep section is centred on the equivalence point, 25.0 cm³ at pH 8.73. Phenolphthalein changes within it; methyl orange would change far too early.',
    ],
  },
  'ac-ksp-expressions': columnsSpec('Solubility products at 298 K', [
    { head: 'AgCl', items: ['AgCl ⇌ Ag⁺ + Cl⁻', 'Ksp = [Ag⁺][Cl⁻]', 'Ksp = s²', '1.8 × 10⁻¹⁰ mol² dm⁻⁶'] },
    { head: 'PbI₂', items: ['PbI₂ ⇌ Pb²⁺ + 2I⁻', 'Ksp = [Pb²⁺][I⁻]²', 'Ksp = 4s³', '7.1 × 10⁻⁹ mol³ dm⁻⁹'] },
    { head: 'Ca(OH)₂', items: ['Ca(OH)₂ ⇌ Ca²⁺ + 2OH⁻', 'Ksp = [Ca²⁺][OH⁻]²', 'Ksp = 4s³', 'found by titration'] },
  ], { colW: 132 }),
  'ac-precipitation': flowSpec('Will a precipitate form?', ['Find each ion\nconcentration\nafter mixing', 'Calculate the\nionic product (IP)\nlike Ksp', 'Compare IP\nwith Ksp', 'IP > Ksp:\na precipitate\nforms'], { perRow: 2, boxW: 118, boxH: 56, note: 'If IP is less than Ksp, no precipitate forms.' }),
  'ac-cell-diagram': {
    title: 'Reading a cell diagram',
    w: 322,
    h: 182,
    art: CellDiagramArt,
    labels: [
      ['Phase boundary', 72, 26, 72, 58],
      ['Salt bridge', 160, 26, 160, 58],
      ['Electrode', 282, 26, 282, 58],
    ],
    facts: [
      'Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s) is the Daniell cell. The oxidation half-cell, the negative electrode, is written on the left.',
      'A single line is a boundary between phases; the double line is the salt bridge.',
      'E°cell = E°(right) − E°(left) = 0.34 − (−0.76) = +1.10 V.',
    ],
  },
  'ac-nernst-plot': {
    title: 'The Nernst equation for Cu²⁺/Cu is a straight line',
    w: 330,
    h: 226,
    art: NernstArt,
    labels: [],
    facts: [
      'At 298 K, E = E° + (0.059 ÷ 2) log[Cu²⁺] = 0.34 + 0.0295 log[Cu²⁺].',
      'Each tenfold dilution of the Cu²⁺ lowers the electrode potential by 0.0295 V: from 0.34 V at 1.0 mol dm⁻³ to 0.22 V at 0.0001 mol dm⁻³.',
      'A class plot of cell e.m.f. against log[Cu²⁺] should give a straight line of gradient close to 0.030 V.',
    ],
  },
  'ac-ecell-dg-k': columnsSpec('E°cell, ΔG° and K tell the same story', [
    { head: 'E°cell positive', items: ['ΔG° negative', 'K greater than 1', 'feasible'] },
    { head: 'E°cell zero', items: ['ΔG° = 0', 'K = 1', 'at equilibrium'] },
    { head: 'E°cell negative', items: ['ΔG° positive', 'K less than 1', 'not feasible'] },
    { head: 'Links', items: ['ΔG° = −zFE°', 'ΔG° = −RT ln K', 'log K = zE° ÷ 0.059'] },
  ], { colW: 108 }),
  'ac-electrolysis-copper': {
    title: 'Finding the Faraday constant by electrolysing copper(II) sulfate',
    w: 330,
    h: 206,
    art: ElectrolysisArt,
    labels: [
      ['Copper anode\n(loses mass)', 40, 120, 128, 132],
      ['Copper cathode\n(gains mass)', 300, 120, 212, 132],
      ['Copper(II) sulfate\nsolution', 300, 178, 228, 178],
      ['Battery', 166, 12, 166, 28],
      ['Ammeter', 217, 12, 217, 29],
      ['Rheostat', 267, 12, 267, 34],
    ],
    facts: [
      'A steady current of about 0.2 A, kept constant with the rheostat and read on the ammeter, is passed for a measured time.',
      'At the cathode Cu²⁺ + 2e⁻ → Cu, so the cathode gains mass; at the anode Cu → Cu²⁺ + 2e⁻, so the anode loses about the same mass.',
      'From Q = It and the moles of copper deposited, F = Q ÷ (2 × moles of Cu); then L = F ÷ e.',
    ],
  },
  'ac-arrhenius-plot': {
    title: 'An Arrhenius plot from the thiosulfate experiment',
    w: 330,
    h: 226,
    art: ArrheniusArt,
    labels: [],
    facts: [
      'The cross disappeared after 80, 45, 27, 16 and 10 s at 293, 303, 313, 323 and 333 K; the rate is proportional to 1/t.',
      'A graph of ln(1/t) against 1/T is a straight line; its gradient, from a large triangle, is −2.03 ÷ 0.40 × 10⁻³ = −5.07 × 10³ K.',
      'Gradient = −Ea ÷ R, so Ea = 5.07 × 10³ × 8.31 J mol⁻¹, about 42 kJ mol⁻¹.',
    ],
  },
  'ac-formula-matrix': columnsSpec('Physical chemistry formula matrix', [
    { head: 'Acids and Ksp', items: ['pH = −log[H⁺]', 'Kw = [H⁺][OH⁻]', '[H⁺] = √(Ka × c)', 'pH = pKa + log([A⁻]/[HA])', 'AB: s = √Ksp', 'AB₂: s = ∛(Ksp/4)'] },
    { head: 'Electrochemistry', items: ['E°cell = E°(R) − E°(L)', 'E = E° + (0.059/z)', '× log([Ox]/[Red])', 'ΔG° = −zFE°', 'log K = zE°/0.059', 'Q = It; F = 96 500 C'] },
    { head: 'Kinetics, energetics', items: ['rate = k[A]ᵐ[B]ⁿ', 't½ = 0.693/k', 'ln k = ln A − Ea/RT', 'gradient = −Ea/R', 'ΔG = ΔH − TΔS', 'ΔG° = −RT ln K'] },
  ], { colW: 136 }),
};
