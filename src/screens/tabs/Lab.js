// Lab, step 1: choose a subject. Then the topics that have practicals
// (Topics, lab mode), then the practicals of a topic (LabList).
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { StepLine, SUBJECT_LOOK, SubjectGrid, TileGrid } from '../../ui/hub';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { labsFor, labsForUnit, labUnit } from '../../data/labs';
import { topicLabel, unitsShown } from '../../data/units';
import { labLocked } from '../../data/plan';
import { subjectName } from '../../data/subjects';
import { useSubjectCards } from '../subjectCards';
import { Section } from './Home';

export default function Lab({ navigation }) {
  const { pro, progress, subject, user } = useApp();
  const L = useL();
  const lang = useLang();
  // Only subjects that have practicals (the sciences) are shown here.
  const cards = useSubjectCards('lab').filter((c) => labsFor(c.id).length > 0);
  // Practicals of the student's own topics, in the order the topics are taught.
  const labs = [...new Set(unitsShown(subject, user?.className).flatMap((u) => labsForUnit(u.id)))];
  // The first of them not yet done.
  const next = labs.find((l) => !progress.labs[l.id] && !labLocked(l.id, pro));
  const tint = (SUBJECT_LOOK[subject] || SUBJECT_LOOK.biology).tint;

  return (
    <Screen header={<TabHeader title={L('Lab', 'Labo')} subtitle={L('Practicals with real readings, step by step', 'TP avec de vraies mesures, pas à pas')} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <V c="gap-space-xs">
          <StepLine step={L('Step 1 of 3', 'Étape 1 sur 3')} text={L('Choose a subject', 'Choisissez une matière')} />
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Tap a subject, then a topic, then the practical you want to do.', 'Touchez une matière, puis un thème, puis le TP à faire.')}
          </T>
        </V>

        {!cards.length && (
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Practicals belong to the science subjects. Add Biology, Chemistry or Physics to use the Lab.', 'Les TP concernent les matières scientifiques. Ajoutez la biologie, la chimie ou la physique pour utiliser le labo.')}
          </T>
        )}
        <SubjectGrid
          items={cards}
          onPick={(id) => navigation.navigate('Topics', { subject: id, mode: 'lab' })}
          manage={L('Add or change subjects', 'Ajouter ou changer de matière')}
          onManage={() => navigation.navigate('ExamClass', { fromSettings: true })}
        />

        {!!next && (
          <Section title={L('Continue where you left off', 'Reprendre là où vous étiez')}>
            <P c="bg-surface-container-lowest rounded-xl p-space-md flex-row items-center gap-space-sm shadow-sm border border-surface-container" onPress={() => navigation.navigate('LabRun', { labId: next.id })} scale={0.99}>
              <V c="w-12 h-12 rounded-xl items-center justify-center" style={{ backgroundColor: `${tint}1f` }}>
                <Ic n="experiment" s={26} c={tint} fill />
              </V>
              <V c="flex-1 gap-0.5">
                <T c="font-label-md text-label-md text-on-surface-variant">
                  {subjectName(subject, lang)}, {topicLabel(labUnit(next, user?.className, subject), L)}, {next.minutes} min
                </T>
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {next.title}
                </T>
              </V>
              <Ic n="chevron_right" s={24} c="outline" />
            </P>
          </Section>
        )}

        <Section title={L('Also in the Lab', 'Aussi dans le labo')}>
          <TileGrid
            items={[
              { icon: 'menu_book', title: L('Lab workbook', 'Cahier de TP'), sub: L('Every result you saved', 'Tous vos résultats enregistrés'), onPress: () => navigation.navigate('Workbook') },
              { icon: 'forum', title: L('Ask about a practical', 'Questions sur un TP'), sub: L('Method, readings and results explained', 'Méthode, mesures et résultats expliqués'), onPress: () => navigation.navigate('Tutor', { subject }) },
            ]}
          />
        </Section>
      </V>
    </Screen>
  );
}
