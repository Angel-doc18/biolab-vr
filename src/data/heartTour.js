// The guided tour of the heart on the welcome page: one short sentence per
// step, each tied to the diagram label it points at (null: the whole heart).
// The audio for every step is recorded in the app's own voice and shipped with
// the app (assets/audio/tour), so the tour starts at once, needs no account and
// works offline; tourClips.js lists those files in the same order.
export const HEART_TOUR = [
  { label: null, en: 'This is the human heart, a pump with four chambers. Follow the blood.', fr: 'Voici le cœur humain, une pompe à quatre cavités. Suivons le sang.' },
  { label: 'Superior vena cava', en: 'Blood low in oxygen comes back from the head and arms through the superior vena cava,', fr: 'Le sang pauvre en oxygène revient de la tête et des bras par la veine cave supérieure,' },
  { label: 'Inferior vena cava', en: 'and from the rest of the body through the inferior vena cava.', fr: 'et du reste du corps par la veine cave inférieure.' },
  { label: 'Right atrium', en: 'Both empty into the right atrium.', fr: 'Les deux se jettent dans l’oreillette droite.' },
  { label: 'Tricuspid valve', en: 'The tricuspid valve lets the blood pass down, then shuts, so it cannot flow back.', fr: 'La valvule tricuspide laisse passer le sang, puis se ferme pour l’empêcher de refluer.' },
  { label: 'Right ventricle', en: 'The right ventricle contracts,', fr: 'Le ventricule droit se contracte,' },
  { label: 'Pulmonary artery', en: 'and pushes the blood along the pulmonary artery to the lungs, to collect oxygen.', fr: 'et pousse le sang dans l’artère pulmonaire, vers les poumons, où il se charge d’oxygène.' },
  { label: 'Pulmonary veins', en: 'Now rich in oxygen, it returns through the pulmonary veins', fr: 'Riche en oxygène, il revient par les veines pulmonaires' },
  { label: 'Left atrium', en: 'into the left atrium,', fr: 'dans l’oreillette gauche,' },
  { label: 'Bicuspid valve', en: 'then through the bicuspid valve', fr: 'puis traverse la valvule bicuspide' },
  { label: 'Left ventricle', en: 'into the left ventricle. Its wall is the thickest of all, because it pumps blood to the whole body.', fr: 'jusqu’au ventricule gauche. Sa paroi est la plus épaisse, car il pompe le sang vers tout le corps.' },
  { label: 'Aorta', en: 'Out it goes, through the aorta,', fr: 'Le sang sort par l’aorte,' },
  { label: 'Semilunar valve', en: 'while the semilunar valves stop it from slipping back.', fr: 'et les valvules sigmoïdes l’empêchent de revenir.' },
  { label: 'Septum', en: 'The septum keeps the two sides apart, so blood rich and poor in oxygen never mix.', fr: 'La cloison sépare les deux côtés : le sang riche et le sang pauvre en oxygène ne se mélangent jamais.' },
  { label: null, en: 'Every diagram in Klass8 is explained like this, part by part.', fr: 'Dans Klass8, chaque schéma est expliqué ainsi, partie par partie.' },
];
