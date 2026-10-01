import { useEffect, useMemo, useState } from 'react';
import { Share } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Avatar, Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import { SpecimenPreview } from '../../ui/previews';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { byKey, unitLabel } from '../../lib/exam';
import { unitById } from '../../data/units';
import { gradeFor } from '../../state/selectors';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function band(pct, L) {
  if (pct >= 85) return [L('Excellent', 'Excellent'), 'secondary', 'bg-secondary'];
  if (pct >= 70) return [L('Strong', 'Solide'), 'secondary', 'bg-secondary'];
  if (pct >= 50) return [L('Good', 'Bien'), 'primary', 'bg-primary'];
  return [L('Review needed', 'À revoir'), 'tertiary', 'bg-tertiary-container'];
}

export default function Results({ navigation, route }) {
  const { user, progress } = useApp();
  const L = useL();
  const exam = route.params?.exam || progress.exams.filter((e) => e.kind === 'p1').slice(-1)[0];
  const [filter, setFilter] = useState('incorrect');
  const [speaking, setSpeaking] = useState(null);
  const [toast, showToast] = useToast();
  useEffect(() => () => Speech.stop(), []);

  const items = useMemo(() => (exam?.items || []).map((it, n) => ({ ...it, n: n + 1, q: byKey(it.k) })).filter((it) => it.q), [exam]);
  if (!exam) {
    return (
      <Screen header={<StackHeader title={L('Exam results', 'Résultats')} />}>
        <T c="font-body-md text-body-md text-on-surface-variant pt-space-lg text-center">{L('No exam results yet.', 'Aucun résultat pour le moment.')}</T>
      </Screen>
    );
  }
  const wrong = items.filter((it) => it.p !== 0);
  const right = items.filter((it) => it.p === 0);
  const flagged = items.filter((it) => it.f);
  const list = { all: items, incorrect: wrong, correct: right, flagged }[filter];
  const units = Object.entries(exam.byUnit || {})
    .map(([u, [c, t]]) => ({ u, c, t, pct: Math.round((c / t) * 100) }))
    .sort((a, b) => unitById(a.u).n - unitById(b.u).n);
  const weakest = [...units].sort((a, b) => a.pct - b.pct)[0];
  const strongest = [...units].sort((a, b) => b.pct - a.pct)[0];
  const previous = progress.exams.filter((e) => e.kind === 'p1' && e.at < (exam.at || Date.now()));
  const prevBest = previous.length ? Math.max(...previous.map((e) => e.pct)) : null;
  const grade = gradeFor(exam.pct);
  const xp = Math.round(exam.pct / 2);

  const speak = (it) => {
    if (speaking === it.n) {
      Speech.stop();
      setSpeaking(null);
      return;
    }
    Speech.stop();
    setSpeaking(it.n);
    Speech.speak(`${it.q.q}. The correct answer is: ${it.q.a[0]}. ${it.q.why}`, { language: 'en-GB', rate: 0.95, onDone: () => setSpeaking(null), onStopped: () => setSpeaking(null) });
  };

  const pdf = async () => {
    try {
      const rows = items
        .map(
          (it) =>
            `<tr><td>${it.n}</td><td>${esc(it.q.q)}<div class="k">${it.p === 0 ? '✓' : '✗'} ${esc(it.p >= 0 ? it.q.a[it.p] : 'No answer')}${it.p !== 0 ? `<br/><b>Answer:</b> ${esc(it.q.a[0])}` : ''}</div></td><td>${it.p === 0 ? 1 : 0}</td></tr>`
        )
        .join('');
      const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Helvetica,Arial;margin:28px;color:#001e31}h1{color:#0369a1;font-size:20px}table{width:100%;border-collapse:collapse;font-size:11px}td{border-bottom:1px solid #e2efff;padding:6px;vertical-align:top}.k{color:#40474f;margin-top:4px}</style></head><body>
      <h1>Paper 1 practice mock: ${exam.score}/${exam.total} (${exam.pct}%)</h1><div>${esc(user?.name)} · ${new Date(exam.at || Date.now()).toLocaleString('en-GB')}</div><br/><table>${rows}</table>
      <p style="font-size:10px;color:#707881">Practice estimate by BioSpatial VR. Not an official GCE Board result.</p></body></html>`;
      const { uri } = await Print.printToFileAsync({ html });
      if (await Sharing.isAvailableAsync()) await Sharing.shareAsync(uri, { mimeType: 'application/pdf', UTI: 'com.adobe.pdf' });
    } catch {
      showToast(L('Could not create the PDF.', 'Impossible de créer le PDF.'), 'error');
    }
  };

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" header={<StackHeader title={L('Exam results analysis', 'Analyse des résultats')} subtitle={L('Paper 1 · practice mock', 'Épreuve 1 · examen blanc')} logo />}>
        <V c="pb-8">
          <V c="mt-2 mb-4 bg-surface-container-lowest rounded-xl p-4 shadow-sm flex-row items-start justify-between gap-3">
            <V c="flex-row items-center gap-3 flex-1">
              <V>
                <Avatar name={user?.name} size={48} />
                <V c="absolute -bottom-1 -right-1 bg-secondary rounded-full p-0.5">
                  <Ic n="verified" s={14} c="on-secondary" />
                </V>
              </V>
              <V c="flex-1">
                <V c="flex-row items-center gap-1.5 flex-wrap">
                  <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
                    {user?.name}
                  </T>
                  {!!user?.className && (
                    <V c="px-2 py-0.5 rounded-full bg-surface-container-high">
                      <T c="font-label-sm text-label-sm text-primary">{user.className}</T>
                    </V>
                  )}
                </V>
                <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                  {user?.schoolName || L('GCE Biology candidate', 'Candidat GCE')}
                </T>
              </V>
            </V>
            <P
              c="h-10 w-10 items-center justify-center rounded-xl bg-surface-container-low"
              onPress={() => Share.share({ message: `${L('I scored', 'J’ai obtenu')} ${exam.score}/${exam.total} (${exam.pct}%) ${L('in a GCE Biology Paper 1 practice mock on BioSpatial VR.', 'à une épreuve 1 blanche de biologie GCE sur BioSpatial VR.')}` })}
              accessibilityLabel="Share"
            >
              <Ic n="ios_share" s={20} c="primary" />
            </P>
          </V>

          <LinearGradient colors={['#00507d', '#0369a1', '#004b74']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ borderRadius: 8, padding: 20, marginBottom: 20, overflow: 'hidden' }}>
            <V c="absolute right-4 top-4 opacity-15">
              <Ic n="biotech" s={110} c="on-primary" />
            </V>
            <V c="flex-row items-center justify-between gap-2 mb-3">
              <V c="px-2.5 py-1 rounded-full bg-surface-container-lowest/20">
                <T c="font-label-sm text-label-sm text-on-primary tracking-wide uppercase">
                  {L('Practice mock', 'Examen blanc')} {progress.exams.filter((e) => e.kind === 'p1').length}
                </T>
              </V>
              <V c="flex-row items-center gap-1">
                <Ic n="bolt" s={18} c="secondary-fixed" />
                <T c="font-label-md text-label-md text-secondary-fixed">+{xp} XP</T>
              </V>
            </V>
            <V c="flex-row items-end gap-3 mb-1">
              <T c="font-display-lg text-display-lg text-on-primary tracking-tight">
                {exam.score}
                <T c="font-headline-lg text-on-primary-container" style={{ fontSize: 24, fontWeight: '400' }}>
                  {' '}
                  / {exam.total}
                </T>
              </T>
              <T c="font-headline-sm text-headline-sm text-secondary-fixed mb-1.5">({exam.pct}%)</T>
            </V>
            <V c="flex-row items-center gap-2 mb-4">
              <V c="px-2.5 py-0.5 rounded bg-secondary-fixed">
                <T c="font-label-md text-label-md text-on-secondary-fixed">
                  {L('GRADE', 'NOTE')} {grade}
                </T>
              </V>
              <T c="font-body-md text-body-md text-on-primary-container" style={{ fontWeight: '500' }}>
                {L('Practice estimate', 'Estimation')}
              </T>
            </V>
            <V c="bg-surface-container-lowest/15 rounded-xl p-3.5 gap-2.5">
              <V c="flex-row items-center justify-between">
                <V c="flex-row items-center gap-1.5">
                  <Ic n="military_tech" s={16} c="secondary-fixed" />
                  <T c="font-label-sm text-label-sm text-on-primary">{L('Compared with your best', 'Par rapport à votre record')}</T>
                </V>
                <T c="font-headline-sm text-headline-sm text-secondary-fixed" style={{ fontWeight: '700' }}>
                  {prevBest == null ? L('First mock', 'Premier') : exam.pct >= prevBest ? L('New best', 'Record') : `${exam.pct - prevBest}%`}
                </T>
              </V>
              <V c="w-full h-2 rounded-full overflow-hidden bg-surface-container-lowest/20">
                <V c="h-full rounded-full bg-secondary-fixed" style={{ width: `${exam.pct}%` }} />
              </V>
              <T c="font-body-sm text-body-sm text-on-primary-container">
                {prevBest == null
                  ? L('Your first practice mock is now your baseline.', 'Ce premier examen blanc devient votre référence.')
                  : `${L('Previous best', 'Meilleur précédent')}: ${prevBest}% ${L('across', 'sur')} ${previous.length} ${previous.length === 1 ? L('mock', 'examen') : L('mocks', 'examens')}.`}
              </T>
            </V>
            <V c="flex-row gap-2.5 mt-3 pt-3">
              <V c="flex-1 flex-row items-center gap-2.5 bg-surface-container-lowest/10 rounded-lg p-2.5">
                <Ic n="timer" s={20} c="surface-variant" />
                <V>
                  <T c="font-label-sm text-label-sm text-on-primary-container">{L('Time spent', 'Temps')}</T>
                  <T c="font-label-md text-label-md text-on-primary">{Math.round((exam.secs || 0) / 60)}m / 90m</T>
                </V>
              </V>
              <V c="flex-1 flex-row items-center gap-2.5 bg-surface-container-lowest/10 rounded-lg p-2.5">
                <Ic n="check_circle" s={20} c="surface-variant" />
                <V>
                  <T c="font-label-sm text-label-sm text-on-primary-container">{L('Accuracy', 'Précision')}</T>
                  <T c="font-label-md text-label-md text-on-primary">{exam.pct.toFixed(1)}%</T>
                </V>
              </V>
            </V>
          </LinearGradient>

          <V c="bg-surface-container-lowest rounded-xl p-4 shadow-sm mb-5">
            <V c="flex-row items-center justify-between mb-3.5">
              <V c="flex-row items-center gap-2">
                <V c="w-2 h-5 rounded-full bg-primary" />
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Syllabus diagnostic', 'Diagnostic par unité')}</T>
              </V>
            </V>
            <V c="gap-3.5">
              {units.map(({ u, c, t, pct }) => {
                const [label, col, bar] = band(pct, L);
                return (
                  <V key={u} c="gap-1.5">
                    <V c="flex-row items-center justify-between gap-2">
                      <T c="font-label-md text-label-md text-on-surface flex-1" numberOfLines={1}>
                        {unitLabel(u)}
                      </T>
                      <V c={`px-1.5 py-0.5 rounded ${col === 'tertiary' ? 'bg-tertiary-fixed' : 'bg-surface-container-highest'}`}>
                        <T c={`font-label-sm text-label-sm text-${col}`}>{label}</T>
                      </V>
                      <T c="font-label-md text-label-md text-on-surface">
                        {c}/{t}
                      </T>
                    </V>
                    <Bar pct={pct} c="h-2 bg-surface-container-high" fill={bar} />
                  </V>
                );
              })}
            </V>
          </V>

          <V c="mb-6">
            <V c="flex-row items-center justify-between mb-3">
              <V c="flex-row items-center gap-2">
                <V c="w-2 h-5 rounded-full bg-secondary" />
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Question review', 'Revue des questions')}</T>
              </V>
              <T c="font-label-sm text-label-sm text-on-surface-variant">
                {items.length} {L('items', 'questions')}
              </T>
            </V>
            <V c="flex-row items-center gap-1.5 p-1 bg-surface-container rounded-xl mb-4">
              {[
                ['all', `${L('All', 'Toutes')} (${items.length})`],
                ['incorrect', `${L('Wrong', 'Fausses')} (${wrong.length})`],
                ['correct', `${L('Right', 'Justes')} (${right.length})`],
                ['flagged', `${L('Flagged', 'Marquées')} (${flagged.length})`],
              ].map(([id, label]) => (
                <P key={id} c={`flex-1 px-1 py-1.5 rounded-lg items-center ${filter === id ? 'bg-surface-container-lowest shadow-sm' : ''}`} onPress={() => setFilter(id)}>
                  <T c={`font-label-md text-label-md ${filter === id ? 'text-primary' : 'text-on-surface-variant'}`} numberOfLines={1}>
                    {label}
                  </T>
                </P>
              ))}
            </V>
            <V c="gap-4">
              {list.slice(0, 30).map((it) => {
                const ok = it.p === 0;
                const unit = unitById(it.q.unit);
                return (
                  <V key={it.n} c="bg-surface-container-lowest rounded-xl p-4 shadow-sm gap-3">
                    <V c="flex-row items-start justify-between gap-2">
                      <V c="flex-row items-center gap-2 flex-1">
                        <V c={`px-2 py-0.5 rounded ${ok ? 'bg-surface-container-highest' : 'bg-error-container'}`}>
                          <T c={`font-label-sm text-label-sm ${ok ? 'text-secondary' : 'text-on-error-container'}`}>
                            Q{it.n} · {ok ? 1 : 0}/1
                          </T>
                        </V>
                        <T c="font-label-sm text-label-sm text-on-surface-variant flex-1" numberOfLines={1}>
                          {unit.short}
                        </T>
                      </V>
                      {it.f ? <Ic n="bookmark" s={20} c="tertiary-container" fill /> : ok ? <Ic n="check_circle" s={22} c="secondary" fill /> : null}
                    </V>
                    <T c="font-headline-sm text-headline-sm text-on-surface" style={{ lineHeight: 22 }}>
                      {it.q.q}
                    </T>
                    {!ok && (
                      <V c="bg-surface-container-low rounded-lg p-3 gap-1">
                        <V c="flex-row items-center gap-1">
                          <Ic n="cancel" s={16} c="error" />
                          <T c="font-label-sm text-label-sm text-error">{it.p >= 0 ? L('Your choice', 'Votre choix') : L('Not answered', 'Sans réponse')}</T>
                        </V>
                        {it.p >= 0 && <T c="font-body-md text-body-md text-on-surface">{it.q.a[it.p]}</T>}
                      </V>
                    )}
                    <V c="bg-surface-container-highest rounded-lg p-3 gap-1">
                      <V c="flex-row items-center justify-between">
                        <V c="flex-row items-center gap-1">
                          <Ic n="check_circle" s={16} c="secondary" />
                          <T c="font-label-sm text-label-sm text-secondary">{L('Correct answer', 'Bonne réponse')}</T>
                        </V>
                      </V>
                      <T c="font-body-md text-body-md text-on-surface">{it.q.a[0]}</T>
                    </V>
                    {!ok && (
                      <>
                        <P c="bg-surface-container rounded-xl p-3 flex-row items-center gap-3" onPress={() => navigation.navigate('Specimen', { unitId: unit.id })}>
                          <V c="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden">
                            <SpecimenPreview unitId={unit.id} />
                            <V c="absolute inset-0 bg-primary/20 items-center justify-center">
                              <Ic n="view_in_ar" s={20} c="on-primary" />
                            </V>
                          </V>
                          <V c="flex-1">
                            <T c="font-label-sm text-label-sm text-primary">{L('3D specimen', 'Spécimen 3D')}</T>
                            <T c="font-body-sm text-body-sm text-on-surface">{unit.vr.title}</T>
                          </V>
                        </P>
                        <V c="bg-surface-container-low rounded-xl p-3 gap-2">
                          <V c="flex-row items-center gap-1.5">
                            <Ic n="rate_review" s={18} c="primary" />
                            <T c="font-label-md text-label-md text-primary">{L('Explanation', 'Explication')}</T>
                          </V>
                          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 18 }}>
                            {it.q.why}
                          </T>
                          <V c="flex-row items-center justify-between bg-surface-container-lowest rounded-lg p-2.5 mt-1">
                            <V c="flex-row items-center gap-2">
                              <P c="w-8 h-8 rounded-full bg-primary items-center justify-center" onPress={() => speak(it)} accessibilityLabel="Listen" scale={0.95}>
                                <Ic n={speaking === it.n ? 'pause' : 'play_arrow'} s={18} c="on-primary" />
                              </P>
                              <V>
                                <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '500' }}>
                                  Dr. Nkwenti
                                </T>
                                <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Listen to the explanation', 'Écouter l’explication')}</T>
                              </V>
                            </V>
                          </V>
                        </V>
                        <P c="w-full h-11 rounded-lg bg-surface-container flex-row items-center justify-center gap-2" onPress={() => navigation.navigate('Quiz', { unitId: unit.id })}>
                          <Ic n="replay" s={18} c="primary" />
                          <T c="font-label-md text-label-md text-primary">
                            {L('Drill', 'Exercices :')} {unit.short}
                          </T>
                        </P>
                      </>
                    )}
                  </V>
                );
              })}
              {list.length > 30 && (
                <T c="font-body-sm text-body-sm text-on-surface-variant text-center">
                  +{list.length - 30} {L('more in the PDF', 'autres dans le PDF')}
                </T>
              )}
              {!list.length && <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Nothing here.', 'Rien ici.')}</T>}
            </V>
          </V>

          {weakest && (
            <V c="bg-surface-container-low rounded-xl p-4 mb-6 gap-3">
              <V c="flex-row items-center gap-2">
                <Ic n="lightbulb" s={22} c="primary" />
                <T c="font-headline-sm text-headline-sm text-on-surface flex-1">
                  {L('Recommendation for', 'Recommandation pour')} {(user?.name || '').split(' ')[0]}
                </T>
              </V>
              <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 18 }}>
                {strongest && strongest.pct >= 70 ? `${unitLabel(strongest.u)} ${L('is looking strong.', 'est solide.')} ` : ''}
                {L('Spend your next sessions on', 'Consacrez vos prochaines séances à')} {unitLabel(weakest.u)} ({weakest.pct}%){L(': read its lessons again, then take the unit quiz.', ' : relisez les leçons puis faites le quiz.')}
              </T>
            </V>
          )}

          <V c="gap-2.5 pt-2">
            {weakest && (
              <P c="w-full h-12 rounded-lg bg-primary flex-row items-center justify-center gap-2 shadow-md" onPress={() => navigation.navigate('Quiz', { unitId: weakest.u })}>
                <Ic n="psychology_alt" s={20} c="on-primary" />
                <T c="font-label-lg text-label-lg text-on-primary">{L('Drill my weakest unit', 'Travailler mon unité faible')}</T>
              </P>
            )}
            <P c="w-full h-12 rounded-lg bg-surface-container-lowest flex-row items-center justify-center gap-2 shadow-sm" onPress={pdf}>
              <Ic n="download" s={20} c="primary" />
              <T c="font-label-lg text-label-lg text-primary">{L('Download marked paper (PDF)', 'Télécharger la copie corrigée (PDF)')}</T>
            </P>
            <P c="w-full h-11 rounded-lg flex-row items-center justify-center gap-1" onPress={() => navigation.navigate('Main', { screen: 'Exams' })}>
              <Ic n="arrow_back" s={18} />
              <T c="font-label-md text-label-md text-on-surface-variant">{L('Return to exams hub', 'Retour aux examens')}</T>
            </P>
          </V>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
