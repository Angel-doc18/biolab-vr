import { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import { Ic, P, T, V } from '../../ui/kit';
import { StackHeader } from '../../ui/chrome';
import Viewport from '../../three/Viewport';
import VRView from '../../three/VRView';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { unitById } from '../../data/units';

function RailBtn({ icon, on, onPress, label, teal }) {
  return (
    <P
      c={`w-9 h-9 rounded-full items-center justify-center shadow-sm ${teal ? 'bg-secondary' : on ? 'bg-primary-container' : 'bg-surface-container-lowest/95'}`}
      onPress={onPress}
      accessibilityLabel={label}
      scale={0.95}
    >
      <Ic n={icon} s={18} c={teal || on ? 'on-primary' : 'on-surface'} />
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
  const [active, setActive] = useState(unit.vr.parts[1]?.key || unit.vr.parts[0].key);
  const [xray, setXray] = useState(false);
  const [explode, setExplode] = useState(false);
  const [labels, setLabels] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [vr, setVr] = useState(false);
  const view = useRef(null);
  const idx = unit.vr.parts.findIndex((p) => p.key === active);
  const part = parts[idx];

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

  const title = lang === 'fr' && unit.vr.fr ? unit.vr.fr.title : unit.vr.title;
  const subtitle = lang === 'fr' && unit.vr.fr ? unit.vr.fr.subtitle : unit.vr.subtitle;

  return (
    <V c="flex-1 bg-surface-container-lowest">
      <StackHeader
        close
        title={L('3D specimen', 'Spécimen 3D')}
        subtitle={`${L('Unit', 'Unité')} ${unit.n} · ${unit.short}`}
        avatar={false}
        right={
          <P c="h-11 px-3.5 rounded-full bg-secondary flex-row items-center gap-1.5 shadow-md" onPress={() => setVr(true)}>
            <Ic n="view_in_ar" s={20} c="on-secondary" />
            <T c="font-label-md text-label-md text-on-secondary">{L('VR mode', 'Mode VR')}</T>
          </P>
        }
      />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 96 }} showsVerticalScrollIndicator={false}>
        <V c="px-margin pt-2 gap-space-xs">
          <V c="flex-row items-center justify-between">
            <V c="flex-row items-center gap-space-xs">
              <V c="px-2 py-0.5 rounded-full bg-surface-container-high">
                <T c="font-label-sm text-label-sm text-primary uppercase tracking-wide">
                  {L('Specimen', 'Spécimen')} {String(unit.n).padStart(2, '0')}
                </T>
              </V>
              <V c="px-2 py-0.5 rounded-full bg-secondary-container">
                <T c="font-label-sm text-label-sm text-on-secondary-container">{parts.length} {L('structures', 'structures')}</T>
              </V>
            </V>
            <P c="h-7 px-2.5 rounded-full bg-surface-container flex-row items-center gap-1 shadow-sm" onPress={() => setLang((l) => (l === 'fr' ? 'en' : 'fr'))} accessibilityLabel="Switch label language">
              <T c={`font-label-sm text-label-sm ${lang === 'en' ? 'text-primary' : 'text-on-surface-variant'}`}>EN</T>
              <T c="font-label-sm text-label-sm text-outline">|</T>
              <T c={`font-label-sm text-label-sm ${lang === 'fr' ? 'text-primary' : 'text-on-surface-variant'}`}>FR</T>
            </P>
          </V>
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{title}</T>
          <V c="flex-row items-start gap-1">
            <Ic n="biotech" s={14} c="secondary" style={{ marginTop: 2 }} />
            <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">{subtitle}</T>
          </V>
        </V>

        <V c="px-margin mt-space-sm">
          <V c="rounded-full overflow-hidden shadow-md">
            <Viewport ref={view} unitId={unit.id} parts={parts} active={active} onSelect={setActive} xray={xray} explode={explode} notes={labels} />
            <V c="absolute right-2.5 top-2.5 gap-1.5">
              <RailBtn icon="filter_center_focus" label="Centre view" onPress={() => view.current?.reset()} />
              <RailBtn icon="radiology" label="X-ray" on={xray} onPress={() => setXray((x) => !x)} />
              <RailBtn icon="hub" label="Explode layers" on={explode} onPress={() => setExplode((x) => !x)} />
              <RailBtn icon={speaking ? 'stop' : 'volume_up'} label="Read aloud" teal onPress={speak} />
            </V>
            <V c="absolute bottom-2.5 left-3 right-3 items-center" pointerEvents="none">
              <V c="px-3 py-1 rounded-full bg-inverse-surface/85 flex-row items-center gap-1.5">
                <Ic n="touch_app" s={14} c="secondary-fixed-dim" />
                <T c="font-label-sm text-inverse-on-surface" style={{ fontSize: 11 }}>
                  {L('Swipe to rotate · Pinch to zoom · Tap pins', 'Glissez · Pincez · Touchez les repères')}
                </T>
              </V>
            </V>
          </V>
        </V>

        <V c="px-margin mt-space-md gap-space-sm">
          <V c="bg-surface-container-lowest rounded-full p-space-md shadow-sm gap-space-xs">
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-2">
                <V c="w-2 h-2 rounded-full bg-secondary" />
                <T c="font-label-sm text-label-sm uppercase text-secondary tracking-wider">
                  {L('Structure', 'Structure')} {idx + 1} {L('of', 'sur')} {parts.length}
                </T>
              </V>
              <V c="px-2 py-0.5 rounded-full bg-surface-container-high flex-row items-center gap-1">
                <Ic n="verified" s={13} c="primary" />
                <T c="font-label-sm text-label-sm text-primary">{part.tag}</T>
              </V>
            </V>
            <T c="font-headline-sm text-headline-sm text-on-surface">{part.title}</T>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {part.desc}
            </T>
            <V c="mt-1 p-2.5 rounded-xl bg-surface-container-low flex-row items-start gap-2">
              <Ic n="school" s={18} c="primary" style={{ marginTop: 2 }} />
              <V c="flex-1">
                <T c="font-label-sm text-label-sm text-primary">{L('Where it is examined', 'Où c’est évalué')}</T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">
                  {unit.papers}: {L('labelled diagrams and structure to function questions.', 'schémas légendés et questions structure-fonction.')}
                </T>
              </V>
            </V>
          </V>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 4 }}>
            {parts.map((p, i) => {
              const on = p.key === active;
              return (
                <P key={p.key} c={`h-9 px-3 rounded-full flex-row items-center gap-1.5 shadow-sm ${on ? 'bg-surface-container-high' : 'bg-surface-container-low'}`} onPress={() => setActive(p.key)}>
                  <T c={`font-label-md text-label-md ${on ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {i + 1}. {p.name}
                  </T>
                </P>
              );
            })}
          </ScrollView>

          <P c="w-full h-12 mt-1 rounded-full bg-primary-container flex-row items-center justify-center gap-2 shadow-md" onPress={() => setVr(true)}>
            <Ic n="view_in_ar" s={20} c="on-primary" />
            <T c="font-label-lg text-label-lg text-on-primary">{L('Enter VR immersion (stereoscopic)', 'Entrer en VR (stéréoscopique)')}</T>
          </P>
          <T c="font-body-sm text-body-sm text-on-surface-variant text-center">
            {L('Place your phone in any cardboard VR viewer and turn your head to look around.', 'Placez le téléphone dans un casque VR en carton et tournez la tête.')}
          </T>
        </V>
      </ScrollView>

      <V c="absolute bottom-0 left-0 right-0 items-center" style={{ paddingBottom: insets.bottom + 12 }} pointerEvents="box-none">
        <V c="bg-surface-container-lowest/95 px-space-md rounded-full shadow-md flex-row items-center gap-space-xs">
          {[
            ['content_cut', L('Dissect', 'Disséquer'), explode, () => setExplode((x) => !x)],
            ['restart_alt', L('Reset', 'Réinit.'), false, () => (view.current?.reset(), setExplode(false), setXray(false))],
            ['label', L('Labels', 'Légendes'), labels, () => setLabels((x) => !x)],
            ['layers', L('Layers', 'Couches'), xray, () => setXray((x) => !x)],
          ].map(([icon, label, on, fn]) => (
            <P key={icon} c={`w-12 h-12 items-center justify-center rounded-full ${on ? 'bg-surface-container-low' : ''}`} onPress={fn} accessibilityLabel={label}>
              <Ic n={icon} s={22} c={on ? 'primary-container' : 'on-surface-variant'} />
              <T c={`font-label-sm ${on ? 'text-primary-container' : 'text-on-surface-variant'}`} style={{ fontSize: 9, lineHeight: 11, fontWeight: on ? '700' : '600' }}>
                {label}
              </T>
            </P>
          ))}
        </V>
      </V>
      {vr && <VRView unitId={unit.id} onClose={() => setVr(false)} />}
    </V>
  );
}
