import { useEffect, useRef, useState } from 'react';
import { Modal, ScrollView } from 'react-native';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import Slider from '../../ui/Slider';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { labById, labSteps } from '../../data/labs';
import { labLocked } from '../../data/plan';
import { completeMatchingAssignment } from '../../lib/assignments';

function Viewport({ panel }) {
  return (
    <V c="flex-1 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm items-center">
      <V c="w-full flex-row items-center justify-between mb-2">
        <T c="font-label-sm text-label-sm text-on-surface-variant flex-1" numberOfLines={1}>
          {panel.head}
        </T>
        <V c={`w-2 h-2 rounded-full bg-${panel.dot}`} />
      </V>
      <V c="w-36 h-36 rounded-full bg-surface-container-low items-center justify-center overflow-hidden" style={{ borderRadius: 72 }}>
        <V c="absolute inset-0 items-center justify-center opacity-20">
          <V c="w-full bg-primary" style={{ height: 1 }} />
          <V c="absolute h-full bg-primary" style={{ width: 1 }} />
        </V>
        {panel.view}
        <V c="absolute bottom-1 bg-inverse-surface/80 px-2 py-0.5 rounded-full">
          <T c="font-label-sm text-label-sm text-inverse-on-surface">×400</T>
        </V>
      </V>
      <V c="w-full mt-3 gap-1">
        {panel.metrics.map(([k, v, col]) => (
          <V key={k} c="bg-surface-container-low px-2 py-1.5 rounded-lg">
            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ lineHeight: 12 }}>
              {k}
            </T>
            <T c={`font-label-md text-label-md text-${col} mt-0.5`} style={{ fontWeight: '700' }} numberOfLines={1}>
              {v}
            </T>
          </V>
        ))}
      </V>
    </V>
  );
}

export default function LabRun({ navigation, route }) {
  const { pro, recordLab, progress } = useApp();
  const L = useL();
  const lang = useLang();
  const lab = labById(route.params?.labId || 'osmosis');
  const [r, setR] = useState(lab.def);
  const [t, setT] = useState(lab.slider.def);
  const [touched, setTouched] = useState({ reagent: false, time: false });
  const [recorded, setRecorded] = useState(false);
  const [help, setHelp] = useState(false);
  const [plate, setPlate] = useState(false);
  const [toast, showToast] = useToast();
  const started = useRef(Date.now());

  useEffect(() => {
    if (labLocked(lab.id, pro)) navigation.replace('Paywall');
  }, [lab.id, pro, navigation]);
  useEffect(() => setRecorded(false), [r, t]);

  const m = lab.model(r, t);
  const steps = labSteps(lang);
  const step = recorded ? 6 : touched.time ? 5 : touched.reagent ? 3 : 2;

  const record = async () => {
    const entry = lab.record(r, t);
    const minutes = Math.max(1, Math.round((Date.now() - started.current) / 60000));
    recordLab(lab.id, { ...entry, unit: lab.unit, condition: lab.options[r], time: t, timeUnit: lab.slider.unit, minutes });
    started.current = Date.now();
    setRecorded(true);
    showToast(L('Observation saved to your workbook', 'Observation enregistrée dans le cahier'));
    completeMatchingAssignment('lab', lab.id, 100);
  };

  return (
    <V c="flex-1">
      <Screen
        header={
          <StackHeader
            title={lab.title}
            subtitle={L('Virtual lab practical', 'TP virtuel')}
            subtitleColor="primary-container"
            avatar={false}
            right={
              <V c="flex-row items-center gap-space-xs">
                <V c="flex-row items-center gap-1 bg-surface-container-low px-2 py-1 rounded-full">
                  <V c="w-2 h-2 rounded-full bg-secondary" />
                  <T c="font-label-sm text-label-sm text-secondary uppercase tracking-wider">{L('Ready', 'Prêt')}</T>
                </V>
                <P c="w-10 h-10 items-center justify-center rounded-full" onPress={() => setHelp(true)} accessibilityLabel="Method">
                  <Ic n="help_outline" s={22} />
                </P>
              </V>
            }
          />
        }
        pad=""
      >
        <V c="px-margin pt-space-sm pb-space-xs">
          <V c="flex-row items-center justify-between mb-1.5">
            <T c="font-label-sm text-label-sm text-primary-container uppercase tracking-wider flex-1" numberOfLines={1}>
              {L('Step', 'Étape')} {step} {L('of', 'sur')} 6: {steps[step - 1]}
            </T>
            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
              {Math.round((step / 6) * 100)}% {L('completed', 'terminé')}
            </T>
          </V>
          <V c="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
            <V c="h-full bg-primary-container rounded-full" style={{ width: `${(step / 6) * 100}%` }} />
          </V>
        </V>

        <V c="px-margin py-space-sm">
          <V c="bg-surface-container-low rounded-xl p-space-md shadow-sm flex-row items-start gap-space-sm">
            <V c="w-8 h-8 rounded-full bg-primary-fixed items-center justify-center">
              <Ic n="biotech" s={18} c="primary" />
            </V>
            <V c="flex-1">
              <T c="font-label-sm text-label-sm uppercase tracking-wider text-secondary">{L('Lab objective', 'Objectif')}</T>
              <T c="font-headline-sm text-headline-sm text-on-surface mt-0.5" style={{ lineHeight: 22 }}>
                {lab.objective}
              </T>
            </V>
          </V>
        </V>

        <V c="px-margin py-space-xs flex-row gap-gutter-mobile">
          <Viewport panel={m.A} />
          <Viewport panel={m.B} />
        </V>

        <V c="px-margin py-space-xs mt-1">
          <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">{lab.id === 'osmosis' ? L('Reagent solution series', 'Série de solutions') : L('Test conditions', 'Conditions')}</T>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 4, paddingBottom: 4 }}>
            {lab.options.map((o, i) => {
              const on = i === r;
              const isControl = i === lab.control;
              return (
                <P
                  key={o}
                  c={`px-3 py-2 rounded-xl flex-row items-center gap-1.5 ${on ? 'bg-primary shadow-md' : isControl ? 'bg-surface-container-lowest shadow-sm' : 'bg-surface-container-low shadow-sm'}`}
                  onPress={() => {
                    setR(i);
                    setTouched((x) => ({ ...x, reagent: true }));
                  }}
                >
                  {on ? <Ic n="science" s={16} c="on-primary" /> : isControl ? <Ic n="check_circle" s={16} c="secondary" /> : null}
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : isControl ? 'text-primary' : 'text-on-surface-variant'}`}>{o}</T>
                </P>
              );
            })}
          </ScrollView>
        </V>

        <V c="px-margin py-space-xs">
          <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <V c="flex-row items-center justify-between mb-2">
              <V c="flex-row items-center gap-2">
                <Ic n="timer" s={20} c="primary-container" />
                <T c="font-headline-sm text-headline-sm text-on-surface">{lab.slider.label}</T>
              </V>
              <V c="bg-surface-container-low px-2.5 py-1 rounded-full">
                <T c="font-label-lg text-label-lg text-primary-container">
                  {t} {lab.slider.unit}
                </T>
              </V>
            </V>
            <Slider
              value={t}
              min={lab.slider.min}
              max={lab.slider.max}
              onChange={(v) => {
                setT(v);
                setTouched((x) => ({ ...x, time: true }));
              }}
              accessibilityLabel={lab.slider.label}
            />
            <V c="flex-row justify-between">
              {lab.slider.marks.map((mk) => (
                <T key={mk} c="font-label-sm text-label-sm text-on-surface-variant">
                  {mk}
                </T>
              ))}
            </V>
          </V>
        </V>

        <V c="px-margin py-space-xs">
          <V c="bg-surface-container-low rounded-xl p-space-md shadow-sm flex-row items-start gap-space-sm">
            <V c="w-9 h-9 rounded-xl bg-surface-container-lowest shadow-sm items-center justify-center">
              <Ic n="school" s={20} c="primary" />
            </V>
            <V c="flex-1">
              <V c="flex-row items-center gap-1.5">
                <T c="font-label-sm text-label-sm uppercase tracking-wider text-primary">{L('Examiner tip', 'Conseil d’examinateur')}</T>
                <V c="bg-primary-fixed px-1.5 rounded">
                  <T c="font-label-sm text-label-sm text-on-primary-fixed">GCE</T>
                </V>
              </V>
              <T c="font-body-md text-body-md text-on-surface mt-1" style={{ lineHeight: 22 }}>
                {lab.tip.map(([txt, col], i) => (
                  <T key={i} c={`font-body-md text-body-md ${col ? `text-${col}` : 'text-on-surface'}`} style={col ? { fontWeight: '600' } : null}>
                    {txt}
                  </T>
                ))}
              </T>
            </V>
          </V>
        </V>

        <V c="px-margin py-space-xs">
          <V c="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex-row items-center justify-between gap-space-sm">
            <V c="flex-row items-center gap-space-sm flex-1">
              <V c="w-14 h-14 rounded-lg bg-surface-container items-center justify-center overflow-hidden">{lab.model(lab.control ?? r, lab.slider.max).B.view}</V>
              <V c="flex-1">
                <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
                  {L('Reference plate', 'Planche de référence')}
                </T>
                <T c="font-label-lg text-label-lg text-on-surface" numberOfLines={1}>
                  {lab.plate.title}
                </T>
                <T c="font-body-sm text-body-sm text-secondary" numberOfLines={1}>
                  {lab.plate.sub}
                </T>
              </V>
            </V>
            <P c="h-10 px-3 rounded-lg bg-surface-container-low flex-row items-center gap-1" onPress={() => setPlate(true)}>
              <T c="font-label-md text-label-md text-primary">{L('View plate', 'Voir')}</T>
              <Ic n="open_in_new" s={18} c="primary" />
            </P>
          </V>
        </V>

        <V c="px-margin pt-space-sm pb-space-lg">
          <P c={`w-full h-[52px] rounded-xl flex-row items-center justify-center gap-2 shadow-md ${recorded ? 'bg-secondary' : 'bg-primary-container'}`} onPress={record}>
            <Ic n={recorded ? 'check_circle' : 'assignment_turned_in'} s={20} c="on-primary" />
            <T c="font-label-lg text-label-lg text-on-primary">
              {recorded
                ? L('Observation recorded', 'Observation enregistrée')
                : `${L('Record observation in workbook', 'Noter dans le cahier')} (+${progress.labs[lab.id] ? 10 : 40} XP)`}
            </T>
          </P>
          {recorded && (
            <P c="items-center py-3" onPress={() => navigation.navigate('Workbook')}>
              <T c="font-label-md text-label-md text-primary">{L('Open workbook to draw and label', 'Ouvrir le cahier pour dessiner')}</T>
            </P>
          )}
        </V>
      </Screen>
      {toast}

      <Modal visible={help} transparent animationType="slide" onRequestClose={() => setHelp(false)}>
        <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="bg-surface-container-lowest rounded-t-3xl p-space-lg gap-space-sm">
            <T c="font-headline-md text-headline-md text-on-surface">{L('Method', 'Méthode')}</T>
            <T c="font-body-md text-body-md text-on-surface-variant">{lab.desc}</T>
            {steps.map((s, i) => (
              <V key={s} c="flex-row items-center gap-space-sm">
                <V c={`w-6 h-6 rounded-full items-center justify-center ${i < step ? 'bg-secondary' : 'bg-surface-container'}`}>
                  <T c={`font-label-sm text-label-sm ${i < step ? 'text-on-secondary' : 'text-on-surface-variant'}`}>{i + 1}</T>
                </V>
                <T c="font-body-md text-body-md text-on-surface">{s}</T>
              </V>
            ))}
            <P c="h-12 rounded-xl bg-primary-container items-center justify-center mt-space-sm" onPress={() => setHelp(false)}>
              <T c="font-label-lg text-label-lg text-on-primary">{L('Close', 'Fermer')}</T>
            </P>
          </V>
        </V>
      </Modal>

      <Modal visible={plate} transparent animationType="fade" onRequestClose={() => setPlate(false)}>
        <V c="flex-1 items-center justify-center p-space-md" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="w-full bg-surface-container-lowest rounded-3xl p-space-md gap-space-sm">
            <T c="font-headline-sm text-headline-sm text-on-surface">{lab.plate.title}</T>
            <V c="flex-row gap-2">
              {(lab.id === 'osmosis'
                ? [
                    [0, 0, L('1. Turgid', '1. Turgescente')],
                    [1, 30, L('2. Flaccid', '2. Flasque')],
                    [3, 30, L('3. Plasmolysed', '3. Plasmolysée')],
                  ]
                : lab.options.slice(0, 3).map((o, i) => [i, lab.slider.max, o])
              ).map(([ri, ti, label]) => (
                <V key={label} c="flex-1 items-center gap-1 p-2 rounded-lg bg-surface-container-low">
                  {lab.model(ri, ti).B.view}
                  <T c="font-label-sm text-label-sm text-on-surface text-center">{label}</T>
                </V>
              ))}
            </V>
            <P c="h-11 rounded-xl bg-surface-container-low items-center justify-center" onPress={() => setPlate(false)}>
              <T c="font-label-lg text-label-lg text-primary-container">{L('Close', 'Fermer')}</T>
            </P>
          </V>
        </V>
      </Modal>
    </V>
  );
}
