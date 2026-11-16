// Home Economics by class, following the MINESEC harmonised Home Economics schemes
// for Forms 1 and 2. Each topic carries the term in which it is taught. Home
// Economics leads on to GCE O Level Food and Nutrition.
import { UNITS_1 } from './units1';
import { UNITS_2 } from './units2';

export const GROUPS = [
  { id: 'intro', en: 'Introduction to Home Economics', fr: 'Introduction à l’économie sociale et familiale' },
  { id: 'hygiene', en: 'Personal and environmental hygiene', fr: 'Hygiène personnelle et du milieu' },
  { id: 'food', en: 'Health, food and nutrition', fr: 'Santé, alimentation et nutrition' },
  { id: 'home', en: 'Family and home management', fr: 'Gestion de la famille et du foyer' },
  { id: 'textiles', en: 'Textiles and clothing', fr: 'Textiles et habillement' },
  { id: 'consumer', en: 'Consumer education', fr: 'Éducation du consommateur' },
  { id: 'child', en: 'Child development and care', fr: 'Développement et soins de l’enfant' },
  { id: 'cookery', en: 'Basic cookery and meal service', fr: 'Cuisine de base et service de table' },
  { id: 'kitchen', en: 'The kitchen and its safety', fr: 'La cuisine et la sécurité' },
  { id: 'exam', en: 'Revision', fr: 'Révision' },
];

export const units = [...UNITS_1, ...UNITS_2];
