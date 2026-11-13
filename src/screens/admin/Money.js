// Admin Money: the prices of the plans, what has come in, and every payment
// (filtered by paid, waiting, to check or failed).
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useL } from '../../i18n';
import { fcfa } from '../../data/plan';
import { AdminHeader, Card, Chips, Empty, Loading, Pill, Row, Section, date, phoneText, useAdminLoad } from './kit';
import { PAY_STATUS, planName } from './Home';

function Price({ label, amount }) {
  return (
    <V c="flex-1 p-space-md rounded-xl bg-surface-container-low gap-0.5">
      <T c="font-label-md text-label-md text-on-surface-variant">{label}</T>
      <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700', fontVariant: ['tabular-nums'] }} numberOfLines={1}>
        {fcfa(amount)}
      </T>
    </V>
  );
}

export default function AdminMoney({ navigation, route }) {
  const L = useL();
  const overview = useAdminLoad('/v1/admin/overview');
  const d = overview.data;
  const [status, setStatus] = useState(route.params?.status || '');
  // Opened again from Home with a filter: show that filter.
  const [askedAt, setAskedAt] = useState(route.params?.at);
  if (route.params?.at !== askedAt) {
    setAskedAt(route.params?.at);
    setStatus(route.params?.status || '');
  }
  const pays = useAdminLoad(`/v1/admin/payments${status ? `?status=${status}` : ''}`);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen
      header={<AdminHeader title={L('Money', 'Argent')} subtitle={L('Prices and payments', 'Prix et paiements')} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await Promise.all([overview.reload(), pays.reload()]), setRefreshing(false))} />}
    >
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <ErrorNote error={overview.error} />
        {overview.busy && !d && <Loading />}
        {!!d && (
          <Section title={L('Prices', 'Prix')}>
            <Card>
              <V c="p-space-md gap-space-sm">
                <V c="flex-row gap-space-sm">
                  <Price label={L('1 month', '1 mois')} amount={d.prices.month} />
                  <Price label={L('1 year', '1 an')} amount={d.prices.year} />
                </V>
                <V c="flex-row items-center gap-2">
                  <Pill text={d.settings.paywall ? L('Charging', 'Payant') : L('Free for everyone', 'Gratuit pour tous')} tone={d.settings.paywall ? 'ok' : 'info'} />
                  <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">
                    {d.settings.paywall ? L('New students get a free month first.', 'Les nouveaux élèves ont d’abord un mois gratuit.') : L('No one pays at the moment.', 'Personne ne paie en ce moment.')}
                  </T>
                </V>
                <Cta variant="soft" icon={null} lead="price_change" label={L('Change prices or charges', 'Changer les prix ou les frais')} onPress={() => navigation.navigate('AdminPrices')} />
              </V>
            </Card>
          </Section>
        )}

        {!!d && (
          <Section title={L('Money received', 'Argent reçu')}>
            <Card>
              <Row first icon="account_balance_wallet" title={fcfa(d.money.total)} sub={L('Received in all', 'Reçu au total')} />
              <Row icon="savings" iconBg="#e3f4ec" iconTint="secondary" title={fcfa(d.money.afterFees)} sub={L('Kept after Fapshi’s 3%', 'Gardé après les 3 % de Fapshi')} />
              <Row icon="calendar_month" title={fcfa(d.money.thisMonth)} sub={L('Received this month', 'Reçu ce mois')} />
            </Card>
          </Section>
        )}

        <Section title={L('Payments', 'Paiements')}>
          <V c="gap-space-sm">
            <Chips
              value={status}
              onChange={setStatus}
              items={[
                ['', L('All', 'Tous')],
                ['SUCCESSFUL', L('Paid', 'Payés')],
                ['PENDING', L('Waiting', 'En attente')],
                ['REVIEW', L('To check', 'À vérifier')],
                ['FAILED', L('Failed', 'Échoués')],
              ]}
            />
            <ErrorNote error={pays.error} />
            {pays.busy && !pays.data && <Loading />}
            {pays.data && !pays.data.items.length && (
              <Card>
                <Empty icon="payments" text={L('No payments here.', 'Aucun paiement ici.')} />
              </Card>
            )}
            {pays.data && pays.data.items.length > 0 && (
              <Card>
                {pays.data.items.map((p, i) => {
                  const st = PAY_STATUS[p.status] || [p.status, p.status, 'muted'];
                  return (
                    <Row
                      key={p.id}
                      first={i === 0}
                      icon="payments"
                      title={`${p.name || L('Deleted account', 'Compte supprimé')}, ${fcfa(p.amount)}`}
                      sub={[planName(p.plan, L), date(p.createdAt), phoneText(p.phone), p.reference].filter(Boolean).join(', ')}
                      right={<Pill text={L(st[0], st[1])} tone={st[2]} />}
                      onPress={p.userId ? () => navigation.navigate('AdminPerson', { id: p.userId, name: p.name }) : undefined}
                    />
                  );
                })}
              </Card>
            )}
          </V>
        </Section>
      </V>
    </Screen>
  );
}
