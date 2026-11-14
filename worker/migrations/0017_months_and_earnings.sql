-- A monthly plan can be paid for several months at once.
ALTER TABLE payments ADD COLUMN months INTEGER NOT NULL DEFAULT 1;
-- The part of a payment covered by partner earnings (the rest is mobile money).
ALTER TABLE payments ADD COLUMN credit INTEGER NOT NULL DEFAULT 0;
-- Earnings used for a payment: 'held' while the mobile money part is pending,
-- 'spent' once it went through (released as 'cancelled' if it failed).
ALTER TABLE withdrawals ADD COLUMN payment_id TEXT;
CREATE INDEX IF NOT EXISTS withdrawals_payment ON withdrawals (payment_id);
-- Renew from earnings by itself when time runs out (each person can turn it off).
ALTER TABLE users ADD COLUMN ref_autopay INTEGER NOT NULL DEFAULT 1;
