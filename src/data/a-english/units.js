// GCE Advanced Level English Language (0730) by class: the Lower Sixth and
// Upper Sixth topics of the 2026/2027 harmonised scheme of work, organised
// around the five domains of life, with grammar and speech work, writing and
// text skills, and examination practice. Unit ids start with "aen-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'family', en: 'Family and social life', fr: 'Vie familiale et sociale' },
  { id: 'economic', en: 'Economic life and occupations', fr: 'Vie économique et métiers' },
  { id: 'environment', en: 'Environment, well-being and health', fr: 'Environnement, bien-être et santé' },
  { id: 'citizenship', en: 'Citizenship and human rights', fr: 'Citoyenneté et droits de l’homme' },
  { id: 'media', en: 'Media and communication', fr: 'Médias et communication' },
  { id: 'language', en: 'Grammar and speech work', fr: 'Grammaire et phonétique' },
  { id: 'writing', en: 'Writing and text skills', fr: 'Écriture et travail sur texte' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
