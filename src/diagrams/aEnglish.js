// A Level English Language figures (0730): relative words, compound plurals,
// tense shifts, consonant contrasts, the language of computing, safety online,
// tag intonation, the story mountain, headlines, cohesion, banking words, a CV,
// environmental chains, procedures, summary steps and a word budget to scale,
// rights, reports, the GCE papers, inversion, rhetoric, main ideas, clichés, a
// memo, an article, stress shift, expository and argument plans, reporting
// verbs, concord, register, laboratory reports, minutes, flashback and common
// mock errors.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';
import { Arrow, CS, Cell } from './aComputer';
import { Table } from './aComputer3';

const { O, MUTED, BLUE, RED, GREEN, SKY, LEAF, SAND, ROSE } = CS;
const BAR = '#e3e8ec';

// Grey lines that stand for running text on a page.
function Bars({ x, y, w, n = 2, gap = 8 }) {
  return (
    <G>
      {Array.from({ length: n }, (_, i) => (
        <Rect key={i} x={x} y={y + i * gap} width={i === n - 1 ? w * 0.7 : w} height={4} rx={2} fill={BAR} />
      ))}
    </G>
  );
}

// ---------- compound nouns ----------
const COMPOUNDS = [
  ['One word', 'peacemaker', 'peacemakers'],
  ['One word', 'grandparent', 'grandparents'],
  ['Two words', 'land dispute', 'land disputes'],
  ['Hyphenated', 'mother-in-law', 'mothers-in-law'],
  ['Hyphenated', 'passer-by', 'passers-by'],
  ['No main noun', 'go-between', 'go-betweens'],
];
function CompoundsArt() {
  return <Table x={10} y={8} cols={[['Form', 90], ['Singular', 120], ['Plural', 120]]} rows={COMPOUNDS} rh={18} size={8} fills={(j, i) => (i === 2 ? LEAF : '#ffffff')} />;
}

// ---------- present to past ----------
const SHIFTS = [
  ['Simple present', 'dances', 'danced'],
  ['Present continuous', 'are singing', 'were singing'],
  ['Present perfect', 'has blessed', 'had blessed'],
  ['Future', 'will start', 'would start'],
  ['Modal', 'can see', 'could see'],
  ['Passive', 'is held', 'was held'],
  ['Time words', 'now, today', 'then, that day'],
];
function TenseShiftArt() {
  return (
    <G>
      <Table x={10} y={8} cols={[['Form', 110], ['Present text', 110], ['Past text', 110]]} rows={SHIFTS} rh={18} size={8} fills={(j, i) => (i === 2 ? SAND : '#ffffff')} />
      <Txt x={175} y={170} size={8} fill={BLUE} weight="700">
        Words inside quotation marks keep their own tense.
      </Txt>
    </G>
  );
}

// ---------- consonant contrasts ----------
const PAIRS = [
  ['/θ/ and /t/', 'thin, tin'],
  ['/ð/ and /d/', 'then, den'],
  ['/ʃ/ and /tʃ/', 'share, chair'],
  ['/s/ and /ʃ/', 'sell, shell'],
  ['/l/ and /r/', 'light, right'],
  ['/v/ and /b/', 'vest, best'],
  ['/p/ and /f/', 'pine, fine'],
];
function ConsonantArt() {
  return <Table x={35} y={8} cols={[['Contrast', 120], ['Minimal pair', 140]]} rows={PAIRS} rh={18} size={8.5} fills={(j, i) => (i === 0 ? SKY : '#ffffff')} />;
}

// ---------- intonation on tags ----------
function TagTunesArt() {
  return (
    <G>
      <Txt x={20} y={46} size={11} anchor="start">
        It’s hot today,
      </Txt>
      <Txt x={130} y={46} size={11} anchor="start" weight="700" fill={RED}>
        isn’t it?
      </Txt>
      <Arrow x1={132} y1={22} x2={176} y2={34} c={RED} width={1.8} />
      <Txt x={20} y={66} size={8} anchor="start" fill={RED}>
        Falling: the speaker is sure and expects agreement.
      </Txt>
      <Txt x={20} y={116} size={11} anchor="start">
        You’ve paid the fees,
      </Txt>
      <Txt x={160} y={116} size={11} anchor="start" weight="700" fill={BLUE}>
        haven’t you?
      </Txt>
      <Arrow x1={162} y1={100} x2={214} y2={86} c={BLUE} width={1.8} />
      <Txt x={20} y={136} size={8} anchor="start" fill={BLUE}>
        Rising: a real question; the speaker is not sure.
      </Txt>
      <Txt x={190} y={162} size={8}>
        Statements and wh-questions usually fall; yes/no questions rise.
      </Txt>
    </G>
  );
}

// ---------- the story mountain ----------
const STAGES = [
  [20, 150, 'Orientation', 50, 168, 'middle'],
  [100, 150, 'Complication', 116, 168, 'middle'],
  [240, 40, 'Climax', 240, 28, 'middle'],
  [320, 130, 'Resolution', 326, 120, 'start'],
  [365, 150, 'Ending', 352, 168, 'middle'],
];
function ArcArt() {
  return (
    <G>
      <Path d="M20 150 L100 150 L240 40 L320 130 L365 150" stroke={BLUE} strokeWidth={2} fill="none" />
      {STAGES.map(([x, y, t, tx, ty, a]) => (
        <G key={t}>
          <Rect x={x - 4} y={y - 4} width={8} height={8} rx={4} fill={t === 'Climax' ? RED : BLUE} />
          <Txt x={tx} y={ty} size={8.5} weight="700" anchor={a} fill={t === 'Climax' ? RED : undefined}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={160} y={92} size={8} anchor="end" fill={MUTED}>
        Rising action
      </Txt>
      <Txt x={190} y={188} size={8}>
        Past tense throughout; time links join the stages.
      </Txt>
    </G>
  );
}

// ---------- headlines ----------
const HEADS = [
  ['Floods hit Limbé', 'Floods have hit Limbé.'],
  ['Minister to visit Garoua', 'The minister is going to visit Garoua.'],
  ['Five arrested in fuel fraud', 'Five people have been arrested for fuel fraud.'],
  ['Govt slashes fertiliser price', 'The government has cut the price of fertiliser.'],
];
function HeadlinesArt() {
  return <Table x={8} y={8} cols={[['Headline', 140], ['Full sentence', 226]]} rows={HEADS} rh={20} size={8} fills={(j, i) => (i === 0 ? SAND : '#ffffff')} />;
}

// ---------- a curriculum vitae ----------
const CV = [
  ['Profile', 56, 'Lower Sixth Arts student seeking holiday work'],
  ['Education (most recent first)', 84, '2025 to date: Lower Sixth, Arts series'],
  ['Work experience', 124, '2025: shop assistant, family provision store'],
  ['Skills', 152, 'English and French; Word and Excel'],
  ['Interests', 178, 'Debating, football'],
  ['Referees', 204, 'Mr J. Tabe, Principal, with contact details'],
];
function CvArt() {
  return (
    <G>
      <Rect x={60} y={6} width={180} height={232} rx={3} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={150} y={24} size={10} weight="700">
        BRENDA AKO
      </Txt>
      <Txt x={150} y={36} size={6.5} fill={MUTED}>
        Address, telephone, email
      </Txt>
      <Line x1={70} y1={42} x2={230} y2={42} stroke={BAR} strokeWidth={1} />
      {CV.map(([h, y, t]) => (
        <G key={h}>
          <Txt x={70} y={y} size={7.5} anchor="start" weight="700" fill={BLUE}>
            {h}
          </Txt>
          <Txt x={70} y={y + 11} size={6.5} anchor="start">
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={70} y={95 + 11} size={6.5} anchor="start">
        2025: GCE O Level, eight papers
      </Txt>
    </G>
  );
}

// ---------- 300 words to 50, to scale ----------
function BudgetArt() {
  return (
    <G>
      <Txt x={40} y={22} size={8} anchor="start" weight="700">
        Passage: 300 words in six paragraphs (1 px = 1 word)
      </Txt>
      {Array.from({ length: 6 }, (_, i) => (
        <G key={i}>
          <Rect x={40 + i * 50} y={30} width={50} height={22} fill={BAR} stroke={O} strokeWidth={0.6} />
          <Rect x={40 + i * 50} y={30} width={8} height={22} fill={BLUE} />
          <Line x1={44 + i * 50} y1={52} x2={44 + i * (50 / 6)} y2={90} stroke={BLUE} strokeWidth={0.8} strokeDasharray="3 2" />
        </G>
      ))}
      <Txt x={36} y={46} size={7} anchor="end" fill={MUTED}>
        0
      </Txt>
      <Txt x={344} y={46} size={7} anchor="start" fill={MUTED}>
        300
      </Txt>
      {Array.from({ length: 6 }, (_, i) => (
        <Rect key={i} x={40 + i * (50 / 6)} y={90} width={50 / 6} height={22} fill={BLUE} stroke="#ffffff" strokeWidth={0.6} />
      ))}
      <Txt x={98} y={105} size={8} anchor="start" weight="700" fill={BLUE}>
        Summary: 50 words, about 8 for each point
      </Txt>
      <Txt x={190} y={136} size={8}>
        One word kept in six: points stay; examples, figures and repetition go.
      </Txt>
    </G>
  );
}

// ---------- a formal report ----------
function ReportArt() {
  const head = (y, t) => (
    <Txt x={60} y={y} size={7.5} anchor="start" weight="700" fill={BLUE}>
      {t}
    </Txt>
  );
  return (
    <G>
      <Rect x={50} y={6} width={200} height={244} rx={3} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={150} y={22} size={8} weight="700">
        REPORT ON THE SCHOOL CANTEEN
      </Txt>
      {['To: The Principal', 'From: Ngwa Paul, Senior Prefect', 'Date: 12 March 2026'].map((t, i) => (
        <Txt key={t} x={60} y={38 + i * 11} size={7} anchor="start">
          {t}
        </Txt>
      ))}
      {head(78, '1. Terms of reference')}
      <Bars x={60} y={84} w={180} />
      {head(108, '2. Procedure')}
      <Bars x={60} y={114} w={180} />
      {head(138, '3. Findings')}
      <Txt x={64} y={150} size={6.5} anchor="start">
        3.1 It was found that ...
      </Txt>
      <Txt x={64} y={160} size={6.5} anchor="start">
        3.2 Of the 40 students asked, ...
      </Txt>
      {head(176, '4. Conclusions')}
      <Bars x={60} y={182} w={180} n={1} />
      {head(198, '5. Recommendations')}
      <Txt x={64} y={210} size={6.5} anchor="start">
        5.1 The canteen should ...
      </Txt>
      <Txt x={60} y={230} size={7} anchor="start" weight="700">
        Ngwa Paul, Senior Prefect
      </Txt>
      <Txt x={60} y={242} size={6.5} anchor="start" fill={MUTED}>
        (signature)
      </Txt>
    </G>
  );
}

// ---------- clichés ----------
const CLICHES = [
  ['at the end of the day', 'finally, in the end'],
  ['last but not least', 'finally'],
  ['in this day and age', 'today, now'],
  ['since time immemorial', 'for generations'],
  ['a bone of contention', 'name the actual dispute'],
];
function ClichesArt() {
  return <Table x={20} y={8} cols={[['Cliché to avoid', 160], ['Fresher wording', 160]]} rows={CLICHES} rh={20} size={8} fills={(j, i) => (i === 0 ? ROSE : LEAF)} />;
}

// ---------- a memo ----------
const MEMO_HEAD = [
  ['TO:', 'All class masters', 46],
  ['FROM:', 'The Vice Principal', 60],
  ['DATE:', '9 March 2026', 74],
  ['SUBJECT:', 'Collection of report cards', 88],
];
const MEMO_BODY = ['Report cards will be collected on Friday 13 March.', '1. Check that each card is signed.', '2. Record the number collected.', '3. Return the list to my office.', 'Deadline: Friday 13 March, 2 pm.'];
function MemoArt() {
  return (
    <G>
      <Rect x={40} y={6} width={220} height={208} rx={3} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={150} y={26} size={10} weight="700">
        MEMORANDUM
      </Txt>
      {MEMO_HEAD.map(([k, v, y]) => (
        <G key={k}>
          <Txt x={50} y={y} size={7.5} anchor="start" weight="700">
            {k}
          </Txt>
          <Txt x={104} y={y} size={7.5} anchor="start">
            {v}
          </Txt>
        </G>
      ))}
      <Line x1={50} y1={98} x2={250} y2={98} stroke={O} strokeWidth={1} />
      {MEMO_BODY.map((t, i) => (
        <Txt key={t} x={50} y={116 + i * 15} size={7} anchor="start" weight={i === 4 ? '700' : '500'}>
          {t}
        </Txt>
      ))}
      <Txt x={250} y={202} size={8} anchor="end" weight="700" fill={BLUE}>
        J.T.
      </Txt>
    </G>
  );
}

// ---------- a feature article ----------
function ArticleArt() {
  return (
    <G>
      <Rect x={30} y={6} width={240} height={226} rx={3} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={150} y={30} size={12} weight="700">
        Overloaded Taxis Must Stop
      </Txt>
      <Txt x={150} y={45} size={7.5} italic fill={MUTED}>
        Six passengers in a five-seat car: a daily risk we accept too easily.
      </Txt>
      <Txt x={150} y={60} size={7} weight="700" fill={BLUE}>
        By Fon Clarisse
      </Txt>
      <Txt x={42} y={78} size={7.5} anchor="start" weight="700">
        At six every morning, the queue at the junction grows ...
      </Txt>
      <Bars x={42} y={84} w={216} n={2} />
      <Txt x={42} y={114} size={8} anchor="start" weight="700" fill={BLUE}>
        A daily danger
      </Txt>
      <Bars x={42} y={122} w={102} n={5} />
      <Bars x={156} y={122} w={102} n={2} />
      <Txt x={207} y={152} size={7} italic fill={GREEN}>
        {'"We pray each time we board."'}
      </Txt>
      <Txt x={42} y={182} size={8} anchor="start" weight="700" fill={BLUE}>
        Back at the junction
      </Txt>
      <Bars x={42} y={190} w={216} n={3} />
    </G>
  );
}

// ---------- stress shift ----------
const FAMILY = [
  ['photograph', ['pho', 'to', 'graph'], 0, 16],
  ['photography', ['pho', 'to', 'gra', 'phy'], 1, 42],
  ['photographic', ['pho', 'to', 'gra', 'phic'], 2, 68],
  ['economy', ['e', 'co', 'no', 'my'], 1, 104],
  ['economic', ['e', 'co', 'no', 'mic'], 2, 130],
  ['happiness', ['hap', 'pi', 'ness'], 0, 160],
];
function StressArt() {
  return (
    <G>
      {FAMILY.map(([w, syl, s, y]) => (
        <G key={w}>
          <Txt x={112} y={y + 14} size={9} anchor="end" weight="700">
            {w}
          </Txt>
          {syl.map((t, i) => (
            <Cell key={i} x={120 + i * 52} y={y} w={52} h={20} text={i === s ? t.toUpperCase() : t} size={8.5} bold={i === s} fill={i === s ? ROSE : '#ffffff'} />
          ))}
        </G>
      ))}
      <Txt x={190} y={198} size={7.5}>
        -ic, -ity, -ion, -ian: stress the syllable before; -ness: no change
      </Txt>
    </G>
  );
}

// ---------- one message, three registers ----------
const REGISTERS = [
  ['Formal notice', SAND, ['Students are informed that the excursion has been', 'cancelled owing to inclement weather.']],
  ['Assembly\nannouncement', SKY, ['Good morning, everyone. I am sorry to say that', 'today’s trip is cancelled because of the bad weather.']],
  ['Class WhatsApp\nmessage', LEAF, ['Sorry, everyone: the trip is off because of the', 'bad weather. See you in class!']],
];
function RegisterArt() {
  return (
    <G>
      {REGISTERS.map(([l, f, lines], i) => (
        <G key={l}>
          <Cell x={8} y={8 + i * 62} w={90} h={52} text={l} size={8} bold fill={f} rx={4} />
          <Rect x={104} y={8 + i * 62} width={270} height={52} rx={4} fill="#ffffff" stroke={O} strokeWidth={0.8} />
          {lines.map((t, k) => (
            <Txt key={k} x={112} y={30 + i * 62 + k * 14} size={7.5} anchor="start">
              {t}
            </Txt>
          ))}
        </G>
      ))}
      <Txt x={190} y={200} size={8} weight="700" fill={BLUE}>
        Same facts; vocabulary, sentence length and tone change.
      </Txt>
    </G>
  );
}

// ---------- minutes ----------
const ATTEND = [
  ['Present:', 'Ms Fon (Chair), Mr Ndi (Secretary), 18 members', 52],
  ['Absent with apology:', 'Bih Grace', 64],
  ['In attendance:', 'Mr Tabe (patron)', 76],
];
const ITEMS = [
  ['1. Opening', 96, true],
  ['2. Reading and adoption of the previous minutes', 110, true],
  ['Proposed by Ako, seconded by Nji', 121, false],
  ['3. Matters arising', 136, true],
  ['4. Inter-school debate: it was resolved to host it', 150, true],
  ['Action: the Secretary to invite three schools', 161, false],
  ['5. Any other business', 176, true],
  ['6. Adjournment: the meeting ended at 3.40 pm', 190, true],
];
function MinutesArt() {
  return (
    <G>
      <Rect x={30} y={6} width={260} height={260} rx={3} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Txt x={160} y={22} size={8} weight="700">
        MINUTES OF THE DEBATE CLUB MEETING
      </Txt>
      <Txt x={160} y={34} size={6.8} fill={MUTED}>
        held on Friday 13 February 2026 at 2 pm in Room 6
      </Txt>
      {ATTEND.map(([k, v, y]) => (
        <G key={k}>
          <Txt x={40} y={y} size={6.8} anchor="start" weight="700">
            {k}
          </Txt>
          <Txt x={k === 'Present:' ? 76 : k === 'In attendance:' ? 100 : 122} y={y} size={6.8} anchor="start">
            {v}
          </Txt>
        </G>
      ))}
      {ITEMS.map(([t, y, main]) => (
        <Txt key={t} x={main ? 40 : 52} y={y} size={main ? 7 : 6.5} anchor="start" weight={main ? '700' : '500'} fill={main ? undefined : GREEN}>
          {t}
        </Txt>
      ))}
      <Line x1={46} y1={232} x2={146} y2={232} stroke={O} strokeWidth={0.8} />
      <Line x1={174} y1={232} x2={274} y2={232} stroke={O} strokeWidth={0.8} />
      <Txt x={96} y={246} size={7}>
        Secretary
      </Txt>
      <Txt x={224} y={246} size={7}>
        Chairperson
      </Txt>
    </G>
  );
}

// ---------- the language of minutes ----------
const SAID = [
  ['"We will meet on Friday."', 'It was agreed to meet on Friday.'],
  ['"I propose a party." "I second it."', 'A party was proposed by Ms Fon and seconded by Mr Ndi.'],
  ['"We have 85 000 FCFA."', 'The Treasurer reported a balance of 85 000 FCFA.'],
  ['(the meeting ends)', 'The meeting was adjourned at 4.15 pm.'],
];
function MinutesLangArt() {
  return <Table x={8} y={8} cols={[['Said in the meeting', 150], ['Written in the minutes', 226]]} rows={SAID} rh={22} size={7} fills={(j, i) => (i === 1 ? LEAF : '#ffffff')} />;
}

// ---------- flashback ----------
const EVENTS = ['Childhood\non the farm', 'Father leaves\nfor the city', 'Now: the\nbulldozers come', 'She saves\nthe land'];
const TELLING = [
  ['1. Now:\nbulldozers', SKY],
  ['2. Flashback:\nchildhood', SAND],
  ['3. Flashback:\nfather leaves', SAND],
  ['4. Back to now:\nshe saves the land', SKY],
];
function FlashbackArt() {
  return (
    <G>
      <Txt x={10} y={16} size={8.5} anchor="start" weight="700">
        Order of events
      </Txt>
      {EVENTS.map((t, i) => (
        <G key={t}>
          <Cell x={10 + i * 92} y={24} w={84} h={32} text={t} size={7.5} fill={i < 2 ? SAND : SKY} rx={4} />
          {i < 3 && <Arrow x1={94 + i * 92} y1={40} x2={101 + i * 92} y2={40} />}
        </G>
      ))}
      <Txt x={10} y={96} size={8.5} anchor="start" weight="700">
        Order of telling
      </Txt>
      {TELLING.map(([t, f], i) => (
        <G key={t}>
          <Cell x={10 + i * 92} y={104} w={84} h={32} text={t} size={7.5} fill={f} rx={4} />
          {i < 3 && <Arrow x1={94 + i * 92} y1={120} x2={101 + i * 92} y2={120} c={i === 0 || i === 2 ? RED : MUTED} />}
        </G>
      ))}
      <Txt x={190} y={158} size={7.5}>
        {'Enter with the past perfect: "She had been only six when..."'}
      </Txt>
      <Txt x={190} y={174} size={7.5}>
        {'Return with a time link: "Now, twelve years later, ..."'}
      </Txt>
    </G>
  );
}

// ---------- common mock errors ----------
const ERRORS = [
  ['Receiver’s address after "Dear Sir"', 'Put it before the salutation'],
  ['Summary over the word limit', 'Cut examples; count the words'],
  ['Paragraph without a topic sentence', 'Open with the main idea'],
  ['Tense slips in reported speech', 'Move every verb one step back'],
  ['"Each of them have"', '"Each of them has"'],
];
function ErrorsArt() {
  return <Table x={8} y={8} cols={[['Common mock error', 190], ['Fix', 180]]} rows={ERRORS} rh={20} size={7.5} fills={(j, i) => (i === 0 ? ROSE : LEAF)} />;
}

const rows = (n, x, y0 = 35, rh = 18) => Array.from({ length: n }, (_, i) => [x, y0 + i * rh]);

export const A_ENGLISH = {
  'aen-relatives': columnsSpec('Relative words and what they refer to', [
    { head: 'who, whom', items: ['People', 'who: the subject', 'whom: the object', 'to whom (formal)'] },
    { head: 'whose', items: ['Possession', 'People or things', 'a house whose roof'] },
    { head: 'which, that', items: ['Things', 'that: defining only', 'never after a comma'] },
    { head: 'where, when, why', items: ['Places', 'Times', 'Reasons'] },
  ], { colW: 104 }),
  'aen-compounds': {
    title: 'Compound nouns and their plurals',
    w: 350,
    h: 140,
    art: CompoundsArt,
    labels: [],
    facts: [
      'One-word compounds add -s at the end: peacemakers, grandparents.',
      'Two-word compounds put the -s on the main noun: land disputes.',
      'Hyphenated compounds also make the main noun plural: mothers-in-law, passers-by.',
      'With no main noun, the -s goes at the end: go-betweens.',
    ],
    points: [
      [275, 44],
      [275, 71],
      [275, 98],
      [275, 125],
    ],
  },
  'aen-tense-shift': {
    title: 'Rewriting a narrative from present to past',
    w: 350,
    h: 178,
    art: TenseShiftArt,
    labels: [],
    facts: [
      'Every narrative verb moves one step back: dances becomes danced, are singing becomes were singing.',
      'The present perfect becomes the past perfect: has blessed becomes had blessed.',
      'Will becomes would, can becomes could, and is held becomes was held.',
      'Time words follow the new viewpoint: now becomes then, today becomes that day.',
      'Words inside quotation marks keep their own tense.',
    ],
    points: [
      [285, 44],
      [285, 71],
      [285, 107],
      [285, 143],
      [175, 166],
    ],
  },
  'aen-consonant-pairs': {
    title: 'Consonant contrasts in minimal pairs',
    w: 330,
    h: 158,
    art: ConsonantArt,
    labels: [],
    facts: PAIRS.map(([c, p]) => `${c}: ${p}.`),
    points: rows(7, 95),
  },
  'aen-ict-words': columnsSpec('The vocabulary of computing', [
    { head: 'Hardware', items: ['processor', 'memory', 'keyboard', 'router'] },
    { head: 'Software', items: ['operating system', 'browser', 'spreadsheet', 'database'] },
    { head: 'Actions', items: ['download', 'upload', 'reboot', 'back up'] },
  ], { colW: 120 }),
  'aen-digital-words': columnsSpec('Staying safe online', [
    { head: 'Threats', items: ['phishing', 'malware', 'identity theft', 'cyberbullying'] },
    { head: 'Protection', items: ['privacy settings', 'two-factor login', 'encryption', 'strong passwords'] },
    { head: 'Your trail', items: ['posts and photos', 'likes and searches', 'locations', 'digital footprint'] },
  ], { colW: 120 }),
  'aen-tag-tunes': {
    title: 'Falling and rising tunes on question tags',
    w: 380,
    h: 170,
    art: TagTunesArt,
    labels: [],
    facts: [
      'A falling tune on the tag: the speaker is sure and expects agreement.',
      'A rising tune on the tag: a real question, because the speaker is not sure.',
      'Statements and wh-questions usually fall; yes/no questions rise.',
    ],
    points: [
      [164, 27],
      [199, 90],
      [190, 158],
    ],
  },
  'aen-narrative-arc': {
    title: 'The shape of a narrative',
    w: 380,
    h: 194,
    art: ArcArt,
    labels: [],
    facts: [
      'Orientation: who, where and when.',
      'Complication: the problem that starts the action; rising action then raises the stakes.',
      'Climax: the most tense moment.',
      'Resolution and ending: the problem is settled and we see what changed.',
      'Write in the past tense, linking the stages with time words.',
    ],
    points: [
      [20, 150],
      [100, 150],
      [240, 40],
      [320, 130],
      [190, 184],
    ],
  },
  'aen-headlines': {
    title: 'Reading headlines as full sentences',
    w: 382,
    h: 114,
    art: HeadlinesArt,
    labels: [],
    facts: [
      'Headlines use the present simple for past news: Floods hit Limbé means floods have hit Limbé.',
      'To + verb shows the future: the minister is going to visit Garoua.',
      'A bare participle shows the passive: five people have been arrested.',
      'Short punchy words save space: slash means cut.',
    ],
    points: rows(4, 78, 38, 20),
  },
  'aen-cohesion': columnsSpec('Ways of making a text cohesive', [
    { head: 'Connectives', items: ['furthermore', 'consequently', 'conversely'] },
    { head: 'Reference', items: ['it, they, this', 'points back'] },
    { head: 'Substitution', items: ['one, do, so', 'replaces words'] },
    { head: 'Ellipsis', items: ['words left out', 'but understood'] },
    { head: 'Lexical', items: ['key words', 'and synonyms'] },
  ], { colW: 92 }),
  'aen-bank-words': columnsSpec('Words in pairs: banking and budgets', [
    { head: 'Money in', items: ['deposit', 'income', 'surplus'] },
    { head: 'Money out', items: ['withdraw', 'expenditure', 'deficit'] },
    { head: 'Borrowing', items: ['loan', 'interest', 'instalment', 'collateral'] },
  ], { colW: 116 }),
  'aen-cv': {
    title: 'The layout of a curriculum vitae',
    w: 300,
    h: 244,
    art: CvArt,
    labels: [],
    facts: [
      'Personal details come first: name, address, telephone and email.',
      'A short profile states your aim.',
      'Education and work experience are listed with the most recent first.',
      'Skills and interests follow, then two or three referees, asked in advance.',
    ],
    points: [
      [150, 30],
      [100, 56],
      [130, 84],
      [120, 204],
    ],
  },
  'aen-eco-chain': flowSpec('From deforestation to flooding', ['Forest cleared\nfor farms or timber', 'Soil left bare', 'Rain runs off\nquickly', 'Erosion washes\naway topsoil', 'Rivers silt up\nand flood'], { boxW: 112, note: 'Replanting trees and terracing slopes break the chain.' }),
  'aen-procedure': flowSpec('Instructions: washing hands properly', ['Wet your hands\nwith clean water', 'Apply soap', 'Rub every surface\nfor 20 seconds', 'Rinse well', 'Dry with a\nclean cloth'], { boxW: 108, note: 'Each step starts with a verb in the imperative.' }),
  'aen-summary-steps': flowSpec('Writing a summary', ['Read the question:\nwhich aspect?', 'Read the passage\ntwice', 'Cross out examples,\nfigures, repetition', 'Note the points in\nyour own words', 'Join them into\nfluent sentences', 'Count the words\nand check'], { boxW: 116 }),
  'aen-word-budget': {
    title: 'From 300 words to 50, to scale',
    w: 380,
    h: 146,
    art: BudgetArt,
    labels: [],
    facts: [
      'The passage has 300 words in six paragraphs; each is mostly support, around one main point, shown dark.',
      'The summary keeps only the points: 50 words, about 8 for each.',
      'That keeps one word in six: examples, figures and repetition are cut.',
    ],
    points: [
      [190, 41],
      [65, 101],
      [190, 134],
    ],
  },
  'aen-rights-words': columnsSpec('Rights, duties and voting', [
    { head: 'Liberties', items: ['expression', 'association', 'assembly', 'worship'] },
    { head: 'Duties', items: ['obey the law', 'pay taxes', 'respect others', 'vote'] },
    { head: 'Elections', items: ['register', 'campaign', 'secret ballot', 'results proclaimed'] },
  ], { colW: 118 }),
  'aen-report-layout': {
    title: 'The layout of a formal report',
    w: 300,
    h: 256,
    art: ReportArt,
    labels: [],
    facts: [
      'The title, then who the report is for, who wrote it and the date.',
      'The terms of reference say what was asked; the procedure says how the facts were gathered.',
      'Findings are numbered facts; the conclusions say what they show.',
      'Recommendations say what should be done; the report ends with the name, position and signature, not "Yours faithfully".',
    ],
    points: [
      [150, 38],
      [110, 78],
      [100, 138],
      [120, 198],
    ],
  },
  'aen-report-steps': flowSpec('Investigating a problem for a report', ['Define the\nquestion', 'Choose methods:\ninterviews, survey', 'Collect the\ninformation', 'Analyse facts\nand figures', 'Draw\nconclusions', 'Recommend: who\ndoes what, when'], { boxW: 112 }),
  'aen-gce-papers': columnsSpec('GCE A Level English Language (0730), 2026', [
    { head: 'Paper 1\n1½ h, Fri 5 June am', items: ['Multiple choice', 'Grammar, vocabulary', 'Sounds and stress', 'Reading'] },
    { head: 'Papers 2 and 3\n2¼ h each, 5 and 6 June', items: ['Written answers', 'Compositions', 'Functional writing', 'Summary and rewrites'] },
  ], { colW: 170 }),
  'aen-paper-plan': flowSpec('Tackling a written task under time', ['Read all options\nand instructions', 'Underline form,\naudience, length', 'Plan: purpose\nand paragraphs', 'Write in\nparagraphs', 'Proofread and\ncount words'], { boxW: 112 }),
  'aen-inversion': columnsSpec('Inversion after a fronted word', [
    { head: 'Conditionals', items: ['Had I known...', 'Were I you...', 'Should you need...'] },
    { head: 'Negatives', items: ['Never have I...', 'Rarely do we...', 'Little did he know...'] },
    { head: 'Time pairs', items: ['Hardly had... when', 'Scarcely had... when', 'No sooner had... than'] },
    { head: 'Only, not only', items: ['Only then did I...', 'Not only did they...', 'Not until... did...'] },
  ], { colW: 110 }),
  'aen-rhetoric': columnsSpec('Persuasive devices in a speech', [
    { head: 'Sound and rhythm', items: ['groups of three', 'repetition', 'alliteration'] },
    { head: 'Thought', items: ['rhetorical questions', 'antithesis', 'vivid examples'] },
    { head: 'Feeling', items: ['emotive words', 'inclusive we', 'appeals to values'] },
  ], { colW: 120 }),
  'aen-main-support': columnsSpec('Main ideas and supporting material', [
    { head: 'Main idea: keep', items: ['A claim on the topic', 'Answers the question', 'Often a topic sentence'], fill: LEAF },
    { head: 'Support: cut', items: ['Examples, anecdotes', 'Figures, statistics', 'Quotations', 'Restatements'], fill: ROSE },
  ], { colW: 160 }),
  'aen-cliches': {
    title: 'Clichés and fresher wording',
    w: 360,
    h: 130,
    art: ClichesArt,
    labels: [],
    facts: CLICHES.map(([c, f]) => `Instead of "${c}", write: ${f}.`),
    points: rows(5, 100, 38, 20),
  },
  'aen-memo': {
    title: 'The layout of a memo',
    w: 300,
    h: 220,
    art: MemoArt,
    labels: [],
    facts: [
      'A memo is internal: it opens with MEMORANDUM and the heading block.',
      'TO, FROM, DATE and SUBJECT replace the addresses and the salutation.',
      'The first sentence states the purpose; the details follow in numbered points.',
      'It ends with the action and deadline and the writer’s initials, with no complimentary close.',
    ],
    points: [
      [150, 22],
      [80, 67],
      [150, 112],
      [230, 198],
    ],
  },
  'aen-article-layout': {
    title: 'The parts of a feature article',
    w: 300,
    h: 238,
    art: ArticleArt,
    labels: [],
    facts: [
      'The headline catches the eye; the standfirst under it sums up the article.',
      'The byline names the writer; the lead hooks the reader.',
      'Subheadings break up the body, and quotations bring in real voices.',
      'The ending often echoes the opening; an editorial ends with a call to action.',
    ],
    points: [
      [150, 30],
      [150, 66],
      [100, 112],
      [150, 186],
    ],
  },
  'aen-stress-shift': {
    title: 'How the stress moves in word families',
    w: 380,
    h: 204,
    art: StressArt,
    labels: [],
    facts: [
      'PHOtograph stresses the first syllable; adding -y moves it: phoTOgraphy.',
      'Before -ic the stress moves again: photoGRAphic.',
      'eCOnomy and ecoNOmic follow the same rule.',
      'The suffix -ness does not move the stress: HAPpy, HAPpiness.',
    ],
    points: [
      [198, 52],
      [250, 78],
      [250, 140],
      [146, 170],
    ],
  },
  'aen-expository': flowSpec('Planning an expository essay', ['Introduction:\ndefine, preview', 'Stage 1: reason\nand example', 'Stage 2: reason\nand example', 'Stage 3: reason\nand example', 'Conclusion: sum\nup, importance'], { boxW: 112 }),
  'aen-refutation': flowSpec('A refutation paragraph', ['State the opposing\nview fairly', 'Concede what\nis true', 'Refute with reasons\nand evidence', 'Link back to\nyour thesis'], { perRow: 2, boxW: 140 }),
  'aen-reporting-verbs': columnsSpec('Reporting verbs and their patterns', [
    { head: '+ to do', items: ['agree, offer', 'promise, refuse', 'threaten'] },
    { head: '+ someone to do', items: ['advise, ask', 'urge, warn', 'order, remind'] },
    { head: '+ doing', items: ['admit, deny', 'recommend', 'suggest'] },
    { head: '+ preposition\n+ doing', items: ['apologise for', 'insist on', 'accuse someone of'] },
  ], { colW: 106 }),
  'aen-concord': columnsSpec('Tricky subject and verb agreement', [
    { head: 'Singular verb', items: ['each, everyone', 'the number of', 'news, mathematics', 'ten thousand francs'] },
    { head: 'Plural verb', items: ['both, several', 'a number of', 'police, cattle', 'trousers, scissors'] },
    { head: 'Nearer subject', items: ['either... or', 'neither... nor', 'not only... but also'] },
  ], { colW: 124 }),
  'aen-register-shift': {
    title: 'One message in three registers',
    w: 382,
    h: 206,
    art: RegisterArt,
    labels: [],
    facts: [
      'A formal notice uses formal words and the passive: owing to inclement weather.',
      'An assembly announcement is polite and spoken: good morning, everyone.',
      'A class message is short, friendly and informal: the trip is off.',
      'The facts stay the same; the vocabulary, sentence length and tone change.',
    ],
    points: [
      [53, 34],
      [53, 96],
      [53, 158],
      [190, 196],
    ],
  },
  'aen-lab-report': flowSpec('The parts of a laboratory report', ['Title and aim', 'Materials and\napparatus', 'Method: past\npassive', 'Results: table\nwith units', 'Discussion:\nmeaning, errors', 'Conclusion:\nanswers the aim'], { boxW: 112 }),
  'aen-minutes': {
    title: 'The layout of minutes',
    w: 320,
    h: 272,
    art: MinutesArt,
    labels: [],
    facts: [
      'The heading names the body and the meeting, with the date, time and venue.',
      'Attendance: present, absent with apology, and in attendance.',
      'Agenda items are numbered: adoption of the previous minutes, matters arising, decisions and action points.',
      'Any other business, the time of adjournment and the signatures of the secretary and the chairperson close the minutes.',
    ],
    points: [
      [160, 28],
      [80, 64],
      [130, 136],
      [160, 232],
    ],
  },
  'aen-minutes-language': {
    title: 'From the meeting to the minutes',
    w: 392,
    h: 124,
    art: MinutesLangArt,
    labels: [],
    facts: [
      'Decisions are recorded in the past, often with it: it was agreed to meet on Friday.',
      'Motions name the proposer and the seconder.',
      'Speech becomes reported speech in the third person: the Treasurer reported a balance.',
      'The minutes end with the time of adjournment.',
    ],
    points: rows(4, 270, 41, 22),
  },
  'aen-flashback': {
    title: 'A flashback: the order of events and the order of telling',
    w: 380,
    h: 182,
    art: FlashbackArt,
    labels: [],
    facts: [
      'In time order, the childhood and the father’s leaving come first.',
      'The story is told starting now, in the middle of the action.',
      'A flashback goes back to earlier events, entered with the past perfect.',
      'A clear time phrase brings the reader back to now for the ending.',
    ],
    points: [
      [52, 40],
      [52, 120],
      [144, 120],
      [328, 120],
    ],
  },
  'aen-common-errors': {
    title: 'Common mock errors and their fixes',
    w: 386,
    h: 132,
    art: ErrorsArt,
    labels: [],
    facts: ERRORS.map(([e, f]) => `${e}: ${f}.`),
    points: rows(5, 103, 38, 20),
  },
};
