-- Several sciences: the subjects a student takes, each class's subject, and
-- per-subject progress numbers for teachers and parents.
ALTER TABLE users ADD COLUMN subjects TEXT;
ALTER TABLE classes ADD COLUMN subject TEXT NOT NULL DEFAULT 'biology';
ALTER TABLE progress ADD COLUMN subject_stats TEXT;
