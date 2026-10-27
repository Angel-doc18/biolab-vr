// GCE Advanced Level Further Mathematics (0775): the Further Pure Mathematics
// and Further Mechanics topics of the Lower Sixth and the Upper Sixth (ids
// "fm-"), numbered together in the order the scheme teaches them. Topics
// shared with Pure Mathematics (0765/0770) list the same lessons; the further
// topics have their own lessons in this folder.
import { ownUnits } from '../a-maths/pure';
import { FP_L6, FP_U6 } from './furtherPure';
import { FM_L6, FM_U6 } from './furtherMech';

export const GROUPS = [
  { id: 'algebra', en: 'Algebra and logic', fr: 'Algèbre et logique' },
  { id: 'numbers', en: 'Complex numbers', fr: 'Nombres complexes' },
  { id: 'geometry', en: 'Geometry and coordinates', fr: 'Géométrie et coordonnées' },
  { id: 'calculus', en: 'Calculus', fr: 'Analyse' },
  { id: 'structures', en: 'Linear algebra and groups', fr: 'Algèbre linéaire et groupes' },
  { id: 'kinematics', en: 'Kinematics', fr: 'Cinématique' },
  { id: 'dynamics', en: 'Dynamics', fr: 'Dynamique' },
  { id: 'statics', en: 'Statics', fr: 'Statique' },
  { id: 'exam', en: 'Examination practice', fr: 'Préparation aux examens' },
];

export const units = [...ownUnits('fm', [...FP_L6, ...FM_L6], 'Lower Sixth'), ...ownUnits('fm', [...FP_U6, ...FM_U6], 'Upper Sixth')];
