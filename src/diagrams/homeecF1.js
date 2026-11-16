// Home Economics figures for Form 1: resources and branches of the subject,
// careers and small businesses, health and eating habits, the food groups and
// the healthy plate, malnutrition, personal hygiene and tooth decay, puberty,
// household waste and the school, the family, cleaning the house, needs and
// wants, consumer rights, budgeting and saving, sewing tools, stitches, a
// handkerchief and an apron, kitchen layouts, utensils and washing up, kitchen
// safety and first aid, food hygiene, food spoilage and preservation, and the
// revision of the year.
import { Circle, G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';

// The healthy plate: half vegetables and fruit, a quarter staple, a quarter
// body-building food, and water beside it.
function PlateArt() {
  return (
    <G>
      <Circle cx={120} cy={98} r={88} fill="#ffffff" stroke={O} strokeWidth={1.4} />
      <Path d="M120 18 A80 80 0 0 0 120 178 Z" fill="#e3f0da" stroke={O} strokeWidth={1.1} />
      <Path d="M120 98 L120 18 A80 80 0 0 1 200 98 Z" fill="#fbefd0" stroke={O} strokeWidth={1.1} />
      <Path d="M120 98 L200 98 A80 80 0 0 1 120 178 Z" fill="#f8e3df" stroke={O} strokeWidth={1.1} />
      <Txt x={82} y={88} size={10} weight="700">
        Vegetables
      </Txt>
      <Txt x={82} y={101} size={10} weight="700">
        and fruit
      </Txt>
      <Txt x={82} y={116} size={9} italic>
        half
      </Txt>
      <Txt x={156} y={60} size={10} weight="700">
        Staple
      </Txt>
      <Txt x={156} y={73} size={8.5}>
        cassava, rice
      </Txt>
      <Txt x={156} y={85} size={8.5} italic>
        a quarter
      </Txt>
      <Txt x={156} y={120} size={10} weight="700">
        Protein
      </Txt>
      <Txt x={156} y={133} size={8.5}>
        fish, beans
      </Txt>
      <Txt x={156} y={145} size={8.5} italic>
        a quarter
      </Txt>
      <Path d="M232 70 L262 70 L258 140 L236 140 Z" fill="#ffffff" stroke={O} strokeWidth={1.3} />
      <Path d="M234 88 L260 88 L258 140 L236 140 Z" fill="#dbeaf7" />
      <Path d="M232 70 L262 70 L258 140 L236 140 Z" fill="none" stroke={O} strokeWidth={1.3} />
      <Txt x={247} y={158} size={10} weight="700">
        Water
      </Txt>
    </G>
  );
}

// A simple waist apron: the waistband with its ties, the skirt and the pocket.
function ApronArt() {
  return (
    <G>
      <Rect x={20} y={30} width={280} height={12} rx={3} fill="#e6eef8" stroke={O} strokeWidth={1.2} />
      <Rect x={90} y={42} width={140} height={128} fill="#fbefd0" stroke={O} strokeWidth={1.2} />
      {Array.from({ length: 13 }, (_, i) => (
        <Path key={i} d={`M${96 + i * 10} 44 q2.5 5 5 0`} fill="none" stroke={O} strokeWidth={0.8} />
      ))}
      <Line x1={96} y1={54} x2={96} y2={164} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Line x1={224} y1={54} x2={224} y2={164} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Line x1={96} y1={164} x2={224} y2={164} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Rect x={135} y={90} width={50} height={50} fill="#f8e3df" stroke={O} strokeWidth={1.2} />
      <Line x1={135} y1={97} x2={185} y2={97} stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Txt x={160} y={24} size={10} weight="700">
        Waistband
      </Txt>
      <Txt x={48} y={58} size={9}>
        tie
      </Txt>
      <Txt x={272} y={58} size={9}>
        tie
      </Txt>
      <Txt x={160} y={70} size={10} weight="700">
        Skirt (gathered)
      </Txt>
      <Txt x={160} y={122} size={10} weight="700">
        Pocket
      </Txt>
      <Txt x={160} y={158} size={8.5} italic>
        hem
      </Txt>
      <Line x1={90} y1={180} x2={230} y2={180} stroke={O} strokeWidth={0.9} />
      <Line x1={90} y1={176} x2={90} y2={184} stroke={O} strokeWidth={0.9} />
      <Line x1={230} y1={176} x2={230} y2={184} stroke={O} strokeWidth={0.9} />
      <Txt x={160} y={194} size={9}>
        about 60 cm
      </Txt>
      <Line x1={78} y1={42} x2={78} y2={170} stroke={O} strokeWidth={0.9} />
      <Line x1={74} y1={42} x2={82} y2={42} stroke={O} strokeWidth={0.9} />
      <Line x1={74} y1={170} x2={82} y2={170} stroke={O} strokeWidth={0.9} />
      <Txt x={68} y={106} size={9} rotate={-90}>
        about 50 cm
      </Txt>
    </G>
  );
}

// Four kitchen layouts seen from above, with the sink (S), cooker (C) and
// fridge or food store (F) joined by the work triangle.
const PLANS = [
  { name: 'One-wall', counters: [[0, 0, 70, 16]], pts: { S: [12, 8], C: [35, 8], F: [58, 8] } },
  { name: 'Galley', counters: [[0, 0, 70, 16], [0, 54, 70, 16]], pts: { S: [15, 8], F: [55, 8], C: [35, 62] } },
  { name: 'L-shaped', counters: [[0, 0, 70, 16], [0, 0, 16, 70]], pts: { S: [38, 8], F: [60, 8], C: [8, 45] } },
  { name: 'U-shaped', counters: [[0, 0, 70, 16], [0, 0, 16, 70], [54, 0, 16, 70]], pts: { S: [35, 8], C: [8, 45], F: [62, 45] } },
];
function KitchenArt() {
  return (
    <G>
      {PLANS.map((p, i) => {
        const x0 = 8 + i * 84;
        const y0 = 10;
        const at = (k) => [x0 + p.pts[k][0], y0 + p.pts[k][1]];
        const [s, c, f] = [at('S'), at('C'), at('F')];
        return (
          <G key={p.name}>
            <Rect x={x0} y={y0} width={70} height={70} fill="#ffffff" stroke={O} strokeWidth={1.3} />
            {p.counters.map(([x, y, w, h], k) => (
              <Rect key={k} x={x0 + x} y={y0 + y} width={w} height={h} fill="#dfe5ea" stroke={O} strokeWidth={0.8} />
            ))}
            <Path d={`M${s[0]} ${s[1]} L${c[0]} ${c[1]} L${f[0]} ${f[1]} Z`} fill="none" stroke="#c0392b" strokeWidth={1.1} strokeDasharray="3 2" />
            {[['S', s, '#dbeaf7'], ['C', c, '#f8e3df'], ['F', f, '#e3f0da']].map(([k, pt, fill]) => (
              <G key={k}>
                <Circle cx={pt[0]} cy={pt[1]} r={6.5} fill={fill} stroke={O} strokeWidth={1} />
                <Txt x={pt[0]} y={pt[1] + 2.8} size={7.5} weight="700">
                  {k}
                </Txt>
              </G>
            ))}
            <Txt x={x0 + 35} y={y0 + 86} size={9.5} weight="700">
              {p.name}
            </Txt>
          </G>
        );
      })}
      <Txt x={170} y={120} size={8.5}>
        S sink, C cooker, F fridge or food store; dashed line: the work triangle
      </Txt>
    </G>
  );
}

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

export const HOMEEC_F1 = {
  'he1-resources': treeSpec('A family’s resources', 'Resources', [
    { name: 'Human', items: ['time', 'energy', 'skills', 'knowledge'] },
    { name: 'Material', items: ['money', 'food', 'land, water', 'equipment'] },
    { name: 'Community', items: ['markets', 'health centres', 'schools, roads'] },
  ], { colW: 104 }),
  'he1-branches': treeSpec('The branches of Home Economics', 'Home Economics', [
    { name: 'Food and\nnutrition', items: ['nutrients', 'cookery', 'food hygiene'] },
    { name: 'Clothing and\ntextiles', items: ['fabrics', 'sewing', 'care of clothes'] },
    { name: 'Home\nmanagement', items: ['money, time', 'house care', 'buying wisely'] },
    { name: 'Family and\nchildren', items: ['family life', 'child care', 'relationships'] },
  ], { colW: 96 }),
  'he1-careers': columnsSpec('Careers in Home Economics', [
    { head: 'Food', items: ['dietitian', 'chef, caterer', 'baker', 'food technologist'] },
    { head: 'Clothing', items: ['tailor', 'fashion designer', 'textile designer', 'fabric seller'] },
    { head: 'Home', items: ['hotel manager', 'housekeeper', 'decorator', 'event planner'] },
    { head: 'Family', items: ['day-care worker', 'social worker', 'extension worker', 'teacher'] },
  ], { colW: 96 }),
  'he1-enterprise': flowSpec('Starting a small business', ['Find a need', 'Plan: product,\nplace, price', 'Find the\ncapital', 'Start small,\nkeep it clean', 'Keep records,\nreinvest'], { boxW: 108 }),
  'he1-health': treeSpec('Factors that keep us healthy', 'Good health', [
    { name: 'Diet', items: ['balanced meals', 'clean water'] },
    { name: 'Exercise', items: ['60 minutes', 'a day'] },
    { name: 'Rest', items: ['8 to 12 hours', 'of sleep'] },
    { name: 'Hygiene', items: ['clean body', 'clean home'] },
  ], { colW: 92 }),
  'he1-habits': columnsSpec('Eating habits', [
    { head: 'Healthy', items: ['three regular meals', 'breakfast every day', 'fruit and vegetables', 'water to drink', 'little salt and sugar'] },
    { head: 'Unhealthy', items: ['skipping meals', 'many fried snacks', 'soft drinks daily', 'eating late at night', 'overeating'] },
  ], { colW: 150 }),
  'he1-foodgroups': treeSpec('The three food groups', 'Food groups', [
    { name: 'Energy-giving\nstarch, fats', items: ['cassava, yam', 'plantain, rice', 'maize, palm oil'] },
    { name: 'Body-building\nproteins', items: ['beans, egusi', 'fish, eggs', 'meat, crayfish'] },
    { name: 'Protective\nvitamins, minerals', items: ['njama-njama', 'okra, tomatoes', 'pawpaw, oranges'] },
  ], { colW: 116 }),
  'he1-plate': drawn('The healthy plate', 280, 194, PlateArt, [
    'Half the plate: vegetables and fruit.',
    'A quarter: an energy-giving staple such as cassava, rice or plantain.',
    'A quarter: a body-building food such as fish, beans or eggs.',
    'Drink water with the meal.',
  ], [[82, 112], [156, 80], [156, 140], [247, 136]]),
  'he1-malnutrition': treeSpec('Forms of malnutrition', 'Malnutrition', [
    { name: 'Undernutrition', items: ['kwashiorkor', 'marasmus', 'slow growth'] },
    { name: 'Hidden hunger', items: ['anaemia (iron)', 'night blindness', 'goitre (iodine)'] },
    { name: 'Overnutrition', items: ['obesity', 'diabetes', 'heart disease'] },
  ], { colW: 112 }),
  'he1-kwashiorkor': columnsSpec('Kwashiorkor and marasmus', [
    { head: 'Kwashiorkor', items: ['lack of protein', 'age 1 to 4', 'swelling (oedema)', 'reddish thin hair', 'little appetite'] },
    { head: 'Marasmus', items: ['lack of all foods', 'often babies', 'no swelling', 'skin and bones', 'often hungry'] },
  ], { colW: 150 }),
  'he1-hygiene': treeSpec('Personal hygiene', 'Caring for the body', [
    { name: 'Skin', items: ['daily bath', 'own towel', 'clean underwear'] },
    { name: 'Teeth', items: ['brush twice', 'fluoride paste', 'less sugar'] },
    { name: 'Hair', items: ['wash often', 'comb daily', 'no shared combs'] },
    { name: 'Nails', items: ['short, clean', 'cut straight', 'do not bite'] },
  ], { colW: 96 }),
  'he1-tooth-decay': flowSpec('How tooth decay happens', ['Sugar stays\non the teeth', 'Plaque bacteria\nfeed on it', 'Bacteria\nmake acid', 'Acid dissolves\nthe enamel', 'A hole forms:\ntoothache'], { boxW: 112 }),
  'he1-puberty': columnsSpec('Physical changes of puberty', [
    { head: 'Girls', items: ['breasts develop', 'hips widen', 'periods begin'] },
    { head: 'Both', items: ['growth spurt', 'body hair', 'more sweat', 'pimples'] },
    { head: 'Boys', items: ['voice breaks', 'facial hair', 'broad shoulders', 'wet dreams'] },
  ], { colW: 112 }),
  'he1-adolescence': columnsSpec('Feelings, friends and coping', [
    { head: 'Emotional', items: ['mood swings', 'shyness', 'wish for privacy', 'new attractions'] },
    { head: 'Social', items: ['friends matter more', 'wish to belong', 'own opinions', 'peer pressure'] },
    { head: 'Coping', items: ['talk to an adult', 'eat, sleep, exercise', 'say no to harm', 'be patient'] },
  ], { colW: 118 }),
  'he1-waste': treeSpec('Household waste and its disposal', 'Household waste', [
    { name: 'Biodegradable', items: ['peels, leaves', 'leftover food', 'compost it'] },
    { name: 'Non-biodegradable', items: ['plastics, tins', 'glass', 'reuse, recycle'] },
    { name: 'Hazardous', items: ['batteries', 'old medicines', 'keep apart'] },
  ], { colW: 116 }),
  'he1-school-clean': columnsSpec('Keeping the school clean', [
    { head: 'Task', items: ['clear gutters', 'clean toilets', 'cut the grass', 'use the bins'] },
    { head: 'Prevents', items: ['malaria', 'cholera, typhoid', 'snakes, mosquitoes', 'flies and rats'] },
  ], { colW: 150, arrow: true }),
  'he1-family-types': treeSpec('Types of families', 'The family', [
    { name: 'Nuclear', items: ['father, mother', 'and children'] },
    { name: 'Extended', items: ['plus grandparents,', 'uncles, cousins'] },
    { name: 'By marriage', items: ['monogamous', 'polygamous'] },
    { name: 'Other', items: ['single-parent', 'blended', 'foster, adoptive'] },
  ], { colW: 100 }),
  'he1-family-roles': columnsSpec('Roles in the family', [
    { head: 'Parents', items: ['food, shelter', 'education, health', 'love and guidance', 'manage money'] },
    { head: 'Children', items: ['respect, obey', 'study well', 'help with tasks', 'care for property'] },
    { head: 'Relatives', items: ['give advice', 'tell traditions', 'help with children'] },
  ], { colW: 118 }),
  'he1-rooms': columnsSpec('How often to clean', [
    { head: 'Daily', items: ['make beds', 'sweep', 'wash up', 'empty bins', 'clean the toilet'] },
    { head: 'Weekly', items: ['dust furniture', 'mop floors', 'change sheets', 'clean windows'] },
    { head: 'Periodic', items: ['wash curtains', 'remove cobwebs', 'move furniture', 'air mattresses'] },
  ], { colW: 118 }),
  'he1-clean-steps': flowSpec('Cleaning a room', ['Open the\nwindows', 'Tidy up', 'Dust from\nhigh to low', 'Sweep to\nthe door', 'Mop the\nfloor', 'Wash the\ntools'], { boxW: 100 }),
  'he1-needs-wants': columnsSpec('Needs and wants', [
    { head: 'Needs', items: ['food', 'clean water', 'clothing', 'shelter', 'health care, school'] },
    { head: 'Wants', items: ['a new phone', 'fashion shoes', 'sweets, soft drinks', 'video games', 'a bigger TV'] },
  ], { colW: 150 }),
  'he1-consumer-rights': columnsSpec('The consumer', [
    { head: 'Rights', items: ['safety', 'information', 'choice', 'to be heard', 'redress'] },
    { head: 'Responsibilities', items: ['check goods', 'keep the receipt', 'read labels', 'compare prices', 'report cheating'] },
  ], { colW: 150 }),
  'he1-budget-steps': flowSpec('Making a budget', ['Write your\nincome', 'List expenses:\nneeds first', 'Save first', 'Check: not\nover income', 'Record and\nadjust'], { boxW: 110 }),
  'he1-saving': columnsSpec('Saving', [
    { head: 'How to save', items: ['set a goal and date', 'save first', 'wait before buying', 'compare prices'] },
    { head: 'Where to keep it', items: ['savings box', 'school savings club', 'njangi (family)', 'account by a parent'] },
  ], { colW: 150 }),
  'he1-sewtools': treeSpec('Sewing tools by use', 'The sewing box', [
    { name: 'Measuring', items: ['tape measure', 'ruler', 'hem gauge'] },
    { name: 'Cutting', items: ['shears', 'scissors', 'pinking shears', 'unpicker'] },
    { name: 'Marking', items: ['tailor’s chalk', 'tracing wheel', 'pencil'] },
    { name: 'Sewing', items: ['needles, pins', 'thimble', 'thread'] },
  ], { colW: 96 }),
  'he1-sewsafety': columnsSpec('Sewing tools: care and safety', [
    { head: 'Care', items: ['shears for fabric only', 'pins in a cushion', 'oil the scissors', 'clean the machine'] },
    { head: 'Safety', items: ['no pins in the mouth', 'pass scissors closed', 'count needles', 'unplug after use'] },
  ], { colW: 150 }),
  'he1-stitch-kinds': treeSpec('Hand stitches', 'Stitches', [
    { name: 'Temporary', items: ['even tacking', 'uneven tacking', 'diagonal tacking', 'tailor’s tacks'] },
    { name: 'Permanent', items: ['running stitch', 'backstitch', 'hemming', 'overcasting', 'blanket stitch'] },
  ], { colW: 150 }),
  'he1-handkerchief': flowSpec('Making a handkerchief', ['Wash, iron,\ncut a square', 'Turn 0.5 cm,\nthen 0.5 cm', 'Pin and\ntack', 'Sew with\nhemming stitch', 'Remove tacking,\npress'], { boxW: 112 }),
  'he1-apron': drawn('A simple waist apron', 320, 200, ApronArt, [
    'The waistband is a long strip folded in half; its ends are the ties.',
    'The skirt is one rectangle, about 60 cm by 50 cm, gathered at the top.',
    'The pocket is hemmed at the top and sewn on firmly.',
    'The sides and the bottom of the skirt have double-turned hems.',
  ], [[160, 36], [160, 66], [160, 118], [160, 160]]),
  'he1-kitchen-layouts': drawn('Kitchen layouts and the work triangle', 340, 128, KitchenArt, [
    'One-wall: everything along one wall, for small spaces.',
    'Galley: work surfaces along two facing walls.',
    'L-shaped: two walls meeting at a corner.',
    'U-shaped: work surfaces along three walls.',
    'The sink, the cooker and the food store form the work triangle.',
  ], [[43, 92], [127, 92], [211, 92], [295, 92], [170, 116]]),
  'he1-kitchen-care': columnsSpec('Caring for the kitchen', [
    { head: 'Daily', items: ['wash up', 'wipe surfaces', 'sweep and mop', 'empty the bin', 'cover food'] },
    { head: 'Weekly', items: ['clean the fridge', 'wash cupboards', 'scrub the sink', 'wash the walls'] },
    { head: 'Periodic', items: ['defrost the fridge', 'remove soot', 'check gas pipes', 'fill cracks'] },
  ], { colW: 116 }),
  'he1-utensils': treeSpec('Kitchen tools by use', 'Kitchen utensils', [
    { name: 'Preparing', items: ['knife, board', 'grater, sieve', 'mortar, pestle', 'measuring cups'] },
    { name: 'Cooking', items: ['pots, pans', 'frying spoon', 'turning stick'] },
    { name: 'Serving', items: ['ladle', 'dishes', 'cutlery'] },
    { name: 'Storing', items: ['jars', 'containers', 'baskets'] },
  ], { colW: 96 }),
  'he1-washing-up': flowSpec('The order of washing up', ['Glasses\nand cups', 'Cutlery', 'Plates and\ndishes', 'Pots and\npans'], { boxW: 120, perRow: 2, note: 'From the cleanest to the greasiest' }),
  'he1-accidents': columnsSpec('Preventing kitchen accidents', [
    { head: 'Burns, scalds', items: ['handles turned in', 'oven gloves', 'children away'] },
    { head: 'Cuts', items: ['sharp knives', 'use a board', 'cut away from you'] },
    { head: 'Falls', items: ['wipe spills', 'clear the floor', 'stable stool'] },
    { head: 'Fire, gas', items: ['watch the pot', 'no water on oil', 'close the gas'] },
  ], { colW: 96 }),
  'he1-burn-aid': flowSpec('First aid for a burn or scald', ['Stop the\nburning', 'Cool under\nrunning water\n20 minutes', 'Remove rings\nand watches', 'Cover with\ncling film', 'Get help if\nit is serious'], { boxW: 112 }),
  'he1-handwash': flowSpec('Washing hands', ['Wet with\nclean water', 'Apply soap', 'Rub palms,\nbacks, fingers', 'Thumbs, tips,\nnails: 20 s', 'Rinse', 'Dry with a\nclean towel'], { boxW: 104 }),
  'he1-cross': columnsSpec('Cross-contamination', [
    { head: 'Germs travel on', items: ['hands', 'knives and boards', 'cloths', 'dripping juices'] },
    { head: 'Stop them by', items: ['washing hands', 'separate boards', 'clean cloths', 'raw food at the bottom'] },
  ], { colW: 150, arrow: true }),
  'he1-spoilage': treeSpec('Why food spoils', 'Food spoilage', [
    { name: 'Microorganisms', items: ['bacteria', 'moulds', 'yeasts'] },
    { name: 'Enzymes', items: ['over-ripening', 'softening'] },
    { name: 'Pests', items: ['weevils', 'rats, flies'] },
    { name: 'Conditions', items: ['moisture', 'air, heat', 'bruising'] },
  ], { colW: 100 }),
  'he1-preservation': columnsSpec('Home preservation methods', [
    { head: 'Method', items: ['drying', 'smoking', 'salting', 'sugaring', 'cooling, freezing', 'fermenting'] },
    { head: 'Example', items: ['garri, maize, pepper', 'fish, meat', 'fish', 'pawpaw jam', 'soups, meat', 'water fufu, bobolo'] },
    { head: 'How it works', items: ['no water', 'dries, protects', 'draws out water', 'draws out water', 'slows germs', 'useful microbes'] },
  ], { colW: 116 }),
  'he1-review': columnsSpec('Form 1 Home Economics: the year', [
    { head: 'Term 1', items: ['Home Economics', 'careers', 'health, food groups', 'malnutrition', 'hygiene, puberty', 'waste'] },
    { head: 'Term 2', items: ['the family', 'home care', 'needs, wants, rights', 'budget, saving', 'sewing tools', 'stitches, project'] },
    { head: 'Term 3', items: ['the kitchen', 'utensils', 'safety, first aid', 'food hygiene', 'preservation', 'revision'] },
  ], { colW: 118 }),
};
