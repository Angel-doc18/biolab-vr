// English Language figures for Form 2: a morning routine, a club schedule, the
// simple present and present continuous, personal hygiene, refuse disposal,
// the vowels /æ/ and /ɑː/, school staff, the fire drill, polite shopping,
// amounts in words, bargaining, containers, irregular trade verbs, needs and
// wants, superlatives, the environment, prepositions of direction, the compass
// and a signpost, transport, ailments, advice with should, rights and duties,
// conjunctions, safe digital content, direct and indirect statements, the
// year's grammar and the four sections of the paper.
import { Circle, G, Polygon, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const WOOD = '#c9a06a';

// ---------- a club schedule ----------
function ScheduleArt() {
  const cols = [
    ['Day', 14, 70],
    ['Club', 84, 104],
    ['Time', 188, 64],
    ['Place', 252, 74],
  ];
  const rows = [
    ['Monday', 'Health Club', '3.00 p.m.', 'Room 4'],
    ['Wednesday', 'Debate Club', '3.30 p.m.', 'Hall'],
    ['Thursday', 'Journalism Club', '3.00 p.m.', 'Library'],
    ['Friday', 'Sports', '2.30 p.m.', 'Field'],
  ];
  const Y = (r) => 42 + r * 28;
  return (
    <G>
      {cols.map(([h, x, w]) => (
        <G key={h}>
          <Rect x={x} y={14} width={w} height={28} fill="#dbe7f5" stroke={O} strokeWidth={1} />
          <Txt x={x + w / 2} y={32} size={9.5} weight="700">
            {h}
          </Txt>
        </G>
      ))}
      {rows.map((row, r) => (
        <G key={row[0]}>
          {row.map((cell, c) => (
            <G key={`${r}${c}`}>
              <Rect x={cols[c][1]} y={Y(r)} width={cols[c][2]} height={28} fill={r % 2 ? '#f6f8fb' : '#ffffff'} stroke={O} strokeWidth={0.8} />
              <Txt x={cols[c][1] + cols[c][2] / 2} y={Y(r) + 18} size={9}>
                {cell}
              </Txt>
            </G>
          ))}
        </G>
      ))}
      <Txt x={170} y={180} size={8.5} fill={MUTED}>
        The Debate Club meets on Wednesday at half past three in the hall.
      </Txt>
    </G>
  );
}

// ---------- the compass and a signpost ----------
function CompassArt() {
  const cx = 95;
  const cy = 98;
  const pt = (deg, r) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const spike = (deg, long, fill) => {
    const tip = pt(deg, long);
    const l = pt(deg - 90, 9);
    const r = pt(deg + 90, 9);
    return <Polygon key={deg} points={`${tip[0]},${tip[1]} ${l[0]},${l[1]} ${cx},${cy} ${r[0]},${r[1]}`} fill={fill} stroke={O} strokeWidth={0.8} />;
  };
  const minor = [
    [45, 'NE'],
    [135, 'SE'],
    [225, 'SW'],
    [315, 'NW'],
  ];
  return (
    <G>
      <Circle cx={cx} cy={cy} r={58} fill="#f6f8fb" stroke={O} strokeWidth={1.1} />
      {minor.map(([d]) => spike(d, 30, '#dbe7f5'))}
      {spike(0, 52, RED)}
      {spike(90, 52, BLUE)}
      {spike(180, 52, BLUE)}
      {spike(270, 52, BLUE)}
      <Circle cx={cx} cy={cy} r={4} fill={O} />
      <Txt x={cx} y={30} size={12} weight="700" fill={RED}>
        N
      </Txt>
      <Txt x={cx} y={176} size={12} weight="700">
        S
      </Txt>
      <Txt x={cx + 70} y={102} size={12} weight="700">
        E
      </Txt>
      <Txt x={cx - 70} y={102} size={12} weight="700">
        W
      </Txt>
      {minor.map(([d, t]) => {
        const [x, y] = pt(d, 44);
        return (
          <Txt key={t} x={x} y={y + 3} size={8} fill={MUTED}>
            {t}
          </Txt>
        );
      })}
      <Rect x={258} y={40} width={8} height={140} fill={WOOD} stroke={O} strokeWidth={1} />
      <Polygon points="266,50 324,50 336,61 324,72 266,72" fill="#ffffff" stroke={O} strokeWidth={1.1} />
      <Txt x={298} y={65} size={9} weight="700">
        Kumba 22 km
      </Txt>
      <Polygon points="258,86 200,86 188,97 200,108 258,108" fill="#ffffff" stroke={O} strokeWidth={1.1} />
      <Txt x={226} y={101} size={9} weight="700">
        Buea 15 km
      </Txt>
      <Txt x={262} y={30} size={9} fill={MUTED}>
        A signpost
      </Txt>
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const ENGLISH_F2 = {
  'en2-routine': flowSpec('A morning routine', ['5.30\nwake up', '5.45\nsweep the compound', '6.15\ntake a bath', '6.45\neat breakfast', '7.00\nleave for school'], { boxW: 112 }),
  'en2-schedule': drawn('Reading a club schedule', 340, 192, ScheduleArt, [
    'The days are in the first column and the clubs in the second.',
    'The Health Club meets on Monday at 3 p.m. in Room 4.',
    'The Debate Club meets on Wednesday at half past three in the hall.',
    'Sports take place on Friday at half past two on the field.',
  ], [[49, 28], [136, 56], [136, 84], [220, 140]]),
  'en2-simple-continuous': columnsSpec('Simple present or present continuous?', [
    { head: 'Simple present', items: ['habits and routines', 'every day, usually', '"I bathe every day."'] },
    { head: 'Present continuous', items: ['happening now', 'now, look!, listen!', '"I am bathing now."'] },
  ], { colW: 160 }),
  'en2-hygiene': treeSpec('Personal hygiene', 'A clean, healthy body', [
    { name: 'Body', items: ['bathe daily', 'clean underwear', 'own towel'] },
    { name: 'Teeth', items: ['brush twice', 'a day', 'own toothbrush'] },
    { name: 'Hands and\nnails', items: ['wash with soap', 'after the toilet', 'nails short'] },
    { name: 'Hair', items: ['wash weekly', 'comb daily'] },
  ], { colW: 96 }),
  'en2-sanitation': flowSpec('Getting rid of refuse safely', ['Sort the\nrubbish', 'Put it in a\ncovered bin', 'Empty the bin\nregularly', 'Take it to the\nrefuse dump', 'Wash your\nhands'], { boxW: 104 }),
  'en2-a-vowels': columnsSpec('/æ/ or /ɑː/?', [
    { head: '/æ/ short', items: ['cat', 'hat', 'ham', 'pack', 'cap'] },
    { head: '/ɑː/ long', items: ['cart', 'heart', 'harm', 'park', 'carp'] },
  ], { colW: 120, arrow: true }),
  'en2-school-staff': treeSpec('Who does what at school', 'The principal', [
    { name: 'Vice-principals', items: ['help run', 'the school'] },
    { name: 'Discipline\nmaster', items: ['keeps order', 'enforces rules'] },
    { name: 'Bursar', items: ['fees', 'accounts'] },
    { name: 'Librarian', items: ['lends books', 'runs the library'] },
  ], { colW: 98 }),
  'en2-fire-drill': flowSpec('The fire drill', ['The alarm\nrings', 'Stop work,\nleave your bags', 'Walk out\nin a line', 'Go to the\nassembly point', 'The teacher\ncounts the class'], { boxW: 112 }),
  'en2-polite-shopping': flowSpec('Polite shopping', ['Greet:\n"Good morning, Ma."', 'Ask:\n"How much is it?"', 'Request:\n"Could I see…?"', 'Pay and\ncheck your change', 'Thank:\n"Thank you."'], { boxW: 116 }),
  'en2-money-words': columnsSpec('Amounts in words', [
    { head: 'Figures (FCFA)', items: ['350', '1 200', '2 500', '15 000', '100 000', '1 000 000'] },
    { head: 'Words', items: ['three hundred and fifty', 'one thousand two hundred', 'two thousand five hundred', 'fifteen thousand', 'one hundred thousand', 'one million'] },
  ], { colW: 150, arrow: true }),
  'en2-bargain': flowSpec('Bargaining step by step', ['Greet and\nask the price', 'Make a\nfair offer', 'The seller\ncounters', 'Agree on\na price', 'Pay and say\nthank you'], { boxW: 104 }),
  'en2-containers': columnsSpec('Counting uncountable goods', [
    { head: 'Container', items: ['a bag of', 'a bottle of', 'a loaf of', 'a bar of', 'a tin of'] },
    { head: 'Goods', items: ['rice', 'palm oil', 'bread', 'soap', 'tomato paste'] },
    { head: 'Market\nmeasures', items: ['a bunch of plantains', 'a heap of tomatoes', 'a tray of eggs', 'a bundle of firewood'] },
  ], { colW: 118 }),
  'en2-trade-verbs': columnsSpec('Irregular verbs of buying and selling', [
    { head: 'Base form', items: ['buy', 'sell', 'pay', 'spend', 'cost', 'bring'] },
    { head: 'Simple past', items: ['bought', 'sold', 'paid', 'spent', 'cost', 'brought'] },
  ], { colW: 120, arrow: true }),
  'en2-needs-wants': columnsSpec('Needs and wants', [
    { head: 'Needs', items: ['food', 'clean water', 'shelter', 'clothing', 'health care', 'education'] },
    { head: 'Wants', items: ['a new phone', 'sweets', 'expensive shoes', 'video games'] },
  ], { colW: 140 }),
  'en2-superlatives': columnsSpec('Superlatives about Cameroon', [
    { head: 'Adjective', items: ['high', 'long', 'wet', 'large'] },
    { head: 'Superlative', items: ['the highest', 'the longest', 'the wettest', 'the largest'] },
    { head: 'In Cameroon', items: ['Mount Cameroon', 'the Sanaga River', 'Debundscha, coast', 'the East Region'] },
  ], { colW: 120 }),
  'en2-environment': treeSpec('Our environment', 'The environment of Cameroon', [
    { name: 'Vegetation', items: ['rainforest', 'mangroves', 'grassland', 'savanna', 'Sahel'] },
    { name: 'Problems', items: ['deforestation', 'bush fires', 'erosion', 'pollution'] },
    { name: 'Solutions', items: ['plant trees', 'use bins', 'recycle', 'protect water'] },
  ], { colW: 112 }),
  'en2-direction-preps': columnsSpec('Prepositions of direction and place', [
    { head: 'Movement', items: ['across the road', 'through the forest', 'along the river', 'past the church', 'round the corner'] },
    { head: 'Position', items: ['next to', 'opposite', 'between', 'behind', 'in front of'] },
  ], { colW: 150 }),
  'en2-compass': drawn('The compass points and a signpost', 340, 192, CompassArt, [
    'North is at the top of the compass.',
    'East is on the right and west is on the left.',
    'North-east is halfway between north and east.',
    'The signpost shows that Kumba is 22 km to the right.',
  ], [[95, 26], [165, 98], [126, 67], [298, 61]]),
  'en2-transport': columnsSpec('Means of transport', [
    { head: 'Road', items: ['on foot', 'bicycle', 'motorbike taxi', 'taxi, bus', 'lorry'] },
    { head: 'Rail', items: ['train'] },
    { head: 'Water', items: ['canoe', 'boat', 'ferry', 'ship'] },
    { head: 'Air', items: ['aeroplane'] },
  ], { colW: 96 }),
  'en2-ailments': columnsSpec('Ailments and the body', [
    { head: 'Head', items: ['headache', 'earache', 'toothache', 'sore throat'] },
    { head: 'Body', items: ['stomach ache', 'backache', 'fever', 'cough'] },
    { head: 'Skin and limbs', items: ['rash, itch', 'cut, burn', 'bruise', 'sprain'] },
  ], { colW: 116 }),
  'en2-should': columnsSpec('Giving advice', [
    { head: 'should', items: ['You should rest.', 'You should drink water.', 'You should see a nurse.'] },
    { head: 'should not', items: ['You shouldn’t scratch it.', 'You shouldn’t share cups.', 'No "to" after should.'] },
  ], { colW: 150 }),
  'en2-rights-duties': columnsSpec('Rights and duties of the child', [
    { head: 'Rights', items: ['a name, a nationality', 'education', 'health care', 'protection', 'play and rest'] },
    { head: 'Duties', items: ['respect others', 'go to school', 'help at home', 'obey the law', 'protect property'] },
  ], { colW: 140 }),
  'en2-conjunctions': columnsSpec('Joining ideas', [
    { head: 'and', items: ['adds'] },
    { head: 'but', items: ['contrasts'] },
    { head: 'because', items: ['gives a', 'reason'] },
    { head: 'so', items: ['gives a', 'result'] },
    { head: 'then', items: ['next', 'in time'] },
  ], { colW: 72 }),
  'en2-safe-content': flowSpec('Before you open, download or share', ['Check the\nage rating', 'Is it a\ntrusted source?', 'Ask a parent\nor teacher', 'Never share\npersonal details', 'Upset? Close it\nand tell an adult'], { boxW: 112 }),
  'en2-direct-indirect': columnsSpec('Direct and indirect statements', [
    { head: 'Direct', items: ['Bih said,', '"I am hungry."', 'They said,', '"We like rice."', '"tomorrow"'] },
    { head: 'Indirect', items: ['Bih said that', 'she was hungry.', 'They said that', 'they liked rice.', 'the next day'] },
  ], { colW: 140, arrow: true }),
  'en2-revision': columnsSpec('Form 2 grammar to revise', [
    { head: 'Verbs', items: ['simple present', 'present continuous', 'simple past', 'going to', 'can, may, should'] },
    { head: 'Words', items: ['adverbs of frequency', 'at, on, in', 'some, any, much, many', 'comparatives', 'superlatives'] },
    { head: 'Sentences', items: ['and, but, because', 'so, then', 'direct speech', 'indirect speech', 'questions, negatives'] },
  ], { colW: 124 }),
  'en2-paper': columnsSpec('The four sections of the Form 2 paper', [
    { head: 'Section', items: ['A listening, speaking', 'B reading', 'C grammar, vocabulary', 'D composition'] },
    { head: 'Weight', items: ['20%', '30%', '30%', '20%'] },
    { head: 'Tasks', items: ['dictation, dialogues', 'passage, 150–200 words', 'cloze, matching', 'letter, story: 100–120'] },
  ], { colW: 124 }),
};
