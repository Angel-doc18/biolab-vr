import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Bar, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, TabHeader } from '../../ui/chrome';
import { get } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { unitById } from '../../data/units';
import { subjectName } from '../../data/subjects';
import { shareReportPdf } from '../../lib/report';
import { Section } from './Home';

const DAY = 86400000;

function ChildCard({ r, L, lang }) {
  const idle = r.lastActive ? Math.floor((Date.now() - r.lastActive) / DAY) : null;
  const [busy, setBusy] = useState(false);
  const subjects = r.student.subjects?.length ? r.student.subjects : ['biology'];
  const weak = r.weakest?.[0] && unitById(r.weakest[0].unit);
  return (
    <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-md">
      <V c="gap-0.5">
        <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
          {r.student.name}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
          {[r.student.className, r.student.schoolName].filter(Boolean).join(', ') || L('GCE Ordinary Level candidate', 'Candidat au GCE Ordinary Level')}
        </T>
      </V>

      <T c={`font-body-md text-body-md ${idle != null && idle >= 3 ? 'text-error' : 'text-on-surface'}`} style={{ lineHeight: 22 }}>
        {idle == null
          ? L('No revision recorded yet.', 'Aucune révision enregistrée.')
          : idle === 0
          ? L('Revised today.', 'A révisé aujourd’hui.')
          : `${L('Last revised', 'Dernière révision il y a')} ${idle} ${idle === 1 ? L('day ago', 'jour') : L('days ago', 'jours')}.`}{' '}
        {r.minutesWeek} {L('minutes this week', 'minutes cette semaine')}, {r.labsDone} {r.labsDone === 1 ? L('practical', 'TP') : L('practicals', 'TP')}.
      </T>

      <V c="gap-space-sm">
        {subjects.map((id) => {
          const s = r.subjects?.[id] || (id === 'biology' ? { mastery: r.readiness, bestMock: r.bestMock } : { mastery: 0 });
          return (
            <V key={id} c="gap-1">
              <V c="flex-row justify-between gap-2">
                <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '600' }}>
                  {subjectName(id, lang)}
                </T>
                <T c="font-label-md text-label-md text-on-surface-variant">
                  {s.mastery ?? 0}% {L('mastered', 'maîtrisé')}
                  {s.bestMock != null ? `, ${L('Paper 1', 'épreuve 1')} ${s.bestMock}%` : ''}
                </T>
              </V>
              <Bar pct={s.mastery ?? 0} c="h-1.5 bg-surface-container" fill={(s.mastery ?? 0) >= 70 ? 'bg-secondary' : 'bg-primary-container'} />
            </V>
          );
        })}
      </V>

      {weak && (
        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
          {L('How you can help: ask about', 'Comment aider : parlez de')} “{weak.short}” ({subjectName(weak.subject, lang)}) {L('this week. It is the weakest unit so far.', 'cette semaine. C’est l’unité la plus faible pour l’instant.')}
        </T>
      )}

      <P
        c="self-start py-1"
        hitSlop={8}
        disabled={busy}
        onPress={async () => {
          setBusy(true);
          try {
            await shareReportPdf(r, lang);
          } finally {
            setBusy(false);
          }
        }}
      >
        <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
          {busy ? L('Preparing the report', 'Préparation du rapport') : L('Download the PDF report', 'Télécharger le rapport PDF')}
        </T>
      </P>
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
    <Screen header={<TabHeader subtitle={L('Parent or guardian', 'Parent ou tuteur')} />} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <V c="gap-1">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {L('Hello', 'Bonjour')}, {user?.name?.split(' ')[0]}
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant">{L('Your children’s revision, updated as they study.', 'Les révisions de vos enfants, mises à jour pendant qu’ils travaillent.')}</T>
        </V>
        <ErrorNote error={error} />
        {items === null ? (
          <Spinner />
        ) : items.length ? (
          <Section title={items.length === 1 ? L('Your child', 'Votre enfant') : L('Your children', 'Vos enfants')}>
            <V c="gap-space-md">
              {items.map((r) => (
                <ChildCard key={r.student.id} r={r} L={L} lang={prefs.lang} />
              ))}
            </V>
          </Section>
        ) : (
          <V c="gap-space-xs">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {L('No child linked yet', 'Aucun enfant lié')}
            </T>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {L('Ask your child for the 8 character code in Me, then Parent reports.', 'Demandez à votre enfant le code à 8 caractères dans Moi, puis Rapports au parent.')}
            </T>
          </V>
        )}
        <Cta variant={items?.length ? 'soft' : 'dark'} icon={null} label={L('Link a child', 'Lier un enfant')} onPress={() => navigation.navigate('LinkChild', { fromHome: true })} />
      </V>
    </Screen>
  );
}
