// Used by fapshi-sandbox-test.sh on the server (inside the klass8-api container):
// runs Klass8's own Direct Pay code against Fapshi's SANDBOX, with test money
// only. Fapshi asks for this before it switches Direct Pay on for the live
// service. The sandbox API user and key come in on stdin (one per line); they
// are used for this run only and never stored or printed. The live keys, the
// database and real payments are not touched.
//   printf '%s\n%s\n' USER KEY | node server/fapshi-sandbox-test.mjs
import { directPay, paymentStatus } from '../src/lib/providers.js';

const input = await new Promise((resolve) => {
  let s = '';
  process.stdin.on('data', (d) => (s += d));
  process.stdin.on('end', () => resolve(s));
});
const [user, key] = input.split('\n').map((s) => s.trim());
if (!user || !key) {
  console.error('The sandbox API user and key are both needed. Nothing was sent.');
  process.exit(1);
}
const env = { FAPSHI_ENV: 'sandbox', FAPSHI_API_USER: user, FAPSHI_API_KEY: key, FAPSHI_WEBHOOK_SECRET: 'sandbox-test' };

// Fapshi's sandbox test numbers: these always succeed or always fail.
const cases = [
  ['MTN Mobile Money, expected to succeed', '237670000000', 'mobile money', 'SUCCESSFUL'],
  ['Orange Money, expected to succeed', '237690000000', 'orange money', 'SUCCESSFUL'],
  ['MTN Mobile Money, expected to fail', '237670000001', 'mobile money', 'FAILED'],
];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const done = ['SUCCESSFUL', 'FAILED', 'EXPIRED'];

let passed = 0;
for (const [label, phone, medium, want] of cases) {
  try {
    const r = await directPay(env, {
      amount: 100,
      phone,
      medium,
      userId: 'sandbox-test',
      externalId: `sandbox-${Date.now()}`,
      message: 'Klass8 sandbox test',
      name: 'Klass8 test',
    });
    let status = 'PENDING';
    for (let i = 0; i < 20 && !done.includes(status); i++) {
      await sleep(3000);
      status = (await paymentStatus(env, r.transId))?.status || 'PENDING';
    }
    const ok = status === want;
    if (ok) passed++;
    console.log(`${ok ? 'PASS ' : 'CHECK'} ${label}: ${status} (Fapshi transaction ${r.transId})`);
  } catch (e) {
    console.log(`ERROR ${label}: ${e?.message || e}`);
  }
}
console.log(`\n${passed} of ${cases.length} sandbox checks passed.`);
process.exit(passed === cases.length ? 0 : 1);
