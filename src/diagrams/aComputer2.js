// A Level Computer Science figures (0795), Lower Sixth Terms 2 and 3: a stack
// in an array, a circular queue, inserting into a linked list, a binary search
// tree, a weighted graph with its adjacency matrix, merge sort, the growth of
// Big-O classes, paradigms, the stages of compilation, UML class diagrams,
// polymorphism, inheritance, development models, a data flow diagram, a
// use-case diagram, the project and the GCE papers. The Big-O curves are drawn
// to scale.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';
import { Arrow, CS, Cell, Tag } from './aComputer';

const { O, MUTED, BLUE, RED, GREEN, SKY, LEAF, SAND, LILAC, ROSE, MINT } = CS;
const PURPLE = '#7b4fa0';
const AMBER = '#c77700';

// ---------- a stack in an array ----------
function StackArt() {
  const y = (i) => 10 + (5 - i) * 24;
  const data = { 1: '5', 2: '3', 3: '6' };
  return (
    <G>
      {[5, 4, 3, 2, 1].map((i) => (
        <G key={i}>
          <Txt x={56} y={y(i) + 14} size={8.5} anchor="end" fill={MUTED}>
            {`Stack[${i}]`}
          </Txt>
          <Cell x={62} y={y(i)} w={60} h={22} text={data[i] || ''} fill={data[i] ? SKY : '#ffffff'} size={10} bold />
        </G>
      ))}
      <Arrow x1={160} y1={y(3) + 11} x2={124} y2={y(3) + 11} c={RED} width={1.5} />
      <Txt x={164} y={y(3) + 14} size={9} anchor="start" weight="700" fill={RED}>
        Top = 3
      </Txt>
      <Txt x={222} y={22} size={8.5} anchor="start" weight="700">
        push 7:
      </Txt>
      <Txt x={222} y={36} size={8.5} anchor="start">
        Top ← 4; Stack[4] ← 7
      </Txt>
      <Txt x={222} y={58} size={8.5} anchor="start" weight="700">
        pop:
      </Txt>
      <Txt x={222} y={72} size={8.5} anchor="start">
        item ← Stack[3]; Top ← 2
      </Txt>
      <Txt x={222} y={98} size={8.5} anchor="start" fill={MUTED}>
        Top = 0: empty (underflow)
      </Txt>
      <Txt x={222} y={112} size={8.5} anchor="start" fill={MUTED}>
        Top = 5: full (overflow)
      </Txt>
    </G>
  );
}

// ---------- a circular queue ----------
const RING = ['F', '', 'C', 'D', 'E'];
function CircularArt() {
  const cx = 100;
  const cy = 104;
  const r = 64;
  const at = (k) => {
    const t = ((-90 + 72 * k) * Math.PI) / 180;
    return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
  };
  return (
    <G>
      <Circle cx={cx} cy={cy} r={r} fill="none" stroke={MUTED} strokeWidth={0.8} strokeDasharray="3 3" />
      {RING.map((c, k) => {
        const [x, y] = at(k);
        return <Cell key={k} x={x - 23} y={y - 15} w={46} h={30} text={`${c || ' '}\n[${k}]`} fill={k === 2 ? LEAF : k === 0 ? SAND : c ? SKY : '#ffffff'} size={9} rx={4} />;
      })}
      <Txt x={cx} y={cy - 2} size={8} fill={MUTED}>
        MOD 5 wraps
      </Txt>
      <Txt x={cx} y={cy + 10} size={8} fill={MUTED}>
        4 → 0
      </Txt>
      <Txt x={30} y={22} size={9} weight="700" fill={AMBER}>
        Rear
      </Txt>
      <Arrow x1={44} y1={26} x2={76} y2={36} c={AMBER} />
      <Txt x={176} y={196} size={9} weight="700" fill={GREEN}>
        Front
      </Txt>
      <Arrow x1={168} y1={186} x2={150} y2={172} c={GREEN} />
      {['Cells 0 to 4', 'Front = 2, Rear = 0, Count = 4', 'Enqueue: Rear ← (Rear + 1) MOD 5', 'Dequeue: Front ← (Front + 1) MOD 5', 'Count = 0: empty; Count = 5: full'].map((t, i) => (
        <Txt key={t} x={214} y={70 + i * 16} size={8.5} anchor="start" weight={i === 1 ? '700' : '500'}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- inserting into a linked list ----------
function Node({ x, y, text, ptr = '', fill = SKY }) {
  return (
    <G>
      <Cell x={x} y={y} w={64} h={26} text={text} fill={fill} size={9} bold />
      <Cell x={x + 64} y={y} w={22} h={26} text={ptr} fill="#ffffff" size={7} />
      {!ptr && <Circle cx={x + 75} cy={y + 13} r={2.4} fill={O} />}
    </G>
  );
}
function Num({ x, y, n }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={7} fill="#ffffff" stroke={BLUE} strokeWidth={1} />
      <Txt x={x} y={y + 3} size={8} weight="700" fill={BLUE}>
        {n}
      </Txt>
    </G>
  );
}
function ListInsertArt() {
  return (
    <G>
      <Txt x={8} y={45} size={8.5} anchor="start" weight="700">
        Start
      </Txt>
      <Arrow x1={32} y1={41} x2={49} y2={41} />
      <Node x={50} y={28} text="Bamenda" />
      <Arrow x1={125} y1={41} x2={159} y2={41} />
      <Node x={160} y={28} text="Douala" />
      <Line x1={235} y1={41} x2={296} y2={41} stroke={MUTED} strokeWidth={1.1} strokeDasharray="3 3" />
      <Tag x={268} y={24} text="old link" />
      <Node x={300} y={28} text="Limbe" ptr="null" />
      <Node x={220} y={104} text="Garoua" fill={LEAF} />
      <Arrow x1={235} y1={54} x2={250} y2={103} c={BLUE} width={1.5} />
      <Num x={232} y={80} n="2" />
      <Arrow x1={295} y1={110} x2={328} y2={55} c={BLUE} width={1.5} />
      <Num x={322} y={86} n="1" />
      <Txt x={8} y={150} size={8.5} anchor="start">
        1  Garoua.Next ← Douala.Next, so Garoua points to Limbe
      </Txt>
      <Txt x={8} y={164} size={8.5} anchor="start">
        2  Douala.Next ← Garoua
      </Txt>
    </G>
  );
}

// ---------- a binary search tree ----------
const TREE = [
  [50, 170, 24],
  [30, 95, 74],
  [70, 245, 74],
  [20, 55, 124],
  [40, 135, 124],
  [60, 205, 124],
  [80, 285, 124],
];
const EDGES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [2, 6],
];
function BstArt() {
  const hot = (a, b) => (a === 0 && b === 2) || (a === 2 && b === 5);
  return (
    <G>
      {EDGES.map(([a, b]) => (
        <Line key={`${a}${b}`} x1={TREE[a][1]} y1={TREE[a][2]} x2={TREE[b][1]} y2={TREE[b][2]} stroke={hot(a, b) ? RED : MUTED} strokeWidth={hot(a, b) ? 2 : 1.2} />
      ))}
      {TREE.map(([v, x, y]) => (
        <G key={v}>
          <Circle cx={x} cy={y} r={15} fill={v === 60 ? ROSE : v === 50 ? SAND : SKY} stroke={O} strokeWidth={1.1} />
          <Txt x={x} y={y + 3.5} size={10} weight="700">
            {`${v}`}
          </Txt>
        </G>
      ))}
      <Txt x={334} y={18} size={8} anchor="end" weight="700" fill={RED}>
        Search for 60: 50, 70, 60
      </Txt>
      {['Pre-order (node, left, right):  50 30 20 40 70 60 80', 'In-order (left, node, right):  20 30 40 50 60 70 80', 'Post-order (left, right, node):  20 40 30 60 80 70 50'].map((t, i) => (
        <Txt key={t} x={10} y={164 + i * 14} size={8.5} anchor="start" weight={i === 1 ? '700' : '500'} fill={i === 1 ? BLUE : undefined}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- a weighted graph and its adjacency matrix ----------
export const V = { A: [36, 96], B: [116, 32], C: [116, 160], D: [200, 86], E: [236, 160] };
export const GE = [
  ['A', 'B', 4],
  ['A', 'C', 2],
  ['B', 'D', 5],
  ['C', 'D', 8],
  ['C', 'E', 10],
  ['D', 'E', 2],
];
export const NAMES = ['A', 'B', 'C', 'D', 'E'];
function weight(a, b) {
  const e = GE.find(([p, q]) => (p === a && q === b) || (p === b && q === a));
  return e ? e[2] : 0;
}
function GraphArt() {
  const x0 = 268;
  const c = 20;
  return (
    <G>
      {GE.map(([a, b, w]) => (
        <G key={a + b}>
          <Line x1={V[a][0]} y1={V[a][1]} x2={V[b][0]} y2={V[b][1]} stroke={MUTED} strokeWidth={1.3} />
          <Tag x={(V[a][0] + V[b][0]) / 2} y={(V[a][1] + V[b][1]) / 2 + 3} text={`${w}`} size={8.5} color={BLUE} w={16} />
        </G>
      ))}
      {NAMES.map((n) => (
        <G key={n}>
          <Circle cx={V[n][0]} cy={V[n][1]} r={13} fill={n === 'A' ? SAND : SKY} stroke={O} strokeWidth={1.1} />
          <Txt x={V[n][0]} y={V[n][1] + 3.5} size={10} weight="700">
            {n}
          </Txt>
        </G>
      ))}
      <Txt x={x0 + 3 * c} y={14} size={9} weight="700">
        Adjacency matrix
      </Txt>
      {NAMES.map((n, i) => (
        <G key={n}>
          <Cell x={x0 + (i + 1) * c} y={22} w={c} h={c} text={n} fill={SAND} size={8.5} bold />
          <Cell x={x0} y={22 + (i + 1) * c} w={c} h={c} text={n} fill={SAND} size={8.5} bold />
          {NAMES.map((m, j) => {
            const w = weight(n, m);
            return <Cell key={m} x={x0 + (j + 1) * c} y={22 + (i + 1) * c} w={c} h={c} text={`${w}`} size={8} bold={w > 0} fill={w > 0 ? SKY : '#ffffff'} color={w > 0 ? undefined : MUTED} />;
          })}
        </G>
      ))}
      <Txt x={198} y={194} size={8.5} weight="700" fill={BLUE}>
        Breadth-first from A: A B C D E.   Depth-first from A: A B D C E
      </Txt>
    </G>
  );
}

// ---------- merge sort ----------
const MERGE_ROWS = [
  [[38, 27, 43, 3, 9, 82, 10, 15]],
  [[38, 27, 43, 3], [9, 82, 10, 15]],
  [[38, 27], [43, 3], [9, 82], [10, 15]],
  [[38], [27], [43], [3], [9], [82], [10], [15]],
  [[27, 38], [3, 43], [9, 82], [10, 15]],
  [[3, 27, 38, 43], [9, 10, 15, 82]],
  [[3, 9, 10, 15, 27, 38, 43, 82]],
];
function MergeArt() {
  const cw = 22;
  const gap = 12;
  return (
    <G>
      {MERGE_ROWS.map((lists, r) => {
        const total = lists.reduce((s, l) => s + l.length * cw, 0) + (lists.length - 1) * gap;
        let x = 60 + (300 - total) / 2;
        const y = 8 + r * 28;
        return (
          <G key={r}>
            {lists.map((l, k) => {
              const x1 = x;
              x += l.length * cw + gap;
              return (
                <G key={k}>
                  {l.map((v, i) => (
                    <Cell key={i} x={x1 + i * cw} y={y} w={cw} h={18} text={`${v}`} size={8} fill={r < 4 ? SKY : r === 6 ? SAND : LEAF} bold={r === 6} />
                  ))}
                </G>
              );
            })}
          </G>
        );
      })}
      <Line x1={56} y1={115} x2={364} y2={115} stroke={MUTED} strokeWidth={0.8} strokeDasharray="4 3" />
      <Txt x={6} y={62} size={9} anchor="start" weight="700" fill={BLUE}>
        Split
      </Txt>
      <Txt x={6} y={162} size={9} anchor="start" weight="700" fill={GREEN}>
        Merge
      </Txt>
    </G>
  );
}

// ---------- Big-O growth, to scale ----------
const X = (n) => 40 + n * 14;
const Y = (v) => 175 - v * 2.5;
const plot = (f, a, b) =>
  Array.from({ length: 121 }, (_, i) => a + ((b - a) * i) / 120)
    .map((n, i) => `${i ? 'L' : 'M'}${X(n).toFixed(1)} ${Y(f(n)).toFixed(1)}`)
    .join(' ');
const lg = (n) => Math.log2(n);
const CURVES = [
  ['O(1)', MUTED, () => 10, 0, 20],
  ['O(log n)', GREEN, lg, 1, 20],
  ['O(n)', BLUE, (n) => n, 0, 20],
  ['O(n log n)', PURPLE, (n) => n * lg(n), 1, 15.27],
  ['O(n²)', AMBER, (n) => n * n, 0, Math.sqrt(60)],
  ['O(2ⁿ)', RED, (n) => 2 ** n, 0, lg(60)],
];
const CURVE_LABEL = {
  'O(1)': [324, Y(10) + 3, 'start'],
  'O(log n)': [324, Y(lg(20)) + 3, 'start'],
  'O(n)': [324, Y(20) + 3, 'start'],
  'O(n log n)': [X(15.27) + 4, 32, 'start'],
  'O(n²)': [X(Math.sqrt(60)) + 4, 32, 'start'],
  'O(2ⁿ)': [X(lg(60)) - 4, 32, 'end'],
};
function BigOArt() {
  return (
    <G>
      <Line x1={40} y1={175} x2={334} y2={175} stroke={O} strokeWidth={1.1} />
      <Line x1={40} y1={175} x2={40} y2={18} stroke={O} strokeWidth={1.1} />
      {[5, 10, 15, 20].map((n) => (
        <G key={n}>
          <Line x1={X(n)} y1={175} x2={X(n)} y2={179} stroke={O} strokeWidth={1} />
          <Txt x={X(n)} y={189} size={8}>
            {`${n}`}
          </Txt>
        </G>
      ))}
      {[20, 40, 60].map((v) => (
        <G key={v}>
          <Line x1={36} y1={Y(v)} x2={40} y2={Y(v)} stroke={O} strokeWidth={1} />
          <Txt x={33} y={Y(v) + 3} size={8} anchor="end">
            {`${v}`}
          </Txt>
        </G>
      ))}
      {CURVES.map(([name, c, f, a, b]) => (
        <Path key={name} d={plot(f, a, b)} stroke={c} strokeWidth={1.8} fill="none" />
      ))}
      {CURVES.map(([name, c]) => {
        const [x, y, anchor] = CURVE_LABEL[name];
        return (
          <Txt key={name} x={x} y={y} size={8.5} anchor={anchor} weight="700" fill={c}>
            {name}
          </Txt>
        );
      })}
      <Txt x={186} y={203} size={8.5}>
        n, the size of the input
      </Txt>
      <Txt x={14} y={100} size={8.5} rotate={-90}>
        steps
      </Txt>
    </G>
  );
}

// ---------- UML class boxes ----------
export function ClassBox({ x, y, w, name, attrs = [], methods = [], fill = SKY, object }) {
  const hA = attrs.length * 14 + 6;
  const hM = methods.length * 14 + 6;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={20 + hA + (object ? 0 : hM)} fill="#ffffff" stroke={O} strokeWidth={1.1} />
      <Rect x={x} y={y} width={w} height={20} fill={fill} stroke={O} strokeWidth={1.1} />
      <Txt x={x + w / 2} y={y + 14} size={9} weight="700">
        {name}
      </Txt>
      {!!object && <Line x1={x + w / 2 - name.length * 2.5} y1={y + 16} x2={x + w / 2 + name.length * 2.5} y2={y + 16} stroke={O} strokeWidth={0.8} />}
      {attrs.map((a, i) => (
        <Txt key={a} x={x + 6} y={y + 32 + i * 14} size={8} anchor="start">
          {a}
        </Txt>
      ))}
      {!object && <Line x1={x} y1={y + 20 + hA} x2={x + w} y2={y + 20 + hA} stroke={O} strokeWidth={1.1} />}
      {!object &&
        methods.map((m, i) => (
          <Txt key={m} x={x + 6} y={y + 32 + hA + i * 14} size={8} anchor="start">
            {m}
          </Txt>
        ))}
    </G>
  );
}
// The hollow triangle of inheritance, its tip at (x, y), with lines to the subclasses.
export function Inherit({ x, y, kids, yKids }) {
  const bar = y + 22;
  return (
    <G>
      <Line x1={x} y1={y + 12} x2={x} y2={bar} stroke={O} strokeWidth={1.1} />
      <Line x1={Math.min(...kids)} y1={bar} x2={Math.max(...kids)} y2={bar} stroke={O} strokeWidth={1.1} />
      {kids.map((k) => (
        <Line key={k} x1={k} y1={bar} x2={k} y2={yKids} stroke={O} strokeWidth={1.1} />
      ))}
      <Path d={`M${x} ${y} L${x - 7} ${y + 12} L${x + 7} ${y + 12} Z`} fill="#ffffff" stroke={O} strokeWidth={1.1} />
    </G>
  );
}

function ClassArt() {
  return (
    <G>
      <Txt x={90} y={16} size={8.5} weight="700" fill={MUTED}>
        Class
      </Txt>
      <ClassBox x={10} y={24} w={160} name="Student" attrs={['− name: String', '− form: String', '− marks: List']} methods={['+ add_mark(mark)', '+ average(): Real']} />
      <Txt x={304} y={14} size={8.5} weight="700" fill={MUTED}>
        Objects
      </Txt>
      <ClassBox x={236} y={22} w={136} name="s1 : Student" object fill={LEAF} attrs={['name = "Ngwa"', 'form = "Lower Sixth"', 'marks = [14, 12]']} />
      <ClassBox x={236} y={104} w={136} name="s2 : Student" object fill={LEAF} attrs={['name = "Bih"', 'form = "Lower Sixth"', 'marks = [10]']} />
      <Arrow x1={235} y1={56} x2={171} y2={66} dash />
      <Arrow x1={235} y1={138} x2={171} y2={104} dash />
      <Tag x={203} y={50} text="instance of" />
      <Tag x={203} y={136} text="instance of" />
    </G>
  );
}

function PolyArt() {
  return (
    <G>
      <ClassBox x={130} y={8} w={120} name="Shape" methods={['+ area()']} fill={SAND} />
      <Inherit x={190} y={54} kids={[95, 285]} yKids={92} />
      <ClassBox x={20} y={92} w={150} name="Circle" attrs={['− radius']} methods={['+ area(): π × radius²']} />
      <ClassBox x={210} y={92} w={150} name="Rectangle" attrs={['− width, − height']} methods={['+ area(): width × height']} />
      <Txt x={190} y={172} size={8.5} weight="700">
        for s in shapes: print(s.area())
      </Txt>
      <Txt x={190} y={187} size={8.5} fill={BLUE} weight="700">
        Circle(2) gives 12.57; Rectangle(3, 4) gives 12
      </Txt>
    </G>
  );
}

function InheritArt() {
  return (
    <G>
      {['− private', '+ public', '# protected'].map((t, i) => (
        <Txt key={t} x={6} y={18 + i * 12} size={7.5} anchor="start" fill={MUTED}>
          {t}
        </Txt>
      ))}
      <ClassBox x={120} y={8} w={140} name="Person" attrs={['− name: String']} methods={['+ describe(): String']} fill={SAND} />
      <Inherit x={190} y={68} kids={[90, 290]} yKids={110} />
      <ClassBox x={10} y={110} w={160} name="Student" attrs={['− form: String']} methods={['+ describe(): String']} />
      <ClassBox x={210} y={110} w={160} name="Teacher" attrs={['− subject: String']} methods={['+ describe(): String']} />
      <Txt x={190} y={188} size={8.5} weight="700" fill={BLUE}>
        Both inherit name and override describe()
      </Txt>
    </G>
  );
}

// ---------- waterfall and agile ----------
const FALLS = ['Analysis', 'Design', 'Implementation', 'Testing', 'Maintenance'];
const SPRINT = [
  ['Plan', -90],
  ['Build', 0],
  ['Test', 90],
  ['Review', 180],
];
function ModelsArt() {
  const cx = 310;
  const cy = 104;
  const r = 64;
  const p = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)];
  return (
    <G>
      <Txt x={100} y={14} size={9.5} weight="700">
        Waterfall
      </Txt>
      {FALLS.map((t, i) => {
        const x = 6 + i * 24;
        const y = 24 + i * 30;
        return (
          <G key={t}>
            <Cell x={x} y={y} w={90} h={22} text={t} fill={[SKY, LEAF, SAND, LILAC, MINT][i]} size={8.5} rx={4} />
            {i < 4 && (
              <G>
                <Path d={`M${x + 90} ${y + 11} L${x + 100} ${y + 11} L${x + 100} ${y + 24}`} stroke={MUTED} strokeWidth={1.2} fill="none" />
                <Head x={x + 100} y={y + 29} dx={0} dy={1} size={6} fill={MUTED} />
              </G>
            )}
          </G>
        );
      })}
      <Txt x={100} y={198} size={8} fill={MUTED}>
        Each stage signed off first
      </Txt>
      <Txt x={cx} y={14} size={9.5} weight="700">
        Agile sprints
      </Txt>
      {SPRINT.map(([t, a]) => {
        const a1 = a + 30;
        const a2 = a + 60;
        const [x1, y1] = p(a1);
        const [x2, y2] = p(a2);
        const t2 = (a2 * Math.PI) / 180;
        return (
          <G key={t}>
            <Path d={`M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`} stroke={MUTED} strokeWidth={1.3} fill="none" />
            <Head x={x2} y={y2} dx={-Math.sin(t2)} dy={Math.cos(t2)} size={6} fill={MUTED} />
          </G>
        );
      })}
      {SPRINT.map(([t, a], i) => {
        const [x, y] = p(a);
        return <Cell key={t} x={x - 31} y={y - 11} w={62} h={22} text={t} fill={[SKY, LEAF, SAND, LILAC][i]} size={8.5} bold rx={4} />;
      })}
      <Txt x={cx} y={cy} size={8.5} weight="700">
        One sprint:
      </Txt>
      <Txt x={cx} y={cy + 12} size={8} fill={MUTED}>
        1 to 4 weeks
      </Txt>
      <Txt x={cx} y={198} size={8} fill={MUTED}>
        Feedback after every sprint
      </Txt>
    </G>
  );
}

// ---------- a level 1 data flow diagram ----------
function Entity({ x, y, text }) {
  return <Cell x={x} y={y} w={74} h={30} text={text} fill={SAND} size={9} bold />;
}
function Store({ x, y, id, name }) {
  const w = 104;
  const h = 22;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} fill={MINT} />
      <Line x1={x} y1={y} x2={x + w} y2={y} stroke={O} strokeWidth={1.1} />
      <Line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={O} strokeWidth={1.1} />
      <Line x1={x} y1={y} x2={x} y2={y + h} stroke={O} strokeWidth={1.1} />
      <Line x1={x + 24} y1={y} x2={x + 24} y2={y + h} stroke={O} strokeWidth={1.1} />
      <Txt x={x + 12} y={y + 14} size={8.5} weight="700">
        {id}
      </Txt>
      <Txt x={x + 24 + (w - 24) / 2} y={y + 14} size={8.5}>
        {name}
      </Txt>
    </G>
  );
}
function DfdArt() {
  return (
    <G>
      <Entity x={6} y={54} text="Student" />
      <Entity x={6} y={156} text="Librarian" />
      <Cell x={130} y={10} w={112} h={36} text={'1\nRegister borrower'} fill={SKY} size={8.5} rx={9} />
      <Cell x={130} y={88} w={112} h={36} text={'2\nIssue book'} fill={SKY} size={8.5} rx={9} />
      <Cell x={130} y={166} w={112} h={36} text={'3\nReturn book'} fill={SKY} size={8.5} rx={9} />
      <Store x={292} y={17} id="D1" name="Borrowers" />
      <Store x={292} y={95} id="D3" name="Loans" />
      <Store x={292} y={173} id="D2" name="Books" />
      <Arrow x1={80} y1={62} x2={129} y2={32} />
      <Tag x={104} y={50} text="details" />
      <Arrow x1={242} y1={28} x2={291} y2={28} />
      <Tag x={266} y={24} text="record" />
      <Arrow x1={80} y1={76} x2={129} y2={100} />
      <Tag x={104} y={92} text="request" />
      <Arrow x1={318} y1={40} x2={243} y2={91} />
      <Tag x={282} y={68} text="member?" />
      <Arrow x1={242} y1={112} x2={291} y2={107} />
      <Tag x={266} y={106} text="loan" />
      <Arrow x1={80} y1={171} x2={129} y2={183} />
      <Tag x={104} y={174} text="book back" />
      <Arrow x1={242} y1={176} x2={322} y2={118} />
      <Tag x={286} y={150} text="loan closed" />
      <Arrow x1={242} y1={192} x2={291} y2={186} />
      <Tag x={266} y={198} text="on shelf" />
    </G>
  );
}

// ---------- a use-case diagram ----------
function Actor({ x, y, name }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={6} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Line x1={x} y1={y + 6} x2={x} y2={y + 24} stroke={O} strokeWidth={1.2} />
      <Line x1={x - 10} y1={y + 13} x2={x + 10} y2={y + 13} stroke={O} strokeWidth={1.2} />
      <Line x1={x} y1={y + 24} x2={x - 8} y2={y + 36} stroke={O} strokeWidth={1.2} />
      <Line x1={x} y1={y + 24} x2={x + 8} y2={y + 36} stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={y + 48} size={8.5} weight="700">
        {name}
      </Txt>
    </G>
  );
}
function UseCase({ cx, cy, text, fill = SKY }) {
  return (
    <G>
      <Ellipse cx={cx} cy={cy} rx={46} ry={16} fill={fill} stroke={O} strokeWidth={1.1} />
      <Txt x={cx} y={cy + 3} size={8}>
        {text}
      </Txt>
    </G>
  );
}
function UseCaseArt() {
  return (
    <G>
      <Rect x={100} y={6} width={250} height={194} rx={6} fill="#f6f8fa" stroke={O} strokeWidth={1.1} />
      <Txt x={225} y={20} size={9} weight="700">
        Library system
      </Txt>
      <Line x1={56} y1={68} x2={119} y2={48} stroke={O} strokeWidth={1} />
      <Line x1={56} y1={72} x2={119} y2={103} stroke={O} strokeWidth={1} />
      <Line x1={56} y1={76} x2={121} y2={156} stroke={O} strokeWidth={1} />
      <Line x1={56} y1={160} x2={119} y2={160} stroke={O} strokeWidth={1} />
      <Actor x={44} y={52} name="Student" />
      <Actor x={44} y={144} name="Librarian" />
      <UseCase cx={165} cy={46} text="Borrow book" />
      <UseCase cx={165} cy={103} text="Search catalogue" />
      <UseCase cx={165} cy={160} text="Return book" />
      <UseCase cx={295} cy={46} text="Check membership" fill={LEAF} />
      <UseCase cx={295} cy={160} text="Pay fine" fill={SAND} />
      <Arrow x1={211} y1={46} x2={248} y2={46} c={BLUE} dash />
      <Tag x={230} y={36} text="«include»" color={BLUE} />
      <Arrow x1={249} y1={160} x2={212} y2={160} c={GREEN} dash />
      <Tag x={230} y={150} text="«extend»" color={GREEN} />
    </G>
  );
}

export const A_COMPUTER_2 = {
  'acs-stack-array': {
    title: 'A stack stored in an array',
    w: 350,
    h: 140,
    art: StackArt,
    labels: [],
    facts: [
      'The stack is the array Stack[1..5]; Top holds the position of the top item, and 0 means the stack is empty.',
      'Here 5, 3 and 6 were pushed, so Top = 3.',
      'To push 7: Top becomes 4 and Stack[4] ← 7. To pop: the item is read from Stack[3] and Top becomes 2.',
      'Pushing when Top = 5 is overflow; popping when Top = 0 is underflow.',
    ],
  },
  'acs-circular-queue': {
    title: 'A circular queue of five cells',
    w: 380,
    h: 206,
    art: CircularArt,
    labels: [],
    facts: [
      'The cells 0 to 4 are used in a ring: after cell 4 comes cell 0 again.',
      'After A, B, C and D were added and A and B removed, E went into cell 4 and F wrapped round into cell 0.',
      'So Front = 2 (C leaves next), Rear = 0 (F joined last) and Count = 4.',
      'The pointers move with Rear ← (Rear + 1) MOD 5 and Front ← (Front + 1) MOD 5; the count tells a full queue from an empty one.',
    ],
  },
  'acs-list-insert': {
    title: 'Inserting Garoua into a linked list',
    w: 392,
    h: 172,
    art: ListInsertArt,
    labels: [],
    facts: [
      'The list holds Bamenda, Douala and Limbe in alphabetical order; Limbe’s pointer is null.',
      'Step 1: the new node Garoua is given Douala’s old pointer, so it points to Limbe.',
      'Step 2: Douala’s pointer is changed to point to Garoua.',
      'Doing step 2 first would lose the address of Limbe and the rest of the list.',
    ],
  },
  'acs-bst': {
    title: 'A binary search tree and its traversals',
    w: 340,
    h: 198,
    art: BstArt,
    labels: [],
    facts: [
      '50, 30, 70, 20, 40, 60 and 80 were inserted in that order: smaller values go left, larger go right.',
      'A search for 60 compares with 50 (go right), then 70 (go left), then finds 60.',
      'Pre-order: 50 30 20 40 70 60 80. In-order: 20 30 40 50 60 70 80, the values in ascending order. Post-order: 20 40 30 60 80 70 50.',
    ],
  },
  'acs-graph': {
    title: 'A weighted graph and its adjacency matrix',
    w: 396,
    h: 200,
    art: GraphArt,
    labels: [],
    facts: [
      'The edges are A–B 4, A–C 2, B–D 5, C–D 8, C–E 10 and D–E 2.',
      'The matrix has a row and a column for each vertex; each cell holds the weight of the edge between them, or 0 if there is none. It is symmetric because the graph is undirected.',
      'Breadth-first search from A, taking neighbours alphabetically, visits A B C D E; depth-first search visits A B D C E.',
    ],
  },
  'acs-merge-sort': {
    title: 'Merge sort: split, then merge',
    w: 368,
    h: 206,
    art: MergeArt,
    labels: [],
    facts: [
      'The list 38, 27, 43, 3, 9, 82, 10, 15 is split in half again and again until each part has one item.',
      'The parts are then merged in pairs, always taking the smaller front item: 27 38, 3 43, 9 82, 10 15.',
      'Then 3 27 38 43 and 9 10 15 82, and finally 3 9 10 15 27 38 43 82.',
      'There are log₂ 8 = 3 levels of merging, each handling all 8 items: O(n log n).',
    ],
  },
  'acs-bigo': {
    title: 'How the common complexity classes grow',
    w: 370,
    h: 210,
    art: BigOArt,
    labels: [],
    facts: [
      'The graph shows the number of steps against n for each class, drawn to scale.',
      'O(1) stays level, here at 10 steps; O(log n) grows very slowly; O(n) grows in a straight line.',
      'O(n log n) grows a little faster than O(n); O(n²) and O(2ⁿ) shoot up: 2ⁿ passes 60 steps before n reaches 6.',
      'For small n a constant-time step can be slower than a linear one: here O(n) passes 10 steps only at n = 10.',
    ],
  },
  'acs-paradigms': columnsSpec('Programming paradigms', [
    { head: 'Procedural', items: ['Steps in procedures', 'Variables change', 'C, Pascal, BASIC'] },
    { head: 'Object-\noriented', items: ['Classes and objects', 'Data with methods', 'Java, C++, Python'] },
    { head: 'Declarative', items: ['Say what, not how', 'SQL queries', 'Prolog facts, rules'] },
    { head: 'Functional', items: ['Pure functions', 'Values never change', 'Haskell'] },
  ], { colW: 96 }),
  'acs-compiler-stages': flowSpec('The stages of compilation', ['Source code', 'Lexical analysis:\ntokens, symbols', 'Syntax analysis:\ngrammar, parse tree', 'Code generation:\nobject code', 'Optimisation:\nfaster, smaller', 'Linker and loader:\nrunning program'], { boxW: 118 }),
  'acs-class': {
    title: 'A class and two objects',
    w: 380,
    h: 180,
    art: ClassArt,
    labels: [],
    facts: [
      'The class Student is drawn in three parts: its name, its attributes and its methods. − marks private and + public.',
      's1 and s2 are objects, instances of Student, each with its own name, form and list of marks.',
      'Both objects use the same methods, add_mark and average, defined once in the class.',
    ],
  },
  'acs-polymorphism': {
    title: 'Polymorphism: one call, different methods',
    w: 380,
    h: 194,
    art: PolyArt,
    labels: [],
    facts: [
      'Circle and Rectangle both inherit from Shape, and each defines its own area() method.',
      'A loop calls s.area() for every shape without knowing its class.',
      'Circle(2) answers π × 2² ≈ 12.57 and Rectangle(3, 4) answers 3 × 4 = 12.',
    ],
  },
  'acs-inheritance': {
    title: 'Inheritance in a UML class diagram',
    w: 380,
    h: 196,
    art: InheritArt,
    labels: [],
    facts: [
      'Person is the superclass, with a private name and a public describe() method.',
      'Student and Teacher are subclasses; the hollow triangle points to Person.',
      'Each subclass inherits name, adds its own attribute (form or subject) and overrides describe().',
    ],
  },
  'acs-models': {
    title: 'The waterfall model and agile sprints',
    w: 410,
    h: 204,
    art: ModelsArt,
    labels: [],
    facts: [
      'In the waterfall model each stage, analysis, design, implementation, testing and maintenance, is finished and signed off before the next begins.',
      'In agile development the team plans, builds, tests and reviews with the users in short sprints of one to four weeks, then starts the next sprint.',
      'The users give feedback after every sprint, so changing requirements can be met.',
    ],
  },
  'acs-dfd': {
    title: 'A level 1 data flow diagram for a school library',
    w: 400,
    h: 206,
    art: DfdArt,
    labels: [],
    facts: [
      'The external entities are the Student and the Librarian, drawn as rectangles.',
      'The processes are 1 Register borrower, 2 Issue book and 3 Return book, drawn as rounded boxes.',
      'The data stores are D1 Borrowers, D2 Books and D3 Loans, drawn as open-ended boxes.',
      'Every flow is labelled, and each passes through a process: no data goes straight from an entity to a store.',
    ],
  },
  'acs-use-case': {
    title: 'A use-case diagram for a school library',
    w: 356,
    h: 206,
    art: UseCaseArt,
    labels: [],
    facts: [
      'The actors, Student and Librarian, stand outside the system boundary.',
      'The use cases inside are Borrow book, Search catalogue, Return book, Check membership and Pay fine.',
      'Borrow book always includes Check membership; Pay fine extends Return book, only when the book is late.',
    ],
  },
  'acs-project': flowSpec('Starting the A Level project', ['Find a real\nproblem and user', 'Fact-finding:\ninterview, observe', 'Requirements:\nwhat, and how well', 'Success criteria\nthat can be tested', 'Specification:\nscope, timeline', 'Project log\nfrom day one'], { boxW: 118 }),
  'acs-gce': columnsSpec('GCE A Level Computer Science (0795), 2026', [
    { head: 'Paper 1', items: ['Multiple choice', '1½ hours', 'Tuesday 9 June'] },
    { head: 'Paper 2', items: ['Problem solving', '2½ hours', 'Tuesday 9 June'] },
    { head: 'Practical', items: ['Practical test', 'Friday 15 May', 'Before the papers'] },
  ], { colW: 112 }),
};
