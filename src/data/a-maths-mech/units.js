// GCE Advanced Level Pure Mathematics with Mechanics (0765): the Pure
// Mathematics topics shared with 0770 (ids "mm-"), and the Mechanics and
// Probability topics of the Upper Sixth.
import { PURE_GROUPS, ownUnits, pureUnits } from '../a-maths/pure';
import { MECH_U6 } from './mechU6';

export const GROUPS = [
  ...PURE_GROUPS.filter((g) => g.id !== 'exam'),
  { id: 'statics', en: 'Statics', fr: 'Statique' },
  { id: 'kinematics', en: 'Kinematics', fr: 'Cinématique' },
  { id: 'dynamics', en: 'Dynamics', fr: 'Dynamique' },
  { id: 'probability', en: 'Probability', fr: 'Probabilités' },
  ...PURE_GROUPS.filter((g) => g.id === 'exam'),
];

// The 0765 Upper Sixth scheme opens by revising the Lower Sixth calculus
// (weeks 2, 3 and 7).
const REVISED = {
  'l6-differentiation': { n: 1, term: 1, seq: 1 },
  'l6-diff-applications': { n: 2, term: 1, seq: 1 },
  'l6-integration': { n: 5, term: 1, seq: 2 },
};

export const units = [...pureUnits('mm', REVISED), ...ownUnits('mm', MECH_U6, 'Upper Sixth')];
