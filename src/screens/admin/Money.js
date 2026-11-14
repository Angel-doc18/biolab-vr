// Admin Money: what came in over any period (the last day, two days, a week, a
// month, a year, since Klass8 started, or any number of days, weeks, months or
// years), how it splits (Fapshi's fee, partners' share, what Klass8 keeps),
// the bars over time, the prices, and every payment in the period.
import { useMemo, useState } from 'react';
import { RefreshControl } from 'react-native';
import { Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useL } from '../../i18n';
import { fcfa } from '../../data/plan';
import { AdminHeader, Bars, Card, Chips, Empty, Figure, Loading, Pill, Row, Section, date, money, phoneText, useAdminLoad } from './kit';
import { PAY_STATUS, planName } from './Home';

const DAY = 86_400_000;
const PRESETS = { d1: DAY, d2: 2 * DAY, d7: 7 * DAY, d30: 30 * DAY, m3: 91 * DAY, y1: 365 * DAY };
const UNIT = { day: DAY, week: 7 * DAY, month: 30.44 * DAY, year: 365.25 * DAY };

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

const short = (t, step) => {
  const d = new Date(t);
  if (step === 'hour') return `${String(d.getHours()).padStart(2, '0')}h`;
  if (step === 'month') return d.toLocaleDateString('en-GB', { month: 'short' });
  return `${d.getDate()}/${d.getMonth() + 1}`;
};

export default function AdminMoney({ navigation, route }) {
  const L = useL();
  const overview = useAdminLoad('/v1/admin/overview');
  const d = overview.data;
  const [period, setPeriod] = useState('d30');
  const [customN, setCustomN] = useState('6');
  const [customUnit, setCustomUnit] = useState('month');
  const [customSpan, setCustomSpan] = useState(6 * UNIT.month);
  const [status, setStatus] = useState(route.params?.status || '');
  // Opened again from Home with a filter: show that filter.
  const [askedAt, setAskedAt] = useState(route.params?.at);
  if (route.params?.at !== askedAt) {
    setAskedAt(route.params?.at);
    setStatus(route.params?.status || '');
  }
  // The period ends at the minute the page opened, so it only changes when chosen.
  const [nowMin] = useState(() => Math.floor(Date.now() / 60_000) * 60_000);
  const range = useMemo(() => {
    const to = nowMin + 60_000;
    if (period === 'all') return { from: 1, to };
    if (period === 'custom') return { from: Math.max(1, Math.round(to - customSpan)), to };
    return { from: to - PRESETS[period], to };
  }, [period, customSpan, nowMin]);
  const m = useAdminLoad(`/v1/admin/money?from=${range.from}&to=${range.to}${status ? `&status=${status}` : ''}`);
  const s = m.data;
  const [refreshing, setRefreshing] = useState(false);

  const unitName = { day: L('days', 'jours'), week: L('weeks', 'semaines'), month: L('months', 'mois'), year: L('years', 'ans') };
  const periodName = {
    d1: L('the last 24 hours', 'les dernières 24 heures'),
    d2: L('the last 2 days', 'les 2 derniers jours'),
    d7: L('the last 7 days', 'les 7 derniers jours'),
    d30: L('the last 30 days', 'les 30 derniers jours'),
    m3: L('the last 3 months', 'les 3 derniers mois'),
    y1: L('the last 12 months', 'les 12 derniers mois'),
    all: L('all time', 'depuis le début'),
    custom: `${L('the last', 'les derniers')} ${Math.round(customSpan / UNIT[customUnit])} ${unitName[customUnit]}`,
  }[period];
  const applyCustom = () => {
    const n = Math.max(1, Math.min(50, parseInt(customN, 10) || 1));
    setCustomN(String(n));
    setCustomSpan(n * UNIT[customUnit]);
  };

  return (
    <Screen
      header={<AdminHeader title={L('Money', 'Argent')} subtitle={L('What came in, over any period', 'Ce qui est entré, sur toute période')} />}
      keyboard
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await Promise.all([overview.reload(), m.reload()]), setRefreshing(false))} />}
    >
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <V c="gap-space-sm">
          <Chips
            value={period}
            onChange={setPeriod}
            items={[
              ['d1', L('24 hours', '24 heures')],
              ['d2', L('2 days', '2 jours')],
              ['d7', L('7 days', '7 jours')],
              ['d30', L('30 days', '30 jours')],
              ['m3', L('3 months', '3 mois')],
              ['y1', L('1 year', '1 an')],
              ['all', L('All time', 'Depuis le début')],
              ['custom', L('Other…', 'Autre…')],
            ]}
          />
          {period === 'custom' && (
            <Card>
              <V c="p-space-md gap-space-sm">
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Show the last', 'Afficher les derniers')}
                </T>
                <V c="flex-row items-center gap-space-sm">
                  <Input
                    c="w-16 h-11 px-2 rounded-xl bg-surface-container-low text-body-lg font-body-lg text-on-surface text-center"
                    value={customN}
                    onChangeText={(t) => setCustomN(t.replace(/\D/g, '').slice(0, 2))}
                    keyboardType="number-pad"
                    accessibilityLabel={L('How many', 'Combien')}
                  />
                  <V c="flex-1">
                    <Chips
                      value={customUnit}
                      onChange={setCustomUnit}
                      items={[
                        ['day', unitName.day],
                        ['week', unitName.week],
                        ['month', unitName.month],
                        ['year', unitName.year],
                      ]}
                    />
                  </V>
                </V>
                <Cta variant="dark" icon={null} label={L('Show this period', 'Afficher cette période')} onPress={applyCustom} h="h-11" />
              </V>
            </Card>
          )}
        </V>

        <ErrorNote error={m.error} />
        {m.busy && !s && <Loading />}
        {!!s && (
          <Card>
            <V c="p-space-md gap-space-md">
              <V c="gap-0.5">
                <T c="font-label-md text-label-md text-on-surface-variant">
                  {L('Received over', 'Reçu sur')} {periodName}
                </T>
                <T c="text-on-surface" style={{ fontSize: 34, lineHeight: 40, fontWeight: '800', fontVariant: ['tabular-nums'] }} numberOfLines={1} adjustsFontSizeToFit>
                  {money(s.total)}
                </T>
                <T c="font-body-sm text-body-sm text-outline">
                  {date(period === 'all' && s.startedAt ? s.startedAt : s.from)} {L('to', 'au')} {date(s.to - 60_000)}
                </T>
              </V>
              <V c="flex-row flex-wrap gap-2">
                <Figure value={money(s.afterFees)} label={L('after Fapshi’s 3%', 'après les 3 % de Fapshi')} />
                <Figure value={money(s.partnerShare)} label={L('earned by partners', 'gagné par les partenaires')} tone="warn" />
                <Figure value={money(s.kept)} label={L('Klass8 keeps', 'Klass8 garde')} tone="ok" />
                <Figure value={`${s.payments}`} label={`${L('payments from', 'paiements de')} ${s.payers} ${s.payers === 1 ? L('person', 'personne') : L('people', 'personnes')}`} />
              </V>
              {s.series.length > 1 && (
                <V c="gap-1">
                  <T c="font-label-md text-label-md text-on-surface-variant">
                    {{ hour: L('By hour', 'Par heure'), day: L('By day', 'Par jour'), week: L('By week', 'Par semaine'), month: L('By month', 'Par mois') }[s.step]}
                  </T>
                  <Bars series={s.series} label={(t) => short(t, s.step)} />
                </V>
              )}
              <V>
                <Row first icon="calendar_view_month" title={`${s.byPlan.month.count} × ${L('1 month', '1 mois')}`} sub={money(s.byPlan.month.amount)} />
                <Row icon="event_available" title={`${s.byPlan.year.count} × ${L('1 year', '1 an')}`} sub={money(s.byPlan.year.amount)} />
                <Row icon="person_add" iconBg="#e3f4ec" iconTint="secondary" title={`${s.joined.accounts} ${L('new accounts', 'nouveaux comptes')}`} sub={`${s.joined.students} ${L('of them students', 'dont élèves')}`} />
              </V>
            </V>
          </Card>
        )}

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
                {!!d.me?.can?.owner && <Cta variant="soft" icon={null} lead="price_change" label={L('Change prices or charges', 'Changer les prix ou les frais')} onPress={() => navigation.navigate('AdminPrices')} />}
              </V>
            </Card>
          </Section>
        )}

        <Section title={L('Payments in this period', 'Paiements de cette période')}>
          <V c="gap-space-sm">
            <Chips
              value={status}
              onChange={setStatus}
              items={[
                ['', L('All', 'Tous')],
                ['SUCCESSFUL', L('Paid', 'Payés')],
                ['PENDING', `${L('Waiting', 'En attente')}${s?.open.pending ? ` (${s.open.pending})` : ''}`],
                ['REVIEW', `${L('To check', 'À vérifier')}${s?.open.review ? ` (${s.open.review})` : ''}`],
                ['FAILED', L('Failed', 'Échoués')],
              ]}
            />
            {!!s && !s.items.length && (
              <Card>
                <Empty icon="payments" text={L('No payments here for this period.', 'Aucun paiement ici pour cette période.')} />
              </Card>
            )}
            {!!s && s.items.length > 0 && (
              <Card>
                {s.items.map((p, i) => {
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
        <P c="items-center py-1" onPress={() => navigation.navigate('AdminPartners')} hitSlop={8}>
          <T c="font-label-md text-label-md text-primary-container">{L('Partners and what they earned', 'Les partenaires et leurs gains')}</T>
        </P>
      </V>
    </Screen>
  );
}
