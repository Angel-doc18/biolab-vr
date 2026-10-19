// A Level Chemistry figures for the Lower Sixth organic topics: optical and E/Z
// isomers, preparing methane, Markovnikov addition, the reactions of ethene,
// chain packing in poly(ethene), the enthalpy of hydrogenation of benzene drawn
// to scale, the nitration mechanism and a map of synthetic routes.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { Bunsen, GLASS, O, WATER } from './kit';

const RED = '#c8463d';
const BLUE = '#1f6fb2';
const GREEN = '#2e7d32';
const GREY = '#6b7a88';
const rad = (d) => (d * Math.PI) / 180;
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

// A box whose first line is bold; lines are given with "\n".
function Box({ x, y, w, h, text, fill = '#e6eef8', stroke = O, size = 8.5, dash }) {
  const lines = String(text).split('\n');
  const step = size * 1.3;
  const top = y + h / 2 - ((lines.length - 1) * step) / 2 + size * 0.35;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={stroke} strokeWidth={1.2} strokeDasharray={dash} />
      {lines.map((t, i) => (
        <Txt key={i} x={x + w / 2} y={top + i * step} size={size} weight={i ? '500' : '700'}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// A straight arrow whose shaft stops at the base of its head.
function Arrow({ x1, y1, x2, y2, c = O, w = 1.3, dash }) {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const bx = x2 - ((x2 - x1) / len) * 5;
  const by = y2 - ((y2 - y1) / len) * 5;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={bx} y2={by} stroke={c} strokeWidth={w} strokeDasharray={dash} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

// A curly arrow (movement of an electron pair): a quadratic curve with a head.
function Curly({ x1, y1, cx, cy, x2, y2 }) {
  return (
    <G>
      <Path d={`M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`} stroke={RED} strokeWidth={1.2} fill="none" />
      <Head x={x2} y={y2} dx={x2 - cx} dy={y2 - cy} size={5} fill={RED} />
    </G>
  );
}

// ---------- optical and E/Z isomers ----------
// A bond towards the viewer (solid wedge) and one away from the viewer (hashes).
function Wedge({ x1, y1, x2, y2 }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const px = -Math.sin(a) * 3.2;
  const py = Math.cos(a) * 3.2;
  return <Path d={`M${x1} ${y1} L${x2 + px} ${y2 + py} L${x2 - px} ${y2 - py} Z`} fill={O} />;
}

function Hash({ x1, y1, x2, y2 }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return (
    <G>
      {range(6, (i) => {
        const f = (i + 1) / 6;
        const cx = x1 + (x2 - x1) * f;
        const cy = y1 + (y2 - y1) * f;
        const half = 0.6 + 2.8 * f;
        return <Line key={i} x1={cx - Math.sin(a) * half} y1={cy + Math.cos(a) * half} x2={cx + Math.sin(a) * half} y2={cy - Math.cos(a) * half} stroke={O} strokeWidth={1.1} />;
      })}
    </G>
  );
}

// The chiral carbon of butan-2-ol. H up, CH₃ lower left, C₂H₅ down (behind the
// page) and OH lower right (in front). mirror reflects it left to right.
function Chiral({ cx, cy, mirror }) {
  const s = mirror ? -1 : 1;
  const at = (a, len) => [cx + Math.cos(rad(a)) * len * s, cy - Math.sin(rad(a)) * len];
  const bond = (a) => {
    const [x1, y1] = at(a, 7);
    const [x2, y2] = at(a, 29);
    return { x1, y1, x2, y2 };
  };
  const label = (a, len, text, side) => {
    const [x, y] = at(a, len);
    const anchor = side === 0 ? 'middle' : (side < 0) === !mirror ? 'end' : 'start';
    return (
      <Txt x={x} y={y + 3.5} size={9.5} weight="700" anchor={anchor}>
        {text}
      </Txt>
    );
  };
  const up = bond(90);
  const left = bond(210);
  return (
    <G>
      <Line {...up} stroke={O} strokeWidth={1.4} />
      <Line {...left} stroke={O} strokeWidth={1.4} />
      <Hash {...bond(270)} />
      <Wedge {...bond(330)} />
      <Txt x={cx} y={cy + 4} size={11} weight="700">
        C
      </Txt>
      <Txt x={cx + 8 * s} y={cy - 4} size={9} weight="700" fill={RED}>
        *
      </Txt>
      {label(90, 36, 'H', 0)}
      {label(210, 34, 'CH₃', -1)}
      {label(270, 40, 'C₂H₅', 0)}
      {label(330, 34, 'OH', 1)}
    </G>
  );
}

// 2-bromobut-2-ene: C2 carries Br and CH₃, C3 carries CH₃ and H. z puts the
// CH₃ of C3 on the same side as Br.
function Alkene({ cx, cy, z }) {
  const a = cx - 15;
  const b = cx + 15;
  const end = (x, sx, sy, len) => [x + 11 * sx * len, cy + 19 * sy * len];
  const sub = (x, sx, sy, text, high) => {
    const [x2, y2] = end(x, sx, sy, 1);
    const [tx, ty] = end(x, sx, sy, 1.5);
    return (
      <G key={`${sx}${sy}`}>
        <Line x1={x} y1={cy} x2={x2} y2={y2} stroke={O} strokeWidth={1.4} />
        <Txt x={tx} y={ty + 3.5} size={9.5} weight="700" fill={high ? RED : O}>
          {text}
        </Txt>
      </G>
    );
  };
  return (
    <G>
      <Line x1={a} y1={cy - 2} x2={b} y2={cy - 2} stroke={O} strokeWidth={1.4} />
      <Line x1={a} y1={cy + 2} x2={b} y2={cy + 2} stroke={O} strokeWidth={1.4} />
      {sub(a, -1, -1, 'Br', true)}
      {sub(a, -1, 1, 'CH₃')}
      {sub(b, 1, -1, z ? 'CH₃' : 'H', z)}
      {sub(b, 1, 1, z ? 'H' : 'CH₃', !z)}
    </G>
  );
}

function IsomerArt() {
  return (
    <G>
      <Line x1={170} y1={16} x2={170} y2={112} stroke={GREY} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={170} y={11} size={8.5} fill={GREY}>
        mirror
      </Txt>
      <Chiral cx={100} cy={60} />
      <Chiral cx={240} cy={60} mirror />
      <Txt x={170} y={126} size={9} weight="700">
        Butan-2-ol: enantiomers that cannot be superimposed
      </Txt>
      <Txt x={170} y={139} size={8.5} fill={GREY}>
        C* is the chiral centre: four different groups
      </Txt>
      <Line x1={12} y1={150} x2={328} y2={150} stroke={GREY} strokeWidth={0.6} />
      <Txt x={170} y={166} size={9.5} weight="700">
        E/Z isomers of 2-bromobut-2-ene
      </Txt>
      <Alkene cx={84} cy={206} z />
      <Alkene cx={256} cy={206} />
      <Txt x={170} y={200} size={8.5} fill={GREY}>
        {'C2: Br > CH₃'}
      </Txt>
      <Txt x={170} y={213} size={8.5} fill={GREY}>
        {'C3: CH₃ > H'}
      </Txt>
      <Txt x={84} y={252} size={9} weight="700">
        (Z)-2-bromobut-2-ene
      </Txt>
      <Txt x={84} y={264} size={8.5}>
        priority groups same side
      </Txt>
      <Txt x={256} y={252} size={9} weight="700">
        (E)-2-bromobut-2-ene
      </Txt>
      <Txt x={256} y={264} size={8.5}>
        priority groups opposite
      </Txt>
    </G>
  );
}

// ---------- preparing methane ----------
function Tube({ d }) {
  return (
    <G>
      <Path d={d} fill="none" stroke={O} strokeWidth={4.5} strokeLinejoin="round" />
      <Path d={d} fill="none" stroke={GLASS} strokeWidth={2.5} strokeLinejoin="round" />
    </G>
  );
}

function MethaneArt() {
  return (
    <G>
      {/* stand behind the tube */}
      <Rect x={88} y={208} width={36} height={7} rx={2} fill="#8d969f" stroke={O} strokeWidth={0.8} />
      <Rect x={104} y={64} width={4} height={144} fill="#a5adb5" stroke={O} strokeWidth={0.6} />
      <Bunsen x={64} y={150} h={60} />
      {/* hard-glass tube sloping slightly down towards the mouth */}
      <G transform="rotate(6 30 90)">
        <Path d="M134 81 L39 81 A9 9 0 0 0 39 99 L134 99" fill={GLASS} stroke={O} strokeWidth={1.4} />
        <Path d="M96 91 L30.1 91 A9 9 0 0 0 39 99 L96 99 Z" fill="#ece6d6" />
        {range(12, (i) => <Circle key={i} cx={36 + (i % 6) * 10} cy={93.5 + Math.floor(i / 6) * 3} r={1} fill="#8f8a7c" />)}
        <Rect x={128} y={79} width={12} height={22} rx={2} fill="#6f5a48" />
        <Rect x={100} y={77} width={12} height={4} fill="#9aa3ab" stroke={O} strokeWidth={0.6} />
        <Rect x={100} y={99} width={12} height={4} fill="#9aa3ab" stroke={O} strokeWidth={0.6} />
      </G>
      {/* trough of water with the delivery tube under an inverted gas jar */}
      <Rect x={180} y={150} width={150} height={64} fill={WATER} />
      <Tube d="M139 101.5 L214 101.5 L214 200 L254 200 L254 178" />
      <Path d="M180 136 L180 214 L330 214 L330 136" fill="none" stroke={O} strokeWidth={1.6} />
      <Rect x={238} y={176} width={34} height={10} fill="#c9a36b" stroke={O} strokeWidth={0.8} />
      <Rect x={236} y={80} width={36} height={96} fill={GLASS} stroke={O} strokeWidth={1.3} />
      <Rect x={237} y={124} width={34} height={51} fill={WATER} />
      {range(5, (i) => <Circle key={i} cx={252 + (i % 2) * 5} cy={170 - i * 9} r={2.2} fill="#ffffff" stroke={O} strokeWidth={0.5} />)}
    </G>
  );
}

// ---------- Markovnikov addition ----------
function MarkovnikovArt() {
  return (
    <G>
      <Box x={110} y={4} w={140} h={40} text={'propene + HBr\nCH₃–CH=CH₂'} fill="#fbefd0" />
      <Arrow x1={150} y1={44} x2={100} y2={81} c={GREEN} w={2} />
      <Arrow x1={210} y1={44} x2={262} y2={81} c={GREY} dash="4 3" />
      <Txt x={112} y={62} size={8.5} anchor="end" fill={GREEN}>
        H to C1 (the CH₂ end)
      </Txt>
      <Txt x={248} y={62} size={8.5} anchor="start" fill={GREY}>
        H to C2 (the CH end)
      </Txt>
      <Box x={8} y={82} w={156} h={48} text={'secondary carbocation\nCH₃–CH⁺–CH₃\nmore stable: two alkyl groups'} fill="#e3f0da" stroke={GREEN} />
      <Box x={196} y={82} w={156} h={48} text={'primary carbocation\nCH₃–CH₂–CH₂⁺\nless stable: one alkyl group'} fill="#f8e3df" dash="4 3" />
      <Arrow x1={86} y1={130} x2={86} y2={167} c={GREEN} w={2} />
      <Arrow x1={274} y1={130} x2={274} y2={167} c={GREY} dash="4 3" />
      <Txt x={94} y={152} size={8.5} anchor="start">
        + Br⁻
      </Txt>
      <Txt x={282} y={152} size={8.5} anchor="start">
        + Br⁻
      </Txt>
      <Box x={8} y={168} w={156} h={40} text={'2-bromopropane\nCH₃–CHBr–CH₃, major'} fill="#e3f0da" stroke={GREEN} />
      <Box x={196} y={168} w={156} h={40} text={'1-bromopropane\nCH₃CH₂CH₂Br, minor'} fill="#f8e3df" dash="4 3" />
      <Txt x={180} y={226} size={8.5} italic>
        Markovnikov: H adds to the carbon that already has more hydrogens
      </Txt>
    </G>
  );
}

// ---------- reactions of ethene ----------
const ETHENE = [
  { x: 4, y: 4, text: 'ethane\nH₂, Ni catalyst\nabout 150 °C', from: [160, 96], to: [100, 51] },
  { x: 278, y: 4, text: '1,2-dibromoethane\nBr₂, room temperature\norange to colourless', from: [240, 96], to: [300, 51] },
  { x: 4, y: 95, text: 'bromoethane\nHBr, room temperature', from: [144, 118], to: [123, 118] },
  { x: 278, y: 95, text: 'ethanol\nsteam, H₃PO₄ catalyst\n300 °C, 60 atm', from: [256, 118], to: [277, 118] },
  { x: 4, y: 186, text: 'ethane-1,2-diol\ncold dilute KMnO₄\npurple to colourless', from: [160, 140], to: [100, 185] },
  { x: 278, y: 186, text: 'poly(ethene)\nhigh pressure (LDPE) or\nZiegler-Natta (HDPE)', from: [240, 140], to: [300, 185] },
];

function EtheneArt() {
  return (
    <G>
      {ETHENE.map((e) => (
        <Arrow key={`a${e.x}${e.y}`} x1={e.from[0]} y1={e.from[1]} x2={e.to[0]} y2={e.to[1]} />
      ))}
      <Box x={144} y={96} w={112} h={44} text={'ethene\nCH₂=CH₂'} fill="#fbefd0" size={9.5} />
      {ETHENE.map((e, i) => (
        <Box key={`b${e.x}${e.y}`} x={e.x} y={e.y} w={118} h={46} text={e.text} fill={['#e6eef8', '#e3f0da', '#efe6f7', '#e0f2f1', '#f8e3df', '#e6eef8'][i]} />
      ))}
    </G>
  );
}

// ---------- chain packing in poly(ethene) ----------
const zig = (x0, y0, n, dx = 12, dy = 7) => range(n + 1, (i) => `${i ? 'L' : 'M'}${x0 + i * dx} ${y0 + (i % 2 ? dy : 0)}`).join(' ');
// A side branch hanging from a chain vertex, three bonds long, up or down.
const branch = (x, y, dir) => `M${x} ${y} L${x + 5} ${y + 10 * dir} L${x} ${y + 20 * dir} L${x + 5} ${y + 30 * dir}`;

function PolymerArt() {
  const chain = { stroke: BLUE, strokeWidth: 1.6, fill: 'none', strokeLinejoin: 'round' };
  return (
    <G>
      <Txt x={170} y={16} size={10} weight="700">
        n CH₂=CH₂ → poly(ethene), repeat unit –CH₂–CH₂–
      </Txt>
      <Rect x={8} y={28} width={156} height={122} rx={6} fill="#f2f5f8" stroke={GREY} strokeWidth={0.8} />
      <Rect x={176} y={28} width={156} height={122} rx={6} fill="#f2f5f8" stroke={GREY} strokeWidth={0.8} />
      <Path d={zig(22, 46, 10)} {...chain} />
      <Path d={branch(58, 53, 1)} {...chain} />
      <Path d={branch(106, 53, 1)} {...chain} />
      <Path d={zig(28, 108, 10)} {...chain} />
      <Path d={branch(40, 115, 1)} {...chain} />
      <Path d={branch(88, 115, 1)} {...chain} />
      <Path d={branch(124, 108, -1)} {...chain} />
      {[44, 60, 76, 92, 108, 124].map((y) => (
        <Path key={y} d={zig(188, y, 11)} {...chain} />
      ))}
      <Txt x={86} y={166} size={9} weight="700">
        LDPE: branched chains
      </Txt>
      <Txt x={86} y={179} size={8.5}>
        pack loosely, about 0.92 g cm⁻³
      </Txt>
      <Txt x={254} y={166} size={9} weight="700">
        HDPE: linear chains
      </Txt>
      <Txt x={254} y={179} size={8.5}>
        pack closely, about 0.95 g cm⁻³
      </Txt>
    </G>
  );
}

// ---------- enthalpy of hydrogenation of benzene, to scale ----------
const EY = (e) => 180 - e * 0.4;

function DoubleArrow({ x, y1, y2, c }) {
  return (
    <G>
      <Line x1={x} y1={y1 + 5} x2={x} y2={y2 - 5} stroke={c} strokeWidth={1.4} />
      <Head x={x} y={y1} dx={0} dy={-1} size={6} fill={c} />
      <Head x={x} y={y2} dx={0} dy={1} size={6} fill={c} />
    </G>
  );
}

function BenzeneEnergyArt() {
  return (
    <G>
      <Arrow x1={18} y1={186} x2={18} y2={22} />
      <Txt x={10} y={104} size={9} weight="700" rotate={-90}>
        Enthalpy
      </Txt>
      <Line x1={30} y1={EY(0)} x2={306} y2={EY(0)} stroke={O} strokeWidth={2} />
      <Txt x={168} y={194} size={9} weight="700">
        cyclohexane
      </Txt>
      {/* cyclohexene: one C=C */}
      <Line x1={34} y1={EY(120)} x2={94} y2={EY(120)} stroke={O} strokeWidth={2} />
      <Txt x={64} y={EY(120) - 5} size={8.5} weight="700">
        cyclohexene + H₂
      </Txt>
      <Arrow x1={64} y1={EY(120) + 1} x2={64} y2={EY(0) - 1} c={BLUE} />
      <Txt x={69} y={160} size={9} weight="700" anchor="start" fill={BLUE}>
        −120
      </Txt>
      {/* the Kekulé structure: three C=C, predicted */}
      <Line x1={118} y1={EY(360)} x2={184} y2={EY(360)} stroke={O} strokeWidth={2} strokeDasharray="5 3" />
      <Line x1={184} y1={EY(360)} x2={300} y2={EY(360)} stroke={GREY} strokeWidth={0.8} strokeDasharray="2 3" />
      <Txt x={151} y={EY(360) - 5} size={8.5} weight="700">
        Kekulé + 3H₂ (predicted)
      </Txt>
      <Arrow x1={151} y1={EY(360) + 1} x2={151} y2={EY(0) - 1} c={GREY} dash="4 3" />
      <Txt x={156} y={115} size={9} weight="700" anchor="start" fill={GREY}>
        −360
      </Txt>
      {/* benzene: measured */}
      <Line x1={206} y1={EY(208)} x2={262} y2={EY(208)} stroke={O} strokeWidth={2} />
      <Line x1={262} y1={EY(208)} x2={300} y2={EY(208)} stroke={GREY} strokeWidth={0.8} strokeDasharray="2 3" />
      <Txt x={234} y={EY(208) - 5} size={8.5} weight="700">
        benzene + 3H₂
      </Txt>
      <Arrow x1={234} y1={EY(208) + 1} x2={234} y2={EY(0) - 1} c={BLUE} />
      <Txt x={239} y={145} size={9} weight="700" anchor="start" fill={BLUE}>
        −208
      </Txt>
      <DoubleArrow x={296} y1={EY(360) + 1} y2={EY(208) - 1} c={RED} />
      <Txt x={242} y={58} size={9} weight="700" fill={RED}>
        152 kJ mol⁻¹
      </Txt>
      <Txt x={242} y={70} size={8.5} fill={RED}>
        delocalisation energy
      </Txt>
      <Txt x={168} y={208} size={8} fill={GREY}>
        ΔH of hydrogenation in kJ mol⁻¹, drawn to scale
      </Txt>
    </G>
  );
}

// ---------- nitration mechanism ----------
// A hexagon with a vertex at the top.
const hex = (cx, cy, r = 20) => `${range(6, (i) => `${i ? 'L' : 'M'}${(cx + r * Math.cos(rad(-90 + i * 60))).toFixed(1)} ${(cy + r * Math.sin(rad(-90 + i * 60))).toFixed(1)}`).join(' ')} Z`;

function NitrationArt() {
  const ring = { fill: 'none', stroke: O, strokeWidth: 1.5 };
  return (
    <G transform="translate(0 -36)">
      {/* benzene and the nitronium ion */}
      <Path d={hex(44, 84)} {...ring} />
      <Circle cx={44} cy={84} r={11} {...ring} strokeWidth={1.2} />
      <Txt x={76} y={88} size={11} weight="700">
        +
      </Txt>
      <Txt x={102} y={88} size={10} weight="700" fill={RED}>
        NO₂⁺
      </Txt>
      <Curly x1={52} y1={76} cx={70} cy={50} x2={93} y2={77} />
      <Txt x={44} y={120} size={8.5} fill={GREY}>
        benzene
      </Txt>
      <Arrow x1={124} y1={84} x2={158} y2={84} />
      <Txt x={141} y={98} size={8} fill={GREY}>
        below 55 °C
      </Txt>
      {/* the intermediate: delocalisation partly broken */}
      <Path d={hex(198, 88)} {...ring} />
      <Path d="M207.5 82.5 A11 11 0 1 1 188.5 82.5" {...ring} strokeWidth={1.2} />
      <Txt x={198} y={93} size={11} weight="700">
        +
      </Txt>
      <Line x1={198} y1={68} x2={186} y2={54} stroke={O} strokeWidth={1.4} />
      <Line x1={198} y1={68} x2={210} y2={54} stroke={O} strokeWidth={1.4} />
      <Txt x={182} y={50} size={9.5} weight="700">
        H
      </Txt>
      <Txt x={211} y={50} size={9.5} weight="700" anchor="start">
        NO₂
      </Txt>
      <Curly x1={191} y1={60} cx={176} cy={66} x2={189} y2={79} />
      <Txt x={198} y={124} size={8.5} fill={GREY}>
        intermediate
      </Txt>
      <Arrow x1={238} y1={84} x2={272} y2={84} />
      <Txt x={255} y={76} size={8.5}>
        − H⁺
      </Txt>
      {/* nitrobenzene */}
      <Path d={hex(310, 92)} {...ring} />
      <Circle cx={310} cy={92} r={11} {...ring} strokeWidth={1.2} />
      <Line x1={310} y1={72} x2={310} y2={58} stroke={O} strokeWidth={1.4} />
      <Txt x={310} y={53} size={9.5} weight="700">
        NO₂
      </Txt>
      <Txt x={310} y={128} size={8.5} fill={GREY}>
        nitrobenzene
      </Txt>
      <Txt x={190} y={146} size={9} weight="700">
        Electrophile: HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻
      </Txt>
      <Txt x={190} y={160} size={8.5} fill={GREY}>
        The H⁺ lost joins HSO₄⁻ and re-forms H₂SO₄
      </Txt>
    </G>
  );
}

// ---------- synthetic routes ----------
const ROUTES = [
  ['ethane', 'chloroethane', 'Cl₂, UV light', 'free-radical substitution', '#e6eef8'],
  ['ethanol', 'ethene', 'conc. H₂SO₄, 170 °C', 'elimination (dehydration)', '#efe6f7'],
  ['ethene', '1,2-dibromoethane', 'Br₂, room temperature', 'electrophilic addition', '#e3f0da'],
  ['ethene', 'ethane', 'H₂, Ni catalyst, 150 °C', 'addition (hydrogenation)', '#e3f0da'],
  ['propene', '2-bromopropane', 'HBr (Markovnikov)', 'electrophilic addition', '#e3f0da'],
  ['propene', 'propan-2-ol', 'steam, H₃PO₄, 300 °C, 60 atm', 'electrophilic addition', '#e3f0da'],
  ['benzene', 'nitrobenzene', 'conc. HNO₃ + H₂SO₄, below 55 °C', 'electrophilic substitution', '#fbefd0'],
  ['benzene', 'chlorobenzene', 'Cl₂ with FeCl₃ or AlCl₃', 'electrophilic substitution', '#fbefd0'],
];
const RY = (i) => 6 + i * 42;

function RoutesArt() {
  return (
    <G>
      {ROUTES.map(([from, to, reagent, kind, fill], i) => (
        <G key={`${from}${to}`}>
          <Box x={4} y={RY(i)} w={88} h={30} text={from} fill={fill} size={9} />
          <Arrow x1={96} y1={RY(i) + 15} x2={248} y2={RY(i) + 15} />
          <Txt x={172} y={RY(i) + 10} size={8} weight="700">
            {reagent}
          </Txt>
          <Txt x={172} y={RY(i) + 27} size={7.5} italic fill={GREY}>
            {kind}
          </Txt>
          <Box x={252} y={RY(i)} w={92} h={30} text={to} fill="#ffffff" size={9} />
        </G>
      ))}
    </G>
  );
}

export const CHEMISTRY_L6B = {
  'ac-optical': {
    title: 'Stereoisomers: optical and E/Z',
    w: 340,
    h: 270,
    art: IsomerArt,
    labels: [],
    facts: [
      'Butan-2-ol has a chiral centre: the carbon carries H, OH, CH₃ and C₂H₅. Its two mirror images cannot be superimposed, so they are enantiomers.',
      'The solid wedge is a bond towards you and the hashed bond points away; reflecting the molecule swaps left and right.',
      'In 2-bromobut-2-ene, Br outranks CH₃ on C2 and CH₃ outranks H on C3. With the two higher-priority groups on the same side the isomer is Z; on opposite sides it is E.',
    ],
  },
  'ac-alkane-reactions': {
    title: 'Preparing methane from sodium ethanoate and soda lime',
    w: 340,
    h: 220,
    art: MethaneArt,
    labels: [
      ['Sodium ethanoate and\nsoda lime', 60, 44, 60, 97],
      ['Heat', 26, 132, 58, 126],
      ['Delivery tube', 176, 82, 176, 101],
      ['Methane', 300, 70, 262, 100],
      ['Trough of water', 300, 230, 300, 205],
    ],
    facts: [
      'CH₃COONa + NaOH → CH₄ + Na₂CO₃: heating removes CO₂ from the salt (decarboxylation).',
      'The tube slopes slightly down towards the mouth so that any liquid formed cannot run back onto the hot glass.',
      'Methane is almost insoluble in water, so it is collected over water. It burns with a clean blue flame and does not decolourise bromine water.',
    ],
  },
  'ac-markovnikov': {
    title: 'Markovnikov’s rule: HBr adding to propene',
    w: 360,
    h: 234,
    art: MarkovnikovArt,
    labels: [],
    facts: [
      'The π electrons of propene attack the δ+ hydrogen of HBr; the H–Br bond breaks heterolytically and a carbocation forms.',
      'If H adds to the CH₂ end, the secondary carbocation forms; it is more stable because two alkyl groups release electrons towards the positive carbon.',
      'Br⁻ then bonds to the positive carbon, so the major product is 2-bromopropane and 1-bromopropane is the minor product.',
    ],
  },
  'ac-alkene-addition': {
    title: 'Reactions of ethene',
    w: 400,
    h: 236,
    art: EtheneArt,
    labels: [],
    facts: [
      'Hydrogen with a nickel catalyst at about 150 °C gives ethane; bromine at room temperature gives 1,2-dibromoethane and the orange colour disappears.',
      'Hydrogen bromide gives bromoethane; steam with a phosphoric acid catalyst at 300 °C and 60 atm gives ethanol. These are all electrophilic additions.',
      'Cold dilute acidified KMnO₄ oxidises ethene to ethane-1,2-diol (purple to colourless), and many ethene molecules join to make poly(ethene).',
    ],
  },
  'ac-polymers': {
    title: 'LDPE and HDPE: how the chains pack',
    w: 340,
    h: 188,
    art: PolymerArt,
    labels: [],
    facts: [
      'In addition polymerisation the π bonds open and the monomers join into one long saturated chain; the repeat unit of poly(ethene) is –CH₂–CH₂–.',
      'LDPE, made at very high pressure with an oxygen initiator, has branched chains that cannot pack closely: it is soft and less dense.',
      'HDPE, made with Ziegler-Natta catalysts, has linear chains that pack closely: it is stronger, denser and melts at a higher temperature.',
    ],
  },
  'ac-benzene-energy': {
    title: 'Benzene is more stable than the Kekulé structure',
    w: 320,
    h: 212,
    art: BenzeneEnergyArt,
    labels: [],
    facts: [
      'Hydrogenating cyclohexene, with one C=C, releases 120 kJ mol⁻¹, so three C=C bonds in a Kekulé structure would release 360 kJ mol⁻¹.',
      'Hydrogenating benzene releases only 208 kJ mol⁻¹.',
      'Benzene is therefore 152 kJ mol⁻¹ lower in energy than the Kekulé structure: this is the delocalisation energy of its ring of π electrons.',
    ],
  },
  'ac-nitration': {
    title: 'Nitration of benzene: electrophilic substitution',
    w: 380,
    h: 130,
    art: NitrationArt,
    labels: [],
    facts: [
      'Concentrated sulfuric acid reacts with nitric acid to make the electrophile, the nitronium ion NO₂⁺.',
      'A pair of π electrons from the ring bonds to NO₂⁺. The intermediate carries a positive charge and its delocalisation is partly broken.',
      'The C–H bond breaks and its electrons return to the ring, restoring the delocalised system; H⁺ is lost and nitrobenzene forms. Keeping below 55 °C avoids dinitrobenzene.',
    ],
  },
  'ac-organic-routes': {
    title: 'Lower Sixth organic routes',
    w: 348,
    h: 336,
    art: RoutesArt,
    labels: [],
    facts: ROUTES.map(([from, to, reagent, kind]) => `${from} to ${to}: ${reagent}; ${kind}.`),
  },
};
