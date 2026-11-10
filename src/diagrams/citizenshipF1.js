// Citizenship Education figures for Form 1: the citizen, the family (types,
// rights and duties, protection), marriage, civil status, the school
// community, school hazards, the road (a drawn crossing) and road accidents,
// human rights and their instruments, the rights and duties of the child,
// child abuse, juvenile delinquency, conflicts, divorce, peaceful resolution,
// the State, the duties of citizens, taxes, national integration and the
// year at a glance.
import { Circle, G, Line, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const MUTED = '#6b7a88';
const ROAD = '#5d6670';
const PAVE = '#d9dde2';

const drawn = (title, w, h, art, facts, points) => ({ title, w, h, art, labels: [], facts, ...(points ? { points } : {}) });

// ---------- crossing the road (vehicles keep to the right) ----------
function Car({ x, y, fill }) {
  return (
    <G>
      <Rect x={x} y={y} width={46} height={24} rx={6} fill={fill} stroke={O} strokeWidth={1} />
      <Rect x={x + 12} y={y + 4} width={20} height={16} rx={3} fill="#dfe9f3" />
    </G>
  );
}

function RoadArt() {
  const stripes = [54, 68, 82, 96, 110, 124, 138];
  return (
    <G>
      <Rect x={0} y={20} width={340} height={30} fill={PAVE} />
      <Rect x={0} y={50} width={340} height={100} fill={ROAD} />
      <Rect x={0} y={150} width={340} height={30} fill={PAVE} />
      {Array.from({ length: 11 }, (_, i) => (
        <Rect key={i} x={6 + i * 32} y={99} width={18} height={2.5} fill="#ffffff" />
      ))}
      {stripes.map((y) => (
        <Rect key={y} x={200} y={y} width={40} height={8} fill="#ffffff" />
      ))}
      <Txt x={8} y={39} size={9} weight="700" anchor="start">
        Pavement
      </Txt>
      <Txt x={8} y={169} size={9} weight="700" anchor="start">
        Pavement
      </Txt>
      <Txt x={220} y={39} size={9} weight="700">
        Zebra crossing
      </Txt>
      <Txt x={300} y={96} size={8} fill="#ffffff">
        centre line
      </Txt>

      <Car x={120} y={62} fill="#e8b04b" />
      <Line x1={112} y1={74} x2={74} y2={74} stroke="#ffffff" strokeWidth={2} />
      <Head x={70} y={74} dx={-1} dy={0} size={7} fill="#ffffff" />
      <Car x={30} y={113} fill="#7fb3d5" />
      <Line x1={84} y1={125} x2={128} y2={125} stroke="#ffffff" strokeWidth={2} />
      <Head x={132} y={125} dx={1} dy={0} size={7} fill="#ffffff" />
      <Txt x={300} y={128} size={8} fill="#ffffff">
        keep right
      </Txt>

      <Circle cx={220} cy={157} r={4} fill={O} />
      <Line x1={220} y1={161} x2={220} y2={171} stroke={O} strokeWidth={2} />
      <Line x1={220} y1={171} x2={216} y2={178} stroke={O} strokeWidth={1.6} />
      <Line x1={220} y1={171} x2={224} y2={178} stroke={O} strokeWidth={1.6} />
      <Line x1={208} y1={165} x2={190} y2={165} stroke={O} strokeWidth={1.4} />
      <Head x={186} y={165} dx={-1} dy={0} size={5} fill={O} />
      <Txt x={182} y={168} size={8.5} anchor="end">
        1. left
      </Txt>
      <Line x1={232} y1={165} x2={250} y2={165} stroke={O} strokeWidth={1.4} />
      <Head x={254} y={165} dx={1} dy={0} size={5} fill={O} />
      <Txt x={258} y={168} size={8.5} anchor="start">
        2. right, 3. left again
      </Txt>

      <Txt x={170} y={198} size={9} fill={MUTED}>
        From this pavement the nearer traffic comes from your left.
      </Txt>
      <Txt x={170} y={214} size={9.5} weight="700">
        Look left, right, then left again; cross when it is clear.
      </Txt>
    </G>
  );
}

export const CITIZENSHIP_F1 = {
  'civ1-citizen': columnsSpec('A good citizen', [
    { head: 'Rights', items: ['to education', 'to health', 'to be respected', 'to be heard'] },
    { head: 'Duties', items: ['obey the laws', 'respect others', 'protect public property', 'work hard'] },
    { head: 'Values', items: ['patriotism', 'tolerance', 'integrity', 'solidarity'] },
  ], { colW: 118 }),
  'civ1-family-types': treeSpec('Types of family', 'The family', [
    { name: 'Nuclear', items: ['father', 'mother', 'children'] },
    { name: 'Extended', items: ['the nuclear', 'family plus', 'grandparents', 'uncles, aunts', 'cousins'] },
    { name: 'Single-\nparent', items: ['one parent', 'children'] },
    { name: 'Polygamous', items: ['a husband', 'his wives', 'their children'] },
    { name: 'Adoptive', items: ['adopted or', 'foster', 'children'] },
  ], { colW: 74, gap: 6 }),
  'civ1-family-duties': columnsSpec('Rights and duties in the family', [
    { head: 'Parents’ duties', items: ['feed, clothe, house', 'send to school', 'care for health', 'register the birth', 'guide with love'] },
    { head: 'Children’s rights', items: ['love and care', 'a name', 'education, health', 'protection', 'to be heard'] },
    { head: 'Children’s duties', items: ['respect parents', 'help with chores', 'work hard at school', 'care for parents', 'in old age'] },
  ], { colW: 120 }),
  'civ1-family-protection': treeSpec('Protecting the family', 'Family protection', [
    { name: 'Family\nmeeting', items: ['elders discuss', 'decide together'] },
    { name: 'A will', items: ['says who gets', 'what', 'avoids quarrels'] },
    { name: 'Inheritance', items: ['to the heirs:', 'children, spouse', 'by law, custom'] },
    { name: 'Widows,\norphans', items: ['keep the home', 'share of', 'the property'] },
  ], { colW: 96 }),
  'civ1-marriage': treeSpec('Marriage in Cameroon', 'Types of marriage', [
    { name: 'Civil', items: ['before the', 'registrar', 'State recognises'] },
    { name: 'Traditional', items: ['by custom', 'bride price'] },
    { name: 'Religious', items: ['in a church', 'or a mosque'] },
    { name: 'Civil options', items: ['monogamous', 'polygamous'] },
  ], { colW: 96 }),
  'civ1-valid-marriage': columnsSpec('A valid civil marriage', [
    { head: 'Conditions', items: ['free consent of both', 'legal minimum age', 'not already married', '(monogamous option)', 'not close relatives', 'before the registrar'] },
    { head: 'Duties of spouses', items: ['faithfulness', 'mutual help, respect', 'living together', 'raising the children', 'settling disputes', 'by dialogue'] },
  ], { colW: 150 }),
  'civ1-civil-status': flowSpec('Registering a birth', ['Baby\nis born', 'Parents get the\nbirth notice', 'Declare it at the\ncivil status centre', 'The registrar\nrecords it', 'Birth certificate\nissued'], { boxW: 112 }),
  'civ1-documents': columnsSpec('Civil status documents', [
    { head: 'Birth', items: ['name, date', 'and place', 'parents', 'for school,', 'exams, ID card'] },
    { head: 'Marriage', items: ['proves a', 'civil marriage', 'option chosen'] },
    { head: 'Death', items: ['records', 'a death', 'burial,', 'inheritance,', 'pensions'] },
    { head: 'Late birth', items: ['go to court', 'supplementary', 'judgment', 'then the', 'certificate'] },
  ], { colW: 92, gap: 8 }),
  'civ1-school': treeSpec('The school community', 'The school', [
    { name: 'Adminis-\ntration', items: ['principal', 'deputies', 'bursar', 'counsellor'] },
    { name: 'Teachers', items: ['subject', 'teachers', 'heads of', 'departments'] },
    { name: 'Support\nstaff', items: ['secretaries', 'librarians', 'cleaners', 'watchmen'] },
    { name: 'Students', items: ['prefects', 'student', 'government'] },
    { name: 'Parents', items: ['the PTA', 'school', 'council'] },
  ], { colW: 74, gap: 6 }),
  'civ1-student-rights': columnsSpec('A student’s rights and duties', [
    { head: 'Rights', items: ['to be taught', 'fair marks', 'respect, safety', 'use the library', 'join clubs', 'to be heard'] },
    { head: 'Duties', items: ['attend, be punctual', 'correct uniform', 'work hard', 'respect everyone', 'protect property', 'obey the rules'] },
    { head: 'Sanctions', items: ['warning', 'detention', 'suspension', 'exclusion'] },
  ], { colW: 118 }),
  'civ1-hazards': treeSpec('Hazards in school', 'School hazards', [
    { name: 'Drug abuse', items: ['cannabis', 'tramadol', 'alcohol'] },
    { name: 'Bullying', items: ['insults', 'threats', 'cyberbullying'] },
    { name: 'Malpractice', items: ['copying', 'leaked papers', 'impersonation'] },
    { name: 'Vandalism', items: ['broken benches', 'writing on walls', 'torn books'] },
  ], { colW: 96 }),
  'civ1-malpractice': columnsSpec('Malpractice and vandalism', [
    { head: 'Cheating', items: ['copying', 'notes, phones', 'leaked papers', 'impersonation', 'bribery'] },
    { head: 'Results', items: ['marks annulled', 'exclusion', 'no real skills', 'poor workers'] },
    { head: 'Vandalism', items: ['broken taps', 'broken windows', 'torn books', 'public money', 'wasted'] },
    { head: 'Prevention', items: ['regular study', 'invigilation', 'honesty', 'care for', 'property'] },
  ], { colW: 92, gap: 8 }),
  'civ1-road': drawn('Crossing the road safely', 340, 226, RoadArt, [
    'Pedestrians use the pavement; vehicles use the carriageway.',
    'In Cameroon vehicles keep to the right, so from the near pavement the nearer lane comes from your left.',
    'Cross at the zebra crossing.',
    'Look left, right, then left again, and cross only when the road is clear.',
  ], [[40, 165], [110, 125], [220, 100], [170, 212]]),
  'civ1-accidents': columnsSpec('Road accidents', [
    { head: 'Causes', items: ['speeding', 'drink-driving', 'overloading', 'bad brakes, tyres', 'phone at the wheel', 'tiredness'] },
    { head: 'Prevention', items: ['speed limits', 'no alcohol', 'maintenance', 'seat belts, helmets', 'rest on long trips', 'road education'] },
    { head: 'At an accident', items: ['stay safe', 'call for help', 'do not move the', 'badly injured', 'first aid if trained', 'tell the police'] },
  ], { colW: 120 }),
  'civ1-rights': treeSpec('Human rights', 'Human rights are', [
    { name: 'Universal', items: ['for everyone', 'everywhere'] },
    { name: 'Inalienable', items: ['cannot be', 'taken away'] },
    { name: 'Indivisible', items: ['all equally', 'important'] },
    { name: 'With duties', items: ['respect the', 'rights of others'] },
  ], { colW: 96 }),
  'civ1-instruments': columnsSpec('Human rights instruments', [
    { head: 'Year', items: ['1948', '1981', '1989', '1990', '2019'] },
    { head: 'Instrument or body', items: ['Universal Declaration', 'African Charter (ACHPR)', 'UN Child Rights Convention', 'African Children’s Charter', 'Human Rights Commission'] },
  ], { colW: 160, arrow: true }),
  'civ1-child-rights': treeSpec('The rights of the child', 'Rights of the child', [
    { name: 'Survival', items: ['life, food', 'health care', 'clean water'] },
    { name: 'Development', items: ['education', 'play, rest', 'culture'] },
    { name: 'Protection', items: ['from violence', 'child labour', 'trafficking'] },
    { name: 'Participation', items: ['give views', 'be heard'] },
  ], { colW: 96 }),
  'civ1-child-duties': columnsSpec('The child: rights and duties', [
    { head: 'Rights', items: ['education', 'health', 'protection', 'play and rest', 'being heard'] },
    { head: 'Duties', items: ['respect elders', 'family cohesion', 'serve the nation', 'solidarity', 'African values'] },
  ], { colW: 150 }),
  'civ1-abuse': treeSpec('Forms of child abuse', 'Child abuse', [
    { name: 'Physical', items: ['beating', 'burning', 'wounding'] },
    { name: 'Emotional', items: ['insults', 'threats', 'humiliation'] },
    { name: 'Neglect', items: ['no food', 'no care', 'no school'] },
    { name: 'Sexual', items: ['any sexual', 'act with', 'a child'] },
    { name: 'Exploitation', items: ['child labour', 'trafficking', 'forced', 'marriage'] },
  ], { colW: 74, gap: 6 }),
  'civ1-delinquency': columnsSpec('Juvenile delinquency', [
    { head: 'Causes', items: ['no parental care', 'poverty', 'bad company', 'drugs', 'school failure'] },
    { head: 'Consequences', items: ['arrest', 'criminal record', 'dropping out', 'danger to society'] },
    { head: 'Solutions', items: ['family dialogue', 'counselling', 'sports, clubs', 'job training', 'rehabilitation'] },
  ], { colW: 120 }),
  'civ1-conflict': treeSpec('Causes of conflicts', 'Conflicts', [
    { name: 'Misunder-\nstanding', items: ['poor', 'communication', 'rumours'] },
    { name: 'Discrimination', items: ['tribe', 'religion', 'sex'] },
    { name: 'Selfishness', items: ['jealousy', 'greed'] },
    { name: 'Property', items: ['land', 'boundaries', 'inheritance'] },
  ], { colW: 96 }),
  'civ1-divorce': flowSpec('The divorce procedure', ['Request filed\nat the court', 'The judge tries\nto reconcile', 'The court\nexamines the case', 'Divorce\npronounced', 'Custody, visits,\nmaintenance set'], { boxW: 112 }),
  'civ1-peace': columnsSpec('Peaceful ways to resolve conflicts', [
    { head: 'Dialogue', items: ['the two sides', 'talk calmly', 'and listen'] },
    { head: 'Negotiation', items: ['each side', 'gives a little', 'compromise'] },
    { head: 'Mediation', items: ['a neutral', 'helper; the', 'sides decide'] },
    { head: 'Arbitration', items: ['an arbiter', 'hears both', 'and decides'] },
  ], { colW: 92, gap: 8 }),
  'civ1-peace-steps': flowSpec('Resolving a conflict step by step', ['Calm\ndown', 'Identify the\nproblem', 'Listen to\neach side', 'Look for\nsolutions', 'Choose a fair\nsolution', 'Apply it and\nfollow up'], { boxW: 104 }),
  'civ1-state': treeSpec('The four elements of a state', 'A state', [
    { name: 'Territory', items: ['land with', 'borders', 'about 475 000 km²'] },
    { name: 'Population', items: ['the people', 'many peoples'] },
    { name: 'Government', items: ['President', 'Parliament', 'courts'] },
    { name: 'Sovereignty', items: ['independent', 'since 1960', 'and 1961'] },
  ], { colW: 96 }),
  'civ1-duties': treeSpec('Duties of a citizen', 'A citizen’s duties', [
    { name: 'Obey', items: ['the', 'Constitution', 'and laws'] },
    { name: 'Pay taxes', items: ['to the State', 'and councils'] },
    { name: 'Defend', items: ['the', 'fatherland'] },
    { name: 'Vote', items: ['from 20', 'when', 'registered'] },
    { name: 'Protect', items: ['public', 'property', 'environment'] },
  ], { colW: 74, gap: 6 }),
  'civ1-taxes': flowSpec('From taxes to public services', ['Citizens and\nbusinesses pay', 'Money goes to\nState or council', 'Parliament votes\nthe budget', 'Schools, roads,\nhospitals built', 'Services for\neveryone'], { boxW: 112 }),
  'civ1-integration': treeSpec('One nation, many peoples', 'National integration', [
    { name: 'Bilingualism', items: ['English and', 'French', 'equal status'] },
    { name: 'Multi-\nculturalism', items: ['over 250', 'languages', 'many cultures'] },
    { name: 'Living\ntogether', items: ['respect', 'sharing', 'national days'] },
    { name: 'Enemies', items: ['tribalism', 'hate speech', 'intolerance'] },
  ], { colW: 96 }),
  'civ1-living-together': columnsSpec('Living together', [
    { head: 'Threats to unity', items: ['tribalism', 'regionalism', 'hate speech', 'religious intolerance'] },
    { head: 'What I can do', items: ['friends from all regions', 'learn other cultures', 'speak both languages', 'report hate speech'] },
  ], { colW: 160 }),
  'civ1-integration-steps': flowSpec('Solving an integration situation', ['Read and find\nthe problem', 'Find the rights,\nduties, values', 'Propose\nactions', 'Justify the\nactions', 'Say the\nexpected result'], { boxW: 108 }),
  'civ1-review': columnsSpec('Form 1 Citizenship at a glance', [
    { head: 'Term 1', items: ['family, marriage', 'civil status', 'school community', 'school hazards', 'road safety'] },
    { head: 'Term 2', items: ['human rights', 'rights of the child', 'abuse, delinquency', 'conflicts, divorce', 'peaceful resolution'] },
    { head: 'Term 3', items: ['State and nation', 'state symbols', 'duties of citizens', 'taxes', 'national integration'] },
  ], { colW: 120 }),
};
