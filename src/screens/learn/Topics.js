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
import { formFor, formsFor, groupsFor, unitsForForm } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import { labsForUnit } from '../../data/labs';
import { LEVELS, subjectById, subjectName } from '../../data/subjects';
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

  // Subjects organised by class show one class at a time, starting with the student's own.
  const forms = formsFor(subject);
  const [form, setForm] = useState(() => formFor(subject, user?.className));
  const own = user?.className;
  const all = unitsForForm(subject, forms.length ? form : null);
  const units = mode === 'lab' ? all.filter((u) => labsForUnit(u.id).length) : all;
  // Class syllabuses keep their own topic order, with the module named each time
  // it changes; older courses are grouped by module.
  const groups = groupsFor(subject).filter((g) => units.some((u) => u.group === g.id));
  const runs = forms.length
    ? [...units]
        .sort((a, b) => a.n - b.n)
        .reduce((acc, u) => {
          const last = acc[acc.length - 1];
          if (last && last.group?.id === u.group) last.units.push(u);
          else acc.push({ group: groups.find((g) => g.id === u.group), units: [u] });
          return acc;
        }, [])
    : groups.length
      ? groups.map((g) => ({ group: g, units: units.filter((u) => u.group === g.id) }))
      : [{ group: null, units }];
  const name = subjectName(subject, lang);

  const heading = {
    learn: [L('Step 2 of 3', 'Étape 2 sur 3'), L('Choose a topic', 'Choisissez un thème'), L('Each topic opens its subtopics: the lessons, a labelled diagram, a 3D model and a quiz.', 'Chaque thème ouvre ses sous-thèmes : leçons, schéma légendé, modèle 3D et quiz.')],
    lab: [L('Step 2 of 3', 'Étape 2 sur 3'), L('Choose a topic', 'Choisissez un thème'), L('Each topic opens the practicals you can do for it.', 'Chaque thème ouvre ses travaux pratiques.')],
    quiz: [L('Step 3 of 3', 'Étape 3 sur 3'), L('Choose a topic quiz', 'Choisissez un quiz'), L('Ten questions on one topic, each with an explanation.', 'Dix questions sur un thème, chacune expliquée.')],
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

          {forms.length > 1 && (
            <V c="gap-space-xs">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('Class', 'Classe')}
              </T>
              <V c="flex-row flex-wrap gap-space-xs" accessibilityRole="radiogroup">
                {forms.map((f) => {
                  const on = f === form;
                  return (
                    <P key={f} c={`min-h-[44px] px-space-md rounded-xl items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => setForm(f)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                      <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                        {f}
                        {f === own ? ` (${L('your class', 'votre classe')})` : ''}
                      </T>
                    </P>
                  );
                })}
              </V>
              {!!own && !forms.includes(own) && (
                <T c="font-body-md text-body-md text-on-surface-variant">
                  {L(`The ${own} topics for ${name} are being written. Until they are ready you can study the topics of ${form}.`, `Les thèmes de ${own} en ${name} sont en préparation. En attendant, vous pouvez étudier ceux de ${form}.`)}
                </T>
              )}
            </V>
          )}

          {runs.map((run, i) => (
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
      </Screen>
      <StaticTabBar active={TAB[mode]} />
    </V>
  );
}
