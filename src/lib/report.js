// Weekly progress report: WhatsApp text and printable PDF, built from real data,
// with one line per subject the student takes.
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';
import { unitById } from '../data/units';
import { chosenSubjects, subjectName } from '../data/subjects';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// The same shape the server's report has (routes/me.js buildReport).
export function reportFromStats(user, stats, progress) {
  const subjects = chosenSubjects(user);
  const unitMastery = Object.fromEntries(Object.entries(stats.unitPct).filter(([u]) => subjects.includes(unitById(u)?.subject)));
  const sorted = Object.entries(unitMastery).filter(([, v]) => v > 0).sort((a, b) => a[1] - b[1]);
  return {
    student: { name: user?.name, className: user?.className, schoolName: user?.schoolName, subjects },
    readiness: stats.overall,
    subjects: Object.fromEntries(subjects.map((id) => [id, stats.bySubject[id]])),
    streak: stats.streak,
    minutesWeek: stats.minutesWeek,
    labsDone: stats.labsDone,
    mocksDone: stats.mocksDone,
    bestMock: stats.bestMock,
    unitMastery,
    weakest: sorted.slice(0, 2).map(([unit, pct]) => ({ unit, pct })),
    strongest: sorted.slice(-2).reverse().map(([unit, pct]) => ({ unit, pct })),
    lastActive: progress.days.length ? new Date(`${progress.days[progress.days.length - 1]}T12:00:00`).getTime() : null,
    generatedAt: Date.now(),
  };
}

const unitName = (id, lang) => {
  const u = unitById(id);
  return u ? `${u.short} (${subjectName(u.subject, lang)})` : id;
};
const hours = (m) => (m >= 60 ? `${(m / 60).toFixed(1)} h` : `${m} min`);
const reportSubjects = (r) => (r.student?.subjects?.length ? r.student.subjects : Object.keys(r.subjects || {}).length ? Object.keys(r.subjects) : ['biology']);
const subjectLine = (r, id, lang) => {
  const s = r.subjects?.[id] || (id === 'biology' ? { mastery: r.readiness, bestMock: r.bestMock } : { mastery: 0, bestMock: null });
  const fr = lang === 'fr';
  return `${subjectName(id, lang)}: ${s.mastery ?? 0}% ${fr ? 'maîtrisé' : 'mastered'}${s.bestMock != null ? `, ${fr ? 'meilleure épreuve 1' : 'best Paper 1'} ${s.bestMock}%` : ''}`;
};

export function reportText(r, lang = 'en') {
  const fr = lang === 'fr';
  const d = new Date(r.generatedAt).toLocaleDateString(fr ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const lines = [
    fr ? '*ScienceAid : rapport de la semaine*' : '*ScienceAid: weekly progress report*',
    `${fr ? 'Élève' : 'Student'}: ${r.student.name}${r.student.className ? ` (${r.student.className}${r.student.schoolName ? `, ${r.student.schoolName}` : ''})` : ''}`,
    `${fr ? 'Semaine du' : 'Week ending'} ${d}`,
    '',
    ...reportSubjects(r).map((id) => subjectLine(r, id, lang)),
    '',
    `${fr ? 'Révision' : 'Revision'}: ${hours(r.minutesWeek)} ${fr ? 'cette semaine' : 'this week'}, ${r.streak} ${fr ? 'jours de suite' : 'days in a row'}`,
    `${fr ? 'TP réalisés' : 'Practicals done'}: ${r.labsDone}. ${fr ? 'Épreuves faites' : 'Papers done'}: ${r.mocksDone}`,
  ];
  if (r.weakest?.length) lines.push(`${fr ? 'À revoir' : 'To revise'}: ${r.weakest.map((s) => `${unitName(s.unit, lang)} ${s.pct}%`).join(', ')}`);
  if (r.weakest?.length) {
    lines.push('');
    lines.push(
      fr
        ? `Conseil : encouragez ${r.student.name.split(' ')[0]} à revoir « ${unitName(r.weakest[0].unit, lang)} » cette semaine.`
        : `Tip: encourage ${r.student.name.split(' ')[0]} to revise "${unitName(r.weakest[0].unit, lang)}" this week.`
    );
  }
  return lines.join('\n');
}

export function whatsappUrl(phone, text) {
  const to = phone ? String(phone).replace(/\D/g, '') : '';
  return `https://wa.me/${to}?text=${encodeURIComponent(text)}`;
}

function reportHtml(r, lang) {
  const fr = lang === 'fr';
  const d = new Date(r.generatedAt).toLocaleDateString(fr ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const tables = reportSubjects(r)
    .map((id) => {
      const rows = Object.entries(r.unitMastery || {})
        .map(([u, p]) => [unitById(u), p])
        .filter(([u]) => u?.subject === id)
        .sort((a, b) => a[0].n - b[0].n)
        .map(
          ([u, p]) =>
            `<tr><td>${u.n}</td><td>${esc(u.short)}</td><td><div class="bar"><div style="width:${Math.max(0, Math.min(100, p))}%"></div></div></td><td class="num">${p}%</td></tr>`
        )
        .join('');
      return `<h2>${esc(subjectLine(r, id, lang))}</h2><table>${rows || `<tr><td colspan="4">${fr ? 'Pas encore de révision enregistrée.' : 'No study recorded yet.'}</td></tr>`}</table>`;
    })
    .join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  body{font-family:Helvetica,Arial,sans-serif;color:#001e31;margin:32px}
  h1{font-size:22px;margin:0;color:#0369a1} h2{font-size:14px;margin:22px 0 6px} .sub{color:#40474f;font-size:12px;margin-top:4px}
  p{font-size:12px;color:#40474f}
  table{width:100%;border-collapse:collapse;font-size:12px} td{padding:6px 4px;border-bottom:1px solid #e2efff}
  .bar{height:6px;background:#e2efff;border-radius:6px;overflow:hidden;width:160px}.bar div{height:6px;background:#006b5f}
  .num{text-align:right;font-weight:bold} .foot{margin-top:24px;font-size:10px;color:#707881}
  </style></head><body>
  <h1>ScienceAid: ${fr ? 'rapport de progression' : 'progress report'}</h1>
  <div class="sub">${esc(r.student.name)}${r.student.className ? `, ${esc(r.student.className)}` : ''}${r.student.schoolName ? `, ${esc(r.student.schoolName)}` : ''}. ${d}</div>
  <p>${fr ? 'Révision cette semaine' : 'Revision this week'}: ${hours(r.minutesWeek)}. ${fr ? 'Jours de suite' : 'Days in a row'}: ${r.streak}. ${fr ? 'TP réalisés' : 'Practicals done'}: ${r.labsDone}. ${fr ? 'Épreuves faites' : 'Papers done'}: ${r.mocksDone}.</p>
  ${tables}
  <div class="foot">${fr ? 'Estimation de pratique générée par ScienceAid, pas un résultat officiel du GCE Board.' : 'Practice estimate generated by ScienceAid. This is not an official GCE Board result.'}</div>
  </body></html>`;
}

export async function shareReportPdf(r, lang = 'en') {
  const html = reportHtml(r, lang);
  if (Platform.OS === 'web') {
    await Print.printAsync({ html });
    return;
  }
  const { uri } = await Print.printToFileAsync({ html });
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(uri, { mimeType: 'application/pdf', UTI: 'com.adobe.pdf', dialogTitle: 'ScienceAid report' });
  }
}
