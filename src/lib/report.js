// Weekly progress report: WhatsApp text and printable PDF, built from real data.
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';
import { unitById } from '../data/units';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function reportFromStats(user, stats, progress) {
  const unitMastery = stats.unitPct;
  const sorted = Object.entries(unitMastery).filter(([, v]) => v > 0).sort((a, b) => a[1] - b[1]);
  const lastLab = [...progress.workbook].sort((a, b) => b.at - a.at)[0];
  const lastExam = [...progress.exams].sort((a, b) => b.at - a.at)[0];
  return {
    student: { name: user?.name, className: user?.className, schoolName: user?.schoolName },
    readiness: stats.mastery,
    streak: stats.streak,
    minutesWeek: stats.minutesWeek,
    xp: progress.xp,
    labsDone: stats.labsDone,
    mocksDone: stats.mocksDone,
    bestMock: stats.bestMock,
    unitMastery,
    weakest: sorted.slice(0, 2).map(([unit, pct]) => ({ unit, pct })),
    strongest: sorted.slice(-2).reverse().map(([unit, pct]) => ({ unit, pct })),
    lastLab: lastLab ? { title: lastLab.title, result: lastLab.result } : null,
    lastExam: lastExam ? { kind: lastExam.kind, score: lastExam.score, total: lastExam.total, pct: lastExam.pct } : null,
    lastActive: progress.days.length ? new Date(`${progress.days[progress.days.length - 1]}T12:00:00`).getTime() : null,
    generatedAt: Date.now(),
  };
}

const unitName = (id) => unitById(id)?.short || id;
const hours = (m) => (m >= 60 ? `${(m / 60).toFixed(1)} h` : `${m} min`);

export function reportText(r, lang = 'en') {
  const fr = lang === 'fr';
  const d = new Date(r.generatedAt).toLocaleDateString(fr ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const lines = [
    fr ? '*BioSpatial VR : rapport de biologie GCE*' : '*BioSpatial VR: GCE Biology weekly report*',
    `${fr ? 'Élève' : 'Student'}: ${r.student.name}${r.student.className ? ` (${r.student.className}${r.student.schoolName ? `, ${r.student.schoolName}` : ''})` : ''}`,
    `${fr ? 'Semaine du' : 'Week ending'} ${d}`,
    '',
    `${fr ? 'Préparation au GCE' : 'GCE readiness'}: ${r.readiness}%`,
    `${fr ? 'Série de révision' : 'Revision streak'}: ${r.streak} ${fr ? 'jours' : 'days'} · ${hours(r.minutesWeek)} ${fr ? 'cette semaine' : 'this week'}`,
    `${fr ? 'TP réalisés' : 'Practicals done'}: ${r.labsDone} · ${fr ? 'Examens blancs' : 'Mock exams'}: ${r.mocksDone}${r.bestMock != null ? ` (${fr ? 'meilleur' : 'best'} ${r.bestMock}%)` : ''}`,
  ];
  if (r.strongest?.length) lines.push(`${fr ? 'Points forts' : 'Strongest'}: ${r.strongest.map((s) => `${unitName(s.unit)} ${s.pct}%`).join(', ')}`);
  if (r.weakest?.length) lines.push(`${fr ? 'À revoir' : 'To revise'}: ${r.weakest.map((s) => `${unitName(s.unit)} ${s.pct}%`).join(', ')}`);
  if (r.weakest?.length) {
    lines.push('');
    lines.push(
      fr
        ? `Conseil : encouragez ${r.student.name.split(' ')[0]} à revoir « ${unitName(r.weakest[0].unit)} » cette semaine.`
        : `Tip: encourage ${r.student.name.split(' ')[0]} to revise "${unitName(r.weakest[0].unit)}" this week.`
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
  const rows = Object.entries(r.unitMastery || {})
    .map(([u, p]) => [unitById(u), p])
    .filter(([u]) => u)
    .sort((a, b) => a[0].n - b[0].n)
    .map(
      ([u, p]) =>
        `<tr><td>${u.n}</td><td>${esc(u.short)}</td><td><div class="bar"><div style="width:${Math.max(0, Math.min(100, p))}%"></div></div></td><td class="num">${p}%</td></tr>`
    )
    .join('');
  const d = new Date(r.generatedAt).toLocaleDateString(fr ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  body{font-family:Helvetica,Arial,sans-serif;color:#001e31;margin:32px}
  h1{font-size:22px;margin:0;color:#0369a1} .sub{color:#40474f;font-size:12px;margin-top:4px}
  .grid{display:flex;gap:12px;margin:20px 0} .card{flex:1;background:#ecf4ff;border-radius:8px;padding:12px}
  .card b{display:block;font-size:22px;color:#00507d} .card span{font-size:11px;color:#40474f;text-transform:uppercase;letter-spacing:.04em}
  table{width:100%;border-collapse:collapse;font-size:12px} td{padding:6px 4px;border-bottom:1px solid #e2efff}
  .bar{height:6px;background:#e2efff;border-radius:6px;overflow:hidden;width:160px}.bar div{height:6px;background:#006b5f}
  .num{text-align:right;font-weight:bold} .foot{margin-top:24px;font-size:10px;color:#707881}
  </style></head><body>
  <h1>BioSpatial VR · ${fr ? 'Rapport de progression' : 'Progress report'}</h1>
  <div class="sub">${esc(r.student.name)}${r.student.className ? ` · ${esc(r.student.className)}` : ''}${r.student.schoolName ? ` · ${esc(r.student.schoolName)}` : ''} · ${d}</div>
  <div class="grid">
    <div class="card"><span>${fr ? 'Préparation' : 'Readiness'}</span><b>${r.readiness}%</b></div>
    <div class="card"><span>${fr ? 'Série' : 'Streak'}</span><b>${r.streak} ${fr ? 'j' : 'd'}</b></div>
    <div class="card"><span>${fr ? 'Cette semaine' : 'This week'}</span><b>${hours(r.minutesWeek)}</b></div>
    <div class="card"><span>${fr ? 'Meilleur examen' : 'Best mock'}</span><b>${r.bestMock != null ? `${r.bestMock}%` : '-'}</b></div>
  </div>
  <table><tr><td colspan="4"><b>${fr ? 'Maîtrise par unité' : 'Mastery by unit'}</b></td></tr>${rows || `<tr><td colspan="4">${fr ? 'Pas encore de données.' : 'No study recorded yet.'}</td></tr>`}</table>
  <div class="foot">${fr ? 'TP réalisés' : 'Practicals completed'}: ${r.labsDone} · ${fr ? 'Examens blancs' : 'Mock exams'}: ${r.mocksDone} · XP: ${r.xp}<br/>
  ${fr ? 'Estimation de pratique générée par BioSpatial VR, pas un résultat officiel du GCE Board.' : 'Practice estimate generated by BioSpatial VR. This is not an official GCE Board result.'}</div>
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
    await Sharing.shareAsync(uri, { mimeType: 'application/pdf', UTI: 'com.adobe.pdf', dialogTitle: 'BioSpatial report' });
  }
}
