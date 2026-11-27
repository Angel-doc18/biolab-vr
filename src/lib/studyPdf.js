// The downloadable PDF of a study chat: every question solved (what it asks,
// the working step by step, graphs, the answer), notes explained and revision
// quizzes with their answers at the end. Clean and printable, in Klass8 colours.
import { Platform } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { graphSvg } from './graphModel';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const lines = (s) => esc(s).replace(/\n/g, '<br/>');

const CSS = `
body{font-family:Arial,Helvetica,sans-serif;color:#101b36;margin:28px 30px;font-size:12.5px;line-height:1.5}
.brand{font-size:20px;font-weight:800;color:#02287b}.brand span{color:#fbac02}
h1{font-size:19px;margin:6px 0 2px}.sub{color:#4e5b77;margin-bottom:18px}
h2{font-size:15px;color:#02287b;margin:22px 0 6px;border-bottom:2px solid #e5ebf7;padding-bottom:4px}
.q{background:#f5f7fb;border-radius:8px;padding:10px 12px;margin:6px 0 10px;white-space:normal}
.lbl{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#4e5b77;margin:10px 0 3px}
.step{margin:8px 0;padding-left:30px;position:relative;page-break-inside:avoid}
.n{position:absolute;left:0;top:0;width:20px;height:20px;border-radius:10px;background:#02287b;color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:20px}
.board{font-family:'Courier New',monospace;background:#fff;border:1px solid #dfe5ee;border-radius:6px;padding:6px 8px;margin-bottom:3px}
.say{color:#33405c}
.why{color:#02287b;font-weight:600;margin:2px 0}
.concept{background:#fff;border:1px solid #dfe5ee;border-radius:8px;padding:8px 10px;margin:5px 0;page-break-inside:avoid}
.ans{border:2px solid #02287b;border-radius:8px;padding:8px 10px;margin:10px 0;font-weight:700;page-break-inside:avoid}
.tip{color:#4e5b77;font-size:11.5px;margin:4px 0}
.graph{margin:6px 0;page-break-inside:avoid}
table{border-collapse:collapse;width:100%;margin:6px 0}td,th{border:1px solid #dfe5ee;padding:5px 7px;text-align:left;vertical-align:top}th{background:#f5f7fb}
ul{margin:4px 0 8px 18px;padding:0}.foot{margin-top:26px;color:#4e5b77;font-size:10.5px;border-top:1px solid #e5ebf7;padding-top:8px}
.block{page-break-inside:avoid}`;

function solutionHtml(b, L) {
  const steps = (b.steps || [])
    .map(
      (s, i) =>
        `<div class="step"><div class="n">${i + 1}</div><div class="board">${lines(s.board)}</div>${s.why ? `<div class="why">${L('Because', 'Parce que')}: ${esc(s.why.replace(/^because[:,]?\s*/i, ''))}</div>` : ''}${s.say ? `<div class="say">${esc(s.say)}</div>` : ''}${s.graph ? `<div class="graph">${graphSvg(s.graph)}</div>` : ''}</div>`
    )
    .join('');
  const guide = b.markingGuide?.length
    ? `<div class="lbl">${L('Marking guide', 'Guide de correction')}</div><table><tr><th>${L('Point', 'Point')}</th><th>${L('Marks', 'Points')}</th></tr>${b.markingGuide.map((p) => `<tr><td>${esc(p.point)}</td><td>${p.marks}</td></tr>`).join('')}</table>`
    : '';
  return `<h2>${b.label ? `${L('Question', 'Question')} ${esc(b.label)}` : L('Question', 'Question')}</h2>
<div class="q">${lines(b.question)}</div>
${b.interpretation ? `<div class="lbl">${L('What the question asks', 'Ce que demande la question')}</div><div>${esc(b.interpretation)}</div>` : ''}
${b.concepts?.length ? `<div class="lbl">${L('The ideas behind it', 'Les notions en jeu')}</div>${b.concepts.map((c) => `<div class="concept"><b>${esc(c.name)}</b><br/>${lines(c.explanation)}</div>`).join('')}` : ''}
<div class="lbl">${L('Working', 'Résolution')}</div>${steps}
<div class="ans">${L('Answer', 'Réponse')}: ${lines(b.answer)}</div>
${b.mistakes?.length ? `<div class="lbl">${L('Mistakes to avoid', 'Erreurs à éviter')}</div><ul>${b.mistakes.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>` : ''}
${b.realLife ? `<div class="tip"><b>${L('In real life', 'Dans la vie courante')}:</b> ${esc(b.realLife)}</div>` : ''}
${b.check ? `<div class="tip"><b>${L('Check', 'Vérification')}:</b> ${esc(b.check.replace(/^check[:,]?\s*/i, ''))}</div>` : ''}
${guide}
${b.similar ? `<div class="tip"><b>${L('Practice', 'Entraînement')}:</b> ${esc(b.similar)}</div>` : ''}`;
}

function notesHtml(b, L) {
  return `<h2>${esc(b.title)}</h2>${b.summary ? `<p>${esc(b.summary)}</p>` : ''}
${(b.sections || [])
  .map((s) => `<div class="block"><div class="lbl">${esc(s.heading)}</div><div>${lines(s.explanation)}</div>${s.keyPoints?.length ? `<ul>${s.keyPoints.map((k) => `<li>${esc(k)}</li>`).join('')}</ul>` : ''}${s.example ? `<div class="tip"><b>${L('Example', 'Exemple')}:</b> ${esc(s.example)}</div>` : ''}</div>`)
  .join('')}
${b.keyTerms?.length ? `<div class="lbl">${L('Key terms', 'Termes clés')}</div><table>${b.keyTerms.map((k) => `<tr><td><b>${esc(k.term)}</b></td><td>${esc(k.meaning)}</td></tr>`).join('')}</table>` : ''}
${b.examTips?.length ? `<div class="lbl">${L('Exam tips', 'Conseils d’examen')}</div><ul>${b.examTips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
${b.teaching?.length ? `<div class="lbl">${L('Teaching these notes', 'Enseigner ces notes')}</div><ul>${b.teaching.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}`;
}

function quizHtml(b, L) {
  const qs = (b.questions || [])
    .map((q) =>
      q.type === 'mcq'
        ? `<div class="block"><p><b>${q.n}.</b> ${lines(q.text)}</p><div style="margin-left:16px">${q.options.map((o) => `<div>${esc(o)}</div>`).join('')}</div></div>`
        : `<div class="block"><p><b>${q.n}.</b> ${lines(q.text)} <i>(${q.marks} ${L('marks', 'points')})</i></p></div>`
    )
    .join('');
  const ans = (b.questions || [])
    .map((q) =>
      q.type === 'mcq'
        ? `<div class="block"><p><b>${q.n}. ${esc(q.answer)}</b>. ${esc(q.explanation)}</p></div>`
        : `<div class="block"><p><b>${q.n}.</b></p><table>${q.scheme.map((p) => `<tr><td>${esc(p.point)}</td><td>${p.marks}</td></tr>`).join('')}</table>${q.modelAnswer ? `<div class="tip"><b>${L('Model answer', 'Réponse modèle')}:</b> ${lines(q.modelAnswer)}</div>` : ''}</div>`
    )
    .join('');
  return `<h2>${esc(b.title)}</h2>${qs}<h2>${L('Answers and marking scheme', 'Réponses et barème')}</h2>${ans}`;
}

// The AI sometimes numbers its own headings ("1. ...") and starts every
// objective with "By the end of the lesson, students should be able to".
const plainHeading = (h) => String(h || '').replace(/^\s*(\d+|[ivx]+)[.)]\s+/i, '');
const objective = (o) => {
  const t = String(o || '').replace(/^\s*by the end of (the|this) lesson,?\s*(the )?(students|learners) (should|will) be able to:?\s*/i, '');
  return t.charAt(0).toUpperCase() + t.slice(1);
};
const list = (a, numbered) => (a?.length ? `<${numbered ? 'ol' : 'ul'}>${a.map((x) => `<li>${esc(x)}</li>`).join('')}</${numbered ? 'ol' : 'ul'}>` : '');
const qa = (a, L, withAnswers = true) =>
  (a || []).map((x, i) => `<div class="block"><p><b>${i + 1}.</b> ${lines(x.question)}</p>${withAnswers ? `<div class="tip"><b>${L('Answer', 'Réponse')}:</b> ${lines(x.answer)}</div>` : ''}</div>`).join('');

function lessonNotesHtml(b, L) {
  return `<h2>${esc(b.title)}</h2>
${b.objectives?.length ? `<div class="lbl">${L('By the end of the lesson, students can', 'À la fin du cours, les élèves savent')}</div>${list(b.objectives.map(objective), true)}` : ''}
${b.introduction ? `<p>${lines(b.introduction)}</p>` : ''}
${(b.sections || []).map((s, i) => `<div class="block"><h3 style="font-size:13.5px;margin:12px 0 4px">${i + 1}. ${esc(plainHeading(s.heading))}</h3><div>${lines(s.content)}</div>${list(s.keyPoints)}${s.example ? `<div class="tip"><b>${L('Example', 'Exemple')}:</b> ${lines(s.example)}</div>` : ''}</div>`).join('')}
${b.diagrams?.length ? `<div class="lbl">${L('Diagrams to draw', 'Schémas à faire')}</div>${b.diagrams.map((d) => `<div class="concept"><b>${esc(d.title)}</b><br/>${lines(d.description)}</div>`).join('')}` : ''}
${b.summary ? `<div class="lbl">${L('Summary', 'Résumé')}</div><p>${lines(b.summary)}</p>` : ''}
${b.exercises?.length ? `<div class="lbl">${L('Exercises', 'Exercices')}</div>${qa(b.exercises, L)}` : ''}`;
}

function lessonPlanHtml(b, L) {
  const rows = (b.stages || [])
    .map((s) => `<tr><td><b>${esc(s.name)}</b><br/>${s.minutes} min</td><td>${lines(s.teacher)}</td><td>${lines(s.students)}</td><td>${lines(s.notes)}</td></tr>`)
    .join('');
  return `<h2>${L('Lesson plan', 'Fiche de préparation')}: ${esc(b.title)}</h2><div class="sub">${b.minutes} ${L('minutes', 'minutes')}</div>
<div class="lbl">${L('By the end of the lesson, students should be able to', 'À la fin du cours, les élèves devront savoir')}</div>${list(b.objectives.map(objective), true)}
${b.prerequisites ? `<div class="lbl">${L('Prerequisites', 'Prérequis')}</div><p>${lines(b.prerequisites)}</p>` : ''}
${b.materials?.length ? `<div class="lbl">${L('Teaching aids', 'Matériel didactique')}</div>${list(b.materials)}` : ''}
<div class="lbl">${L('The lesson', 'Le déroulement')}</div>
<table><tr><th>${L('Stage', 'Étape')}</th><th>${L('Teacher', 'Enseignant')}</th><th>${L('Students', 'Élèves')}</th><th>${L('Notes', 'Notes')}</th></tr>${rows}</table>
${b.evaluation?.length ? `<div class="lbl">${L('Evaluation', 'Évaluation')}</div>${qa(b.evaluation, L)}` : ''}
${b.homework ? `<div class="lbl">${L('Homework', 'Devoir')}</div><p>${lines(b.homework)}</p>` : ''}
${b.boardSummary ? `<div class="lbl">${L('Board summary', 'Résumé au tableau')}</div><div class="board">${lines(b.boardSummary)}</div>` : ''}`;
}

function summaryHtml(b, L) {
  return `<h2>${esc(b.title)}</h2><p>${lines(b.summary)}</p>
<div class="lbl">${L('Key points', 'Points clés')}</div>${list(b.keyPoints)}
${b.keyTerms?.length ? `<div class="lbl">${L('Key terms', 'Termes clés')}</div><table>${b.keyTerms.map((k) => `<tr><td><b>${esc(k.term)}</b></td><td>${esc(k.meaning)}</td></tr>`).join('')}</table>` : ''}
${b.examFocus?.length ? `<div class="lbl">${L('What examiners ask', 'Ce que demandent les examinateurs')}</div>${list(b.examFocus)}` : ''}`;
}

// The marking guide only: each question with its answer and marks.
function guideHtml(m, L) {
  const b = m.body;
  if (m.kind === 'solution')
    return `<div class="block"><h2>${b.label ? `${L('Question', 'Question')} ${esc(b.label)}` : L('Question', 'Question')}</h2><div class="q">${lines(b.question)}</div><div class="ans">${L('Answer', 'Réponse')}: ${lines(b.answer)}</div>${
      b.markingGuide?.length ? `<table><tr><th>${L('Point', 'Point')}</th><th>${L('Marks', 'Points')}</th></tr>${b.markingGuide.map((p) => `<tr><td>${esc(p.point)}</td><td>${p.marks}</td></tr>`).join('')}</table>` : ''
    }</div>`;
  if (m.kind === 'quiz') {
    const html = quizHtml(b, L);
    const at = html.indexOf('</h2>', html.indexOf('<h2>', 4));
    return `<h2>${esc(b.title)}: ${L('answers and marking scheme', 'réponses et barème')}</h2>${html.slice(at + 5)}`;
  }
  if (m.kind === 'lessonNotes' && b.exercises?.length) return `<h2>${esc(b.title)}: ${L('exercises', 'exercices')}</h2>${qa(b.exercises, L)}`;
  if (m.kind === 'lessonPlan' && b.evaluation?.length) return `<h2>${esc(b.title)}: ${L('evaluation', 'évaluation')}</h2>${qa(b.evaluation, L)}`;
  return '';
}

// The students' copy: the questions only, with space to answer.
function testHtml(m, L, k) {
  const b = m.body;
  if (m.kind === 'solution') return `${k === 1 ? `<h2>${L('Questions', 'Questions')}</h2>` : ''}<div class="block"><p><b>${b.label ? esc(b.label) : k}.</b> ${lines(b.question)}</p></div>`;
  if (m.kind === 'quiz') {
    const html = quizHtml(b, L);
    return html.slice(0, html.indexOf('<h2>', 4));
  }
  if (m.kind === 'lessonNotes' && b.exercises?.length) return `<h2>${esc(b.title)}</h2>${qa(b.exercises, L, false)}`;
  return '';
}

const ONE = { solution: solutionHtml, notes: notesHtml, quiz: quizHtml, lessonNotes: lessonNotesHtml, lessonPlan: lessonPlanHtml, summary: summaryHtml };

// variant: 'full' (everything), 'guide' (answers and marks only),
// 'test' (the questions only, for the students).
export function studyHtml({ title, messages, who, lang = 'en', variant = 'full' }) {
  const L = (en, fr) => (lang === 'fr' ? fr : en);
  let k = 0;
  const body = messages
    .filter((m) => m.role === 'assistant' && ONE[m.kind])
    .map((m) => (variant === 'guide' ? guideHtml(m, L) : variant === 'test' ? testHtml(m, L, m.kind === 'solution' ? ++k : k) : ONE[m.kind](m.body, L)))
    .filter(Boolean)
    .join('');
  if (variant !== 'full') title = `${title}: ${variant === 'guide' ? L('marking guide', 'guide de correction') : L('questions', 'questions')}`;
  const d = new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title><style>${CSS}</style></head><body>
<div class="brand">Klass<span>8</span></div><h1>${esc(title)}</h1><div class="sub">${who ? `${esc(who)}, ` : ''}${d}</div>
${body || `<p>${L('Nothing solved or explained in this chat yet.', 'Rien de résolu ou d’expliqué dans cette discussion pour l’instant.')}</p>`}
<div class="foot">${L('Prepared with Klass8, the study app for secondary schools in Cameroon. Check important answers with your teacher.', 'Préparé avec Klass8, l’application d’étude des lycées et collèges du Cameroun. Vérifiez les réponses importantes avec votre enseignant.')}</div>
</body></html>`;
}

export async function shareStudyPdf(args) {
  const html = studyHtml(args);
  if (Platform.OS === 'web') {
    await Print.printAsync({ html });
    return;
  }
  const { uri } = await Print.printToFileAsync({ html });
  if (await Sharing.isAvailableAsync()) await Sharing.shareAsync(uri, { mimeType: 'application/pdf', UTI: 'com.adobe.pdf', dialogTitle: args.title });
}
