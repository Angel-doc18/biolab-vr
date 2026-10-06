// Learn, step 1: choose a subject. Then its main topics (Topics), then a
// topic's subtopics (Unit).
import { T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { StepLine, SubjectGrid, TileGrid } from '../../ui/hub';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { useSubjectCards } from '../subjectCards';
import { Section } from './Home';

export default function Learn({ navigation }) {
  const { subject } = useApp();
  const L = useL();
  const cards = useSubjectCards('learn');

  return (
    <Screen header={<TabHeader title={L('Learn', 'Apprendre')} subtitle={L('Lessons, labelled diagrams and questions', 'Leçons, schémas légendés et questions')} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <V c="gap-space-xs">
          <StepLine step={L('Step 1 of 3', 'Étape 1 sur 3')} text={L('Choose a subject', 'Choisissez une matière')} />
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Tap a subject to see its main topics. Each topic then opens its subtopics.', 'Touchez une matière pour voir ses thèmes. Chaque thème ouvre ensuite ses sous-thèmes.')}
          </T>
        </V>

        <SubjectGrid
          items={cards}
          onPick={(id) => navigation.navigate('Topics', { subject: id, mode: 'learn' })}
          manage={L('Add or change subjects', 'Ajouter ou changer de matière')}
          onManage={() => navigation.navigate('ExamClass', { fromSettings: true })}
        />

        <Section title={L('Also in Learn', 'Aussi dans Apprendre')}>
          <TileGrid
            items={[
              { icon: 'timer', title: L('Practice papers', 'Épreuves'), sub: L('Paper 1, class tests and topic quizzes', 'Épreuve 1, contrôles et quiz'), onPress: () => navigation.navigate('ExamMenu', { subject }) },
              { icon: 'search', title: L('Search', 'Rechercher'), sub: L('Find any topic or term', 'Trouvez un thème ou un terme'), onPress: () => navigation.navigate('Search') },
              { icon: 'forum', title: L('Ask the tutor', 'Demander au tuteur'), sub: L('Questions answered and read aloud', 'Réponses lues à voix haute'), onPress: () => navigation.navigate('Tutor', { subject }) },
              { icon: 'co_present', title: L('Workspace', 'Espace de travail'), sub: L('Questions solved step by step on the board', 'Questions résolues au tableau, étape par étape'), onPress: () => navigation.navigate('Workspace', { subject }) },
            ]}
          />
        </Section>
      </V>
    </Screen>
  );
}
