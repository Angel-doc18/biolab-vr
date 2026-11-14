// Problems on phones and on the server, found without anyone reporting them:
// the app sends each error by itself (src/lib/crashReport.js) and the server
// keeps its own. The same problem is counted once with how often it happened
// and on how many phones, the most repeated first. One tap copies a full
// report to paste to whoever fixes it; "Fixed" moves it down until it comes back.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Ic, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import { post } from '../../api/adminClient';
import { Card, Chips, Empty, Loading, Pill, ago, copyText, useAdminLoad } from './kit';

const stamp = (t) => new Date(t).toISOString().replace('T', ' ').slice(0, 16);

function report(p) {
  return [
    `Klass8 problem (${p.server ? 'server' : 'app'}): ${p.message}`,
    `Where: ${p.place || 'unknown'}`,
    `Happened ${p.count} time(s)${p.phones ? ` on ${p.phones} phone(s)` : ''}, ${p.today} in the last 24 hours`,
    `First ${stamp(p.firstAt)} UTC, last ${stamp(p.lastAt)} UTC`,
    `Closed the app: ${p.fatal ? 'yes' : 'no'}`,
    `Platforms: ${p.platforms || '-'}; systems: ${p.systems || '-'}; app versions: ${p.builds || '-'}`,
    p.stack ? `\nStack:\n${p.stack}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

function Problem({ p, L, onCopy, onFixed }) {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <P c="p-space-md gap-space-sm" onPress={() => setOpen((o) => !o)} scale={0.995} accessibilityLabel={p.message}>
        <V c="flex-row items-start gap-space-sm">
          <V c="items-center justify-center rounded-xl px-2.5 py-1.5" style={{ backgroundColor: p.fatal ? '#fdecea' : '#eef3fa', minWidth: 52 }}>
            <T c="font-headline-sm text-headline-sm" style={{ fontWeight: '800', color: p.fatal ? '#b3261e' : '#02287b', fontVariant: ['tabular-nums'] }}>
              {p.count}
            </T>
            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontSize: 10 }}>
              {L('times', 'fois')}
            </T>
          </V>
          <V c="flex-1 gap-1 min-w-0">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={open ? undefined : 3}>
              {p.message}
            </T>
            <V c="flex-row flex-wrap gap-1.5">
              <Pill text={p.server ? L('Server', 'Serveur') : p.fatal ? L('Closed the app', 'A fermé l’app') : L('On phones', 'Sur téléphones')} tone={p.fatal || p.server ? 'bad' : 'warn'} />
              {p.cameBack && <Pill text={L('Came back', 'Revenu')} tone="bad" />}
              {p.fixed && <Pill text={L('Fixed', 'Corrigé')} tone="ok" />}
            </V>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {[p.place, p.phones ? `${p.phones} ${p.phones === 1 ? L('phone', 'téléphone') : L('phones', 'téléphones')}` : null, `${p.today} ${L('today', 'aujourd’hui')}`, `${L('last', 'dernier')} ${ago(p.lastAt, L)}`].filter(Boolean).join(', ')}
            </T>
          </V>
        </V>
        {open && (
          <V c="gap-1">
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {L('Versions', 'Versions')}: {p.builds || '-'}; {L('systems', 'systèmes')}: {[p.platforms, p.systems].filter(Boolean).join(', ') || '-'}
            </T>
            {!!p.stack && (
              <T c="text-outline" style={{ fontSize: 11, lineHeight: 15 }} selectable>
                {p.stack.slice(0, 2500)}
              </T>
            )}
          </V>
        )}
        <V c="flex-row gap-2">
          <P c="flex-1 h-11 rounded-xl bg-primary flex-row items-center justify-center gap-1.5" onPress={() => onCopy(p)} accessibilityLabel={L('Copy the full report', 'Copier le rapport complet')}>
            <Ic n="content_copy" s={18} c="on-primary" />
            <T c="font-label-md text-label-md text-on-primary" style={{ fontWeight: '700' }}>
              {L('Copy report', 'Copier le rapport')}
            </T>
          </P>
          <P c="flex-1 h-11 rounded-xl bg-surface-container-low flex-row items-center justify-center gap-1.5" onPress={() => onFixed(p, !p.fixed)}>
            <Ic n={p.fixed ? 'undo' : 'done_all'} s={18} c="primary-container" />
            <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
              {p.fixed ? L('Not fixed', 'Pas corrigé') : L('Mark fixed', 'Marquer corrigé')}
            </T>
          </P>
        </V>
      </P>
    </Card>
  );
}

export default function AdminProblems() {
  const L = useL();
  const [days, setDays] = useState('7');
  const { data, error, busy, reload, setData } = useAdminLoad(`/v1/admin/problems?days=${days}`);
  const [toast, showToast] = useToast();
  const [refreshing, setRefreshing] = useState(false);
  const items = data?.items || [];
  const open = items.filter((p) => !p.fixed);

  const fixed = async (p, value) => {
    try {
      await post(`/v1/admin/problems/${p.sig}/fixed`, { fixed: value });
      setData((d) => ({ ...d, items: d.items.map((x) => (x.sig === p.sig ? { ...x, fixed: value, cameBack: false } : x)) }));
      showToast(value ? L('Marked fixed. It comes back here if it happens again.', 'Marqué corrigé. Il revient ici s’il se reproduit.') : L('Marked not fixed', 'Marqué non corrigé'));
    } catch (e) {
      showToast(e.message);
    }
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Problems', 'Problèmes')} subtitle={L('Phones and the server', 'Téléphones et serveur')} avatar={false} />} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await reload(), setRefreshing(false))} />}>
        <V c="gap-space-md pt-space-md pb-space-xl">
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Every problem is sent here by the phone or the server itself, even when no one reports it. The most repeated is at the top.', 'Chaque problème est envoyé ici par le téléphone ou le serveur, même sans signalement. Le plus fréquent est en haut.')}
          </T>
          <Chips
            value={days}
            onChange={setDays}
            items={[
              ['1', L('24 hours', '24 heures')],
              ['7', L('7 days', '7 jours')],
              ['30', L('30 days', '30 jours')],
              ['90', L('90 days', '90 jours')],
            ]}
          />
          <ErrorNote error={error} />
          {busy && !data && <Loading />}
          {!!data && (
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {open.length ? `${open.length} ${open.length === 1 ? L('problem to fix', 'problème à corriger') : L('problems to fix', 'problèmes à corriger')}` : L('Nothing to fix in this period', 'Rien à corriger sur cette période')}
            </T>
          )}
          {!!data && !items.length && (
            <Card>
              <Empty icon="verified" text={L('No problems reported.', 'Aucun problème signalé.')} />
            </Card>
          )}
          {items.map((p) => (
            <Problem key={p.sig} p={p} L={L} onCopy={(x) => copyText(report(x), showToast, L)} onFixed={fixed} />
          ))}
        </V>
      </Screen>
      {toast}
    </V>
  );
}
