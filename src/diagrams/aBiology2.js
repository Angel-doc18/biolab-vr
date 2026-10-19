// A Level Biology figures for Upper Sixth: replication (Meselson and Stahl),
// protein synthesis, the lac operon, mutations, karyotypes, gene cloning, a
// DNA gel, Punnett squares for dihybrid and sex-linked crosses, a linkage
// map, epistasis, chi-squared values, feedback, the nephron, ADH and blood
// glucose, the action potential to scale, the synapse, the sarcomere, plant
// growth substances, gametogenesis, development, evolution, Hardy-Weinberg,
// selection, the nitrogen cycle, sampling and conservation in Cameroon.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const line = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

// ---------- Meselson and Stahl ----------
const BAND_Y = { light: 70, intermediate: 100, heavy: 130 };
const TUBES = [
  { x: 120, bands: ['heavy'], label: ['Start', '(all ¹⁵N)'] },
  { x: 200, bands: ['intermediate'], label: ['After 1', 'division in ¹⁴N'] },
  { x: 280, bands: ['intermediate', 'light'], label: ['After 2', 'divisions in ¹⁴N'] },
];
function ReplicationArt() {
  return (
    <G>
      {Object.entries(BAND_Y).map(([name, y]) => (
        <G key={name}>
          <Line x1={62} y1={y} x2={306} y2={y} stroke={GREY} strokeWidth={0.6} strokeDasharray="2 3" />
          <Txt x={58} y={y + 3} size={8.5} anchor="end">
            {name}
          </Txt>
        </G>
      ))}
      {TUBES.map((t) => (
        <G key={t.x}>
          <Rect x={t.x - 20} y={30} width={40} height={130} rx={14} fill="#eef3f8" stroke={O} strokeWidth={1.2} />
          {t.bands.map((b) => (
            <Rect key={b} x={t.x - 16} y={BAND_Y[b] - 3} width={32} height={6} rx={2} fill={b === 'heavy' ? '#1d4f91' : b === 'light' ? '#7fb3e0' : '#4a7fbf'} />
          ))}
          <Txt x={t.x} y={176} size={8.5} weight="700">
            {t.label[0]}
          </Txt>
          <Txt x={t.x} y={188} size={8}>
            {t.label[1]}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- the lac operon ----------
const GENES = [
  ['I', 12, 44, '#d9dde2'],
  ['P', 66, 96, '#fbefd0'],
  ['O', 96, 122, '#f8e3df'],
  ['lacZ', 122, 196, '#e3f0da'],
  ['lacY', 196, 246, '#e3f0da'],
  ['lacA', 246, 290, '#e3f0da'],
];
function OperonRow({ y, on }) {
  return (
    <G>
      <Line x1={4} y1={y + 11} x2={300} y2={y + 11} stroke={O} strokeWidth={1.4} />
      {GENES.map(([name, a, b, fill]) => (
        <G key={name}>
          <Rect x={a} y={y} width={b - a} height={22} fill={fill} stroke={O} strokeWidth={1} />
          <Txt x={(a + b) / 2} y={y + 15} size={9} weight="700">
            {name}
          </Txt>
        </G>
      ))}
      {on ? (
        <G>
          <Ellipse cx={58} cy={y - 32} rx={13} ry={9} fill="#e8a39b" stroke={O} strokeWidth={0.9} />
          <Polygon points={`${66},${y - 40} ${76},${y - 44} ${74},${y - 34}`} fill="#f2c94c" stroke={O} strokeWidth={0.8} />
          <Ellipse cx={170} cy={y - 8} rx={14} ry={9} fill="#9ec3e6" stroke={O} strokeWidth={0.9} />
          <Line x1={186} y1={y - 8} x2={214} y2={y - 8} stroke={BLUE} strokeWidth={1.4} />
          <Head x={214} y={y - 8} dx={1} dy={0} size={5} fill={BLUE} />
          <Path d={`M124 ${y - 24} Q130 ${y - 30} 136 ${y - 24} T148 ${y - 24} T160 ${y - 24}`} stroke="#8e4fb3" strokeWidth={1.6} fill="none" />
          <Txt x={142} y={y - 33} size={8} fill="#8e4fb3" weight="700">
            mRNA
          </Txt>
        </G>
      ) : (
        <G>
          <Ellipse cx={81} cy={y - 8} rx={14} ry={9} fill="#9ec3e6" stroke={O} strokeWidth={0.9} />
          <Ellipse cx={109} cy={y - 8} rx={13} ry={9} fill="#e8a39b" stroke={O} strokeWidth={0.9} />
          <Txt x={210} y={y - 6} size={8.5} fill={RED} weight="700">
            no transcription
          </Txt>
        </G>
      )}
    </G>
  );
}
function OperonArt() {
  return (
    <G>
      <Txt x={8} y={14} size={9.5} weight="700" anchor="start">
        Lactose absent: genes off
      </Txt>
      <OperonRow y={40} />
      <Txt x={8} y={92} size={9.5} weight="700" anchor="start">
        Lactose present: genes on
      </Txt>
      <OperonRow y={140} on />
      {[['#9ec3e6', 'RNA polymerase', 10], ['#e8a39b', 'repressor', 120], ['#f2c94c', 'lactose', 210]].map(([fill, t, x]) => (
        <G key={t}>
          <Circle cx={x + 5} cy={184} r={5} fill={fill} stroke={O} strokeWidth={0.8} />
          <Txt x={x + 14} y={187} size={8.5} anchor="start">
            {t}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- dihybrid Punnett square ----------
const GAMETES = ['RY', 'Ry', 'rY', 'ry'];
const PHENO_FILL = { 'round yellow': '#fbefd0', 'round green': '#e3f0da', 'wrinkled yellow': '#f8e3df', 'wrinkled green': '#e6eef8' };
const phenotype = (g) => `${g.includes('R') ? 'round' : 'wrinkled'} ${g.includes('Y') ? 'yellow' : 'green'}`;
const genotype = (a, b) => {
  const r = [a[0], b[0]].sort().join('');
  const y = [a[1], b[1]].sort().join('');
  return r + y;
};
function DihybridArt() {
  const x0 = 70;
  const y0 = 50;
  const cw = 52;
  const ch = 38;
  return (
    <G>
      <Txt x={x0 - 8} y={y0 - 10} size={8} anchor="end" fill={GREY}>
        gametes
      </Txt>
      {GAMETES.map((g, i) => (
        <G key={g}>
          <Txt x={x0 + i * cw + cw / 2} y={y0 - 8} size={10} weight="700">
            {g}
          </Txt>
          <Txt x={x0 - 8} y={y0 + i * ch + ch / 2 + 4} size={10} weight="700" anchor="end">
            {g}
          </Txt>
        </G>
      ))}
      {GAMETES.map((row, r) =>
        GAMETES.map((col, c) => {
          const gt = genotype(row, col);
          return (
            <G key={`${r}${c}`}>
              <Rect x={x0 + c * cw} y={y0 + r * ch} width={cw} height={ch} fill={PHENO_FILL[phenotype(gt)]} stroke={O} strokeWidth={0.9} />
              <Txt x={x0 + c * cw + cw / 2} y={y0 + r * ch + ch / 2 + 4} size={9.5}>
                {gt}
              </Txt>
            </G>
          );
        }),
      )}
      {[['round yellow', 9, 30, 222], ['round green', 3, 160, 222], ['wrinkled yellow', 3, 30, 240], ['wrinkled green', 1, 160, 240]].map(([p, n, x, y]) => (
        <G key={p}>
          <Rect x={x} y={y - 9} width={12} height={10} fill={PHENO_FILL[p]} stroke={O} strokeWidth={0.8} />
          <Txt x={x + 17} y={y} size={8.5} anchor="start">
            {`${n} ${p}`}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- sex-linked Punnett square ----------
const XH = 'Xᴴ';
const Xh = 'Xʰ';
const SEX_CELLS = [
  [[`${XH}${XH}`, 'normal girl', false], [`${XH}Y`, 'normal boy', false]],
  [[`${XH}${Xh}`, 'carrier girl', false], [`${Xh}Y`, 'haemophilia boy', true]],
];
function SexLinkageArt() {
  const x0 = 96;
  const y0 = 56;
  const cw = 96;
  const ch = 46;
  return (
    <G>
      <Txt x={160} y={16} size={9.5} weight="700">
        {`Carrier mother ${XH}${Xh} × normal father ${XH}Y`}
      </Txt>
      {[XH, 'Y'].map((g, i) => (
        <Txt key={g} x={x0 + i * cw + cw / 2} y={y0 - 10} size={11} weight="700">
          {g}
        </Txt>
      ))}
      {[XH, Xh].map((g, i) => (
        <Txt key={g} x={x0 - 12} y={y0 + i * ch + ch / 2 + 4} size={11} weight="700" anchor="end">
          {g}
        </Txt>
      ))}
      <Txt x={x0 + cw} y={y0 - 26} size={8} fill={GREY}>
        father’s sperm
      </Txt>
      <Txt x={x0 - 12} y={y0 + ch * 2 + 16} size={8} anchor="end" fill={GREY}>
        mother’s eggs
      </Txt>
      {SEX_CELLS.map((row, r) =>
        row.map(([gt, ph, affected], c) => (
          <G key={`${r}${c}`}>
            <Rect x={x0 + c * cw} y={y0 + r * ch} width={cw} height={ch} fill={affected ? '#f8d7d3' : '#ffffff'} stroke={O} strokeWidth={0.9} />
            <Txt x={x0 + c * cw + cw / 2} y={y0 + r * ch + 19} size={10.5} weight="700">
              {gt}
            </Txt>
            <Txt x={x0 + c * cw + cw / 2} y={y0 + r * ch + 34} size={8.5} fill={affected ? RED : O}>
              {ph}
            </Txt>
          </G>
        )),
      )}
    </G>
  );
}

// ---------- the nephron (schematic) ----------
function NephronArt() {
  const tube = '#c98a5a';
  const wave = (x1, x2, y) => {
    let d = `M${x1} ${y}`;
    for (let x = x1; x < x2; x += 16) d += ` Q${x + 4} ${y - 7} ${x + 8} ${y} T${x + 16} ${y}`;
    return d;
  };
  return (
    <G>
      <Line x1={14} y1={104} x2={330} y2={104} stroke={GREY} strokeWidth={0.9} strokeDasharray="5 4" />
      <Txt x={334} y={98} size={8.5} anchor="end" fill={GREY}>
        Cortex
      </Txt>
      <Txt x={334} y={116} size={8.5} anchor="end" fill={GREY}>
        Medulla
      </Txt>
      <Line x1={50} y1={42} x2={68} y2={47} stroke={RED} strokeWidth={2} />
      <Line x1={68} y1={58} x2={50} y2={63} stroke={RED} strokeWidth={1.6} />
      <Circle cx={80} cy={52} r={16} fill="#f6efe8" stroke={tube} strokeWidth={3} />
      <Path d="M70 50 C74 40 84 42 82 50 C80 58 90 58 88 50 C86 44 76 60 72 56" stroke={RED} strokeWidth={1.8} fill="none" />
      <Path d={wave(96, 160, 52)} stroke={tube} strokeWidth={4} fill="none" />
      <Path d="M160 52 L160 172 Q170 190 180 172 L180 72" stroke={tube} strokeWidth={4} fill="none" />
      <Path d={wave(180, 244, 72)} stroke={tube} strokeWidth={4} fill="none" />
      <Line x1={244} y1={72} x2={260} y2={72} stroke={tube} strokeWidth={4} />
      <Line x1={260} y1={30} x2={260} y2={196} stroke={tube} strokeWidth={5} />
      <Head x={260} y={200} dx={0} dy={1} size={6} fill={tube} />
    </G>
  );
}

// ---------- the action potential, to scale ----------
const AX = (t) => 50 + t * 60;
const AY = (v) => 190 - (v + 90) * 1.2;
const AP = [[0, -70], [0.8, -70], [0.95, -62], [1.05, -55], [1.2, -20], [1.35, 20], [1.5, 40], [1.62, 25], [1.8, -20], [2.0, -60], [2.2, -78], [2.4, -80], [2.8, -75], [3.3, -71], [4, -70]];
const AP_MARKS = [
  { n: 1, t: 1.22, v: 0, dx: -12 },
  { n: 2, t: 1.78, v: 0, dx: 12 },
  { n: 3, t: 2.4, v: -80, dx: 0, dy: -12 },
  { n: 4, t: 3.4, v: -70, dx: 0, dy: 12 },
];
function ActionPotentialArt() {
  return (
    <G>
      <Line x1={50} y1={190} x2={294} y2={190} stroke={O} strokeWidth={1.2} />
      <Line x1={50} y1={190} x2={50} y2={18} stroke={O} strokeWidth={1.2} />
      {[-80, -40, 0, 40].map((v) => (
        <G key={v}>
          <Line x1={46} y1={AY(v)} x2={50} y2={AY(v)} stroke={O} strokeWidth={1} />
          <Txt x={43} y={AY(v) + 3} size={8.5} anchor="end">
            {v > 0 ? `+${v}` : v}
          </Txt>
        </G>
      ))}
      {[0, 1, 2, 3, 4].map((t) => (
        <G key={t}>
          <Line x1={AX(t)} y1={190} x2={AX(t)} y2={194} stroke={O} strokeWidth={1} />
          <Txt x={AX(t)} y={204} size={8.5}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={172} y={218} size={9} weight="700">
        Time / ms
      </Txt>
      <Txt x={14} y={104} size={9} weight="700" rotate={-90}>
        Membrane potential / mV
      </Txt>
      <Line x1={50} y1={AY(-55)} x2={294} y2={AY(-55)} stroke={GREY} strokeWidth={0.9} strokeDasharray="4 3" />
      <Line x1={50} y1={AY(0)} x2={294} y2={AY(0)} stroke={GREY} strokeWidth={0.5} strokeDasharray="2 3" />
      <Txt x={294} y={AY(-55) - 4} size={8} anchor="end" fill={GREY}>
        threshold −55
      </Txt>
      <Path d={line(AP.map(([t, v]) => [AX(t), AY(v)]))} stroke={BLUE} strokeWidth={2.2} fill="none" />
      {AP_MARKS.map((m) => (
        <G key={m.n}>
          <Circle cx={AX(m.t) + m.dx} cy={AY(m.v) + (m.dy || 0)} r={6} fill="#ffffff" stroke={O} strokeWidth={1} />
          <Txt x={AX(m.t) + m.dx} y={AY(m.v) + (m.dy || 0) + 3} size={7.5} weight="700">
            {m.n}
          </Txt>
        </G>
      ))}
      {[['1 Depolarisation: Na⁺ in', 20, 236], ['2 Repolarisation: K⁺ out', 176, 236], ['3 Hyperpolarisation', 20, 250], ['4 Resting potential, −70', 176, 250]].map(([t, x, y]) => (
        <Txt key={t} x={x} y={y} size={8.5} anchor="start">
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- the sarcomere, relaxed and contracted ----------
function Sarcomere({ y, z1, z2 }) {
  const mid = 160;
  const actinL = Math.min(z1 + 110, mid);
  const actinR = Math.max(z2 - 110, mid);
  return (
    <G>
      {[y - 16, y, y + 16].map((yy) => (
        <G key={yy}>
          <Line x1={z1} y1={yy} x2={actinL} y2={yy} stroke={GREEN} strokeWidth={2} />
          <Line x1={actinR} y1={yy} x2={z2} y2={yy} stroke={GREEN} strokeWidth={2} />
        </G>
      ))}
      {[y - 8, y + 8].map((yy) => (
        <G key={yy}>
          <Line x1={90} y1={yy} x2={230} y2={yy} stroke={RED} strokeWidth={5} />
          {[96, 106, 116, 126, 136, 184, 194, 204, 214, 224].map((x) => (
            <Line key={x} x1={x} y1={yy} x2={x + (x < mid ? -3 : 3)} y2={yy + (yy < y ? -5 : 5)} stroke={RED} strokeWidth={1.2} />
          ))}
        </G>
      ))}
      <Line x1={z1} y1={y - 26} x2={z1} y2={y + 26} stroke={O} strokeWidth={3} />
      <Line x1={z2} y1={y - 26} x2={z2} y2={y + 26} stroke={O} strokeWidth={3} />
      <Line x1={mid} y1={y - 22} x2={mid} y2={y + 22} stroke={GREY} strokeWidth={0.8} strokeDasharray="2 2" />
    </G>
  );
}
function Bracket({ x1, x2, y, up, text }) {
  const t = up ? -6 : 6;
  return (
    <G>
      <Path d={`M${x1} ${y + t} L${x1} ${y} L${x2} ${y} L${x2} ${y + t}`} stroke={O} strokeWidth={1} fill="none" />
      <Txt x={(x1 + x2) / 2} y={up ? y - 4 : y + 12} size={8.5} weight="700">
        {text}
      </Txt>
    </G>
  );
}
function SarcomereArt() {
  return (
    <G>
      <Txt x={8} y={12} size={9.5} weight="700" anchor="start">
        Relaxed
      </Txt>
      <Bracket x1={90} x2={230} y={20} up text="A band" />
      <Sarcomere y={50} z1={20} z2={300} />
      <Bracket x1={20} x2={90} y={82} text="I band" />
      <Bracket x1={130} x2={190} y={82} text="H zone" />
      <Txt x={300} y={94} size={8.5} weight="700">
        Z line
      </Txt>
      <Txt x={8} y={118} size={9.5} weight="700" anchor="start">
        Contracted
      </Txt>
      <Bracket x1={90} x2={230} y={126} up text="A band: same" />
      <Sarcomere y={156} z1={50} z2={270} />
      <Bracket x1={50} x2={90} y={188} text="I band: shorter" />
      <Txt x={160} y={200} size={8.5} weight="700">
        no H zone
      </Txt>
    </G>
  );
}

// ---------- a DNA gel ----------
const LOG = (s) => Math.log(s);
const GY = (kb) => 190 - ((LOG(kb) - LOG(2)) / (LOG(14) - LOG(2))) * 128;
const LANES = [
  { name: 'Ladder', bands: [2, 4, 6, 8, 10, 12, 14] },
  { name: 'Mother', bands: [6, 11] },
  { name: 'Child', bands: [6, 9, 14] },
  { name: 'Man A', bands: [9, 14] },
  { name: 'Man B', bands: [8, 14] },
];
function GelArt() {
  return (
    <G>
      <Rect x={44} y={34} width={256} height={170} rx={4} fill="#eaf1f7" stroke={O} strokeWidth={1.2} />
      {LANES.map((lane, i) => {
        const cx = 74 + i * 50;
        return (
          <G key={lane.name}>
            <Txt x={cx} y={26} size={8.5} weight="700">
              {lane.name}
            </Txt>
            <Rect x={cx - 15} y={40} width={30} height={6} fill="#ffffff" stroke={O} strokeWidth={0.8} />
            {lane.bands.map((kb) => (
              <Rect key={kb} x={cx - 15} y={GY(kb) - 2.5} width={30} height={5} rx={1} fill={i === 0 ? '#5f6f7d' : '#2e6fb2'} />
            ))}
          </G>
        );
      })}
      {[2, 6, 10, 14].map((kb) => (
        <Txt key={kb} x={40} y={GY(kb) + 3} size={8} anchor="end">
          {`${kb} kb`}
        </Txt>
      ))}
      <Txt x={316} y={48} size={13} weight="700">
        −
      </Txt>
      <Txt x={316} y={202} size={13} weight="700">
        +
      </Txt>
      <Line x1={316} y1={64} x2={316} y2={180} stroke={RED} strokeWidth={1.4} />
      <Head x={316} y={180} dx={0} dy={1} size={6} fill={RED} />
    </G>
  );
}

// ---------- a linkage map ----------
const MX = (u) => 40 + u * 20;
function LinkageMapArt() {
  return (
    <G>
      <Rect x={30} y={44} width={260} height={16} rx={8} fill="#e6eef8" stroke={O} strokeWidth={1.2} />
      {[['A', 0], ['B', 8], ['C', 11]].map(([g, u]) => (
        <G key={g}>
          <Line x1={MX(u)} y1={40} x2={MX(u)} y2={64} stroke={RED} strokeWidth={2.5} />
          <Txt x={MX(u)} y={32} size={12} weight="700">
            {g}
          </Txt>
        </G>
      ))}
      <Bracket x1={MX(0)} x2={MX(8)} y={76} text="8 map units" />
      <Bracket x1={MX(8)} x2={MX(11)} y={76} text="3" />
      <Bracket x1={MX(0)} x2={MX(11)} y={100} text="A to C: 11 map units (8 + 3)" />
    </G>
  );
}

// ---------- three kinds of selection ----------
function SelectionArt() {
  const gauss = (left, mu, sd, h, two) => {
    const pts = [];
    for (let x = -3; x <= 3.001; x += 0.1) {
      const g = (m) => Math.exp(-((x - m) ** 2) / (2 * sd * sd));
      const v = two ? (g(-1.4) + g(1.4)) / 1.0 : g(mu);
      pts.push([left + ((x + 3) / 6) * 92, 108 - h * v]);
    }
    return line(pts);
  };
  const panels = [
    { name: 'Stabilising', note: 'favours the mean', after: (l) => gauss(l, 0, 0.6, 70) },
    { name: 'Directional', note: 'favours one extreme', after: (l) => gauss(l, 1.0, 0.9, 58) },
    { name: 'Disruptive', note: 'favours both extremes', after: (l) => gauss(l, 0, 0.55, 46, true) },
  ];
  return (
    <G>
      {panels.map((p, i) => {
        const left = 12 + i * 108;
        return (
          <G key={p.name}>
            <Txt x={left + 46} y={16} size={9.5} weight="700">
              {p.name}
            </Txt>
            <Line x1={left} y1={108} x2={left + 92} y2={108} stroke={O} strokeWidth={1} />
            <Path d={gauss(left, 0, 0.9, 58)} stroke={GREY} strokeWidth={1.4} fill="none" strokeDasharray="4 3" />
            <Path d={p.after(left)} stroke={BLUE} strokeWidth={2} fill="none" />
            <Txt x={left + 46} y={124} size={8.5}>
              {p.note}
            </Txt>
          </G>
        );
      })}
      <Txt x={170} y={140} size={8} fill={GREY}>
        dashed: before selection; solid: after; across: phenotype
      </Txt>
    </G>
  );
}

export const A_BIOLOGY_2 = {
  // ---------- Upper Sixth ----------
  'ab-replication': {
    title: 'Meselson and Stahl: semi-conservative replication',
    w: 320,
    h: 196,
    art: ReplicationArt,
    labels: [],
    facts: [
      'Bacteria grown on heavy nitrogen (¹⁵N) have heavy DNA: one band low in the tube.',
      'After one division in light nitrogen (¹⁴N), all DNA forms one intermediate band: each molecule has one old heavy strand and one new light strand.',
      'After two divisions there are two bands, intermediate and light, in equal amounts: exactly as semi-conservative replication predicts.',
    ],
  },
  'ab-protein-synthesis': flowSpec('From gene to protein', ['Transcription:\nRNA polymerase\nmakes pre-mRNA', 'Splicing:\nintrons out,\nexons joined', 'mRNA leaves\nthrough a\nnuclear pore', 'Ribosome finds\nAUG; tRNA brings\namino acids', 'Peptide bonds\nform codon\nby codon', 'Stop codon:\npolypeptide\nreleased'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-genetic-code': columnsSpec('The genetic code', [
    { head: 'Triplet', items: ['3 bases', 'per codon', '64 codons'] },
    { head: 'Degenerate', items: ['61 codons for', '20 amino acids'] },
    { head: 'Signals', items: ['AUG: start', '(methionine)', 'UAA, UAG, UGA:', 'stop'] },
    { head: 'Universal', items: ['same in almost', 'all organisms;', 'non-overlapping'] },
  ], { colW: 102 }),
  'ab-lac-operon': {
    title: 'The lac operon of E. coli',
    w: 310,
    h: 196,
    art: OperonArt,
    labels: [],
    facts: [
      'The operon has a promoter (P), an operator (O) and three structural genes, lacZ, lacY and lacA; a separate regulator gene (I) makes the repressor.',
      'Without lactose, the repressor binds the operator and blocks RNA polymerase: no transcription.',
      'With lactose, lactose binds the repressor, which leaves the operator; RNA polymerase transcribes the genes into mRNA and the enzymes are made.',
    ],
  },
  'ab-mutations': columnsSpec('Gene mutations', [
    { head: 'Substitution', items: ['one base changed', 'silent, missense', 'or nonsense', 'e.g. sickle cell'] },
    { head: 'Insertion', items: ['one base added', 'frameshift:', 'later codons', 'all change'] },
    { head: 'Deletion', items: ['one base lost', 'frameshift:', 'often a useless', 'protein'] },
  ], { colW: 116 }),
  'ab-karyotypes': columnsSpec('Disorders of chromosome number', [
    { head: 'Down syndrome', items: ['trisomy 21', '47 chromosomes', 'risk rises with', 'mother’s age'] },
    { head: 'Klinefelter', items: ['47, XXY', 'male', 'usually infertile'] },
    { head: 'Turner', items: ['45, X', 'female', 'ovaries do not', 'develop'] },
  ], { colW: 116 }),
  'ab-gene-cloning': flowSpec('Making human insulin in bacteria', ['Insulin mRNA\n→ DNA by reverse\ntranscriptase', 'Cut a plasmid with\nthe same restriction\nenzyme', 'DNA ligase\njoins the gene\ninto the plasmid', 'Bacteria take\nup the plasmid\n(transformation)', 'Marker genes\npick out the\nright bacteria', 'Grow in\nfermenters;\nextract insulin'], { perRow: 3, boxW: 116, boxH: 58 }),
  'ab-gel': {
    title: 'Gel electrophoresis of DNA',
    w: 330,
    h: 210,
    art: GelArt,
    labels: [],
    facts: [
      'DNA is loaded into wells at the negative end; being negatively charged, it moves towards the positive electrode.',
      'Small fragments move furthest; the ladder of known sizes (2 to 14 kb) lets the other bands be sized.',
      'The child’s 6 kb band matches the mother; its 9 and 14 kb bands must come from the father. Man A has both; man B lacks the 9 kb band.',
    ],
  },
  'ab-dihybrid': {
    title: 'A dihybrid cross: RrYy × RrYy',
    w: 300,
    h: 250,
    art: DihybridArt,
    labels: [],
    facts: [
      'Each parent makes four kinds of gamete in equal numbers: RY, Ry, rY and ry.',
      'The 16 boxes give 9 round yellow, 3 round green, 3 wrinkled yellow and 1 wrinkled green: the 9 : 3 : 3 : 1 ratio.',
      'R (round) is dominant to r (wrinkled); Y (yellow) is dominant to y (green).',
    ],
  },
  'ab-chi-table': columnsSpec('χ² critical values at p = 0.05', [
    { head: 'Degrees of\nfreedom', items: ['1', '2', '3', '4'] },
    { head: 'Critical\nvalue', items: ['3.84', '5.99', '7.82', '9.49'] },
    { head: 'Decision', items: ['χ² below: fits;', 'difference due', 'to chance.', 'χ² above:', 'significant'] },
  ], { colW: 112 }),
  'ab-sex-linkage': {
    title: 'Inheritance of haemophilia',
    w: 320,
    h: 176,
    art: SexLinkageArt,
    labels: [],
    facts: [
      'A carrier mother (one normal and one haemophilia allele on her X chromosomes) and a normal father.',
      'Daughters: half normal, half carriers; none affected because each gets the father’s normal X.',
      'Sons: half normal, half with haemophilia, depending on which X they receive from their mother.',
    ],
  },
  'ab-linkage-map': {
    title: 'Mapping genes from recombination frequencies',
    w: 320,
    h: 118,
    art: LinkageMapArt,
    labels: [],
    facts: [
      'A and B recombine in 8% of offspring, B and C in 3%, and A and C in 11%.',
      'Distances add up only for the order A, B, C: so B lies between A and C.',
      'One map unit equals 1% recombination.',
    ],
  },
  'ab-epistasis': columnsSpec('Ratios from a dihybrid cross', [
    { head: '9 : 3 : 3 : 1', items: ['independent genes,', 'no interaction'] },
    { head: '9 : 3 : 4', items: ['recessive', 'epistasis', '(mouse coat colour)'] },
    { head: '12 : 3 : 1', items: ['dominant', 'epistasis', '(squash fruit)'] },
    { head: '9 : 7', items: ['complementary', 'genes', '(sweet pea flowers)'] },
  ], { colW: 104 }),
  'ab-negative-feedback': cycleSpec('Negative feedback', ['Change from\nthe set point', 'Receptor\ndetects it', 'Coordinator\n(brain, gland)', 'Effector\nresponds', 'Back to the\nset point'], { boxW: 108, boxH: 50 }),
  'ab-nephron': {
    title: 'The nephron',
    w: 340,
    h: 212,
    art: NephronArt,
    labels: [
      ['Glomerulus', 80, 16, 80, 44],
      ['Bowman’s\ncapsule', 58, 80, 70, 64],
      ['Proximal tubule', 120, 86, 120, 58],
      ['Distal tubule', 213, 48, 213, 66],
      ['Descending\nlimb', 154, 140, 160, 140],
      ['Ascending\nlimb', 186, 140, 180, 140],
      ['Loop of Henle', 170, 204, 170, 184],
      ['Collecting\nduct', 268, 150, 260, 150],
    ],
    facts: [
      'Blood is filtered under pressure from the glomerulus into Bowman’s capsule.',
      'The proximal tubule reabsorbs all glucose and amino acids and most water and salt.',
      'The loop of Henle runs into the medulla and makes it very salty (counter-current multiplier).',
      'The distal tubule adjusts ions and pH; the collecting duct passes through the salty medulla, where water is reabsorbed under the control of ADH.',
    ],
  },
  'ab-adh': flowSpec('Osmoregulation by ADH', ['Blood too\nconcentrated\n(sweating)', 'Osmoreceptors in\nthe hypothalamus\ndetect it', 'Posterior\npituitary\nreleases ADH', 'Aquaporins added\nto collecting\nduct walls', 'More water\nreabsorbed:\nless urine', 'Blood water\npotential\nrestored'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-blood-glucose': columnsSpec('Control of blood glucose', [
    { head: 'Glucose too high', items: ['β cells: insulin', 'cells take up glucose', 'glucose → glycogen', 'level falls'] },
    { head: 'Glucose too low', items: ['α cells: glucagon', 'glycogen → glucose', 'gluconeogenesis', 'level rises'] },
  ], { colW: 150 }),
  'ab-action-potential': {
    title: 'An action potential',
    w: 320,
    h: 258,
    art: ActionPotentialArt,
    labels: [],
    facts: [
      'The membrane rests at −70 mV. A stimulus that reaches the threshold of −55 mV starts an action potential.',
      '1: voltage-gated sodium channels open; Na⁺ enters and the inside reaches about +40 mV.',
      '2: sodium channels close and potassium channels open; K⁺ leaves and the potential falls.',
      '3: the potential overshoots below −70 mV (hyperpolarisation). 4: the resting potential is restored. The whole event takes about 2 to 3 ms.',
    ],
  },
  'ab-synapse': flowSpec('Transmission at a cholinergic synapse', ['Impulse reaches\nthe presynaptic\nknob', 'Ca²⁺ channels\nopen; Ca²⁺\nenters', 'Vesicles release\nACh by\nexocytosis', 'ACh binds to\nreceptors; Na⁺\nchannels open', 'Postsynaptic\nmembrane\ndepolarises', 'Acetylcholin-\nesterase breaks\ndown ACh'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-sarcomere': {
    title: 'A sarcomere relaxed and contracted',
    w: 320,
    h: 206,
    art: SarcomereArt,
    labels: [],
    facts: [
      'Thin actin filaments (green) are attached to the Z lines; thick myosin filaments (red), with heads, lie in the middle.',
      'The A band is the length of the myosin; the I band holds actin only; the H zone holds myosin only.',
      'On contraction the filaments slide: the Z lines move closer, the I band and H zone shorten, and the A band stays the same.',
    ],
  },
  'ab-phytohormones': columnsSpec('Plant growth substances', [
    { head: 'Auxin', items: ['cell elongation', 'tropisms', 'apical', 'dominance'] },
    { head: 'Gibberellin', items: ['stem growth', 'germination', '(amylase)'] },
    { head: 'Cytokinin', items: ['cell division', 'delays', 'ageing'] },
    { head: 'Abscisic acid', items: ['closes', 'stomata;', 'dormancy'] },
    { head: 'Ethene', items: ['fruit', 'ripening;', 'leaf fall'] },
  ], { colW: 90 }),
  'ab-gametogenesis': columnsSpec('Spermatogenesis and oogenesis', [
    { head: 'Spermatogenesis', items: ['spermatogonium (2n)', '↓ mitosis', 'primary spermatocyte', '↓ meiosis I', '2 secondary (n)', '↓ meiosis II', '4 spermatids → sperm'] },
    { head: 'Oogenesis', items: ['oogonium (2n), fetus', '↓ mitosis', 'primary oocyte', '↓ meiosis I (puberty on)', 'secondary oocyte', '↓ meiosis II (fertilisation)', '1 ovum + polar bodies'] },
  ], { colW: 160 }),
  'ab-early-development': flowSpec('From fertilisation to implantation', ['Fertilisation\nin the oviduct:\nzygote', 'Cleavage:\nmorula', 'Blastocyst:\ntrophoblast and\ninner cell mass', 'Implantation\nabout day 7;\nhCG made', 'Gastrulation:\nthree germ\nlayers', 'The placenta\nforms'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-evolution-evidence': columnsSpec('Evidence for evolution', [
    { head: 'Fossils', items: ['sequence in rocks', 'transitional forms', '(Archaeopteryx)'] },
    { head: 'Anatomy', items: ['homologous', 'pentadactyl limb', 'vestigial organs'] },
    { head: 'Biogeography', items: ['island species', 'Galápagos finches', 'crater-lake fish'] },
    { head: 'Molecules', items: ['DNA and', 'cytochrome c', 'sequences'] },
  ], { colW: 104 }),
  'ab-speciation': columnsSpec('How new species form', [
    { head: 'Allopatric', items: ['geographical barrier', 'populations evolve', 'separately', 'no longer interbreed'] },
    { head: 'Sympatric', items: ['same area', 'behaviour, habitat', 'or polyploidy', 'Barombi Mbo cichlids'] },
  ], { colW: 150 }),
  'ab-hardy-weinberg': columnsSpec('The Hardy-Weinberg equations', [
    { head: 'Alleles', items: ['p + q = 1', 'p: dominant allele', 'q: recessive allele'] },
    { head: 'Genotypes', items: ['p² + 2pq + q² = 1', 'p²: AA; 2pq: Aa', 'q²: aa'] },
    { head: 'Conditions', items: ['large population', 'random mating', 'no mutation, migration', 'or selection'] },
  ], { colW: 122 }),
  'ab-selection-types': {
    title: 'Three kinds of natural selection',
    w: 340,
    h: 146,
    art: SelectionArt,
    labels: [],
    facts: [
      'Stabilising selection favours the average phenotype, so the curve becomes narrower around the same mean.',
      'Directional selection favours one extreme, so the mean shifts, as when bacteria become resistant to an antibiotic.',
      'Disruptive selection favours both extremes, so the population may split into two forms.',
    ],
  },
  'ab-nitrogen-cycle': flowSpec('The nitrogen cycle', ['N₂ in the air', 'Fixation:\nRhizobium,\nlightning, Haber', 'Ammonium\nin the soil', 'Nitrosomonas:\nammonium →\nnitrite', 'Nitrobacter:\nnitrite →\nnitrate', 'Plants absorb\nnitrate; proteins\nin food chains'], { perRow: 3, boxW: 112, boxH: 58, note: 'Decay returns ammonium; denitrifiers return N₂.' }),
  'ab-sampling': columnsSpec('Ecological sampling', [
    { head: 'Quadrats', items: ['random positions', 'frequency, density', '% cover'] },
    { head: 'Transects', items: ['line or belt', 'along a gradient', 'kite diagrams'] },
    { head: 'Mark-recapture', items: ['N = n₁ × n₂ ÷ m', 'mobile animals', '(Lincoln index)'] },
  ], { colW: 118 }),
  'ab-conservation': columnsSpec('Biodiversity in Cameroon', [
    { head: 'Threats', items: ['deforestation', 'bushmeat hunting', 'mining, pollution', 'climate change'] },
    { head: 'Protected areas', items: ['Korup, Dja', 'Lobéké, Campo-Ma’an', 'Mount Cameroon', 'Waza'] },
    { head: 'Actions', items: ['community forests', 'anti-poaching', 'seed banks, centres', 'CITES, CBD'] },
  ], { colW: 122 }),
  'ab-eutrophication': flowSpec('Eutrophication', ['Nitrates and\nphosphates run\ninto water', 'Algal bloom\ncovers the\nsurface', 'Light blocked:\nwater plants\ndie', 'Decomposers\nmultiply; BOD\nrises', 'Oxygen falls:\nfish die'], { perRow: 3, boxW: 112, boxH: 58 }),
  'ab-final-term': flowSpec('The final term before the GCE', ['Paper 1\nsprint drills', 'Paper 2\ncore drills', 'Regional mock:\nPapers 1, 2, 3', 'Remediation\nworkshops', 'Final clinics', 'The GCE\n(0710)'], { perRow: 3, boxW: 108 }),
};
