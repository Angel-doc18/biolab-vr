// GCE Advanced Level Computer Science (0795) by class: the Lower Sixth and
// Upper Sixth topics of the 2026/2027 harmonised scheme of work. Unit ids start
// with "acs-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'data', en: 'Data representation', fr: 'Représentation des données' },
  { id: 'databases', en: 'Databases', fr: 'Bases de données' },
  { id: 'systems', en: 'Computer systems and architecture', fr: 'Systèmes informatiques et architecture' },
  { id: 'software', en: 'System software', fr: 'Logiciels système' },
  { id: 'networks', en: 'Networks and communication', fr: 'Réseaux et communication' },
  { id: 'security', en: 'Security and the law', fr: 'Sécurité et droit' },
  { id: 'algorithms', en: 'Data structures and algorithms', fr: 'Structures de données et algorithmes' },
  { id: 'programming', en: 'Programming', fr: 'Programmation' },
  { id: 'engineering', en: 'Software engineering and the project', fr: 'Génie logiciel et projet' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
