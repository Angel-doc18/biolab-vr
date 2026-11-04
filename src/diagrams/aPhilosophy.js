// A Level Philosophy figures (0790): the papers (to scale), timelines of
// authors and works (to scale), Freud’s model of the mind, the African
// philosophy debate on a dated line, and charts for the essay and commentary
// methods, anthropology, epistemology, metaphysics, politics, ethics and
// African philosophy.
import { G, Line, Path, Rect } from 'react-native-svg';
import { Txt } from './Diagram';
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';
import { O, MUTED, BLUE, GREEN, RED, GOLD, PURPLE } from './aEconomics';

function Plain({ x, y, t, size = 8, anchor = 'middle', fill = O, weight = '500' }) {
  return (
    <Txt x={x} y={y} size={size} anchor={anchor} fill={fill} weight={weight}>
      {t}
    </Txt>
  );
}

// ---------- the 0790 papers ----------
function PapersArt() {
  const x0 = 110;
  const perHour = 50;
  const rows = [
    { name: 'Paper 1', kind: 'multiple choice', hours: 1.5, label: '1½ hours', when: 'Sat 13 June, morning' },
    { name: 'Paper 2', kind: 'written paper', hours: 3, label: '3 hours', when: 'Sat 13 June, afternoon' },
    { name: 'Paper 3', kind: 'written paper', hours: 3, label: '3 hours', when: 'Mon 15 June, morning' },
  ];
  return (
    <G>
      <Line x1={x0} y1={16} x2={x0} y2={146} stroke={O} strokeWidth={1.2} />
      <Line x1={x0} y1={146} x2={x0 + 4 * perHour} y2={146} stroke={O} strokeWidth={1} />
      {[0, 1, 2, 3, 4].map((h) => (
        <G key={h}>
          <Line x1={x0 + h * perHour} y1={146} x2={x0 + h * perHour} y2={151} stroke={O} strokeWidth={1} />
          <Plain x={x0 + h * perHour} y={162} t={`${h} h`} size={8.5} fill={MUTED} />
        </G>
      ))}
      {rows.map((p, i) => {
        const y = 34 + i * 44;
        return (
          <G key={p.name}>
            <Plain x={x0 - 8} y={y - 1} t={p.name} size={9.5} anchor="end" weight="700" />
            <Plain x={x0 - 8} y={y + 11} t={p.kind} size={7.5} anchor="end" fill={MUTED} />
            <Rect x={x0} y={y - 9} width={p.hours * perHour} height={18} rx={2} fill={i === 0 ? BLUE : GREEN} />
            <Plain x={x0 + p.hours * perHour + 6} y={y + 3} t={p.label} size={8.5} anchor="start" />
            <Plain x={x0 + p.hours * perHour + 6} y={y + 14} t={p.when} size={7.5} anchor="start" fill={MUTED} />
          </G>
        );
      })}
      <Plain x={210} y={182} t="June 2026 timetable (bars drawn to scale)" size={8.5} fill={MUTED} />
    </G>
  );
}

// ---------- a timeline of authors, to scale ----------
// items: [year, author, work, row]; negative years are BCE.
function timeline(items, from, to, ticks, w = 400) {
  const X = (y) => 20 + ((y - from) / (to - from)) * (w - 40);
  const rows = Math.max(...items.map((it) => it[3])) + 1;
  const axisY = 40 + rows * 34;
  const art = () => (
    <G>
      <Line x1={20} y1={axisY} x2={w - 20} y2={axisY} stroke={O} strokeWidth={1.4} />
      {ticks.map((t) => (
        <G key={t}>
          <Line x1={X(t)} y1={axisY} x2={X(t)} y2={axisY + 4} stroke={O} />
          <Plain x={X(t)} y={axisY + 14} t={t < 0 ? `${-t} BCE` : String(t)} size={7.5} fill={MUTED} />
        </G>
      ))}
      {items.map(([y, a, wk, r], i) => {
        const ty = 34 + r * 34;
        const anchor = X(y) > w - 90 ? 'end' : X(y) < 70 ? 'start' : 'middle';
        return (
          <G key={i}>
            <Line x1={X(y)} y1={ty + 12} x2={X(y)} y2={axisY} stroke={MUTED} strokeWidth={0.7} strokeDasharray="2 2" />
            <Path d={`M${X(y) - 3} ${axisY} a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0`} fill={[BLUE, GREEN, RED, GOLD, PURPLE][i % 5]} />
            <Plain x={X(y)} y={ty} t={a} size={8} weight="700" anchor={anchor} />
            <Plain x={X(y)} y={ty + 10} t={wk} size={7} fill={MUTED} anchor={anchor} />
          </G>
        );
      })}
    </G>
  );
  return { w, h: axisY + 24, art };
}
const L6_AUTHORS = timeline(
  [[1620, 'Bacon', 'Novum Organum', 3], [1637, 'Descartes', 'Discourse', 0], [1677, 'Spinoza', 'Ethics', 1], [1748, 'Hume', 'Enquiry', 2], [1807, 'Hegel', 'Phenomenology', 0], [1899, 'Freud', 'Dreams', 1], [1934, 'Popper', 'Logik', 2], [1943, 'Sartre', 'Being and Nothingness', 3], [1962, 'Kuhn', 'Revolutions', 0]],
  1600, 2000, [1600, 1700, 1800, 1900, 2000]
);
const U6_AUTHORS = timeline(
  [[1513, 'Machiavelli', 'The Prince', 0], [1651, 'Hobbes', 'Leviathan', 1], [1689, 'Locke', 'Second Treatise', 2], [1762, 'Rousseau', 'Social Contract', 0], [1785, 'Kant', 'Groundwork', 1], [1848, 'Marx', 'Manifesto', 2], [1863, 'Mill', 'Utilitarianism', 0], [1951, 'Arendt', 'Totalitarianism', 1], [1971, 'Rawls', 'Theory of Justice', 2]],
  1500, 2000, [1500, 1600, 1700, 1800, 1900, 2000]
);
const AFRICAN = timeline(
  [[1935, 'Negritude', 'L’Étudiant noir', 0], [1945, 'Tempels', 'Bantu Philosophy', 1], [1956, 'Kagame', 'Bantu-Rwandan being', 2], [1962, 'Nyerere', 'Ujamaa', 0], [1964, 'Nkrumah', 'Consciencism', 1], [1970, 'Njoh-Mouelle', 'Médiocrité', 2], [1971, 'Towa', 'Essai', 0], [1976, 'Hountondji', 'Sur la phil. afr.', 1], [1977, 'Eboussi Boulaga', 'Crise du Muntu', 3], [1990, 'Oruka', 'Sage Philosophy', 0]],
  1930, 1995, [1930, 1940, 1950, 1960, 1970, 1980, 1990]
);

// ---------- Freud’s model of the mind ----------
function FreudArt() {
  return (
    <G>
      <Path d="M20 70 L380 70" stroke={BLUE} strokeWidth={1.4} strokeDasharray="6 3" />
      <Plain x={370} y={64} t="threshold of consciousness" size={7.5} anchor="end" fill={BLUE} />
      <Path d="M200 26 L250 70 L330 190 L70 190 L150 70 Z" fill="#e6eef8" stroke={O} strokeWidth={1.2} />
      <Path d="M150 70 L250 70 L270 100 L130 100 Z" fill="#cfe0f2" />
      <Plain x={200} y={56} t="EGO" size={10} weight="700" />
      <Plain x={200} y={68} t="(conscious)" size={7.5} fill={MUTED} />
      <Plain x={200} y={90} t="preconscious" size={8} fill={MUTED} />
      <Path d="M250 70 L292 133 L250 190 L215 100 Z" fill="#f8e3df" />
      <Plain x={262} y={140} t="SUPEREGO" size={8.5} weight="700" fill={RED} />
      <Plain x={150} y={150} t="ID" size={11} weight="700" />
      <Plain x={150} y={163} t="unconscious drives" size={7.5} fill={MUTED} />
      <Plain x={150} y={174} t="pleasure principle" size={7.5} fill={MUTED} />
      <Plain x={60} y={120} t="repression" size={8} anchor="middle" fill={PURPLE} weight="700" />
      <Path d="M60 104 L60 112" stroke={PURPLE} strokeWidth={1.4} />
      <Plain x={322} y={172} t="moral censor" size={7.5} anchor="start" fill={RED} />
      <Plain x={8} y={150} t="dreams, slips, symptoms" size={7} anchor="start" fill={MUTED} />
      <Plain x={8} y={160} t="release repressed wishes" size={7} anchor="start" fill={MUTED} />
    </G>
  );
}

const graph = (title, spec, facts) => ({ title, w: spec.w, h: spec.h, art: spec.art, labels: [], facts });

export const A_PHILOSOPHY = {
  'aph-gce-0790': {
    title: 'GCE A Level Philosophy (0790)',
    w: 410,
    h: 192,
    art: PapersArt,
    labels: [],
    facts: [
      'Paper 1 lasts 1½ hours: multiple choice, on Saturday 13 June, morning.',
      'Paper 2 lasts 3 hours, on Saturday 13 June, afternoon.',
      'Paper 3 lasts 3 hours, on Monday 15 June, morning.',
      'The bars are drawn to scale.',
    ],
  },
  'aph-vocabulary': columnsSpec('Philosophical vocabulary', [
    { head: 'Pairs', items: ['a priori / a posteriori', 'necessary / contingent', 'universal / particular', 'thesis / antithesis'] },
    { head: 'Meaning', items: ['before / from experience', 'must be / could differ', 'all / some', 'claim / opposing claim'] },
  ], { colW: 156 }),
  'aph-myth-logos': columnsSpec('From mythos to logos', [
    { head: 'Mythos', items: ['sacred stories', 'gods as causes', 'tradition, authority', 'not open to debate'] },
    { head: 'Logos', items: ['rational account', 'natural causes', 'argument, evidence', 'open to criticism'] },
  ], { colW: 156, arrow: true }),
  'aph-disciplines': columnsSpec('Philosophy, religion and science', [
    { head: 'Philosophy', items: ['reason alone', 'all questions', 'critical, radical'] },
    { head: 'Religion', items: ['faith, revelation', 'salvation, worship', 'a community'] },
    { head: 'Science', items: ['observation, experiment', 'a limited field', 'laws of nature'] },
  ], { colW: 116 }),
  'aph-dissertation': flowSpec('The philosophical dissertation', ['Introduction:\nlead-in, terms,\nproblem, plan', 'Thesis:\nfirst answer\nand reasons', 'Antithesis:\nlimits and\nopposed view', 'Synthesis:\na fuller answer', 'Conclusion:\na clear answer'], { perRow: 3, boxW: 112, boxH: 58 }),
  'aph-essay-paragraph': flowSpec('One paragraph of the development', ['Idea', 'Argument', 'Author\n(used, not told)', 'Example\nanalysed', 'Link to the\nquestion'], { perRow: 3, boxW: 104, boxH: 48 }),
  'aph-dualism': columnsSpec('Dualism: body and soul', [
    { head: 'Plato', items: ['immortal soul', 'body a prison', 'reason, spirit,', 'appetite'] },
    { head: 'Descartes', items: ['thinking substance', 'extended body', 'interaction problem', 'pineal gland'] },
  ], { colW: 156 }),
  'aph-monism': columnsSpec('Monism', [
    { head: 'Materialist', items: ['Democritus: atoms', 'La Mettrie: machine', 'neuroscience'] },
    { head: 'Other', items: ['spiritualist monism', 'Spinoza: two aspects', 'of one substance'] },
  ], { colW: 156 }),
  'aph-cogito': flowSpec('Descartes’ path to the cogito', ['Doubt the\nsenses', 'Doubt even\nmathematics\n(evil demon)', 'But I who\ndoubt must\nthink', 'I think,\ntherefore I am'], { perRow: 2, boxW: 128, boxH: 58 }),
  'aph-freud': { title: 'Freud’s model of the mind', w: 400, h: 200, art: FreudArt, labels: [], facts: [
    'The ego is the conscious self that deals with reality; much of the mind lies below the threshold of consciousness.',
    'The id holds unconscious drives seeking pleasure.',
    'The superego is the internalised moral censor.',
    'Repressed wishes return in dreams, slips of the tongue and symptoms.',
  ] },
  'aph-social-man': treeSpec('Man as a social being', 'The self and society', [
    { name: 'Aristotle', items: ['political animal', 'beast or god'] },
    { name: 'Feral\nchildren', items: ['language learned', 'Victor of Aveyron'] },
    { name: 'African\nthought', items: ['ubuntu', '"I am because', 'we are"'] },
  ], { colW: 116 }),
  'aph-master-slave': cycleSpec('Hegel’s master and slave', ['Struggle for\nrecognition', 'Master and\nslave', 'Slave works\nthe world', 'Master\ndepends', 'Slave gains\nself-consciousness'], { centre: 'recognition' }),
  'aph-freedom': columnsSpec('Freedom and determinism', [
    { head: 'Determinisms', items: ['physical (Laplace)', 'biological', 'psychological (Freud)', 'social (Durkheim)'] },
    { head: 'Freedom', items: ['Spinoza: knowing', 'necessity', 'Sartre: absolute', 'choice, responsibility'] },
  ], { colW: 156 }),
  'aph-sartre-freedom': flowSpec('Sartre’s existential freedom', ['Existence\nprecedes\nessence', 'Man defines\nhimself by\nchoices', 'Total\nresponsibility:\nanguish', 'Escape:\nbad faith'], { perRow: 2, boxW: 128, boxH: 58 }),
  'aph-sign': columnsSpec('Language: sign and signal', [
    { head: 'Animal signal', items: ['fixed', 'tied to situation', 'bee dance, alarm call'] },
    { head: 'Human sign', items: ['signifier + signified', 'arbitrary (Saussure)', 'creative, infinite'] },
  ], { colW: 156, arrow: true }),
  'aph-culture': columnsSpec('Nature and culture', [
    { head: 'Nature', items: ['innate', 'universal', 'needs, instincts'] },
    { head: 'Culture', items: ['acquired', 'varies by society', 'language, customs, rules'] },
  ], { colW: 156, arrow: true }),
  'aph-god-proofs': columnsSpec('Arguments for the existence of God', [
    { head: 'Ontological', items: ['Anselm', 'from the concept', 'of God', 'Kant: existence', 'is not a predicate'] },
    { head: 'Cosmological', items: ['Aquinas', 'from the world', 'to a first cause', 'critics: why stop', 'the regress?'] },
    { head: 'Teleological', items: ['Paley (1802)', 'from order', 'to a designer', 'Hume, Darwin', 'objected'] },
  ], { colW: 116 }),
  'aph-evil-problem': flowSpec('The problem of evil', ['God is\nall-powerful', 'God is\nwholly good', 'Evil exists', 'Theodicies:\nfree will,\nbest world'], { perRow: 2, boxW: 128, boxH: 54 }),
  'aph-knowledge': columnsSpec('Sources of knowledge', [
    { head: 'Rationalism', items: ['Descartes, Leibniz', 'reason, innate ideas'] },
    { head: 'Empiricism', items: ['Locke, Hume', 'experience'] },
    { head: 'Kant', items: ['concepts and', 'intuitions together'] },
  ], { colW: 116 }),
  'aph-history-objectivity': columnsSpec('Is history a science?', [
    { head: 'Yes', items: ['method, sources', 'external and internal', 'criticism', 'Ranke: as it was'] },
    { head: 'Not fully', items: ['unique events', 'no experiments', 'selection, interpretation', 'Carr: dialogue'] },
  ], { colW: 156 }),
  'aph-math-views': columnsSpec('What is mathematics?', [
    { head: 'Realism', items: ['Plato', 'discovered Forms'] },
    { head: 'Formalism', items: ['Hilbert', 'rules from axioms'] },
    { head: 'Intuitionism', items: ['Brouwer', 'mental construction'] },
  ], { colW: 116 }),
  'aph-scientific-method': flowSpec('The experimental method', ['Observation', 'Hypothesis', 'Experiment', 'Verification\nor refutation', 'Law or\nnew hypothesis'], { perRow: 3, boxW: 104 }),
  'aph-popper': columnsSpec('Induction and falsification', [
    { head: 'Hume', items: ['past cases do not', 'prove the future', 'belief from habit'] },
    { head: 'Popper', items: ['conjectures', 'and refutations', 'falsifiability'] },
    { head: 'Kuhn', items: ['paradigms', 'scientific', 'revolutions'] },
  ], { colW: 116 }),
  'aph-human-objects': columnsSpec('The human sciences', [
    { head: 'Difficulties', items: ['man is subject', 'and object', 'ethics limits tests', 'observation changes us'] },
    { head: 'Answers', items: ['Durkheim: social', 'facts as things', 'statistics', 'Suicide (1897)'] },
  ], { colW: 156 }),
  'aph-explain-understand': columnsSpec('Explaining and understanding', [
    { head: 'Erklären', items: ['causes and laws', 'natural sciences', 'from outside'] },
    { head: 'Verstehen', items: ['meaning, intention', 'human sciences', 'from within'] },
  ], { colW: 156 }),
  'aph-technoscience': columnsSpec('Technoscience', [
    { head: 'Benefits', items: ['medicine', 'food, energy', 'communication', 'longer lives'] },
    { head: 'Risks', items: ['weapons', 'pollution, climate', 'loss of privacy', 'eugenics'] },
  ], { colW: 156 }),
  'aph-bioethics-tech': treeSpec('Responsibility in the technological age', 'Hans Jonas (1979)', [
    { name: 'Cloning', items: ['Dolly, 1996', 'identity, dignity'] },
    { name: 'Genetics', items: ['cures', 'eugenics risk'] },
    { name: 'AI', items: ['responsibility', 'bias, work'] },
  ], { colW: 116 }),
  'aph-commentary': flowSpec('The text commentary', ['Theme, problem,\nthesis', 'Structure:\nthe moments', 'Explanation\nof each moment', 'Critical\nevaluation', 'Conclusion'], { perRow: 3, boxW: 112, boxH: 54 }),
  'aph-critique': flowSpec('Critical evaluation', ['Interest of\nthe thesis', 'Internal\ncritique', 'External\ncritique', 'Reasoned\njudgement'], { perRow: 2, boxW: 128, boxH: 52 }),
  'aph-l6-map': treeSpec('Lower Sixth: the main questions', 'Philosophy, Lower Sixth', [
    { name: 'Man', items: ['body and soul', 'consciousness', 'others, freedom', 'language, culture'] },
    { name: 'Metaphysics', items: ['being', 'God', 'evil', 'immortality'] },
    { name: 'Knowledge', items: ['history', 'mathematics, logic', 'science', 'technoscience'] },
  ], { colW: 116 }),
  'aph-epistemology-map': columnsSpec('Epistemology: key oppositions', [
    { head: 'Opposition', items: ['reason / experience', 'verify / falsify', 'explain / understand', 'freedom / responsibility'] },
    { head: 'Authors', items: ['Descartes / Hume', 'Bacon / Popper', 'Durkheim / Dilthey', 'Bacon / Jonas'] },
  ], { colW: 156 }),
  'aph-promotion-plan': flowSpec('A 3-hour essay paper', ['Read and\nchoose', 'Define terms,\nfind the problem', 'Plan\n(35 to 40 min)', 'Write\n(about 2 h)', 'Check\n(10 to 15 min)'], { perRow: 3, boxW: 108, boxH: 52 }),
  'aph-authors-l6': graph('Lower Sixth authors on a time line (to scale)', L6_AUTHORS, [
    'Bacon’s Novum Organum appeared in 1620, Descartes’ Discourse on Method in 1637 and Spinoza’s Ethics in 1677 (Plato, about 380 BCE, lies far to the left of this scale).',
    'Hume’s Enquiry appeared in 1748 and Hegel’s Phenomenology of Spirit in 1807.',
    'Freud’s Interpretation of Dreams (1899), Popper’s Logik der Forschung (1934), Sartre’s Being and Nothingness (1943) and Kuhn’s Structure of Scientific Revolutions (1962) belong to the modern period.',
  ]),
  'aph-social-contract': columnsSpec('The social contract', [
    { head: 'Hobbes (1651)', items: ['war of all', 'against all', 'absolute sovereign', 'for security'] },
    { head: 'Locke (1689)', items: ['natural rights', 'life, liberty,', 'property', 'right to resist'] },
    { head: 'Rousseau (1762)', items: ['born free,', 'in chains', 'general will', 'popular sovereignty'] },
  ], { colW: 116 }),
  'aph-separation-powers': treeSpec('The separation of powers', 'Montesquieu (1748)', [
    { name: 'Legislative', items: ['makes laws', 'parliament'] },
    { name: 'Executive', items: ['applies laws', 'government'] },
    { name: 'Judicial', items: ['judges cases', 'courts'] },
  ], { colW: 116 }),
  'aph-machiavelli': columnsSpec('Machiavelli’s realism (1513)', [
    { head: 'Virtù', items: ['energy, skill', 'decisiveness', 'appear virtuous'] },
    { head: 'Fortuna', items: ['chance', 'to be mastered', 'by virtù'] },
  ], { colW: 156 }),
  'aph-weber-authority': treeSpec('Weber’s types of legitimate authority', 'Legitimate authority', [
    { name: 'Traditional', items: ['custom', 'chiefs, kings'] },
    { name: 'Charismatic', items: ['exceptional', 'leader'] },
    { name: 'Legal-\nrational', items: ['rules, offices', 'constitutions'] },
  ], { colW: 116 }),
  'aph-justice': columnsSpec('Law and justice', [
    { head: 'Natural law', items: ['above human law', 'Antigone', 'Aquinas'] },
    { head: 'Positive law', items: ['made by authority', 'Kelsen (1934)', 'is, not ought'] },
    { head: 'Aristotle', items: ['distributive', 'corrective', 'equity'] },
  ], { colW: 116 }),
  'aph-rawls': flowSpec('Rawls’ justice as fairness (1971)', ['Original\nposition', 'Veil of\nignorance', '1: equal basic\nliberties', '2: fair opportunity;\nhelp the least\nadvantaged'], { perRow: 2, boxW: 130, boxH: 58 }),
  'aph-ideologies': columnsSpec('Political ideologies', [
    { head: 'Liberal', items: ['rights', 'markets', 'limited state'] },
    { head: 'Socialist', items: ['social ownership', 'equality', 'Marx (1848)'] },
    { head: 'Totalitarian', items: ['total control', 'ideology, terror', 'Arendt (1951)'] },
    { head: 'Anarchist', items: ['no state', 'Proudhon', 'Bakunin'] },
  ], { colW: 92 }),
  'aph-totalitarian': columnsSpec('Two extremes', [
    { head: 'Totalitarianism', items: ['the state is everything', 'one ideology', 'terror, propaganda'] },
    { head: 'Anarchism', items: ['the state is nothing', 'free association', 'no coercion'] },
  ], { colW: 156 }),
  'aph-authors-u6': graph('Upper Sixth authors on a time line (to scale)', U6_AUTHORS, [
    'Machiavelli wrote The Prince in 1513; Hobbes’ Leviathan appeared in 1651 and Locke’s Second Treatise in 1689.',
    'Rousseau’s Social Contract (1762) and Kant’s Groundwork (1785) belong to the Enlightenment.',
    'Marx’s Manifesto (1848), Mill’s Utilitarianism (1863), Arendt (1951) and Rawls (1971) follow.',
  ]),
  'aph-conscience': columnsSpec('Moral conscience', [
    { head: 'Before acting', items: ['guides', 'advises', 'forbids'] },
    { head: 'After acting', items: ['judges', 'remorse', 'satisfaction'] },
  ], { colW: 156 }),
  'aph-conscience-sources': columnsSpec('Where does conscience come from?', [
    { head: 'Innate', items: ['Rousseau:', 'divine instinct', 'Kant: moral law'] },
    { head: 'Acquired', items: ['Durkheim: society', 'Freud: superego', 'Nietzsche: genealogy'] },
  ], { colW: 156 }),
  'aph-kant-mill': columnsSpec('Duty or consequences?', [
    { head: 'Kant (1785)', items: ['good will', 'duty for duty’s sake', 'universal law', 'persons as ends'] },
    { head: 'Bentham, Mill', items: ['consequences', 'greatest happiness', 'felicific calculus', 'higher pleasures'] },
  ], { colW: 156 }),
  'aph-utilitarian': flowSpec('A utilitarian decision', ['List the\noptions', 'Weigh pleasure\nand pain for all', 'Choose the\ngreatest\nhappiness', 'Check rights\nand rules'], { perRow: 2, boxW: 128, boxH: 54 }),
  'aph-evil': treeSpec('Leibniz’s three kinds of evil (1710)', 'Evil', [
    { name: 'Metaphysical', items: ['imperfection', 'of finite beings'] },
    { name: 'Physical', items: ['pain, suffering', 'disasters'] },
    { name: 'Moral', items: ['freely done', 'wrong'] },
  ], { colW: 116 }),
  'aph-absurd': columnsSpec('Facing suffering', [
    { head: 'Nietzsche', items: ['amor fati', 'say yes to life', 'strength'] },
    { head: 'Camus', items: ['the absurd', 'revolt', 'Sisyphus happy'] },
    { head: 'Stoics, Epicurus', items: ['accept what', 'is not ours', 'death is nothing'] },
  ], { colW: 116 }),
  'aph-bioethics': columnsSpec('Principles of biomedical ethics', [
    { head: 'Principle', items: ['autonomy', 'beneficence', 'non-maleficence', 'justice'] },
    { head: 'Meaning', items: ['respect choices', 'do good', 'do no harm', 'fair access'] },
  ], { colW: 156, arrow: true }),
  'aph-environment': columnsSpec('Who counts in environmental ethics?', [
    { head: 'Anthropo-\ncentrism', items: ['humans only'] },
    { head: 'Biocentrism', items: ['all living', 'beings'] },
    { head: 'Ecocentrism', items: ['ecosystems', '(Leopold, 1949)'] },
  ], { colW: 116 }),
  'aph-african-debate': graph('Key works of the African philosophy debate (to scale)', AFRICAN, [
    'Negritude began in Paris around 1935; Tempels published Bantu Philosophy in 1945 and Kagame his study in 1956.',
    'Nyerere’s Ujamaa (1962) and Nkrumah’s Consciencism (1964) form the nationalist trend.',
    'Njoh-Mouelle (1970), Towa (1971), Hountondji (1976) and Eboussi Boulaga (1977) mark the critical turn; Oruka’s Sage Philosophy appeared in 1990.',
  ]),
  'aph-towa-hountondji': columnsSpec('The critique of ethnophilosophy', [
    { head: 'Towa (1971)', items: ['criticise tradition', 'appropriate reason', 'and science', 'self-liberation'] },
    { head: 'Hountondji (1976)', items: ['against unanimism', 'philosophy is', 'critical, written,', 'individual'] },
  ], { colW: 156 }),
  'aph-nationalist': columnsSpec('Nationalist-ideological philosophies', [
    { head: 'Negritude', items: ['Senghor, Césaire,', 'Damas (1930s)', 'cultural identity'] },
    { head: 'Consciencism', items: ['Nkrumah (1964)', 'three strands', 'socialism'] },
    { head: 'Ujamaa', items: ['Nyerere (1962)', 'familyhood', 'self-reliance'] },
  ], { colW: 116 }),
  'aph-ujamaa': flowSpec('Ujamaa in Tanzania', ['Traditional\nfamilyhood', 'Ujamaa\nessay (1962)', 'Arusha\nDeclaration\n(1967)', 'Ujamaa\nvillages', 'Abandoned\nin the 1980s'], { perRow: 3, boxW: 104, boxH: 54 }),
  'aph-oruka-trends': treeSpec('Oruka’s trends in African philosophy', 'African philosophy', [
    { name: 'Ethno-\nphilosophy', items: ['Tempels', 'Kagame'] },
    { name: 'Sage\nphilosophy', items: ['Oruka’s', 'interviews'] },
    { name: 'Nationalist', items: ['Nkrumah', 'Nyerere'] },
    { name: 'Professional', items: ['Hountondji', 'Wiredu, Towa'] },
  ], { colW: 92 }),
  'aph-development': columnsSpec('Philosophy and development in Cameroon', [
    { head: 'Eboussi Boulaga', items: ['La Crise du Muntu', '(1977)', 'freedom against', 'imitation'] },
    { head: 'Njoh-Mouelle', items: ['De la médiocrité', 'à l’excellence', '(1970)', 'human excellence'] },
  ], { colW: 156 }),
  'aph-text-moments': flowSpec('Explaining one moment of a text', ['Claim', 'Reasons', 'Link with\nthe previous\nstep', 'Key\nconcept'], { perRow: 2, boxW: 120, boxH: 50 }),
  'aph-contemporary': columnsSpec('Contemporary value', [
    { head: 'Author', items: ['Rousseau', 'Jonas', 'Njoh-Mouelle', 'Machiavelli'] },
    { head: 'Present problem', items: ['citizen participation', 'climate responsibility', 'quality of education', 'media and power'] },
  ], { colW: 156, arrow: true }),
  'aph-final-term': flowSpec('The final term before the GCE', ['Paper 1\nmarathon', 'Dissertation\nworkshops', 'Mock\nexamination', 'Remediation', 'Commentary\nclinics'], { perRow: 3, boxW: 108 }),
};
