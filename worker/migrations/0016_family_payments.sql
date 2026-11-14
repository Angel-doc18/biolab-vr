-- A parent can pay for their children (several at once). The payment belongs
-- to the parent who paid; these rows say whose accounts it opens.
CREATE TABLE IF NOT EXISTS payment_for (
  payment_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  PRIMARY KEY (payment_id, user_id)
);
CREATE INDEX IF NOT EXISTS payment_for_user ON payment_for (user_id);

-- From now on parents and teachers have one free month, then pay like
-- students. Those who joined more than a month ago get their free month from
-- today, and everyone concerned is told what changes and until when.
UPDATE users
SET pro_until = MAX(COALESCE(pro_until, 0), CAST(strftime('%s', 'now') AS INTEGER) * 1000 + 30 * 86400000)
WHERE role IN ('parent', 'teacher') AND deleted_at IS NULL AND created_at < CAST(strftime('%s', 'now') AS INTEGER) * 1000 - 30 * 86400000;

INSERT INTO notifications (id, user_id, kind, title, body, data, read, created_at)
SELECT lower(hex(randomblob(16))), id, 'payment', 'Platform charges for parents and teachers',
  'Lessons, practicals, papers and the tutor now have platform charges for parents and teachers too, as for students. Your account is fully open until '
    || strftime('%d/%m/%Y', MAX(COALESCE(pro_until, 0), created_at + 30 * 86400000) / 1000, 'unixepoch')
    || '. After that, pay by mobile money to keep them open. '
    || CASE role WHEN 'parent' THEN 'Your children''s reports stay free, and you can now pay for your children from your Home.' ELSE 'Your classes, the work you set and your students'' results stay free.' END,
  NULL, 0, CAST(strftime('%s', 'now') AS INTEGER) * 1000
FROM users WHERE role IN ('parent', 'teacher') AND deleted_at IS NULL;
