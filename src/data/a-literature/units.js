// GCE Advanced Level Literature in English (0735) by class: the Lower Sixth
// and Upper Sixth topics of the 2026/2027 harmonised scheme of work, organised
// by genre. Set books change with the MINESEC national booklist, so lessons
// teach methods that apply to any prescribed text. Unit ids start with "ali-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'basics', en: 'Critical terms, theory and essay writing', fr: 'Notions critiques, théorie et dissertation' },
  { id: 'drama', en: 'Drama', fr: 'Théâtre' },
  { id: 'prose', en: 'Prose', fr: 'Prose' },
  { id: 'poetry', en: 'Poetry', fr: 'Poésie' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
