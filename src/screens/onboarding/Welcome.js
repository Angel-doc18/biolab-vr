import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, Logo, P, T, V } from '../../ui/kit';
import { Cta } from '../../ui/chrome';
import { Diagram } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

// The first page a new visitor sees: the brand, one labelled diagram, a short
// promise and two ways in. Nothing to read beyond a line.
function Chip({ icon, label }) {
  return (
    <V c="flex-row items-center gap-1 px-space-sm py-1.5 rounded-full bg-surface-container-low">
      <Ic n={icon} s={15} c="primary-container" />
      <T c="font-label-sm text-label-sm text-on-surface-variant">{label}</T>
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
    <V c="flex-1 bg-surface-container-lowest" style={{ paddingTop: insets.top + 8, paddingBottom: insets.bottom + 14 }}>
      <V c="flex-row items-center justify-center gap-space-xs pt-space-sm">
        <Logo size={30} />
        <T c="font-headline-sm text-headline-sm text-on-surface tracking-tight">Klass8</T>
      </V>

      <V c="flex-1 justify-center px-margin">
        <V c="rounded-3xl bg-surface-container-low p-space-md">
          <Diagram id="heart-section" caption={false} maxHeight={290} />
        </V>
        <V c="items-center gap-space-xs mt-space-lg">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight text-center">{L('Learn. Practise. Excel.', 'Apprendre. S’exercer. Exceller.')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant text-center" style={{ maxWidth: 320 }}>
            {L('Lessons, labelled diagrams and GCE practice, from Form 1 to Upper Sixth.', 'Cours, schémas annotés et entraînement au GCE, de la Form 1 à l’Upper Sixth.')}
          </T>
        </V>
        <V c="flex-row flex-wrap justify-center gap-space-xs mt-space-md">
          <Chip icon="school" label={L('Cameroon syllabus', 'Programme camerounais')} />
          <Chip icon="translate" label={L('English and French', 'Anglais et français')} />
        </V>
      </V>

      <V c="px-margin gap-space-xs">
        <Cta variant="dark" icon={null} label={L('Get started', 'Commencer')} onPress={start} />
        <P c="h-[48px] items-center justify-center rounded-xl" onPress={login} hitSlop={6}>
          <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
            {L('I already have an account', 'J’ai déjà un compte')}
          </T>
        </P>
      </V>
    </V>
  );
}
