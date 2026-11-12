// The parts every page shares (head, header, footer), the prices block used on
// the home and prices pages, the voice buttons, and the policy pages. Terms and
// privacy come from the app's Legal screen, so the two never differ.
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const FONTS = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Figtree:wght@400..800&display=swap';

// A photograph from Unsplash, sized for a full-width background.
const photo = (id) => `url('https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=65')`;

// A button that plays one of the tutor's recorded clips.
const say = (clip, title, note, light) => `<button class="chip-play${light ? ' chip-play--light' : ''}" type="button" data-audio="/audio/${clip}.mp3" aria-label="${esc(title)}: play the tutor's voice">
  <i><svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg><svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h5v16H6zM13 4h5v16h-5z" fill="currentColor"/></svg></i>
  <span>${esc(title)}</span><span class="sr" data-len>${esc(note)}</span>
</button>`;

// The small "Home > page" trail at the top of a page.
const crumbs = (title) => `<nav class="crumbs" aria-label="You are here"><a href="/">Home</a><span aria-hidden="true">/</span><span>${esc(title)}</span></nav>`;

function make({ B, terms, privacy, priceMonth, priceYear, mark }) {
  const who = B.name || 'Klass8';
  const has = (k) => !!String(B[k] || '').trim();
  const wa = B.whatsapp || B.phone;

  const head = (title, desc, url) => `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#011a52">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Klass8">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="https://klass8.ebenesaid.com${url}">
<link rel="canonical" href="https://klass8.ebenesaid.com${url}">
<link rel="icon" href="/img/mark.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="stylesheet" href="${FONTS}">
<script>document.documentElement.classList.add('js');setTimeout(function(){if(!window.K8)document.documentElement.classList.remove('js')},3000)</script>
<link rel="stylesheet" href="/site.css">
<script src="/site.js" defer></script>`;

  const header = `<header class="hd" data-hd>
  <div class="hd__in">
    <a class="logo" href="/" aria-label="Klass8 home">${mark}<span>Klass8</span></a>
    <nav class="hd__nav" id="menu" aria-label="Main">
      <a href="/features">Features</a>
      <a href="/subjects">Subjects</a>
      <a href="/pricing">Prices</a>
      <a href="/schools">Schools</a>
      <a href="/about">About</a>
    </nav>
    <div class="hd__act">
      <a class="btn btn--amber btn--sm" href="/download/">Download</a>
      <button class="hd__menu" type="button" aria-controls="menu" aria-expanded="false" data-menu>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <span class="sr">Menu</span>
      </button>
    </div>
  </div>
</header>`;


  const footer = `<footer class="ft">
  <div class="wrap">
    <div class="ft__top">
      <div class="ft__brand">
        <a class="logo logo--light" href="/" aria-label="Klass8 home">${mark}<span>Klass8</span></a>
        <p>The study app for secondary school students in Cameroon, from Form 1 to Upper Sixth.</p>
        <p class="ft__motto">Learn. Practise. Excel.</p>
      </div>
      <div class="ft__cols">
        <nav aria-label="Klass8">
          <h2>Klass8</h2>
          <a href="/features">Features</a>
          <a href="/subjects">Subjects</a>
          <a href="/pricing">Prices</a>
          <a href="/schools">Schools and parents</a>
          <a href="/about">About us</a>
        </nav>
        <nav aria-label="Help">
          <h2>Help</h2>
          <a href="/download/">Download for Android</a>
          <a href="/app">Open in your browser</a>
          <a href="/faq">Questions and answers</a>
          <a href="/contact">Contact us</a>
        </nav>
        <nav aria-label="Policies">
          <h2>Policies</h2>
          <a href="/terms">Terms of service</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/refunds">Refund policy</a>
          <a href="/delete-account">Delete your account</a>
        </nav>
      </div>
    </div>
    <div class="ft__base">
      <p>Klass8 follows the MINESEC syllabuses and prepares students for the GCE Board examinations. Payments by MTN Mobile Money and Orange Money are processed by Fapshi. Photographs from Unsplash. ${esc(who)}${has('town') ? `, ${esc(B.town)}` : ''}, ${esc(B.country)}.${has('email') ? ` ${esc(B.email)}.` : ''}</p>
      <p>© 2026 ${esc(who)}</p>
    </div>
  </div>
</footer>`;

  const plans = `<div class="plans">
      <article class="plan plan--free">
        <span class="plan__tag">Start here</span>
        <h3>Free month</h3>
        <p class="plan__price">0 <span>FCFA</span></p>
        <p class="plan__note">Everything open for 30 days from the day you sign up.</p>
        <ul>
          <li>Every subject for your class</li>
          <li>The tutor and the marking</li>
          <li>Nothing to pay</li>
        </ul>
        <a class="btn btn--amber" href="/download/">Start your free month</a>
      </article>
      <article class="plan">
        <h3>One month</h3>
        <p class="plan__price">${esc(priceMonth.replace(' FCFA', ''))} <span>FCFA</span></p>
        <p class="plan__note">30 days of everything. Pay again when you want more.</p>
        <ul>
          <li>No automatic renewal</li>
          <li>Starts after your free month</li>
          <li>MTN or Orange Money</li>
        </ul>
      </article>
      <article class="plan">
        <span class="plan__tag plan__tag--quiet">Best value</span>
        <h3>One year</h3>
        <p class="plan__price">${esc(priceYear.replace(' FCFA', ''))} <span>FCFA</span></p>
        <p class="plan__note">365 days of everything: two months free compared with paying each month.</p>
        <ul>
          <li>No automatic renewal</li>
          <li>Counts from the day you joined</li>
          <li>MTN or Orange Money</li>
        </ul>
      </article>
    </div>`;

  const sections = (list) => list.map(([h, p]) => `<h2>${esc(h)}</h2>\n<p>${esc(p)}</p>`).join('\n');
  const reach = has('email') ? `<a href="mailto:${esc(B.email)}">${esc(B.email)}</a>${has('phone') ? ` or ${esc(wa)} on WhatsApp` : ''}` : 'the <a href="/contact">contact form</a>';
  const updated = 'Last updated on 11 November 2026.';
  const plain = (title, intro) => `<section class="phero phero--plain"><div class="wrap phero__in">${crumbs(title)}<h1>${esc(title)}</h1><p>${intro}</p></div></section>`;

  // A policy page: its sections, with a list of them beside the text on wide screens.
  const slug = (t) => t.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const withToc = (html) => {
    const heads = [];
    const body = html.replace(/<h2>(.*?)<\/h2>/g, (m, t) => {
      heads.push([slug(t), t]);
      return `<h2 id="${slug(t)}">${t}</h2>`;
    });
    return `<div class="wrap policy"><nav class="toc" aria-label="On this page"><p>On this page</p>${heads.map(([id, t]) => `<a href="#${id}">${t}</a>`).join('')}</nav><article class="prose">${body}</article></div>`;
  };

  const policies = [
    {
      slug: 'terms',
      title: 'Terms of service',
      desc: 'The terms for using Klass8, the study app for secondary school students in Cameroon.',
      body: `${plain('Terms of service', `${updated} These terms apply to the Klass8 app and website, provided by ${esc(who)}.`)}
${withToc(`${sections(terms)}
<h2>Contact</h2><p>Questions about these terms: ${reach}.</p>`)}`,
    },
    {
      slug: 'privacy',
      title: 'Privacy policy',
      desc: 'How Klass8 collects, uses and protects personal data.',
      body: `${plain('Privacy policy', `${updated} ${esc(who)} is responsible for the personal data that Klass8 processes.`)}
${withToc(`${sections(privacy)}
<h2>Contact</h2><p>To see, correct or delete your data, or for any question about privacy: ${reach}.</p>`)}`,
    },
    {
      slug: 'refunds',
      title: 'Refund policy',
      desc: 'When and how Klass8 platform charges are refunded.',
      body: `${plain('Refund policy', `${updated} Every new student account starts with a free month, so you can try everything before paying.`)}
${withToc(`
<p>Klass8 sells access to its lessons, practicals, papers and tutor (the platform charges): ${esc(priceMonth)} for one month or ${esc(priceYear)} for one year.</p>
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
<p>Write to us through ${reach} with your name, the phone number of your Klass8 account and the payment reference. We answer within 2 working days.</p>
`)}`,
    },
    {
      slug: 'delete-account',
      title: 'Delete your account',
      desc: 'How to delete a Klass8 account and its data.',
      body: `${plain('Delete your account', 'You can delete your Klass8 account at any time. Deleting it removes your personal data from our servers.')}
${withToc(`
<h2>In the app</h2>
<ol>
<li>Open Klass8 and sign in.</li>
<li>Go to <strong>Me</strong>, then <strong>Account and security</strong>.</li>
<li>Tap <strong>Delete my account</strong> and confirm with your password.</li>
</ol>
<h2>Without the app</h2>
<p>Write to us through ${reach}, from the phone number of the account, asking us to delete it. We delete the account and its data within 7 days and tell you when it is done.</p>
<h2>What is removed, and what is kept</h2>
<p>We remove your name, phone number, email, school and class, your progress and your profile picture. Records of payments are kept for as long as the accounting law requires, without your lessons or progress.</p>
`)}`,
    },
  ];

  const contactCards = [
    has('email') ? `<div><dt>Email</dt><dd><a href="mailto:${esc(B.email)}">${esc(B.email)}</a></dd></div>` : '',
    has('phone') ? `<div><dt>Phone</dt><dd>${esc(B.phone)}</dd></div>` : '',
    has('phone') || has('whatsapp') ? `<div><dt>WhatsApp</dt><dd>${esc(wa)}</dd></div>` : '',
  ].join('');

  return { head, header, footer, plans, policies, contactCards: contactCards ? `<dl class="contact">${contactCards}</dl>` : '', who, hours: B.hours };
}

module.exports = { make, say, photo, esc, crumbs };
