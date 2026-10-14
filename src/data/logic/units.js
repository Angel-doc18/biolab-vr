// Logic by class, following the 2026/2027 national harmonised schemes of work
// and the GCE O Level Logic papers (0590): Form 3 meets terms, propositions,
// the square of opposition and the first fallacies; Form 4 revises them and
// adds definition, division and immediate inference; Form 5 covers the
// syllogism, fallacies and symbolic logic. Each topic carries the term and
// sequence in which it is taught.
import { UNITS_3 } from './units3';
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'intro', en: 'Logic and language', fr: 'Logique et langage' },
  { id: 'terms', en: 'Concepts and terms', fr: 'Concepts et termes' },
  { id: 'propositions', en: 'Propositions', fr: 'Propositions' },
  { id: 'inference', en: 'Immediate inference', fr: 'Inférence immédiate' },
  { id: 'syllogism', en: 'The syllogism', fr: 'Le syllogisme' },
  { id: 'fallacies', en: 'Fallacies', fr: 'Sophismes' },
  { id: 'symbolic', en: 'Symbolic logic', fr: 'Logique symbolique' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_3, ...UNITS_4, ...UNITS_5];
