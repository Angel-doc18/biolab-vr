import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Toggle } from '../../ui/form';
import ListenButton from '../../ui/ListenButton';
import Slider from '../../ui/Slider';
import Graph from '../../ui/Graph';
import { Diagram } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { labById, labSteps, labUnit } from '../../data/labs';
import { topicLabel } from '../../data/units';
import { subjectName } from '../../data/subjects';
import { labLocked } from '../../data/plan';
import { completeMatchingAssignment } from '../../lib/assignments';
import { useNarrator } from '../../lib/narrator';
import { fetchExplanation, segmentsOf } from '../../lib/explain';
import { Section } from '../tabs/Home';

const show = (v, dp = 1) => (typeof v === 'number' ? v.toFixed(dp) : v);

// One side of a control-and-treatment comparison.
function Panel({ panel, magnify }) {
  return (
    <V c="flex-1 bg-surface-container-lowest rounded-xl border border-surface-container p-space-sm gap-space-xs">
      <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }} numberOfLines={2}>
        {panel.head}
      </T>
      <V c={`w-full h-36 bg-surface-container-low items-center justify-center overflow-hidden ${magnify ? 'rounded-full self-center' : 'rounded-lg'}`} style={magnify ? { width: 144, borderRadius: 72 } : null}>
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

function Choices({ options, value, onChange, control, L }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ gap: 6, paddingHorizontal: 16 }}>
      {options.map((o, i) => {
        const on = i === value;
        return (
          <P key={o} c={`h-10 px-3 rounded-lg items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => onChange(i)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
            <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>
              {o}
              {i === control ? ` (${L('control', 'témoin')})` : ''}
            </T>
          </P>
        );
      })}
    </ScrollView>
  );
}

// The results table of a readings practical.
function Table({ columns, rows }) {
  return (
    <V c="rounded-lg border border-outline-variant overflow-hidden">
      <V c="flex-row bg-surface-container-low">
        {columns.map((c) => (
          <T key={c.key} c="flex-1 px-2 py-1.5 font-label-sm text-label-sm text-on-surface" style={{ fontWeight: '700' }}>
            {c.label}
          </T>
        ))}
      </V>
      {rows.map((r, i) => (
        <V key={i} c="flex-row border-t border-surface-container">
          {columns.map((c) => (
            <T key={c.key} c="flex-1 px-2 py-1.5 font-body-sm text-body-sm text-on-surface">
              {show(r[c.key], c.dp ?? 1)}
            </T>
          ))}
        </V>
      ))}
    </V>
  );
}

export default function LabRun({ navigation, route }) {
  const { pro, recordLab, user } = useApp();
  const L = useL();
  const lang = useLang();
  const lab = labById(route.params?.labId || 'osmosis');
  const readings = lab.kind === 'readings';
  const [r, setR] = useState(lab.def ?? 0);
  const [t, setT] = useState(readings ? lab.input?.def ?? 0 : lab.slider.def);
  const [rows, setRows] = useState({}); // option index -> readings
  const [recorded, setRecorded] = useState(false);
  const [aloud, setAloud] = useState(true);
  const [explained, setExplained] = useState(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState(null);
  const [segments, setSegments] = useState([]);
  const [toast, showToast] = useToast();
  const voice = useNarrator(lang);
  const started = useRef(Date.now());
  const method = lab.method || labSteps(lang, lab);

  useEffect(() => {
    if (labLocked(lab.id, pro)) navigation.replace('Paywall');
  }, [lab.id, pro, navigation]);
  useEffect(() => setRecorded(false), [r, t, rows]);

  // ---------- voice: the method, and the tutor's explanation ----------
  const seg = voice.index >= 0 ? segments[voice.index] : null;
  const [mode, setMode] = useState(null);
  const listenMethod = () => {
    if (voice.playing) return voice.stop();
    setMode('method');
    const list = [{ text: `${lab.title}. ${lab.objective}`, at: null }, ...method.map((s, i) => ({ text: `${L('Step', 'Étape')} ${i + 1}. ${s}`, at: i }))];
    setSegments(list);
    voice.play(list);
  };
  const explain = async () => {
    if (voice.playing) return voice.stop();
    setNote(null);
    let e = explained;
    if (!e) {
      setBusy(true);
      try {
        e = await fetchExplanation({ kind: 'practical', subject: lab.subject, title: lab.title, items: method, context: lab.objective, lang });
        setExplained(e);
      } catch (err) {
        setNote(
          err?.code === 'consent_required'
            ? L('The tutor explains practicals once a parent approves your account. Use "Listen to the method" for now.', 'Le tuteur explique les TP après l’accord d’un parent. Utilisez « Écouter la méthode » pour l’instant.')
            : err?.message || L('The tutor needs a connection the first time.', 'Le tuteur a besoin d’une connexion la première fois.')
        );
      } finally {
        setBusy(false);
      }
    }
    if (!e) return;
    const list = segmentsOf(e);
    setSegments(list);
    setMode('explain');
    voice.play(list);
  };

  // ---------- readings practicals ----------
  const mine = rows[r] || [];
  const take = () => {
    const x = lab.input ? t : mine.length + 1;
    const m = lab.measure(x, r, mine);
    const row = { x, ...m };
    setRows((all) => {
      const list = (all[r] || []).filter((q) => !lab.input || q.x !== x);
      return { ...all, [r]: [...list, row].sort((a, b) => a.x - b.x) };
    });
    if (aloud && lab.say) voice.say(lab.say(row, r), { keep: false });
  };
  const series = useMemo(
    () =>
      readings && lab.plot
        ? Object.entries(rows)
            .filter(([, list]) => list.length)
            .map(([o, list]) => ({ name: lab.options?.[o] || '', points: list.map((q) => ({ x: q[lab.plot.x], y: q[lab.plot.y] })) }))
        : [],
    [rows, readings, lab]
  );
  const enough = readings && Object.values(rows).some((list) => list.length >= (lab.minReadings || 5));
  const analysis = enough ? lab.analyse(rows, r) : null;

  const record = () => {
    const minutes = Math.max(1, Math.round((Date.now() - started.current) / 60000));
    if (readings) {
      if (!analysis) return;
      const table = (rows[r] || []).map((q) => lab.columns.map((c) => show(q[c.key], c.dp ?? 1)).join(', ')).join('; ');
      recordLab(lab.id, {
        title: lab.title,
        observation: `${lab.columns.map((c) => c.label).join(', ')}: ${table}. ${analysis.lines.join(' ')}`,
        conclusion: analysis.conclusion,
        result: analysis.result,
        unit: lab.unit,
        condition: lab.options?.[r] || null,
        minutes,
      });
    } else {
      const entry = lab.record(r, t);
      recordLab(lab.id, { ...entry, unit: lab.unit, condition: lab.options[r], time: t, timeUnit: lab.slider.unit, minutes });
    }
    started.current = Date.now();
    setRecorded(true);
    showToast(L('Saved to your workbook', 'Enregistré dans le cahier'));
    completeMatchingAssignment('lab', lab.id, 100);
  };

  const m = readings ? null : lab.model(r, t);

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={lab.title} subtitle={`${subjectName(lab.subject, lang)} ${L('practical', 'TP')}, ${topicLabel(labUnit(lab, user?.className), L)}`} subtitleColor="on-surface-variant" avatar={false} />}>
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
              <Diagram id={lab.diagram} explain subject={lab.subject} maxHeight={340} />
            </V>
          )}

          <Section title={L('Method', 'Méthode')}>
            <V c="gap-space-sm">
              <V c="gap-space-sm">
                <ListenButton
                  label={L('Listen to the method', 'Écouter la méthode')}
                  sub={L('Every step read aloud, one by one', 'Chaque étape lue à voix haute')}
                  stopLabel={L('Stop listening', 'Arrêter l’écoute')}
                  playing={voice.playing && mode === 'method'}
                  onPress={listenMethod}
                />
                <ListenButton
                  label={L('Listen: the tutor explains each step', 'Écouter : le tuteur explique chaque étape')}
                  sub={L('Why each step is done and what to watch for', 'Pourquoi chaque étape et ce qu’il faut observer')}
                  stopLabel={L('Stop listening', 'Arrêter l’écoute')}
                  busyLabel={L('The tutor is preparing', 'Le tuteur prépare')}
                  playing={voice.playing && mode === 'explain'}
                  busy={busy}
                  onPress={explain}
                />
              </V>
              {!!note && <T c="font-body-sm text-body-sm text-on-surface-variant">{note}</T>}
              {seg?.at == null && !!seg && (
                <V c="p-space-sm rounded-lg bg-surface-container-low">
                  <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                    {seg.text}
                  </T>
                </V>
              )}
              {method.map((s, i) => {
                const on = seg?.at === i;
                return (
                  <V key={i} c={`gap-1 ${on ? 'p-space-sm rounded-lg bg-surface-container-low' : ''}`}>
                    <T c={`font-body-md text-body-md ${on ? 'text-primary-container' : 'text-on-surface'}`} style={{ lineHeight: 22, fontWeight: on ? '700' : '400' }}>
                      {i + 1}. {s}
                    </T>
                    {on && explained && seg.text !== `${L('Step', 'Étape')} ${i + 1}. ${s}` && (
                      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                        {seg.text}
                      </T>
                    )}
                  </V>
                );
              })}
            </V>
          </Section>

          {readings ? (
            <Section title={L('Your experiment', 'Votre expérience')}>
              <V c="gap-space-md">
                {!!lab.options && (
                  <V c="gap-space-xs">
                    <T c="font-label-lg text-label-lg text-on-surface">{lab.optionsLabel || L('Condition', 'Condition')}</T>
                    <Choices options={lab.options} value={r} onChange={setR} L={L} />
                  </V>
                )}
                {!!lab.view && <V c="rounded-xl bg-surface-container-lowest border border-surface-container p-space-sm items-center">{lab.view(t, r, mine)}</V>}
                {!!lab.input && (
                  <V c="gap-1">
                    <V c="flex-row items-center justify-between">
                      <T c="font-label-lg text-label-lg text-on-surface">{lab.input.label}</T>
                      <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                        {show(t, lab.input.dp ?? 0)} {lab.input.unit}
                      </T>
                    </V>
                    <Slider value={t} min={lab.input.min} max={lab.input.max} step={lab.input.step} onChange={(v) => setT(Math.round(v * 1000) / 1000)} accessibilityLabel={lab.input.label} />
                  </V>
                )}
                <V c="flex-row items-center gap-space-sm">
                  <V c="flex-1">
                    <Cta variant="dark" icon={null} label={lab.action || L('Take a reading', 'Prendre une mesure')} onPress={take} />
                  </V>
                  {mine.length > 0 && (
                    <P c="h-12 px-3 items-center justify-center" onPress={() => setRows((all) => ({ ...all, [r]: [] }))}>
                      <T c="font-label-md text-label-md text-on-surface-variant">{L('Clear', 'Effacer')}</T>
                    </P>
                  )}
                </V>
                <P c="flex-row items-center gap-space-sm p-space-sm rounded-xl border-2 border-secondary bg-surface-container-lowest" onPress={() => setAloud((x) => !x)} accessibilityRole="switch" accessibilityState={{ checked: aloud }}>
                  <V c="w-9 h-9 rounded-full bg-secondary items-center justify-center">
                    <Ic n="volume_up" s={20} c="on-primary" fill />
                  </V>
                  <V c="flex-1">
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                      {L('Read each result aloud', 'Lire chaque résultat à voix haute')}
                    </T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">{aloud ? L('On: you will hear every reading', 'Activé : chaque mesure est lue') : L('Off: tap to hear every reading', 'Désactivé : touchez pour entendre chaque mesure')}</T>
                  </V>
                  <Toggle on={aloud} onPress={() => setAloud((x) => !x)} accessibilityLabel={L('Read results aloud', 'Lire les résultats')} />
                </P>
                {mine.length > 0 ? (
                  <Table columns={lab.columns} rows={mine} />
                ) : (
                  <T c="font-body-md text-body-md text-on-surface-variant">
                    {lab.input
                      ? L(`Set the ${lab.input.label.toLowerCase()}, then take a reading. Take at least ${lab.minReadings || 5} readings across the range.`, `Réglez la grandeur, puis prenez une mesure. Prenez au moins ${lab.minReadings || 5} mesures sur toute la plage.`)
                      : L(`Do at least ${lab.minReadings || 3} runs.`, `Faites au moins ${lab.minReadings || 3} essais.`)}
                  </T>
                )}
                {series.length > 0 && series.some((s) => s.points.length >= 2) && (
                  <Graph series={series} xLabel={lab.plot.xLabel} yLabel={lab.plot.yLabel} fit={lab.plot.fit} curve={lab.plot.curve} xMax={lab.plot.xMax} yMax={lab.plot.yMax} />
                )}
                {analysis ? (
                  <V c="p-space-md rounded-xl bg-surface-container-low gap-space-xs">
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                      {L('Working out the result', 'Calcul du résultat')}
                    </T>
                    {analysis.lines.map((line) => (
                      <T key={line} c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                        {line}
                      </T>
                    ))}
                    <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22, fontWeight: '700' }}>
                      {analysis.conclusion}
                    </T>
                    <ListenButton
                      label={L('Listen to the result', 'Écouter le résultat')}
                      sub={L('The working and what it shows', 'Le calcul et ce qu’il montre')}
                      stopLabel={L('Stop listening', 'Arrêter l’écoute')}
                      playing={voice.saying === 'result'}
                      onPress={() => (voice.saying === 'result' ? voice.stop() : voice.say(`${analysis.lines.join(' ')} ${analysis.conclusion}`, { keep: false, key: 'result' }))}
                    />
                  </V>
                ) : (
                  mine.length > 0 && (
                    <T c="font-body-sm text-body-sm text-on-surface-variant">
                      {mine.length} {L('of', 'sur')} {lab.minReadings || 5} {L('readings needed to work out the result.', 'mesures nécessaires pour calculer le résultat.')}
                    </T>
                  )
                )}
              </V>
            </Section>
          ) : (
            <Section title={L('Your results', 'Vos résultats')}>
              <V c="gap-space-md">
                <V c="gap-space-xs">
                  <T c="font-label-lg text-label-lg text-on-surface">{lab.optionsLabel || L('Condition tested', 'Condition testée')}</T>
                  <Choices options={lab.options} value={r} onChange={setR} control={lab.control} L={L} />
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
                <ListenButton
                  label={L('Listen: what this result means', 'Écouter : ce que montre ce résultat')}
                  sub={L('What you see and what it tells you', 'Ce que vous voyez et ce que cela montre')}
                  stopLabel={L('Stop listening', 'Arrêter l’écoute')}
                  playing={voice.saying === 'meaning'}
                  onPress={() => {
                    if (voice.saying === 'meaning') return voice.stop();
                    const e = lab.record(r, t);
                    voice.say(`${e.observation} ${e.conclusion}`, { key: 'meaning' });
                  }}
                />
              </V>
            </Section>
          )}

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
            <Cta
              variant={recorded ? 'soft' : 'dark'}
              icon={null}
              label={recorded ? L('Saved to the workbook', 'Enregistré dans le cahier') : readings && !analysis ? L('Take enough readings to save', 'Prenez assez de mesures pour enregistrer') : L('Save this result in the workbook', 'Enregistrer ce résultat dans le cahier')}
              onPress={record}
              disabled={readings && !analysis}
            />
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
