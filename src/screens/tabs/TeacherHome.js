import { useCallback, useState } from 'react';
import { Linking, RefreshControl, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader, TabHeader, useToast } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { unitById, unitsFor } from '../../data/units';
import { labsFor } from '../../data/labs';
import { mockRef, p1For } from '../../lib/exam';
import { minutesLabel, subjectName } from '../../data/subjects';
import { Section } from './Home';

const DAY = 86400000;

// The class's weakest unit, from the unit mastery its students have saved.
function weakUnit(students, subject) {
  const sum = {};
  for (const s of students) {
    for (const [u, v] of Object.entries(s.unitMastery || {})) {
      if (unitById(u)?.subject === subject) (sum[u] = sum[u] || []).push(v);
    }
  }
  const avg = Object.entries(sum).map(([u, list]) => [u, list.reduce((a, b) => a + b, 0) / list.length]);
  if (!avg.length) return null;
  const [u, v] = avg.sort((a, b) => a[1] - b[1])[0];
  return { unit: unitById(u), pct: Math.round(v) };
}

function Row({ title, sub, right, onPress, first, disabled }) {
  return (
    <P c={`p-space-md flex-row items-center gap-space-sm ${first ? '' : 'border-t border-surface-container'}`} onPress={onPress} disabled={disabled || !onPress} scale={0.99}>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '600' }} numberOfLines={2}>
          {title}
        </T>
        {!!sub && <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>}
      </V>
      {!!right && (
        <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
          {right}
        </T>
      )}
    </P>
  );
}

export function TeacherPortal({ navigation, standalone }) {
  const { user } = useApp();
  const L = useL();
  const lang = useLang();
  const [classes, setClasses] = useState(null);
  const [active, setActive] = useState(null);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [assigning, setAssigning] = useState(null);
  const [toast, showToast] = useToast();

  const loadDetail = useCallback(async (id) => {
    try {
      setDetail(await get(`/v1/classes/${id}`));
      setError(null);
    } catch (e) {
      setError(e);
    }
  }, []);

  const load = useCallback(async () => {
    try {
      const r = await get('/v1/classes');
      setClasses(r.items);
      const id = active && r.items.some((c) => c.id === active) ? active : r.items[0]?.id;
      setActive(id || null);
      if (id) await loadDetail(id);
      setError(null);
    } catch (e) {
      setError(e);
      setClasses((c) => c || []);
    }
  }, [active, loadDetail]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const assign = async (kind, ref, title, dueInDays = 7) => {
    if (!detail) return;
    setAssigning(ref);
    try {
      await post(`/v1/classes/${detail.class.id}/assignments`, { kind, ref, title, dueInDays });
      showToast(L('Sent to every student in the class', 'Envoyé à tous les élèves de la classe'));
      await loadDetail(detail.class.id);
    } catch (e) {
      showToast(e.message, 'error');
    } finally {
      setAssigning(null);
    }
  };

  const subject = detail?.class.subject || 'biology';
  const name = subjectName(subject, lang);
  const students = detail?.students || [];
  const sorted = [...students].sort((a, b) => a.mastery - b.mastery);
  const quiet = (s) => !s.lastActive || Date.now() - s.lastActive > 3 * DAY;
  const weak = weakUnit(students, subject);
  const P1 = p1For(subject);
  const header = standalone ? <StackHeader title={L('Classes', 'Classes')} logo /> : <TabHeader subtitle={[L('Teacher', 'Enseignant'), user?.schoolName].filter(Boolean).join(', ')} />;
  const sending = (ref) => (assigning === ref ? L('Sending', 'Envoi') : L('Set', 'Donner'));

  if (classes === null) return <Screen header={header}><Spinner /></Screen>;

  return (
    <V c="flex-1">
      <Screen header={header} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
        <V c="pt-space-md pb-space-xl gap-space-lg">
          <ErrorNote error={error} />

          {!classes.length ? (
            <V c="gap-space-sm">
              <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                {L('Create your first class', 'Créez votre première classe')}
              </T>
              <T c="font-body-md text-body-md text-on-surface-variant">{L('Each class is for one subject. You get a code to share with your students.', 'Chaque classe porte sur une matière. Vous obtenez un code à partager avec vos élèves.')}</T>
              <Cta variant="dark" icon={null} label={L('Create a class', 'Créer une classe')} onPress={() => navigation.navigate('CreateClass', { fromPortal: true })} />
            </V>
          ) : (
            <>
              {classes.length > 1 && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 20 }}>
                  {classes.map((c) => {
                    const on = c.id === active;
                    return (
                      <P key={c.id} c={`pb-1.5 border-b-2 ${on ? 'border-primary-container' : 'border-transparent'}`} onPress={() => (setActive(c.id), setDetail(null), loadDetail(c.id))} scale={1} accessibilityRole="tab" accessibilityState={{ selected: on }}>
                        <T c={`font-label-lg text-label-lg ${on ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: on ? '700' : '500' }}>
                          {c.name}
                        </T>
                      </P>
                    );
                  })}
                </ScrollView>
              )}

              {!detail ? (
                <Spinner />
              ) : (
                <>
                  <V c="gap-space-xs">
                    <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{detail.class.name}</T>
                    <T c="font-body-md text-body-md text-on-surface-variant">
                      {name}, {detail.summary.students} {detail.summary.students === 1 ? L('student', 'élève') : L('students', 'élèves')}
                    </T>
                  </V>

                  <V c="bg-surface-container-lowest rounded-xl shadow-sm p-space-md gap-space-sm">
                    <V c="flex-row items-center justify-between">
                      <V>
                        <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Join code', 'Code d’accès')}</T>
                        <T c="font-headline-md text-headline-md text-on-surface tracking-wider" style={{ fontWeight: '700' }}>
                          {detail.class.joinCode}
                        </T>
                      </V>
                      <P
                        c="h-10 px-3 rounded-lg bg-surface-container flex-row items-center gap-1.5"
                        onPress={async () => {
                          await Clipboard.setStringAsync(detail.class.joinCode);
                          showToast(L('Code copied', 'Code copié'));
                        }}
                      >
                        <Ic n="content_copy" s={18} c="on-surface" />
                        <T c="font-label-md text-label-md text-on-surface">{L('Copy', 'Copier')}</T>
                      </P>
                    </V>
                    <P
                      c="self-start py-1"
                      hitSlop={8}
                      onPress={() =>
                        Linking.openURL(
                          `https://wa.me/?text=${encodeURIComponent(L(`Join my ${name} class on ScienceAid: ${detail.class.name}. Code: ${detail.class.joinCode}`, `Rejoignez ma classe de ${name.toLowerCase()} sur ScienceAid : ${detail.class.name}. Code : ${detail.class.joinCode}`))}`
                        )
                      }
                    >
                      <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                        {L('Share the code on WhatsApp', 'Partager le code sur WhatsApp')}
                      </T>
                    </P>
                  </V>

                  <Section title={L('Class progress', 'Progression de la classe')}>
                    {students.length ? (
                      <V c="gap-space-sm">
                        <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                          {L('Average mastery', 'Maîtrise moyenne')} {detail.summary.mastery}%. {detail.summary.practicalRate}% {L('have done a practical.', 'ont fait un TP.')}{' '}
                          {detail.summary.mockAverage != null ? `${L('Average best Paper 1', 'Moyenne des meilleures épreuves 1')}: ${detail.summary.mockAverage}%.` : L('No Paper 1 done yet.', 'Aucune épreuve 1 faite.')}
                        </T>
                        {weak?.unit && (
                          <V c="flex-row items-center gap-space-sm">
                            <T c="font-body-md text-body-md text-on-surface flex-1">
                              {L('Weakest unit', 'Unité la plus faible')}: {weak.unit.n}. {weak.unit.short} ({weak.pct}%)
                            </T>
                            <P onPress={() => assign('quiz', weak.unit.id, `${weak.unit.short}: practice quiz`, 5)} disabled={!!assigning} hitSlop={8}>
                              <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                                {assigning === weak.unit.id ? L('Sending', 'Envoi') : L('Set a quiz', 'Donner un quiz')}
                              </T>
                            </P>
                          </V>
                        )}
                        <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                          {sorted.map((s, i) => {
                            const days = s.lastActive ? Math.floor((Date.now() - s.lastActive) / DAY) : null;
                            return (
                              <V key={s.id} c={`px-space-md py-space-sm gap-1 ${i ? 'border-t border-surface-container' : ''}`}>
                                <V c="flex-row items-center justify-between gap-2">
                                  <T c="font-body-md text-body-md text-on-surface flex-1" numberOfLines={1}>
                                    {s.name}
                                  </T>
                                  <T c="font-label-md text-label-md text-on-surface-variant">
                                    {s.mastery}%{s.bestMock != null ? `, P1 ${s.bestMock}%` : ''}
                                  </T>
                                </V>
                                <Bar pct={s.mastery} c="h-1 bg-surface-container-high" fill={s.mastery >= 70 ? 'bg-secondary' : s.mastery < 40 ? 'bg-error' : 'bg-primary-container'} />
                                <T c={`font-body-sm text-body-sm ${quiet(s) ? 'text-error' : 'text-on-surface-variant'}`}>
                                  {days == null
                                    ? L('Has not studied yet', 'N’a pas encore révisé')
                                    : days === 0
                                    ? L('Active today', 'Actif aujourd’hui')
                                    : `${L('Last active', 'Dernière activité :')} ${days} ${days === 1 ? L('day ago', 'jour') : L('days ago', 'jours')}`}
                                </T>
                              </V>
                            );
                          })}
                        </V>
                      </V>
                    ) : (
                      <T c="font-body-md text-body-md text-on-surface-variant">{L('No students yet. Share the join code with your class.', 'Aucun élève pour le moment. Partagez le code avec votre classe.')}</T>
                    )}
                  </Section>

                  {detail.assignments.length > 0 && (
                    <Section title={L('Work set', 'Travaux donnés')}>
                      <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                        {detail.assignments.slice(0, 8).map((a, i) => {
                          const left = Math.ceil((a.dueAt - Date.now()) / DAY);
                          return (
                            <Row
                              key={a.id}
                              first={i === 0}
                              title={a.title}
                              sub={`${a.done}/${students.length} ${L('done', 'faits')}. ${left > 0 ? `${L('Due in', 'Dans')} ${left} ${left === 1 ? L('day', 'jour') : L('days', 'jours')}` : L('Closed', 'Terminé')}`}
                            />
                          );
                        })}
                      </V>
                    </Section>
                  )}

                  <Section title={L('Set new work', 'Donner du travail')}>
                    <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                      <Row
                        first
                        title={`${name} ${L('Paper 1, timed', 'épreuve 1, chronométrée')}`}
                        sub={`${P1.count} ${L('questions in', 'questions en')} ${minutesLabel(P1.minutes, L)}`}
                        right={sending(mockRef(subject))}
                        disabled={!!assigning}
                        onPress={() => assign('mock', mockRef(subject), `${subjectName(subject, 'en')} Paper 1, timed`)}
                      />
                      {labsFor(subject).map((l) => (
                        <Row key={l.id} title={`${L('Practical', 'TP')}: ${l.title}`} sub={`${l.minutes} min`} right={sending(l.id)} disabled={!!assigning} onPress={() => assign('lab', l.id, `Practical: ${l.short}`)} />
                      ))}
                      {unitsFor(subject).map((u) => (
                        <Row key={u.id} title={`${L('Quiz', 'Quiz')}: ${u.n}. ${u.short}`} sub={`${u.quiz.length} ${L('questions', 'questions')}`} right={sending(u.id)} disabled={!!assigning} onPress={() => assign('quiz', u.id, `${u.short}: practice quiz`)} />
                      ))}
                    </V>
                  </Section>
                </>
              )}

              <P c="self-start py-1" onPress={() => navigation.navigate('CreateClass', { fromPortal: true })} hitSlop={8}>
                <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                  {L('Create another class', 'Créer une autre classe')}
                </T>
              </P>
            </>
          )}
        </V>
      </Screen>
      {toast}
    </V>
  );
}

export default function TeacherHome(props) {
  return <TeacherPortal {...props} />;
}
