// What search engines read: a page for every subject (its topics, class by
// class, straight from the app's data), structured data (the organisation, the
// website, the app, the questions and answers, and breadcrumbs on every page),
// the sitemap and robots.txt. Used by build.js.
const path = require('path');
const ROOT = path.join(__dirname, '..');
const { SUBJECTS } = require(path.join(ROOT, 'src/data/subjects.js'));
const { formsFor, unitsForForm } = require(path.join(ROOT, 'src/data/units.js'));
const { PLANS } = require(path.join(ROOT, 'src/data/plan.js'));

const SITE = 'https://klass8.com';
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');
const levelName = (s) => (s.level === 'A' ? 'A Level' : 'O Level');
const exam = (s) => `GCE ${levelName(s)} ${s.en}${s.code ? ` (${s.code})` : ''}`;
const slug = (s) => s.id;
const range = (forms) => (forms.length > 1 ? `${forms[0]} to ${forms[forms.length - 1]}` : forms[0]);

// The subjects that have topics in the app, with what each class studies.
function subjects() {
  const out = [];
  for (const s of SUBJECTS) {
    if (s.available === false) continue;
    const forms = formsFor(s.id) || [];
    if (!forms.length) continue;
    const classes = forms.map((form) => ({ form, topics: unitsForForm(s.id, form) || [] })).filter((c) => c.topics.length);
    if (!classes.length) continue;
    const ids = new Set();
    const lessons = new Set();
    for (const c of classes) for (const u of c.topics) {
      ids.add(u.id);
      for (const l of u.lessonIds || []) lessons.add(l);
    }
    out.push({ s, classes, topics: ids.size, lessons: lessons.size, forms: classes.map((c) => c.form) });
  }
  return out;
}

const crumbs = (name) =>
  `<nav class="crumbs" aria-label="You are here"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/subjects">Subjects</a><span aria-hidden="true">/</span><span>${esc(name)}</span></nav>`;

function subjectPage(x, all) {
  const { s, classes, topics, lessons, forms } = x;
  const name = exam(s);
  let title = `${name} revision | Klass8`;
  if (title.length > 60) title = `${name} | Klass8`;
  if (title.length > 60) title = `GCE ${levelName(s)} ${s.en} | Klass8`;
  if (title.length > 60) title = `${s.en} | Klass8`;
  let desc = `${s.en} for the GCE ${levelName(s)}${s.code ? ` (${s.code})` : ''} in Cameroon: ${topics} topics and ${lessons} lessons from ${range(forms)}, with labelled diagrams, quizzes and past-paper questions.`;
  if (desc.length > 160) desc = `${s.en}, GCE ${levelName(s)}, Cameroon: ${topics} topics and ${lessons} lessons from ${range(forms)}, with diagrams, quizzes and exam questions.`;
  if (desc.length > 160) desc = desc.slice(0, 157).replace(/\s+\S*$/, '') + '...';
  const list = classes
    .map(
      (c) => `<h2>${esc(c.form)}</h2>
<ol class="syl">${c.topics.map((u) => `<li><span>${esc(u.title)}</span>${u.term ? `<small>Term ${esc(u.term)}</small>` : ''}</li>`).join('')}</ol>`
    )
    .join('\n');
  const same = all.filter((o) => o.s.level === s.level && o.s.id !== s.id);
  const others = same.map((o) => `<a href="/subjects/${slug(o.s)}">${esc(o.s.en)}</a>`).join('');
  const body = `<section class="phero phero--plain"><div class="wrap phero__in">${crumbs(s.en)}<h1>${esc(name)}</h1><p>${esc(
    `${topics} topics and ${lessons} lessons from ${range(forms)}, in the order schools teach them, term by term.`
  )}</p></div></section>
<div class="wrap"><article class="prose subject">
<p>Klass8 covers the whole ${esc(name)} syllabus used in Cameroon. Each topic has lessons explained aloud with worked examples, labelled diagrams drawn for the exam, a quiz with an explanation for every answer and questions in the style of the GCE papers.</p>
${list}
<h2>Revise ${esc(s.en)} with Klass8</h2>
<p>Open any topic in the app, listen to your teacher explain it, then test yourself. Your progress shows what you have mastered and what to revise before the exam.</p>
<p class="subject__go"><a class="btn btn--amber" href="/download/">Download for Android</a><a class="btn btn--line" href="/app">Open the web app</a></p>
${others ? `<h2>Other ${esc(levelName(s))} subjects</h2>\n<p class="subject__more">${others}</p>` : ''}
</article></div>`;
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name,
      description: desc,
      provider: { '@type': 'Organization', name: 'Klass8', sameAs: SITE },
      educationalLevel: `GCE ${levelName(s)}`,
      inLanguage: 'en',
      url: `${SITE}/subjects/${slug(s)}`,
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', courseWorkload: `P${Math.max(1, Math.round(lessons / 4))}W` },
      offers: { '@type': 'Offer', category: 'Subscription', price: String(PLANS.month.amount), priceCurrency: 'XAF' },
    },
    breadcrumbs([['Subjects', '/subjects'], [s.en, `/subjects/${slug(s)}`]]),
  ];
  return { file: `subjects/${slug(s)}.html`, title, desc, url: `/subjects/${slug(s)}`, body, ldObjects: ld };
}

function breadcrumbs(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'], ...trail].map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE}${url}` })),
  };
}

// A page per subject, and the list of them on the subjects page ({{SUBJECT_LINKS}}).
function addSubjectPages(pages, fill) {
  const all = subjects();
  for (const x of all) pages.push(subjectPage(x, all));
  const group = (lvl, label) => {
    const items = all.filter((x) => (x.s.level === 'A') === (lvl === 'A'));
    if (!items.length) return '';
    return `<h3 class="subj-links__head">${label}</h3><div class="subj-links">${items
      .map((x) => `<a href="/subjects/${slug(x.s)}"><span>${esc(x.s.en)}</span><small>${x.topics} topics</small></a>`)
      .join('')}</div>`;
  };
  fill.SUBJECT_LINKS = `${group('O', 'GCE Ordinary Level')}${group('A', 'GCE Advanced Level')}`;
}

// Structured data for every page.
function addStructuredData(pages, fill = {}) {
  // Placeholders ({{PRICE_MONTH}}...) are filled in the page later; here they become plain text.
  const plain = (t) => t.replace(/\{\{(\w+)\}\}/g, (m, k) => (k in fill ? String(fill[k]) : '')).replace(/\{\{[^}]*\}\}/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').replace(/\s+([.,;:!?])/g, '$1').trim();
  for (const pg of pages) {
    const objs = pg.ldObjects ? [...pg.ldObjects] : [];
    if (pg.url === '/') {
      objs.push(
        { '@context': 'https://schema.org', '@type': 'Organization', name: 'Klass8', url: SITE, logo: `${SITE}/img/logo-512.png` },
        { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Klass8', url: SITE, inLanguage: 'en' }
      );
    }
    if (pg.url === '/' || pg.url === '/download/') {
      objs.push({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Klass8',
        operatingSystem: 'Android, Web',
        applicationCategory: 'EducationalApplication',
        description: 'Study app for Cameroon secondary schools: lessons read aloud, labelled diagrams, 3D models, practicals and GCE past-paper questions, from Form 1 to Upper Sixth.',
        url: SITE,
        offers: { '@type': 'Offer', price: String(PLANS.month.amount), priceCurrency: 'XAF' },
      });
    }
    if (pg.url === '/faq') {
      const qa = [...pg.body.matchAll(/<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)].map((m) => ({
        '@type': 'Question',
        name: plain(m[1]),
        acceptedAnswer: { '@type': 'Answer', text: plain(m[2]) },
      }));
      if (qa.length) objs.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qa });
    }
    if (pg.url !== '/' && !pg.ldObjects) objs.push(breadcrumbs([[pg.title.replace(/\s*\|\s*Klass8$/, '').replace(/^Klass8[: ]+/, ''), pg.url]]));
    pg.ld = objs.length ? json(objs.length === 1 ? objs[0] : objs) : '';
  }
}

// sitemap.xml and robots.txt
function writeIndexes(pages, write) {
  const day = new Date().toISOString().slice(0, 10);
  const prio = (u) => (u === '/' ? '1.0' : u.startsWith('/subjects/') ? '0.8' : ['/terms', '/privacy', '/refunds', '/delete-account'].includes(u) ? '0.3' : '0.7');
  const urls = pages
    .map((p) => p.url)
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))
    .map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${day}</lastmod><priority>${prio(u)}</priority></url>`)
    .join('\n');
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /v1/\nDisallow: /voice/\n\nSitemap: ${SITE}/sitemap.xml\n`);
}

module.exports = { addSubjectPages, addStructuredData, writeIndexes };
