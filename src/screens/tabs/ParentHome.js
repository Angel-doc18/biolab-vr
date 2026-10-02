import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Avatar, Bar, C, Ic, P, Ring, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, TabHeader } from '../../ui/chrome';
import { get } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { unitById } from '../../data/units';
import { shareReportPdf } from '../../lib/report';

const DAY = 86400000;

function ChildCard({ r, L, lang }) {
  const idle = r.lastActive ? Math.floor((Date.now() - r.lastActive) / DAY) : null;
  const [busy, setBusy] = useState(false);
  return (
    <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-md">
      <V c="flex-row items-center gap-3">
        <Avatar name={r.student.name} size={48} />
        <V c="flex-1">
          <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
            {r.student.name}
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
            {[r.student.className, r.student.schoolName].filter(Boolean).join(' · ') || L('GCE Biology candidate', 'Candidat GCE')}
          </T>
        </V>
        <Ring size={52} stroke={5} pct={r.readiness} track={C['surface-container']} tint={C.secondary}>
          <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
            {r.readiness}%
          </T>
        </Ring>
      </V>
      <V c={`flex-row items-center gap-2 p-2.5 rounded-lg ${idle != null && idle >= 3 ? 'bg-error-container' : 'bg-secondary-container/30'}`}>
        <Ic n={idle != null && idle >= 3 ? 'warning' : 'check_circle'} s={18} c={idle != null && idle >= 3 ? 'on-error-container' : 'secondary'} />
        <T c={`font-body-sm text-body-sm flex-1 ${idle != null && idle >= 3 ? 'text-on-error-container' : 'text-on-surface'}`}>
          {idle == null
            ? L('No revision recorded yet.', 'Aucune révision enregistrée.')
            : idle === 0
            ? L('Revised today.', 'A révisé aujourd’hui.')
            : `${L('Last revised', 'Dernière révision il y a')} ${idle} ${idle === 1 ? L('day ago', 'jour') : L('days ago', 'jours')}.`}
        </T>
      </V>
      <V c="flex-row gap-2">
        {[
          ['local_fire_department', `${r.streak}`, L('Day streak', 'Série')],
          ['schedule', r.minutesWeek >= 60 ? `${(r.minutesWeek / 60).toFixed(1)}h` : `${r.minutesWeek}m`, L('This week', 'Semaine')],
          ['science', `${r.labsDone}`, L('Practicals', 'TP')],
          ['assignment_turned_in', r.bestMock != null ? `${r.bestMock}%` : '-', L('Best mock', 'Meilleur')],
        ].map(([i, v, l]) => (
          <V key={l} c="flex-1 bg-surface-container-low p-2 rounded-lg items-center">
            <Ic n={i} s={18} c="primary-container" />
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {v}
            </T>
            <T c="font-label-sm text-label-sm text-on-surface-variant" numberOfLines={1}>
              {l}
            </T>
          </V>
        ))}
      </V>
      {Object.keys(r.unitMastery || {}).length > 0 && (
        <V c="gap-2">
          <T c="font-label-md text-label-md text-on-surface-variant">{L('Syllabus progress', 'Progression')}</T>
          {Object.entries(r.unitMastery)
            .map(([u, p]) => [unitById(u), p])
            .filter(([u]) => u)
            .sort((a, b) => a[0].n - b[0].n)
            .map(([u, p]) => (
              <V key={u.id} c="gap-1">
                <V c="flex-row justify-between">
                  <T c="font-body-sm text-body-sm text-on-surface flex-1" numberOfLines={1}>
                    {u.n}. {u.short}
                  </T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant">{p}%</T>
                </V>
                <Bar pct={p} c="h-1.5 bg-surface-container" fill={p >= 70 ? 'bg-secondary' : p >= 40 ? 'bg-primary-container' : 'bg-tertiary-container'} />
              </V>
            ))}
        </V>
      )}
      {r.weakest?.length > 0 && (
        <V c="bg-tertiary-fixed/40 p-2.5 rounded-lg">
          <V c="flex-row items-center gap-1">
            <Ic n="tips_and_updates" s={15} c="tertiary" />
            <T c="font-label-sm text-label-sm text-tertiary">{L('How you can help', 'Comment aider')}</T>
          </V>
          <T c="font-body-sm text-body-sm text-on-tertiary-fixed-variant mt-0.5">
            {L('Ask about', 'Parlez de')} “{unitById(r.weakest[0].unit)?.short}” {L('this week: it is the weakest unit so far.', 'cette semaine : c’est l’unité la plus faible.')}
          </T>
        </V>
      )}
      <Cta
        variant="white"
        h="h-11"
        icon={null}
        lead="picture_as_pdf"
        loading={busy}
        label={L('Download PDF report', 'Télécharger le rapport PDF')}
        onPress={async () => {
          setBusy(true);
          try {
            await shareReportPdf(r, lang);
          } finally {
            setBusy(false);
          }
        }}
      />
    </V>
  );
}

export default function ParentHome({ navigation }) {
  const { user, prefs, refreshUnread } = useApp();
  const L = useL();
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    refreshUnread();
    try {
      const r = await get('/v1/parent/children');
      setItems(r.items);
      setError(null);
    } catch (e) {
      setError(e);
      setItems((x) => x || []);
    }
  }, [refreshUnread]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  return (
    <Screen header={<TabHeader subtitle={L('Parent dashboard', 'Espace parent')} />} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
      <V c="pt-space-md pb-space-xl gap-space-md">
        <V>
          <V c="self-start flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container">
            <Ic n="schedule_send" s={16} c="on-secondary-container" />
            <T c="font-label-sm text-label-sm text-on-secondary-container">{L('Updated as your child studies', 'Mis à jour pendant les révisions')}</T>
          </V>
          <T c="font-headline-lg text-headline-lg text-on-surface mt-1.5">
            {L('Hello', 'Bonjour')}, {user?.name?.split(' ')[0]}
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your children’s GCE Biology revision at a glance.', 'Les révisions de biologie de vos enfants.')}</T>
        </V>
        <ErrorNote error={error} />
        {items === null ? (
          <Spinner />
        ) : items.length ? (
          items.map((r) => <ChildCard key={r.student.id} r={r} L={L} lang={prefs.lang} />)
        ) : (
          <V c="bg-surface-container-lowest p-space-md rounded-xl shadow-sm items-center gap-space-sm">
            <Ic n="family_restroom" s={36} c="primary-container" />
            <T c="font-headline-sm text-headline-sm text-on-surface">{L('No child linked yet', 'Aucun enfant lié')}</T>
            <T c="font-body-sm text-body-sm text-on-surface-variant text-center">
              {L('Ask your child for the 8 character code in Me › Parent reports.', 'Demandez à votre enfant le code à 8 caractères dans Moi › Rapports parent.')}
            </T>
          </V>
        )}
        <Cta variant={items?.length ? 'soft' : 'primary'} icon="person_add" label={L('Link a child', 'Lier un enfant')} onPress={() => navigation.navigate('LinkChild', { fromHome: true })} />
      </V>
    </Screen>
  );
}
