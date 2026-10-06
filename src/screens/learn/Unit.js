import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { StepLine } from '../../ui/hub';
import { UnitPicture } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { unitById } from '../../data/units';
import { lessonNumber, lessonsFor } from '../../data/lessons';
import { subjectName } from '../../data/subjects';
import { labsForUnit } from '../../data/labs';
import { lessonLocked, labLocked } from '../../data/plan';
import { gradeFor, nextLesson } from '../../state/selectors';
import { Section } from '../tabs/Home';

function Row({ title, sub, icon = 'chevron_right', iconC = 'outline', onPress, first }) {
  return (
    <P c={`p-space-md flex-row items-center gap-space-sm ${first ? '' : 'border-t border-surface-container'}`} onPress={onPress} scale={0.99}>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
          {title}
        </T>
        {!!sub && <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>}
      </V>
      <Ic n={icon} s={20} c={iconC} />
    </P>
  );
}

export default function Unit({ navigation, route }) {
  const { pro, progress, stats } = useApp();
  const L = useL();
  const lang = useLang();
  const unit = unitById(route.params?.unitId || 'cell');
  const lessons = lessonsFor(unit.id);
  const labs = labsForUnit(unit.id);
  const pct = stats.unitPct[unit.id] || 0;
  const next = nextLesson(progress, unit.id, pro);
  const quiz = progress.quiz[unit.id];
  const doneCount = lessons.filter((l) => progress.lessons[l.id]).length;

  const openLesson = (l, i) => {
    if (lessonLocked(unit.id, i, pro)) navigation.navigate('Paywall');
    else navigation.navigate('Lesson', { lessonId: l.id, unitId: unit.id });
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={`${L('Topic', 'Thème')} ${unit.n}`} subtitle={unit.form ? `${subjectName(unit.subject, lang)}, ${unit.form}` : subjectName(unit.subject, lang)} subtitleColor="on-surface-variant" avatar={false} />}>
        <V c="pt-space-md pb-space-lg gap-space-lg">
          <V c="gap-space-xs">
            <StepLine step={L('Step 3 of 3', 'Étape 3 sur 3')} text={L('Choose a subtopic to read', 'Choisissez un sous-thème à lire')} />
          </V>
          <V c="gap-space-xs">
            <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight" style={{ lineHeight: 32 }}>
              {unit.short}
            </T>
            {unit.title !== unit.short && <T c="font-body-md text-body-md text-on-surface-variant">{unit.title}</T>}
            <V c="gap-1 pt-space-xs">
              <Bar pct={pct} c="h-2 bg-surface-container-high" />
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {pct}% {L('mastered', 'maîtrisé')}, {doneCount} {L('of', 'sur')} {lessons.length} {L('subtopics read', 'sous-thèmes lus')}
                {quiz?.best != null ? `, ${L('best quiz', 'meilleur quiz')} ${quiz.best}% (${L('grade', 'note')} ${gradeFor(quiz.best)})` : ''}
              </T>
            </V>
          </V>

          <Section title={L('Subtopics', 'Sous-thèmes')}>
            <V c="bg-surface-container-lowest rounded-xl shadow-sm">
              {lessons.map((l, i) => {
                const done = !!progress.lessons[l.id];
                const locked = lessonLocked(unit.id, i, pro);
                return (
                  <Row
                    key={l.id}
                    first={i === 0}
                    title={`${lessonNumber(unit.id, l)}. ${l.title}`}
                    sub={`${l.minutes} min${done ? `, ${L('read', 'lue')}` : locked ? `, ${L('full course', 'cours complet')}` : ''}`}
                    icon={done ? 'check' : locked ? 'lock' : 'chevron_right'}
                    iconC={done ? 'secondary' : 'outline'}
                    onPress={() => openLesson(l, i)}
                  />
                );
              })}
            </V>
          </Section>

          <UnitPicture unit={unit} explain maxHeight={320} />

          <P c="w-full h-12 bg-primary-container rounded-xl items-center justify-center" onPress={() => openLesson(next, lessons.indexOf(next))}>
            <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
              {doneCount === lessons.length ? L('Review lesson', 'Revoir la leçon') : doneCount ? L('Continue with lesson', 'Continuer avec la leçon') : L('Start lesson', 'Commencer la leçon')} {lessonNumber(unit.id, next)}
            </T>
          </P>


          <Section title={L('Practice', 'Entraînement')}>
            <V c="bg-surface-container-lowest rounded-xl shadow-sm">
              <Row
                first
                title={L('Topic quiz', 'Quiz du thème')}
                sub={`${unit.quiz.length} ${L('questions with explanations', 'questions avec explications')}${quiz?.attempts ? `. ${quiz.attempts} ${quiz.attempts === 1 ? L('attempt', 'essai') : L('attempts', 'essais')}` : ''}`}
                onPress={() => navigation.navigate('Quiz', { unitId: unit.id })}
              />
              <Row
                title={L('Workspace: solve on the board', 'Espace de travail : résoudre au tableau')}
                sub={L('Questions from this topic worked step by step and explained aloud', 'Questions du thème résolues étape par étape et expliquées')}
                icon="co_present"
                iconC="primary-container"
                onPress={() => navigation.navigate('Workspace', { unitId: unit.id, subject: unit.subject })}
              />
              {labs.map((l) => (
                <Row
                  key={l.id}
                  title={l.title}
                  sub={`${L('Practical', 'TP')}, ${l.minutes} min${progress.labs[l.id] ? `, ${L('done', 'fait')}` : labLocked(l.id, pro) ? `, ${L('full course', 'cours complet')}` : ''}`}
                  icon={labLocked(l.id, pro) ? 'lock' : 'chevron_right'}
                  onPress={() => navigation.navigate(labLocked(l.id, pro) ? 'Paywall' : 'LabRun', { labId: l.id })}
                />
              ))}
            </V>
          </Section>

          <T c="font-body-sm text-body-sm text-on-surface-variant">
            {L('Mastery combines your best quiz score (70%) and the lessons you have read (30%).', 'La maîtrise combine votre meilleur score au quiz (70 %) et les leçons lues (30 %).')}
          </T>
        </V>
      </Screen>
      <StaticTabBar active="Learn" />
    </V>
  );
}
