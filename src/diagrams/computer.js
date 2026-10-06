// Computer Science figures for Forms 1 to 3: the processing cycle, the parts of a
// computer system, the keyboard, a folder tree, a healthy sitting position, the
// parts of a URL, LAN and WAN, network topologies, binary place values, a
// spreadsheet and flowchart symbols. Plain block drawings with ruled labels.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
const BLUE = '#3f6fb5';
const PALE = '#e6eef8';
const GREEN = '#e3f0da';
const AMBER = '#fbefd0';
const GREY = '#eef1f4';
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

function Arrow({ x1, y1, x2, y2, c = O, w = 1.3, size = 6, both }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={size} fill={c} />
      {both && <Head x={x1} y={y1} dx={x1 - x2} dy={y1 - y2} size={size} fill={c} />}
    </G>
  );
}

function Box({ x, y, w, h, fill = PALE, title, sub, r = 6, size = 10.5 }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={O} strokeWidth={1.3} />
      <Txt x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} size={size} weight="700">{title}</Txt>
      {!!sub && <Txt x={x + w / 2} y={y + h / 2 + 12} size={8.5}>{sub}</Txt>}
    </G>
  );
}

// ---------- input, processing, output, storage ----------
function IpoArt() {
  return (
    <G>
      <Box x={10} y={20} w={90} h={46} title="INPUT" sub="keyboard, scanner" fill={GREEN} />
      <Box x={125} y={20} w={90} h={46} title="PROCESSING" sub="the CPU" />
      <Box x={240} y={20} w={90} h={46} title="OUTPUT" sub="screen, printer" fill={AMBER} />
      <Box x={125} y={100} w={90} h={42} title="STORAGE" sub="disk, flash drive" fill={GREY} />
      <Arrow x1={100} y1={43} x2={124} y2={43} />
      <Arrow x1={215} y1={43} x2={239} y2={43} />
      <Arrow x1={170} y1={67} x2={170} y2={99} both />
    </G>
  );
}

// ---------- the parts of a computer system ----------
function SystemArt() {
  return (
    <G>
      <Box x={8} y={66} w={78} h={44} title="Input" sub="devices" fill={GREEN} />
      <Rect x={110} y={14} width={124} height={112} rx={8} fill="#f4f7fb" stroke={O} strokeWidth={1.5} />
      <Txt x={172} y={30} size={10.5} weight="700">CPU</Txt>
      <Box x={122} y={38} w={100} h={30} title="Control unit (CU)" size={9.5} />
      <Box x={122} y={76} w={100} h={30} title="ALU" size={9.5} />
      <Txt x={172} y={120} size={8.5}>and registers</Txt>
      <Box x={258} y={66} w={78} h={44} title="Output" sub="devices" fill={AMBER} />
      <Box x={110} y={150} w={124} h={38} title="Main memory" sub="RAM and ROM" fill={GREY} />
      <Box x={258} y={150} w={78} h={38} title="Storage" sub="secondary" fill={GREY} />
      <Arrow x1={86} y1={88} x2={109} y2={88} />
      <Arrow x1={234} y1={88} x2={257} y2={88} />
      <Arrow x1={172} y1={127} x2={172} y2={149} both />
      <Arrow x1={234} y1={169} x2={257} y2={169} both />
      {/* buses */}
      <Txt x={186} y={142} size={8} anchor="start">buses</Txt>
    </G>
  );
}

// ---------- the keyboard ----------
function KeyboardArt() {
  const key = (x, y, w = 13, h = 13, fill = '#ffffff') => <Rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx={2} fill={fill} stroke="#7d8b97" strokeWidth={0.8} />;
  const rows = [];
  // function row
  rows.push(key(12, 10, 14, 11, '#fde7c8'));
  range(12, (i) => rows.push(key(36 + i * 15.2 + (i > 3 ? 4 : 0) + (i > 7 ? 4 : 0), 10, 13, 11, '#fde7c8')));
  // alphanumeric block: 5 rows from y 28
  const y0 = 28;
  range(13, (i) => rows.push(key(12 + i * 15, y0)));
  rows.push(key(207, y0, 23, 13, '#dbe7f5')); // backspace
  rows.push(key(12, y0 + 15, 20, 13, '#dbe7f5')); // tab
  range(12, (i) => rows.push(key(34 + i * 15, y0 + 15)));
  rows.push(key(214, y0 + 15, 16, 13));
  rows.push(key(12, y0 + 30, 24, 13, '#dbe7f5')); // caps
  range(11, (i) => rows.push(key(38 + i * 15, y0 + 30)));
  rows.push(key(203, y0 + 30, 27, 13, '#dbe7f5')); // enter
  rows.push(key(12, y0 + 45, 31, 13, '#dbe7f5')); // shift
  range(10, (i) => rows.push(key(45 + i * 15, y0 + 45)));
  rows.push(key(195, y0 + 45, 35, 13, '#dbe7f5')); // shift
  rows.push(key(12, y0 + 60, 20, 13, '#dbe7f5')); // ctrl
  rows.push(key(34, y0 + 60, 16, 13, '#dbe7f5'));
  rows.push(key(52, y0 + 60, 18, 13, '#dbe7f5')); // alt
  rows.push(key(72, y0 + 60, 96, 13)); // space
  rows.push(key(170, y0 + 60, 18, 13, '#dbe7f5'));
  rows.push(key(190, y0 + 60, 18, 13, '#dbe7f5'));
  rows.push(key(210, y0 + 60, 20, 13, '#dbe7f5'));
  // navigation block
  range(3, (i) => rows.push(key(238 + i * 15, y0, 13, 13, '#e3f0da')));
  range(3, (i) => rows.push(key(238 + i * 15, y0 + 15, 13, 13, '#e3f0da')));
  rows.push(key(253, y0 + 45, 13, 13, '#e3f0da'));
  range(3, (i) => rows.push(key(238 + i * 15, y0 + 60, 13, 13, '#e3f0da')));
  // numeric keypad
  range(4, (r) => range(4, (c) => rows.push(key(290 + c * 15, y0 + r * 15, 13, 13, '#efe6f7'))));
  rows.push(key(290, y0 + 60, 28, 13, '#efe6f7'));
  rows.push(key(320, y0 + 60, 13, 13, '#efe6f7'));
  return (
    <G>
      <Rect x={4} y={4} width={334} height={102} rx={6} fill="#f4f6f8" stroke={O} strokeWidth={1.3} />
      {rows}
      <Txt x={120} y={y0 + 70} size={7.5}>Space bar</Txt>
    </G>
  );
}

// ---------- a folder tree ----------
function Folder({ x, y, name, open }) {
  return (
    <G>
      <Path d={`M${x} ${y - 9} L${x + 6} ${y - 9} L${x + 8} ${y - 7} L${x + 16} ${y - 7} L${x + 16} ${y + 3} L${x} ${y + 3} Z`} fill={open ? '#f6d77a' : '#f2c94c'} stroke="#a07a12" strokeWidth={0.9} />
      <Txt x={x + 22} y={y + 1} size={10} anchor="start" weight="700">{name}</Txt>
    </G>
  );
}
function FileIcon({ x, y, name }) {
  return (
    <G>
      <Path d={`M${x + 2} ${y - 10} L${x + 10} ${y - 10} L${x + 14} ${y - 6} L${x + 14} ${y + 4} L${x + 2} ${y + 4} Z`} fill="#ffffff" stroke="#5a6b78" strokeWidth={0.9} />
      <Txt x={x + 22} y={y + 1} size={10} anchor="start">{name}</Txt>
    </G>
  );
}
function FolderTreeArt() {
  const L = (x1, y1, x2, y2) => <Path d={`M${x1} ${y1} L${x1} ${y2} L${x2} ${y2}`} fill="none" stroke="#9aa7b2" strokeWidth={1} />;
  return (
    <G>
      <Rect x={10} y={8} width={30} height={16} rx={3} fill="#dbe7f5" stroke={O} strokeWidth={1} />
      <Txt x={25} y={20} size={10} weight="700">C:</Txt>
      {L(25, 24, 44, 42)}
      <Folder x={46} y={42} name="Users" open />
      {L(54, 46, 74, 64)}
      <Folder x={76} y={64} name="Ama" open />
      {L(84, 68, 104, 86)}
      <Folder x={106} y={86} name="Documents" open />
      {L(114, 90, 134, 108)}
      <Folder x={136} y={108} name="Form 2" open />
      {L(144, 112, 164, 128)}
      <FileIcon x={164} y={128} name="Geography.docx" />
      {L(144, 128, 164, 148)}
      <FileIcon x={164} y={148} name="Marks.xlsx" />
      {L(84, 86, 104, 170)}
      <Folder x={106} y={170} name="Pictures" />
      {L(114, 174, 134, 190)}
      <FileIcon x={134} y={190} name="Map.jpg" />
    </G>
  );
}

// ---------- a healthy sitting position ----------
function PostureArt() {
  return (
    <G>
      {/* desk and monitor */}
      <Rect x={150} y={118} width={130} height={7} fill="#c9a77a" stroke={O} strokeWidth={1} />
      <Line x1={270} y1={125} x2={270} y2={210} stroke={O} strokeWidth={2} />
      <Rect x={236} y={56} width={10} height={48} rx={2} fill="#3d4852" stroke={O} strokeWidth={1} />
      <Rect x={238} y={104} width={6} height={14} fill="#7d8b97" />
      <Rect x={226} y={116} width={26} height={3} fill="#7d8b97" />
      {/* keyboard */}
      <Rect x={168} y={112} width={34} height={6} rx={1} fill="#7d8b97" />
      {/* chair */}
      <Path d="M70 150 L122 150 L122 157 L70 157 Z" fill="#8a6a4a" stroke={O} strokeWidth={1} />
      <Path d="M70 157 L64 74" fill="none" stroke="#8a6a4a" strokeWidth={5} strokeLinecap="round" />
      <Line x1={96} y1={157} x2={96} y2={198} stroke={O} strokeWidth={2.5} />
      <Line x1={74} y1={204} x2={118} y2={204} stroke={O} strokeWidth={2.5} />
      {/* person */}
      <Circle cx={88} cy={52} r={13} fill="#d9b08c" stroke={O} strokeWidth={1.2} />
      <Path d="M86 66 L82 146" fill="none" stroke={BLUE} strokeWidth={9} strokeLinecap="round" />
      <Path d="M84 146 L150 146" fill="none" stroke="#2f4858" strokeWidth={8} strokeLinecap="round" />
      <Path d="M150 146 L150 204" fill="none" stroke="#2f4858" strokeWidth={7} strokeLinecap="round" />
      <Path d="M146 206 L166 206" fill="none" stroke={O} strokeWidth={4} strokeLinecap="round" />
      {/* arm: upper arm down, forearm level to the keyboard */}
      <Path d="M86 78 L96 112 L166 112" fill="none" stroke="#d9b08c" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      {/* line of sight */}
      <Line x1={98} y1={50} x2={234} y2={60} stroke="#e0a800" strokeWidth={1} strokeDasharray="4 3" />
      {/* floor */}
      <Line x1={40} y1={210} x2={300} y2={210} stroke={O} strokeWidth={1.2} />
      {/* arm's length */}
      <Arrow x1={104} y1={30} x2={232} y2={30} both size={5} c="#5a6b78" w={1} />
      <Txt x={168} y={24} size={8.5}>50 to 70 cm</Txt>
    </G>
  );
}

// ---------- the parts of a URL ----------
const URL_PARTS = [
  ['https://', 'protocol', '#dbe7f5'],
  ['www.example.com', 'domain name', '#e3f0da'],
  ['/news/', 'folder (path)', '#fbefd0'],
  ['index.html', 'page (file)', '#efe6f7'],
];
function UrlArt() {
  let x = 6;
  const out = [];
  URL_PARTS.forEach(([text, name, fill], i) => {
    const w = text.length * 6.6 + 10;
    out.push(
      <G key={i}>
        <Rect x={x} y={14} width={w} height={26} fill={fill} stroke={O} strokeWidth={1} />
        <Txt x={x + w / 2} y={31} size={11} weight="700">{text}</Txt>
        <Path d={`M${x + 3} 46 L${x + 3} 52 L${x + w - 3} 52 L${x + w - 3} 46`} fill="none" stroke="#5a6b78" strokeWidth={1} />
        <Txt x={x + w / 2} y={66} size={9}>{name}</Txt>
      </G>
    );
    x += w;
  });
  return <G>{out}</G>;
}

// ---------- LAN and WAN ----------
function Pc({ x, y }) {
  return (
    <G>
      <Rect x={x - 8} y={y - 7} width={16} height={11} rx={1} fill="#dbe7f5" stroke={O} strokeWidth={1} />
      <Rect x={x - 3} y={y + 4} width={6} height={3} fill="#7d8b97" />
    </G>
  );
}
function Lan({ cx, cy, label }) {
  const pcs = [[-44, -26], [44, -26], [-44, 26], [44, 26]];
  return (
    <G>
      <Rect x={cx - 66} y={cy - 46} width={132} height={92} rx={12} fill="none" stroke="#7d8b97" strokeWidth={1.1} strokeDasharray="4 3" />
      {pcs.map(([dx, dy], i) => (
        <Line key={i} x1={cx} y1={cy} x2={cx + dx} y2={cy + dy} stroke="#5a6b78" strokeWidth={1.1} />
      ))}
      <Rect x={cx - 13} y={cy - 6} width={26} height={12} rx={2} fill={GREEN} stroke={O} strokeWidth={1} />
      {pcs.map(([dx, dy], i) => (
        <Pc key={i} x={cx + dx} y={cy + dy} />
      ))}
      <Txt x={cx} y={cy - 52} size={9.5} weight="700">{label}</Txt>
    </G>
  );
}
function LanWanArt() {
  return (
    <G>
      <Lan cx={72} cy={62} label="LAN: a school" />
      <Lan cx={300} cy={62} label="LAN: an office" />
      {/* WAN cloud */}
      <Path d="M160 150 C150 150 146 138 156 134 C152 122 168 116 176 124 C182 112 202 114 204 126 C216 122 226 134 216 142 C222 152 210 158 202 154 C194 162 176 162 170 154 C164 158 156 156 160 150 Z" fill="#f4f7fb" stroke={O} strokeWidth={1.2} />
      <Txt x={186} y={144} size={9.5} weight="700">WAN</Txt>
      <Line x1={72} y1={108} x2={156} y2={138} stroke={BLUE} strokeWidth={1.6} />
      <Line x1={300} y1={108} x2={218} y2={138} stroke={BLUE} strokeWidth={1.6} />
      <Rect x={64} y={104} width={16} height={8} rx={2} fill={AMBER} stroke={O} strokeWidth={0.9} />
      <Rect x={292} y={104} width={16} height={8} rx={2} fill={AMBER} stroke={O} strokeWidth={0.9} />
    </G>
  );
}

// ---------- star, bus and ring ----------
function TopologiesArt() {
  const star = range(5, (i) => {
    const a = (-90 + i * 72) * (Math.PI / 180);
    return [56 + 38 * Math.cos(a), 56 + 38 * Math.sin(a)];
  });
  const ring = range(5, (i) => {
    const a = (-90 + i * 72) * (Math.PI / 180);
    return [290 + 36 * Math.cos(a), 56 + 36 * Math.sin(a)];
  });
  return (
    <G>
      {star.map(([x, y], i) => <Line key={i} x1={56} y1={56} x2={x} y2={y} stroke="#5a6b78" strokeWidth={1.2} />)}
      <Rect x={44} y={50} width={24} height={12} rx={2} fill={GREEN} stroke={O} strokeWidth={1} />
      {star.map(([x, y], i) => <Pc key={i} x={x} y={y} />)}
      <Txt x={56} y={118} size={10.5} weight="700">Star</Txt>
      {/* bus */}
      <Line x1={124} y1={70} x2={226} y2={70} stroke="#5a6b78" strokeWidth={2.2} />
      <Rect x={119} y={65} width={5} height={10} fill={O} />
      <Rect x={226} y={65} width={5} height={10} fill={O} />
      {[138, 162, 186, 210].map((x, i) => (
        <G key={x}>
          <Line x1={x} y1={70} x2={x} y2={i % 2 ? 90 : 50} stroke="#5a6b78" strokeWidth={1.2} />
          <Pc x={x} y={i % 2 ? 96 : 42} />
        </G>
      ))}
      <Txt x={175} y={118} size={10.5} weight="700">Bus</Txt>
      {/* ring */}
      <Circle cx={290} cy={56} r={36} fill="none" stroke="#5a6b78" strokeWidth={1.2} />
      {ring.map(([x, y], i) => <Pc key={i} x={x} y={y} />)}
      <Txt x={290} y={118} size={10.5} weight="700">Ring</Txt>
    </G>
  );
}

// ---------- binary place values ----------
function BinaryArt() {
  const values = [128, 64, 32, 16, 8, 4, 2, 1];
  const bits = [0, 0, 1, 0, 1, 1, 0, 1];
  return (
    <G>
      {values.map((v, i) => (
        <G key={v}>
          <Rect x={10 + i * 40} y={10} width={40} height={24} fill="#dbe7f5" stroke={O} strokeWidth={1} />
          <Txt x={30 + i * 40} y={27} size={10.5} weight="700">{v}</Txt>
          <Rect x={10 + i * 40} y={34} width={40} height={26} fill={bits[i] ? AMBER : '#ffffff'} stroke={O} strokeWidth={1} />
          <Txt x={30 + i * 40} y={52} size={13} weight="700">{bits[i]}</Txt>
        </G>
      ))}
      <Txt x={170} y={82} size={10.5}>00101101₂ = 32 + 8 + 4 + 1 = 45₁₀</Txt>
    </G>
  );
}

// ---------- a spreadsheet ----------
const SHEET = [
  ['Name', 'Maths', 'English', 'Total', 'Result'],
  ['Ama', '12', '14', '26', 'Pass'],
  ['Bello', '8', '9', '17', 'Fail'],
  ['Chi', '15', '11', '26', 'Pass'],
  ['Dikongue', '10', '13', '23', 'Pass'],
  ['Average', '11.25', '11.75', '23', ''],
];
function SheetArt() {
  const colW = [64, 46, 52, 44, 50];
  const x0 = 34;
  const y0 = 40;
  const h = 18;
  const xs = colW.reduce((a, w, i) => [...a, a[i] + w], [x0]);
  return (
    <G>
      {/* formula bar */}
      <Rect x={6} y={6} width={300} height={20} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={18} y={20} size={9.5} weight="700" italic>fx</Txt>
      <Txt x={34} y={20} size={10} anchor="start">=B5+C5</Txt>
      {/* column letters */}
      {colW.map((w, i) => (
        <G key={i}>
          <Rect x={xs[i]} y={y0 - h + 4} width={w} height={h - 4} fill={GREY} stroke="#9aa7b2" strokeWidth={0.8} />
          <Txt x={xs[i] + w / 2} y={y0 - 3} size={9} weight="700">{'ABCDE'[i]}</Txt>
        </G>
      ))}
      {SHEET.map((row, r) => (
        <G key={r}>
          <Rect x={10} y={y0 + r * h} width={24} height={h} fill={GREY} stroke="#9aa7b2" strokeWidth={0.8} />
          <Txt x={22} y={y0 + r * h + 13} size={9} weight="700">{r + 1}</Txt>
          {row.map((v, c) => {
            const active = r === 4 && c === 3;
            return (
              <G key={c}>
                <Rect x={xs[c]} y={y0 + r * h} width={colW[c]} height={h} fill={active ? '#ffffff' : r === 0 ? '#f4f7fb' : '#ffffff'} stroke={active ? '#2f7d4f' : '#c4ccd3'} strokeWidth={active ? 2 : 0.8} />
                <Txt x={c === 0 ? xs[c] + 4 : xs[c] + colW[c] - 4} y={y0 + r * h + 13} size={9.5} anchor={c === 0 ? 'start' : 'end'} weight={r === 0 ? '700' : '500'}>{v}</Txt>
              </G>
            );
          })}
        </G>
      ))}
    </G>
  );
}

// ---------- flowchart symbols and an example ----------
function FlowArt() {
  return (
    <G>
      {/* legend */}
      <Rect x={10} y={14} width={64} height={24} rx={12} fill={GREEN} stroke={O} strokeWidth={1.2} />
      <Txt x={42} y={30} size={9}>Start / Stop</Txt>
      <Path d="M18 56 L78 56 L70 80 L10 80 Z" fill={AMBER} stroke={O} strokeWidth={1.2} />
      <Txt x={44} y={72} size={9}>Input / Output</Txt>
      <Rect x={10} y={96} width={66} height={24} fill={PALE} stroke={O} strokeWidth={1.2} />
      <Txt x={43} y={112} size={9}>Process</Txt>
      <Path d="M43 134 L76 152 L43 170 L10 152 Z" fill="#efe6f7" stroke={O} strokeWidth={1.2} />
      <Txt x={43} y={156} size={9}>Decision</Txt>
      <Arrow x1={14} y1={190} x2={70} y2={190} />
      <Txt x={42} y={204} size={9}>Flow line</Txt>
      <Line x1={100} y1={10} x2={100} y2={210} stroke="#c4ccd3" strokeWidth={1} />
      {/* example: pass or fail */}
      <Rect x={186} y={8} width={64} height={22} rx={11} fill={GREEN} stroke={O} strokeWidth={1.2} />
      <Txt x={218} y={23} size={9.5} weight="700">Start</Txt>
      <Arrow x1={218} y1={30} x2={218} y2={42} />
      <Path d="M190 42 L254 42 L246 64 L182 64 Z" fill={AMBER} stroke={O} strokeWidth={1.2} />
      <Txt x={218} y={57} size={9.5}>Input mark</Txt>
      <Arrow x1={218} y1={64} x2={218} y2={78} />
      <Path d="M218 78 L262 100 L218 122 L174 100 Z" fill="#efe6f7" stroke={O} strokeWidth={1.2} />
      <Txt x={218} y={104} size={9}>mark ≥ 10?</Txt>
      <Line x1={174} y1={100} x2={142} y2={100} stroke={O} strokeWidth={1.3} />
      <Arrow x1={142} y1={100} x2={142} y2={140} />
      <Txt x={160} y={94} size={8.5} weight="700">Yes</Txt>
      <Line x1={262} y1={100} x2={294} y2={100} stroke={O} strokeWidth={1.3} />
      <Arrow x1={294} y1={100} x2={294} y2={140} />
      <Txt x={276} y={94} size={8.5} weight="700">No</Txt>
      <Path d="M116 140 L176 140 L168 162 L108 162 Z" fill={AMBER} stroke={O} strokeWidth={1.2} />
      <Txt x={142} y={155} size={9}>{'Output "Pass"'}</Txt>
      <Path d="M268 140 L328 140 L320 162 L260 162 Z" fill={AMBER} stroke={O} strokeWidth={1.2} />
      <Txt x={294} y={155} size={9}>{'Output "Fail"'}</Txt>
      <Path d="M142 162 L142 182 L210 182" fill="none" stroke={O} strokeWidth={1.3} />
      <Path d="M294 162 L294 182 L226 182" fill="none" stroke={O} strokeWidth={1.3} />
      <Arrow x1={218} y1={182} x2={218} y2={192} />
      <Rect x={186} y={192} width={64} height={22} rx={11} fill={GREEN} stroke={O} strokeWidth={1.2} />
      <Txt x={218} y={207} size={9.5} weight="700">Stop</Txt>
    </G>
  );
}

export const COMPUTER = {
  'ipo-cycle': { title: 'The information processing cycle', w: 340, h: 150, art: IpoArt, labels: [] },
  'computer-system': { title: 'The main parts of a computer system', w: 344, h: 194, art: SystemArt, labels: [] },
  'keyboard-zones': {
    title: 'The groups of keys on a keyboard',
    w: 342,
    h: 110,
    art: KeyboardArt,
    labels: [
      ['Function keys', 80, -8, 80, 12],
      ['Alphanumeric keys', -6, 50, 60, 50],
      ['Navigation keys', 253, 130, 253, 101],
      ['Numeric keypad', 312, -8, 312, 28],
      ['Backspace', 196, -8, 218, 32],
      ['Enter', 166, 130, 216, 66],
      ['Shift', -6, 80, 20, 79],
    ],
  },
  'folder-tree': { title: 'Folders, subfolders and files on drive C:', w: 270, h: 200, art: FolderTreeArt, labels: [] },
  'good-posture': {
    title: 'Sitting correctly at a computer',
    w: 300,
    h: 214,
    art: PostureArt,
    labels: [
      ['Top of screen\nat eye level', 316, 58, 247, 58],
      ['Back supported', 30, 96, 66, 96],
      ['Elbows at\nabout 90°', 30, 128, 95, 110],
      ['Wrists straight', 316, 100, 186, 110],
      ['Feet flat on\nthe floor', 316, 196, 160, 206],
    ],
  },
  'url-parts': { title: 'The parts of a web address (URL)', w: 312, h: 74, art: UrlArt, labels: [] },
  'lan-wan': {
    title: 'Two local area networks in different towns joined by a wide area network',
    w: 372,
    h: 166,
    art: LanWanArt,
    labels: [
      ['Switch', 150, 70, 85, 62],
      ['Router', 2, 130, 66, 109],
    ],
  },
  'network-topologies': { title: 'Network topologies: star, bus and ring', w: 340, h: 126, art: TopologiesArt, labels: [['Terminator', 122, -4, 121, 66], ['Switch', 6, 30, 46, 54]] },
  'binary-places': { title: 'Binary place values for an 8-bit number', w: 340, h: 92, art: BinaryArt, labels: [] },
  'spreadsheet-grid': { title: 'A spreadsheet: cell D5 holds the formula =B5+C5', w: 312, h: 150, art: SheetArt, labels: [['Active cell D5', 326, 112, 240, 120], ['Formula bar', 326, 16, 306, 16]] },
  'flowchart-symbols': { title: 'Flowchart symbols, and a flowchart that decides Pass or Fail', w: 336, h: 218, art: FlowArt, labels: [] },
};
