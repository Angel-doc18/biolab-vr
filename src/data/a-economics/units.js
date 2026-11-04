// GCE Advanced Level Economics (0725) by class: the Lower Sixth and Upper
// Sixth topics of the 2026/2027 harmonised scheme of work, grouped as skills,
// consumers and producers, market structures and factor markets, market
// failure, macroeconomics, and trade and development. Where the scheme and the
// official syllabus or GCE timetable differ, the official documents win (the
// scheme writes the code as "725"; the GCE Board's code is 0725).
// Unit ids start with "aec-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'skills', en: 'Data response, essays and examination skills', fr: 'Analyse de documents, dissertation et méthode' },
  { id: 'micro', en: 'Consumers, producers and costs', fr: 'Consommateurs, producteurs et coûts' },
  { id: 'markets', en: 'Market structures and factor markets', fr: 'Structures de marché et marchés des facteurs' },
  { id: 'welfare', en: 'Market failure and the state', fr: 'Défaillances du marché et rôle de l’État' },
  { id: 'macro', en: 'National income, money and public finance', fr: 'Revenu national, monnaie et finances publiques' },
  { id: 'global', en: 'Trade, population and development', fr: 'Commerce, population et développement' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
