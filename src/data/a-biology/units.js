// Advanced Level Biology (GCE 0710) by class, following the 2026/2027
// harmonised schemes of work: Lower Sixth covers biological molecules, cells,
// energy, transport, health and classification. Each topic carries the term
// and sequence in which it is taught. Unit ids start with "ab-".
import { UNITS_L6 } from './unitsL6';

export const GROUPS = [
  { id: 'molecules', en: 'Biological molecules and enzymes', fr: 'Molécules biologiques et enzymes' },
  { id: 'cells', en: 'Cells and tissues', fr: 'Cellules et tissus' },
  { id: 'energy', en: 'Photosynthesis and respiration', fr: 'Photosynthèse et respiration' },
  { id: 'transport', en: 'Transport in plants and mammals', fr: 'Transport chez les plantes et les mammifères' },
  { id: 'health', en: 'Health education: disease and immunity', fr: 'Éducation à la santé : maladies et immunité' },
  { id: 'environment', en: 'Environmental education: classification', fr: 'Éducation environnementale : classification' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_L6];
