// A Level ICT figures (0796), Upper Sixth: an ERD turned into tables,
// integrity constraints, anomalies in a flat file, a PERT network, RAD and
// MoSCoW, asynchronous and synchronous framing, time division multiplexing,
// route print and netstat output, CSV, JSON and XML, data types, scope, loops,
// a three-tier web system, a contact form, a CMS, responsive layouts, judging
// sources, a phishing message, backup types, the logbook and the GCE papers.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';
import { Arrow, CS, Cell } from './aComputer';
import { Table } from './aComputer3';

const { O, MUTED, BLUE, RED, GREEN, SKY, LEAF, SAND, LILAC, ROSE } = CS;

// A numbered marker that the facts below a figure refer to.
function Mark({ x, y, n, c = RED }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={7} fill={c} />
      <Txt x={x} y={y + 3} size={8} weight="700" fill="#ffffff">
        {`${n}`}
      </Txt>
    </G>
  );
}

// ---------- from the ERD to tables ----------
// A crow's foot: the toes touch the entity edge at x, and meet 9 px away.
function Toes({ x, y, dir }) {
  const t = x + dir * 9;
  return <Path d={`M${x} ${y - 6} L${t} ${y} M${x} ${y} L${t} ${y} M${x} ${y + 6} L${t} ${y}`} stroke={O} strokeWidth={1.2} fill="none" />;
}
function One({ x, y }) {
  return <Line x1={x} y1={y - 6} x2={x} y2={y + 6} stroke={O} strokeWidth={1.2} />;
}
function TableBox({ x, y, w, name, fields }) {
  return (
    <G>
      <Cell x={x} y={y} w={w} h={16} text={name} fill={SAND} size={7.5} bold />
      {fields.map(([f, k], i) => (
        <G key={f}>
          <Rect x={x} y={y + 16 + i * 15} width={w} height={15} fill="#ffffff" stroke={O} strokeWidth={0.8} />
          <Txt x={x + 4} y={y + 27 + i * 15} size={7} anchor="start" weight={k.includes('P') ? '700' : '500'} fill={k.includes('P') ? BLUE : k.includes('F') ? GREEN : undefined}>
            {f}
          </Txt>
        </G>
      ))}
    </G>
  );
}
const ERD = [
  ['SCHOOL', 10],
  ['CLASS', 120],
  ['STUDENT', 230],
  ['SUBJECT', 340],
];
const SCHEMA = [
  ['SCHOOL', [['SchoolID (PK)', 'P'], ['Name', ''], ['Town', '']]],
  ['CLASS', [['ClassID (PK)', 'P'], ['Name', ''], ['SchoolID (FK)', 'F']]],
  ['STUDENT', [['StudentID (PK)', 'P'], ['Name', ''], ['ClassID (FK)', 'F']]],
  ['ENROLMENT', [['StudentID (PK, FK)', 'PF'], ['SubjectID (PK, FK)', 'PF'], ['Mark', '']]],
  ['SUBJECT', [['SubjectID (PK)', 'P'], ['Name', '']]],
];
function ErdMapArt() {
  return (
    <G>
      {ERD.map(([n, x]) => (
        <Cell key={n} x={x} y={14} w={n === 'SUBJECT' ? 70 : 80} h={26} text={n} fill={SKY} size={8.5} bold rx={3} />
      ))}
      {[90, 200].map((x) => (
        <G key={x}>
          <Line x1={x} y1={27} x2={x + 30} y2={27} stroke={O} strokeWidth={1.2} />
          <One x={x + 5} y={27} />
          <Toes x={x + 30} y={27} dir={-1} />
        </G>
      ))}
      <Line x1={310} y1={27} x2={340} y2={27} stroke={O} strokeWidth={1.2} />
      <Toes x={310} y={27} dir={1} />
      <Toes x={340} y={27} dir={-1} />
      <Txt x={105} y={52} size={7} fill={MUTED}>
        has
      </Txt>
      <Txt x={215} y={52} size={7} fill={MUTED}>
        has
      </Txt>
      <Txt x={325} y={52} size={7} fill={MUTED}>
        takes
      </Txt>
      <Arrow x1={160} y1={44} x2={160} y2={74} c={MUTED} />
      {SCHEMA.map(([n, f], i) => (
        <TableBox key={n} x={2 + i * 84} y={78} w={80} name={n} fields={f} />
      ))}
      <Txt x={210} y={162} size={7.5}>
        {'One-to-many: the key of the "one" side goes into the "many" side as a foreign key.'}
      </Txt>
      <Txt x={210} y={178} size={7.5}>
        Many-to-many: the link table ENROLMENT, with both keys as its composite key.
      </Txt>
    </G>
  );
}

// ---------- anomalies in a flat file ----------
const FLAT = [
  ['S01', 'Ngwa', 'L6A', 'Mr Tabe'],
  ['S02', 'Fon', 'L6A', 'Mr Tabe'],
  ['S03', 'Bih', 'L6A', 'Mr Tabe'],
  ['S04', 'Akwi', 'U6B', 'Mrs Eyong'],
  ['NULL', 'NULL', 'U6C', 'Mr Nkeng'],
];
function AnomaliesArt() {
  return (
    <G>
      <Table
        x={10}
        y={8}
        cols={[['StudentID', 64], ['Name', 64], ['ClassID', 60], ['ClassTeacher', 90]]}
        rows={FLAT}
        rh={18}
        size={7.5}
        fills={(j, i) => (j === 4 ? '#fdf0ee' : j === 3 ? ROSE : i === 3 ? SAND : '#ffffff')}
      />
      <Path d="M292 28 L298 28 L298 78 L292 78" stroke={RED} strokeWidth={1.2} fill="none" />
      <Mark x={310} y={53} n={1} />
      <Mark x={310} y={89} n={2} />
      <Mark x={310} y={107} n={3} />
      <Mark x={16} y={137} n={1} />
      <Txt x={28} y={140} size={8} anchor="start">
        Update: Mr Tabe is stored 3 times, so a change must be made in every row.
      </Txt>
      <Mark x={16} y={155} n={2} />
      <Txt x={28} y={158} size={8} anchor="start">
        Deletion: deleting S04, the last student of U6B, also loses Mrs Eyong.
      </Txt>
      <Mark x={16} y={173} n={3} />
      <Txt x={28} y={176} size={8} anchor="start">
        Insertion: class U6C cannot be added until a student joins it.
      </Txt>
    </G>
  );
}

// ---------- a PERT network ----------
const ACTS = [
  ['A analysis', 6, 70, [0, 2, 2], [0, 0, 2], true],
  ['B design', 92, 70, [2, 3, 5], [2, 0, 5], true],
  ['C build', 196, 18, [5, 4, 9], [5, 0, 9], true],
  ['D user guide', 196, 122, [5, 2, 7], [7, 2, 9], false],
  ['E testing', 300, 70, [9, 1, 10], [9, 0, 10], true],
];
function ActNode({ name, x, y, top, bottom, crit }) {
  const c = crit ? RED : BLUE;
  const cw = 64 / 3;
  return (
    <G>
      {top.map((v, i) => (
        <Cell key={`t${i}`} x={x + i * cw} y={y} w={cw} h={14} text={`${v}`} size={7.5} fill={i === 1 ? '#f6f8fa' : '#ffffff'} stroke={c} />
      ))}
      <Cell x={x} y={y + 14} w={64} h={20} text={name} size={8} bold fill={crit ? ROSE : SKY} stroke={c} />
      {bottom.map((v, i) => (
        <Cell key={`b${i}`} x={x + i * cw} y={y + 34} w={cw} h={14} text={`${v}`} size={7.5} fill={i === 1 ? '#f6f8fa' : '#ffffff'} stroke={c} color={i === 1 && v > 0 ? BLUE : undefined} />
      ))}
    </G>
  );
}
function PertArt() {
  return (
    <G>
      <Arrow x1={70} y1={94} x2={91} y2={94} c={RED} />
      <Arrow x1={156} y1={88} x2={195} y2={42} c={RED} />
      <Arrow x1={156} y1={100} x2={195} y2={146} c={BLUE} />
      <Arrow x1={260} y1={42} x2={299} y2={88} c={RED} />
      <Arrow x1={260} y1={146} x2={299} y2={100} c={BLUE} />
      {ACTS.map(([name, x, y, top, bottom, crit]) => (
        <ActNode key={name} name={name} x={x} y={y} top={top} bottom={bottom} crit={crit} />
      ))}
      <Txt x={8} y={24} size={8} anchor="start" weight="700" fill={RED}>
        Critical path (red):
      </Txt>
      <Txt x={8} y={37} size={8} anchor="start" weight="700" fill={RED}>
        A, B, C, E = 10 weeks
      </Txt>
      <Txt x={8} y={154} size={8} anchor="start" weight="700" fill={BLUE}>
        D: float 2 weeks
      </Txt>
      <Txt x={190} y={188} size={7.5} fill={MUTED}>
        Top row: earliest start, duration, earliest finish (weeks)
      </Txt>
      <Txt x={190} y={201} size={7.5} fill={MUTED}>
        Bottom row: latest start, float, latest finish
      </Txt>
    </G>
  );
}

// ---------- asynchronous and synchronous transmission ----------
function SyncAsyncArt() {
  const wave = Array.from({ length: 30 }, (_, i) => `L${8 + i * 12} ${i % 2 ? 128 : 140} L${20 + i * 12} ${i % 2 ? 128 : 140}`).join(' ');
  return (
    <G>
      <Txt x={8} y={14} size={8.5} anchor="start" weight="700">
        Asynchronous: one character at a time
      </Txt>
      <Cell x={8} y={22} w={34} h={26} text={'idle\n1'} size={7} />
      <Cell x={42} y={22} w={30} h={26} text={'start\n0'} size={7} fill={ROSE} />
      {Array.from({ length: 8 }, (_, i) => (
        <Cell key={i} x={72 + i * 30} y={22} w={30} h={26} text={`bit ${i + 1}`} size={7} fill={SKY} />
      ))}
      <Cell x={312} y={22} w={30} h={26} text={'stop\n1'} size={7} fill={LEAF} />
      <Cell x={342} y={22} w={34} h={26} text={'idle\n1'} size={7} />
      <Txt x={192} y={64} size={8}>
        10 bits on the line for 8 bits of data, and no shared clock
      </Txt>
      <Txt x={8} y={88} size={8.5} anchor="start" weight="700">
        Synchronous: a whole block at a time
      </Txt>
      <Cell x={8} y={96} w={40} h={24} text="SYN" size={7.5} fill={SAND} bold />
      <Cell x={48} y={96} w={40} h={24} text="SYN" size={7.5} fill={SAND} bold />
      <Cell x={88} y={96} w={220} h={24} text="data bytes 1, 2, 3 … hundreds" size={7.5} fill={SKY} />
      <Cell x={308} y={96} w={34} h={24} text="check" size={7} fill={LILAC} />
      <Cell x={342} y={96} w={34} h={24} text="end" size={7} fill={SAND} />
      <Path d={`M8 140 ${wave}`} stroke={BLUE} strokeWidth={1.1} fill="none" />
      <Txt x={8} y={156} size={7.5} anchor="start" fill={BLUE}>
        shared clock keeps sender and receiver in step
      </Txt>
      <Txt x={192} y={178} size={8} weight="700">
        Asynchronous suits key presses; synchronous suits big transfers.
      </Txt>
    </G>
  );
}

// ---------- time division multiplexing ----------
const CH = [
  ['A', SKY],
  ['B', LEAF],
  ['C', SAND],
];
function MuxArt() {
  return (
    <G>
      {CH.map(([n, f], i) => (
        <G key={n}>
          <Cell x={8} y={20 + i * 36} w={50} h={22} text={`sender ${n}`} size={7.5} fill={f} rx={3} />
          <Arrow x1={58} y1={31 + i * 36} x2={89} y2={31 + i * 36} />
          <Arrow x1={310} y1={31 + i * 36} x2={341} y2={31 + i * 36} />
          <Cell x={342} y={20 + i * 36} w={50} h={22} text={`receiver ${n}`} size={7} fill={f} rx={3} />
        </G>
      ))}
      <Cell x={90} y={20} w={44} h={94} text="MUX" size={8.5} bold fill={LILAC} />
      <Cell x={266} y={20} w={44} h={94} text={'DE-\nMUX'} size={8.5} bold fill={LILAC} />
      <Line x1={134} y1={67} x2={266} y2={67} stroke={O} strokeWidth={1.2} />
      {['A', 'B', 'C', 'A', 'B', 'C'].map((n, i) => (
        <Cell key={i} x={140 + i * 20} y={58} w={20} h={18} text={n} size={8} bold fill={CH.find((c) => c[0] === n)[1]} />
      ))}
      <Txt x={200} y={92} size={7.5} fill={MUTED}>
        one link, repeating time slots
      </Txt>
      <Txt x={200} y={136} size={8}>
        FDM gives each signal its own frequency band; WDM its own colour of light.
      </Txt>
      <Txt x={200} y={152} size={8}>
        Statistical TDM gives slots only to channels with data to send.
      </Txt>
    </G>
  );
}

// ---------- route print and the path out ----------
const ROUTES = [
  ['0.0.0.0', '0.0.0.0', '192.168.1.1', '192.168.1.20'],
  ['127.0.0.0', '255.0.0.0', 'On-link', '127.0.0.1'],
  ['192.168.1.0', '255.255.255.0', 'On-link', '192.168.1.20'],
];
const HOPS = [
  ['This PC\n192.168.1.20', 8, 84],
  ['Switch', 116, 60],
  ['School router\n192.168.1.1', 200, 84],
  ['Provider\nrouter', 308, 76],
];
function RoutePrintArt() {
  return (
    <G>
      <Txt x={8} y={14} size={8} anchor="start" weight="700">
        {'C:\\> route print'}
      </Txt>
      <Table x={8} y={22} cols={[['Network destination', 96], ['Netmask', 96], ['Gateway', 84], ['Interface', 96]]} rows={ROUTES} rh={17} size={7.5} fills={(j) => (j === 0 ? LEAF : '#ffffff')} />
      <Txt x={8} y={104} size={7.5} anchor="start" fill={GREEN} weight="700">
        Green: the default route, used for every address not listed above.
      </Txt>
      {HOPS.map(([t, x, w], i) => (
        <G key={t}>
          <Cell x={x} y={114} w={w} h={30} text={t} size={7.5} fill={[SKY, '#ffffff', SAND, LILAC][i]} rx={4} />
          {i < HOPS.length - 1 && <Arrow x1={x + w} y1={129} x2={HOPS[i + 1][1] - 1} y2={129} />}
        </G>
      ))}
      <Txt x={192} y={166} size={7.5}>
        ping the gateway, then 8.8.8.8, then tracert: where replies stop, the fault lies.
      </Txt>
    </G>
  );
}

// ---------- netstat and well-known ports ----------
const CONNS = [
  ['TCP', '0.0.0.0:135', '0.0.0.0:0', 'LISTENING', '1044'],
  ['TCP', '0.0.0.0:3306', '0.0.0.0:0', 'LISTENING', '4120'],
  ['TCP', '192.168.1.20:52814', '203.0.113.10:443', 'ESTABLISHED', '7316'],
];
function NetstatArt() {
  return (
    <G>
      <Txt x={8} y={14} size={8} anchor="start" weight="700">
        {'C:\\> netstat -ano'}
      </Txt>
      <Table x={8} y={22} cols={[['Proto', 38], ['Local address', 104], ['Foreign address', 104], ['State', 76], ['PID', 40]]} rows={CONNS} rh={17} size={7.5} fills={(j) => (j === 1 ? ROSE : '#ffffff')} />
      <Txt x={8} y={104} size={7.5} anchor="start" fill={RED} weight="700">
        Red: a program listens on 3306 (MySQL). Name PID 4120 in Task Manager.
      </Txt>
      <Txt x={8} y={120} size={7.5} anchor="start" weight="700" fill={MUTED}>
        Well-known ports
      </Txt>
      <Table
        x={8}
        y={126}
        cols={[['22', 58], ['25', 58], ['53', 58], ['80', 58], ['443', 58], ['3306', 58]]}
        rows={[['SSH', 'SMTP', 'DNS', 'HTTP', 'HTTPS', 'MySQL']]}
        rh={17}
        size={7.5}
      />
    </G>
  );
}

// ---------- CSV, JSON and XML ----------
const FORMATS = [
  ['CSV', SKY, ['id,name,town,mark', 'S00123,Ngwa,"Douala, Littoral",14']],
  ['JSON', LEAF, ['{"id": "S00123", "name": "Ngwa",', ' "town": "Douala, Littoral", "marks": [14, 12]}']],
  ['XML', SAND, ['<student id="S00123">', '  <name>Ngwa</name> <town>Douala, Littoral</town>', '</student>']],
];
function FormatsArt() {
  return (
    <G>
      {FORMATS.map(([n, f, lines], i) => (
        <G key={n}>
          <Cell x={8} y={8 + i * 58} w={56} h={50} text={n} size={9} bold fill={f} rx={4} />
          <Rect x={70} y={8 + i * 58} width={322} height={50} rx={4} fill="#ffffff" stroke={O} strokeWidth={0.8} />
          {lines.map((l, k) => (
            <Txt key={k} x={80} y={8 + i * 58 + (lines.length === 3 ? 18 : 22) + k * 13} size={8} anchor="start">
              {l.replace(/^ +/, (m) => '\u00a0'.repeat(m.length * 2))}
            </Txt>
          ))}
        </G>
      ))}
      <Txt x={200} y={190} size={8} weight="700" fill={BLUE}>
        Only the values travel: formatting, formulas and relationships are lost.
      </Txt>
    </G>
  );
}

// ---------- data types in C++ and Python ----------
const TYPES = [
  ['Integer', '17', 'int age = 17;', 'age = 17'],
  ['Real', '13.5', 'double avg = 13.5;', 'avg = 13.5'],
  ['Character', "'A'", "char grade = 'A';", 'grade = "A"'],
  ['String', '"Ngwa"', 'string name = "Ngwa";', 'name = "Ngwa"'],
  ['Boolean', 'true, false', 'bool passed = true;', 'passed = True'],
];
function TypesArt() {
  return (
    <G>
      <Table x={10} y={8} cols={[['Type', 66], ['Example', 66], ['C++ declaration', 120], ['Python', 104]]} rows={TYPES} rh={18} size={7.5} fills={(j, i) => (i === 0 ? '#f6f8fa' : '#ffffff')} />
      <Txt x={188} y={136} size={7.5}>
        Constant: const double VAT_RATE = 0.1925; in C++; capital names by convention in Python.
      </Txt>
      <Txt x={188} y={152} size={7.5} fill={BLUE} weight="700">
        {'Input arrives as text: mark = int(input("Mark: "))'}
      </Txt>
    </G>
  );
}

// ---------- local and global scope ----------
function ScopeArt() {
  const code = (x, y, lines) =>
    lines.map(([t, c], i) => (
      <Txt key={i} x={x} y={y + i * 15} size={7.5} anchor="start" weight={i === 0 ? '700' : '500'} fill={c}>
        {t.replace(/^ +/, (m) => '\u00a0'.repeat(m.length * 2))}
      </Txt>
    ));
  return (
    <G>
      <Rect x={8} y={8} width={374} height={152} rx={8} fill="#f6f8fa" stroke={O} strokeWidth={0.8} />
      <Txt x={18} y={22} size={7.5} anchor="start" fill={MUTED}>
        the whole program
      </Txt>
      <Cell x={20} y={28} w={160} h={22} text="global: PASS_MARK = 10" size={8} bold fill={SAND} rx={3} />
      <Rect x={20} y={64} width={170} height={84} rx={6} fill={SKY} stroke={O} strokeWidth={0.8} />
      {code(30, 82, [
        ['def average(a, b, c):'],
        ['  total = a + b + c', BLUE],
        ['  (total is local)', MUTED],
        ['  return total / 3'],
      ])}
      <Rect x={204} y={64} width={166} height={84} rx={6} fill={LEAF} stroke={O} strokeWidth={0.8} />
      {code(214, 82, [
        ['def report(m1, m2, m3):'],
        ['  avg = average(m1, m2, m3)', BLUE],
        ['  avg >= PASS_MARK: allowed', GREEN],
        ['  total: not visible here', RED],
      ])}
      <Txt x={195} y={178} size={7.5}>
        Parameters carry values in; return sends the result out.
      </Txt>
      <Txt x={195} y={193} size={7.5}>
        In Python, a function needs global PASS_MARK before it can change it.
      </Txt>
    </G>
  );
}

// ---------- WHILE and DO-WHILE ----------
function Diamond({ cx, cy, w, h, text }) {
  const lines = text.split('\n');
  return (
    <G>
      <Path d={`M${cx} ${cy - h / 2} L${cx + w / 2} ${cy} L${cx} ${cy + h / 2} L${cx - w / 2} ${cy} Z`} fill={SAND} stroke={O} strokeWidth={0.9} />
      {lines.map((l, i) => (
        <Txt key={i} x={cx} y={cy + 3 - ((lines.length - 1) * 9) / 2 + i * 9} size={7.5} weight="700">
          {l}
        </Txt>
      ))}
    </G>
  );
}
function LoopsArt() {
  return (
    <G>
      <Txt x={100} y={14} size={9} weight="700">
        WHILE: test first
      </Txt>
      <Arrow x1={100} y1={20} x2={100} y2={37} />
      <Diamond cx={100} cy={60} w={100} h={44} text="balance > 0 ?" />
      <Arrow x1={100} y1={82} x2={100} y2={99} />
      <Txt x={110} y={94} size={7.5} anchor="start" fill={GREEN} weight="700">
        yes
      </Txt>
      <Cell x={55} y={100} w={90} h={30} text={'body: pay an\ninstalment'} size={7.5} fill={SKY} rx={3} />
      <Path d="M55 115 L30 115 L30 60 L49 60" stroke={MUTED} strokeWidth={1.3} fill="none" />
      <Arrow x1={40} y1={60} x2={49} y2={60} />
      <Path d="M150 60 L178 60 L178 140" stroke={MUTED} strokeWidth={1.3} fill="none" />
      <Arrow x1={178} y1={130} x2={178} y2={146} />
      <Txt x={162} y={54} size={7.5} fill={RED} weight="700">
        no
      </Txt>
      <Txt x={178} y={158} size={7.5}>
        exit
      </Txt>
      <Txt x={100} y={184} size={8} weight="700" fill={BLUE}>
        may run zero times
      </Txt>

      <Txt x={300} y={14} size={9} weight="700">
        DO-WHILE: test after
      </Txt>
      <Arrow x1={300} y1={20} x2={300} y2={35} />
      <Cell x={255} y={36} w={90} h={30} text={'body: ask for\nthe mark'} size={7.5} fill={SKY} rx={3} />
      <Arrow x1={300} y1={66} x2={300} y2={81} />
      <Diamond cx={300} cy={104} w={112} h={44} text={'mark < 0 or\nmark > 20 ?'} />
      <Path d="M244 104 L226 104 L226 51 L248 51" stroke={MUTED} strokeWidth={1.3} fill="none" />
      <Arrow x1={240} y1={51} x2={254} y2={51} />
      <Txt x={234} y={118} size={7.5} fill={GREEN} weight="700">
        yes
      </Txt>
      <Arrow x1={300} y1={126} x2={300} y2={146} />
      <Txt x={310} y={140} size={7.5} anchor="start" fill={RED} weight="700">
        no
      </Txt>
      <Txt x={300} y={158} size={7.5}>
        exit
      </Txt>
      <Txt x={300} y={184} size={8} weight="700" fill={BLUE}>
        always runs at least once
      </Txt>
      <Txt x={200} y={208} size={8}>
        FOR repeats a known number of times: for i in range(30)
      </Txt>
    </G>
  );
}

// ---------- three tiers ----------
const TIERS = [
  ['Presentation', 'Browser\nHTML: structure\nCSS: style\nJavaScript: behaviour', SKY, 8],
  ['Application', 'Web or app server\nPHP, Python\nor Node.js:\nrules and checks', LEAF, 150],
  ['Data', 'Database server\nMySQL tables\nstored records', SAND, 292],
];
function ThreeTierArt() {
  return (
    <G>
      {TIERS.map(([h, t, f, x]) => (
        <G key={h}>
          <Txt x={x + 50} y={20} size={9} weight="700">
            {h}
          </Txt>
          <Cell x={x} y={30} w={100} h={90} text={t} size={8} fill={f} rx={6} />
        </G>
      ))}
      <Arrow x1={108} y1={58} x2={149} y2={58} c={BLUE} />
      <Txt x={129} y={52} size={7} fill={BLUE}>
        request
      </Txt>
      <Arrow x1={149} y1={94} x2={108} y2={94} c={GREEN} />
      <Txt x={129} y={106} size={7} fill={GREEN}>
        response
      </Txt>
      <Arrow x1={250} y1={58} x2={291} y2={58} c={BLUE} />
      <Txt x={271} y={52} size={7} fill={BLUE}>
        SQL
      </Txt>
      <Arrow x1={291} y1={94} x2={250} y2={94} c={GREEN} />
      <Txt x={271} y={106} size={7} fill={GREEN}>
        rows
      </Txt>
      <Txt x={200} y={142} size={8}>
        GET a page or POST a form; the reply carries a status code:
      </Txt>
      <Txt x={200} y={158} size={8} weight="700">
        200 OK, 301 moved, 404 not found, 500 server error
      </Txt>
      <Txt x={200} y={178} size={7.5} fill={MUTED}>
        Code and passwords on the server are not visible to users.
      </Txt>
    </G>
  );
}

// ---------- responsive layouts ----------
function ResponsiveArt() {
  return (
    <G>
      <Txt x={98} y={14} size={8} weight="700">
        Desktop, 1280 px
      </Txt>
      <Rect x={8} y={20} width={180} height={110} rx={4} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Cell x={14} y={26} w={168} h={12} text="Home   News   Results   Contact" size={6.5} fill={SKY} />
      {[14, 72, 130].map((x, i) => (
        <Rect key={x} x={x} y={44} width={52} height={60} fill={[SAND, LEAF, LILAC][i]} stroke={O} strokeWidth={0.6} />
      ))}
      <Rect x={14} y={110} width={168} height={12} fill="#f1f4f6" stroke={O} strokeWidth={0.6} />

      <Txt x={254} y={24} size={8} weight="700">
        Tablet, 768 px
      </Txt>
      <Rect x={204} y={30} width={100} height={120} rx={6} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Cell x={210} y={36} w={88} h={12} text="Home  News  More" size={6} fill={SKY} />
      <Rect x={210} y={54} width={42} height={44} fill={SAND} stroke={O} strokeWidth={0.6} />
      <Rect x={256} y={54} width={42} height={44} fill={LEAF} stroke={O} strokeWidth={0.6} />
      <Rect x={210} y={102} width={88} height={30} fill={LILAC} stroke={O} strokeWidth={0.6} />

      <Txt x={356} y={28} size={8} weight="700">
        Phone, 360 px
      </Txt>
      <Rect x={324} y={34} width={64} height={124} rx={9} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Cell x={330} y={42} w={52} h={12} text="Menu" size={6.5} fill={SKY} rx={3} />
      <Rect x={330} y={60} width={52} height={28} fill={SAND} stroke={O} strokeWidth={0.6} />
      <Rect x={330} y={92} width={52} height={28} fill={LEAF} stroke={O} strokeWidth={0.6} />
      <Rect x={330} y={124} width={52} height={26} fill={LILAC} stroke={O} strokeWidth={0.6} />

      <Txt x={8} y={176} size={7} anchor="start">
        {'<meta name="viewport" content="width=device-width, initial-scale=1">'}
      </Txt>
      <Txt x={8} y={190} size={7} anchor="start">
        {'@media (max-width: 600px) { .menu { display: none; } }    img { max-width: 100%; }'}
      </Txt>
    </G>
  );
}

// ---------- judging a source ----------
const CHECKS = [
  ['Currency', 'Is it up to date?'],
  ['Relevance', 'Does it answer my question?'],
  ['Authority', 'Who wrote it, and are they qualified?'],
  ['Accuracy', 'Is it backed by evidence and other sources?'],
  ['Purpose', 'Is it trying to inform, sell or persuade?'],
];
function SourcesArt() {
  return (
    <G>
      <Table x={8} y={8} cols={[['Check', 80], ['Ask yourself', 290]]} rows={CHECKS} rh={18} size={8} fills={(j, i) => (i === 0 ? SKY : '#ffffff')} />
      <Txt x={8} y={136} size={7.5} anchor="start">
        Integrity: compare a download’s hash with the one published beside it.
      </Txt>
      <Txt x={8} y={152} size={8} anchor="start" weight="700" fill={BLUE}>
        certutil -hashfile setup.exe SHA256
      </Txt>
      <Txt x={8} y={168} size={7.5} anchor="start">
        Same hash: exactly the original file. A digital signature also proves who published it.
      </Txt>
    </G>
  );
}

// ---------- a phishing message ----------
const MSG = [
  ['From: MoMo Support <alerts@momo-help-cm.net>', 26, '700'],
  ['Subject: Your account will be closed TODAY', 44, '700'],
  ['Dear customer, confirm your account within 2 hours', 66],
  ['or it will be blocked. Click the link below:', 80],
  ['http://momo-secure-login.com/verify', 98, '700', BLUE],
  ['and enter your PIN and the code we send you.', 116],
  ['Win 500 000 FCFA for confirming today!', 134, '700'],
];
const SIGNS = [
  ['Sender address does not match', 10, 166],
  ['Urgency and threats', 10, 180],
  ['Look-alike link: check its real address', 10, 194],
  ['Asks for a PIN or a code', 200, 166],
  ['Offer too good to be true', 200, 180],
];
function PhishingArt() {
  return (
    <G>
      <Rect x={10} y={8} width={280} height={138} rx={6} fill="#ffffff" stroke={O} strokeWidth={1} />
      {MSG.map(([t, y, w, c]) => (
        <Txt key={t} x={20} y={y} size={8} anchor="start" weight={w || '500'} fill={c}>
          {t}
        </Txt>
      ))}
      {[23, 41, 95, 113, 131].map((y, i) => (
        <Mark key={y} x={302} y={y} n={i + 1} />
      ))}
      {SIGNS.map(([t, x, y], i) => (
        <G key={t}>
          <Mark x={x + 6} y={y - 3} n={i + 1} />
          <Txt x={x + 18} y={y} size={7.5} anchor="start">
            {t}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- full, incremental and differential backups ----------
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const DIFF = ['Mon', 'Mon, Tue', 'Mon to Wed', 'Mon to Thu'];
function BackupsArt() {
  const X = (i) => 90 + i * 60;
  return (
    <G>
      {DAYS.map((d, i) => (
        <Txt key={d} x={X(i) + 25} y={16} size={8} weight="700">
          {d}
        </Txt>
      ))}
      <Txt x={82} y={50} size={8} anchor="end" weight="700">
        Incremental
      </Txt>
      <Txt x={82} y={102} size={8} anchor="end" weight="700">
        Differential
      </Txt>
      {[34, 86].map((y) => (
        <Cell key={y} x={X(0)} y={y} w={50} h={26} text="Full" size={8} bold fill={SKY} />
      ))}
      {DAYS.slice(1).map((d, i) => (
        <Cell key={d} x={X(i + 1)} y={48} w={50} h={12} text={d} size={7} fill={LEAF} />
      ))}
      {DIFF.map((t, i) => {
        const h = [12, 16, 20, 26][i];
        return <Cell key={t} x={X(i + 1)} y={112 - h} w={50} h={h} text={t} size={6.5} fill={SAND} />;
      })}
      <Txt x={200} y={136} size={7.5}>
        Friday restore, incremental: Sunday’s full, then Mon, Tue, Wed and Thu in order.
      </Txt>
      <Txt x={200} y={152} size={7.5}>
        Friday restore, differential: Sunday’s full, then Thursday’s differential only.
      </Txt>
      <Txt x={200} y={172} size={8} weight="700" fill={BLUE}>
        3-2-1: 3 copies, 2 kinds of storage, 1 off site; keep one copy offline.
      </Txt>
    </G>
  );
}

export const A_ICT_2 = {
  'ait-erd-map': {
    title: 'From an ERD to a relational schema',
    w: 420,
    h: 188,
    art: ErdMapArt,
    labels: [],
    facts: [
      'Each entity of the ERD becomes a table, and its identifier the primary key, shown in blue.',
      'One school has many classes and one class many students, so CLASS holds SchoolID and STUDENT holds ClassID as foreign keys, shown in green.',
      'Students and subjects are many-to-many, so the link table ENROLMENT holds both keys as its composite key, with the Mark.',
    ],
    points: [
      [50, 27],
      [204, 125],
      [294, 109],
    ],
  },
  'ait-constraints': columnsSpec('Four kinds of integrity constraint', [
    { head: 'Entity\nintegrity', items: ['Each table has a key', 'Key never empty', 'Key never repeated'] },
    { head: 'Referential\nintegrity', items: ['Foreign keys match', 'No orphan rows', 'Refuse or cascade'] },
    { head: 'Domain\nconstraints', items: ['Data type', 'Range: 0 to 20', 'List: M or F'] },
    { head: 'Business\nrules', items: ['At most 3 books', 'Fees not negative', 'CHECK or the form'] },
  ], { colW: 100 }),
  'ait-anomalies': {
    title: 'Anomalies in a flat file',
    w: 370,
    h: 184,
    art: AnomaliesArt,
    labels: [],
    facts: [
      'Update anomaly: Mr Tabe is stored in three rows, so changing his name means changing every row.',
      'Deletion anomaly: deleting S04, the last student of U6B, also loses the class teacher Mrs Eyong.',
      'Insertion anomaly: the new class U6C cannot be added until a student joins it, because StudentID, the key, cannot be empty.',
    ],
    points: [
      [310, 53],
      [310, 89],
      [310, 107],
    ],
  },
  'ait-pert': {
    title: 'A PERT network with its critical path',
    w: 380,
    h: 206,
    art: PertArt,
    labels: [],
    facts: [
      'Each box is an activity; its top row gives the earliest start, the duration and the earliest finish, in weeks.',
      'The forward pass: A starts at 0, B at 2, C and D at 5, and E at 9, after the later of C and D.',
      'The backward pass fills the bottom row: latest start, float and latest finish. D can start as late as week 7, so its float is 2.',
      'A, B, C and E have zero float: they form the critical path, in red, and the project takes 10 weeks.',
    ],
    points: [
      [38, 77],
      [332, 94],
      [228, 163],
      [228, 42],
    ],
  },
  'ait-rad': flowSpec('The RAD life cycle', ['Requirements\nplanning', 'User design:\nprototypes with users', 'Construction', 'Cutover: test,\nconvert, train'], { perRow: 2, boxW: 132, note: 'User design and construction repeat until the users approve.' }),
  'ait-moscow': columnsSpec('MoSCoW priorities for a fees entry form', [
    { head: 'Must have', items: ['Find the student', 'Amount and date', 'Save Record'] },
    { head: 'Should have', items: ['Print a receipt', 'Find Record', 'Validation text'] },
    { head: 'Could have', items: ['SMS to parents', 'Student photo'] },
    { head: 'Won’t have\nthis time', items: ['Online payment', 'Parent log-in'] },
  ], { colW: 100 }),
  'ait-sync-async': {
    title: 'Asynchronous and synchronous transmission',
    w: 384,
    h: 186,
    art: SyncAsyncArt,
    labels: [],
    facts: [
      'Asynchronous: each character is framed by a start bit, 0, and a stop bit, 1, with no shared clock.',
      'So 8 data bits need 10 bits on the line.',
      'Synchronous: a large block follows a few synchronising bytes, timed by a shared clock.',
      'Asynchronous suits single key presses; synchronous suits big transfers.',
    ],
    points: [
      [57, 35],
      [192, 60],
      [68, 108],
      [192, 174],
    ],
  },
  'ait-mux': {
    title: 'Time division multiplexing',
    w: 400,
    h: 162,
    art: MuxArt,
    labels: [],
    facts: [
      'Time division multiplexing: senders A, B and C take turns in repeating time slots on one link.',
      'The multiplexer combines the signals at one end and the demultiplexer separates them at the other.',
      'Frequency division gives each signal its own frequency band, and wavelength division its own colour of light on a fibre.',
      'Statistical TDM gives slots only to channels with data to send.',
    ],
    points: [
      [200, 67],
      [112, 67],
      [200, 132],
      [200, 148],
    ],
  },
  'ait-route-print': {
    title: 'A PC’s routing table and its path out',
    w: 384,
    h: 176,
    art: RoutePrintArt,
    labels: [],
    facts: [
      'route print shows the PC’s routing table; in Linux, ip route does the same.',
      'The green line, destination 0.0.0.0 with mask 0.0.0.0, is the default route through the gateway 192.168.1.1.',
      'Addresses on the local network, 192.168.1.0 with mask 255.255.255.0, are reached directly: On-link.',
      'Packets go from the PC through the switch to the school router and the provider: ping the gateway first, then an outside address, then tracert.',
    ],
    points: [
      [50, 14],
      [56, 47],
      [56, 81],
      [242, 129],
    ],
  },
  'ait-netstat': {
    title: 'Listing connections and listening ports',
    w: 380,
    h: 168,
    art: NetstatArt,
    labels: [],
    facts: [
      'netstat -ano lists each connection and listening port with its process number, the PID; in Linux, use ss -tulpn.',
      'Port 135 is a normal Windows service, and the established line is a web page over HTTPS, port 443.',
      'In red, a program listens on 3306, usually MySQL: find PID 4120 in Task Manager, then block the port or remove the program.',
      'Well-known ports: 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS and 3306 MySQL.',
    ],
    points: [
      [60, 14],
      [200, 81],
      [200, 64],
      [182, 143],
    ],
  },
  'ait-formats': {
    title: 'One record in CSV, JSON and XML',
    w: 400,
    h: 198,
    art: FormatsArt,
    labels: [],
    facts: [
      'CSV: one record per line with commas between fields; a field containing a comma goes in double quotes.',
      'JSON: names and values in braces, lists in square brackets; most web services use it.',
      'XML: data marked up with named tags, verbose but self-describing.',
      'Exporting keeps only the values: formatting, formulas and relationships are lost.',
    ],
    points: [
      [36, 33],
      [36, 91],
      [36, 149],
      [200, 190],
    ],
  },
  'ait-types': {
    title: 'Data types in C++ and Python',
    w: 376,
    h: 160,
    art: TypesArt,
    labels: [],
    facts: [
      'Integer: whole numbers such as 17; int in C++ and in Python.',
      'Real: decimals such as 13.5; double in C++, float in Python.',
      'Character: one symbol; char in C++, a one-letter string in Python.',
      'String: text such as "Ngwa"; string in C++, str in Python.',
      'Boolean: true or false; bool in C++, True or False in Python.',
      'C++ declares each variable with its type; Python takes the type from the value. A constant such as VAT_RATE keeps one value.',
    ],
    points: [
      [43, 35],
      [43, 53],
      [43, 71],
      [43, 89],
      [43, 107],
      [188, 132],
    ],
  },
  'ait-scope': {
    title: 'Local and global scope',
    w: 390,
    h: 200,
    art: ScopeArt,
    labels: [],
    facts: [
      'PASS_MARK is global: declared outside every subroutine, it can be used anywhere.',
      'total is local to average: it exists only while average runs.',
      'report can read PASS_MARK but cannot see total, which belongs to average.',
      'Parameters carry values in and return sends the result out; in Python a function needs global PASS_MARK before it can change it.',
    ],
    points: [
      [100, 39],
      [105, 97],
      [287, 127],
      [195, 184],
    ],
  },
  'ait-loops': {
    title: 'WHILE and DO-WHILE loops',
    w: 400,
    h: 216,
    art: LoopsArt,
    labels: [],
    facts: [
      'WHILE tests its condition before the body, so it may run zero times.',
      'DO-WHILE runs the body first and tests after, so it always runs at least once.',
      'A validation loop asks again while the mark is below 0 or above 20; DO-WHILE suits it, since the question must be asked once.',
      'A FOR loop repeats a known number of times, such as for i in range(30).',
    ],
    points: [
      [100, 60],
      [300, 51],
      [300, 104],
      [200, 204],
    ],
  },
  'ait-three-tier': {
    title: 'A three-tier web system',
    w: 400,
    h: 186,
    art: ThreeTierArt,
    labels: [],
    facts: [
      'Presentation tier: the browser, with HTML for structure, CSS for style and JavaScript for behaviour.',
      'Application tier: scripts on the server in PHP, Python or Node.js apply the rules and talk to the database.',
      'Data tier: the database server stores the tables.',
      'The browser sends a request, GET or POST; the reply carries a status code such as 200 OK, 301, 404 or 500.',
    ],
    points: [
      [58, 75],
      [200, 75],
      [342, 75],
      [200, 152],
    ],
  },
  'ait-contact-form': flowSpec('A contact form that saves to a database', ['Form posts name,\nemail and message', 'PHP reads $_POST\nand checks fields', 'Prepared INSERT\nwith ? placeholders', 'Row saved in the\nmessages table', 'Reply: thank you,\nmessage sent'], { boxW: 112, note: 'Show stored text with htmlspecialchars, so typed tags are not run.' }),
  'ait-cms': treeSpec('Parts of a content management system', 'WordPress, Joomla, Drupal', [
    { name: 'Content in\na database', items: ['News and pages', 'Images', 'Menus'] },
    { name: 'Theme', items: ['Layout', 'Colours', 'Fonts'] },
    { name: 'Plugins', items: ['Contact forms', 'Galleries', 'Payments'] },
    { name: 'User roles', items: ['Administrator', 'Editor', 'Author', 'Contributor', 'Subscriber'] },
  ], { colW: 98 }),
  'ait-responsive': {
    title: 'One page on three screens',
    w: 396,
    h: 198,
    art: ResponsiveArt,
    labels: [],
    facts: [
      'On a desktop the page shows the full menu and three columns side by side.',
      'On a tablet the columns drop to two.',
      'On a phone, a media query for widths up to 600 px hides the menu behind a button and stacks the blocks in one column.',
      'It needs the viewport meta tag, flexible widths and images with max-width: 100%.',
    ],
    points: [
      [98, 74],
      [254, 76],
      [356, 90],
      [200, 182],
    ],
  },
  'ait-sources': {
    title: 'Judging a source, and checking a file',
    w: 386,
    h: 178,
    art: SourcesArt,
    labels: [],
    facts: [
      'Currency: is it up to date?',
      'Relevance: does it answer the question?',
      'Authority: who wrote it, and are they qualified?',
      'Accuracy: is it backed by evidence and other sources?',
      'Purpose: is it trying to inform, sell or persuade?',
      'Integrity: if a download’s SHA-256 hash matches the published one, the file is exactly the original.',
    ],
    points: [
      [48, 35],
      [48, 53],
      [48, 71],
      [48, 89],
      [48, 107],
      [120, 148],
    ],
  },
  'ait-phishing': {
    title: 'Five signs of a phishing message',
    w: 316,
    h: 202,
    art: PhishingArt,
    labels: [],
    facts: [
      'The sender’s address does not match the real organisation.',
      'Urgency and threats: the account will be closed today.',
      'A look-alike link: long-press or hover to see its real address, or type the official address yourself.',
      'It asks for a PIN or a code, which a real organisation never does.',
      'An offer too good to be true.',
    ],
    points: [
      [302, 23],
      [302, 41],
      [302, 95],
      [302, 113],
      [302, 131],
    ],
  },
  'ait-backups': {
    title: 'Full, incremental and differential backups',
    w: 390,
    h: 182,
    art: BackupsArt,
    labels: [],
    facts: [
      'A full backup on Sunday copies everything chosen.',
      'Incremental backups copy only what changed since the backup before, so each is small; a Friday restore needs Sunday’s full and all four incrementals, in order.',
      'Differential backups copy everything changed since Sunday’s full, so they grow; a Friday restore needs only Sunday’s full and Thursday’s differential.',
      'The 3-2-1 rule: 3 copies, on 2 kinds of storage, 1 off site, with one copy kept offline against ransomware.',
    ],
    points: [
      [115, 47],
      [235, 54],
      [295, 99],
      [200, 168],
    ],
  },
  'ait-logbook': flowSpec('One entry in the practical logbook', ['Task', 'Method: the\nsteps in order', 'Evidence: labelled\nscreenshots, files', 'Results', 'Reflection: what went\nwrong, what you learned'], { boxW: 122, note: 'The teacher signs the logbook before the end of Term 2.' }),
  'ait-u6-gce': columnsSpec('Upper Sixth ICT (0796), 2026: what to drill', [
    { head: 'Paper 1\n1½ h, 9 June', items: ['Multiple choice', 'OS and scheduling', 'Subnets', 'Normal forms'] },
    { head: 'Paper 2\n2½ h, 9 June', items: ['Case studies', 'System charts', 'PERT networks', 'SQL queries'] },
    { head: 'Practical\n7 to 9 May', items: ['At the computer', 'Databases, forms', 'Web pages, code', 'Logbook evidence'] },
  ], { colW: 116 }),
};
