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
    <Screen header={<TabHeader title={L('Learn', 'Apprendre')} subtitle={L('Lessons, labelled diagrams and 3D models', 'Leçons, schémas légendés et modèles 3D')} />}>
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
              { icon: 'view_in_ar', title: L('3D models', 'Modèles 3D'), sub: L('Turn and open every model', 'Tournez et ouvrez chaque modèle'), onPress: () => navigation.navigate('Models', { subject }) },
              { icon: 'search', title: L('Search', 'Rechercher'), sub: L('Find any topic or term', 'Trouvez un thème ou un terme'), onPress: () => navigation.navigate('Search') },
              { icon: 'forum', title: L('Ask the tutor', 'Demander au tuteur'), sub: L('Questions answered and read aloud', 'Réponses lues à voix haute'), onPress: () => navigation.navigate('Tutor', { subject }) },
              { icon: 'menu_book', title: L('Lab workbook', 'Cahier de TP'), sub: L('Your results and drawings', 'Vos résultats et dessins'), onPress: () => navigation.navigate('Workbook') },
            ]}
          />
        </Section>
      </V>
    </Screen>
  );
}
