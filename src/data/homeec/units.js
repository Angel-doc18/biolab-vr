// Home Economics by class, following the MINESEC harmonised Home Economics scheme
// for Form 2. Each topic carries the term in which it is taught. Home Economics
// leads on to GCE O Level Food and Nutrition.
import { UNITS_2 } from './units2';

export const GROUPS = [
  { id: 'food', en: 'Health, food and nutrition', fr: 'Santé, alimentation et nutrition' },
  { id: 'home', en: 'Family and home management', fr: 'Gestion de la famille et du foyer' },
  { id: 'textiles', en: 'Textiles and clothing', fr: 'Textiles et habillement' },
  { id: 'consumer', en: 'Consumer education', fr: 'Éducation du consommateur' },
  { id: 'child', en: 'Child development and care', fr: 'Développement et soins de l’enfant' },
  { id: 'cookery', en: 'Basic cookery and meal service', fr: 'Cuisine de base et service de table' },
];

export const units = [...UNITS_2];
