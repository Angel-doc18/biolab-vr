import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { P, T, V } from '../../ui/kit';
import { Cta } from '../../ui/chrome';
import { Diagram } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { OPEN_SUBJECTS } from '../../data/subjects';

// "Biology, Chemistry and Physics" from the subjects that are open.
const listOf = (names, and) => (names.length > 1 ? `${names.slice(0, -1).join(', ')} ${and} ${names[names.length - 1]}` : names[0]);

function Point({ title, body }) {
  return (
    <V c="gap-0.5">
      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
        {title}
      </T>
      <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 21 }}>
        {body}
      </T>
    </V>
  );
}

export default function Welcome({ navigation }) {
  const insets = useSafeAreaInsets();
  const { savePrefs } = useApp();
  const L = useL();

  const start = () => {
    savePrefs({ seenWelcome: true });
    navigation.navigate('Language');
  };
  const login = () => {
    savePrefs({ seenWelcome: true });
    navigation.navigate('Login');
  };

  return (
    <V c="flex-1 bg-surface-container-lowest" style={{ paddingTop: insets.top, paddingBottom: insets.bottom + 12 }}>
      <V c="mx-margin mt-space-md p-space-sm rounded-xl bg-surface-container-lowest border border-surface-container">
        <Diagram id="heart-section" caption={false} maxHeight={230} />
      </V>
      <V c="flex-1 px-margin pt-space-lg gap-space-lg">
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('GCE sciences, from Form 1 to the exam hall', 'Les sciences du GCE, de la Form 1 à l’examen')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L(`${listOf(OPEN_SUBJECTS.map((s) => s.en), 'and')}, written for the Cameroon GCE syllabuses.`, `${listOf(OPEN_SUBJECTS.map((s, i) => (i ? s.fr.toLowerCase() : s.fr)), 'et')}, conçues pour les programmes du GCE du Cameroun.`)}
          </T>
        </V>
        <V c="gap-space-md">
          <Point title={L('Labelled diagrams and 3D models', 'Schémas annotés et modèles 3D')} body={L('Every structure labelled the way the exam expects: organs, cells, molecules and apparatus you can turn and open.', 'Chaque structure annotée comme l’attend l’examen : organes, cellules, molécules et appareils à tourner et ouvrir.')} />
          <Point title={L('Practicals', 'Travaux pratiques')} body={L('Run the standard practicals of each science step by step and record your results.', 'Réalisez les TP de chaque matière pas à pas et notez vos résultats.')} />
          <Point title={L('Papers 1 and 2', 'Épreuves 1 et 2')} body={L('Timed papers in the exam format, with answers marked against a mark scheme.', 'Épreuves chronométrées au format de l’examen, corrigées selon un barème.')} />
        </V>
      </V>
      <V c="px-margin gap-space-sm">
        <Cta variant="dark" icon={null} label={L('Get started', 'Commencer')} onPress={start} />
        <P c="items-center py-2" onPress={login} hitSlop={8}>
          <T c="font-label-lg text-label-lg text-primary-container">{L('I already have an account', 'J’ai déjà un compte')}</T>
        </P>
      </V>
    </V>
  );
}
