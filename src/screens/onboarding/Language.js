import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, Screen, StackHeader } from '../../ui/chrome';
import { Logo } from '../../ui/kit';
import { useApp } from '../../state/store';

function Option({ on, glyph, name, tag, sub, onPress }) {
  return (
    <P
      c={`flex-row items-center justify-between p-space-md rounded-xl shadow-sm ${on ? 'bg-surface-container-low' : 'bg-surface-container-lowest'}`}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
    >
      <V c="flex-row items-center gap-space-md flex-1 pr-2">
        <V c={`w-11 h-11 rounded-xl items-center justify-center ${on ? 'bg-surface-container-lowest shadow-sm' : 'bg-surface-container-low'}`}>
          <T c={`font-headline-sm text-headline-sm ${on ? 'text-primary-container' : 'text-on-surface-variant'}`} style={{ fontWeight: '700' }}>
            {glyph}
          </T>
        </V>
        <V c="flex-1">
          <V c="flex-row items-center gap-space-xs">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: on ? '700' : '600' }}>
              {name}
            </T>
            <V c={`px-1.5 py-0.5 rounded-full ${on ? 'bg-surface-container' : 'bg-surface-container-low'}`}>
              <T c={`font-label-sm text-label-sm ${on ? 'text-on-primary-fixed-variant' : 'text-on-surface-variant'}`}>{tag}</T>
            </V>
          </V>
          <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
            {sub}
          </T>
        </V>
      </V>
      <V c={`w-6 h-6 rounded-full items-center justify-center ${on ? 'bg-secondary shadow-sm' : 'bg-surface-container'}`}>
        {on && <Ic n="check" s={16} c="on-secondary" />}
      </V>
    </P>
  );
}

export default function Language({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { prefs, savePrefs, user, updateMe } = useApp();
  const [lang, setLang] = useState(prefs.lang || 'en');
  const fromSettings = route.params?.fromSettings;

  const submit = async () => {
    savePrefs({ lang, langChosen: true });
    if (user) updateMe({ lang }).catch(() => {});
    if (fromSettings) navigation.goBack();
    else navigation.navigate('Register');
  };

  return (
    <Screen
      header={<StackHeader title="Language Selection" logo avatar={false} right={<V c="w-8 h-8 rounded-full bg-primary items-center justify-center"><Ic n="person" s={18} c="on-primary" /></V>} />}
      footer={
        <V c="px-margin pt-space-md gap-space-sm items-center" style={{ paddingBottom: 12 }}>
          <Cta label={fromSettings ? 'Save / Enregistrer' : 'Continue / Continuer'} onPress={submit} h="h-12" />
          <V c="flex-row items-center gap-1.5">
            <Ic n="menu_book" s={15} c="secondary" />
            <T c="font-label-sm text-label-sm text-on-surface-variant tracking-tight">Biology glossary available offline</T>
          </V>
        </V>
      }
    >
      {!fromSettings && (
        <V c="flex-row items-center justify-between pt-space-sm pb-space-md">
          <V c="flex-row items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-full">
            <V c="w-1.5 h-1.5 rounded-full bg-secondary" />
            <T c="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Onboarding</T>
          </V>
          <V c="flex-row items-center gap-space-xs">
            <T c="font-label-md text-label-md text-on-surface-variant">Step 1 of 2</T>
            <V c="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
              <V c="w-1/2 h-full bg-primary-container rounded-full" />
            </V>
          </V>
        </V>
      )}
      <V c={`gap-1 mb-space-lg ${fromSettings ? 'pt-space-md' : ''}`}>
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">Choose your language</T>
        <T c="font-headline-sm text-headline-sm text-primary-container">Choisissez votre langue</T>
        <T c="font-body-sm text-body-sm text-on-surface-variant pt-1" style={{ lineHeight: 18 }}>
          You can change this anytime in Settings ·{' '}
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontStyle: 'italic' }}>
            Vous pouvez changer à tout moment dans les Paramètres.
          </T>
        </T>
      </V>
      <V c="gap-space-md" accessibilityRole="radiogroup">
        <Option on={lang === 'en'} glyph="Aa" name="English" tag="GCE" sub="Cameroon GCE Board syllabus" onPress={() => setLang('en')} />
        <Option on={lang === 'fr'} glyph="Fr" name="Français" tag="FR" sub="Interface et tuteur en français" onPress={() => setLang('fr')} />
      </V>
      <V c="mt-space-lg p-space-md bg-surface-container-low rounded-xl flex-row items-start gap-space-sm">
        <V c="w-8 h-8 rounded-full bg-primary-container/10 items-center justify-center mt-0.5">
          <Ic n="verified" s={18} c="primary-container" />
        </V>
        <V c="flex-1 gap-0.5">
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
            Bilingual revision
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 18 }}>
            Menus, 3D organelle labels and <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '600' }}>Dr. Nkwenti</T>, your AI tutor,
            follow the language you choose. Exam questions stay in English, as in the GCE.
          </T>
        </V>
      </V>
      <V c="mt-space-md p-space-sm rounded-xl bg-surface-container-lowest flex-row items-center justify-between shadow-sm">
        <V c="flex-row items-center gap-space-sm">
          <V c="w-10 h-10 rounded-lg bg-surface-container-low items-center justify-center">
            <Logo size={24} />
          </V>
          <V>
            <T c="font-label-md text-label-md text-on-surface">3D specimen viewer</T>
            <T c="font-label-sm text-label-sm text-secondary">Labels in English and French</T>
          </V>
        </V>
        <V c="flex-row items-center gap-1 bg-surface-container-low px-2 py-1 rounded-full">
          <Ic n="offline_pin" s={14} c="secondary" />
          <T c="font-label-sm text-label-sm text-on-surface-variant">Offline</T>
        </V>
      </V>
    </Screen>
  );
}
