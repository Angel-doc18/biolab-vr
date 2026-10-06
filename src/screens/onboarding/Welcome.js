import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { P, T, V } from '../../ui/kit';
import { Cta } from '../../ui/chrome';
import { Diagram } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { OPEN_SUBJECTS } from '../../data/subjects';

// "Biology, Chemistry and Physics" from the subjects that are open; subjects
// still being written for the higher classes are named with their classes.
const O_LEVEL = OPEN_SUBJECTS.filter((s) => s.level === 'O' && !s.classes);
const PARTIAL = OPEN_SUBJECTS.filter((s) => s.level === 'O' && s.classes);
const A_LEVEL = OPEN_SUBJECTS.filter((s) => s.level === 'A');
const listOf = (names, and) => (names.length > 1 ? `${names.slice(0, -1).join(', ')} ${and} ${names[names.length - 1]}` : names[0]);
// "Forms 1 to 3", "Forms 1 and 2", "Form 2".
const classesOf = (list, and, to) => {
  const n = list.map((c) => c.replace('Form ', ''));
  if (n.length === 1) return list[0];
  return n.length === 2 ? `Forms ${n[0]} ${and} ${n[1]}` : `Forms ${n[0]} ${to} ${n[n.length - 1]}`;
};

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
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Your school subjects, from Form 1 to the exam hall', 'Vos matières, de la Form 1 à l’examen')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L(
              `${listOf(O_LEVEL.map((s) => s.en), 'and')} from Form 1 to Form 5${PARTIAL.length ? `; ${listOf(PARTIAL.map((s) => `${s.en} for ${classesOf(s.classes, 'and', 'to')}`), 'and')}` : ''}${A_LEVEL.length ? `; and A Level ${listOf(A_LEVEL.map((s) => s.en), 'and')} for the Sixth Form` : ''}. Written for the Cameroon syllabuses and the GCE.`,
              `${listOf(O_LEVEL.map((s, i) => (i ? s.fr.toLowerCase() : s.fr)), 'et')} de la Form 1 à la Form 5${PARTIAL.length ? ` ; ${listOf(PARTIAL.map((s) => `${s.fr.toLowerCase()} en ${classesOf(s.classes, 'et', 'à')}`), 'et')}` : ''}${A_LEVEL.length ? ` ; et ${listOf(A_LEVEL.map((s) => s.fr.toLowerCase()), 'et')} de l’Advanced Level pour la Sixth Form` : ''}. Conçu pour les programmes du Cameroun et le GCE.`
            )}
          </T>
        </V>
        <V c="gap-space-md">
          <Point title={L('Labelled diagrams', 'Schémas annotés')} body={L('Every diagram labelled the way the exam expects, with each label read and explained by the tutor.', 'Chaque schéma annoté comme l’attend l’examen, chaque légende lue et expliquée par le tuteur.')} />
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
