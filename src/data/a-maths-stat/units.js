// GCE Advanced Level Pure Mathematics with Statistics (0770): the Pure
// Mathematics topics shared with 0765 (ids "ms-"), and the Statistics and
// Probability topics of the Upper Sixth.
import { PURE_GROUPS, ownUnits, pureUnits } from '../a-maths/pure';
import { STAT_U6 } from './statU6';

export const GROUPS = [
  ...PURE_GROUPS.filter((g) => g.id !== 'exam'),
  { id: 'statistics', en: 'Statistics', fr: 'Statistiques' },
  { id: 'probability', en: 'Probability', fr: 'Probabilités' },
  ...PURE_GROUPS.filter((g) => g.id === 'exam'),
];

// The 0770 Upper Sixth scheme opens by revising the Lower Sixth calculus
// (weeks 2 to 4).
const REVISED = {
  'l6-differentiation': { n: 1, term: 1, seq: 1 },
  'l6-diff-applications': { n: 2, term: 1, seq: 1 },
  'l6-integration': { n: 3, term: 1, seq: 1 },
};

// Where the 0770 scheme teaches the shared Upper Sixth pure topics.
const PLACES = {
  'u6-integration': { n: 4, term: 1, seq: 1 },
  'u6-integration-apps': { n: 5, term: 1, seq: 1 },
  'u6-diff-equations': { n: 6, term: 1, seq: 1 },
  'u6-complex': { n: 7, term: 1, seq: 2 },
  'u6-complex-loci': { n: 8, term: 1, seq: 2 },
  'u6-planes': { n: 19, term: 2, seq: 4 },
  'u6-numerical': { n: 20, term: 2, seq: 4 },
  'u6-papers': { n: 21, term: 3, seq: 5 },
};

export const units = [...pureUnits('ms', REVISED, PLACES), ...ownUnits('ms', STAT_U6, 'Upper Sixth')];
