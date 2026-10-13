// History by class, following the 2026/2027 national harmonised schemes of
// work: Cameroon history, African history and world history, as in the three
// sections of GCE Paper 2. Each topic carries the term and sequence in which
// it is taught.
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'cameroon', en: 'Cameroon history', fr: 'Histoire du Cameroun' },
  { id: 'africa', en: 'African history', fr: 'Histoire de l’Afrique' },
  { id: 'world', en: 'World history', fr: 'Histoire du monde' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_4, ...UNITS_5];
