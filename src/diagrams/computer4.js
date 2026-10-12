// Form 5 Computer Science figures from the 2026/2027 harmonised scheme of work:
// information systems and the SDLC, the operating system, databases (an ERD, a
// table with keys, an SQL query), arrays, stacks, queues and linked lists, bubble
// sort and binary search, program translation and testing, the OSI and TCP/IP
// models, packets, e-waste and the bodies that run ICT in Cameroon.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';

const O = '#33414d';
const MUTED = '#5a6b78';

function Cell({ x, y, w, h = 20, text, fill = '#ffffff', bold, size = 9 }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} fill={fill} stroke={O} strokeWidth={0.7} />
      <Txt x={x + w / 2} y={y + h / 2 + 3.5} size={size} weight={bold ? '700' : '500'}>
        {text}
      </Txt>
    </G>
  );
}
function Arrow({ x1, y1, x2, y2, c = MUTED }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={1.3} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

// ---------- an entity-relationship diagram for a school ----------
function Entity({ x, y, name, attrs }) {
  const w = 104;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={22} fill="#e6eef8" stroke={O} strokeWidth={1.1} />
      <Txt x={x + w / 2} y={y + 15} size={10} weight="700">
        {name}
      </Txt>
      <Rect x={x} y={y + 22} width={w} height={attrs.length * 15 + 6} fill="#ffffff" stroke={O} strokeWidth={1.1} />
      {attrs.map((a, i) => (
        <Txt key={a} x={x + 6} y={y + 37 + i * 15} size={8.5} anchor="start" weight={/PK|FK/.test(a) ? '700' : '500'}>
          {a}
        </Txt>
      ))}
    </G>
  );
}
// "one" end: a single bar; "many" end: a crow's foot.
function OneEnd({ x, y, dir }) {
  return <Line x1={x + dir * 8} y1={y - 6} x2={x + dir * 8} y2={y + 6} stroke={O} strokeWidth={1.3} />;
}
function ManyEnd({ x, y, dir }) {
  return <Path d={`M${x + dir * 10} ${y} L${x} ${y - 7} M${x + dir * 10} ${y} L${x} ${y} M${x + dir * 10} ${y} L${x} ${y + 7}`} stroke={O} strokeWidth={1.3} fill="none" />;
}
function ErdArt() {
  return (
    <G>
      <Entity x={6} y={10} name="CLASS" attrs={['ClassID (PK)', 'ClassName', 'Teacher']} />
      <Entity x={160} y={10} name="STUDENT" attrs={['StudentID (PK)', 'Name', 'ClassID (FK)']} />
      <Entity x={160} y={118} name="ENROLMENT" attrs={['StudentID (FK)', 'SubjectID (FK)', 'Mark']} />
      <Entity x={314} y={118} name="SUBJECT" attrs={['SubjectID (PK)', 'SubjectName']} />
      {/* class 1 - many students */}
      <Line x1={110} y1={42} x2={160} y2={42} stroke={O} strokeWidth={1.3} />
      <OneEnd x={110} y={42} dir={1} />
      <ManyEnd x={160} y={42} dir={-1} />
      <Txt x={135} y={35} size={8} italic>
        has
      </Txt>
      {/* student 1 - many enrolments */}
      <Line x1={212} y1={83} x2={212} y2={118} stroke={O} strokeWidth={1.3} />
      <Line x1={206} y1={91} x2={218} y2={91} stroke={O} strokeWidth={1.3} />
      <Path d="M212 108 L205 118 M212 108 L212 118 M212 108 L219 118" stroke={O} strokeWidth={1.3} fill="none" />
      {/* subject 1 - many enrolments */}
      <Line x1={264} y1={150} x2={314} y2={150} stroke={O} strokeWidth={1.3} />
      <OneEnd x={314} y={150} dir={-1} />
      <ManyEnd x={264} y={150} dir={1} />
      <Txt x={210} y={200} size={8.5} italic>
        ENROLMENT links many students with many subjects
      </Txt>
    </G>
  );
}

// ---------- a table with its keys ----------
function TableArt() {
  const heads = ['StudentID', 'Name', 'ClassID'];
  const w = [70, 110, 62];
  const x0 = 6;
  const xs = w.reduce((acc, v, i) => [...acc, i ? acc[i - 1] + w[i - 1] : x0], []);
  const rows = [
    ['S001', 'Ngono Marie', 'F5A'],
    ['S002', 'Tabi John', 'F5B'],
    ['S003', 'Fonyuy Paul', 'F5A'],
  ];
  return (
    <G>
      {heads.map((h, i) => (
        <Cell key={h} x={xs[i]} y={22} w={w[i]} text={h} bold fill={i === 0 ? '#fbefd0' : i === 2 ? '#e3f0da' : '#eef1f4'} />
      ))}
      {rows.map((r, ri) => r.map((v, ci) => <Cell key={`${ri}${ci}`} x={xs[ci]} y={42 + ri * 20} w={w[ci]} text={v} />))}
      <Txt x={xs[0] + 35} y={14} size={8.5} weight="700">
        Primary key
      </Txt>
      <Txt x={xs[2] + 31} y={14} size={8.5} weight="700">
        Foreign key
      </Txt>
      <Txt x={130} y={122} size={8.5} italic>
        Each row is a record; each column is a field
      </Txt>
    </G>
  );
}

// ---------- an SQL query and its result ----------
function SqlArt() {
  const code = ['SELECT Name, Mark', 'FROM Results', 'WHERE Mark >= 10', 'ORDER BY Mark DESC;'];
  const res = [
    ['Name', 'Mark'],
    ['Fonyuy Paul', '17'],
    ['Ngono Marie', '14'],
    ['Abena Grace', '11'],
  ];
  return (
    <G>
      <Rect x={6} y={8} width={164} height={88} rx={6} fill="#f4f6f8" stroke={O} strokeWidth={1} />
      {code.map((c, i) => (
        <Txt key={c} x={16} y={30 + i * 18} size={9.5} anchor="start" weight="700">
          {c}
        </Txt>
      ))}
      <Arrow x1={176} y1={52} x2={198} y2={52} />
      {res.map((r, ri) => r.map((v, ci) => <Cell key={`${ri}${ci}`} x={204 + ci * 92} y={14 + ri * 20} w={ci ? 50 : 92} text={v} bold={ri === 0} fill={ri === 0 ? '#e3f0da' : '#ffffff'} />))}
      <Txt x={175} y={118} size={8.5} italic>
        Only marks of 10 or more, highest first
      </Txt>
    </G>
  );
}

// ---------- a 2D array ----------
function ArrayArt() {
  const marks = [
    [12, 15, 9],
    [8, 11, 14],
    [17, 13, 16],
  ];
  const cw = 46;
  return (
    <G>
      {['[0]', '[1]', '[2]'].map((c, i) => (
        <Txt key={c} x={92 + i * cw + cw / 2} y={20} size={9} weight="700" fill={MUTED}>
          {c}
        </Txt>
      ))}
      {['Ngono [0]', 'Tabi [1]', 'Abena [2]'].map((r, i) => (
        <Txt key={r} x={86} y={44 + i * 24} size={9} weight="700" anchor="end" fill={MUTED}>
          {r}
        </Txt>
      ))}
      {marks.map((row, ri) =>
        row.map((v, ci) => <Cell key={`${ri}${ci}`} x={92 + ci * cw} y={28 + ri * 24} w={cw} h={24} text={String(v)} fill={ri === 1 && ci === 2 ? '#fbefd0' : '#ffffff'} />)
      )}
      <Txt x={175} y={116} size={8.5} italic>
        marks[1][2] = 14: row 1, column 2
      </Txt>
      <Txt x={175} y={130} size={8.5} italic>
        Rows are students; columns are tests
      </Txt>
    </G>
  );
}

// ---------- a stack and a queue ----------
function StackQueueArt() {
  const stack = ['Page C', 'Page B', 'Page A'];
  const queue = ['Job 1', 'Job 2', 'Job 3', 'Job 4'];
  return (
    <G>
      <Txt x={60} y={14} size={10} weight="700">
        Stack (LIFO)
      </Txt>
      <Path d="M20 30 L20 128 L100 128 L100 30" stroke={O} strokeWidth={1.4} fill="none" />
      {stack.map((s, i) => (
        <Cell key={s} x={24} y={68 + i * 20} w={72} text={s} fill={i === 0 ? '#fbefd0' : '#e6eef8'} />
      ))}
      <Arrow x1={130} y1={52} x2={104} y2={74} />
      <Txt x={150} y={46} size={8.5} anchor="middle">
        push / pop
      </Txt>
      <Txt x={150} y={58} size={8.5} anchor="middle">
        at the top only
      </Txt>
      <Txt x={300} y={14} size={10} weight="700">
        Queue (FIFO)
      </Txt>
      {queue.map((q, i) => (
        <Cell key={q} x={212 + i * 48} y={60} w={48} text={q} fill={i === 0 ? '#e3f0da' : '#e6eef8'} />
      ))}
      <Arrow x1={212} y1={102} x2={212} y2={84} />
      <Txt x={212} y={116} size={8.5}>
        front: leaves first
      </Txt>
      <Arrow x1={402} y1={102} x2={402} y2={84} />
      <Txt x={386} y={116} size={8.5}>
        rear: joins last
      </Txt>
    </G>
  );
}

// ---------- a linked list ----------
function LinkedArt() {
  const items = ['Abena', 'Ngono', 'Tabi'];
  return (
    <G>
      <Txt x={22} y={22} size={9} weight="700">
        Start
      </Txt>
      <Arrow x1={22} y1={28} x2={22} y2={48} />
      {items.map((t, i) => {
        const x = 8 + i * 120;
        return (
          <G key={t}>
            <Rect x={x} y={50} width={62} height={28} fill="#e6eef8" stroke={O} strokeWidth={1.1} />
            <Txt x={x + 31} y={68} size={9.5} weight="700">
              {t}
            </Txt>
            <Rect x={x + 62} y={50} width={28} height={28} fill="#fbefd0" stroke={O} strokeWidth={1.1} />
            {i < items.length - 1 ? (
              <Arrow x1={x + 76} y1={64} x2={x + 120} y2={64} />
            ) : (
              <Txt x={x + 76} y={68} size={8} weight="700">
                null
              </Txt>
            )}
          </G>
        );
      })}
      <Txt x={175} y={100} size={8.5} italic>
        Each node holds data and a pointer to the next node
      </Txt>
    </G>
  );
}

// ---------- one pass of bubble sort ----------
function BubbleArt() {
  const passes = [
    { label: 'Start', vals: [5, 3, 8, 1], hl: [] },
    { label: 'Compare 5, 3: swap', vals: [3, 5, 8, 1], hl: [0, 1] },
    { label: 'Compare 5, 8: no swap', vals: [3, 5, 8, 1], hl: [1, 2] },
    { label: 'Compare 8, 1: swap', vals: [3, 5, 1, 8], hl: [2, 3] },
  ];
  return (
    <G>
      {passes.map((p, r) => (
        <G key={p.label}>
          <Txt x={8} y={26 + r * 28} size={9} anchor="start" weight={r ? '500' : '700'}>
            {p.label}
          </Txt>
          {p.vals.map((v, i) => (
            <Cell key={i} x={150 + i * 34} y={12 + r * 28} w={34} h={22} text={String(v)} fill={p.hl.includes(i) ? '#fbefd0' : r === 3 && i === 3 ? '#e3f0da' : '#ffffff'} bold={p.hl.includes(i)} />
          ))}
        </G>
      ))}
      <Txt x={150} y={132} size={8.5} italic>
        After pass 1 the largest value, 8, is in place
      </Txt>
    </G>
  );
}

// ---------- binary search ----------
function BinaryArt() {
  const list = [3, 7, 11, 15, 19, 24, 30, 36, 41];
  const steps = [
    { lo: 0, hi: 8, mid: 4, note: 'mid = 19: 30 is larger, look right' },
    { lo: 5, hi: 8, mid: 6, note: 'mid = 30: found' },
  ];
  const cw = 32;
  return (
    <G>
      {list.map((v, i) => (
        <Txt key={i} x={20 + i * cw + cw / 2} y={14} size={8} fill={MUTED}>
          {`[${i}]`}
        </Txt>
      ))}
      {steps.map((s, r) => (
        <G key={r}>
          {list.map((v, i) => (
            <Cell
              key={i}
              x={20 + i * cw}
              y={22 + r * 46}
              w={cw}
              h={22}
              text={String(v)}
              fill={i === s.mid ? (r === 1 ? '#e3f0da' : '#fbefd0') : i < s.lo || i > s.hi ? '#e9edf0' : '#ffffff'}
              bold={i === s.mid}
            />
          ))}
          <Txt x={20} y={58 + r * 46} size={8.5} anchor="start">
            {`Step ${r + 1}: low ${s.lo}, high ${s.hi}, ${s.note}`}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- OSI and TCP/IP ----------
function OsiArt() {
  const osi = ['7 Application', '6 Presentation', '5 Session', '4 Transport', '3 Network', '2 Data link', '1 Physical'];
  const tcp = [
    { name: 'Application', from: 0, to: 2, fill: '#e6eef8' },
    { name: 'Transport', from: 3, to: 3, fill: '#e3f0da' },
    { name: 'Internet', from: 4, to: 4, fill: '#fbefd0' },
    { name: 'Network access', from: 5, to: 6, fill: '#efe6f7' },
  ];
  const h = 20;
  return (
    <G>
      <Txt x={66} y={12} size={9.5} weight="700">
        OSI model
      </Txt>
      <Txt x={226} y={12} size={9.5} weight="700">
        TCP/IP model
      </Txt>
      {osi.map((l, i) => (
        <Cell key={l} x={6} y={18 + i * h} w={120} h={h} text={l} fill={tcp.find((t) => i >= t.from && i <= t.to).fill} />
      ))}
      {tcp.map((t) => (
        <G key={t.name}>
          <Rect x={166} y={18 + t.from * h} width={120} height={(t.to - t.from + 1) * h} fill={t.fill} stroke={O} strokeWidth={0.9} />
          <Txt x={226} y={18 + ((t.from + t.to + 1) * h) / 2 + 3.5} size={9} weight="700">
            {t.name}
          </Txt>
        </G>
      ))}
      <Txt x={146} y={170} size={8.5} italic>
        Each TCP/IP layer does the work of one or more OSI layers
      </Txt>
    </G>
  );
}

// ---------- a data packet ----------
function PacketArt() {
  return (
    <G>
      <Rect x={6} y={20} width={150} height={40} fill="#e6eef8" stroke={O} strokeWidth={1.1} />
      <Rect x={156} y={20} width={130} height={40} fill="#ffffff" stroke={O} strokeWidth={1.1} />
      <Rect x={286} y={20} width={60} height={40} fill="#fbefd0" stroke={O} strokeWidth={1.1} />
      <Txt x={81} y={14} size={9.5} weight="700">
        Header
      </Txt>
      <Txt x={221} y={14} size={9.5} weight="700">
        Payload
      </Txt>
      <Txt x={316} y={14} size={9.5} weight="700">
        Trailer
      </Txt>
      <Txt x={81} y={36} size={8.5}>
        Source and destination
      </Txt>
      <Txt x={81} y={50} size={8.5}>
        IP, packet number
      </Txt>
      <Txt x={221} y={44} size={8.5}>
        Part of the data itself
      </Txt>
      <Txt x={316} y={36} size={8.5}>
        Error check
      </Txt>
      <Txt x={316} y={50} size={8.5}>
        (checksum)
      </Txt>
    </G>
  );
}

export const COMPUTER_4 = {
  'is-components': columnsSpec('The five components of an information system', [
    { head: 'People', items: ['Users, IT staff'] },
    { head: 'Hardware', items: ['Computers, networks'] },
    { head: 'Software', items: ['Programs, database'] },
    { head: 'Data', items: ['Raw facts'] },
    { head: 'Procedures', items: ['Rules to follow'] },
  ], { colW: 96 }),
  'is-functions': flowSpec('What an information system does with data', ['Collect: capture\nthe data', 'Process: calculate,\nsort, check', 'Store: keep it\nsafe for later', 'Distribute: give\nresults to users'], { perRow: 4, boxW: 108 }),
  'sdlc-cycle': cycleSpec('The system development life cycle', ['Feasibility\nstudy', 'Analysis', 'Design', 'Implementation', 'Testing', 'Maintenance'], { boxW: 104, r: 92 }),
  'os-roles': columnsSpec('What the operating system manages', [
    { head: 'Kernel', items: ['Controls the rest'] },
    { head: 'Memory', items: ['Shares out RAM'] },
    { head: 'Processes', items: ['Schedules the CPU'] },
    { head: 'Devices', items: ['Runs the drivers'] },
    { head: 'Files', items: ['Folders, access'] },
  ], { colW: 96 }),
  'erd-school': {
    title: 'An entity-relationship diagram for a school',
    w: 424,
    h: 210,
    art: ErdArt,
    labels: [],
    facts: [
      'Each box is an entity with its attributes; PK marks the primary key and FK a foreign key.',
      'One CLASS has many STUDENTs: the single bar is the "one" end and the crow’s foot is the "many" end.',
      'A student takes many subjects and a subject is taken by many students, a many-to-many relationship. It is broken into two one-to-many relationships through the link entity ENROLMENT, which also stores the Mark.',
    ],
  },
  'db-table': {
    title: 'A table with its primary and foreign keys',
    w: 256,
    h: 130,
    art: TableArt,
    labels: [],
    facts: [
      'StudentID is the primary key: it is different for every student, so it identifies one record.',
      'ClassID is a foreign key: it is the primary key of the CLASS table, and it links each student to a class.',
      'Each row is one record (one student) and each column is one field.',
    ],
  },
  'sql-query': {
    title: 'An SQL query and the table it returns',
    w: 356,
    h: 126,
    art: SqlArt,
    labels: [],
    facts: [
      'SELECT names the fields to show: Name and Mark.',
      'FROM names the table: Results.',
      'WHERE keeps only the records that meet the condition: a mark of 10 or more.',
      'ORDER BY Mark DESC sorts the result from the highest mark to the lowest.',
    ],
  },
  'validation-checks': columnsSpec('Validation checks and verification', [
    { head: 'Range', items: ['Mark is 0 to 20'] },
    { head: 'Type', items: ['Age is a number'] },
    { head: 'Length', items: ['Phone has 9 digits'] },
    { head: 'Presence', items: ['Name is not empty'] },
    { head: 'Verification', items: ['Double entry', 'Proofreading'] },
  ], { colW: 96 }),
  'array-2d': {
    title: 'A two-dimensional array of marks',
    w: 350,
    h: 138,
    art: ArrayArt,
    labels: [],
    facts: [
      'A 2D array stores values in rows and columns under one name, here marks.',
      'Each row is a student and each column is a test; indexes here start at 0.',
      'marks[1][2] is row 1 (Tabi), column 2 (test 3): the value 14.',
    ],
  },
  'stack-queue': {
    title: 'A stack and a queue',
    w: 430,
    h: 136,
    art: StackQueueArt,
    labels: [],
    facts: [
      'A stack is last in, first out: items are pushed onto and popped off the top only, like the pages kept by a browser’s Back button.',
      'A queue is first in, first out: items join at the rear and leave from the front, like documents waiting for a printer.',
    ],
  },
  'linked-list': {
    title: 'A linked list',
    w: 352,
    h: 108,
    art: LinkedArt,
    labels: [],
    facts: [
      'The start pointer shows where the list begins.',
      'Each node holds an item of data and a pointer to the next node, so the items stay in order without being stored side by side.',
      'The last node’s pointer is null, which marks the end of the list.',
    ],
  },
  'bubble-sort': {
    title: 'The first pass of a bubble sort',
    w: 300,
    h: 140,
    art: BubbleArt,
    labels: [],
    facts: [
      'Bubble sort compares each pair of neighbours and swaps them if they are in the wrong order.',
      'In the first pass, 5 and 3 swap, 5 and 8 stay, and 8 and 1 swap, so the largest value, 8, reaches the end.',
      'The passes repeat until a whole pass makes no swap.',
    ],
  },
  'binary-search': {
    title: 'Binary search for 30 in a sorted list',
    w: 330,
    h: 126,
    art: BinaryArt,
    labels: [],
    facts: [
      'Binary search only works on a sorted list.',
      'Step 1: the middle item, at index 4, is 19. 30 is larger, so the left half is thrown away.',
      'Step 2: the middle of what is left, at index 6, is 30, so the item is found in two comparisons.',
    ],
  },
  'compile-chain': flowSpec('From source code to a running program', ['Source code\nwritten by you', 'Compiler or\ninterpreter', 'Object code\n(machine code)', 'Linker and\nloader', 'The CPU runs\nthe instructions'], { boxW: 104 }),
  'box-testing': columnsSpec('White-box and black-box testing', [
    { head: 'White-box', items: ['Tester sees the code', 'Tests every path and branch', 'Done by programmers'] },
    { head: 'Black-box', items: ['Code is hidden', 'Checks outputs for inputs', 'Done by testers and users'] },
  ], { colW: 150 }),
  'osi-tcpip': {
    title: 'The OSI and TCP/IP models',
    w: 292,
    h: 178,
    art: OsiArt,
    labels: [],
    facts: [
      'The OSI model has seven layers: application, presentation, session, transport, network, data link and physical.',
      'The TCP/IP model used on the Internet has four: application (OSI layers 5 to 7), transport (layer 4), internet (layer 3) and network access (layers 1 and 2).',
    ],
  },
  'packet-parts': {
    title: 'The parts of a data packet',
    w: 352,
    h: 66,
    art: PacketArt,
    labels: [],
    facts: [
      'The header holds the source and destination IP addresses and the packet number, so packets can be routed and put back in order.',
      'The payload is the piece of the actual data being sent.',
      'The trailer holds an error check, such as a checksum, so damaged packets can be detected and sent again.',
    ],
  },
  'packet-switching': flowSpec('Packet switching', ['The message is split\ninto numbered packets', 'Each packet may take\na different route', 'Routers forward each\npacket to the next hop', 'Packets arrive, perhaps\nout of order', 'They are put back\nin order by number'], { boxW: 118 }),
  'ewaste-steps': flowSpec('Dealing with old computers and phones', ['Reduce: use devices\nfor longer', 'Repair or\nrefurbish', 'Donate working\ndevices', 'Recycle with an\napproved collector', 'Never burn or dump:\nlead and mercury poison'], { boxW: 118 }),
  'ict-bodies': columnsSpec('Who governs ICT in Cameroon', [
    { head: 'MINPOSTEL', items: ['Telecoms ministry', 'Sets ICT policy'] },
    { head: 'ART', items: ['Telecoms regulator', 'Regulates operators'] },
    { head: 'ANTIC', items: ['National ICT agency', 'Leads cyber security', 'Runs the .cm domain'] },
  ], { colW: 132 }),
  'db-project': flowSpec('A database project from brief to results', ['Read the brief:\nwhat is needed?', 'Draw the ERD:\nentities, keys', 'Create the tables\nwith data types', 'Enter data with\nvalidation checks', 'Write queries\nfor the outputs', 'Present the report\nand evaluate'], { boxW: 112 }),
};
