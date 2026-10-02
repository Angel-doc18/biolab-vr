import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { P, T, V } from '../../ui/kit';
import { Cta } from '../../ui/chrome';
import { AnimalCell } from '../../ui/art';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

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
      <V c="h-60 mx-margin mt-space-md rounded-xl overflow-hidden bg-surface-container-low">
        <AnimalCell />
      </V>
      <V c="flex-1 px-margin pt-space-lg gap-space-lg">
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('GCE Biology, from Form 3 to the exam hall', 'La biologie du GCE, de la Form 3 à l’examen')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Written for the Cameroon GCE Ordinary Level syllabus, in English and French.', 'Conçu pour le programme du GCE Ordinary Level du Cameroun, en anglais et en français.')}
          </T>
        </V>
        <V c="gap-space-md">
          <Point title={L('Specimens in 3D', 'Spécimens en 3D')} body={L('Turn, open and label organs and cells the way the exam asks you to draw them.', 'Tournez, ouvrez et annotez organes et cellules comme l’examen demande de les dessiner.')} />
          <Point title={L('Practicals', 'Travaux pratiques')} body={L('Run the standard practicals step by step and record your results.', 'Réalisez les TP du programme pas à pas et notez vos résultats.')} />
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
