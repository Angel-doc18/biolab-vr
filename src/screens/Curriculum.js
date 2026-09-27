import { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { C, S, R, SH, alpha } from '../theme';
import { Btn, Dot, Icon, Row, T } from '../components/ui';
import { Card, Pill, Screen } from '../components/chrome';
import { GROUPS, units } from '../data/units';
import { daysToExam, focusUnit, streak, syllabusPct, unitStatus, useStore } from '../store/store';

export default function Curriculum({ openUnit, enterVR, editProfile }) {
  const { state, set } = useStore();
  const [group, setGroup] = useState('all');
  const focus = focusUnit(state.progress);
  const shown = units.filter((u) => group === 'all' || u.group === group);

  return (
    <Screen>
      {/* Top Greeting & School Identity */}
      <View style={{ gap: S.xs, marginTop: S.sm }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <T v="label-md" c="on-surface-variant" upper style={{ letterSpacing: 0.6 }}>Welcome back</T>
            <T v="headline-lg-mobile" style={{ letterSpacing: -0.65 }}>{state.profile.name}</T>
          </View>
          <View style={{ width: 44, height: 44, borderRadius: R['2xl'], backgroundColor: C['surface-container-low'], alignItems: 'center', justifyContent: 'center', boxShadow: SH.sm }}>
            <Icon name="verified_user" size={24} color={C.primary} />
          </View>
        </Row>
        <Btn onPress={editProfile} style={{ flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: R.full, backgroundColor: C['surface-container-high'] }}>
          <Icon name="location_city" size={15} color={C.primary} />
          <T v="label-sm" c="on-surface-variant" w={600}>{state.profile.school} · {state.profile.form}</T>
          <Icon name="edit" size={13} color={C.outline} style={{ marginLeft: 2 }} />
        </Btn>
      </View>

      {/* Segmented Level Toggle */}
      <View>
        <Row style={{ padding: 4, borderRadius: R['2xl'], backgroundColor: C['surface-container'], gap: 4 }}>
          {[
            ['O', 'GCE O-Level (Forms 3–5)'],
            ['A', 'GCE A-Level (Sixth Form)'],
          ].map(([id, label]) => {
            const on = state.level === id;
            return (
              <Btn
                key={id}
                onPress={() => set({ level: id })}
                style={[{ flex: 1, paddingVertical: 8, paddingHorizontal: 12, borderRadius: R.xl, alignItems: 'center' }, on && { backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm }]}
              >
                <T v="title-md" w={on ? 600 : 600} c={on ? 'primary' : 'on-surface-variant'} style={{ textAlign: 'center' }}>{label}</T>
              </Btn>
            );
          })}
        </Row>
        {state.level === 'A' && (
          <Row style={{ marginTop: 8, padding: 12, borderRadius: R['2xl'], backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm, gap: 10 }}>
            <Icon name="info" size={20} color={C.secondary} />
            <T v="body-sm" c="on-surface-variant" style={{ flex: 1 }}>
              Sixth Form Advanced curriculum unlocks for <T v="body-sm" w={600} c="primary">Series 2026</T> candidate cohorts.
            </T>
          </Row>
        )}
      </View>

      {/* Three Bento Stat Metric Tiles */}
      <Row style={{ gap: 10, alignItems: 'stretch' }}>
        <StatTile icon="local_fire_department" fill color="tertiary" value={streak(state.days)} label="Day Streak" />
        <StatTile icon="track_changes" color="secondary" value={`${syllabusPct(state.progress)}%`} label="Syllabus" />
        <StatTile icon="diamond" fill color="primary" value={state.xp.toLocaleString('en-US')} label="XP Earned" />
      </Row>

      {/* Exam Countdown & Daily Objective */}
      <Card style={{ gap: 12 }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Row style={{ gap: 8, flex: 1 }}>
            <Icon name="event_upcoming" size={20} color={C.secondary} />
            <T v="label-md" c="secondary" upper style={{ letterSpacing: 0.3, flexShrink: 1 }}>Cameroon GCE Board Exam</T>
          </Row>
          <Pill c="on-surface">{daysToExam()} Days</Pill>
        </Row>
        <Btn onPress={() => openUnit(focus.id)} style={{ padding: 12, borderRadius: R['2xl'], backgroundColor: C['surface-container-low'], flexDirection: 'row', alignItems: 'flex-start', gap: 10 }}>
          <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: C['secondary-fixed'], alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
            <Icon name="check" size={14} color={C['on-secondary-fixed']} />
          </View>
          <View style={{ flex: 1, minWidth: 0 }}>
            <T v="label-sm" c="on-surface-variant" upper>Today's Focus</T>
            <T v="title-md" w={500} numberOfLines={1}>{focus.focus}</T>
          </View>
          <Pill bg="primary-fixed" c="on-primary-fixed" w={700} style={{ alignSelf: 'center' }}>+50 XP</Pill>
        </Btn>
      </Card>

      {/* Featured Module Hero Card */}
      <Card pad={20} shadow={SH.md} style={{ gap: 16 }}>
        <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <View style={{ flex: 1 }}>
            <T v="label-sm" c="secondary" upper style={{ letterSpacing: 0.9 }}>Spatial Bio-Laboratory</T>
            <T v="headline-sm" w={700} style={{ marginTop: 2 }}>Cell Ultrastructure & Organelles</T>
          </View>
          <View style={{ width: 40, height: 40, borderRadius: R['2xl'], backgroundColor: C['surface-container-low'], alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="view_in_ar" size={22} color={C.primary} />
          </View>
        </Row>
        <View style={{ width: '100%', height: 128, borderRadius: R['2xl'], overflow: 'hidden', backgroundColor: C['surface-container-low'] }}>
          <Image source={require('../../assets/img/cell-hero.jpg')} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
          <Row style={{ position: 'absolute', bottom: 8, left: 8, paddingHorizontal: 10, paddingVertical: 4, borderRadius: R.full, backgroundColor: alpha('surface-container-lowest', 0.9), gap: 6, boxShadow: SH.sm }}>
            <Dot size={8} color="secondary" />
            <T v="label-sm" w={500}>Bundled · Verified Offline</T>
          </Row>
        </View>
        <T v="body-sm" c="on-surface-variant">
          Explore high-resolution cryo-electron organelle models with interactive cross-sections in stereoscopic 3D.
        </T>
        <Btn onPress={enterVR} style={{ width: '100%', paddingVertical: 14, paddingHorizontal: 16, borderRadius: R['2xl'], backgroundColor: C['primary-container'], boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <Icon name="vrpano" size={20} color={C['on-primary']} />
          <T v="title-md" c="on-primary">Enter VR Immersion</T>
        </Btn>
      </Card>

      {/* Syllabus Units */}
      <View style={{ gap: S.sm, paddingTop: 4 }}>
        <View style={{ gap: 4, paddingHorizontal: 4 }}>
          <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
            <Row style={{ gap: 8, flex: 1, alignItems: 'flex-start' }}>
              <Icon name="menu_book" size={20} color={C.primary} style={{ marginTop: 4 }} />
              <T v="headline-sm" style={{ flex: 1 }}>Official Cameroon GCE Biology Syllabus</T>
            </Row>
            <Pill style={{ marginTop: 4 }}>Syllabus 0510 / 0710</Pill>
          </Row>
          <T v="body-sm" c="on-surface-variant">10 Core Modules · Paper 1, 2 & 3 Practical Examination Focus</T>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -4 }} contentContainerStyle={{ gap: 8, paddingHorizontal: 4, paddingVertical: 4 }}>
          {GROUPS.map((g) => {
            const on = group === g.id;
            return (
              <Btn key={g.id} onPress={() => setGroup(g.id)} style={[{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: R.full, backgroundColor: C['surface-container'] }, on && { backgroundColor: C['primary-container'], boxShadow: SH.sm }]}>
                <T v="label-sm" w={on ? 600 : 500} c={on ? 'on-primary' : 'on-surface-variant'}>
                  {g.id === 'all' ? `${g.label} (${units.length})` : g.label}
                </T>
              </Btn>
            );
          })}
        </ScrollView>

        <View style={{ gap: 10 }}>
          {shown.map((u) => (
            <UnitRow key={u.id} unit={u} status={unitStatus(state.progress, u)} onPress={() => openUnit(u.id)} />
          ))}
        </View>
      </View>
    </Screen>
  );
}

function StatTile({ icon, fill, color, value, label }) {
  return (
    <View style={{ flex: 1, padding: 12, borderRadius: R['3xl'], backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm, justifyContent: 'space-between', gap: 8 }}>
      <View style={{ width: 32, height: 32, borderRadius: R.xl, backgroundColor: C['surface-container-low'], alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={18} color={C[color]} fill={fill} />
      </View>
      <View>
        <T v="headline-sm" w={700} leading="tight">{value}</T>
        <T v="label-sm" c="on-surface-variant" leading="none">{label}</T>
      </View>
    </View>
  );
}

function UnitRow({ unit, status, onPress }) {
  return (
    <Btn onPress={onPress} style={{ padding: 14, borderRadius: R['2xl'], backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <View style={{ width: 40, height: 40, borderRadius: R.xl, backgroundColor: C['surface-container-low'], alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={unit.icon} size={20} color={C['on-surface-variant']} />
      </View>
      <View style={{ flex: 1, minWidth: 0 }}>
        <T v="title-md" w={500} numberOfLines={1}>{unit.n}. {unit.title}</T>
        <T v="body-sm" c="on-surface-variant" numberOfLines={1}>{unit.meta}</T>
      </View>
      {status.kind === 'next' ? (
        <Row style={{ gap: 4 }}>
          <T v="label-sm" c="on-surface-variant">Up next</T>
          <Icon name="chevron_right" size={16} color={C['on-surface-variant']} />
        </Row>
      ) : status.kind === 'progress' ? (
        <Pill bg={alpha('primary-fixed', 0.5)} c="primary" px={10} py={4}>In Progress {status.pct}%</Pill>
      ) : (
        <Pill bg={alpha('secondary-container', 0.4)} c="on-secondary-container" px={10} py={4}>
          {status.pct}% {status.kind === 'mastered' ? 'Mastered' : 'Score'}
        </Pill>
      )}
    </Btn>
  );
}
