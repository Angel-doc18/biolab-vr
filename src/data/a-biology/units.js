// Advanced Level Biology (GCE 0710) by class, following the 2026/2027
// harmonised schemes of work: Lower Sixth covers biological molecules, cells,
// energy, transport, health and classification; Upper Sixth covers genetics,
// control systems, reproduction, evolution and ecology. Each topic carries the
// term and sequence in which it is taught. Unit ids start with "ab-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'molecules', en: 'Biological molecules and enzymes', fr: 'Molécules biologiques et enzymes' },
  { id: 'cells', en: 'Cells and tissues', fr: 'Cellules et tissus' },
  { id: 'energy', en: 'Photosynthesis and respiration', fr: 'Photosynthèse et respiration' },
  { id: 'transport', en: 'Transport in plants and mammals', fr: 'Transport chez les plantes et les mammifères' },
  { id: 'health', en: 'Health education: disease and immunity', fr: 'Éducation à la santé : maladies et immunité' },
  { id: 'environment', en: 'Environmental education: classification', fr: 'Éducation environnementale : classification' },
  { id: 'genetics', en: 'Molecular genetics and inheritance', fr: 'Génétique moléculaire et hérédité' },
  { id: 'control', en: 'Control and coordination', fr: 'Contrôle et coordination' },
  { id: 'reproduction', en: 'Reproduction and development', fr: 'Reproduction et développement' },
  { id: 'evolution', en: 'Evolution and population genetics', fr: 'Évolution et génétique des populations' },
  { id: 'ecology', en: 'Ecology and the environment', fr: 'Écologie et environnement' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
