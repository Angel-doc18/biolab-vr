// Economics figures for Forms 4 and 5. The market graphs are drawn to one
// scale: price 0 to 600 FCFA per kg on the vertical axis, quantity 0 to 60 kg
// on the horizontal axis, with demand P = 600 − 10Q and supply P = 10Q, so the
// equilibrium is 300 FCFA and 30 kg, as in the lessons' groundnut schedule.
// The PPC is a quarter circle through the lesson's points (0, 100), (60, 80),
// (80, 60) and (100, 0). Other figures use the shared chart builders.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const DEM = '#1f6fb2';
const SUP = '#b8433f';
const GOLD = '#9a6a12';
const GREEN = '#2f7d4f';

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3, size = 6 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
    </G>
  );
}

// A price-quantity frame. Returns mapping functions for the full graphs.
const frame = ({ ox, oy, qw, ph }) => ({
  X: (q) => ox + (q * qw) / 60,
  Y: (p) => oy - (p * ph) / 600,
});

function Axes({ ox, oy, qw, ph, ticks = true, ylab = 'Price (FCFA per kg)', xlab = 'Quantity (kg)' }) {
  const { X, Y } = frame({ ox, oy, qw, ph });
  return (
    <G>
      <Arrow x1={ox} y1={oy} x2={ox + qw + 10} y2={oy} />
      <Arrow x1={ox} y1={oy} x2={ox} y2={oy - ph - 10} />
      {ticks &&
        [10, 20, 30, 40, 50].map((q) => (
          <G key={`q${q}`}>
            <Line x1={X(q)} y1={oy} x2={X(q)} y2={oy + 3} stroke={O} strokeWidth={1} />
            <Txt x={X(q)} y={oy + 12} size={7.5} fill={MUTED}>
              {q}
            </Txt>
          </G>
        ))}
      {ticks &&
        [100, 200, 300, 400, 500].map((p) => (
          <G key={`p${p}`}>
            <Line x1={ox - 3} y1={Y(p)} x2={ox} y2={Y(p)} stroke={O} strokeWidth={1} />
            <Txt x={ox - 5} y={Y(p) + 3} size={7.5} anchor="end" fill={MUTED}>
              {p}
            </Txt>
          </G>
        ))}
      <Txt x={ox + qw + 4} y={oy + 24} size={8.5} anchor="end" fill={O}>
        {xlab}
      </Txt>
      <Txt x={ox - 30} y={oy - ph / 2} size={8.5} fill={O} rotate={-90}>
        {ylab}
      </Txt>
    </G>
  );
}

const F = { ox: 62, oy: 172, qw: 240, ph: 140 };
const { X, Y } = frame(F);
const demand = (q) => 600 - 10 * q;
const supply = (q) => 10 * q;
const dash = '3 3';

function DCurve({ shift = 0, c = DEM, label = 'D', from = 5, to = 55, fr = F }) {
  const { X: x, Y: y } = frame(fr);
  return (
    <G>
      <Line x1={x(from + shift)} y1={y(demand(from))} x2={x(to + shift)} y2={y(demand(to))} stroke={c} strokeWidth={2.2} />
      <Txt x={x(to + shift) + 6} y={y(demand(to)) + 4} size={9.5} weight="700" anchor="start" fill={c}>
        {label}
      </Txt>
    </G>
  );
}

function SCurve({ shift = 0, c = SUP, label = 'S', from = 5, to = 55, fr = F }) {
  const { X: x, Y: y } = frame(fr);
  return (
    <G>
      <Line x1={x(from + shift)} y1={y(supply(from))} x2={x(to + shift)} y2={y(supply(to))} stroke={c} strokeWidth={2.2} />
      <Txt x={x(to + shift) + 6} y={y(supply(to)) + 4} size={9.5} weight="700" anchor="start" fill={c}>
        {label}
      </Txt>
    </G>
  );
}

function Guide({ q, p, fr = F, label, left = false }) {
  const { X: x, Y: y } = frame(fr);
  return (
    <G>
      <Line x1={fr.ox} y1={y(p)} x2={x(q)} y2={y(p)} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Line x1={x(q)} y1={y(p)} x2={x(q)} y2={fr.oy} stroke={MUTED} strokeWidth={1} strokeDasharray={dash} />
      <Circle cx={x(q)} cy={y(p)} r={3.5} fill={O} />
      {label ? (
        <Txt x={left ? x(q) - 7 : x(q) + 7} y={y(p) - 5} size={9} weight="700" anchor={left ? 'end' : 'start'} fill={O}>
          {label}
        </Txt>
      ) : null}
    </G>
  );
}

// ---------- demand, supply, equilibrium ----------
function DemandArt() {
  return (
    <G>
      <Axes {...F} />
      <DCurve />
      <Guide q={20} p={400} label="A" />
      <Guide q={40} p={200} label="B" />
      <Txt x={X(44)} y={Y(520)} size={8.5} fill={MUTED}>
        lower price, larger quantity
      </Txt>
    </G>
  );
}

function SupplyArt() {
  return (
    <G>
      <Axes {...F} />
      <SCurve />
      <Guide q={20} p={200} label="A" left />
      <Guide q={40} p={400} label="B" left />
      <Txt x={X(20)} y={Y(540)} size={8.5} fill={MUTED}>
        higher price, larger quantity
      </Txt>
    </G>
  );
}

function EquilibriumArt() {
  return (
    <G>
      <Axes {...F} />
      <DCurve />
      <SCurve />
      <Line x1={X(20)} y1={Y(400)} x2={X(40)} y2={Y(400)} stroke={GOLD} strokeWidth={1.6} />
      <Txt x={X(30)} y={Y(400) - 6} size={8.5} weight="700" fill={GOLD}>
        surplus
      </Txt>
      <Line x1={X(20)} y1={Y(200)} x2={X(40)} y2={Y(200)} stroke={GREEN} strokeWidth={1.6} />
      <Txt x={X(31)} y={Y(200) + 13} size={8.5} weight="700" anchor="start" fill={GREEN}>
        shortage
      </Txt>
      <Guide q={30} p={300} />
      <Txt x={X(35) + 2} y={Y(300) + 4} size={9} weight="700" anchor="start" fill={O}>
        E (300 FCFA, 30 kg)
      </Txt>
    </G>
  );
}

function PriceControlsArt() {
  return (
    <G>
      <Axes {...F} />
      <DCurve />
      <SCurve />
      <Line x1={F.ox} y1={Y(400)} x2={X(56)} y2={Y(400)} stroke={GOLD} strokeWidth={1.4} strokeDasharray="5 3" />
      <Txt x={X(57)} y={Y(400) + 3} size={8.5} anchor="start" fill={GOLD}>
        minimum
      </Txt>
      <Txt x={X(57)} y={Y(400) + 13} size={8.5} anchor="start" fill={GOLD}>
        price
      </Txt>
      <Line x1={X(20)} y1={Y(400) + 4} x2={X(40)} y2={Y(400) + 4} stroke={GOLD} strokeWidth={2.4} />
      <Txt x={X(30)} y={Y(400) - 6} size={8.5} weight="700" fill={GOLD}>
        surplus 20 kg
      </Txt>
      <Line x1={F.ox} y1={Y(200)} x2={X(56)} y2={Y(200)} stroke={GREEN} strokeWidth={1.4} strokeDasharray="5 3" />
      <Txt x={X(57)} y={Y(200) + 3} size={8.5} anchor="start" fill={GREEN}>
        maximum
      </Txt>
      <Txt x={X(57)} y={Y(200) + 13} size={8.5} anchor="start" fill={GREEN}>
        price
      </Txt>
      <Line x1={X(20)} y1={Y(200) - 4} x2={X(40)} y2={Y(200) - 4} stroke={GREEN} strokeWidth={2.4} />
      <Txt x={X(30)} y={Y(200) + 14} size={8.5} weight="700" fill={GREEN}>
        shortage 20 kg
      </Txt>
    </G>
  );
}

// Two small panels: a movement along a curve and a shift of the curve.
const L1 = { ox: 40, oy: 160, qw: 110, ph: 110 };
const R1 = { ox: 205, oy: 160, qw: 110, ph: 110 };

function MiniAxes({ fr, title }) {
  return (
    <G>
      <Arrow x1={fr.ox} y1={fr.oy} x2={fr.ox + fr.qw + 8} y2={fr.oy} />
      <Arrow x1={fr.ox} y1={fr.oy} x2={fr.ox} y2={fr.oy - fr.ph - 8} />
      <Txt x={fr.ox - 8} y={fr.oy - fr.ph - 2} size={8.5} anchor="end" fill={O}>
        P
      </Txt>
      <Txt x={fr.ox + fr.qw + 8} y={fr.oy + 12} size={8.5} fill={O}>
        Q
      </Txt>
      <Txt x={fr.ox + fr.qw / 2} y={fr.oy + 26} size={9} weight="700" fill={O}>
        {title}
      </Txt>
    </G>
  );
}

function DemandShiftArt() {
  const l = frame(L1);
  const r = frame(R1);
  return (
    <G>
      <MiniAxes fr={L1} title="Movement along D" />
      <DCurve fr={L1} from={8} to={50} />
      <Circle cx={l.X(20)} cy={l.Y(400)} r={3.5} fill={O} />
      <Circle cx={l.X(40)} cy={l.Y(200)} r={3.5} fill={O} />
      <Txt x={l.X(20) + 6} y={l.Y(400) - 5} size={8.5} anchor="start" fill={O}>
        A
      </Txt>
      <Txt x={l.X(40) + 6} y={l.Y(200) - 5} size={8.5} anchor="start" fill={O}>
        B
      </Txt>
      <Arrow x1={l.X(23)} y1={l.Y(370) + 4} x2={l.X(37)} y2={l.Y(230) + 4} c={GOLD} w={1.6} />
      <Txt x={L1.ox + L1.qw / 2} y={L1.oy + 38} size={8} fill={MUTED}>
        own price falls: extension
      </Txt>
      <MiniAxes fr={R1} title="Shift of D" />
      <DCurve fr={R1} from={8} to={42} label="D1" />
      <DCurve fr={R1} from={8} to={42} shift={14} label="D2" c={GREEN} />
      <Arrow x1={r.X(24)} y1={r.Y(350)} x2={r.X(35)} y2={r.Y(350)} c={GOLD} w={1.6} />
      <Txt x={R1.ox + R1.qw / 2} y={R1.oy + 38} size={8} fill={MUTED}>
        income rises: increase
      </Txt>
    </G>
  );
}

function SupplyShiftArt() {
  const l = frame(L1);
  const r = frame(R1);
  return (
    <G>
      <MiniAxes fr={L1} title="Movement along S" />
      <SCurve fr={L1} from={8} to={52} />
      <Circle cx={l.X(20)} cy={l.Y(200)} r={3.5} fill={O} />
      <Circle cx={l.X(40)} cy={l.Y(400)} r={3.5} fill={O} />
      <Arrow x1={l.X(23)} y1={l.Y(230) + 5} x2={l.X(37)} y2={l.Y(370) + 5} c={GOLD} w={1.6} />
      <Txt x={L1.ox + L1.qw / 2} y={L1.oy + 38} size={8} fill={MUTED}>
        own price rises: extension
      </Txt>
      <MiniAxes fr={R1} title="Shift of S" />
      <SCurve fr={R1} from={8} to={40} label="S1" />
      <SCurve fr={R1} from={8} to={40} shift={14} label="S2" c={GREEN} />
      <Arrow x1={r.X(26)} y1={r.Y(180)} x2={r.X(37)} y2={r.Y(180)} c={GOLD} w={1.6} />
      <Txt x={R1.ox + R1.qw / 2} y={R1.oy + 38} size={8} fill={MUTED}>
        costs fall: increase
      </Txt>
    </G>
  );
}

// Three small panels of demand curves of different elasticity.
function PedArt() {
  const panels = [
    { ox: 22, title: 'Elastic', sub: 'PED > 1', line: [[8, 330], [100, 270]] },
    { ox: 132, title: 'Inelastic', sub: 'PED < 1', line: [[38, 440], [66, 120]] },
    { ox: 242, title: 'Perfectly', sub: 'inelastic, PED = 0', line: [[52, 450], [52, 110]] },
  ];
  const oy = 150;
  const top = 50;
  return (
    <G>
      {panels.map((p, i) => {
        const x = (v) => p.ox + v * 0.8;
        const y = (v) => oy - (v - 60) * 0.22;
        return (
          <G key={i}>
            <Arrow x1={p.ox} y1={oy} x2={p.ox + 88} y2={oy} />
            <Arrow x1={p.ox} y1={oy} x2={p.ox} y2={top} />
            <Txt x={p.ox - 4} y={top + 8} size={8} anchor="end" fill={O}>
              P
            </Txt>
            <Txt x={p.ox + 88} y={oy + 11} size={8} fill={O}>
              Q
            </Txt>
            <Line x1={x(p.line[0][0])} y1={y(p.line[0][1])} x2={x(p.line[1][0])} y2={y(p.line[1][1])} stroke={DEM} strokeWidth={2.2} />
            <Txt x={p.ox + 44} y={oy + 24} size={9} weight="700" fill={O}>
              {p.title}
            </Txt>
            <Txt x={p.ox + 44} y={oy + 36} size={8} fill={MUTED}>
              {p.sub}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- the PPC ----------
function PpcArt() {
  const ox = 70;
  const oy = 176;
  const s = 1.4; // px per tonne on both axes
  const x = (v) => ox + v * s;
  const y = (v) => oy - v * s;
  const d = Array.from({ length: 31 }, (_, i) => {
    const t = (Math.PI / 2) * (i / 30);
    return `${i ? 'L' : 'M'}${x(100 * Math.sin(t)).toFixed(1)} ${y(100 * Math.cos(t)).toFixed(1)}`;
  }).join(' ');
  const pts = [
    ['A', 0, 100],
    ['B', 60, 80],
    ['C', 80, 60],
    ['D', 100, 0],
  ];
  return (
    <G>
      <Arrow x1={ox} y1={oy} x2={x(112)} y2={oy} />
      <Arrow x1={ox} y1={oy} x2={ox} y2={y(112)} />
      {[20, 40, 60, 80, 100].map((v) => (
        <G key={v}>
          <Txt x={x(v)} y={oy + 12} size={7.5} fill={MUTED}>
            {v}
          </Txt>
          <Txt x={ox - 5} y={y(v) + 3} size={7.5} anchor="end" fill={MUTED}>
            {v}
          </Txt>
        </G>
      ))}
      <Path d={d} fill="none" stroke={DEM} strokeWidth={2.2} />
      {pts.map(([k, a, b]) => (
        <G key={k}>
          <Circle cx={x(a)} cy={y(b)} r={3.5} fill={DEM} />
          <Txt x={x(a) + 6} y={y(b) - 5} size={9} weight="700" anchor="start" fill={DEM}>
            {k}
          </Txt>
        </G>
      ))}
      <Circle cx={x(40)} cy={y(40)} r={3.5} fill={GOLD} />
      <Txt x={x(40) + 6} y={y(40) + 4} size={8.5} anchor="start" fill={GOLD}>
        inside: waste
      </Txt>
      <Circle cx={x(90)} cy={y(80)} r={3.5} fill={SUP} />
      <Txt x={x(90) + 6} y={y(80) - 4} size={8.5} anchor="start" fill={SUP}>
        outside:
      </Txt>
      <Txt x={x(90) + 6} y={y(80) + 7} size={8.5} anchor="start" fill={SUP}>
        unattainable
      </Txt>
      <Txt x={x(100)} y={oy + 26} size={8.5} anchor="end" fill={O}>
        Cassava (tonnes)
      </Txt>
      <Txt x={ox - 34} y={y(50)} size={8.5} fill={O} rotate={-90}>
        Cocoa (tonnes)
      </Txt>
    </G>
  );
}

// ---------- the circular flow ----------
function FlowArt() {
  const box = (x, label) => (
    <G>
      <Rect x={x} y={70} width={92} height={50} rx={8} fill="#e6eef8" stroke={O} strokeWidth={1.2} />
      <Txt x={x + 46} y={99} size={10.5} weight="700" fill={O}>
        {label}
      </Txt>
    </G>
  );
  return (
    <G>
      {box(18, 'Households')}
      {box(230, 'Firms')}
      <Arrow x1={110} y1={58} x2={236} y2={58} c={SUP} />
      <Txt x={170} y={50} size={8.5} fill={SUP}>
        factor services (land, labour, capital)
      </Txt>
      <Arrow x1={236} y1={36} x2={110} y2={36} c={GREEN} />
      <Txt x={170} y={28} size={8.5} fill={GREEN}>
        incomes (rent, wages, interest, profit)
      </Txt>
      <Arrow x1={236} y1={134} x2={110} y2={134} c={SUP} />
      <Txt x={170} y={148} size={8.5} fill={SUP}>
        goods and services
      </Txt>
      <Arrow x1={110} y1={156} x2={236} y2={156} c={GREEN} />
      <Txt x={170} y={170} size={8.5} fill={GREEN}>
        consumer spending
      </Txt>
      <Txt x={170} y={190} size={8.5} fill={MUTED}>
        Withdrawals: saving, taxes, imports.
      </Txt>
      <Txt x={170} y={202} size={8.5} fill={MUTED}>
        Injections: investment, government spending, exports.
      </Txt>
    </G>
  );
}

const graph = (title, art, h, facts) => ({ title, w: 340, h, art, labels: [], facts });

export const ECONOMICS = {
  // ---------- Form 4 ----------
  'econ-ppc': graph('A production possibility curve', PpcArt, 214, ['The curve passes through A (0 cassava, 100 cocoa), B (60, 80), C (80, 60) and D (100, 0) tonnes.', 'Moving from B to C gains 20 tonnes of cassava at an opportunity cost of 20 tonnes of cocoa.', 'A point inside the curve shows unused resources; a point outside cannot be reached with present resources.']),
  'econ-systems': columnsSpec('Economic systems compared', [
    { head: 'Free market', items: ['private ownership', 'price mechanism', 'profit motive', 'risk: inequality'] },
    { head: 'Command', items: ['state ownership', 'central plan', 'equality aims', 'risk: inefficiency'] },
    { head: 'Mixed', items: ['private + public', 'markets + state', 'e.g. Cameroon', 'balance of both'] },
  ], { colW: 116 }),
  'econ-factors': columnsSpec('Factors of production and their rewards', [
    { head: 'Factor', items: ['Land', 'Labour', 'Capital', 'Entrepreneur'] },
    { head: 'Examples', items: ['soil, forests, oil', 'human effort', 'machines, tools', 'organiser, risk-taker'] },
    { head: 'Reward', items: ['rent', 'wages', 'interest', 'profit'] },
  ], { colW: 112 }),
  'econ-population': columnsSpec('Population and output per head', [
    { head: 'Under-population', items: ['too few people', 'resources unused', 'more people would', 'raise output per head'] },
    { head: 'Optimum', items: ['highest output', 'per head with', 'present resources', 'and technology'] },
    { head: 'Over-population', items: ['too many people', 'output per head falls', 'unemployment,', 'pressure on services'] },
  ], { colW: 116 }),
  'econ-capital': treeSpec('Types of capital', 'Capital (reward: interest)', [
    { name: 'Fixed', items: ['machines', 'buildings', 'tractors'] },
    { name: 'Circulating', items: ['raw materials', 'fuel', 'goods in process'] },
    { name: 'Social', items: ['roads', 'schools', 'hospitals'] },
  ], { colW: 112 }),
  'econ-business': columnsSpec('Forms of business organisation', [
    { head: 'Sole trader', items: ['1 owner', 'unlimited liability', 'small capital'] },
    { head: 'Partnership', items: ['2 to 20 partners', 'unlimited liability', 'deed of partnership'] },
    { head: 'Company', items: ['shareholders', 'limited liability', 'Ltd or Plc'] },
    { head: 'Cooperative', items: ['members own it', 'one member,', 'one vote'] },
  ], { colW: 94 }),
  'econ-location': treeSpec('Why industries locate where they do', 'Location of industry', [
    { name: 'Raw\nmaterials', items: ['heavy inputs', 'cement, cotton'] },
    { name: 'Market', items: ['bulky products', 'breweries'] },
    { name: 'Power', items: ['cheap energy', 'Edéa smelter'] },
    { name: 'Other', items: ['transport, labour', 'government policy'] },
  ], { colW: 92 }),
  'econ-demand': graph('The demand curve', DemandArt, 206, ['Demand slopes down: at 400 FCFA per kg buyers want 20 kg (A); at 200 FCFA they want 40 kg (B).', 'Price is on the vertical axis and quantity on the horizontal axis.', 'The curve shown is P = 600 − 10Q.']),
  'econ-demand-shift': graph('Movement along and shift of demand', DemandShiftArt, 206, ['Left: a fall in the good’s own price moves buyers along the curve from A to B (an extension of demand).', 'Right: a change in another factor, such as a rise in income, shifts the whole curve from D1 to D2 (an increase in demand).']),
  'econ-supply': graph('The supply curve', SupplyArt, 206, ['Supply slopes up: at 200 FCFA per kg sellers offer 20 kg (A); at 400 FCFA they offer 40 kg (B).', 'The curve shown is P = 10Q.']),
  'econ-supply-shift': graph('Movement along and shift of supply', SupplyShiftArt, 206, ['Left: a rise in the good’s own price moves sellers along the curve (an extension of supply).', 'Right: lower costs or better technology shift the whole curve from S1 to S2 (an increase in supply).']),
  'econ-equilibrium': graph('Market equilibrium', EquilibriumArt, 206, ['Demand and supply cross at E: 300 FCFA per kg and 30 kg.', 'At 400 FCFA there is a surplus of 20 kg (supply 40, demand 20), so price falls.', 'At 200 FCFA there is a shortage of 20 kg (demand 40, supply 20), so price rises.']),
  'econ-price-controls': graph('Maximum and minimum prices', PriceControlsArt, 206, ['A maximum price of 200 FCFA, below equilibrium, causes a shortage of 20 kg.', 'A minimum price of 400 FCFA, above equilibrium, causes a surplus of 20 kg.', 'The equilibrium is 300 FCFA and 30 kg.']),
  'econ-ped': graph('Price elasticity of demand', PedArt, 196, ['A flat demand curve is elastic: a small price change causes a large change in quantity.', 'A steep curve is inelastic: quantity changes little.', 'A vertical curve is perfectly inelastic: quantity does not change at all.']),
  'econ-markets': columnsSpec('Perfect competition and monopoly', [
    { head: 'Perfect competition', items: ['many sellers', 'identical product', 'free entry', 'price taker', 'normal profit'] },
    { head: 'Monopoly', items: ['one seller', 'no close substitute', 'barriers to entry', 'price maker', 'supernormal profit'] },
  ], { colW: 156 }),
  'econ-money': columnsSpec('Money: functions and qualities', [
    { head: 'Functions', items: ['medium of exchange', 'unit of account', 'store of value', 'deferred payment'] },
    { head: 'Qualities', items: ['acceptable', 'durable, portable', 'divisible', 'scarce, hard to forge'] },
  ], { colW: 156 }),
  'econ-banks': columnsSpec('Banks in Cameroon', [
    { head: 'Commercial banks', items: ['accept deposits', 'give loans', 'make payments', 'create credit'] },
    { head: 'BEAC (central bank)', items: ['issues the franc CFA', 'bankers’ bank', 'monetary policy', 'foreign reserves'] },
  ], { colW: 156 }),
  'econ-formulas': columnsSpec('Formulas to master', [
    { head: 'Measure', items: ['% change', 'PED', 'PES', 'YED', 'total revenue'] },
    { head: 'Formula', items: ['change ÷ original × 100', '%ΔQd ÷ %ΔP', '%ΔQs ÷ %ΔP', '%ΔQd ÷ %Δincome', 'price × quantity'] },
  ], { colW: 156 }),

  // ---------- Form 5 ----------
  'econ-gce-0525': columnsSpec('GCE Economics (0525)', [
    { head: 'Paper 1 (1½ h)', items: ['multiple choice', 'graphs', 'short calculations', 'whole syllabus'] },
    { head: 'Paper 2 (2½ h)', items: ['A: data response', '(compulsory)', 'B: essays', 'diagrams, evaluation'] },
  ], { colW: 156 }),
  'econ-circular-flow': graph('The circular flow of income', FlowArt, 212, ['Households supply factor services to firms and receive incomes: rent, wages, interest and profit.', 'Households spend their incomes on goods and services produced by firms.', 'Saving, taxes and imports leave the flow; investment, government spending and exports enter it.']),
  'econ-ni-methods': columnsSpec('Measuring national income', [
    { head: 'Expenditure', items: ['C + I + G', '+ (X − M)'] },
    { head: 'Income', items: ['wages + rent', '+ interest + profit', '(no transfers)'] },
    { head: 'Output', items: ['value added', 'by each sector', '(no double counting)'] },
  ], { colW: 116 }),
  'econ-ni-limits': columnsSpec('National income: limits as a measure', [
    { head: 'Hard to measure', items: ['informal sector', 'subsistence output', 'poor data', 'tax evasion'] },
    { head: 'Not welfare', items: ['hides inequality', 'ignores leisure', 'ignores pollution', 'price differences'] },
  ], { colW: 156 }),
  'econ-taxes': columnsSpec('Kinds of tax', [
    { head: 'Direct', items: ['income tax', 'company tax', 'property tax'] },
    { head: 'Indirect', items: ['VAT (19.25%)', 'excise duty', 'customs duty'] },
    { head: 'By rate', items: ['progressive', 'proportional', 'regressive'] },
  ], { colW: 112 }),
  'econ-budget': columnsSpec('Budget balances', [
    { head: 'Balanced', items: ['revenue', '= expenditure'] },
    { head: 'Deficit', items: ['expenditure', '> revenue', 'financed by', 'borrowing'] },
    { head: 'Surplus', items: ['revenue', '> expenditure', 'debt can be', 'repaid'] },
  ], { colW: 112 }),
  'econ-inflation': columnsSpec('Inflation: two main types', [
    { head: 'Demand-pull', items: ['demand exceeds', 'capacity', 'credit, deficits', 'remedy: cut demand'] },
    { head: 'Cost-push', items: ['rising costs', 'wages, fuel, imports', 'prices passed on', 'remedy: supply side'] },
  ], { colW: 156 }),
  'econ-unemployment': columnsSpec('Types of unemployment', [
    { head: 'Frictional', items: ['between jobs'] },
    { head: 'Structural', items: ['skills mismatch'] },
    { head: 'Cyclical', items: ['recession'] },
    { head: 'Seasonal', items: ['off-season'] },
  ], { colW: 86 }),
  'econ-advantage': columnsSpec('Comparative advantage (output per unit of resources)', [
    { head: 'Country', items: ['A', 'B'] },
    { head: 'Cocoa (tonnes)', items: ['10', '4'] },
    { head: 'Rice (tonnes)', items: ['5', '4'] },
    { head: 'Cost of 1 cocoa', items: ['0.5 rice', '1 rice'] },
  ], { colW: 86 }),
  'econ-bop': treeSpec('The balance of payments', 'Balance of payments', [
    { name: 'Current\naccount', items: ['goods (trade)', 'services', 'primary income', 'secondary income'] },
    { name: 'Capital\naccount', items: ['capital', 'transfers', 'debt forgiveness'] },
    { name: 'Financial\naccount', items: ['direct investment', 'portfolio, loans', 'reserves'] },
  ], { colW: 116 }),
  'econ-protection': columnsSpec('Methods of protection', [
    { head: 'Tariff', items: ['tax on', 'imports'] },
    { head: 'Quota', items: ['limit on', 'quantity'] },
    { head: 'Subsidy', items: ['help to home', 'producers'] },
    { head: 'Embargo', items: ['total', 'ban'] },
  ], { colW: 84 }),
  'econ-integration': columnsSpec('Regional integration and Cameroon', [
    { head: 'CEMAC (1994)', items: ['6 members', 'franc CFA, BEAC', 'Commission: Bangui', 'customs union'] },
    { head: 'ECOWAS (1975)', items: ['West Africa', 'HQ Abuja', '12 members since 2025', 'Cameroon not a member'] },
    { head: 'AfCFTA (2018)', items: ['whole continent', 'trading from 2021', 'secretariat Accra', 'tariffs removed'] },
  ], { colW: 116 }),
  'econ-graph-reading': columnsSpec('Reading graphs fast', [
    { head: 'Change', items: ['demand up', 'demand down', 'supply up', 'supply down'] },
    { head: 'Price', items: ['rises', 'falls', 'falls', 'rises'] },
    { head: 'Quantity', items: ['rises', 'falls', 'rises', 'falls'] },
  ], { colW: 104 }),
  'econ-data-response': flowSpec('Answering a data-response question', ['Read title,\nunits, years', 'Describe the\ntrend with figures', 'Calculate:\nformula, working', 'Explain with\ntheory', 'Suggest or\nevaluate'], { perRow: 3, boxW: 108, boxH: 54 }),
  'econ-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Paper 2\ndata and essays', 'Mock\nexamination', 'Correction and\nremediation', 'The GCE\n(0525)'], { perRow: 3, boxW: 108 }),
};
