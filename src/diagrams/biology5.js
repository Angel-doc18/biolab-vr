// Form 4 Biology figures from the harmonised scheme of work: the limiting factors
// of photosynthesis, enzyme graphs, the lock-and-key model, a Visking tubing model
// of the gut, the stages of photosynthesis, the starch test on a leaf, dental
// formulas, the housefly's life cycle, vector control and conservation.
import { G, Line, Path, Rect, Ellipse, Circle } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';

const O = '#33414d';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#2f7d4f';

function Axes({ x0, y0, w, h, xLabel, yLabel }) {
  return (
    <G>
      <Line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={O} strokeWidth={1.3} />
      <Line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={O} strokeWidth={1.3} />
      <Head x={x0 + w + 4} y={y0} dx={1} dy={0} size={6} fill={O} />
      <Head x={x0} y={y0 - h - 4} dx={0} dy={-1} size={6} fill={O} />
      <Txt x={x0 + w / 2} y={y0 + 18} size={9.5}>
        {xLabel}
      </Txt>
      <Txt x={x0 - 14} y={y0 - h / 2} size={9.5} rotate={-90}>
        {yLabel}
      </Txt>
    </G>
  );
}

// ---------- limiting factors of photosynthesis ----------
function LimitingArt() {
  const x0 = 40;
  const y0 = 170;
  // rate rises with light, then levels off; more carbon dioxide gives a higher plateau
  const curve = (top) => `M${x0} ${y0} C ${x0 + 60} ${y0 - top * 0.9}, ${x0 + 110} ${y0 - top}, ${x0 + 270} ${y0 - top}`;
  return (
    <G>
      <Rect x={x0 + 4} y={y0 - 150} width={58} height={146} fill="#fbefd0" opacity={0.55} />
      <Axes x0={x0} y0={y0} w={280} h={150} xLabel="Light intensity" yLabel="Rate of photosynthesis" />
      <Path d={curve(120)} fill="none" stroke={GREEN} strokeWidth={2.2} />
      <Path d={curve(70)} fill="none" stroke={BLUE} strokeWidth={2.2} />
      <Txt x={300} y={y0 - 128} size={9} anchor="end" fill={GREEN} weight="700">
        high carbon dioxide
      </Txt>
      <Txt x={300} y={y0 - 78} size={9} anchor="end" fill={BLUE} weight="700">
        low carbon dioxide
      </Txt>
      <Txt x={x0 + 33} y={y0 - 136} size={8.5}>
        light is the
      </Txt>
      <Txt x={x0 + 33} y={y0 - 125} size={8.5}>
        limiting factor
      </Txt>
      <Txt x={225} y={y0 - 40} size={8.5}>
        level part: carbon dioxide (or
      </Txt>
      <Txt x={225} y={y0 - 29} size={8.5}>
        temperature) is now limiting
      </Txt>
    </G>
  );
}

// ---------- enzyme graphs ----------
function EnzymeArt() {
  const a = { x0: 36, y0: 160 };
  const b = { x0: 236, y0: 160 };
  const temp = `M${a.x0} ${a.y0 - 6} C ${a.x0 + 60} ${a.y0 - 30}, ${a.x0 + 100} ${a.y0 - 120}, ${a.x0 + 112} ${a.y0 - 126} C ${a.x0 + 124} ${a.y0 - 128}, ${a.x0 + 132} ${a.y0 - 80}, ${a.x0 + 150} ${a.y0 - 4}`;
  const bell = (cx, col) => (
    <Path d={`M${cx - 36} ${b.y0 - 4} C ${cx - 18} ${b.y0 - 6}, ${cx - 14} ${b.y0 - 110}, ${cx} ${b.y0 - 112} C ${cx + 14} ${b.y0 - 110}, ${cx + 18} ${b.y0 - 6}, ${cx + 36} ${b.y0 - 4}`} fill="none" stroke={col} strokeWidth={2} />
  );
  const phX = (ph) => b.x0 + 8 + ph * 12;
  return (
    <G>
      <Axes x0={a.x0} y0={a.y0} w={160} h={140} xLabel="Temperature / °C" yLabel="Rate of reaction" />
      <Path d={temp} fill="none" stroke={RED} strokeWidth={2.2} />
      <Line x1={a.x0 + 112} y1={a.y0} x2={a.x0 + 112} y2={a.y0 - 126} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={a.x0 + 112} y={a.y0 + 8} size={8}>
        37
      </Txt>
      <Txt x={a.x0 + 70} y={a.y0 - 132} size={8.5}>
        optimum
      </Txt>
      <Txt x={a.x0 + 138} y={a.y0 - 96} size={8.5} anchor="start">
        denatured
      </Txt>
      <Axes x0={b.x0} y0={b.y0} w={160} h={140} xLabel="pH" yLabel="Rate of reaction" />
      {bell(phX(2), RED)}
      {bell(phX(7), BLUE)}
      {bell(phX(8), GREEN)}
      {[2, 7, 8].map((p) => (
        <Txt key={p} x={phX(p)} y={b.y0 + 8} size={8}>
          {p}
        </Txt>
      ))}
      <Txt x={phX(2)} y={b.y0 - 118} size={8.5} fill={RED} weight="700">
        pepsin
      </Txt>
      <Txt x={phX(7) - 4} y={b.y0 - 118} size={8.5} fill={BLUE} weight="700" anchor="end">
        amylase
      </Txt>
      <Txt x={phX(8) + 4} y={b.y0 - 118} size={8.5} fill={GREEN} weight="700" anchor="start">
        trypsin
      </Txt>
    </G>
  );
}

// ---------- lock and key ----------
function Enzyme({ x, y }) {
  return <Path d={`M${x} ${y} L${x + 70} ${y} L${x + 70} ${y + 40} L${x + 47} ${y + 40} L${x + 47} ${y + 24} L${x + 23} ${y + 24} L${x + 23} ${y + 40} L${x} ${y + 40} Z`} fill="#9cc7ea" stroke={O} strokeWidth={1.3} />;
}
function LockKeyArt() {
  return (
    <G>
      {/* 1: enzyme and substrate apart */}
      <Enzyme x={10} y={60} />
      <Rect x={23} y={20} width={24} height={26} rx={3} fill="#f2c94c" stroke={O} strokeWidth={1.2} />
      <Txt x={45} y={124} size={9}>
        enzyme + substrate
      </Txt>
      <Head x={110} y={80} dx={1} dy={0} size={7} fill={O} />
      <Line x1={92} y1={80} x2={104} y2={80} stroke={O} strokeWidth={1.4} />
      {/* 2: complex */}
      <Enzyme x={124} y={60} />
      <Rect x={147} y={70} width={24} height={30} rx={3} fill="#f2c94c" stroke={O} strokeWidth={1.2} />
      <Txt x={159} y={124} size={9}>
        enzyme-substrate
      </Txt>
      <Txt x={159} y={135} size={9}>
        complex
      </Txt>
      <Head x={224} y={80} dx={1} dy={0} size={7} fill={O} />
      <Line x1={206} y1={80} x2={218} y2={80} stroke={O} strokeWidth={1.4} />
      {/* 3: products released, enzyme unchanged */}
      <Enzyme x={238} y={60} />
      <Rect x={244} y={20} width={14} height={24} rx={3} fill="#f2c94c" stroke={O} strokeWidth={1.2} />
      <Rect x={284} y={20} width={14} height={24} rx={3} fill="#f2c94c" stroke={O} strokeWidth={1.2} />
      <Txt x={273} y={124} size={9}>
        products + enzyme
      </Txt>
      <Txt x={273} y={135} size={9}>
        (unchanged)
      </Txt>
    </G>
  );
}

// ---------- Visking tubing model of the gut ----------
function ViskingArt() {
  return (
    <G>
      <Path d="M30 40 L30 190 Q30 200 40 200 L160 200 Q170 200 170 190 L170 40" fill="#e3f1fb" stroke={O} strokeWidth={1.5} />
      <Rect x={30} y={70} width={140} height={130} fill="#cfe6f7" opacity={0.6} />
      <Path d="M75 30 L75 170 Q100 196 125 170 L125 30" fill="#fbe9b8" stroke={O} strokeWidth={1.4} />
      <Line x1={70} y1={30} x2={130} y2={30} stroke={O} strokeWidth={2} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Circle key={i} cx={88 + (i % 3) * 12} cy={110 + Math.floor(i / 3) * 20} r={2.5} fill={GREEN} />
      ))}
      {[0, 1].map((i) => (
        <Ellipse key={i} cx={95 + i * 14} cy={150} rx={7} ry={4} fill="#8a5a2b" />
      ))}
      {[0, 1, 2].map((i) => (
        <Circle key={i} cx={45 + i * 50} cy={185 - (i % 2) * 40} r={2.5} fill={GREEN} />
      ))}
    </G>
  );
}

export const BIOLOGY_5 = {
  'limiting-factors': {
    title: 'Light intensity and the rate of photosynthesis, at two carbon dioxide levels',
    w: 330,
    h: 196,
    art: LimitingArt,
    labels: [],
    facts: [
      'At low light the rate rises as light increases: light is the limiting factor.',
      'Then the line levels off: more light makes no difference because another factor, carbon dioxide or temperature, is now in short supply.',
      'With more carbon dioxide the line levels off higher, which shows carbon dioxide was limiting the lower curve.',
    ],
  },
  'enzyme-graphs': {
    title: 'How temperature and pH affect the rate of an enzyme reaction',
    w: 410,
    h: 186,
    art: EnzymeArt,
    labels: [],
    facts: [
      'Temperature: the rate rises as molecules move faster and meet more often, up to the optimum, about 37 degrees Celsius for human enzymes.',
      'Above the optimum the rate falls fast: the active site changes shape and the enzyme is denatured, which cannot be undone.',
      'pH: each enzyme has its own optimum pH: pepsin in the stomach about 2, salivary amylase about 7, trypsin in the small intestine about 8.',
    ],
  },
  'lock-and-key': {
    title: 'The lock-and-key model of enzyme action',
    w: 320,
    h: 142,
    art: LockKeyArt,
    labels: [],
    facts: [
      'The substrate has a shape that fits the active site of the enzyme, like a key in a lock.',
      'They join to form the enzyme-substrate complex, where the reaction takes place.',
      'The products leave the active site and the enzyme is unchanged, ready to act again.',
    ],
  },
  'visking-model': {
    title: 'A model gut: Visking tubing containing starch and glucose, in water',
    w: 200,
    h: 206,
    art: ViskingArt,
    labels: [
      ['Visking tubing\n(partially permeable)', 214, 60, 125, 60],
      ['Starch and glucose\nsolution', 214, 118, 112, 120],
      ['Large starch\nmolecules stay inside', 214, 162, 110, 150],
      ['Glucose molecules\npass into the water', -10, 150, 45, 185],
      ['Water', -10, 80, 40, 90],
    ],
  },
  'photosynthesis-stages': flowSpec('The two stages of photosynthesis', ['Light stage: chlorophyll\ntraps light energy', 'Water is split into\nhydrogen and oxygen', 'Oxygen leaves\nthe leaf', 'Dark stage: hydrogen\n+ carbon dioxide', 'Glucose is made,\nthen stored as starch'], { boxW: 112 }),
  'starch-test-leaf': flowSpec('Testing a variegated leaf for starch', ['Destarch: keep the\nplant in the dark 48 h', 'Put it in the light\nfor a few hours', 'Boil the leaf in water\n1 min (kills cells)', 'Boil in ethanol in a\nwater bath (no flame)', 'Rinse in warm water\nto soften the leaf', 'Add iodine: blue-black\nonly where it was green'], { boxW: 112 }),
  'dental-formulas': columnsSpec('Dental formulas: teeth in one side of the upper jaw over the lower jaw', [
    { head: 'Human adult\n32 teeth', items: ['Incisors 2/2', 'Canines 1/1', 'Premolars 2/2', 'Molars 3/3'] },
    { head: 'Dog (carnivore)\n42 teeth', items: ['Incisors 3/3', 'Canines 1/1', 'Premolars 4/4', 'Molars 2/3'] },
    { head: 'Cow (herbivore)\n32 teeth', items: ['Incisors 0/3', 'Canines 0/1', 'Premolars 3/3', 'Molars 3/3'] },
  ], { colW: 118 }),
  'housefly-cycle': cycleSpec('The life cycle of the housefly (complete metamorphosis)', ['Eggs laid in\nrubbish or dung', 'Larva (maggot)\nfeeds and grows', 'Pupa in a\nbrown case', 'Adult fly\nmates, lays eggs']),
  'vector-control': columnsSpec('Ways of controlling insect vectors and pests', [
    { head: 'Chemical', items: ['Insecticide sprays', 'Treated bed nets', 'Larvicides in water', 'But: resistance, pollution'] },
    { head: 'Biological', items: ['Fish that eat larvae', 'Bacteria that kill larvae', 'Predators: birds, frogs', 'No pollution'] },
    { head: 'Clean surroundings', items: ['Drain still water', 'Cover water pots', 'Collect refuse', 'Cover latrines', 'Clear tall grass'] },
  ], { colW: 124 }),
  'conservation-methods': columnsSpec('Conserving plants and animals in Cameroon', [
    { head: 'In their habitat\n(in situ)', items: ['National parks: Korup, Waza', 'Lobéké, Campo Ma’an, Benoué', 'Dja Faunal Reserve', 'Community forests'] },
    { head: 'Away from habitat\n(ex situ)', items: ['Limbe Wildlife Centre', 'Limbe Botanic Garden', 'Zoos and tree nurseries', 'Seed banks'] },
    { head: 'Laws and people', items: ['Wildlife law of 1994', 'Hunting seasons, quotas', 'Fishing rules', 'CITES trade controls', 'Ecotourism, education'] },
  ], { colW: 132 }),
};
