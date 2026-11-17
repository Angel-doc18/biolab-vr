// Economics by class, following the 2026/2027 national harmonised schemes of
// work: economics, economic systems, production and the scale of industry in
// Form 3; microeconomics, business and money in Form 4; macroeconomics, public
// finance and international trade in Form 5. Each topic carries the term and
// sequence in which it is taught.
import { UNITS_3 } from './units3';
import { UNITS_4 } from './units4';
import { UNITS_5 } from './units5';

export const GROUPS = [
  { id: 'intro', en: 'Economics and economic systems', fr: 'L’économie et les systèmes économiques' },
  { id: 'production', en: 'Production and its factors', fr: 'La production et ses facteurs' },
  { id: 'industry', en: 'Location and scale of industry', fr: 'Localisation et taille des industries' },
  { id: 'micro', en: 'Markets and production', fr: 'Marchés et production' },
  { id: 'business', en: 'Business organisation', fr: 'Organisation des entreprises' },
  { id: 'money', en: 'Money and banking', fr: 'Monnaie et banques' },
  { id: 'macro', en: 'The national economy', fr: 'L’économie nationale' },
  { id: 'public', en: 'Public finance', fr: 'Finances publiques' },
  { id: 'trade', en: 'International trade', fr: 'Commerce international' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...UNITS_3, ...UNITS_4, ...UNITS_5];
