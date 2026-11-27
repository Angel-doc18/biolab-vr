import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { UnitPicture } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { get } from '../../api/client';
import { daysToExam } from '../../state/progress';
import { firstName, focusUnit, greeting, nextLesson } from '../../state/selectors';
import { hasModel, topicLabel, unitsShown } from '../../data/units';
import { examLabel, subjectName } from '../../data/subjects';
import ChargesCard from '../../ui/ChargesCard';
import ParentHome from './ParentHome';
import PartnerHome from './PartnerHome';
import TeacherHome from './TeacherHome';

export function Section({ title, action, onAction, children }) {
  return (
    <V c="gap-space-xs">
      <V c="flex-row items-end justify-between gap-space-sm">
        <T c="font-headline-sm text-headline-sm text-on-surface flex-1" style={{ fontWeight: '700' }}>
          {title}
        </T>
        {!!action && (
          <P onPress={onAction} hitSlop={8}>
            <T c="font-label-md text-label-md text-primary-container">{action}</T>
          </P>
        )}
      </V>
      {children}
    </V>
  );
}

// One quiet shortcut: a soft round icon with a short name under it.
export function Shortcut({ icon, label, onPress }) {
  return (
    <P c="flex-1 items-center gap-1.5 py-space-xs" onPress={onPress} accessibilityRole="button" accessibilityLabel={label}>
      <V c="w-14 h-14 rounded-2xl bg-surface-container-low items-center justify-center">
        <Ic n={icon} s={26} c="primary-container" />
      </V>
      <T c="font-label-md text-label-md text-on-surface text-center" numberOfLines={1}>
        {label}
      </T>
    </P>
  );
}

// A student's Home: what to do next, a few shortcuts and how close the exam
// is. Subjects live in Learn; the class, subjects and invite card in Me.
function StudentHome({ navigation }) {
  const { user, pro, progress, stats, refreshQuota, refreshUnread, subject } = useApp();
  const L = useL();
  const lang = useLang();
  const [assignments, setAssignments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    refreshUnread();
    refreshQuota();
    try {
      const r = await get('/v1/me/assignments');
      setAssignments(r.items.filter((a) => !a.doneAt && a.dueAt > Date.now() - 86400000));
    } catch {
      // no connection: keep the last list
    }
  }, [refreshQuota, refreshUnread]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const shown = unitsShown(subject, user?.className);
  const focus = focusUnit(progress, stats.unitPct, pro, subject, shown);
  const lesson = nextLesson(progress, focus.id, pro);
  const days = daysToExam(user?.examYear);
  const due = assignments[0];
  const reviewed = !!progress.lessons[lesson?.id];
  const openLesson = () => lesson && navigation.navigate('Lesson', { lessonId: lesson.id, unitId: focus.id });

  return (
    <Screen
      header={<TabHeader />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}
    >
      <V c="gap-space-lg pb-space-xl">
        <V c="pt-space-md gap-1">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight" numberOfLines={1}>
            {greeting(L)}, {firstName(user?.name)}
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant" numberOfLines={1}>
            {[user?.className, examLabel(user, L)].filter(Boolean).join(', ')}
          </T>
        </V>

        <ChargesCard user={user} quiet onPress={() => navigation.navigate('Paywall')} />

        {!!lesson && (
          <V c="bg-surface-container-lowest rounded-2xl border border-surface-container overflow-hidden">
            <P c="w-full bg-surface-container-low items-center justify-center p-space-sm" onPress={openLesson} accessibilityLabel={lesson.title}>
              <UnitPicture unit={focus} />
            </P>
            <V c="p-space-md gap-space-sm">
              <V c="gap-1">
                <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                  {reviewed ? L('Revise next', 'À revoir') : L('Your next lesson', 'Votre prochaine leçon')}
                </T>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700', lineHeight: 26 }}>
                  {lesson.title}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                  {subjectName(subject, lang)}, {topicLabel(focus, L)}, {lesson.minutes} min
                </T>
              </V>
              <V c="flex-row gap-space-xs">
                <P c="flex-1 h-12 bg-primary-container rounded-xl items-center justify-center" onPress={openLesson}>
                  <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                    {reviewed ? L('Review lesson', 'Revoir la leçon') : L('Start lesson', 'Commencer la leçon')}
                  </T>
                </P>
                {hasModel(focus) && (
                  <P c="h-12 px-space-md bg-surface-container-low rounded-xl flex-row items-center justify-center gap-1.5" onPress={() => navigation.navigate('Specimen', { unitId: focus.id })}>
                    <Ic n="view_in_ar" s={18} c="primary-container" />
                    <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                      3D
                    </T>
                  </P>
                )}
              </V>
            </V>
          </V>
        )}

        <V c="flex-row">
          <Shortcut icon="experiment" label={L('Practicals', 'TP')} onPress={() => navigation.navigate('Lab')} />
          <Shortcut icon="view_in_ar" label={L('3D models', 'Modèles 3D')} onPress={() => navigation.navigate('Models', { subject })} />
          <Shortcut icon="timer" label={L('Papers', 'Épreuves')} onPress={() => navigation.navigate('ExamMenu', { subject })} />
          <Shortcut icon="forum" label={L('Tutor', 'Tuteur')} onPress={() => navigation.navigate('Tutor', { unitId: focus.id, subject })} />
        </V>

        {!!due && (
          <P c="bg-surface-container-lowest p-space-md rounded-2xl border border-surface-container flex-row items-center gap-space-sm" onPress={() => navigation.navigate('Exams')}>
            <V c="w-10 h-10 rounded-xl bg-surface-container-low items-center justify-center">
              <Ic n="assignment" s={22} c="primary-container" />
            </V>
            <V c="flex-1 gap-0.5">
              <T c="font-label-md text-label-md text-on-surface-variant">{L('From your teacher', 'De votre enseignant')}</T>
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
                {due.title}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                {L('Due', 'À rendre le')} {new Date(due.dueAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
                {assignments.length > 1 ? `, ${assignments.length - 1} ${L('more', 'de plus')}` : ''}
              </T>
            </V>
            <Ic n="chevron_right" s={20} c="outline" />
          </P>
        )}

        <P c="bg-surface-container-low rounded-2xl p-space-md gap-space-sm" onPress={() => navigation.navigate('Exams')}>
          <V c="flex-row items-end justify-between gap-space-sm">
            <V c="gap-0.5">
              <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '800' }}>
                {days} {days === 1 ? L('day', 'jour') : L('days', 'jours')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('until', 'avant')} {examLabel(user, L)}</T>
            </V>
            <V c="items-end gap-0.5">
              <T c="font-headline-md text-headline-md text-primary-container" style={{ fontWeight: '800' }}>
                {stats.mastery}%
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {subjectName(subject, lang)} {L('mastered', 'maîtrisé')}
              </T>
            </V>
          </V>
          <Bar pct={Math.max(2, stats.mastery)} c="h-1.5 bg-surface-container-high" fill="bg-primary-container" />
          {stats.streak > 1 && (
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {stats.streak} {L('days in a row. Keep it going.', 'jours de suite. Continuez.')}
            </T>
          )}
        </P>
      </V>
    </Screen>
  );
}

// Whole days from now until a time (1 means it ends within the next day).

export default function Home(props) {
  const { user } = useApp();
  if (user?.role === 'parent') return <ParentHome {...props} />;
  if (user?.role === 'teacher') return <TeacherHome {...props} />;
  if (user?.role === 'partner') return <PartnerHome {...props} />;
  return <StudentHome {...props} />;
}
