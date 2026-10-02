import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, Screen, StackHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';

function Option({ on, name, sub, onPress }) {
  return (
    <P
      c={`flex-row items-center justify-between p-space-md rounded-xl ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
    >
      <V c="flex-1 pr-2 gap-0.5">
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
          {name}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>
      </V>
      <V c={`w-6 h-6 rounded-full items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>
        {on && <Ic n="check" s={16} c="on-primary" />}
      </V>
    </P>
  );
}

export default function Language({ navigation, route }) {
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
      header={<StackHeader title={lang === 'fr' ? 'Langue' : 'Language'} avatar={false} />}
      footer={
        <V c="px-margin pt-space-md" style={{ paddingBottom: 12 }}>
          <Cta variant="dark" icon={null} label={fromSettings ? (lang === 'fr' ? 'Enregistrer' : 'Save') : lang === 'fr' ? 'Continuer' : 'Continue'} onPress={submit} />
        </V>
      }
    >
      <V c="gap-1 pt-space-lg mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">Choose your language</T>
        <T c="font-headline-sm text-headline-sm text-on-surface-variant">Choisissez votre langue</T>
      </V>
      <V c="gap-space-sm" accessibilityRole="radiogroup">
        <Option on={lang === 'en'} name="English" sub="Menus, lessons and tutor in English" onPress={() => setLang('en')} />
        <Option on={lang === 'fr'} name="Français" sub="Menus, cours et tuteur en français" onPress={() => setLang('fr')} />
      </V>
      <T c="font-body-sm text-body-sm text-on-surface-variant mt-space-lg" style={{ lineHeight: 19 }}>
        {lang === 'fr'
          ? 'Les questions d’examen restent en anglais, comme au GCE. Vous pouvez changer de langue dans les réglages.'
          : 'Exam questions stay in English, as in the GCE. You can change the language in Settings.'}
      </T>
    </Screen>
  );
}
