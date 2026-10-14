// Logic by class, following the 2026/2027 national harmonised schemes of work
// and the GCE O Level Logic paper (0590): Form 3 meets terms, propositions,
// the square of opposition and the first fallacies. Each topic carries the
// term and sequence in which it is taught.
import { UNITS_3 } from './units3';

export const GROUPS = [
  { id: 'intro', en: 'Logic and language', fr: 'Logique et langage' },
  { id: 'terms', en: 'Concepts and terms', fr: 'Concepts et termes' },
  { id: 'propositions', en: 'Propositions', fr: 'Propositions' },
  { id: 'inference', en: 'Inference', fr: 'Inférence' },
  { id: 'fallacies', en: 'Fallacies', fr: 'Sophismes' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_3];
