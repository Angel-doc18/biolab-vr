// What the home page shows, chosen from the app. Lessons, topics and questions
// are referenced by id and read from the app's data by build.js; only the
// tutor's spoken explanations of the board steps and the heart diagram are
// written here, the way the tutor explains them in the app.

// Lessons read aloud on the home page: which paragraphs, and the tab name.
exports.READERS = [
  { id: 'transport-1', tab: 'Biology', paragraphs: [0, 1, 2] },
  { id: 'ph-electricity-2', tab: 'Physics', paragraphs: [0, 2, 3] },
  { id: 'ch-moles-2', tab: 'Chemistry', paragraphs: [0, 1, 2] },
  { id: 'ge-cmrrelief-f5', tab: 'Geography', paragraphs: [0, 1, 3] },
  { id: 'hi-partition-4', tab: 'History', paragraphs: [0, 1, 2] },
];

// Worked examples solved on the board: [what is written, what the tutor says].
exports.BOARDS = [
  {
    tab: 'Mathematics',
    lesson: 'ma-quadformula-4',
    q: 'Solve 2x² − 3x − 4 = 0, giving the roots to 2 decimal places.',
    steps: [
      ['a = 2, b = −3, c = −4', 'First, read off a, b and c with their signs. a is 2, b is minus 3 and c is minus 4.'],
      ['b² − 4ac = (−3)² − 4(2)(−4) = 9 + 32 = 41', 'Work out b squared minus 4 a c on its own. Minus 3 squared is 9, and minus 4 times 2 times minus 4 is plus 32. So the discriminant is 41. It is positive, so there are two different roots.'],
      ['x = (3 ± √41) ÷ 4', 'Now use the formula. x equals minus b, which is 3, plus or minus the square root of 41, all over 2 a, which is 4.'],
      ['√41 = 6.403, so x = 9.403 ÷ 4 or x = −3.403 ÷ 4', 'The square root of 41 is 6.403, to three decimal places. Take the plus sign, then the minus sign.'],
      ['x = 2.35 or x = −0.85', 'So x is 2.35 or minus 0.85, to two decimal places. Check: the two roots add up to 1.5, which is minus b over a. Correct.'],
    ],
  },
  {
    tab: 'Physics',
    lesson: 'ph-equations-1',
    q: 'A car moving at 20 m/s brakes and stops with a uniform deceleration of 4 m/s². How far does it travel while braking, and for how long?',
    steps: [
      ['u = 20 m/s, v = 0, a = −4 m/s²', 'Write down what you know. The initial velocity u is 20 metres per second. The final velocity v is 0, because the car stops. The acceleration is minus 4 metres per second squared, because the car is slowing down.'],
      ['v² = u² + 2as', 'We want the distance and we do not know the time, so choose the equation without t: v squared equals u squared plus 2 a s.'],
      ['0 = 20² + 2 × (−4) × s, so 8s = 400', 'Put the numbers in. 0 equals 400 plus 2 times minus 4 times s, so 8 s equals 400.'],
      ['s = 50 m', 'Divide by 8. The car travels 50 metres while braking.'],
      ['t = (v − u) ÷ a = (0 − 20) ÷ (−4) = 5 s', 'For the time, use v equals u plus a t. The time is 0 minus 20, divided by minus 4, which is 5 seconds. Check: the average speed is 10 metres per second, and 10 times 5 is 50 metres.'],
    ],
  },
  {
    tab: 'Chemistry',
    lesson: 'ch-moles-2',
    q: 'Calcium carbonate decomposes on heating: CaCO₃ → CaO + CO₂. What volume of carbon dioxide, at room temperature and pressure, is given off when 25 g of calcium carbonate is heated? (Ca = 40, C = 12, O = 16)',
    steps: [
      ['Mr(CaCO₃) = 40 + 12 + 3 × 16 = 100', 'First find the relative formula mass of calcium carbonate: 40 for calcium, 12 for carbon and 3 times 16 for oxygen. That makes 100.'],
      ['moles of CaCO₃ = 25 ÷ 100 = 0.25 mol', 'The number of moles is the mass divided by the molar mass: 25 divided by 100 is 0.25 moles.'],
      ['1 mol CaCO₃ gives 1 mol CO₂, so 0.25 mol of CO₂', 'The equation shows that one mole of calcium carbonate gives one mole of carbon dioxide. So we get 0.25 moles of carbon dioxide.'],
      ['volume = 0.25 × 24 = 6 dm³ (6000 cm³)', 'One mole of any gas fills 24 cubic decimetres at room temperature and pressure. So the volume is 0.25 times 24, which is 6 cubic decimetres, or 6000 cubic centimetres.'],
    ],
  },
];

// The heart diagram, explained part by part, in the order the blood flows.
exports.HEART_INTRO = {
  en: 'This is a vertical section through the mammalian heart, seen from the front, so the right side of the heart is on your left. Follow the blood through the heart, part by part.',
  fr: 'Voici une coupe verticale du cœur d’un mammifère, vue de face : le côté droit du cœur est donc à votre gauche. Suivez le trajet du sang, partie par partie.',
};
exports.HEART_PARTS = [
  {
    name: 'Superior vena cava',
    frName: 'Veine cave supérieure',
    en: 'It brings deoxygenated blood from the head and arms into the right atrium.',
    fr: 'Elle ramène le sang désoxygéné de la tête et des bras vers l’oreillette droite.',
  },
  {
    name: 'Inferior vena cava',
    frName: 'Veine cave inférieure',
    en: 'It brings deoxygenated blood from the lower part of the body back to the right atrium.',
    fr: 'Elle ramène le sang désoxygéné de la partie inférieure du corps vers l’oreillette droite.',
  },
  {
    name: 'Right atrium',
    frName: 'Oreillette droite',
    en: 'It receives deoxygenated blood from the body and passes it down into the right ventricle.',
    fr: 'Elle reçoit le sang désoxygéné venant du corps et le fait passer dans le ventricule droit.',
  },
  {
    name: 'Tricuspid valve',
    frName: 'Valvule tricuspide',
    en: 'It lies between the right atrium and the right ventricle, and closes when the ventricle contracts, so blood cannot flow back.',
    fr: 'Placée entre l’oreillette droite et le ventricule droit, elle se ferme quand le ventricule se contracte, pour empêcher le sang de refluer.',
  },
  {
    name: 'Right ventricle',
    frName: 'Ventricule droit',
    en: 'It pumps blood to the lungs. Its wall is thinner than the left, because the lungs are close by and need only a low pressure.',
    fr: 'Il envoie le sang vers les poumons. Sa paroi est plus fine que celle du ventricule gauche, car les poumons sont tout près.',
  },
  {
    name: 'Pulmonary artery',
    frName: 'Artère pulmonaire',
    en: 'It carries deoxygenated blood from the right ventricle to the lungs. It is the only artery that carries deoxygenated blood.',
    fr: 'Elle conduit le sang désoxygéné du ventricule droit vers les poumons. C’est la seule artère qui transporte du sang désoxygéné.',
  },
  {
    name: 'Pulmonary veins',
    frName: 'Veines pulmonaires',
    en: 'They bring oxygenated blood from the lungs to the left atrium. They are the only veins that carry oxygenated blood.',
    fr: 'Elles ramènent le sang oxygéné des poumons vers l’oreillette gauche. Ce sont les seules veines qui transportent du sang oxygéné.',
  },
  {
    name: 'Left atrium',
    frName: 'Oreillette gauche',
    en: 'It receives oxygenated blood from the lungs and passes it down into the left ventricle.',
    fr: 'Elle reçoit le sang oxygéné venant des poumons et le fait passer dans le ventricule gauche.',
  },
  {
    name: 'Bicuspid valve',
    frName: 'Valvule mitrale',
    en: 'Also called the mitral valve, it stops blood flowing back from the left ventricle into the left atrium.',
    fr: 'Appelée aussi valvule bicuspide, elle empêche le sang de refluer du ventricule gauche vers l’oreillette gauche.',
  },
  {
    name: 'Left ventricle',
    frName: 'Ventricule gauche',
    en: 'It has the thickest wall of the four chambers. It contracts strongly to push blood all round the body at high pressure.',
    fr: 'Sa paroi est la plus épaisse des quatre cavités. Il se contracte avec force pour envoyer le sang dans tout le corps, sous haute pression.',
  },
  {
    name: 'Semilunar valve',
    frName: 'Valvule sigmoïde',
    en: 'Semilunar valves at the base of the aorta and the pulmonary artery stop blood flowing back into the ventricles.',
    fr: 'Les valvules sigmoïdes, à la base de l’aorte et de l’artère pulmonaire, empêchent le sang de retourner dans les ventricules.',
  },
  {
    name: 'Aorta',
    frName: 'Aorte',
    en: 'The largest artery. It carries oxygenated blood from the left ventricle to the whole body.',
    fr: 'C’est la plus grande artère. Elle transporte le sang oxygéné du ventricule gauche vers tout le corps.',
  },
  {
    name: 'Septum',
    frName: 'Septum',
    en: 'The wall of muscle between the two sides of the heart, so oxygenated and deoxygenated blood never mix.',
    fr: 'C’est la cloison musculaire qui sépare les deux côtés du cœur, si bien que le sang oxygéné et le sang désoxygéné ne se mélangent jamais.',
  },
];

// Real questions from the app's topic quizzes: { unit, q: index }.
exports.QUIZ = [
  { unit: 'transport', q: 1 },
  { unit: 'ch-moles', q: 1 },
  { unit: 'ph-electricity', q: 2 },
  { unit: 'ma-f4-quadeq', q: 2 },
  { unit: 'ge-f5-cmrclimate', q: 2 },
  { unit: 'fr-f4-ceremonies', q: 0 },
  { unit: 'li-f4-genres', q: 2 },
  { unit: 'cs-f2-protect', q: 1 },
  { unit: 'ap-kinematics', q: 1 },
  { unit: 'ab-l6-lightstage', q: 1 },
];

// The example weekly report on the home page (an example student, clearly
// labelled as an example on the page), in the shape src/lib/report.js expects.
exports.REPORT = {
  student: { name: 'Brenda Ngwa', className: 'Form 4', subjects: ['biology', 'chemistry', 'physics', 'maths'] },
  subjects: { biology: { mastery: 72, bestMock: 68 }, chemistry: { mastery: 58, bestMock: null }, physics: { mastery: 64, bestMock: 61 }, maths: { mastery: 49, bestMock: null } },
  minutesWeek: 250,
  streak: 5,
  labsDone: 3,
  mocksDone: 2,
  weakest: [
    { unit: 'ch-moles', pct: 41 },
    { unit: 'ma-f4-quadeq', pct: 46 },
  ],
};
