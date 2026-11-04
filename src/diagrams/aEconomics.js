// A Level Economics figures (0725). Graphs are drawn to scale from the
// numbers used in the lessons: the papers, total and marginal utility,
// indifference curves and the budget line, tax incidence, elasticity and
// revenue, supply elasticity, product curves, isoquants, short-run and
// long-run costs, revenue curves, perfect competition, monopoly, price
// discrimination, monopolistic competition, the kinked demand curve, MRP,
// minimum wages, economic rent, externalities and subsidies; and for the
// Upper Sixth the four-sector flow, the Lorenz curve, the consumption
// function, the Keynesian cross, the multiplier, output gaps, the money
// market, AD/AS, credit creation, tax systems, comparative advantage, the
// exchange rate, the J-curve, the tariff, the Phillips curve and the optimum
// population. Charts summarise the rest.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';
import { A_GEOGRAPHY } from './aGeography';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#1f6fb2';
const RED = '#b8433f';
const GREEN = '#2f7d4f';
const GOLD = '#9a6a12';
const PURPLE = '#6a4c93';
const TEAL = '#1f7a7a';
const AMBER = '#fbefd0';
const ROSE = '#f8e3df';
const LEAF = '#e3f0da';
const SKY = '#dcecf7';
const LILAC = '#efe6f7';
const GREY = '#e6e9ec';
const DASH = '3 3';

// ---------- plotting helpers ----------
// A frame maps data values to drawing coordinates: (ox, oy) is the bottom-left
// corner (at xmin, ymin), w and h the size of the plotting area.
const fr = (ox, oy, w, h, xmax, ymax, ymin = 0) => ({
  ox,
  oy,
  w,
  h,
  xmax,
  ymax,
  ymin,
  X: (x) => ox + (x * w) / xmax,
  Y: (y) => oy - ((y - ymin) * h) / (ymax - ymin),
});
const n1 = (v) => v.toFixed(1);
const seg = (f, x1, y1, x2, y2) => `M${n1(f.X(x1))} ${n1(f.Y(y1))} L${n1(f.X(x2))} ${n1(f.Y(y2))}`;
const fpath = (f, fn, a, b, n = 60) => {
  const pts = Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
  return `M${pts.map((x) => `${n1(f.X(x))} ${n1(f.Y(fn(x)))}`).join(' L')}`;
};
const poly = (f, pts) => `M${pts.map(([x, y]) => `${n1(f.X(x))} ${n1(f.Y(y))}`).join(' L')} Z`;
const lines = (f, pts) => `M${pts.map(([x, y]) => `${n1(f.X(x))} ${n1(f.Y(y))}`).join(' L')}`;
// A smooth curve through data points (Catmull-Rom as cubic Béziers).
const smooth = (f, pts) => {
  const p = pts.map(([x, y]) => [f.X(x), f.Y(y)]);
  let d = `M${n1(p[0][0])} ${n1(p[0][1])}`;
  for (let i = 0; i < p.length - 1; i += 1) {
    const p0 = p[i - 1] || p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] || p2;
    d += ` C${n1(p1[0] + (p2[0] - p0[0]) / 6)} ${n1(p1[1] + (p2[1] - p0[1]) / 6)} ${n1(p2[0] - (p3[0] - p1[0]) / 6)} ${n1(p2[1] - (p3[1] - p1[1]) / 6)} ${n1(p2[0])} ${n1(p2[1])}`;
  }
  return d;
};

function Cv({ d, c = O, w = 2, dash }) {
  return <Path d={d} fill="none" stroke={c} strokeWidth={w} strokeDasharray={dash} />;
}
function Area({ f, pts, fill }) {
  return <Path d={poly(f, pts)} fill={fill} />;
}
function Dot({ f, x, y, c = O, r = 2.6 }) {
  return <Path d={`M${n1(f.X(x) - r)} ${n1(f.Y(y))} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`} fill={c} />;
}
function Lb({ f, x, y, t, c = O, dx = 0, dy = 0, anchor = 'start', size = 8.5, weight = '700' }) {
  return (
    <Txt x={f.X(x) + dx} y={f.Y(y) + dy} size={size} anchor={anchor} weight={weight} fill={c}>
      {t}
    </Txt>
  );
}
function Arrow({ x1, y1, x2, y2, c = O, w = 1.3 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={5.5} fill={c} />
    </G>
  );
}
// Axes with an arrow on each, value ticks [[value, label]], and the axis
// titles: y at the top left, x at the bottom right.
function Axes({ f, xlab, ylab, xt = [], yt = [], xlabUp, xlabY }) {
  const y0 = f.Y(Math.max(0, f.ymin));
  const top = f.oy - f.h - 8;
  return (
    <G>
      <Line x1={f.ox} y1={f.oy} x2={f.ox} y2={top} stroke={O} strokeWidth={1.2} />
      <Head x={f.ox} y={top - 4} dx={0} dy={-1} size={5} fill={O} />
      <Line x1={f.ox} y1={y0} x2={f.ox + f.w + 8} y2={y0} stroke={O} strokeWidth={1.2} />
      <Head x={f.ox + f.w + 12} y={y0} dx={1} dy={0} size={5} fill={O} />
      {xt.map(([v, l]) => (
        <G key={`x${v}`}>
          <Line x1={f.X(v)} y1={y0} x2={f.X(v)} y2={y0 + 3} stroke={O} strokeWidth={1} />
          <Txt x={f.X(v)} y={y0 + 12} size={7.5} fill={MUTED}>
            {l}
          </Txt>
        </G>
      ))}
      {yt.map(([v, l]) => (
        <G key={`y${v}`}>
          <Line x1={f.ox - 3} y1={f.Y(v)} x2={f.ox} y2={f.Y(v)} stroke={O} strokeWidth={1} />
          <Txt x={f.ox - 5} y={f.Y(v) + 3} size={7.5} anchor="end" fill={MUTED}>
            {l}
          </Txt>
        </G>
      ))}
      {!!ylab && (
        <Txt x={f.ox + 7} y={top + 2} size={8} anchor="start" fill={MUTED}>
          {ylab}
        </Txt>
      )}
      {!!xlab && (
        <Txt x={f.ox + f.w + 8} y={xlabY ?? (xlabUp ? y0 - 5 : y0 + 23)} size={8} anchor="end" fill={MUTED}>
          {xlab}
        </Txt>
      )}
    </G>
  );
}
// Dashed guides from a point to both axes, with optional value labels.
function Guide({ f, x, y, xl, yl, toX = true, toY = true }) {
  const y0 = f.Y(Math.max(0, f.ymin));
  return (
    <G>
      {toX && <Line x1={f.X(x)} y1={f.Y(y)} x2={f.X(x)} y2={y0} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />}
      {toY && <Line x1={f.X(x)} y1={f.Y(y)} x2={f.ox} y2={f.Y(y)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />}
      {xl != null && (
        <Txt x={f.X(x)} y={y0 + 12} size={7.5} fill={O}>
          {xl}
        </Txt>
      )}
      {yl != null && (
        <Txt x={f.ox - 5} y={f.Y(y) + 3} size={7.5} anchor="end" fill={O}>
          {yl}
        </Txt>
      )}
    </G>
  );
}
function Caption({ x, y, t }) {
  return (
    <Txt x={x} y={y} size={9} weight="700" fill={O}>
      {t}
    </Txt>
  );
}

// ---------- 0725 papers, bars to scale ----------
const PAPERS = [
  { name: 'Paper 1', kind: 'multiple choice', hours: 1.5, label: '1½ hours', when: 'Wed 3 June, afternoon' },
  { name: 'Paper 2', kind: 'data response, essays', hours: 3, label: '3 hours', when: 'Thu 4 June, morning' },
  { name: 'Paper 3', kind: 'written paper', hours: 1.75, label: '1¾ hours', when: 'Thu 4 June, afternoon' },
];
function PapersArt() {
  const x0 = 110;
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
      <Txt x={210} y={182} size={8.5} fill={MUTED}>
        June 2026 timetable (bars drawn to scale)
      </Txt>
    </G>
  );
}

// ---------- total and marginal utility ----------
const TU = [0, 20, 36, 48, 56, 60, 60, 56];
function UtilityArt() {
  const a = fr(40, 182, 140, 140, 7, 64);
  const b = fr(236, 160, 140, 118, 7, 22, -6);
  const mu = TU.slice(1).map((v, i) => [i + 0.5, v - TU[i]]);
  return (
    <G>
      <Caption x={110} y={14} t="Total utility (TU)" />
      <Caption x={306} y={14} t="Marginal utility (MU)" />
      <Axes f={a} ylab="utils" xlab="oranges" xt={[1, 2, 3, 4, 5, 6, 7].map((v) => [v, String(v)])} yt={[[20, '20'], [40, '40'], [60, '60']]} />
      <Cv d={smooth(a, TU.map((v, i) => [i, v]))} c={BLUE} />
      {TU.map((v, i) => (
        <Dot key={i} f={a} x={i} y={v} c={BLUE} />
      ))}
      <Lb f={a} x={5.5} y={60} t="maximum" dy={-6} anchor="middle" size={7.5} weight="500" />
      <Axes f={b} ylab="utils" xlab="oranges" xlabY={b.oy + 14} xt={[1, 2, 3, 4, 5, 6, 7].map((v) => [v, String(v)])} yt={[[-4, '−4'], [10, '10'], [20, '20']]} />
      <Cv d={lines(b, mu)} c={RED} />
      {mu.map(([x, y]) => (
        <Dot key={x} f={b} x={x} y={y} c={RED} />
      ))}
      <Lb f={b} x={0.5} y={20} t="20" dx={6} dy={3} size={7.5} weight="500" />
      <Lb f={b} x={5.5} y={0} t="MU = 0" dx={5} dy={-6} size={7.5} weight="500" />
    </G>
  );
}

// ---------- indifference curves ----------
const IF = fr(48, 190, 270, 160, 14, 14);
function IndifferenceArt() {
  const f = IF;
  return (
    <G>
      <Axes f={f} ylab="Good Y" xlab="Good X" xt={[2, 4, 6, 8, 10, 12].map((v) => [v, String(v)])} yt={[2, 4, 6, 8, 10, 12].map((v) => [v, String(v)])} />
      <Cv d={fpath(f, (x) => 12 / x, 12 / 13.5, 13.5)} c={BLUE} />
      <Cv d={fpath(f, (x) => 24 / x, 24 / 13.5, 13.5)} c={BLUE} />
      <Cv d={fpath(f, (x) => 40 / x, 40 / 13.5, 13.5)} c={BLUE} />
      <Lb f={f} x={13.5} y={12 / 13.5} t="IC1" dx={4} dy={3} />
      <Lb f={f} x={13.5} y={24 / 13.5} t="IC2" dx={4} dy={3} />
      <Lb f={f} x={13.5} y={40 / 13.5} t="IC3" dx={4} dy={3} />
      <Cv d={lines(f, [[2, 6], [2, 4], [3, 4]])} c={RED} w={1.2} dash={DASH} />
      <Cv d={lines(f, [[4, 3], [4, 2], [6, 2]])} c={RED} w={1.2} dash={DASH} />
      {[[1, 12], [2, 6], [3, 4], [4, 3], [6, 2]].map(([x, y]) => (
        <Dot key={x} f={f} x={x} y={y} c={BLUE} />
      ))}
      <Lb f={f} x={3.1} y={4.6} t="MRS = 2" dx={3} size={7.5} c={RED} />
      <Lb f={f} x={5} y={1.2} t="MRS = 0.5" anchor="middle" size={7.5} c={RED} />
      <Lb f={f} x={9.5} y={11.5} t="higher curves:" anchor="middle" size={7.5} weight="500" c={MUTED} />
      <Lb f={f} x={9.5} y={10.6} t="more satisfaction" anchor="middle" size={7.5} weight="500" c={MUTED} />
    </G>
  );
}

// ---------- budget line and equilibrium ----------
function BudgetLineArt() {
  const f = IF;
  const r = Math.sqrt(20);
  return (
    <G>
      <Axes f={f} ylab="Good Y (units)" xlab="Good X (units)" xt={[[12, '12']]} yt={[[12, '12']]} />
      <Cv d={fpath(f, (x) => 16 / x, 16 / 13.5, 13.5)} c={BLUE} w={1.6} />
      <Cv d={fpath(f, (x) => 36 / x, 36 / 13.5, 13.5)} c={BLUE} />
      <Cv d={fpath(f, (x) => 64 / x, 64 / 13.5, 13.5)} c={BLUE} w={1.6} />
      <Lb f={f} x={13.5} y={16 / 13.5} t="IC1" dx={4} dy={3} />
      <Lb f={f} x={13.5} y={36 / 13.5} t="IC2" dx={4} dy={3} />
      <Lb f={f} x={13.5} y={64 / 13.5} t="IC3" dx={4} dy={3} />
      <Cv d={seg(f, 0, 12, 12, 0)} c={RED} w={2.2} />
      <Guide f={f} x={6} y={6} xl="6" yl="6" />
      <Dot f={f} x={6} y={6} c={O} r={3} />
      <Lb f={f} x={6} y={6} t="E" dx={6} dy={-4} />
      <Dot f={f} x={6 - r} y={6 + r} c={MUTED} />
      <Dot f={f} x={6 + r} y={6 - r} c={MUTED} />
      <Lb f={f} x={6 - r} y={6 + r} t="A" dx={5} dy={-3} />
      <Lb f={f} x={6 + r} y={6 - r} t="B" dx={4} dy={-5} />
      <Lb f={f} x={10.4} y={12.4} t="red line: budget line" anchor="middle" size={7.5} c={RED} />
      <Lb f={f} x={10.4} y={11.5} t="100X + 100Y = 1,200" anchor="middle" size={7.5} weight="500" c={RED} />
      <Lb f={f} x={10.4} y={10.2} t="IC3 is out of reach" anchor="middle" size={7.5} weight="500" c={MUTED} />
    </G>
  );
}

// ---------- tax incidence ----------
function TaxIncidenceArt() {
  const f = fr(48, 190, 280, 164, 60, 120);
  return (
    <G>
      <Area f={f} pts={[[0, 60], [20, 60], [20, 80], [0, 80]]} fill={AMBER} />
      <Area f={f} pts={[[0, 50], [20, 50], [20, 60], [0, 60]]} fill={LILAC} />
      <Area f={f} pts={[[20, 80], [30, 60], [20, 50]]} fill={ROSE} />
      <Axes f={f} ylab="Price (FCFA)" xlab="Quantity (thousand units)" />
      <Cv d={seg(f, 0, 120, 55, 10)} c={BLUE} />
      <Cv d={seg(f, 0, 30, 60, 90)} c={RED} />
      <Cv d={seg(f, 0, 60, 40, 100)} c={RED} dash="6 3" />
      <Lb f={f} x={55} y={10} t="D" dx={4} />
      <Lb f={f} x={60} y={90} t="S" dx={4} />
      <Lb f={f} x={40} y={100} t="S + tax" dx={4} />
      <Guide f={f} x={30} y={60} xl="30" yl="60" />
      <Guide f={f} x={20} y={80} xl="20" yl="80" />
      <Guide f={f} x={20} y={50} yl="50" toX={false} />
      <Dot f={f} x={30} y={60} />
      <Dot f={f} x={20} y={80} />
      <Lb f={f} x={5} y={75} t="buyers 20" anchor="middle" size={7} />
      <Lb f={f} x={10} y={55} t="sellers 10" anchor="middle" size={7} dy={3} />
      <Lb f={f} x={23.6} y={63} t="DWL" anchor="middle" size={7} dy={3} />
    </G>
  );
}

// ---------- elasticity along a straight demand curve, and revenue ----------
function PedRevenueArt() {
  const a = fr(40, 182, 140, 150, 100, 100);
  const b = fr(236, 182, 140, 150, 100, 2600);
  return (
    <G>
      <Caption x={110} y={14} t="Demand: P = 100 − Q" />
      <Caption x={306} y={14} t="Total revenue" />
      <Axes f={a} ylab="Price" xlab="Quantity" xt={[[50, '50'], [100, '100']]} yt={[[50, '50'], [100, '100']]} />
      <Cv d={seg(a, 0, 100, 50, 50)} c={BLUE} w={2.4} />
      <Cv d={seg(a, 50, 50, 100, 0)} c={TEAL} w={2.4} />
      <Dot f={a} x={50} y={50} />
      <Dot f={a} x={20} y={80} c={BLUE} />
      <Dot f={a} x={80} y={20} c={TEAL} />
      <Lb f={a} x={20} y={80} t="PED −4" dx={5} dy={-3} size={7.5} />
      <Lb f={a} x={50} y={50} t="PED −1" dx={5} dy={-3} size={7.5} />
      <Lb f={a} x={80} y={20} t="PED −0.25" dx={4} dy={-5} size={7.5} />
      <Lb f={a} x={14} y={62} t="elastic" size={7.5} weight="500" c={BLUE} />
      <Lb f={a} x={52} y={12} t="inelastic" size={7.5} weight="500" c={TEAL} />
      <Axes f={b} ylab="FCFA" xlab="Quantity" xt={[[50, '50'], [100, '100']]} yt={[[1250, '1,250'], [2500, '2,500']]} />
      <Cv d={fpath(b, (q) => 100 * q - q * q, 0, 50)} c={BLUE} w={2.4} />
      <Cv d={fpath(b, (q) => 100 * q - q * q, 50, 100)} c={TEAL} w={2.4} />
      <Guide f={b} x={50} y={2500} toY={false} />
      <Dot f={b} x={50} y={2500} />
      <Lb f={b} x={50} y={2500} t="maximum" dy={-6} anchor="middle" size={7.5} weight="500" />
      <Lb f={b} x={31} y={700} t="TR rises" anchor="middle" size={7.5} weight="500" c={BLUE} />
      <Lb f={b} x={69} y={700} t="TR falls" anchor="middle" size={7.5} weight="500" c={TEAL} />
    </G>
  );
}

// ---------- price elasticity of supply ----------
function PesArt() {
  const a = fr(40, 182, 140, 150, 10, 10);
  const b = fr(236, 182, 140, 150, 10, 10);
  return (
    <G>
      <Caption x={110} y={14} t="Straight supply lines" />
      <Caption x={306} y={14} t="The two extremes" />
      <Axes f={a} ylab="Price" xlab="Quantity" />
      <Cv d={seg(a, 0, 4, 10, 9)} c={GREEN} />
      <Cv d={seg(a, 0, 0, 9, 9)} c={RED} />
      <Cv d={seg(a, 5, 0, 9.8, 9.6)} c={BLUE} />
      <Lb f={a} x={0.6} y={7.6} t="elastic (PES > 1)" c={GREEN} size={7.5} />
      <Lb f={a} x={3.6} y={2.4} t="PES = 1" c={RED} size={7.5} />
      <Lb f={a} x={6.0} y={0.8} t="PES < 1" c={BLUE} size={7.5} />
      <Axes f={b} ylab="Price" xlab="Quantity" />
      <Cv d={seg(b, 6, 0, 6, 9.4)} c={BLUE} />
      <Cv d={seg(b, 0, 5, 9.6, 5)} c={GREEN} />
      <Lb f={b} x={6} y={9.4} t="PES = 0" dy={-4} anchor="middle" c={BLUE} size={7.5} />
      <Lb f={b} x={0.4} y={5} t="PES infinite" dy={-5} c={GREEN} size={7.5} />
    </G>
  );
}

// ---------- total, average and marginal product ----------
const TPV = [0, 10, 30, 60, 80, 90, 96, 96, 92];
function ProductArt() {
  const a = fr(40, 182, 140, 150, 8, 100);
  const b = fr(236, 170, 140, 138, 8, 32, -6);
  const ap = TPV.slice(1).map((v, i) => [i + 1, v / (i + 1)]);
  const mp = TPV.slice(1).map((v, i) => [i + 0.5, v - TPV[i]]);
  const ticks = [1, 2, 3, 4, 5, 6, 7, 8].map((v) => [v, String(v)]);
  return (
    <G>
      <Caption x={110} y={14} t="Total product (bags)" />
      <Caption x={306} y={14} t="Average and marginal product" />
      <Axes f={a} xlab="workers" xt={ticks} yt={[[50, '50'], [100, '100']]} />
      {[4, 7].map((x) => (
        <Line key={x} x1={a.X(x)} y1={a.oy} x2={a.X(x)} y2={a.Y(100)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      ))}
      <Cv d={smooth(a, TPV.map((v, i) => [i, v]))} c={BLUE} />
      <Lb f={a} x={8} y={92} t="TP" dx={-2} dy={12} anchor="end" c={BLUE} />
      <Lb f={a} x={2} y={100} t="Stage I" dy={-2} anchor="middle" size={7.5} weight="500" />
      <Lb f={a} x={5.5} y={100} t="II" dy={-2} anchor="middle" size={7.5} weight="500" />
      <Lb f={a} x={7.5} y={100} t="III" dy={-2} anchor="middle" size={7.5} weight="500" />
      <Axes f={b} xlab="workers" xt={ticks} yt={[[-4, '−4'], [10, '10'], [20, '20'], [30, '30']]} />
      {[4, 7].map((x) => (
        <Line key={x} x1={b.X(x)} y1={b.oy} x2={b.X(x)} y2={b.Y(32)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      ))}
      <Cv d={lines(b, ap)} c={GREEN} />
      <Cv d={lines(b, mp)} c={RED} />
      {ap.map(([x, y]) => (
        <Dot key={`a${x}`} f={b} x={x} y={y} c={GREEN} r={2.2} />
      ))}
      {mp.map(([x, y]) => (
        <Dot key={`m${x}`} f={b} x={x} y={y} c={RED} r={2.2} />
      ))}
      <Lb f={b} x={8} y={11.5} t="AP" dx={4} dy={3} c={GREEN} />
      <Lb f={b} x={2.5} y={30} t="MP" dx={5} dy={3} c={RED} />
    </G>
  );
}

// ---------- isoquants and isocosts ----------
function IsoquantArt() {
  const f = fr(48, 190, 270, 160, 26, 26);
  const c = Math.sqrt(276) / 2;
  return (
    <G>
      <Axes f={f} ylab="Capital (machines)" xlab="Labour (workers)" xt={[[20, '20'], [26, '26']]} yt={[[20, '20'], [26, '26']]} />
      <Cv d={seg(f, 0, 20, 20, 0)} c={RED} />
      <Cv d={seg(f, 0, 26, 26, 0)} c={RED} dash="6 3" w={1.6} />
      <Cv d={fpath(f, (l) => 100 / l, 4, 25)} c={BLUE} />
      <Cv d={fpath(f, (l) => 225 / l, 9, 25)} c={BLUE} w={1.6} />
      <Lb f={f} x={25} y={4} t="Q = 10" dx={4} c={BLUE} />
      <Lb f={f} x={25} y={9} t="Q = 15" dx={4} c={BLUE} />
      <Lb f={f} x={1.2} y={19} t="C1" dx={4} c={RED} />
      <Lb f={f} x={1.2} y={25} t="C2" dx={4} c={RED} />
      <Guide f={f} x={10} y={10} xl="10" yl="10" />
      <Dot f={f} x={10} y={10} r={3} />
      <Lb f={f} x={10} y={10} t="E: least cost" dx={-6} dy={14} anchor="end" />
      <Dot f={f} x={13 - c} y={13 + c} c={MUTED} />
      <Dot f={f} x={13 + c} y={13 - c} c={MUTED} />
      <Lb f={f} x={13 - c} y={13 + c} t="F" dx={5} dy={2} />
      <Lb f={f} x={13 + c} y={13 - c} t="G" dx={2} dy={-6} />
    </G>
  );
}

// ---------- short-run costs ----------
const TVCV = [0, 40, 70, 90, 116, 150, 198, 266, 360];
function CostTotalsArt() {
  const f = fr(52, 190, 270, 164, 8, 440);
  return (
    <G>
      <Axes f={f} ylab="Cost (FCFA)" xlab="Output (units)" xt={[1, 2, 3, 4, 5, 6, 7, 8].map((v) => [v, String(v)])} yt={[100, 200, 300, 400].map((v) => [v, String(v)])} />
      <Cv d={seg(f, 0, 60, 8, 60)} c={GREEN} />
      <Cv d={smooth(f, TVCV.map((v, i) => [i, v]))} c={BLUE} />
      <Cv d={smooth(f, TVCV.map((v, i) => [i, v + 60]))} c={RED} />
      <Lb f={f} x={8} y={420} t="TC" dx={5} dy={3} c={RED} />
      <Lb f={f} x={8} y={360} t="TVC" dx={5} dy={3} c={BLUE} />
      <Lb f={f} x={8} y={60} t="TFC" dx={5} dy={3} c={GREEN} />
      <Arrow x1={f.X(2)} y1={f.Y(70) - 1} x2={f.X(2)} y2={f.Y(130) + 2} c={GOLD} w={1.2} />
      <Lb f={f} x={2} y={100} t="= TFC" dx={4} dy={3} size={7.5} c={GOLD} />
    </G>
  );
}
const AFC = [1, 2, 3, 4, 5, 6, 7, 8].map((q) => [q, 60 / q]);
const AVC = [1, 2, 3, 4, 5, 6, 7, 8].map((q) => [q, TVCV[q] / q]);
const ATC = [1, 2, 3, 4, 5, 6, 7, 8].map((q) => [q, (TVCV[q] + 60) / q]);
const MCV = [1, 2, 3, 4, 5, 6, 7, 8].map((q) => [q - 0.5, TVCV[q] - TVCV[q - 1]]);
function CostCurvesArt() {
  const f = fr(48, 190, 280, 164, 8, 104);
  return (
    <G>
      <Axes f={f} ylab="Cost per unit (FCFA)" xlab="Output (units)" xt={[1, 2, 3, 4, 5, 6, 7, 8].map((v) => [v, String(v)])} yt={[20, 40, 60, 80, 100].map((v) => [v, String(v)])} />
      <Cv d={smooth(f, AFC)} c={GREEN} />
      <Cv d={smooth(f, AVC)} c={BLUE} />
      <Cv d={smooth(f, ATC)} c={PURPLE} />
      <Cv d={smooth(f, MCV)} c={RED} />
      <Dot f={f} x={4} y={29} c={BLUE} />
      <Dot f={f} x={5} y={42} c={PURPLE} />
      <Lb f={f} x={7.5} y={94} t="MC" dx={5} dy={3} c={RED} />
      <Lb f={f} x={8} y={52.5} t="ATC" dx={5} dy={0} c={PURPLE} />
      <Lb f={f} x={8} y={45} t="AVC" dx={5} dy={6} c={BLUE} />
      <Lb f={f} x={8} y={7.5} t="AFC" dx={5} dy={3} c={GREEN} />
      <Lb f={f} x={4} y={29} t="29" dy={12} anchor="middle" size={7.5} c={BLUE} />
      <Lb f={f} x={5} y={42} t="42" dx={-4} dy={-5} anchor="end" size={7.5} c={PURPLE} />
    </G>
  );
}

// ---------- long-run average cost: the envelope ----------
const lrac = (q) => 25 + 1.6 * (q - 5) ** 2;
const srac = (t) => (q) => lrac(t) + 3.2 * (t - 5) * (q - t) + 5 * (q - t) ** 2;
function LracArt() {
  const f = fr(48, 190, 280, 164, 10, 64);
  return (
    <G>
      <Axes f={f} ylab="Average cost" xlab="Output (thousands)" xt={[[5, 'MES']]} />
      <Cv d={fpath(f, srac(2), 0.63, 5.29)} c={BLUE} w={1.6} />
      <Cv d={fpath(f, srac(5), 2.28, 7.72)} c={BLUE} w={1.6} />
      <Cv d={fpath(f, srac(8), 4.71, 9.37)} c={BLUE} w={1.6} />
      <Cv d={fpath(f, lrac, 0.5, 9.5)} c={RED} w={2.6} />
      <Lb f={f} x={2.96} y={64} t="SRAC1" anchor="middle" size={7.5} c={BLUE} />
      <Lb f={f} x={5} y={64} t="SRAC2" anchor="middle" size={7.5} c={BLUE} />
      <Lb f={f} x={7.04} y={64} t="SRAC3" anchor="middle" size={7.5} c={BLUE} />
      <Lb f={f} x={9.5} y={lrac(9.5)} t="LRAC" dx={5} dy={3} c={RED} />
      <Line x1={f.X(5)} y1={f.Y(25)} x2={f.X(5)} y2={f.oy} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      <Lb f={f} x={2.5} y={10} t="economies of scale" anchor="middle" size={7.5} weight="500" />
      <Lb f={f} x={7.5} y={10} t="diseconomies of scale" anchor="middle" size={7.5} weight="500" />
    </G>
  );
}

// ---------- AR, MR and TR ----------
function RevenueArt() {
  const a = fr(40, 170, 140, 138, 10, 100, -40);
  const b = fr(236, 182, 140, 150, 10, 260);
  return (
    <G>
      <Caption x={110} y={14} t="AR = 100 − 10Q, MR = 100 − 20Q" />
      <Caption x={306} y={14} t="TR = 100Q − 10Q²" />
      <Axes f={a} ylab="FCFA" xlab="Q" xt={[[5, '5'], [10, '10']]} yt={[[-40, '−40'], [50, '50'], [100, '100']]} />
      <Cv d={seg(a, 0, 100, 10, 0)} c={BLUE} />
      <Cv d={seg(a, 0, 100, 7, -40)} c={RED} />
      <Line x1={a.X(5)} y1={a.Y(50)} x2={a.X(5)} y2={a.Y(0)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      <Dot f={a} x={5} y={0} c={RED} />
      <Lb f={a} x={8} y={20} t="AR" dx={4} dy={-3} c={BLUE} />
      <Lb f={a} x={7} y={-40} t="MR" dx={4} dy={3} c={RED} />
      <Lb f={a} x={5} y={50} t="PED = −1" dx={4} dy={-3} size={7.5} weight="500" />
      <Axes f={b} ylab="FCFA" xlab="Q" xt={[[5, '5'], [10, '10']]} yt={[[125, '125'], [250, '250']]} />
      <Cv d={fpath(b, (q) => 100 * q - 10 * q * q, 0, 10)} c={GREEN} />
      <Guide f={b} x={5} y={250} toY={false} />
      <Dot f={b} x={5} y={250} />
      <Lb f={b} x={5} y={250} t="max TR where MR = 0" dy={-6} anchor="middle" size={7.5} weight="500" />
    </G>
  );
}

// ---------- perfect competition ----------
const pcMC = (q) => 30 - 12 * q + 1.5 * q * q;
const pcAVC = (q) => 30 - 6 * q + 0.5 * q * q;
const pcATC = (q) => 128 / q + pcAVC(q);
function PerfectArt() {
  const a = fr(36, 182, 120, 150, 80, 80);
  const b = fr(220, 182, 150, 150, 12, 80);
  return (
    <G>
      <Caption x={96} y={14} t="The industry" />
      <Caption x={295} y={14} t="One firm" />
      <Axes f={a} ylab="Price" xlab="Q (thousands)" />
      <Cv d={seg(a, 20, 80, 80, 20)} c={BLUE} />
      <Cv d={seg(a, 0, 20, 60, 80)} c={RED} />
      <Lb f={a} x={80} y={20} t="D" dx={3} c={BLUE} />
      <Lb f={a} x={60} y={80} t="S" dx={4} c={RED} />
      <Guide f={a} x={40} y={60} yl="60" />
      <Dot f={a} x={40} y={60} />
      <Line x1={a.X(40)} y1={a.Y(60)} x2={b.ox} y2={b.Y(60)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      <Area f={b} pts={[[0, 32.8], [10, 32.8], [10, 60], [0, 60]]} fill={AMBER} />
      <Axes f={b} ylab="Cost, revenue" xlab="output" />
      <Cv d={seg(b, 0, 60, 12, 60)} c={GREEN} />
      <Cv d={fpath(b, pcMC, 1, 11)} c={RED} />
      <Cv d={fpath(b, pcATC, 2.6, 12)} c={PURPLE} />
      <Lb f={b} x={11} y={pcMC(11)} t="MC" dx={4} dy={3} c={RED} />
      <Lb f={b} x={12} y={pcATC(12)} t="ATC" dx={3} dy={3} c={PURPLE} />
      <Lb f={b} x={12} y={60} t="P = MR" dx={3} dy={3} c={GREEN} />
      <Guide f={b} x={10} y={60} xl="10" toY={false} />
      <Guide f={b} x={10} y={32.8} yl="32.8" toX={false} />
      <Dot f={b} x={10} y={60} />
      <Lb f={b} x={1.7} y={37} t="profit 272" anchor="middle" size={7} />
    </G>
  );
}
function PerfectLongArt() {
  const f = fr(48, 190, 280, 164, 12, 80);
  return (
    <G>
      <Axes f={f} ylab="Cost, revenue (FCFA)" xlab="Output (units)" xt={[[6, '6'], [8, '8']]} />
      <Cv d={seg(f, 0, 30, 12, 30)} c={GREEN} />
      <Cv d={seg(f, 0, 12, 12, 12)} c={GOLD} dash="6 3" w={1.6} />
      <Cv d={fpath(f, pcMC, 1, 11)} c={RED} />
      <Cv d={fpath(f, pcATC, 2.6, 12)} c={PURPLE} />
      <Cv d={fpath(f, pcAVC, 0.5, 11)} c={BLUE} />
      <Lb f={f} x={11} y={pcMC(11)} t="MC" dx={4} dy={3} c={RED} />
      <Lb f={f} x={12} y={pcATC(12)} t="ATC" dx={4} dy={3} c={PURPLE} />
      <Lb f={f} x={11} y={pcAVC(11)} t="AVC" dx={4} dy={3} c={BLUE} />
      <Lb f={f} x={0.3} y={30} t="long run: P = 30 = min ATC" dy={-4} size={7.5} c={GREEN} />
      <Lb f={f} x={12} y={12} t="shutdown: P = 12 = min AVC" dy={11} anchor="end" size={7.5} c={GOLD} />
      <Guide f={f} x={8} y={30} toY={false} />
      <Guide f={f} x={6} y={12} toY={false} />
      <Dot f={f} x={8} y={30} r={3} />
      <Dot f={f} x={6} y={12} r={3} />
      <Txt x={f.ox - 5} y={f.Y(30) + 3} size={7.5} anchor="end" fill={O}>
        30
      </Txt>
      <Txt x={f.ox - 5} y={f.Y(12) + 3} size={7.5} anchor="end" fill={O}>
        12
      </Txt>
    </G>
  );
}

// ---------- monopoly ----------
const mATC = (q) => 120 / q + 10 + 2.5 * q;
function MonopolyArt() {
  const f = fr(48, 190, 280, 164, 20, 100);
  return (
    <G>
      <Area f={f} pts={[[0, 45], [6, 45], [6, 70], [0, 70]]} fill={AMBER} />
      <Area f={f} pts={[[6, 70], [9, 55], [6, 40]]} fill={ROSE} />
      <Axes f={f} ylab="Price, cost (FCFA)" xlab="Output (units)" />
      <Cv d={seg(f, 0, 100, 20, 0)} c={BLUE} />
      <Cv d={seg(f, 0, 100, 10, 0)} c={TEAL} />
      <Cv d={seg(f, 0, 10, 18, 100)} c={RED} />
      <Cv d={fpath(f, mATC, 1.7, 15)} c={PURPLE} />
      <Lb f={f} x={16} y={20} t="AR = D" dx={4} dy={-3} c={BLUE} />
      <Lb f={f} x={10} y={0} t="MR" dx={4} dy={-4} c={TEAL} />
      <Lb f={f} x={18} y={100} t="MC" dx={4} dy={3} c={RED} />
      <Lb f={f} x={15} y={mATC(15)} t="ATC" dx={4} dy={3} c={PURPLE} />
      <Guide f={f} x={6} y={70} xl="6" yl="70" />
      <Guide f={f} x={6} y={45} yl="45" toX={false} />
      <Guide f={f} x={9} y={55} xl="9" yl="55" />
      <Dot f={f} x={6} y={70} />
      <Dot f={f} x={6} y={40} c={RED} />
      <Dot f={f} x={9} y={55} c={MUTED} />
      <Lb f={f} x={1.15} y={62} t="profit" anchor="middle" size={7} />
      <Lb f={f} x={1.15} y={47.5} t="150" anchor="middle" size={7} />
    </G>
  );
}

// ---------- third-degree price discrimination ----------
function DiscriminationArt() {
  const a = fr(40, 182, 140, 150, 100, 100);
  const b = fr(236, 182, 140, 150, 100, 100);
  return (
    <G>
      <Caption x={110} y={14} t="Market A: less elastic" />
      <Caption x={306} y={14} t="Market B: more elastic" />
      <Axes f={a} ylab="Price" xlab="Q" />
      <Cv d={seg(a, 0, 100, 100, 0)} c={BLUE} />
      <Cv d={seg(a, 0, 100, 50, 0)} c={TEAL} />
      <Cv d={seg(a, 0, 20, 100, 20)} c={RED} />
      <Lb f={a} x={20} y={80} t="AR" dx={4} dy={-2} c={BLUE} />
      <Lb f={a} x={50} y={0} t="MR" dx={3} dy={-4} c={TEAL} />
      <Lb f={a} x={100} y={20} t="MC" dx={-2} dy={-4} anchor="end" c={RED} />
      <Guide f={a} x={40} y={60} xl="40" yl="60" />
      <Dot f={a} x={40} y={60} />
      <Dot f={a} x={40} y={20} c={RED} />
      <Axes f={b} ylab="Price" xlab="Q" />
      <Cv d={seg(b, 0, 60, 60, 0)} c={BLUE} />
      <Cv d={seg(b, 0, 60, 30, 0)} c={TEAL} />
      <Cv d={seg(b, 0, 20, 100, 20)} c={RED} />
      <Lb f={b} x={10} y={50} t="AR" dx={4} dy={-2} c={BLUE} />
      <Lb f={b} x={30} y={0} t="MR" dx={3} dy={-4} c={TEAL} />
      <Lb f={b} x={100} y={20} t="MC" dx={-2} dy={-4} anchor="end" c={RED} />
      <Guide f={b} x={20} y={40} xl="20" yl="40" />
      <Dot f={b} x={20} y={40} />
      <Dot f={b} x={20} y={20} c={RED} />
    </G>
  );
}

// ---------- monopolistic competition, long run ----------
const mcATC = (q) => 120 / q + 10 + 2.5 * q;
function MonopolisticArt() {
  const f = fr(48, 190, 280, 164, 14, 80);
  const qm = Math.sqrt(48);
  return (
    <G>
      <Axes f={f} ylab="Price, cost (FCFA)" xlab="Output (units)" />
      <Cv d={seg(f, 0, 70, 14, 0)} c={BLUE} />
      <Cv d={seg(f, 0, 70, 7, 0)} c={TEAL} />
      <Cv d={seg(f, 0, 10, 12, 70)} c={RED} />
      <Cv d={fpath(f, mcATC, 2.2, 13)} c={PURPLE} />
      <Lb f={f} x={10.6} y={17} t="AR = D" dx={4} dy={-3} c={BLUE} />
      <Lb f={f} x={7} y={0} t="MR" dx={3} dy={-4} c={TEAL} />
      <Lb f={f} x={12} y={70} t="MC" dx={4} dy={3} c={RED} />
      <Lb f={f} x={13} y={mcATC(13)} t="ATC" dx={4} dy={3} c={PURPLE} />
      <Guide f={f} x={4} y={50} xl="4" yl="50" />
      <Guide f={f} x={qm} y={mcATC(qm)} xl="6.9" toY={false} />
      <Dot f={f} x={4} y={50} r={3} />
      <Dot f={f} x={4} y={30} c={RED} />
      <Dot f={f} x={qm} y={mcATC(qm)} c={PURPLE} />
      <Line x1={f.X(4)} y1={f.oy + 18} x2={f.X(qm)} y2={f.oy + 18} stroke={GOLD} strokeWidth={1.4} />
      <Line x1={f.X(4)} y1={f.oy + 15} x2={f.X(4)} y2={f.oy + 21} stroke={GOLD} strokeWidth={1.4} />
      <Line x1={f.X(qm)} y1={f.oy + 15} x2={f.X(qm)} y2={f.oy + 21} stroke={GOLD} strokeWidth={1.4} />
      <Txt x={(f.X(4) + f.X(qm)) / 2} y={f.oy + 30} size={7.5} fill={GOLD} weight="700">
        excess capacity
      </Txt>
    </G>
  );
}

// ---------- the kinked demand curve ----------
function KinkedArt() {
  const f = fr(48, 190, 280, 164, 24, 90);
  return (
    <G>
      <Axes f={f} ylab="Price, cost (FCFA)" xlab="Output (units)" />
      <Cv d={seg(f, 0, 80, 10, 60)} c={BLUE} />
      <Cv d={seg(f, 10, 60, 22, 0)} c={BLUE} />
      <Cv d={seg(f, 0, 80, 10, 40)} c={TEAL} />
      <Cv d={seg(f, 10, 10, 11, 0)} c={TEAL} />
      <Cv d={seg(f, 10, 40, 10, 10)} c={TEAL} w={2.4} dash="2 2" />
      <Cv d={seg(f, 3, 6, 15, 30)} c={RED} w={1.6} />
      <Cv d={seg(f, 3, 18, 15, 42)} c={RED} w={1.6} />
      <Lb f={f} x={3} y={6} t="MC1" dx={-4} dy={3} anchor="end" c={RED} />
      <Lb f={f} x={3} y={18} t="MC2" dx={-4} dy={3} anchor="end" c={RED} />
      <Guide f={f} x={10} y={60} xl="10" yl="60" />
      <Dot f={f} x={10} y={60} r={3} />
      <Lb f={f} x={10} y={60} t="kink" dx={5} dy={-5} />
      <Lb f={f} x={4} y={72} t="elastic: rivals do not follow a rise" dy={-6} size={7.5} weight="500" c={BLUE} />
      <Lb f={f} x={15.5} y={32.5} t="inelastic: rivals" dx={6} size={7.5} weight="500" c={BLUE} dy={-12} />
      <Lb f={f} x={15.5} y={32.5} t="match a cut" dx={6} size={7.5} weight="500" c={BLUE} dy={-3} />
      <Lb f={f} x={7} y={52} t="MR" dy={13} c={TEAL} />
      <Lb f={f} x={10} y={40} t="gap" dx={4} dy={-2} size={7.5} c={TEAL} />
    </G>
  );
}

// ---------- marginal revenue product ----------
const MRPV = [5, 10, 15, 10, 5, 3, 0];
function MrpArt() {
  const f = fr(52, 190, 270, 160, 8, 16);
  return (
    <G>
      <Axes f={f} ylab="MRP (thousand FCFA a day)" xlab="Worker" xt={[1, 2, 3, 4, 5, 6, 7].map((v) => [v, String(v)])} yt={[[5, '5'], [10, '10'], [15, '15']]} />
      {MRPV.map((v, i) => (
        <G key={i}>
          {v > 0 && <Rect x={f.X(i + 1 - 0.28)} y={f.Y(v)} width={f.X(0.56) - f.X(0)} height={f.Y(0) - f.Y(v)} fill={i < 5 ? GREEN : GREY} />}
          <Txt x={f.X(i + 1)} y={f.Y(v) - 4} size={7.5} fill={O} weight="700">
            {String(v)}
          </Txt>
        </G>
      ))}
      <Cv d={seg(f, 0, 5, 8, 5)} c={RED} />
      <Lb f={f} x={8} y={5} t="wage = 5" dy={-5} anchor="end" c={RED} />
      <Lb f={f} x={3} y={15} t="hire workers 1 to 5" dx={14} dy={-2} size={7.5} weight="500" c={GREEN} />
    </G>
  );
}

// ---------- a minimum wage in a competitive labour market ----------
function UnionWageArt() {
  const f = fr(48, 190, 280, 164, 200, 10);
  return (
    <G>
      <Axes f={f} ylab="Wage (thousand FCFA a day)" xlab="Workers" xt={[[200, '200']]} yt={[[10, '10']]} />
      <Cv d={seg(f, 0, 10, 200, 0)} c={BLUE} />
      <Cv d={seg(f, 0, 0, 200, 10)} c={RED} />
      <Cv d={seg(f, 0, 6, 200, 6)} c={GOLD} dash="6 3" />
      <Lb f={f} x={150} y={2.5} t="D = MRP" dx={6} dy={-4} c={BLUE} />
      <Lb f={f} x={200} y={10} t="S" dx={4} dy={3} c={RED} />
      <Lb f={f} x={200} y={6} t="minimum wage" dy={-4} anchor="end" size={7.5} c={GOLD} />
      <Guide f={f} x={100} y={5} xl="100" yl="5" />
      <Guide f={f} x={80} y={6} xl="80" yl="6" />
      <Guide f={f} x={120} y={6} xl="120" toY={false} />
      <Dot f={f} x={100} y={5} />
      <Dot f={f} x={80} y={6} c={GOLD} />
      <Dot f={f} x={120} y={6} c={GOLD} />
      <Lb f={f} x={100} y={6} t="unemployment 40" dy={-7} anchor="middle" size={7.5} />
    </G>
  );
}

// ---------- economic rent and transfer earnings ----------
function EconomicRentArt() {
  const f = fr(48, 190, 280, 164, 160, 12);
  return (
    <G>
      <Area f={f} pts={[[0, 0], [0, 2], [100, 8], [100, 0]]} fill={SKY} />
      <Area f={f} pts={[[0, 2], [0, 8], [100, 8]]} fill={AMBER} />
      <Axes f={f} ylab="Wage (thousand FCFA a week)" xlab="Workers" yt={[[2, '2']]} />
      <Cv d={seg(f, 0, 2, 160, 11.6)} c={RED} />
      <Cv d={seg(f, 0, 12, 160, 5.6)} c={BLUE} />
      <Lb f={f} x={160} y={11.6} t="S" dx={4} dy={3} c={RED} />
      <Lb f={f} x={160} y={5.6} t="D" dx={4} dy={3} c={BLUE} />
      <Guide f={f} x={100} y={8} xl="100" yl="8" />
      <Dot f={f} x={100} y={8} />
      <Lb f={f} x={32} y={6.2} t="economic rent 300" anchor="middle" size={7.5} />
      <Lb f={f} x={58} y={2} t="transfer earnings 500" anchor="middle" size={7.5} />
    </G>
  );
}

// ---------- externalities ----------
function ExternalityArt() {
  const f = fr(48, 190, 280, 164, 60, 110);
  return (
    <G>
      <Area f={f} pts={[[30, 70], [40, 80], [40, 60]]} fill={ROSE} />
      <Axes f={f} ylab="Price, cost (FCFA)" xlab="Quantity" />
      <Cv d={seg(f, 0, 100, 60, 40)} c={BLUE} />
      <Cv d={seg(f, 0, 20, 60, 80)} c={RED} />
      <Cv d={seg(f, 0, 40, 60, 100)} c={PURPLE} />
      <Lb f={f} x={60} y={40} t="MPB = MSB" dx={4} dy={3} c={BLUE} />
      <Lb f={f} x={60} y={80} t="MPC = S" dx={4} dy={3} c={RED} />
      <Lb f={f} x={60} y={100} t="MSC" dx={4} dy={3} c={PURPLE} />
      <Guide f={f} x={40} y={60} xl="40" yl="60" />
      <Guide f={f} x={30} y={70} xl="30" yl="70" />
      <Dot f={f} x={40} y={60} />
      <Dot f={f} x={30} y={70} c={PURPLE} />
      <Arrow x1={f.X(10)} y1={f.Y(30)} x2={f.X(10)} y2={f.Y(50) + 2} c={GOLD} w={1.2} />
      <Lb f={f} x={10} y={40} t="20" dx={-4} dy={3} anchor="end" size={7.5} c={GOLD} />
      <Lb f={f} x={41} y={72} t="welfare loss" size={7.5} weight="500" />
    </G>
  );
}
function PigouArt() {
  const f = fr(48, 190, 280, 164, 60, 110);
  return (
    <G>
      <Area f={f} pts={[[30, 50], [30, 70], [40, 60]]} fill={ROSE} />
      <Axes f={f} ylab="Price, benefit (FCFA)" xlab="Quantity" />
      <Cv d={seg(f, 0, 80, 60, 20)} c={BLUE} />
      <Cv d={seg(f, 0, 100, 60, 40)} c={PURPLE} />
      <Cv d={seg(f, 0, 20, 60, 80)} c={RED} />
      <Cv d={seg(f, 0, 0, 60, 60)} c={RED} dash="6 3" w={1.6} />
      <Lb f={f} x={60} y={20} t="MPB" dx={4} dy={3} c={BLUE} />
      <Lb f={f} x={60} y={40} t="MSB" dx={4} dy={3} c={PURPLE} />
      <Lb f={f} x={60} y={80} t="S = MPC" dx={4} dy={3} c={RED} />
      <Lb f={f} x={60} y={60} t="S − subsidy" dx={4} dy={3} c={RED} />
      <Guide f={f} x={30} y={50} xl="30" yl="50" />
      <Guide f={f} x={40} y={60} xl="40" yl="60" />
      <Guide f={f} x={40} y={40} yl="40" toX={false} />
      <Dot f={f} x={30} y={50} />
      <Dot f={f} x={40} y={60} c={PURPLE} />
      <Dot f={f} x={40} y={40} c={BLUE} />
      <Lb f={f} x={29.5} y={64} t="welfare loss" anchor="end" size={7.5} weight="500" />
    </G>
  );
}

// ---------- the four-sector circular flow ----------
function FourSectorArt() {
  const mid = [
    { y: 64, name: 'Financial sector', out: 'S', inj: 'I' },
    { y: 104, name: 'Government', out: 'T', inj: 'G' },
    { y: 144, name: 'Rest of the world', out: 'M', inj: 'X' },
  ];
  return (
    <G>
      <Rect x={14} y={56} width={96} height={122} rx={8} fill={SKY} stroke={O} strokeWidth={1.2} />
      <Rect x={290} y={56} width={96} height={122} rx={8} fill={LEAF} stroke={O} strokeWidth={1.2} />
      <Txt x={62} y={121} size={10} weight="700">
        Households
      </Txt>
      <Txt x={338} y={121} size={10} weight="700">
        Firms
      </Txt>
      <Path d="M338 56 L338 30 L62 30 L62 50" fill="none" stroke={BLUE} strokeWidth={1.6} />
      <Head x={62} y={55} dx={0} dy={1} size={6} fill={BLUE} />
      <Txt x={200} y={24} size={8.5} fill={BLUE} weight="700">
        Factor incomes: wages, rent, interest, profit
      </Txt>
      <Path d="M62 178 L62 206 L338 206 L338 184" fill="none" stroke={GREEN} strokeWidth={1.6} />
      <Head x={338} y={179} dx={0} dy={-1} size={6} fill={GREEN} />
      <Txt x={200} y={222} size={8.5} fill={GREEN} weight="700">
        Consumption spending (C)
      </Txt>
      <Txt x={134} y={52} size={7.5} fill={RED} weight="700">
        withdrawals
      </Txt>
      <Txt x={266} y={52} size={7.5} fill={GREEN} weight="700">
        injections
      </Txt>
      {mid.map((m) => (
        <G key={m.name}>
          <Rect x={156} y={m.y} width={88} height={30} rx={6} fill={AMBER} stroke={O} strokeWidth={1} />
          <Txt x={200} y={m.y + 18} size={8} weight="700">
            {m.name}
          </Txt>
          <Arrow x1={110} y1={m.y + 15} x2={154} y2={m.y + 15} c={RED} />
          <Arrow x1={244} y1={m.y + 15} x2={288} y2={m.y + 15} c={GREEN} />
          <Txt x={130} y={m.y + 11} size={8.5} fill={RED} weight="700">
            {m.out}
          </Txt>
          <Txt x={266} y={m.y + 11} size={8.5} fill={GREEN} weight="700">
            {m.inj}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- the Lorenz curve ----------
const LZ = [[0, 0], [20, 5], [40, 15], [60, 30], [80, 55], [100, 100]];
function LorenzArt() {
  const f = fr(56, 196, 170, 170, 100, 100);
  return (
    <G>
      <Path d={`${lines(f, [[0, 0], [100, 100]])} ${lines(f, [...LZ].reverse()).replace('M', 'L')} Z`} fill={AMBER} />
      <Axes f={f} ylab="Cumulative % of income" xlab="Cumulative % of households" xt={[20, 40, 60, 80, 100].map((v) => [v, String(v)])} yt={[20, 40, 60, 80, 100].map((v) => [v, String(v)])} />
      <Cv d={seg(f, 0, 0, 100, 100)} c={GREEN} />
      <Cv d={lines(f, LZ)} c={RED} />
      {LZ.map(([x, y]) => (
        <Dot key={x} f={f} x={x} y={y} c={RED} />
      ))}
      <Txt x={f.X(40) - 6} y={f.Y(40) - 6} size={7.5} fill={GREEN} weight="700" rotate={-45}>
        line of perfect equality
      </Txt>
      <Lb f={f} x={62} y={22} t="Lorenz curve" size={7.5} c={RED} />
      <Lb f={f} x={60} y={30} t="30" dx={-3} dy={-5} anchor="end" size={7} weight="500" />
      <Lb f={f} x={80} y={55} t="55" dx={-4} dy={-3} anchor="end" size={7} weight="500" />
      <Txt x={262} y={70} size={10} anchor="start" weight="700" fill={O}>
        Gini = 0.38
      </Txt>
      <Txt x={262} y={92} size={8} anchor="start" fill={MUTED}>
        Shares of income,
      </Txt>
      <Txt x={262} y={104} size={8} anchor="start" fill={MUTED}>
        poorest fifth first:
      </Txt>
      <Txt x={262} y={118} size={8} anchor="start" fill={O} weight="700">
        5, 10, 15, 25, 45%
      </Txt>
      <Txt x={262} y={140} size={8} anchor="start" fill={MUTED}>
        Shaded area ÷ area
      </Txt>
      <Txt x={262} y={152} size={8} anchor="start" fill={MUTED}>
        under the diagonal
      </Txt>
    </G>
  );
}

// ---------- consumption and saving ----------
function ConsumptionArt() {
  const f = fr(56, 196, 270, 170, 1200, 1200, -200);
  return (
    <G>
      <Axes f={f} ylab="Spending, saving (billion FCFA)" xlab="Income Y" xt={[[400, '400'], [800, '800'], [1200, '1,200']]} yt={[[-100, '−100'], [400, '400'], [1000, '1,000']]} />
      <Cv d={seg(f, 0, 0, 1200, 1200)} c={MUTED} w={1.4} />
      <Cv d={seg(f, 0, 100, 1200, 1000)} c={BLUE} />
      <Cv d={seg(f, 0, -100, 1200, 200)} c={GREEN} />
      <Lb f={f} x={1200} y={1200} t="45°" dx={4} dy={3} c={MUTED} />
      <Lb f={f} x={1200} y={1000} t="C" dx={4} dy={3} c={BLUE} />
      <Lb f={f} x={1200} y={200} t="S" dx={4} dy={3} c={GREEN} />
      <Guide f={f} x={400} y={400} toY={false} />
      <Dot f={f} x={400} y={400} r={3} />
      <Dot f={f} x={400} y={0} c={GREEN} />
      <Lb f={f} x={400} y={400} t="break-even" dx={-5} dy={-6} anchor="end" size={7.5} />
    </G>
  );
}
function KeynesCrossArt() {
  const f = fr(56, 196, 270, 170, 1200, 1200);
  return (
    <G>
      <Axes f={f} ylab="Aggregate demand (billion FCFA)" xlab="Income Y" yt={[[100, '100'], [200, '200']]} />
      <Cv d={seg(f, 0, 0, 1200, 1200)} c={MUTED} w={1.4} />
      <Cv d={seg(f, 0, 100, 1200, 1000)} c={BLUE} w={1.6} />
      <Cv d={seg(f, 0, 200, 1200, 1100)} c={RED} />
      <Lb f={f} x={1200} y={1200} t="45°" dx={4} dy={3} c={MUTED} />
      <Lb f={f} x={1200} y={1100} t="C + I" dx={4} dy={3} c={RED} />
      <Lb f={f} x={1200} y={1000} t="C" dx={4} dy={3} c={BLUE} />
      <Guide f={f} x={800} y={800} xl="800" yl="800" />
      <Dot f={f} x={800} y={800} r={3} />
      <Lb f={f} x={800} y={800} t="E" dx={-8} dy={-4} />
      <Arrow x1={f.X(200)} y1={f.Y(250)} x2={f.X(200)} y2={f.Y(350) + 2} c={GOLD} w={1.2} />
      <Lb f={f} x={200} y={300} t="I" dx={-4} dy={3} anchor="end" size={8} c={GOLD} />
    </G>
  );
}

// ---------- the multiplier, round by round ----------
const ROUNDS = [100, 80, 64, 51.2, 41, 32.8, 26.2, 21];
const CUM = ROUNDS.map((_, i) => [i + 1, ROUNDS.slice(0, i + 1).reduce((t, v) => t + v, 0)]);
function MultiplierArt() {
  const f = fr(52, 190, 280, 160, 9, 520);
  const cum = CUM;
  return (
    <G>
      <Axes f={f} ylab="Billion FCFA" xlab="Round of spending" xt={[1, 2, 3, 4, 5, 6, 7, 8].map((v) => [v, String(v)])} yt={[100, 200, 300, 400, 500].map((v) => [v, String(v)])} />
      {ROUNDS.map((v, i) => (
        <Rect key={i} x={f.X(i + 1 - 0.28)} y={f.Y(v)} width={f.X(0.56) - f.X(0)} height={f.Y(0) - f.Y(v)} fill={i === 0 ? BLUE : SKY} stroke={BLUE} strokeWidth={0.8} />
      ))}
      {[0, 1, 2].map((i) => (
        <Txt key={i} x={f.X(i + 1)} y={f.Y(ROUNDS[i]) + 11} size={7} weight="700" fill={i === 0 ? '#ffffff' : BLUE}>
          {String(ROUNDS[i])}
        </Txt>
      ))}
      <Cv d={seg(f, 0, 500, 9, 500)} c={MUTED} dash={DASH} w={1.2} />
      <Lb f={f} x={0.3} y={500} t="limit: 5 × 100 = 500" dy={-4} size={7.5} c={MUTED} />
      <Cv d={lines(f, cum)} c={RED} />
      {cum.map(([x, y]) => (
        <Dot key={x} f={f} x={x} y={y} c={RED} />
      ))}
      <Lb f={f} x={8} y={416} t="total so far" dx={-4} dy={-8} anchor="end" size={7.5} c={RED} />
    </G>
  );
}

// ---------- deflationary and inflationary gaps ----------
function GapsArt() {
  const f = fr(56, 196, 280, 170, 1500, 1500);
  return (
    <G>
      <Axes f={f} ylab="Aggregate demand (billion FCFA)" xlab="Income Y" xt={[[600, '600'], [1000, 'Yf 1,000'], [1400, '1,400']]} />
      <Cv d={seg(f, 0, 0, 1500, 1500)} c={MUTED} w={1.4} />
      <Cv d={seg(f, 0, 150, 1500, 1275)} c={BLUE} />
      <Cv d={seg(f, 0, 250, 1500, 1375)} c={GREEN} dash="6 3" w={1.6} />
      <Cv d={seg(f, 0, 350, 1500, 1475)} c={RED} />
      <Lb f={f} x={1500} y={1500} t="45°" dx={4} dy={3} c={MUTED} />
      <Line x1={f.X(1000)} y1={f.Y(0)} x2={f.X(1000)} y2={f.Y(1120)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      <Line x1={f.X(1000)} y1={f.Y(900)} x2={f.X(1000)} y2={f.Y(1000)} stroke={BLUE} strokeWidth={3} />
      <Line x1={f.X(1000)} y1={f.Y(1000)} x2={f.X(1000)} y2={f.Y(1100)} stroke={RED} strokeWidth={3} />
      <Dot f={f} x={600} y={600} c={BLUE} />
      <Dot f={f} x={1000} y={1000} c={GREEN} />
      <Dot f={f} x={1400} y={1400} c={RED} />
      <Line x1={f.X(600)} y1={f.Y(600)} x2={f.X(600)} y2={f.Y(0)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      <Line x1={f.X(1400)} y1={f.Y(1400)} x2={f.X(1400)} y2={f.Y(0)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      {[
        { y: 1380, c: BLUE, t: 'AD1 = 150 + 0.75Y' },
        { y: 1300, c: GREEN, t: 'ADf = 250 + 0.75Y', dash: '6 3' },
        { y: 1220, c: RED, t: 'AD2 = 350 + 0.75Y' },
      ].map((k) => (
        <G key={k.t}>
          <Cv d={seg(f, 60, k.y + 25, 150, k.y + 25)} c={k.c} w={1.8} dash={k.dash} />
          <Lb f={f} x={170} y={k.y} t={k.t} size={7.5} weight="500" c={k.c} />
        </G>
      ))}
      <Lb f={f} x={60} y={1100} t="deflationary gap = 100" size={7.5} c={BLUE} />
      <Lb f={f} x={60} y={1020} t="inflationary gap = 100" size={7.5} c={RED} />
      <Lb f={f} x={60} y={940} t="(both measured at Yf)" size={7.5} weight="500" c={MUTED} />
    </G>
  );
}

// ---------- the money market ----------
const md = (m) => 2 + 400 / (m - 100);
function LiquidityArt() {
  const f = fr(48, 190, 280, 164, 600, 12);
  return (
    <G>
      <Axes f={f} ylab="Interest rate (%)" xlab="Money (billion FCFA)" xt={[[200, '200'], [300, '300']]} />
      <Cv d={fpath(f, md, 140, 600)} c={BLUE} />
      <Cv d={seg(f, 200, 0, 200, 11.5)} c={RED} />
      <Cv d={seg(f, 300, 0, 300, 11.5)} c={RED} dash="6 3" w={1.6} />
      <Lb f={f} x={200} y={11.5} t="Ms1" dy={-3} anchor="middle" c={RED} />
      <Lb f={f} x={300} y={11.5} t="Ms2" dy={-3} anchor="middle" c={RED} />
      <Lb f={f} x={600} y={md(600)} t="Md" dx={4} dy={3} c={BLUE} />
      <Guide f={f} x={200} y={6} yl="6" toX={false} />
      <Guide f={f} x={300} y={4} yl="4" toX={false} />
      <Dot f={f} x={200} y={6} />
      <Dot f={f} x={300} y={4} />
      <Lb f={f} x={590} y={1.4} t="liquidity trap: the curve flattens" anchor="end" size={7.5} weight="500" />
    </G>
  );
}

// ---------- demand-pull and cost-push inflation ----------
function AdasArt() {
  const a = fr(40, 182, 140, 150, 120, 90);
  const b = fr(236, 182, 140, 150, 120, 90);
  return (
    <G>
      <Caption x={110} y={14} t="Demand-pull: AD rises" />
      <Caption x={306} y={14} t="Cost-push: AS falls" />
      <Axes f={a} ylab="Price level" xlab="Real output" />
      <Cv d={seg(a, 0, 20, 120, 80)} c={RED} />
      <Cv d={seg(a, 30, 80, 110, 0)} c={BLUE} />
      <Cv d={seg(a, 60, 80, 120, 20)} c={BLUE} dash="6 3" />
      <Lb f={a} x={120} y={80} t="AS" dx={-4} dy={-4} anchor="end" c={RED} />
      <Lb f={a} x={104} y={6} t="AD1" dx={4} c={BLUE} />
      <Lb f={a} x={120} y={20} t="AD2" dx={3} dy={3} c={BLUE} />
      <Guide f={a} x={60} y={50} xl="60" yl="50" />
      <Guide f={a} x={80} y={60} xl="80" yl="60" />
      <Dot f={a} x={60} y={50} />
      <Dot f={a} x={80} y={60} />
      <Axes f={b} ylab="Price level" xlab="Real output" />
      <Cv d={seg(b, 30, 80, 110, 0)} c={BLUE} />
      <Cv d={seg(b, 0, 20, 120, 80)} c={RED} />
      <Cv d={seg(b, 0, 50, 60, 80)} c={RED} dash="6 3" />
      <Lb f={b} x={120} y={80} t="AS1" dx={-4} dy={-4} anchor="end" c={RED} />
      <Lb f={b} x={60} y={80} t="AS2" dx={4} dy={3} c={RED} />
      <Lb f={b} x={104} y={6} t="AD" dx={4} c={BLUE} />
      <Guide f={b} x={60} y={50} xl="60" yl="50" />
      <Guide f={b} x={40} y={70} xl="40" yl="70" />
      <Dot f={b} x={60} y={50} />
      <Dot f={b} x={40} y={70} />
    </G>
  );
}

// ---------- credit creation ----------
const DEPOSITS = [1000, 800, 640, 512, 409.6, 327.7, 262.1, 209.7];
function CreditArt() {
  const f = fr(52, 190, 280, 160, 9, 1050);
  const bw = f.X(0.56) - f.X(0);
  return (
    <G>
      <Axes f={f} ylab="Deposits (thousand FCFA)" xlab="Round" xt={[1, 2, 3, 4, 5, 6, 7, 8].map((v) => [v, String(v)])} yt={[[200, '200'], [600, '600'], [1000, '1,000']]} />
      {DEPOSITS.map((v, i) => (
        <G key={i}>
          <Rect x={f.X(i + 1 - 0.28)} y={f.Y(v)} width={bw} height={f.Y(0.2 * v) - f.Y(v)} fill={LEAF} stroke={GREEN} strokeWidth={0.8} />
          <Rect x={f.X(i + 1 - 0.28)} y={f.Y(0.2 * v)} width={bw} height={f.Y(0) - f.Y(0.2 * v)} fill={ROSE} stroke={RED} strokeWidth={0.8} />
        </G>
      ))}
      {[0, 1, 2].map((i) => (
        <Txt key={i} x={f.X(i + 1)} y={f.Y(DEPOSITS[i]) - 4} size={7.5} weight="700" fill={O}>
          {DEPOSITS[i].toLocaleString('en-US')}
        </Txt>
      ))}
      <Rect x={f.X(5.2)} y={f.Y(1000) - 7} width={9} height={9} fill={LEAF} stroke={GREEN} strokeWidth={0.8} />
      <Lb f={f} x={5.2} y={1000} t="lent out (80%)" dx={13} dy={1} size={7.5} weight="500" />
      <Rect x={f.X(5.2)} y={f.Y(880) - 7} width={9} height={9} fill={ROSE} stroke={RED} strokeWidth={0.8} />
      <Lb f={f} x={5.2} y={880} t="kept as reserves (20%)" dx={13} dy={1} size={7.5} weight="500" />
      <Lb f={f} x={5.2} y={740} t="total deposits = 5,000" dy={1} size={7.5} />
    </G>
  );
}

// ---------- progressive, proportional and regressive taxes ----------
const progRate = (y) => (y <= 0.5 ? 0 : y <= 2 ? (10 * (y - 0.5)) / y : ((0.15 + 0.25 * (y - 2)) / y) * 100);
function TaxSystemsArt() {
  const f = fr(52, 190, 270, 164, 5, 30);
  return (
    <G>
      <Axes f={f} ylab="Average tax rate (%)" xlab="Income (million FCFA)" xt={[1, 2, 3, 4, 5].map((v) => [v, String(v)])} yt={[[10, '10'], [20, '20'], [30, '30']]} />
      <Cv d={fpath(f, progRate, 0, 5, 100)} c={RED} />
      <Cv d={seg(f, 0, 10, 5, 10)} c={BLUE} />
      <Cv d={fpath(f, (y) => 6 / y, 0.2, 5)} c={GREEN} />
      <Lb f={f} x={5} y={progRate(5)} t="progressive" dx={5} dy={3} c={RED} />
      <Lb f={f} x={5} y={10} t="proportional" dx={5} dy={3} c={BLUE} />
      <Lb f={f} x={5} y={1.2} t="regressive" dx={5} dy={3} c={GREEN} />
      <Dot f={f} x={3} y={progRate(3)} c={RED} />
      <Lb f={f} x={3} y={progRate(3)} t="13.3% at 3 million" dx={-4} dy={-6} anchor="end" size={7.5} weight="500" />
    </G>
  );
}

// ---------- comparative advantage ----------
function ComparativeArt() {
  const f = fr(56, 190, 270, 164, 650, 330);
  return (
    <G>
      <Axes f={f} ylab="Cloth (metres)" xlab="Cocoa (bags)" xt={[[200, '200'], [600, '600']]} yt={[[200, '200'], [300, '300']]} />
      <Cv d={seg(f, 0, 300, 600, 0)} c={BLUE} />
      <Cv d={seg(f, 0, 200, 200, 0)} c={GREEN} />
      <Lb f={f} x={300} y={150} t="Country A" dx={5} dy={-5} c={BLUE} />
      <Lb f={f} x={100} y={100} t="Country B" dx={5} dy={-5} c={GREEN} />
      <Lb f={f} x={360} y={300} t="A: 1 bag of cocoa costs 0.5 m of cloth" size={7.5} weight="500" c={BLUE} />
      <Lb f={f} x={360} y={272} t="B: 1 bag of cocoa costs 1 m of cloth" size={7.5} weight="500" c={GREEN} />
      <Lb f={f} x={360} y={244} t="A specialises in cocoa, B in cloth" size={7.5} />
    </G>
  );
}

// ---------- a floating exchange rate, and the J-curve ----------
function ExchangeArt() {
  const f = fr(56, 190, 270, 164, 100, 100);
  return (
    <G>
      <Axes f={f} ylab="Price of the currency" xlab="Quantity of the currency" />
      <Cv d={seg(f, 10, 80, 90, 0)} c={BLUE} />
      <Cv d={seg(f, 30, 80, 100, 10)} c={BLUE} dash="6 3" />
      <Cv d={seg(f, 0, 10, 90, 100)} c={RED} />
      <Lb f={f} x={84} y={6} t="D1" dx={4} c={BLUE} />
      <Lb f={f} x={100} y={10} t="D2" dx={3} dy={-4} c={BLUE} />
      <Lb f={f} x={90} y={100} t="S" dx={4} dy={3} c={RED} />
      <Guide f={f} x={40} y={50} xl="40" yl="50" />
      <Guide f={f} x={50} y={60} xl="50" yl="60" />
      <Dot f={f} x={40} y={50} />
      <Dot f={f} x={50} y={60} />
      <Arrow x1={f.X(62)} y1={f.Y(28)} x2={f.X(76)} y2={f.Y(28)} c={BLUE} />
    </G>
  );
}
const JC = [[0, -10], [2, -10], [3, -22], [4, -28], [5, -20], [6, -6], [7, 6], [8, 15], [9, 21], [10, 25]];
function JcurveArt() {
  const f = fr(56, 186, 270, 150, 10, 40, -40);
  return (
    <G>
      <Axes f={f} ylab="Current account balance" xlab="Time" yt={[[-30, 'deficit'], [30, 'surplus']]} />
      <Line x1={f.X(2)} y1={f.Y(36)} x2={f.X(2)} y2={f.Y(-38)} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      <Lb f={f} x={2} y={30} t="devaluation" dx={4} size={7.5} />
      <Cv d={smooth(f, JC)} c={RED} w={2.4} />
      <Lb f={f} x={4} y={-28} t="worsens first" dx={6} dy={8} size={7.5} weight="500" />
      <Lb f={f} x={8} y={15} t="then improves" dx={-6} dy={-6} anchor="end" size={7.5} weight="500" />
    </G>
  );
}

// ---------- a tariff ----------
function TariffArt() {
  const f = fr(56, 190, 270, 164, 100, 60);
  return (
    <G>
      <Area f={f} pts={[[0, 20], [20, 20], [30, 30], [0, 30]]} fill={LEAF} />
      <Area f={f} pts={[[20, 20], [30, 30], [30, 20]]} fill={ROSE} />
      <Area f={f} pts={[[30, 20], [70, 20], [70, 30], [30, 30]]} fill={AMBER} />
      <Area f={f} pts={[[70, 30], [80, 20], [70, 20]]} fill={ROSE} />
      <Axes f={f} ylab="Price (FCFA)" xlab="Quantity" yt={[[20, '20'], [30, '30']]} />
      <Cv d={seg(f, 40, 60, 100, 0)} c={BLUE} />
      <Cv d={seg(f, 0, 0, 60, 60)} c={RED} />
      <Cv d={seg(f, 0, 20, 100, 20)} c={GREEN} w={1.6} />
      <Cv d={seg(f, 0, 30, 100, 30)} c={GOLD} w={1.6} />
      <Lb f={f} x={96} y={4} t="D" dx={5} c={BLUE} />
      <Lb f={f} x={60} y={60} t="S" dx={4} dy={3} c={RED} />
      <Lb f={f} x={100} y={20} t="Pw" dx={4} dy={3} c={GREEN} />
      <Lb f={f} x={100} y={30} t="Pw + tariff" dx={4} dy={3} c={GOLD} />
      {[20, 30, 70, 80].map((q) => (
        <Line key={q} x1={f.X(q)} y1={f.Y(q === 20 || q === 80 ? 20 : 30)} x2={f.X(q)} y2={f.oy} stroke={MUTED} strokeWidth={0.9} strokeDasharray={DASH} />
      ))}
      {[20, 30, 70, 80].map((q) => (
        <Txt key={`t${q}`} x={f.X(q)} y={f.oy + 12} size={7.5} fill={O}>
          {String(q)}
        </Txt>
      ))}
      <Lb f={f} x={50} y={25} t="tariff revenue" dy={3} anchor="middle" size={7.5} />
      <Lb f={f} x={50} y={30} t="imports 40" dy={-4} anchor="middle" size={7.5} weight="500" />
      <Lb f={f} x={10} y={25} t="producers" dy={3} anchor="middle" size={7} weight="500" />
    </G>
  );
}

// ---------- the Phillips curve ----------
function PhillipsArt() {
  const f = fr(52, 182, 280, 150, 12, 12, -4);
  return (
    <G>
      <Axes f={f} ylab="Inflation (%)" xlab="Unemployment (%)" xlabY={f.oy + 16} xt={[[2.5, '2.5'], [10, '10']]} yt={[[4, '4'], [8, '8']]} />
      <Lb f={f} x={5} y={-4} t="natural rate 5%" dy={10} anchor="middle" size={7.5} c={PURPLE} />
      <Cv d={seg(f, 5, -4, 5, 12)} c={PURPLE} />
      <Cv d={fpath(f, (u) => 20 / u - 4, 1.6, 12)} c={BLUE} />
      <Cv d={fpath(f, (u) => 20 / u, 1.8, 12)} c={RED} />
      <Lb f={f} x={12} y={20 / 12 - 4} t="SRPC1" dx={4} dy={3} c={BLUE} />
      <Lb f={f} x={12} y={20 / 12} t="SRPC2" dx={4} dy={3} c={RED} />
      <Lb f={f} x={5} y={12} t="LRPC" dy={-3} anchor="middle" c={PURPLE} />
      <Dot f={f} x={5} y={0} r={3} />
      <Dot f={f} x={2.5} y={4} r={3} />
      <Dot f={f} x={5} y={4} r={3} />
      <Lb f={f} x={5} y={0} t="A" dx={-9} dy={-6} />
      <Lb f={f} x={2.5} y={4} t="B" dx={3} dy={-5} />
      <Lb f={f} x={5} y={4} t="C" dx={5} dy={-4} />
      <Arrow x1={f.X(2.5) + 4} y1={f.Y(4)} x2={f.X(5) - 5} y2={f.Y(4)} c={GOLD} />
    </G>
  );
}

// ---------- the optimum population ----------
function OptimumArt() {
  const f = fr(52, 190, 280, 164, 12, 130);
  return (
    <G>
      <Axes f={f} ylab="Output per head" xlab="Population" xt={[[6, 'optimum'], [8, 'new']]} />
      <Cv d={fpath(f, (p) => 100 - 2.5 * (p - 6) ** 2, 0, 12)} c={BLUE} />
      <Cv d={fpath(f, (p) => 120 - 2 * (p - 8) ** 2, 0.5, 12)} c={GREEN} dash="6 3" />
      <Guide f={f} x={6} y={100} toY={false} />
      <Guide f={f} x={8} y={120} toY={false} />
      <Dot f={f} x={6} y={100} />
      <Dot f={f} x={8} y={120} c={GREEN} />
      <Lb f={f} x={0.6} y={118} t="dashed: better technology" size={7.5} c={GREEN} />
      <Lb f={f} x={0.6} y={108} t="solid: present technology" size={7.5} c={BLUE} />
      <Lb f={f} x={3.3} y={22} t="under-population" anchor="middle" size={7.5} weight="500" />
      <Lb f={f} x={9.2} y={15} t="over-population" anchor="middle" size={7.5} weight="500" />
    </G>
  );
}

const graph = (title, art, w, h, facts) => ({ title, w, h, art, labels: [], facts });

export const A_ECONOMICS = {
  // ---------- Lower Sixth ----------
  'aec-gce-0725': graph('GCE A Level Economics (0725)', PapersArt, 410, 192, [
    'Paper 1 lasts 1½ hours: multiple choice, on Wednesday 3 June, afternoon.',
    'Paper 2 lasts 3 hours: data response and essays, on Thursday 4 June, morning.',
    'Paper 3 lasts 1¾ hours: a further written paper, on Thursday 4 June, afternoon.',
    'The bars are drawn to scale, so the papers’ lengths can be compared directly.',
  ]),
  'aec-scope': columnsSpec('What economics studies', [
    { head: 'Positive', items: ['statements of fact', 'can be tested', '"inflation rose"'] },
    { head: 'Normative', items: ['value judgements', '"should", "fair"', '"tax fuel more"'] },
    { head: 'Micro', items: ['consumers, firms', 'single markets', 'price of cocoa'] },
    { head: 'Macro', items: ['whole economy', 'output, prices', 'jobs, trade'] },
  ], { colW: 92 }),
  'aec-utility': graph('Total and marginal utility', UtilityArt, 400, 208, [
    'Left: total utility from oranges rises from 20 to a maximum of 60 utils at 5 to 6 oranges, then falls to 56.',
    'Right: marginal utility falls by 4 utils with each orange: 20, 16, 12, 8, 4, then 0 and −4.',
    'Total utility is at its maximum where marginal utility reaches zero.',
  ]),
  'aec-paradox': columnsSpec('The paradox of value', [
    { head: 'Water', items: ['essential to life', 'very plentiful', 'low marginal utility', 'low price'] },
    { head: 'Diamonds', items: ['not needed to live', 'very scarce', 'high marginal utility', 'high price'] },
  ], { colW: 156 }),
  'aec-indifference': graph('An indifference map', IndifferenceArt, 360, 220, [
    'IC1 joins combinations giving equal satisfaction: (1, 12), (2, 6), (3, 4), (4, 3) and (6, 2).',
    'From (2, 6) to (3, 4) the consumer gives up 2 Y for 1 X: the MRS is 2.',
    'From (4, 3) to (6, 2) the consumer gives up only 1 Y for 2 X: the MRS has fallen to 0.5, so the curve is convex.',
    'IC2 and IC3 lie further out and give more satisfaction; the curves never cross.',
  ]),
  'aec-budget-line': graph('The budget line and consumer equilibrium', BudgetLineArt, 360, 220, [
    'With 1,200 FCFA and both goods at 100 FCFA, the budget line runs from 12 Y to 12 X.',
    'E, at 6 X and 6 Y, is where the budget line just touches IC2: there MRS equals the price ratio of 1.',
    'A and B are affordable but lie on the lower curve IC1.',
    'IC3 cannot be reached with this income.',
  ]),
  'aec-tax-incidence': graph('The incidence of a specific tax', TaxIncidenceArt, 380, 220, [
    'Before the tax, demand P = 120 − 2Q and supply P = 30 + Q meet at 60 FCFA and 30 thousand units.',
    'A tax of 30 FCFA shifts supply up to S + tax: buyers now pay 80 FCFA and 20 thousand units are sold.',
    'Sellers keep 50 FCFA: consumers bear 20 of the tax and producers 10.',
    'Tax revenue is the two shaded rectangles, 30 × 20 thousand; the triangle is the deadweight loss (DWL).',
  ]),
  'aec-ped-revenue': graph('Elasticity and revenue along a straight demand curve', PedRevenueArt, 400, 208, [
    'On the demand curve P = 100 − Q, elasticity is −4 at P = 80, −1 at the midpoint and −0.25 at P = 20.',
    'The upper half is elastic and the lower half inelastic.',
    'Total revenue rises while demand is elastic, reaches its maximum of 2,500 at Q = 50, and falls when demand is inelastic.',
  ]),
  'aec-yed-xed': columnsSpec('Income and cross elasticity', [
    { head: 'YED', items: ['above 1: luxury', '0 to 1: necessity', 'below 0: inferior'] },
    { head: 'XED', items: ['positive: substitutes', 'negative: complements', 'near 0: unrelated'] },
  ], { colW: 156 }),
  'aec-pes': graph('Price elasticity of supply', PesArt, 400, 208, [
    'A straight supply line through the origin has a PES of 1 at every point.',
    'A line starting on the price axis is elastic; one starting on the quantity axis is inelastic.',
    'A vertical supply curve has PES = 0; a horizontal one has infinite PES.',
  ]),
  'aec-product-curves': graph('Total, average and marginal product', ProductArt, 400, 208, [
    'Total product rises to 96 bags with 6 to 7 workers, then falls to 92 with the 8th.',
    'MP rises to 30 with the 3rd worker, then falls: diminishing returns.',
    'MP cuts AP where AP is highest (20 bags); MP reaches 0 where total product is at its maximum.',
    'Stage I runs to 4 workers, stage II from 4 to 7, stage III beyond 7.',
  ]),
  'aec-isoquant': graph('Isoquants, isocosts and the least-cost combination', IsoquantArt, 380, 220, [
    'The isoquant Q = 10 joins combinations of labour and capital that produce 10 units.',
    'With each worker and each machine costing 2,000 FCFA, C1 shows all combinations costing 40,000 FCFA.',
    'E, at 10 workers and 10 machines, is the least-cost way to produce 10 units: C1 just touches the isoquant.',
    'F and G also produce 10 units but cost 52,000 FCFA, on the higher isocost C2.',
    'Q = 15 cannot be produced for 40,000 FCFA.',
  ]),
  'aec-economies': treeSpec('Economies and diseconomies of scale', 'Long-run average cost', [
    { name: 'Internal\neconomies', items: ['technical', 'purchasing', 'financial', 'managerial', 'risk-bearing'] },
    { name: 'External\neconomies', items: ['skilled labour pool', 'local suppliers', 'shared infrastructure'] },
    { name: 'Diseconomies', items: ['coordination', 'communication', 'low morale', 'congestion'] },
  ], { colW: 116 }),
  'aec-cost-totals': graph('Fixed, variable and total cost', CostTotalsArt, 370, 220, [
    'Total fixed cost is 60 FCFA at every output.',
    'Total variable cost rises from 40 for 1 unit to 360 for 8 units, faster as diminishing returns set in.',
    'Total cost is TVC plus 60, so the gap between TC and TVC is always the fixed cost.',
  ]),
  'aec-cost-curves': graph('Average and marginal cost curves', CostCurvesArt, 370, 220, [
    'AFC falls continuously, from 60 at 1 unit to 7.5 at 8 units.',
    'AVC is lowest (29 FCFA) at 4 units and ATC is lowest (42 FCFA) at 5 units.',
    'MC falls to 20, then rises, cutting AVC and ATC at their lowest points.',
    'The gap between ATC and AVC is AFC.',
  ]),
  'aec-lrac': graph('The long-run average cost curve', LracArt, 370, 220, [
    'Each short-run curve, SRAC1 to SRAC3, belongs to one plant size.',
    'The LRAC is the envelope that touches each short-run curve at the lowest cost for that output.',
    'LRAC falls while there are economies of scale and rises with diseconomies of scale.',
    'Its lowest point is at the minimum efficient scale (MES).',
  ]),
  'aec-revenue-curves': graph('Average, marginal and total revenue', RevenueArt, 400, 208, [
    'With AR = 100 − 10Q, MR = 100 − 20Q falls twice as steeply and cuts zero at Q = 5.',
    'Total revenue rises while MR is positive and reaches its maximum of 250 where MR = 0.',
    'At that point demand is unit elastic (PED = −1).',
  ]),
  'aec-perfect': graph('Perfect competition in the short run', PerfectArt, 400, 208, [
    'Industry demand and supply set the price at 60 FCFA.',
    'The firm takes that price as given: P = AR = MR is a horizontal line.',
    'It produces 10 units, where MC = MR, with ATC at 32.8 FCFA.',
    'The shaded rectangle is supernormal profit: (60 − 32.8) × 10 = 272 FCFA.',
  ]),
  'aec-perfect-long': graph('The shutdown point and long-run equilibrium', PerfectLongArt, 380, 220, [
    'At a price of 30 FCFA the firm produces 8 units at the lowest point of ATC and earns normal profit: the long-run equilibrium.',
    'At a price of 12 FCFA, the lowest point of AVC at 6 units, it is just willing to produce: below that it shuts down.',
    'The MC curve above minimum AVC is the firm’s short-run supply curve.',
  ]),
  'aec-monopoly': graph('Monopoly equilibrium', MonopolyArt, 380, 220, [
    'The monopolist produces 6 units, where MC = MR, and charges 70 FCFA from the AR curve.',
    'ATC at 6 units is 45 FCFA, so supernormal profit is (70 − 45) × 6 = 150 FCFA, the shaded rectangle.',
    'A competitive industry with the same costs would produce 9 units at 55 FCFA.',
    'The triangle between 6 and 9 units is the deadweight loss of monopoly.',
  ]),
  'aec-discrimination': graph('Third-degree price discrimination', DiscriminationArt, 400, 208, [
    'With MC = 20 in both markets, the firm sets MR = MC in each.',
    'Market A: 40 units at a price of 60 FCFA, where demand is less elastic.',
    'Market B: 20 units at a price of 40 FCFA, where demand is more elastic.',
  ]),
  'aec-monopolistic': graph('Monopolistic competition in the long run', MonopolisticArt, 380, 230, [
    'In the long run the firm’s demand curve AR just touches its ATC curve at 4 units and 50 FCFA.',
    'MC = MR at the same output, so the firm earns only normal profit (P = ATC).',
    'ATC would be lowest at about 6.9 units: the gap is excess capacity.',
  ]),
  'aec-kinked': graph('The kinked demand curve of an oligopolist', KinkedArt, 380, 220, [
    'The demand curve kinks at the current price of 60 FCFA and output of 10 units.',
    'Above the kink demand is elastic, because rivals do not follow a price rise.',
    'Below it demand is inelastic, because rivals match a price cut.',
    'MR has a gap from 40 to 10 at the kink: MC can move between MC1 and MC2 with no change in price or output.',
  ]),
  'aec-mrp': graph('Marginal revenue product and hiring', MrpArt, 360, 220, [
    'The bars show the extra revenue each worker brings: 5, 10, 15, 10, 5, 3 and 0 thousand FCFA a day.',
    'At a wage of 5 thousand FCFA a day, the bakery hires 5 workers: the 5th worker’s MRP just equals the wage.',
    'The 6th and 7th workers would bring in less than they cost.',
  ]),
  'aec-union-wage': graph('A minimum wage above equilibrium', UnionWageArt, 380, 220, [
    'Without intervention the market clears at a wage of 5 thousand FCFA with 100 workers.',
    'A minimum wage of 6 thousand cuts the jobs offered to 80 and raises those seeking work to 120.',
    'The gap of 40 is unemployment caused by the wage floor.',
  ]),
  'aec-economic-rent': graph('Economic rent and transfer earnings', EconomicRentArt, 380, 220, [
    'At the equilibrium, 100 workers earn 8 thousand FCFA a week each: 800 thousand in all.',
    'Transfer earnings, the area under the supply curve, are 500 thousand.',
    'Economic rent, the area above the supply curve and below the wage, is 300 thousand.',
  ]),
  'aec-goods-types': columnsSpec('Types of goods', [
    { head: 'Private', items: ['rival', 'excludable', 'e.g. a mango'] },
    { head: 'Public', items: ['non-rival', 'non-excludable', 'e.g. a lighthouse'] },
    { head: 'Merit', items: ['under-consumed', 'benefit underrated', 'e.g. vaccination'] },
    { head: 'Demerit', items: ['over-consumed', 'harm underrated', 'e.g. tobacco'] },
  ], { colW: 92 }),
  'aec-externality': graph('A negative production externality', ExternalityArt, 380, 220, [
    'The free market produces 40 units at 60 FCFA, where MPB meets MPC.',
    'Each unit causes 20 FCFA of external cost, so MSC lies 20 above MPC.',
    'The social optimum is 30 units at 70 FCFA, where MSB meets MSC.',
    'The shaded triangle is the welfare loss from overproduction.',
  ]),
  'aec-pigou': graph('Correcting an external benefit with a subsidy', PigouArt, 380, 220, [
    'The free market produces 30 units at 50 FCFA, where MPB meets supply.',
    'Each unit gives 20 FCFA of external benefit, so MSB lies 20 above MPB.',
    'The optimum is 40 units; a subsidy of 20 per unit shifts supply down to reach it, with buyers paying 40 FCFA.',
    'The shaded triangle is the welfare loss from underproduction.',
  ]),
  'aec-profit-theories': columnsSpec('Interest and profit', [
    { head: 'Interest', items: ['reward for capital', 'loanable funds', 'liquidity preference', 'real = nominal − inflation'] },
    { head: 'Profit', items: ['reward for enterprise', 'risk and uncertainty', 'innovation', 'monopoly power'] },
  ], { colW: 156 }),
  'aec-intervention': columnsSpec('Correcting market failure', [
    { head: 'Tool', items: ['Pigouvian tax', 'subsidy', 'regulation', 'tradable permits', 'state provision'] },
    { head: 'Best suited to', items: ['external costs', 'external benefits', 'serious harms', 'capping pollution', 'public goods'] },
  ], { colW: 156, arrow: true }),
  'aec-data-response': flowSpec('Answering a data-response question', ['Read title,\nunits, dates', 'Calculate:\nformula, working', 'Interpret\nthe result', 'Explain\nwith theory', 'Evaluate:\nlimits of data'], { perRow: 3, boxW: 108, boxH: 54 }),
  'aec-essay-plan': flowSpec('Planning an A Level essay', ['Define\nkey terms', 'Analyse with\na diagram', 'Evaluate: under\nwhat conditions?', 'Conclude: answer\nthe question'], { perRow: 2, boxW: 136, boxH: 54 }),

  // ---------- Upper Sixth ----------
  'aec-final-plan': columnsSpec('The Upper Sixth year', [
    { head: 'Term 1', items: ['national income', 'Keynes, multiplier', 'money, banks', 'taxes, budget'] },
    { head: 'Term 2', items: ['trade, BOP', 'protection', 'unemployment', 'development'] },
    { head: 'Term 3', items: ['Paper 1 drills', 'Paper 2 timed', 'mock examination', 'corrections'] },
  ], { colW: 116 }),
  'aec-command-words': columnsSpec('Command words', [
    { head: 'Word', items: ['define, state', 'explain', 'analyse', 'calculate', 'evaluate, discuss'] },
    { head: 'What it asks', items: ['precise meaning', 'reasons, cause', 'parts and links', 'formula, working', 'weigh and judge'] },
  ], { colW: 156, arrow: true }),
  'aec-four-sector': graph('The circular flow in four sectors', FourSectorArt, 400, 230, [
    'Firms pay households factor incomes: wages, rent, interest and profit.',
    'Households spend on the goods and services firms produce: consumption spending.',
    'Withdrawals leave the flow: saving to the financial sector, taxes to the government, imports to the rest of the world.',
    'Injections enter it: investment, government spending and exports.',
  ]),
  'aec-ni-ladder': flowSpec('From GDP to national income', ['GDP at\nmarket prices', '+ net income\nfrom abroad\n= GNP', '− depreciation\n= NNP', '− indirect taxes\n+ subsidies\n= national income'], { perRow: 2, boxW: 140, boxH: 60 }),
  'aec-ni-problems': columnsSpec('National income and living standards', [
    { head: 'Measuring problems', items: ['informal sector', 'subsistence output', 'double counting', 'unpaid home work'] },
    { head: 'Welfare problems', items: ['how income is shared', 'leisure, pollution', 'quality of goods', 'prices differ (PPP)'] },
  ], { colW: 156 }),
  'aec-lorenz': graph('The Lorenz curve', LorenzArt, 380, 220, [
    'The diagonal is the line of perfect equality.',
    'The Lorenz curve shows the poorest 60% of households receiving 30% of income and the poorest 80% receiving 55%.',
    'The Gini coefficient is the shaded area divided by the whole area under the diagonal: 0.38 here.',
  ]),
  'aec-consumption': graph('The consumption and saving functions', ConsumptionArt, 360, 222, [
    'The consumption function C = 100 + 0.75Y starts at 100 and rises by 0.75 for each extra franc of income.',
    'The saving function S = −100 + 0.25Y is negative (dissaving) at low incomes.',
    'At the break-even income of 400, consumption equals income and saving is zero.',
  ]),
  'aec-keynes-cross': graph('Equilibrium income: the Keynesian cross', KeynesCrossArt, 370, 222, [
    'Aggregate demand C + I lies 100 above the consumption line, the investment.',
    'Equilibrium E is where aggregate demand crosses the 45° line: income of 800 billion FCFA.',
    'At E planned saving (100) equals planned investment (100).',
  ]),
  'aec-multiplier-rounds': graph('The multiplier, round by round', MultiplierArt, 360, 220, [
    'An extra 100 billion FCFA of investment is spent in round 1.',
    'With MPC = 0.8, each later round is 80% of the one before: 80, 64, 51.2 and so on.',
    'The running total approaches the limit of 5 × 100 = 500 billion FCFA.',
  ]),
  'aec-gaps': graph('Deflationary and inflationary gaps', GapsArt, 380, 222, [
    'Full-employment income Yf is 1,000 billion FCFA; ADf is the demand that would reach it.',
    'With AD1, equilibrium is only 600: AD falls 100 short at Yf, a deflationary gap.',
    'With AD2, demand exceeds full-employment output by 100 at Yf, an inflationary gap that pulls up prices.',
  ]),
  'aec-liquidity': graph('The money market: liquidity preference', LiquidityArt, 380, 220, [
    'The demand for money Md slopes down: people hold more money when interest rates are low.',
    'With a money supply Ms1 of 200 billion FCFA, the interest rate is 6%.',
    'A rise in the money supply to Ms2, 300 billion, lowers the rate to 4%.',
    'At very low rates the curve flattens: the liquidity trap.',
  ]),
  'aec-adas': graph('Demand-pull and cost-push inflation', AdasArt, 400, 208, [
    'Demand-pull: AD shifts from AD1 to AD2, raising output from 60 to 80 and the price level from 50 to 60.',
    'Cost-push: AS shifts from AS1 to AS2, raising the price level from 50 to 70 while output falls from 60 to 40.',
  ]),
  'aec-credit-creation': graph('Credit creation with a 20% reserve ratio', CreditArt, 360, 220, [
    'A new deposit of 1,000 thousand FCFA is made in round 1; the bank keeps 20% and lends 80%.',
    'The loan returns to the banks as a deposit of 800, then 640, and so on.',
    'In the end total deposits reach 1,000 ÷ 0.2 = 5,000 thousand FCFA.',
  ]),
  'aec-beac': treeSpec('The BEAC and its tools', 'BEAC (Yaoundé)', [
    { name: 'Roles', items: ['issues the XAF', 'bankers’ bank', 'lender of last resort', 'holds reserves'] },
    { name: 'Tools', items: ['policy rate', 'compulsory reserves', 'open market ops', 'lending facility'] },
    { name: 'Aims', items: ['price stability', 'support the peg', 'support growth'] },
  ], { colW: 116 }),
  'aec-canons': columnsSpec('Adam Smith’s canons of taxation (1776)', [
    { head: 'Canon', items: ['equity', 'certainty', 'convenience', 'economy'] },
    { head: 'Meaning', items: ['by ability to pay', 'clear amount and time', 'easy to pay', 'cheap to collect'] },
  ], { colW: 156, arrow: true }),
  'aec-tax-systems': graph('Progressive, proportional and regressive taxes', TaxSystemsArt, 400, 220, [
    'Under the banded income tax, the average rate rises with income: 13.3% at 3 million FCFA. It is progressive.',
    'A flat 10% tax takes the same share of every income: proportional.',
    'A fixed sum of 60,000 FCFA takes 12% of an income of 0.5 million but only 1.2% of 5 million: regressive.',
  ]),
  'aec-spending-types': columnsSpec('Types of public expenditure', [
    { head: 'Recurrent', items: ['salaries', 'goods, services', 'debt interest'] },
    { head: 'Capital', items: ['roads, dams', 'schools, hospitals', 'ports, power'] },
    { head: 'Transfers', items: ['pensions', 'grants', 'subsidies'] },
  ], { colW: 116 }),
  'aec-budget': columnsSpec('Budget balances and fiscal policy', [
    { head: 'Deficit', items: ['spending > revenue', 'expansionary', 'adds to debt'] },
    { head: 'Balanced', items: ['spending = revenue', 'multiplier of 1', 'debt unchanged'] },
    { head: 'Surplus', items: ['revenue > spending', 'contractionary', 'repays debt'] },
  ], { colW: 116 }),
  'aec-comparative': graph('Comparative advantage', ComparativeArt, 380, 220, [
    'With 100 worker-days, country A can make 600 bags of cocoa or 300 m of cloth; country B 200 bags or 200 m.',
    'A has an absolute advantage in both goods.',
    'A’s opportunity cost of a bag of cocoa is 0.5 m of cloth, B’s is 1 m: A specialises in cocoa and B in cloth.',
  ]),
  'aec-tot': columnsSpec('Calculating the terms of trade', [
    { head: 'Index (2020 = 100)', items: ['export prices', 'import prices', 'terms of trade'] },
    { head: '2025', items: ['130', '104', '130 ÷ 104 × 100 = 125'] },
  ], { colW: 156 }),
  'aec-bop-accounts': treeSpec('The balance of payments', 'Balance of payments', [
    { name: 'Current\naccount', items: ['goods', 'services', 'primary income', 'secondary income'] },
    { name: 'Capital\naccount', items: ['capital transfers', 'debt forgiveness'] },
    { name: 'Financial\naccount', items: ['direct investment', 'portfolio, loans', 'reserve assets'] },
  ], { colW: 116 }),
  'aec-exchange': graph('A floating exchange rate', ExchangeArt, 370, 220, [
    'The exchange rate is set where the demand for and supply of the currency meet.',
    'A rise in demand for the country’s exports shifts demand from D1 to D2.',
    'The currency appreciates from 50 to 60, and the quantity traded rises from 40 to 50.',
  ]),
  'aec-jcurve': graph('The J-curve after a devaluation', JcurveArt, 370, 214, [
    'After the devaluation the current account first worsens, because import and export volumes take time to respond.',
    'Then it improves, as cheaper exports sell more and dearer imports are cut.',
  ]),
  'aec-tariff': graph('The effects of a tariff', TariffArt, 390, 220, [
    'At the world price of 20 FCFA, home firms supply 20 units, buyers want 80, and 60 are imported.',
    'A tariff of 10 raises the home price to 30: home supply rises to 30, demand falls to 70, and imports fall to 40.',
    'The rectangle is tariff revenue (10 × 40 = 400); the two triangles are deadweight losses of 50 each.',
    'The green area is the gain to home producers.',
  ]),
  'aec-integration-stages': flowSpec('Stages of economic integration', ['Free trade\narea', 'Customs union:\ncommon tariff', 'Common market:\nlabour, capital', 'Economic\nunion', 'Monetary union:\none currency'], { perRow: 3, boxW: 112, boxH: 54, note: 'CEMAC is a customs union and a monetary union (BEAC, CFA franc).' }),
  'aec-unemp-types': columnsSpec('Types of unemployment', [
    { head: 'Type', items: ['frictional', 'structural', 'seasonal', 'cyclical', 'real-wage'] },
    { head: 'Remedy', items: ['job information', 'retraining, mobility', 'diversification', 'raise demand', 'wage flexibility'] },
  ], { colW: 156, arrow: true }),
  'aec-phillips': graph('Short-run and long-run Phillips curves', PhillipsArt, 380, 212, [
    'Start at A: unemployment at the natural rate of 5% with 0% inflation.',
    'Expansion moves the economy along SRPC1 to B: 2.5% unemployment with 4% inflation.',
    'As people come to expect 4% inflation, SRPC1 shifts up to SRPC2 and unemployment returns to 5% at C.',
    'The long-run Phillips curve, LRPC, is vertical at the natural rate.',
  ]),
  'aec-optimum': graph('The optimum population', OptimumArt, 370, 220, [
    'Output per head is greatest at the optimum population.',
    'To the left the country is under-populated; to the right, over-populated.',
    'Better technology raises the curve and moves the optimum to a larger population.',
  ]),
  'aec-dtm': A_GEOGRAPHY['agg-dtm'],
  'aec-harrod-domar': cycleSpec('The Harrod-Domar growth cycle', ['Saving', 'Investment', 'More capital', 'More output', 'More income'], { centre: 'g = s ÷ v' }),
  'aec-hdi': treeSpec('The Human Development Index', 'HDI (0 to 1)', [
    { name: 'Long and\nhealthy life', items: ['life expectancy', 'at birth'] },
    { name: 'Knowledge', items: ['mean years and', 'expected years', 'of schooling'] },
    { name: 'Standard\nof living', items: ['GNI per head', 'at PPP'] },
  ], { colW: 116 }),
  'aec-strategies': columnsSpec('Development strategies', [
    { head: 'Import substitution', items: ['protect home firms', 'replace imports', 'risk: inefficiency'] },
    { head: 'Export-led growth', items: ['produce for the world', 'economies of scale', 'risk: world demand'] },
  ], { colW: 156 }),
  'aec-cameroon-plans': flowSpec('Cameroon’s path to SND30', ['1988:\nfirst IMF\nprogramme', '1994:\nCFA franc\ndevalued', '2006:\nHIPC debt\nrelief', '2009:\nVision 2035', '2020 to 2030:\nSND30'], { perRow: 3, boxW: 108, boxH: 58 }),
  'aec-index-numbers': columnsSpec('Index numbers and rates', [
    { head: 'Measure', items: ['% change', 'change from base', 'real GDP', 'per head', 'ratio to GDP'] },
    { head: 'Formula', items: ['(new − old) ÷ old × 100', 'index − 100', 'nominal ÷ deflator × 100', 'total ÷ population', 'value ÷ GDP × 100'] },
  ], { colW: 156 }),
  'aec-macro-essay': flowSpec('Evaluating a macroeconomic policy', ['Diagnose\nthe cause', 'Size and\ntime lags', 'Side effects\nand conflicts', 'Context:\nCEMAC, peg', 'Judgement'], { perRow: 3, boxW: 108, boxH: 54 }),
  'aec-key-diagrams': columnsSpec('Diagrams to master', [
    { head: 'Micro', items: ['tax incidence', 'cost curves', 'perfect competition', 'monopoly', 'kinked demand', 'externalities'] },
    { head: 'Macro', items: ['circular flow', 'Keynesian cross', 'AD/AS', 'money market', 'Phillips curve', 'tariff'] },
  ], { colW: 156 }),
  'aec-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Paper 2\ntimed', 'Mock: Papers\n2 and 3 in a day', 'Corrections', 'The GCE\n(0725)'], { perRow: 3, boxW: 108 }),
};
