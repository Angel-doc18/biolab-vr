// Builds the public Klass8 website (klass8.ebenesaid.com) into website/dist.
//
//   node website/build.js
//
// The counts, subjects and the heart diagram come from the app's own data, so
// the site always shows what the app really contains. The policy pages and the
// shared header and footer are in pages.js; the business details in business.js.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Module = require('module');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
require(path.join(ROOT, 'node_modules/sucrase/register'));
const React = require(path.join(ROOT, 'node_modules/react'));
global.React = React;
const { renderToStaticMarkup } = require(path.join(ROOT, 'node_modules/react-dom/server'));

// The app's drawings use react-native-svg; here they become plain SVG.
const tag = (t) => ({ children, ...p }) => React.createElement(t, p, children);
const svg = {
  __esModule: true,
  default: ({ children, viewBox }) => React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox }, children),
  Circle: tag('circle'),
  Ellipse: tag('ellipse'),
  G: ({ children, onPress, ...p }) => React.createElement('g', p, children),
  Line: tag('line'),
  Path: tag('path'),
  Rect: tag('rect'),
  Polygon: tag('polygon'),
  Polyline: tag('polyline'),
  Text: tag('text'),
  TSpan: tag('tspan'),
  Defs: tag('defs'),
  LinearGradient: tag('linearGradient'),
  RadialGradient: tag('radialGradient'),
  Stop: tag('stop'),
  ClipPath: tag('clipPath'),
};
const rn = { __esModule: true, View: ({ children }) => React.createElement(React.Fragment, null, children), Platform: { OS: 'web' } };
const stub = new Proxy({}, { get: (t, k) => (k === '__esModule' ? true : k === 'default' ? stub : function Stub() { return null; }) });
const load = Module._load;
Module._load = function (request, parent, isMain) {
  if (request === 'react-native-svg') return svg;
  if (request === 'react-native') return rn;
  if (request.endsWith('/i18n') || request.startsWith('expo') || request.startsWith('@expo') || request === 'twrnc' || request.includes('/ui/') || request.includes('/state/') || request.includes('/api/')) return stub;
  return load.call(this, request, parent, isMain);
};

const { LESSONS } = require(path.join(ROOT, 'src/data/lessons.js'));
const { units, formsFor, unitsForForm, byPlace, placeIn } = require(path.join(ROOT, 'src/data/units.js'));
const { SUBJECTS } = require(path.join(ROOT, 'src/data/subjects.js'));
const { DiagramView } = require(path.join(ROOT, 'src/diagrams/Diagram.js'));
const { DIAGRAMS } = require(path.join(ROOT, 'src/diagrams/index.js'));
const ANATOMY = require(path.join(ROOT, 'src/three/anatomy.json'));
const { TERMS, PRIVACY } = require(path.join(ROOT, 'src/screens/me/Legal.js'));
const { PLANS, fcfa } = require(path.join(ROOT, 'src/data/plan.js'));
const { MARK } = require(path.join(ROOT, 'src/ui/brand.js'));
const BUSINESS = require('./business.js');
const PAGES = require('./pages.js');
const SCREEN = require('./screens.js');
const INTRO = require('./intro.js');
const { readMp3 } = require('./mp3len.js');

// Who sells Klass8. The business name, email and phone are shown wherever they
// are filled in; without them the contact page offers only its form.
const B = { ...BUSINESS };
const missing = ['name', 'email', 'phone', 'town'].filter((k) => !String(B[k] || '').trim());
if (missing.length) console.warn(`website/business.js: not filled in yet: ${missing.join(', ')}`);

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// The K8 mark (navy K with its cap, amber 8), as in the app.
const [mx, my, mx2, my2] = MARK.box;
const markSvg = `<svg class="mark" viewBox="${mx} ${my} ${mx2 - mx} ${my2 - my}" aria-hidden="true">${MARK.parts.map((p) => `<path fill="${p.fill}" d="${p.d}"/>`).join('')}</svg>`;

// What the app holds, counted from its own data.
const lessonById = new Map(LESSONS.map((l) => [l.id, l]));
const open = SUBJECTS.filter((s) => s.available);
const openIds = new Set(open.map((s) => s.id));
const openUnits = units.filter((u) => openIds.has(u.subject));
const lessonIds = new Set(openUnits.flatMap((u) => u.lessonIds || []).filter((id) => lessonById.has(id)));
const questions = openUnits.reduce((n, u) => n + (u.quiz?.length || 0), 0) + [...lessonIds].reduce((n, id) => n + (lessonById.get(id).questions?.length || 0), 0);
const n = (x) => x.toLocaleString('en-GB');
const raw = { LESSONS_N: lessonIds.size, QUESTIONS_N: questions, DIAGRAMS_N: Object.keys(DIAGRAMS).length };
const stats = {
  lessons: n(lessonIds.size),
  questions: n(questions),
  diagrams: n(Object.keys(DIAGRAMS).length),
  models: n(Object.keys(ANATOMY.models).length),
  subjects: n(open.length),
};

// The subjects, by level, as chips.
const chips = (level) =>
  open
    .filter((s) => s.level === level)
    .map((s) => `<li><a href="/subjects#s-${s.id}">${esc(s.en)}</a></li>`)
    .join('');

// Every topic of every open subject, class by class and term by term, for the
// syllabus browser on the subjects page: [title, term, lessons].
const syllabus = open.map((s) => {
  const forms = formsFor(s.id).filter((f) => !s.classes || s.classes.includes(f));
  const list = (form) =>
    unitsForForm(s.id, form)
      .sort(form ? byPlace(form) : (a, b) => (a.n ?? 0) - (b.n ?? 0))
      .map((u) => [u.title, (form ? placeIn(u, form).term : u.term) || 0, (u.lessonIds || []).filter((id) => lessonById.has(id)).length]);
  const whole = s.level === 'A' ? 'Lower and Upper Sixth' : 'Form 1 to Form 5';
  return { id: s.id, name: s.en, level: s.level, forms: forms.length ? Object.fromEntries(forms.map((f) => [f, list(f)])) : { [whole]: list(null) } };
});
const syllabusJson = JSON.stringify(syllabus).replace(/</g, '\\u003c');

// The heart, drawn by the app's own diagram code, with its exam labels.
const heart = renderToStaticMarkup(React.createElement(DiagramView, { spec: DIAGRAMS['heart-section'] })).replace('<svg ', '<svg role="img" aria-label="Labelled vertical section through the mammalian heart" ');

// The same heart, small and silent, for the lesson inside the phone.
const heartSmall = heart.replace(' role="img" aria-label="Labelled vertical section through the mammalian heart"', ' aria-hidden="true" focusable="false"');

// The home hero's speaking buttons: the tutor explains Klass8 in English or in
// French, one clip per sentence, with the sentence shown as a caption.
const attr = (s) => esc(s).replace(/"/g, '&quot;');
const play = '<svg class="i-play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg><svg class="i-pause" viewBox="0 0 24 24"><path d="M6.5 5h4v14h-4zM13.5 5h4v14h-4z" fill="currentColor"/></svg>';
// The sentences of a language are joined into one file (frames copied as they
// are), so one tap plays them all on every phone, with no gaps while loading.
const joined = {};
const joinIntro = (key) => {
  if (joined[key]) return joined[key];
  const parts = INTRO[key].lines.map((t, i) => ({ t, ...readMp3(path.join(SRC, 'audio', `intro-${key}-${i + 1}.mp3`)) }));
  const data = Buffer.concat(parts.flatMap((pt) => pt.frames));
  fs.mkdirSync(path.join(DIST, 'audio'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'audio', `intro-${key}.mp3`), data);
  let at = 0;
  const cues = parts.map((pt) => {
    const cue = [+at.toFixed(2), pt.t];
    at += pt.seconds;
    return cue;
  });
  const v = crypto.createHash('sha1').update(data).digest('hex').slice(0, 10);
  return (joined[key] = { src: `/audio/intro-${key}.mp3?v=${v}`, cues, total: at });
};
const speak = (key) => {
  const v = INTRO[key];
  const { src, cues, total } = joinIntro(key);
  const secs = Math.round(total);
  const note = key === 'fr' ? `Klass8 en ${secs} secondes` : `Klass8 in ${secs} seconds`;
  return `<button class="speak__btn" type="button" lang="${v.lang}" data-src="${src}" data-cues="${attr(JSON.stringify(cues))}" data-total="${total.toFixed(2)}" data-note="${attr(note)}">
        <span class="speak__icon" aria-hidden="true"><svg class="speak__ring" viewBox="0 0 52 52"><circle cx="26" cy="26" r="24"/><circle class="speak__prog" cx="26" cy="26" r="24" pathLength="100"/></svg>${play}</span>
        <span class="speak__txt"><b>${esc(v.label)}</b><small data-speak-note>${esc(note)}</small></span>
        <span class="speak__wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
      </button>`;
};
const transcript = `<dialog class="tx" id="transcript" aria-labelledby="tx-title">
  <div class="tx__head">
    <h2 id="tx-title">What the tutor says</h2>
    <button class="tx__close" type="button" data-tx-close aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
  </div>
  <div class="tx__cols">
    ${['en', 'fr'].map((k) => `<section lang="${k}"><h3>${k === 'fr' ? 'En français' : 'In English'}</h3>${INTRO[k].lines.map((l) => `<p>${esc(l)}</p>`).join('')}</section>`).join('\n    ')}
  </div>
</dialog>`;

const site = PAGES.make({ B, terms: TERMS, privacy: PRIVACY, priceMonth: fcfa(PLANS.month.amount), priceYear: fcfa(PLANS.year.amount), mark: markSvg });

const fill = {
  ...stats,
  ...raw,
  MARK: markSvg,
  PLANS: site.plans,
  HEART: heart,
  SUBJECTS_O: chips('O'),
  SUBJECTS_A: chips('A'),
  TRANSCRIPT: transcript,
  SYLLABUS: `<script type="application/json" id="syllabus-data">${syllabusJson}</script>`,
  PRICE_MONTH: esc(fcfa(PLANS.month.amount)),
  PRICE_YEAR: esc(fcfa(PLANS.year.amount)),
  CONTACT_CARDS: site.contactCards,
  WHO: esc(site.who),
  HOURS: esc(site.hours),
};
const fillIn = (html) =>
  html
    .replace(/\{\{SPEAK:(en|fr)\}\}/g, (m, k) => speak(k))
    .replace(/\{\{SCREEN:(\w+)\}\}/g, (m, name) => SCREEN(name, { heart: heartSmall, priceYear: esc(fcfa(PLANS.year.amount)) }))
    // A photo set as --img (or --next, loaded later) also gets a phone-sized copy, --img-s.
    .replace(/--(img|next): \{\{IMG:([\w-]+)\}\}/g, (m, v, id) => `--${v}: ${PAGES.photo(id)}; --${v}-s: ${PAGES.photo(id, 800)}`)
    .replace(/\{\{IMG:([\w-]+)\}\}/g, (m, id) => PAGES.photo(id))
    .replace(/\{\{CRUMBS:([^}]+)\}\}/g, (m, title) => PAGES.crumbs(title))
    .replace(/\{\{SAY:([\w-]+)\|([^|}]+)\|([^|}]+)(\|light)?\}\}/g, (m, clip, title, note, light) => PAGES.say(clip, title, note, !!light))
    .replace(/\{\{(\w+)\}\}/g, (m, k) => (k in fill ? fill[k] : m));

// A page: the shared head, header and footer around its own content.
const shell = ({ title, desc, url, body, lcp }) => `<!doctype html>
<html lang="en">
<head>
${site.head(title, desc, url, lcp)}
</head>
<body>
<a class="skip" href="#main">Skip to the content</a>
${site.header}
<main id="main">
${body}
</main>
${site.footer}
</body>
</html>
`;

// ---------- write the site ----------
fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(SRC, DIST, { recursive: true, filter: (f) => !f.includes(`${path.sep}pages`) && !/intro-(en|fr)-\d+\.mp3$/.test(f) });
const write = (file, data) => fs.writeFileSync(path.join(DIST, file), data);
write('img/mark.svg', markSvg.replace('<svg class="mark" ', '<svg xmlns="http://www.w3.org/2000/svg" ').replace(' aria-hidden="true"', ''));

const pages = [];
for (const file of fs.readdirSync(path.join(SRC, 'pages')).filter((f) => f.endsWith('.html'))) {
  const raw = fs.readFileSync(path.join(SRC, 'pages', file), 'utf8');
  const m = raw.match(/^<!--page (\{.*?\}) -->\r?\n/s);
  if (!m) throw new Error(`${file}: the first line must be <!--page {"title": ..., "desc": ...} -->`);
  const meta = JSON.parse(m[1]);
  const slug = file.replace(/\.html$/, '');
  pages.push({ file, title: meta.title, desc: meta.desc, url: slug === 'index' ? '/' : slug === 'download' ? '/download/' : `/${slug}`, body: raw.slice(m[0].length) });
}
for (const pol of site.policies) pages.push({ file: `${pol.slug}.html`, title: `${pol.title} | Klass8`, desc: pol.desc, url: `/${pol.slug}`, body: pol.body });

// Each page names its files with a fingerprint, so browsers keep them until they change.
const stamp = (file) => crypto.createHash('sha1').update(fs.readFileSync(path.join(DIST, file))).digest('hex').slice(0, 10);
for (const pg of pages) {
  const lcp = (pg.body.match(/--img: \{\{IMG:([\w-]+)\}\}/) || [])[1];
  let out = fillIn(shell({ ...pg, lcp }));
  out = fillIn(out);
  out = out.replace(/(href|src)="(\/?)([\w/.-]+\.(?:css|js))"/g, (m, attr, slash, file) => `${attr}="${slash}${file}?v=${stamp(file)}"`);
  const left = out.match(/\{\{[^}]+\}\}/);
  if (left) throw new Error(`${pg.file}: ${left[0]} was not filled`);
  write(pg.file, out);
}
console.log('website/dist:', pages.map((p) => p.file).join(', '));
console.log(stats);
