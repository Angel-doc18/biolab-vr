// A Level Literature in English figures (0735): the course of a tragedy, the
// Elizabethan playhouse, main plot and subplot, metrical feet, narrative
// technique, Donne's compass conceit, PEEL, Shakespearean and modern drama,
// stage directions, narrators, the Victorian novel, character arcs, Romantic
// and Victorian verse, tone, context answers, comparison, the GCE papers,
// figures of speech, the end of a tragedy, African prose style, free verse,
// the modern stage, the anti-hero, poems by theme, narrative distance, literary
// periods to scale, unseen poetry, critical lenses and examiners' advice.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec } from './charts';
import { Arrow, CS, Tag } from './aComputer';
import { Table } from './aComputer3';

const { O, MUTED, BLUE, RED, GREEN, SKY, LEAF, SAND, LILAC, ROSE } = CS;
const rows = (n, x, y0, rh) => Array.from({ length: n }, (_, i) => [x, y0 + i * rh]);

// ---------- the Elizabethan playhouse, seen from above ----------
function GlobeArt() {
  return (
    <G>
      <Circle cx={170} cy={110} r={92} fill={SAND} stroke={O} strokeWidth={1} />
      <Circle cx={170} cy={110} r={66} fill="#f6f8fa" stroke={O} strokeWidth={1} />
      <Rect x={124} y={22} width={92} height={26} fill={LILAC} stroke={O} strokeWidth={1} />
      <Rect x={134} y={48} width={72} height={64} fill={SKY} stroke={O} strokeWidth={1} />
      <Rect x={164} y={78} width={12} height={10} fill="#ffffff" stroke={O} strokeWidth={0.8} />
      <Txt x={170} y={39} size={7.5} weight="700">
        tiring house
      </Txt>
      <Txt x={170} y={66} size={7.5} weight="700">
        thrust stage
      </Txt>
      <Txt x={170} y={104} size={6.5} fill={MUTED}>
        trapdoor
      </Txt>
      <Txt x={170} y={150} size={8} weight="700">
        yard: groundlings
      </Txt>
      <Txt x={170} y={195} size={8} weight="700">
        galleries
      </Txt>
      <Tag x={300} y={40} text="balcony above the stage" size={7.5} />
      <Line x1={260} y1={40} x2={216} y2={34} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={300} y={120} size={7.5} fill={BLUE}>
        open roof: daylight
      </Txt>
    </G>
  );
}

// ---------- main plot and subplot ----------
const MAIN = ['hero tempted', 'the crime', 'turning point', 'isolation', 'catastrophe'];
const SUB = ['a parallel family', 'deception', 'suffering', 'recognition'];
function SubplotArt() {
  const X = (i) => 64 + i * 72;
  return (
    <G>
      <Txt x={8} y={32} size={8} anchor="start" weight="700" fill={RED}>
        Main
      </Txt>
      <Txt x={8} y={102} size={8} anchor="start" weight="700" fill={BLUE}>
        Sub
      </Txt>
      <Line x1={64} y1={44} x2={352} y2={44} stroke={RED} strokeWidth={2} />
      <Path d={`M64 114 L${X(3)} 114 L${X(4)} 50`} stroke={BLUE} strokeWidth={2} fill="none" />
      {MAIN.map((t, i) => (
        <G key={t}>
          <Circle cx={X(i)} cy={44} r={4} fill={RED} />
          <Txt x={X(i)} y={34} size={7}>
            {t}
          </Txt>
        </G>
      ))}
      {SUB.map((t, i) => (
        <G key={t}>
          <Circle cx={X(i)} cy={114} r={4} fill={BLUE} />
          <Txt x={X(i)} y={130} size={7}>
            {t}
          </Txt>
        </G>
      ))}
      {['Act I', 'Act II', 'Act III', 'Act IV', 'Act V'].map((t, i) => (
        <Txt key={t} x={X(i)} y={160} size={7} fill={MUTED}>
          {t}
        </Txt>
      ))}
      <Txt x={190} y={80} size={7.5} fill={MUTED}>
        the subplot mirrors the main plot, then joins it
      </Txt>
    </G>
  );
}

// ---------- metrical feet ----------
const FEET = [
  ['Iamb', 'x /', 'be-LOW'],
  ['Trochee', '/ x', 'GAR-den'],
  ['Anapaest', 'x x /', 'in-ter-VENE'],
  ['Dactyl', '/ x x', 'BEAU-ti-ful'],
  ['Spondee', '/ /', 'HEART-BREAK'],
];
function FeetArt() {
  return (
    <G>
      <Table x={30} y={8} cols={[['Foot', 90], ['Pattern', 80], ['Example', 110]]} rows={FEET} rh={20} size={8.5} fills={(j, i) => (i === 1 ? SAND : '#ffffff')} />
      <Txt x={170} y={140} size={7.5} fill={MUTED}>
        x = unstressed, / = stressed; five iambs make iambic pentameter
      </Txt>
    </G>
  );
}

// ---------- Donne's compasses ----------
const COMPASS = [
  ['the fixed foot', 'the lover who stays at home'],
  ['the moving foot', 'the lover who travels'],
  ['the fixed foot leans after it', 'she longs for him while he is away'],
  ['the circle drawn "just"', 'he ends where he began: back with her'],
];
function ConceitArt() {
  return <Table x={10} y={8} cols={[['The image (compasses)', 160], ['The idea (the lovers)', 200]]} rows={COMPASS} rh={22} size={7.5} fills={(j, i) => (i === 0 ? SKY : ROSE)} />;
}

// ---------- narrators ----------
const NARRATORS = [
  ['First person ("I")', 'own thoughts only', 'intimacy, bias'],
  ['Third, omniscient', 'all minds', 'overview, judgement'],
  ['Third, limited', 'one mind closely', 'sympathy, mystery'],
  ['Unreliable', 'a distorted view', 'irony, doubt'],
  ['Multiple', 'several views', 'contrast'],
];
function NarratorArt() {
  return <Table x={8} y={8} cols={[['Narrator', 120], ['Knows', 110], ['Effect', 120]]} rows={NARRATORS} rh={20} size={7.5} fills={(j, i) => (i === 0 ? LILAC : '#ffffff')} />;
}

// ---------- character arcs ----------
function ArcArt() {
  return (
    <G>
      <Line x1={40} y1={20} x2={40} y2={140} stroke={O} strokeWidth={1} />
      <Line x1={40} y1={140} x2={360} y2={140} stroke={O} strokeWidth={1} />
      <Txt x={30} y={80} size={7.5} rotate={-90} fill={MUTED}>
        moral standing
      </Txt>
      {['beginning', 'crisis', 'end'].map((t, i) => (
        <Txt key={t} x={70 + i * 130} y={154} size={7.5} fill={MUTED}>
          {t}
        </Txt>
      ))}
      <Path d="M60 110 C150 112 190 90 210 76 S300 34 350 30" stroke={GREEN} strokeWidth={2} fill="none" />
      <Path d="M60 50 C150 48 190 70 210 86 S300 124 350 128" stroke={RED} strokeWidth={2} fill="none" />
      <Line x1={60} y1={80} x2={350} y2={80} stroke={MUTED} strokeWidth={1} strokeDasharray="4 3" />
      <Txt x={352} y={26} size={7.5} anchor="end" weight="700" fill={GREEN}>
        growth
      </Txt>
      <Txt x={352} y={124} size={7.5} anchor="end" weight="700" fill={RED}>
        fall
      </Txt>
      <Txt x={352} y={92} size={7.5} anchor="end" fill={MUTED}>
        static
      </Txt>
      <Circle cx={210} cy={80} r={5} fill="#ffffff" stroke={O} strokeWidth={1.2} />
    </G>
  );
}

// ---------- figures of speech by group ----------
const FIGURES = [
  ['Comparison', 'simile, metaphor, personification, conceit'],
  ['Substitution', 'metonymy, synecdoche'],
  ['Emphasis', 'hyperbole, litotes, oxymoron, paradox, antithesis'],
  ['Sound', 'alliteration, assonance, onomatopoeia, rhyme'],
  ['The line', 'enjambment, caesura'],
];
function FiguresArt() {
  return <Table x={8} y={8} cols={[['Group', 90], ['Figures', 270]]} rows={FIGURES} rh={20} size={7.5} fills={(j, i) => (i === 0 ? SAND : '#ffffff')} />;
}

// ---------- poems by theme ----------
const POEMS = [
  ['Love', 'Sonnet 116', 'Shakespeare'],
  ['Mortality', 'Death, be not proud', 'Donne'],
  ['Nature', 'I wandered lonely as a cloud', 'Wordsworth'],
  ['War', 'Dulce et Decorum Est', 'Owen'],
  ['Time and power', 'Ozymandias', 'Shelley'],
];
function PoemsArt() {
  return <Table x={8} y={8} cols={[['Theme', 90], ['Poem', 170], ['Poet', 100]]} rows={POEMS} rh={20} size={7.5} fills={(j, i) => (i === 0 ? LEAF : '#ffffff')} />;
}

// ---------- narrative distance ----------
const DIST = ['first person', 'free indirect', 'third limited', 'omniscient', 'detached, ironic'];
function DistanceArt() {
  return (
    <G>
      <Arrow x1={30} y1={50} x2={360} y2={50} c={O} both />
      {DIST.map((t, i) => (
        <G key={t}>
          <Circle cx={50 + i * 75} cy={50} r={5} fill={[ROSE, ROSE, SAND, SKY, SKY][i]} stroke={O} strokeWidth={1} />
          <Txt x={50 + i * 75} y={36} size={7.5}>
            {t}
          </Txt>
        </G>
      ))}
      <Txt x={40} y={78} size={8} anchor="start" weight="700" fill={RED}>
        close: immersion, sympathy
      </Txt>
      <Txt x={352} y={78} size={8} anchor="end" weight="700" fill={BLUE}>
        distant: judgement, irony
      </Txt>
    </G>
  );
}

// ---------- drama compared ----------
const DRAMA = [
  ['Hero', 'noble, royal', 'ordinary person'],
  ['Language', 'blank verse, soliloquy', 'prose, pauses, subtext'],
  ['Stage', 'bare, in daylight', 'lit, realistic or symbolic set'],
  ['Conflict', 'public and political', 'domestic and social'],
  ['Ending', 'order restored', 'open or ironic'],
];
function DramaArt() {
  return <Table x={6} y={8} cols={[['Aspect', 70], ['Shakespearean tragedy', 140], ['Modern drama', 160]]} rows={DRAMA} rh={20} size={7.5} fills={(j, i) => (i === 1 ? SAND : i === 2 ? SKY : '#ffffff')} />;
}

// ---------- literary periods to scale ----------
const PERIODS = [
  ['Medieval: Chaucer', 1370, 1400, 0, LILAC],
  ['Elizabethan', 1558, 1603, 0, SAND],
  ['Jacobean', 1603, 1625, 1, SAND],
  ['Metaphysical', 1600, 1680, 2, ROSE],
  ['Augustan', 1700, 1750, 0, LEAF],
  ['Romantic', 1798, 1832, 1, SKY],
  ['Victorian', 1837, 1901, 2, LILAC],
  ['Modernism', 1910, 1940, 0, ROSE],
  ['Postcolonial', 1950, 2000, 1, LEAF],
];
const YX = (y) => 20 + (y - 1350) * 0.55;
function PeriodsArt() {
  return (
    <G>
      {PERIODS.map(([t, a, b, r, f]) => (
        <G key={t}>
          <Rect x={YX(a)} y={30 + r * 32} width={Math.max(4, YX(b) - YX(a))} height={12} fill={f} stroke={O} strokeWidth={0.8} />
          <Txt x={YX(a)} y={26 + r * 32} size={7} anchor="start" weight="700">
            {t}
          </Txt>
        </G>
      ))}
      <Line x1={20} y1={130} x2={YX(2000)} y2={130} stroke={O} strokeWidth={1} />
      {[1400, 1500, 1600, 1700, 1800, 1900, 2000].map((y) => (
        <G key={y}>
          <Line x1={YX(y)} y1={130} x2={YX(y)} y2={134} stroke={O} strokeWidth={1} />
          <Txt x={YX(y)} y={146} size={7}>
            {`${y}`}
          </Txt>
        </G>
      ))}
    </G>
  );
}

// ---------- examiners' advice ----------
const ADVICE = [
  ['Vagueness', 'precise evidence for every claim'],
  ['Plot-telling', 'analyse how and why'],
  ['Weak paragraphs', 'one point each, with a link'],
  ['Misspelt names', 'check names and titles'],
  ['No citation', 'short, exact quotations'],
  ['Unbalanced comparison', 'evidence from both texts'],
];
function AdviceArt() {
  return <Table x={8} y={8} cols={[['Weakness', 150], ['Fix', 210]]} rows={ADVICE} rh={20} size={7.5} fills={(j, i) => (i === 0 ? ROSE : LEAF)} />;
}

export const A_LITERATURE = {
  'ali-tragic-terms': flowSpec('The course of a tragedy', ['Hamartia:\nthe flaw or error', 'Hubris:\npride that defies limits', 'Peripeteia:\nthe reversal', 'Anagnorisis:\nrecognition', 'Catastrophe:\nthe fall', 'Catharsis:\npity and fear released'], { boxW: 118 }),
  'ali-globe': {
    title: 'An Elizabethan playhouse from above',
    w: 370,
    h: 212,
    art: GlobeArt,
    labels: [],
    facts: [
      'The thrust stage juts into the yard, with the audience on three sides.',
      'The groundlings stood in the yard; richer spectators sat in the galleries.',
      'The tiring house behind the stage held costumes and had doors for entrances, with a balcony above.',
      'A trapdoor in the stage served for ghosts and graves.',
      'The roof was open, so plays were performed in daylight.',
    ],
    points: [
      [170, 70],
      [170, 146],
      [170, 35],
      [170, 83],
      [300, 116],
    ],
  },
  'ali-subplot': {
    title: 'Main plot and subplot',
    w: 380,
    h: 168,
    art: SubplotArt,
    labels: [],
    facts: [
      'The main plot runs from the hero’s temptation through the crime and the turning point to the catastrophe.',
      'The subplot follows a parallel family through deception and suffering.',
      'The subplot ends in recognition and joins the main plot at the catastrophe.',
      'It mirrors the main plot, repeating its theme in another key.',
    ],
    points: [
      [136, 44],
      [136, 114],
      [316, 82],
      [208, 76],
    ],
  },
  'ali-feet': {
    title: 'Metrical feet',
    w: 340,
    h: 150,
    art: FeetArt,
    labels: [],
    facts: [...FEET.map(([f, p, e]) => `${f}: ${p}, as in ${e}.`), 'Five iambs make iambic pentameter.'],
    points: [...rows(5, 75, 38, 20), [170, 136]],
  },
  'ali-narrative': columnsSpec('Narrative technique: four questions', [
    { head: 'Who tells?', items: ['first person', 'third person', 'communal "we"'] },
    { head: 'How close?', items: ['inside one mind', 'outside, ironic'] },
    { head: 'In what order?', items: ['chronological', 'flashbacks', 'in parts'] },
    { head: 'Where and when?', items: ['village or city', 'period', 'social world'] },
  ], { colW: 104 }),
  'ali-conceit': {
    title: 'Donne’s compass conceit',
    w: 380,
    h: 120,
    art: ConceitArt,
    labels: [],
    facts: COMPASS.map(([a, b]) => `In the conceit, ${a} stands for ${b}.`),
    points: rows(4, 90, 41, 22),
  },
  'ali-peel': flowSpec('A PEEL paragraph', ['Point:\na claim that\nanswers the question', 'Evidence:\na short quotation', 'Explanation:\nhow the words work', 'Link:\nback to the question'], { perRow: 4, boxW: 106, boxH: 62 }),
  'ali-modern-drama': columnsSpec('Shakespearean and modern drama', [
    { head: 'Shakespeare', items: ['kings and nobles', 'blank verse', 'bare daylight stage', 'order restored'] },
    { head: 'Modern drama', items: ['ordinary people', 'prose and subtext', 'realistic or symbolic set', 'open or ironic ending'] },
  ], { colW: 166 }),
  'ali-stage-directions': columnsSpec('What stage directions tell us', [
    { head: 'Set', items: ['place, period', 'furniture, objects'] },
    { head: 'Light, sound', items: ['time, mood', 'offstage events'] },
    { head: 'Movement', items: ['entrances, exits', 'distance, gestures'] },
    { head: 'Voice', items: ['tone, pauses', 'silences'] },
  ], { colW: 104 }),
  'ali-focalization': {
    title: 'Narrators and what they know',
    w: 366,
    h: 128,
    art: NarratorArt,
    labels: [],
    facts: NARRATORS.map(([n, k, e]) => `${n}: knows ${k}; effect: ${e}.`),
    points: rows(5, 68, 38, 20),
  },
  'ali-victorian': columnsSpec('The Victorian novel (1837 to 1901)', [
    { head: 'Context', items: ['industry, cities', 'class, poverty', 'faith and science'] },
    { head: 'Form', items: ['long and realist', 'serial instalments', 'omniscient narrator'] },
    { head: 'Writers', items: ['Charles Dickens', 'the Brontës', 'George Eliot, Hardy'] },
  ], { colW: 122 }),
  'ali-arc': {
    title: 'Character arcs: growth, fall and no change',
    w: 370,
    h: 160,
    art: ArcArt,
    labels: [],
    facts: [
      'A growth arc rises: the character becomes wiser or kinder.',
      'A fall arc declines: innocence turns to corruption.',
      'A static character stays level and does not change.',
      'The crisis in the middle is the turning moment where the arcs cross.',
    ],
    points: [
      [300, 36],
      [300, 122],
      [120, 80],
      [210, 80],
    ],
  },
  'ali-romantic': columnsSpec('Romantic and Victorian poetry', [
    { head: 'Romantic\n1798 to 1832', items: ['nature, imagination', 'emotion, the individual', 'Wordsworth, Keats'] },
    { head: 'Victorian\n1837 to 1901', items: ['faith and doubt', 'duty and change', 'Tennyson, Browning'] },
  ], { colW: 162 }),
  'ali-tone': columnsSpec('Tone, mood and attitude', [
    { head: 'Tone', items: ['the speaker’s voice', 'bitter, tender, ironic'] },
    { head: 'Mood', items: ['the reader’s feeling', 'gloomy, calm, tense'] },
    { head: 'Attitude', items: ['stance to the subject', 'admiring, scornful'] },
  ], { colW: 124 }),
  'ali-context-answer': flowSpec('Answering a context question', ['Who speaks,\nto whom?', 'Where in the work?\nWhat came just before?', 'Explain the\nkey lines', 'Analyse one\ndevice', 'Why does it\nmatter?'], { boxW: 116 }),
  'ali-compare-plan': flowSpec('A comparative paragraph', ['Topic sentence:\nboth texts, one aspect', 'Text A: evidence\nand analysis', 'Connective:\nwhereas, similarly', 'Text B: evidence\nand analysis', 'Weigh: which\ndifference matters'], { boxW: 122 }),
  'ali-gce-papers': columnsSpec('GCE A Level Literature in English (0735), 2026', [
    { head: 'Paper 1\n1½ h, Thu 11 June', items: ['multiple choice', 'terms and history', 'unseen texts'] },
    { head: 'Papers 2 and 3\n3 h each, Fri 12 June', items: ['written essays', 'context questions', 'drama, prose, poetry'] },
  ], { colW: 166 }),
  'ali-figures': {
    title: 'Figures of speech grouped by function',
    w: 376,
    h: 128,
    art: FiguresArt,
    labels: [],
    facts: FIGURES.map(([g, f]) => `${g}: ${f}.`),
    points: rows(5, 53, 38, 20),
  },
  'ali-denouement': flowSpec('The end of a tragedy: Acts IV and V', ['Falling action:\nallies desert', 'Comic relief\nor pathos', 'Catastrophe:\nthe fall', 'Anagnorisis:\nrecognition', 'Order restored:\nthe last speech'], { boxW: 112 }),
  'ali-african-style': columnsSpec('Style in African prose', [
    { head: 'Oral voice', items: ['proverbs', 'songs, folk tales', 'direct address'] },
    { head: 'Language', items: ['Pidgin', 'code-switching', 'local idioms'] },
    { head: 'Satire', items: ['irony', 'caricature', 'commitment'] },
  ], { colW: 116 }),
  'ali-freeverse': columnsSpec('What shapes free verse', [
    { head: 'Lines', items: ['line breaks', 'enjambment', 'caesura'] },
    { head: 'Page', items: ['spacing', 'stanza shape', 'typography'] },
    { head: 'Voice', items: ['repetition', 'speech rhythm', 'fragments'] },
  ], { colW: 116 }),
  'ali-theatre-space': columnsSpec('Meaning on the modern stage', [
    { head: 'Space', items: ['distance', 'divided set'] },
    { head: 'Light', items: ['time, mood', 'spotlight, blackout'] },
    { head: 'Sound', items: ['offstage events', 'music, silence'] },
    { head: 'Objects', items: ['props as symbols', 'costume'] },
  ], { colW: 104 }),
  'ali-antihero': columnsSpec('Hero and anti-hero', [
    { head: 'Traditional hero', items: ['courage, virtue', 'high status', 'clear goals'] },
    { head: 'Anti-hero', items: ['weakness, doubt', 'ordinary life', 'self-deception'] },
  ], { colW: 160 }),
  'ali-poetry-themes': {
    title: 'Grouping poems by theme',
    w: 376,
    h: 128,
    art: PoemsArt,
    labels: [],
    facts: POEMS.map(([t, p, a]) => `${t}: ${p}, by ${a}.`),
    points: rows(5, 53, 38, 20),
  },
  'ali-distance': {
    title: 'Narrative distance',
    w: 380,
    h: 90,
    art: DistanceArt,
    labels: [],
    facts: [
      'First-person and free indirect narration stand close to a character’s mind and create immersion and sympathy.',
      'Third-person limited narration stays near one character.',
      'Omniscient and detached, ironic narration stand at a distance and invite judgement.',
    ],
    points: [
      [88, 50],
      [200, 50],
      [312, 50],
    ],
  },
  'ali-drama-evolution': {
    title: 'Shakespearean tragedy and modern drama compared',
    w: 380,
    h: 128,
    art: DramaArt,
    labels: [],
    facts: DRAMA.map(([a, s, m]) => `${a}: in Shakespearean tragedy, ${s}; in modern drama, ${m}.`),
    points: rows(5, 41, 38, 20),
  },
  'ali-periods': {
    title: 'Literary periods, to scale',
    w: 404,
    h: 152,
    art: PeriodsArt,
    labels: [],
    facts: [
      'Medieval: Chaucer wrote The Canterbury Tales in the late 14th century.',
      'Elizabethan and Jacobean: 1558 to 1625, the age of Shakespeare.',
      'The Metaphysical poets, such as Donne, wrote in the 17th century.',
      'The Augustan age, about 1700 to 1750: Pope and Swift.',
      'The Romantic period ran from 1798 to about 1832.',
      'The Victorian age ran from 1837 to 1901.',
      'Modernism flourished in the early 20th century.',
      'Postcolonial literature grew after 1950, with Achebe’s Things Fall Apart in 1958.',
    ],
    points: [
      [36, 36],
      [150, 36],
      [180, 100],
      [226, 36],
      [276, 68],
      [305, 100],
      [336, 36],
      [364, 68],
    ],
  },
  'ali-unseen': flowSpec('Three readings of an unseen poem', ['What happens?\nspeaker, situation', 'What does it mean?\ntheme, tone, turn', 'How is it made?\nform, imagery, sound', 'Plan: a thesis,\nparagraphs by idea'], { perRow: 2, boxW: 150 }),
  'ali-theories': columnsSpec('Three critical lenses', [
    { head: 'Feminist', items: ['gender and power', 'women’s choices', 'patriarchy'] },
    { head: 'Marxist', items: ['class and money', 'labour, ownership', 'ideology'] },
    { head: 'Postcolonial', items: ['empire, identity', 'voice, othering', 'writing back'] },
  ], { colW: 120 }),
  'ali-examiners': {
    title: 'Examiners’ warnings and their fixes',
    w: 376,
    h: 150,
    art: AdviceArt,
    labels: [],
    facts: ADVICE.map(([w, f]) => `${w}: fix it with ${f}.`),
    points: rows(6, 83, 38, 20),
  },
};
