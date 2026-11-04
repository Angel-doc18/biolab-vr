// English Language figures for Form 1: greetings, an information sheet, the
// simple present, family types and a family tree, a classroom plan, permission,
// countable nouns, a street map, prepositions of time and place, furniture,
// appliances, a table setting, plural sounds and rules, a notice, scales of
// probability and frequency, hospital departments, job suffixes, duration,
// a party budget, directions, a postcard, the library, a football pitch, the
// sentence, vowels, habitats, phrasal verbs, a debate, tourist sites on a map
// of Cameroon, prefixes, narratives, transitive verbs, cultural practices,
// demonstratives, homophones, adjectives from nouns and writing a poem.
import { Circle, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';
import { Outline, TOWNS, px, py } from './geography4';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#3f8a4a';
const PAPER = '#fbf8f1';
const WOOD = '#c9a06a';

// ---------- an information sheet ----------
function InfoSheetArt() {
  const rows = [
    ['Surname', 'NJI'],
    ['First name(s)', 'GRACE MBONE'],
    ['Date of birth', '14/03/2014'],
    ['Place of birth', 'BAMENDA'],
    ['Sex', 'F'],
    ['Class', 'FORM 1 A'],
    ['Signature', 'G. Nji'],
  ];
  return (
    <G>
      <Rect x={10} y={8} width={320} height={232} rx={6} fill={PAPER} stroke={O} strokeWidth={1.2} />
      <Txt x={170} y={30} size={11} weight="700">
        STUDENT INFORMATION SHEET
      </Txt>
      {rows.map(([k, v], i) => {
        const y = 58 + i * 26;
        return (
          <G key={k}>
            <Txt x={24} y={y} size={9.5} anchor="start" weight="700">
              {k}:
            </Txt>
            <Line x1={124} y1={y + 3} x2={314} y2={y + 3} stroke={MUTED} strokeWidth={0.8} />
            <Txt x={130} y={y} size={10} anchor="start" fill={BLUE} italic={i === 6}>
              {v}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- a classroom seen from above ----------
function ClassroomArt() {
  const desk = (x, y) => <Rect key={`${x}-${y}`} x={x} y={y} width={64} height={22} rx={3} fill={WOOD} stroke={O} strokeWidth={0.9} />;
  return (
    <G>
      {/* walls with a door gap on the left near the front */}
      <Path d="M20 84 L20 236 L320 236 L320 26 L20 26 L20 52" fill="none" stroke={O} strokeWidth={2.2} />
      <Path d="M20 52 Q44 56 46 80" fill="none" stroke={MUTED} strokeWidth={1} strokeDasharray="3 3" />
      <Txt x={28} y={46} size={8.5} anchor="start" weight="700">
        door
      </Txt>
      {/* chalkboard on the front wall */}
      <Rect x={110} y={28} width={140} height={10} fill="#2f4a3a" />
      <Txt x={180} y={52} size={9} weight="700">
        chalkboard
      </Txt>
      {/* teacher's table near the door */}
      <Rect x={50} y={92} width={60} height={26} rx={3} fill="#a7c4e0" stroke={O} strokeWidth={0.9} />
      <Txt x={80} y={132} size={8.5} weight="700">
        teacher’s table
      </Txt>
      {/* six desks in three rows */}
      {[0, 1, 2].map((r) => [desk(140, 76 + r * 48), desk(226, 76 + r * 48)])}
      <Txt x={258} y={222} size={8.5} weight="700">
        six desks in three rows
      </Txt>
      {/* windows on the right wall */}
      {[70, 140].map((y) => (
        <Line key={y} x1={320} y1={y} x2={320} y2={y + 36} stroke="#7fb3e0" strokeWidth={5} />
      ))}
      <Txt x={314} y={64} size={8.5} anchor="end" weight="700">
        windows
      </Txt>
      {/* map on the back wall */}
      <Rect x={40} y={226} width={50} height={9} fill="#e9c46a" stroke={O} strokeWidth={0.8} />
      <Txt x={65} y={218} size={8.5} weight="700">
        map
      </Txt>
    </G>
  );
}

// ---------- a street map for directions ----------
function StreetMapArt() {
  return (
    <G>
      {/* Main Road and the side street */}
      <Rect x={10} y={140} width={320} height={22} fill="#d7d9dc" />
      <Rect x={220} y={14} width={22} height={126} fill="#d7d9dc" />
      <Txt x={130} y={159} size={8} weight="700" fill={MUTED}>
        MAIN ROAD
      </Txt>
      {/* buildings */}
      <Rect x={24} y={172} width={70} height={40} rx={3} fill="#f3d9a4" stroke={O} strokeWidth={1} />
      <Txt x={59} y={196} size={9} weight="700">
        school
      </Txt>
      <Rect x={120} y={172} width={66} height={32} rx={3} fill="#cfe5cf" stroke={O} strokeWidth={1} />
      <Txt x={153} y={192} size={9} weight="700">
        pharmacy
      </Txt>
      <Rect x={140} y={52} width={66} height={40} rx={3} fill="#e4dcef" stroke={O} strokeWidth={1} />
      <Txt x={173} y={76} size={9} weight="700">
        church
      </Txt>
      <Rect x={256} y={52} width={66} height={40} rx={3} fill="#f8e3df" stroke={O} strokeWidth={1} />
      <Txt x={289} y={76} size={9} weight="700">
        market
      </Txt>
      {/* the route */}
      <Path d="M59 172 L59 146 L231 146 L231 76" fill="none" stroke={RED} strokeWidth={2} strokeDasharray="5 4" />
      <Head x={231} y={70} dx={0} dy={-1} size={7} fill={RED} />
      <Circle cx={59} cy={172} r={4} fill={RED} />
      <Txt x={59} y={228} size={8.5} weight="700" fill={RED}>
        START
      </Txt>
      {/* north arrow */}
      <Line x1={30} y1={60} x2={30} y2={30} stroke={O} strokeWidth={1.4} />
      <Head x={30} y={26} dx={0} dy={-1} size={6} fill={O} />
      <Txt x={30} y={74} size={9} weight="700">
        N
      </Txt>
    </G>
  );
}

// ---------- a family tree ----------
function FamilyTreeArt() {
  const person = (x, y, name, mark) => (
    <G key={name}>
      <Rect x={x - (name.length > 6 ? 38 : 32)} y={y - 12} width={name.length > 6 ? 76 : 64} height={24} rx={5} fill={mark ? '#fbefd0' : '#e6eef8'} stroke={mark ? RED : O} strokeWidth={mark ? 1.6 : 1} />
      <Txt x={x} y={y + 4} size={9} weight="700">
        {name}
      </Txt>
    </G>
  );
  return (
    <G>
      {/* marriage lines */}
      <Line x1={158} y1={30} x2={182} y2={30} stroke={O} strokeWidth={1.4} />
      <Line x1={72} y1={100} x2={88} y2={100} stroke={O} strokeWidth={1.4} />
      <Line x1={252} y1={100} x2={268} y2={100} stroke={O} strokeWidth={1.4} />
      {/* parents to children */}
      <Path d="M170 30 L170 66 M120 66 L220 66 M120 66 L120 88 M220 66 L220 88" fill="none" stroke={O} strokeWidth={1.2} />
      <Path d="M80 100 L80 163" fill="none" stroke={O} strokeWidth={1.2} />
      <Path d="M260 100 L260 140 M226 140 L298 140 M226 140 L226 163 M298 140 L298 163" fill="none" stroke={O} strokeWidth={1.2} />
      {person(120, 30, 'Grandpa Tabe')}
      {person(220, 30, 'Grandma Mary')}
      {person(40, 100, 'Peter')}
      {person(120, 100, 'Ruth')}
      {person(220, 100, 'Clara')}
      {person(300, 100, 'Sam')}
      {person(80, 175, 'Joy', true)}
      {person(226, 175, 'Ben')}
      {person(298, 175, 'Eno')}
      <Txt x={170} y={212} size={8.5} fill={MUTED}>
        Short line: a married couple. Lines down: parents to children.
      </Txt>
    </G>
  );
}

// ---------- prepositions of place with a box and a ball ----------
function PrepPlaceArt() {
  const W = 82;
  const panel = (i, label, draw) => {
    const x = 4 + (i % 4) * (W + 2);
    const y = 6 + Math.floor(i / 4) * 96;
    return (
      <G key={label}>
        <Rect x={x} y={y} width={W} height={88} rx={6} fill="#f6f8fb" stroke="#c9d3dd" strokeWidth={1} />
        {draw(x + W / 2, y + 50)}
        <Txt x={x + W / 2} y={y + 82} size={9.5} weight="700">
          {label}
        </Txt>
      </G>
    );
  };
  const box = (cx, cy, k) => <Rect key={k || 'b'} x={cx - 18} y={cy - 14} width={36} height={28} fill={WOOD} stroke={O} strokeWidth={1} />;
  const ball = (cx, cy, k) => <Circle key={k || 'c'} cx={cx} cy={cy} r={7} fill={RED} stroke={O} strokeWidth={0.8} />;
  const table = (cx, cy) => <Path key="t" d={`M${cx - 26} ${cy - 16} L${cx + 26} ${cy - 16} M${cx - 22} ${cy - 16} L${cx - 22} ${cy + 14} M${cx + 22} ${cy - 16} L${cx + 22} ${cy + 14}`} stroke={O} strokeWidth={2} />;
  return (
    <G>
      {panel(0, 'in', (cx, cy) => [<Path key="u" d={`M${cx - 18} ${cy - 14} L${cx - 18} ${cy + 14} L${cx + 18} ${cy + 14} L${cx + 18} ${cy - 14}`} fill={WOOD} stroke={O} strokeWidth={1} />, ball(cx, cy + 5)])}
      {panel(1, 'on', (cx, cy) => [box(cx, cy + 6), ball(cx, cy - 15)])}
      {panel(2, 'under', (cx, cy) => [table(cx, cy), ball(cx, cy + 7)])}
      {panel(3, 'above', (cx, cy) => [box(cx, cy + 8), ball(cx, cy - 26)])}
      {panel(4, 'behind', (cx, cy) => [ball(cx + 14, cy - 10), box(cx - 4, cy + 4)])}
      {panel(5, 'in front of', (cx, cy) => [box(cx - 4, cy - 2), ball(cx + 8, cy + 10)])}
      {panel(6, 'next to', (cx, cy) => [box(cx - 10, cy), ball(cx + 20, cy + 7)])}
      {panel(7, 'between', (cx, cy) => [<Rect key="l" x={cx - 36} y={cy - 10} width={22} height={24} fill={WOOD} stroke={O} strokeWidth={1} />, <Rect key="r" x={cx + 14} y={cy - 10} width={22} height={24} fill={WOOD} stroke={O} strokeWidth={1} />, ball(cx, cy + 7)])}
    </G>
  );
}

// ---------- a table setting ----------
function TableSettingArt() {
  return (
    <G>
      <Rect x={20} y={14} width={300} height={156} rx={8} fill="#f4efe4" />
      {/* serviette, fork, plate, knife, spoon, glass */}
      <Rect x={58} y={76} width={26} height={44} fill="#cfe1f2" stroke={O} strokeWidth={0.8} />
      <Path d="M112 70 L112 132 M106 70 L106 88 Q112 96 118 88 L118 70 M112 70 L112 88" stroke={O} strokeWidth={1.6} fill="none" />
      <Circle cx={170} cy={100} r={40} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Circle cx={170} cy={100} r={27} fill="none" stroke="#c9d3dd" strokeWidth={1} />
      <Path d="M226 70 L226 132 M226 70 Q220 84 226 100" stroke={O} strokeWidth={1.6} fill="none" />
      <Path d="M250 84 L250 132" stroke={O} strokeWidth={1.6} />
      <Circle cx={250} cy={78} r={6} fill="none" stroke={O} strokeWidth={1.4} />
      <Circle cx={228} cy={42} r={11} fill="#e0f2f1" stroke={O} strokeWidth={1.1} />
      <Txt x={71} y={136} size={9} weight="700">
        serviette
      </Txt>
      <Txt x={112} y={150} size={9} weight="700">
        fork
      </Txt>
      <Txt x={170} y={160} size={9} weight="700">
        plate
      </Txt>
      <Txt x={226} y={150} size={9} weight="700">
        knife
      </Txt>
      <Txt x={258} y={164} size={9} weight="700">
        spoon
      </Txt>
      <Txt x={248} y={36} size={9} weight="700" anchor="start">
        glass
      </Txt>
    </G>
  );
}

// ---------- a notice ----------
function NoticeArt() {
  const tag = (y, text) => (
    <G key={text}>
      <Line x1={236} y1={y - 3} x2={252} y2={y - 3} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={256} y={y} size={8.5} anchor="start" fill={MUTED} weight="700">
        {text}
      </Txt>
    </G>
  );
  return (
    <G>
      <Rect x={16} y={10} width={216} height={216} rx={4} fill={PAPER} stroke={O} strokeWidth={1.2} />
      <Circle cx={30} cy={22} r={3} fill={RED} />
      <Circle cx={218} cy={22} r={3} fill={RED} />
      <Txt x={124} y={44} size={12} weight="700">
        CLEAN-UP CAMPAIGN
      </Txt>
      <Txt x={124} y={74} size={9}>
        All Form 1 students are invited
      </Txt>
      <Txt x={124} y={88} size={9}>
        to clean the school compound.
      </Txt>
      <Txt x={124} y={116} size={9} weight="700">
        Saturday 14th March, from 8 a.m.
      </Txt>
      <Txt x={124} y={130} size={9}>
        Meet at the flag post.
      </Txt>
      <Txt x={124} y={158} size={9}>
        Bring a cutlass, a broom or a hoe.
      </Txt>
      <Txt x={124} y={196} size={9} weight="700">
        Class prefect, Form 1 A
      </Txt>
      <Txt x={124} y={210} size={8.5}>
        10th March
      </Txt>
      {tag(44, 'title')}
      {tag(82, 'what and who')}
      {tag(124, 'when and where')}
      {tag(158, 'what to bring')}
      {tag(203, 'issued by, date')}
    </G>
  );
}

// ---------- a scale of certainty for modals ----------
function ProbabilityArt() {
  const y = 80;
  const mark = (x, word, under) => (
    <G key={word}>
      <Line x1={x} y1={y - 8} x2={x} y2={y + 8} stroke={O} strokeWidth={1.6} />
      <Txt x={x} y={y - 16} size={11} weight="700" fill={BLUE}>
        {word}
      </Txt>
      <Txt x={x} y={y + 24} size={8.5} fill={MUTED}>
        {under}
      </Txt>
    </G>
  );
  return (
    <G>
      <Line x1={20} y1={y} x2={318} y2={y} stroke={O} strokeWidth={1.6} />
      <Head x={322} y={y} dx={1} dy={0} size={7} fill={O} />
      {mark(40, 'can’t', 'surely not')}
      {mark(130, 'might', 'possible')}
      {mark(200, 'may, could', 'possible')}
      {mark(296, 'must', 'almost certain')}
      <Txt x={40} y={130} size={8.5} anchor="start" fill={RED}>
        less sure
      </Txt>
      <Txt x={318} y={130} size={8.5} anchor="end" fill={GREEN}>
        more sure
      </Txt>
      <Txt x={170} y={150} size={9.5} weight="700">
        “The river must be polluted; the fish are dying.”
      </Txt>
    </G>
  );
}

// ---------- adverbs of frequency ----------
function FrequencyArt() {
  const y = 70;
  const X = (pct) => 30 + pct * 2.8;
  const items = [
    [0, 'never', 1],
    [15, 'rarely', -1],
    [50, 'sometimes', 1],
    [70, 'often', -1],
    [90, 'usually', 1],
    [100, 'always', -1],
  ];
  return (
    <G>
      <Rect x={X(0)} y={y - 6} width={X(100) - X(0)} height={12} rx={6} fill="#e6eef8" stroke={O} strokeWidth={1} />
      {items.map(([p, w, side]) => (
        <G key={w}>
          <Circle cx={X(p)} cy={y} r={4} fill={BLUE} />
          <Txt x={X(p)} y={side > 0 ? y + 24 : y - 14} size={10} weight="700">
            {w}
          </Txt>
        </G>
      ))}
      <Txt x={X(0)} y={y + 40} size={8.5} fill={MUTED}>
        not ever
      </Txt>
      <Txt x={X(100)} y={y + 40} size={8.5} fill={MUTED}>
        every time
      </Txt>
      <Txt x={170} y={140} size={9.5} weight="700">
        “I always wash my hands.” “She is never late.”
      </Txt>
    </G>
  );
}

// ---------- prepositions of duration on a time line ----------
function DurationArt() {
  const X = (h) => 40 + (h - 6) * 90;
  const y = 128;
  return (
    <G>
      <Line x1={24} y1={y} x2={318} y2={y} stroke={O} strokeWidth={1.4} />
      <Head x={322} y={y} dx={1} dy={0} size={7} fill={O} />
      {[6, 7, 8, 9].map((h) => (
        <G key={h}>
          <Line x1={X(h)} y1={y - 5} x2={X(h)} y2={y + 5} stroke={O} strokeWidth={1.2} />
          <Txt x={X(h)} y={y + 18} size={9}>
            {`${h} p.m.`}
          </Txt>
        </G>
      ))}
      <Rect x={X(6)} y={y - 34} width={X(8) - X(6)} height={22} rx={4} fill="#fbefd0" stroke={O} strokeWidth={1} />
      <Txt x={(X(6) + X(8)) / 2} y={y - 19} size={9} weight="700">
        the film
      </Txt>
      {/* for two hours / from 6 to 8 */}
      <Path d={`M${X(6)} ${y - 46} L${X(6)} ${y - 52} L${X(8)} ${y - 52} L${X(8)} ${y - 46}`} fill="none" stroke={BLUE} strokeWidth={1.4} />
      <Txt x={(X(6) + X(8)) / 2} y={y - 60} size={9.5} weight="700" fill={BLUE}>
        for two hours (from 6 p.m. to 8 p.m.)
      </Txt>
      {/* during the film */}
      <Circle cx={X(7.3)} cy={y - 23} r={4} fill={RED} />
      <Txt x={X(7.3)} y={y + 40} size={9} weight="700" fill={RED}>
        “The phone rang during the film.”
      </Txt>
      <Line x1={X(7.3)} y1={y + 28} x2={X(7.3)} y2={y - 18} stroke={RED} strokeWidth={0.8} strokeDasharray="2 2" />
      {/* until 8 */}
      <Txt x={X(8) + 6} y={y - 4} size={9} anchor="start" weight="700" fill={GREEN}>
        until 8 p.m.
      </Txt>
    </G>
  );
}

// ---------- a party budget ----------
function BudgetArt() {
  const rows = [
    ['Cake', '6 000'],
    ['Drinks', '4 000'],
    ['Snacks', '3 000'],
    ['Balloons', '1 000'],
  ];
  const Y = (i) => 52 + i * 22;
  return (
    <G>
      <Rect x={40} y={14} width={260} height={196} rx={6} fill={PAPER} stroke={O} strokeWidth={1.1} />
      <Txt x={64} y={36} size={9.5} anchor="start" weight="700">
        Item
      </Txt>
      <Txt x={280} y={36} size={9.5} anchor="end" weight="700">
        Cost (FCFA)
      </Txt>
      <Line x1={52} y1={42} x2={288} y2={42} stroke={O} strokeWidth={1} />
      {rows.map(([k, v], i) => (
        <G key={k}>
          <Txt x={64} y={Y(i) + 8} size={9.5} anchor="start">
            {k}
          </Txt>
          <Txt x={280} y={Y(i) + 8} size={9.5} anchor="end">
            {v}
          </Txt>
        </G>
      ))}
      <Line x1={52} y1={Y(4) - 2} x2={288} y2={Y(4) - 2} stroke={O} strokeWidth={1} />
      <Txt x={64} y={Y(4) + 12} size={10} anchor="start" weight="700">
        Total
      </Txt>
      <Txt x={280} y={Y(4) + 12} size={10} anchor="end" weight="700">
        14 000
      </Txt>
      <Txt x={64} y={Y(5) + 14} size={9.5} anchor="start" fill={MUTED}>
        Money available
      </Txt>
      <Txt x={280} y={Y(5) + 14} size={9.5} anchor="end" fill={MUTED}>
        15 000
      </Txt>
      <Txt x={64} y={Y(6) + 14} size={10} anchor="start" weight="700" fill={GREEN}>
        Left over
      </Txt>
      <Txt x={280} y={Y(6) + 14} size={10} anchor="end" weight="700" fill={GREEN}>
        1 000
      </Txt>
    </G>
  );
}

// ---------- a postcard ----------
function PostcardArt() {
  const left = ['Yaoundé, 14th February', 'Dear Ndi,', 'Greetings from the capital!', 'Today we climbed the', 'Reunification Monument.', 'I wish you were here.', 'Love, Asong'];
  const right = ['Ndi Ayuk', 'Up Station', 'Bamenda'];
  return (
    <G>
      <Rect x={10} y={10} width={320} height={190} rx={6} fill={PAPER} stroke={O} strokeWidth={1.2} />
      <Line x1={176} y1={24} x2={176} y2={186} stroke={MUTED} strokeWidth={1} />
      {left.map((l, i) => (
        <Txt key={l} x={22} y={36 + i * 20} size={9} anchor="start" fill={BLUE} weight={i === 1 || i === 6 ? '700' : '500'}>
          {l}
        </Txt>
      ))}
      <Rect x={276} y={20} width={42} height={48} fill="#f8e3df" stroke={O} strokeWidth={1} />
      <Txt x={297} y={48} size={8} weight="700">
        stamp
      </Txt>
      {right.map((l, i) => (
        <G key={l}>
          <Line x1={190} y1={110 + i * 26} x2={318} y2={110 + i * 26} stroke={MUTED} strokeWidth={0.8} />
          <Txt x={194} y={106 + i * 26} size={9.5} anchor="start" fill={BLUE}>
            {l}
          </Txt>
        </G>
      ))}
      <Txt x={93} y={218} size={9} weight="700" fill={MUTED}>
        message on the left
      </Txt>
      <Txt x={253} y={218} size={9} weight="700" fill={MUTED}>
        address on the right
      </Txt>
    </G>
  );
}

// ---------- a football pitch ----------
function FootballPitchArt() {
  const player = (x, y, t, c) => (
    <G key={`${t}${x}${y}`}>
      <Circle cx={x} cy={y} r={8} fill={c} stroke="#ffffff" strokeWidth={1} />
      <Txt x={x} y={y + 3} size={7.5} weight="700" fill="#ffffff">
        {t}
      </Txt>
    </G>
  );
  return (
    <G>
      <Rect x={10} y={10} width={320} height={180} fill="#5f9e5a" />
      <Rect x={20} y={20} width={300} height={160} fill="none" stroke="#ffffff" strokeWidth={1.6} />
      <Line x1={170} y1={20} x2={170} y2={180} stroke="#ffffff" strokeWidth={1.6} />
      <Circle cx={170} cy={100} r={24} fill="none" stroke="#ffffff" strokeWidth={1.6} />
      <Rect x={20} y={60} width={44} height={80} fill="none" stroke="#ffffff" strokeWidth={1.6} />
      <Rect x={276} y={60} width={44} height={80} fill="none" stroke="#ffffff" strokeWidth={1.6} />
      <Rect x={12} y={86} width={8} height={28} fill="#ffffff" />
      <Rect x={320} y={86} width={8} height={28} fill="#ffffff" />
      {player(34, 100, 'GK', GREEN)}
      {player(80, 70, 'D', GREEN)}
      {player(80, 130, 'D', GREEN)}
      {player(126, 100, 'M', GREEN)}
      {player(156, 60, 'S', GREEN)}
      {player(196, 140, 'R', '#222222')}
      <Txt x={170} y={206} size={9} weight="700">
        GK goalkeeper, D defender, M midfielder, S striker, R referee
      </Txt>
      <Txt x={42} y={52} size={8} fill="#ffffff" weight="700">
        penalty area
      </Txt>
      <Txt x={298} y={84} size={8} fill="#ffffff" weight="700" anchor="end">
        goal
      </Txt>
      <Txt x={176} y={34} size={8} fill="#ffffff" weight="700" anchor="start">
        halfway line
      </Txt>
      <Txt x={200} y={104} size={8} fill="#ffffff" weight="700" anchor="start">
        centre circle
      </Txt>
    </G>
  );
}

// ---------- tourist sites on a sketch map of Cameroon ----------
const DX = 60;
function TouristSitesArt() {
  const site = (at, label, side, dy = 3) => {
    const x = px(at[0]) + DX;
    const y = py(at[1]);
    return (
      <G key={label}>
        <Circle cx={x} cy={y} r={3} fill={RED} />
        <Txt x={side > 0 ? x + 6 : x - 6} y={y + dy} size={8} anchor={side > 0 ? 'start' : 'end'} weight="700">
          {label}
        </Txt>
      </G>
    );
  };
  const mt = [9.12, 4.35]; // drawn a little north-west of Limbe so the two marks stay apart
  return (
    <G>
      <G transform={`translate(${DX} 0)`}>
        <Outline />
      </G>
      <Path d={`M${px(mt[0]) + DX - 6} ${py(mt[1]) + 4} L${px(mt[0]) + DX} ${py(mt[1]) - 7} L${px(mt[0]) + DX + 6} ${py(mt[1]) + 4} Z`} fill="#8d6e4a" />
      <Txt x={px(mt[0]) + DX - 20} y={py(mt[1]) - 4} size={8} anchor="end" weight="700">
        Mount Cameroon
      </Txt>
      {site(TOWNS.Limbe, 'Limbe beaches', -1, 12)}
      {site([9.89, 2.88], 'Kribi, Lobé Falls', -1, 4)}
      {site(TOWNS.Yaoundé, 'Yaoundé museum', 1)}
      {site([13.0, 3.2], 'Dja Reserve', 1)}
      {site([10.88, 5.73], 'Foumban palace', 1)}
      {/* Waza: the label sits outside the narrow northern tip, with a pointer */}
      <Circle cx={px(14.55) + DX} cy={py(11.3)} r={3} fill={RED} />
      <Line x1={px(14.55) + DX + 4} y1={py(11.3)} x2={px(15.6) + DX} y2={py(11.3)} stroke={O} strokeWidth={0.7} />
      <Txt x={px(15.6) + DX + 3} y={py(11.3) + 3} size={8} anchor="start" weight="700">
        Waza Park
      </Txt>
      {site([13.6, 10.6], 'Rhumsiki', -1)}
      <Txt x={px(12.2) + DX} y={py(1.55)} size={8} italic>
        Simplified sketch map
      </Txt>
    </G>
  );
}

// ---------- this, these, that, those ----------
function DemonstrativesArt() {
  const drum = (x, y, k) => (
    <G key={k}>
      <Rect x={x - 9} y={y - 10} width={18} height={22} rx={3} fill={WOOD} stroke={O} strokeWidth={0.9} />
      <Path d={`M${x - 9} ${y - 10} Q${x} ${y - 15} ${x + 9} ${y - 10}`} fill="#f4efe4" stroke={O} strokeWidth={0.9} />
    </G>
  );
  const cell = (x, y, word, n) => (
    <G key={word}>
      <Rect x={x} y={y} width={120} height={64} rx={6} fill="#f6f8fb" stroke="#c9d3dd" strokeWidth={1} />
      {n === 1 ? drum(x + 30, y + 30, `${word}1`) : [drum(x + 20, y + 30, `${word}1`), drum(x + 44, y + 30, `${word}2`)]}
      <Txt x={x + 90} y={y + 36} size={12} weight="700" fill={BLUE}>
        {word}
      </Txt>
    </G>
  );
  return (
    <G>
      <Txt x={140} y={20} size={9.5} weight="700">
        one
      </Txt>
      <Txt x={266} y={20} size={9.5} weight="700">
        more than one
      </Txt>
      <Txt x={56} y={64} size={9.5} weight="700" anchor="end">
        near
      </Txt>
      <Txt x={56} y={136} size={9.5} weight="700" anchor="end">
        far
      </Txt>
      {cell(80, 30, 'this', 1)}
      {cell(206, 30, 'these', 2)}
      {cell(80, 102, 'that', 1)}
      {cell(206, 102, 'those', 2)}
    </G>
  );
}


// ---------- a school timetable ----------
function TimetableArt() {
  const days = ['Mon', 'Tue', 'Wed'];
  const times = ['7.30', '8.30', '9.30', '10.30'];
  const grid = [
    ['English', 'Maths', 'French'],
    ['Maths', 'History', 'Biology'],
    ['Geography', 'English', 'Physics'],
    ['break', 'break', 'break'],
  ];
  const X = (c) => 70 + c * 88;
  const Y = (r) => 46 + r * 30;
  return (
    <G>
      {days.map((d, c) => (
        <G key={d}>
          <Rect x={X(c)} y={14} width={84} height={26} fill="#dbe7f5" stroke={O} strokeWidth={1} />
          <Txt x={X(c) + 42} y={31} size={9.5} weight="700">
            {d}
          </Txt>
        </G>
      ))}
      {times.map((t, r) => (
        <G key={t}>
          <Txt x={62} y={Y(r) + 18} size={9} anchor="end" weight="700">
            {t}
          </Txt>
          {grid[r].map((subj, c) => (
            <G key={`${t}${c}`}>
              <Rect x={X(c)} y={Y(r)} width={84} height={26} fill={subj === 'break' ? '#fbefd0' : '#ffffff'} stroke={O} strokeWidth={0.8} />
              <Txt x={X(c) + 42} y={Y(r) + 17} size={9}>
                {subj}
              </Txt>
            </G>
          ))}
        </G>
      ))}
      <Txt x={170} y={182} size={8.5} fill={MUTED}>
        On Tuesday the second lesson is History, at half past eight.
      </Txt>
    </G>
  );
}

// ---------- a meal plan on a budget ----------
function MealBudgetArt() {
  const rows = [
    ['Lunch', 'rice, beans, palm oil', '1 500'],
    ['Supper', 'plantains, eggs, vegetables', '1 400'],
  ];
  return (
    <G>
      <Rect x={14} y={12} width={312} height={168} rx={6} fill={PAPER} stroke={O} strokeWidth={1.1} />
      <Txt x={30} y={36} size={9.5} anchor="start" weight="700">
        Meal
      </Txt>
      <Txt x={96} y={36} size={9.5} anchor="start" weight="700">
        Food (balanced)
      </Txt>
      <Txt x={310} y={36} size={9.5} anchor="end" weight="700">
        FCFA
      </Txt>
      <Line x1={24} y1={44} x2={316} y2={44} stroke={O} strokeWidth={1} />
      {rows.map(([m, f, c], i) => (
        <G key={m}>
          <Txt x={30} y={68 + i * 26} size={9.5} anchor="start">
            {m}
          </Txt>
          <Txt x={96} y={68 + i * 26} size={9.5} anchor="start">
            {f}
          </Txt>
          <Txt x={310} y={68 + i * 26} size={9.5} anchor="end">
            {c}
          </Txt>
        </G>
      ))}
      <Line x1={24} y1={110} x2={316} y2={110} stroke={O} strokeWidth={1} />
      <Txt x={30} y={130} size={10} anchor="start" weight="700">
        Total
      </Txt>
      <Txt x={310} y={130} size={10} anchor="end" weight="700">
        2 900
      </Txt>
      <Txt x={30} y={152} size={9.5} anchor="start" fill={MUTED}>
        Budget
      </Txt>
      <Txt x={310} y={152} size={9.5} anchor="end" fill={MUTED}>
        3 000
      </Txt>
      <Txt x={30} y={172} size={10} anchor="start" weight="700" fill={GREEN}>
        Saved
      </Txt>
      <Txt x={310} y={172} size={10} anchor="end" weight="700" fill={GREEN}>
        100
      </Txt>
    </G>
  );
}

// ---------- the flag of Cameroon ----------
function FlagArt() {
  const cx = 170;
  const cy = 80;
  const R = 22;
  const r = 9;
  const star = Array.from({ length: 10 }, (_, k) => {
    const a = -Math.PI / 2 + (k * Math.PI) / 5;
    const d = k % 2 === 0 ? R : r;
    return `${(cx + d * Math.cos(a)).toFixed(1)},${(cy + d * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return (
    <G>
      <Rect x={50} y={20} width={80} height={120} fill="#007a5e" />
      <Rect x={130} y={20} width={80} height={120} fill="#ce1126" />
      <Rect x={210} y={20} width={80} height={120} fill="#fcd116" />
      <Rect x={50} y={20} width={240} height={120} fill="none" stroke={O} strokeWidth={1.2} />
      <Polygon points={star} fill="#fcd116" />
      <Txt x={90} y={158} size={9} weight="700">
        green
      </Txt>
      <Txt x={170} y={158} size={9} weight="700">
        red, with a yellow star
      </Txt>
      <Txt x={250} y={158} size={9} weight="700">
        yellow
      </Txt>
      <Txt x={170} y={182} size={10} weight="700">
        Motto: Peace – Work – Fatherland
      </Txt>
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const ENGLISH_F1 = {
  'en1-greetings': columnsSpec('Greeting people', [
    { head: 'Formal\n(elders, teachers)', items: ['Good morning, Sir.', 'Good afternoon, Madam.', 'How do you do?'] },
    { head: 'Informal\n(friends)', items: ['Hello!', 'Hi, Brenda!', 'How are you?'] },
    { head: 'Replies', items: ['I am fine, thank you.', 'Pleased to meet you.', 'Nice to meet you too.'] },
  ], { colW: 124 }),
  'en1-info-sheet': drawn('Filling in an information sheet', 340, 248, InfoSheetArt, [
    'The surname is the family name: NJI.',
    'First names, date and place of birth, sex and class follow, in capital letters.',
    'The sheet ends with a signature.',
  ]),
  'en1-present-simple': columnsSpec('The simple present tense', [
    { head: 'I, you, we, they\n(base form)', items: ['I play', 'they eat', 'we go', 'you have'] },
    { head: 'he, she, it\n(add -s or -es)', items: ['she plays', 'it eats', 'he goes, she watches', 'he carries, she has'] },
  ], { colW: 150 }),
  'en1-family-types': treeSpec('Types of family', 'The family', [
    { name: 'Nuclear', items: ['father', 'mother', 'children'] },
    { name: 'Extended', items: ['+ grandparents', '+ uncles, aunts', '+ cousins'] },
    { name: 'Single-parent', items: ['one parent', 'and the children'] },
    { name: 'Foster or\nadoptive', items: ['caring for a child', 'not born to them'] },
  ], { colW: 100 }),
  'en1-present-questions': columnsSpec('Questions and negatives in the simple present', [
    { head: 'Question', items: ['Do + I, you, we, they', 'Does + he, she, it', '"Does she sing?"'] },
    { head: 'Negative', items: ['don’t + base form', 'doesn’t + base form', '"She doesn’t sing."'] },
    { head: 'Short answers', items: ['Yes, I do.', 'No, she doesn’t.'] },
  ], { colW: 120 }),
  'en1-classroom': drawn('Our classroom seen from above', 340, 244, ClassroomArt, [
    'The chalkboard is on the front wall.',
    'The teacher’s table is near the door.',
    'There are six desks in three rows in front of the board.',
    'The windows are on the right wall and a map hangs on the back wall.',
  ]),
  'en1-permission': columnsSpec('Asking for, giving and refusing permission', [
    { head: 'Ask', items: ['May I …? (formal)', 'Could I …? (polite)', 'Can I …?', 'Do you mind if I …?'] },
    { head: 'Give', items: ['Yes, of course.', 'Certainly.', 'Go ahead.'] },
    { head: 'Refuse politely', items: ['I’m sorry, you can’t …', 'I’m afraid not.'] },
  ], { colW: 122 }),
  'en1-countable': treeSpec('Countable and uncountable nouns', 'Nouns', [
    { name: 'Countable', items: ['a mango, two mangoes', 'many eggs', 'How many?'] },
    { name: 'Uncountable', items: ['rice, water, money', 'much sugar', 'How much?'] },
    { name: 'Both can take', items: ['some (positive)', 'any (questions,', 'negatives)'] },
  ], { colW: 122 }),
  'en1-street-map': drawn('The way from the school to the market', 340, 236, StreetMapArt, [
    'Leave the school and turn right onto Main Road.',
    'Go straight on and go past the pharmacy.',
    'Take the first turning on the left.',
    'The market is on your right, opposite the church.',
  ], [[59, 160], [153, 146], [231, 120], [289, 72]]),
  'en1-adjectives': columnsSpec('Descriptive adjectives', [
    { head: 'Size', items: ['tall, short', 'big, small'] },
    { head: 'Appearance', items: ['beautiful', 'slim, plump'] },
    { head: 'Character', items: ['kind, honest', 'strict, patient'] },
    { head: 'Age', items: ['young, old', 'elderly'] },
  ], { colW: 96 }),
  'en1-family-tree': drawn('A family tree across three generations', 340, 220, FamilyTreeArt, [
    'Grandpa Tabe and Grandma Mary are at the top: they are Ruth’s and Clara’s parents.',
    'Peter married Ruth, and Clara married Sam.',
    'Joy is the child of Peter and Ruth.',
    'Ben and Eno, the children of Clara and Sam, are Joy’s cousins; Clara is Joy’s aunt.',
  ]),
  'en1-prep-time': columnsSpec('Prepositions of time', [
    { head: 'at\n(points of time)', items: ['at 7.30', 'at noon', 'at night', 'at the weekend'] },
    { head: 'on\n(days and dates)', items: ['on Monday', 'on 20th May', 'on my birthday'] },
    { head: 'in\n(longer periods)', items: ['in the morning', 'in May', 'in 2026', 'in the rainy season'] },
  ], { colW: 116 }),
  'en1-rules': columnsSpec('Rules at home and at school', [
    { head: 'At home', items: ['Wash your plate.', 'Be home before dark.', 'Do not open the door', 'to strangers.'] },
    { head: 'At school', items: ['Wear your uniform.', 'Raise your hand to speak.', 'Do not cheat in tests.'] },
  ], { colW: 156 }),
  'en1-prep-place': drawn('Prepositions of place', 340, 196, PrepPlaceArt, [
    'in: the ball is inside the box.',
    'on: the ball is on top of the box.',
    'under: the ball is below the table.',
    'above: the ball is higher than the box, not touching it.',
    'behind, in front of, next to and between show other positions.',
  ], [[45, 56], [129, 56], [213, 56], [297, 56], [171, 152]]),
  'en1-vowels-e': columnsSpec('Minimal pairs: /e/ and /eɪ/', [
    { head: 'Short /e/', items: ['pen', 'wet', 'let', 'men', 'sell'] },
    { head: 'Diphthong /eɪ/', items: ['pain', 'wait', 'late', 'main', 'sail'] },
  ], { colW: 120 }),
  'en1-appliances': columnsSpec('Household appliances', [
    { head: 'Appliance', items: ['fridge', 'gas cooker', 'iron', 'blender', 'kettle'] },
    { head: 'Use', items: ['keeps food cold', 'cooks food', 'presses clothes', 'mixes and grinds', 'boils water'] },
    { head: 'Safety', items: ['close the door', 'turn off the gas', 'unplug after use', 'use dry hands', 'do not overfill'] },
  ], { colW: 112 }),
  'en1-who-which': treeSpec('Relative pronouns', 'Relative pronoun', [
    { name: 'who', items: ['for people', 'the woman who cooked'] },
    { name: 'which', items: ['for things and animals', 'the plate which fell'] },
    { name: 'that', items: ['people or things', 'the dog that barked'] },
  ], { colW: 122 }),
  'en1-table-setting': drawn('Setting a place at table', 340, 196, TableSettingArt, [
    'The plate is in the middle.',
    'The fork goes on the left, with the serviette beside it.',
    'The knife, blade facing the plate, and the spoon go on the right.',
    'The glass stands above the knife.',
  ]),
  'en1-plural-sounds': columnsSpec('Three ways to say the plural -s', [
    { head: '/s/\nafter p, t, k, f', items: ['cups', 'cats', 'books', 'roofs'] },
    { head: '/z/\nafter voiced sounds', items: ['bags', 'bins', 'drums', 'trees'] },
    { head: '/ɪz/\nafter s, z, sh, ch, j', items: ['buses', 'roses', 'dishes', 'matches'] },
  ], { colW: 118 }),
  'en1-notice': drawn('The parts of a notice', 340, 232, NoticeArt, [
    'The title is in capital letters at the top.',
    'The notice says what is happening and who should come.',
    'It gives the date, time and place.',
    'It says what to bring.',
    'It ends with who issued it and the date.',
  ], [[124, 40], [124, 82], [124, 122], [124, 154], [124, 200]]),
  'en1-probability': drawn('How sure are we? Modals of probability', 340, 160, ProbabilityArt, [
    '"can’t" means we are almost sure something is not true.',
    '"might", "may" and "could" mean it is possible.',
    '"must" means we are almost sure it is true.',
  ]),
  'en1-confusables': columnsSpec('Words often confused', [
    { head: 'breath\n(noun)', items: ['Take a deep', 'breath.'] },
    { head: 'breathe\n(verb)', items: ['We breathe', 'air.'] },
    { head: 'born', items: ['I was born', 'in 2014.'] },
    { head: 'borne\n(carried)', items: ['Cholera is', 'water-borne.'] },
  ], { colW: 92 }),
  'en1-plural-rules': treeSpec('Forming the plural of nouns', 'Plural', [
    { name: 'add -s', items: ['plate → plates', 'day → days'] },
    { name: 'add -es', items: ['bus → buses', 'dish → dishes', 'potato → potatoes'] },
    { name: 'y → ies', items: ['baby → babies', 'berry → berries'] },
    { name: 'f → ves', items: ['knife → knives', 'leaf → leaves'] },
    { name: 'irregular', items: ['child → children', 'tooth → teeth', 'sheep → sheep'] },
  ], { colW: 96 }),
  'en1-food-hygiene': flowSpec('Food hygiene from market to mouth', ['Wash hands\nwith soap', 'Wash fruit and\nvegetables', 'Cook meat and\nfish well', 'Cover food from\nflies and dust', 'Keep raw and\ncooked food apart', 'Eat with clean\nhands and plates'], { boxW: 112 }),
  'en1-possessives': columnsSpec('Possessive adjectives and pronouns', [
    { head: 'Before a noun', items: ['my book', 'your bag', 'his pen', 'her cup', 'our house', 'their car'] },
    { head: 'Alone', items: ['mine', 'yours', 'his', 'hers', 'ours', 'theirs'] },
  ], { colW: 130 }),
  'en1-accidents': columnsSpec('Home accidents and how to prevent them', [
    { head: 'Accident', items: ['burns, scalds', 'cuts', 'falls', 'electric shock', 'poisoning'] },
    { head: 'Prevention', items: ['turn pot handles in', 'store knives safely', 'wipe wet floors', 'repair bad wires', 'lock up medicines'] },
    { head: 'First aid', items: ['cool with water', 'press, clean cloth', 'call an adult', 'switch off power', 'go to a health centre'] },
  ], { colW: 120 }),
  'en1-frequency': drawn('Adverbs of frequency from never to always', 340, 150, FrequencyArt, [
    '"always" means every time and "never" means not ever.',
    'In between, from less to more often: rarely, sometimes, often, usually.',
    'They come before the main verb but after "be".',
  ], [[30, 70], [170, 70], [170, 138]]),
  'en1-hospital': columnsSpec('Hospital departments', [
    { head: 'Department', items: ['outpatients', 'emergency', 'paediatrics', 'maternity', 'surgery', 'laboratory', 'pharmacy', 'radiology'] },
    { head: 'What it does', items: ['patients who go home', 'urgent cases', 'care of children', 'mothers and babies', 'operations', 'tests on samples', 'gives medicines', 'X-rays'] },
  ], { colW: 140 }),
  'en1-wh-words': columnsSpec('Wh- question words', [
    { head: 'Who, what, where, when', items: ['who: a person', 'what: a thing', 'where: a place', 'when: a time'] },
    { head: 'Why, which, whose, how', items: ['why: a reason', 'which: a choice', 'whose: an owner', 'how: the way'] },
  ], { colW: 150 }),
  'en1-job-suffixes': treeSpec('Making job nouns with suffixes', 'Job nouns', [
    { name: '-er', items: ['farmer', 'teacher', 'driver'] },
    { name: '-or', items: ['actor', 'director', 'inspector'] },
    { name: '-ist', items: ['pianist', 'journalist', 'scientist'] },
    { name: '-ian', items: ['electrician', 'musician', 'librarian'] },
  ], { colW: 96 }),
  'en1-duration': drawn('Prepositions of duration on a time line', 340, 186, DurationArt, [
    'The film lasted for two hours, from 6 p.m. to 8 p.m.',
    'Something that happens inside the film happens during the film.',
    '"until 8 p.m." gives the end point.',
  ]),
  'en1-see-look-watch': columnsSpec('See, look at or watch?', [
    { head: 'see', items: ['notice with your eyes', '"I saw a star."', 'see a film (cinema)'] },
    { head: 'look at', items: ['turn your eyes', 'on purpose', '"Look at this photo."'] },
    { head: 'watch', items: ['follow something', 'that moves', 'watch TV, a match'] },
  ], { colW: 118 }),
  'en1-budget': drawn('A birthday party budget', 340, 220, BudgetArt, [
    'Cake 6 000, drinks 4 000, snacks 3 000 and balloons 1 000 FCFA.',
    'The total is 14 000 FCFA.',
    'With 15 000 FCFA available, 1 000 FCFA is left over.',
  ]),
  'en1-directions': columnsSpec('Asking for and giving directions', [
    { head: 'Asking', items: ['Excuse me, how do I', 'get to the museum?', 'Could you tell me', 'where the bank is?'] },
    { head: 'Giving', items: ['Go straight on.', 'Turn left at the lights.', 'Take the second turning.', 'It’s opposite the bank.'] },
  ], { colW: 150 }),
  'en1-postcard': drawn('Writing a postcard', 340, 226, PostcardArt, [
    'The message goes on the left: place and date, greeting, a few sentences and your name.',
    'The stamp goes at the top right.',
    'The address goes on the right, below the stamp.',
  ]),
  'en1-library': flowSpec('Borrowing a library book', ['Look it up in\nthe catalogue', 'Find it on\nthe shelf', 'The librarian\nrecords it', 'Read it with\ncare', 'Return it by\nthe due date'], { boxW: 104 }),
  'en1-s-sounds': columnsSpec('The letter s: /s/ or /z/?', [
    { head: '/s/', items: ['sport', 'sister', 'bus', 'basket', 'yes'] },
    { head: '/z/', items: ['jersey', 'cousin', 'music', 'busy', 'goals'] },
  ], { colW: 118 }),
  'en1-football-pitch': drawn('A football pitch and the players', 340, 214, FootballPitchArt, [
    'The goals are at each end, inside the penalty areas.',
    'The halfway line and the centre circle are in the middle.',
    'The goalkeeper stops goals; defenders, midfielders and strikers play in front.',
    'The referee controls the match.',
  ]),
  'en1-sentence': columnsSpec('Subject, verb and object', [
    { head: 'Subject\n(who or what)', items: ['Our neighbour', 'The boys', 'The baby'] },
    { head: 'Verb\n(the action)', items: ['sells', 'repaired', 'is sleeping'] },
    { head: 'Object\n(receives it)', items: ['vegetables', 'the road', '(no object)'] },
  ], { colW: 112, arrow: true }),
  'en1-short-vowels': columnsSpec('The five vowel letters and their short sounds', [
    { head: 'a /æ/', items: ['cat', 'hat'] },
    { head: 'e /e/', items: ['bed', 'pen'] },
    { head: 'i /ɪ/', items: ['sit', 'fish'] },
    { head: 'o /ɒ/', items: ['hot', 'dog'] },
    { head: 'u /ʌ/', items: ['sun', 'cup'] },
  ], { colW: 64 }),
  'en1-habitats': treeSpec('Habitats and their animals', 'Habitats in Cameroon', [
    { name: 'Rainforest', items: ['gorilla', 'chimpanzee', 'forest elephant'] },
    { name: 'Savannah', items: ['lion', 'giraffe', 'antelope'] },
    { name: 'Rivers, lakes', items: ['fish', 'hippopotamus', 'crocodile'] },
  ], { colW: 112 }),
  'en1-phrasal': columnsSpec('Phrasal verbs', [
    { head: 'With up, after, for, out', items: ['give up: stop trying', 'look after: care for', 'look for: try to find', 'find out: discover'] },
    { head: 'With on, off, up', items: ['turn on: switch on', 'turn off: switch off', 'grow up: become adult', 'carry on: continue'] },
  ], { colW: 156 }),
  'en1-debate': flowSpec('A class debate', ['Chairperson\nreads the motion', 'Proposition\nspeaks for it', 'Opposition\nspeaks against it', 'Questions\nand replies', 'Vote and\nresult'], { boxW: 108 }),
  'en1-tourist-sites': drawn('Some tourist sites of Cameroon', 300, 330, TouristSitesArt, [
    'Mount Cameroon and the beaches of Limbe are in the South-West.',
    'Kribi and the Lobé Falls are on the coast of the South Region.',
    'Yaoundé has the National Museum; the Dja Reserve is in the south-east forest.',
    'Foumban has the Sultan’s palace; Waza Park and Rhumsiki are in the Far North.',
  ]),
  'en1-prefixes': treeSpec('Prefixes and their meanings', 'Prefixes', [
    { name: 'not', items: ['unhappy', 'dishonest', 'impossible', 'illegal'] },
    { name: 'again', items: ['rewrite', 'rebuild', 'return'] },
    { name: 'before', items: ['prepare', 'preview'] },
    { name: 'wrongly', items: ['misbehave', 'misspell'] },
  ], { colW: 96 }),
  'en1-narrative': flowSpec('Telling a story in order', ['Beginning: who,\nwhere and when', 'A problem or\nan adventure', 'What happened\nnext', 'How it ended\n(finally)', 'What I\nlearnt'], { boxW: 108 }),
  'en1-transitive': columnsSpec('Transitive and intransitive verbs', [
    { head: 'Transitive\n(has an object)', items: ['The dancers wore masks.', 'The chief opened', 'the festival.'] },
    { head: 'Intransitive\n(no object)', items: ['The guests arrived.', 'The baby slept.'] },
  ], { colW: 156 }),
  'en1-practices': columnsSpec('Cultural practices', [
    { head: 'Good: keep them', items: ['respect for elders', 'solidarity', 'hospitality', 'dances and songs', 'local languages'] },
    { head: 'Harmful: stop them', items: ['forced marriage', 'keeping girls from school', 'breast ironing', 'cruel widowhood rites', 'denying widows land'] },
  ], { colW: 156 }),
  'en1-demonstratives': drawn('This, these, that and those', 340, 176, DemonstrativesArt, [
    'this: one thing near you; these: more than one near you.',
    'that: one thing far away; those: more than one far away.',
  ]),
  'en1-homophones': columnsSpec('Homophones and homonyms', [
    { head: 'Homophones\n(same sound)', items: ['hear, here', 'see, sea', 'meet, meat', 'flour, flower'] },
    { head: 'Homonyms\n(same spelling)', items: ['bat: animal, sport', 'bank: money, river', 'bark: dog, tree'] },
  ], { colW: 150 }),
  'en1-noun-adjective': treeSpec('Adjectives from nouns', 'Noun + suffix', [
    { name: '-al', items: ['cultural', 'traditional', 'national'] },
    { name: '-ful', items: ['beautiful', 'helpful', 'colourful'] },
    { name: '-ous', items: ['dangerous', 'famous', 'courageous'] },
    { name: '-y', items: ['noisy', 'sunny', 'dusty'] },
  ], { colW: 96 }),
  'en1-poem': flowSpec('Writing a short poem', ['Choose your\nsubject', 'List strong\nwords', 'Write lines\nin stanzas', 'Add rhyme or\nrepetition', 'Read it aloud\nand improve'], { boxW: 104 }),
  'en1-timetable': drawn('Reading a school timetable', 340, 192, TimetableArt, [
    'The days are across the top and the times down the side.',
    'On Monday the first lesson, at half past seven, is English.',
    'On Tuesday the second lesson is History, at half past eight.',
    'Break is at half past ten every day.',
  ], [[202, 27], [112, 59], [200, 89], [200, 149]]),
  'en1-weather': columnsSpec('The seasons of Cameroon', [
    { head: 'South', items: ['rains: about March', 'to November', 'short dry spell', 'in July and August', 'humid all year'] },
    { head: 'North', items: ['rains: about June', 'to September', 'long dry season', 'harmattan wind', 'hot days'] },
  ], { colW: 150 }),
  'en1-comparatives': columnsSpec('Comparing two things', [
    { head: 'Short: -er than', items: ['tall, taller', 'big, bigger', 'heavy, heavier'] },
    { head: 'Long: more … than', items: ['more dangerous', 'more beautiful'] },
    { head: 'Irregular', items: ['good, better', 'bad, worse'] },
  ], { colW: 120 }),
  'en1-handwashing': flowSpec('Washing your hands', ['Wet your hands\nwith clean water', 'Apply\nsoap', 'Scrub for\n20 seconds', 'Rinse\nwell', 'Dry with a\nclean towel'], { boxW: 104 }),
  'en1-meal-budget': drawn('Two balanced meals for 3 000 FCFA', 340, 190, MealBudgetArt, [
    'Lunch of rice, beans and palm oil costs 1 500 FCFA.',
    'Supper of plantains, eggs and vegetables costs 1 400 FCFA.',
    'The total is 2 900 FCFA, so 100 FCFA of the 3 000 FCFA budget is saved.',
  ], [[180, 68], [190, 94], [170, 152]]),
  'en1-symbols': drawn('The flag and motto of Cameroon', 340, 192, FlagArt, [
    'The flag has three vertical bands: green, red and yellow.',
    'A five-pointed yellow star stands in the middle of the red band.',
    'The motto is Peace, Work, Fatherland.',
  ], [[170, 120], [170, 80], [170, 178]]),
  'en1-manner': columnsSpec('Adjectives and adverbs of manner', [
    { head: 'Adjective', items: ['careful', 'quick', 'gentle', 'easy', 'good', 'fast'] },
    { head: 'Adverb (how?)', items: ['carefully', 'quickly', 'gently', 'easily', 'well', 'fast'] },
  ], { colW: 130, arrow: true }),
  'en1-ict': columnsSpec('Computers and safe browsing', [
    { head: 'Hardware', items: ['monitor', 'keyboard, mouse', 'system unit, printer'] },
    { head: 'Software', items: ['browser', 'word processor', 'games, apps'] },
    { head: 'Stay safe', items: ['keep your password', 'never meet strangers', 'tell a trusted adult'] },
  ], { colW: 122 }),
  'en1-irregular-past': columnsSpec('Irregular verbs in the simple past', [
    { head: 'Base form', items: ['go', 'see', 'win', 'run', 'catch', 'lose'] },
    { head: 'Simple past', items: ['went', 'saw', 'won', 'ran', 'caught', 'lost'] },
  ], { colW: 120, arrow: true }),
  'en1-integration': columnsSpec('Integration tasks of the year', [
    { head: 'Module', items: ['1 self and family', '2 the school', '3 health', '4 the market', '5 culture'] },
    { head: 'Task', items: ['a family profile', 'class rules, a plan', 'a health poster', 'a 5 000 FCFA dialogue', 'a festival report'] },
  ], { colW: 150 }),
};
