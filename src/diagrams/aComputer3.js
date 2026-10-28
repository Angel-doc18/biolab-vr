// A Level Computer Science figures (0795), Upper Sixth: normalisation, joins
// and grouping, ACID, quality, a structure chart, cohesion and coupling,
// abstract classes, composition, exceptions, file organisation, an assembly
// trace, shifts, a Karnaugh map, a full adder, an SR latch, a Turing machine,
// the halting problem, the call stack, the Tower of Hanoi, VLSM, Dijkstra, a
// switch, the chain of trust, the TLS handshake, the cyber laws, data rights,
// a test plan, one payment through every layer, relational algebra, a table of
// complexities and the final weeks. The VLSM bar is drawn to scale.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';
import { Arrow, CS, Cell, Tag } from './aComputer';
import { ClassBox, GE, Inherit, NAMES, V } from './aComputer2';

const { O, MUTED, BLUE, RED, GREEN, SKY, LEAF, SAND, LILAC, ROSE } = CS;

// A small table: `cols` are [heading, width]; `rows` are arrays of cells.
export function Table({ x, y, cols, rows, rh = 16, size = 7.5, head = SAND, fills }) {
  const xs = cols.reduce((a, [, w], i) => [...a, i ? a[i - 1] + cols[i - 1][1] : x], []);
  return (
    <G>
      {cols.map(([h, w], i) => (
        <Cell key={h} x={xs[i]} y={y} w={w} h={rh} text={h} fill={head} size={size} bold />
      ))}
      {rows.map((r, j) => (
        <G key={j}>
          {r.map((t, i) => (
            <Cell key={i} x={xs[i]} y={y + (j + 1) * rh} w={cols[i][1]} h={rh} text={t} size={size} fill={fills ? fills(j, i, t) : '#ffffff'} color={t === 'NULL' ? RED : undefined} />
          ))}
        </G>
      ))}
    </G>
  );
}

// ---------- normalisation, step by step ----------
const NF = [
  ['Unnormalised', '', [['STUDENT', ['*StudentID', 'Name', 'ClassID', 'ClassTeacher', '{ SubjectID', '  SubjectName', '  Mark }']]]],
  ['1NF', 'repeating group out', [['STUDENT', ['*StudentID', 'Name', 'ClassID', 'ClassTeacher']], ['RESULT', ['*StudentID', '*SubjectID', 'SubjectName', 'Mark']]]],
  ['2NF', 'partial dependency out', [['STUDENT', ['*StudentID', 'Name', 'ClassID', 'ClassTeacher']], ['RESULT', ['*StudentID', '*SubjectID', 'Mark']], ['SUBJECT', ['*SubjectID', 'SubjectName']]]],
  ['3NF', 'transitive dependency out', [['STUDENT', ['*StudentID', 'Name', 'ClassID']], ['CLASS', ['*ClassID', 'ClassTeacher']], ['RESULT', ['*StudentID', '*SubjectID', 'Mark']], ['SUBJECT', ['*SubjectID', 'SubjectName']]]],
];
function NormalArt() {
  const cw = 92;
  return (
    <G>
      {NF.map(([head, note, tables], c) => {
        const x = 4 + c * (cw + 8);
        let y = 34;
        return (
          <G key={head}>
            <Txt x={x + cw / 2} y={12} size={9} weight="700" fill={c ? BLUE : MUTED}>
              {head}
            </Txt>
            {!!note && (
              <Txt x={x + cw / 2} y={25} size={7} fill={MUTED}>
                {note}
              </Txt>
            )}
            {tables.map(([name, attrs]) => {
              const top = y;
              y += 16 + attrs.length * 11 + 8;
              return (
                <G key={name}>
                  <Rect x={x} y={top} width={cw} height={16 + attrs.length * 11 + 2} fill="#ffffff" stroke={O} strokeWidth={0.9} />
                  <Rect x={x} y={top} width={cw} height={14} fill={SAND} stroke={O} strokeWidth={0.9} />
                  <Txt x={x + cw / 2} y={top + 10} size={7.5} weight="700">
                    {name}
                  </Txt>
                  {attrs.map((a, i) => (
                    <Txt key={i} x={x + 5} y={top + 24 + i * 11} size={7.5} anchor="start" weight={a.startsWith('*') ? '700' : '500'} fill={a.startsWith('*') ? BLUE : undefined}>
                      {a.replace('*', '')}
                    </Txt>
                  ))}
                </G>
              );
            })}
          </G>
        );
      })}
    </G>
  );
}

// ---------- inner and left joins ----------
function JoinsArt() {
  const fill = (j, i, t) => (t === 'NULL' ? ROSE : '#ffffff');
  return (
    <G>
      <Txt x={42} y={12} size={8.5} weight="700">
        Student
      </Txt>
      <Table x={6} y={18} cols={[['ID', 28], ['Name', 44]]} rows={[['S1', 'Ngwa'], ['S2', 'Bih'], ['S3', 'Fon'], ['S4', 'Akwi']]} />
      <Txt x={44} y={110} size={8.5} weight="700">
        Fees
      </Txt>
      <Table x={6} y={116} cols={[['ID', 28], ['Amount', 48]]} rows={[['S1', '25 000'], ['S2', '40 000'], ['S1', '15 000'], ['S3', '10 000']]} />
      <Txt x={186} y={12} size={8.5} weight="700" fill={BLUE}>
        INNER JOIN
      </Txt>
      <Table x={140} y={18} cols={[['Name', 44], ['Amount', 48]]} rows={[['Ngwa', '25 000'], ['Bih', '40 000'], ['Ngwa', '15 000'], ['Fon', '10 000']]} />
      <Txt x={316} y={12} size={8.5} weight="700" fill={GREEN}>
        LEFT JOIN
      </Txt>
      <Table x={270} y={18} cols={[['Name', 44], ['Amount', 48]]} rows={[['Ngwa', '25 000'], ['Bih', '40 000'], ['Ngwa', '15 000'], ['Fon', '10 000'], ['Akwi', 'NULL']]} fills={fill} />
      <Arrow x1={82} y1={60} x2={136} y2={60} />
      <Txt x={250} y={140} size={7.5} fill={MUTED}>
        ON Student.ID = Fees.ID
      </Txt>
      <Txt x={250} y={160} size={8} weight="700" fill={BLUE}>
        Akwi has paid nothing: the inner join leaves her out,
      </Txt>
      <Txt x={250} y={174} size={8} weight="700" fill={BLUE}>
        the left join keeps her with NULL
      </Txt>
    </G>
  );
}

// ---------- GROUP BY and HAVING ----------
function GroupArt() {
  return (
    <G>
      <Txt x={45} y={12} size={8.5} weight="700">
        Fees
      </Txt>
      <Table x={6} y={18} cols={[['ID', 28], ['Amount', 50]]} rows={[['S1', '25 000'], ['S2', '40 000'], ['S1', '15 000'], ['S3', '10 000']]} />
      <Arrow x1={88} y1={58} x2={128} y2={58} />
      <Txt x={169} y={12} size={8.5} weight="700" fill={BLUE}>
        GROUP BY StudentID
      </Txt>
      <Table x={130} y={18} cols={[['ID', 28], ['SUM', 50]]} rows={[['S1', '40 000'], ['S2', '40 000'], ['S3', '10 000']]} fills={(j) => (j < 2 ? LEAF : '#ffffff')} />
      <Arrow x1={212} y1={58} x2={252} y2={58} />
      <Txt x={293} y={12} size={8.5} weight="700" fill={GREEN}>
        HAVING SUM ≥ 40 000
      </Txt>
      <Table x={254} y={18} cols={[['ID', 28], ['SUM', 50]]} rows={[['S1', '40 000'], ['S2', '40 000']]} fills={() => LEAF} />
      <Txt x={6} y={122} size={8} anchor="start">
        SELECT StudentID, SUM(Amount) FROM Fees
      </Txt>
      <Txt x={6} y={136} size={8} anchor="start">
        GROUP BY StudentID HAVING SUM(Amount) &gt;= 40000;
      </Txt>
    </G>
  );
}

// ---------- a structure chart ----------
function Couple({ x, y, up, flag, label, side = 'left' }) {
  const y1 = up ? y + 16 : y;
  const y2 = up ? y : y + 16;
  return (
    <G>
      <Circle cx={x} cy={y1 + (up ? 3 : -3)} r={2.6} fill={flag ? O : '#ffffff'} stroke={O} strokeWidth={1} />
      <Arrow x1={x} y1={y1} x2={x} y2={y2} c={O} width={1} />
      <Txt x={side === 'left' ? x - 6 : x + 6} y={y + 11} size={7.5} anchor={side === 'left' ? 'end' : 'start'} fill={MUTED}>
        {label}
      </Txt>
    </G>
  );
}
function StructureArt() {
  const box = (x, y, t, fill = SKY) => <Cell x={x} y={y} w={110} h={26} text={t} fill={fill} size={8.5} bold />;
  return (
    <G>
      {box(145, 8, 'Produce report cards', SAND)}
      <Line x1={200} y1={34} x2={200} y2={50} stroke={O} strokeWidth={1.1} />
      <Line x1={65} y1={50} x2={335} y2={50} stroke={O} strokeWidth={1.1} />
      {[65, 200, 335].map((x) => (
        <Line key={x} x1={x} y1={50} x2={x} y2={96} stroke={O} strokeWidth={1.1} />
      ))}
      {box(10, 96, 'Read marks')}
      {box(145, 96, 'Calculate results')}
      {box(280, 96, 'Print cards')}
      <Line x1={200} y1={122} x2={200} y2={136} stroke={O} strokeWidth={1.1} />
      <Line x1={145} y1={136} x2={270} y2={136} stroke={O} strokeWidth={1.1} />
      <Line x1={145} y1={136} x2={145} y2={160} stroke={O} strokeWidth={1.1} />
      <Line x1={270} y1={136} x2={270} y2={160} stroke={O} strokeWidth={1.1} />
      {box(90, 160, 'Work out averages', LEAF)}
      {box(215, 160, 'Rank students', LEAF)}
      <Couple x={54} y={64} up label="marks" />
      <Couple x={76} y={64} up flag label="end of file" side="right" />
      <Couple x={190} y={64} label="marks" />
      <Couple x={210} y={64} up label="averages" side="right" />
      <Couple x={324} y={64} label="results" />
      <Circle cx={12} cy={202} r={2.6} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={20} y={205} size={7.5} anchor="start" fill={MUTED}>
        data
      </Txt>
      <Circle cx={62} cy={202} r={2.6} fill={O} />
      <Txt x={70} y={205} size={7.5} anchor="start" fill={MUTED}>
        flag (control)
      </Txt>
    </G>
  );
}

// ---------- abstract class ----------
function AbstractArt() {
  return (
    <G>
      <ClassBox x={115} y={8} w={150} name="«abstract» Account" attrs={['− owner', '# balance']} methods={['+ monthly_charge(): abstract']} fill={SAND} />
      <Inherit x={190} y={82} kids={[95, 285]} yKids={124} />
      <ClassBox x={20} y={124} w={150} name="Savings" methods={['+ monthly_charge(): 0']} />
      <ClassBox x={210} y={124} w={150} name="Current" methods={['+ monthly_charge(): 1500']} />
      <Txt x={190} y={190} size={8.5} weight="700" fill={BLUE}>
        Account(…) cannot be created; Savings and Current can
      </Txt>
    </G>
  );
}

// ---------- association, aggregation and composition ----------
function Diamond({ x, y, filled }) {
  return <Path d={`M${x} ${y} L${x + 9} ${y - 5} L${x + 18} ${y} L${x + 9} ${y + 5} Z`} fill={filled ? O : '#ffffff'} stroke={O} strokeWidth={1.1} />;
}
function CompositionArt() {
  const rows = [
    ['Car', 'Engine', 'composition', true, '1', 'part dies with the whole'],
    ['Department', 'Teacher', 'aggregation', false, '0..*', 'part can live alone'],
    ['Class', 'Student', 'association', null, '1..*', 'objects linked'],
  ];
  return (
    <G>
      {rows.map(([a, b, kind, filled, m, note], i) => {
        const y = 14 + i * 56;
        return (
          <G key={kind}>
            <Cell x={10} y={y} w={96} h={26} text={a} fill={SAND} size={8.5} bold />
            <Cell x={250} y={y} w={96} h={26} text={b} fill={SKY} size={8.5} bold />
            <Line x1={filled === null ? 106 : 124} y1={y + 13} x2={250} y2={y + 13} stroke={O} strokeWidth={1.2} />
            {filled !== null && <Diamond x={106} y={y + 13} filled={filled} />}
            <Txt x={178} y={y + 8} size={8} weight="700" fill={BLUE}>
              {kind}
            </Txt>
            <Txt x={178} y={y + 26} size={7.5} fill={MUTED}>
              {note}
            </Txt>
            <Txt x={244} y={y + 8} size={8} anchor="end" weight="700">
              {m}
            </Txt>
            {filled === null && (
              <Txt x={112} y={y + 8} size={8} anchor="start" weight="700">
                1
              </Txt>
            )}
          </G>
        );
      })}
    </G>
  );
}

// ---------- file organisation ----------
const SLOTS = { 2: '3012', 5: '2045', 7: '1027', 8: '4037' };
function FileArt() {
  return (
    <G>
      <Txt x={36} y={12} size={8.5} weight="700">
        Serial
      </Txt>
      {['2045', '1027', '4037', '3012'].map((k, i) => (
        <Cell key={k} x={6} y={20 + i * 20} w={60} h={20} text={k} fill={SKY} size={8.5} />
      ))}
      <Txt x={36} y={110} size={7.5} fill={MUTED}>
        order of arrival
      </Txt>
      <Txt x={120} y={12} size={8.5} weight="700">
        Sequential
      </Txt>
      {['1027', '2045', '3012', '4037'].map((k, i) => (
        <Cell key={k} x={90} y={20 + i * 20} w={60} h={20} text={k} fill={LEAF} size={8.5} />
      ))}
      <Txt x={120} y={110} size={7.5} fill={MUTED}>
        order of key
      </Txt>
      <Txt x={244} y={12} size={8.5} weight="700">
        Random: key MOD 10
      </Txt>
      {Array.from({ length: 10 }, (_, s) => (
        <G key={s}>
          <Txt x={208} y={31 + s * 16} size={7.5} anchor="end" fill={MUTED}>
            {`${s}`}
          </Txt>
          <Cell x={214} y={20 + s * 16} w={60} h={16} text={SLOTS[s] || ''} fill={SLOTS[s] ? (s === 8 ? ROSE : SAND) : '#ffffff'} size={8} />
        </G>
      ))}
      <Path d="M274 140 Q290 148 274 156" stroke={RED} strokeWidth={1.2} fill="none" />
      <Arrow x1={281} y1={152} x2={275} y2={156} c={RED} />
      <Txt x={294} y={136} size={7.5} anchor="start" fill={RED}>
        4037 MOD 10 = 7,
      </Txt>
      <Txt x={294} y={148} size={7.5} anchor="start" fill={RED}>
        but 7 holds 1027:
      </Txt>
      <Txt x={294} y={160} size={7.5} anchor="start" fill={RED}>
        next free slot, 8
      </Txt>
    </G>
  );
}

// ---------- tracing an assembly loop ----------
const PROG = [
  ['LOOP', 'LDA COUNT'],
  ['', 'OUT'],
  ['', 'SUB ONE'],
  ['', 'STA COUNT'],
  ['', 'BRZ END'],
  ['', 'BRA LOOP'],
  ['END', 'HLT'],
  ['COUNT', 'DAT 3'],
  ['ONE', 'DAT 1'],
];
const TRACE = [
  ['LDA COUNT', '3', '3', ''],
  ['OUT', '3', '3', '3'],
  ['SUB ONE', '2', '3', ''],
  ['STA COUNT', '2', '2', ''],
  ['BRZ, BRA', '2', '2', ''],
  ['pass 2', '1', '1', '2'],
  ['pass 3', '0', '0', '1'],
  ['BRZ END: HLT', '0', '0', ''],
];
function AsmArt() {
  return (
    <G>
      <Rect x={6} y={18} width={132} height={PROG.length * 15 + 8} rx={4} fill="#f6f8fa" stroke={O} strokeWidth={0.9} />
      {PROG.map(([lab, ins], i) => (
        <G key={i}>
          <Txt x={14} y={32 + i * 15} size={8} anchor="start" weight="700" fill={BLUE}>
            {lab}
          </Txt>
          <Txt x={60} y={32 + i * 15} size={8} anchor="start">
            {ins}
          </Txt>
        </G>
      ))}
      <Table x={156} y={18} cols={[['Instruction', 74], ['ACC', 36], ['COUNT', 44], ['Output', 44]]} rows={TRACE} fills={(j, i) => (i === 3 && TRACE[j][3] ? LEAF : j >= 5 && i === 0 ? '#f6f8fa' : '#ffffff')} />
      <Txt x={255} y={176} size={8.5} weight="700" fill={BLUE}>
        Outputs 3, 2, 1
      </Txt>
    </G>
  );
}

// ---------- shifts ----------
const SHIFTS = [
  ['Start', '00010110', '= 22', []],
  ['Left 2 (logical)', '01011000', '= 88', [6, 7]],
  ['Right 1 (logical)', '00001011', '= 11', [0]],
  ['Start', '11110000', '= −16', []],
  ['Right 1 (arithmetic)', '11111000', '= −8', [0]],
];
function ShiftArt() {
  const x0 = 120;
  return (
    <G>
      {SHIFTS.map(([label, bits, val, fresh], j) => {
        const y = 10 + j * 26 + (j > 2 ? 12 : 0);
        return (
          <G key={j}>
            <Txt x={x0 - 6} y={y + 13} size={8} anchor="end" weight={j === 0 || j === 3 ? '700' : '500'}>
              {label}
            </Txt>
            {bits.split('').map((b, i) => (
              <Cell key={i} x={x0 + i * 20} y={y} w={20} h={18} text={b} size={9} fill={fresh.includes(i) ? (j === 4 ? ROSE : SAND) : j === 0 || j === 3 ? SKY : '#ffffff'} bold={fresh.includes(i)} />
            ))}
            <Txt x={x0 + 166} y={y + 13} size={9} anchor="start" weight="700">
              {val}
            </Txt>
          </G>
        );
      })}
      <Line x1={6} y1={92} x2={330} y2={92} stroke={MUTED} strokeWidth={0.6} strokeDasharray="3 3" />
      <Txt x={6} y={158} size={7.5} anchor="start" fill={MUTED}>
        Shaded: bits that entered. An arithmetic right shift copies the sign bit.
      </Txt>
    </G>
  );
}

// ---------- a Karnaugh map ----------
const KCOLS = ['00', '01', '11', '10'];
const KONES = { '0-11': 1, '0-10': 1, '1-11': 1 };
function KmapArt() {
  const x0 = 70;
  const y0 = 40;
  const cw = 44;
  const ch = 30;
  return (
    <G>
      <Line x1={42} y1={16} x2={x0} y2={y0} stroke={O} strokeWidth={0.8} />
      <Txt x={62} y={20} size={8} weight="700">
        BC
      </Txt>
      <Txt x={48} y={38} size={8} weight="700">
        A
      </Txt>
      {KCOLS.map((c, i) => (
        <Txt key={c} x={x0 + i * cw + cw / 2} y={y0 - 6} size={8.5} weight="700" fill={MUTED}>
          {c}
        </Txt>
      ))}
      {[0, 1].map((a) => (
        <G key={a}>
          <Txt x={x0 - 8} y={y0 + a * ch + 19} size={8.5} weight="700" fill={MUTED}>
            {`${a}`}
          </Txt>
          {KCOLS.map((c, i) => (
            <Cell key={c} x={x0 + i * cw} y={y0 + a * ch} w={cw} h={ch} text={KONES[`${a}-${c}`] ? '1' : '0'} size={10} bold={!!KONES[`${a}-${c}`]} color={KONES[`${a}-${c}`] ? undefined : MUTED} />
          ))}
        </G>
      ))}
      <Rect x={x0 + 2 * cw + 3} y={y0 + 3} width={2 * cw - 6} height={ch - 6} rx={10} fill="none" stroke={BLUE} strokeWidth={2} />
      <Rect x={x0 + 2 * cw + 8} y={y0 + 7} width={cw - 16} height={2 * ch - 14} rx={10} fill="none" stroke={RED} strokeWidth={2} />
      <Txt x={262} y={52} size={8.5} anchor="start" weight="700" fill={BLUE}>
        Blue group: A′·B
      </Txt>
      <Txt x={262} y={70} size={8.5} anchor="start" weight="700" fill={RED}>
        Red group: B·C
      </Txt>
      <Txt x={262} y={92} size={9} anchor="start" weight="700">
        F = A′·B + B·C
      </Txt>
    </G>
  );
}

// ---------- a full adder from two half adders ----------
function Wire({ d, c = O }) {
  return <Path d={d} stroke={c} strokeWidth={1.3} fill="none" />;
}
function AdderArt() {
  return (
    <G>
      <Cell x={50} y={14} w={70} h={50} text={'Half\nadder 1'} fill={SKY} size={8.5} rx={4} />
      <Cell x={170} y={70} w={70} h={50} text={'Half\nadder 2'} fill={SKY} size={8.5} rx={4} />
      <Cell x={290} y={30} w={50} h={40} text="OR" fill={SAND} size={9} bold rx={14} />
      <Wire d="M28 26 L50 26" />
      <Wire d="M28 52 L50 52" />
      <Txt x={24} y={29} size={8.5} anchor="end" weight="700">
        A
      </Txt>
      <Txt x={24} y={55} size={8.5} anchor="end" weight="700">
        B
      </Txt>
      <Txt x={114} y={29} size={7} anchor="end" fill={MUTED}>
        C
      </Txt>
      <Txt x={114} y={55} size={7} anchor="end" fill={MUTED}>
        S
      </Txt>
      <Wire d="M120 26 L280 26 L280 42 L290 42" />
      <Tag x={200} y={22} text="carry 1" />
      <Wire d="M120 52 L145 52 L145 82 L170 82" />
      <Wire d="M28 108 L170 108" />
      <Txt x={24} y={111} size={8.5} anchor="end" weight="700">
        Cin
      </Txt>
      <Txt x={234} y={85} size={7} anchor="end" fill={MUTED}>
        C
      </Txt>
      <Txt x={234} y={111} size={7} anchor="end" fill={MUTED}>
        S
      </Txt>
      <Wire d="M240 82 L265 82 L265 58 L290 58" />
      <Wire d="M240 108 L370 108" c={BLUE} />
      <Txt x={374} y={111} size={8.5} anchor="start" weight="700" fill={BLUE}>
        S
      </Txt>
      <Wire d="M340 50 L370 50" c={GREEN} />
      <Txt x={374} y={53} size={8.5} anchor="start" weight="700" fill={GREEN}>
        Cout
      </Txt>
      <Txt x={200} y={142} size={8.5} weight="700" fill={BLUE}>
        S = A ⊕ B ⊕ Cin
      </Txt>
      <Txt x={200} y={158} size={8.5} weight="700" fill={GREEN}>
        Cout = A·B + Cin·(A ⊕ B)
      </Txt>
    </G>
  );
}

// ---------- an SR latch ----------
function LatchArt() {
  return (
    <G>
      <Cell x={70} y={20} w={50} h={36} text="NOR" fill={SKY} size={8.5} bold rx={10} />
      <Cell x={70} y={90} w={50} h={36} text="NOR" fill={SKY} size={8.5} bold rx={10} />
      <Wire d="M20 28 L70 28" />
      <Txt x={14} y={31} size={9} weight="700">
        R
      </Txt>
      <Wire d="M20 118 L70 118" />
      <Txt x={14} y={121} size={9} weight="700">
        S
      </Txt>
      <Wire d="M120 38 L196 38" c={BLUE} />
      <Txt x={200} y={41} size={9} anchor="start" weight="700" fill={BLUE}>
        Q
      </Txt>
      <Wire d="M120 108 L196 108" />
      <Txt x={200} y={111} size={9} anchor="start" weight="700">
        Q′
      </Txt>
      <Wire d="M140 38 L140 62 L55 80 L55 98 L70 98" c={MUTED} />
      <Wire d="M160 108 L160 84 L45 66 L45 48 L70 48" c={MUTED} />
      <Table x={236} y={20} cols={[['S', 24], ['R', 24], ['Q', 30], ['Meaning', 72]]} rows={[['1', '0', '1', 'set'], ['0', '1', '0', 'reset'], ['0', '0', 'Q', 'no change'], ['1', '1', '–', 'not allowed']]} rh={18} size={8} fills={(j) => (j === 3 ? ROSE : '#ffffff')} />
    </G>
  );
}

// ---------- a Turing machine ----------
function Tape({ x, y, cells, head, label, state }) {
  return (
    <G>
      <Txt x={x - 6} y={y + 17} size={8.5} anchor="end" weight="700">
        {label}
      </Txt>
      {cells.map((c, i) => (
        <Cell key={i} x={x + i * 28} y={y} w={28} h={24} text={c} size={10} bold fill={c ? SKY : '#ffffff'} />
      ))}
      <Path d={`M${x + head * 28 + 8} ${y - 12} L${x + head * 28 + 20} ${y - 12} L${x + head * 28 + 14} ${y - 3} Z`} fill={RED} />
      <Txt x={x + head * 28 + 24} y={y - 4} size={7.5} anchor="start" weight="700" fill={RED}>
        {state}
      </Txt>
    </G>
  );
}
function TuringArt() {
  return (
    <G>
      <Tape x={50} y={26} cells={['', '1', '0', '1', '1', '']} head={4} label="Start" state="S" />
      <Tape x={50} y={86} cells={['', '1', '1', '0', '0', '']} head={2} label="End" state="halt" />
      <Table x={238} y={14} cols={[['Read', 34], ['Write', 34], ['Move', 36], ['Next', 34]]} rows={[['1', '0', 'left', 'S'], ['0', '1', '–', 'halt'], ['blank', '1', '–', 'halt']]} rh={18} size={8} />
      <Txt x={190} y={142} size={8.5} weight="700" fill={BLUE}>
        1011 + 1 = 1100: eleven plus one is twelve
      </Txt>
    </G>
  );
}

// ---------- the call stack ----------
function StackFramesArt() {
  const frames = [
    ['factorial(1)', 'returns 1'],
    ['factorial(2)', '2 × 1 = 2'],
    ['factorial(3)', '3 × 2 = 6'],
    ['factorial(4)', '4 × 6 = 24'],
  ];
  return (
    <G>
      {frames.map(([f, r], i) => (
        <G key={f}>
          <Cell x={60} y={20 + i * 30} w={150} h={26} text={f} fill={[ROSE, SAND, LEAF, SKY][i]} size={8.5} bold rx={3} />
          <Txt x={222} y={37 + i * 30} size={8.5} anchor="start" weight={i === 3 ? '700' : '500'} fill={i === 3 ? BLUE : undefined}>
            {r}
          </Txt>
        </G>
      ))}
      <Arrow x1={40} y1={130} x2={40} y2={24} c={MUTED} />
      <Txt x={40} y={146} size={7.5} fill={MUTED}>
        calls push
      </Txt>
      <Arrow x1={320} y1={28} x2={320} y2={128} c={GREEN} />
      <Txt x={320} y={146} size={7.5} fill={GREEN}>
        returns pop
      </Txt>
      <Txt x={135} y={14} size={7.5} fill={MUTED}>
        top of the stack
      </Txt>
    </G>
  );
}

// ---------- the Tower of Hanoi ----------
const HANOI_MOVES = ['A→C', 'A→B', 'C→B', 'A→C', 'B→A', 'B→C', 'A→C'];
function HanoiArt() {
  const pegs = [70, 170, 270];
  const discs = [
    [70, SKY],
    [50, LEAF],
    [30, SAND],
  ];
  return (
    <G>
      <Line x1={20} y1={100} x2={320} y2={100} stroke={O} strokeWidth={2} />
      {pegs.map((x, i) => (
        <G key={x}>
          <Line x1={x} y1={36} x2={x} y2={100} stroke={O} strokeWidth={2.4} />
          <Txt x={x} y={116} size={9} weight="700">
            {['A', 'B', 'C'][i]}
          </Txt>
        </G>
      ))}
      {discs.map(([w, c], i) => (
        <Rect key={w} x={70 - w / 2} y={86 - i * 13} width={w} height={12} rx={4} fill={c} stroke={O} strokeWidth={1} />
      ))}
      <Txt x={376} y={40} size={8.5} anchor="end" weight="700" fill={BLUE}>
        3 discs: 2³ − 1 = 7 moves
      </Txt>
      <Txt x={376} y={56} size={8} anchor="end" fill={MUTED}>
        never a larger disc
      </Txt>
      <Txt x={376} y={68} size={8} anchor="end" fill={MUTED}>
        on a smaller one
      </Txt>
      {HANOI_MOVES.map((m, i) => (
        <Txt key={i} x={40 + i * 50} y={146} size={8.5} weight={i === 3 ? '700' : '500'} fill={i === 3 ? BLUE : undefined}>
          {`${i + 1}. ${m}`}
        </Txt>
      ))}
    </G>
  );
}

// ---------- VLSM, to scale ----------
const VBLOCKS = [
  [0, 128, SKY, '.0/25', '100 hosts (126)'],
  [128, 64, LEAF, '.128/26', '50 hosts (62)'],
  [192, 32, SAND, '.192/27', '20 (30)'],
  [224, 4, ROSE, null, null],
];
function VlsmArt() {
  const X = (a) => 20 + (a * 360) / 256;
  return (
    <G>
      <Rect x={X(228)} y={40} width={X(256) - X(228)} height={30} fill="#ffffff" stroke={MUTED} strokeWidth={0.8} strokeDasharray="3 2" />
      <Txt x={(X(228) + X(256)) / 2} y={58} size={7} fill={MUTED}>
        free
      </Txt>
      {VBLOCKS.map(([a, n, c, name, hosts]) => (
        <G key={a}>
          <Rect x={X(a)} y={40} width={X(a + n) - X(a)} height={30} fill={c} stroke={O} strokeWidth={0.9} />
          {!!name && (
            <G>
              <Txt x={(X(a) + X(a + n)) / 2} y={86} size={8} weight="700">
                {name}
              </Txt>
              <Txt x={(X(a) + X(a + n)) / 2} y={99} size={7.5} fill={MUTED}>
                {hosts}
              </Txt>
            </G>
          )}
        </G>
      ))}
      <Line x1={X(226)} y1={40} x2={X(226) + 6} y2={26} stroke={RED} strokeWidth={1} />
      <Txt x={X(226) + 8} y={24} size={7.5} anchor="start" weight="700" fill={RED}>
        link .224/30
      </Txt>
      <Txt x={20} y={24} size={8} anchor="start" weight="700">
        192.168.5.0/24
      </Txt>
      <Txt x={200} y={124} size={8.5} weight="700" fill={BLUE}>
        Largest first; each block starts at a multiple of its size
      </Txt>
    </G>
  );
}

// ---------- Dijkstra ----------
const TREE = ['AC', 'AB', 'BD', 'DE'];
function DijkstraArt() {
  const inTree = (a, b) => TREE.includes(a + b) || TREE.includes(b + a);
  return (
    <G>
      {GE.map(([a, b, w]) => (
        <G key={a + b}>
          <Line x1={V[a][0]} y1={V[a][1]} x2={V[b][0]} y2={V[b][1]} stroke={inTree(a, b) ? RED : MUTED} strokeWidth={inTree(a, b) ? 2.2 : 1.1} strokeDasharray={inTree(a, b) ? undefined : '4 3'} />
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
      <Txt x={330} y={14} size={8.5} weight="700">
        Visited in order
      </Txt>
      <Table x={270} y={22} cols={[['Vertex', 40], ['Distance', 46], ['From', 34]]} rows={[['A', '0', '–'], ['C', '2', 'A'], ['B', '4', 'A'], ['D', '9', 'B'], ['E', '11', 'D']]} rh={18} size={8} />
      <Txt x={198} y={194} size={8.5} weight="700" fill={RED}>
        Shortest path to E: A → B → D → E, length 11
      </Txt>
    </G>
  );
}

// ---------- a switch learning MAC addresses ----------
function SwitchArt() {
  const pcs = [
    ['PC1', '…:AA'],
    ['PC2', '…:BB'],
    ['PC3', '…:CC'],
    ['PC4', '…:DD'],
  ];
  return (
    <G>
      {pcs.map(([n, mac], i) => {
        const x = 20 + i * 90;
        const hot = i === 0 || i === 2;
        return (
          <G key={n}>
            <Cell x={x} y={10} w={76} h={30} text={`${n}\n${mac}`} fill={hot ? SKY : '#ffffff'} size={8} rx={4} />
            <Line x1={x + 38} y1={40} x2={x + 38} y2={70} stroke={hot ? BLUE : MUTED} strokeWidth={hot ? 2 : 1.1} />
            <Txt x={x + 44} y={66} size={7.5} anchor="start" fill={MUTED}>
              {`port ${i + 1}`}
            </Txt>
          </G>
        );
      })}
      <Cell x={20} y={70} w={346} h={30} text="Switch" fill={LEAF} size={9.5} bold rx={4} />
      <Txt x={150} y={118} size={8.5} weight="700">
        MAC address table
      </Txt>
      <Table x={100} y={124} cols={[['MAC', 60], ['Port', 40]]} rows={[['…:AA', '1'], ['…:CC', '3']]} rh={18} size={8} />
      <Txt x={220} y={140} size={7.5} anchor="start" fill={MUTED}>
        AA sends to CC: CC unknown,
      </Txt>
      <Txt x={220} y={152} size={7.5} anchor="start" fill={MUTED}>
        so the frame is flooded.
      </Txt>
      <Txt x={220} y={164} size={7.5} anchor="start" fill={MUTED}>
        CC replies: now it is learned.
      </Txt>
    </G>
  );
}

// ---------- the TLS handshake ----------
const MSGS = [
  [40, 'right', 'ClientHello: versions, ciphers, key share'],
  [68, 'left', 'ServerHello: choice, key share'],
  [96, 'left', 'Certificate and signature'],
  [150, 'both', 'Finished'],
];
function TlsArt() {
  return (
    <G>
      <Cell x={20} y={6} w={80} h={22} text="Client" fill={SKY} size={9} bold rx={4} />
      <Cell x={280} y={6} w={80} h={22} text="Server" fill={SAND} size={9} bold rx={4} />
      <Line x1={60} y1={28} x2={60} y2={200} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Line x1={320} y1={28} x2={320} y2={200} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      {MSGS.map(([y, dir, t]) => (
        <G key={t}>
          <Arrow x1={dir === 'left' ? 320 : 60} y1={y} x2={dir === 'left' ? 61 : 319} y2={y} c={BLUE} both={dir === 'both'} />
          <Txt x={190} y={y - 5} size={8}>
            {t}
          </Txt>
        </G>
      ))}
      <Rect x={90} y={110} width={200} height={22} rx={6} fill={LILAC} stroke={O} strokeWidth={0.8} />
      <Txt x={190} y={125} size={8} weight="700">
        Both compute the same session key
      </Txt>
      <Arrow x1={60} y1={184} x2={320} y2={184} c={GREEN} both width={2.4} />
      <Txt x={190} y={178} size={8} weight="700" fill={GREEN}>
        Data encrypted with the session key (AES)
      </Txt>
    </G>
  );
}

// ---------- a test plan ----------
const TESTS = [
  ['1', 'Accept a normal mark', '12', 'Normal', 'Saved', 'OK'],
  ['2', 'Accept the top limit', '20', 'Boundary', 'Saved', 'OK'],
  ['3', 'Reject above the limit', '21', 'Boundary', 'Error message', 'OK'],
  ['4', 'Reject a word', 'ten', 'Erroneous', 'Error message', 'OK'],
  ['5', 'Find a student fast', 'S00123', 'Normal', 'Under 2 s', '0.3 s'],
];
function TestPlanArt() {
  return <Table x={6} y={8} cols={[['No.', 24], ['Purpose', 98], ['Data', 44], ['Type', 54], ['Expected', 76], ['Actual', 40]]} rows={TESTS} rh={20} size={7.5} />;
}

// ---------- complexities ----------
const CPLX = [
  ['Array (unsorted)', 'O(n)', 'O(1) at end', 'O(n)'],
  ['Sorted array', 'O(log n)', 'O(n)', 'O(n)'],
  ['Linked list', 'O(n)', 'O(1) at start', 'O(1) once found'],
  ['Stack, queue', 'top: O(1)', 'O(1)', 'O(1)'],
  ['Balanced BST', 'O(log n)', 'O(log n)', 'O(log n)'],
  ['Hash table', 'about O(1)', 'about O(1)', 'about O(1)'],
];
function ClinicArt() {
  return <Table x={6} y={8} cols={[['Structure', 84], ['Search', 72], ['Insert', 80], ['Delete', 84]]} rows={CPLX} rh={20} size={8} fills={(j, i) => (i === 0 ? '#f6f8fa' : '#ffffff')} />;
}

export const A_COMPUTER_3 = {
  'acs-normal-forms': {
    title: 'Normalising a student records table',
    w: 400,
    h: 242,
    art: NormalArt,
    labels: [],
    facts: [
      'Key fields are in blue. The unnormalised STUDENT table holds a repeating group of subjects and marks.',
      '1NF moves the repeating group to RESULT, whose key is StudentID with SubjectID.',
      '2NF moves SubjectName, which depends on SubjectID alone, into SUBJECT.',
      '3NF moves ClassTeacher, which depends on ClassID rather than the key, into CLASS: four tables in all.',
    ],
  },
  'acs-joins': {
    title: 'Inner join and left join',
    w: 380,
    h: 200,
    art: JoinsArt,
    labels: [],
    facts: [
      'Student has S1 Ngwa, S2 Bih, S3 Fon and S4 Akwi; Fees has four payments by S1, S2, S1 and S3.',
      'The inner join on the student ID gives four rows: only students with a payment.',
      'The left join gives five rows: Akwi is kept, with NULL for the amount.',
    ],
  },
  'acs-sql-group': {
    title: 'GROUP BY makes groups; HAVING filters them',
    w: 342,
    h: 144,
    art: GroupArt,
    labels: [],
    facts: [
      'The four payments are grouped by student and summed: S1 40 000, S2 40 000, S3 10 000.',
      'HAVING SUM(Amount) >= 40000 keeps only S1 and S2.',
    ],
  },
  'acs-acid': columnsSpec('ACID: what keeps a transaction safe', [
    { head: 'Atomicity', items: ['All or nothing', 'Rollback on failure'] },
    { head: 'Consistency', items: ['Rules hold before', 'and after'] },
    { head: 'Isolation', items: ['Unfinished work', 'hidden from others'] },
    { head: 'Durability', items: ['Committed changes', 'survive a crash'] },
  ], { colW: 96 }),
  'acs-quality': columnsSpec('Quality attributes and how to measure them', [
    { head: 'Reliability', items: ['Mean time', 'between failures', 'Availability %'] },
    { head: 'Usability', items: ['Time per task', 'Errors made', 'User survey'] },
    { head: 'Efficiency', items: ['Response time', 'Memory used', 'Users served'] },
    { head: 'Maintain-\nability', items: ['Clear modules', 'Comments, names', 'Time to fix a bug'] },
  ], { colW: 96 }),
  'acs-structure-chart': {
    title: 'A structure chart for report cards',
    w: 400,
    h: 212,
    art: StructureArt,
    labels: [],
    facts: [
      'Produce report cards calls Read marks, Calculate results and Print cards; Calculate results calls Work out averages and Rank students.',
      'Read marks passes the marks up, with an end-of-file flag; the marks go down to Calculate results, which passes the averages back up.',
      'The results go down to Print cards. An open circle marks data; a filled circle marks a flag.',
    ],
  },
  'acs-coupling': columnsSpec('Good and poor module design', [
    { head: 'Good', items: ['High cohesion: one job', 'Low coupling: parameters', 'Easy to test and reuse'] },
    { head: 'Poor', items: ['Low cohesion: many jobs', 'High coupling: globals', 'One change breaks others'] },
  ], { colW: 150 }),
  'acs-abstract': {
    title: 'An abstract class and two concrete subclasses',
    w: 380,
    h: 198,
    art: AbstractArt,
    labels: [],
    facts: [
      'Account is abstract: it declares monthly_charge() without a body and cannot make objects.',
      'Savings and Current inherit from it and each overrides monthly_charge(), returning 0 and 1500.',
      'A loop over mixed accounts calls monthly_charge() and dynamic binding runs each object’s own version.',
    ],
  },
  'acs-composition': {
    title: 'Composition, aggregation and association in UML',
    w: 356,
    h: 160,
    art: CompositionArt,
    labels: [],
    facts: [
      'A filled diamond at Car shows composition: the engine belongs to one car and goes with it.',
      'A hollow diamond at Department shows aggregation: teachers can exist without the department.',
      'A plain line shows association, here with multiplicities: one class has one or more students.',
    ],
  },
  'acs-exceptions': flowSpec('Handling an exception in Python', ['try: run the code\nthat may fail', 'An error? The\nmatching except runs', 'No error? The\nelse block runs', 'finally runs\nin every case'], { boxW: 120, perRow: 2 }),
  'acs-file-access': {
    title: 'Serial, sequential and random-access files',
    w: 380,
    h: 186,
    art: FileArt,
    labels: [],
    facts: [
      'A serial file keeps records in the order they arrived; a sequential file keeps them in key order.',
      'A random-access file stores each record at key MOD 10: 3012 in slot 2, 2045 in slot 5 and 1027 in slot 7.',
      '4037 also hashes to 7, which is taken, so it goes in the next free slot, 8.',
    ],
  },
  'acs-asm-trace': {
    title: 'Tracing a countdown loop in assembly',
    w: 360,
    h: 184,
    art: AsmArt,
    labels: [],
    facts: [
      'The program loads COUNT, outputs it, subtracts 1, stores it, and loops back until it reaches 0.',
      'The first pass outputs 3 and leaves COUNT at 2; the second outputs 2; the third outputs 1 and leaves 0.',
      'BRZ END then jumps to HLT, so the outputs are 3, 2, 1.',
    ],
  },
  'acs-shifts': {
    title: 'Logical and arithmetic shifts',
    w: 340,
    h: 164,
    art: ShiftArt,
    labels: [],
    facts: [
      '00010110 is 22. Shifted left two places it becomes 01011000, 88: multiplied by 4.',
      'Shifted right one place it becomes 00001011, 11: divided by 2.',
      '11110000 is −16. An arithmetic right shift copies the sign bit, giving 11111000, which is −8.',
    ],
  },
  'acs-kmap': {
    title: 'A Karnaugh map for three variables',
    w: 380,
    h: 112,
    art: KmapArt,
    labels: [],
    facts: [
      'The columns follow the Gray code 00, 01, 11, 10, so neighbouring cells differ in one variable.',
      'The 1s are at A = 0 with BC = 11 and 10, and at A = 1 with BC = 11.',
      'The blue pair gives A′·B and the red pair gives B·C, so F = A′·B + B·C.',
    ],
  },
  'acs-full-adder': {
    title: 'A full adder from two half adders',
    w: 400,
    h: 166,
    art: AdderArt,
    labels: [],
    facts: [
      'Half adder 1 adds A and B, giving a sum and carry 1.',
      'Half adder 2 adds that sum and the carry in, giving the final sum S and a second carry.',
      'An OR gate joins the two carries to give Cout. S = A ⊕ B ⊕ Cin and Cout = A·B + Cin·(A ⊕ B).',
    ],
  },
  'acs-flipflop': {
    title: 'An SR latch made of two NOR gates',
    w: 400,
    h: 140,
    art: LatchArt,
    labels: [],
    facts: [
      'Each NOR gate’s output feeds back into the other gate, so the circuit holds its state.',
      'S = 1 sets Q to 1, R = 1 resets it to 0, and S = R = 0 keeps the stored bit.',
      'S = R = 1 is not allowed.',
    ],
  },
  'acs-turing': {
    title: 'A Turing machine that adds 1 to a binary number',
    w: 380,
    h: 152,
    art: TuringArt,
    labels: [],
    facts: [
      'The head starts on the rightmost digit in state S.',
      'Reading 1 it writes 0 and moves left; reading 0 or a blank it writes 1 and halts.',
      'Starting from 1011 the tape ends as 1100: 11 + 1 = 12.',
    ],
  },
  'acs-halting': flowSpec('Why no program can solve the halting problem', ['Suppose H(P, I)\nalways answers', 'Build D(P): it\nasks H(P, P)', 'H says "halts":\nD loops for ever', 'H says "loops":\nD halts', 'Run D on itself:\nit halts if it loops', 'Contradiction:\nH cannot exist'], { boxW: 116 }),
  'acs-call-stack': {
    title: 'The call stack for factorial(4)',
    w: 360,
    h: 154,
    art: StackFramesArt,
    labels: [],
    facts: [
      'Each call pushes a frame: factorial(4), then 3, then 2, then 1 at the top of the stack.',
      'factorial(1) returns 1 and its frame is popped; factorial(2) returns 2, factorial(3) returns 6 and factorial(4) returns 24.',
    ],
  },
  'acs-hanoi': {
    title: 'The Tower of Hanoi with three discs',
    w: 380,
    h: 156,
    art: HanoiArt,
    labels: [],
    facts: [
      'Three discs start on peg A and must end on peg C, one at a time, never a larger disc on a smaller one.',
      'The seven moves are A→C, A→B, C→B, A→C, B→A, B→C, A→C.',
      'n discs need 2ⁿ − 1 moves.',
    ],
  },
  'acs-vlsm': {
    title: 'Dividing 192.168.5.0/24 with VLSM, to scale',
    w: 400,
    h: 132,
    art: VlsmArt,
    labels: [],
    facts: [
      'The bar is the 256 addresses of 192.168.5.0/24, drawn to scale.',
      'The 100-host subnet takes .0/25, the 50-host subnet .128/26, the 20-host subnet .192/27 and the router link .224/30.',
      'Addresses .228 to .255 are left free for later.',
    ],
  },
  'acs-dijkstra': {
    title: 'Dijkstra’s shortest paths from A',
    w: 396,
    h: 200,
    art: DijkstraArt,
    labels: [],
    facts: [
      'The vertices are visited in the order A, C, B, D, E, each with its shortest distance from A.',
      'C is 2 and B is 4 directly from A; D is 9 through B; E is 11 through D.',
      'The red edges form the tree of shortest paths: the way to E is A → B → D → E.',
    ],
  },
  'acs-switch': {
    title: 'A switch learning MAC addresses',
    w: 386,
    h: 186,
    art: SwitchArt,
    labels: [],
    facts: [
      'PC1 (…:AA) on port 1 sends a frame to PC3 (…:CC) on port 3.',
      'The switch records AA on port 1; CC is unknown, so it floods the frame to all other ports.',
      'When PC3 replies, the switch records CC on port 3; after that, frames between them go only to their own ports.',
    ],
  },
  'acs-chain': flowSpec('The chain of trust', ['Root CA certificate,\nbuilt into the browser', 'The root signs the\nintermediate CA', 'The intermediate\nsigns www.bank.cm', 'The browser checks\nsignatures, name, dates'], { boxW: 128, perRow: 2 }),
  'acs-tls': {
    title: 'The TLS handshake, simplified',
    w: 380,
    h: 206,
    art: TlsArt,
    labels: [],
    facts: [
      'The client says hello with the versions and ciphers it supports and its key share.',
      'The server replies with its choice and key share, then sends its certificate and a signature made with its private key.',
      'Both compute the same session key; after the Finished messages, data is encrypted with it.',
    ],
  },
  'acs-cybercrime': columnsSpec('Cameroon’s cyber laws at a glance', [
    { head: 'Law 2010/012', items: ['Cybersecurity and', 'cybercriminality', 'Illegal access, fraud', 'ANTIC’s powers'] },
    { head: 'Law 2010/021', items: ['Electronic commerce', 'Online contracts', 'Sellers identified', 'Clear prices'] },
    { head: 'Law 2024/017', items: ['Personal data', 'Consent, purpose', 'Security', 'People’s rights'] },
  ], { colW: 116 }),
  'acs-data-rights': columnsSpec('Personal data: duties and rights', [
    { head: 'Organisations must', items: ['State a purpose', 'Get consent', 'Collect the minimum', 'Keep it secure', 'Delete it in time'] },
    { head: 'People may', items: ['Be informed', 'See their data', 'Have it corrected', 'Object to its use', 'Ask for erasure'] },
  ], { colW: 150 }),
  'acs-test-plan': {
    title: 'Part of a test plan for the mark field',
    w: 348,
    h: 130,
    art: TestPlanArt,
    labels: [],
    facts: TESTS.map(([n, p, d, t, e, a]) => `Test ${n}: ${p}. Data ${d} (${t.toLowerCase()}). Expected: ${e.toLowerCase()}. Actual: ${a}.`),
  },
  'acs-layers': flowSpec('One mobile money payment through every layer', ['Touch: interrupt,\nOS, app', 'Amount validated,\nstored in binary', 'DNS, TCP and\nTLS handshake', 'Packets routed\nthrough NAT, firewall', 'Server transaction:\ndebit, credit, commit', 'Reply and\nSMS receipt'], { boxW: 122 }),
  'acs-u6-gce': columnsSpec('GCE A Level Computer Science (0795), 2026', [
    { head: 'Paper 1', items: ['Multiple choice', '1½ hours', 'Tuesday 9 June'] },
    { head: 'Paper 2', items: ['Theory, problems', '2½ hours', 'Tuesday 9 June'] },
    { head: 'Practical', items: ['At the computer', 'Friday 15 May', 'Before the papers'] },
  ], { colW: 112 }),
  'acs-relalg': columnsSpec('Relational algebra and SQL', [
    { head: 'Selection σ', items: ['Chooses rows', 'σ Mark ≥ 15 (Result)', 'SQL: WHERE'] },
    { head: 'Projection π', items: ['Chooses columns', 'π Name (Student)', 'SQL: SELECT list'] },
    { head: 'Join', items: ['Matches two tables', 'Result JOIN Student', 'SQL: JOIN … ON'] },
  ], { colW: 112 }),
  'acs-clinic': {
    title: 'The cost of common operations',
    w: 332,
    h: 152,
    art: ClinicArt,
    labels: [],
    facts: CPLX.map(([s, a, b, c]) => `${s}: search ${a}, insert ${b}, delete ${c}.`),
  },
  'acs-u6-final': flowSpec('The last weeks before the GCE', ['Mock: Papers\n1, 2 and 3', 'Correct every\nlost mark', 'Clinics: structures\nand Big-O', 'Timed past\npapers', 'GCE written and\npractical papers'], { boxW: 116 }),
};
