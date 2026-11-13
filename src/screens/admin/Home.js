// Admin Home: a greeting, the numbers that matter, what needs attention now,
// quick actions and the latest payments, in the same look as the student Home.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { T, V } from '../../ui/kit';
import { ErrorNote, Screen } from '../../ui/chrome';
import { TileGrid } from '../../ui/hub';
import { useL } from '../../i18n';
import { firstName, greeting } from '../../state/selectors';
import { fcfa } from '../../data/plan';
import { currentAdmin } from '../../api/adminClient';
import { AdminHeader, Card, Loading, Pill, Row, Section, Stat, date, useAdminLoad } from './kit';

export const PAY_STATUS = {
  SUCCESSFUL: ['Paid', 'Payé', 'ok'],
  PENDING: ['Waiting', 'En attente', 'muted'],
  REVIEW: ['To check', 'À vérifier', 'warn'],
  FAILED: ['Failed', 'Échoué', 'bad'],
  EXPIRED: ['Expired', 'Expiré', 'bad'],
};
export const planName = (plan, L) => (plan === 'year' ? L('1 year', '1 an') : plan === 'month' ? L('1 month', '1 mois') : plan);

export default function AdminHome({ navigation }) {
  const L = useL();
  const admin = currentAdmin();
  const { data: d, error, busy, reload } = useAdminLoad('/v1/admin/overview');
  const [refreshing, setRefreshing] = useState(false);
  // `at` makes a filter asked for again apply again, even with the same value.
  const go = (name, params) => navigation.navigate(name, params ? { ...params, at: Date.now() } : undefined);
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

  const attention = d
    ? [
        d.newMessages > 0 && { icon: 'mail', title: plural(d.newMessages, L('new message from the website', 'nouveau message du site'), L('new messages from the website', 'nouveaux messages du site')), to: () => go('AdminMessages') },
        d.openReports > 0 && { icon: 'flag', title: plural(d.openReports, L('report on an AI answer', 'signalement sur une réponse IA'), L('reports on AI answers', 'signalements sur des réponses IA')), to: () => go('AdminReports') },
        d.money.review > 0 && { icon: 'error', title: plural(d.money.review, L('payment to check', 'paiement à vérifier'), L('payments to check', 'paiements à vérifier')), sub: L('The amount did not match what was asked.', 'Le montant ne correspondait pas.'), to: () => go('AdminMoney', { status: 'REVIEW' }) },
        d.licenceRequests > 0 && { icon: 'school', title: plural(d.licenceRequests, L('school licence request', 'demande de licence d’école'), L('school licence requests', 'demandes de licence d’école')), to: () => go('AdminSchools') },
      ].filter(Boolean)
    : [];

  return (
    <Screen
      header={<AdminHeader title={L('Klass8 admin', 'Admin Klass8')} subtitle={admin?.name || ''} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await reload(), setRefreshing(false))} />}
    >
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <V c="gap-1">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight" numberOfLines={1}>
            {greeting(L)}, {firstName(admin?.name) || L('admin', 'admin')}
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant">{L('Here is Klass8 today.', 'Voici Klass8 aujourd’hui.')}</T>
        </V>

        <ErrorNote error={error} />
        {busy && !d && <Loading />}

        {!!d && (
          <V c="flex-row flex-wrap justify-between gap-y-space-sm">
            <Stat icon="school" value={d.accounts.student || 0} label={L('students', 'élèves')} onPress={() => go('AdminPeople', { role: 'student' })} />
            <Stat icon="person_add" bg="#e3f4ec" tint="secondary" value={d.newThisWeek} label={L('new accounts this week', 'nouveaux comptes cette semaine')} onPress={() => go('AdminPeople', { role: '' })} />
            <Stat icon="workspace_premium" bg="#fff3d6" tint="tertiary" value={d.students.paid} label={L('students paying now', 'élèves qui paient')} onPress={() => go('AdminMoney', { status: '' })} />
            <Stat icon="payments" bg="#e6eef7" value={fcfa(d.money.thisMonth)} label={L('received this month', 'reçu ce mois')} onPress={() => go('AdminMoney', { status: '' })} />
          </V>
        )}

        {!!d && (
          <Section title={L('Needs your attention', 'À traiter')}>
            <Card>
              {attention.length ? (
                attention.map((a, i) => <Row key={a.title} first={i === 0} icon={a.icon} iconBg="#fff3d6" iconTint="tertiary" title={a.title} sub={a.sub} onPress={a.to} />)
              ) : (
                <Row first icon="task_alt" iconBg="#e3f4ec" iconTint="secondary" title={L('Nothing is waiting', 'Rien en attente')} sub={L('No new messages, reports or payments to check.', 'Aucun nouveau message, signalement ou paiement à vérifier.')} />
              )}
            </Card>
          </Section>
        )}

        <Section title={L('Quick actions', 'Actions rapides')}>
          <TileGrid
            items={[
              { icon: 'person_search', title: L('Find a person', 'Trouver un compte'), sub: L('Give days, block or delete', 'Donner des jours, bloquer, supprimer'), onPress: () => go('AdminPeople') },
              { icon: 'redeem', bg: '#e3f4ec', tint: 'secondary', title: L('Make school codes', 'Créer des codes d’école'), sub: L('Klass8 for a whole class', 'Klass8 pour toute une classe'), onPress: () => go('AdminSchools') },
              { icon: 'campaign', bg: '#fff3d6', tint: 'tertiary', title: L('Send an announcement', 'Envoyer une annonce'), sub: L('A message in everyone’s app', 'Un message dans l’application'), onPress: () => go('AdminAnnounce') },
              { icon: 'price_change', title: L('Change prices', 'Changer les prix'), sub: L('Plans and charges', 'Formules et frais'), onPress: () => go('AdminPrices') },
            ]}
          />
        </Section>

        {!!d && (
          <Section title={L('Charges', 'Frais')} action={L('Change', 'Modifier')} onAction={() => go('AdminPrices')}>
            <Card>
              <Row first icon="sell" title={`${fcfa(d.prices.month)} ${L('a month', 'par mois')}, ${fcfa(d.prices.year)} ${L('a year', 'par an')}`} sub={d.settings.paywall ? L('Students are charged after their free month.', 'Les élèves paient après leur mois gratuit.') : L('Klass8 is free for everyone at the moment.', 'Klass8 est gratuit pour tous en ce moment.')} right={<Pill text={d.settings.paywall ? L('Charging', 'Payant') : L('Free', 'Gratuit')} tone={d.settings.paywall ? 'ok' : 'info'} />} onPress={() => go('AdminPrices')} />
            </Card>
          </Section>
        )}

        {!!d && (
          <Section title={L('Latest payments', 'Derniers paiements')} action={L('See all', 'Tout voir')} onAction={() => go('AdminMoney', { status: '' })}>
            <Card>
              {d.latestPayments.length ? (
                d.latestPayments.map((p, i) => {
                  const st = PAY_STATUS[p.status] || [p.status, p.status, 'muted'];
                  return (
                    <Row
                      key={p.id}
                      first={i === 0}
                      icon="payments"
                      title={p.name || L('Deleted account', 'Compte supprimé')}
                      sub={`${planName(p.plan, L)}, ${fcfa(p.amount)}, ${date(p.createdAt)}`}
                      right={<Pill text={L(st[0], st[1])} tone={st[2]} />}
                    />
                  );
                })
              ) : (
                <Row first icon="payments" title={L('No payments yet', 'Aucun paiement')} />
              )}
            </Card>
          </Section>
        )}
      </V>
    </Screen>
  );
}
