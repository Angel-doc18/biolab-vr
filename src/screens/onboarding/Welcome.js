import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BrandLogo, Ic, P, T, V } from '../../ui/kit';
import { Cta } from '../../ui/chrome';
import HeartTour from '../../ui/HeartTour';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

// The first page a new visitor sees: the brand, one labelled diagram, a short
// promise and two ways in. Nothing to read beyond a line.
function Chip({ icon, label }) {
  return (
    <V c="flex-row items-center gap-1 px-space-sm py-1.5 rounded-full bg-surface-container-low">
      <Ic n={icon} s={15} c="tertiary-container" />
      <T c="font-label-sm text-label-sm text-on-surface-variant">{label}</T>
    </V>
  );
}

export default function Welcome({ navigation }) {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const short = height - insets.top - insets.bottom < 700;
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
      <V c="flex-1 justify-center px-margin">
        {/* the brand: the logo as designed, the motto set as text so it reads */}
        <V c="items-center mb-space-lg">
          <BrandLogo layout="stack" height={short ? 72 : 92} />
          <T c="font-label-lg text-label-lg text-primary mt-space-sm" style={{ letterSpacing: 1.6, fontWeight: '600' }}>
            {L('Learn. Practise. Excel.', 'Apprendre. S’exercer. Exceller.')}
          </T>
        </V>
        {/* the diagram shrinks on short screens so the buttons stay in view */}
        <HeartTour maxHeight={Math.max(170, Math.min(270, height - insets.top - insets.bottom - 560))} />
        <V c="items-center mt-space-md">
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
