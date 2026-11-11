// The site's own pages besides the home page: prices section text, contact,
// refund policy, account deletion, and the shared header and footer. Terms and
// privacy come from the app's Legal screen, so the two never differ.
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

function make({ B, terms, privacy, priceMonth, priceYear, mark }) {
  const who = B.name;
  const wa = B.whatsapp || B.phone;
  const contactLine = `${esc(B.email)} · ${esc(B.phone)}`;

  const header = `<header class="top">
  <div class="wrap top__row">
    <a class="brand" href="/" aria-label="Klass8 home">${mark}<span>Klass8</span></a>
    <nav class="nav" aria-label="Pages">
      <a href="/#pricing">Prices</a>
      <a href="/contact">Contact</a>
    </nav>
    <div class="top__actions">
      <a class="link" href="/app">Open the app</a>
      <a class="btn btn--small" href="/download/">Download</a>
    </div>
  </div>
</header>`;

  const footer = `<footer class="foot">
  <div class="wrap foot__grid">
    <div class="foot__brand">
      ${mark}
      <p>Klass8 follows the MINESEC syllabuses and prepares students for the GCE Board examinations.</p>
      <p>Klass8 is run by ${esc(who)}, ${esc(B.town)}, ${esc(B.country)}.<br>${contactLine}</p>
    </div>
    <nav class="foot__links" aria-label="About Klass8">
      <a href="/#pricing">Prices</a>
      <a href="/contact">Contact</a>
      <a href="/terms">Terms of service</a>
      <a href="/privacy">Privacy policy</a>
      <a href="/refunds">Refund policy</a>
      <a href="/delete-account">Delete your account</a>
      <a href="/download/">Download</a>
    </nav>
    <div class="foot__credits">
      <p>Payments by MTN Mobile Money and Orange Money are processed by Fapshi.</p>
      <p>3D heart: BodyParts3D, © The Database Center for Life Science, licensed CC BY-SA 2.1 Japan, simplified and coloured for Klass8.</p>
      <p>Tutor voice: Kokoro-82M, Apache License 2.0.</p>
      <p>© 2026 ${esc(who)}</p>
    </div>
  </div>
</footer>`;

  const page = (slug, title, desc, body) => ({
    file: `${slug}.html`,
    html: `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} | Klass8</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#02287B">
<link rel="icon" href="/img/mark.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap">
<link rel="stylesheet" href="/site.css">
</head>
<body>
<a class="skip" href="#main">Skip to the content</a>
${header}
<main id="main" class="doc wrap">
<h1>${esc(title)}</h1>
${body}
</main>
${footer}
</body>
</html>
`,
  });

  const sections = (list) => list.map(([h, p]) => `<h2>${esc(h)}</h2>\n<p>${esc(p)}</p>`).join('\n');
  const updated = '<p class="doc__meta">Last updated: 11 November 2026.</p>';

  const pages = [
    page('terms', 'Terms of service', 'The terms for using Klass8, the study app for secondary school students in Cameroon.', `${updated}\n<p>These terms apply to the Klass8 app and website, provided by ${esc(who)}.</p>\n${sections(terms)}\n<h2>Contact</h2>\n<p>Questions about these terms: ${contactLine}.</p>`),
    page('privacy', 'Privacy policy', 'How Klass8 collects, uses and protects personal data.', `${updated}\n<p>${esc(who)} is responsible for the personal data processed by Klass8.</p>\n${sections(privacy)}\n<h2>Contact</h2>\n<p>To see, correct or delete your data, or for any question about privacy: ${contactLine}.</p>`),
    page(
      'refunds',
      'Refund policy',
      'When and how Klass8 platform charges are refunded.',
      `${updated}
<p>Klass8 sells access to its digital lessons, practicals, papers and tutor (the platform charges): ${esc(priceMonth)} for one month or ${esc(priceYear)} for one year. Every new student account first gets a free month, so you can try everything before paying.</p>
<h2>Nothing is charged without your approval</h2>
<p>Each payment is a single request that you approve on your own phone with your mobile money PIN. Charges never renew automatically.</p>
<h2>A payment that did not open Klass8</h2>
<p>If money was taken from your mobile money account but Klass8 did not open, contact us within 14 days with your phone number and the payment reference shown in the app. We check the payment with Fapshi, our payment provider, and either open Klass8 on your account at once or refund the full amount to the same mobile money number within 7 working days.</p>
<h2>A payment made twice</h2>
<p>If you were charged twice for the same plan, contact us within 14 days. We refund the second payment in full to the same mobile money number within 7 working days, or add its days to your account if you prefer.</p>
<h2>A failed payment</h2>
<p>If a payment fails or is declined, no money is taken and no days are added. You can try again.</p>
<h2>Access already used</h2>
<p>Once a paid month or year has started, the days already given are not refunded, except where the law requires it or where Klass8 could not be used because of a fault on our side.</p>
<h2>School licences</h2>
<p>Licences bought by a school for its students are refunded according to the agreement made with that school.</p>
<h2>How to ask for a refund</h2>
<p>Write to ${esc(B.email)} or send a WhatsApp message to ${esc(wa)} with your name, the phone number of your Klass8 account and the payment reference. We answer within 2 working days.</p>`
    ),
    page(
      'contact',
      'Contact',
      'How to reach the Klass8 team.',
      `<p>Klass8 is run by <strong>${esc(who)}</strong>, ${esc(B.town)}, ${esc(B.country)}.</p>
<dl class="doc__contact">
<dt>Email</dt><dd><a href="mailto:${esc(B.email)}">${esc(B.email)}</a></dd>
<dt>Phone</dt><dd>${esc(B.phone)}</dd>
<dt>WhatsApp</dt><dd>${esc(wa)}</dd>
<dt>Hours</dt><dd>${esc(B.hours)}</dd>
</dl>
<h2>Help with a payment</h2>
<p>Send your name, the phone number of your Klass8 account and the payment reference shown in the app. See the <a href="/refunds">refund policy</a>.</p>
<h2>Schools</h2>
<p>Schools can give every student a Klass8 code paid by the school. Write to us with the name of your school and the number of students.</p>`
    ),
    page(
      'delete-account',
      'Delete your Klass8 account',
      'How to delete a Klass8 account and its data.',
      `<p>You can delete your Klass8 account at any time. Deleting it removes your personal data from our servers: your name, phone number, email, school and class, your progress and your profile picture.</p>
<h2>In the app</h2>
<ol>
<li>Open Klass8 and sign in.</li>
<li>Go to <strong>Me</strong>, then <strong>Account and security</strong>.</li>
<li>Tap <strong>Delete my account</strong> and confirm with your password.</li>
</ol>
<h2>Without the app</h2>
<p>Write to ${esc(B.email)} or send a WhatsApp message to ${esc(wa)} from the phone number of the account, asking us to delete it. We delete the account and its data within 7 days and confirm when it is done.</p>
<h2>What is kept</h2>
<p>Records of payments are kept for as long as the law on accounting requires, without your lessons or progress. Explanations the tutor wrote for shared questions are kept without anything that identifies you.</p>`
    ),
  ];

  const pricing = `<section class="section" id="pricing" aria-labelledby="pricing-title">
  <div class="wrap">
    <h2 id="pricing-title">Prices</h2>
    <p class="lead">One price opens everything: every subject, lesson, practical, 3D model and paper, with the tutor and marking.</p>
    <div class="plans">
      <article class="plan plan--free">
        <p class="plan__tag">Start here</p>
        <h3>Free month</h3>
        <p class="plan__price">0 FCFA</p>
        <p>Everything is open for 30 days from the day you sign up. Nothing to pay.</p>
      </article>
      <article class="plan">
        <h3>One month</h3>
        <p class="plan__price">${esc(priceMonth)}</p>
        <p>30 days of everything. Pay again each month. No automatic renewal.</p>
      </article>
      <article class="plan">
        <p class="plan__tag plan__tag--quiet">Best value</p>
        <h3>One year</h3>
        <p class="plan__price">${esc(priceYear)}</p>
        <p>365 days of everything, two months free compared with paying each month. No automatic renewal.</p>
      </article>
    </div>
    <div class="howpay">
      <h3>How payment works</h3>
      <ol>
        <li>In the app, open <strong>Platform charges</strong> and choose a plan.</li>
        <li>Choose MTN Mobile Money or Orange Money and enter your number.</li>
        <li>Approve the request on your phone with your PIN. Klass8 opens as soon as the payment is confirmed.</li>
      </ol>
      <p>Payments are processed by Fapshi, our payment provider. Klass8 never asks for or stores your PIN. Parent and teacher accounts are free. Schools can buy a code for each student: <a href="/contact">contact us</a>. Read the <a href="/refunds">refund policy</a>.</p>
    </div>
  </div>
</section>`;

  return { header, footer, pages, pricing };
}

module.exports = { make };
