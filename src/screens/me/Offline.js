import { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Paths } from 'expo-file-system';
import { Ic, P, T, V } from '../../ui/kit';
import { Pulse, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Toggle } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { units } from '../../data/units';
import { lessonsFor } from '../../data/lessons';
import { labsForUnit } from '../../data/labs';

const fmt = (b) => (b >= 1e9 ? `${(b / 1e9).toFixed(1)} GB` : b >= 1e6 ? `${(b / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1e3))} KB`);

// Shows what this app really keeps on the phone. Course content ships inside
// the app, so nothing needs downloading; only the student's own data grows.
export default function Offline() {
  const { user, prefs, savePrefs } = useApp();
  const L = useL();
  const [disk, setDisk] = useState(null);
  const [sizes, setSizes] = useState({ progress: 0, chat: 0, drafts: 0, other: 0 });
  const [toast, showToast] = useToast();

  const measure = useCallback(async () => {
    try {
      if (Platform.OS !== 'web') setDisk({ free: Paths.availableDiskSpace, total: Paths.totalDiskSpace });
    } catch {
      setDisk(null);
    }
    try {
      const keys = await AsyncStorage.getAllKeys();
      const pairs = await AsyncStorage.multiGet(keys);
      const s = { progress: 0, chat: 0, drafts: 0, other: 0 };
      for (const [k, v] of pairs) {
        const n = (v || '').length * 2;
        if (k.startsWith('bs:progress')) s.progress += n;
        else if (k.startsWith('bs:tutor')) s.chat += n;
        else if (k.startsWith('bs:p1') || k.startsWith('bs:p2')) s.drafts += n;
        else s.other += n;
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

  const mine = sizes.progress + sizes.chat + sizes.drafts + sizes.other;
  const segs = [
    ['bg-primary-container', L('Study record', 'Progression'), sizes.progress],
    ['bg-secondary', L('Tutor chat', 'Discussions'), sizes.chat],
    ['bg-tertiary-container', L('Exam drafts', 'Brouillons'), sizes.drafts],
    ['bg-primary-fixed-dim', L('Settings', 'Réglages'), sizes.other],
  ];

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" header={<StackHeader close title={L('Offline manager', 'Gestion hors ligne')} />}>
        <V c="pb-space-xl">
          <V c="pt-space-md">
            <V c="bg-secondary-container/20 rounded-xl p-space-md flex-row items-center justify-between shadow-sm">
              <V c="flex-row items-center gap-space-sm flex-1">
                <V c="w-9 h-9 rounded-xl bg-secondary/15 items-center justify-center">
                  <Ic n="cloud_done" s={20} c="secondary" />
                </V>
                <V c="flex-1">
                  <V c="flex-row items-center gap-space-xs">
                    <T c="font-headline-sm text-headline-sm text-on-surface">{L('Ready offline', 'Prêt hors ligne')}</T>
                    <Pulse />
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                    {L('Lessons, 3D models and labs are inside the app', 'Cours, modèles 3D et TP sont dans l’application')}
                  </T>
                </V>
              </V>
              <V c="bg-surface-container-lowest px-space-sm py-1 rounded-full shadow-sm">
                <T c="font-label-sm text-label-sm text-secondary">
                  {units.length}/{units.length} {L('UNITS', 'UNITÉS')}
                </T>
              </V>
            </V>
          </V>

          <V c="pt-space-md">
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <V c="flex-row items-start justify-between mb-space-sm">
                <V>
                  <T c="font-label-sm text-label-sm text-primary uppercase tracking-wider">{L('Your data on this phone', 'Vos données sur ce téléphone')}</T>
                  <T c="font-headline-md text-headline-md text-on-surface mt-0.5">
                    {fmt(mine)}
                    {disk && (
                      <T c="font-body-md text-body-md text-on-surface-variant" style={{ fontWeight: '400' }}>
                        {' '}
                        · {fmt(disk.free)} {L('free', 'libres')}
                      </T>
                    )}
                  </T>
                </V>
                <V c="w-10 h-10 rounded-xl bg-primary-fixed items-center justify-center">
                  <Ic n="sd_card" s={22} c="primary" />
                </V>
              </V>
              <V c="w-full h-3 rounded-full bg-surface-container overflow-hidden flex-row my-space-sm" style={{ gap: 2 }}>
                {segs.map(([bg, , n]) => (n > 0 ? <V key={bg} c={`h-full ${bg}`} style={{ flex: n }} /> : null))}
              </V>
              {disk && (
                <V c="flex-row items-center justify-between mb-space-md">
                  <T c="font-label-sm text-label-sm text-on-surface-variant">
                    {L('Phone storage', 'Stockage du téléphone')}: {fmt(disk.total)}
                  </T>
                  <T c="font-label-sm text-label-sm text-secondary">
                    {fmt(disk.free)} {L('free space', 'disponibles')}
                  </T>
                </V>
              )}
              <V c="flex-row flex-wrap gap-space-xs pt-space-xs">
                {segs.map(([bg, label, n]) => (
                  <V key={label} c="bg-surface-container-low rounded-xl p-space-sm" style={{ width: '48.5%' }}>
                    <V c="flex-row items-center gap-1.5 mb-1">
                      <V c={`w-2.5 h-2.5 rounded-full ${bg}`} />
                      <T c="font-label-sm text-label-sm text-on-surface-variant" numberOfLines={1}>
                        {label}
                      </T>
                    </V>
                    <T c="font-headline-sm text-headline-sm text-on-surface">{fmt(n)}</T>
                  </V>
                ))}
              </V>
            </V>
          </V>

          <V c="pt-space-lg">
            <V c="flex-row items-center justify-between mb-space-xs">
              <T c="font-headline-sm text-headline-sm text-on-surface">{L('Data and sync', 'Données et synchronisation')}</T>
            </V>
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-md">
              <V c="flex-row items-center justify-between">
                <V c="flex-1 pr-space-md">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('Back up my progress online', 'Sauvegarder ma progression')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">
                    {user?.role === 'student'
                      ? L('Keeps your record safe if you change phone, and lets your teacher and parent see it. Uses very little data.', 'Protège votre progression et la partage avec enseignant et parent. Très peu de données.')
                      : L('Only students have progress to back up.', 'Seuls les élèves ont une progression.')}
                  </T>
                </V>
                <Toggle on={prefs.autoSync !== false} onPress={() => savePrefs({ autoSync: prefs.autoSync === false })} accessibilityLabel="Back up progress" />
              </V>
              <V c="flex-row items-center justify-between">
                <V c="flex-1 pr-space-md">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('Keep tutor chat history', 'Garder l’historique du tuteur')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Stored only on this phone.', 'Stocké uniquement sur ce téléphone.')}</T>
                </V>
                <P c="px-3 py-1.5 rounded-lg bg-surface-container" onPress={() => clear(['bs:tutor'], L('Chat history cleared', 'Historique effacé'))}>
                  <T c="font-label-sm text-label-sm text-primary">{L('Clear', 'Effacer')}</T>
                </P>
              </V>
              <V c="flex-row items-center justify-between">
                <V c="flex-1 pr-space-md">
                  <T c="font-label-lg text-label-lg text-on-surface">{L('Unfinished exam drafts', 'Brouillons d’examen')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Saved Paper 1 and Paper 2 attempts in progress.', 'Épreuves en cours enregistrées.')}</T>
                </V>
                <P c="px-3 py-1.5 rounded-lg bg-surface-container" onPress={() => clear(['bs:p1', 'bs:p2'], L('Drafts cleared', 'Brouillons effacés'))}>
                  <T c="font-label-sm text-label-sm text-primary">{L('Clear', 'Effacer')}</T>
                </P>
              </V>
            </V>
          </V>

          <V c="pt-space-lg">
            <V c="flex-row items-center justify-between mb-space-sm">
              <V c="flex-1">
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Syllabus packs', 'Contenus du programme')}</T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Lessons, 3D specimen, practicals and questions', 'Cours, spécimen 3D, TP et questions')}</T>
              </V>
              <V c="px-2 py-0.5 rounded-full bg-secondary-container/30">
                <T c="font-label-sm text-label-sm text-secondary">{L('Built in', 'Intégré')}</T>
              </V>
            </V>
            <V c="gap-space-sm">
              {units.map((u) => (
                <V key={u.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row items-center justify-between gap-space-sm">
                  <V c="flex-row items-start gap-space-sm flex-1">
                    <V c="w-10 h-10 rounded-xl bg-surface-container items-center justify-center">
                      <Ic n={u.icon} s={20} c="primary" />
                    </V>
                    <V c="flex-1">
                      <T c="font-label-lg text-label-lg text-on-surface" numberOfLines={1}>
                        {L('Unit', 'Unité')} {u.n}: {u.short}
                      </T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">
                        {lessonsFor(u.id).length} {L('lessons', 'leçons')} · {u.quiz.length} {L('questions', 'questions')} · 3D{labsForUnit(u.id).length ? ` · ${labsForUnit(u.id).length} ${L('labs', 'TP')}` : ''}
                      </T>
                    </V>
                  </V>
                  <Ic n="offline_pin" s={22} c="secondary" />
                </V>
              ))}
            </V>
          </V>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
