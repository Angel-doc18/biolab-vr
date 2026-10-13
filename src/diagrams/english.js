// English Language figures for Form 4: kinds of pronoun, sound contrasts and
// stress patterns, the "-ed" endings, the order of adjectives, the layouts of
// informal and formal letters, the future forms, tenses, modal verbs,
// intonation, the passive, comparison, articles, concession, reported speech,
// the argumentative essay, conditionals, gerunds and infinitives, and the GCE
// papers.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BAR = '#cfd8e3';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#2f7d4f';

// Lines of text in a letter, drawn as bars.
function Lines({ x, y, n, w = 180, indent = 10, gap = 8 }) {
  return (
    <G>
      {Array.from({ length: n }, (_, i) => (
        <Rect key={i} x={x + (i === 0 ? indent : 0)} y={y + i * gap} width={w - (i === 0 ? indent : 0) - (i === n - 1 ? 50 : 0)} height={3.2} rx={1.5} fill={BAR} />
      ))}
    </G>
  );
}

function Callout({ y, from, text }) {
  return (
    <G>
      <Line x1={from} y1={y - 3} x2={216} y2={y - 3} stroke={MUTED} strokeWidth={0.8} strokeDasharray="2 2" />
      <Txt x={220} y={y} size={8.5} anchor="start" weight="700" fill={BLUE}>
        {text}
      </Txt>
    </G>
  );
}

const t = (x, y, s, size = 7.5, extra = {}) => (
  <Txt x={x} y={y} size={size} anchor="start" {...extra}>
    {s}
  </Txt>
);

// ---------- the informal letter ----------
function InformalLetterArt() {
  return (
    <G>
      <Rect x={10} y={10} width={200} height={216} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      {t(122, 28, 'Kumba Road,')}
      {t(122, 38, 'P.O. Box 15, Buea')}
      {t(122, 52, '12 March 2026')}
      {t(20, 72, 'Dear Aunt Mary,', 8, { weight: '700' })}
      <Lines x={20} y={84} n={3} />
      <Lines x={20} y={112} n={4} />
      <Lines x={20} y={148} n={3} />
      {t(122, 186, 'Your loving niece,', 7.5)}
      {t(122, 200, 'Ngum', 8, { italic: true, weight: '700' })}
      <Callout y={33} from={202} text="writer’s address" />
      <Callout y={52} from={190} text="date" />
      <Callout y={72} from={92} text="greeting" />
      <Callout y={126} from={202} text="body in paragraphs" />
      <Callout y={194} from={202} text="closing, first name" />
      <Txt x={220} y={96} size={8} anchor="start" fill={MUTED} italic>
        no receiver’s
      </Txt>
      <Txt x={220} y={107} size={8} anchor="start" fill={MUTED} italic>
        address
      </Txt>
    </G>
  );
}

// ---------- the formal letter ----------
function FormalLetterArt() {
  return (
    <G>
      <Rect x={10} y={10} width={200} height={240} fill="#ffffff" stroke={O} strokeWidth={1.2} />
      {t(122, 26, 'GBHS Mankon,')}
      {t(122, 36, 'P.O. Box 70, Bamenda')}
      {t(122, 50, '2 February 2026')}
      {t(20, 66, 'The Manager,')}
      {t(20, 76, 'Kribi Tours,')}
      {t(20, 86, 'P.O. Box 210, Kribi')}
      {t(20, 104, 'Dear Sir/Madam,', 8, { weight: '700' })}
      {t(20, 118, 'REQUEST FOR INFORMATION ON A SCHOOL TRIP', 6.6, { weight: '700' })}
      <Line x1={20} y1={120.5} x2={196} y2={120.5} stroke={O} strokeWidth={0.8} />
      <Lines x={20} y={130} n={3} />
      <Lines x={20} y={156} n={3} />
      <Lines x={20} y={182} n={2} />
      {t(122, 206, 'Yours faithfully,')}
      <Path d="M124 220 q6 -10 12 0 t12 0 t12 0" fill="none" stroke={O} strokeWidth={1.1} />
      {t(122, 238, 'Tabe Eric', 8, { weight: '700' })}
      <Callout y={31} from={202} text="writer’s address" />
      <Callout y={50} from={190} text="date" />
      <Callout y={76} from={102} text="receiver’s address" />
      <Callout y={104} from={92} text="greeting" />
      <Callout y={118} from={200} text="subject line" />
      <Callout y={160} from={202} text="body" />
      <Callout y={208} from={190} text="closing" />
      <Callout y={238} from={170} text="signature, full name" />
    </G>
  );
}

// ---------- intonation ----------
function IntonationArt() {
  const rows = [
    ['yes/no question', 'Is this the bus to Bafoussam?', 1],
    ['wh-question', 'Where is the ticket office?', -1],
    ['statement', 'The bus leaves at ten.', -1],
    ['instruction', 'Wash your hands.', -1],
    ['polite request', 'Could you help me, please?', 1],
    ['tag expecting "yes"', 'It’s hot, isn’t it?', -1],
  ];
  return (
    <G>
      {rows.map(([kind, s, up], i) => {
        const y = 34 + i * 28;
        const c = up > 0 ? GREEN : RED;
        const end = up > 0 ? [316, y - 12] : [316, y + 6];
        return (
          <G key={i}>
            <Txt x={10} y={y} size={8} anchor="start" fill={MUTED}>
              {kind}
            </Txt>
            <Txt x={110} y={y} size={10} anchor="start">
              {s}
            </Txt>
            <Path d={up > 0 ? `M294 ${y + 2} Q306 ${y + 2} ${end[0]} ${end[1]}` : `M294 ${y - 9} Q306 ${y - 9} ${end[0]} ${end[1]}`} fill="none" stroke={c} strokeWidth={2} />
            <Head x={end[0]} y={end[1]} dx={1} dy={up > 0 ? -1.6 : 1.6} size={6} fill={c} />
          </G>
        );
      })}
      <Txt x={170} y={202} size={8.5} fill={MUTED}>
        rising tone in green, falling tone in red
      </Txt>
    </G>
  );
}

export const ENGLISH = {
  'pronoun-types': columnsSpec('Kinds of pronoun', [
    { head: 'Personal', items: ['Subject: I, he, she, we', 'Object: me, him, her, us', 'They / them'] },
    { head: 'Possessive', items: ['Before a noun: my, her', 'Alone: mine, hers', 'ours, yours, theirs'] },
    { head: 'Relative', items: ['who: people (subject)', 'whom: people (object)', 'whose: possession', 'which: things', 'that: people or things'] },
  ], { colW: 122 }),
  'vowel-pairs': columnsSpec('Minimal pairs: long /iː/ and short /ɪ/', [
    { head: 'Long /iː/', items: ['sheep', 'leave', 'feel', 'beat', 'seen'] },
    { head: 'Short /ɪ/', items: ['ship', 'live', 'fill', 'bit', 'sin'] },
  ], { colW: 112 }),
  'ed-endings': columnsSpec('Three ways to say the "-ed" ending', [
    { head: '/ɪd/ after t or d', items: ['wanted', 'needed', 'decided', 'celebrated'] },
    { head: '/t/ after voiceless', items: ['stopped', 'looked', 'laughed', 'danced'] },
    { head: '/d/ after voiced', items: ['played', 'begged', 'cleaned', 'lived'] },
  ], { colW: 112 }),
  'adjective-order': flowSpec('The usual order of adjectives before a noun', ['Opinion\nbeautiful', 'Size\nlarge', 'Age\nold', 'Shape\nround', 'Colour\nred', 'Origin\nBamoun', 'Material\nwooden', 'Purpose\ndancing', 'Noun\nmask'], { perRow: 3, boxW: 96 }),
  'letter-informal': {
    title: 'The layout of an informal letter',
    w: 340,
    h: 236,
    art: InformalLetterArt,
    labels: [],
    facts: ['The writer’s address is at the top right, with the date below it.', 'The greeting uses a name: "Dear Aunt Mary,".', 'The body is in paragraphs, and the letter ends with a friendly closing and the writer’s first name.', 'An informal letter has no receiver’s address.'],
  },
  'stress-patterns': columnsSpec('Where the stress falls in long words', [
    { head: '-tion, -ic, -ician', items: ['e-du-CA-tion', 'e-co-NO-mic', 'tech-NI-cian', 'e-lec-TRI-ci-ty'] },
    { head: '-eer and -ee', items: ['en-gi-NEER', 'ca-REER', 're-fe-REE', 'em-ploy-EE'] },
    { head: 'Compound nouns', items: ['KEY-board', 'PASS-word', 'LAP-top', 'HAND-bag'] },
  ], { colW: 116 }),
  'future-forms': columnsSpec('Talking about the future', [
    { head: 'will', items: ['Decisions made now', 'Predictions from opinion', 'Promises and offers'] },
    { head: 'going to', items: ['Plans already made', 'Predictions from evidence'] },
    { head: 'Present continuous', items: ['Fixed arrangements', '"I am meeting her at ten."'] },
  ], { colW: 122 }),
  'perfect-past': columnsSpec('Present perfect or simple past?', [
    { head: 'Present perfect', items: ['have/has + past participle', 'Linked to now', 'already, yet, ever, never', 'for, since', '"She has opened a shop."'] },
    { head: 'Simple past', items: ['Past form of the verb', 'A finished time', 'yesterday, last week, ago', 'in 2019', '"She opened it in 2019."'] },
  ], { colW: 160 }),
  'consonant-clusters': columnsSpec('Consonant clusters: say every sound', [
    { head: 'At the start of a word', items: ['str: street, strong', 'spl: splash', 'spr: spring', 'scr: screen'] },
    { head: 'At the end of a word', items: ['sks: asks, desks', 'ksts: texts', 'mpts: attempts', 'skt: asked'] },
  ], { colW: 150 }),
  'modals-chart': columnsSpec('What the modal verbs mean', [
    { head: 'must / must not', items: ['must: it is necessary', 'must not: it is forbidden'] },
    { head: 'need not / may', items: ['need not: not necessary', 'may, can: it is allowed'] },
    { head: 'should', items: ['should: it is advisable', 'ought to: the same'] },
  ], { colW: 130 }),
  intonation: {
    title: 'Rising and falling intonation',
    w: 340,
    h: 210,
    art: IntonationArt,
    labels: [],
    facts: ['Yes/no questions and polite requests usually rise at the end.', 'Wh-questions, statements and instructions usually fall.', 'A question tag that expects agreement falls; one that asks a real question rises.'],
  },
  'letter-formal': {
    title: 'The layout of a formal letter',
    w: 340,
    h: 260,
    art: FormalLetterArt,
    labels: [],
    facts: ['The writer’s address is at the top right, with the date below it.', 'The receiver’s title and address come on the left, below the date.', 'Then come the greeting, an underlined subject line and the body in paragraphs.', '"Dear Sir/Madam" ends "Yours faithfully", followed by the signature and full name.'],
  },
  'passive-voice': flowSpec('Changing an active sentence into the passive', ['Find the object\n"the bush"', 'Make it the\nsubject', 'Use "be" in the\nsame tense', 'Add the past\nparticiple', 'Add "by" + agent\nif it is useful'], { boxW: 104, note: 'Farmers burn the bush. → The bush is burnt by farmers.' }),
  'silent-letters': columnsSpec('Silent letters', [
    { head: 'k, w and b', items: ['knife, know', 'write, wrong', 'climb, plumber'] },
    { head: 'h, g and gh', items: ['hour, honest, exhaust', 'sign, foreign', 'drought, though'] },
    { head: 't and p', items: ['listen, castle', 'receipt', 'psychology'] },
  ], { colW: 120 }),
  'comparison-forms': columnsSpec('Comparing with adjectives', [
    { head: 'Short adjectives', items: ['tall, taller, tallest', 'big, bigger, biggest', 'heavy, heavier, heaviest'] },
    { head: 'Long adjectives', items: ['more beautiful', 'the most beautiful', 'more dangerous'] },
    { head: 'Irregular', items: ['good, better, best', 'bad, worse, worst', 'far, farther, farthest'] },
  ], { colW: 124 }),
  'health-language': columnsSpec('The language of health advice', [
    { head: 'Imperatives', items: ['Wash your hands with soap.', 'Sleep under a treated net.', 'Do not drink untreated water.'] },
    { head: 'Probability', items: ['It must be malaria. (sure)', 'It might be typhoid. (possible)', 'It can’t be cholera. (impossible)'] },
  ], { colW: 170 }),
  'articles-use': treeSpec('Choosing the article', 'Articles', [
    { name: 'a / an', items: ['first mention', 'not specific', 'jobs: an engineer', 'by sound: an hour'] },
    { name: 'the', items: ['already known', 'only one: the sun', 'rivers and oceans', 'the Republic'] },
    { name: 'no article', items: ['general plurals', 'uncountable nouns', 'most names: Buea'] },
  ], { colW: 112 }),
  'th-sounds': columnsSpec('The two "th" sounds', [
    { head: 'Voiceless /θ/', items: ['think, three, thank', 'health, truth, birth', 'breath (a noun)'] },
    { head: 'Voiced /ð/', items: ['this, that, the', 'mother, together', 'breathe (a verb)'] },
  ], { colW: 150 }),
  concession: columnsSpec('Concession and contrast', [
    { head: 'although, even though', items: ['followed by a clause', 'Although it rained, we went.'] },
    { head: 'despite, in spite of', items: ['followed by a noun or -ing', 'Despite the rain, we went.'] },
    { head: 'whereas, while', items: ['contrast two facts', 'He is rich, whereas she is poor.'] },
  ], { colW: 140 }),
  'reported-speech': flowSpec('From direct to reported speech', ['Choose a\nreporting verb', 'Move the tense\none step back', 'Change the\npronouns', 'Change time and\nplace words', 'Remove the\ninverted commas'], { boxW: 108, note: '"I am tired," he said. → He said that he was tired.' }),
  'essay-structure': flowSpec('The shape of an argumentative essay', ['Introduction\nand thesis', 'Argument 1\nwith an example', 'Argument 2\nwith an example', 'Argument 3\nwith an example', 'Counter-argument\nanswered', 'Conclusion\nrestates the view'], { perRow: 3, boxW: 108 }),
  conditionals: columnsSpec('Conditional sentences', [
    { head: 'Type I: likely', items: ['if + present simple', 'will + base form', 'If it rains, we will stay in.'] },
    { head: 'Type II: imagined', items: ['if + past simple', 'would + base form', 'If I had a laptop, I would code.'] },
  ], { colW: 170 }),
  'gerund-infinitive': columnsSpec('Gerund or infinitive?', [
    { head: 'verb + -ing', items: ['enjoy, avoid, finish', 'mind, keep, suggest', 'admit, deny, practise', 'after every preposition'] },
    { head: 'verb + to', items: ['want, decide, hope', 'plan, promise, agree', 'refuse, learn, need', 'afford'] },
  ], { colW: 160 }),
  'gce-english-papers': columnsSpec('GCE Ordinary Level English Language (0530)', [
    { head: 'Paper 1 (1½ hours)', items: ['Multiple-choice questions', 'Spelling, grammar, vocabulary', 'Sounds, stress and rhyme', 'Reading comprehension'] },
    { head: 'Paper 2 (2 hours)', items: ['Section A: a composition', 'Essays, letters, speeches', 'Section B: text-directed tasks', 'Summary and language work'] },
  ], { colW: 166 }),
};
