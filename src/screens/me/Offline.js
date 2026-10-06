// Downloads and storage: what the app keeps on this phone, and controls to free it.
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { P, T, V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import { Toggle } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { Section } from '../tabs/Home';

const fmt = (b) => (b >= 1e9 ? `${(b / 1e9).toFixed(1)} GB` : b >= 1e6 ? `${(b / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1e3))} KB`);

function Row({ title, sub, action, onAction, first }) {
  return (
    <V c={`px-space-md py-space-sm flex-row items-center gap-space-sm ${first ? '' : 'border-t border-surface-container'}`}>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface">{title}</T>
        {!!sub && <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>}
      </V>
      {!!action && (
        <P onPress={onAction} hitSlop={8}>
          <T c="font-label-md text-label-md text-error">{action}</T>
        </P>
      )}
    </V>
  );
}

export default function Offline({ navigation }) {
  const { prefs, savePrefs } = useApp();
  const L = useL();
  const [sizes, setSizes] = useState({ progress: 0, chat: 0, drafts: 0 });
  const [toast, showToast] = useToast();

  const measure = useCallback(async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const pairs = await AsyncStorage.multiGet(keys);
      const s = { progress: 0, chat: 0, drafts: 0 };
      for (const [k, v] of pairs) {
        const n = (v || '').length * 2;
        if (k.startsWith('bs:progress')) s.progress += n;
        else if (k.startsWith('bs:tutor')) s.chat += n;
        else if (k.startsWith('bs:p1') || k.startsWith('bs:p2')) s.drafts += n;
      }
      setSizes(s);
    } catch {
      // keep previous numbers
    }
  }, []);
  useEffect(() => {
    measure();
  }, [measure]);

  const clear = async (prefix, label) => {
    const keys = (await AsyncStorage.getAllKeys()).filter((k) => prefix.some((p) => k.startsWith(p)));
    await AsyncStorage.multiRemove(keys);
    await measure();
    showToast(label);
  };

  return (
    <Screen bg="bg-surface" header={<StackHeader close title={L('Downloads and storage', 'Téléchargements et stockage')} avatar={false} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <Section title={L('Your data on this phone', 'Vos données sur ce téléphone')}>
          <V c="bg-surface-container-lowest rounded-xl shadow-sm">
            <Row first title={L('Study record', 'Progression')} sub={`${fmt(sizes.progress)}. ${L('Also saved to your account once approved.', 'Aussi enregistrée sur votre compte après approbation.')}`} />
            <Row title={L('Tutor conversations', 'Conversations avec le tuteur')} sub={fmt(sizes.chat)} action={sizes.chat ? L('Clear', 'Effacer') : null} onAction={() => clear(['bs:tutor'], L('Conversations cleared', 'Conversations effacées'))} />
            <Row title={L('Unfinished papers', 'Épreuves en cours')} sub={fmt(sizes.drafts)} action={sizes.drafts ? L('Clear', 'Effacer') : null} onAction={() => clear(['bs:p1', 'bs:p2'], L('Unfinished papers cleared', 'Épreuves en cours effacées'))} />
          </V>
        </Section>

        <V c="flex-row items-center justify-between gap-space-sm">
          <V c="flex-1">
            <T c="font-label-lg text-label-lg text-on-surface">{L('Save progress to my account', 'Enregistrer la progression sur mon compte')}</T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Keeps it safe if you change or lose your phone.', 'La protège si vous changez ou perdez votre téléphone.')}</T>
          </V>
          <Toggle on={prefs.autoSync !== false} onPress={() => savePrefs({ autoSync: prefs.autoSync === false })} accessibilityLabel={L('Save progress to my account', 'Enregistrer la progression')} />
        </V>
      </V>
      {toast}
    </Screen>
  );
}
