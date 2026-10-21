// Pure Mathematics is common to the two GCE Advanced Level mathematics
// subjects, Pure Mathematics with Mechanics (0765) and Pure Mathematics with
// Statistics (0770). The topics are written once here and given a separate id
// under each subject (prefix "mm-" or "ms-"), so progress, quiz scores and term
// tests stay with the subject the student takes; both share the same lessons
// (listed by `lessonIds`).
import { PURE_L6 } from './pureL6';

export const PURE_GROUPS = [
  { id: 'algebra', en: 'Algebra and logic', fr: 'Algèbre et logique' },
  { id: 'numbers', en: 'Numbers and fundamental operations', fr: 'Nombres et opérations fondamentales' },
  { id: 'functions', en: 'Relations and functions', fr: 'Relations et fonctions' },
  { id: 'geometry', en: 'Plane and space geometry', fr: 'Géométrie plane et dans l’espace' },
  { id: 'calculus', en: 'Calculus', fr: 'Analyse' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

const PURE = PURE_L6.map((t) => ({ ...t, form: 'Lower Sixth', vr: null }));

export const pureUnits = (prefix) => PURE.map(({ key, ...t }) => ({ id: `${prefix}-${key}`, ...t }));
