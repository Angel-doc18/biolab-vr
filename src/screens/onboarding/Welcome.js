import { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, Pulse } from '../../ui/chrome';
import { AnimalCell, MicroscopeField } from '../../ui/art';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { questionBank, units } from '../../data/units';
import { daysToExam } from '../../state/progress';

function Pin({ n, label, bg, style }) {
  return (
    <V c="absolute flex-row items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1 rounded-full shadow-md" style={style}>
      <V c={`w-4 h-4 rounded-full ${bg} items-center justify-center`}>
        <T c="font-label-sm text-label-sm text-surface-container-lowest">{n}</T>
      </V>
      <T c="font-label-md text-label-md text-on-surface">{label}</T>
    </V>
  );
}

function Frame({ chip, right, children, footL, footR }) {
  return (
    <V c="w-full rounded-full overflow-hidden bg-surface-container-low p-space-md shadow-sm">
      <V c="flex-row items-center justify-between mb-space-sm">
        <V c="flex-row items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest shadow-sm flex-shrink">
          <Pulse />
          <T c="font-label-sm text-label-sm text-primary-container tracking-wider uppercase" numberOfLines={1}>
            {chip}
          </T>
        </V>
        {right}
      </V>
      <V c="w-full h-56 rounded-xl bg-surface-container-lowest overflow-hidden">{children}</V>
      <V c="mt-space-sm flex-row items-center justify-between">
        {footL}
        {footR}
      </V>
    </V>
  );
}

export default function Welcome({ navigation }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { savePrefs } = useApp();
  const L = useL();
  const [index, setIndex] = useState(0);
  const scroller = useRef(null);
  const touched = useRef(false);
  const pageW = width - 32;
  const dots = useRef([0, 1, 2].map((i) => new Animated.Value(i === 0 ? 1 : 0))).current;

  useEffect(() => {
    dots.forEach((d, i) => Animated.spring(d, { toValue: i === index ? 1 : 0, useNativeDriver: false, stiffness: 300, damping: 30 }).start());
  }, [index, dots]);

  // Gentle auto-tour until the student touches the carousel.
  useEffect(() => {
    const t = setInterval(() => {
      if (touched.current) return;
      setIndex((i) => {
        const n = (i + 1) % 3;
        scroller.current?.scrollTo({ x: n * pageW, animated: true });
        return n;
      });
    }, 5000);
    return () => clearInterval(t);
  }, [pageW]);

  const goTo = (i) => {
    touched.current = true;
    setIndex(i);
    scroller.current?.scrollTo({ x: i * pageW, animated: true });
  };
  const start = () => {
    savePrefs({ seenWelcome: true });
    navigation.navigate('Language');
  };
  const login = () => {
    savePrefs({ seenWelcome: true });
    navigation.navigate('Login');
  };

  const slides = [
    {
      title: L('See biology in 3D', 'La biologie en 3D'),
      body: L(
        'Explore cells, organs and systems inside and out with interactive 3D specimens and a stereoscopic VR view.',
        'Explorez cellules, organes et systèmes en 3D interactive, avec une vue stéréoscopique en réalité virtuelle.'
      ),
      frame: (
        <Frame
          chip={L('Animal cell (ultrastructure)', 'Cellule animale (ultrastructure)')}
          right={
            <V c="flex-row items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded-full shadow-sm">
              <Ic n="3d_rotation" s={16} c="secondary" />
              <T c="font-label-sm text-label-sm text-on-surface-variant">360° VR</T>
            </V>
          }
          footL={
            <V c="flex-row items-center gap-1">
              <Ic n="check_circle" s={15} c="secondary" />
              <T c="font-label-sm text-label-sm text-secondary">{L('O-Level core specimen', 'Spécimen du programme')}</T>
            </V>
          }
          footR={<T c="font-label-sm text-label-sm text-primary-container">{L('Scale: 10 µm', 'Échelle : 10 µm')}</T>}
        >
          <AnimalCell />
          <Pin n="1" label={L('Mitochondrion', 'Mitochondrie')} bg="bg-primary-container" style={{ top: '14%', left: '8%' }} />
          <Pin n="2" label={L('Nucleus', 'Noyau')} bg="bg-secondary" style={{ top: '44%', left: '36%' }} />
          <Pin n="3" label={L('Cell membrane', 'Membrane')} bg="bg-primary" style={{ bottom: 44, right: 16 }} />
          <V c="absolute bottom-3 self-center flex-row items-center gap-1.5 bg-surface-container-highest px-3 py-1 rounded-full">
            <Ic n="pinch" s={14} c="primary" />
            <T c="font-label-sm text-label-sm text-primary">{L('Swipe to rotate · Pinch to zoom', 'Glissez pour tourner · Pincez pour zoomer')}</T>
          </V>
        </Frame>
      ),
    },
    {
      title: L('Do the practicals anywhere', 'Les travaux pratiques partout'),
      body: L(
        'Prepare slides, stain onion epidermis and run the food tests step by step, without glassware or reagents.',
        'Préparez des lames, colorez l’épiderme d’oignon et réalisez les tests alimentaires, sans verrerie ni réactifs.'
      ),
      frame: (
        <Frame
          chip={L('Virtual wet lab · Paper 3', 'Labo virtuel · Épreuve 3')}
          right={
            <V c="bg-secondary-container px-2.5 py-1 rounded-full">
              <T c="font-label-sm text-label-sm text-on-secondary-container">{L('Iodine stain', 'Iode')}</T>
            </V>
          }
          footL={<T c="font-label-sm text-label-sm text-secondary">{L('Standard apparatus', 'Matériel standard')}</T>}
          footR={<T c="font-label-sm text-label-sm text-primary-container">{L('Paper 3 ready', 'Prêt pour l’épreuve 3')}</T>}
        >
          <MicroscopeField />
          <V c="absolute bottom-3 left-4 bg-surface-container-lowest px-2.5 py-1 rounded-full shadow-sm flex-row items-center gap-1.5">
            <Ic n="science" s={15} c="secondary" />
            <T c="font-label-sm text-label-sm text-on-surface">{L('Iodine staining · ×400', 'Coloration à l’iode · ×400')}</T>
          </V>
        </Frame>
      ),
    },
    {
      title: L('Pass your GCE with confidence', 'Réussissez votre GCE'),
      body: L(
        'Sit timed Paper 1 mocks, get structured answers marked against a mark scheme, and see exactly which units to revise.',
        'Passez des épreuves chronométrées, faites corriger vos réponses selon un barème et voyez quoi réviser.'
      ),
      frame: (
        <Frame
          chip={L('Exam simulator', 'Simulateur d’examen')}
          right={
            <V c="flex-row items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded-full">
              <Ic n="schedule" s={14} c="primary" />
              <T c="font-label-sm text-label-sm text-on-surface-variant">
                {daysToExam()} {L('days to June', 'jours avant juin')}
              </T>
            </V>
          }
          footL={<T c="font-label-sm text-label-sm text-secondary">{L('Worked explanations', 'Corrigés expliqués')}</T>}
          footR={<T c="font-label-sm text-label-sm text-primary-container">{L('Works offline', 'Fonctionne hors ligne')}</T>}
        >
          <V c="flex-1 p-space-md justify-between">
            <V c="flex-row items-start justify-between">
              <V c="flex-1 pr-2">
                <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Paper 1 mock', 'Épreuve 1 blanche')}</T>
                <T c="font-headline-md text-headline-md text-on-surface mt-0.5">{L('50 questions · 90 min', '50 questions · 90 min')}</T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Drawn from all ten units', 'Tirées des dix unités')}</T>
              </V>
              <V c="items-center bg-secondary/10 px-3 py-1.5 rounded-xl">
                <T c="font-label-sm text-label-sm text-secondary tracking-wider">{L('TARGET', 'OBJECTIF')}</T>
                <T c="font-display-lg text-headline-lg text-secondary" style={{ fontWeight: '800', lineHeight: 28 }}>
                  A
                </T>
              </V>
            </V>
            <V c="bg-surface-container-low p-space-sm rounded-xl flex-row items-center justify-between">
              <V>
                <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Syllabus units', 'Unités')}</T>
                <T c="font-headline-sm text-headline-sm text-on-surface">{units.length}</T>
              </V>
              <V c="h-6 w-px bg-surface-container-high" />
              <V>
                <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Papers covered', 'Épreuves')}</T>
                <T c="font-headline-sm text-headline-sm text-secondary">1, 2 & 3</T>
              </V>
            </V>
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-1">
                <Ic n="verified" s={15} c="secondary" />
                <T c="font-label-sm text-label-sm text-secondary">{L('GCE syllabus aligned', 'Aligné sur le programme')}</T>
              </V>
              <T c="font-label-sm text-label-sm text-primary">
                {questionBank.length} {L('practice questions', 'questions')}
              </T>
            </V>
          </V>
        </Frame>
      ),
    },
  ];

  return (
    <V c="flex-1 bg-surface-container-lowest" style={{ paddingTop: insets.top, paddingBottom: insets.bottom + 12 }}>
      <V c="flex-row items-center justify-between py-space-sm px-margin">
        <V c="flex-row items-center gap-space-xs">
          <V c="w-8 h-8 rounded-full bg-surface-container items-center justify-center">
            <Ic n="view_in_ar" s={20} c="primary-container" fill />
          </V>
          <T c="font-headline-sm text-headline-sm text-on-surface tracking-tight">
            BioSpatial<T c="font-headline-sm text-headline-sm text-secondary" style={{ fontWeight: '700' }}>VR</T>
          </T>
        </V>
        <P c="py-space-xs px-space-sm" onPress={login}>
          <T c="font-label-lg text-label-lg text-primary-container">{L('Skip', 'Passer')}</T>
        </P>
      </V>
      <ScrollView
        ref={scroller}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, marginHorizontal: 16 }}
        onScrollBeginDrag={() => (touched.current = true)}
        onMomentumScrollEnd={(e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / pageW))}
      >
        {slides.map((s, i) => (
          <V key={i} style={{ width: pageW }} c="pt-space-xs">
            {s.frame}
            <V c="mt-space-md">
              <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{s.title}</T>
              <T c="font-body-md text-body-md text-on-surface-variant mt-1.5" style={{ lineHeight: 22 }}>
                {s.body}
              </T>
            </V>
          </V>
        ))}
      </ScrollView>
      <V c="flex-1" />
      <V c="items-center mt-space-md">
        <V c="flex-row items-center gap-2">
          {dots.map((d, i) => (
            <P key={i} onPress={() => goTo(i)} hitSlop={8} accessibilityLabel={`Slide ${i + 1}`}>
              <Animated.View
                style={{
                  height: 8,
                  borderRadius: 12,
                  width: d.interpolate({ inputRange: [0, 1], outputRange: [8, 32] }),
                  backgroundColor: d.interpolate({ inputRange: [0, 1], outputRange: ['#d7eaff', '#0369a1'] }),
                }}
              />
            </P>
          ))}
        </V>
      </V>
      <V c="flex-row flex-wrap items-center justify-center gap-2 mt-space-md px-margin">
        {[
          ['wifi_off', 'secondary', L('Works offline', 'Hors ligne')],
          ['menu_book', 'primary-container', L('Cameroon GCE syllabus', 'Programme GCE')],
          ['assignment_turned_in', 'secondary', L('Paper 1, 2 & 3', 'Épreuves 1, 2 et 3')],
        ].map(([icon, col, text]) => (
          <V key={text} c="flex-row items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full">
            <Ic n={icon} s={15} c={col} />
            <T c="font-label-sm text-label-sm text-on-surface">{text}</T>
          </V>
        ))}
      </V>
      <V c="mt-space-lg items-center gap-space-sm px-margin">
        <Cta label={L('Get started', 'Commencer')} onPress={start} />
        <P c="py-1" onPress={login}>
          <T c="font-label-lg text-label-lg text-primary-container">{L('I already have an account', 'J’ai déjà un compte')}</T>
        </P>
        <V c="flex-row items-center gap-1 mt-0.5">
          <Ic n="translate" s={13} c="secondary" />
          <T c="font-body-sm text-on-surface-variant" style={{ fontSize: 11 }}>
            {L('English & Français · Core content works offline', 'Anglais et français · Contenu disponible hors ligne')}
          </T>
        </V>
      </V>
    </V>
  );
}
