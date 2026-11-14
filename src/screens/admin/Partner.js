// One partner, for admins: what they brought and earned, their own share (the
// founder and the CTO set it), putting their earnings on hold with a reason,
// the people who joined with their code, each earning and each withdrawal.
import { useState } from 'react';
import { Input, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import { patch, post } from '../../api/adminClient';
import { Card, Figure, Loading, Pill, Row, Section, Sheet, date, money, phoneText, roleName, useAdminCan, useAdminLoad } from './kit';

const W_STATUS = { requested: ['Waiting', 'En attente', 'warn'], paid: ['Paid', 'Payé', 'ok'], rejected: ['Turned down', 'Refusé', 'bad'], cancelled: ['Cancelled', 'Annulé', 'muted'] };

export default function AdminPartner({ navigation, route }) {
  const { id } = route.params;
  const L = useL();
  const can = useAdminCan();
  const { data, error, busy, setData } = useAdminLoad(`/v1/admin/partners/${id}`);
  const [toast, showToast] = useToast();
  const [rate, setRate] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [sheet, setSheet] = useState(null); // 'hold' | 'release' | { cancel: commission }
  const [reason, setReason] = useState('');
  const [acting, setActing] = useState(false);
  const [actError, setActError] = useState(null);
  const x = data?.partner;
  const shown = rate ?? (x ? String(x.rate) : '');

  const saveRate = async (value) => {
    setSaving(true);
    setSaveError(null);
    try {
      const r = await patch(`/v1/admin/partners/${id}`, { rate: value });
      setData(() => r);
      setRate(null);
      showToast(L('Share saved. They were told.', 'Part enregistrée. La personne est avertie.'));
    } catch (e) {
      setSaveError(e);
    } finally {
      setSaving(false);
    }
  };
  const act = async () => {
    setActing(true);
    setActError(null);
    try {
      if (sheet === 'hold' || sheet === 'release') {
        const r = await patch(`/v1/admin/partners/${id}`, { paused: sheet === 'hold', reason: reason.trim() || undefined });
        setData(() => r);
      } else {
        await post(`/v1/admin/commissions/${sheet.cancel.id}/cancel`, { reason: reason.trim() });
        setData((d) => ({ ...d, earnings: d.earnings.map((e) => (e.id === sheet.cancel.id ? { ...e, cancelledAt: Date.now(), cancelReason: reason.trim() } : e)) }));
      }
      setSheet(null);
      setReason('');
      showToast(L('Done. They were told.', 'Fait. La personne est avertie.'));
    } catch (e) {
      setActError(e);
    } finally {
      setActing(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={x?.name || route.params.name || ''} subtitle={x?.code || ''} avatar={false} />} keyboard>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <ErrorNote error={error} />
          {busy && !x && <Loading />}
          {!!x && (
            <>
              <Card>
                <V c="p-space-md gap-space-sm">
                  <V c="flex-row items-center gap-2 flex-wrap">
                    <Pill text={x.role === 'partner' ? L('Partner', 'Partenaire') : roleName(x.role, L)} tone="info" />
                    {x.paused && <Pill text={L('Earnings on hold', 'Gains suspendus')} tone="bad" />}
                    <T c="font-body-sm text-body-sm text-on-surface-variant">{phoneText(x.phone)}</T>
                  </V>
                  <V c="flex-row flex-wrap gap-2">
                    <Figure value={`${data.people.length}`} label={L('joined with the code', 'inscrits avec le code')} />
                    <Figure value={money(data.balance.earned)} label={L('earned in all', 'gagné au total')} tone="warn" />
                    <Figure value={money(data.balance.available)} label={L('can withdraw now', 'retirable maintenant')} tone="ok" />
                    <Figure value={money(data.balance.paidOut)} label={L('paid out', 'déjà versé')} />
                  </V>
                  <Row first icon="person" title={L('Open their account', 'Ouvrir son compte')} onPress={() => navigation.navigate('AdminPerson', { id: x.id, name: x.name })} />
                </V>
              </Card>

              <Section title={L('Their share', 'Sa part')}>
                <Card>
                  <V c="p-space-md gap-space-sm">
                    <T c="font-body-md text-body-md text-on-surface">
                      {x.ownRate != null ? `${L('Their own share', 'Sa propre part')}: ${x.ownRate}% (${L('usual', 'habituelle')} ${data.programme.rate}%)` : `${L('The usual share', 'La part habituelle')}: ${data.programme.rate}%`}
                    </T>
                    {can.owner ? (
                      <>
                        <V c="flex-row items-center gap-space-sm">
                          <Input
                            c="w-20 h-12 px-3 rounded-xl bg-surface-container-low text-body-lg font-body-lg text-on-surface text-center"
                            value={shown}
                            onChangeText={(t) => setRate(t.replace(/\D/g, '').slice(0, 2))}
                            keyboardType="number-pad"
                            accessibilityLabel={L('Share in %', 'Part en %')}
                          />
                          <T c="font-headline-sm text-headline-sm text-on-surface">%</T>
                          <V c="flex-1">
                            <Cta variant="dark" icon={null} label={L('Set their share', 'Fixer sa part')} h="h-12" loading={saving} onPress={() => saveRate(parseInt(shown, 10) || 0)} />
                          </V>
                        </V>
                        {x.ownRate != null && <Cta variant="soft" icon={null} label={L('Use the usual share again', 'Revenir à la part habituelle')} h="h-11" onPress={() => saveRate(null)} />}
                        <ErrorNote error={saveError} />
                      </>
                    ) : (
                      <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Only the founder or the CTO can change a share.', 'Seuls la fondatrice ou le CTO peuvent changer une part.')}</T>
                    )}
                    {x.paused ? (
                      <Cta variant="soft" icon={null} lead="play_arrow" label={L('Release their earnings', 'Libérer ses gains')} h="h-11" onPress={() => (setActError(null), setSheet('release'))} />
                    ) : (
                      <Cta variant="soft" icon={null} lead="pause" label={L('Put their earnings on hold', 'Suspendre ses gains')} h="h-11" onPress={() => (setActError(null), setReason(''), setSheet('hold'))} />
                    )}
                  </V>
                </Card>
              </Section>

              <Section title={`${L('People who joined with', 'Inscrits avec')} ${x.code} (${data.people.length})`}>
                <Card>
                  {!data.people.length && <Row first icon="person_add" title={L('No one yet', 'Personne pour l’instant')} />}
                  {data.people.map((p, i) => (
                    <Row
                      key={p.id}
                      first={i === 0}
                      icon="person"
                      title={p.name || L('Deleted account', 'Compte supprimé')}
                      sub={`${roleName(p.role, L)}, ${date(p.joinedAt)}${p.endsAt ? `, ${L('earns until', 'rapporte jusqu’au')} ${date(p.endsAt)}` : ''}`}
                      right={<T c="font-label-md text-label-md text-on-surface">{money(p.earned)}</T>}
                      onPress={p.name ? () => navigation.push('AdminPerson', { id: p.id, name: p.name }) : undefined}
                    />
                  ))}
                </Card>
              </Section>

              {data.earnings.length > 0 && (
                <Section title={L('Earnings', 'Gains')}>
                  <Card>
                    {data.earnings.map((e, i) => (
                      <Row
                        key={e.id}
                        first={i === 0}
                        icon={e.cancelledAt ? 'cancel' : 'add_card'}
                        title={`${money(e.amount)} ${L('from', 'de')} ${e.name || L('a deleted account', 'un compte supprimé')}`}
                        sub={e.cancelledAt ? `${L('Cancelled', 'Annulé')}: ${e.cancelReason}` : `${e.rate}% ${L('of', 'de')} ${money(e.net)} (${money(e.paid)} ${L('paid', 'payé')}), ${date(e.createdAt)}`}
                        onPress={!e.cancelledAt && can.owner ? () => (setActError(null), setReason(''), setSheet({ cancel: e })) : undefined}
                      />
                    ))}
                  </Card>
                </Section>
              )}

              {data.withdrawals.length > 0 && (
                <Section title={L('Withdrawals', 'Retraits')}>
                  <Card>
                    {data.withdrawals.map((w, i) => {
                      const st = W_STATUS[w.status] || [w.status, w.status, 'muted'];
                      return <Row key={w.id} first={i === 0} icon="account_balance_wallet" title={money(w.amount)} sub={[phoneText(w.phone), date(w.createdAt), w.reference, w.reason].filter(Boolean).join(', ')} right={<Pill text={L(st[0], st[1])} tone={st[2]} />} />;
                    })}
                  </Card>
                </Section>
              )}
            </>
          )}
        </V>
      </Screen>
      <Sheet
        visible={!!sheet}
        onClose={() => !acting && setSheet(null)}
        icon={sheet === 'release' ? 'play_arrow' : sheet === 'hold' ? 'pause' : 'cancel'}
        danger={sheet !== 'release'}
        busy={acting}
        cancel={L('Cancel', 'Annuler')}
        title={sheet === 'hold' ? L('Put their earnings on hold?', 'Suspendre ses gains ?') : sheet === 'release' ? L('Release their earnings?', 'Libérer ses gains ?') : L('Cancel this earning?', 'Annuler ce gain ?')}
        text={
          sheet === 'hold'
            ? L('Their code stops working and they cannot withdraw until you release it. They see your reason.', 'Son code ne marche plus et il ne peut plus retirer jusqu’à la libération. La raison lui est montrée.')
            : sheet === 'release'
              ? L('Their code works again and they can withdraw.', 'Son code remarche et il peut retirer.')
              : L('For a refunded payment or a misuse of the code. They see your reason.', 'Pour un paiement remboursé ou un abus du code. La raison lui est montrée.')
        }
        action={sheet === 'hold' ? L('Put on hold', 'Suspendre') : sheet === 'release' ? L('Release', 'Libérer') : L('Cancel the earning', 'Annuler le gain')}
        onAction={act}
      >
        {sheet !== 'release' && (
          <Input
            c="min-h-[76px] px-4 py-3 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface"
            placeholder={L('Reason (they see it)', 'Raison (visible par la personne)')}
            value={reason}
            onChangeText={setReason}
            maxLength={300}
            multiline
            textAlignVertical="top"
          />
        )}
        <ErrorNote error={actError} />
      </Sheet>
      {toast}
    </V>
  );
}
