import { useCallback, useState } from 'react';
import { Modal, RefreshControl, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Bar, C, Ic, P, Ring, T, V } from '../../ui/kit';
import { Pulse, Screen, TabHeader } from '../../ui/chrome';
import { get } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { daysToExam } from '../../state/progress';
import { accuracyByUnit, gradeFor, weakestUnit } from '../../state/selectors';
import { FREE_MOCKS_PER_WEEK, mocksThisWeek } from '../../data/plan';
import { unitById } from '../../data/units';
import { labById } from '../../data/labs';
import { P1 } from '../../lib/exam';
import { P2 } from '../../data/paper2';

export default function Exams({ navigation }) {
  const { user, pro, progress, stats } = useApp();
  const L = useL();
  const [filter, setFilter] = useState('all');
  const [assignments, setAssignments] = useState([]);
  const [rules, setRules] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      const r = await get('/v1/me/assignments');
      setAssignments(r.items.filter((a) => !a.doneAt && a.dueAt > Date.now()));
    } catch {
      // offline
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const days = daysToExam(user?.examYear);
  const p1 = progress.exams.filter((e) => e.kind === 'p1');
  const p2 = progress.exams.filter((e) => e.kind === 'p2');
  const history = [...progress.exams].sort((a, b) => b.at - a.at);
  const shown = filter === 'p1' ? history.filter((e) => e.kind === 'p1') : filter === 'p2' ? history.filter((e) => e.kind === 'p2') : history;
  const lastThree = p1.slice(-3);
  const predicted = lastThree.length ? Math.round(lastThree.reduce((a, e) => a + e.pct, 0) / lastThree.length) : null;
  const weak = weakestUnit(p1, stats.unitPct);
  const acc = weak ? accuracyByUnit(p1)[weak.unit.id] : null;
  const usedFree = !pro && mocksThisWeek(progress.exams) >= FREE_MOCKS_PER_WEEK;

  const startP1 = () => navigation.navigate(usedFree ? 'Paywall' : 'Paper1', usedFree ? { reason: 'mocks' } : undefined);
  const openAssignment = (a) => {
    if (a.kind === 'mock') startP1();
    else if (a.kind === 'lab' && labById(a.ref)) navigation.navigate('LabRun', { labId: a.ref });
    else if (unitById(a.ref)) navigation.navigate('Quiz', { unitId: a.ref });
  };

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" header={<TabHeader subtitle={L('Cameroon GCE', 'GCE Cameroun')} chip={L('Ready', 'Prêt')} />} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
        <V c="pb-6 gap-space-md pt-space-md">
          <V c="flex-row items-center justify-between pt-1">
            <V c="flex-1">
              <V c="self-start flex-row items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high mb-1">
                <Ic n="verified" s={14} c="primary" />
                <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('GCE practice papers', 'Épreuves d’entraînement')}</T>
              </V>
              <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Examination hub', 'Centre d’examens')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Written to the Cameroon GCE Board syllabus', 'Rédigé selon le programme du GCE Board')}</T>
            </V>
            <P c="w-10 h-10 rounded-xl bg-surface-container items-center justify-center shadow-sm" onPress={() => setRules(true)} accessibilityLabel="Exam rules">
              <Ic n="help_center" s={20} c="primary" />
            </P>
          </V>

          <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
            <V c="flex-row items-start justify-between">
              <V c="gap-1 pr-2 flex-1">
                <V c="flex-row items-center gap-1.5">
                  <V c="w-2 h-2 rounded-full bg-secondary" />
                  <T c="font-label-sm text-label-sm text-secondary uppercase tracking-wider">{L('Countdown to finals', 'Compte à rebours')}</T>
                </V>
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ lineHeight: 22 }}>
                  June {user?.examYear || new Date().getFullYear()} Cameroon GCE Biology
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Ordinary Level · Papers 1, 2 and 3', 'Ordinary Level · Épreuves 1, 2 et 3')}</T>
              </V>
              <Ring size={64} stroke={5} pct={Math.max(4, 100 - Math.min(100, (days / 365) * 100))} track={C['surface-container']} tint={C['primary-container']}>
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700', lineHeight: 18 }}>
                  {days}
                </T>
                <T c="font-label-sm text-on-surface-variant uppercase" style={{ fontSize: 9, lineHeight: 10 }}>
                  {L('Days', 'Jours')}
                </T>
              </Ring>
            </V>
            <V c="flex-row gap-space-xs pt-1">
              <V c="flex-1 bg-surface-container-low rounded-xl p-2.5 flex-row items-center gap-2">
                <V c="w-8 h-8 rounded-lg bg-primary/10 items-center justify-center">
                  <Ic n="target" s={18} c="primary" />
                </V>
                <V>
                  <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Target', 'Objectif')}</T>
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('Grade', 'Note')} {user?.targetGrade || 'A'}
                  </T>
                </V>
              </V>
              <V c="flex-1 bg-surface-container-low rounded-xl p-2.5 flex-row items-center gap-2">
                <V c="w-8 h-8 rounded-lg bg-secondary/10 items-center justify-center">
                  <Ic n="pie_chart" s={18} c="secondary" />
                </V>
                <V c="flex-1">
                  <V c="flex-row justify-between items-center">
                    <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Syllabus', 'Programme')}</T>
                    <T c="font-label-sm text-label-sm text-on-surface">{stats.mastery}%</T>
                  </V>
                  <V c="mt-1.5">
                    <Bar pct={stats.mastery} c="h-1.5 bg-surface-container" />
                  </V>
                </V>
              </V>
            </V>
          </V>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 8, paddingVertical: 2 }}>
            {[
              ['all', L('All exams', 'Tous')],
              ['p1', L('Paper 1 (MCQ)', 'Épreuve 1 (QCM)')],
              ['p2', L('Paper 2 (theory)', 'Épreuve 2 (théorie)')],
              ['p3', L('Paper 3 (practicals)', 'Épreuve 3 (TP)')],
            ].map(([id, label]) => {
              const on = filter === id;
              return (
                <P key={id} c={`px-3.5 py-1.5 rounded-full shadow-sm ${on ? 'bg-primary' : 'bg-surface-container-lowest'}`} onPress={() => (id === 'p3' ? navigation.navigate('Lab') : setFilter(id))} scale={0.95}>
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>{label}</T>
                </P>
              );
            })}
          </ScrollView>

          {filter !== 'p2' && (
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
              <V c="flex-row items-center justify-between">
                <V c="px-2 py-0.5 rounded-full bg-primary/10">
                  <T c="font-label-sm text-label-sm text-primary uppercase tracking-wider">{L('Paper 1 mock', 'Épreuve 1')}</T>
                </V>
                <V c="flex-row items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded-md">
                  <Ic n="cloud_done" s={15} c="secondary" />
                  <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Offline', 'Hors ligne')}</T>
                </V>
              </V>
              <V c="gap-1">
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Timed multiple choice paper', 'QCM chronométré')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('A fresh paper each time, drawn from all ten units with a worked explanation for every question.', 'Une nouvelle épreuve à chaque fois, tirée des dix unités, avec explications.')}</T>
              </V>
              <V c="flex-row flex-wrap items-center gap-2 pt-1">
                {[
                  ['timer', `${P1.minutes} ${L('mins', 'min')}`, 'on-surface-variant'],
                  ['format_list_numbered', `${P1.count} MCQs`, 'on-surface-variant'],
                  ['check_circle', L('No negative marks', 'Pas de points négatifs'), 'secondary'],
                ].map(([i, t, col]) => (
                  <V key={t} c="flex-row items-center gap-1.5 bg-surface-container-low px-2.5 py-1 rounded-lg">
                    <Ic n={i} s={16} c={col === 'secondary' ? 'secondary' : 'primary'} />
                    <T c={`font-label-md text-label-md text-${col}`}>{t}</T>
                  </V>
                ))}
              </V>
              <V c="pt-2 gap-2">
                <P c="w-full h-[52px] rounded-xl bg-primary-container flex-row items-center justify-center gap-2 shadow-md" onPress={startP1}>
                  <Ic n={usedFree ? 'lock' : 'play_arrow'} s={20} c="on-primary" />
                  <T c="font-label-lg text-label-lg text-on-primary">{usedFree ? L('Weekly free mock used · go Premium', 'Examen gratuit utilisé · Premium') : L('Start timed exam', 'Commencer l’examen')}</T>
                </P>
                {!pro && (
                  <T c="font-label-sm text-label-sm text-on-surface-variant text-center">{L('Free plan: 1 Paper 1 mock per week. Premium: unlimited.', 'Gratuit : 1 examen par semaine. Premium : illimité.')}</T>
                )}
              </V>
            </V>
          )}

          {filter !== 'p1' && (
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-2">
              <V c="flex-row items-start justify-between">
                <V c="flex-1 gap-0.5">
                  <T c="font-label-sm text-label-sm text-primary uppercase">{L('Paper 2 · Section A', 'Épreuve 2 · Section A')}</T>
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('Structured questions', 'Questions structurées')} · {P2.questions} {L('questions', 'questions')}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{pro ? L('Marked against the mark scheme by Dr. Nkwenti (AI)', 'Corrigé selon le barème par le Dr Nkwenti (IA)') : L('Self-mark with the scheme, or get AI marking with Premium', 'Auto-correction, ou correction IA avec Premium')}</T>
                </V>
                <V c="w-8 h-8 rounded-full bg-surface-container items-center justify-center">
                  <Ic n="edit_note" s={18} />
                </V>
              </V>
              <V c="pt-1 flex-row items-center justify-between gap-2">
                <T c="font-label-sm text-label-sm text-on-surface-variant flex-1">{L('Written answers and biological drawings', 'Réponses écrites et dessins')}</T>
                <P c="py-1.5 px-3 rounded-lg bg-primary-container flex-row items-center gap-1" onPress={() => navigation.navigate('Paper2')}>
                  <Ic n="edit_note" s={15} c="on-primary" />
                  <T c="font-label-sm text-label-sm text-on-primary">{L('Practice paper', 'S’entraîner')}</T>
                </P>
              </V>
              <P c="pt-1 flex-row items-center gap-1" onPress={() => navigation.navigate('MarkAnswer')}>
                <Ic n="document_scanner" s={16} c="secondary" />
                <T c="font-label-md text-label-md text-secondary">{L('Mark a handwritten answer from a photo', 'Corriger une réponse manuscrite en photo')}</T>
              </P>
            </V>
          )}

          <V c="gap-space-sm pt-1">
            <V c="flex-row items-center justify-between">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Set by your teacher', 'Donné par votre enseignant')}
              </T>
              <T c="font-label-sm text-label-sm text-primary">
                {assignments.length} {L('active', 'actifs')}
              </T>
            </V>
            {assignments.length ? (
              assignments.slice(0, 4).map((a) => {
                const d = Math.ceil((a.dueAt - Date.now()) / 86400000);
                return (
                  <V key={a.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center justify-between gap-3">
                    <V c="flex-row items-start gap-3 flex-1">
                      <V c="w-10 h-10 rounded-xl bg-secondary-container items-center justify-center">
                        <Ic n={a.kind === 'lab' ? 'science' : a.kind === 'mock' ? 'groups' : 'quiz'} s={20} c="on-secondary-container" />
                      </V>
                      <V c="flex-1">
                        <V c="flex-row items-center gap-1.5 flex-wrap">
                          <Pulse c="w-2 h-2 rounded-full bg-secondary" />
                          <T c="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                            {L('Due in', 'Dans')} {d} {d === 1 ? L('day', 'jour') : L('days', 'jours')}
                          </T>
                        </V>
                        <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
                          {a.title}
                        </T>
                        <T c="font-body-sm text-body-sm text-on-surface-variant">{a.className}</T>
                      </V>
                    </V>
                    <P c="px-3 py-2 rounded-xl bg-primary shadow-sm" onPress={() => openAssignment(a)} scale={0.95}>
                      <T c="font-label-md text-label-md text-on-primary">{L('Start', 'Commencer')}</T>
                    </P>
                  </V>
                );
              })
            ) : (
              <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center gap-3">
                <V c="w-10 h-10 rounded-xl bg-surface-container items-center justify-center">
                  <Ic n="school" s={20} c="primary" />
                </V>
                <V c="flex-1">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('No work set right now', 'Aucun devoir pour le moment')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Join your class with the code from your teacher to receive mocks here.', 'Rejoignez votre classe avec le code de l’enseignant.')}</T>
                </V>
                <P c="px-3 py-2 rounded-xl bg-surface-container" onPress={() => navigation.navigate('JoinClass')}>
                  <T c="font-label-md text-label-md text-primary">{L('Join', 'Rejoindre')}</T>
                </P>
              </V>
            )}
          </V>

          <V c="gap-space-sm pt-1">
            <V c="flex-row items-center justify-between">
              <V>
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Your past attempts', 'Vos essais')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Review answers and explanations', 'Revoir réponses et explications')}</T>
              </V>
              <T c="font-label-sm text-label-sm text-primary">{shown.length}</T>
            </V>
            {!shown.length && (
              <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm items-center gap-1">
                <Ic n="history_edu" s={28} c="outline" />
                <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Your completed papers will appear here.', 'Vos épreuves terminées apparaîtront ici.')}</T>
              </V>
            )}
            {shown.slice(0, 6).map((e, i) => {
              const g = gradeFor(e.pct);
              return (
                <V key={e.id || i} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-2">
                  <V c="flex-row items-start justify-between">
                    <V c="flex-1 gap-0.5">
                      <T c={`font-label-sm text-label-sm uppercase ${i === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
                        {new Date(e.at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </T>
                      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                        {e.kind === 'p1' ? `${L('Paper 1 (MCQ)', 'Épreuve 1 (QCM)')} · ${e.total} ${L('questions', 'questions')}` : `${L('Paper 2 (theory)', 'Épreuve 2')} · ${e.marked === 'ai' ? L('AI marked', 'corrigé IA') : L('self-marked', 'auto-corrigé')}`}
                      </T>
                    </V>
                    <V c="items-end">
                      <V c={`flex-row items-center gap-1 px-2 py-0.5 rounded-full ${g === 'A' ? 'bg-secondary-container' : 'bg-surface-container'}`}>
                        {g === 'A' && <Ic n="military_tech" s={13} c="on-secondary-container" />}
                        <T c={`font-label-sm text-label-sm ${g === 'A' ? 'text-on-secondary-container' : 'text-on-surface-variant'}`}>
                          {L('Grade', 'Note')} {g}
                        </T>
                      </V>
                      <T c="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                        {e.score} / {e.total}
                      </T>
                    </V>
                  </V>
                  <V c="pt-1 flex-row items-center gap-2">
                    {e.kind === 'p1' && (
                      <P c="flex-1 py-2 px-3 rounded-lg bg-surface-container-low flex-row items-center justify-center gap-1.5" onPress={() => navigation.navigate('Results', { exam: e })}>
                        <Ic n="visibility" s={16} c="primary" />
                        <T c="font-label-md text-label-md text-primary">{L('Review answers', 'Revoir')}</T>
                      </P>
                    )}
                    <P c="flex-1 py-2 px-3 rounded-lg bg-surface-container flex-row items-center justify-center gap-1.5" onPress={() => (e.kind === 'p1' ? startP1() : navigation.navigate('Paper2'))}>
                      <Ic n="refresh" s={16} c="on-surface" />
                      <T c="font-label-md text-label-md text-on-surface">{L('New attempt', 'Nouvel essai')}</T>
                    </P>
                  </V>
                </V>
              );
            })}
          </V>

          <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-2 flex-1">
                <V c="w-8 h-8 rounded-lg bg-primary/10 items-center justify-center">
                  <Ic n="trending_up" s={18} c="primary" />
                </V>
                <V c="flex-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('Your exam trajectory', 'Votre trajectoire')}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">
                    {p1.length ? `${L('Based on', 'Basé sur')} ${p1.length} ${p1.length === 1 ? L('Paper 1 sitting', 'épreuve 1') : L('Paper 1 sittings', 'épreuves 1')}` : L('Sit a Paper 1 mock to start', 'Passez une épreuve 1 pour commencer')}
                  </T>
                </V>
              </V>
              {predicted != null && (
                <V c="items-end">
                  <T c="font-headline-md text-headline-md text-secondary" style={{ fontWeight: '700' }}>
                    {predicted}%
                  </T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant">
                    {L('Recent average', 'Moyenne récente')} · {gradeFor(predicted)}
                  </T>
                </V>
              )}
            </V>
            {weak && (
              <V c="bg-surface-container-low rounded-xl p-3 gap-2">
                <V c="flex-row items-start gap-2">
                  <Ic n="warning" s={18} c="tertiary" style={{ marginTop: 2 }} />
                  <V c="flex-1">
                    <T c="font-label-sm text-label-sm text-tertiary uppercase tracking-wide">{L('Weakest area', 'Point faible')}</T>
                    <T c="font-body-md text-body-md text-on-surface" style={{ fontWeight: '600' }}>
                      {weak.unit.short}
                    </T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">
                      {acc != null ? `${L('Accuracy in mocks', 'Précision aux examens')}: ${acc}%` : `${L('Unit mastery', 'Maîtrise')}: ${weak.pct}%`}
                    </T>
                  </V>
                </V>
                <P c="w-full h-11 rounded-lg bg-primary flex-row items-center justify-center gap-2 shadow-sm" onPress={() => navigation.navigate('Quiz', { unitId: weak.unit.id })}>
                  <Ic n="bolt" s={18} c="on-primary" />
                  <T c="font-label-md text-label-md text-on-primary">{L('Quick drill on this unit', 'Exercice rapide sur cette unité')}</T>
                </P>
              </V>
            )}
          </V>
        </V>
      </Screen>

      <Modal visible={rules} transparent animationType="slide" onRequestClose={() => setRules(false)}>
        <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="bg-surface-container-lowest rounded-t-3xl p-space-lg gap-space-sm">
            <T c="font-headline-md text-headline-md text-on-surface">{L('How practice exams work', 'Fonctionnement des examens')}</T>
            {[
              L('Paper 1: 50 multiple choice questions in 90 minutes. One mark each, no negative marking. The timer keeps running if you leave.', 'Épreuve 1 : 50 QCM en 90 minutes, sans points négatifs. Le minuteur continue si vous quittez.'),
              L('Paper 2: three structured questions in 60 minutes, with written answers and drawings.', 'Épreuve 2 : trois questions structurées en 60 minutes.'),
              L('Paper 3: practicals are in the Lab tab and your workbook.', 'Épreuve 3 : les TP sont dans l’onglet Labo.'),
              L('Grades shown are practice estimates, not official GCE Board results.', 'Les notes affichées sont des estimations, pas des résultats officiels.'),
            ].map((t) => (
              <V key={t} c="flex-row gap-2">
                <V c="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                <T c="font-body-md text-body-md text-on-surface flex-1">{t}</T>
              </V>
            ))}
            <P c="h-12 rounded-xl bg-primary-container items-center justify-center mt-space-sm" onPress={() => setRules(false)}>
              <T c="font-label-lg text-label-lg text-on-primary">{L('Got it', 'Compris')}</T>
            </P>
          </V>
        </V>
      </Modal>
    </V>
  );
}
