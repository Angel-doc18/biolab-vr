import { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { P, T, V } from '../../ui/kit';
import { Cta, Screen, StackHeader, useToast } from '../../ui/chrome';
import Slider from '../../ui/Slider';
import { Diagram } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { labById, labSteps, labUnitN } from '../../data/labs';
import { subjectName } from '../../data/subjects';
import { labLocked } from '../../data/plan';
import { completeMatchingAssignment } from '../../lib/assignments';
import { Section } from '../tabs/Home';

// One side of the comparison: what the student sees and the readings taken.
function Panel({ panel, magnify }) {
  return (
    <V c="flex-1 bg-surface-container-lowest rounded-xl border border-surface-container p-space-sm gap-space-xs">
      <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }} numberOfLines={2}>
        {panel.head}
      </T>
      <V
        c={`w-full h-36 bg-surface-container-low items-center justify-center overflow-hidden ${magnify ? 'rounded-full self-center' : 'rounded-lg'}`}
        style={magnify ? { width: 144, borderRadius: 72 } : null}
      >
        {panel.view}
      </V>
      {!!magnify && (
        <T c="font-body-sm text-body-sm text-on-surface-variant text-center" style={{ fontSize: 11 }}>
          {magnify}
        </T>
      )}
      <V c="gap-1">
        {panel.metrics.map(([k, v, col]) => (
          <V key={k}>
            <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontSize: 11, lineHeight: 14 }}>
              {k}
            </T>
            <T c={`font-label-md text-label-md text-${col || 'on-surface'}`} style={{ fontWeight: '700' }}>
              {v}
            </T>
          </V>
        ))}
      </V>
    </V>
  );
}

export default function LabRun({ navigation, route }) {
  const { pro, recordLab } = useApp();
  const L = useL();
  const lang = useLang();
  const lab = labById(route.params?.labId || 'osmosis');
  const [r, setR] = useState(lab.def);
  const [t, setT] = useState(lab.slider.def);
  const [recorded, setRecorded] = useState(false);
  const [toast, showToast] = useToast();
  const started = useRef(Date.now());

  useEffect(() => {
    if (labLocked(lab.id, pro)) navigation.replace('Paywall');
  }, [lab.id, pro, navigation]);
  useEffect(() => setRecorded(false), [r, t]);

  const m = lab.model(r, t);
  const method = lab.method || labSteps(lang, lab);

  const record = () => {
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
        header={<StackHeader title={lab.title} subtitle={`${subjectName(lab.subject, lang)} ${L('practical', 'TP')}, ${L('unit', 'unité')} ${labUnitN(lab)}`} subtitleColor="on-surface-variant" avatar={false} />}
      >
        <V c="pt-space-md pb-space-xl gap-space-lg">
          <V c="gap-space-xs">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Aim', 'But')}
            </T>
            <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
              {lab.objective}
            </T>
          </V>

          {!!lab.diagram && (
            <V c="rounded-xl bg-surface-container-lowest border border-surface-container p-space-sm">
              <Diagram id={lab.diagram} />
            </V>
          )}

          <Section title={L('Method', 'Méthode')}>
            <V c="gap-space-xs">
              {method.map((s, i) => (
                <T key={i} c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                  {i + 1}. {s}
                </T>
              ))}
            </V>
          </Section>

          <Section title={L('Your results', 'Vos résultats')}>
            <V c="gap-space-md">
              <V c="gap-space-xs">
                <T c="font-label-lg text-label-lg text-on-surface">{lab.optionsLabel || L('Condition tested', 'Condition testée')}</T>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ gap: 6, paddingHorizontal: 16 }}>
                  {lab.options.map((o, i) => {
                    const on = i === r;
                    return (
                      <P key={o} c={`h-10 px-3 rounded-lg items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => setR(i)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                        <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>
                          {o}
                          {i === lab.control ? ` (${L('control', 'témoin')})` : ''}
                        </T>
                      </P>
                    );
                  })}
                </ScrollView>
              </V>

              <V c="gap-1">
                <V c="flex-row items-center justify-between">
                  <T c="font-label-lg text-label-lg text-on-surface">{lab.slider.label}</T>
                  <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                    {t} {lab.slider.unit}
                  </T>
                </V>
                <Slider value={t} min={lab.slider.min} max={lab.slider.max} step={lab.slider.step} onChange={setT} accessibilityLabel={lab.slider.label} />
                <V c="flex-row justify-between">
                  {lab.slider.marks.map((mk) => (
                    <T key={mk} c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontSize: 11 }}>
                      {mk}
                    </T>
                  ))}
                </V>
              </V>

              <V c="flex-row gap-space-sm">
                <Panel panel={m.A} magnify={lab.magnify} />
                <Panel panel={m.B} magnify={lab.magnify} />
              </V>
            </V>
          </Section>

          <V c="p-space-md rounded-xl bg-surface-container-low gap-1">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Examiner’s note', 'Note de l’examinateur')}
            </T>
            <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
              {lab.tip.map(([txt, col], i) => (
                <T key={i} c={`font-body-md text-body-md ${col ? `text-${col}` : 'text-on-surface'}`} style={col ? { fontWeight: '600' } : null}>
                  {txt}
                </T>
              ))}
            </T>
          </V>

          <V c="gap-space-xs">
            <Cta variant={recorded ? 'soft' : 'dark'} icon={null} label={recorded ? L('Observation recorded', 'Observation enregistrée') : L('Record this result in the workbook', 'Noter ce résultat dans le cahier')} onPress={record} />
            {recorded && (
              <P c="items-center py-2" onPress={() => navigation.navigate('Workbook')}>
                <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                  {L('Open the workbook to draw and label', 'Ouvrir le cahier pour dessiner et annoter')}
                </T>
              </P>
            )}
          </V>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
