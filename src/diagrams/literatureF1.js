// Literature in English figures for Form 1: kinds of oral tales, figures of
// speech, proverbs and riddles, oral songs, an annotated family poem,
// allusion, writing a poem, personification, guided questions, tone, kinds of
// conflict, contrast, summarising a poem, imagery and the senses, protest
// poems, theme and moral, oxymoron, literature in other media, local colour,
// pathos, euphemism, kinds of prose, a plot outline, character traits, fable
// animals, planning a narrative, why stories, atmosphere, cause and effect,
// point-evidence-explanation and the cycle of revenge.
import { G, Line, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#3f8a4a';

// ---------- an annotated poem ----------
function PoemArt() {
  const lines = [
    ['My mother is a shady tree,', 'a'],
    ['Her branches stretch to shelter me;', 'a'],
    ['When storms of hunger shake our home,', 'b'],
    ['Her arms become a mighty dome.', 'b'],
  ];
  return (
    <G>
      <Rect x={14} y={8} width={232} height={150} rx={4} fill="#fbf8f1" stroke={O} strokeWidth={1.2} />
      <Txt x={130} y={32} size={11} weight="700">
        A Shady Tree
      </Txt>
      {lines.map(([l, r], i) => (
        <G key={l}>
          <Txt x={26} y={62 + i * 22} size={9.5} anchor="start" fill={i === 0 ? BLUE : O}>
            {l}
          </Txt>
          <Txt x={238} y={62 + i * 22} size={9.5} anchor="end" weight="700" fill={RED}>
            {r}
          </Txt>
        </G>
      ))}
      <Rect x={20} y={46} width={220} height={94} rx={3} fill="none" stroke={GREEN} strokeWidth={1} strokeDasharray="4 3" />
      {/* annotations */}
      <Line x1={250} y1={28} x2={262} y2={28} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={266} y={31} size={8.5} anchor="start" fill={MUTED} weight="700">
        title
      </Txt>
      <Line x1={250} y1={62} x2={262} y2={62} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={266} y={60} size={8.5} anchor="start" fill={BLUE} weight="700">
        metaphor
      </Txt>
      <Txt x={266} y={71} size={8} anchor="start" fill={MUTED}>
        (mother = tree)
      </Txt>
      <Line x1={250} y1={96} x2={262} y2={96} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={266} y={94} size={8.5} anchor="start" fill={RED} weight="700">
        rhyme scheme
      </Txt>
      <Txt x={266} y={105} size={8} anchor="start" fill={MUTED}>
        aabb
      </Txt>
      <Line x1={250} y1={128} x2={262} y2={128} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={266} y={126} size={8.5} anchor="start" fill={GREEN} weight="700">
        one stanza
      </Txt>
      <Txt x={266} y={137} size={8} anchor="start" fill={MUTED}>
        (four lines)
      </Txt>
      <Txt x={130} y={178} size={8.5} fill={MUTED}>
        Speaker: a grateful child. Mood: warm. Theme: a mother’s love protects.
      </Txt>
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const LITERATURE_F1 = {
  'li1-oral-tales': treeSpec('Kinds of African oral tales', 'Oral tales', [
    { name: 'Myth', items: ['how things began', 'gods, spirits'] },
    { name: 'Legend', items: ['heroes of the past', 'partly true'] },
    { name: 'Fable', items: ['animals as people', 'a moral'] },
    { name: 'Why story', items: ['why things', 'are as they are'] },
    { name: 'Noodle-head', items: ['a fool ruined', 'by his vices'] },
  ], { colW: 96 }),
  'li1-figures': columnsSpec('Figures of speech', [
    { head: 'Comparisons', items: ['simile: like the wind', 'metaphor: is a lion'] },
    { head: 'Giving life', items: ['personification:', 'the river sang'] },
    { head: 'Sound and size', items: ['alliteration: big brown buck', 'hyperbole: a river of tears'] },
    { head: 'Surprise', items: ['irony: the wise hare', 'is fooled'] },
  ], { colW: 124 }),
  'li1-proverbs-riddles': columnsSpec('Proverbs, riddles and tongue twisters', [
    { head: 'Proverb', items: ['One finger cannot', 'pick up a grain.', 'Lesson: unity'] },
    { head: 'Riddle', items: ['A house with', 'no door?', 'Answer: an egg'] },
    { head: 'Tongue twister', items: ['Red lorry,', 'yellow lorry.', 'Tests speech'] },
  ], { colW: 120 }),
  'li1-oral-songs': columnsSpec('Oral songs and chants', [
    { head: 'Song', items: ['lullaby', 'dirge', 'praise song', 'work song', 'incantation'] },
    { head: 'When', items: ['at bedtime', 'at a funeral', 'for a chief or hero', 'while working', 'in a ritual'] },
    { head: 'Purpose', items: ['calm a baby', 'mourn the dead', 'honour and remember', 'keep the rhythm', 'call on spirits'] },
  ], { colW: 118 }),
  'li1-poem-family': drawn('Reading a poem: an annotated stanza', 340, 190, PoemArt, [
    'The title gives the subject: the mother as a shady tree.',
    '"My mother is a shady tree" is a metaphor.',
    'The rhyme scheme is aabb: tree, me; home, dome.',
    'The four lines form one stanza.',
    'The speaker is a grateful child; the mood is warm.',
  ], [[130, 28], [90, 62], [232, 84], [130, 94], [130, 174]]),
  'li1-allusion': columnsSpec('Rhetorical questions and allusion', [
    { head: 'Rhetorical question', items: ['asked for effect', '"Who reaps without', 'sowing?"'] },
    { head: 'Biblical allusion', items: ['"as patient as Job"', '"a Good Samaritan"'] },
    { head: 'Historical allusion', items: ['"the heroes of', 'reunification"'] },
  ], { colW: 126 }),
  'li1-write-poem': flowSpec('Writing a short poem', ['Choose a\nsubject', 'List images\nabout it', 'Pick one or\ntwo devices', 'Write stanzas\nof four lines', 'End with hope\nor a call'], { boxW: 104 }),
  'li1-personification': columnsSpec('Personification: things that act like people', [
    { head: 'Thing or idea', items: ['the sun', 'the wind', 'death', 'hope', 'the church bell'] },
    { head: 'Human action', items: ['smiled', 'wept', 'crept in', 'knocked', 'called'] },
    { head: 'What it suggests', items: ['warmth, kindness', 'sorrow', 'secret fear', 'a welcome visit', 'an invitation'] },
  ], { colW: 112, arrow: true }),
  'li1-guided-questions': flowSpec('Answering guided questions on a poem', ['Read the poem\ntwice, once aloud', 'Read the\nquestion carefully', 'Find the\nlines that answer it', 'Answer in a\nfull sentence', 'Quote a few\nwords as evidence'], { boxW: 110 }),
  'li1-tone': columnsSpec('Tone words', [
    { head: 'Gentle', items: ['tender', 'affectionate', 'calm', 'hopeful'] },
    { head: 'Harsh', items: ['angry', 'bitter', 'accusing', 'sarcastic'] },
    { head: 'Others', items: ['humorous', 'solemn', 'sad', 'joyful'] },
  ], { colW: 104 }),
  'li1-conflict-types': columnsSpec('Kinds of conflict', [
    { head: 'Person and person', items: ['two brothers', 'over land'] },
    { head: 'Person and society', items: ['a girl against', 'a harmful custom'] },
    { head: 'Person and nature', items: ['a farmer against', 'a drought'] },
    { head: 'Inside a person', items: ['honesty against', 'greed'] },
  ], { colW: 110 }),
  'li1-contrast': columnsSpec('Contrast: opposites side by side', [
    { head: 'One side', items: ['heavy basket', 'the idle boy sleeps', 'the rich palace'] },
    { head: 'The other side', items: ['light purse', 'the hawker never stops', 'the empty pot'] },
    { head: 'What it shows', items: ['hard work, little pay', 'praise of hard work', 'inequality'] },
  ], { colW: 124 }),
  'li1-summary-poem': flowSpec('Summarising a poem', ['Find the\nsubject', 'Note what is\ndescribed', 'Find the change\nor message', 'Write two or three\nsentences in your words', 'Check: no new\nideas added'], { boxW: 112 }),
  'li1-imagery': columnsSpec('Imagery and the five senses', [
    { head: 'Sight', items: ['the golden sunset'] },
    { head: 'Sound', items: ['the thunder roared'] },
    { head: 'Smell', items: ['roasting corn'] },
    { head: 'Taste', items: ['the bitter kola'] },
    { head: 'Touch', items: ['the rough bark'] },
  ], { colW: 92 }),
  'li1-protest': columnsSpec('Reading a protest poem', [
    { head: 'Who is wronged?', items: ['a girl', 'a widow', 'the community'] },
    { head: 'What is the wrong?', items: ['breast ironing', 'losing her land', 'dirty streets, cholera'] },
    { head: 'What is demanded?', items: ['respect for her body', 'her rights restored', 'hygiene and care'] },
  ], { colW: 124 }),
  'li1-theme-moral': columnsSpec('Topic, theme and moral', [
    { head: 'Topic (one word)', items: ['corruption', 'pride', 'greed'] },
    { head: 'Theme (a statement)', items: ['corruption robs', 'communities', 'pride leads to a fall'] },
    { head: 'Moral (advice)', items: ['be honest', 'be humble', 'be grateful'] },
  ], { colW: 124 }),
  'li1-oxymoron': columnsSpec('Oxymoron: opposites in one phrase', [
    { head: 'Oxymoron', items: ['deafening silence', 'bitter sweetness', 'a lonely crowd', 'a wise fool'] },
    { head: 'The contradiction', items: ['silence so heavy it hurts', 'joy mixed with pain', 'alone among many', 'wisdom in foolishness'] },
  ], { colW: 154 }),
  'li1-media': columnsSpec('Literature in different media', [
    { head: 'Print', items: ['books, magazines', 'description and', 'the narrator'] },
    { head: 'Radio', items: ['voices, music', 'sound effects'] },
    { head: 'Film and TV', items: ['images, actors', 'camera angles'] },
    { head: 'Stage', items: ['dialogue, movement', 'costume, lighting'] },
  ], { colW: 112 }),
  'li1-local-colour': columnsSpec('Local colour in Cameroonian literature', [
    { head: 'Food', items: ['fufu', 'achu', 'ndolé'] },
    { head: 'Dress', items: ['toghu', 'kaba'] },
    { head: 'Objects', items: ['kola nut', 'calabash', 'talking drum'] },
    { head: 'Places, people', items: ['the Fon’s palace', 'the palaver tree', 'the elders'] },
  ], { colW: 104 }),
  'li1-pathos': columnsSpec('Pathos and proverbs in drama', [
    { head: 'Pathos', items: ['a widow loses her farm', 'a girl forced to marry', 'we feel pity'] },
    { head: 'Proverbs', items: ['an elder’s wisdom', 'local colour', 'may defend a custom'] },
  ], { colW: 156 }),
  'li1-euphemism': columnsSpec('Euphemisms: soft words for hard things', [
    { head: 'Euphemism', items: ['passed away', 'joined the ancestors', 'she is expecting', 'the cleansing'] },
    { head: 'Plain meaning', items: ['died', 'died', 'she is pregnant', 'a cruel rite'] },
  ], { colW: 150, arrow: true }),
  'li1-prose-types': treeSpec('Kinds of prose', 'Prose', [
    { name: 'Fiction', items: ['novel', 'short story', 'fable, tall tale'] },
    { name: 'Non-fiction', items: ['biography', 'autobiography', 'essays, reports'] },
  ], { colW: 150 }),
  'li1-plot-outline': flowSpec('Outlining a short story: the stubborn chicks', ['Mother Hen\nwarns the chicks', 'They disobey and\nenter the bush', 'A hawk attacks;\nKiki is caught', 'Toto returns home\nand learns obedience'], { boxW: 114, perRow: 2 }),
  'li1-character-traits': columnsSpec('Describing a character', [
    { head: 'Trait', items: ['wayward and proud', 'dishonest', 'humble'] },
    { head: 'Evidence', items: ['drives cows to the flood', 'steals the seed', 'serves the sick'] },
    { head: 'Lesson', items: ['pride leads to loss', 'theft harms all', 'service is rewarded'] },
  ], { colW: 126 }),
  'li1-fable': columnsSpec('Animals in fables and what they stand for', [
    { head: 'Animal', items: ['tortoise', 'lion', 'hare', 'ant', 'elephant'] },
    { head: 'Human trait', items: ['cunning, wit', 'power, pride', 'speed, boasting', 'hard work', 'strength'] },
  ], { colW: 130, arrow: true }),
  'li1-narrative-plan': flowSpec('Planning a short narrative', ['Beginning:\ncharacters, setting', 'Problem: a quarrel\nor a big task', 'Turning point:\nthey work together', 'Ending and\nthe lesson'], { boxW: 116, perRow: 2 }),
  'li1-why-story': flowSpec('The pattern of a why story', ['Long ago, things\nwere different', 'A character does\nsomething', 'A consequence\nfollows', '"And that is why…"\nit is so today'], { boxW: 114, perRow: 2 }),
  'li1-atmosphere': columnsSpec('Setting details and the atmosphere they create', [
    { head: 'Details', items: ['dark, smoky, broken bottles', 'thunder, a dying lamp', 'morning sun, laughter'] },
    { head: 'Atmosphere', items: ['gloomy, disorderly', 'frightening, tense', 'peaceful, happy'] },
  ], { colW: 160, arrow: true }),
  'li1-cause-effect': flowSpec('Cause and effect in a story', ['A bad habit\n(drink, greed)', 'It hurts\nothers', 'Things grow\nworse', 'A turning point:\nshame or a lesson'], { boxW: 112, perRow: 2 }),
  'li1-pee': flowSpec('Writing a literature answer', ['Point: answer\nthe question', 'Evidence: a short\nquotation or event', 'Explanation: how\nit proves the point'], { boxW: 118 }),
  'li1-revenge': cycleSpec('The cycle of revenge', ['A wrong\nis done', 'Anger and a\nwish for revenge', 'Revenge is\ntaken', 'The other side\nfeels wronged'], { r: 118, centre: 'Forgiveness ends it' }),
};
