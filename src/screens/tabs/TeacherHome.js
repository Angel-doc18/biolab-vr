import { useCallback, useState } from 'react';
import { Linking, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { Avatar, Bar, Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader, TabHeader, useToast } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { units, unitById } from '../../data/units';
import { LABS } from '../../data/labs';

const DAY = 86400000;

function Metric({ label, icon, iconC, value, suffix, foot, footC = 'on-surface-variant' }) {
  return (
    <V c="flex-1 bg-surface-container-lowest p-3 rounded-xl shadow-sm justify-between">
      <V c="flex-row items-center justify-between">
        <T c="font-label-sm text-label-sm text-on-surface-variant">{label}</T>
        <Ic n={icon} s={16} c={iconC} />
      </V>
      <V c="my-2 flex-row items-end">
        <T c="font-display-lg text-display-lg text-on-surface tracking-tight">{value}</T>
        {!!suffix && <T c="font-body-sm text-body-sm text-on-surface-variant mb-1.5">{suffix}</T>}
      </V>
      <T c={`font-label-sm text-label-sm text-${footC}`} numberOfLines={1}>
        {foot}
      </T>
    </V>
  );
}

// Class-wide weakest unit from students' synced unit mastery.
function cohortWeakUnit(students) {
  const sum = {};
  for (const s of students) for (const [u, v] of Object.entries(s.unitMastery || {})) (sum[u] = sum[u] || []).push(v);
  const avg = Object.entries(sum).map(([u, list]) => [u, list.reduce((a, b) => a + b, 0) / list.length]);
  if (!avg.length) return null;
  const [u, v] = avg.sort((a, b) => a[1] - b[1])[0];
  return { unit: unitById(u), pct: Math.round(v) };
}

export function TeacherPortal({ navigation, standalone }) {
  const { user } = useApp();
  const L = useL();
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
      showToast(L('Sent to every student in the class', 'Envoyé à tous les élèves'));
      await loadDetail(detail.class.id);
    } catch (e) {
      showToast(e.message, 'error');
    } finally {
      setAssigning(null);
    }
  };

  const students = detail?.students || [];
  const top = [...students].sort((a, b) => b.mastery - a.mastery).slice(0, 3).filter((s) => s.mastery > 0);
  const atRisk = students.filter((s) => s.mastery < 50 || !s.lastActive || Date.now() - s.lastActive > 3 * DAY);
  const weak = cohortWeakUnit(students);
  const header = standalone ? <StackHeader title={L('Teacher & Classroom Portal', 'Portail enseignant')} logo /> : <TabHeader subtitle={L('Classroom portal', 'Portail de classe')} />;

  if (classes === null) return <Screen header={header}><Spinner /></Screen>;

  return (
    <V c="flex-1">
      <Screen header={header} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
        <V c="pt-space-md pb-space-lg gap-space-md">
          <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-sm">
            <V c="flex-row items-start justify-between gap-space-sm">
              <V c="flex-row items-center gap-space-sm flex-1">
                <V>
                  <Avatar name={user?.name} size={48} />
                  <V c="absolute bottom-0 right-0 w-3.5 h-3.5 bg-secondary rounded-full items-center justify-center" style={{ borderRadius: 7 }}>
                    <V c="w-2 h-2 bg-surface-container-lowest rounded-full" />
                  </V>
                </V>
                <V c="flex-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
                    {user?.name}
                  </T>
                  <T c="font-label-md text-label-md text-primary">{L('Biology teacher', 'Enseignant de biologie')}</T>
                </V>
              </V>
              <V c="bg-surface-container px-2.5 py-1 rounded-full flex-row items-center gap-1">
                <Ic n="co_present" s={14} c="primary" />
                <T c="font-label-sm text-label-sm text-primary">
                  {classes.length} {classes.length === 1 ? L('class', 'classe') : L('classes', 'classes')}
                </T>
              </V>
            </V>
            <V c="bg-surface-container-low p-space-sm rounded-lg gap-1">
              <V c="flex-row items-center gap-1.5">
                <Ic n="account_balance" s={16} c="primary" />
                <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                  {user?.schoolName || L('No school selected', 'Aucune école')}
                </T>
              </V>
              {detail && (
                <V c="flex-row items-center gap-1.5">
                  <Ic n="groups" s={16} c="secondary" />
                  <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                    {detail.class.name} · {detail.summary.students} {L('registered', 'inscrits')}
                  </T>
                </V>
              )}
            </V>
            {classes.length > 1 && (
              <V c="flex-row flex-wrap gap-2">
                {classes.map((c) => (
                  <P key={c.id} c={`px-3 py-1.5 rounded-full ${c.id === active ? 'bg-primary-container' : 'bg-surface-container-low'}`} onPress={() => (setActive(c.id), setDetail(null), loadDetail(c.id))}>
                    <T c={`font-label-md text-label-md ${c.id === active ? 'text-on-primary' : 'text-on-surface-variant'}`}>{c.name}</T>
                  </P>
                ))}
              </V>
            )}
            {detail && (
              <V c="flex-row items-center justify-between bg-primary-fixed/30 px-3 py-2.5 rounded-lg">
                <V>
                  <T c="font-label-sm text-label-sm text-on-primary-fixed-variant">{L('Student join code', 'Code d’accès élève')}</T>
                  <T c="font-headline-sm text-headline-sm text-on-surface tracking-wider" style={{ fontWeight: '700' }}>
                    {detail.class.joinCode}
                  </T>
                </V>
                <P
                  c="bg-primary px-3 py-2 rounded-lg flex-row items-center gap-1.5 shadow-sm"
                  onPress={async () => {
                    await Clipboard.setStringAsync(detail.class.joinCode);
                    showToast(L('Code copied', 'Code copié'));
                  }}
                >
                  <Ic n="content_copy" s={18} c="on-primary" />
                  <T c="font-label-lg text-label-lg text-on-primary">{L('Copy', 'Copier')}</T>
                </P>
              </V>
            )}
          </V>

          <ErrorNote error={error} />

          {!classes.length ? (
            <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm items-center gap-space-sm">
              <Ic n="group_add" s={36} c="primary-container" />
              <T c="font-headline-sm text-headline-sm text-on-surface">{L('Create your first class', 'Créez votre première classe')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('You get a join code to share with students.', 'Vous obtenez un code à partager avec vos élèves.')}</T>
              <Cta h="h-12" label={L('Create class', 'Créer une classe')} icon="add" onPress={() => navigation.navigate('CreateClass', { fromPortal: true })} />
            </V>
          ) : (
            <>
              {detail && (
                <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-sm">
                  <V c="flex-row items-center gap-2">
                    <V c="w-8 h-8 rounded-full bg-secondary-container items-center justify-center">
                      <Ic n="share" s={20} c="on-secondary-container" />
                    </V>
                    <V c="flex-1">
                      <T c="font-headline-sm text-headline-sm text-on-surface">{L('Invite your class', 'Invitez votre classe')}</T>
                      <T c="font-label-sm text-label-sm text-secondary">{L('Share the code on your class WhatsApp group', 'Partagez le code sur le groupe WhatsApp')}</T>
                    </V>
                  </V>
                  <P
                    c="w-full bg-primary-container py-3 rounded-lg flex-row items-center justify-center gap-2 shadow-sm"
                    onPress={() =>
                      Linking.openURL(
                        `https://wa.me/?text=${encodeURIComponent(
                          `${L('Join my Biology class on BioSpatial VR', 'Rejoignez ma classe de biologie sur BioSpatial VR')}: ${detail.class.name}. ${L('Code', 'Code')}: ${detail.class.joinCode}`
                        )}`
                      )
                    }
                  >
                    <Ic n="send" s={20} c="on-primary" />
                    <T c="font-label-lg text-label-lg text-on-primary">{L('Share join code', 'Partager le code')}</T>
                  </P>
                </V>
              )}

              {detail && (
                <V c="gap-space-xs">
                  <V c="flex-row items-center justify-between px-1">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{L('Cohort diagnostics', 'Diagnostic de la classe')}</T>
                    <T c="font-label-sm text-label-sm text-on-surface-variant">{detail.summary.students} {L('students', 'élèves')}</T>
                  </V>
                  <V c="flex-row gap-2">
                    <Metric label={L('Mastery', 'Maîtrise')} icon="donut_large" iconC="secondary" value={`${detail.summary.mastery}%`} foot={L('Class average', 'Moyenne')} footC="secondary" />
                    <Metric label={L('Practical', 'TP')} icon="biotech" iconC="primary" value={`${detail.summary.practicalRate}%`} foot={L('Did a lab', 'Ont fait un TP')} />
                    <Metric
                      label={L('Paper 1', 'Épreuve 1')}
                      icon="assignment_turned_in"
                      iconC="tertiary"
                      value={detail.summary.mockAverage == null ? '-' : `${detail.summary.mockAverage}`}
                      suffix={detail.summary.mockAverage == null ? '' : '%'}
                      foot={L('Best mock avg', 'Moyenne')}
                      footC="primary"
                    />
                  </V>
                </V>
              )}

              {detail && students.length > 0 && (
                <V c="gap-space-xs">
                  <V c="flex-row items-center justify-between px-1">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{L('Student performance', 'Performance des élèves')}</T>
                    <T c="font-label-sm text-label-sm text-primary">{students.length} {L('screened', 'suivis')}</T>
                  </V>
                  {top.length > 0 && (
                    <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-2">
                      <V c="flex-row items-center justify-between">
                        <V c="flex-row items-center gap-1.5">
                          <Ic n="workspace_premium" s={18} c="secondary" />
                          <T c="font-label-lg text-label-lg text-secondary" style={{ fontWeight: '700' }}>
                            {L('Top performers', 'Meilleurs élèves')}
                          </T>
                        </V>
                      </V>
                      <V c="flex-row gap-2 pt-1">
                        {top.map((s, i) => (
                          <V key={s.id} c="flex-1 bg-surface-container-low p-2 rounded-lg items-center">
                            <T c="font-label-md text-label-md text-on-surface" numberOfLines={1}>
                              {s.name}
                            </T>
                            <T c="font-headline-sm text-headline-sm text-secondary" style={{ fontWeight: '700' }}>
                              {s.mastery}%
                            </T>
                            <T c="font-label-sm text-label-sm text-on-surface-variant">#{i + 1}</T>
                          </V>
                        ))}
                      </V>
                    </V>
                  )}
                  {atRisk.length > 0 && (
                    <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-sm">
                      <V c="flex-row items-start justify-between gap-space-sm">
                        <V c="flex-row items-center gap-2 flex-1">
                          <V c="w-7 h-7 rounded-full bg-error-container items-center justify-center">
                            <Ic n="crisis_alert" s={18} c="on-error-container" />
                          </V>
                          <V c="flex-1">
                            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                              {L('Needs support', 'À accompagner')}
                            </T>
                            <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                              {weak ? `${L('Weakest unit', 'Unité la plus faible')}: ${weak.unit?.short} (${weak.pct}%)` : L('Low mastery or inactive for 3+ days', 'Faible maîtrise ou inactif')}
                            </T>
                          </V>
                        </V>
                        <V c="bg-error-container px-2 py-0.5 rounded-full">
                          <T c="font-label-md text-label-md text-on-error-container">
                            {atRisk.length} {L('students', 'élèves')}
                          </T>
                        </V>
                      </V>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">{atRisk.slice(0, 6).map((s) => s.name).join(', ')}</T>
                      {weak?.unit && (
                        <V c="bg-surface-container-low p-2.5 rounded-lg flex-row items-center justify-between">
                          <V c="flex-row items-center gap-2 flex-1">
                            <Ic n="priority_high" s={20} c="tertiary" />
                            <T c="font-body-sm text-body-sm text-on-surface flex-1">{L('Set a practice quiz on this unit', 'Donner un quiz sur cette unité')}</T>
                          </V>
                          <P c="bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm" onPress={() => assign('quiz', weak.unit.id, `${weak.unit.short}: practice quiz`, 5)} disabled={!!assigning}>
                            <T c="font-label-sm text-label-sm text-primary">{assigning === weak.unit.id ? '...' : L('Send quiz', 'Envoyer')}</T>
                          </P>
                        </V>
                      )}
                    </V>
                  )}
                </V>
              )}

              {detail && (
                <V c="gap-space-xs">
                  <V c="flex-row items-center justify-between px-1">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{L('Assignment hub', 'Devoirs')}</T>
                    <T c="font-label-sm text-label-sm text-on-surface-variant">{detail.assignments.length} {L('set', 'donnés')}</T>
                  </V>
                  <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-md">
                    {detail.assignments.slice(0, 4).map((a) => {
                      const left = Math.ceil((a.dueAt - Date.now()) / DAY);
                      return (
                        <V key={a.id} c="gap-2">
                          <V c="flex-row items-center justify-between">
                            <V c="bg-primary-fixed px-2 py-0.5 rounded">
                              <T c="font-label-sm text-label-sm text-on-primary-fixed-variant">
                                {a.kind === 'lab' ? L('Practical', 'TP') : a.kind === 'mock' ? L('Paper 1 mock', 'Épreuve 1') : L('Quiz', 'Quiz')}
                              </T>
                            </V>
                            <V c="flex-row items-center gap-1">
                              <Ic n="schedule" s={16} c={left <= 2 ? 'error' : 'on-surface-variant'} />
                              <T c={`font-label-md text-label-md ${left <= 2 ? 'text-error' : 'text-on-surface-variant'}`}>
                                {left > 0 ? `${L('Due in', 'Dans')} ${left} ${left === 1 ? L('day', 'jour') : L('days', 'jours')}` : L('Closed', 'Terminé')}
                              </T>
                            </V>
                          </V>
                          <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
                            {a.title}
                          </T>
                          <V c="flex-row items-center gap-2">
                            <V c="flex-1">
                              <Bar pct={students.length ? (a.done / students.length) * 100 : 0} c="h-2 bg-surface-container" fill="bg-primary" />
                            </V>
                            <T c="font-label-sm text-label-sm text-on-surface">
                              {a.done}/{students.length} {L('done', 'faits')}
                            </T>
                          </V>
                        </V>
                      );
                    })}
                    <V c="gap-2 pt-space-xs">
                      <T c="font-label-md text-label-md text-on-surface-variant">{L('Set new work', 'Donner du travail')}</T>
                      <V c="flex-row gap-2">
                        <P c="flex-1 bg-surface-container-low p-3 rounded-lg gap-1" onPress={() => assign('mock', 'paper1', L('Paper 1 timed mock', 'Épreuve 1 chronométrée'))} disabled={!!assigning}>
                          <V c="flex-row items-center gap-1.5">
                            <Ic n="quiz" s={18} c="primary" />
                            <T c="font-label-lg text-label-lg text-primary" style={{ fontWeight: '700' }}>
                              {L('Paper 1 mock', 'Épreuve 1')}
                            </T>
                          </V>
                          <T c="font-body-sm text-body-sm text-on-surface-variant">{assigning === 'paper1' ? L('Sending...', 'Envoi...') : L('50 MCQs · 90 min', '50 QCM · 90 min')}</T>
                        </P>
                        <P c="flex-1 bg-surface-container-low p-3 rounded-lg gap-1" onPress={() => assign('lab', 'osmosis', L('Practical: osmosis and plasmolysis', 'TP : osmose et plasmolyse'))} disabled={!!assigning}>
                          <V c="flex-row items-center gap-1.5">
                            <Ic n="science" s={18} c="secondary" />
                            <T c="font-label-lg text-label-lg text-secondary" style={{ fontWeight: '700' }}>
                              {L('Paper 3 lab', 'TP épreuve 3')}
                            </T>
                          </V>
                          <T c="font-body-sm text-body-sm text-on-surface-variant">{assigning === 'osmosis' ? L('Sending...', 'Envoi...') : L('Osmosis practical', 'TP osmose')}</T>
                        </P>
                      </V>
                      <V c="flex-row flex-wrap gap-1.5">
                        {LABS.filter((l) => l.id !== 'osmosis').map((l) => (
                          <P key={l.id} c="px-2.5 py-1.5 rounded-lg bg-surface-container" onPress={() => assign('lab', l.id, `${L('Practical', 'TP')}: ${l.short}`)} disabled={!!assigning}>
                            <T c="font-label-sm text-label-sm text-on-surface-variant">+ {l.short}</T>
                          </P>
                        ))}
                        {units.map((u) => (
                          <P key={u.id} c="px-2.5 py-1.5 rounded-lg bg-surface-container" onPress={() => assign('quiz', u.id, `${u.short}: practice quiz`)} disabled={!!assigning}>
                            <T c="font-label-sm text-label-sm text-on-surface-variant">+ {L('Quiz', 'Quiz')} {u.n}</T>
                          </P>
                        ))}
                      </V>
                    </V>
                  </V>
                </V>
              )}
              <Cta variant="soft" h="h-11" icon="add" label={L('Create another class', 'Créer une autre classe')} onPress={() => navigation.navigate('CreateClass', { fromPortal: true })} />
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
