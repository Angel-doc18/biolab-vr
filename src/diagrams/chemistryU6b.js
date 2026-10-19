// A Level Chemistry figures for the 2026/2027 Upper Sixth organic chemistry
// scheme: substitution and elimination, C–X bond enthalpies to scale, alcohol
// tests, a pKa scale, the HCN addition mechanism, back-titration and ester
// preparation, routes between oxygen compounds, amine basicity to scale, a
// chromatogram with its Rf measurement, condensation polymers, a mass
// spectrum, infrared absorption ranges, the ¹H NMR spectrum of ethyl
// ethanoate, Grignard products and the order for reading spectra.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const PURPLE = '#7b3fa0';

// A box whose first line is bold; lines are given with "\n".
function Box({ x, y, w, h, text, fill = '#e6eef8', size = 8.5 }) {
  const lines = String(text).split('\n');
  const step = size * 1.3;
  const top = y + h / 2 - ((lines.length - 1) * step) / 2 + size * 0.35;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={O} strokeWidth={1.2} />
      {lines.map((t, i) => (
        <Txt key={i} x={x + w / 2} y={top + i * step} size={size} weight={i ? '500' : '700'}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3 }) {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2 - ((x2 - x1) / len) * 5} y2={y2 - ((y2 - y1) / len) * 5} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

function DoubleArrow({ x, y1, y2, c = GREY }) {
  return (
    <G>
      <Line x1={x} y1={y1 + 5} x2={x} y2={y2 - 5} stroke={c} strokeWidth={1.1} />
      <Head x={x} y={y1} dx={0} dy={-1} size={5} fill={c} />
      <Head x={x} y={y2} dx={0} dy={1} size={5} fill={c} />
    </G>
  );
}

function Curly({ x1, y1, cx, cy, x2, y2 }) {
  return (
    <G>
      <Path d={`M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`} stroke={RED} strokeWidth={1.2} fill="none" />
      <Head x={x2} y={y2} dx={x2 - cx} dy={y2 - cy} size={5} fill={RED} />
    </G>
  );
}

// ---------- C–X bond enthalpies, to scale ----------
const CX = [
  { bond: 'C–F', e: 467, fill: '#cfd6dd', note: 'no precipitate: the bond is too strong' },
  { bond: 'C–Cl', e: 346, fill: '#f4f4f4', note: 'white AgCl, slowest' },
  { bond: 'C–Br', e: 290, fill: '#f1e3b3', note: 'cream AgBr' },
  { bond: 'C–I', e: 228, fill: '#f0d24a', note: 'yellow AgI, fastest' },
];
const BX = (e) => 70 + e * 0.5;

function BondArt() {
  return (
    <G>
      {CX.map((b, i) => {
        const y = 22 + i * 42;
        return (
          <G key={b.bond}>
            <Txt x={62} y={y + 14} size={10} weight="700" anchor="end">
              {b.bond}
            </Txt>
            <Rect x={BX(0)} y={y} width={BX(b.e) - BX(0)} height={20} fill={b.fill} stroke={O} strokeWidth={1} />
            <Txt x={BX(b.e) + 4} y={y + 14} size={9} weight="700" anchor="start">
              {b.e}
            </Txt>
            <Txt x={BX(0) + 2} y={y + 32} size={8} anchor="start" fill={GREY}>
              {b.note}
            </Txt>
          </G>
        );
      })}
      <Line x1={BX(0)} y1={194} x2={BX(500)} y2={194} stroke={O} strokeWidth={1.2} />
      {[0, 100, 200, 300, 400, 500].map((e) => (
        <G key={e}>
          <Line x1={BX(e)} y1={194} x2={BX(e)} y2={198} stroke={O} strokeWidth={1} />
          <Txt x={BX(e)} y={208} size={8.5}>
            {e}
          </Txt>
        </G>
      ))}
      <Txt x={BX(250)} y={222} size={9} weight="700">
        Bond enthalpy / kJ mol⁻¹
      </Txt>
    </G>
  );
}

// ---------- pKa scale ----------
const PKA = [
  { name: 'trichloroethanoic acid', p: 0.65, c: RED },
  { name: 'chloroethanoic acid', p: 2.86, c: RED },
  { name: 'ethanoic acid', p: 4.76, c: RED },
  { name: 'carbonic acid', p: 6.35, c: GREY },
  { name: 'phenol', p: 10.0, c: BLUE },
  { name: 'ethanol (about)', p: 16, c: GREEN },
];
const KY = (p) => 20 + p * 11;

function AcidityArt() {
  return (
    <G>
      <Line x1={50} y1={KY(0)} x2={50} y2={KY(16)} stroke={O} strokeWidth={1.4} />
      {[0, 4, 8, 12, 16].map((p) => (
        <G key={p}>
          <Line x1={46} y1={KY(p)} x2={50} y2={KY(p)} stroke={O} strokeWidth={1} />
          <Txt x={43} y={KY(p) + 3} size={8.5} anchor="end">
            {p}
          </Txt>
        </G>
      ))}
      <Arrow x1={18} y1={KY(15)} x2={18} y2={KY(1)} c={RED} />
      <Txt x={10} y={KY(8)} size={8.5} weight="700" rotate={-90} fill={RED}>
        stronger acid
      </Txt>
      {PKA.map((a) => (
        <G key={a.name}>
          <Circle cx={50} cy={KY(a.p)} r={3.5} fill={a.c} />
          <Line x1={54} y1={KY(a.p)} x2={60} y2={KY(a.p)} stroke={a.c} strokeWidth={1} />
          <Txt x={63} y={KY(a.p) + 3} size={9} anchor="start" fill={a.c} weight="700">
            {`${a.name}  ${a.p}`}
          </Txt>
        </G>
      ))}
      <Txt x={130} y={KY(16) + 18} size={9} weight="700">
        pKa (smaller = stronger acid)
      </Txt>
    </G>
  );
}

// ---------- HCN adds to ethanal ----------
function HcnArt() {
  const bond = { stroke: O, strokeWidth: 1.4 };
  return (
    <G>
      {/* ethanal with the cyanide ion */}
      <Txt x={90} y={86} size={12} weight="700">C</Txt>
      <Txt x={90} y={44} size={12} weight="700">O</Txt>
      <Line x1={86.5} y1={50} x2={86.5} y2={74} {...bond} />
      <Line x1={93.5} y1={50} x2={93.5} y2={74} {...bond} />
      <Txt x={76} y={42} size={8} fill={RED}>δ−</Txt>
      <Txt x={104} y={74} size={8} fill={RED}>δ+</Txt>
      <Line x1={84} y1={89} x2={68} y2={103} {...bond} />
      <Txt x={58} y={114} size={10} weight="700">H₃C</Txt>
      <Line x1={96} y1={89} x2={112} y2={103} {...bond} />
      <Txt x={118} y={114} size={10} weight="700">H</Txt>
      <Txt x={30} y={86} size={11} weight="700">N≡C</Txt>
      <Circle cx={47} cy={79} r={1.3} fill={O} />
      <Circle cx={47} cy={85} r={1.3} fill={O} />
      <Txt x={44} y={73} size={10} weight="700">−</Txt>
      <Curly x1={50} y1={88} cx={66} cy={98} x2={82} y2={86} />
      <Curly x1={95} y1={62} cx={114} cy={56} x2={98} y2={41} />
      <Txt x={90} y={134} size={8.5} fill={GREY}>ethanal + cyanide ion</Txt>
      <Arrow x1={140} y1={82} x2={176} y2={82} />
      <Txt x={158} y={74} size={8} fill={GREY}>step 1</Txt>
      {/* the alkoxide ion */}
      <Txt x={240} y={86} size={12} weight="700">C</Txt>
      <Txt x={240} y={44} size={12} weight="700">O</Txt>
      <Txt x={250} y={37} size={11} weight="700" fill={RED}>−</Txt>
      <Line x1={240} y1={50} x2={240} y2={74} {...bond} />
      <Line x1={233} y1={82} x2={216} y2={82} {...bond} />
      <Txt x={204} y={86} size={11} weight="700">NC</Txt>
      <Line x1={234} y1={89} x2={218} y2={103} {...bond} />
      <Txt x={208} y={114} size={10} weight="700">H₃C</Txt>
      <Line x1={246} y1={89} x2={262} y2={103} {...bond} />
      <Txt x={268} y={114} size={10} weight="700">H</Txt>
      <Txt x={240} y={134} size={8.5} fill={GREY}>alkoxide ion</Txt>
      <Txt x={170} y={158} size={9.5} weight="700">
        Step 2: alkoxide ion + HCN → CH₃CH(OH)CN + CN⁻
      </Txt>
      <Txt x={170} y={173} size={8.5} fill={GREY}>
        2-hydroxypropanenitrile, formed as a racemic mixture
      </Txt>
    </G>
  );
}

// ---------- a map of routes, one reaction per row ----------
function routesSpec(title, rows) {
  const ry = (i) => 6 + i * 42;
  const art = () => (
    <G>
      {rows.map(([from, to, reagent, kind, fill], i) => (
        <G key={`${from}${to}`}>
          <Box x={4} y={ry(i)} w={96} h={30} text={from} fill={fill} size={9} />
          <Arrow x1={104} y1={ry(i) + 15} x2={248} y2={ry(i) + 15} />
          <Txt x={176} y={ry(i) + 10} size={8} weight="700">
            {reagent}
          </Txt>
          <Txt x={176} y={ry(i) + 27} size={7.5} italic fill={GREY}>
            {kind}
          </Txt>
          <Box x={252} y={ry(i)} w={96} h={30} text={to} fill="#ffffff" size={9} />
        </G>
      ))}
    </G>
  );
  return { title, w: 352, h: ry(rows.length - 1) + 36, art, labels: [], facts: rows.map(([from, to, reagent, kind]) => `${from} to ${to}: ${reagent}; ${kind}.`) };
}

// ---------- amine basicity, to scale ----------
const BASES = [
  { name: 'phenylamine', p: 4.6, why: 'lone pair delocalised into the ring', fill: '#f8d7d3' },
  { name: 'ammonia', p: 9.25, why: 'the reference', fill: '#e6eef8' },
  { name: 'ethylamine', p: 10.7, why: 'ethyl group releases electrons (+I)', fill: '#dff0d8' },
];
const AX = (p) => 104 + p * 18;

function BasicityArt() {
  return (
    <G>
      {BASES.map((b, i) => {
        const y = 18 + i * 50;
        return (
          <G key={b.name}>
            <Txt x={98} y={y + 14} size={9.5} weight="700" anchor="end">
              {b.name}
            </Txt>
            <Rect x={AX(0)} y={y} width={AX(b.p) - AX(0)} height={20} fill={b.fill} stroke={O} strokeWidth={1} />
            <Txt x={AX(b.p) + 4} y={y + 14} size={9} weight="700" anchor="start">
              {b.p}
            </Txt>
            <Txt x={AX(0) + 2} y={y + 32} size={8} anchor="start" fill={GREY}>
              {b.why}
            </Txt>
          </G>
        );
      })}
      <Line x1={AX(0)} y1={170} x2={AX(12)} y2={170} stroke={O} strokeWidth={1.2} />
      {[0, 2, 4, 6, 8, 10, 12].map((p) => (
        <G key={p}>
          <Line x1={AX(p)} y1={170} x2={AX(p)} y2={174} stroke={O} strokeWidth={1} />
          <Txt x={AX(p)} y={184} size={8.5}>
            {p}
          </Txt>
        </G>
      ))}
      <Txt x={AX(6)} y={198} size={9} weight="700">
        pKa of the conjugate acid (higher = stronger base)
      </Txt>
    </G>
  );
}

// ---------- a chromatogram and its Rf ----------
// Baseline at y 180, solvent front at y 40: 140 units = 8.0 cm.
const RFY = (rf) => 180 - rf * 140;

function ChromatogramArt() {
  const spot = (x, rf, key) => <Circle key={key} cx={x} cy={RFY(rf)} r={5} fill={PURPLE} opacity={0.85} />;
  return (
    <G>
      <Rect x={98} y={192} width={144} height={20} fill="#d6e9f7" />
      <Path d="M96 8 L96 214 L244 214 L244 8" fill="none" stroke={O} strokeWidth={1.4} />
      <Line x1={92} y1={8} x2={248} y2={8} stroke={O} strokeWidth={2.2} />
      <Rect x={120} y={22} width={100} height={186} fill="#fbfaf6" stroke={O} strokeWidth={1} />
      <Line x1={122} y1={180} x2={218} y2={180} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={122} y1={40} x2={218} y2={40} stroke={BLUE} strokeWidth={1} strokeDasharray="4 3" />
      {[145, 170, 195].map((x) => (
        <Circle key={`b${x}`} cx={x} cy={180} r={1.6} fill={GREY} />
      ))}
      {spot(145, 0.26, 'm1')}
      {spot(145, 0.45, 'm2')}
      {spot(170, 0.26, 'p')}
      {spot(195, 0.45, 'q')}
      <DoubleArrow x={110} y1={RFY(0.45)} y2={180} />
      <Txt x={104} y={(RFY(0.45) + 180) / 2} size={8.5} weight="700" rotate={-90}>
        3.6 cm
      </Txt>
      <DoubleArrow x={230} y1={40} y2={180} />
      <Txt x={238} y={110} size={8.5} weight="700" rotate={-90}>
        8.0 cm
      </Txt>
      {[['M', 145], ['P', 170], ['Q', 195]].map(([t, x]) => (
        <Txt key={t} x={x} y={228} size={9.5} weight="700">
          {t}
        </Txt>
      ))}
      <Txt x={170} y={242} size={8.5} fill={GREY}>
        M: the mixture; P and Q: known amino acids
      </Txt>
      <Txt x={170} y={257} size={9.5} weight="700">
        Rf of Q = 3.6 ÷ 8.0 = 0.45
      </Txt>
    </G>
  );
}

// ---------- mass spectrum of propanone (simplified) ----------
const MS = [
  [15, 23],
  [27, 6],
  [42, 8],
  [43, 100],
  [58, 63],
  [59, 2],
];
const MX = (m) => 46 + (m - 10) * 5;
const MY = (a) => 176 - a * 1.4;

function MassArt() {
  return (
    <G>
      <Line x1={MX(10)} y1={MY(0)} x2={MX(65)} y2={MY(0)} stroke={O} strokeWidth={1.2} />
      <Line x1={MX(10)} y1={MY(0)} x2={MX(10)} y2={MY(100) - 6} stroke={O} strokeWidth={1.2} />
      {[10, 20, 30, 40, 50, 60].map((m) => (
        <G key={m}>
          <Line x1={MX(m)} y1={MY(0)} x2={MX(m)} y2={MY(0) + 4} stroke={O} strokeWidth={1} />
          <Txt x={MX(m)} y={MY(0) + 14} size={8.5}>
            {m}
          </Txt>
        </G>
      ))}
      {[0, 25, 50, 75, 100].map((a) => (
        <G key={`a${a}`}>
          <Line x1={MX(10) - 4} y1={MY(a)} x2={MX(10)} y2={MY(a)} stroke={O} strokeWidth={1} />
          <Txt x={MX(10) - 7} y={MY(a) + 3} size={8.5} anchor="end">
            {a}
          </Txt>
        </G>
      ))}
      {MS.map(([m, a]) => (
        <Line key={m} x1={MX(m)} y1={MY(0)} x2={MX(m)} y2={MY(a)} stroke={m === 43 ? RED : m === 58 ? BLUE : O} strokeWidth={2.4} />
      ))}
      <Txt x={MX(43)} y={MY(100) - 6} size={8.5} weight="700" fill={RED}>
        43: CH₃CO⁺, base peak
      </Txt>
      <Txt x={MX(58)} y={MY(63) - 6} size={8.5} weight="700" fill={BLUE}>
        58: M⁺
      </Txt>
      <Txt x={MX(15)} y={MY(23) - 6} size={8.5} weight="700">
        15: CH₃⁺
      </Txt>
      <Txt x={MX(59) + 5} y={MY(2) - 4} size={8} anchor="start" fill={GREY}>
        M+1
      </Txt>
      <Txt x={MX(37.5)} y={MY(0) + 28} size={9} weight="700">
        m/z
      </Txt>
      <Txt x={14} y={MY(50)} size={9} weight="700" rotate={-90}>
        Relative abundance / %
      </Txt>
    </G>
  );
}

// ---------- infrared absorption ranges ----------
const IX = (w) => 30 + (4000 - w) * 0.08;
const IR = [
  { name: 'O–H alcohol', from: 3600, to: 3200, row: 0, c: '#9ec3e6' },
  { name: 'C≡N', from: 2260, to: 2200, row: 0, c: '#c5b3e0' },
  { name: 'C=O', from: 1750, to: 1680, row: 0, c: '#f2a7a0' },
  { name: 'C–O', from: 1300, to: 1000, row: 0, c: '#b7dfb9' },
  { name: 'O–H acid', from: 3300, to: 2500, row: 1, c: '#7fb0de' },
  { name: 'C=C', from: 1680, to: 1620, row: 1, c: '#f3cf86' },
  { name: 'N–H', from: 3500, to: 3300, row: 2, c: '#a8d5d0' },
  { name: 'C–H', from: 3100, to: 2850, row: 2, c: '#d0d5da' },
];

function IrArt() {
  return (
    <G>
      <Rect x={IX(1500)} y={30} width={IX(500) - IX(1500)} height={108} fill="#eef0f3" />
      <Txt x={(IX(1500) + IX(500)) / 2} y={24} size={8.5} fill={GREY}>
        fingerprint region
      </Txt>
      {IR.map((b) => {
        const y = 50 + b.row * 32;
        const x = IX(b.from);
        const w = Math.max(4.5, IX(b.to) - x);
        return (
          <G key={b.name}>
            <Rect x={x} y={y} width={w} height={12} fill={b.c} stroke={O} strokeWidth={0.8} />
            <Txt x={x + w / 2} y={y - 4} size={8} weight="700">
              {b.name}
            </Txt>
          </G>
        );
      })}
      <Line x1={IX(4000)} y1={140} x2={IX(500)} y2={140} stroke={O} strokeWidth={1.2} />
      {[4000, 3500, 3000, 2500, 2000, 1500, 1000, 500].map((w) => (
        <G key={w}>
          <Line x1={IX(w)} y1={140} x2={IX(w)} y2={144} stroke={O} strokeWidth={1} />
          <Txt x={IX(w)} y={154} size={8}>
            {w}
          </Txt>
        </G>
      ))}
      <Txt x={IX(2250)} y={170} size={9} weight="700">
        Wavenumber / cm⁻¹
      </Txt>
    </G>
  );
}

// ---------- ¹H NMR of ethyl ethanoate ----------
const NX = (d) => 300 - d * 50;
const NB = 150;
// [centre δ, line heights]; lines are drawn 4 units apart for clarity.
const NMR = [
  [4.12, [7.5, 22.5, 22.5, 7.5], ['–O–CH₂–', 'quartet, 2H']],
  [2.04, [90], ['CH₃–CO–', 'singlet, 3H']],
  [1.26, [22.5, 45, 22.5], ['–CH₂–CH₃', 'triplet, 3H']],
];

function NmrArt() {
  return (
    <G>
      <Txt x={175} y={18} size={11} weight="700">
        CH₃–CO–O–CH₂–CH₃
      </Txt>
      <Line x1={40} y1={NB} x2={312} y2={NB} stroke={O} strokeWidth={1.2} />
      {[5, 4, 3, 2, 1, 0].map((d) => (
        <G key={d}>
          <Line x1={NX(d)} y1={NB} x2={NX(d)} y2={NB + 4} stroke={O} strokeWidth={1} />
          <Txt x={NX(d)} y={NB + 14} size={8.5}>
            {d}
          </Txt>
        </G>
      ))}
      {NMR.map(([d, hs, [what, mult]]) => {
        const x0 = NX(d) - ((hs.length - 1) * 4) / 2;
        const top = NB - Math.max(...hs);
        return (
          <G key={d}>
            {hs.map((h, i) => (
              <Line key={i} x1={x0 + i * 4} y1={NB} x2={x0 + i * 4} y2={NB - h} stroke={BLUE} strokeWidth={1.6} />
            ))}
            <Txt x={NX(d)} y={top - 18} size={8.5} weight="700">
              {what}
            </Txt>
            <Txt x={NX(d)} y={top - 6} size={8.5}>
              {mult}
            </Txt>
          </G>
        );
      })}
      <Line x1={NX(0)} y1={NB} x2={NX(0)} y2={NB - 40} stroke={GREY} strokeWidth={1.6} />
      <Txt x={NX(0)} y={NB - 46} size={8.5} fill={GREY}>
        TMS
      </Txt>
      <Txt x={NX(2.5)} y={NB + 30} size={9} weight="700">
        δ / ppm
      </Txt>
      <Txt x={NX(2.5)} y={NB + 44} size={8} fill={GREY}>
        peak heights show the 2 : 3 : 3 ratio; splitting drawn wider for clarity
      </Txt>
    </G>
  );
}

export const CHEMISTRY_U6B = {
  'ac-subst-elim': columnsSpec('Halogenoalkanes: substitution or elimination', [
    { head: 'SN2', items: ['one step', 'rate = k[RX][Nu⁻]', 'primary RX', 'aqueous, warm'] },
    { head: 'SN1', items: ['via a carbocation', 'rate = k[RX]', 'tertiary RX', 'polar solvent'] },
    { head: 'E2', items: ['one step', 'rate = k[RX][OH⁻]', 'strong base', 'ethanolic, hot'] },
    { head: 'E1', items: ['via a carbocation', 'rate = k[RX]', 'tertiary RX', 'hot: alkene forms'] },
  ], { colW: 104 }),
  'ac-cx-bonds': {
    title: 'C–X bond enthalpies and the rate of hydrolysis',
    w: 340,
    h: 230,
    art: BondArt,
    labels: [],
    facts: [
      'Bond enthalpies: C–F 467, C–Cl 346, C–Br 290 and C–I 228 kJ mol⁻¹, drawn to scale.',
      'The weaker the C–X bond, the faster the halogenoalkane is hydrolysed: iodo compounds react fastest and give a yellow AgI precipitate.',
      'Chloro compounds give white AgCl slowly; fluoro compounds hardly react, because the C–F bond is so strong.',
    ],
  },
  'ac-lucas': columnsSpec('Telling alcohols apart', [
    { head: 'Primary', items: ['propan-1-ol', 'Lucas: no cloudiness', 'dichromate: green', 'aldehyde, then acid'] },
    { head: 'Secondary', items: ['propan-2-ol', 'Lucas: cloudy in 5 min', 'dichromate: green', 'gives a ketone'] },
    { head: 'Tertiary', items: ['2-methylpropan-2-ol', 'Lucas: cloudy at once', 'dichromate: orange', 'not oxidised'] },
  ], { colW: 130 }),
  'ac-acidity-scale': {
    title: 'Acid strength: alcohols, phenol and carboxylic acids',
    w: 260,
    h: 222,
    art: AcidityArt,
    labels: [],
    facts: [
      'pKa values drawn to scale: trichloroethanoic acid 0.65, chloroethanoic acid 2.86, ethanoic acid 4.76, carbonic acid 6.35, phenol 10.0 and ethanol about 16.',
      'The smaller the pKa, the stronger the acid. Electron-withdrawing chlorine atoms strengthen the carboxylic acids.',
      'Phenol lies between carbonic acid and ethanol, so it reacts with NaOH but does not release CO₂ from carbonates.',
    ],
  },
  'ac-hcn-mechanism': {
    title: 'Nucleophilic addition of HCN to ethanal',
    w: 340,
    h: 180,
    art: HcnArt,
    labels: [],
    facts: [
      'Step 1: the lone pair of the cyanide ion attacks the δ+ carbonyl carbon, and the π electrons of C=O move onto the oxygen, giving an alkoxide ion.',
      'Step 2: the alkoxide ion takes H⁺ from HCN, giving 2-hydroxypropanenitrile and regenerating CN⁻.',
      'The flat C=O group is attacked equally from both sides, so the chiral product forms as a racemic mixture.',
    ],
  },
  'ac-back-titration': flowSpec('Purity of aspirin by back-titration', ['Weigh the\nimpure aspirin', 'Warm with a known\nexcess of standard\nNaOH', 'Titrate the NaOH\nleft over with\nstandard HCl', 'NaOH used = added\n− left over;\naspirin = used ÷ 2'], { perRow: 2, boxW: 132, boxH: 58 }),
  'ac-ester-prep': flowSpec('Preparing ethyl ethanoate', ['Reflux ethanoic\nacid, ethanol and\nconc. H₂SO₄', 'Distil off the\ncrude ester', 'Wash with Na₂CO₃,\nthen CaCl₂\nsolution', 'Dry (anhydrous\nCaCl₂); redistil\nat 74 to 79 °C'], { perRow: 2, boxW: 132, boxH: 58 }),
  'ac-oxygen-routes': routesSpec('Routes between oxygen compounds', [
    ['ethane', 'chloroethane', 'Cl₂, UV light', 'free-radical substitution', '#e6eef8'],
    ['chloroethane', 'ethanol', 'NaOH(aq), warm', 'nucleophilic substitution', '#efe6f7'],
    ['ethanol', 'ethanal', 'K₂Cr₂O₇, H⁺, distil', 'oxidation', '#e3f0da'],
    ['ethanol', 'ethanoic acid', 'K₂Cr₂O₇, H⁺, reflux', 'oxidation', '#e3f0da'],
    ['propan-2-ol', 'propanone', 'K₂Cr₂O₇, H⁺, warm', 'oxidation', '#e3f0da'],
    ['ethanoic acid', 'ethanoyl chloride', 'SOCl₂ or PCl₅', 'the –OH is replaced by –Cl', '#fbefd0'],
    ['ethanoic acid', 'ethyl ethanoate', 'ethanol, conc. H₂SO₄, reflux', 'esterification', '#fbefd0'],
    ['ethanoyl chloride', 'ethanamide', 'NH₃, room temperature', 'addition-elimination', '#f8e3df'],
  ]),
  'ac-basicity': {
    title: 'How strong are amines as bases?',
    w: 345,
    h: 206,
    art: BasicityArt,
    labels: [],
    facts: [
      'Drawn to scale, the pKa values of the conjugate acids are: phenylammonium 4.6, ammonium 9.25 and ethylammonium 10.7.',
      'A higher pKa of the conjugate acid means a stronger base, so ethylamine > ammonia > phenylamine.',
      'The ethyl group releases electrons towards the nitrogen; in phenylamine the lone pair is delocalised into the ring and less available.',
    ],
  },
  'ac-chromatogram': {
    title: 'A thin-layer chromatogram of amino acids',
    w: 340,
    h: 262,
    art: ChromatogramArt,
    labels: [
      ['Solvent front', 290, 30, 218, 40],
      ['Baseline (pencil)', 290, 168, 218, 180],
      ['Solvent', 290, 204, 240, 202],
    ],
    facts: [
      'The baseline is drawn in pencil above the solvent level; the tank is covered so that the air stays saturated with solvent.',
      'The mixture M separates into two spots, which match the known amino acids P and Q run on the same plate.',
      'Rf = distance moved by the spot ÷ distance moved by the solvent front; for Q, 3.6 cm ÷ 8.0 cm = 0.45.',
    ],
  },
  'ac-condensation-polymers': columnsSpec('Condensation polymers', [
    { head: 'Terylene', items: ['polyester', 'benzene-1,4-', 'dicarboxylic acid', '+ ethane-1,2-diol', 'fibres, bottles'] },
    { head: 'Nylon-6,6', items: ['polyamide', 'hexane-1,6-diamine', '+ hexanedioic acid', 'ropes, fabrics'] },
    { head: 'Kevlar', items: ['polyamide', 'benzene-1,4-diamine', '+ benzene-1,4-', 'dicarboxylic acid', 'protective vests'] },
    { head: 'Proteins', items: ['polyamide', 'amino acids', 'peptide links', 'enzymes, muscle'] },
  ], { colW: 106 }),
  'ac-mass-spectrum': {
    title: 'Mass spectrum of propanone (simplified)',
    w: 330,
    h: 210,
    art: MassArt,
    labels: [],
    facts: [
      'The molecular ion M⁺ at m/z 58 gives Mr = 58 for CH₃COCH₃.',
      'The base peak at m/z 43 is CH₃CO⁺, formed when a CH₃ group breaks off; the peak at 15 is CH₃⁺.',
      'The small M+1 peak at 59 comes from molecules containing one carbon-13 atom.',
    ],
  },
  'ac-ir-ranges': {
    title: 'Where bonds absorb in the infrared',
    w: 330,
    h: 176,
    art: IrArt,
    labels: [],
    facts: [
      'O–H in alcohols absorbs at 3200 to 3600 cm⁻¹ (broad); O–H in acids at 2500 to 3300 cm⁻¹ (very broad); N–H at 3300 to 3500; C–H at 2850 to 3100.',
      'C≡N absorbs at 2200 to 2260 cm⁻¹, C=O at 1680 to 1750 (strong, sharp), C=C at 1620 to 1680 and C–O at 1000 to 1300 cm⁻¹.',
      'Below about 1500 cm⁻¹ is the fingerprint region, unique to each compound.',
    ],
  },
  'ac-nmr-spectrum': {
    title: 'The ¹H NMR spectrum of ethyl ethanoate',
    w: 330,
    h: 206,
    art: NmrArt,
    labels: [],
    facts: [
      'The CH₃ next to C=O gives a singlet of 3H near δ 2.0: there are no protons on the neighbouring carbon.',
      'The OCH₂ gives a quartet of 2H near δ 4.1, split by the three protons of its CH₃ neighbour.',
      'The ethyl CH₃ gives a triplet of 3H near δ 1.3, split by the two CH₂ protons. TMS is the reference at δ 0.',
    ],
  },
  'ac-grignard': columnsSpec('Grignard reagent RMgBr + carbonyl, then dilute acid', [
    { head: 'Methanal', items: ['HCHO', 'primary alcohol', 'RCH₂OH'] },
    { head: 'Other aldehyde', items: ['R′CHO', 'secondary alcohol', 'RR′CHOH'] },
    { head: 'Ketone', items: ['R′COR″', 'tertiary alcohol', 'RR′R″COH'] },
    { head: 'Carbon dioxide', items: ['CO₂ (dry ice)', 'carboxylic acid', 'RCOOH'] },
  ], { colW: 104 }),
  'ac-spectra-route': flowSpec('Deducing a structure from spectra', ['Mass spectrum:\nMr from M⁺,\ncarbons from M+1', 'Infrared:\nfunctional groups', '¹³C NMR:\ncarbon\nenvironments', '¹H NMR: shifts,\nratios and\nsplitting', 'Propose a\nstructure; check\nevery peak'], { perRow: 3, boxW: 112, boxH: 58 }),
};
