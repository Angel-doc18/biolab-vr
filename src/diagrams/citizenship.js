// Citizenship Education figures for Forms 4 and 5: human rights, the family
// and children, vulnerable groups, local governance, chiefdoms, social vices,
// road signs (drawn shapes), digital citizenship, the State and the three
// arms of government, Parliament, the courts, elections, parties, integrity,
// international cooperation and the GCE year.
import { Circle, G, Path, Polygon, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, flowSpec, treeSpec } from './charts';

const O = '#33414d';
const RED = '#c8463d';
const BLUE = '#1f6fb2';

// ---------- road sign shapes ----------
function RoadSignsArt() {
  const cy = 58;
  const items = [
    { x: 40, label: ['Warning', 'danger ahead'] },
    { x: 108, label: ['Prohibition', 'forbidden'] },
    { x: 176, label: ['Obligation', 'you must'] },
    { x: 244, label: ['Stop', ''] },
    { x: 302, label: ['Give way', ''] },
  ];
  const oct = (x, y, r) => {
    const pts = Array.from({ length: 8 }, (_, i) => {
      const a = (Math.PI / 8) + (i * Math.PI) / 4;
      return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`;
    });
    return pts.join(' ');
  };
  return (
    <G>
      <Polygon points={`40,${cy - 26} 66,${cy + 20} 14,${cy + 20}`} fill="#ffffff" stroke={RED} strokeWidth={5} strokeLinejoin="round" />
      <Txt x={40} y={cy + 13} size={18} weight="700" fill={O}>
        !
      </Txt>
      <Circle cx={108} cy={cy} r={24} fill="#ffffff" stroke={RED} strokeWidth={5} />
      <Txt x={108} y={cy + 6} size={15} weight="700" fill={O}>
        50
      </Txt>
      <Circle cx={176} cy={cy} r={24} fill={BLUE} />
      <Path d={`M162 ${cy} L184 ${cy} M178 ${cy - 7} L186 ${cy} L178 ${cy + 7}`} stroke="#ffffff" strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Polygon points={oct(244, cy, 25)} fill={RED} />
      <Txt x={244} y={cy + 4} size={9.5} weight="700" fill="#ffffff">
        STOP
      </Txt>
      <Polygon points={`282,${cy - 20} 322,${cy - 20} 302,${cy + 22}`} fill="#ffffff" stroke={RED} strokeWidth={5} strokeLinejoin="round" />
      {items.map((it) => (
        <G key={it.label[0]}>
          <Txt x={it.x} y={cy + 44} size={9} weight="700" fill={O}>
            {it.label[0]}
          </Txt>
          {it.label[1] ? (
            <Txt x={it.x} y={cy + 56} size={8} fill="#6b7a88">
              {it.label[1]}
            </Txt>
          ) : null}
        </G>
      ))}
      <Rect x={96} y={136} width={148} height={30} rx={4} fill={BLUE} />
      <Txt x={170} y={155} size={10} weight="700" fill="#ffffff">
        Hospital  2 km
      </Txt>
      <Txt x={170} y={182} size={9} fill={O}>
        Rectangles give information
      </Txt>
    </G>
  );
}

export const CITIZENSHIP = {
  // ---------- Form 4 ----------
  'civ-rights-generations': columnsSpec('Categories of human rights', [
    { head: 'Civil and political', items: ['life, liberty', 'fair trial', 'expression, religion', 'vote, stand'] },
    { head: 'Economic, social, cultural', items: ['work, fair wages', 'education', 'health, housing', 'culture'] },
    { head: 'Collective', items: ['development', 'peace', 'healthy environment', 'self-determination'] },
  ], { colW: 118 }),
  'civ-redress': treeSpec('Where to seek redress', 'A right is violated', [
    { name: 'National', items: ['police, courts', 'Human Rights', 'Commission (2019)', 'lawyers'] },
    { name: 'Civil society', items: ['NGOs, legal aid', 'churches', 'media'] },
    { name: 'African and UN', items: ['African Commission', 'and Court', 'UN bodies'] },
  ], { colW: 118 }),
  'civ-family': columnsSpec('The family', [
    { head: 'Types', items: ['nuclear', 'extended', 'single-parent', 'polygamous', 'adoptive'] },
    { head: 'Functions', items: ['biological', 'economic', 'educational', 'emotional', 'cultural'] },
  ], { colW: 156 }),
  'civ-child-rights': columnsSpec('The child: rights and duties', [
    { head: 'Texts', items: ['UNCRC (1989)', 'ACRWC (1990)', 'child = under 18'] },
    { head: 'Rights', items: ['name, nationality', 'education, health', 'protection'] },
    { head: 'Duties', items: ['respect parents', 'serve community', 'keep good values'] },
  ], { colW: 116 }),
  'civ-child-abuse': columnsSpec('Child abuse', [
    { head: 'Forms', items: ['physical, sexual', 'emotional, neglect', 'child labour', 'trafficking', 'early marriage, FGM'] },
    { head: 'Response', items: ['listen to the child', 'tell a trusted adult', 'social services', 'police, MINAS', 'MINPROFF, courts'] },
  ], { colW: 156 }),
  'civ-vulnerable': columnsSpec('Vulnerable groups and inclusion', [
    { head: 'Who', items: ['orphans', 'street children', 'persons with', 'disabilities', 'IDPs, refugees', 'the elderly'] },
    { head: 'Inclusion', items: ['social assistance', 'inclusive schools', 'training, credit', 'accessible buildings', 'fight stigma'] },
  ], { colW: 156 }),
  'civ-campaign': flowSpec('Planning a sensitisation campaign', ['Identify the\nproblem', 'Target\naudience, aims', 'Messages and\nmethods', 'Partners and\nplan', 'Carry it out', 'Evaluate'], { perRow: 3, boxW: 108 }),
  'civ-decentralisation': treeSpec('Regional and local authorities', 'Decentralised unitary State', [
    { name: 'Regions', items: ['regional council', 'regional president', 'special status:', 'North-West, South-West'] },
    { name: 'Councils', items: ['municipal council', 'mayor', 'city councils', 'city mayor'] },
    { name: 'State control', items: ['governors', 'prefects', 'sub-prefects', '(deconcentration)'] },
  ], { colW: 118 }),
  'civ-participation': columnsSpec('Taking part in the council', [
    { head: 'Contribute', items: ['human investment', 'pay council fees', 'protect public', 'property'] },
    { head: 'Take part', items: ['vote at 20', 'attend sessions', 'public consultations', 'hold leaders to account'] },
  ], { colW: 156 }),
  'civ-chiefdoms': flowSpec('Traditional chiefdoms (decree of 1977)', ['First class\n(recognised by\nthe Prime Minister)', 'Second class\n(recognised by\nthe minister)', 'Third class:\nvillage or quarter\n(the prefect)'], { boxW: 116, boxH: 62, note: 'Each class covers at least two chiefdoms of the class below.' }),
  'civ-delinquency': columnsSpec('Juvenile delinquency', [
    { head: 'Causes', items: ['peer pressure', 'poverty', 'family breakdown', 'media, drugs'] },
    { head: 'Consequences', items: ['school failure', 'criminal record', 'insecurity', 'lost potential'] },
    { head: 'Prevention', items: ['family guidance', 'clubs, sport', 'training, jobs', 'rehabilitation'] },
  ], { colW: 116 }),
  'civ-drugs': columnsSpec('Substance abuse', [
    { head: 'Substances', items: ['tramadol', 'cannabis', 'illicit alcohol', 'tobacco, shisha'] },
    { head: 'Effects', items: ['addiction', 'mental illness', 'school failure', 'accidents, crime'] },
    { head: 'Responses', items: ['laws, seizures', 'drug control', 'committee', 'counselling, care'] },
  ], { colW: 116 }),
  'civ-cybercrime': columnsSpec('Cybercrime and safe ICT use', [
    { head: 'Cybercrime', items: ['identity theft', 'online scams', 'phishing, hacking', 'cyberbullying', 'fake news'] },
    { head: 'Stay safe', items: ['secret PIN, strong', 'passwords', 'check before sharing', 'privacy settings', 'report: law of 2010'] },
  ], { colW: 156 }),
  'civ-gbv': columnsSpec('Gender-based violence', [
    { head: 'Types', items: ['physical', 'sexual', 'emotional', 'economic'] },
    { head: 'Causes', items: ['inequality', 'harmful norms', 'alcohol, poverty', 'impunity'] },
    { head: 'Help', items: ['police', 'health centre', 'MINPROFF', 'NGOs'] },
  ], { colW: 116 }),
  'civ-road-signs': {
    title: 'Road signs by shape and colour',
    w: 340,
    h: 192,
    art: RoadSignsArt,
    labels: [],
    facts: ['A triangle with a red border warns of danger ahead.', 'A circle with a red border forbids something, such as exceeding 50 km/h.', 'A blue circle gives an order, such as turn right; the red octagon means stop; the inverted triangle means give way; rectangles give information.'],
  },
  'civ-digital': columnsSpec('Digital citizenship', [
    { head: 'Footprint', items: ['what you post', 'can last for ever', 'think before posting'] },
    { head: 'Etiquette', items: ['be polite', 'respect privacy', 'respect copyright'] },
    { head: 'Dangers', items: ['grooming', 'phishing', 'fake news'] },
  ], { colW: 116 }),

  // ---------- Form 5 ----------
  'civ-gce-0562': columnsSpec('GCE Citizenship Education (0562)', [
    { head: 'Paper 1 (1½ h)', items: ['multiple choice', 'institutions', 'dates, acronyms', 'courts'] },
    { head: 'Paper 2 (2½ h)', items: ['A: structured questions', 'and case studies', '(compulsory)', 'B: essays'] },
  ], { colW: 156 }),
  'civ-state': flowSpec('The Cameroonian State since 1960', ['1960\nRepublic of\nCameroon', '1961\nFederal\nRepublic', '1972\nUnited\nRepublic', '1984\nRepublic of\nCameroon', '1996\ndecentralised\nunitary State'], { perRow: 3, boxW: 108, boxH: 60 }),
  'civ-arms': treeSpec('The three arms of government', 'The State', [
    { name: 'Executive', items: ['President (Head', 'of State), PM', '(Head of Government)'] },
    { name: 'Legislature', items: ['National Assembly', '(180)', 'Senate (100)'] },
    { name: 'Judiciary', items: ['courts', 'Supreme Court', 'Constitutional Council'] },
  ], { colW: 118 }),
  'civ-parliament': columnsSpec('Cameroon’s Parliament', [
    { head: 'National Assembly', items: ['180 deputies', 'elected directly', 'five-year term', 'can censure the Government'] },
    { head: 'Senate', items: ['100 senators, 10 per region', '7 elected, 3 appointed', 'five-year term', 'represents the regions'] },
  ], { colW: 156 }),
  'civ-courts': flowSpec('The courts, from highest to lowest', ['Supreme Court\n(judicial, administrative,\naudit benches)', 'Courts of Appeal\n(one per region)', 'High Courts\n(divisions)', 'Courts of\nFirst Instance', 'Customary\ncourts'], { perRow: 3, boxW: 112, boxH: 60, note: 'The Constitutional Council rules on the Constitution and national election disputes.' }),
  'civ-elections': columnsSpec('Elections in Cameroon', [
    { head: 'Principles', items: ['universal suffrage', 'one person, one vote', 'secret ballot', 'transparency'] },
    { head: 'ELECAM (2006)', items: ['Electoral Board', 'Directorate General', 'voter lists, polls', 'provisional results'] },
  ], { colW: 156 }),
  'civ-parties': flowSpec('From single party to pluralism', ['1966\nCNU single\nparty', '1985\nCPDM', 'Dec 1990\nliberty laws', '1992\nfirst multi-party\nelections'], { boxW: 104, boxH: 60 }),
  'civ-integrity': columnsSpec('Integrity in public service', [
    { head: 'Principles', items: ['neutrality', 'continuity', 'transparency', 'accountability'] },
    { head: 'Bodies', items: ['CONAC (2006)', 'ANIF', 'CONSUPE', 'Special Criminal Court'] },
  ], { colW: 156 }),
  'civ-cooperation': columnsSpec('International cooperation', [
    { head: 'Bilateral', items: ['two countries', 'e.g. Cameroon', 'and China'] },
    { head: 'Multilateral', items: ['many countries', 'UN, AU,', 'World Bank'] },
    { head: 'Diplomacy', items: ['embassy', 'high commission', 'consulate'] },
  ], { colW: 116 }),
  'civ-un': columnsSpec('Cameroon in world organisations', [
    { head: 'United Nations', items: ['member since 1960', 'UNICEF, WHO', 'UNHCR, UNESCO', 'peacekeeping'] },
    { head: 'Commonwealth', items: ['member since 1995', 'democracy, rights', 'scholarships', 'Commonwealth Games'] },
  ], { colW: 156 }),
  'civ-alliances': columnsSpec('La Francophonie and African alliances', [
    { head: 'OIF', items: ['French language', 'diversity', 'democracy'] },
    { head: 'African Union', items: ['2002', 'Addis Ababa', 'peace, unity'] },
    { head: 'CEMAC, ECCAS', items: ['Central Africa', 'franc CFA', 'common market'] },
  ], { colW: 116 }),
  'civ-acronyms': columnsSpec('Key acronyms', [
    { head: 'Acronym', items: ['UDHR', 'UNCRC', 'ELECAM', 'CONAC', 'ANIF', 'MINPROFF'] },
    { head: 'Meaning', items: ['Universal Declaration (1948)', 'Rights of the Child (1989)', 'Elections Cameroon', 'Anti-Corruption Commission', 'Financial Investigation Agency', 'Women and the Family'] },
  ], { colW: 156 }),
  'civ-case-steps': flowSpec('Answering a case study', ['Read twice,\nunderline facts', 'Identify the\ncivic issue', 'Use facts from\nthe case', 'Link to laws\nand institutions', 'Suggest measures\nand who acts'], { perRow: 3, boxW: 108, boxH: 54 }),
  'civ-final-term': flowSpec('The final term before the GCE', ['Paper 1\ndrills', 'Paper 2 case\nstudies and essays', 'Mock\nexamination', 'Correction and\nremediation', 'The GCE\n(0562)'], { perRow: 3, boxW: 108 }),
};
