// Literature in English by class: Forms 1 and 2 from the MINESEC curriculum
// for the observation sub-cycle and their schemes of work, Forms 3 to 5 from
// the 2026/2027 national harmonised schemes of work (Form 3 with the detail of
// a school scheme), organised by genre. Each topic carries the term and
// sequence in which it is taught. Set books change with the MINESEC national
// booklist, so lessons teach methods that apply to any prescribed text.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';
import { UNITS_3 } from './units3';
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'basics', en: 'Literary terms and essay writing', fr: 'Notions littéraires et dissertation' },
  { id: 'oral', en: 'Oral literature', fr: 'Littérature orale' },
  { id: 'drama', en: 'Drama', fr: 'Théâtre' },
  { id: 'prose', en: 'Prose', fr: 'Prose' },
  { id: 'poetry', en: 'Poetry', fr: 'Poésie' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_1, ...UNITS_2, ...UNITS_3, ...UNITS_4, ...UNITS_5];
