// GCE Advanced Level Philosophy (0790) by class: the Lower Sixth and Upper
// Sixth topics of the 2026/2027 harmonised scheme of work, grouped as method,
// philosophical anthropology, metaphysics, epistemology, political
// philosophy, ethics and African philosophy. Where the scheme and the
// official syllabus or GCE timetable differ, the official documents win (the
// scheme writes the code as "790"; the GCE Board's code is 0790).
// Unit ids start with "aph-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'skills', en: 'Method: dissertation, commentary and examination', fr: 'Méthode : dissertation, commentaire et examen' },
  { id: 'man', en: 'Philosophical anthropology', fr: 'Anthropologie philosophique' },
  { id: 'metaphysics', en: 'Metaphysics', fr: 'Métaphysique' },
  { id: 'knowledge', en: 'Epistemology and the philosophy of science', fr: 'Épistémologie et philosophie des sciences' },
  { id: 'politics', en: 'Political philosophy', fr: 'Philosophie politique' },
  { id: 'ethics', en: 'Moral philosophy', fr: 'Philosophie morale' },
  { id: 'african', en: 'African philosophy', fr: 'Philosophie africaine' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
