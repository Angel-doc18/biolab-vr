// Logic figures for Form 3: what logic is, validity and truth, the functions
// of language, the operations of the mind, arguments, concepts, the parts of a
// categorical proposition, comprehension and extension, the kinds of terms,
// A E I O, distribution in circle diagrams, the square of opposition, two
// fallacies and the road to the GCE (0590).
import { Circle, G, Line, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { FILLS, columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';

function Arrow({ x1, y1, x2, y2, c = '#5a6b78', w = 1.4 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

// ---------- the parts of a categorical proposition ----------
const PARTS = [
  { word: 'All', x: 18, w: 50 },
  { word: 'students', x: 76, w: 90 },
  { word: 'are', x: 174, w: 50 },
  { word: 'learners', x: 232, w: 90 },
];
function StandardFormArt() {
  return (
    <G>
      {PARTS.map((p, i) => (
        <G key={p.word}>
          <Rect x={p.x} y={22} width={p.w} height={32} rx={6} fill={FILLS[i]} stroke={O} strokeWidth={1.1} />
          <Txt x={p.x + p.w / 2} y={43} size={13} weight="700">
            {p.word}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- comprehension and extension ----------
const LADDER = [
  ['Living thing', null],
  ['Animal', '+ can feel and move'],
  ['Human being', '+ rational'],
  ['Cameroonian', '+ citizen of Cameroon'],
  ['Cameroonian student', '+ attends school'],
];
function CompExtArt() {
  const y = (i) => 14 + i * 40;
  return (
    <G>
      {LADDER.map(([name, added], i) => (
        <G key={name}>
          {i > 0 && (
            <G>
              <Arrow x1={165} y1={y(i - 1) + 26} x2={165} y2={y(i) - 1} />
              <Txt x={172} y={y(i) - 4} size={8} anchor="start" italic>
                {added}
              </Txt>
            </G>
          )}
          <Rect x={90} y={y(i)} width={150} height={26} rx={6} fill={FILLS[i]} stroke={O} strokeWidth={1.1} />
          <Txt x={165} y={y(i) + 17} size={10.5} weight="700">
            {name}
          </Txt>
        </G>
      ))}
      <Arrow x1={60} y1={18} x2={60} y2={196} c={O} w={2} />
      <Txt x={44} y={107} size={9.5} weight="700" rotate={90}>
        Comprehension increases
      </Txt>
      <Arrow x1={270} y1={196} x2={270} y2={18} c={O} w={2} />
      <Txt x={288} y={107} size={9.5} weight="700" rotate={-90}>
        Extension increases
      </Txt>
    </G>
  );
}

// ---------- distribution in circle diagrams ----------
// An x marks a region known to have members (Venn's convention).
function Cross({ x, y }) {
  return (
    <G>
      <Line x1={x - 4} y1={y - 4} x2={x + 4} y2={y + 4} stroke={RED} strokeWidth={2} />
      <Line x1={x - 4} y1={y + 4} x2={x + 4} y2={y - 4} stroke={RED} strokeWidth={2} />
    </G>
  );
}
const PANELS = [
  { letter: 'A', form: 'All S are P', dist: 'S only' },
  { letter: 'E', form: 'No S are P', dist: 'S and P' },
  { letter: 'I', form: 'Some S are P', dist: 'neither' },
  { letter: 'O', form: 'Some S are not P', dist: 'P only' },
];
function DistributionArt() {
  const cy = 68;
  const S = '#a9cbe8';
  const P = '#f6d58a';
  const ring = (cx, r, fill) => <Circle cx={cx} cy={cy} r={r} fill={fill} fillOpacity={0.55} stroke={O} strokeWidth={1.2} />;
  return (
    <G>
      {PANELS.map((p, i) => {
        const cx = 43 + i * 86;
        return (
          <G key={p.letter}>
            <Txt x={cx} y={16} size={12} weight="700">
              {p.letter}
            </Txt>
            <Txt x={cx} y={30} size={8.5}>
              {p.form}
            </Txt>
            {p.letter === 'A' && (
              <G>
                {ring(cx, 30, P)}
                {ring(cx - 8, 16, S)}
                <Txt x={cx - 8} y={cy + 4} size={10} weight="700">
                  S
                </Txt>
                <Txt x={cx + 19} y={cy - 12} size={10} weight="700">
                  P
                </Txt>
              </G>
            )}
            {p.letter === 'E' && (
              <G>
                {ring(cx - 20, 17, S)}
                {ring(cx + 20, 17, P)}
                <Txt x={cx - 20} y={cy + 4} size={10} weight="700">
                  S
                </Txt>
                <Txt x={cx + 20} y={cy + 4} size={10} weight="700">
                  P
                </Txt>
              </G>
            )}
            {(p.letter === 'I' || p.letter === 'O') && (
              <G>
                {ring(cx - 12, 22, S)}
                {ring(cx + 12, 22, P)}
                <Txt x={cx - 24} y={cy - 8} size={10} weight="700">
                  S
                </Txt>
                <Txt x={cx + 24} y={cy - 8} size={10} weight="700">
                  P
                </Txt>
                <Cross x={p.letter === 'I' ? cx : cx - 24} y={cy + 8} />
              </G>
            )}
            <Txt x={cx} y={116} size={8.5}>
              Distributed:
            </Txt>
            <Txt x={cx} y={130} size={9.5} weight="700">
              {p.dist}
            </Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- the square of opposition ----------
const CORNERS = { A: [90, 50], E: [250, 50], I: [90, 190], O: [250, 190] };
const FORMS = { A: 'All S are P', E: 'No S are P', I: 'Some S are P', O: 'Some S are not P' };
function SquareArt() {
  const r = 16;
  const edge = (a, b, from = r + 2, to = r + 2) => {
    const [x1, y1] = CORNERS[a];
    const [x2, y2] = CORNERS[b];
    const len = Math.hypot(x2 - x1, y2 - y1);
    const ux = (x2 - x1) / len;
    const uy = (y2 - y1) / len;
    return { x1: x1 + ux * from, y1: y1 + uy * from, x2: x2 - ux * to, y2: y2 - uy * to };
  };
  return (
    <G>
      <Line {...edge('A', 'E')} stroke={O} strokeWidth={1.4} />
      <Line {...edge('I', 'O')} stroke={O} strokeWidth={1.4} />
      <Arrow {...edge('A', 'I')} c={O} />
      <Arrow {...edge('E', 'O')} c={O} />
      <Line {...edge('A', 'O')} stroke={RED} strokeWidth={2} />
      <Line {...edge('E', 'I')} stroke={RED} strokeWidth={2} />
      <Rect x={118} y={111} width={104} height={17} rx={4} fill="#ffffff" />
      <Txt x={170} y={123} size={9.5} weight="700" fill={RED}>
        Contradictories
      </Txt>
      <Txt x={170} y={45} size={9.5} weight="700">
        Contraries
      </Txt>
      <Txt x={170} y={205} size={9.5} weight="700">
        Subcontraries
      </Txt>
      <Txt x={76} y={120} size={9.5} weight="700" rotate={-90}>
        Subalterns
      </Txt>
      <Txt x={264} y={120} size={9.5} weight="700" rotate={90}>
        Subalterns
      </Txt>
      {Object.entries(CORNERS).map(([k, [x, y]]) => (
        <G key={k}>
          <Circle cx={x} cy={y} r={r} fill={k === 'A' || k === 'I' ? '#e3f0da' : '#f8e3df'} stroke={O} strokeWidth={1.2} />
          <Txt x={x} y={y + 5} size={14} weight="700">
            {k}
          </Txt>
          <Txt x={x} y={y < 100 ? 22 : 222} size={9}>
            {FORMS[k]}
          </Txt>
        </G>
      ))}
    </G>
  );
}

export const LOGIC = {
  // ---------- Form 3 ----------
  'logic-intro': columnsSpec('Logic: the science and art of correct reasoning', [
    { head: 'Origin', items: ['Greek logos:', 'word, reason', 'Aristotle,', '384 to 322 BC'] },
    { head: 'A science', items: ['studies the laws', 'of correct', 'thinking'] },
    { head: 'An art', items: ['the skill of', 'applying them', 'in daily life'] },
    { head: 'Laws of thought', items: ['identity', 'non-contradiction', 'excluded middle'] },
  ], { colW: 102 }),
  'logic-form-matter': columnsSpec('Truth, validity and soundness', [
    { head: 'Valid,\ntrue premises', items: ['SOUND:', 'the conclusion', 'must be true'] },
    { head: 'Valid,\na false premise', items: ['unsound:', 'the conclusion', 'may be false'] },
    { head: 'Invalid', items: ['the conclusion', 'does not follow,', 'even if it is true'] },
  ], { colW: 112 }),
  'logic-language': columnsSpec('The functions of language', [
    { head: 'Informative', items: ['states facts:', 'true or false', '"Kribi is a port."'] },
    { head: 'Expressive', items: ['shows feelings', '"What a lovely', 'day!"'] },
    { head: 'Directive', items: ['gets action', '"Close the door."'] },
    { head: 'Phatic', items: ['keeps contact', '"Good morning!"'] },
  ], { colW: 102 }),
  'logic-operations': columnsSpec('The three operations of the mind', [
    { head: 'Simple\napprehension', items: ['grasps an idea:', 'a concept', 'in words: a term', '"farmer"'] },
    { head: 'Judgement', items: ['affirms or denies', 'in words:', 'a proposition', '"Farmers work hard."'] },
    { head: 'Reasoning', items: ['draws a conclusion', 'in words:', 'an argument', 'premises ∴ conclusion'] },
  ], { colW: 118, arrow: true }),
  'logic-argument': columnsSpec('Finding premises and conclusions', [
    { head: 'Premise\nindicators', items: ['because', 'since', 'for, as', 'given that'] },
    { head: 'Conclusion\nindicators', items: ['therefore (∴)', 'so, hence', 'thus', 'consequently'] },
  ], { colW: 132 }),
  'logic-concept': flowSpec('Forming a concept', ['Perception:\nsee a real\nmango tree', 'Image: a picture\nof that one\ntree', 'Abstraction:\ndrop size,\ncolour, place', 'Concept:\n"tree", fits\nevery tree', 'Term: the\nword "tree"'], { perRow: 3, boxW: 108, boxH: 58 }),
  'logic-standard-form': {
    title: 'The standard form of a categorical proposition',
    w: 340,
    h: 118,
    art: StandardFormArt,
    labels: [
      ['Quantifier', 43, 86, 43, 54],
      ['Subject term', 121, 86, 121, 54],
      ['Copula', 199, 86, 199, 54],
      ['Predicate term', 277, 86, 277, 54],
      ['An A proposition: universal and affirmative', 170, 112],
    ],
    facts: [
      'A categorical proposition in standard form has four parts in order: quantifier, subject term, copula, predicate term.',
      'The quantifier (all, no, some) tells how much of the subject is meant.',
      'The copula (are, are not) links the subject term to the predicate term.',
      '"All students are learners" is universal and affirmative: an A proposition.',
    ],
  },
  'logic-compext': {
    title: 'Comprehension and extension vary inversely',
    w: 330,
    h: 214,
    art: CompExtArt,
    labels: [],
    facts: [
      'Going down the ladder, each term adds a quality, so its comprehension increases.',
      'At the same time each term covers fewer things, so its extension decreases.',
      'Living thing has the widest extension and the least comprehension; Cameroonian student has the narrowest extension and the most comprehension.',
    ],
  },
  'logic-terms-kinds': treeSpec('Kinds of terms', 'Terms', [
    { name: 'By number', items: ['singular: Yaoundé', 'general: city', 'collective: army'] },
    { name: 'By what\nthey name', items: ['concrete: student', 'abstract: honesty'] },
    { name: 'Quality\npresent?', items: ['positive: literate', 'negative: non-literate', 'privative: blind'] },
  ], { colW: 118 }),
  'logic-aeio': columnsSpec('The four categorical propositions', [
    { head: 'A: universal\naffirmative', items: ['All S are P', '"All farmers', 'are workers."'] },
    { head: 'E: universal\nnegative', items: ['No S are P', '"No snakes', 'are mammals."'] },
    { head: 'I: particular\naffirmative', items: ['Some S are P', '"Some pupils', 'are prefects."'] },
    { head: 'O: particular\nnegative', items: ['Some S are not P', '"Some fruits', 'are not sweet."'] },
  ], { colW: 104 }),
  'logic-distribution': {
    title: 'Which terms are distributed?',
    w: 344,
    h: 138,
    art: DistributionArt,
    labels: [],
    facts: [
      'A, All S are P: the S circle lies inside P; every S is spoken of, but not every P. S is distributed.',
      'E, No S are P: the circles are apart; every S is excluded from every P. Both are distributed.',
      'I, Some S are P: the circles overlap and the x marks S that are P. Neither term is distributed.',
      'O, Some S are not P: the x marks S outside P, shut out of the whole of P. Only P is distributed.',
      'Memory aid: universals distribute subjects; negatives distribute predicates.',
    ],
  },
  'logic-square': {
    title: 'The square of opposition',
    w: 340,
    h: 232,
    art: SquareArt,
    labels: [],
    facts: [
      'A and E, the universals, are at the top; I and O, the particulars, at the bottom.',
      'The diagonals join contradictories, A and O, E and I: exactly one of each pair is true.',
      'A and E are contraries; I and O are subcontraries.',
      'A to I and E to O are subalterns, shown by the arrows.',
    ],
  },
  'logic-fallacies': columnsSpec('Two fallacies of relevance', [
    { head: 'Ad populum\n(the crowd)', items: ['"Everyone uses it,', 'so it is good."', 'popularity is', 'not proof'] },
    { head: 'Ad misericordiam\n(pity)', items: ['"Pass me; my', 'parents will be sad."', 'pity is not', 'evidence'] },
  ], { colW: 138 }),
  'logic-roadmap': flowSpec('Logic from Form 3 to the GCE', ['Form 3: terms,\npropositions,\nA E I O', 'Form 4: square,\nconversion,\nobversion', 'Form 5:\nsyllogisms,\nfallacies', 'Form 5:\ntruth tables', 'GCE Logic\n(0590)'], { perRow: 3, boxW: 108, boxH: 56 }),
};
