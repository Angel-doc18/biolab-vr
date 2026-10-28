// A Level Computer Science figures (0795), Lower Sixth Term 1: two’s
// complement, floating point, a parity block, the processor’s registers and
// buses, addressing modes, a pipeline, paging, scheduling Gantt charts,
// interrupts, deadlock, transmission media, subnetting, NAT, DNS, ports,
// public-key encryption, digital signatures and a firewall. Every number shown
// is worked out in the lessons.
import { Circle, G, Line, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';

export const CS = {
  O: '#33414d',
  MUTED: '#5a6b78',
  BLUE: '#1f5f99',
  RED: '#b03a2e',
  GREEN: '#2e7d32',
  SKY: '#e6eef8',
  LEAF: '#e3f0da',
  SAND: '#fbefd0',
  LILAC: '#efe6f7',
  ROSE: '#f8e3df',
  MINT: '#e0f2f1',
};
const { O, MUTED, BLUE, RED, GREEN, SKY, LEAF, SAND, LILAC, ROSE, MINT } = CS;

// A cell with centred text; `lines` splits on "\n".
export function Cell({ x, y, w, h = 20, text, fill = '#ffffff', bold, size = 9, stroke = O, rx = 0, color }) {
  const lines = String(text ?? '').split('\n');
  const step = size * 1.2;
  const top = y + h / 2 - ((lines.length - 1) * step) / 2 + size * 0.35;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth={0.8} />
      {lines.map((l, i) => (
        <Txt key={i} x={x + w / 2} y={top + i * step} size={size} weight={bold || (lines.length > 1 && i === 0) ? '700' : '500'} fill={color}>
          {l}
        </Txt>
      ))}
    </G>
  );
}

export function Arrow({ x1, y1, x2, y2, c = MUTED, dash, both, width = 1.3 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={width} strokeDasharray={dash ? '4 3' : undefined} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
      {!!both && <Head x={x1} y={y1} dx={x1 - x2} dy={y1 - y2} size={6} fill={c} />}
    </G>
  );
}

// A short label on a white patch, so it stays readable over lines.
export function Tag({ x, y, text, size = 7.5, color = MUTED, w }) {
  const width = w ?? String(text).length * size * 0.52 + 6;
  return (
    <G>
      <Rect x={x - width / 2} y={y - size} width={width} height={size + 4} fill="#ffffff" />
      <Txt x={x} y={y} size={size} fill={color}>
        {text}
      </Txt>
    </G>
  );
}

// ---------- two’s complement ----------
const PLACE = ['−128', '64', '32', '16', '8', '4', '2', '1'];
function TwosArt() {
  const x0 = 70;
  const cw = 34;
  const rows = [
    { label: 'Place value', bits: PLACE, fill: SAND, bold: true },
    { label: '+6', bits: '00000110'.split('') },
    { label: 'Invert', bits: '11111001'.split('') },
    { label: 'Add 1: −6', bits: '11111010'.split(''), fill: SKY, bold: true },
  ];
  return (
    <G>
      {rows.map((r, j) => (
        <G key={j}>
          <Txt x={x0 - 6} y={20 + j * 26 + 3.5} size={8.5} anchor="end" weight={j === 3 ? '700' : '500'}>
            {r.label}
          </Txt>
          {r.bits.map((b, i) => (
            <Cell key={i} x={x0 + i * cw} y={10 + j * 26} w={cw} h={20} text={b} fill={j === 0 && i === 0 ? ROSE : r.fill || '#ffffff'} bold={r.bold} size={j === 0 ? 8 : 9.5} />
          ))}
        </G>
      ))}
      <Txt x={x0 + 4 * cw} y={130} size={9} weight="700" fill={BLUE}>
        −128 + 64 + 32 + 16 + 8 + 2 = −6
      </Txt>
    </G>
  );
}

// ---------- floating point ----------
const MANT = '01011000'.split('');
const MPLACE = ['−1', '½', '¼', '⅛', '1/16', '1/32', '1/64', '1/128'];
function FloatArt() {
  const cw = 28;
  const mx = 10;
  const ex = 262;
  return (
    <G>
      <Txt x={mx + 4 * cw} y={14} size={9} weight="700">
        Mantissa (8 bits)
      </Txt>
      <Txt x={ex + 2 * cw} y={14} size={9} weight="700">
        Exponent (4 bits)
      </Txt>
      {MANT.map((b, i) => (
        <Cell key={i} x={mx + i * cw} y={22} w={cw} h={24} text={b} fill={i === 0 ? ROSE : SKY} size={10} bold />
      ))}
      <Circle cx={mx + cw} cy={42} r={2.6} fill={RED} />
      {MPLACE.map((p, i) => (
        <Txt key={i} x={mx + i * cw + cw / 2} y={60} size={7.5} fill={MUTED}>
          {p}
        </Txt>
      ))}
      {'0011'.split('').map((b, i) => (
        <Cell key={i} x={ex + i * cw} y={22} w={cw} h={24} text={b} fill={i === 0 ? ROSE : LEAF} size={10} bold />
      ))}
      {['−8', '4', '2', '1'].map((p, i) => (
        <Txt key={i} x={ex + i * cw + cw / 2} y={60} size={7.5} fill={MUTED}>
          {p}
        </Txt>
      ))}
      <Txt x={8} y={84} size={8.5} anchor="start">
        Mantissa 0.1011000 = ½ + ⅛ + 1/16 = 0.6875 (binary point after the sign bit)
      </Txt>
      <Txt x={8} y={100} size={8.5} anchor="start">
        Exponent 0011 = 3, so the value is 0.6875 × 2³ = 5.5
      </Txt>
      <Txt x={8} y={116} size={8.5} anchor="start" weight="700" fill={BLUE}>
        Normalised: a positive mantissa starts 0.1, a negative one 1.0
      </Txt>
    </G>
  );
}

// ---------- a parity block with one error ----------
// Even parity. Bit 5 of byte 3 was 1 when sent and arrives as 0.
const BLOCK = ['10110001', '11101000', '01000110', '10011010'];
const PBYTE = '10001011';
function ParityArt() {
  const x0 = 86;
  const cw = 24;
  const y0 = 24;
  const rh = 22;
  const all = [...BLOCK, PBYTE];
  return (
    <G>
      {['1', '2', '3', '4', '5', '6', '7', 'P'].map((c, i) => (
        <Txt key={c} x={x0 + i * cw + cw / 2} y={16} size={8} weight="700" fill={i === 7 ? BLUE : MUTED}>
          {c}
        </Txt>
      ))}
      {all.map((byte, j) => (
        <G key={j}>
          <Txt x={x0 - 6} y={y0 + j * rh + 14} size={8.5} anchor="end" weight={j === 4 ? '700' : '500'}>
            {j === 4 ? 'Parity byte' : `Byte ${j + 1}`}
          </Txt>
          {byte.split('').map((b, i) => (
            <Cell key={i} x={x0 + i * cw} y={y0 + j * rh} w={cw} h={rh} text={b} size={9.5} bold={j === 2 && i === 4} fill={j === 2 && i === 4 ? ROSE : i === 7 || j === 4 ? SKY : '#ffffff'} color={j === 2 && i === 4 ? RED : undefined} />
          ))}
          <Txt x={x0 + 8 * cw + 8} y={y0 + j * rh + 14} size={8} anchor="start" weight={j === 2 ? '700' : '500'} fill={j === 2 ? RED : GREEN}>
            {j === 2 ? 'odd: fails' : 'even'}
          </Txt>
        </G>
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <Txt key={i} x={x0 + i * cw + cw / 2} y={y0 + 5 * rh + 13} size={7} weight={i === 4 ? '700' : '500'} fill={i === 4 ? RED : GREEN}>
          {i === 4 ? 'odd' : 'ok'}
        </Txt>
      ))}
      <Txt x={x0 + 4 * cw} y={y0 + 5 * rh + 32} size={8.5} weight="700" fill={BLUE}>
        The wrong bit is where the failing row and column cross
      </Txt>
    </G>
  );
}

// ---------- registers and buses ----------
function RegistersArt() {
  const reg = (x, y, text, fill = SKY) => <Cell x={x} y={y} w={94} h={22} text={text} fill={fill} size={8.5} rx={3} />;
  return (
    <G>
      <Rect x={6} y={6} width={232} height={160} rx={8} fill="#f6f8fa" stroke={O} strokeWidth={1.1} />
      <Txt x={122} y={20} size={9.5} weight="700">
        Processor
      </Txt>
      {reg(14, 30, 'PC')}
      {reg(14, 62, 'CIR')}
      {reg(14, 94, 'ACC')}
      {reg(14, 126, 'Status (flags)', SAND)}
      {reg(134, 30, 'MAR', LEAF)}
      {reg(134, 62, 'MDR', LEAF)}
      <Cell x={134} y={96} w={94} h={26} text="Control unit" fill={LILAC} size={8.5} rx={3} />
      <Cell x={134} y={130} w={94} h={26} text="ALU" fill={MINT} size={8.5} rx={3} />
      <Arrow x1={108} y1={41} x2={133} y2={41} />
      <Arrow x1={134} y1={73} x2={109} y2={73} />
      <Rect x={304} y={26} width={70} height={134} rx={4} fill={SAND} stroke={O} strokeWidth={1.1} />
      <Txt x={339} y={40} size={9} weight="700">
        Memory
      </Txt>
      {['120: LDA 30', '121: ADD 31', '122: STA 32'].map((t, i) => (
        <Txt key={t} x={339} y={64 + i * 18} size={7.5}>
          {t}
        </Txt>
      ))}
      <Arrow x1={228} y1={41} x2={303} y2={41} c={BLUE} width={1.6} />
      <Tag x={268} y={35} text="Address bus" color={BLUE} />
      <Arrow x1={229} y1={73} x2={303} y2={73} c={GREEN} both width={1.6} />
      <Tag x={268} y={67} text="Data bus" color={GREEN} />
      <Arrow x1={229} y1={109} x2={303} y2={109} c={RED} both width={1.6} />
      <Tag x={268} y={103} text="Control bus" color={RED} />
      <Txt x={190} y={184} size={8.5} weight="700">
        MAR ← [PC]; PC ← [PC] + 1; MDR ← [[MAR]]; CIR ← [MDR]
      </Txt>
    </G>
  );
}

// ---------- addressing modes ----------
function AddressingArt() {
  const mem = [
    ['30', '50'],
    ['31', '12'],
    ['50', '7'],
    ['51', '3'],
  ];
  const modes = [
    ['LDA #30', 'Immediate: ACC ← 30', 'the operand is the value'],
    ['LDA 30', 'Direct: ACC ← [30] = 50', 'the operand is the address'],
    ['LDA 30, indirect', 'Indirect: ACC ← [[30]] = 7', '30 holds the address 50'],
  ];
  return (
    <G>
      {modes.map((m, i) => (
        <G key={i}>
          <Cell x={6} y={14 + i * 42} w={96} h={26} text={m[0]} fill={[SKY, LEAF, LILAC][i]} size={8.5} bold rx={4} />
          <Txt x={110} y={24 + i * 42} size={8.5} anchor="start" weight="700">
            {m[1]}
          </Txt>
          <Txt x={110} y={37 + i * 42} size={8} anchor="start" fill={MUTED}>
            {m[2]}
          </Txt>
        </G>
      ))}
      <Txt x={316} y={12} size={8.5} weight="700">
        Memory
      </Txt>
      <Cell x={270} y={18} w={44} h={18} text="Address" fill={SAND} size={7.5} bold />
      <Cell x={314} y={18} w={50} h={18} text="Contents" fill={SAND} size={7.5} bold />
      {mem.map((r, i) => (
        <G key={i}>
          <Cell x={270} y={36 + i * 20} w={44} h={20} text={r[0]} size={8.5} />
          <Cell x={314} y={36 + i * 20} w={50} h={20} text={r[1]} size={8.5} bold={i === 0 || i === 2} fill={i === 0 ? LEAF : i === 2 ? LILAC : '#ffffff'} />
        </G>
      ))}
    </G>
  );
}

// ---------- a three-stage pipeline ----------
function PipelineArt() {
  const x0 = 66;
  const cw = 36;
  const y0 = 24;
  const rh = 22;
  const col = { F: SKY, D: SAND, E: LEAF };
  return (
    <G>
      {Array.from({ length: 7 }, (_, c) => (
        <Txt key={c} x={x0 + c * cw + cw / 2} y={16} size={8} weight="700" fill={MUTED}>
          {`${c + 1}`}
        </Txt>
      ))}
      <Txt x={x0 - 6} y={16} size={8} anchor="end" weight="700" fill={MUTED}>
        Cycle
      </Txt>
      {Array.from({ length: 5 }, (_, r) => (
        <G key={r}>
          <Txt x={x0 - 6} y={y0 + r * rh + 14} size={8.5} anchor="end">
            {`Instruction ${r + 1}`}
          </Txt>
          {['F', 'D', 'E'].map((s, k) => (
            <Cell key={s} x={x0 + (r + k) * cw} y={y0 + r * rh} w={cw} h={rh} text={s} fill={col[s]} size={9} bold />
          ))}
        </G>
      ))}
      <Txt x={x0 + 3.5 * cw} y={y0 + 5 * rh + 18} size={8.5} weight="700" fill={BLUE}>
        F fetch, D decode, E execute: 5 instructions in 5 + 3 − 1 = 7 cycles, not 15
      </Txt>
    </G>
  );
}

// ---------- paging ----------
const PT = [3, 7, 5];
function PagingArt() {
  const fy = (f) => 24 + f * 20;
  return (
    <G>
      <Txt x={41} y={14} size={9} weight="700">
        Program
      </Txt>
      <Txt x={165} y={14} size={9} weight="700">
        Page table
      </Txt>
      <Txt x={320} y={14} size={9} weight="700">
        Memory frames
      </Txt>
      {PT.map((f, p) => (
        <G key={p}>
          <Cell x={6} y={26 + p * 30} w={70} h={24} text={`Page ${p}`} fill={[SKY, LEAF, SAND][p]} size={8.5} bold />
          <Arrow x1={76} y1={38 + p * 30} x2={119} y2={38 + p * 30} />
          <Cell x={120} y={26 + p * 30} w={90} h={24} text={`${p}  →  frame ${f}`} size={8.5} />
          <Arrow x1={210} y1={38 + p * 30} x2={269} y2={fy(f) + 10} c={BLUE} />
        </G>
      ))}
      {Array.from({ length: 8 }, (_, f) => {
        const p = PT.indexOf(f);
        return <Cell key={f} x={270} y={fy(f)} w={100} h={20} text={p >= 0 ? `Frame ${f}: page ${p}` : `Frame ${f}`} fill={p >= 0 ? [SKY, LEAF, SAND][p] : '#ffffff'} size={8} bold={p >= 0} />;
      })}
      <Txt x={6} y={130} size={8} anchor="start" fill={MUTED}>
        Pages and frames
      </Txt>
      <Txt x={6} y={142} size={8} anchor="start" fill={MUTED}>
        are 4096 bytes
      </Txt>
      <Txt x={190} y={202} size={8.5} weight="700" fill={BLUE}>
        Address 9000 = page 2, offset 808 → 5 × 4096 + 808 = 21 288
      </Txt>
    </G>
  );
}

// ---------- scheduling Gantt charts ----------
const GANTT = [
  ['FCFS', '6.67 ms', [['P1', 0, 8], ['P2', 8, 12], ['P3', 12, 14]]],
  ['SJF', '2.67 ms', [['P3', 0, 2], ['P2', 2, 6], ['P1', 6, 14]]],
  ['RR, q = 3', '6.67 ms', [['P1', 0, 3], ['P2', 3, 6], ['P3', 6, 8], ['P1', 8, 11], ['P2', 11, 12], ['P1', 12, 14]]],
];
const PFILL = { P1: SKY, P2: SAND, P3: LEAF };
function GanttArt() {
  const x0 = 70;
  const u = 20;
  return (
    <G>
      {GANTT.map(([name, wait, bars], r) => {
        const y = 14 + r * 46;
        const ticks = [0, ...bars.map((b) => b[2])];
        return (
          <G key={name}>
            <Txt x={x0 - 8} y={y + 10} size={9} anchor="end" weight="700">
              {name}
            </Txt>
            <Txt x={x0 - 8} y={y + 21} size={7.5} anchor="end" fill={MUTED}>
              {`wait ${wait}`}
            </Txt>
            {bars.map(([p, a, b], k) => (
              <Cell key={k} x={x0 + a * u} y={y} w={(b - a) * u} h={22} text={p} fill={PFILL[p]} size={8.5} bold />
            ))}
            {ticks.map((t) => (
              <Txt key={t} x={x0 + t * u} y={y + 32} size={7.5} fill={MUTED}>
                {`${t}`}
              </Txt>
            ))}
          </G>
        );
      })}
      <Txt x={x0 + 7 * u} y={154} size={8.5} weight="700" fill={BLUE}>
        P1 8 ms, P2 4 ms, P3 2 ms, all arriving at time 0 (times in ms)
      </Txt>
    </G>
  );
}

// ---------- deadlock ----------
function DeadlockArt() {
  return (
    <G>
      <Cell x={125} y={10} w={90} h={30} text={'Printer\nresource'} fill={SAND} size={8.5} rx={4} />
      <Cell x={125} y={150} w={90} h={30} text={'Scanner\nresource'} fill={SAND} size={8.5} rx={4} />
      <Cell x={14} y={80} w={90} h={32} text={'Process A'} fill={SKY} size={9} bold rx={14} />
      <Cell x={236} y={80} w={90} h={32} text={'Process B'} fill={LEAF} size={9} bold rx={14} />
      <Arrow x1={125} y1={30} x2={72} y2={79} c={BLUE} />
      <Tag x={86} y={46} text="held by A" color={BLUE} />
      <Arrow x1={72} y1={113} x2={124} y2={160} c={RED} dash />
      <Tag x={84} y={146} text="A waits for" color={RED} />
      <Arrow x1={215} y1={160} x2={268} y2={113} c={BLUE} />
      <Tag x={256} y={146} text="held by B" color={BLUE} />
      <Arrow x1={268} y1={79} x2={216} y2={30} c={RED} dash />
      <Tag x={256} y={46} text="B waits for" color={RED} />
      <Txt x={170} y={94} size={9} weight="700">
        Circular wait:
      </Txt>
      <Txt x={170} y={106} size={8.5} fill={MUTED}>
        neither can go on
      </Txt>
    </G>
  );
}

// ---------- subnetting ----------
const SUB = [
  ['Address', '192.168.10.', '00100101', '37'],
  ['Mask /26', '255.255.255.', '11000000', '192'],
  ['Network', '192.168.10.', '00000000', '0'],
  ['Broadcast', '192.168.10.', '00111111', '63'],
];
function SubnetArt() {
  const x0 = 150;
  const cw = 22;
  return (
    <G>
      <Txt x={x0 + cw} y={14} size={7.5} weight="700" fill={BLUE}>
        network
      </Txt>
      <Txt x={x0 + 5 * cw} y={14} size={7.5} weight="700" fill={RED}>
        host bits
      </Txt>
      {SUB.map(([label, pre, bits, val], j) => (
        <G key={label}>
          <Txt x={6} y={33 + j * 26} size={8.5} anchor="start" weight="700">
            {label}
          </Txt>
          <Txt x={x0 - 3} y={33 + j * 26} size={8.5} anchor="end">
            {pre}
          </Txt>
          {bits.split('').map((b, i) => (
            <Cell key={i} x={x0 + i * cw} y={20 + j * 26} w={cw} h={20} text={b} size={9} fill={i < 2 ? SKY : SAND} bold={j === 0} />
          ))}
          <Txt x={x0 + 8 * cw + 8} y={33 + j * 26} size={9} anchor="start" weight="700">
            {`= ${val}`}
          </Txt>
        </G>
      ))}
      <Txt x={6} y={134} size={8.5} anchor="start" fill={MUTED}>
        Network: address AND mask. Broadcast: every host bit set to 1.
      </Txt>
      <Txt x={6} y={150} size={8.5} anchor="start" weight="700" fill={BLUE}>
        Hosts 192.168.10.1 to 192.168.10.62: 2⁶ − 2 = 62
      </Txt>
    </G>
  );
}

// ---------- NAT ----------
function NatArt() {
  const dev = [
    ['Phone', '192.168.1.20'],
    ['Laptop', '192.168.1.21'],
    ['PC', '192.168.1.22'],
  ];
  return (
    <G>
      <Rect x={4} y={6} width={222} height={124} rx={8} fill="#f6f8fa" stroke={MUTED} strokeWidth={0.8} strokeDasharray="4 3" />
      <Txt x={56} y={20} size={8} weight="700" fill={MUTED}>
        Private network
      </Txt>
      {dev.map(([n, ip], i) => (
        <G key={n}>
          <Cell x={10} y={28 + i * 34} w={92} h={28} text={`${n}\n${ip}`} fill={SKY} size={8} rx={4} />
          <Line x1={102} y1={42 + i * 34} x2={130} y2={76} stroke={MUTED} strokeWidth={1.1} />
        </G>
      ))}
      <Cell x={130} y={56} w={90} h={40} text={'Router (NAT)\n203.0.113.5'} fill={LEAF} size={8.5} rx={4} />
      <Arrow x1={220} y1={76} x2={287} y2={76} c={BLUE} both width={1.5} />
      <Tag x={254} y={70} text="Internet" color={BLUE} />
      <Cell x={288} y={56} w={92} h={40} text={'Web server\n198.51.100.7'} fill={SAND} size={8.5} rx={4} />
      <Rect x={40} y={140} width={300} height={44} rx={4} fill="#ffffff" stroke={O} strokeWidth={0.8} />
      <Txt x={190} y={154} size={8.5} weight="700">
        NAT table
      </Txt>
      <Txt x={190} y={170} size={8.5}>
        192.168.1.20 : 50000   ↔   203.0.113.5 : 62001
      </Txt>
    </G>
  );
}

// ---------- DNS resolution ----------
function DnsArt() {
  const servers = [
    ['Root server', 'refers to .cm servers', 10],
    ['.cm server', 'refers to example.cm', 70],
    ['example.cm server', 'gives the IP address', 130],
  ];
  return (
    <G>
      <Cell x={6} y={70} w={74} h={36} text={'Laptop'} fill={SKY} size={9} bold rx={4} />
      <Cell x={124} y={70} w={86} h={36} text={'Resolver\n(caches answers)'} fill={LEAF} size={8} rx={4} />
      <Arrow x1={80} y1={80} x2={123} y2={80} c={BLUE} />
      <Arrow x1={124} y1={97} x2={81} y2={97} c={GREEN} />
      <Tag x={102} y={66} text="name?" color={BLUE} />
      <Tag x={102} y={116} text="IP" color={GREEN} />
      {servers.map(([n, d, y], i) => (
        <G key={n}>
          <Cell x={262} y={y} w={112} h={36} text={`${n}\n${d}`} fill={SAND} size={8} rx={4} />
          <Arrow x1={210} y1={88 + (i - 1) * 6} x2={261} y2={y + 18} c={MUTED} both />
          <Circle cx={236} cy={(88 + (i - 1) * 6 + y + 18) / 2} r={7} fill="#ffffff" stroke={BLUE} strokeWidth={1} />
          <Txt x={236} y={(88 + (i - 1) * 6 + y + 18) / 2 + 3} size={8} weight="700" fill={BLUE}>
            {`${i + 1}`}
          </Txt>
        </G>
      ))}
      <Txt x={190} y={186} size={8.5} weight="700" fill={BLUE}>
        Root, then .cm, then the domain’s own server; the answer is cached for its TTL
      </Txt>
    </G>
  );
}

// ---------- well-known ports ----------
const PORTS = [
  ['20, 21', 'FTP', 'file transfer (passwords in plain text)'],
  ['22', 'SSH', 'encrypted remote login; SFTP'],
  ['25, 587', 'SMTP', 'sending email'],
  ['53', 'DNS', 'names to IP addresses'],
  ['80', 'HTTP', 'web pages'],
  ['110', 'POP3', 'downloading email'],
  ['143', 'IMAP', 'email kept on the server'],
  ['443', 'HTTPS', 'web pages over TLS'],
];
function PortsArt() {
  const xs = [6, 62, 124];
  const ws = [56, 62, 210];
  return (
    <G>
      {['Port', 'Protocol', 'Use'].map((h, i) => (
        <Cell key={h} x={xs[i]} y={6} w={ws[i]} h={20} text={h} fill={SAND} size={8.5} bold />
      ))}
      {PORTS.map((r, j) => (
        <G key={j}>
          {r.map((t, i) => (
            <Cell key={i} x={xs[i]} y={26 + j * 20} w={ws[i]} h={20} text={t} size={8} bold={i === 1} fill={j % 2 ? '#f6f8fa' : '#ffffff'} />
          ))}
        </G>
      ))}
    </G>
  );
}

// ---------- a firewall ----------
const RULES = ['1  allow TCP 443 to the server', '2  allow TCP 80 to the server', '3  deny TCP 22 from outside', '4  allow replies to inside', '5  deny everything else'];
function FirewallArt() {
  return (
    <G>
      <Cell x={6} y={40} w={70} h={90} text={'Internet'} fill={SAND} size={9} bold rx={6} />
      <Rect x={150} y={14} width={160} height={146} rx={6} fill={ROSE} stroke={O} strokeWidth={1.1} />
      <Txt x={230} y={32} size={9} weight="700">
        Firewall rules, in order
      </Txt>
      {RULES.map((r, i) => (
        <Txt key={r} x={158} y={54 + i * 20} size={8} anchor="start">
          {r}
        </Txt>
      ))}
      <Cell x={344} y={40} w={70} h={90} text={'School\nweb server'} fill={SKY} size={8.5} rx={6} />
      <Arrow x1={76} y1={62} x2={149} y2={62} c={GREEN} width={1.6} />
      <Tag x={113} y={55} text="HTTPS 443" color={GREEN} />
      <Arrow x1={310} y1={62} x2={343} y2={62} c={GREEN} width={1.6} />
      <Tag x={327} y={55} text="allowed" color={GREEN} w={34} />
      <Line x1={76} y1={110} x2={146} y2={110} stroke={RED} strokeWidth={1.6} />
      <Line x1={146} y1={101} x2={146} y2={119} stroke={RED} strokeWidth={2.4} />
      <Tag x={110} y={103} text="SSH 22" color={RED} />
      <Tag x={110} y={128} text="blocked" color={RED} />
    </G>
  );
}

export const A_COMPUTER = {
  'acs-twos-complement': {
    title: 'Negating a number in two’s complement',
    w: 350,
    h: 140,
    art: TwosArt,
    labels: [],
    facts: [
      'In 8-bit two’s complement the place values are −128, 64, 32, 16, 8, 4, 2 and 1: only the top bit is negative.',
      'To make −6, write 6 as 00000110, invert every bit to get 11111001, then add 1 to get 11111010.',
      'Check: −128 + 64 + 32 + 16 + 8 + 2 = −6.',
    ],
  },
  'acs-float': {
    title: 'A floating-point number: mantissa and exponent',
    w: 380,
    h: 124,
    art: FloatArt,
    labels: [],
    facts: [
      'The 8-bit mantissa 0.1011000 is a two’s complement fraction: the first bit is worth −1, then ½, ¼, ⅛ and so on.',
      'Here the mantissa is ½ + ⅛ + 1/16 = 0.6875, and the 4-bit exponent 0011 is 3.',
      'The value is 0.6875 × 2³ = 5.5.',
      'In normalised form a positive mantissa starts 0.1 and a negative one 1.0, which gives the most precision.',
    ],
  },
  'acs-parity': {
    title: 'A parity block finds and corrects one wrong bit',
    w: 340,
    h: 182,
    art: ParityArt,
    labels: [],
    facts: [
      'Each byte has seven data bits and an even parity bit P; after four bytes comes a parity byte that sets even parity down each column.',
      'Byte 3 arrives with an odd number of 1s, and column 5 also has an odd number of 1s.',
      'The wrong bit is where that row and column cross, so the receiver can change it back from 0 to 1.',
    ],
  },
  'acs-registers': {
    title: 'The registers and the three buses',
    w: 380,
    h: 192,
    art: RegistersArt,
    labels: [],
    facts: [
      'The processor holds the program counter (PC), current instruction register (CIR), accumulator (ACC), status register, memory address register (MAR) and memory data register (MDR), with the control unit and the ALU.',
      'The address bus carries addresses one way, from the MAR to memory. The data bus carries data both ways, to and from the MDR. The control bus carries read, write, clock and interrupt signals.',
      'The fetch: MAR ← [PC]; PC ← [PC] + 1; MDR ← [[MAR]]; CIR ← [MDR]. Then the control unit decodes the instruction in the CIR.',
    ],
  },
  'acs-addressing': {
    title: 'Immediate, direct and indirect addressing',
    w: 370,
    h: 136,
    art: AddressingArt,
    labels: [],
    facts: [
      'Memory location 30 holds 50 and location 50 holds 7.',
      'Immediate addressing, LDA #30, loads the number 30 itself.',
      'Direct addressing, LDA 30, loads the contents of address 30, which is 50.',
      'Indirect addressing goes to address 30, finds the address 50 there, and loads the contents of 50, which is 7.',
    ],
  },
  'acs-pipeline': {
    title: 'A three-stage pipeline',
    w: 330,
    h: 160,
    art: PipelineArt,
    labels: [],
    facts: [
      'Each instruction is fetched (F), decoded (D) and executed (E), one stage per clock cycle.',
      'While instruction 1 is executed, instruction 2 is decoded and instruction 3 is fetched.',
      'Five instructions finish in 5 + 3 − 1 = 7 cycles instead of 15.',
    ],
  },
  'acs-paging': {
    title: 'Paging: the page table maps pages to frames',
    w: 380,
    h: 210,
    art: PagingArt,
    labels: [],
    facts: [
      'A program is divided into pages, and memory into frames of the same size, here 4096 bytes.',
      'The page table shows that page 0 is in frame 3, page 1 in frame 7 and page 2 in frame 5: the pages need not be next to each other.',
      'Logical address 9000 is page 2, offset 808, so its physical address is 5 × 4096 + 808 = 21 288.',
    ],
  },
  'acs-scheduling': {
    title: 'Three schedules for the same processes',
    w: 360,
    h: 162,
    art: GanttArt,
    labels: [],
    facts: [
      'P1 needs 8 ms, P2 4 ms and P3 2 ms; all arrive at time 0.',
      'First come, first served runs P1, P2, P3: they wait 0, 8 and 12 ms, an average of 6.67 ms.',
      'Shortest job first runs P3, P2, P1: they wait 0, 2 and 6 ms, an average of 2.67 ms.',
      'Round robin with a 3 ms time slice takes turns: P3 finishes at 8 ms, P2 at 12 ms and P1 at 14 ms, an average wait of 6.67 ms.',
    ],
  },
  'acs-interrupt': flowSpec('Servicing an interrupt', ['Device sends\nan interrupt', 'Processor ends\nits current cycle', 'Registers saved\non the stack', 'ISR found in the\nvector table', 'Interrupt service\nroutine runs', 'Registers restored;\nprogram carries on'], { boxW: 116 }),
  'acs-deadlock': {
    title: 'Deadlock: a circular wait',
    w: 340,
    h: 190,
    art: DeadlockArt,
    labels: [],
    facts: [
      'Process A holds the printer and waits for the scanner.',
      'Process B holds the scanner and waits for the printer.',
      'Each waits for the other, so neither can continue. Deadlock needs mutual exclusion, hold and wait, no pre-emption and circular wait together.',
    ],
  },
  'acs-media': columnsSpec('Choosing a transmission medium', [
    { head: 'Twisted pair', items: ['Copper, cheap', 'Up to about 100 m', 'Some interference', 'Most local networks'] },
    { head: 'Fibre optic', items: ['Light in glass', 'Very high bandwidth', 'Low attenuation', 'No electrical noise', 'Costly to join'] },
    { head: 'Wireless', items: ['Wi-Fi, 4G, 5G radio', 'No cables; mobile', 'Slower; interference', 'Must be encrypted'] },
  ], { colW: 118 }),
  'acs-subnet': {
    title: 'Finding the network and broadcast addresses for /26',
    w: 370,
    h: 158,
    art: SubnetArt,
    labels: [],
    facts: [
      'Only the last byte is split by the /26 mask: its first 2 bits belong to the network and its last 6 bits to the host.',
      'The address 192.168.10.37 AND the mask 255.255.255.192 gives the network address 192.168.10.0.',
      'Setting all 6 host bits to 1 gives the broadcast address 192.168.10.63.',
      'The usable hosts are 192.168.10.1 to 192.168.10.62: 2⁶ − 2 = 62.',
    ],
  },
  'acs-nat': {
    title: 'Network address translation',
    w: 384,
    h: 190,
    art: NatArt,
    labels: [],
    facts: [
      'Devices inside use private addresses such as 192.168.1.20, which are never routed on the Internet.',
      'The router replaces the private address and port of each outgoing packet with its public address, 203.0.113.5, and a port of its own.',
      'Its NAT table records each pair, so replies coming back to 203.0.113.5:62001 are passed to 192.168.1.20:50000.',
    ],
  },
  'acs-dns': {
    title: 'Resolving a domain name',
    w: 380,
    h: 194,
    art: DnsArt,
    labels: [],
    facts: [
      'The laptop asks its resolver for the address of www.example.cm.',
      'If the answer is not cached, the resolver asks a root server, which refers it to the .cm servers.',
      'A .cm server refers it to the authoritative server for example.cm, which gives the IP address.',
      'The resolver returns the address to the laptop and caches it for its time to live (TTL).',
    ],
  },
  'acs-ports': {
    title: 'Well-known port numbers',
    w: 340,
    h: 194,
    art: PortsArt,
    labels: [],
    facts: PORTS.map(([p, n, u]) => `Port ${p}: ${n}, ${u}.`),
  },
  'acs-rsa': flowSpec('Sending a secret with public-key encryption', ['Brenda writes\nthe message', 'Encrypts it with\nAmadou’s public key', 'Ciphertext crosses\nthe Internet', 'Amadou decrypts it\nwith his private key', 'Only Amadou\ncan read it'], { boxW: 118, note: 'Toy RSA: n = 55, e = 3, d = 27; 9³ mod 55 = 14 and 14²⁷ mod 55 = 9' }),
  'acs-signature': flowSpec('Signing and checking a message', ['Sender hashes\nthe message', 'Encrypts the hash\nwith private key', 'Sends message\nand signature', 'Receiver decrypts\nwith public key', 'Hashes the\nmessage itself', 'Hashes match:\nauthentic, unchanged'], { boxW: 116 }),
  'acs-firewall': {
    title: 'A firewall applies its rules in order',
    w: 420,
    h: 168,
    art: FirewallArt,
    labels: [],
    facts: [
      'The firewall checks each packet against its rules from the top; the first rule that matches decides.',
      'Web traffic to port 443 (and 80) on the school’s server is allowed in.',
      'Remote login attempts to port 22 from outside are blocked.',
      'Replies to connections made from inside are allowed, and everything else is denied.',
    ],
  },
};
