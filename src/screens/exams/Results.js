import { useEffect, useMemo, useState } from 'react';
import { Share } from 'react-native';
import * as Speech from '../../lib/voice';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { byKey, p1For, unitLabel } from '../../lib/exam';
import { unitById } from '../../data/units';
import { subjectName } from '../../data/subjects';
import { examSubject } from '../../state/progress';
import { gradeFor } from '../../state/selectors';
import { Section } from '../tabs/Home';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export default function Results({ navigation, route }) {
  const { user, progress } = useApp();
  const L = useL();
  const lang = useLang();
  const exam = route.params?.exam || progress.exams.filter((e) => e.kind === 'p1').slice(-1)[0];
  const subject = exam ? examSubject(exam) : 'biology';
  const name = subjectName(subject, lang);
  const minutes = p1For(subject).minutes;
  const [filter, setFilter] = useState('incorrect');
  const [speaking, setSpeaking] = useState(null);
  const [toast, showToast] = useToast();
  useEffect(() => () => Speech.stop(), []);

  const items = useMemo(() => (exam?.items || []).map((it, n) => ({ ...it, n: n + 1, q: byKey(it.k) })).filter((it) => it.q), [exam]);
  if (!exam) {
    return (
      <Screen header={<StackHeader title={L('Results', 'Résultats')} />}>
        <T c="font-body-md text-body-md text-on-surface-variant pt-space-lg">{L('No results yet.', 'Aucun résultat pour le moment.')}</T>
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
  const previous = progress.exams.filter((e) => e.kind === 'p1' && examSubject(e) === subject && e.at < (exam.at || Date.now()));
  const prevBest = previous.length ? Math.max(...previous.map((e) => e.pct)) : null;
  const grade = gradeFor(exam.pct);

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
            `<tr><td>${it.n}</td><td>${esc(it.q.q)}<div class="k">${it.p === 0 ? 'Correct' : 'Wrong'}: ${esc(it.p >= 0 ? it.q.a[it.p] : 'No answer')}${it.p !== 0 ? `<br/><b>Answer:</b> ${esc(it.q.a[0])}` : ''}</div></td><td>${it.p === 0 ? 1 : 0}</td></tr>`
        )
        .join('');
      const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Helvetica,Arial;margin:28px;color:#0f1d2b}h1{font-size:20px}table{width:100%;border-collapse:collapse;font-size:11px}td{border-bottom:1px solid #d7e1e9;padding:6px;vertical-align:top}.k{color:#40474f;margin-top:4px}</style></head><body>
      <h1>${esc(subjectName(subject, 'en'))} Paper 1 practice: ${exam.score}/${exam.total} (${exam.pct}%)</h1><div>${esc(user?.name)}, ${new Date(exam.at || Date.now()).toLocaleString('en-GB')}</div><br/><table>${rows}</table>
      <p style="font-size:10px;color:#707881">Practice estimate by SciAid. Not an official GCE Board result.</p></body></html>`;
      const { uri } = await Print.printToFileAsync({ html });
      if (await Sharing.isAvailableAsync()) await Sharing.shareAsync(uri, { mimeType: 'application/pdf', UTI: 'com.adobe.pdf' });
    } catch {
      showToast(L('Could not create the PDF.', 'Impossible de créer le PDF.'), 'error');
    }
  };

  return (
    <V c="flex-1">
      <Screen
        bg="bg-surface"
        header={
          <StackHeader
            title={`${name} ${L('Paper 1 result', 'résultat de l’épreuve 1')}`}
            subtitle={new Date(exam.at || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            subtitleColor="on-surface-variant"
            avatar={false}
            right={
              <P
                c="w-11 h-11 items-center justify-center"
                onPress={() => Share.share({ message: L(`I scored ${exam.score}/${exam.total} (${exam.pct}%) in a GCE ${name} Paper 1 practice paper on SciAid.`, `J’ai obtenu ${exam.score}/${exam.total} (${exam.pct} %) à une épreuve 1 d’entraînement de ${name} du GCE sur SciAid.`) })}
                accessibilityLabel="Share result"
              >
                <Ic n="ios_share" s={20} c="on-surface" />
              </P>
            }
          />
        }
      >
        <V c="pt-space-md pb-8 gap-space-lg">
          <V c="gap-1">
            <T c="font-headline-lg text-headline-lg text-on-surface" style={{ fontSize: 36, lineHeight: 42 }}>
              {exam.score} / {exam.total}
            </T>
            <T c="font-body-md text-body-md text-on-surface-variant">
              {exam.pct}%, {L('about grade', 'environ la note')} {grade}. {Math.round((exam.secs || 0) / 60)} {L(`of ${minutes} minutes used.`, `minutes sur ${minutes} utilisées.`)}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {prevBest == null
                ? L('This is your first Paper 1, so it becomes your starting point.', 'C’est votre première épreuve 1 : elle devient votre point de départ.')
                : exam.pct >= prevBest
                ? `${L('Your best so far. Previous best', 'Votre meilleur résultat. Meilleur précédent')}: ${prevBest}%.`
                : `${L('Your best so far is', 'Votre meilleur résultat est')} ${prevBest}%.`}{' '}
              {L('A practice estimate, not a GCE Board result.', 'Une estimation, pas un résultat du GCE Board.')}
            </T>
          </V>

          {units.length > 0 && (
            <Section title={L('By unit', 'Par unité')}>
              <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
                {units.map(({ u, c, t, pct }) => (
                  <V key={u} c="gap-1">
                    <V c="flex-row items-center justify-between gap-2">
                      <T c="font-label-md text-label-md text-on-surface flex-1" numberOfLines={1}>
                        {unitLabel(u)}
                      </T>
                      <T c="font-label-md text-label-md text-on-surface-variant" style={{ fontVariant: ['tabular-nums'] }}>
                        {c}/{t}
                      </T>
                    </V>
                    <Bar pct={pct} c="h-1.5 bg-surface-container-high" fill={pct >= 70 ? 'bg-secondary' : pct >= 50 ? 'bg-primary-container' : 'bg-tertiary-container'} />
                  </V>
                ))}
                {weakest && (
                  <T c="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                    {L('Revise', 'Révisez')} {unitLabel(weakest.u)} {L('next: read its lessons again, then take the unit quiz.', 'ensuite : relisez ses leçons, puis faites le quiz de l’unité.')}
                  </T>
                )}
              </V>
            </Section>
          )}

          <Section title={L('Questions', 'Questions')}>
            <V c="flex-row border-b border-surface-container mb-space-xs">
              {[
                ['incorrect', `${L('Wrong', 'Fausses')} ${wrong.length}`],
                ['correct', `${L('Right', 'Justes')} ${right.length}`],
                ['flagged', `${L('Flagged', 'Marquées')} ${flagged.length}`],
                ['all', `${L('All', 'Toutes')} ${items.length}`],
              ].map(([id, label]) => (
                <P key={id} c={`flex-1 pb-2 items-center ${filter === id ? 'border-b-2 border-primary-container' : ''}`} scale={1} onPress={() => setFilter(id)} accessibilityRole="tab" accessibilityState={{ selected: filter === id }}>
                  <T c={`font-label-md text-label-md ${filter === id ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: filter === id ? '700' : '500' }} numberOfLines={1}>
                    {label}
                  </T>
                </P>
              ))}
            </V>
            <V c="gap-space-sm">
              {list.slice(0, 30).map((it) => {
                const ok = it.p === 0;
                const unit = unitById(it.q.unit);
                return (
                  <V key={it.n} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-xs">
                    <T c="font-label-md text-label-md text-on-surface-variant">
                      {L('Question', 'Question')} {it.n}, {unit.short}
                      {it.f ? `, ${L('flagged', 'marquée')}` : ''}
                    </T>
                    <T c="font-body-lg text-body-lg text-on-surface" style={{ lineHeight: 24 }}>
                      {it.q.q}
                    </T>
                    {!ok && (
                      <T c="font-body-md text-body-md text-error">
                        {it.p >= 0 ? `${L('Your answer', 'Votre réponse')}: ${it.q.a[it.p]}` : L('Not answered', 'Sans réponse')}
                      </T>
                    )}
                    <T c="font-body-md text-body-md text-secondary" style={{ fontWeight: '600' }}>
                      {ok ? L('Correct', 'Juste') : L('Answer', 'Réponse')}: {it.q.a[0]}
                    </T>
                    {!ok && (
                      <>
                        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                          {it.q.why}
                        </T>
                        <V c="flex-row gap-space-md pt-space-xs flex-wrap">
                          <P c="flex-row items-center gap-1" onPress={() => speak(it)} hitSlop={8}>
                            <Ic n={speaking === it.n ? 'stop' : 'volume_up'} s={16} c="primary-container" />
                            <T c="font-label-md text-label-md text-primary-container">{speaking === it.n ? L('Stop', 'Arrêter') : L('Listen', 'Écouter')}</T>
                          </P>
                          <P onPress={() => navigation.navigate('Specimen', { unitId: unit.id })} hitSlop={8}>
                            <T c="font-label-md text-label-md text-primary-container">{L('3D model', 'Modèle 3D')}</T>
                          </P>
                          <P onPress={() => navigation.navigate('Quiz', { unitId: unit.id })} hitSlop={8}>
                            <T c="font-label-md text-label-md text-primary-container">{L('Practise this unit', 'S’entraîner')}</T>
                          </P>
                        </V>
                      </>
                    )}
                  </V>
                );
              })}
              {list.length > 30 && (
                <T c="font-body-sm text-body-sm text-on-surface-variant">
                  {list.length - 30} {L('more in the PDF.', 'autres dans le PDF.')}
                </T>
              )}
              {!list.length && <T c="font-body-sm text-body-sm text-on-surface-variant">{L('No questions in this list.', 'Aucune question ici.')}</T>}
            </V>
          </Section>

          <V c="gap-space-sm">
            {weakest && (
              <P c="w-full h-12 rounded-xl bg-primary-container items-center justify-center" onPress={() => navigation.navigate('Quiz', { unitId: weakest.u })}>
                <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                  {L('Practise my weakest unit', 'Travailler mon unité la plus faible')}
                </T>
              </P>
            )}
            <P c="w-full h-12 rounded-xl bg-surface-container items-center justify-center" onPress={pdf}>
              <T c="font-label-lg text-label-lg text-on-surface">{L('Save the marked paper as PDF', 'Enregistrer la copie corrigée en PDF')}</T>
            </P>
          </V>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
