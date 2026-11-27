-- Tests a teacher gives a class from the Assistant. The test is a quiz made
-- from the teacher's notes; it is set as an assignment (kind 'quiz') whose ref
-- is the test id ('t-' and 32 hex). Each student hands in once; multiple
-- choice is marked at once, written answers by the AI against the scheme.
CREATE TABLE class_tests (
  id TEXT PRIMARY KEY,
  teacher_id TEXT NOT NULL,
  title TEXT NOT NULL,
  subject TEXT,
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX idx_class_tests_teacher ON class_tests(teacher_id);

CREATE TABLE test_answers (
  assignment_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  answers TEXT NOT NULL,
  marks TEXT NOT NULL,
  score INTEGER NOT NULL,
  submitted_at INTEGER NOT NULL,
  PRIMARY KEY (assignment_id, student_id)
);
