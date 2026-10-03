import { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from '../../lib/voice';
import { Ic, P, T, V } from '../../ui/kit';
import { StackHeader, useToast } from '../../ui/chrome';
import Viewport from '../../three/Viewport';
import VRView from '../../three/VRView';
import { ANATOMY, ANATOMY_CREDIT, UNIT_MODEL, arSupported, openInAR } from '../../three/anatomy';
import { useApp } from '../../state/store';
import ListenButton from '../../ui/ListenButton';
import { useL, useLang } from '../../i18n';
import { modelOf, topicLabel, unitById } from '../../data/units';

function Tool({ icon, label, on, onPress }) {
  return (
    <P c={`flex-1 h-14 items-center justify-center rounded-lg gap-0.5 ${on ? 'bg-primary-container' : 'bg-surface-container-low'}`} onPress={onPress} accessibilityLabel={label} accessibilityState={{ selected: !!on }} scale={0.97}>
      <Ic n={icon} s={20} c={on ? 'on-primary' : 'on-surface'} />
      <T c={`font-label-sm ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontSize: 11, lineHeight: 13 }}>
        {label}
      </T>
    </P>
  );
}

export default function Specimen({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { viewModel } = useApp();
  const L = useL();
  const appLang = useLang();
  const unit = unitById(route.params?.unitId || 'cell');
  const [lang, setLang] = useState(appLang);
  const parts = unit.vr.parts.map((p) => (lang === 'fr' && p.fr ? { ...p, ...p.fr } : p));
  const [active, setActive] = useState(unit.vr.parts[0].key);
  const [xray, setXray] = useState(false);
  const [explode, setExplode] = useState(false);
  const [labels, setLabels] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [vr, setVr] = useState(false);
  const [status, setStatus] = useState('none');
  const [toast, showToast] = useToast();
  const view = useRef(null);
  const part = parts.find((p) => p.key === active) || parts[0];
  const idx = parts.indexOf(part);
  const modelName = UNIT_MODEL[modelOf(unit.id)];
  const sizeKb = modelName ? Math.round(ANATOMY[modelName].bytes / 1024) : 0;

  useEffect(() => {
    viewModel(unit.id);
    return () => Speech.stop();
  }, [unit.id, viewModel]);

  const speak = () => {
    if (speaking) {
      Speech.stop();
      setSpeaking(false);
      return;
    }
    setSpeaking(true);
    Speech.speak(`${part.title}. ${part.desc}`, {
      language: lang === 'fr' ? 'fr-FR' : 'en-GB',
      rate: 0.95,
      onDone: () => setSpeaking(false),
      onStopped: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
  };

  const ar = async () => {
    try {
      await openInAR(modelName, unit.vr.title);
    } catch (e) {
      showToast(e.code === 'premium_required' ? e.message : L('Could not open the AR view on this phone.', 'Impossible d’ouvrir la vue AR sur ce téléphone.'), 'error');
    }
  };

  const title = lang === 'fr' && unit.vr.fr ? unit.vr.fr.title : unit.vr.title;
  const statusText =
    status === 'loading'
      ? `${L('Downloading the 3D model', 'Téléchargement du modèle 3D')} (${sizeKb} KB)...`
      : status === 'error'
      ? L('Showing a simplified model. The full model downloads when you are connected.', 'Modèle simplifié affiché. Le modèle complet se télécharge quand vous êtes connecté.')
      : null;

  return (
    <V c="flex-1 bg-surface-container-lowest">
      <StackHeader
        close
        title={title}
        subtitle={`${topicLabel(unit, L)}, ${unit.short}`}
        subtitleColor="on-surface-variant"
        avatar={false}
        right={
          <P c="h-9 px-2.5 rounded-lg bg-surface-container flex-row items-center" onPress={() => setLang((l) => (l === 'fr' ? 'en' : 'fr'))} accessibilityLabel="Switch label language">
            <T c="font-label-md text-label-md text-on-surface">{lang === 'fr' ? 'FR' : 'EN'}</T>
          </P>
        }
      />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 32 }} showsVerticalScrollIndicator={false}>
        <V c="px-margin pt-space-sm gap-space-sm">
          <V c="rounded-xl overflow-hidden">
            <Viewport ref={view} unitId={unit.id} parts={parts} active={active} onSelect={setActive} xray={xray} explode={explode} notes={labels} onStatus={setStatus} />
          </V>
          {!!statusText && <T c="font-body-sm text-body-sm text-on-surface-variant">{statusText}</T>}
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Drag to turn, pinch to zoom, tap a number to select a part.', 'Glissez pour tourner, pincez pour zoomer, touchez un numéro pour choisir une partie.')}</T>

          <V c="flex-row gap-space-xs">
            <Tool icon="restart_alt" label={L('Reset', 'Recentrer')} onPress={() => (view.current?.reset(), setExplode(false), setXray(false))} />
            <Tool icon="visibility" label={L('See inside', 'Voir dedans')} on={xray} onPress={() => setXray((x) => !x)} />
            <Tool icon="open_in_full" label={L('Separate', 'Séparer')} on={explode} onPress={() => setExplode((x) => !x)} />
            <Tool icon="label" label={L('Labels', 'Légendes')} on={labels} onPress={() => setLabels((x) => !x)} />
          </V>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingVertical: 4 }}>
            {parts.map((p, i) => {
              const on = p.key === active;
              return (
                <P key={p.key} c={`h-10 px-3 rounded-lg items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-low'}`} onPress={() => setActive(p.key)}>
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>
                    {i + 1}. {p.name}
                  </T>
                </P>
              );
            })}
          </ScrollView>

          <V c="gap-space-xs pt-space-xs">
            <T c="font-label-md text-label-md text-on-surface-variant">
              {idx + 1} {L('of', 'sur')} {parts.length}, {part.tag}
            </T>
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {part.title}
            </T>
            <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 23 }}>
              {part.desc}
            </T>
            <ListenButton
              c="mt-space-xs"
              label={L('Listen: about this part', 'Écouter : cette partie')}
              sub={part.title}
              stopLabel={L('Stop listening', 'Arrêter l’écoute')}
              playing={speaking}
              onPress={speak}
            />
          </V>

          <V c="gap-space-xs pt-space-md">
            {arSupported && modelName && (
              <P c="h-12 rounded-xl bg-primary-container flex-row items-center justify-center gap-2" onPress={ar}>
                <Ic n="view_in_ar" s={20} c="on-primary" />
                <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                  {L('View in your room (AR)', 'Voir dans votre pièce (AR)')}
                </T>
              </P>
            )}
            <P c="h-12 rounded-xl bg-surface-container flex-row items-center justify-center gap-2" onPress={() => setVr(true)}>
              <Ic n="vrpano" s={20} c="on-surface" />
              <T c="font-label-lg text-label-lg text-on-surface">{L('Cardboard VR view', 'Vue VR carton')}</T>
            </P>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {L('For VR, put the phone in any cardboard viewer and turn your head to look around.', 'Pour la VR, placez le téléphone dans une visionneuse en carton et tournez la tête.')}
            </T>
          </V>

          {modelName && status === 'ready' && (
            <T c="font-body-sm text-on-surface-variant pt-space-sm" style={{ fontSize: 11, lineHeight: 15 }}>
              {ANATOMY_CREDIT}
            </T>
          )}
        </V>
      </ScrollView>
      {vr && <VRView unitId={unit.id} onClose={() => setVr(false)} />}
      {toast}
    </V>
  );
}
