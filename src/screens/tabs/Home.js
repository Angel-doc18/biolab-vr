import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Bar, C, Ic, P, Ring, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { AnimalCell } from '../../ui/art';
import { SpecimenPreview } from '../../ui/previews';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { get } from '../../api/client';
import { daysToExam } from '../../state/progress';
import { firstName, focusUnit, greeting, nextLesson, recentUnits } from '../../state/selectors';
import { units } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import ParentHome from './ParentHome';
import TeacherHome from './TeacherHome';

const SUGGEST = {
  cell: 'Why are mitochondria called the powerhouse of the cell?',
  nutrition: 'What does bile do if it is not an enzyme?',
  transport: 'Why is the left ventricle wall thicker than the right?',
  gas: 'How are alveoli adapted for gas exchange?',
  kidney: 'What is the difference between ultrafiltration and reabsorption?',
  nervous: 'Can you explain the reflex arc step by step?',
  locomotion: 'How do the biceps and triceps work as an antagonistic pair?',
  reproduction: 'What is the difference between pollination and fertilisation?',
  genetics: 'How do I lay out a monohybrid cross for full marks?',
  ecology: 'Why do food chains rarely have more than five links?',
};

function Stat({ icon, value, label, ring }) {
  return (
    <V c="flex-1 bg-surface-container-lowest p-3 rounded-xl shadow-sm items-center justify-center gap-1">
      {ring != null ? (
        <Ring size={32} stroke={3} pct={ring} track={C['surface-container']} tint={C.secondary}>
          <T c="font-label-sm text-secondary" style={{ fontSize: 8, lineHeight: 10, fontWeight: '700' }}>
            {ring}%
          </T>
        </Ring>
      ) : (
        <V c="w-8 h-8 rounded-full bg-surface-container-low items-center justify-center">
          <Ic n={icon} s={18} c="primary-container" />
        </V>
      )}
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700', lineHeight: 20 }}>
        {value}
      </T>
      <T c="font-label-sm text-label-sm text-on-surface-variant text-center" numberOfLines={1}>
        {label}
      </T>
    </V>
  );
}

function StudentHome({ navigation }) {
  const { user, pro, progress, stats, quota, refreshQuota, refreshUnread } = useApp();
  const L = useL();
  const [assignments, setAssignments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    refreshUnread();
    refreshQuota();
    try {
      const r = await get('/v1/me/assignments');
      setAssignments(r.items.filter((a) => !a.doneAt && a.dueAt > Date.now() - 86400000));
    } catch {
      // offline: keep what we have
    }
  }, [refreshQuota, refreshUnread]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const focus = focusUnit(progress, stats.unitPct, pro);
  const lesson = nextLesson(progress, focus.id, pro);
  const recent = recentUnits(progress, 2);
  const continueList = recent.length ? recent : units.slice(0, 2);
  const days = daysToExam(user?.examYear);
  const due = assignments[0];

  return (
    <Screen
      header={<TabHeader />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}
    >
      <V c="gap-space-md pb-space-xl">
        <V c="pt-space-sm gap-space-xs">
          <V c="flex-row items-center justify-between">
            <V c="flex-1">
              <T c="font-headline-lg text-headline-lg text-primary-container tracking-tight" numberOfLines={1}>
                {greeting(L)}, {firstName(user?.name)}
              </T>
              <T c="font-label-md text-label-md text-on-surface-variant" style={{ fontWeight: '500' }} numberOfLines={1}>
                {[user?.className, user?.schoolName].filter(Boolean).join(' · ') || L('GCE Biology candidate', 'Candidat GCE Biologie')}
              </T>
            </V>
            <V c="w-10 h-10 rounded-full bg-surface-container-low items-center justify-center shadow-sm">
              <Ic n="school" s={24} c="primary-container" />
            </V>
          </V>
          <V c="self-start flex-row items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container/20 mt-1">
            <Ic n="check_circle" s={16} c="secondary" />
            <T c="font-label-sm text-label-sm text-secondary tracking-wide">{L('Offline ready · lessons stored on this phone', 'Hors ligne · cours sur ce téléphone')}</T>
          </V>
        </V>

        <V c="flex-row gap-space-xs">
          <Stat icon="local_fire_department" value={`${stats.streak} ${stats.streak === 1 ? L('Day', 'Jour') : L('Days', 'Jours')}`} label={L('Active streak', 'Série active')} />
          <Stat ring={stats.mastery} value={`${stats.mastery}%`} label={L('GCE mastery', 'Maîtrise GCE')} />
          <Stat icon="military_tech" value={progress.xp.toLocaleString('en-US')} label={L('XP earned', 'XP gagnés')} />
        </V>

        <P c="bg-surface-container-low p-space-md rounded-xl flex-row items-center justify-between shadow-sm" onPress={() => navigation.navigate('Exams')}>
          <V c="flex-row items-center gap-space-sm flex-1">
            <V c="w-11 h-11 rounded-xl bg-surface-container-lowest items-center justify-center shadow-sm">
              <Ic n="event_note" s={22} c="primary-container" />
            </V>
            <V c="flex-1">
              <T c="font-label-md text-label-md text-primary-container uppercase tracking-wider">{L('GCE Board exam', 'Examen du GCE')}</T>
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {days} {L('days to June', 'jours avant juin')} {user?.examYear || ''}
              </T>
              <T c="font-label-sm text-label-sm text-on-surface-variant">
                {L('Target: Grade', 'Objectif : note')} {user?.targetGrade || 'A'}
              </T>
            </V>
          </V>
          <Ic n="chevron_right" c="primary-container" />
        </P>

        <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-md">
          <V c="flex-row items-center justify-between">
            <V c="flex-row items-center gap-2">
              <Ic n="bolt" s={18} c="primary-container" />
              <T c="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">{L("Today's priority revision", 'Priorité du jour')}</T>
            </V>
            <V c="bg-secondary-container/20 px-2 py-0.5 rounded-full">
              <T c="font-label-sm text-label-sm text-secondary">{lesson?.paper}</T>
            </V>
          </V>
          <V c="gap-space-xs">
            <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700', lineHeight: 26 }}>
              {L('Unit', 'Unité')} {focus.n}: {lesson?.title}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{focus.title}</T>
          </V>
          <V c="flex-row items-center gap-space-xs">
            <V c="flex-row items-center gap-1 bg-surface-container-low px-2.5 py-1 rounded-full">
              <Ic n="schedule" s={15} c="on-primary-fixed-variant" />
              <T c="font-label-sm text-label-sm text-on-primary-fixed-variant">
                {lesson?.minutes} min {L('read', 'de lecture')}
              </T>
            </V>
            <V c="flex-row items-center gap-1 bg-secondary-container/20 px-2.5 py-1 rounded-full">
              <Ic n="stars" s={15} c="secondary" />
              <T c="font-label-sm text-label-sm text-secondary">{progress.lessons[lesson?.id] ? L('Review', 'Révision') : '+15 XP'}</T>
            </V>
          </V>
          <P c="w-full h-36 rounded-xl overflow-hidden bg-surface-container-low items-center justify-center" onPress={() => navigation.navigate('Specimen', { unitId: focus.id })}>
            <SpecimenPreview unitId={focus.id} />
            <V c="absolute inset-0 bg-primary-container/10 items-center justify-center">
              <V c="flex-row items-center gap-2 bg-surface-container-lowest/90 px-3 py-1.5 rounded-full shadow-md">
                <Ic n="view_in_ar" s={18} c="primary-container" />
                <T c="font-label-sm text-label-sm text-primary-container">{L('Open 3D model', 'Ouvrir le modèle 3D')}</T>
              </V>
            </V>
          </P>
          <P c="w-full h-12 bg-primary-container rounded-xl flex-row items-center justify-center gap-2 shadow-sm" onPress={() => navigation.navigate('Lesson', { lessonId: lesson.id })}>
            <T c="font-label-lg text-label-lg text-on-primary">{progress.lessons[lesson?.id] ? L('Review lesson', 'Revoir la leçon') : L('Start revision', 'Commencer')}</T>
            <Ic n="arrow_forward" s={18} c="on-primary" />
          </P>
        </V>

        <V c="bg-surface-container-low p-space-md rounded-xl gap-space-xs shadow-sm">
          <V c="flex-row items-center justify-between">
            <V c="flex-row items-center gap-2">
              <V c="w-7 h-7 rounded-full bg-primary-container items-center justify-center">
                <Ic n="psychology" s={16} c="on-primary" />
              </V>
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('Ask Dr. Nkwenti', 'Demandez au Dr Nkwenti')}
              </T>
            </V>
            {quota && (
              <V c="bg-surface-container-lowest px-2 py-0.5 rounded-full shadow-sm">
                <T c="font-label-sm text-label-sm text-primary-container">
                  {quota.asksLeft} {L('questions left today', 'questions restantes')}
                </T>
              </V>
            )}
          </V>
          <P c="flex-row items-center justify-between bg-surface-container-lowest p-2.5 rounded-xl shadow-sm" onPress={() => navigation.navigate('Tutor', { prefill: SUGGEST[focus.id], context: focus.title })}>
            <T c="font-body-sm text-body-sm text-on-surface-variant flex-1 mr-2" numberOfLines={1}>
              “{SUGGEST[focus.id]}”
            </T>
            <V c="w-8 h-8 rounded-lg bg-surface-container-low items-center justify-center">
              <Ic n="send" s={18} c="primary-container" />
            </V>
          </P>
        </V>

        <V c="gap-space-xs">
          <V c="flex-row items-center justify-between">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {recent.length ? L('Continue learning', 'Continuer') : L('Start with', 'Commencez par')}
            </T>
            <P onPress={() => navigation.navigate('Learn')}>
              <T c="font-label-sm text-label-sm text-primary-container">{L('View syllabus', 'Voir le programme')}</T>
            </P>
          </V>
          {continueList.map((u, i) => {
            const pct = stats.unitPct[u.id] || 0;
            const done = lessonsFor(u.id).filter((l) => progress.lessons[l.id]).length;
            const teal = i === 0;
            return (
              <P key={u.id} c="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex-row items-center gap-space-sm" onPress={() => navigation.navigate('Unit', { unitId: u.id })}>
                <V c="w-12 h-12 rounded-xl bg-surface-container-low items-center justify-center">
                  <Ic n={u.icon} s={24} c={teal ? 'secondary' : 'primary-container'} />
                </V>
                <V c="flex-1 gap-1">
                  <V c="flex-row items-center justify-between">
                    <T c="font-label-md text-label-md text-on-surface flex-1" style={{ fontWeight: '700' }} numberOfLines={1}>
                      {u.short}
                    </T>
                    <T c={`font-label-sm text-label-sm ${teal ? 'text-secondary' : 'text-primary-container'}`}>{pct}%</T>
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                    {L('Unit', 'Unité')} {u.n} · {done}/{lessonsFor(u.id).length} {L('lessons read', 'leçons lues')}
                  </T>
                  <Bar pct={pct} fill={teal ? 'bg-secondary' : 'bg-primary-container'} />
                </V>
              </P>
            );
          })}
        </V>

        {due ? (
          <P c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-xs" onPress={() => navigation.navigate('Exams')}>
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-2">
                <Ic n="assignment_ind" s={18} c="primary-container" />
                <T c="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">{L('Set by your teacher', 'Donné par votre enseignant')}</T>
              </V>
              <V c="bg-secondary-container/20 px-2 py-0.5 rounded-full">
                <T c="font-label-sm text-label-sm text-secondary">{due.className}</T>
              </V>
            </V>
            <V c="flex-row items-start justify-between">
              <V c="flex-1">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {due.title}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {L('Due', 'À rendre le')} {new Date(due.dueAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </T>
              </V>
              <V c="w-10 h-10 rounded-xl bg-surface-container-low items-center justify-center">
                <Ic n="timer" s={20} c="primary-container" />
              </V>
            </V>
            {assignments.length > 1 && (
              <T c="font-label-sm text-label-sm text-on-surface-variant pt-1">
                +{assignments.length - 1} {L('more to do', 'autres à faire')}
              </T>
            )}
          </P>
        ) : (
          <P c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-space-xs" onPress={() => navigation.navigate('Paper1')}>
            <V c="flex-row items-center gap-2">
              <Ic n="verified" s={18} c="primary-container" />
              <T c="font-label-sm text-label-sm uppercase tracking-wider text-primary-container">{L('Weekly mock', 'Examen blanc de la semaine')}</T>
            </V>
            <V c="flex-row items-start justify-between">
              <V c="flex-1">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Paper 1 practice mock', 'Épreuve 1 blanche')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{L('50 questions · 90 minutes · all units', '50 questions · 90 minutes · toutes les unités')}</T>
              </V>
              <V c="w-10 h-10 rounded-xl bg-surface-container-low items-center justify-center">
                <Ic n="timer" s={20} c="primary-container" />
              </V>
            </V>
            <V c="flex-row items-center justify-between pt-1">
              <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Paper 1 (multiple choice)', 'Épreuve 1 (QCM)')}</T>
              <V c="flex-row items-center">
                <T c="font-label-sm text-label-sm text-primary-container">{L('Start', 'Commencer')}</T>
                <Ic n="chevron_right" s={16} c="primary-container" />
              </V>
            </V>
          </P>
        )}

        {!pro && (
          <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex-row items-center justify-between gap-space-sm">
            <V c="flex-row items-center gap-space-sm flex-1">
              <V c="w-10 h-10 rounded-xl bg-surface-container-low items-center justify-center">
                <Ic n="workspace_premium" s={22} c="primary-container" />
              </V>
              <V c="flex-1">
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
                  {L('Full syllabus & practicals', 'Programme complet et TP')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                  {L('Unlock all 10 units · 1,500 FCFA/term', 'Les 10 unités · 1 500 FCFA/trimestre')}
                </T>
              </V>
            </V>
            <P c="h-9 px-3.5 bg-surface-container-low rounded-lg items-center justify-center" onPress={() => navigation.navigate('Paywall')}>
              <T c="font-label-sm text-label-sm text-primary-container">{L('See plans', 'Voir les offres')}</T>
            </P>
          </V>
        )}
      </V>
    </Screen>
  );
}

export default function Home(props) {
  const { user } = useApp();
  if (user?.role === 'parent') return <ParentHome {...props} />;
  if (user?.role === 'teacher') return <TeacherHome {...props} />;
  return <StudentHome {...props} />;
}
