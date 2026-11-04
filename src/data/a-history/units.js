// GCE Advanced Level History (0760) by class: the Lower Sixth and Upper Sixth
// topics of the 2026/2027 harmonised scheme of work, grouped as Cameroon,
// African and world history, with examination practice. Where the scheme and
// the official syllabus or GCE timetable differ, the official documents win.
// Unit ids start with "ahi-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'cameroon', en: 'Cameroon history', fr: 'Histoire du Cameroun' },
  { id: 'africa', en: 'African history', fr: 'Histoire de l’Afrique' },
  { id: 'world', en: 'World history', fr: 'Histoire du monde' },
  { id: 'exam', en: 'Method and examination practice', fr: 'Méthode et préparation aux examens' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
