// Partners, for admins: the programme's rules (the founder and the CTO change
// them), the totals, withdrawals waiting to be paid, and who brings the most
// people, sorted by sign-ups, paying people or earnings.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Input, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Field, Toggle } from '../../ui/form';
import { useL } from '../../i18n';
import { post, put } from '../../api/adminClient';
import { Card, Chips, Empty, Figure, Loading, Pill, Row, Section, Sheet, date, money, phoneText, roleName, useAdminCan, useAdminLoad } from './kit';

const num = (t, max = 7) => t.replace(/\D/g, '').slice(0, max);

function Rules({ p, price = 350, can, L, showToast, onSaved }) {
  const [on, setOn] = useState(p.on);
  const [rate, setRate] = useState(String(p.rate));
  const [months, setMonths] = useState(String(p.months));
  const [min, setMin] = useState(String(p.minWithdraw));
  const [hold, setHold] = useState(String(p.holdDays));
  const [bonus, setBonus] = useState(String(p.bonusDays));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      const r = await put('/v1/admin/partners/settings', { on, rate: +rate || 0, months: +months || 0, minWithdraw: +min || 100, holdDays: +hold || 0, bonusDays: +bonus || 0 });
      onSaved(r.programme);
      showToast(r.told ? L('Saved. Every partner was told what changed.', 'Enregistré. Chaque partenaire a été averti.') : L('Saved', 'Enregistré'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  if (!can.owner) {
    return (
      <Card>
        <V c="p-space-md gap-1">
          <T c="font-body-md text-body-md text-on-surface">
            {p.on ? `${L('Partners earn', 'Les partenaires gagnent')} ${p.rate}% ${L('of what Klass8 receives after Fapshi’s fee', 'de ce que Klass8 reçoit après les frais Fapshi')}, ${p.months ? `${L('for', 'pendant')} ${p.months} ${L('months', 'mois')}` : L('for ever', 'pour toujours')}.` : L('The programme is paused.', 'Le programme est en pause.')}
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Only the founder or the CTO can change the rules.', 'Seuls la fondatrice ou le CTO peuvent changer les règles.')}</T>
        </V>
      </Card>
    );
  }
  const net = Math.round(price * 0.97);
  const share = Math.floor((net * (+rate || 0)) / 100);
  return (
    <Card>
      <V c="p-space-md gap-space-md">
        <V c="flex-row items-center gap-space-sm">
          <V c="flex-1 gap-0.5">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Programme open', 'Programme ouvert')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{on ? L('Codes work and payments earn.', 'Les codes marchent et les paiements rapportent.') : L('Paused: codes do not work, nothing new is earned.', 'En pause : les codes ne marchent pas.')}</T>
          </V>
          <Toggle on={on} onPress={() => setOn((v) => !v)} accessibilityLabel={L('Programme open', 'Programme ouvert')} />
        </V>
        <Field label={L('Usual share (%)', 'Part habituelle (%)')} value={rate} onChangeText={(t) => setRate(num(t, 2))} keyboardType="number-pad" hint={`${L('On a', 'Sur un paiement de')} ${money(price)}${L(' payment, Klass8 receives', ', Klass8 reçoit')} ${money(net)} ${L('after Fapshi and the partner gets', 'après Fapshi et le partenaire gagne')} ${money(share)}.`} />
        <Field label={L('For how many months after joining (0 = for ever)', 'Pendant combien de mois (0 = pour toujours)')} value={months} onChangeText={(t) => setMonths(num(t, 3))} keyboardType="number-pad" />
        <Field label={L('Smallest withdrawal (FCFA)', 'Retrait minimum (FCFA)')} value={min} onChangeText={(t) => setMin(num(t))} keyboardType="number-pad" />
        <Field label={L('Days before an earning can be withdrawn', 'Jours avant de pouvoir retirer un gain')} value={hold} onChangeText={(t) => setHold(num(t, 2))} keyboardType="number-pad" hint={L('Covers the 7-day refund window.', 'Couvre les 7 jours de remboursement.')} />
        <Field label={L('Extra free days for whoever joins with a code', 'Jours gratuits en plus pour qui s’inscrit avec un code')} value={bonus} onChangeText={(t) => setBonus(num(t, 2))} keyboardType="number-pad" />
        <ErrorNote error={error} />
        <Cta variant="dark" icon="check" label={L('Save the rules', 'Enregistrer les règles')} loading={busy} onPress={save} />
        <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Everyone with a code is told what changed.', 'Chaque détenteur de code est averti du changement.')}</T>
      </V>
    </Card>
  );
}

export default function AdminPartners({ navigation }) {
  const L = useL();
  const can = useAdminCan();
  const [sort, setSort] = useState('signups');
  const list = useAdminLoad(`/v1/admin/partners?sort=${sort}`);
  const queue = useAdminLoad('/v1/admin/withdrawals?status=requested');
  const [toast, showToast] = useToast();
  const [refreshing, setRefreshing] = useState(false);
  const [sheet, setSheet] = useState(null); // { w, mode: 'pay' | 'reject' }
  const [note, setNote] = useState('');
  const [acting, setActing] = useState(false);
  const [actError, setActError] = useState(null);
  const d = list.data;

  const act = async () => {
    setActing(true);
    setActError(null);
    try {
      if (sheet.mode === 'pay') await post(`/v1/admin/withdrawals/${sheet.w.id}/paid`, { reference: note.trim() });
      else await post(`/v1/admin/withdrawals/${sheet.w.id}/reject`, { reason: note.trim() });
      showToast(sheet.mode === 'pay' ? L('Marked as paid. The partner was told.', 'Marqué payé. Le partenaire est averti.') : L('Turned down. The partner was told why.', 'Refusé. Le partenaire sait pourquoi.'));
      setSheet(null);
      setNote('');
      queue.reload();
      list.reload();
    } catch (e) {
      setActError(e);
    } finally {
      setActing(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen
        header={<StackHeader title={L('Partners and promo codes', 'Partenaires et codes promo')} avatar={false} />}
        keyboard
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await Promise.all([list.reload(), queue.reload()]), setRefreshing(false))} />}
      >
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <ErrorNote error={list.error} />
          {list.busy && !d && <Loading />}
          {!!d && (
            <Card>
              <V c="p-space-md flex-row flex-wrap gap-2">
                <Figure value={`${d.totals.signups}`} label={d.totals.signups === 1 ? L('person joined with a code', 'inscrit avec un code') : L('people joined with a code', 'inscrits avec un code')} />
                <Figure value={`${d.totals.paying}`} label={d.totals.paying === 1 ? L('of them has paid', 'a payé') : L('of them have paid', 'd’entre eux ont payé')} tone="ok" />
                <Figure value={money(d.totals.earned)} label={L('earned by partners', 'gagné par les partenaires')} tone="warn" />
                <Figure value={money(d.totals.paidOut)} label={L('paid out to them', 'versé aux partenaires')} />
              </V>
            </Card>
          )}

          <Section title={`${L('Withdrawals to pay', 'Retraits à payer')}${queue.data?.items.length ? ` (${queue.data.items.length})` : ''}`}>
            {!!queue.data && !queue.data.items.length && (
              <Card>
                <Empty icon="task_alt" text={L('No one is waiting for money.', 'Personne n’attend d’argent.')} />
              </Card>
            )}
            {!!queue.data &&
              queue.data.items.map((w) => (
                <Card key={w.id}>
                  <V c="p-space-md gap-space-sm">
                    <V c="flex-row items-start gap-space-sm">
                      <V c="flex-1 gap-0.5">
                        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                          {money(w.amount)}
                        </T>
                        <T c="font-body-sm text-body-sm text-on-surface-variant">
                          {w.name}, {L('to', 'vers')} {phoneText(w.phone)}, {date(w.createdAt)}
                        </T>
                      </V>
                      <Pill text={L('Waiting', 'En attente')} tone="warn" />
                    </V>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Send it by MTN MoMo or Orange Money, then mark it paid with the transaction number.', 'Envoyez-le par MTN MoMo ou Orange Money, puis marquez-le payé avec le numéro de transaction.')}</T>
                    <V c="flex-row gap-2">
                      <V c="flex-1">
                        <Cta variant="dark" icon={null} lead="check" label={L('Mark paid', 'Marquer payé')} h="h-11" onPress={() => (setActError(null), setNote(''), setSheet({ w, mode: 'pay' }))} />
                      </V>
                      <V c="flex-1">
                        <Cta variant="soft" icon={null} lead="close" label={L('Turn down', 'Refuser')} h="h-11" onPress={() => (setActError(null), setNote(''), setSheet({ w, mode: 'reject' }))} />
                      </V>
                    </V>
                  </V>
                </Card>
              ))}
          </Section>

          {!!d && (
            <Section title={L('The rules', 'Les règles')}>
              <Rules p={d.programme} price={d.monthPrice} can={can} L={L} showToast={showToast} onSaved={(programme) => list.setData((x) => ({ ...x, programme }))} />
            </Section>
          )}

          <Section title={L('Who brings the most people', 'Qui amène le plus de monde')}>
            <V c="gap-space-sm">
              <Chips
                value={sort}
                onChange={setSort}
                items={[
                  ['signups', L('Most sign-ups', 'Plus d’inscrits')],
                  ['paying', L('Most paying', 'Plus de payants')],
                  ['earned', L('Most earned', 'Plus de gains')],
                ]}
              />
              {!!d && !d.items.length && (
                <Card>
                  <Empty icon="handshake" text={L('No one has a promo code yet. Students, parents, teachers and partners get one from Invite and earn.', 'Personne n’a encore de code. Chacun en reçoit un dans Inviter et gagner.')} />
                </Card>
              )}
              {!!d && d.items.length > 0 && (
                <Card>
                  {d.items.map((x, i) => (
                    <Row
                      key={x.id}
                      first={i === 0}
                      lead={
                        <V c="w-10 h-10 rounded-full items-center justify-center" style={{ backgroundColor: i < 3 ? '#fff3d6' : '#eef3fa' }}>
                          <T c="font-label-lg text-label-lg" style={{ fontWeight: '800', color: i < 3 ? '#8a5a00' : '#4e5b77' }}>
                            {i + 1}
                          </T>
                        </V>
                      }
                      title={x.name}
                      sub={`${x.code}, ${x.role === 'partner' ? L('Partner', 'Partenaire') : roleName(x.role, L)}. ${x.signups} ${L('joined', 'inscrits')}, ${x.paying} ${L('paying', 'payants')}, ${money(x.earned)}`}
                      right={<Pill text={x.paused ? L('On hold', 'Suspendu') : `${x.rate}%${x.ownRate != null ? '*' : ''}`} tone={x.paused ? 'bad' : x.ownRate != null ? 'warn' : 'info'} />}
                      onPress={() => navigation.navigate('AdminPartner', { id: x.id, name: x.name })}
                    />
                  ))}
                </Card>
              )}
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('* has their own share, set by the founder or the CTO.', '* a sa propre part, fixée par la fondatrice ou le CTO.')}</T>
            </V>
          </Section>
        </V>
      </Screen>
      <Sheet
        visible={!!sheet}
        onClose={() => !acting && setSheet(null)}
        icon={sheet?.mode === 'pay' ? 'payments' : 'block'}
        danger={sheet?.mode === 'reject'}
        busy={acting}
        cancel={L('Cancel', 'Annuler')}
        title={sheet?.mode === 'pay' ? `${L('Paid', 'Payé')} ${money(sheet?.w.amount)} ${L('to', 'à')} ${sheet?.w.name}?` : `${L('Turn down', 'Refuser')} ${money(sheet?.w.amount || 0)}?`}
        text={sheet?.mode === 'pay' ? `${L('Send it first to', 'Envoyez-le d’abord au')} ${phoneText(sheet?.w.phone)}. ${L('Then type the transaction number from the mobile money message.', 'Puis tapez le numéro de transaction du message mobile money.')}` : L('The amount goes back to their balance and they are told why.', 'Le montant revient sur leur solde et ils savent pourquoi.')}
        action={sheet?.mode === 'pay' ? L('Mark as paid', 'Marquer payé') : L('Turn it down', 'Refuser')}
        onAction={act}
      >
        <Input
          c="h-12 px-4 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface"
          placeholder={sheet?.mode === 'pay' ? L('Transaction number, e.g. MP231114.1234.A', 'Numéro de transaction') : L('Reason, e.g. the number is not on mobile money', 'Raison')}
          value={note}
          onChangeText={setNote}
          maxLength={sheet?.mode === 'pay' ? 60 : 300}
          autoCapitalize={sheet?.mode === 'pay' ? 'characters' : 'sentences'}
        />
        <ErrorNote error={actError} />
      </Sheet>
      {toast}
    </V>
  );
}
