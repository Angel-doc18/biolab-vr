// Literature in English figures for Form 2: comparing genres, literal and
// underlying meaning, beliefs, praise songs, run-on lines, poems on children,
// diction, paradox, colonial history, symbols, satire, signal words, personal
// response, writing about a poem, the triangular trade, drama terms, traders'
// tricks, dialogue and monologue, resistance, acting, reading a novel, a
// flashback time line, empathy, chapter summaries, main and minor characters,
// concrete and abstract words, and making associations.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#3f8a4a';
const AMBER = '#b7791f';

// ---------- the triangular trade ----------
function TriangleArt() {
  const land = (x, y, w, h, fill, name) => (
    <G key={name}>
      <Rect x={x} y={y} width={w} height={h} rx={22} fill={fill} stroke={O} strokeWidth={1.1} />
      <Txt x={x + w / 2} y={y + h / 2 + 4} size={11} weight="700">
        {name}
      </Txt>
    </G>
  );
  const arrow = (x1, y1, x2, y2, c) => (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={2.4} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={8} fill={c} />
    </G>
  );
  return (
    <G>
      <Rect x={0} y={0} width={340} height={250} fill="#e3eef8" />
      <Txt x={150} y={136} size={9} italic fill={MUTED}>
        Atlantic Ocean
      </Txt>
      {land(14, 60, 92, 120, '#e9dcc0', 'Americas')}
      {land(212, 12, 108, 62, '#dfe7d2', 'Europe')}
      {land(226, 120, 100, 116, '#f1d6a8', 'Africa')}
      {/* Europe to Africa */}
      {arrow(268, 78, 274, 114, BLUE)}
      <Txt x={278} y={98} size={8.5} anchor="start" fill={BLUE} weight="700">
        1. goods
      </Txt>
      {/* Africa to the Americas */}
      {arrow(222, 182, 112, 150, RED)}
      <Txt x={168} y={186} size={8.5} fill={RED} weight="700">
        2. enslaved Africans
      </Txt>
      <Txt x={168} y={198} size={8} fill={RED}>
        (the Middle Passage)
      </Txt>
      {/* Americas to Europe */}
      {arrow(110, 84, 206, 46, GREEN)}
      <Txt x={118} y={30} size={8.5} fill={GREEN} weight="700">
        3. sugar, cotton,
      </Txt>
      <Txt x={118} y={41} size={8.5} fill={GREEN} weight="700">
        tobacco
      </Txt>
      <Txt x={276} y={226} size={8} fill={MUTED}>
        Bimbia, Douala coast
      </Txt>
    </G>
  );
}

// ---------- order of telling and order of events ----------
function FlashbackArt() {
  const events = [
    ['A', 'Pa Ekane’s father', 'loses the land'],
    ['B', 'Pa Ekane and Tasong', 'farm together'],
    ['C', 'Pa Ekane falls ill', 'and dies'],
    ['D', 'Tasong shares', 'the land'],
  ];
  const X = (i) => 60 + i * 80;
  const told = ['B', 'C', 'A', 'D'];
  return (
    <G>
      <Txt x={8} y={26} size={9} anchor="start" weight="700">
        Order of events (chronology)
      </Txt>
      <Line x1={24} y1={60} x2={322} y2={60} stroke={O} strokeWidth={1.4} />
      <Head x={326} y={60} dx={1} dy={0} size={7} fill={O} />
      {events.map(([k, l1, l2], i) => (
        <G key={k}>
          <Circle cx={X(i)} cy={60} r={11} fill={k === 'A' ? '#fbefd0' : '#e6eef8'} stroke={k === 'A' ? AMBER : O} strokeWidth={1.4} />
          <Txt x={X(i)} y={64} size={10} weight="700">
            {k}
          </Txt>
          <Txt x={X(i)} y={88} size={8}>
            {l1}
          </Txt>
          <Txt x={X(i)} y={99} size={8}>
            {l2}
          </Txt>
        </G>
      ))}
      <Txt x={8} y={132} size={9} anchor="start" weight="700">
        Order of telling in the novel
      </Txt>
      {told.map((k, i) => (
        <G key={`t${k}`}>
          <Rect x={X(i) - 26} y={146} width={52} height={28} rx={6} fill={k === 'A' ? '#fbefd0' : '#eef3ea'} stroke={k === 'A' ? AMBER : O} strokeWidth={1.2} />
          <Txt x={X(i)} y={164} size={10} weight="700">
            {k}
          </Txt>
        </G>
      ))}
      {told.slice(1).map((k, i) => (
        <Line key={`l${k}`} x1={X(i) + 27} y1={160} x2={X(i + 1) - 27} y2={160} stroke={O} strokeWidth={1} />
      ))}
      <Txt x={X(2)} y={192} size={8.5} fill={AMBER} weight="700">
        flashback
      </Txt>
      <Path d={`M${X(2)} 146 L${X(2)} 116 L8 116 L8 60 L${X(0) - 12} 60`} fill="none" stroke={AMBER} strokeWidth={1.2} strokeDasharray="4 3" />
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const LITERATURE_F2 = {
  'li2-genres-compare': columnsSpec('Comparing the three genres', [
    { head: 'Prose', items: ['told by a narrator', 'sentences, chapters', 'read'] },
    { head: 'Drama', items: ['told in dialogue', 'acts, scenes, directions', 'performed'] },
    { head: 'Poetry', items: ['a speaker’s voice', 'lines and stanzas', 'recited'] },
  ], { colW: 120 }),
  'li2-literal': columnsSpec('Literal and underlying meaning', [
    { head: 'The words', items: ['the old drum hangs silent', 'a ladder with no top step', 'many rooms, one roof'] },
    { head: 'Underlying meaning', items: ['a culture being forgotten', 'learning never ends', 'unity in diversity'] },
  ], { colW: 160, arrow: true }),
  'li2-beliefs': columnsSpec('Beliefs in literature', [
    { head: 'Protective belief', items: ['a sacred forest', 'may not be cut', 'nature is conserved'] },
    { head: 'Harmful belief', items: ['a widow blamed', 'for a drought', 'an innocent suffers'] },
    { head: 'Ask', items: ['what is believed?', 'its effect?', 'the writer’s view?'] },
  ], { colW: 118 }),
  'li2-praise-song': columnsSpec('Inside a praise song', [
    { head: 'Praise names', items: ['leopard of the hills', 'you are the rain'] },
    { head: 'Repetition', items: ['your fathers fought,', 'your fathers won'] },
    { head: 'Hyperbole', items: ['your shadow feeds', 'the fields'] },
  ], { colW: 120 }),
  'li2-enjambment': columnsSpec('End-stopped and run-on lines', [
    { head: 'End-stopped', items: ['The sun has set.', 'We pause at the full stop.'] },
    { head: 'Run-on (enjambment)', items: ['She sweeps before the sun', 'has lifted its head', 'the sense flows on'] },
  ], { colW: 160 }),
  'li2-children': columnsSpec('Poems about children', [
    { head: 'Celebration', items: ['naming ceremony', 'baby shower', 'songs and blessings'] },
    { head: 'Maltreatment', items: ['overworked housemaid', 'abandoned child', 'no school'] },
    { head: 'The call', items: ['responsible parents', 'protection', 'education'] },
  ], { colW: 120 }),
  'li2-diction': columnsSpec('Diction and register', [
    { head: 'Formal', items: ['my esteemed father'] },
    { head: 'Informal', items: ['my old man'] },
    { head: 'Solemn', items: ['behold, thou'] },
    { head: 'Technical', items: ['scroll, screen'] },
  ], { colW: 100 }),
  'li2-paradox': columnsSpec('Paradox: contradiction that hides a truth', [
    { head: 'Paradox', items: ['The more I learn, the less I know.', 'Our failures are our best teachers.', 'Less is more.'] },
    { head: 'The truth', items: ['learning shows how much is unknown', 'mistakes teach the most', 'simplicity can be better'] },
  ], { colW: 176, arrow: true }),
  'li2-colonial': flowSpec('Cameroon from colony to reunification', ['1884: German\nprotectorate', '1916-1919: divided\n(Britain, France)', '1922: League\nmandates', '1 January 1960:\nindependence', '1 October 1961:\nreunification'], { boxW: 108 }),
  'li2-symbols': columnsSpec('Common symbols', [
    { head: 'Object', items: ['a dove', 'a seedling', 'a broken chain', 'a felled tree', 'darkness'] },
    { head: 'Stands for', items: ['peace', 'hope, new life', 'freedom', 'destruction, loss', 'evil, ignorance'] },
  ], { colW: 140, arrow: true }),
  'li2-satire': flowSpec('How satire works', ['Choose a vice:\ncorruption, injustice', 'Mock it with irony\nor exaggeration', 'Readers laugh\nand see the truth', 'The aim:\ncorrection'], { boxW: 112, perRow: 2 }),
  'li2-signal-words': columnsSpec('Signal words and tone', [
    { head: 'Approval', items: ['noble', 'brave', 'proud'] },
    { head: 'Disapproval', items: ['shameful', 'greedy', 'sadly'] },
    { head: 'Doubt', items: ['perhaps', 'they say'] },
    { head: 'Emphasis', items: ['surely', 'never'] },
  ], { colW: 100 }),
  'li2-response': flowSpec('Writing a personal response to a poem', ['Say what it\nis about', 'Give your reaction:\nliked, moved, troubled', 'Support it with\nwords from the poem', 'Link it to your\nlife or the world', 'Agree or not,\nand why'], { boxW: 112 }),
  'li2-poem-analysis': flowSpec('Writing about a whole poem', ['Subject', 'Speaker and\nsituation', 'Structure', 'Devices with\nquotations', 'Tone and\nmood', 'Theme and your\nresponse'], { boxW: 104 }),
  'li2-triangular-trade': drawn('The triangular trade across the Atlantic', 340, 250, TriangleArt, [
    'Ships left Europe with manufactured goods for Africa.',
    'Enslaved Africans were carried to the Americas on the Middle Passage.',
    'Ships returned to Europe with sugar, cotton and tobacco.',
    'Captives were also shipped from the Cameroon coast, at places such as Bimbia.',
  ], [[272, 96], [168, 168], [158, 64], [276, 222]]),
  'li2-drama-terms': columnsSpec('Kinds of play and kinds of character', [
    { head: 'Kinds of play', items: ['tragedy: a sad end', 'comedy: a happy end', 'tragicomedy: both'] },
    { head: 'Kinds of character', items: ['hero, heroine', 'villain', 'main and minor'] },
  ], { colW: 156 }),
  'li2-tricks': columnsSpec('Traders’ tricks and their results', [
    { head: 'Trick', items: ['gifts of gin and cloth', 'false friendship', 'stirring up wars'] },
    { head: 'Result', items: ['chiefs grow complicit', 'villagers are deceived', 'more captives taken'] },
  ], { colW: 156, arrow: true }),
  'li2-monologue': columnsSpec('Speech in drama', [
    { head: 'Dialogue', items: ['two or more characters', 'moves the plot'] },
    { head: 'Monologue', items: ['one long speech', 'to others or the audience'] },
    { head: 'Soliloquy', items: ['alone on stage', 'private thoughts aloud'] },
  ], { colW: 120 }),
  'li2-resistance': columnsSpec('Forms of resistance to the slave trade', [
    { head: 'By the enslaved', items: ['escapes', 'revolts on ships', 'keeping their culture'] },
    { head: 'By communities', items: ['hiding the hunted', 'refusing to trade'] },
    { head: 'Abroad', items: ['abolitionists', 'laws ending the trade'] },
  ], { colW: 120 }),
  'li2-acting': columnsSpec('Bringing a play to life', [
    { head: 'The actor', items: ['voice and projection', 'face and gesture', 'movement, staying in role'] },
    { head: 'The staging', items: ['set and props', 'costume', 'lighting and sound'] },
    { head: 'The director', items: ['rehearsals', 'blocking'] },
  ], { colW: 122 }),
  'li2-novel': columnsSpec('Reading a novel: chapter notes', [
    { head: 'For each chapter', items: ['main events', 'new characters', 'setting'] },
    { head: 'Also note', items: ['a key quotation', 'the theme it develops', 'flashbacks'] },
  ], { colW: 150 }),
  'li2-flashback': drawn('Chronology and flashback in a novel', 340, 204, FlashbackArt, [
    'In time order, the events are A, B, C and D.',
    'The novel tells them as B, C, then A in a flashback, then D.',
    'The flashback (A) explains why the land matters so much.',
  ], [[180, 60], [180, 160], [220, 188]]),
  'li2-empathy': flowSpec('Reading with empathy', ['Imagine the\ncharacter’s place', 'Name what they\nfeel', 'Find what causes\nthe feeling', 'Quote the detail\nthat shows it'], { boxW: 112, perRow: 2 }),
  'li2-chapter-summary': flowSpec('Writing a chapter summary', ['What\nhappened?', 'What changed for\nthe characters?', 'Which theme\ndoes it develop?', 'Three to five\nsentences, own words'], { boxW: 112, perRow: 2 }),
  'li2-main-minor': treeSpec('Characters in the novel', 'Characters', [
    { name: 'Main', items: ['Tasong', 'Ajua', 'Mama Lum', 'they change'] },
    { name: 'Minor', items: ['Uncle Mbah: conflict', 'Chief Nyambe: justice', 'market woman:', 'local colour'] },
  ], { colW: 156 }),
  'li2-concrete': columnsSpec('Concrete and abstract', [
    { head: 'Concrete', items: ['hoe', 'river', 'drum', 'bread'] },
    { head: 'Abstract', items: ['generosity', 'hope', 'unity', 'grief'] },
    { head: 'Abstract made concrete', items: ['unity: a rope of', 'a hundred strands'] },
  ], { colW: 118 }),
  'li2-associations': columnsSpec('Making associations', [
    { head: 'Text to self', items: ['Like Ajua, I fought', 'to stay in school.'] },
    { head: 'Text to text', items: ['the housemaid poem', 'and the Mbonjo play'] },
    { head: 'Text to world', items: ['the slave trade and', 'trafficking today'] },
  ], { colW: 120 }),
};
