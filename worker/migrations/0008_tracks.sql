-- How a student's school organises their studies: general or technical school,
-- the technical stream and specialty, and the Sixth Form series (A1 to A5,
-- S1 to S8). All optional; a missing school type means a general school.
ALTER TABLE users ADD COLUMN school_type TEXT;
ALTER TABLE users ADD COLUMN stream TEXT;
ALTER TABLE users ADD COLUMN specialty TEXT;
ALTER TABLE users ADD COLUMN series TEXT;
