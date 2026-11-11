// Builds the public Klass8 website (klass8.ebenesaid.com) into website/dist.
//
//   node website/build.js
//
// Every lesson, diagram, question and topic shown on the site is taken from the
// app's own data, so the site always shows what the app really contains. The
// spoken examples are listed in dist/voice.json; website/voice.py makes each
// clip once with the tutor's voice on the voice server (see website/deploy.sh).
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
const { units, unitById, unitsFor, formsFor, unitsForForm, placeIn, byPlace } = require(path.join(ROOT, 'src/data/units.js'));
const { SUBJECTS, CLASSES } = require(path.join(ROOT, 'src/data/subjects.js'));
const { forSpeech } = require(path.join(ROOT, 'src/lib/pronounce.js'));
const { DiagramView } = require(path.join(ROOT, 'src/diagrams/Diagram.js'));
const { DIAGRAMS } = require(path.join(ROOT, 'src/diagrams/index.js'));
const { LOGO_MARK } = require(path.join(ROOT, 'src/ui/logoPath.js'));
const ANATOMY = require(path.join(ROOT, 'src/three/anatomy.json'));
const { reportText } = require(path.join(ROOT, 'src/lib/report.js'));
const { BOARDS, HEART_PARTS, HEART_INTRO, READERS, QUIZ, REPORT } = require('./content.js');
const { TERMS, PRIVACY } = require(path.join(ROOT, 'src/screens/me/Legal.js'));
const { PLANS, fcfa } = require(path.join(ROOT, 'src/data/plan.js'));
const { MARK } = require(path.join(ROOT, 'src/ui/brand.js'));
const BUSINESS = require('./business.js');
const PAGES = require('./pages.js');

// Who sells Klass8: required before the site is built for the public.
const missing = ['name', 'email', 'phone', 'town'].filter((k) => !String(BUSINESS[k] || '').trim());
if (missing.length && !process.env.SITE_DRAFT) throw new Error(`website/business.js: fill in ${missing.join(', ')} before building the site.`);
const B = { ...BUSINESS };
for (const k of missing) B[k] = `[${k} to fill in]`;

// The K8 mark (navy K, amber 8), as on the app.
const [mx, my, mx2, my2] = MARK.box;
const markSvg = `<svg viewBox="${mx} ${my} ${mx2 - mx} ${my2 - my}" aria-hidden="true">${MARK.parts.map((p) => `<path fill="${p.fill}" d="${p.d}"/>`).join('')}</svg>`;
const site = PAGES.make({ B, terms: TERMS, privacy: PRIVACY, priceMonth: fcfa(PLANS.month.amount), priceYear: fcfa(PLANS.year.amount), mark: markSvg });

const lessonById = new Map(LESSONS.map((l) => [l.id, l]));
const subjectName = (id) => SUBJECTS.find((s) => s.id === id)?.en || id;
const plain = (s) => String(s).replace(/\*\*/g, '');
const html = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

// ---------- the tutor's voice ----------
// Each clip is named by its words, so a sentence is only ever spoken once.
const clips = new Map();
function clip(text, lang = 'en') {
  const said = forSpeech(plain(text), lang);
  const file = `a/${crypto.createHash('sha1').update(`kokoro|${lang}|${said}`).digest('hex').slice(0, 20)}.mp3`;
  clips.set(file, { file, text: said, lang });
  return file;
}

// Splits a paragraph into sentences for the reader, keeping **bold** marks.
const sentences = (p) => String(p).split(/(?<=[.!?])\s+(?=[A-Z*(“"0-9])/).filter(Boolean);

// The class a lesson belongs to, from its topic.
function placeOf(lesson) {
  const unit = unitById(lesson.unit);
  return { subject: subjectName(unit?.subject), form: unit?.form || null, topic: unit?.title || '' };
}

// ---------- lessons read aloud ----------
const readers = READERS.map(({ id, tab, paragraphs, tip = true, lang = 'en' }) => {
  const lesson = lessonById.get(id);
  if (!lesson) throw new Error(`no lesson ${id}`);
  const paras = (paragraphs || lesson.body.map((_, i) => i)).map((i) => lesson.body[i]);
  if (tip && lesson.tip) paras.push(`**Exam tip.** ${lesson.tip}`);
  return {
    id,
    tab,
    ...placeOf(lesson),
    n: lesson.n,
    title: lesson.title,
    minutes: lesson.minutes,
    head: clip(lesson.title, lang),
    paragraphs: paras.map((p) => sentences(p).map((s) => ({ html: html(s), clip: clip(s, lang) }))),
  };
});

// ---------- the board ----------
const boards = BOARDS.map(({ tab, lesson: id, q, steps }) => {
  const lesson = lessonById.get(id);
  if (!lesson) throw new Error(`no lesson ${id}`);
  return { tab, ...placeOf(lesson), lesson: lesson.title, q, ask: clip(q), steps: steps.map(([board, say]) => ({ board, say, clip: clip(say) })) };
});

// ---------- a diagram that explains itself ----------
const heartSpec = DIAGRAMS['heart-section'];
const render = (active) => renderToStaticMarkup(React.createElement(DiagramView, { spec: heartSpec, active })).replace('<svg ', '<svg role="img" aria-label="Vertical section through the mammalian heart" ');
const names = heartSpec.labels.map((l) => String(l[0]).replace(/\n/g, ' '));
for (const p of HEART_PARTS) if (!names.includes(p.name)) throw new Error(`no heart label ${p.name}`);
const heart = {
  title: heartSpec.title,
  plain: render(null),
  lit: names.map((_, i) => render(i)),
  intro: { en: clip(HEART_INTRO.en, 'en'), fr: clip(HEART_INTRO.fr, 'fr') },
  parts: HEART_PARTS.map((p) => ({ name: p.name, fr: p.frName, label: names.indexOf(p.name), en: clip(`${p.name}. ${p.en}`, 'en'), frClip: clip(`${p.frName}. ${p.fr}`, 'fr'), say: p.en, sayFr: p.fr })),
};

// ---------- the 3D heart ----------
const heart3d = ANATOMY.models.heart;
const MODEL_NAMES = { lv: 'Ventricles', atria: 'Atria', aorta: 'Aorta', venacava: 'Vena cava' };
const model = {
  file: 'models/heart.glb',
  bytes: heart3d.bytes,
  credit: ANATOMY.credit,
  parts: Object.entries(heart3d.parts)
    .filter(([key, p]) => p.label && MODEL_NAMES[key])
    .map(([key, p]) => ({ key, name: MODEL_NAMES[key], at: p.anchor, color: p.color })),
};

// ---------- real questions ----------
const quiz = QUIZ.map(({ unit: uid, q: index, lesson: lid }) => {
  let item;
  let unit;
  if (lid) {
    const lesson = lessonById.get(lid);
    unit = unitById(lesson.unit);
    item = lesson.questions?.[index] || (index === 'check' ? { q: lesson.check.q, a: lesson.check.a, why: lesson.check.why } : null);
  } else {
    unit = unitById(uid);
    item = unit?.quiz?.[index];
  }
  if (!item || !unit) throw new Error(`no question ${uid || lid} ${index}`);
  return { subject: subjectName(unit.subject), form: unit.form || null, topic: unit.title, q: item.q, a: item.a, why: item.why || '' };
});

// ---------- the syllabus, class by class ----------
const open = SUBJECTS.filter((s) => s.available);
const syllabus = {
  classes: CLASSES.map((c) => ({ id: c.id, level: c.level })),
  subjects: open.map((s) => {
    const forms = {};
    for (const form of formsFor(s.id)) {
      forms[form] = unitsForForm(s.id, form)
        .sort(byPlace(form))
        .map((u) => {
          const at = placeIn(u, form);
          return { title: u.title, term: at.term || null, seq: at.seq || null, lessons: (u.lessonIds || []).filter((id) => lessonById.has(id)).length };
        });
    }
    return { id: s.id, name: s.en, fr: s.fr, level: s.level, code: s.code || null, forms };
  }),
};

// ---------- the weekly report a parent receives ----------
// Written by the app's own report code, for an example student.
const report = reportText({ ...REPORT, generatedAt: Date.now() }, 'en');

// ---------- what the app holds ----------
const openIds = new Set(open.map((s) => s.id));
const openUnits = units.filter((u) => openIds.has(u.subject));
const lessonIds = new Set(openUnits.flatMap((u) => u.lessonIds || []).filter((id) => lessonById.has(id)));
const questions =
  openUnits.reduce((n, u) => n + (u.quiz?.length || 0), 0) + [...lessonIds].reduce((n, id) => n + (lessonById.get(id).questions?.length || 0), 0);
const stats = {
  subjects: open.length,
  oLevel: open.filter((s) => s.level === 'O').length,
  aLevel: open.filter((s) => s.level === 'A').length,
  topics: openUnits.length,
  lessons: lessonIds.size,
  workedExamples: [...lessonIds].reduce((n, id) => n + (lessonById.get(id).examples?.length || 0), 0),
  questions,
  diagrams: Object.keys(DIAGRAMS).length,
  models: Object.keys(ANATOMY.models).length,
};

// ---------- write the site ----------
fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(SRC, DIST, { recursive: true });
fs.mkdirSync(path.join(DIST, 'data'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'models'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'worker/assets/models/heart.glb'), path.join(DIST, 'models/heart.glb'));
const write = (file, data) => fs.writeFileSync(path.join(DIST, file), typeof data === 'string' ? data : JSON.stringify(data));
write('data/home.json', { stats, readers, boards, quiz, model, report });
write('data/heart.json', heart);
write('data/syllabus.json', syllabus);
write('img/mark.svg', markSvg.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ').replace(' aria-hidden="true"', ''));
for (const pg of site.pages) write(pg.file, pg.html);
write('voice.json', [...clips.values()]);

// Each page names its files with a fingerprint, so browsers keep them until they change.
const stamp = (file) => crypto.createHash('sha1').update(fs.readFileSync(path.join(DIST, file))).digest('hex').slice(0, 10);
for (const page of fs.readdirSync(DIST).filter((f) => f.endsWith('.html'))) {
  const p = path.join(DIST, page);
  const out = fs
    .readFileSync(p, 'utf8')
    .replace(/(href|src)="(\/?)([\w/.-]+\.(?:css|js))"/g, (m, attr, slash, file) => `${attr}="${slash}${file}?v=${stamp(file)}"`)
    .replace(/\{\{LOGO_MARK\}\}/g, LOGO_MARK)
    .replace(/\{\{PRICING\}\}/g, site.pricing)
    .replace(/\{\{FOOTER\}\}/g, site.footer)
    .replace(/\{\{MARK\}\}/g, markSvg)
    .replace(/\{\{(\w+)\}\}/g, (m, k) => (k in stats ? stats[k].toLocaleString('en-GB') : m));
  fs.writeFileSync(p, out);
}
console.log(`website/dist: ${readers.length} readings, ${boards.length} boards, ${quiz.length} questions, ${clips.size} voice clips`);
console.log(stats);
