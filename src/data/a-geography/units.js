// GCE Advanced Level Geography (0750) by class: the Lower Sixth and Upper
// Sixth topics of the 2026/2027 harmonised scheme of work, grouped as skills,
// physical, human and the geography of Cameroon. Where the scheme and the
// official syllabus or GCE timetable differ, the official documents win.
// Unit ids start with "agg-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'skills', en: 'Mapwork, statistics and examination skills', fr: 'Cartographie, statistiques et méthode' },
  { id: 'physical', en: 'Physical geography', fr: 'Géographie physique' },
  { id: 'human', en: 'Human geography', fr: 'Géographie humaine' },
  { id: 'cameroon', en: 'The geography of Cameroon', fr: 'Géographie du Cameroun' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
