// English Language figures for Form 3: modals of obligation, the zero article,
// the paragraph, context clues, comparison, an essay plan, suggestions, the
// report, reported speech, the writing process, summary writing, clock faces,
// a study timetable, a farming process, transport, diseases, food classes,
// disasters, phrasal verbs, a poster, prepositions of movement, punctuation,
// a map of parks and reserves, linking words, sentence patterns, safety from
// traffickers, the gerund, speculation, festivals, pronouns, affixation,
// indefinite pronouns, inventors, reported questions, the parts of a computer,
// word classes, checking the news, quantifiers and lexical fields.
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';
import { Outline, TOWNS, px, py } from './geography4';

const O = '#33414d';
const MUTED = '#6b7a88';
const BLUE = '#3f6fb5';
const RED = '#c8463d';
const GREEN = '#3f8a4a';

// ---------- clock faces ----------
function ClockArt() {
  const clocks = [
    [7, 15, '7.15', 'a quarter', 'past seven'],
    [7, 30, '7.30', 'half past', 'seven'],
    [7, 45, '7.45', 'a quarter', 'to eight'],
    [9, 40, '9.40', 'twenty', 'to ten'],
  ];
  const R = 30;
  return (
    <G>
      {clocks.map(([h, m, digits, l1, l2], i) => {
        const cx = 45 + i * 83;
        const cy = 52;
        const ma = (m * 6 * Math.PI) / 180;
        const ha = (((h % 12) + m / 60) * 30 * Math.PI) / 180;
        return (
          <G key={digits}>
            <Circle cx={cx} cy={cy} r={R} fill="#ffffff" stroke={O} strokeWidth={1.6} />
            {Array.from({ length: 12 }, (_, k) => {
              const a = (k * 30 * Math.PI) / 180;
              const r1 = k % 3 === 0 ? R - 7 : R - 4;
              return <Line key={k} x1={cx + r1 * Math.sin(a)} y1={cy - r1 * Math.cos(a)} x2={cx + (R - 1) * Math.sin(a)} y2={cy - (R - 1) * Math.cos(a)} stroke={O} strokeWidth={k % 3 === 0 ? 1.6 : 0.9} />;
            })}
            <Line x1={cx} y1={cy} x2={cx + (R - 9) * Math.sin(ma)} y2={cy - (R - 9) * Math.cos(ma)} stroke={BLUE} strokeWidth={1.8} />
            <Line x1={cx} y1={cy} x2={cx + (R - 16) * Math.sin(ha)} y2={cy - (R - 16) * Math.cos(ha)} stroke={RED} strokeWidth={2.6} />
            <Circle cx={cx} cy={cy} r={2.2} fill={O} />
            <Txt x={cx} y={cy + R + 16} size={10} weight="700">
              {digits}
            </Txt>
            <Txt x={cx} y={cy + R + 30} size={8.5}>
              {l1}
            </Txt>
            <Txt x={cx} y={cy + R + 41} size={8.5}>
              {l2}
            </Txt>
          </G>
        );
      })}
      <Txt x={170} y={140} size={8.5} fill={MUTED}>
        Red: the hour hand. Blue: the minute hand.
      </Txt>
    </G>
  );
}

// ---------- prepositions of movement ----------
function MovementArt() {
  const W = 82;
  const arrow = (x1, y1, x2, y2, k) => (
    <G key={k}>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={RED} strokeWidth={2} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={RED} />
    </G>
  );
  const panel = (i, label, draw) => {
    const x = 4 + (i % 4) * (W + 2);
    const y = 6 + Math.floor(i / 4) * 96;
    return (
      <G key={label}>
        <Rect x={x} y={y} width={W} height={88} rx={6} fill="#f6f8fb" stroke="#c9d3dd" strokeWidth={1} />
        {draw(x + W / 2, y + 44)}
        <Txt x={x + W / 2} y={y + 82} size={9.5} weight="700">
          {label}
        </Txt>
      </G>
    );
  };
  const house = (cx, cy) => <Path key="h" d={`M${cx - 16} ${cy + 16} L${cx - 16} ${cy - 6} L${cx} ${cy - 20} L${cx + 16} ${cy - 6} L${cx + 16} ${cy + 16} Z`} fill="#f3d9a4" stroke={O} strokeWidth={1} />;
  return (
    <G>
      {panel(0, 'across', (cx, cy) => [<Rect key="r" x={cx - 34} y={cy - 9} width={68} height={18} fill="#9cc4e8" />, arrow(cx, cy + 24, cx, cy - 22, 'a')])}
      {panel(1, 'along', (cx, cy) => [<Rect key="r" x={cx - 34} y={cy - 7} width={68} height={14} fill="#d7d9dc" />, arrow(cx - 30, cy, cx + 30, cy, 'a')])}
      {panel(2, 'through', (cx, cy) => [<Rect key="t" x={cx - 14} y={cy - 18} width={28} height={36} fill="#8fbf8a" stroke={O} strokeWidth={0.8} />, arrow(cx - 34, cy, cx + 34, cy, 'a')])}
      {panel(3, 'into', (cx, cy) => [house(cx + 10, cy), arrow(cx - 34, cy + 6, cx + 8, cy + 6, 'a')])}
      {panel(4, 'out of', (cx, cy) => [house(cx - 10, cy), arrow(cx - 8, cy + 6, cx + 34, cy + 6, 'a')])}
      {panel(5, 'over', (cx, cy) => [<Rect key="w" x={cx - 10} y={cy - 4} width={20} height={24} fill="#c9a06a" stroke={O} strokeWidth={0.8} />, <Path key="p" d={`M${cx - 30} ${cy + 18} Q${cx} ${cy - 46} ${cx + 28} ${cy + 14}`} fill="none" stroke={RED} strokeWidth={2} />, <Head key="hd" x={cx + 29} y={cy + 16} dx={0.4} dy={1} size={6} fill={RED} />])}
      {panel(6, 'up', (cx, cy) => [<Polygon key="m" points={`${cx - 32},${cy + 22} ${cx + 4},${cy - 22} ${cx + 32},${cy + 22}`} fill="#cdb48c" stroke={O} strokeWidth={0.8} />, arrow(cx - 24, cy + 12, cx - 2, cy - 14, 'a')])}
      {panel(7, 'past', (cx, cy) => [<Rect key="b" x={cx - 12} y={cy - 22} width={24} height={20} fill="#e4dcef" stroke={O} strokeWidth={0.8} />, arrow(cx - 34, cy + 8, cx + 34, cy + 8, 'a')])}
    </G>
  );
}

// ---------- national parks and reserves on a sketch map ----------
const DX = 50;
function ParksArt() {
  const park = (at, label, side, dy = 3) => {
    const x = px(at[0]) + DX;
    const y = py(at[1]);
    return (
      <G key={label}>
        <Circle cx={x} cy={y} r={5} fill={GREEN} opacity={0.85} />
        <Txt x={side > 0 ? x + 8 : x - 8} y={y + dy} size={8} anchor={side > 0 ? 'start' : 'end'} weight="700">
          {label}
        </Txt>
      </G>
    );
  };
  const outside = (at, toLon, label) => {
    const x = px(at[0]) + DX;
    const y = py(at[1]);
    return (
      <G key={label}>
        <Circle cx={x} cy={y} r={5} fill={GREEN} opacity={0.85} />
        <Line x1={x + 6} y1={y} x2={px(toLon) + DX} y2={y} stroke={O} strokeWidth={0.7} />
        <Txt x={px(toLon) + DX + 3} y={y + 3} size={8} anchor="start" weight="700">
          {label}
        </Txt>
      </G>
    );
  };
  const town = (name, side) => {
    const [lon, lat] = TOWNS[name];
    return (
      <G key={name}>
        <Circle cx={px(lon) + DX} cy={py(lat)} r={2.2} fill={O} />
        <Txt x={px(lon) + DX + (side > 0 ? 5 : -5)} y={py(lat) + 3} size={7.5} anchor={side > 0 ? 'start' : 'end'} fill={MUTED}>
          {name}
        </Txt>
      </G>
    );
  };
  return (
    <G>
      <G transform={`translate(${DX} 0)`}>
        <Outline />
      </G>
      {outside([14.6, 11.3], 15.6, 'Waza NP')}
      {outside([13.8, 8.3], 15.4, 'Bénoué NP')}
      {park([8.85, 5.1], 'Korup NP', -1)}
      {park([13.0, 3.2], 'Dja Reserve', 1)}
      {town('Yaoundé', 1)}
      {town('Douala', 1)}
      <Txt x={px(12.2) + DX} y={py(1.55)} size={8} italic>
        Simplified sketch map
      </Txt>
    </G>
  );
}

// ---------- the parts of a desktop computer ----------
function ComputerArt() {
  return (
    <G>
      {/* monitor */}
      <Rect x={50} y={24} width={120} height={78} rx={5} fill="#2f3b47" />
      <Rect x={57} y={31} width={106} height={62} fill="#a7c4e0" />
      <Rect x={102} y={102} width={16} height={14} fill="#55636f" />
      <Rect x={84} y={116} width={52} height={6} rx={2} fill="#55636f" />
      {/* system unit */}
      <Rect x={190} y={34} width={44} height={96} rx={4} fill="#d9dde2" stroke={O} strokeWidth={1.1} />
      <Circle cx={212} cy={50} r={4} fill={GREEN} />
      <Rect x={198} y={64} width={28} height={5} fill="#9aa5b0" />
      {/* keyboard and mouse */}
      <Rect x={40} y={134} width={140} height={22} rx={3} fill="#e6e9ed" stroke={O} strokeWidth={1} />
      {Array.from({ length: 12 }, (_, k) => (
        <Rect key={k} x={46 + k * 11} y={139} width={8} height={5} fill="#b9c2cb" />
      ))}
      <Rect x={70} y={147} width={80} height={5} fill="#b9c2cb" />
      <Ellipse cx={205} cy={146} rx={9} ry={13} fill="#e6e9ed" stroke={O} strokeWidth={1} />
      <Line x1={205} y1={133} x2={205} y2={142} stroke={O} strokeWidth={0.8} />
      {/* printer */}
      <Rect x={256} y={86} width={70} height={36} rx={4} fill="#d9dde2" stroke={O} strokeWidth={1.1} />
      <Rect x={268} y={72} width={46} height={16} fill="#ffffff" stroke={O} strokeWidth={0.8} />
      <Rect x={268} y={114} width={46} height={5} fill="#9aa5b0" />
      {/* labels */}
      <Txt x={110} y={16} size={9} weight="700">
        monitor (screen)
      </Txt>
      <Txt x={212} y={26} size={9} weight="700">
        system unit
      </Txt>
      <Txt x={110} y={172} size={9} weight="700">
        keyboard
      </Txt>
      <Txt x={205} y={176} size={9} weight="700">
        mouse
      </Txt>
      <Txt x={291} y={138} size={9} weight="700">
        printer
      </Txt>
    </G>
  );
}

// ---------- a poster ----------
function PosterArt() {
  const tag = (y, text) => (
    <G key={text}>
      <Line x1={232} y1={y - 3} x2={248} y2={y - 3} stroke={MUTED} strokeWidth={0.8} />
      <Txt x={252} y={y} size={8.5} anchor="start" fill={MUTED} weight="700">
        {text}
      </Txt>
    </G>
  );
  return (
    <G>
      <Rect x={16} y={8} width={212} height={232} rx={4} fill="#eef6ea" stroke={O} strokeWidth={1.4} />
      <Txt x={122} y={36} size={13} weight="700" fill={GREEN}>
        KEEP OUR SCHOOL CLEAN
      </Txt>
      {/* a dustbin with paper going in */}
      <Path d="M100 74 L144 74 L139 128 L105 128 Z" fill="#5f9e5a" stroke={O} strokeWidth={1.2} />
      <Rect x={96} y={66} width={52} height={8} rx={2} fill="#4a7f46" stroke={O} strokeWidth={1} />
      <Circle cx={170} cy={56} r={7} fill="#ffffff" stroke={O} strokeWidth={1} />
      <Path d="M163 60 Q150 62 146 68" fill="none" stroke={RED} strokeWidth={1.6} />
      <Head x={145} y={70} dx={-0.4} dy={1} size={5} fill={RED} />
      <Txt x={122} y={154} size={11.5} weight="700">
        Bin it, don’t drop it!
      </Txt>
      <Txt x={122} y={178} size={9.5}>
        Reduce. Reuse. Recycle.
      </Txt>
      <Txt x={122} y={194} size={9.5}>
        Never burn plastic.
      </Txt>
      <Txt x={122} y={226} size={8.5} fill={MUTED}>
        Health Club, Form 3
      </Txt>
      {tag(36, 'heading')}
      {tag(100, 'simple picture')}
      {tag(154, 'slogan')}
      {tag(186, 'short points')}
      {tag(226, 'who made it')}
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const ENGLISH_F3 = {
  'en3-modals-obligation': columnsSpec('Modals of obligation', [
    { head: 'Obligation', items: ['must: strong duty', 'have to: a rule says so', 'had to: in the past'] },
    { head: 'Advice', items: ['should', 'ought to'] },
    { head: 'No and not needed', items: ['mustn’t: forbidden', 'don’t have to:', 'not necessary'] },
  ], { colW: 122 }),
  'en3-zero-article': columnsSpec('When to use no article', [
    { head: 'General ideas', items: ['Books are useful.', 'Knowledge is power.'] },
    { head: 'Names, meals,\nlanguages', items: ['in Buea', 'after lunch', 'She speaks French.'] },
    { head: 'Places for their\npurpose', items: ['go to school', 'in hospital', 'go to bed'] },
  ], { colW: 120 }),
  'en3-paragraph': flowSpec('A good paragraph', ['Topic sentence:\nthe main idea', 'Supporting sentences:\nexplain, give examples', 'Concluding sentence:\nround off the idea'], { boxW: 118 }),
  'en3-frequency-synonyms': columnsSpec('Adverbs of frequency and synonyms', [
    { head: 'From most to least often', items: ['always', 'usually', 'often', 'sometimes', 'seldom', 'never'] },
    { head: 'Synonym pairs', items: ['love, affection', 'help, assist', 'kind, caring', 'quarrel, argue'] },
  ], { colW: 150 }),
  'en3-context-clues': columnsSpec('Clues to the meaning of a new word', [
    { head: 'Definition', items: ['an orphan, a child', 'whose parents died'] },
    { head: 'Opposite', items: ['not timid', 'but bold'] },
    { head: 'Example', items: ['fruits such as', 'mangoes'] },
    { head: 'General sense', items: ['so frail he could', 'hardly walk'] },
  ], { colW: 100 }),
  'en3-comparison': columnsSpec('Comparing with adjectives', [
    { head: 'Short adjectives', items: ['tall, taller,', 'the tallest', 'big, bigger,', 'the biggest'] },
    { head: 'Long adjectives', items: ['difficult,', 'more difficult,', 'the most difficult'] },
    { head: 'Irregular', items: ['good, better, best', 'bad, worse, worst', 'far, further, furthest'] },
  ], { colW: 120 }),
  'en3-essay-plan': flowSpec('A four-paragraph essay', ['Introduction:\ndefine, state problem', 'Body: first\nsolution, example', 'Body: second\nsolution, example', 'Conclusion:\nsum up, advise'], { boxW: 112, perRow: 2 }),
  'en3-suggestions': columnsSpec('Making suggestions', [
    { head: '+ base form', items: ['We should …', 'Let’s …', 'Why don’t we …?', 'Shall we …?'] },
    { head: '+ -ing form', items: ['How about …?', 'What about …?'] },
    { head: 'Replies', items: ['That’s a good idea.', 'I agree.', 'I’m not sure, because …'] },
  ], { colW: 122 }),
  'en3-report': flowSpec('The parts of a report', ['Title', 'Introduction:\nwho, when, why', 'Findings or\nactivities', 'Recommendations', 'Name, position\nand date'], { boxW: 106 }),
  'en3-reported-speech': columnsSpec('From direct to reported speech', [
    { head: 'Direct', items: ['am, is', 'sold', 'will', 'can', 'today', 'tomorrow', 'here'] },
    { head: 'Reported', items: ['was', 'had sold', 'would', 'could', 'that day', 'the next day', 'there'] },
  ], { colW: 120, arrow: true }),
  'en3-writing-process': flowSpec('The writing process', ['Plan: brainstorm\nand outline', 'Draft', 'Revise:\nimprove ideas', 'Edit: grammar,\nspelling', 'Write the\nfinal copy'], { boxW: 106 }),
  'en3-summary': flowSpec('Writing a summary', ['Read and\nunderstand', 'Underline the\nmain points', 'Leave out examples\nand repetition', 'Write in your\nown words', 'Count words and\ncheck meaning'], { boxW: 112 }),
  'en3-time': drawn('Telling the time', 340, 150, ClockArt, [
    '7.15 is a quarter past seven.',
    '7.30 is half past seven.',
    '7.45 is a quarter to eight.',
    '9.40 is twenty to ten.',
  ], [[45, 52], [128, 52], [211, 52], [294, 52]]),
  'en3-timetable': columnsSpec('A study timetable for an afternoon', [
    { head: 'Time', items: ['3.00 to 4.00', '4.00 to 4.30', '4.30 to 6.00', '7.00 to 8.30', '9.30'] },
    { head: 'Activity', items: ['rest and lunch', 'house chores', 'homework, hardest first', 'revision', 'sleep'] },
  ], { colW: 150 }),
  'en3-process': flowSpec('Growing and marketing cocoa', ['Seeds are planted\nin a nursery', 'Seedlings are\ntransplanted', 'Trees are weeded\nand sprayed', 'Ripe pods are\nharvested', 'Beans are fermented\nand dried', 'Beans are sold\nto buyers'], { boxW: 114 }),
  'en3-transport': columnsSpec('Means of transport', [
    { head: 'Road', items: ['cars, buses, motorbikes', 'door to door', 'but accidents, jams'] },
    { head: 'Rail', items: ['CAMRAIL trains', 'heavy loads, cheap', 'but few routes'] },
    { head: 'Water', items: ['canoes, ferries, ships', 'bulky goods', 'but slow'] },
    { head: 'Air', items: ['aeroplanes', 'the fastest', 'but costly'] },
  ], { colW: 108 }),
  'en3-diseases': columnsSpec('Some infectious diseases', [
    { head: 'Disease', items: ['malaria', 'cholera', 'tuberculosis', 'HIV', 'polio, measles'] },
    { head: 'Spread by', items: ['mosquitoes', 'dirty water, food', 'coughing', 'sex, blood, birth', 'contact with germs'] },
    { head: 'Prevention', items: ['nets, no stagnant water', 'safe water, hygiene', 'vaccine, fresh air', 'abstinence, no shared blades', 'vaccination'] },
  ], { colW: 124 }),
  'en3-classes-food': treeSpec('Classes of food', 'A balanced diet', [
    { name: 'Carbohydrates', items: ['energy', 'rice, cassava', 'yams, bread'] },
    { name: 'Proteins', items: ['body-building', 'beans, fish', 'eggs, meat'] },
    { name: 'Fats, oils', items: ['energy, warmth', 'palm oil', 'avocado'] },
    { name: 'Vitamins,\nminerals', items: ['protection', 'fruit', 'vegetables'] },
    { name: 'Water,\nroughage', items: ['digestion', 'fibre in grains', 'and fruit'] },
  ], { colW: 98 }),
  'en3-disasters': columnsSpec('Natural disasters', [
    { head: 'Disaster', items: ['flood', 'landslide', 'drought', 'volcanic eruption', 'tornado'] },
    { head: 'Cause', items: ['heavy rain, blocked drains', 'rain on bare slopes', 'no rain for months', 'magma from deep below', 'spinning storm winds'] },
    { head: 'Protection', items: ['clear gutters', 'plant trees, terraces', 'store water', 'follow warnings', 'strong shelters'] },
  ], { colW: 124 }),
  'en3-phrasal-waste': columnsSpec('Phrasal verbs about waste', [
    { head: 'Using things', items: ['pick up: lift', 'throw away: discard', 'clean up: make clean', 'use up: finish'] },
    { head: 'Changing things', items: ['cut down on: reduce', 'give off: release', 'put out: extinguish', 'set up: start'] },
  ], { colW: 150 }),
  'en3-poster': drawn('The parts of a poster', 340, 248, PosterArt, [
    'A poster has a bold heading.',
    'A simple picture shows the message.',
    'A short slogan is easy to remember.',
    'A few short points follow.',
    'It says who made it.',
  ], [[122, 32], [122, 100], [122, 150], [122, 186], [122, 222]]),
  'en3-movement': drawn('Prepositions of movement', 340, 196, MovementArt, [
    'across: from one side to the other of the river.',
    'along: following the road.',
    'through: from one end to the other, inside.',
    'into and out of: entering and leaving a building.',
    'over, up and past show other directions.',
  ], [[45, 50], [129, 50], [213, 50], [297, 50], [171, 146]]),
  'en3-punctuation': columnsSpec('Punctuation', [
    { head: 'Ends of sentences', items: ['full stop .', 'question mark ?', 'exclamation mark !'] },
    { head: 'Inside sentences', items: ['comma , in lists', 'apostrophe ’ the guide’s hat', 'quotation marks for speech'] },
    { head: 'Capital letters', items: ['the first word', 'names: Foumban', 'titles: the Sultan'] },
  ], { colW: 132 }),
  'en3-parks': drawn('National parks and reserves of Cameroon', 300, 330, ParksArt, [
    'Waza National Park is in the Far North.',
    'Bénoué National Park is in the North.',
    'Korup National Park, an ancient rainforest, is in the South-West.',
    'The Dja Faunal Reserve is in the southern forest.',
  ]),
  'en3-linking': columnsSpec('Linking words for purpose and contrast', [
    { head: 'Purpose', items: ['to, in order to', 'so as to', 'so that + clause', 'for + noun'] },
    { head: 'Contrast', items: ['but, although', 'despite + noun', 'However, …', 'whereas'] },
  ], { colW: 150 }),
  'en3-sentence-patterns': columnsSpec('Sentence patterns', [
    { head: 'Pattern', items: ['SV', 'SVO', 'SVC', 'SVA', 'SVOO', 'SVOC'] },
    { head: 'Example', items: ['The child cried.', 'The police arrested him.', 'She became a nurse.', 'They are at school.', 'She gave him food.', 'They made her captain.'] },
  ], { colW: 156 }),
  'en3-safety': flowSpec('Staying safe from traffickers', ['A stranger offers\na job far away', 'Say no and\ndo not follow', 'Tell parents\nor a teacher', 'Report to police\nor social services'], { boxW: 112, perRow: 2 }),
  'en3-gerund': columnsSpec('The gerund: an -ing form used as a noun', [
    { head: 'Subject', items: ['Dancing is fun.', 'Drumming takes skill.'] },
    { head: 'Object', items: ['She enjoys singing.', 'Avoid smoking.'] },
    { head: 'After a preposition', items: ['good at drumming', 'thanks for coming'] },
  ], { colW: 122 }),
  'en3-speculation': columnsSpec('Speculating with modals', [
    { head: 'About now', items: ['must be (almost sure)', 'may, might, could be', 'can’t be (surely not)'] },
    { head: 'About the past', items: ['must have rained', 'might have gone', 'can’t have seen'] },
  ], { colW: 150 }),
  'en3-festivals': columnsSpec('Some festivals of Cameroon', [
    { head: 'Festival', items: ['Ngondo', 'Nguon', 'Lela', 'Fantasia'] },
    { head: 'People, place', items: ['Sawa, Douala', 'Bamoun, Foumban', 'Bali Nyonga', 'northern lamidates'] },
    { head: 'A feature', items: ['ritual on the Wouri', 'the Sultan’s rule judged', 'royal yearly festival', 'horse riders'] },
  ], { colW: 120 }),
  'en3-pronouns': columnsSpec('Kinds of pronoun', [
    { head: 'Subject', items: ['I, he, she', 'we, they'] },
    { head: 'Object', items: ['me, him, her', 'us, them'] },
    { head: 'Possessive', items: ['mine, hers', 'ours, theirs'] },
    { head: 'Reflexive', items: ['myself, herself', 'themselves'] },
  ], { colW: 100 }),
  'en3-affixes': treeSpec('Word formation by affixation', 'Root word', [
    { name: 'Prefix', items: ['un- happy', 'dis- agree', 're- build', 'co- operate'] },
    { name: 'Noun suffix', items: ['govern-ment', 'happi-ness', 'celebra-tion'] },
    { name: 'Adjective suffix', items: ['joy-ful', 'enjoy-able', 'fam-ous'] },
  ], { colW: 120 }),
  'en3-indefinite': columnsSpec('Indefinite pronouns', [
    { head: 'some-', items: ['someone', 'something', '(positive)'] },
    { head: 'any-', items: ['anyone', 'anything', '(questions,', 'negatives)'] },
    { head: 'no-', items: ['nobody', 'nothing', '(positive verb)'] },
    { head: 'every-', items: ['everybody', 'everything', '(singular verb)'] },
  ], { colW: 100 }),
  'en3-inventions': columnsSpec('Some scientists and inventors', [
    { head: 'Person', items: ['Isaac Newton', 'Alexander Graham Bell', 'Thomas Edison', 'the Wright brothers', 'Tim Berners-Lee'] },
    { head: 'Work', items: ['laws of motion, 1687', 'telephone, 1876', 'light bulb, 1879', 'powered flight, 1903', 'World Wide Web, 1989'] },
  ], { colW: 146 }),
  'en3-reported-questions': columnsSpec('Reporting questions', [
    { head: 'Wh- questions', items: ['keep the wh- word', '"Where do you study?"', 'He asked where I studied.'] },
    { head: 'Yes/no questions', items: ['use if or whether', '"Are you online?"', 'She asked if I was online.'] },
  ], { colW: 160 }),
  'en3-computer': drawn('The parts of a desktop computer', 340, 184, ComputerArt, [
    'The monitor is the screen.',
    'The system unit holds the processor and memory.',
    'The keyboard is used to type and the mouse to point and click.',
    'The printer puts work on paper.',
  ], [[110, 62], [212, 82], [110, 145], [291, 104]]),
  'en3-media': columnsSpec('One idea, three word classes', [
    { head: 'Noun', items: ['information', 'reliability', 'credibility'] },
    { head: 'Verb', items: ['inform', 'rely', 'report'] },
    { head: 'Adjective', items: ['informative', 'reliable', 'credible'] },
  ], { colW: 112 }),
  'en3-check-news': flowSpec('Checking a news story', ['Who produced\nit?', 'Is it dated\nand recent?', 'Do reliable\nsources agree?', 'Is there\nevidence?', 'Share only\nif confirmed'], { boxW: 104 }),
  'en3-quantifiers': columnsSpec('Quantifiers', [
    { head: 'Countable', items: ['many', 'a few, few', 'several', 'a number of'] },
    { head: 'Uncountable', items: ['much', 'a little, little', 'a great deal of'] },
    { head: 'Both', items: ['some, any', 'a lot of', 'plenty of', 'enough'] },
  ], { colW: 118 }),
  'en3-lexical-field': treeSpec('Lexical fields', 'Words grouped by subject', [
    { name: 'Health', items: ['doctor', 'ward', 'diagnosis', 'prescription'] },
    { name: 'ICT', items: ['hardware', 'software', 'network', 'password'] },
    { name: 'Engineering', items: ['design', 'bridge', 'circuit', 'machine'] },
  ], { colW: 112 }),
};
