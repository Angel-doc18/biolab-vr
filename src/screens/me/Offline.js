// Downloads and storage: the offline pack, what the app keeps on this phone,
// and controls to free it.
import { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bar, P, T, V } from '../../ui/kit';
import { Cta, Screen, StackHeader, useToast } from '../../ui/chrome';
import { deleteKeptExplanations, keptExplanationsSize } from '../../lib/explain';
import { packLive, packState, startPack, stopPack, watchPack } from '../../lib/offlinePack';
import { useOnline } from '../../lib/online';
import { Toggle } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { ANATOMY, deleteDownloads, downloadedModels } from '../../three/anatomy';
import { Section } from '../tabs/Home';

const fmt = (b) => (b >= 1e9 ? `${(b / 1e9).toFixed(1)} GB` : b >= 1e6 ? `${(b / 1e6).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1e3))} KB`);

const MODEL_NAMES = {
  heart: ['Heart', 'Cœur'],
  lungs: ['Lungs', 'Poumons'],
  digestive: ['Digestive system', 'Appareil digestif'],
  urinary: ['Kidneys and urinary system', 'Reins et appareil urinaire'],
  brain: ['Brain and spinal cord', 'Encéphale et moelle'],
  arm: ['Arm, elbow and muscles', 'Bras, coude et muscles'],
};

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

const ago = (t, L) => {
  const d = Math.floor((Date.now() - t) / 86400000);
  return d <= 0 ? L('today', 'aujourd’hui') : d === 1 ? L('yesterday', 'hier') : L(`${d} days ago`, `il y a ${d} jours`);
};

// Download the teacher's explanations of the whole class, with live progress.
function OfflinePack({ user, prefs, savePrefs, L }) {
  const online = useOnline();
  const [live, setLive] = useState(packLive);
  const [last, setLast] = useState(null);
  const [kept, setKept] = useState(keptExplanationsSize);
  useEffect(() => {
    packState().then(setLast);
    return watchPack((st) => {
      setLive(st);
      if (!st.running) {
        setKept(keptExplanationsSize());
        packState().then(setLast);
      }
    });
  }, []);
  const wifiOnly = prefs.packWifiOnly !== false;
  const p = live.progress;
  const pct = p?.total ? p.done / p.total : 0;
  const ended = live.result?.reason;
  const why = {
    done: L('Everything for your class is on this phone. Run it again after updates: only new explanations download.', 'Tout pour votre classe est sur ce téléphone. Relancez après les mises à jour : seules les nouvelles explications se téléchargent.'),
    stopped: L('Stopped. Tap Download to carry on where it stopped.', 'Arrêté. Touchez Télécharger pour reprendre où il s’est arrêté.'),
    offline: L('The connection was lost. Tap Download when you are online to carry on.', 'La connexion a été perdue. Touchez Télécharger une fois en ligne pour reprendre.'),
    wifi: L('Waiting for Wi-Fi. Connect to Wi-Fi, or switch off "Wi-Fi only" below.', 'En attente du Wi-Fi. Connectez-vous au Wi-Fi ou désactivez « Wi-Fi seulement ».'),
    account: L('Your account could not download explanations. Sign in again, then try once more.', 'Votre compte n’a pas pu télécharger les explications. Reconnectez-vous puis réessayez.'),
    error: L(`${live.result?.failed || 0} items could not be downloaded. Tap Download to try them again.`, `${live.result?.failed || 0} éléments n’ont pas pu être téléchargés. Touchez Télécharger pour réessayer.`),
  }[ended];
  return (
    <Section title={L('Use Klass8 offline', 'Utiliser Klass8 hors ligne')}>
      <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
        {L(
          'Lessons, diagrams, quizzes and Paper 1 already work without data. Download the teacher’s explanations of every lesson, diagram and practical in your class, and the 3D models, so they work offline too. Offline, explanations are read in your phone’s own voice.',
          'Les leçons, schémas, quiz et l’épreuve 1 fonctionnent déjà sans données. Téléchargez les explications du professeur pour chaque leçon, schéma et TP de votre classe, et les modèles 3D, pour les utiliser hors ligne. Hors ligne, les explications sont lues avec la voix du téléphone.'
        )}
      </T>
      <V c="bg-surface-container-lowest rounded-xl shadow-sm p-space-md gap-space-sm">
        <T c="font-label-lg text-label-lg text-on-surface">
          {L(`${kept.count} explanations on this phone`, `${kept.count} explications sur ce téléphone`)}
          {kept.bytes ? ` (${fmt(kept.bytes)})` : ''}
        </T>
        {!!last && !live.running && (
          <T c="font-body-sm text-body-sm text-on-surface-variant">
            {L(`Last download ${ago(last.at, L)}: ${last.done} of ${last.total} ready.`, `Dernier téléchargement ${ago(last.at, L)} : ${last.done} sur ${last.total} prêts.`)}
          </T>
        )}
        {live.running && (
          <V c="gap-1">
            <Bar pct={pct} />
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {p ? L(`${p.done} of ${p.total} ready`, `${p.done} sur ${p.total} prêts`) : L('Preparing the list', 'Préparation de la liste')}
            </T>
          </V>
        )}
        {!live.running && !!why && (
          <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 19 }}>
            {why}
          </T>
        )}
        {!online && !live.running && (
          <T c="font-body-sm text-body-sm text-error">{L('You are offline. Connect to the internet to download.', 'Vous êtes hors ligne. Connectez-vous à Internet pour télécharger.')}</T>
        )}
        {live.running ? (
          <Cta variant="soft" label={L('Stop', 'Arrêter')} icon={null} lead="stop" onPress={stopPack} />
        ) : (
          <Cta label={L('Download for offline use', 'Télécharger pour le hors ligne')} icon="download" disabled={!online} onPress={() => startPack({ user, lang: prefs.lang, wifiOnly })} />
        )}
        <V c="flex-row items-center justify-between gap-space-sm">
          <V c="flex-1">
            <T c="font-label-lg text-label-lg text-on-surface">{L('Wi-Fi only', 'Wi-Fi seulement')}</T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Saves your mobile data.', 'Économise vos données mobiles.')}</T>
          </V>
          <Toggle on={wifiOnly} onPress={() => savePrefs({ packWifiOnly: !wifiOnly })} accessibilityLabel={L('Wi-Fi only', 'Wi-Fi seulement')} />
        </V>
        {kept.count > 0 && !live.running && (
          <P
            onPress={() => {
              deleteKeptExplanations();
              setKept(keptExplanationsSize());
            }}
            hitSlop={8}
          >
            <T c="font-label-md text-label-md text-error">{L('Delete downloaded explanations', 'Supprimer les explications téléchargées')}</T>
          </P>
        )}
      </V>
    </Section>
  );
}

export default function Offline({ navigation }) {
  const { prefs, savePrefs, user } = useApp();
  const L = useL();
  const [models, setModels] = useState([]);
  const [sizes, setSizes] = useState({ progress: 0, chat: 0, drafts: 0 });
  const [toast, showToast] = useToast();

  const measure = useCallback(async () => {
    setModels(downloadedModels());
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

  const modelBytes = models.reduce((a, m) => a + m.size, 0);
  const label = (fileName) => {
    const key = fileName.split('-')[0];
    const n = MODEL_NAMES[key];
    return n ? L(n[0], n[1]) : fileName;
  };

  return (
    <Screen bg="bg-surface" header={<StackHeader close title={L('Downloads and storage', 'Téléchargements et stockage')} avatar={false} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <OfflinePack user={user} prefs={prefs} savePrefs={savePrefs} L={L} />
        <Section title={L('3D models', 'Modèles 3D')}>
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
            {L('Each model downloads the first time you open it and is kept here, so it opens without data afterwards.', 'Chaque modèle se télécharge à la première ouverture et reste ici : il s’ouvre ensuite sans données.')}
          </T>
          {Platform.OS === 'web' ? (
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Not stored in the web preview.', 'Non stockés dans l’aperçu web.')}</T>
          ) : models.length ? (
            <V c="bg-surface-container-lowest rounded-xl shadow-sm">
              {models.map((m, i) => (
                <Row key={m.name} first={i === 0} title={label(m.name)} sub={fmt(m.size)} />
              ))}
              <Row
                title={L('Total', 'Total')}
                sub={fmt(modelBytes)}
                action={L('Delete all', 'Tout supprimer')}
                onAction={() => {
                  deleteDownloads();
                  measure();
                  showToast(L('3D models deleted. They download again when you open them.', 'Modèles 3D supprimés. Ils se retéléchargent à l’ouverture.'));
                }}
              />
            </V>
          ) : (
            <T c="font-body-md text-body-md text-on-surface-variant">
              {L('No models downloaded yet. All six together take about', 'Aucun modèle téléchargé. Les six ensemble font environ')} {fmt(Object.values(ANATOMY).reduce((a, m) => a + m.bytes, 0))}.
            </T>
          )}
        </Section>

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
