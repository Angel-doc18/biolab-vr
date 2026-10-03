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
import { firstName, focusUnit, greeting, nextLesson, recentUnits } from '../../state/selectors';
import { formFor, unitsFor } from '../../data/units';
import { lessonNumber, lessonsFor } from '../../data/lessons';
import { LEVELS, examLabel, subjectById, subjectName } from '../../data/subjects';
import { SubjectGrid, TileGrid } from '../../ui/hub';
import { useSubjectCards } from '../subjectCards';
import ParentHome from './ParentHome';
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

function StudentHome({ navigation }) {
  const { user, pro, progress, stats, quota, refreshQuota, refreshUnread, refreshMe, consentOk, subject, subjects } = useApp();
  const L = useL();
  const lang = useLang();
  const [assignments, setAssignments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    refreshUnread();
    refreshQuota();
    if (!consentOk) refreshMe().catch(() => {});
    try {
      const r = await get('/v1/me/assignments');
      setAssignments(r.items.filter((a) => !a.doneAt && a.dueAt > Date.now() - 86400000));
    } catch {
      // no connection: keep the last list
    }
  }, [refreshQuota, refreshUnread, refreshMe, consentOk]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const focus = focusUnit(progress, stats.unitPct, pro, subject, formFor(subject, user?.className));
  const lesson = nextLesson(progress, focus.id, pro);
  const recent = recentUnits(progress, 2, subject);
  const continueList = recent.length ? recent : unitsFor(subject).slice(0, 2);
  const taking = subjects.map((id) => subjectName(id, lang)).join(', ');
  const days = daysToExam(user?.examYear);
  const due = assignments[0];
  const reviewed = !!progress.lessons[lesson?.id];
  const cards = useSubjectCards('learn');

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
            GCE {LEVELS[subjectById(subjects[0]).level].short}: {taking}
          </T>
        </V>

        <V c="bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container">
          <P c="p-space-md flex-row items-center gap-space-sm" onPress={() => navigation.navigate('ExamClass', { fromSettings: true })} accessibilityRole="button" accessibilityLabel={L('Change your class', 'Changer de classe')}>
            <V c="w-12 h-12 rounded-xl bg-surface-container-low items-center justify-center">
              <Ic n="school" s={26} c="primary-container" fill />
            </V>
            <V c="flex-1 gap-0.5">
              <T c="font-label-md text-label-md text-on-surface-variant">{L('Your class', 'Votre classe')}</T>
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {user?.className || L('Not set', 'Non indiquée')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={2}>
                {[examLabel(user, L), user?.schoolName].filter(Boolean).join(', ')}
              </T>
            </V>
            <V c="h-10 px-3 rounded-lg border-2 border-primary-container flex-row items-center gap-1">
              <Ic n="edit" s={16} c="primary-container" />
              <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                {L('Change', 'Changer')}
              </T>
            </V>
          </P>
          {!user?.schoolName && (
            <P c="px-space-md py-space-sm border-t border-surface-container flex-row items-center gap-2" onPress={() => navigation.navigate('JoinClass')}>
              <Ic n="group_add" s={18} c="primary-container" />
              <T c="font-label-md text-label-md text-primary-container flex-1" style={{ fontWeight: '700' }}>
                {L('Join your teacher’s class with a code', 'Rejoindre la classe de votre enseignant avec un code')}
              </T>
              <Ic n="chevron_right" s={18} c="outline" />
            </P>
          )}
        </V>

        <Section title={L('Your subjects', 'Vos matières')}>
          <SubjectGrid
            items={cards}
            currentLabel={L('Studying now', 'En cours')}
            onPick={(id) => navigation.navigate('Topics', { subject: id, mode: 'learn' })}
            manage={L('Add or change subjects', 'Ajouter ou changer de matière')}
            onManage={() => navigation.navigate('ExamClass', { fromSettings: true })}
          />
        </Section>

        <Section title={L('Go straight to', 'Accès direct')}>
          <TileGrid
            items={[
              { icon: 'experiment', title: L('Practicals', 'Travaux pratiques'), sub: L('Experiments with real readings', 'Expériences avec de vraies mesures'), onPress: () => navigation.navigate('Lab') },
              { icon: 'view_in_ar', title: L('3D models', 'Modèles 3D'), sub: L('Turn and open every model', 'Tournez et ouvrez chaque modèle'), onPress: () => navigation.navigate('Models', { subject }) },
              { icon: 'timer', title: L('Practice papers', 'Épreuves'), sub: L('Paper 1, Paper 2, topic quizzes', 'Épreuves 1 et 2, quiz'), onPress: () => navigation.navigate('ExamMenu', { subject }) },
              { icon: 'forum', title: L('Ask the tutor', 'Demander au tuteur'), sub: quota ? `${quota.asksLeft} ${L('questions left today', 'questions restantes')}` : L('Answers read aloud', 'Réponses lues à voix haute'), onPress: () => navigation.navigate('Tutor', { context: focus.title, subject }) },
              { icon: 'grading', title: L('Mark my answer', 'Corriger ma réponse'), sub: L('Typed or photographed', 'Tapée ou photographiée'), onPress: () => navigation.navigate('MarkAnswer', { subject }) },
              { icon: 'menu_book', title: L('Lab workbook', 'Cahier de TP'), sub: L('Your saved results', 'Vos résultats enregistrés'), onPress: () => navigation.navigate('Workbook') },
            ]}
          />
        </Section>

        {!consentOk && (
          <P c="bg-surface-container-low border border-outline-variant p-space-md rounded-xl gap-1" onPress={() => navigation.navigate('Guardian', { fromHome: true })}>
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {user?.consentStatus === 'pending'
                ? L('Waiting for your parent’s approval', 'En attente de l’accord de votre parent')
                : user?.consentStatus === 'refused'
                ? L('Your parent did not approve the account', 'Votre parent n’a pas approuvé le compte')
                : L('Confirm your date of birth', 'Confirmez votre date de naissance')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
              {user?.consentStatus === 'pending'
                ? L('Your progress is kept on this phone until they approve. Tap to send the link again.', 'Votre progression reste sur ce téléphone jusqu’à leur accord. Touchez pour renvoyer le lien.')
                : L('Students under 18 need a parent’s approval before progress is saved to the account and the tutor opens.', 'Les élèves de moins de 18 ans ont besoin de l’accord d’un parent avant l’enregistrement sur le compte et l’accès au tuteur.')}
            </T>
          </P>
        )}

        <P c="bg-primary-container p-space-md rounded-xl gap-space-sm" onPress={() => navigation.navigate('Exams')}>
          <V c="flex-row items-end justify-between gap-space-sm">
            <V c="flex-1">
              <T c="font-body-sm text-body-sm text-on-primary" style={{ opacity: 0.85 }}>
                {`${subjectName(subject, lang)}, ${examLabel(user, L)}`}
              </T>
              <T c="font-headline-lg text-on-primary" style={{ fontSize: 34, lineHeight: 40 }}>
                {days} {days === 1 ? L('day', 'jour') : L('days', 'jours')}
              </T>
            </V>
            <T c="font-body-sm text-body-sm text-on-primary pb-1.5" style={{ opacity: 0.85 }}>
              {L('Target grade', 'Note visée')} {user?.targetGrade || 'A'}
            </T>
          </V>
          <V c="gap-1.5">
            <V c="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}>
              <V c="h-full rounded-full bg-on-primary" style={{ width: `${Math.max(2, stats.mastery)}%` }} />
            </V>
            <T c="font-body-sm text-body-sm text-on-primary" style={{ opacity: 0.85 }}>
              {stats.mastery}% {L('of the', 'du programme de')} {subjectName(subject, lang)} {L('syllabus mastered', 'maîtrisé')}
              {stats.streak > 1 ? `, ${stats.streak} ${L('days in a row', 'jours de suite')}` : ''}
            </T>
          </V>
        </P>

        <Section title={reviewed ? L('Revise next', 'À revoir') : L('Next lesson', 'Prochaine leçon')}>
          <V c="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <P c="w-full bg-surface-container-lowest items-center justify-center p-space-sm" onPress={() => navigation.navigate('Lesson', { lessonId: lesson.id, unitId: focus.id })} accessibilityLabel={lesson?.title}>
              <UnitPicture unit={focus} />
            </P>
            <V c="p-space-md gap-space-sm">
              <V c="gap-1">
                <T c="font-label-md text-label-md text-on-surface-variant">
                  {L('Unit', 'Unité')} {focus.n}, {L('lesson', 'leçon')} {lesson ? lessonNumber(focus.id, lesson) : ''}, {lesson?.minutes} min
                </T>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700', lineHeight: 26 }}>
                  {lesson?.title}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{focus.title}</T>
              </V>
              <V c="flex-row gap-space-xs">
                <P c="flex-1 h-12 bg-primary-container rounded-xl items-center justify-center" onPress={() => navigation.navigate('Lesson', { lessonId: lesson.id, unitId: focus.id })}>
                  <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                    {reviewed ? L('Review lesson', 'Revoir la leçon') : L('Start lesson', 'Commencer la leçon')}
                  </T>
                </P>
                <P c="h-12 px-space-md bg-surface-container-low rounded-xl flex-row items-center justify-center gap-1.5" onPress={() => navigation.navigate('Specimen', { unitId: focus.id })}>
                  <Ic n="view_in_ar" s={18} c="primary-container" />
                  <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                    3D
                  </T>
                </P>
              </V>
            </V>
          </V>
        </Section>


        <Section title={recent.length ? L('Continue', 'Continuer') : L('Start with', 'Commencez par')} action={L('All units', 'Toutes les unités')} onAction={() => navigation.navigate('Learn')}>
          <V c="bg-surface-container-lowest rounded-xl shadow-sm">
            {continueList.map((u, i) => {
              const pct = stats.unitPct[u.id] || 0;
              const total = lessonsFor(u.id).length;
              const done = lessonsFor(u.id).filter((l) => progress.lessons[l.id]).length;
              return (
                <P key={u.id} c={`p-space-md flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} onPress={() => navigation.navigate('Unit', { unitId: u.id })}>
                  <V c="flex-1 gap-1.5">
                    <V c="flex-row items-center justify-between gap-2">
                      <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }} numberOfLines={1}>
                        {u.n}. {u.short}
                      </T>
                      <T c="font-label-md text-label-md text-on-surface-variant">{pct}%</T>
                    </V>
                    <Bar pct={pct} fill="bg-primary-container" />
                    <T c="font-body-sm text-body-sm text-on-surface-variant">
                      {done} {L('of', 'sur')} {total} {L('lessons read', 'leçons lues')}
                    </T>
                  </V>
                </P>
              );
            })}
          </V>
        </Section>

        {due ? (
          <Section title={L('From your teacher', 'De votre enseignant')}>
            <P c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm gap-1" onPress={() => navigation.navigate('Exams')}>
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {due.title}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {due.className}, {L('due', 'à rendre le')} {new Date(due.dueAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
                {assignments.length > 1 ? `. ${assignments.length - 1} ${L('more to do', 'autres à faire')}` : ''}
              </T>
            </P>
          </Section>
        ) : (
          <Section title={L('Practice paper', 'Épreuve d’entraînement')}>
            <P c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex-row items-center gap-space-sm" onPress={() => navigation.navigate('Paper1', { subject })}>
              <V c="flex-1 gap-0.5">
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {subjectName(subject, lang)} {L('Paper 1, multiple choice', 'épreuve 1, QCM')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('50 questions in 1 hour 30 minutes, as in the exam', '50 questions en 1 h 30, comme à l’examen')}</T>
              </V>
              <Ic n="chevron_right" c="on-surface-variant" />
            </P>
          </Section>
        )}

        {!pro && (
          <P c="flex-row items-center justify-between gap-space-sm py-space-sm" onPress={() => navigation.navigate('Paywall')}>
            <T c="font-body-md text-body-md text-on-surface-variant flex-1">
              {L('From unit 4 on in every subject, all practicals and unlimited practice papers come with the full course.', 'À partir de l’unité 4 dans chaque matière, tous les TP et les épreuves illimitées font partie du cours complet.')}
            </T>
            <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
              {L('Prices', 'Prix')}
            </T>
          </P>
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
