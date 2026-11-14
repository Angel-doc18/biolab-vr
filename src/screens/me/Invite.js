// Invite and earn: the person's promo code to share, how it works, what they
// earned and can withdraw to mobile money, their withdrawals, the people who
// joined with their code, and (in the first days after joining) a box for the
// code of whoever invited them. The same page is a partner account's Home.
import { useCallback, useState } from 'react';
import { RefreshControl, Share } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Field, PhoneField } from '../../ui/form';
import { useL } from '../../i18n';
import { post } from '../../api/client';
import { loadPartner, shareMessage } from '../../ui/InviteCard';

const money = (n) => `${Math.round(Number(n) || 0).toLocaleString('en-US')} FCFA`;
const day = (t) => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
const W_STATUS = { requested: ['Waiting to be sent', 'En attente d’envoi', '#fff3d6', '#8a5a00'], paid: ['Sent', 'Envoyé', '#e3f4ec', '#0f7b5a'], rejected: ['Not sent', 'Non envoyé', '#fdecea', '#b3261e'], cancelled: ['Cancelled', 'Annulé', '#eef1f6', '#4e5b77'] };

function Box({ children, c = '' }) {
  return <V c={`bg-surface-container-lowest rounded-xl shadow-sm border border-surface-container ${c}`}>{children}</V>;
}
function Title({ children }) {
  return (
    <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
      {children}
    </T>
  );
}
function Money({ value, label, tint }) {
  return (
    <V c="flex-1 min-w-[45%] p-space-sm rounded-xl gap-0.5" style={{ backgroundColor: tint }}>
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '800', fontVariant: ['tabular-nums'] }} numberOfLines={1} adjustsFontSizeToFit>
        {money(value)}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant">{label}</T>
    </V>
  );
}
function Step({ n, text }) {
  return (
    <V c="flex-row gap-space-sm items-start">
      <V c="w-7 h-7 rounded-full bg-primary items-center justify-center">
        <T c="font-label-md text-label-md text-on-primary" style={{ fontWeight: '800' }}>
          {n}
        </T>
      </V>
      <T c="flex-1 font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
        {text}
      </T>
    </V>
  );
}

export function InviteBody({ header = null }) {
  const L = useL();
  const [p, setP] = useState(null);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, showToast] = useToast();
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [busy, setBusy] = useState(false);
  const [wError, setWError] = useState(null);
  const [code, setCode] = useState('');
  const [codeBusy, setCodeBusy] = useState(false);
  const [codeError, setCodeError] = useState(null);

  const load = useCallback(async (force = true) => {
    try {
      const r = await loadPartner(force);
      setP(r);
      setError(null);
      setPhone((x) => x || (r.payoutPhone || '').replace(/^237/, ''));
    } catch (e) {
      setError(e);
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      load(true);
    }, [load])
  );

  const share = () => Share.share({ message: shareMessage(p.code, p.link, L) }).catch(() => {});
  const copy = async () => {
    try {
      await Clipboard.setStringAsync(p.code);
      showToast(L('Code copied', 'Code copié'));
    } catch {
      // the code is on screen
    }
  };
  const withdraw = async () => {
    setWError(null);
    const n = parseInt(amount || String(p.balance.available), 10);
    if (!(n >= p.programme.minWithdraw)) return setWError(`${L('The smallest withdrawal is', 'Le retrait minimum est de')} ${money(p.programme.minWithdraw)}.`);
    if (n > p.balance.available) return setWError(`${L('You can withdraw up to', 'Vous pouvez retirer jusqu’à')} ${money(p.balance.available)}.`);
    setBusy(true);
    try {
      await post('/v1/partner/withdraw', { amount: n, phone: `237${phone}` });
      setAmount('');
      showToast(L('Request sent. You will be told here when the money is sent.', 'Demande envoyée. Vous serez averti ici à l’envoi.'));
      await load(true);
    } catch (e) {
      setWError(e);
    } finally {
      setBusy(false);
    }
  };
  const cancel = async (w) => {
    try {
      await post(`/v1/partner/withdrawals/${w.id}/cancel`, {});
      await load(true);
    } catch (e) {
      showToast(e.message);
    }
  };
  const addCode = async () => {
    setCodeBusy(true);
    setCodeError(null);
    try {
      const r = await post('/v1/partner/apply', { code });
      showToast(`${L('Added: you joined with', 'Ajouté : vous êtes inscrit avec le code de')} ${r.referrerName}`);
      setCode('');
      await load(true);
    } catch (e) {
      setCodeError(e);
    } finally {
      setCodeBusy(false);
    }
  };

  const pr = p?.programme;
  const canWithdraw = p && p.balance.available >= pr.minWithdraw && !p.paused;
  return (
    <V c="flex-1">
      <Screen header={header || <StackHeader title={L('Invite and earn', 'Inviter et gagner')} avatar={false} />} keyboard refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(true), setRefreshing(false))} />}>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <ErrorNote error={error} />
          {!p && !error && <V c="h-40" />}
          {!!p && (
            <>
              {!pr.on && (
                <V c="p-space-md rounded-xl" style={{ backgroundColor: '#fff3d6' }}>
                  <T c="font-body-md text-body-md text-on-surface">{L('The partner programme is paused for now. What you already earned stays yours.', 'Le programme est en pause. Ce que vous avez déjà gagné reste à vous.')}</T>
                </V>
              )}
              {p.paused && (
                <V c="p-space-md rounded-xl" style={{ backgroundColor: '#fdecea' }}>
                  <T c="font-body-md text-body-md text-on-surface">{L('Your promo code and earnings are on hold. Look in your notifications for why, or contact Klass8.', 'Votre code et vos gains sont suspendus. Voyez la raison dans vos notifications ou contactez Klass8.')}</T>
                </V>
              )}

              <V c="rounded-xl p-space-lg gap-space-md" style={{ backgroundColor: '#02287b' }}>
                <T c="font-label-lg text-label-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {L('Your promo code', 'Votre code promo')}
                </T>
                <P c="h-16 rounded-xl items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.35)', borderStyle: 'dashed' }} onPress={copy} accessibilityLabel={`${L('Copy', 'Copier')} ${p.code}`}>
                  <T style={{ color: '#fff', fontSize: 30, fontWeight: '800', letterSpacing: 4 }} selectable>
                    {p.code}
                  </T>
                </P>
                <T c="font-body-md text-body-md" style={{ color: '#fff', lineHeight: 22 }}>
                  {`${L('You earn', 'Vous gagnez')} ${pr.rate}% ${L('of what Klass8 receives (after Fapshi’s 3% fee) each time someone who joined with your code pays', 'de ce que Klass8 reçoit (après les 3 % de Fapshi) à chaque paiement d’une personne inscrite avec votre code')}${pr.months ? `, ${L('for', 'pendant')} ${pr.months} ${L('months after they join', 'mois après son inscription')}` : `, ${L('for as long as they pay', 'tant qu’elle paie')}`}.`}
                </T>
                <V c="flex-row gap-2">
                  <P c="flex-1 h-12 rounded-xl flex-row items-center justify-center gap-2" style={{ backgroundColor: '#FBAC02' }} onPress={share}>
                    <Ic n="share" s={20} c="primary" />
                    <T c="font-label-lg text-label-lg text-primary" style={{ fontWeight: '800' }}>
                      {L('Share my code', 'Partager mon code')}
                    </T>
                  </P>
                  <P c="h-12 px-4 rounded-xl flex-row items-center justify-center gap-2" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }} onPress={copy}>
                    <Ic n="content_copy" s={20} c="on-primary" />
                    <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                      {L('Copy', 'Copier')}
                    </T>
                  </P>
                </V>
              </V>

              <Box>
                <V c="p-space-md gap-space-sm">
                  <V c="flex-row flex-wrap gap-2">
                    <Money value={p.balance.available} label={L('you can withdraw now', 'à retirer maintenant')} tint="#e3f4ec" />
                    <Money value={p.balance.held} label={`${L('waiting', 'en attente')} ${pr.holdDays} ${L('days (refund window)', 'jours (remboursements)')}`} tint="#fff3d6" />
                    <Money value={p.balance.earned} label={L('earned in all', 'gagné au total')} tint="#eef3fa" />
                    <Money value={p.balance.paidOut} label={L('already sent to you', 'déjà envoyé')} tint="#eef3fa" />
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">
                    {p.stats.signups} {p.stats.signups === 1 ? L('person joined with your code', 'personne inscrite avec votre code') : L('people joined with your code', 'personnes inscrites avec votre code')}, {p.stats.paying} {L('of them paid', 'ont payé')}.
                  </T>
                </V>
              </Box>

              <V c="gap-space-xs">
                <Title>{L('Withdraw to mobile money', 'Retirer par mobile money')}</Title>
                <Box>
                  <V c="p-space-md gap-space-md">
                    <Field label={`${L('Amount (FCFA)', 'Montant (FCFA)')}`} value={amount} onChangeText={(t) => setAmount(t.replace(/\D/g, '').slice(0, 8))} keyboardType="number-pad" placeholder={String(p.balance.available)} hint={`${L('At least', 'Au moins')} ${money(pr.minWithdraw)}.`} />
                    <PhoneField label={L('MTN MoMo or Orange Money number', 'Numéro MTN MoMo ou Orange Money')} value={phone} onChangeText={setPhone} />
                    <ErrorNote error={wError} />
                    <Cta variant="dark" icon={null} lead="account_balance_wallet" label={L('Ask for my money', 'Demander mon argent')} loading={busy} onPress={withdraw} disabled={!canWithdraw} />
                    {!canWithdraw && !p.paused && (
                      <T c="font-body-sm text-body-sm text-on-surface-variant text-center">
                        {`${L('You can withdraw once you have', 'Vous pourrez retirer à partir de')} ${money(pr.minWithdraw)} ${L('ready', 'disponibles')}.`}
                      </T>
                    )}
                  </V>
                </Box>
              </V>

              {p.withdrawals.length > 0 && (
                <V c="gap-space-xs">
                  <Title>{L('Your withdrawals', 'Vos retraits')}</Title>
                  <Box>
                    {p.withdrawals.map((w, i) => {
                      const st = W_STATUS[w.status] || [w.status, w.status, '#eef1f6', '#4e5b77'];
                      return (
                        <V key={w.id} c={`px-space-md py-space-sm gap-1 ${i ? 'border-t border-surface-container' : ''}`}>
                          <V c="flex-row items-center gap-2">
                            <T c="flex-1 font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                              {money(w.amount)}
                            </T>
                            <V c="px-2.5 py-1 rounded-full" style={{ backgroundColor: st[2] }}>
                              <T c="font-label-sm text-label-sm" style={{ color: st[3], fontWeight: '700' }}>
                                {L(st[0], st[1])}
                              </T>
                            </V>
                          </V>
                          <T c="font-body-sm text-body-sm text-on-surface-variant">
                            {day(w.createdAt)}, {w.phone.replace(/^237/, '+237 ')}
                            {w.reference ? `, ${L('transaction', 'transaction')} ${w.reference}` : ''}
                            {w.reason ? `. ${w.reason}` : ''}
                          </T>
                          {w.status === 'requested' && (
                            <P onPress={() => cancel(w)} hitSlop={8}>
                              <T c="font-label-md text-label-md text-error">{L('Cancel this request', 'Annuler cette demande')}</T>
                            </P>
                          )}
                        </V>
                      );
                    })}
                  </Box>
                </V>
              )}

              <V c="gap-space-xs">
                <Title>{L('How it works', 'Comment ça marche')}</Title>
                <Box>
                  <V c="p-space-md gap-space-md">
                    <Step n="1" text={L('Share your code with classmates, friends, parents or a whole school.', 'Partagez votre code avec des camarades, amis, parents ou toute une école.')} />
                    <Step n="2" text={`${L('They type it when they create their Klass8 account', 'Ils le tapent en créant leur compte Klass8')}${pr.bonusDays ? ` ${L('and get', 'et reçoivent')} ${pr.bonusDays} ${L('extra free days', 'jours gratuits en plus')}` : ''}.`} />
                    <Step n="3" text={`${L('Each time they pay, you earn', 'À chaque paiement, vous gagnez')} ${pr.rate}%. ${L('After', 'Après')} ${pr.holdDays} ${L('days you can withdraw it to mobile money.', 'jours, vous pouvez le retirer par mobile money.')}`} />
                  </V>
                </Box>
              </V>

              {p.people.length > 0 && (
                <V c="gap-space-xs">
                  <Title>{L('People who joined with your code', 'Inscrits avec votre code')}</Title>
                  <Box>
                    {p.people.slice(0, 50).map((x, i) => (
                      <V key={`${x.joinedAt}-${i}`} c={`flex-row items-center gap-space-sm px-space-md py-space-sm ${i ? 'border-t border-surface-container' : ''}`}>
                        <V c="w-9 h-9 rounded-full bg-surface-container items-center justify-center">
                          <Ic n="person" s={18} c="primary-container" />
                        </V>
                        <V c="flex-1 gap-0.5">
                          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '600' }}>
                            {x.name}
                          </T>
                          <T c="font-body-sm text-body-sm text-on-surface-variant">
                            {L('Joined', 'Inscrit le')} {day(x.joinedAt)}
                            {x.payments ? `, ${x.payments} ${x.payments === 1 ? L('payment', 'paiement') : L('payments', 'paiements')}` : `, ${L('not paid yet', 'pas encore payé')}`}
                          </T>
                        </V>
                        <T c="font-label-md text-label-md text-on-surface">{money(x.earned)}</T>
                      </V>
                    ))}
                  </Box>
                </V>
              )}

              {p.canAddCode && (
                <V c="gap-space-xs">
                  <Title>{L('Did someone invite you?', 'Quelqu’un vous a invité ?')}</Title>
                  <Box>
                    <V c="p-space-md gap-space-sm">
                      <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Type their promo code so they get their share.', 'Tapez son code promo pour qu’il reçoive sa part.')}</T>
                      <Input c="h-12 px-4 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface" placeholder={L('Their promo code', 'Son code promo')} value={code} onChangeText={(t) => setCode(t.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12))} autoCapitalize="characters" />
                      <ErrorNote error={codeError} />
                      <Cta variant="soft" icon={null} label={L('Add the code', 'Ajouter le code')} loading={codeBusy} onPress={addCode} disabled={code.length < 4} />
                    </V>
                  </Box>
                </V>
              )}
              {!!p.invitedBy && (
                <T c="font-body-sm text-body-sm text-on-surface-variant text-center">
                  {L('You joined with the code of', 'Vous êtes inscrit avec le code de')} {p.invitedBy.name} ({p.invitedBy.code}).
                </T>
              )}
            </>
          )}
        </V>
      </Screen>
      {toast}
    </V>
  );
}

export default function Invite() {
  return <InviteBody />;
}
