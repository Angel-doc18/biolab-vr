// Extra end-of-lesson questions, by lesson id, from each subject (see
// src/lib/lessonQuiz.js for how a lesson's questions are put together).
import { LESSON_QUESTIONS as BIOLOGY } from './biology/lessonQuestions';
import { LESSON_QUESTIONS as CHEMISTRY } from './chemistry/lessonQuestions';
import { LESSON_QUESTIONS as PHYSICS } from './physics/lessonQuestions';
import { LESSON_QUESTIONS as HUMANBIO } from './humanbio/lessonQuestions';
import { LESSON_QUESTIONS as A_PHYSICS } from './a-physics/lessonQuestions';
import { LESSON_QUESTIONS as A_CHEMISTRY } from './a-chemistry/lessonQuestions';
import { LESSON_QUESTIONS as COMPUTER } from './computer/lessonQuestions';
import { LESSON_QUESTIONS as GEOGRAPHY } from './geography/lessonQuestions';
import { LESSON_QUESTIONS as HOMEEC } from './homeec/lessonQuestions';
import { LESSON_QUESTIONS as MATHS } from './maths/lessonQuestions';
import { LESSON_QUESTIONS as ENGLISH } from './english/lessonQuestions';
import { LESSON_QUESTIONS as FRENCH } from './french/lessonQuestions';
import { LESSON_QUESTIONS as LITERATURE } from './literature/lessonQuestions';
import { LESSON_QUESTIONS as HISTORY } from './history/lessonQuestions';
import { LESSON_QUESTIONS as ECONOMICS } from './economics/lessonQuestions';
import { LESSON_QUESTIONS as COMMERCE } from './commerce/lessonQuestions';
import { LESSON_QUESTIONS as CITIZENSHIP } from './citizenship/lessonQuestions';
import { LESSON_QUESTIONS as GEOLOGY } from './geology/lessonQuestions';
import { LESSON_QUESTIONS as LOGIC } from './logic/lessonQuestions';

export const LESSON_QUESTIONS = { ...BIOLOGY, ...CHEMISTRY, ...PHYSICS, ...HUMANBIO, ...A_PHYSICS, ...A_CHEMISTRY, ...COMPUTER, ...GEOGRAPHY, ...HOMEEC, ...MATHS, ...ENGLISH, ...FRENCH, ...LITERATURE, ...HISTORY, ...ECONOMICS, ...COMMERCE, ...CITIZENSHIP, ...GEOLOGY, ...LOGIC };
