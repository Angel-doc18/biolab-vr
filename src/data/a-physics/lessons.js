// Every A Level Physics lesson: Lower Sixth (lessonsL6.js, with lessons added
// for the 2026/2027 scheme in lessonsL6b.js) and Upper Sixth (lessonsU6.js).
// Each class topic in units.js lists its lessons by id.
import { LESSONS_L6 } from './lessonsL6';
import { LESSONS_L6B } from './lessonsL6b';
import { LESSONS_U6 } from './lessonsU6';

export const LESSONS = [...LESSONS_L6, ...LESSONS_L6B, ...LESSONS_U6];
