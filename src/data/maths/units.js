// Mathematics by class, following the 2026/2027 national harmonised schemes of
// work and the MINESEC Mathematics teaching syllabus for Forms 3 to 5. Each
// topic carries the term and sequence in which it is taught, so class tests can
// follow the school year. The Form 1 and Form 2 topics in units12.js join once
// their lessons are written.
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'numbers', en: 'Numbers, sets and matrices', fr: 'Nombres, ensembles et matrices' },
  { id: 'algebra', en: 'Algebra and logic', fr: 'Algèbre et logique' },
  { id: 'geometry', en: 'Plane geometry and trigonometry', fr: 'Géométrie plane et trigonométrie' },
  { id: 'solids', en: 'Solid figures', fr: 'Solides' },
  { id: 'statistics', en: 'Statistics, probability and examination practice', fr: 'Statistiques, probabilités et préparation aux examens' },
];

export const units = [...UNITS_4, ...UNITS_5];
