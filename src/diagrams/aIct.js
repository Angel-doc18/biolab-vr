// A Level ICT figures (0796), Lower Sixth: the generations and range of
// computers, disk tools, a bottleneck, the memory hierarchy, OS history, shell
// commands, OS types, Linux permissions, process states, page replacement, the
// T568 colour codes, a LAN, DNS records, fault-finding, information system
// levels, a context diagram, fact-finding, payback (to scale), files and
// databases, a canteen schema, the three-level architecture, database
// controls, spreadsheet functions, a pivot table, a web form, GET and POST,
// simulation, a queue model, an expert system, machine learning, changeover
// methods, prototyping, the GCE papers and a Gantt chart.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';
import { Arrow, CS, Cell, Tag } from './aComputer';
import { Table } from './aComputer3';

const { O, MUTED, BLUE, RED, GREEN, SKY, LEAF, SAND, LILAC, ROSE, MINT } = CS;
const OLD = '#b9c2ca';

// ---------- a bottleneck in Task Manager ----------
const LOADS = [
  ['CPU', 22],
  ['Memory', 96],
  ['Disk', 100],
  ['Network', 1],
];
function BottleneckArt() {
  return (
    <G>
      {LOADS.map(([n, p], i) => (
        <G key={n}>
          <Txt x={70} y={22 + i * 28} size={9} anchor="end" weight="700">
            {n}
          </Txt>
          <Rect x={76} y={11} width={200} height={14} fill="#f1f4f6" stroke={MUTED} strokeWidth={0.6} transform={`translate(0 ${i * 28})`} />
          <Rect x={76} y={11 + i * 28} width={Math.max(1, p * 2)} height={14} fill={p > 90 ? RED : BLUE} />
          <Txt x={284} y={22 + i * 28} size={9} anchor="start" weight="700" fill={p > 90 ? RED : undefined}>
            {`${p} %`}
          </Txt>
        </G>
      ))}
      <Txt x={176} y={136} size={8.5} weight="700" fill={BLUE}>
        Memory is full, so pages swap to the disk: add RAM first
      </Txt>
    </G>
  );
}

// ---------- the memory hierarchy ----------
const LEVELS = ['Registers', 'L1 cache (tens of KB)', 'L2 cache (up to a few MB)', 'L3 cache (shared, MB)', 'RAM (gigabytes)', 'SSD and hard disk (TB)'];
const LEVEL_FILLS = [ROSE, SAND, SAND, SAND, SKY, LEAF];
function CacheArt() {
  return (
    <G>
      {LEVELS.map((t, i) => {
        const w = 80 + i * 48;
        return <Cell key={t} x={190 - w / 2} y={14 + i * 28} w={w} h={24} text={t} fill={LEVEL_FILLS[i]} size={8} rx={4} />;
      })}
      <Arrow x1={14} y1={176} x2={14} y2={16} c={RED} />
      <Txt x={26} y={96} size={8} weight="700" fill={RED} rotate={-90}>
        faster, costlier per byte
      </Txt>
      <Arrow x1={366} y1={16} x2={366} y2={176} c={BLUE} />
      <Txt x={354} y={96} size={8} weight="700" fill={BLUE} rotate={90}>
        larger, cheaper per byte
      </Txt>
    </G>
  );
}

// ---------- shell commands ----------
const CMDS = [
  ['List files', 'dir', 'ls'],
  ['Change directory', 'cd', 'cd'],
  ['Make a directory', 'mkdir', 'mkdir'],
  ['Copy', 'copy', 'cp'],
  ['Move or rename', 'move', 'mv'],
  ['Delete', 'del', 'rm'],
  ['Show a file', 'type', 'cat'],
  ['Clear the screen', 'cls', 'clear'],
  ['Help', 'help', 'man'],
];
function CommandsArt() {
  return <Table x={6} y={6} cols={[['Task', 110], ['Windows', 80], ['Linux', 80]]} rows={CMDS} rh={18} size={8} fills={(j, i) => (i === 0 ? '#f6f8fa' : '#ffffff')} />;
}

// ---------- Linux permissions ----------
const PERM = [
  ['owner (user)', 'rwx', '4 + 2 + 1 = 7', 60],
  ['group', 'r-x', '4 + 0 + 1 = 5', 140],
  ['others', '---', '0', 220],
];
const PFILL = { r: SKY, w: SAND, x: LEAF, '-': '#ffffff' };
function PermArt() {
  return (
    <G>
      <Txt x={35} y={22} size={7.5} fill={MUTED}>
        type
      </Txt>
      <Cell x={20} y={30} w={30} h={30} text="-" size={12} bold />
      {PERM.map(([who, bits, sum, x]) => (
        <G key={who}>
          <Txt x={x + 36} y={22} size={7.5} weight="700" fill={MUTED}>
            {who}
          </Txt>
          {bits.split('').map((b, i) => (
            <Cell key={i} x={x + i * 24} y={30} w={24} h={30} text={b} size={12} bold fill={PFILL[b]} />
          ))}
          <Txt x={x + 36} y={76} size={8} weight="700" fill={BLUE}>
            {sum}
          </Txt>
        </G>
      ))}
      <Txt x={10} y={106} size={8.5} anchor="start">
        chmod 750 report.sh gives rwxr-x---
      </Txt>
      <Txt x={10} y={122} size={8.5} anchor="start">
        chmod u+x, g-w or o-r changes one permission at a time
      </Txt>
      <Txt x={10} y={138} size={8.5} anchor="start">
        sudo chown ama:staff report.sh changes the owner and group
      </Txt>
    </G>
  );
}

// ---------- process states ----------
function StatesArt() {
  const box = (x, y, w, t, fill) => <Cell x={x} y={y} w={w} h={30} text={t} fill={fill} size={8.5} bold rx={14} />;
  return (
    <G>
      {box(10, 50, 70, 'New', '#ffffff')}
      {box(110, 50, 80, 'Ready', SKY)}
      {box(230, 50, 80, 'Running', LEAF)}
      {box(340, 50, 84, 'Terminated', '#ffffff')}
      {box(170, 130, 80, 'Blocked', ROSE)}
      <Arrow x1={80} y1={65} x2={109} y2={65} />
      <Tag x={95} y={42} text="admitted" />
      <Arrow x1={190} y1={58} x2={229} y2={58} c={GREEN} />
      <Tag x={210} y={42} text="dispatched" color={GREEN} />
      <Arrow x1={230} y1={73} x2={191} y2={73} c={BLUE} />
      <Tag x={210} y={94} text="time slice ends" color={BLUE} />
      <Arrow x1={310} y1={65} x2={339} y2={65} />
      <Tag x={325} y={42} text="exits" />
      <Arrow x1={262} y1={81} x2={234} y2={129} c={RED} />
      <Tag x={290} y={114} text="waits for I/O" color={RED} />
      <Arrow x1={186} y1={129} x2={158} y2={81} c={GREEN} />
      <Tag x={132} y={114} text="event done" color={GREEN} />
    </G>
  );
}

// ---------- page replacement ----------
const REFS = [7, 0, 1, 2, 0, 3, 0, 4];
const FIFO = [
  [7, 7, 7, 2, 2, 2, 2, 4],
  ['', 0, 0, 0, 0, 3, 3, 3],
  ['', '', 1, 1, 1, 1, 0, 0],
];
const LRU = [
  [7, 7, 7, 2, 2, 2, 2, 4],
  ['', 0, 0, 0, 0, 0, 0, 0],
  ['', '', 1, 1, 1, 3, 3, 3],
];
function Frames({ y, rows, label, faults }) {
  const x0 = 70;
  return (
    <G>
      <Txt x={x0 - 6} y={y + 31} size={9} anchor="end" weight="700">
        {label}
      </Txt>
      {rows.map((r, j) => (
        <G key={j}>
          {r.map((v, k) => {
            const changed = v !== '' && (k === 0 ? true : r[k - 1] !== v);
            return <Cell key={k} x={x0 + k * 28} y={y + j * 18} w={28} h={18} text={`${v}`} size={8.5} fill={changed ? SAND : '#ffffff'} bold={changed} />;
          })}
        </G>
      ))}
      {REFS.map((_, k) => {
        const fault = rows.some((r) => r[k] !== '' && (k === 0 ? true : r[k - 1] !== r[k]));
        return (
          <Txt key={k} x={x0 + k * 28 + 14} y={y + 68} size={8.5} weight="700" fill={fault ? RED : GREEN}>
            {fault ? 'F' : 'hit'}
          </Txt>
        );
      })}
      <Txt x={x0 + 8 * 28 + 8} y={y + 31} size={8.5} anchor="start" weight="700" fill={RED}>
        {`${faults} faults`}
      </Txt>
    </G>
  );
}
function PageArt() {
  return (
    <G>
      <Txt x={64} y={18} size={8} anchor="end" fill={MUTED}>
        Reference
      </Txt>
      {REFS.map((r, k) => (
        <Cell key={k} x={70 + k * 28} y={6} w={28} h={18} text={`${r}`} size={9} bold fill={SKY} />
      ))}
      <Frames y={36} rows={FIFO} label="FIFO" faults={7} />
      <Frames y={124} rows={LRU} label="LRU" faults={6} />
    </G>
  );
}

// ---------- T568A and T568B ----------
const WIRE = { o: '#e67e22', g: '#2e8b57', b: '#2563b0', n: '#7a4a2a' };
const T568A = ['wg', 'sg', 'wo', 'sb', 'wb', 'so', 'wn', 'sn'];
const T568B = ['wo', 'so', 'wg', 'sb', 'wb', 'sg', 'wn', 'sn'];
function Wire({ x, y, code }) {
  const c = WIRE[code[1]];
  return code[0] === 's' ? (
    <Rect x={x} y={y} width={20} height={44} rx={3} fill={c} stroke={O} strokeWidth={0.8} />
  ) : (
    <G>
      <Rect x={x} y={y} width={20} height={44} rx={3} fill="#ffffff" stroke={O} strokeWidth={0.8} />
      <Rect x={x + 7} y={y} width={6} height={44} fill={c} />
    </G>
  );
}
function T568Art() {
  return (
    <G>
      {[
        ['T568A', T568A, 30],
        ['T568B', T568B, 106],
      ].map(([name, codes, y]) => (
        <G key={name}>
          <Txt x={70} y={y + 26} size={9.5} anchor="end" weight="700">
            {name}
          </Txt>
          {codes.map((c, i) => (
            <G key={i}>
              <Txt x={90 + i * 28} y={y - 5} size={7.5} fill={MUTED}>
                {`${i + 1}`}
              </Txt>
              <Wire x={80 + i * 28} y={y} code={c} />
            </G>
          ))}
        </G>
      ))}
      <Txt x={10} y={174} size={8} anchor="start">
        Straight-through: the same standard at both ends.
      </Txt>
      <Txt x={10} y={188} size={8} anchor="start">
        Crossover: T568A at one end and T568B at the other.
      </Txt>
    </G>
  );
}

// ---------- a small LAN ----------
function LanArt() {
  return (
    <G>
      <Cell x={140} y={8} w={110} h={32} text={'Router\n192.168.10.1'} fill={SAND} size={8.5} rx={4} />
      <Line x1={195} y1={40} x2={195} y2={64} stroke={O} strokeWidth={1.4} />
      <Cell x={20} y={64} w={350} h={28} text="Switch" fill={LEAF} size={9.5} bold rx={4} />
      {[1, 2, 3, 4].map((n, i) => (
        <G key={n}>
          <Line x1={60 + i * 90} y1={92} x2={60 + i * 90} y2={130} stroke={BLUE} strokeWidth={1.4} />
          <Cell x={20 + i * 90} y={130} w={80} h={34} text={`PC${n}\n192.168.10.1${n}`} fill={SKY} size={8} rx={4} />
        </G>
      ))}
      <Txt x={195} y={186} size={8.5} weight="700" fill={BLUE}>
        Mask 255.255.255.0 on every PC; default gateway 192.168.10.1
      </Txt>
    </G>
  );
}

// ---------- DNS records ----------
const RECORDS = [
  ['A', 'www.school.cm', '203.0.113.10', 'name → IPv4'],
  ['AAAA', 'www.school.cm', '2001:db8::10', 'name → IPv6'],
  ['CNAME', 'webmail.school.cm', 'www.school.cm', 'alias'],
  ['MX', 'school.cm', '10 mail.school.cm', 'mail server'],
  ['NS', 'school.cm', 'ns1.provider.cm', 'name server'],
  ['PTR', '203.0.113.10', 'www.school.cm', 'address → name'],
];
function DnsArt() {
  return <Table x={6} y={6} cols={[['Type', 46], ['Name', 104], ['Value', 104], ['Meaning', 84]]} rows={RECORDS} rh={20} size={7.5} fills={(j, i) => (i === 0 ? SKY : '#ffffff')} />;
}

// ---------- levels of information system ----------
function MisArt() {
  const half = (y) => (150 * (y - 10)) / 160;
  const band = (y1, y2, fill) => <Path d={`M${190 - half(y1)} ${y1} L${190 + half(y1)} ${y1} L${190 + half(y2)} ${y2} L${190 - half(y2)} ${y2} Z`} fill={fill} stroke={O} strokeWidth={1.1} />;
  return (
    <G>
      {band(10, 60, ROSE)}
      {band(60, 115, SAND)}
      {band(115, 170, SKY)}
      <Txt x={190} y={50} size={9} weight="700">
        Strategic
      </Txt>
      <Txt x={190} y={93} size={9} weight="700">
        Tactical
      </Txt>
      <Txt x={190} y={148} size={9} weight="700">
        Operational
      </Txt>
      <Txt x={262} y={36} size={8.5} anchor="start" weight="700" fill={RED}>
        EIS and DSS
      </Txt>
      <Txt x={262} y={48} size={7.5} anchor="start" fill={MUTED}>
        top managers, long term
      </Txt>
      <Txt x={290} y={86} size={8.5} anchor="start" weight="700" fill={BLUE}>
        MIS
      </Txt>
      <Txt x={290} y={98} size={7.5} anchor="start" fill={MUTED}>
        middle managers, reports
      </Txt>
      <Txt x={330} y={140} size={8.5} anchor="start" weight="700" fill={GREEN}>
        TPS
      </Txt>
      <Txt x={330} y={152} size={7.5} anchor="start" fill={MUTED}>
        staff, daily
      </Txt>
    </G>
  );
}

// ---------- a context diagram ----------
function ContextArt() {
  const ent = (x, y, w, h, t) => <Cell x={x} y={y} w={w} h={h} text={t} fill={SAND} size={9} bold />;
  return (
    <G>
      <Cell x={150} y={72} w={100} h={52} text={'0\nStock system'} fill={SKY} size={8.5} rx={22} />
      {ent(6, 80, 84, 36, 'Customer')}
      {ent(310, 80, 84, 36, 'Supplier')}
      {ent(155, 6, 90, 30, 'Manager')}
      {ent(155, 160, 90, 30, 'Bank')}
      <Arrow x1={90} y1={90} x2={149} y2={90} />
      <Tag x={120} y={84} text="purchases" />
      <Arrow x1={150} y1={108} x2={91} y2={108} />
      <Tag x={120} y={122} text="receipt" />
      <Arrow x1={250} y1={90} x2={309} y2={90} />
      <Tag x={280} y={84} text="order" />
      <Arrow x1={310} y1={108} x2={251} y2={108} />
      <Tag x={280} y={122} text="invoice" />
      <Arrow x1={185} y1={72} x2={185} y2={37} />
      <Tag x={158} y={58} text="report" />
      <Arrow x1={215} y1={37} x2={215} y2={71} />
      <Tag x={242} y={58} text="prices" />
      <Arrow x1={185} y1={124} x2={185} y2={159} />
      <Tag x={155} y={146} text="payment" />
      <Arrow x1={215} y1={159} x2={215} y2={125} />
      <Tag x={252} y={146} text="confirmation" />
    </G>
  );
}

// ---------- payback, to scale ----------
const SAVED = [0, 1, 3, 5.5, 8];
function PaybackArt() {
  const X = (yr) => 60 + yr * 70;
  const Y = (m) => 170 - m * 18;
  return (
    <G>
      <Line x1={60} y1={170} x2={350} y2={170} stroke={O} strokeWidth={1.1} />
      <Line x1={60} y1={170} x2={60} y2={20} stroke={O} strokeWidth={1.1} />
      {[0, 1, 2, 3, 4].map((yr) => (
        <Txt key={yr} x={X(yr)} y={184} size={8}>
          {`${yr}`}
        </Txt>
      ))}
      {[0, 2, 4, 6, 8].map((m) => (
        <Txt key={m} x={54} y={Y(m) + 3} size={8} anchor="end">
          {`${m}`}
        </Txt>
      ))}
      <Line x1={60} y1={Y(5)} x2={340} y2={Y(5)} stroke={RED} strokeWidth={1.4} strokeDasharray="5 3" />
      <Txt x={340} y={Y(5) - 5} size={8} anchor="end" weight="700" fill={RED}>
        cost: 5 million
      </Txt>
      <Path d={SAVED.map((m, yr) => `${yr ? 'L' : 'M'}${X(yr)} ${Y(m)}`).join(' ')} stroke={BLUE} strokeWidth={2} fill="none" />
      {SAVED.map((m, yr) => (
        <Circle key={yr} cx={X(yr)} cy={Y(m)} r={3} fill={BLUE} />
      ))}
      <Circle cx={X(2.8)} cy={Y(5)} r={5} fill="none" stroke={GREEN} strokeWidth={2} />
      <Txt x={X(2.8) + 8} y={Y(5) + 16} size={8.5} anchor="start" weight="700" fill={GREEN}>
        payback ≈ 2.8 years
      </Txt>
      <Txt x={150} y={44} size={8} anchor="start" fill={BLUE}>
        total savings so far
      </Txt>
      <Txt x={205} y={198} size={8.5}>
        years
      </Txt>
      <Txt x={22} y={96} size={8.5} rotate={-90}>
        millions of FCFA
      </Txt>
    </G>
  );
}

// ---------- a canteen schema ----------
function TableBox({ x, y, w, name, fields }) {
  return (
    <G>
      <Cell x={x} y={y} w={w} h={18} text={name} fill={SAND} size={8.5} bold />
      {fields.map((f, i) => (
        <G key={f}>
          <Rect x={x} y={y + 18 + i * 16} width={w} height={16} fill="#ffffff" stroke={O} strokeWidth={0.8} />
          <Txt x={x + 6} y={y + 30 + i * 16} size={8} anchor="start" weight={/\(PK\)/.test(f) ? '700' : '500'} fill={/\(PK\)/.test(f) ? BLUE : /\(FK\)/.test(f) ? GREEN : undefined}>
            {f}
          </Txt>
        </G>
      ))}
    </G>
  );
}
function Foot({ x, y, dir }) {
  return <Path d={`M${x} ${y} L${x + dir * 8} ${y - 6} M${x} ${y} L${x + dir * 8} ${y} M${x} ${y} L${x + dir * 8} ${y + 6}`} stroke={O} strokeWidth={1.2} fill="none" />;
}
function SchemaArt() {
  return (
    <G>
      <TableBox x={10} y={20} w={104} name="STUDENT" fields={['StudentID (PK)', 'Name', 'Class']} />
      <TableBox x={286} y={20} w={104} name="MEAL" fields={['MealID (PK)', 'Name', 'Price']} />
      <TableBox x={148} y={90} w={104} name="PURCHASE" fields={['PurchaseID (PK)', 'StudentID (FK)', 'MealID (FK)', 'Date']} />
      <Path d="M114 46 L131 46 L131 132 L148 132" stroke={O} strokeWidth={1.2} fill="none" />
      <Line x1={120} y1={40} x2={120} y2={52} stroke={O} strokeWidth={1.2} />
      <Foot x={148} y={132} dir={-1} />
      <Path d="M286 46 L269 46 L269 148 L252 148" stroke={O} strokeWidth={1.2} fill="none" />
      <Line x1={280} y1={40} x2={280} y2={52} stroke={O} strokeWidth={1.2} />
      <Foot x={252} y={148} dir={1} />
      <Txt x={200} y={14} size={8} fill={MUTED}>
        one student, many purchases; one meal, many purchases
      </Txt>
    </G>
  );
}

// ---------- the three-level architecture ----------
function ThreeLevelArt() {
  const views = [
    ['Teacher’s view', 'marks', 20],
    ['Bursar’s view', 'fees', 145],
    ['Student’s view', 'own results', 270],
  ];
  return (
    <G>
      {views.map(([a, b, x]) => (
        <G key={a}>
          <Cell x={x} y={14} w={110} h={30} text={`${a}\n${b}`} fill={SKY} size={8} rx={4} />
          <Arrow x1={x + 55} y1={44} x2={x + 55} y2={85} />
        </G>
      ))}
      <Txt x={6} y={10} size={7.5} anchor="start" weight="700" fill={BLUE}>
        External level
      </Txt>
      <Txt x={137} y={68} size={7.5} fill={MUTED}>
        logical data independence
      </Txt>
      <Cell x={60} y={86} w={280} h={32} text={'Conceptual level\nall data and relationships'} fill={SAND} size={8.5} rx={4} />
      <Arrow x1={200} y1={118} x2={200} y2={155} />
      <Txt x={290} y={140} size={7.5} fill={MUTED}>
        physical data independence
      </Txt>
      <Cell x={60} y={156} w={280} h={32} text={'Internal level\nfiles, indexes, storage'} fill={LEAF} size={8.5} rx={4} />
    </G>
  );
}

// ---------- spreadsheet functions ----------
const SHEET = [
  ['Name', 'Mark', 'Grade', 'Rank'],
  ['Ngwa', '17', 'A', '1'],
  ['Bih', '12', 'C', '3'],
  ['Fon', '15', 'B', '2'],
  ['Akwi', '8', 'F', '4'],
];
function SheetArt() {
  const cols = [
    ['', 22],
    ['A', 70],
    ['B', 50],
    ['C', 50],
    ['D', 50],
  ];
  return (
    <G>
      <Txt x={6} y={14} size={7.5} anchor="start">
        {'C2: =IF(B2>=16,"A",IF(B2>=14,"B",IF(B2>=10,"C","F")))'}
      </Txt>
      <Txt x={6} y={28} size={7.5} anchor="start">
        {'D2: =RANK(B2,$B$2:$B$5)'}
      </Txt>
      <Table x={6} y={38} cols={cols} rows={SHEET.map((r, j) => [`${j + 1}`, ...r])} rh={18} size={8} fills={(j, i) => (i === 0 ? SAND : j === 0 ? '#f6f8fa' : (j === 1 && (i === 3 || i === 4)) ? LEAF : '#ffffff')} />
      <Txt x={6} y={160} size={8} anchor="start" weight="700" fill={BLUE}>
        {'=COUNTIF(B2:B5,">=10") gives 3'}
      </Txt>
    </G>
  );
}

// ---------- a pivot table ----------
const SALES = [
  ['Littoral', 'Jan', '120'],
  ['Centre', 'Jan', '90'],
  ['Littoral', 'Feb', '150'],
  ['Centre', 'Feb', '80'],
  ['Littoral', 'Jan', '60'],
  ['Centre', 'Feb', '40'],
];
const PIVOT = [
  ['Littoral', '180', '150', '330'],
  ['Centre', '90', '120', '210'],
  ['Total', '270', '270', '540'],
];
function PivotArt() {
  return (
    <G>
      <Txt x={76} y={12} size={8.5} weight="700">
        Sales table
      </Txt>
      <Table x={6} y={18} cols={[['Region', 56], ['Month', 38], ['Amount', 48]]} rows={SALES} rh={16} size={7.5} />
      <Arrow x1={152} y1={70} x2={186} y2={70} />
      <Txt x={278} y={12} size={8.5} weight="700" fill={BLUE}>
        Pivot table: sum of Amount
      </Txt>
      <Table x={188} y={18} cols={[['Region', 56], ['Jan', 40], ['Feb', 40], ['Total', 44]]} rows={PIVOT} rh={18} size={8} fills={(j, i) => (j === 2 || i === 3 ? LEAF : i === 0 ? '#f6f8fa' : '#ffffff')} />
      <Txt x={278} y={110} size={7.5} fill={MUTED}>
        Amounts in thousands of FCFA
      </Txt>
    </G>
  );
}

// ---------- a web form ----------
function Radio({ x, y, on, label }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={5} fill="#ffffff" stroke={O} strokeWidth={1} />
      {on && <Circle cx={x} cy={y} r={2.6} fill={BLUE} />}
      <Txt x={x + 9} y={y + 3} size={8} anchor="start">
        {label}
      </Txt>
    </G>
  );
}
function Check({ x, y, on, label }) {
  return (
    <G>
      <Rect x={x - 5} y={y - 5} width={10} height={10} fill="#ffffff" stroke={O} strokeWidth={1} />
      {on && <Path d={`M${x - 3} ${y} L${x - 1} ${y + 3} L${x + 4} ${y - 3}`} stroke={BLUE} strokeWidth={1.6} fill="none" />}
      <Txt x={x + 9} y={y + 3} size={8} anchor="start">
        {label}
      </Txt>
    </G>
  );
}
const FORM_TAGS = [
  ['Full name', 24, '<input type="text">'],
  ['Class', 54, '<input type="radio">'],
  ['Series', 84, '<select>'],
  ['Clubs', 114, '<input type="checkbox">'],
  ['Comments', 144, '<textarea>'],
  ['', 196, '<button type="submit">'],
];
function FormArt() {
  return (
    <G>
      {FORM_TAGS.map(([l, y, t]) => (
        <G key={t}>
          <Txt x={10} y={y + 2} size={8.5} anchor="start" weight="700">
            {l}
          </Txt>
          <Txt x={246} y={y + 2} size={7.5} anchor="start" fill={MUTED}>
            {t}
          </Txt>
        </G>
      ))}
      <Rect x={90} y={12} width={130} height={18} rx={3} fill="#ffffff" stroke={MUTED} strokeWidth={1} />
      <Txt x={96} y={25} size={8} anchor="start" fill={MUTED}>
        Ngwa Bih
      </Txt>
      <Radio x={96} y={53} on label="Lower Sixth" />
      <Radio x={172} y={53} label="Upper Sixth" />
      <Rect x={90} y={72} width={80} height={18} rx={3} fill="#ffffff" stroke={MUTED} strokeWidth={1} />
      <Txt x={98} y={85} size={8} anchor="start">
        S2
      </Txt>
      <Path d="M156 78 L164 78 L160 84 Z" fill={O} />
      <Check x={96} y={113} on label="Science" />
      <Check x={160} y={113} label="Debate" />
      <Rect x={90} y={132} width={130} height={36} rx={3} fill="#ffffff" stroke={MUTED} strokeWidth={1} />
      <Rect x={90} y={184} width={60} height={22} rx={4} fill={BLUE} />
      <Txt x={120} y={198} size={8.5} weight="700" fill="#ffffff">
        Send
      </Txt>
    </G>
  );
}

// ---------- a queue simulation ----------
const QUEUE = [
  ['start', '', '', '0'],
  ['1', '2', '1', '1'],
  ['2', '0', '1', '0'],
  ['3', '2', '1', '1'],
  ['4', '1', '1', '1'],
  ['5', '2', '1', '2'],
  ['6', '0', '1', '1'],
];
function QueueArt() {
  return (
    <G>
      {['B3: =RANDBETWEEN(0,2)', 'C3: =MIN(1,D2+B3)', 'D3: =D2+B3-C3'].map((t, i) => (
        <Txt key={t} x={6} y={12 + i * 13} size={7.5} anchor="start">
          {t}
        </Txt>
      ))}
      <Table x={6} y={46} cols={[['Minute', 50], ['Arrivals', 56], ['Served', 50], ['Queue', 50]]} rows={QUEUE} rh={18} size={8} fills={(j, i) => (i === 3 ? LEAF : '#ffffff')} />
      {['Press F9 for a new', 'random run.', 'Monte Carlo: repeat', 'many runs, then study', 'the average and the', 'longest queue.'].map((t, i) => (
        <Txt key={t} x={226} y={70 + i * 14} size={8} anchor="start" fill={MUTED}>
          {t}
        </Txt>
      ))}
    </G>
  );
}

// ---------- an expert system ----------
function ExpertArt() {
  return (
    <G>
      <Cell x={6} y={70} w={62} h={36} text="User" fill={SAND} size={9} bold rx={4} />
      <Cell x={92} y={70} w={86} h={36} text={'User\ninterface'} fill={SKY} size={8.5} rx={4} />
      <Cell x={202} y={70} w={86} h={36} text={'Inference\nengine'} fill={LILAC} size={8.5} rx={4} />
      <Cell x={312} y={70} w={84} h={36} text={'Knowledge base\nfacts + rules'} fill={LEAF} size={8} rx={4} />
      <Cell x={202} y={136} w={86} h={32} text={'Explanation\nfacility'} fill={MINT} size={8} rx={4} />
      <Cell x={312} y={6} w={84} h={24} text="Human expert" fill={SAND} size={8} rx={4} />
      <Arrow x1={68} y1={88} x2={91} y2={88} both />
      <Arrow x1={178} y1={88} x2={201} y2={88} both />
      <Arrow x1={288} y1={88} x2={311} y2={88} both />
      <Arrow x1={245} y1={106} x2={245} y2={135} />
      <Arrow x1={202} y1={150} x2={136} y2={107} />
      <Arrow x1={354} y1={30} x2={354} y2={69} c={GREEN} />
      <Tag x={354} y={53} text="knowledge engineer" color={GREEN} />
      <Txt x={200} y={186} size={8} weight="700" fill={BLUE}>
        Forward chaining: facts to conclusion. Backward chaining: goal to facts.
      </Txt>
    </G>
  );
}

// ---------- changeover methods ----------
function Bar({ a, b, y, h, fill }) {
  const X = (p) => 90 + p * 2.4;
  return <Rect x={X(a)} y={y} width={X(b) - X(a)} height={h} rx={2} fill={fill} />;
}
function ChangeoverArt() {
  return (
    <G>
      {[
        ['Direct', 24],
        ['Parallel', 62],
        ['Phased', 104],
        ['Pilot', 146],
      ].map(([n, y]) => (
        <Txt key={n} x={84} y={y + 4} size={9} anchor="end" weight="700">
          {n}
        </Txt>
      ))}
      <Bar a={0} b={50} y={14} h={10} fill={OLD} />
      <Bar a={50} b={100} y={26} h={10} fill={BLUE} />
      <Bar a={0} b={65} y={52} h={10} fill={OLD} />
      <Bar a={35} b={100} y={64} h={10} fill={BLUE} />
      {[30, 50, 70].map((t, i) => (
        <G key={t}>
          <Bar a={0} b={t} y={90 + i * 10} h={7} fill={OLD} />
          <Bar a={t} b={100} y={90 + i * 10} h={7} fill={BLUE} />
        </G>
      ))}
      {[30, 60].map((t, i) => (
        <G key={t}>
          <Bar a={0} b={t} y={138 + i * 12} h={8} fill={OLD} />
          <Bar a={t} b={100} y={138 + i * 12} h={8} fill={BLUE} />
        </G>
      ))}
      <Txt x={336} y={145} size={7} anchor="start" fill={MUTED}>
        pilot branch
      </Txt>
      <Txt x={336} y={157} size={7} anchor="start" fill={MUTED}>
        other branches
      </Txt>
      <Arrow x1={90} y1={172} x2={332} y2={172} c={MUTED} />
      <Txt x={210} y={184} size={7.5} fill={MUTED}>
        time
      </Txt>
      <Rect x={90} y={190} width={10} height={8} fill={OLD} />
      <Txt x={104} y={197} size={7.5} anchor="start">
        old system
      </Txt>
      <Rect x={170} y={190} width={10} height={8} fill={BLUE} />
      <Txt x={184} y={197} size={7.5} anchor="start">
        new system
      </Txt>
    </G>
  );
}

// ---------- a Gantt chart ----------
const TASKS = [
  ['A Analysis', 0, 2, true],
  ['B Design', 2, 5, true],
  ['C Build', 5, 9, true],
  ['D User guide', 5, 7, false],
  ['E Testing', 9, 10, true],
];
function GanttArt() {
  const X = (wk) => 96 + wk * 27;
  return (
    <G>
      {TASKS.map(([n, a, b, crit], i) => (
        <G key={n}>
          <Txt x={90} y={29 + i * 24} size={8.5} anchor="end" weight="700">
            {n}
          </Txt>
          <Rect x={X(a)} y={18 + i * 24} width={X(b) - X(a)} height={14} rx={3} fill={crit ? RED : BLUE} />
        </G>
      ))}
      <Rect x={X(7)} y={18 + 3 * 24} width={X(9) - X(7)} height={14} rx={3} fill="none" stroke={BLUE} strokeWidth={1.2} strokeDasharray="3 2" />
      <Line x1={96} y1={140} x2={X(10)} y2={140} stroke={O} strokeWidth={1} />
      {Array.from({ length: 11 }, (_, wk) => (
        <G key={wk}>
          <Line x1={X(wk)} y1={140} x2={X(wk)} y2={144} stroke={O} strokeWidth={1} />
          <Txt x={X(wk)} y={154} size={7.5}>
            {`${wk}`}
          </Txt>
        </G>
      ))}
      <Txt x={X(5)} y={166} size={7.5} fill={MUTED}>
        weeks
      </Txt>
      <Txt x={10} y={182} size={8} anchor="start" weight="700" fill={RED}>
        Critical path A, B, C, E: 10 weeks.
      </Txt>
      <Txt x={200} y={182} size={8} anchor="start" weight="700" fill={BLUE}>
        Dashed: 2 weeks of slack on D.
      </Txt>
    </G>
  );
}

export const A_ICT = {
  'ait-generations': columnsSpec('Five generations of computers', [
    { head: '1st\n1940s–50s', items: ['Vacuum tubes', 'Punched cards', 'Machine code'] },
    { head: '2nd\nlate 1950s–60s', items: ['Transistors', 'Core memory', 'FORTRAN'] },
    { head: '3rd\n1960s–70s', items: ['Integrated', 'circuits', 'Keyboards, OS'] },
    { head: '4th\nfrom 1971', items: ['Micro-', 'processors', 'PCs, Internet'] },
    { head: '5th\nnow', items: ['AI, parallel', 'processing', 'Quantum ahead'] },
  ], { colW: 76 }),
  'ait-disk-tools': columnsSpec('Lab: drivers and disk utilities', [
    { head: 'Device Manager', items: ['Update driver', 'Roll back driver', 'Restore point first'] },
    { head: 'Disk Cleanup', items: ['Temporary files', 'Old updates', 'Recycle Bin'] },
    { head: 'Optimise drives', items: ['HDD: defragment', 'SSD: TRIM', 'Never defrag SSD'] },
    { head: 'Check disk', items: ['chkdsk', 'Finds errors', 'Repairs them'] },
  ], { colW: 98 }),
  'ait-range': columnsSpec('The range of computers', [
    { head: 'Super-\ncomputer', items: ['Fastest: FLOPS', 'Weather, climate', 'Many processors'] },
    { head: 'Mainframe', items: ['Huge volumes', 'Banks, airlines', 'Very reliable'] },
    { head: 'Server', items: ['Midrange role', 'Files, web, mail', 'Data centres'] },
    { head: 'Micro-\ncomputer', items: ['Desktop, laptop', 'Tablet, phone', 'One user'] },
    { head: 'Embedded', items: ['Inside devices', 'Cars, machines', 'One job'] },
  ], { colW: 80 }),
  'ait-bottleneck': {
    title: 'Task Manager shows the bottleneck',
    w: 352,
    h: 144,
    art: BottleneckArt,
    labels: [],
    facts: [
      'CPU 22 %, memory 96 %, disk 100 % and network 1 %.',
      'Memory is almost full, so the system swaps pages to the hard disk, which keeps the disk at 100 %.',
      'Memory is the bottleneck: adding RAM helps most; an SSD would help further.',
    ],
  },
  'ait-cache': {
    title: 'The memory hierarchy',
    w: 380,
    h: 190,
    art: CacheArt,
    labels: [],
    facts: [
      'From top to bottom: registers, L1 cache, L2 cache, L3 cache, RAM, then SSD and hard disk storage.',
      'Each level down is larger, slower and cheaper per byte than the one above.',
      'The processor looks in the fastest levels first, so frequently used data is kept near the top.',
    ],
  },
  'ait-os-history': flowSpec('How operating systems developed', ['Serial processing:\nno OS (1940s)', 'Batch systems\n(1950s)', 'Multiprogramming,\ntime-sharing (1960s)', 'PC systems, GUIs\n(1980s)', 'Network and\ndistributed systems', 'Mobile systems\n(from 2007)'], { boxW: 124 }),
  'ait-commands': {
    title: 'Common commands in Windows and Linux',
    w: 284,
    h: 192,
    art: CommandsArt,
    labels: [],
    facts: CMDS.map(([t, w, l]) => `${t}: ${w} in Windows, ${l} in Linux.`),
  },
  'ait-os-types': columnsSpec('Types of operating system', [
    { head: 'Batch', items: ['Jobs run together', 'No interaction', 'Payroll, bills'] },
    { head: 'Multi-access', items: ['Many users', 'Time slices', 'University server'] },
    { head: 'Real-time', items: ['Guaranteed reply', 'Hard or soft', 'Airbags, flight'] },
    { head: 'Transaction', items: ['Each one at once', 'Record locking', 'Booking, ATMs'] },
  ], { colW: 100 }),
  'ait-permissions': {
    title: 'Reading Linux permissions',
    w: 320,
    h: 148,
    art: PermArt,
    labels: [],
    facts: [
      'The first character gives the type: - for a file, d for a directory.',
      'Then come three groups of rwx for the owner, the group and others; r = 4, w = 2, x = 1.',
      'rwxr-x--- is 750: the owner can do everything, the group can read and run, others nothing.',
    ],
  },
  'ait-process-states': {
    title: 'The states of a process',
    w: 430,
    h: 172,
    art: StatesArt,
    labels: [],
    facts: [
      'A new process is admitted to the ready queue.',
      'The scheduler dispatches a ready process to run; when its time slice ends it goes back to ready.',
      'A running process that waits for input or output becomes blocked, and returns to ready when the event happens.',
      'When it finishes, it exits and is terminated.',
    ],
  },
  'ait-page-replacement': {
    title: 'FIFO and LRU with three frames',
    w: 350,
    h: 202,
    art: PageArt,
    labels: [],
    facts: [
      'The pages 7, 0, 1, 2, 0, 3, 0, 4 are requested with three frames; a shaded cell is a page just loaded.',
      'FIFO removes the page loaded longest ago: 7 faults.',
      'LRU removes the page unused for longest: 6 faults, because it keeps page 0, which is used again.',
    ],
  },
  'ait-t568': {
    title: 'The T568A and T568B colour codes',
    w: 320,
    h: 194,
    art: T568Art,
    labels: [],
    facts: [
      'T568A, pins 1 to 8: white-green, green, white-orange, blue, white-blue, orange, white-brown, brown.',
      'T568B, pins 1 to 8: white-orange, orange, white-green, blue, white-blue, green, white-brown, brown.',
      'The two standards swap the orange and green pairs. A straight-through cable uses the same standard at both ends; a crossover cable uses one of each.',
    ],
  },
  'ait-lan': {
    title: 'A small LAN for the lab',
    w: 390,
    h: 194,
    art: LanArt,
    labels: [],
    facts: [
      'Four PCs, 192.168.10.11 to 192.168.10.14, are cabled to one switch.',
      'The switch connects to the router at 192.168.10.1, which is every PC’s default gateway.',
      'All use the mask 255.255.255.0, so they are on the same network.',
    ],
  },
  'ait-dns-records': {
    title: 'DNS records for a school domain',
    w: 350,
    h: 154,
    art: DnsArt,
    labels: [],
    facts: RECORDS.map(([t, n, v, m]) => `${t}: ${n} → ${v} (${m}).`),
  },
  'ait-net-tools': flowSpec('Finding a network fault, step by step', ['ipconfig: do I\nhave an address?', 'ping the\ngateway', 'ping 8.8.8.8:\nInternet by IP', 'ping a name:\nis DNS working?', 'tracert: where do\npackets stop?'], { boxW: 116 }),
  'ait-mis': {
    title: 'Levels of decision and their information systems',
    w: 400,
    h: 178,
    art: MisArt,
    labels: [],
    facts: [
      'Operational staff make daily decisions with transaction processing systems (TPS).',
      'Tactical, middle managers use management information systems (MIS) and their regular reports.',
      'Strategic, top managers use decision support systems (DSS) and executive information systems (EIS) for long-term decisions.',
    ],
  },
  'ait-context': {
    title: 'A context diagram for a stock system',
    w: 400,
    h: 196,
    art: ContextArt,
    labels: [],
    facts: [
      'The stock system is one process in the middle.',
      'Customer sends purchases and receives a receipt; Supplier receives orders and sends invoices.',
      'Manager receives stock reports and sends prices; Bank receives payments and sends confirmations.',
    ],
  },
  'ait-fact-finding': columnsSpec('Fact-finding methods', [
    { head: 'Interview', items: ['Detail, follow-up', 'Takes time', 'Few people'] },
    { head: 'Questionnaire', items: ['Many people', 'Quick to analyse', 'Short answers'] },
    { head: 'Observation', items: ['Real work seen', 'People may act', 'differently'] },
    { head: 'Documents', items: ['Exact data used', 'Forms, receipts', 'Reports'] },
  ], { colW: 98 }),
  'ait-payback': {
    title: 'Finding the payback period, to scale',
    w: 370,
    h: 204,
    art: PaybackArt,
    labels: [],
    facts: [
      'The system costs 5 000 000 FCFA (the dashed line).',
      'Total savings reach 1, 3, 5.5 and 8 million FCFA after years 1 to 4.',
      'The savings line crosses the cost line at about 2.8 years: the payback period.',
    ],
  },
  'ait-files-dbms': columnsSpec('Separate files or one database', [
    { head: 'File processing', items: ['Each office its own files', 'Data repeated (redundancy)', 'Copies disagree', 'Programs tied to files'] },
    { head: 'Database (DBMS)', items: ['Data stored once', 'Shared by all offices', 'Security, integrity', 'Backup, concurrency'] },
  ], { colW: 156 }),
  'ait-schema': {
    title: 'Tables and relationships for a school canteen',
    w: 400,
    h: 170,
    art: SchemaArt,
    labels: [],
    facts: [
      'STUDENT and MEAL each have a primary key; PURCHASE has its own key and two foreign keys.',
      'One student makes many purchases, and one meal is bought many times: two one-to-many relationships.',
      'The bar marks the "one" end and the crow’s foot the "many" end.',
    ],
  },
  'ait-three-level': {
    title: 'The three levels of a database',
    w: 400,
    h: 196,
    art: ThreeLevelArt,
    labels: [],
    facts: [
      'The external level holds each user’s view: a teacher sees marks, the bursar fees, a student their own results.',
      'The conceptual level holds all the data and relationships; the internal level holds the files, indexes and storage.',
      'Logical data independence protects the views when the conceptual level changes; physical data independence protects the conceptual level when storage changes.',
    ],
  },
  'ait-db-controls': columnsSpec('Database controls', [
    { head: 'Index', items: ['Faster searches', 'Unique: no repeats', 'Slower inserts'] },
    { head: 'Validation', items: ['Between 0 And 20', 'Required field', 'Input mask'] },
    { head: 'Access', items: ['User accounts', 'GRANT, REVOKE', 'Views'] },
    { head: 'Backup', items: ['Regular copies', 'Test restoring', 'Keep off site'] },
  ], { colW: 98 }),
  'ait-sheet-functions': {
    title: 'Nested IF, RANK and COUNTIF in a mark sheet',
    w: 330,
    h: 168,
    art: SheetArt,
    labels: [],
    facts: [
      'C2 holds a nested IF: 16 or more gives A, 14 or more B, 10 or more C, otherwise F.',
      'D2 holds RANK, with $ signs so the range stays fixed when the formula is copied down.',
      'Ngwa 17 is A and first, Fon 15 is B and second, Bih 12 is C and third, Akwi 8 is F and fourth; COUNTIF finds 3 marks of 10 or more.',
    ],
  },
  'ait-pivot': {
    title: 'A pivot table summarises sales',
    w: 380,
    h: 136,
    art: PivotArt,
    labels: [],
    facts: [
      'The sales table lists six sales by region and month, in thousands of FCFA.',
      'The pivot table puts Region in the rows, Month in the columns and the sum of Amount in the values.',
      'Littoral sold 180 in January and 150 in February; Centre 90 and 120; the grand total is 540.',
    ],
  },
  'ait-html-form': {
    title: 'A web form and the HTML for each control',
    w: 350,
    h: 214,
    art: FormArt,
    labels: [],
    facts: FORM_TAGS.map(([l, , t]) => `${l || 'The button'}: ${t}`),
  },
  'ait-get-post': columnsSpec('GET and POST', [
    { head: 'GET', items: ['Data in the address', '/search?q=biology', 'Can be bookmarked', 'For searches'] },
    { head: 'POST', items: ['Data in the request body', 'Not in the address', 'Use with HTTPS', 'For personal data'] },
  ], { colW: 160 }),
  'ait-simulation': flowSpec('Building and using a simulation', ['Define the\npurpose', 'Choose variables,\nrules, assumptions', 'Build the\nmodel', 'Validate it with\nreal data', 'Run what-if\nexperiments', 'Improve the model\nand run again'], { boxW: 116 }),
  'ait-sim-sheet': {
    title: 'A queue at the bursar, simulated in a spreadsheet',
    w: 340,
    h: 196,
    art: QueueArt,
    labels: [],
    facts: [
      'Each minute 0, 1 or 2 students arrive at random; the cashier serves one a minute when anyone is waiting.',
      'The queue is the previous queue plus arrivals minus those served: here 1, 0, 1, 1, 2, 1.',
      'Each press of F9 gives a new random run, so the model is run many times.',
    ],
  },
  'ait-expert-system': {
    title: 'The parts of an expert system',
    w: 400,
    h: 192,
    art: ExpertArt,
    labels: [],
    facts: [
      'The user talks to the system through the user interface.',
      'The inference engine applies the rules in the knowledge base to the facts given.',
      'The explanation facility shows how a conclusion was reached; a knowledge engineer builds the knowledge base from human experts.',
    ],
  },
  'ait-ml': flowSpec('Supervised machine learning', ['Collect labelled\nexamples', 'Split: training\nand test sets', 'Train the model\non training data', 'Test on unseen\ndata: accuracy', 'Use it on\nnew cases', 'Check for bias\nand retrain'], { boxW: 116 }),
  'ait-changeover': {
    title: 'Four ways to change over to a new system',
    w: 390,
    h: 202,
    art: ChangeoverArt,
    labels: [],
    facts: [
      'Direct: the old system stops and the new one starts at the same moment.',
      'Parallel: both run together for a time.',
      'Phased: each part of the system moves over at a different time.',
      'Pilot: one branch changes first, the others later.',
    ],
  },
  'ait-prototype': cycleSpec('Evolutionary prototyping', ['Build a\nprototype', 'Users try it', 'Collect\nfeedback', 'Improve the\nprototype']),
  'ait-gce': columnsSpec('GCE A Level ICT (0796), 2026', [
    { head: 'Paper 1', items: ['Multiple choice', '1½ hours', 'Tuesday 9 June'] },
    { head: 'Paper 2', items: ['Scenarios, theory', '2½ hours', 'Tuesday 9 June'] },
    { head: 'Practical', items: ['At the computer', '7 to 9 May', 'Before the papers'] },
  ], { colW: 112 }),
  'ait-gantt': {
    title: 'A Gantt chart and its critical path',
    w: 380,
    h: 188,
    art: GanttArt,
    labels: [],
    facts: [
      'A analysis 2 weeks, then B design 3 weeks, then C build 4 weeks and D user guide 2 weeks side by side, then E testing 1 week.',
      'The longest chain, A, B, C, E, takes 10 weeks: the critical path, in red.',
      'D can slip by 2 weeks without delaying the project.',
    ],
  },
};
