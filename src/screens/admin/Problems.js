// Problems the app reported from phones: where it happened, on what phone,
// and the message. Most need the developer; this page shows whether things
// are calm or something is breaking for many people.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, StackHeader } from '../../ui/chrome';
import { useL } from '../../i18n';
import { Card, Empty, Loading, Pill, date, useAdminLoad } from './kit';

const DAY = 86_400_000;

function Problem({ e, L }) {
  const [open, setOpen] = useState(false);
  const system = [e.platform === 'ios' ? 'iPhone' : e.platform === 'android' ? 'Android' : e.platform === 'web' ? L('Web browser', 'Navigateur') : e.platform, e.os].filter(Boolean).join(' ');
  const phone = [system, e.build && `${L('version', 'version')} ${e.build}`].filter(Boolean).join(', ');
  return (
    <P c="px-space-md py-space-sm gap-1 border-t border-surface-container" onPress={() => setOpen((o) => !o)} scale={0.99} accessibilityLabel={e.message}>
      <V c="flex-row items-start gap-space-sm">
        <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '600' }} numberOfLines={open ? undefined : 2}>
          {e.message}
        </T>
        <Pill text={e.fatal ? L('Closed the app', 'A fermé l’app') : L('Smaller', 'Mineur')} tone={e.fatal ? 'bad' : 'muted'} />
      </V>
      <T c="font-body-sm text-body-sm text-on-surface-variant">
        {[e.place, phone, date(e.createdAt)].filter(Boolean).join(', ')}
      </T>
      {open && !!e.stack && (
        <T c="font-body-sm text-body-sm text-outline mt-1" style={{ fontSize: 11, lineHeight: 15 }} selectable>
          {e.stack.slice(0, 2000)}
        </T>
      )}
    </P>
  );
}

export default function AdminProblems() {
  const L = useL();
  const { data, error, busy, reload } = useAdminLoad('/v1/admin/app-errors');
  const [refreshing, setRefreshing] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const items = data?.items || [];
  const lastWeek = items.filter((e) => now - e.createdAt < 7 * DAY);
  const crashes = lastWeek.filter((e) => e.fatal).length;

  return (
    <Screen
      header={<StackHeader title={L('App problems', 'Problèmes de l’application')} avatar={false} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), setNow(Date.now()), await reload(), setRefreshing(false))} />}
    >
      <V c="gap-space-md pt-space-md pb-space-xl">
        <ErrorNote error={error} />
        {busy && !data && <Loading />}
        {!!data && (
          <Card>
            <V c="p-space-md gap-1">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {!lastWeek.length
                  ? L('All calm this week', 'Tout est calme cette semaine')
                  : `${lastWeek.length} ${lastWeek.length === 1 ? L('problem this week', 'problème cette semaine') : L('problems this week', 'problèmes cette semaine')}${crashes ? `, ${crashes} ${crashes === 1 ? L('closed the app', 'a fermé l’app') : L('closed the app', 'ont fermé l’app')}` : ''}`}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                {L('Phones send these by themselves when something goes wrong. Pass them to the developer if the same one keeps coming back. Tap one to see the details.', 'Les téléphones les envoient d’eux-mêmes en cas de souci. Transmettez-les au développeur si le même revient souvent. Touchez-en un pour les détails.')}
              </T>
            </V>
          </Card>
        )}
        {!!data && !items.length && (
          <Card>
            <Empty icon="verified" text={L('No problems reported.', 'Aucun problème signalé.')} />
          </Card>
        )}
        {items.length > 0 && (
          <Card c="pt-0">
            <V c="-mt-px">
              {items.map((e, i) => (
                <Problem key={`${e.createdAt}-${i}`} e={e} L={L} />
              ))}
            </V>
          </Card>
        )}
      </V>
    </Screen>
  );
}
