// GCE Advanced Level Further Mathematics (0775): the Further Pure Mathematics
// topics of the Lower Sixth and the Upper Sixth (ids "fm-"). Topics shared with
// Pure Mathematics (0765/0770) list the same lessons; the further topics have
// their own lessons in this folder.
import { ownUnits } from '../a-maths/pure';
import { FP_L6, FP_U6 } from './furtherPure';

export const GROUPS = [
  { id: 'algebra', en: 'Algebra and logic', fr: 'Algèbre et logique' },
  { id: 'numbers', en: 'Complex numbers', fr: 'Nombres complexes' },
  { id: 'geometry', en: 'Geometry and coordinates', fr: 'Géométrie et coordonnées' },
  { id: 'calculus', en: 'Calculus', fr: 'Analyse' },
  { id: 'structures', en: 'Linear algebra and groups', fr: 'Algèbre linéaire et groupes' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...ownUnits('fm', FP_L6, 'Lower Sixth'), ...ownUnits('fm', FP_U6, 'Upper Sixth')];
