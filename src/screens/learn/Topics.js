// Step 2: the main topics (units) of one subject. The same screen serves
// Learn (topic, then its subtopics), Lab (topics that have practicals) and
// Exams (a quiz for each topic).
import { useEffect } from 'react';
import { T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { StepLine, SUBJECT_LOOK, SubjectIcon, TopicCard } from '../../ui/hub';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { groupsFor, unitsFor } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import { labsForUnit } from '../../data/labs';
import { subjectById, subjectName } from '../../data/subjects';
import { labLocked, unitLocked } from '../../data/plan';
import { gradeFor } from '../../state/selectors';

const TAB = { learn: 'Learn', lab: 'Lab', quiz: 'Exams' };

export default function Topics({ navigation, route }) {
  const { pro, progress, stats, setSubject } = useApp();
  const L = useL();
  const lang = useLang();
  const mode = route.params?.mode || 'learn';
  const subject = route.params?.subject || 'biology';
  const tint = (SUBJECT_LOOK[subject] || SUBJECT_LOOK.biology).tint;
  useEffect(() => setSubject(subject), [subject, setSubject]);

  const all = unitsFor(subject);
  const units = mode === 'lab' ? all.filter((u) => labsForUnit(u.id).length) : all;
  const groups = groupsFor(subject).filter((g) => units.some((u) => u.group === g.id));
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
        sub={`${lessons.length} ${L('subtopics', 'sous-thèmes')}${read ? `, ${read} ${L('read', 'lus')}` : ''}${pct ? `. ${pct}% ${L('mastered', 'maîtrisé')}` : ''}`}
        pct={pct}
        done={pct >= 85}
        onPress={() => open(u)}
      />
    );
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={name} subtitle={`GCE Ordinary Level (${subjectById(subject).code})`} subtitleColor="on-surface-variant" avatar={false} />}>
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

          {groups.map((g) => (
            <V key={g.id} c="gap-space-sm">
              <T c="font-label-lg text-label-lg text-on-surface-variant" style={{ fontWeight: '700' }}>
                {L(g.en, g.fr)}
              </T>
              {units.filter((u) => u.group === g.id).map(card)}
            </V>
          ))}
          {!groups.length && units.map(card)}
        </V>
      </Screen>
      <StaticTabBar active={TAB[mode]} />
    </V>
  );
}
