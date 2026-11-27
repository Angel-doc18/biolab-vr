-- A special partner (chosen by the founder or the CTO) can see the app as a
-- student, a teacher and a parent, with always-free preview accounts of their
-- own, so they can show every part of Klass8 when they advertise it.
ALTER TABLE users ADD COLUMN special_partner INTEGER NOT NULL DEFAULT 0;
