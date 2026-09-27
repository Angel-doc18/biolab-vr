import { useEffect, useRef, useState } from 'react';
import { Image, PanResponder, ScrollView, View } from 'react-native';
import { C, S, R, SH, alpha } from '../theme';
import { Btn, Dot, Icon, Row, T } from '../components/ui';
import { Card, Pill, Screen } from '../components/chrome';
import { OnionCell, SpottingTile, TestTube } from '../components/labViews';
import { useStore } from '../store/store';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// ---------------- practical definitions ----------------
const LABS = [
  {
    id: 'osmosis',
    pill: 'Osmosis & Plasmolysis',
    icon: 'biotech',
    title: 'Cell Turgor & Water Potential Gradient',
    desc: 'Investigation of water flux across Allium cepa (Red Onion) epidermal membranes under varying external osmotic pressure.',
    steps: ['Specimen Peel', 'Isotonic Baseline', 'Sucrose Immersion', 'De-plasmolysis', 'Measure Shrinkage', 'Draw & Label', 'Compare Media', 'Tabulate Results', 'Conclusion'],
    stepLong: ['Epidermis Peel', 'Isotonic Baseline', 'Hypertonic Exposure', 'De-plasmolysis in Water', 'Measure Shrinkage', 'Draw & Label Cells', 'Compare Media', 'Tabulate Results', 'Write Conclusion'],
    fieldTitle: 'Dual Optical Field (400x Magnification)',
    fieldSub: 'Synchronized Eyepiece',
    rackTitle: 'Pipette & Concentration Rack',
    rackLabel: 'Active Mounting Solution',
    reagents: [['0.0M', 'Dist. Water'], ['0.2M', 'Sucrose'], ['0.5M', 'Sucrose']],
    defReagent: 2,
    slider: { label: 'Incubation Time on Glass Slide', min: 1, max: 30, def: 15, unit: 'Minutes', marks: ['1 min (Mounting)', '10 min (Incipient)', '25+ min (Full Shrinkage)'] },
    toast: 'Micrograph snapshot & osmotic gradient captured to Student Workbook!',
    model(r, t) {
      const p = r === 0 ? 0 : r === 1 ? 0.25 * Math.min(1, t / 10) : Math.min(1, t / 25);
      const psi = r === 0 ? 1.4 : Math.max(0, 1.4 * (1 - p / 0.4));
      const media = ['0.0M Distilled Water', '0.2M Sucrose (≈7%)', '0.5M Sucrose (≈17%)'];
      return {
        A: {
          name: 'Control Lens A', chip: ['Normal Turgid State', 'secondary'], view: <OnionCell p={0} />,
          rows: [['Medium:', '0.0M Distilled Water', 'on-surface'], ['Turgor Pressure (Ψp):', '+1.4 MPa (High Turgor)', 'secondary']],
          note: 'Protoplast fully pressed against the cellulose wall; cell at maximum firmness.',
        },
        B: {
          name: 'Experimental Lens B',
          chip: p === 0 ? ['Turgid State', 'secondary'] : p < 0.4 ? ['Incipient Plasmolysis', 'tertiary'] : ['Hypertonic Plasmolysis', 'tertiary'],
          view: <OnionCell p={p} />,
          rows: [
            ['Medium:', media[r], r === 0 ? 'on-surface' : 'tertiary'],
            ['Turgor Pressure (Ψp):', psi >= 1.35 ? '+1.4 MPa (High Turgor)' : psi > 0 ? `+${psi.toFixed(1)} MPa (Reduced Turgor)` : '0.0 MPa (Plasmolysis Point)', psi >= 1.35 ? 'secondary' : psi > 0 ? 'tertiary' : 'error'],
          ],
          note: p === 0 ? 'Water enters by osmosis; the protoplast stays pressed against the wall.' : p < 0.4 ? 'Protoplast just beginning to pull away from the wall at the corners (incipient plasmolysis).' : 'Protoplast peeled away from corners; sucrose fills the hypertonic space.',
        },
      };
    },
    tip: {
      intro: 'When drawing plasmolysed epidermal cells under exam conditions:',
      points: [
        ['Clear Unbroken Lines:', 'Never sketch with shaded pencil strokes. Cell walls must be represented with double continuous parallel lines.'],
        ['Crucial Labels:', 'You must explicitly point to the Cellulose Wall, the Retracted Plasma Membrane, and label the clear intermediate region as Hypertonic Sucrose Solution (NOT empty air).'],
      ],
    },
    reference: { image: require('../../assets/img/onion.jpg'), species: 'Allium cepa', caption: 'Reference Micrograph · 400x Brightfield' },
  },
  {
    id: 'food',
    pill: 'Food Tests: Benedict & Iodine',
    icon: 'biotech',
    title: 'Food Tests: Starch, Sugar & Protein',
    desc: 'Testing a mixed food sample (maize flour, honey and egg white) against a water control, as set in GCE Paper 3.',
    steps: ['Prepare Sample', 'Iodine Test', "Benedict's Test", 'Biuret Test', 'Water Control', 'Record Colours', 'Compare Tubes', 'Tabulate Results', 'Conclusion'],
    stepLong: ['Prepare Food Sample', 'Iodine Test for Starch', "Benedict's Test for Sugar", 'Biuret Test for Protein', 'Run Water Control', 'Record Colour Changes', 'Compare Tubes', 'Tabulate Results', 'Write Conclusion'],
    fieldTitle: 'Dual Test Tubes (Control vs Sample)',
    fieldSub: 'Side-by-side comparison',
    rackTitle: 'Reagent Rack & Water Bath',
    rackLabel: 'Active Reagent',
    reagents: [['I₂/KI', 'Iodine'], ['CuSO₄', "Benedict's"], ['NaOH', 'Biuret']],
    defReagent: 1,
    slider: { label: 'Water-bath Heating Time', min: 0, max: 5, def: 3, unit: 'Minutes', marks: ['0 min (Cold)', '2 min (Warming)', '5 min (Boiling)'] },
    toast: 'Tube colours & reagent result captured to Student Workbook!',
    model(r, t) {
      const benedict = [['#2563eb', 'Blue'], ['#16a34a', 'Green'], ['#eab308', 'Yellow'], ['#ea580c', 'Orange'], ['#b91c1c', 'Brick-red']][clamp(Math.floor(t), 0, 4)];
      const res = [
        { control: ['#b45309', 'Yellow-brown'], test: ['#1e1b4b', 'Blue-black'], pos: true, nutrient: 'starch' },
        { control: ['#2563eb', 'Blue'], test: benedict, pos: t >= 1, nutrient: 'reducing sugar', ppt: t >= 3 ? benedict[0] : null },
        { control: ['#3b82f6', 'Blue'], test: ['#7e22ce', 'Purple'], pos: true, nutrient: 'protein' },
      ][r];
      const reagent = ['Iodine solution', "Benedict's solution", 'Biuret reagent'][r];
      return {
        A: {
          name: 'Control Tube A', chip: ['Negative Control', 'secondary'], view: <TestTube color={res.control[0]} />,
          rows: [['Contents:', `Water + ${reagent}`, 'on-surface'], ['Final colour:', res.control[1], 'secondary']],
          note: 'The control shows the reagent’s own colour, so any change in tube B is caused by the food.',
        },
        B: {
          name: 'Test Tube B', chip: res.pos ? ['Positive Result', 'tertiary'] : ['Developing…', 'tertiary'], view: <TestTube color={res.test[0]} precipitate={res.ppt} />,
          rows: [['Contents:', `Food sample + ${reagent}`, 'tertiary'], ['Final colour:', res.test[1], res.pos ? 'secondary' : 'error']],
          note: r === 1 && t < 1 ? "Benedict's test needs heating in a water bath — increase the heating time." : `${res.control[1]} → ${res.test[1]}: ${res.nutrient} is present.`,
        },
      };
    },
    tip: {
      intro: 'When reporting food tests in Paper 3:',
      points: [
        ['Initial and Final Colours:', "Always state the colour before AND after, e.g. 'blue → brick-red precipitate'. A final colour alone earns no mark."],
        ['Conditions Matter:', "Benedict's test must be heated in a boiling water bath; iodine and Biuret tests are done cold. Name the control tube in your conclusion."],
      ],
    },
  },
  {
    id: 'enzyme',
    pill: 'Enzyme Rate & Amylase',
    icon: 'timer',
    title: 'Effect of Temperature on Amylase',
    desc: 'Starch is mixed with amylase at three temperatures; a drop is tested with iodine every minute until the starch has disappeared.',
    steps: ['Set Water Baths', 'Mix Starch', 'Add Amylase', 'Sample Each Minute', 'Iodine Spots', 'Find End-point', 'Repeat Temperatures', 'Plot Rate', 'Conclusion'],
    stepLong: ['Set Water Baths', 'Equilibrate Starch', 'Add Amylase', 'Sample Every Minute', 'Test with Iodine', 'Find the End-point', 'Repeat at Each Temperature', 'Plot Rate vs Temperature', 'Write Conclusion'],
    fieldTitle: 'Dual Spotting Tiles (Iodine Test)',
    fieldSub: 'One well per minute',
    rackTitle: 'Water Bath Temperature',
    rackLabel: 'Incubation Temperature',
    reagents: [['10°C', 'Cold Bath'], ['37°C', 'Body Temp'], ['70°C', 'Hot Bath']],
    defReagent: 1,
    slider: { label: 'Sampling Time', min: 1, max: 9, def: 5, unit: 'Minutes', marks: ['1 min', '5 min', '9 min'] },
    toast: 'Spotting-tile results & end-point captured to Student Workbook!',
    model(r, t) {
      const k = [0.12, 0.28, 0][r];
      const wells = Array.from({ length: 9 }, (_, i) => (i < t ? Math.max(0, 1 - k * (i + 1)) : null));
      const end = k ? Math.ceil(1 / k) : null;
      const reached = end && t >= end;
      return {
        A: {
          name: 'Control Tile A', chip: ['No Digestion', 'secondary'], view: <SpottingTile fractions={Array.from({ length: 9 }, (_, i) => (i < t ? 1 : null))} />,
          rows: [['Mixture:', 'Starch + boiled amylase', 'on-surface'], ['Iodine result:', 'Blue-black every minute', 'secondary']],
          note: 'Boiled (denatured) amylase cannot digest starch, so every spot stays blue-black.',
        },
        B: {
          name: 'Experimental Tile B',
          chip: r === 2 ? ['Enzyme Denatured', 'tertiary'] : reached ? ['End-point Reached', 'tertiary'] : ['Digestion in Progress', 'tertiary'],
          view: <SpottingTile fractions={wells} />,
          rows: [
            ['Temperature:', ['10°C (Cold Bath)', '37°C (Optimum)', '70°C (Hot Bath)'][r], 'tertiary'],
            ['Starch gone after:', end ? `${end} min${reached ? '' : ' (keep sampling)'}` : 'Never — no digestion', end ? 'secondary' : 'error'],
          ],
          note: r === 2 ? 'At 70°C the enzyme is denatured: its active site changes shape and starch stays undigested.' : r === 1 ? 'Around body temperature amylase works fastest, so iodine stops turning blue-black soonest.' : 'At low temperature molecules move slowly, so digestion is slow but the enzyme is not destroyed.',
        },
      };
    },
    tip: {
      intro: 'When describing enzyme rate experiments:',
      points: [
        ['Use the End-point:', 'Rate = 1 ÷ time taken for iodine to stop turning blue-black. State the time for each temperature.'],
        ['Explain, Don’t Just Describe:', "Above the optimum say 'denatured — active site changes shape'. Never write that the enzyme was 'killed'."],
      ],
    },
  },
  { id: 'frog', pill: 'Frog Visceral Dissection', locked: true },
];

export default function VirtualLab() {
  const { state, setLabStep, recordLab } = useStore();
  const [labId, setLabId] = useState('osmosis');
  const lab = LABS.find((l) => l.id === labId);
  const [reagent, setReagent] = useState(lab.defReagent);
  const [time, setTime] = useState(lab.slider.def);
  const [recorded, setRecorded] = useState(false);
  const [toast, setToast] = useState(false);
  const [scrollOn, setScrollOn] = useState(true);
  const timer = useRef(null);
  const step = state.labs[labId]?.step ?? 3;

  useEffect(() => {
    setReagent(lab.defReagent);
    setTime(lab.slider.def);
    setRecorded(false);
  }, [labId]);
  useEffect(() => setRecorded(false), [reagent, time]);
  useEffect(() => () => clearTimeout(timer.current), []);

  const m = lab.model(reagent, time);
  const record = () => {
    recordLab({ lab: lab.id, reagent: lab.reagents[reagent].join(' '), time, result: m.B.chip[0] });
    setLabStep(lab.id, step >= lab.steps.length ? 1 : step + 1);
    setRecorded(true);
    setToast(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(false), 4000);
  };

  const winStart = clamp(step - 3, 0, lab.steps.length - 4);

  return (
    <Screen scrollEnabled={scrollOn}>
      {/* Lab Catalog Strip */}
      <View style={{ gap: S.xs, marginTop: S.xs }}>
        <Row style={{ justifyContent: 'space-between', gap: 8 }}>
          <Row style={{ gap: 6, flex: 1 }}>
            <Icon name="science" size={20} color={C.primary} />
            <T v="headline-sm" style={{ flexShrink: 1 }}>Virtual Practical Laboratory</T>
          </Row>
          <Pill bg={alpha('secondary-container', 0.3)} c="secondary" w={500} px={10}>GCE 0710 Paper 3</Pill>
        </Row>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -S.md }} contentContainerStyle={{ gap: 10, paddingVertical: 6, paddingHorizontal: S.md }}>
          {LABS.map((l) => {
            const on = l.id === labId;
            const st = state.labs[l.id]?.step;
            if (l.locked) {
              return (
                <Row key={l.id} style={{ gap: 8, paddingHorizontal: 14, paddingVertical: 8, borderRadius: R.xl, backgroundColor: C['surface-container-low'] }}>
                  <Icon name="lock" size={18} color={C.outline} />
                  <View>
                    <T v="title-md" c="on-surface-variant" leading="tight">{l.pill}</T>
                    <T v="label-sm" c="outline" leading="tight">A-Level Advanced · Module 4</T>
                  </View>
                </Row>
              );
            }
            return (
              <Btn key={l.id} onPress={() => setLabId(l.id)} style={[{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 14, paddingVertical: 8, borderRadius: R.xl, boxShadow: SH.sm }, on ? { backgroundColor: C.primary } : { backgroundColor: C['surface-container-lowest'] }]}>
                {on ? <Blink /> : <Icon name={l.icon} size={18} color={C.primary} />}
                <View>
                  <T v="title-md" c={on ? 'white' : 'on-surface'} leading="tight">{l.pill}</T>
                  <T v="label-sm" w={on ? 600 : 500} c={on ? 'on-primary-container' : 'secondary'} leading="tight">
                    {on || st ? `In Progress · Step ${st ?? 3} of ${l.steps.length}` : 'Ready to Start'}
                  </T>
                </View>
              </Btn>
            );
          })}
        </ScrollView>
      </View>

      {/* Active Practical Context Card */}
      <Card radius={R['2xl']} style={{ gap: S.sm }}>
        <View style={{ gap: 4 }}>
          <Row style={{ gap: 6, alignItems: 'flex-start' }}>
            <Icon name="menu_book" size={16} color={C.primary} />
            <T v="label-sm" c="primary" upper style={{ letterSpacing: 0.9, flex: 1 }}>Cameroon GCE Syllabus 0710 Paper 3 Practical Module</T>
          </Row>
          <T v="headline-lg-mobile">{lab.title}</T>
          <T v="body-sm" c="on-surface-variant">{lab.desc}</T>
        </View>
        <View style={{ gap: 6, paddingTop: 4 }}>
          <Row style={{ justifyContent: 'space-between', gap: 8 }}>
            <T v="title-md" c="primary" style={{ flex: 1 }}>Step {step} of {lab.steps.length}: {lab.stepLong[step - 1]}</T>
            <Pill bg={alpha('secondary-container', 0.4)} c="secondary">Live Incubation</Pill>
          </Row>
          <View style={{ width: '100%', height: 8, borderRadius: R.full, backgroundColor: C['surface-container-high'], overflow: 'hidden' }}>
            <View style={{ width: `${(step / lab.steps.length) * 100}%`, height: '100%', borderRadius: R.full, backgroundColor: C.primary }} />
          </View>
          <Row style={{ justifyContent: 'space-between' }}>
            {lab.steps.slice(winStart, winStart + 4).map((s, k) => {
              const n = winStart + k + 1;
              return (
                <T key={n} v="label-sm" w={n === step ? 700 : 600} c={n === step ? 'primary' : 'on-surface-variant'} style={{ flexShrink: 1, textAlign: k === 0 ? 'left' : k === 3 ? 'right' : 'center' }}>
                  {n}. {s}
                </T>
              );
            })}
          </Row>
        </View>
      </Card>

      {/* Dual Optical Field */}
      <View style={{ gap: S.sm }}>
        <Row style={{ justifyContent: 'space-between', paddingHorizontal: 4, gap: 8 }}>
          <Row style={{ gap: 8, flex: 1 }}>
            <Icon name="compare" size={22} color={C.secondary} />
            <T v="headline-sm" style={{ flexShrink: 1 }}>{lab.fieldTitle}</T>
          </Row>
          <T v="label-sm" c="on-surface-variant">{lab.fieldSub}</T>
        </Row>
        <View style={{ gap: S.md }}>
          <Lens data={m.A} dot="secondary" />
          <Lens data={m.B} dot="tertiary-container" warn />
        </View>
      </View>

      {/* Interactive Lab Controls */}
      <Card style={{ gap: S.md }}>
        <Row style={{ justifyContent: 'space-between', gap: 8 }}>
          <Row style={{ gap: 8, flex: 1 }}>
            <Icon name="tune" size={22} color={C.primary} />
            <T v="headline-sm" style={{ flexShrink: 1 }}>{lab.rackTitle}</T>
          </Row>
          <T v="label-sm" w={700} c="secondary" upper style={{ letterSpacing: 0.9 }}>Dialed Chamber</T>
        </Row>
        <View style={{ gap: 8 }}>
          <T v="label-md" c="on-surface-variant">{lab.rackLabel}</T>
          <Row style={{ gap: 8 }}>
            {lab.reagents.map(([v, l], i) => {
              const on = i === reagent;
              return (
                <Btn key={v} onPress={() => setReagent(i)} style={[{ flex: 1, paddingVertical: 10, paddingHorizontal: 8, borderRadius: R.xl, alignItems: 'center', gap: 2 }, on ? { backgroundColor: C['primary-container'], boxShadow: SH.sm } : { backgroundColor: C['surface-container'] }]}>
                  <T v="title-md" size={13} w={700} c={on ? 'on-primary' : 'on-surface'}>{v}</T>
                  <T v="label-sm" w={on ? 600 : 600} c={on ? 'on-primary-container' : 'on-surface-variant'} numberOfLines={1}>{l}{on ? ' (Active)' : ''}</T>
                </Btn>
              );
            })}
          </Row>
        </View>
        <View style={{ gap: 8, paddingTop: 4 }}>
          <Row style={{ justifyContent: 'space-between', gap: 8 }}>
            <Row style={{ gap: 4, flex: 1 }}>
              <Icon name="schedule" size={16} color={C.primary} />
              <T v="label-md" c="on-surface-variant" style={{ flexShrink: 1 }}>{lab.slider.label}</T>
            </Row>
            <T v="title-md" w={700} c="primary">{time} {time === 1 ? lab.slider.unit.replace(/s$/, '') : lab.slider.unit}</T>
          </Row>
          <Slider min={lab.slider.min} max={lab.slider.max} value={time} onChange={setTime} onInteract={(on) => setScrollOn(!on)} />
          <Row style={{ justifyContent: 'space-between' }}>
            {lab.slider.marks.map((mk) => (
              <T key={mk} v="label-sm" c="on-surface-variant">{mk}</T>
            ))}
          </Row>
        </View>
        <View style={{ paddingTop: 8, gap: 8 }}>
          <Btn onPress={record} style={{ width: '100%', minHeight: 48, paddingHorizontal: S.md, paddingVertical: 12, borderRadius: R.xl, backgroundColor: recorded ? C.secondary : C.primary, boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Icon name={recorded ? 'done_all' : 'photo_camera'} size={20} color={C['on-primary']} />
            <T v="title-md" c="on-primary">{recorded ? 'Observed & Saved to Log' : 'Record Micrograph & Log Observation'}</T>
          </Btn>
          {toast && (
            <View style={{ paddingVertical: 8, paddingHorizontal: 12, borderRadius: R.lg, backgroundColor: C['secondary-container'] }}>
              <T v="label-md" c="on-secondary-container" style={{ textAlign: 'center' }}>{lab.toast}</T>
            </View>
          )}
        </View>
      </Card>

      {/* Chief Examiner Tip */}
      <Card radius={R['2xl']} style={{ gap: S.sm, borderLeftWidth: 4, borderLeftColor: C.primary }}>
        <Row style={{ gap: 8 }}>
          <View style={{ width: 28, height: 28, borderRadius: R.lg, backgroundColor: C['primary-fixed'], alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="verified" size={18} color={C['on-primary-fixed']} />
          </View>
          <T v="title-md" style={{ flex: 1 }}>Cameroon GCE Chief Examiner Tip (Paper 3)</T>
        </Row>
        <T v="body-md" c="on-surface-variant" leading="relaxed">{lab.tip.intro}</T>
        <View style={{ gap: 6 }}>
          {lab.tip.points.map(([b, rest]) => (
            <Row key={b} style={{ gap: 8, alignItems: 'flex-start' }}>
              <Icon name="check_circle" size={16} color={C.secondary} style={{ marginTop: 2 }} />
              <T v="body-sm" style={{ flex: 1 }}>
                <T v="body-sm" w={700}>{b}</T> {rest}
              </T>
            </Row>
          ))}
        </View>
      </Card>

      {/* Reference Micrograph */}
      {lab.reference && (
        <Card radius={R['2xl']} style={{ gap: S.sm }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Row style={{ gap: 6 }}>
              <Icon name="collections" size={18} color={C.primary} />
              <T v="title-md">Laboratory Reference Specimen</T>
            </Row>
            <T v="label-sm" c="secondary" style={{ fontStyle: 'italic' }}>{lab.reference.species}</T>
          </Row>
          <View style={{ width: '100%', height: 144, borderRadius: R.xl, overflow: 'hidden', backgroundColor: C['surface-container'] }}>
            <Image source={lab.reference.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
            <Row style={{ position: 'absolute', bottom: 8, left: 8, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, backgroundColor: alpha('surface-container-lowest', 0.9), gap: 6 }}>
              <Dot size={8} color="secondary" />
              <T v="label-sm">{lab.reference.caption}</T>
            </Row>
          </View>
        </Card>
      )}
    </Screen>
  );
}

function Lens({ data, dot, warn }) {
  const [label, tone] = data.chip;
  const warnChip = tone === 'tertiary';
  return (
    <Card style={{ gap: S.sm }}>
      <Row style={{ justifyContent: 'space-between', gap: 8 }}>
        <Row style={{ gap: 6 }}>
          {warn ? <Blink color={dot} size={10} /> : <Dot size={10} color={dot} />}
          <T v="title-md">{data.name}</T>
        </Row>
        {warnChip ? (
          <Pill bg="tertiary-fixed" c="on-tertiary-fixed" icon="warning" iconSize={13} px={10}>{label}</Pill>
        ) : (
          <Pill bg={alpha('secondary-container', 0.4)} c="on-secondary-container" px={10}>{label}</Pill>
        )}
      </Row>
      <View style={{ width: '100%', maxWidth: 260, aspectRatio: 1, alignSelf: 'center', borderRadius: 999, padding: 8, backgroundColor: C['surface-container-low'], overflow: 'hidden', boxShadow: SH.inner }}>
        <View style={{ flex: 1, borderRadius: 999, overflow: 'hidden' }}>{data.view}</View>
        {/* reticle */}
        <View pointerEvents="none" style={{ position: 'absolute', inset: 0, alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
          <View style={{ position: 'absolute', width: '100%', height: 1, backgroundColor: C.outline }} />
          <View style={{ position: 'absolute', height: '100%', width: 1, backgroundColor: C.outline }} />
          <View style={{ width: 96, height: 96, borderRadius: 48, borderWidth: 1, borderStyle: 'dashed', borderColor: C.outline }} />
        </View>
        <View pointerEvents="none" style={{ position: 'absolute', inset: 0, borderRadius: 999, boxShadow: 'inset 0px 0px 24px rgba(0,0,0,0.15)' }} />
      </View>
      <View style={{ gap: 6, paddingTop: 4 }}>
        {data.rows.map(([k, v, c]) => (
          <Row key={k} style={{ justifyContent: 'space-between', gap: 8 }}>
            <T v="body-sm" c="on-surface-variant">{k}</T>
            <T v="title-md" w={c === 'secondary' || c === 'error' ? 700 : 600} c={c} style={{ flexShrink: 1, textAlign: 'right' }}>{v}</T>
          </Row>
        ))}
        <View style={{ backgroundColor: C['surface-container-low'], paddingVertical: 6, paddingHorizontal: 8, borderRadius: R.xl }}>
          <T v="body-sm" c="on-surface-variant" style={{ textAlign: 'center' }}>{data.note}</T>
        </View>
      </View>
    </Card>
  );
}

// animate-pulse / animate-ping stand-in
function Blink({ color = 'secondary-fixed', size = 8 }) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 900);
    return () => clearInterval(t);
  }, []);
  return <Dot size={size} color={color} style={{ opacity: on ? 1 : 0.4 }} />;
}

// <input type="range" class="accent-primary">
function Slider({ min, max, value, onChange, onInteract }) {
  const width = useRef(1);
  const last = useRef({ min, max, onChange });
  last.current = { min, max, onChange };
  const setFromX = (x) => {
    const { min: lo, max: hi, onChange: cb } = last.current;
    cb(Math.round(lo + clamp(x / width.current, 0, 1) * (hi - lo)));
  };
  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        onInteract?.(true);
        setFromX(e.nativeEvent.locationX);
      },
      onPanResponderMove: (e) => setFromX(e.nativeEvent.locationX),
      onPanResponderRelease: () => onInteract?.(false),
      onPanResponderTerminate: () => onInteract?.(false),
    })
  ).current;
  const f = (value - min) / (max - min);
  return (
    <View
      accessibilityRole="adjustable"
      accessibilityValue={{ min, max, now: value }}
      onLayout={(e) => (width.current = e.nativeEvent.layout.width)}
      style={{ height: 28, justifyContent: 'center' }}
      {...pan.panHandlers}
    >
      <View pointerEvents="none" style={{ height: 8, borderRadius: 8, backgroundColor: C['surface-container-high'], overflow: 'hidden' }}>
        <View style={{ width: `${f * 100}%`, height: '100%', backgroundColor: C.primary }} />
      </View>
      <View pointerEvents="none" style={{ position: 'absolute', left: `${f * 100}%`, marginLeft: -10, width: 20, height: 20, borderRadius: 10, backgroundColor: C.primary, borderWidth: 3, borderColor: C.white, boxShadow: SH.md }} />
    </View>
  );
}
