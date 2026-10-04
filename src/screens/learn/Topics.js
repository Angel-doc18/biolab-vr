// Step 2: the main topics (units) of one subject. The same screen serves
// Learn (topic, then its subtopics), Lab (topics that have practicals) and
// Exams (a quiz for each topic).
import { useEffect, useState } from 'react';
import { P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { StepLine, SUBJECT_LOOK, SubjectIcon, TopicCard } from '../../ui/hub';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { formFor, formsFor, formsLabel, formsShown, groupsFor, isExamClass, unitsForForm } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import { labsForUnit } from '../../data/labs';
import { LEVELS, classById, classLevel, subjectById, subjectName } from '../../data/subjects';
import { labLocked, unitLocked } from '../../data/plan';
import { gradeFor } from '../../state/selectors';

const TAB = { learn: 'Learn', lab: 'Lab', quiz: 'Exams' };

export default function Topics({ navigation, route }) {
  const { pro, progress, stats, setSubject, user } = useApp();
  const L = useL();
  const lang = useLang();
  const mode = route.params?.mode || 'learn';
  const subject = route.params?.subject || 'biology';
  const tint = (SUBJECT_LOOK[subject] || SUBJECT_LOOK.biology).tint;
  useEffect(() => setSubject(subject), [subject, setSubject]);

  // Subjects organised by class. A student's class is set when they join, so they
  // see their class's topics; users with no class (teachers, parents) pick one.
  const forms = formsFor(subject);
  const own = classById(user?.className) ? user.className : null;
  const [picked, setPicked] = useState(() => formFor(subject, own) || forms[0]);
  const shown = own ? formsShown(subject, own) : forms.length ? [picked] : [];
  const keep = (list) => (mode === 'lab' ? list.filter((u) => labsForUnit(u.id).length) : list);
  const name = subjectName(subject, lang);
  // Each class keeps its syllabus order, with the module named each time it
  // changes; a course not yet organised by class is grouped by module.
  const runsOf = (list) => {
    const groups = groupsFor(subject).filter((g) => list.some((u) => u.group === g.id));
    if (forms.length)
      return [...list]
        .sort((a, b) => a.n - b.n)
        .reduce((acc, u) => {
          const last = acc[acc.length - 1];
          if (last && last.group?.id === u.group) last.units.push(u);
          else acc.push({ group: groups.find((g) => g.id === u.group), units: [u] });
          return acc;
        }, []);
    return groups.length ? groups.map((g) => ({ group: g, units: list.filter((u) => u.group === g.id) })) : [{ group: null, units: list }];
  };
  const sections = (shown.length ? shown : [null]).map((f) => ({ form: f, runs: runsOf(keep(unitsForForm(subject, f))) })).filter((s) => s.runs.some((r) => r.units.length));

  // What the student is looking at, in plain words.
  const revisingOtherLevel = !!own && classLevel(own) !== subjectById(subject).level;
  const classNote = !own || !forms.length
    ? null
    : revisingOtherLevel
      ? L(`You are in ${own}. The Advanced Level course is being written; until it is ready, revise the Ordinary Level ${name} course it builds on, ${formsLabel(shown, L)}.`, `Vous êtes en ${own}. Le cours de l’Advanced Level est en préparation ; en attendant, révisez le cours de ${name} de l’Ordinary Level sur lequel il repose, ${formsLabel(shown, L)}.`)
      : isExamClass(own) && shown.length > 1
        ? L(`${own} is your examination class, so your ${own} topics come first, followed by the topics of the earlier classes for revision. The examination covers all of them.`, `La ${own} est votre classe d’examen : vos thèmes de ${own} viennent d’abord, puis ceux des classes précédentes à réviser. L’examen porte sur l’ensemble.`)
        : forms.includes(own)
          ? L(`Your class is ${own}, so these are the ${own} topics of the ${name} syllabus, in the order they are taught. You can change your class in Settings.`, `Votre classe est la ${own} : voici les thèmes de ${own} du programme de ${name}, dans l’ordre où ils sont enseignés. Vous pouvez changer de classe dans les Réglages.`)
          : L(`The ${own} topics of ${name} are being written. Until they are ready, here are the ${shown[0]} topics, the nearest class.`, `Les thèmes de ${own} en ${name} sont en préparation. En attendant, voici ceux de ${shown[0]}, la classe la plus proche.`);
  const sectionTitle = (f) => (f === own ? `${f} (${L('your class', 'votre classe')})` : isExamClass(own) && !revisingOtherLevel ? `${f} (${L('revision', 'révision')})` : f);

  const heading = {
    learn: [L('Step 2 of 3', 'Étape 2 sur 3'), L('Choose a topic', 'Choisissez un thème'), L('Each topic opens its subtopics: the lessons, a labelled diagram and a quiz, and a 3D model where the topic has one.', 'Chaque thème ouvre ses sous-thèmes : leçons, schéma légendé et quiz, et un modèle 3D quand le thème en a un.')],
    lab: [L('Step 2 of 3', 'Étape 2 sur 3'), L('Choose a topic', 'Choisissez un thème'), L('Each topic opens the practicals you can do for it.', 'Chaque thème ouvre ses travaux pratiques.')],
    quiz: [L('Step 3 of 3', 'Étape 3 sur 3'), L('Choose a topic quiz', 'Choisissez un quiz'), L('Questions on one topic, each with an explanation.', 'Des questions sur un thème, chacune expliquée.')],
  }[mode];

  const open = (u) => {
    if (mode === 'learn') return navigation.navigate('Unit', { unitId: u.id });
    if (mode === 'lab') return navigation.navigate('LabList', { unitId: u.id });
    return navigation.navigate('Quiz', { unitId: u.id });
  };

  const card = (u) => {
    const pct = stats.unitPct[u.id] || 0;
    if (mode === 'lab') {
      const labs = labsForUnit(u.id);
      const done = labs.filter((l) => progress.labs[l.id]).length;
      return (
        <TopicCard
          key={u.id}
          n={u.n}
          title={u.short}
          tint={tint}
          sub={`${labs.length} ${labs.length === 1 ? L('practical', 'TP') : L('practicals', 'TP')}${done ? `, ${done} ${L('done', 'faits')}` : ''}`}
          pct={labs.length ? Math.round((done / labs.length) * 100) : 0}
          done={labs.length > 0 && done === labs.length}
          locked={labs.every((l) => labLocked(l.id, pro))}
          onPress={() => open(u)}
        />
      );
    }
    if (mode === 'quiz') {
      const q = progress.quiz[u.id];
      return (
        <TopicCard
          key={u.id}
          n={u.n}
          title={u.short}
          tint={tint}
          sub={`${u.quiz.length} ${L('questions', 'questions')}${q?.best != null ? `. ${L('Best', 'Meilleur')} ${q.best}%, ${L('grade', 'note')} ${gradeFor(q.best)}` : `. ${L('Not tried yet', 'Pas encore fait')}`}`}
          pct={q?.best || 0}
          done={(q?.best || 0) >= 85}
          locked={unitLocked(u.id, pro)}
          onPress={() => open(u)}
        />
      );
    }
    const lessons = lessonsFor(u.id);
    const read = lessons.filter((l) => progress.lessons[l.id]).length;
    return (
      <TopicCard
        key={u.id}
        n={u.n}
        title={u.short}
        tint={tint}
        sub={`${lessons.length} ${lessons.length === 1 ? L('subtopic', 'sous-thème') : L('subtopics', 'sous-thèmes')}${read ? `, ${read} ${L('read', 'lus')}` : ''}${pct ? `. ${pct}% ${L('mastered', 'maîtrisé')}` : ''}`}
        pct={pct}
        done={pct >= 85}
        onPress={() => open(u)}
      />
    );
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={name} subtitle={`GCE ${LEVELS[subjectById(subject).level].en} (${subjectById(subject).code})`} subtitleColor="on-surface-variant" avatar={false} />}>
        <V c="pt-space-md pb-space-xl gap-space-lg">
          <V c="flex-row items-center gap-space-sm">
            <SubjectIcon id={subject} size={52} />
            <V c="flex-1 gap-0.5">
              <StepLine step={heading[0]} text={heading[1]} />
            </V>
          </V>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {heading[2]}
          </T>

          {!!classNote && <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>{classNote}</T>}

          {!own && forms.length > 1 && (
            <V c="gap-space-xs">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('Class', 'Classe')}
              </T>
              <V c="flex-row flex-wrap gap-space-xs" accessibilityRole="radiogroup">
                {forms.map((f) => {
                  const on = f === picked;
                  return (
                    <P key={f} c={`min-h-[44px] px-space-md rounded-xl items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => setPicked(f)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                      <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                        {f}
                      </T>
                    </P>
                  );
                })}
              </V>
            </V>
          )}

          {sections.map((sec) => (
            <V key={sec.form || 'all'} c="gap-space-md">
              {sections.length > 1 && (
                <T c="font-headline-sm text-headline-sm text-on-surface">
                  {sectionTitle(sec.form)}
                </T>
              )}
              {sec.runs.map((run, i) => (
                <V key={`${run.group?.id || 'all'}-${i}`} c="gap-space-sm">
                  {!!run.group && (
                    <T c="font-label-lg text-label-lg text-on-surface-variant" style={{ fontWeight: '700' }}>
                      {L(run.group.en, run.group.fr)}
                    </T>
                  )}
                  {run.units.map(card)}
                </V>
              ))}
            </V>
          ))}
          {!sections.length && (
            <T c="font-body-md text-body-md text-on-surface-variant">
              {mode === 'lab' ? L('There are no practicals for these topics yet.', 'Il n’y a pas encore de TP pour ces thèmes.') : L('There are no topics here yet.', 'Il n’y a pas encore de thèmes ici.')}
            </T>
          )}
        </V>
      </Screen>
      <StaticTabBar active={TAB[mode]} />
    </V>
  );
}
