// A Level Geography figures (0750): the papers (to scale), systems, gradient
// and sections, stream order, sampling and Spearman’s rank, plate margins and
// the rock cycle, volcanoes, intrusions and seismic waves, folds and faults,
// weathering and Peltier’s diagram, slope forces and mass movement, the storm
// hydrograph (to scale), river processes, the long profile and deltas, the
// atmosphere (to scale), the energy budget, winds and the three-cell model,
// air masses, depressions and cyclones, soils, ecosystems and biomes, the
// DTM, Malthus and Boserup, central places, urban models, and for the Upper
// Sixth von Thünen, Weber, energy, the physical and human geography of
// Cameroon, trade, development, essay methods and the final term.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#1f6fb2';
const GREEN = '#2f7d4f';
const RED = '#b5452f';
const SAND = '#f3e6c4';
const SKY = '#dcecf7';
const LEAF = '#e3f0da';
const ROSE = '#f8e3df';
const LILAC = '#efe6f7';
const AMBER = '#fbefd0';
const GREY = '#e6e9ec';
const MAGMA = '#d9776a';

const poly = (pts) => `M${pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L')} Z`;
const line = (pts) => `M${pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L')}`;

function Arrow({ x1, y1, x2, y2, c = O, w = 1.4 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

// ---------- the 0750 papers, bars to scale ----------
const PAPERS = [
  { name: 'Paper 1', kind: 'multiple choice', hours: 1.5, label: '1½ hours', when: 'Sat 6 June, afternoon' },
  { name: 'Paper 2', kind: 'mapwork, physical', hours: 3, label: '3 hours', when: 'Mon 8 June, morning' },
  { name: 'Paper 3', kind: 'human, Cameroon', hours: 3.75, label: '3¾ hours', when: 'Mon 8 June, afternoon' },
];
function PapersArt() {
  const x0 = 96;
  const perHour = 50;
  const rowY = [34, 78, 122];
  return (
    <G>
      <Line x1={x0} y1={16} x2={x0} y2={146} stroke={O} strokeWidth={1.2} />
      <Line x1={x0} y1={146} x2={x0 + 4 * perHour} y2={146} stroke={O} strokeWidth={1} />
      {[0, 1, 2, 3, 4].map((h) => (
        <G key={h}>
          <Line x1={x0 + h * perHour} y1={146} x2={x0 + h * perHour} y2={151} stroke={O} strokeWidth={1} />
          <Txt x={x0 + h * perHour} y={162} size={8.5} fill={MUTED}>
            {`${h} h`}
          </Txt>
        </G>
      ))}
      {PAPERS.map((p, i) => (
        <G key={p.name}>
          <Txt x={x0 - 8} y={rowY[i] - 1} size={9.5} anchor="end" weight="700" fill={O}>
            {p.name}
          </Txt>
          <Txt x={x0 - 8} y={rowY[i] + 11} size={7.5} anchor="end" fill={MUTED}>
            {p.kind}
          </Txt>
          <Rect x={x0} y={rowY[i] - 9} width={p.hours * perHour} height={18} rx={2} fill={i === 0 ? BLUE : GREEN} />
          <Txt x={x0 + p.hours * perHour + 6} y={rowY[i] + 3} size={8.5} anchor="start" fill={O}>
            {p.label}
          </Txt>
          <Txt x={x0 + p.hours * perHour + 6} y={rowY[i] + 14} size={7.5} anchor="start" fill={MUTED}>
            {p.when}
          </Txt>
        </G>
      ))}
      <Txt x={200} y={182} size={8.5} fill={MUTED}>
        June 2026 timetable (bars drawn to scale)
      </Txt>
    </G>
  );
}

// ---------- gradient on a section ----------
function GradientArt() {
  return (
    <G>
      <Path d="M30 160 L30 186 L310 186 L310 46 C 285 52, 250 76, 200 104 C 150 132, 90 158, 30 160 Z" fill={LEAF} />
      <Path d="M30 160 C 90 158, 150 132, 200 104 C 250 76, 285 52, 310 46" fill="none" stroke={GREEN} strokeWidth={2} />
      <Line x1={30} y1={160} x2={310} y2={160} stroke={O} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={310} y1={160} x2={310} y2={46} stroke={O} strokeWidth={1} strokeDasharray="4 3" />
      <Circle cx={30} cy={160} r={3.5} fill={O} />
      <Circle cx={310} cy={46} r={3.5} fill={O} />
      <Txt x={38} y={150} size={8.5} anchor="start" weight="700" fill={O}>
        A (250 m)
      </Txt>
      <Txt x={304} y={36} size={8.5} anchor="end" weight="700" fill={O}>
        B (450 m)
      </Txt>
      <Txt x={170} y={174} size={8} fill={O}>
        horizontal equivalent: 2,000 m (4 cm at 1:50,000)
      </Txt>
      <Txt x={318} y={100} size={8} anchor="start" fill={O}>
        vertical
      </Txt>
      <Txt x={318} y={111} size={8} anchor="start" fill={O}>
        interval: 200 m
      </Txt>
      <Txt x={24} y={22} size={9} anchor="start" weight="700" fill={BLUE}>
        gradient = VI ÷ HE = 200 ÷ 2,000 = 1 in 10
      </Txt>
      <Txt x={24} y={38} size={8} anchor="start" fill={MUTED}>
        VE = horizontal ÷ vertical scale
      </Txt>
    </G>
  );
}

// ---------- stream order ----------
const STREAMS = [
  { pts: [[70, 30], [110, 80]], n: 1 },
  { pts: [[140, 25], [110, 80]], n: 1 },
  { pts: [[220, 25], [250, 80]], n: 1 },
  { pts: [[292, 32], [250, 80]], n: 1 },
  { pts: [[110, 80], [180, 130]], n: 2 },
  { pts: [[250, 80], [180, 130]], n: 2 },
  { pts: [[250, 150], [180, 160]], n: 1 },
  { pts: [[180, 130], [180, 192]], n: 3 },
];
function StreamOrderArt() {
  return (
    <G>
      <Path d="M40 40 C 60 10, 150 6, 180 20 C 220 6, 300 10, 318 40 C 330 90, 290 150, 260 170 C 230 190, 200 194, 180 194 C 160 194, 120 180, 90 150 C 50 110, 30 70, 40 40 Z" fill="#f4f8fb" stroke={MUTED} strokeWidth={1} strokeDasharray="5 4" />
      {STREAMS.map((s, i) => (
        <Path key={i} d={line(s.pts)} fill="none" stroke={BLUE} strokeWidth={s.n === 1 ? 1.4 : s.n === 2 ? 2.6 : 3.8} />
      ))}
      <Txt x={80} y={58} size={9} weight="700" fill={BLUE}>
        1
      </Txt>
      <Txt x={135} y={54} size={9} weight="700" fill={BLUE}>
        1
      </Txt>
      <Txt x={228} y={54} size={9} weight="700" fill={BLUE}>
        1
      </Txt>
      <Txt x={280} y={60} size={9} weight="700" fill={BLUE}>
        1
      </Txt>
      <Txt x={136} y={116} size={9} weight="700" fill={BLUE}>
        2
      </Txt>
      <Txt x={226} y={116} size={9} weight="700" fill={BLUE}>
        2
      </Txt>
      <Txt x={228} y={148} size={9} weight="700" fill={BLUE}>
        1
      </Txt>
      <Txt x={170} y={182} size={9} anchor="end" weight="700" fill={BLUE}>
        3
      </Txt>
      <Txt x={322} y={120} size={8} anchor="start" fill={MUTED}>
        watershed
      </Txt>
      <Txt x={188} y={204} size={8} anchor="start" fill={O}>
        basin outlet
      </Txt>
      <Txt x={258} y={162} size={7.5} anchor="start" fill={O}>
        a 1 joining a 3
      </Txt>
      <Txt x={258} y={172} size={7.5} anchor="start" fill={O}>
        leaves it a 3
      </Txt>
    </G>
  );
}

// ---------- Spearman’s rank: land value and distance from the CBD ----------
const SAMPLE = [
  [0.5, 90],
  [1, 80],
  [1.5, 85],
  [2, 60],
  [3, 55],
  [4, 40],
  [5, 35],
  [6, 20],
];
function SpearmanArt() {
  const X = (d) => 50 + d * 40;
  const Y = (v) => 170 - v * 1.4;
  return (
    <G>
      <Line x1={50} y1={30} x2={50} y2={170} stroke={O} strokeWidth={1.2} />
      <Line x1={50} y1={170} x2={300} y2={170} stroke={O} strokeWidth={1.2} />
      {[0, 2, 4, 6].map((d) => (
        <Txt key={d} x={X(d)} y={182} size={8} fill={MUTED}>
          {String(d)}
        </Txt>
      ))}
      {[0, 50, 100].map((v) => (
        <Txt key={v} x={45} y={Y(v) + 3} size={8} anchor="end" fill={MUTED}>
          {String(v)}
        </Txt>
      ))}
      <Line x1={X(0.5)} y1={Y(92)} x2={X(6)} y2={Y(18)} stroke={MUTED} strokeWidth={1} strokeDasharray="5 4" />
      {SAMPLE.map(([d, v], i) => (
        <Circle key={i} cx={X(d)} cy={Y(v)} r={3.6} fill={BLUE} />
      ))}
      <Txt x={175} y={196} size={8.5} fill={O}>
        distance from the CBD (km)
      </Txt>
      <Txt x={18} y={100} size={8.5} fill={O} rotate={-90}>
        land value (index)
      </Txt>
      <Rect x={186} y={34} width={136} height={38} rx={6} fill={SKY} stroke={BLUE} strokeWidth={0.8} />
      <Txt x={254} y={50} size={9} weight="700" fill={BLUE}>
        rs = −0.98
      </Txt>
      <Txt x={254} y={64} size={8} fill={O}>
        Σd² = 166, n = 8
      </Txt>
    </G>
  );
}

// ---------- folds ----------
function foldLine(offset) {
  const pts = [];
  for (let x = 20; x <= 330; x += 10) pts.push([x, 95 - 35 * Math.cos((2 * Math.PI * (x - 100)) / 280) + offset]);
  return pts;
}
function FoldsArt() {
  const fills = [AMBER, LEAF, SKY];
  const layers = [0, 16, 32, 48].map(foldLine);
  return (
    <G>
      {fills.map((f, i) => (
        <Path key={i} d={poly([...layers[i], ...layers[i + 1].slice().reverse()])} fill={f} stroke={O} strokeWidth={0.8} />
      ))}
      <Line x1={100} y1={44} x2={100} y2={176} stroke={RED} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={240} y1={110} x2={240} y2={186} stroke={RED} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={100} y={34} size={9} weight="700" fill={O}>
        anticline (upfold)
      </Txt>
      <Txt x={240} y={104} size={9} weight="700" fill={O}>
        syncline (downfold)
      </Txt>
      <Txt x={178} y={88} size={8.5} anchor="start" fill={O}>
        limb
      </Txt>
      <Txt x={104} y={188} size={8} anchor="start" fill={RED}>
        fold axis
      </Txt>
      <Arrow x1={8} y1={150} x2={26} y2={150} c={MUTED} />
      <Arrow x1={344} y1={150} x2={326} y2={150} c={MUTED} />
      <Txt x={8} y={166} size={7.5} anchor="start" fill={MUTED}>
        compression
      </Txt>
    </G>
  );
}

// ---------- faults: horst and graben ----------
const xL = (y) => 120 + (20 * (y - 60)) / 110;
const xR = (y) => 240 - (20 * (y - 60)) / 110;
function FaultsArt() {
  const sideBands = [
    [60, 95, AMBER],
    [95, 130, LEAF],
    [130, 170, SKY],
  ];
  const grabenBands = [
    [100, 135, AMBER],
    [135, 170, LEAF],
  ];
  return (
    <G>
      {sideBands.map(([a, b, f], i) => (
        <G key={`s${i}`}>
          <Path d={poly([[20, a], [xL(a), a], [xL(b), b], [20, b]])} fill={f} stroke={O} strokeWidth={0.6} />
          <Path d={poly([[xR(a), a], [340, a], [340, b], [xR(b), b]])} fill={f} stroke={O} strokeWidth={0.6} />
        </G>
      ))}
      {grabenBands.map(([a, b, f], i) => (
        <Path key={`g${i}`} d={poly([[xL(a), a], [xR(a), a], [xR(b), b], [xL(b), b]])} fill={f} stroke={O} strokeWidth={0.6} />
      ))}
      <Line x1={120} y1={60} x2={140} y2={170} stroke={RED} strokeWidth={2} />
      <Line x1={240} y1={60} x2={220} y2={170} stroke={RED} strokeWidth={2} />
      <Txt x={70} y={52} size={9} weight="700" fill={O}>
        horst
      </Txt>
      <Txt x={290} y={52} size={9} weight="700" fill={O}>
        horst
      </Txt>
      <Txt x={180} y={120} size={9} weight="700" fill={O}>
        graben (rift valley)
      </Txt>
      <Txt x={180} y={88} size={7.5} fill={MUTED}>
        fault scarps on both sides
      </Txt>
      <Txt x={128} y={182} size={8} anchor="end" fill={RED}>
        normal fault
      </Txt>
      <Txt x={232} y={182} size={8} anchor="start" fill={RED}>
        normal fault
      </Txt>
      <Arrow x1={60} y1={28} x2={22} y2={28} c={MUTED} />
      <Arrow x1={300} y1={28} x2={338} y2={28} c={MUTED} />
      <Txt x={180} y={31} size={8} fill={MUTED}>
        tension pulls the crust apart
      </Txt>
    </G>
  );
}

// ---------- intrusions ----------
function IntrusionsArt() {
  const bands = [
    [70, 100, AMBER],
    [100, 130, LEAF],
    [130, 160, SAND],
    [160, 196, SKY],
  ];
  return (
    <G>
      {bands.map(([a, b, f], i) => (
        <Rect key={i} x={10} y={a} width={340} height={b - a} fill={f} stroke={O} strokeWidth={0.5} />
      ))}
      <Path d="M240 70 L280 30 L320 70 Z" fill={GREY} stroke={O} strokeWidth={1} />
      <Rect x={277} y={40} width={6} height={130} fill={MAGMA} />
      <Path d="M250 196 C 250 170, 310 170, 310 196 Z" fill={MAGMA} stroke={O} strokeWidth={0.8} />
      <Path d="M50 196 C 60 150, 200 150, 210 196 Z" fill={MAGMA} stroke={O} strokeWidth={0.8} />
      <Rect x={168} y={72} width={7} height={88} fill={MAGMA} stroke={O} strokeWidth={0.5} />
      <Rect x={175} y={126} width={70} height={6} fill={MAGMA} stroke={O} strokeWidth={0.5} />
      <Path d="M70 112 C 80 92, 120 92, 130 112 Z" fill={MAGMA} stroke={O} strokeWidth={0.8} />
      <Txt x={280} y={22} size={8.5} weight="700" fill={O}>
        volcano
      </Txt>
      <Txt x={130} y={186} size={8.5} weight="700" fill="#ffffff">
        batholith
      </Txt>
      <Txt x={280} y={192} size={7.5} fill="#ffffff">
        magma chamber
      </Txt>
      <Txt x={164} y={86} size={8.5} anchor="end" weight="700" fill={O}>
        dyke
      </Txt>
      <Txt x={212} y={122} size={8.5} weight="700" fill={O}>
        sill
      </Txt>
      <Txt x={100} y={88} size={8.5} weight="700" fill={O}>
        laccolith
      </Txt>
      <Txt x={14} y={66} size={7.5} anchor="start" fill={MUTED}>
        ground surface
      </Txt>
    </G>
  );
}

// ---------- Peltier’s diagram (simplified) ----------
function PeltierArt() {
  const X = (mm) => 60 + mm * 0.13;
  const Y = (t) => 30 + (30 - t) * 3.5;
  return (
    <G>
      <Rect x={X(1000)} y={Y(30)} width={X(2000) - X(1000)} height={Y(15) - Y(30)} fill={ROSE} />
      <Path d={poly([[X(500), Y(30)], [X(1000), Y(30)], [X(1000), Y(15)], [X(2000), Y(15)], [X(2000), Y(0)], [X(500), Y(0)]])} fill={AMBER} />
      <Rect x={X(250)} y={Y(0)} width={X(2000) - X(250)} height={Y(-10) - Y(0)} fill={SKY} />
      <Path d={poly([[X(0), Y(30)], [X(500), Y(30)], [X(500), Y(0)], [X(250), Y(0)], [X(250), Y(-10)], [X(0), Y(-10)]])} fill={GREY} />
      <Rect x={X(0)} y={Y(30)} width={X(2000) - X(0)} height={Y(-10) - Y(30)} fill="none" stroke={O} strokeWidth={1} />
      <Txt x={X(1500)} y={Y(17)} size={8.5} weight="700" fill={RED}>
        strong chemical
      </Txt>
      <Txt x={X(1250)} y={Y(7)} size={8.5} weight="700" fill={O}>
        moderate chemical
      </Txt>
      <Txt x={X(1150)} y={Y(-5) + 3} size={8.5} weight="700" fill={BLUE}>
        frost action
      </Txt>
      <Txt x={X(250)} y={Y(15)} size={8} weight="700" fill={O}>
        weak
      </Txt>
      <Txt x={X(250)} y={Y(15) + 11} size={7.5} fill={O}>
        (mainly mechanical)
      </Txt>
      <Circle cx={X(1600)} cy={Y(24)} r={3.5} fill={RED} />
      <Txt x={X(1600) + 6} y={Y(24) + 3} size={7.5} anchor="start" fill={O}>
        Yaoundé
      </Txt>
      <Circle cx={X(800)} cy={Y(28)} r={3.5} fill={O} />
      <Txt x={X(800) + 6} y={Y(28) + 12} size={7.5} anchor="start" fill={O}>
        Maroua
      </Txt>
      {[0, 1000, 2000].map((mm) => (
        <Txt key={mm} x={X(mm)} y={Y(-10) + 12} size={8} fill={MUTED}>
          {mm === 0 ? '0' : mm === 1000 ? '1,000' : '2,000'}
        </Txt>
      ))}
      {[30, 15, 0, -10].map((t) => (
        <Txt key={t} x={55} y={Y(t) + 3} size={8} anchor="end" fill={MUTED}>
          {`${t}`}
        </Txt>
      ))}
      <Txt x={190} y={Y(-10) + 26} size={8.5} fill={O}>
        mean annual rainfall (mm)
      </Txt>
      <Txt x={18} y={100} size={8.5} fill={O} rotate={-90}>
        mean annual temperature (°C)
      </Txt>
    </G>
  );
}

// ---------- forces on a slope ----------
function SlopeForcesArt() {
  return (
    <G>
      <Path d="M30 170 L300 50 L300 186 L30 186 Z" fill={SAND} stroke={O} strokeWidth={1} />
      <Line x1={30} y1={170} x2={120} y2={170} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={76} y={166} size={8} fill={O}>
        θ
      </Txt>
      <Path d={poly([[139.7, 121.3], [194.5, 96.9], [180.7, 65.8], [125.9, 90.2]])} fill={GREY} stroke={O} strokeWidth={1.2} />
      <Arrow x1={160.2} y1={93.6} x2={160.2} y2={160} c={RED} w={1.8} />
      <Arrow x1={160.2} y1={93.6} x2={109.9} y2={115.9} c={BLUE} w={1.8} />
      <Arrow x1={160.2} y1={93.6} x2={212} y2={70.6} c={GREEN} w={1.8} />
      <Txt x={166} y={176} size={8.5} anchor="start" weight="700" fill={RED}>
        weight
      </Txt>
      <Txt x={104} y={108} size={8.5} anchor="end" weight="700" fill={BLUE}>
        shear stress
      </Txt>
      <Txt x={104} y={119} size={7.5} anchor="end" fill={BLUE}>
        (downslope pull)
      </Txt>
      <Txt x={232} y={44} size={8.5} anchor="end" weight="700" fill={GREEN}>
        shear strength
      </Txt>
      <Txt x={232} y={55} size={7.5} anchor="end" fill={GREEN}>
        friction, cohesion, roots
      </Txt>
      <Txt x={24} y={22} size={8.5} anchor="start" fill={O}>
        stable while strength exceeds stress
      </Txt>
    </G>
  );
}

// ---------- the storm hydrograph, drawn to scale ----------
const QX = (h) => 50 + h * (280 / 48);
const QY = (q) => 170 - q * (130 / 60);
const flow = (h) => {
  const t = (h - 4) / 10;
  return 8 + 0.04 * h + (h > 4 ? 44 * t * t * Math.exp(2 * (1 - t)) : 0);
};
const RAIN = [
  [0, 2, 6],
  [2, 4, 10],
  [4, 6, 4],
];
function HydrographArt() {
  const pts = [];
  for (let h = 0; h <= 48; h += 1) pts.push([QX(h), QY(flow(h))]);
  const base = [[QX(0), QY(8)], [QX(14), QY(8.6)], [QX(48), QY(9.9)]];
  return (
    <G>
      <Line x1={50} y1={30} x2={330} y2={30} stroke={O} strokeWidth={1} />
      {RAIN.map(([a, b, mm], i) => (
        <Rect key={i} x={QX(a) + 1} y={30} width={QX(b) - QX(a) - 2} height={mm * 4} fill={BLUE} />
      ))}
      <Path d={line(base)} fill="none" stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Path d={line(pts)} fill="none" stroke={GREEN} strokeWidth={2.2} />
      <Line x1={50} y1={30} x2={50} y2={170} stroke={O} strokeWidth={1.2} />
      <Line x1={50} y1={170} x2={330} y2={170} stroke={O} strokeWidth={1.2} />
      {[0, 12, 24, 36, 48].map((h) => (
        <Txt key={h} x={QX(h)} y={182} size={8} fill={MUTED}>
          {String(h)}
        </Txt>
      ))}
      {[0, 20, 40, 60].map((q) => (
        <Txt key={q} x={45} y={QY(q) + 3} size={8} anchor="end" fill={MUTED}>
          {String(q)}
        </Txt>
      ))}
      <Line x1={QX(3)} y1={20} x2={QX(3)} y2={70} stroke={MUTED} strokeWidth={0.8} strokeDasharray="3 3" />
      <Line x1={QX(14)} y1={20} x2={QX(14)} y2={QY(52)} stroke={MUTED} strokeWidth={0.8} strokeDasharray="3 3" />
      <Arrow x1={QX(8.5)} y1={20} x2={QX(3) + 1} y2={20} c={O} w={1} />
      <Arrow x1={QX(8.5)} y1={20} x2={QX(14) - 1} y2={20} c={O} w={1} />
      <Txt x={QX(8.5)} y={14} size={8} weight="700" fill={O}>
        lag time: 11 hours
      </Txt>
      <Txt x={138} y={52} size={8} anchor="start" weight="700" fill={GREEN}>
        peak discharge 52 m³/s
      </Txt>
      <Txt x={96} y={96} size={8} anchor="end" fill={GREEN}>
        rising limb
      </Txt>
      <Txt x={205} y={104} size={8} anchor="start" fill={GREEN}>
        falling limb
      </Txt>
      <Txt x={325} y={162} size={7.5} anchor="end" fill={MUTED}>
        base flow (groundwater)
      </Txt>
      <Txt x={328} y={44} size={7.5} anchor="end" fill={BLUE}>
        rainfall (mm per 2 hours)
      </Txt>
      <Txt x={190} y={198} size={8.5} fill={O}>
        hours after the rain began
      </Txt>
      <Txt x={16} y={100} size={8.5} fill={O} rotate={-90}>
        discharge (m³/s)
      </Txt>
    </G>
  );
}

// ---------- the long profile and rejuvenation ----------
function LongProfileArt() {
  const old = [];
  for (let x = 30; x <= 320; x += 10) {
    const t = (x - 30) / 290;
    old.push([x, 30 + 110 * (1 - (1 - t) * (1 - t))]);
  }
  const k = old.find((p) => p[0] === 170);
  const fresh = [k, [176, 124]];
  for (let x = 186; x <= 320; x += 10) {
    const s = (x - 176) / 144;
    fresh.push([x, 124 + 36 * (1 - (1 - s) * (1 - s))]);
  }
  return (
    <G>
      <Rect x={320} y={160} width={30} height={20} fill={SKY} />
      <Line x1={20} y1={160} x2={350} y2={160} stroke={BLUE} strokeWidth={1} />
      <Line x1={290} y1={140} x2={350} y2={140} stroke={BLUE} strokeWidth={1} strokeDasharray="4 3" />
      <Path d={line(old.filter((p) => p[0] <= 170))} fill="none" stroke={GREEN} strokeWidth={2.2} />
      <Path d={line(old.filter((p) => p[0] >= 170))} fill="none" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
      <Path d={line(fresh)} fill="none" stroke={GREEN} strokeWidth={2.2} />
      <Txt x={34} y={24} size={8.5} anchor="start" weight="700" fill={O}>
        source
      </Txt>
      <Txt x={178} y={104} size={8.5} anchor="start" weight="700" fill={RED}>
        knickpoint (waterfall)
      </Txt>
      <Txt x={250} y={124} size={8} fill={MUTED}>
        old graded profile
      </Txt>
      <Txt x={292} y={152} size={8} fill={GREEN}>
        new profile
      </Txt>
      <Txt x={348} y={134} size={7.5} anchor="end" fill={BLUE}>
        former sea level
      </Txt>
      <Txt x={348} y={176} size={7.5} anchor="end" fill={BLUE}>
        sea level now
      </Txt>
      <Txt x={150} y={186} size={8} fill={O}>
        base level fell: the river cuts down again
      </Txt>
    </G>
  );
}

// ---------- the atmosphere, drawn to scale ----------
const TX = (t) => 60 + (t + 100) * (240 / 140);
const HY = (km) => 180 - km * 1.6;
const PROFILE = [
  [15, 0],
  [-56, 11],
  [-56, 20],
  [-2, 50],
  [-58, 71],
  [-86, 85],
  [-70, 100],
];
function AtmosphereArt() {
  const bands = [
    [0, 11, SKY],
    [11, 50, LILAC],
    [50, 85, LEAF],
    [85, 100, AMBER],
  ];
  return (
    <G>
      {bands.map(([a, b, f], i) => (
        <Rect key={i} x={60} y={HY(b)} width={240} height={HY(a) - HY(b)} fill={f} />
      ))}
      {[11, 50, 85].map((km) => (
        <Line key={km} x1={60} y1={HY(km)} x2={300} y2={HY(km)} stroke={MUTED} strokeWidth={0.6} strokeDasharray="4 3" />
      ))}
      <Path d={line(PROFILE.map(([t, km]) => [TX(t), HY(km)]))} fill="none" stroke={RED} strokeWidth={2.2} />
      <Line x1={60} y1={HY(0)} x2={300} y2={HY(0)} stroke={O} strokeWidth={1.2} />
      <Line x1={60} y1={HY(0)} x2={60} y2={HY(100)} stroke={O} strokeWidth={1.2} />
      {[-80, -40, 0, 40].map((t) => (
        <Txt key={t} x={TX(t)} y={HY(0) + 12} size={8} fill={MUTED}>
          {String(t)}
        </Txt>
      ))}
      {[0, 20, 40, 60, 80, 100].map((km) => (
        <Txt key={km} x={55} y={HY(km) + 3} size={8} anchor="end" fill={MUTED}>
          {String(km)}
        </Txt>
      ))}
      <Txt x={306} y={HY(5) + 3} size={8.5} anchor="start" weight="700" fill={O}>
        troposphere
      </Txt>
      <Txt x={306} y={HY(11) + 3} size={7} anchor="start" fill={MUTED}>
        tropopause
      </Txt>
      <Txt x={306} y={HY(30) + 3} size={8.5} anchor="start" weight="700" fill={O}>
        stratosphere
      </Txt>
      <Txt x={306} y={HY(50) + 3} size={7} anchor="start" fill={MUTED}>
        stratopause
      </Txt>
      <Txt x={306} y={HY(68) + 3} size={8.5} anchor="start" weight="700" fill={O}>
        mesosphere
      </Txt>
      <Txt x={306} y={HY(85) + 3} size={7} anchor="start" fill={MUTED}>
        mesopause
      </Txt>
      <Txt x={306} y={HY(93) + 3} size={8.5} anchor="start" weight="700" fill={O}>
        thermosphere
      </Txt>
      <Txt x={258} y={HY(27)} size={7.5} fill={MUTED}>
        ozone absorbs UV
      </Txt>
      <Txt x={180} y={HY(0) + 26} size={8.5} fill={O}>
        temperature (°C)
      </Txt>
      <Txt x={22} y={100} size={8.5} fill={O} rotate={-90}>
        height (km)
      </Txt>
    </G>
  );
}

// ---------- the three-cell model ----------
const LX = (lat) => 30 + lat * 3.6;
function Cell({ cx, ry, clockwise, name, wind }) {
  const top = 145 - 2 * ry;
  const cy = 145 - ry;
  return (
    <G>
      <Path d={`M${cx - 50} ${cy} A 50 ${ry} 0 1 1 ${cx + 50} ${cy} A 50 ${ry} 0 1 1 ${cx - 50} ${cy} Z`} fill="none" stroke={BLUE} strokeWidth={1.6} />
      <Head x={clockwise ? cx + 8 : cx - 8} y={top} dx={clockwise ? 1 : -1} dy={0} size={7} fill={BLUE} />
      <Head x={clockwise ? cx - 8 : cx + 8} y={145} dx={clockwise ? -1 : 1} dy={0} size={7} fill={BLUE} />
      <Txt x={cx} y={145 - ry + 3} size={8.5} weight="700" fill={O}>
        {name}
      </Txt>
      <Txt x={cx} y={140} size={7.5} fill={GREEN}>
        {wind}
      </Txt>
    </G>
  );
}
function TricellArt() {
  return (
    <G>
      <Line x1={20} y1={150} x2={370} y2={150} stroke={O} strokeWidth={1.4} />
      <Cell cx={LX(15)} ry={45} clockwise name="Hadley cell" wind="trade winds" />
      <Cell cx={LX(45)} ry={40} clockwise={false} name="Ferrel cell" wind="westerlies" />
      <Cell cx={LX(75)} ry={30} clockwise name="polar cell" wind="polar easterlies" />
      {[0, 30, 60, 90].map((lat) => (
        <Txt key={lat} x={LX(lat)} y={163} size={8} weight="700" fill={O}>
          {`${lat}°`}
        </Txt>
      ))}
      <Txt x={LX(0) + 6} y={176} size={7.5} fill={RED}>
        equatorial low
      </Txt>
      <Txt x={LX(30)} y={176} size={7.5} fill={RED}>
        subtropical high
      </Txt>
      <Txt x={LX(60)} y={176} size={7.5} fill={RED}>
        sub-polar low
      </Txt>
      <Txt x={LX(90) - 8} y={176} size={7.5} fill={RED}>
        polar high
      </Txt>
      <Txt x={LX(0) + 6} y={187} size={7} fill={MUTED}>
        (ITCZ)
      </Txt>
      <Txt x={LX(30)} y={187} size={7} fill={MUTED}>
        (hot deserts)
      </Txt>
      <Txt x={LX(60)} y={187} size={7} fill={MUTED}>
        (polar front)
      </Txt>
      <Txt x={24} y={30} size={7.5} anchor="start" fill={MUTED}>
        rising air at 0° and 60°, sinking air at 30° and 90°
      </Txt>
    </G>
  );
}

// ---------- soil profile ----------
const HORIZONS = [
  { y: 20, h: 14, fill: '#4a3b2a', name: 'O', text: 'leaf litter and humus' },
  { y: 34, h: 46, fill: '#7a5a3a', name: 'A', text: 'topsoil: humus and minerals; eluviation' },
  { y: 80, h: 55, fill: '#b5643c', name: 'B', text: 'subsoil: illuviation (clay, iron, calcium)' },
  { y: 135, h: 40, fill: '#c9b89c', name: 'C', text: 'weathered parent material' },
  { y: 175, h: 24, fill: '#8f9aa3', name: 'R', text: 'bedrock' },
];
function SoilProfileArt() {
  return (
    <G>
      {HORIZONS.map((z) => (
        <G key={z.name}>
          <Rect x={44} y={z.y} width={80} height={z.h} fill={z.fill} stroke={O} strokeWidth={0.6} />
          <Txt x={84} y={z.y + z.h / 2 + 4} size={9.5} weight="700" fill="#ffffff">
            {z.name}
          </Txt>
          <Line x1={124} y1={z.y + z.h / 2} x2={136} y2={z.y + z.h / 2} stroke={MUTED} strokeWidth={0.8} />
          <Txt x={140} y={z.y + z.h / 2 + 3} size={8} anchor="start" fill={O}>
            {z.text}
          </Txt>
        </G>
      ))}
      {[[56, 145], [80, 160], [102, 150], [66, 166], [110, 168]].map(([x, y], i) => (
        <Rect key={i} x={x} y={y} width={9} height={6} rx={1} fill="#8f9aa3" />
      ))}
      <Arrow x1={30} y1={40} x2={30} y2={120} c={BLUE} />
      <Txt x={22} y={80} size={7.5} fill={BLUE} rotate={-90}>
        leaching
      </Txt>
    </G>
  );
}

// ---------- the demographic transition model ----------
const DX = (s) => 50 + s * 60;
const DY = (r) => 170 - r * 2.8;
const BIRTH = [[0, 40], [0.5, 41], [1, 40], [1.5, 38], [2, 30], [2.5, 20], [3, 14], [3.5, 12], [4, 12], [4.5, 10], [5, 9]];
const DEATH = [[0, 36], [0.25, 40], [0.5, 34], [0.75, 39], [1, 36], [1.5, 24], [2, 16], [2.5, 12], [3, 10], [3.5, 10], [4, 10], [4.5, 11], [5, 12]];
function DtmArt() {
  const b = BIRTH.map(([s, r]) => [DX(s), DY(r)]);
  const d = DEATH.map(([s, r]) => [DX(s), DY(r)]);
  const names = ['high', 'early', 'late', 'low', 'declining'];
  const subs = ['fluctuating', 'expanding', 'expanding', 'fluctuating', ''];
  return (
    <G>
      <Path d={poly([...b, ...d.slice().reverse()])} fill={AMBER} />
      {[1, 2, 3, 4].map((s) => (
        <Line key={s} x1={DX(s)} y1={26} x2={DX(s)} y2={170} stroke={MUTED} strokeWidth={0.6} strokeDasharray="3 3" />
      ))}
      <Path d={line(b)} fill="none" stroke={BLUE} strokeWidth={2.2} />
      <Path d={line(d)} fill="none" stroke={RED} strokeWidth={2.2} />
      <Line x1={50} y1={170} x2={350} y2={170} stroke={O} strokeWidth={1.2} />
      <Line x1={50} y1={26} x2={50} y2={170} stroke={O} strokeWidth={1.2} />
      {[0, 1, 2, 3, 4].map((s) => (
        <G key={s}>
          <Txt x={DX(s + 0.5)} y={18} size={8} weight="700" fill={O}>
            {`Stage ${s + 1}`}
          </Txt>
          <Txt x={DX(s + 0.5)} y={182} size={6.5} fill={MUTED}>
            {names[s]}
          </Txt>
          {!!subs[s] && (
            <Txt x={DX(s + 0.5)} y={191} size={6.5} fill={MUTED}>
              {subs[s]}
            </Txt>
          )}
        </G>
      ))}
      {[0, 20, 40].map((r) => (
        <Txt key={r} x={45} y={DY(r) + 3} size={8} anchor="end" fill={MUTED}>
          {String(r)}
        </Txt>
      ))}
      <Txt x={18} y={100} size={8} fill={O} rotate={-90}>
        rate per 1,000 per year
      </Txt>
      <Line x1={70} y1={204} x2={90} y2={204} stroke={BLUE} strokeWidth={2.2} />
      <Txt x={94} y={207} size={8} anchor="start" fill={O}>
        birth rate
      </Txt>
      <Line x1={160} y1={204} x2={180} y2={204} stroke={RED} strokeWidth={2.2} />
      <Txt x={184} y={207} size={8} anchor="start" fill={O}>
        death rate
      </Txt>
      <Rect x={250} y={199} width={14} height={10} fill={AMBER} />
      <Txt x={268} y={207} size={8} anchor="start" fill={O}>
        natural increase
      </Txt>
    </G>
  );
}

// ---------- von Thünen: rings and rent lines ----------
const VT = [
  { name: 'market gardening, dairying', short: 'gardening', rent: 120, zero: 25, fill: LEAF, ink: GREEN },
  { name: 'forestry', short: 'forestry', rent: 100, zero: 45, fill: AMBER, ink: '#9a6b12' },
  { name: 'arable', short: 'arable', rent: 75, zero: 80, fill: SKY, ink: BLUE },
  { name: 'ranching', short: 'ranching', rent: 40, zero: 100, fill: ROSE, ink: RED },
];
const RX = (km) => 200 + km * 1.6;
const RY = (r) => 170 - r;
function VonThunenArt() {
  const radii = [78, 64, 48, 30];
  const ringY = [40, 55, 72, 90];
  return (
    <G>
      {radii.map((r, i) => (
        <Circle key={r} cx={80} cy={108} r={r} fill={VT[3 - i].fill} stroke={O} strokeWidth={0.8} />
      ))}
      <Circle cx={80} cy={108} r={12} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={80} y={111} size={7} weight="700" fill={O}>
        town
      </Txt>
      {['ranching', 'arable', 'forestry', 'gardening'].map((t, i) => (
        <Txt key={t} x={80} y={ringY[i]} size={6.5} weight="700" fill={O}>
          {t}
        </Txt>
      ))}
      <Line x1={200} y1={40} x2={200} y2={170} stroke={O} strokeWidth={1.2} />
      <Line x1={200} y1={170} x2={364} y2={170} stroke={O} strokeWidth={1.2} />
      {VT.map((v) => (
        <Line key={v.name} x1={RX(0)} y1={RY(v.rent)} x2={RX(v.zero)} y2={RY(0)} stroke={v.ink} strokeWidth={2} />
      ))}
      {VT.map((v, i) => (
        <G key={`k${v.short}`}>
          <Line x1={286} y1={50 + i * 13} x2={298} y2={50 + i * 13} stroke={v.ink} strokeWidth={2.4} />
          <Txt x={302} y={53 + i * 13} size={7.5} anchor="start" weight="700" fill={v.ink}>
            {v.short === 'gardening' ? 'market gardening' : v.short}
          </Txt>
        </G>
      ))}
      {[0, 50, 100].map((km) => (
        <Txt key={km} x={RX(km)} y={182} size={8} fill={MUTED}>
          {String(km)}
        </Txt>
      ))}
      <Txt x={282} y={196} size={8} fill={O}>
        distance from the market (km)
      </Txt>
      <Txt x={190} y={108} size={8} fill={O} rotate={-90}>
        locational rent
      </Txt>
    </G>
  );
}

// ---------- Weber’s locational triangle ----------
function WeberArt() {
  return (
    <G>
      <Path d="M60 160 L300 160 L180 40 Z" fill="#f7f9fb" stroke={O} strokeWidth={1} />
      <Circle cx={118} cy={136} r={34} fill="none" stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Circle cx={118} cy={136} r={52} fill="none" stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={118} y1={136} x2={60} y2={160} stroke={RED} strokeWidth={3} />
      <Line x1={118} y1={136} x2={300} y2={160} stroke={RED} strokeWidth={1.2} />
      <Line x1={118} y1={136} x2={180} y2={40} stroke={RED} strokeWidth={1.2} />
      <Circle cx={60} cy={160} r={5} fill={O} />
      <Circle cx={300} cy={160} r={5} fill={O} />
      <Circle cx={180} cy={40} r={5} fill={BLUE} />
      <Circle cx={118} cy={136} r={5} fill={RED} />
      <Circle cx={158.6} cy={103.5} r={4} fill={GREEN} />
      <Txt x={56} y={176} size={8.5} weight="700" fill={O}>
        M1: 3 t
      </Txt>
      <Txt x={300} y={176} size={8.5} weight="700" fill={O}>
        M2: 1 t
      </Txt>
      <Txt x={180} y={30} size={8.5} weight="700" fill={BLUE}>
        market: 1 t of product
      </Txt>
      <Txt x={112} y={130} size={8.5} anchor="end" weight="700" fill={RED}>
        P
      </Txt>
      <Txt x={166} y={106} size={7.5} anchor="start" fill={GREEN}>
        cheap labour site
      </Txt>
      <Txt x={250} y={96} size={7.5} anchor="start" fill={MUTED}>
        isodapanes: equal extra
      </Txt>
      <Txt x={250} y={106} size={7.5} anchor="start" fill={MUTED}>
        transport cost around P
      </Txt>
      <Txt x={12} y={198} size={7.5} anchor="start" fill={O}>
        P, the least-cost point, is pulled towards the heaviest weight to carry
      </Txt>
    </G>
  );
}

// ---------- central places: K = 7 ----------
const hex = (cx, cy, r, rot = 0) => poly(Array.from({ length: 6 }, (_, i) => [cx + r * Math.cos(((60 * i + rot) * Math.PI) / 180), cy + r * Math.sin(((60 * i + rot) * Math.PI) / 180)]));
function CentralPlaceArt() {
  const r = 26;
  const d = Math.sqrt(3) * r;
  const cx = 120;
  const cy = 108;
  const centres = [[cx, cy], ...Array.from({ length: 6 }, (_, i) => [cx + d * Math.cos(((30 + 60 * i) * Math.PI) / 180), cy + d * Math.sin(((30 + 60 * i) * Math.PI) / 180)])];
  return (
    <G>
      <Path d={hex(cx, cy, Math.sqrt(7) * r, 19.1)} fill="#f7f9fb" stroke={RED} strokeWidth={1.4} strokeDasharray="5 4" />
      {centres.map(([x, y], i) => (
        <Path key={i} d={hex(x, y, r)} fill={i ? LEAF : AMBER} stroke={GREEN} strokeWidth={1} />
      ))}
      {centres.slice(1).map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r={3.5} fill={GREEN} />
      ))}
      <Circle cx={cx} cy={cy} r={7} fill={RED} />
      <Circle cx={250} cy={60} r={7} fill={RED} />
      <Txt x={262} y={63} size={8} anchor="start" fill={O}>
        higher-order centre
      </Txt>
      <Circle cx={250} cy={84} r={3.5} fill={GREEN} />
      <Txt x={262} y={87} size={8} anchor="start" fill={O}>
        lower-order centre
      </Txt>
      <Path d={hex(250, 110, 8)} fill={LEAF} stroke={GREEN} strokeWidth={1} />
      <Txt x={262} y={113} size={8} anchor="start" fill={O}>
        lower-order market area
      </Txt>
      <Line x1={242} y1={136} x2={258} y2={136} stroke={RED} strokeWidth={1.4} strokeDasharray="5 4" />
      <Txt x={262} y={139} size={8} anchor="start" fill={O}>
        higher-order area
      </Txt>
      <Txt x={262} y={150} size={8} anchor="start" fill={O}>
        (K = 7: administrative)
      </Txt>
      <Txt x={120} y={200} size={8} fill={MUTED}>
        hexagons fill a plain with no gaps or overlaps
      </Txt>
    </G>
  );
}

// ---------- urban models: Burgess and Hoyt ----------
const arc = (cx, cy, r0, r1, a0, a1) => {
  const p = (r, a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
  const [x0, y0] = p(r1, a0);
  const [x1, y1] = p(r1, a1);
  const [x2, y2] = p(r0, a1);
  const [x3, y3] = p(r0, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${x0.toFixed(1)} ${y0.toFixed(1)} A ${r1} ${r1} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} A ${r0} ${r0} 0 ${large} 0 ${x3.toFixed(1)} ${y3.toFixed(1)} Z`;
};
const ZONE_FILL = ['#c94f3d', GREY, ROSE, AMBER, LEAF];
const HOYT = [
  [2, -15, 25],
  [3, 25, 80],
  [4, 80, 190],
  [5, 190, 250],
  [4, 250, 300],
  [3, 300, 345],
];
function UrbanModelsArt() {
  const radii = [78, 62, 46, 30, 14];
  return (
    <G>
      {radii.map((r, i) => (
        <Circle key={r} cx={88} cy={96} r={r} fill={ZONE_FILL[4 - i]} stroke={O} strokeWidth={0.8} />
      ))}
      {[[88, 1], [110, 2], [126, 3], [142, 4], [158, 5]].map(([x, n]) => (
        <Txt key={n} x={x} y={99} size={8.5} weight="700" fill={n === 1 ? '#ffffff' : O}>
          {String(n)}
        </Txt>
      ))}
      {HOYT.map(([n, a0, a1], i) => (
        <Path key={i} d={arc(272, 96, 14, 78, a0, a1)} fill={ZONE_FILL[n - 1]} stroke={O} strokeWidth={0.8} />
      ))}
      <Circle cx={272} cy={96} r={14} fill={ZONE_FILL[0]} stroke={O} strokeWidth={0.8} />
      <Txt x={272} y={99} size={8.5} weight="700" fill="#ffffff">
        1
      </Txt>
      {HOYT.map(([n, a0, a1], i) => {
        const m = ((a0 + a1) / 2) * (Math.PI / 180);
        return (
          <Txt key={`n${i}`} x={272 + 48 * Math.cos(m)} y={96 + 48 * Math.sin(m) + 3} size={8.5} weight="700" fill={O}>
            {String(n)}
          </Txt>
        );
      })}
      <Txt x={88} y={190} size={9} weight="700" fill={O}>
        Burgess (1925)
      </Txt>
      <Txt x={272} y={190} size={9} weight="700" fill={O}>
        Hoyt (1939)
      </Txt>
      <Txt x={180} y={206} size={7.5} fill={MUTED}>
        1 CBD, 2 transition or industry, 3 working-class, 4 middle-class, 5 high-class or commuter
      </Txt>
    </G>
  );
}

// ---------- the ITCZ over Cameroon in January and July ----------
const ZY = (lat) => 180 - lat * 6;
function ItczPanel({ x, month, itcz, note }) {
  return (
    <G>
      <Rect x={x} y={ZY(25)} width={150} height={ZY(itcz) - ZY(25)} fill={SAND} />
      <Rect x={x} y={ZY(itcz)} width={150} height={ZY(0) - ZY(itcz)} fill={SKY} />
      <Rect x={x} y={ZY(25)} width={150} height={ZY(0) - ZY(25)} fill="none" stroke={O} strokeWidth={1} />
      <Rect x={x + 63} y={ZY(13)} width={24} height={ZY(2) - ZY(13)} fill={GREEN} opacity={0.75} />
      <Line x1={x} y1={ZY(itcz)} x2={x + 150} y2={ZY(itcz)} stroke={RED} strokeWidth={2} strokeDasharray="6 4" />
      <Txt x={x + 75} y={ZY(25) - 6} size={9} weight="700" fill={O}>
        {month}
      </Txt>
      <Txt x={x + 4} y={ZY(itcz) - 4} size={7.5} anchor="start" weight="700" fill={RED}>
        {`ITCZ about ${itcz}°N`}
      </Txt>
      <Txt x={x + 75} y={itcz > 10 ? ZY(23) : ZY(18)} size={7.5} fill={O}>
        Harmattan (cT air)
      </Txt>
      <Txt x={itcz > 10 ? x + 75 : x + 146} y={itcz > 10 ? ZY(17) : ZY(1)} size={7.5} anchor={itcz > 10 ? 'middle' : 'end'} fill={BLUE}>
        {note}
      </Txt>
      <Arrow x1={x + 140} y1={ZY(24)} x2={x + 120} y2={ZY(21)} c={MUTED} />
      <Arrow x1={x + 12} y1={ZY(0.5)} x2={x + 32} y2={ZY(3)} c={BLUE} />
    </G>
  );
}
function ItczArt() {
  return (
    <G>
      <ItczPanel x={36} month="January" itcz={5} note="monsoon (mT)" />
      <ItczPanel x={214} month="July" itcz={20} note="monsoon (mT): rain everywhere" />
      {[0, 5, 10, 15, 20, 25].map((lat) => (
        <Txt key={lat} x={32} y={ZY(lat) + 3} size={7.5} anchor="end" fill={MUTED}>
          {`${lat}°`}
        </Txt>
      ))}
      <Txt x={127} y={ZY(4) + 3} size={7} anchor="start" fill={O}>
        Douala
      </Txt>
      <Txt x={127} y={ZY(9.3) + 3} size={7} anchor="start" fill={O}>
        Garoua
      </Txt>
      <Txt x={127} y={ZY(12) + 3} size={7} anchor="start" fill={O}>
        Kousseri
      </Txt>
      <Txt x={200} y={194} size={7.5} fill={MUTED}>
        green bar: Cameroon, 2°N to 13°N
      </Txt>
    </G>
  );
}

export const A_GEOGRAPHY = {
  // ---------- Lower Sixth: skills ----------
  'agg-gce-0750': {
    title: 'GCE A Level Geography (0750)',
    w: 400,
    h: 192,
    art: PapersArt,
    labels: [],
    facts: [
      'Paper 1 lasts 1½ hours: multiple choice on the whole syllabus, on Saturday 6 June, afternoon.',
      'Paper 2 lasts 3 hours: mapwork, statistics and physical geography, on Monday 8 June, morning.',
      'Paper 3 lasts 3¾ hours: human geography and Cameroon, on Monday 8 June, afternoon.',
      'The bars are drawn to scale, so the papers’ lengths can be compared directly.',
    ],
  },
  'agg-open-system': flowSpec('A drainage basin as an open system', ['Input:\nprecipitation', 'Stores:\ninterception, soil,\ngroundwater', 'Flows:\ninfiltration,\nthroughflow, runoff', 'Outputs:\nevapotranspiration,\nriver discharge'], { perRow: 2, boxW: 132, boxH: 58, note: 'Negative feedback restores balance; positive feedback amplifies change.' }),
  'agg-gradient': {
    title: 'Gradient on a section',
    w: 390,
    h: 190,
    art: GradientArt,
    labels: [],
    facts: [
      'Gradient is the vertical interval divided by the horizontal equivalent, written as 1 in n.',
      'Here B (450 m) is 200 m higher than A (250 m) and 2,000 m away: a gradient of 1 in 10.',
      'Vertical exaggeration is the horizontal scale divided by the vertical scale.',
    ],
  },
  'agg-stream-order': {
    title: 'Stream order in a drainage basin',
    w: 380,
    h: 210,
    art: StreamOrderArt,
    labels: [],
    facts: [
      'Fingertip tributaries are first-order streams.',
      'Two first-order streams join to form a second-order stream; two second-order streams form a third-order stream.',
      'A first-order stream joining a third-order stream leaves it third order.',
      'The watershed, the dashed line, bounds the basin along the highest ground.',
    ],
  },
  'agg-sampling': columnsSpec('Three ways to sample', [
    { head: 'Random', items: ['equal chance', 'random numbers', 'no choice bias'] },
    { head: 'Systematic', items: ['regular intervals', 'every 10 m', 'every fifth house'] },
    { head: 'Stratified', items: ['sub-groups in', 'proportion', 'by rock or age'] },
  ], { colW: 112 }),
  'agg-spearman': {
    title: 'Spearman’s rank: land value and distance',
    w: 330,
    h: 205,
    art: SpearmanArt,
    labels: [],
    facts: [
      'Land value falls as distance from the CBD increases.',
      'For these 8 sample points, rs = 1 − 6 × 166 ÷ 504 = −0.98: a very strong negative correlation.',
      'With 8 pairs this value is well above the critical value at the 0.05 level, so it is significant.',
    ],
  },

  // ---------- plates, rocks, volcanoes ----------
  'agg-plate-margins': columnsSpec('Plate margins', [
    { head: 'Divergent', items: ['plates move apart', 'ridges, rifts', 'basalt volcanoes', 'Mid-Atlantic Ridge'] },
    { head: 'Convergent', items: ['subduction, collision', 'trenches, mountains', 'explosive volcanoes', 'Andes, Himalayas'] },
    { head: 'Transform', items: ['plates slide past', 'strong earthquakes', 'no volcanoes', 'San Andreas'] },
  ], { colW: 120 }),
  'agg-rock-cycle': cycleSpec('The rock cycle', ['Magma', 'Igneous rock\n(cooling)', 'Sediment\n(weathering,\nerosion)', 'Sedimentary\nrock (burial)', 'Metamorphic\nrock (heat,\npressure)'], { centre: 'remelting' }),
  'agg-volcano-types': columnsSpec('Magma and volcano type', [
    { head: 'Shield volcano', items: ['basaltic, low silica', 'runny, hot lava', 'gentle slopes', 'Mauna Loa'] },
    { head: 'Composite cone', items: ['andesitic, viscous', 'gas-rich', 'steep layers', 'Fuji, Vesuvius'] },
    { head: 'Caldera', items: ['chamber empties', 'summit collapses', 'huge depression', 'often a lake'] },
  ], { colW: 120 }),
  'agg-intrusions': {
    title: 'Intrusive features',
    w: 360,
    h: 200,
    art: IntrusionsArt,
    labels: [],
    facts: [
      'A batholith is a huge mass of igneous rock that cooled deep underground.',
      'A dyke cuts vertically across the rock layers.',
      'A sill spreads horizontally along a bedding plane.',
      'A laccolith is a dome-shaped intrusion that arches the layers above it.',
      'Magma that reaches the surface through a vent builds a volcano.',
    ],
  },
  'agg-seismic': columnsSpec('Seismic waves', [
    { head: 'P waves', items: ['primary, fastest', 'push-pull', 'solids and', 'liquids'] },
    { head: 'S waves', items: ['secondary, slower', 'shear', 'solids only', 'not outer core'] },
    { head: 'Surface waves', items: ['slowest', 'along the surface', 'most damage', 'rolling motion'] },
  ], { colW: 112 }),
  'agg-fold-fault': columnsSpec('Folding and faulting', [
    { head: 'Folding', items: ['compression', 'anticline, syncline', 'overfold, nappe', 'fold mountains'] },
    { head: 'Faulting', items: ['tension or compression', 'normal, reverse, tear', 'horst, graben', 'rift valleys'] },
  ], { colW: 150 }),
  'agg-folds': {
    title: 'Anticline and syncline',
    w: 350,
    h: 196,
    art: FoldsArt,
    labels: [],
    facts: [
      'An anticline is an upfold: the layers dip away from its axis.',
      'A syncline is a downfold: the layers dip towards its axis.',
      'The sloping sides of a fold are its limbs.',
      'Folds form when rock layers are compressed.',
    ],
  },
  'agg-faults': {
    title: 'Horst and graben',
    w: 360,
    h: 190,
    art: FaultsArt,
    labels: [],
    facts: [
      'Tension pulls the crust apart and normal faults form.',
      'The block that sinks between two faults is a graben, forming a rift valley.',
      'The blocks left standing higher are horsts, or block mountains.',
      'The exposed fault planes form steep fault scarps, and the rock layers are offset across each fault.',
    ],
  },
  'agg-weathering-types': treeSpec('Types of weathering', 'Weathering in place', [
    { name: 'Mechanical', items: ['freeze-thaw', 'insolation', 'pressure release', 'salt crystals'] },
    { name: 'Chemical', items: ['hydrolysis', 'carbonation', 'oxidation', 'hydration'] },
    { name: 'Biological', items: ['roots in cracks', 'burrowing', 'plant acids'] },
  ], { colW: 116 }),
  'agg-peltier': {
    title: 'Climate and weathering (after Peltier)',
    w: 340,
    h: 212,
    art: PeltierArt,
    labels: [],
    facts: [
      'Chemical weathering is strongest where it is both hot and wet, as at Yaoundé.',
      'Moderate chemical weathering occurs in warm climates with less rain, such as Maroua.',
      'Frost action dominates where it is cold but moist.',
      'Weathering is weak, and mainly mechanical, in dry climates.',
    ],
  },
  'agg-slope-forces': {
    title: 'Forces on a slope',
    w: 390,
    h: 190,
    art: SlopeForcesArt,
    labels: [],
    facts: [
      'The weight of material on a slope acts straight down.',
      'Part of it pulls the material downslope: the shear stress.',
      'Friction, cohesion and roots resist movement: the shear strength.',
      'The slope stays stable while shear strength exceeds shear stress.',
    ],
  },
  'agg-mass-movement': columnsSpec('Mass movement: speed and water', [
    { head: 'Slow', items: ['soil creep', 'solifluction', 'terracettes', 'mm per year'] },
    { head: 'Flows (wet)', items: ['earthflow', 'mudflow', 'saturated fines', 'fast'] },
    { head: 'Slides and falls', items: ['landslide', 'rotational slump', 'rockfall', 'very fast'] },
  ], { colW: 116 }),

  // ---------- rivers ----------
  'agg-hydrograph': {
    title: 'A storm hydrograph',
    w: 350,
    h: 206,
    art: HydrographArt,
    labels: [],
    facts: [
      'Rainfall peaks 3 hours after the storm begins; discharge peaks at 52 m³/s after 14 hours.',
      'The lag time, from peak rainfall to peak discharge, is 11 hours.',
      'The rising limb is steep; the falling limb is gentler as water drains away more slowly.',
      'Base flow from groundwater stays near 8 to 10 m³/s throughout.',
      'The graph is drawn to scale.',
    ],
  },
  'agg-river-processes': treeSpec('River processes', 'The river’s energy', [
    { name: 'Erosion', items: ['hydraulic action', 'abrasion, attrition', 'cavitation', 'solution'] },
    { name: 'Transport', items: ['traction', 'saltation', 'suspension', 'solution'] },
    { name: 'Deposition', items: ['velocity falls', 'coarse first', 'sorted sediment'] },
  ], { colW: 116 }),
  'agg-long-profile': {
    title: 'The long profile and rejuvenation',
    w: 360,
    h: 196,
    art: LongProfileArt,
    labels: [],
    facts: [
      'A graded long profile is a smooth concave curve from source to mouth.',
      'When base level falls, the river cuts a new, lower profile from the mouth upstream.',
      'Where the new profile meets the old one there is a knickpoint, often a waterfall.',
      'The old profile downstream of the knickpoint is left above the river, as terraces.',
    ],
  },
  'agg-delta-types': columnsSpec('Delta types', [
    { head: 'Arcuate', items: ['fan-shaped', 'many distributaries', 'Nile, Niger'] },
    { head: 'Bird’s foot', items: ['long fingers', 'weak waves', 'Mississippi'] },
    { head: 'Cuspate', items: ['pointed', 'strong waves', 'Tiber'] },
  ], { colW: 112 }),

  // ---------- atmosphere ----------
  'agg-atmosphere': {
    title: 'The layers of the atmosphere',
    w: 380,
    h: 212,
    art: AtmosphereArt,
    labels: [],
    facts: [
      'In the troposphere temperature falls with height, from about 15 °C at the surface to about −56 °C at the tropopause near 11 km.',
      'In the stratosphere temperature rises, because ozone absorbs ultraviolet radiation, to about 0 °C at the stratopause near 50 km.',
      'In the mesosphere temperature falls again, to the coldest levels near 85 km.',
      'In the thermosphere temperature rises again.',
      'Values follow the standard atmosphere for mid-latitudes; over the equator the tropopause is higher, near 16 km.',
    ],
  },
  'agg-energy-budget': flowSpec('The global energy budget', ['Incoming\nshort-wave\nradiation', 'About 30%\nreflected\n(albedo)', 'Absorbed by\nair and surface', 'Surface emits\nlong-wave\nradiation', 'Greenhouse gases\nabsorb and\nre-radiate', 'Tropical surplus\ncarried\npoleward'], { perRow: 3, boxW: 112, boxH: 58 }),
  'agg-wind-forces': columnsSpec('Forces on moving air', [
    { head: 'Pressure gradient', items: ['high to low', 'close isobars:', 'strong wind'] },
    { head: 'Coriolis', items: ['right in north', 'left in south', 'zero at equator'] },
    { head: 'Friction', items: ['slows surface wind', 'winds cross isobars', 'none aloft'] },
  ], { colW: 116 }),
  'agg-tricellular': {
    title: 'The three-cell model',
    w: 390,
    h: 196,
    art: TricellArt,
    labels: [],
    facts: [
      'In the Hadley cell air rises at the equator and sinks near 30°; the trade winds return it to the equator.',
      'In the Ferrel cell the surface westerlies blow from about 30° towards 60°.',
      'In the polar cell air sinks at the pole and the polar easterlies flow towards 60°.',
      'Low pressure lies at the equator and 60°; high pressure at 30° and the poles.',
    ],
  },
  'agg-air-masses': columnsSpec('Air masses over West Africa', [
    { head: 'Maritime tropical', items: ['Gulf of Guinea', 'warm, humid', 'south-west monsoon', 'rainy season'] },
    { head: 'Continental tropical', items: ['Sahara', 'hot, dry, dusty', 'Harmattan', 'dry season'] },
  ], { colW: 150, arrow: true }),
  'agg-depression': flowSpec('Life of a mid-latitude depression', ['Wave forms on\nthe polar front', 'Warm sector\ndevelops', 'Warm and cold\nfronts advance', 'Cold front\ncatches up:\nocclusion', 'Depression\nfills and dies'], { perRow: 3, boxW: 112, boxH: 58 }),
  'agg-depression-cyclone': columnsSpec('Depression and tropical cyclone', [
    { head: 'Depression', items: ['polar front', 'fronts, warm sector', 'air-mass contrast', 'moderate winds', 'land or sea'] },
    { head: 'Tropical cyclone', items: ['sea over 26 °C', 'eye, no fronts', 'latent heat', 'over 119 km/h', 'storm surge'] },
  ], { colW: 150 }),

  // ---------- soils and biomes ----------
  'agg-soil-profile': {
    title: 'A soil profile',
    w: 340,
    h: 205,
    art: SoilProfileArt,
    labels: [],
    facts: [
      'The O horizon is leaf litter and humus.',
      'The A horizon is the topsoil, where humus mixes with minerals and material is washed out.',
      'The B horizon is the subsoil, where clay, iron or calcium accumulate.',
      'The C horizon is weathered parent material above the bedrock.',
      'Leaching carries soluble minerals downwards.',
    ],
  },
  'agg-pedogenesis': columnsSpec('Three soil-forming processes', [
    { head: 'Podzolisation', items: ['cool, wet', 'conifers', 'acid leaching', 'bleached E', 'iron pan'] },
    { head: 'Ferrallitisation', items: ['hot, humid', 'rainforest', 'silica removed', 'iron left', 'laterite'] },
    { head: 'Calcification', items: ['dry grassland', 'low leaching', 'calcium in B', 'deep humus', 'chernozem'] },
  ], { colW: 116 }),
  'agg-energy-flow': flowSpec('Energy flow through an ecosystem', ['Sun', 'Producers\n(plants)', 'Primary\nconsumers', 'Secondary\nconsumers', 'Tertiary\nconsumers', 'Decomposers\nrecycle\nnutrients'], { perRow: 3, boxW: 104, boxH: 54, note: 'About 10 per cent of energy passes to each level.' }),
  'agg-biomes': columnsSpec('Five world biomes', [
    { head: 'Rainforest', items: ['hot, wet', 'layered', 'ferrallitic'] },
    { head: 'Savanna', items: ['dry season', 'grass, trees', 'fire'] },
    { head: 'Desert', items: ['under 250 mm', 'xerophytes', 'thin soils'] },
    { head: 'Deciduous', items: ['four seasons', 'oak, beech', 'brown earth'] },
    { head: 'Tundra', items: ['very cold', 'permafrost', 'mosses'] },
  ], { colW: 86 }),

  // ---------- population and settlement ----------
  'agg-dtm': {
    title: 'The demographic transition model',
    w: 370,
    h: 214,
    art: DtmArt,
    labels: [],
    facts: [
      'Stage 1: birth and death rates are both high, so population barely grows.',
      'Stage 2: death rates fall while birth rates stay high, so population grows rapidly.',
      'Stage 3: birth rates fall too, and growth slows.',
      'Stage 4: both rates are low and population is stable.',
      'Stage 5: the death rate exceeds the birth rate and population falls.',
      'The shaded gap between the lines is the natural increase.',
    ],
  },
  'agg-malthus-boserup': columnsSpec('Population and resources', [
    { head: 'Malthus (1798)', items: ['population grows', 'geometrically', 'food arithmetically', 'checks: famine,', 'disease, war'] },
    { head: 'Boserup (1965)', items: ['population pressure', 'drives innovation', 'shorter fallow', 'terraces, irrigation', 'more food'] },
  ], { colW: 150 }),
  'agg-central-place': {
    title: 'Central places (K = 7)',
    w: 380,
    h: 206,
    art: CentralPlaceArt,
    labels: [],
    facts: [
      'Each lower-order centre serves a small hexagonal market area.',
      'A higher-order centre serves a much larger area that includes six lower-order areas besides its own: K = 7.',
      'Hexagons cover a uniform plain with no gaps or overlaps.',
    ],
  },
  'agg-urban-models': {
    title: 'Urban models: Burgess and Hoyt',
    w: 380,
    h: 212,
    art: UrbanModelsArt,
    labels: [],
    facts: [
      'Burgess (1925) shows concentric zones around the CBD.',
      'Hoyt (1939) shows sectors growing out from the CBD along transport routes.',
      'In both, zone 1 is the CBD; industry and poor housing lie near it, wealthier housing further out.',
    ],
  },
  'agg-drainage-patterns': columnsSpec('Drainage patterns', [
    { head: 'Dendritic', items: ['tree-like', 'uniform rock'] },
    { head: 'Radial', items: ['outward', 'dome, volcano'] },
    { head: 'Trellis', items: ['right angles', 'folded rocks'] },
    { head: 'Centripetal', items: ['inward', 'basin'] },
  ], { colW: 92 }),
  'agg-essay-plan': flowSpec('A physical geography essay', ['Decode the\nquestion', 'Introduction:\nterms and\nargument', 'Process', 'Landform or\npattern', 'Named example\nand diagram', 'Conclusion:\njudgement'], { perRow: 3, boxW: 108, boxH: 56 }),

  // ---------- Upper Sixth ----------
  'agg-paper-plan': columnsSpec('GCE Geography (0750)', [
    { head: 'Paper 1 (1½ h)', items: ['multiple choice', 'whole syllabus', '6 June, pm'] },
    { head: 'Paper 2 (3 h)', items: ['A: mapwork,', 'statistics', 'physical essays', '8 June, am'] },
    { head: 'Paper 3 (3¾ h)', items: ['human geography', 'Cameroon', '8 June, pm'] },
  ], { colW: 116 }),
  'agg-essay-structure': flowSpec('Building a Paper 3 essay', ['Command word,\ntopic, place', 'Introduction:\ndefinitions,\nargument', 'Point and\nexplanation', 'Located\nevidence\nand sketch', 'Link to the\nquestion', 'Conclusion:\njudgement'], { perRow: 3, boxW: 108, boxH: 58 }),
  'agg-von-thunen': {
    title: 'Von Thünen’s rings and rent lines',
    w: 390,
    h: 204,
    art: VonThunenArt,
    labels: [],
    facts: [
      'Each land use has a rent line that falls with distance from the market; market gardening and dairying have the steepest.',
      'Where one line falls below the next, the land use changes, giving rings around the town.',
      'From the centre: market gardening and dairying, forestry, arable, then ranching.',
      'Beyond the ranching ring no farming pays.',
    ],
  },
  'agg-farming-systems': columnsSpec('Farming systems', [
    { head: 'Intensive', items: ['high input per ha', 'paddy rice', 'market gardens', 'dairying'] },
    { head: 'Extensive', items: ['low input per ha', 'prairie wheat', 'ranching', 'Adamawa cattle'] },
    { head: 'Plantation', items: ['large estates', 'one tree crop', 'export', 'CDC palms'] },
  ], { colW: 116 }),
  'agg-weber': {
    title: 'Weber’s locational triangle',
    w: 370,
    h: 206,
    art: WeberArt,
    labels: [],
    facts: [
      'The firm needs 3 tonnes of material M1 and 1 tonne of M2 for each tonne of product sold at the market.',
      'The least-cost point P is pulled towards M1, the heaviest weight to carry.',
      'Isodapanes join points of equal extra transport cost around P.',
      'A cheap labour site is chosen only if its labour saving exceeds the extra transport cost there.',
    ],
  },
  'agg-globalisation': flowSpec('Why manufacturing moved', ['Cheaper labour\nabroad', 'Containers and\ncheap transport', 'Internet and\ncommunications', 'Trade\nliberalisation', 'Export zones\nand incentives', 'Global value\nchains'], { perRow: 3, boxW: 112, boxH: 56 }),
  'agg-energy-mix': treeSpec('Energy sources', 'World energy', [
    { name: 'Non-renewable', items: ['coal', 'oil', 'natural gas', 'uranium'] },
    { name: 'Renewable', items: ['hydropower', 'solar, wind', 'biomass', 'geothermal'] },
  ], { colW: 156 }),
  'agg-energy-impacts': columnsSpec('Costs of energy sources', [
    { head: 'Fossil fuels', items: ['carbon dioxide', 'air pollution', 'oil spills', 'gas flaring'] },
    { head: 'Large dams', items: ['people moved', 'forest flooded', 'sediment trapped', 'river changed'] },
    { head: 'Solar, wind', items: ['intermittent', 'storage needed', 'land use', 'low emissions'] },
  ], { colW: 116 }),

  // ---------- Cameroon: physical ----------
  'agg-cmr-geology': columnsSpec('The geology of Cameroon', [
    { head: 'Basement', items: ['Precambrian', 'granite, gneiss', 'most of the land', 'Congo craton'] },
    { head: 'Basins', items: ['Douala, Kribi', 'Rio del Rey (oil)', 'Mamfe, Benue', 'Lake Chad'] },
    { head: 'Volcanic line', items: ['Gulf islands', 'Mount Cameroon', 'Bamboutos, Oku', 'to the Adamawa'] },
  ], { colW: 120 }),
  'agg-cmr-relief': flowSpec('Relief regions from the coast to Lake Chad', ['Coastal lowlands\nbelow 200 m', 'Southern plateau\n600 to 900 m', 'Western highlands:\nMount Cameroon,\nOku', 'Adamawa plateau\n1,000 to\n1,500 m', 'Benue depression\nabout 200 m', 'Chad plain and\nMandara\nmountains'], { perRow: 3, boxW: 118, boxH: 60 }),
  'agg-cmr-itcz': {
    title: 'The ITCZ over Cameroon',
    w: 380,
    h: 200,
    art: ItczArt,
    labels: [],
    facts: [
      'In January the ITCZ lies near 5°N: the dry Harmattan covers almost all of Cameroon.',
      'In July the ITCZ reaches about 20°N: moist monsoon air covers the whole country.',
      'Douala lies under monsoon air for most of the year; Kousseri only for a few months.',
    ],
  },
  'agg-cmr-climates': columnsSpec('Climatic domains of Cameroon', [
    { head: 'Equatorial', items: ['south plateau', '2 rainy seasons', '1,500-2,000 mm'] },
    { head: 'Cameroonian', items: ['coast, highlands', '1 long wet season', '4,000-10,000 mm'] },
    { head: 'Sudanian', items: ['Adamawa, North', '1 rainy season', '1,000-1,500 mm'] },
    { head: 'Sahelian', items: ['Far North', '3 to 4 wet months', 'under 800 mm'] },
  ], { colW: 98 }),
  'agg-cmr-basins': treeSpec('Drainage basins of Cameroon', 'Adamawa watershed', [
    { name: 'Atlantic', items: ['Sanaga', 'Wouri, Nyong', 'Ntem, Mungo'] },
    { name: 'Congo', items: ['Dja', 'Boumba', 'Kadéï, Sangha'] },
    { name: 'Niger', items: ['Benue', 'Faro', 'Mayo Kebbi'] },
    { name: 'Chad', items: ['Logone', 'Chari', 'Lake Chad'] },
  ], { colW: 96 }),
  'agg-cmr-hydro': flowSpec('Making the Sanaga’s power usable', ['Wet season:\nhigh flow', 'Lom Pangar\nstores water', 'Dry season:\nwater released', 'Nachtigal, Song\nLoulou, Edéa\ngenerate', 'Grid and the\nEdéa smelter'], { perRow: 3, boxW: 112, boxH: 58 }),
  'agg-cmr-vegetation': flowSpec('Vegetation from the coast to Lake Chad', ['Mangroves', 'Dense\nrainforest', 'Forest-savanna\nmosaic', 'Sudanian\nsavanna', 'Sahelian\nsteppe'], { perRow: 3, boxW: 108, note: 'On high ground: montane forest and grassland.' }),
  'agg-cmr-soils': columnsSpec('Soils of Cameroon', [
    { head: 'Ferrallitic', items: ['humid south', 'red, leached', 'few nutrients'] },
    { head: 'Ferruginous', items: ['savanna north', 'laterite crusts', 'dry season'] },
    { head: 'Volcanic', items: ['West, South-West', 'dark, fertile', 'dense farming'] },
    { head: 'Vertisols', items: ['Far North', 'cracking clays', 'muskwari'] },
  ], { colW: 98 }),
  'agg-cmr-integration': columnsSpec('Climate, vegetation and soil zones', [
    { head: 'Humid south', items: ['heavy rain', 'rainforest', 'ferrallitic'] },
    { head: 'Highlands', items: ['cool, wet', 'montane', 'volcanic'] },
    { head: 'Sudanian', items: ['long dry season', 'savanna, fire', 'ferruginous'] },
    { head: 'Sahel', items: ['low rainfall', 'steppe', 'vertisols, sand'] },
  ], { colW: 98 }),
  'agg-cmr-hazards': treeSpec('Natural hazards in Cameroon', 'Hazards', [
    { name: 'Lake gas', items: ['Monoun 1984', 'Nyos 1986', 'degassing'] },
    { name: 'Floods', items: ['Logone, Benue', 'Douala', 'dam releases'] },
    { name: 'Landslides', items: ['highlands', 'Gouache 2019', 'wet, steep'] },
    { name: 'Volcanic', items: ['Mount', 'Cameroon', '1999, 2000'] },
  ], { colW: 96 }),

  // ---------- Cameroon: human ----------
  'agg-cmr-population': columnsSpec('Population density in Cameroon', [
    { head: 'Dense', items: ['West, North-West', 'Littoral (Douala)', 'Centre (Yaoundé)', 'Far North plains'] },
    { head: 'Sparse', items: ['East', 'South', 'much of Adamawa', 'Benue valley'] },
  ], { colW: 150 }),
  'agg-cmr-urban': flowSpec('Rapid urban growth', ['Push: low farm\nincomes, few\nservices', 'Pull: jobs,\nschools,\nhospitals', 'Douala and\nYaoundé: over\n3 million each', 'Problems:\nhousing, floods,\ntraffic', 'Responses:\nplanning, drains,\nupgrading'], { perRow: 3, boxW: 114, boxH: 60 }),
  'agg-cmr-dualism': columnsSpec('Two kinds of agriculture', [
    { head: 'Subsistence farms', items: ['family plots', 'hand tools', 'food crops', 'women’s labour'] },
    { head: 'Agro-industries', items: ['large estates', 'CDC, PAMOL', 'SODECOTON, SEMRY', 'export, processing'] },
  ], { colW: 150 }),
  'agg-cmr-crops': treeSpec('Crop regions of Cameroon', 'Main crops by zone', [
    { name: 'Forest south', items: ['cocoa', 'robusta coffee', 'oil palm'] },
    { name: 'Highlands', items: ['arabica coffee', 'maize, beans', 'tea'] },
    { name: 'Coast', items: ['bananas', 'rubber', 'palm estates'] },
    { name: 'North', items: ['cotton', 'sorghum, millet', 'rice, onions'] },
  ], { colW: 96 }),
  'agg-cmr-forestry': flowSpec('Using the forest sustainably', ['Permanent and\nnon-permanent\nestate', 'Management\nunits with\nplans', 'Community and\ncouncil forests', 'Forest taxes\nshared with\ncouncils', 'Parks: Dja,\nLobéké, Nki'], { perRow: 3, boxW: 112, boxH: 60, note: 'The forestry law of 20 January 1994.' }),
  'agg-cmr-livestock': columnsSpec('Fisheries and livestock', [
    { head: 'Fisheries', items: ['industrial trawlers', 'artisanal canoes', 'Lagdo, Maga, Chad', 'fish farming'] },
    { head: 'Livestock', items: ['Adamawa ranching', 'Fulani herders', 'transhumance', 'yaéré pastures'] },
  ], { colW: 150 }),
  'agg-cmr-minerals': treeSpec('Minerals and energy of Cameroon', 'Resources', [
    { name: 'Hydrocarbons', items: ['oil since 1977', 'gas near Kribi', 'SONARA, Limbe'] },
    { name: 'Ores', items: ['bauxite', 'iron ore', 'cobalt, nickel'] },
    { name: 'Gold', items: ['artisanal', 'East, Adamawa'] },
    { name: 'Power', items: ['Sanaga hydro', 'Lagdo', 'Kribi gas'] },
  ], { colW: 96 }),
  'agg-cmr-industry': columnsSpec('Industry in Cameroon', [
    { head: 'Import substitution', items: ['drinks, soap', 'textiles, cement', 'after 1960'] },
    { head: 'Agro-processing', items: ['sugar, palm oil', 'cotton, cocoa', 'timber'] },
    { head: 'Heavy industry', items: ['ALUCAM, Edéa', 'SONARA, Limbe', 'Douala zones'] },
  ], { colW: 116 }),
  'agg-cmr-transport': treeSpec('Transport in Cameroon', 'Networks', [
    { name: 'Roads', items: ['main axes', 'Chad, CAR', 'corridors'] },
    { name: 'Railway', items: ['Douala-Yaoundé', 'Ngaoundéré', 'Camrail'] },
    { name: 'Ports', items: ['Douala (Wouri)', 'Kribi (2018)', 'Limbe, Garoua'] },
    { name: 'Air', items: ['Douala', 'Nsimalen', 'Garoua, Maroua'] },
  ], { colW: 96 }),
  'agg-cmr-trade': columnsSpec('Cameroon’s trade: usually a deficit', [
    { head: 'Exports', items: ['crude oil, gas', 'cocoa', 'timber', 'cotton, coffee'] },
    { head: 'Imports', items: ['fuels', 'rice, wheat, fish', 'machinery', 'vehicles'] },
  ], { colW: 150 }),

  // ---------- world trade and development ----------
  'agg-trade-blocs': flowSpec('Levels of economic integration', ['Free trade area:\nno internal\ntariffs', 'Customs union:\ncommon external\ntariff', 'Common market:\nfree movement of\nlabour, capital', 'Monetary union:\none currency\n(CEMAC, euro)'], { perRow: 2, boxW: 132, boxH: 60 }),
  'agg-chokepoints': columnsSpec('Strategic sea passages', [
    { head: 'Canals', items: ['Suez (1869)', 'Mediterranean, Red Sea', 'Panama (1914)', 'Atlantic, Pacific'] },
    { head: 'Straits', items: ['Malacca', 'Hormuz', 'Bab el-Mandeb', 'Gibraltar'] },
  ], { colW: 150 }),
  'agg-hdi': columnsSpec('Measuring development', [
    { head: 'GDP per capita', items: ['output ÷ people', 'easy to compare', 'hides inequality', 'ignores unpaid work'] },
    { head: 'HDI (UNDP, 1990)', items: ['life expectancy', 'education', 'income (GNI)', 'from 0 to 1'] },
  ], { colW: 150, arrow: true }),
  'agg-dev-strategies': columnsSpec('Development strategies', [
    { head: 'Top-down', items: ['dams, highways', 'state or donors', 'large impact', 'may ignore locals'] },
    { head: 'Bottom-up', items: ['wells, schools', 'cooperatives', 'microcredit', 'small scale'] },
  ], { colW: 150 }),
  'agg-essay-chart': treeSpec('Which map or chart?', 'Type of data', [
    { name: 'Areas', items: ['choropleth', 'rates, densities'] },
    { name: 'Points', items: ['proportional', 'symbols'] },
    { name: 'Movement', items: ['flow lines', 'width = volume'] },
    { name: 'Spread', items: ['dispersion', 'graph, IQR'] },
  ], { colW: 96 }),
  'agg-location-quotient': flowSpec('Location quotient, step by step', ['Regional share\nof the activity', 'National share\nof the activity', 'Divide:\nregional ÷\nnational', 'LQ above 1:\nconcentrated'], { perRow: 2, boxW: 132, boxH: 56, note: 'Example: 30% ÷ 15% gives an LQ of 2.0' }),
  'agg-final-term': flowSpec('The final term before the GCE', ['Paper 1\nmarathon', 'Paper 2\nmapwork clinic', 'Mock\n(GCE timings)', 'Remediation\nand sketches', 'The GCE\nin June'], { perRow: 3, boxW: 108 }),
  'agg-mock-review': cycleSpec('Learning from the mock', ['Sit the mock', 'Mark against\nthe criteria', 'List errors\nby type', 'Fix the most\nfrequent', 'Practise\nsketches'], { centre: 'remediation' }),
};
