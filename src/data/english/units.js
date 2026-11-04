// English Language by class: Forms 1 to 5 from the 2026/2027 national
// harmonised schemes of work (competency-based approach), with the detail of
// the schools' annual schemes for Forms 1 and 3, organised around the domains
// of life. Each topic carries the term and sequence in which it is taught, so
// class tests can follow the school year.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';
import { UNITS_3 } from './units3';
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'family', en: 'Family and social life', fr: 'Vie familiale et sociale' },
  { id: 'economic', en: 'Economic life and occupations', fr: 'Vie économique et métiers' },
  { id: 'environment', en: 'Environment, well-being and health', fr: 'Environnement, bien-être et santé' },
  { id: 'citizenship', en: 'Citizenship and human rights', fr: 'Citoyenneté et droits de l’homme' },
  { id: 'media', en: 'Media and communication', fr: 'Médias et communication' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_1, ...UNITS_2, ...UNITS_3, ...UNITS_4, ...UNITS_5];
