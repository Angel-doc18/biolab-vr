// Economics figures for Form 3. The graphs are drawn to scale from the
// lessons' own figures: Ayuk's production possibility line (4 hectares, each
// giving 2 t maize or 1 t groundnuts); the tomato market with demand
// P = 10,000 − 100Q and supply P = 100Q (equilibrium 5,000 FCFA, 50 crates),
// and the poor harvest that shifts supply to P = 100Q + 2,000 (new equilibrium
// 6,000 FCFA, 40 crates); rent of three example plots; the class survey of 40
// workers; the tailor's monthly revenue, costs and profit; and the bakery's
// U-shaped average cost curve (optimum 400 loaves at 115 FCFA). Other
// figures use the shared chart builders.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const DEM = '#1f6fb2';
const SUP = '#b8433f';
const GOLD = '#9a6a12';
const GREEN = '#2f7d4f';
const dash = '3 3';
const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// Two arrowed axes with ticks and axis titles.
function Axes({ ox, oy, xlen, ylen, xt, yt, xlab, ylab, ylabX }) {
  return (
    <G>
      <Arrow x1={ox} y1={oy} x2={ox + xlen + 10} y2={oy} />
      <Arrow x1={ox} y1={oy} x2={ox} y2={oy - ylen - 10} />
      {xt.map(([x, t]) => (
        <G key={`x${t}`}>
          <Line x1={x} y1={oy} x2={x} y2={oy + 3} stroke={O} strokeWidth={1} />
          <Txt x={x} y={oy + 12} size={7.5} fill={MUTED}>
            {t}
          </Txt>
        </G>
      ))}
      {yt.map(([y, t]) => (
        <G key={`y${t}`}>
          <Line x1={ox - 3} y1={y} x2={ox} y2={y} stroke={O} strokeWidth={1} />
          <Txt x={ox - 5} y={y + 3} size={7.5} anchor="end" fill={MUTED}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={ox + xlen + 4} y={oy + 25} size={8.5} anchor="end" fill={O}>
        {xlab}
      </Txt>
      <Txt x={ylabX} y={oy - ylen / 2} size={8.5} fill={O} rotate={-90}>
        {ylab}
      </Txt>
    </G>
  );
}

function Dot({ x, y, c = O, label, dx = 6, dy = -5, anchor = 'start', size = 9, weight = '700' }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={3.5} fill={c} />
      {label ? (
        <Txt x={x + dx} y={y + dy} size={size} weight={weight} anchor={anchor} fill={c}>
          {label}
        </Txt>
      ) : null}
    </G>
  );
}

// ---------- Ayuk's production possibility line ----------
function PplArt() {
  const ox = 60;
  const oy = 170;
  const x = (m) => ox + m * 30; // maize, tonnes
  const y = (g) => oy - g * 35; // groundnuts, tonnes
  const pts = [['A', 0, 4], ['B', 2, 3], ['C', 4, 2], ['D', 6, 1], ['E', 8, 0]];
  return (
    <G>
      <Axes ox={ox} oy={oy} xlen={252} ylen={148} xt={[2, 4, 6, 8].map((m) => [x(m), m])} yt={[1, 2, 3, 4].map((g) => [y(g), g])} xlab="Maize (tonnes)" ylab="Groundnuts (tonnes)" ylabX={ox - 26} />
      <Line x1={x(0)} y1={y(4)} x2={x(8)} y2={y(0)} stroke={DEM} strokeWidth={2.2} />
      <Line x1={x(2)} y1={y(3)} x2={x(4)} y2={y(3)} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Line x1={x(4)} y1={y(3)} x2={x(4)} y2={y(2)} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Txt x={x(3)} y={y(3) - 6} size={8} fill={MUTED}>
        +2 maize
      </Txt>
      <Txt x={x(4) + 4} y={y(2.5) + 3} size={8} anchor="start" fill={MUTED}>
        −1 groundnuts
      </Txt>
      {pts.map(([k, m, g]) => (
        <Dot key={k} x={x(m)} y={y(g)} c={DEM} label={k} dx={k === 'E' ? 0 : k === 'A' ? -7 : -5} dy={k === 'E' ? -8 : k === 'A' ? -4 : 13} anchor={k === 'E' ? 'middle' : 'end'} />
      ))}
      <Dot x={x(2)} y={y(1)} c={GOLD} label="F: land unused" dx={6} dy={4} size={8.5} weight="500" />
      <Dot x={x(7)} y={y(3)} c={SUP} label="G: not possible" dx={-6} dy={-7} anchor="end" size={8.5} weight="500" />
    </G>
  );
}

// ---------- the tomato market ----------
const TF = { ox: 66, oy: 172 };
const tx = (q) => TF.ox + q * 2.4; // crates a day, 0 to 100
const ty = (p) => TF.oy - p * 0.014; // FCFA a crate, 0 to 10,000
function TomatoAxes() {
  return (
    <Axes ox={TF.ox} oy={TF.oy} xlen={240} ylen={140} xt={[20, 40, 60, 80].map((q) => [tx(q), q])} yt={[2000, 4000, 6000, 8000].map((p) => [ty(p), fmt(p)])} xlab="Quantity (crates a day)" ylab="Price (FCFA a crate)" ylabX={TF.ox - 44} />
  );
}

function Curve({ q1, p1, q2, p2, c, label }) {
  return (
    <G>
      <Line x1={tx(q1)} y1={ty(p1)} x2={tx(q2)} y2={ty(p2)} stroke={c} strokeWidth={2.2} />
      <Txt x={tx(q2) + 6} y={ty(p2) + 4} size={9.5} weight="700" anchor="start" fill={c}>
        {label}
      </Txt>
    </G>
  );
}

function Guide({ q, p, label, c = O, dx = 8, dy = 4, anchor = 'start' }) {
  return (
    <G>
      <Line x1={TF.ox} y1={ty(p)} x2={tx(q)} y2={ty(p)} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Line x1={tx(q)} y1={ty(p)} x2={tx(q)} y2={TF.oy} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Dot x={tx(q)} y={ty(p)} c={c} label={label} dx={dx} dy={dy} anchor={anchor} />
    </G>
  );
}

function PriceArt() {
  return (
    <G>
      <TomatoAxes />
      <Curve q1={10} p1={9000} q2={90} p2={1000} c={DEM} label="D" />
      <Curve q1={10} p1={1000} q2={90} p2={9000} c={SUP} label="S" />
      <Line x1={tx(20)} y1={ty(8000)} x2={tx(80)} y2={ty(8000)} stroke={GOLD} strokeWidth={1.4} strokeDasharray={dash} />
      <Txt x={tx(50)} y={ty(8000) - 6} size={8.5} fill={GOLD}>
        surplus of 60 crates
      </Txt>
      <Line x1={tx(20)} y1={ty(2000)} x2={tx(80)} y2={ty(2000)} stroke={GREEN} strokeWidth={1.4} strokeDasharray={dash} />
      <Txt x={tx(34)} y={ty(2000) + 12} size={8.5} fill={GREEN}>
        shortage
      </Txt>
      <Txt x={tx(34)} y={ty(2000) + 22} size={8.5} fill={GREEN}>
        of 60 crates
      </Txt>
      <Guide q={50} p={5000} label="E" dx={0} dy={-8} anchor="middle" />
    </G>
  );
}

function HarvestArt() {
  return (
    <G>
      <TomatoAxes />
      <Curve q1={10} p1={9000} q2={90} p2={1000} c={DEM} label="D" />
      <Curve q1={10} p1={1000} q2={90} p2={9000} c={SUP} label="S1" />
      <Curve q1={0} p1={2000} q2={75} p2={9500} c={GOLD} label="S2" />
      <Arrow x1={tx(18)} y1={ty(2000)} x2={tx(2)} y2={ty(2000)} c={GOLD} />
      <Txt x={tx(24)} y={ty(3400) + 3} size={8.5} fill={GOLD} rotate={-30.3}>
        supply falls
      </Txt>
      <Guide q={50} p={5000} label="E1" dx={0} dy={-8} anchor="middle" />
      <Guide q={40} p={6000} label="E2" c={GOLD} dx={0} dy={-8} anchor="middle" />
    </G>
  );
}

// ---------- rent of three example plots ----------
function RentArt() {
  const ox = 70;
  const oy = 160;
  const y = (r) => oy - r * 0.0007; // FCFA a year, 0 to 200,000
  const bars = [
    ['A', 40000, 'poor soil,', 'far from road'],
    ['B', 90000, 'fertile,', 'far from road'],
    ['C', 160000, 'fertile, by a', 'road near town'],
  ];
  return (
    <G>
      <Axes ox={ox} oy={oy} xlen={250} ylen={140} xt={[]} yt={[50000, 100000, 150000, 200000].map((r) => [y(r), fmt(r)])} xlab="" ylab="Rent (FCFA a year)" ylabX={ox - 50} />
      {bars.map(([k, r, l1, l2], i) => {
        const bx = ox + 22 + i * 80;
        return (
          <G key={k}>
            <Rect x={bx} y={y(r)} width={50} height={oy - y(r)} fill={[GOLD, GREEN, DEM][i]} opacity={0.85} />
            <Txt x={bx + 25} y={y(r) - 5} size={8.5} weight="700" fill={O}>
              {fmt(r)}
            </Txt>
            <Txt x={bx + 25} y={oy + 13} size={8.5} weight="700" fill={O}>
              {`Plot ${k}`}
            </Txt>
            <Txt x={bx + 25} y={oy + 24} size={7.5} fill={MUTED}>
              {l1}
            </Txt>
            <Txt x={bx + 25} y={oy + 34} size={7.5} fill={MUTED}>
              {l2}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- the class survey ----------
function SurveyArt() {
  const ox = 50;
  const oy = 160;
  const y = (n) => oy - n * 10; // workers, 0 to 14
  const bars = [['Housing', 12, '30%'], ['Family', 9, '22.5%'], ['Information', 8, '20%'], ['Language', 6, '15%'], ['Insecurity', 5, '12.5%']];
  return (
    <G>
      <Axes ox={ox} oy={oy} xlen={270} ylen={140} xt={[]} yt={[2, 4, 6, 8, 10, 12, 14].map((n) => [y(n), n])} xlab="" ylab="Number of workers" ylabX={ox - 24} />
      {bars.map(([k, n, pct], i) => {
        const bx = ox + 14 + i * 53;
        return (
          <G key={k}>
            <Rect x={bx} y={y(n)} width={36} height={oy - y(n)} fill={i < 2 ? DEM : i === 4 ? DEM : '#7f98ad'} opacity={0.85} />
            <Txt x={bx + 18} y={y(n) - 5} size={8} weight="700" fill={O}>
              {`${n} (${pct})`}
            </Txt>
            <Txt x={bx + 18} y={oy + 13} size={8} fill={O}>
              {k}
            </Txt>
          </G>
        );
      })}
      <Txt x={ox + 150} y={oy + 28} size={8} fill={MUTED}>
        Dark bars: barriers to geographical mobility (26 of 40 workers)
      </Txt>
    </G>
  );
}

// ---------- the tailor's revenue, costs and profit ----------
function ProfitArt() {
  const ox = 66;
  const oy = 170;
  const y = (v) => oy - v * 0.0003; // FCFA, 0 to 500,000
  const parts = [
    ['materials', 180000, '#7f98ad'],
    ['rent', 50000, GOLD],
    ['wages', 60000, '#a8763e'],
    ['power', 20000, MUTED],
    ['profit', 140000, GREEN],
  ];
  let base = 0;
  const segs = parts.map(([k, v, c]) => {
    const s = { k, v, c, y0: y(base), y1: y(base + v), mid: y(base + v / 2) };
    base += v;
    return s;
  });
  return (
    <G>
      <Axes ox={ox} oy={oy} xlen={260} ylen={150} xt={[]} yt={[100000, 200000, 300000, 400000, 500000].map((v) => [y(v), fmt(v)])} xlab="" ylab="FCFA in one month" ylabX={ox - 50} />
      <Rect x={96} y={y(450000)} width={60} height={oy - y(450000)} fill={DEM} opacity={0.85} />
      <Txt x={126} y={y(450000) - 5} size={8.5} weight="700" fill={O}>
        450,000
      </Txt>
      <Txt x={126} y={oy + 13} size={8.5} weight="700" fill={O}>
        Revenue
      </Txt>
      {segs.map((s) => (
        <G key={s.k}>
          <Rect x={190} y={s.y1} width={60} height={s.y0 - s.y1} fill={s.c} opacity={0.9} stroke="#ffffff" strokeWidth={0.6} />
          <Line x1={250} y1={s.mid} x2={258} y2={s.mid} stroke={O} strokeWidth={0.8} />
          <Txt x={261} y={s.mid + 3} size={8} anchor="start" fill={O}>
            {`${s.k} ${fmt(s.v)}`}
          </Txt>
        </G>
      ))}
      <Txt x={220} y={oy + 13} size={8.5} weight="700" fill={O}>
        Costs + profit
      </Txt>
    </G>
  );
}

// ---------- the bakery's average cost curve ----------
function AvCostArt() {
  const ox = 62;
  const oy = 172;
  const x = (q) => ox + q * 0.4; // loaves a day, 0 to 600
  const y = (c) => oy - c * (140 / 300); // FCFA a loaf, 0 to 300
  const data = [[100, 250], [200, 180], [300, 140], [400, 115], [500, 120], [600, 140]];
  const P = data.map(([q, c]) => [x(q), y(c)]);
  // A smooth curve through the points (Catmull-Rom turned into cubic Béziers).
  let d = `M${P[0][0].toFixed(1)} ${P[0][1].toFixed(1)}`;
  for (let i = 0; i < P.length - 1; i++) {
    const p0 = P[i - 1] || P[i];
    const p1 = P[i];
    const p2 = P[i + 1];
    const p3 = P[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return (
    <G>
      <Axes ox={ox} oy={oy} xlen={250} ylen={140} xt={[100, 200, 300, 400, 500, 600].map((q) => [x(q), q])} yt={[50, 100, 150, 200, 250].map((c) => [y(c), c])} xlab="Output (loaves a day)" ylab="Average cost (FCFA a loaf)" ylabX={ox - 28} />
      <Path d={d} fill="none" stroke={DEM} strokeWidth={2.2} />
      {data.map(([q, c]) => (
        <Circle key={q} cx={x(q)} cy={y(c)} r={2.6} fill={DEM} />
      ))}
      <Txt x={x(600) + 6} y={y(140) + 4} size={9.5} weight="700" anchor="start" fill={DEM}>
        AC
      </Txt>
      <Line x1={ox} y1={y(115)} x2={x(400)} y2={y(115)} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Line x1={x(400)} y1={y(115)} x2={x(400)} y2={oy} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Circle cx={x(400)} cy={y(115)} r={3.8} fill={GOLD} />
      <Line x1={x(400)} y1={y(195) + 4} x2={x(400)} y2={y(115) - 6} stroke={GOLD} strokeWidth={1} />
      <Txt x={x(400)} y={y(195)} size={8.5} weight="700" fill={GOLD}>
        optimum: 400 loaves, 115 FCFA
      </Txt>
      <Txt x={x(190)} y={y(62)} size={8.5} fill={GREEN}>
        AC falls:
      </Txt>
      <Txt x={x(190)} y={y(62) + 11} size={8.5} fill={GREEN}>
        economies of scale
      </Txt>
      <Txt x={x(530)} y={y(62)} size={8.5} fill={SUP}>
        AC rises:
      </Txt>
      <Txt x={x(530)} y={y(62) + 11} size={8.5} fill={SUP}>
        diseconomies
      </Txt>
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const ECONOMICS_F3 = {
  // ---------- Term 1 ----------
  'econ3-goods': treeSpec('Goods and services', 'What satisfies wants', [
    { name: 'Free goods', items: ['air', 'sunshine', 'sea water'] },
    { name: 'Economic\ngoods', items: ['bread, cement', 'consumer goods', 'producer goods'] },
    { name: 'Services', items: ['teaching', 'transport', 'health care'] },
  ], { colW: 104 }),
  'econ3-definitions': columnsSpec('Four definitions of economics', [
    { head: 'Wealth', items: ['Adam Smith', '1776', 'the wealth', 'of nations'] },
    { head: 'Welfare', items: ['Alfred Marshall', '1890', 'material', 'well-being'] },
    { head: 'Scarcity', items: ['Lionel Robbins', '1932', 'ends, scarce means,', 'alternative uses'] },
    { head: 'Growth', items: ['Paul Samuelson', 'from 1948', 'choices now', 'and in future'] },
  ], { colW: 92, arrow: true }),
  'econ3-preference': columnsSpec('Ewane’s scale of preference (budget 3,000 FCFA)', [
    { head: 'Rank', items: ['1', '2', '3', '4'] },
    { head: 'Want', items: ['transport', 'exercise book', 'phone credit', 'football ticket'] },
    { head: 'Cost (FCFA)', items: ['1,500', '800', '500', '1,000'] },
    { head: 'Money left', items: ['1,500', '700', '200', 'not bought'] },
  ], { colW: 80 }),
  'econ3-oppcost': drawn('Ayuk’s production possibility line', 340, 206, PplArt, ['With 4 hectares, Ayuk can grow 8 t of maize (E), 4 t of groundnuts (A), or any mix on the line, such as B (2 maize, 3 groundnuts).', 'Moving from B to C gains 2 t of maize at an opportunity cost of 1 t of groundnuts.', 'F, inside the line, leaves land unused; G, outside it, cannot be reached with 4 hectares.'], [[150, 100], [180, 70], [120, 140], [240, 70]]),
  'econ3-techniques': columnsSpec('How to produce: two techniques', [
    { head: 'Labour-intensive', items: ['many workers', 'few machines', 'family cocoa farm', 'small tailoring shop', 'where labour is cheap'] },
    { head: 'Capital-intensive', items: ['many machines', 'few workers', 'mechanised sugar estate', 'brewery, cement works', 'where capital is cheap'] },
  ], { colW: 150 }),
  'econ3-central': treeSpec('The central problems of every economy', 'Scarcity forces choice', [
    { name: 'What to\nproduce?', items: ['which goods', 'how much'] },
    { name: 'How to\nproduce?', items: ['which factors', 'which technique'] },
    { name: 'For whom?', items: ['sharing output', 'income or need'] },
    { name: 'Full use and\ngrowth', items: ['no idle resources', 'more in future'] },
  ], { colW: 92 }),
  'econ3-freemarket': treeSpec('Features of the free market economy', 'Free market (capitalist)', [
    { name: 'Ownership', items: ['private property', 'freedom of', 'enterprise'] },
    { name: 'Motives', items: ['profit motive', 'competition'] },
    { name: 'Consumers', items: ['free choice', 'consumer', 'sovereignty'] },
    { name: 'Prices', items: ['set by demand', 'and supply', 'little state role'] },
  ], { colW: 92 }),
  'econ3-freemerits': columnsSpec('The free market: merits and demerits', [
    { head: 'Merits', items: ['efficiency', 'wide choice', 'incentives, innovation', 'quick response', 'freedom'] },
    { head: 'Demerits', items: ['inequality', 'no public goods', 'monopolies', 'booms and slumps', 'pollution ignored'] },
  ], { colW: 150 }),
  'econ3-pricemech': drawn('The price mechanism: tomatoes at a town market', 340, 206, PriceArt, ['Demand and supply cross at E: 5,000 FCFA a crate and 50 crates a day.', 'At 8,000 FCFA sellers bring 80 crates but buyers want 20: a surplus of 60 crates, so the price falls.', 'At 2,000 FCFA buyers want 80 crates but only 20 are brought: a shortage of 60, so the price rises.'], [[186, 102], [186, 60], [150, 150]]),
  'econ3-harvest': drawn('A poor harvest shifts supply', 340, 206, HarvestArt, ['Disease cuts the crop: at every price, 20 fewer crates are offered, so supply shifts left from S1 to S2.', 'The equilibrium moves from E1 (5,000 FCFA, 50 crates) to E2 (6,000 FCFA, 40 crates).', 'The higher price rations the smaller crop and signals farmers to plant more.'], [[124, 124], [186, 102], [162, 88]]),
  'econ3-command': treeSpec('Features of the planned economy', 'Planned (command) economy', [
    { name: 'Ownership', items: ['state owns', 'land, factories,', 'banks'] },
    { name: 'Planning', items: ['central authority', 'output targets', 'five-year plans'] },
    { name: 'Prices', items: ['fixed by', 'the state'] },
    { name: 'Aims', items: ['equality', 'jobs for all', 'basic needs'] },
  ], { colW: 92 }),
  'econ3-commandmerits': columnsSpec('The planned economy: merits and demerits', [
    { head: 'Merits', items: ['less inequality', 'basic needs for all', 'full employment', 'quick priorities', 'little advertising'] },
    { head: 'Demerits', items: ['weak incentives', 'shortages, queues', 'little choice', 'bureaucracy', 'less freedom'] },
  ], { colW: 150 }),
  'econ3-mixed': columnsSpec('The two sectors of a mixed economy', [
    { head: 'Private sector', items: ['owned by people', 'and firms', 'aims at profit', 'shops, banks,', 'breweries, farms'] },
    { head: 'Public sector', items: ['owned by the state', 'aims at service', 'ministries, schools,', 'hospitals, CAMTEL,', 'SONARA, CDC'] },
  ], { colW: 150 }),
  'econ3-cameroon': columnsSpec('Cameroon’s mixed economy over time', [
    { head: '1960s to 1980s', items: ['planned', 'liberalism', 'five-year plans', 'state firms'] },
    { head: 'From 1988', items: ['crisis and', 'structural', 'adjustment', 'privatisation'] },
    { head: '2009', items: ['Vision 2035', 'an emerging', 'country', 'by 2035'] },
    { head: '2020 to 2030', items: ['SND30', 'industry and', 'jobs first'] },
  ], { colW: 86, arrow: true }),

  // ---------- Term 2 ----------
  'econ3-chain': flowSpec('A chain of production: cocoa', ['Farmer grows\ncocoa (primary)', 'Buyer carries\nbeans (tertiary)', 'Factory makes\ncocoa butter,\nchocolate\n(secondary)', 'Shop sells\nchocolate\n(tertiary)', 'Consumer\nbuys and eats'], { perRow: 3, boxW: 104, boxH: 62 }),
  'econ3-utility': columnsSpec('Production creates utility', [
    { head: 'Form', items: ['changing shape', 'planks', 'into a table'] },
    { head: 'Place', items: ['moving goods', 'onions from the', 'North to Douala'] },
    { head: 'Time', items: ['storing goods', 'maize kept', 'after harvest'] },
    { head: 'Possession', items: ['passing goods on', 'a shop sells', 'to a customer'] },
  ], { colW: 84 }),
  'econ3-sectors': treeSpec('The three sectors of production', 'Production', [
    { name: 'Primary', items: ['farming, fishing', 'forestry', 'mining, oil'] },
    { name: 'Secondary', items: ['manufacturing', 'construction', 'brewing, cement'] },
    { name: 'Tertiary', items: ['trade, transport', 'banking, insurance', 'teachers, doctors'] },
  ], { colW: 108 }),
  'econ3-land': columnsSpec('Land: what it is and its features', [
    { head: 'Land includes', items: ['soil, forests', 'rivers, lakes, sea', 'minerals, oil', 'climate'] },
    { head: 'Characteristics', items: ['free gift of nature', 'fixed in supply', 'cannot be moved', 'can change use', 'quality varies'] },
    { head: 'Reward', items: ['rent'] },
  ], { colW: 104 }),
  'econ3-rent': drawn('Why rent differs (example figures)', 340, 206, RentArt, ['Plot A, with poor soil far from a road, rents for 40,000 FCFA a year.', 'Plot B, fertile but far from a road, rents for 90,000 FCFA: fertility adds 50,000 FCFA.', 'Plot C, fertile and beside a road near town, rents for 160,000 FCFA: location adds a further 70,000 FCFA.'], [[117, 132], [197, 97], [277, 48]]),
  'econ3-labour': columnsSpec('Labour: kinds and efficiency', [
    { head: 'Kinds', items: ['skilled', 'semi-skilled', 'unskilled', 'manual, mental'] },
    { head: 'Efficiency rises with', items: ['education, training', 'health, nutrition', 'good tools', 'fair wages', 'good management'] },
    { head: 'Reward', items: ['wages', 'salaries'] },
  ], { colW: 104 }),
  'econ3-laboursupply': treeSpec('What decides the supply of labour', 'Supply of labour', [
    { name: 'Population', items: ['size', 'age structure', 'migration'] },
    { name: 'Time', items: ['school-leaving', 'age, retirement', 'hours worked'] },
    { name: 'Rewards', items: ['wage rate', 'conditions'] },
    { name: 'Society', items: ['attitudes', 'health', 'Labour Code'] },
  ], { colW: 92 }),
  'econ3-mobility': columnsSpec('Mobility of labour', [
    { head: 'Geographical', items: ['change of place', 'held back by:', 'housing costs', 'family ties', 'language', 'lack of information'] },
    { head: 'Occupational', items: ['change of job', 'held back by:', 'long training', 'age, ability', 'qualifications', 'lack of capital'] },
  ], { colW: 150 }),
  'econ3-mobilityhelp': columnsSpec('Improving mobility', [
    { head: 'Geographical', items: ['job information', 'housing help', 'transfer allowances', 'better transport', 'bilingualism'] },
    { head: 'Occupational', items: ['training, retraining', 'apprenticeships', 'loans for a new trade', 'recognised diplomas', 'no discrimination'] },
  ], { colW: 150 }),
  'econ3-barriers': columnsSpec('Analysing a case: barriers to mobility', [
    { head: 'Case', items: ['village tailor', 'mechanic', 'teacher (French)', 'trader', 'job seeker'] },
    { head: 'Barrier', items: ['city rents', 'family, farm', 'language', 'no training money', 'no job news'] },
    { head: 'Remedy', items: ['housing help', 'nearer jobs', 'English course', 'training loan', 'job centres'] },
  ], { colW: 104 }),
  'econ3-survey': drawn('Class survey: main barrier named by 40 workers', 340, 200, SurveyArt, ['Housing costs were named by 12 workers (30%), family ties by 9 (22.5%), lack of information by 8 (20%), language by 6 (15%) and insecurity by 5 (12.5%).', 'Each bar is drawn to scale: 10 units of height for each worker.', 'Barriers to geographical mobility (housing, family ties, insecurity) were named by 26 of the 40 workers, 65%.'], [[82, 100], [135, 130], [294, 130]]),
  'econ3-capital': treeSpec('Types of capital', 'Capital (reward: interest)', [
    { name: 'Fixed', items: ['corn mill', 'van, workshop'] },
    { name: 'Circulating', items: ['flour, cloth', 'fuel'] },
    { name: 'Social', items: ['roads, bridges', 'schools'] },
    { name: 'Human', items: ['skills', 'knowledge'] },
  ], { colW: 92 }),
  'econ3-accumulation': cycleSpec('How capital is accumulated', ['Income', 'Saving', 'Banks, njangi,\nmicrofinance', 'Investment in\ncapital goods', 'More output\nand income'], { r: 70, boxW: 100, boxH: 42 }),
  'econ3-enterprise': treeSpec('Functions of the entrepreneur', 'The entrepreneur', [
    { name: 'Initiating', items: ['the idea', 'starting up'] },
    { name: 'Organising', items: ['land, labour,', 'capital'] },
    { name: 'Deciding', items: ['what, how,', 'what price'] },
    { name: 'Risk and\ninnovation', items: ['bearing losses', 'new ideas'] },
  ], { colW: 92 }),
  'econ3-profit': drawn('A tailor’s month: revenue, costs and profit', 350, 200, ProfitArt, ['Revenue from sales is 450,000 FCFA.', 'Costs are materials 180,000, rent 50,000, wages 60,000 and power 20,000 FCFA: 310,000 FCFA in all.', 'Profit, the part left after all costs, is 140,000 FCFA: the reward for enterprise.'], [[126, 100], [220, 125], [220, 65]]),

  // ---------- Term 3 ----------
  'econ3-siting': treeSpec('What decides where an industry is sited', 'Siting factors', [
    { name: 'Inputs', items: ['raw materials', 'power, water'] },
    { name: 'Market', items: ['customers', 'bulky goods'] },
    { name: 'Access', items: ['roads, rail', 'ports'] },
    { name: 'Other', items: ['labour, land', 'government'] },
  ], { colW: 92 }),
  'econ3-industries': columnsSpec('Industrial towns of Cameroon', [
    { head: 'Town', items: ['Douala', 'Edéa', 'Limbe', 'Figuil', 'Garoua', 'Mbandjock'] },
    { head: 'Industry', items: ['many factories', 'aluminium', 'oil refinery', 'cement', 'cotton ginning', 'sugar'] },
    { head: 'Main pull', items: ['port, market', 'hydro power', 'coast', 'limestone', 'cotton fields', 'cane estates'] },
  ], { colW: 104 }),
  'econ3-agglomeration': columnsSpec('Localisation: the advantages', [
    { head: 'For firms', items: ['skilled labour pool', 'ancillary firms', 'specialised services', 'shared infrastructure', 'reputation'] },
    { head: 'For the area', items: ['jobs, incomes', 'growing towns', 'better services', 'council revenue'] },
  ], { colW: 150 }),
  'econ3-localdisadv': columnsSpec('Localisation: problems and remedies', [
    { head: 'Problems', items: ['structural unemployment', 'congestion', 'pollution', 'rising rents, wages', 'regional imbalance'] },
    { head: 'Dispersal measures', items: ['tax relief', 'roads, power, water', 'industrial zones', 'new ports (Kribi)', 'planning permission'] },
  ], { colW: 150 }),
  'econ3-smallscale': columnsSpec('Why small firms survive', [
    { head: 'Market', items: ['small market', 'personal service', 'made to order', 'fresh goods'] },
    { head: 'Owner', items: ['little capital', 'flexibility', 'independence'] },
    { head: 'Support', items: ['supply big firms', 'help for SMEs'] },
  ], { colW: 104 }),
  'econ3-scale': columnsSpec('Small and large scale compared', [
    { head: 'Small scale', items: ['few workers', 'little capital', 'small market', 'personal service', 'higher unit cost'] },
    { head: 'Large scale', items: ['many workers', 'much capital', 'national market', 'standard products', 'lower unit cost'] },
    { head: 'Measures of size', items: ['workers', 'capital', 'turnover', 'market share', 'branches'] },
  ], { colW: 104 }),
  'econ3-internal': treeSpec('Internal economies of scale', 'Internal economies', [
    { name: 'Technical', items: ['big machines', 'division of labour'] },
    { name: 'Buying and\nselling', items: ['bulk discounts', 'cheaper transport'] },
    { name: 'Financial', items: ['easier loans', 'lower interest'] },
    { name: 'Other', items: ['managerial', 'risk, research', 'welfare'] },
  ], { colW: 92 }),
  'econ3-avcost': drawn('The bakery’s average cost curve', 340, 206, AvCostArt, ['Average cost falls from 250 FCFA a loaf at 100 loaves to 115 FCFA at 400 loaves: economies of scale.', 'The lowest point, 400 loaves a day at 115 FCFA, is the optimum size.', 'Beyond it, average cost rises to 120 FCFA at 500 loaves and 140 FCFA at 600: diseconomies of scale.'], [[124, 100], [222, 118], [282, 112]]),
  'econ3-external': treeSpec('External economies of scale', 'External economies', [
    { name: 'Concentration', items: ['skilled labour', 'nearby suppliers'] },
    { name: 'Information', items: ['research centres', 'trade journals'] },
    { name: 'Disintegration', items: ['specialist firms', 'one stage each'] },
    { name: 'Infrastructure', items: ['roads, ports', 'power, training'] },
  ], { colW: 92 }),
  'econ3-compare': columnsSpec('Internal and external compared', [
    { head: '', items: ['comes from', 'gained by', 'firm size needed', 'economy', 'diseconomy'] },
    { head: 'Internal', items: ['the firm’s growth', 'that firm only', 'large', 'bulk buying', 'slow decisions'] },
    { head: 'External', items: ['industry, area', 'all firms there', 'any size', 'skilled labour pool', 'congestion'] },
  ], { colW: 104 }),
  'econ3-project': flowSpec('Studying a local production unit', ['Choose a\nnearby unit', 'Ask the\nowner’s\npermission', 'Prepare the\nquestionnaire', 'Visit and\ncollect figures', 'Analyse with\neconomic terms', 'Write and\npresent the\nreport'], { perRow: 3, boxW: 104, boxH: 58 }),
  'econ3-report': columnsSpec('The parts of the project report', [
    { head: 'Beginning', items: ['title page', 'introduction', 'method'] },
    { head: 'Middle', items: ['findings', 'tables, figures', 'analysis'] },
    { head: 'End', items: ['conclusion', 'recommendations', 'appendix'] },
  ], { colW: 104, arrow: true }),
  'econ3-review': columnsSpec('Form 3 economics in three modules', [
    { head: 'Module 1', items: ['definitions', 'scarcity, choice', 'opportunity cost', 'what, how, for whom', 'economic systems'] },
    { head: 'Module 2', items: ['production, sectors', 'land: rent', 'labour: wages', 'capital: interest', 'enterprise: profit'] },
    { head: 'Module 3', items: ['siting factors', 'localisation', 'scale of production', 'economies of scale', 'production unit'] },
  ], { colW: 104, arrow: true }),
  'econ3-commandwords': columnsSpec('Command words and what they ask', [
    { head: 'Word', items: ['define', 'state, list', 'explain', 'distinguish', 'calculate', 'draw'] },
    { head: 'What to do', items: ['exact meaning', 'brief points', 'reasons and an example', 'differences, point by point', 'formula, working, unit', 'labelled, with a ruler'] },
  ], { colW: 150 }),
};
