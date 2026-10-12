// Form 4 Computer Science figures from the 2026/2027 harmonised scheme of work:
// logic gates and truth tables, the fetch-decode-execute cycle, memory and
// storage, loops, translators, errors and test data, mail merge, spreadsheet
// functions, the Internet of Things, checking facts, cyber threats, networks and
// IP addresses.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec } from './charts';

const O = '#33414d';

// ---------- logic gates ----------
function Gate({ x, y, kind, named = true }) {
  const body = {
    AND: `M${x} ${y - 14} L${x + 16} ${y - 14} A14 14 0 0 1 ${x + 16} ${y + 14} L${x} ${y + 14} Z`,
    OR: `M${x - 2} ${y - 14} Q${x + 22} ${y - 14} ${x + 34} ${y} Q${x + 22} ${y + 14} ${x - 2} ${y + 14} Q${x + 8} ${y} ${x - 2} ${y - 14} Z`,
    NOT: `M${x} ${y - 13} L${x + 26} ${y} L${x} ${y + 13} Z`,
  };
  const base = kind === 'NAND' ? 'AND' : kind === 'NOR' ? 'OR' : kind;
  const bubble = kind === 'NOT' || kind === 'NAND' || kind === 'NOR';
  const outX = base === 'AND' ? x + 30 : base === 'OR' ? x + 34 : x + 26;
  return (
    <G>
      {kind === 'NOT' ? (
        <Line x1={x - 14} y1={y} x2={x} y2={y} stroke={O} strokeWidth={1.2} />
      ) : (
        <G>
          <Line x1={x - 14} y1={y - 7} x2={x + 2} y2={y - 7} stroke={O} strokeWidth={1.2} />
          <Line x1={x - 14} y1={y + 7} x2={x + 2} y2={y + 7} stroke={O} strokeWidth={1.2} />
        </G>
      )}
      <Path d={body[base]} fill="#e6eef8" stroke={O} strokeWidth={1.3} />
      {bubble && <Circle cx={outX + 4} cy={y} r={4} fill="#ffffff" stroke={O} strokeWidth={1.2} />}
      <Line x1={outX + (bubble ? 8 : 0)} y1={y} x2={outX + 22} y2={y} stroke={O} strokeWidth={1.2} />
      {named && (
        <Txt x={x - 24} y={y + 4} size={9.5} weight="700" anchor="end">
          {kind}
        </Txt>
      )}
    </G>
  );
}

// X = (A AND B) OR (NOT C), drawn as gates with its truth table
function CircuitArt() {
  const W = { stroke: O, strokeWidth: 1.2, fill: 'none' };
  const heads = ['A', 'B', 'C', 'A AND B', 'NOT C', 'X'];
  const cw = [22, 22, 22, 48, 40, 26];
  const tx = 262;
  const cx = cw.reduce((acc, w, i) => [...acc, i ? acc[i - 1] + cw[i - 1] : tx], []);
  const rows = [];
  for (let n = 0; n < 8; n += 1) {
    const A = (n >> 2) & 1;
    const B = (n >> 1) & 1;
    const C = n & 1;
    const ab = A & B;
    const nc = 1 - C;
    rows.push([A, B, C, ab, nc, ab | nc]);
  }
  return (
    <G>
      {[
        ['A', 30],
        ['B', 44],
        ['C', 100],
      ].map(([t, y]) => (
        <Txt key={t} x={28} y={y + 4} size={10} weight="700" anchor="end">
          {t}
        </Txt>
      ))}
      <Gate x={60} y={37} kind="AND" named={false} />
      <Gate x={60} y={100} kind="NOT" named={false} />
      <Path d="M112 37 L140 37 L140 61 L156 61" {...W} />
      <Path d="M108 100 L140 100 L140 75 L156 75" {...W} />
      <Gate x={170} y={68} kind="OR" named={false} />
      <Txt x={232} y={72} size={10} weight="700" anchor="start">
        X
      </Txt>
      <Txt x={124} y={30} size={8} italic>
        A AND B
      </Txt>
      <Txt x={124} y={114} size={8} italic>
        NOT C
      </Txt>
      <Txt x={130} y={146} size={9} weight="700">
        X = (A AND B) OR (NOT C)
      </Txt>
      {heads.map((h, c) => (
        <G key={h}>
          <Rect x={cx[c]} y={6} width={cw[c]} height={17} fill={c < 3 ? '#fbefd0' : c === 5 ? '#e3f0da' : '#e6eef8'} stroke={O} strokeWidth={0.8} />
          <Txt x={cx[c] + cw[c] / 2} y={18} size={8} weight="700">
            {h}
          </Txt>
        </G>
      ))}
      {rows.map((r, i) =>
        r.map((v, c) => (
          <G key={`${i}-${c}`}>
            <Rect x={cx[c]} y={23 + i * 16} width={cw[c]} height={16} fill="#ffffff" stroke={O} strokeWidth={0.6} />
            <Txt x={cx[c] + cw[c] / 2} y={35 + i * 16} size={9} weight={c === 5 ? '700' : '500'}>
              {v}
            </Txt>
          </G>
        ))
      )}
    </G>
  );
}
function GatesArt() {
  const kinds = ['AND', 'OR', 'NOT', 'NAND', 'NOR'];
  const rows = [
    [0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 0, 0],
  ];
  const heads = ['A', 'B', 'AND', 'OR', 'NOT A', 'NAND', 'NOR'];
  const tx = 168;
  const cw = 34;
  return (
    <G>
      {kinds.map((k, i) => (
        <Gate key={k} x={60} y={24 + i * 38} kind={k} />
      ))}
      {heads.map((h, c) => (
        <G key={h}>
          <Rect x={tx + c * cw} y={10} width={cw} height={20} fill={c < 2 ? '#fbefd0' : '#e3f0da'} stroke={O} strokeWidth={0.8} />
          <Txt x={tx + c * cw + cw / 2} y={24} size={8.5} weight="700">
            {h}
          </Txt>
        </G>
      ))}
      {rows.map((r, i) =>
        r.map((v, c) => (
          <G key={`${i}-${c}`}>
            <Rect x={tx + c * cw} y={30 + i * 20} width={cw} height={20} fill="#ffffff" stroke={O} strokeWidth={0.6} />
            <Txt x={tx + c * cw + cw / 2} y={44 + i * 20} size={9.5}>
              {v}
            </Txt>
          </G>
        ))
      )}
      <Txt x={tx + 119} y={130} size={8.5} italic>
        1 = true (on), 0 = false (off)
      </Txt>
    </G>
  );
}

// ---------- a spreadsheet with IF and COUNTIF ----------
function SheetArt() {
  const cols = ['', 'A', 'B', 'C'];
  const widths = [24, 86, 56, 150];
  const rows = [
    ['1', 'Name', 'Mark /20', 'Result'],
    ['2', 'Ngono', '14', 'Pass'],
    ['3', 'Tabi', '8', 'Fail'],
    ['4', 'Fonyuy', '11', 'Pass'],
    ['5', 'Abena', '9.5', 'Fail'],
    ['6', 'Passes:', '', '2'],
  ];
  const xs = widths.reduce((acc, w, i) => [...acc, (acc[i - 1] ?? 4) + (i ? widths[i - 1] : 0)], []);
  return (
    <G>
      <Rect x={4} y={4} width={316} height={20} fill="#ffffff" stroke={O} strokeWidth={0.8} />
      <Txt x={10} y={18} size={9} anchor="start" weight="700">
        fx
      </Txt>
      <Txt x={30} y={18} size={9} anchor="start">
        {'C2: =IF(B2>=10,"Pass","Fail")'}
      </Txt>
      {cols.map((c, i) => (
        <G key={`h${i}`}>
          <Rect x={xs[i]} y={30} width={widths[i]} height={18} fill="#eef1f4" stroke={O} strokeWidth={0.6} />
          <Txt x={xs[i] + widths[i] / 2} y={43} size={9} weight="700">
            {c}
          </Txt>
        </G>
      ))}
      {rows.map((r, ri) =>
        r.map((v, ci) => (
          <G key={`${ri}-${ci}`}>
            <Rect x={xs[ci]} y={48 + ri * 18} width={widths[ci]} height={18} fill={ci === 0 ? '#eef1f4' : ri === 0 ? '#fbefd0' : '#ffffff'} stroke={O} strokeWidth={0.6} />
            <Txt x={xs[ci] + widths[ci] / 2} y={61 + ri * 18} size={9} weight={ri === 0 || ci === 0 ? '700' : '500'}>
              {v}
            </Txt>
          </G>
        ))
      )}
      <Txt x={162} y={172} size={9} italic>
        {'C6: =COUNTIF(C2:C5,"Pass") gives 2'}
      </Txt>
    </G>
  );
}

// ---------- an IPv4 address ----------
function IpArt() {
  const parts = [
    ['192', '11000000'],
    ['168', '10101000'],
    ['1', '00000001'],
    ['10', '00001010'],
  ];
  return (
    <G>
      {parts.map(([d, b], i) => (
        <G key={i}>
          <Rect x={10 + i * 78} y={14} width={66} height={30} rx={4} fill="#e6eef8" stroke={O} strokeWidth={1} />
          <Txt x={43 + i * 78} y={34} size={13} weight="700">
            {d}
          </Txt>
          {i < 3 && (
            <Txt x={80 + i * 78} y={36} size={14} weight="700">
              .
            </Txt>
          )}
          <Txt x={43 + i * 78} y={62} size={8.5}>
            {b}
          </Txt>
        </G>
      ))}
      <Txt x={162} y={86} size={9} italic>
        Four numbers from 0 to 255, each stored in 8 bits: 32 bits in all
      </Txt>
    </G>
  );
}

// ---------- a nested IF as a flowchart ----------
function Diamond({ x, y, text }) {
  return (
    <G>
      <Path d={`M${x} ${y - 24} L${x + 52} ${y} L${x} ${y + 24} L${x - 52} ${y} Z`} fill="#fbefd0" stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={y + 3.5} size={9.5} weight="700">
        {text}
      </Txt>
    </G>
  );
}
function Card({ x, y, w = 104, text, fill = '#e6eef8', round }) {
  return (
    <G>
      <Rect x={x - w / 2} y={y - 14} width={w} height={28} rx={round ? 14 : 4} fill={fill} stroke={O} strokeWidth={1.2} />
      <Txt x={x} y={y + 3.5} size={9.5} weight={round ? '700' : '500'}>
        {text}
      </Txt>
    </G>
  );
}
function Link({ d, label, lx, ly }) {
  return (
    <G>
      <Path d={d} fill="none" stroke="#5a6b78" strokeWidth={1.3} />
      {!!label && (
        <Txt x={lx} y={ly} size={8.5} weight="700" fill="#5a6b78">
          {label}
        </Txt>
      )}
    </G>
  );
}
function Tip({ x, y, dir = 'down' }) {
  const d = dir === 'down' ? `M${x - 4} ${y - 6} L${x} ${y} L${x + 4} ${y - 6} Z` : `M${x - 6} ${y - 4} L${x} ${y} L${x - 6} ${y + 4} Z`;
  return <Path d={d} fill="#5a6b78" />;
}
function NestedIfArt() {
  return (
    <G>
      <Card x={90} y={20} text="Start" round fill="#e3f0da" />
      <Link d="M90 34 L90 50" />
      <Tip x={90} y={50} />
      <Card x={90} y={64} text="INPUT mark" />
      <Link d="M90 78 L90 94" />
      <Tip x={90} y={94} />
      <Diamond x={90} y={118} text="mark >= 15?" />
      <Link d="M142 118 L222 118" label="Yes" lx={182} ly={112} />
      <Tip x={222} y={118} dir="right" />
      <Card x={276} y={118} w={108} text="OUTPUT Distinction" fill="#e3f0da" />
      <Link d="M90 142 L90 160" label="No" lx={102} ly={154} />
      <Tip x={90} y={160} />
      <Diamond x={90} y={184} text="mark >= 10?" />
      <Link d="M142 184 L222 184" label="Yes" lx={182} ly={178} />
      <Tip x={222} y={184} dir="right" />
      <Card x={276} y={184} w={108} text="OUTPUT Pass" fill="#e3f0da" />
      <Link d="M90 208 L90 226" label="No" lx={102} ly={220} />
      <Tip x={90} y={226} />
      <Card x={90} y={240} text="OUTPUT Fail" fill="#f8e3df" />
      <Link d="M330 118 L344 118 L344 266 L90 266 M330 184 L344 184 M90 254 L90 276" />
      <Tip x={90} y={276} />
      <Txt x={276} y={155} size={8.5} italic>
        Only one output is ever given
      </Txt>
      <Card x={90} y={290} text="Stop" round fill="#e3f0da" />
    </G>
  );
}

// ---------- a trace table for a FOR loop ----------
function TraceArt() {
  const code = [['total ← 0', 0], ['FOR i ← 1 TO 4', 0], ['total ← total + i', 1], ['NEXT i', 0], ['OUTPUT total', 0]];
  const heads = ['Line', 'i', 'total', 'Output'];
  const rows = [
    ['1', '', '0', ''],
    ['2, 3', '1', '1', ''],
    ['2, 3', '2', '3', ''],
    ['2, 3', '3', '6', ''],
    ['2, 3', '4', '10', ''],
    ['5', '', '', '10'],
  ];
  const tx = 168;
  const cw = [44, 34, 44, 50];
  const cx = cw.reduce((acc, w, i) => [...acc, i ? acc[i - 1] + cw[i - 1] : tx], []);
  return (
    <G>
      <Rect x={4} y={8} width={152} height={100} rx={6} fill="#f4f6f8" stroke={O} strokeWidth={1} />
      {code.map(([c, ind], i) => (
        <G key={i}>
          <Txt x={14} y={28 + i * 18} size={8.5} anchor="start" fill="#5a6b78">
            {i + 1}
          </Txt>
          <Txt x={28 + ind * 16} y={28 + i * 18} size={9} anchor="start" weight="700">
            {c}
          </Txt>
        </G>
      ))}
      {heads.map((h, c) => (
        <G key={h}>
          <Rect x={cx[c]} y={8} width={cw[c]} height={18} fill="#fbefd0" stroke={O} strokeWidth={0.8} />
          <Txt x={cx[c] + cw[c] / 2} y={21} size={9} weight="700">
            {h}
          </Txt>
        </G>
      ))}
      {rows.map((r, i) =>
        r.map((v, c) => (
          <G key={`${i}-${c}`}>
            <Rect x={cx[c]} y={26 + i * 17} width={cw[c]} height={17} fill="#ffffff" stroke={O} strokeWidth={0.6} />
            <Txt x={cx[c] + cw[c] / 2} y={38 + i * 17} size={9}>
              {v}
            </Txt>
          </G>
        ))
      )}
      <Txt x={84} y={128} size={8.5} italic>
        One row each time a value changes
      </Txt>
    </G>
  );
}

// ---------- a short Python program ----------
function PythonArt() {
  const lines = [
    ['mark = int(input("Mark: "))', 0],
    ['if mark >= 10:', 0],
    ['print("Pass")', 1],
    ['else:', 0],
    ['print("Fail")', 1],
  ];
  return (
    <G>
      <Rect x={4} y={6} width={212} height={104} rx={6} fill="#f4f6f8" stroke={O} strokeWidth={1} />
      <Rect x={28} y={52} width={20} height={13} fill="#e3f0da" />
      <Rect x={28} y={88} width={20} height={13} fill="#e3f0da" />
      {lines.map(([t, ind], i) => (
        <G key={i}>
          <Txt x={14} y={26 + i * 18} size={8.5} anchor="start" fill="#5a6b78">
            {i + 1}
          </Txt>
          <Txt x={28 + ind * 22} y={26 + i * 18} size={9.5} anchor="start" weight="700">
            {t}
          </Txt>
        </G>
      ))}
      <Line x1={124} y1={40} x2={226} y2={40} stroke="#5a6b78" strokeWidth={0.9} />
      <Txt x={230} y={43} size={8.5} anchor="start">
        A colon starts a block
      </Txt>
      <Line x1={126} y1={59} x2={226} y2={70} stroke="#5a6b78" strokeWidth={0.9} />
      <Txt x={230} y={73} size={8.5} anchor="start">
        Indented 4 spaces: inside the block
      </Txt>
      <Line x1={200} y1={22} x2={226} y2={16} stroke="#5a6b78" strokeWidth={0.9} />
      <Txt x={230} y={19} size={8.5} anchor="start">
        int() turns the text into a number
      </Txt>
    </G>
  );
}

export const COMPUTER_3 = {
  'logic-gates': {
    title: 'Logic gates and their truth tables',
    w: 410,
    h: 196,
    art: GatesArt,
    labels: [],
    facts: [
      'AND: the output is 1 only when both inputs are 1.',
      'OR: the output is 1 when either input, or both, is 1.',
      'NOT: one input; the output is the opposite of the input.',
      'NAND is AND followed by NOT: the output is 0 only when both inputs are 1.',
      'NOR is OR followed by NOT: the output is 1 only when both inputs are 0.',
    ],
  },
  'fde-cycle': cycleSpec('The fetch-decode-execute cycle', ['Fetch: the instruction\nat the address in the PC', 'The PC goes up by 1\nto the next instruction', 'Decode: the control unit\nworks out the instruction', 'Execute: the ALU or other\nparts carry it out'], { boxW: 124 }),
  'memory-storage': columnsSpec('Main memory and secondary storage', [
    { head: 'RAM', items: ['Read and write', 'Volatile: lost when off', 'Holds programs in use', 'Fast'] },
    { head: 'ROM', items: ['Read only', 'Non-volatile', 'Holds start-up program', 'Small'] },
    { head: 'Secondary', items: ['Hard disk, SSD, flash', 'Non-volatile', 'Keeps files for good', 'Large, slower'] },
  ], { colW: 122 }),
  'loop-types': columnsSpec('Three kinds of loop', [
    { head: 'FOR ... NEXT', items: ['Count-controlled', 'Runs a fixed number of times', 'e.g. FOR i ← 1 TO 10'] },
    { head: 'WHILE ... ENDWHILE', items: ['Pre-test loop', 'Checks the condition first', 'May run zero times'] },
    { head: 'REPEAT ... UNTIL', items: ['Post-test loop', 'Checks the condition last', 'Always runs at least once'] },
  ], { colW: 132 }),
  translators: columnsSpec('Program translators', [
    { head: 'Compiler', items: ['Translates the whole program', 'Makes a file that runs alone', 'Errors listed at the end', 'Fast to run'] },
    { head: 'Interpreter', items: ['Translates line by line', 'Stops at the first error', 'Good for testing', 'Slower to run'] },
    { head: 'Assembler', items: ['Translates assembly code', 'Gives machine code', 'One line per instruction'] },
  ], { colW: 138 }),
  'error-types': columnsSpec('Kinds of programming error', [
    { head: 'Syntax error', items: ['Breaks the language rules', 'e.g. prnt("Hi")', 'Program will not run'] },
    { head: 'Runtime error', items: ['Happens while running', 'e.g. dividing by zero', 'Program crashes'] },
    { head: 'Logic error', items: ['Program runs', 'The answer is wrong', 'e.g. > instead of >='] },
  ], { colW: 132 }),
  'test-data': columnsSpec('Test data for a mark from 0 to 20', [
    { head: 'Normal', items: ['Ordinary valid values', 'e.g. 7, 12, 15', 'Should be accepted'] },
    { head: 'Boundary', items: ['At the edges', 'e.g. 0 and 20', 'Should be accepted'] },
    { head: 'Erroneous', items: ['Invalid values', 'e.g. -3, 25, "ten"', 'Should be rejected'] },
  ], { colW: 132 }),
  'mail-merge': flowSpec('Mail merge: one letter, many names', ['Write the main\ndocument (letter)', 'Prepare the data\nsource (names list)', 'Insert merge fields\n«Name», «Class»', 'Preview each\nmerged letter', 'Finish: print or\nsave all letters']),
  'countif-sheet': {
    title: 'IF and COUNTIF in a mark sheet',
    w: 324,
    h: 180,
    art: SheetArt,
    labels: [],
    facts: [
      'In cell C2 the formula =IF(B2>=10,"Pass","Fail") tests the mark in B2: if it is 10 or more it shows Pass, otherwise Fail.',
      'The formula is copied down to C5, so each row tests its own mark.',
      'In C6, =COUNTIF(C2:C5,"Pass") counts how many cells in the range say Pass: 2.',
    ],
  },
  'iot-system': flowSpec('An Internet of Things system on a farm', ['Sensor measures\nsoil moisture', 'Microcontroller\ncompares the value', 'Data is sent over\nthe Internet', 'The cloud stores\nand analyses it', 'Phone app shows it;\nthe pump switches on']),
  'fact-check': flowSpec('Checking information before you share it', ['Who made it?\nCheck the source', 'When? Check\nthe date', 'Is there real\nevidence?', 'Do trusted sources\nsay the same?', 'Does it try to make\nyou angry or afraid?', 'Only then\nshare it'], { boxW: 112 }),
  'cyber-threats': columnsSpec('Common cyber threats and how to stop them', [
    { head: 'Phishing', items: ['A fake message', 'asks for your PIN', 'Defence: check the sender'] },
    { head: 'Ransomware', items: ['Locks your files', 'Demands payment', 'Defence: backups, updates'] },
    { head: 'Social\nengineering', items: ['Tricks people', 'Gets secrets by lying', 'Defence: verify callers'] },
    { head: 'Weak passwords', items: ['Easy to guess', 'Reused on many sites', 'Defence: long ones, MFA'] },
  ], { colW: 118 }),
  'client-server': columnsSpec('Client-server and peer-to-peer networks', [
    { head: 'Client-server', items: ['A central server', 'Clients request services', 'Easy to back up, secure', 'Server failure stops all'] },
    { head: 'Peer-to-peer', items: ['No central server', 'Computers share equally', 'Cheap, simple to set up', 'Hard to manage, back up'] },
  ], { colW: 150 }),
  'ipv4-address': {
    title: 'An IPv4 address',
    w: 324,
    h: 96,
    art: IpArt,
    labels: [],
    facts: [
      'An IPv4 address is four numbers separated by dots, such as 192.168.1.10.',
      'Each number is from 0 to 255, because it is stored in one byte of 8 bits, so the whole address has 32 bits.',
    ],
  },
  'logic-circuit': {
    title: 'A logic circuit and its truth table',
    w: 448,
    h: 160,
    art: CircuitArt,
    labels: [],
    facts: [
      'Inputs A and B go into an AND gate, whose output is A AND B.',
      'Input C goes into a NOT gate, whose output is NOT C.',
      'The two results go into an OR gate, so the output is X = (A AND B) OR (NOT C).',
      'With three inputs the truth table has 2 × 2 × 2 = 8 rows. X is 1 whenever C is 0, and also when A and B are both 1.',
    ],
  },
  'nested-if': {
    title: 'A nested IF drawn as a flowchart',
    w: 352,
    h: 308,
    art: NestedIfArt,
    labels: [],
    facts: [
      'The program inputs a mark, then asks the first question: is the mark 15 or more? If yes, it outputs Distinction.',
      'Only if the answer is no does it ask the second question, nested inside the first: is the mark 10 or more? If yes, it outputs Pass.',
      'If both answers are no, it outputs Fail. Every path joins again before Stop, so exactly one output is given.',
    ],
  },
  'trace-table': {
    title: 'A trace table for a FOR loop',
    w: 344,
    h: 136,
    art: TraceArt,
    labels: [],
    facts: [
      'Line 1 sets total to 0.',
      'Lines 2 and 3 repeat four times: i takes the values 1, 2, 3 and 4, and total becomes 1, 3, 6 and then 10.',
      'Line 5 runs once, after the loop, and outputs 10.',
    ],
  },
  'python-if': {
    title: 'Selection in Python',
    w: 400,
    h: 116,
    art: PythonArt,
    labels: [],
    facts: [
      'Line 1 reads a mark typed by the user. input() always gives text, so int() turns it into a whole number.',
      'Line 2 tests the mark. The colon at the end starts a block.',
      'Lines 3 and 5 are indented by four spaces, which shows they belong inside the if block and the else block.',
    ],
  },
  'troubleshoot-steps': flowSpec('Fixing a computer fault step by step', ['Identify the fault:\nask, look, listen', 'Check simple things:\npower, cables, restart', 'Think of the most\nlikely cause', 'Test it: change one\nthing at a time', 'Fix it: driver, update,\nrestore or repair', 'Check it works;\nrecord what you did'], { boxW: 124 }),
  'chart-choice': columnsSpec('Choosing the right chart', [
    { head: 'Column or bar', items: ['Compares amounts', 'e.g. marks per subject'] },
    { head: 'Line graph', items: ['Shows change over time', 'e.g. rainfall by month'] },
    { head: 'Pie chart', items: ['Shows parts of a whole', 'e.g. a family budget'] },
    { head: 'Scatter graph', items: ['Links two measures', 'e.g. height and mass'] },
  ], { colW: 114 }),
  'cloud-sync': flowSpec('Saving and sharing work in the cloud', ['Save the file in\nthe cloud folder', 'It uploads to the\nprovider’s servers', 'Share a link with\nview or edit rights', 'Others open and\nedit the same copy', 'Changes sync to\nevery device'], { boxW: 112 }),
  'lab-rules-f4': columnsSpec('Three kinds of laboratory rule', [
    { head: 'Keep yourself safe', items: ['No wet hands on sockets', 'Report bare cables', 'Keep bags off the floor'] },
    { head: 'Keep machines safe', items: ['No food or drinks', 'Shut down properly', 'Leave the case closed'] },
    { head: 'Keep data safe', items: ['Scan flash drives', 'Use your own account', 'Save work often'] },
  ], { colW: 128 }),
  'backup-rule': columnsSpec('The 3-2-1 backup rule', [
    { head: '3 copies', items: ['The original', 'Backup one', 'Backup two'] },
    { head: '2 kinds of storage', items: ['Not all on one device', 'e.g. disk and flash drive'] },
    { head: '1 copy elsewhere', items: ['Safe from fire or theft', 'e.g. in the cloud'] },
  ], { colW: 128 }),
  'cyberbully-steps': flowSpec('If you are cyberbullied', ['Do not reply\nor take revenge', 'Keep the evidence:\ntake screenshots', 'Block the person', 'Report them on\nthe platform', 'Tell a trusted\nadult'], { boxW: 112 }),
  'cyber-laws': columnsSpec('Laws on ICT in Cameroon', [
    { head: 'Law No. 2010/012', items: ['Cybersecurity, cybercrime', 'Punishes illegal access', 'Punishes online fraud'] },
    { head: 'Law No. 2024/017', items: ['Personal data protection', 'Data is used with consent', 'People may see and correct it'] },
    { head: 'Law No. 2000/011', items: ['Copyright', 'Protects software and music', 'Piracy is an offence'] },
  ], { colW: 140 }),
};
