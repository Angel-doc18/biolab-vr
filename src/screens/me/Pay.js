import { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, AppState, Linking, Modal, Platform } from 'react-native';
import { C, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { PLANS as LOCAL_PLANS, fcfa } from '../../data/plan';
import { NeedsInternet } from '../../ui/Offline';
import { PROVIDERS, operatorFor } from '../../lib/payments';

// Paying for the plan chosen on the platform charges screen (route.params.plan).
// With Direct Pay ('prompt') the student enters a mobile money number here and
// approves the request on the phone; otherwise ('link') Fapshi's payment page
// opens. Either way this screen waits for Fapshi to confirm.
export default function Pay({ navigation, route }) {
  const { user, refreshMe, refreshQuota } = useApp();
  const L = useL();
  const plan = route.params?.plan === 'month' ? 'month' : 'year';
  const [plans, setPlans] = useState(null);
  const [checkout, setCheckout] = useState('prompt');
  const [open, setOpen] = useState(true);
  const [provider, setProvider] = useState(() => operatorFor((user?.phone || '').replace(/^237/, '')) || 'mobile money');
  const [phone, setPhone] = useState(user?.phone ? user.phone.replace(/^237/, '') : '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [payment, setPayment] = useState(null); // { id, status, amount, link }
  const poll = useRef(null);

  const loadPlans = useCallback(() => {
    get('/v1/billing/plans', { auth: false })
      .then((r) => {
        setPlans(r.plans);
        setOpen(r.paymentsOpen);
        setCheckout(r.checkout === 'prompt' ? 'prompt' : 'link');
      })
      .catch(() => {});
  }, []);
  useFocusEffect(loadPlans);
  useEffect(() => () => clearTimeout(poll.current), []);

  const amount = (plans || LOCAL_PLANS)[plan]?.amount;
  const prov = PROVIDERS.find((p) => p.id === provider);
  const planName = plan === 'year' ? L('One year', 'Un an') : L('One month', 'Un mois');

  const check = async (id, tries = 0) => {
    try {
      const r = await get(`/v1/billing/payments/${id}`);
      setPayment((p) => ({ ...p, status: r.payment.status }));
      if (r.payment.status === 'SUCCESSFUL') {
        await refreshMe();
        refreshQuota();
        return;
      }
      if (['FAILED', 'EXPIRED', 'REVIEW'].includes(r.payment.status)) return;
    } catch (e) {
      if (e.code !== 'rate_limited' && e.code !== 'offline') {
        setPayment((p) => ({ ...p, error: e.message }));
        return;
      }
    }
    // About 4 minutes for a request on the phone, 15 on the payment page.
    if (tries < (checkout === 'link' ? 150 : 40)) poll.current = setTimeout(() => check(id, tries + 1), 6000);
    else setPayment((p) => ({ ...p, status: 'TIMEOUT' }));
  };

  // Back from Fapshi's payment page (or from approving on the phone): look at
  // once instead of waiting for the next check.
  const pendingId = payment?.status === 'PENDING' ? payment.id : null;
  const latestCheck = useRef(check);
  useEffect(() => {
    latestCheck.current = check;
  });
  useEffect(() => {
    if (!pendingId) return undefined;
    const sub = AppState.addEventListener('change', (s) => {
      if (s !== 'active') return;
      clearTimeout(poll.current);
      latestCheck.current(pendingId);
    });
    return () => sub.remove();
  }, [pendingId]);

  const openPage = (link) => Linking.openURL(link).catch(() => setError(L('The payment page could not be opened. Try again.', 'La page de paiement n’a pas pu s’ouvrir. Réessayez.')));

  const pay = async () => {
    const d = phone.replace(/\D/g, '');
    if (checkout === 'prompt') {
      if (!/^6\d{8}$/.test(d)) return setError(L('Enter your 9 digit mobile money number.', 'Entrez votre numéro mobile money (9 chiffres).'));
      const op = operatorFor(d);
      if (op && op !== provider) return setError(L('This number belongs to the other network. Choose the matching one.', 'Ce numéro appartient à l’autre réseau. Choisissez le bon.'));
    }
    setBusy(true);
    setError(null);
    try {
      const body = checkout === 'prompt' ? { plan, phone: `237${d}`, medium: provider } : { plan };
      const r = await post('/v1/billing/pay', body);
      const link = r.payment.link || null;
      setPayment({ id: r.payment.id, status: 'PENDING', amount: r.payment.amount, link });
      // A browser only opens a new tab straight from a tap, so on the web the
      // student taps "Open the payment page" in the next sheet.
      if (link && Platform.OS !== 'web') openPage(link);
      poll.current = setTimeout(() => check(r.payment.id), 8000);
    } catch (e) {
      setError(
        e.code === 'payment_timeout'
          ? L('The payment service did not answer. If a payment request appears on your phone, approve it: the course opens by itself once it is confirmed.', 'Le service de paiement n’a pas répondu. Si une demande apparaît sur votre téléphone, validez-la : le cours s’ouvrira dès sa confirmation.')
          : e
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen
        bg="bg-surface"
        keyboard
        header={<StackHeader title={L('Payment', 'Paiement')} avatar={false} />}
        footer={
          <V c="px-margin pt-space-sm gap-space-xs" style={{ paddingBottom: 12 }}>
            <NeedsInternet what={{ en: 'pay', fr: 'payer' }} />
            <ErrorNote error={error} />
            <Cta variant="dark" icon={null} label={`${L('Pay', 'Payer')} ${amount ? fcfa(amount) : ''}`} loading={busy} disabled={!open} onPress={pay} />
          </V>
        }
      >
        <V c="pb-space-xl gap-space-lg pt-space-md">
          <V c="flex-row items-center gap-space-sm p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant">
            <V c="flex-1 gap-0.5">
              <T c="font-label-md text-label-md text-on-surface-variant">{L('Your plan', 'Votre formule')}</T>
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {planName}: {amount ? fcfa(amount) : '-'}
              </T>
            </V>
            <P onPress={() => navigation.goBack()} hitSlop={8}>
              <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
                {L('Change', 'Modifier')}
              </T>
            </P>
          </V>

          {!open && <T c="font-body-sm text-body-sm text-error">{L('Mobile money payments are not open yet. A school voucher works now.', 'Les paiements mobile money ne sont pas encore ouverts. Un code d’école fonctionne déjà.')}</T>}

          {checkout === 'link' ? (
            <V c="gap-space-xs">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Pay with mobile money', 'Payer par mobile money')}
              </T>
              <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                {L('You pay on the payment page of Fapshi, Klass8’s payment service, with MTN MoMo or Orange Money. Approve the payment on your phone with your PIN; never type your PIN in this app.', 'Vous payez sur la page de paiement de Fapshi, le service de paiement de Klass8, avec MTN MoMo ou Orange Money. Validez le paiement sur votre téléphone avec votre code PIN ; ne tapez jamais votre PIN dans l’application.')}
              </T>
            </V>
          ) : (
            <>
              <V c="gap-space-sm">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Your network', 'Votre réseau')}
                </T>
                <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
                  {PROVIDERS.map((p) => {
                    const on = provider === p.id;
                    return (
                      <P key={p.id} c={`flex-1 h-14 items-center justify-center rounded-xl ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => setProvider(p.id)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: on ? '700' : '500' }}>
                          {p.name}
                        </T>
                      </P>
                    );
                  })}
                </V>
              </V>
              <V c="gap-space-sm">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Mobile money number', 'Numéro mobile money')}
                </T>
                <V c="flex-row items-center h-14 rounded-xl bg-surface-container-lowest border border-outline-variant overflow-hidden">
                  <V c="h-full px-3.5 justify-center bg-surface-container">
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                      +237
                    </T>
                  </V>
                  <Input
                    c="flex-1 h-full px-3.5 text-body-lg"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={(t) => {
                      const d = t.replace(/\D/g, '').replace(/^237/, '').slice(0, 9);
                      setPhone(d);
                      const op = operatorFor(d);
                      if (op) setProvider(op);
                    }}
                    placeholder={provider === 'orange money' ? '690 12 34 56' : '670 12 34 56'}
                    maxLength={9}
                    accessibilityLabel={L('Mobile money number', 'Numéro mobile money')}
                  />
                </V>
                <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                  {L('A payment request appears on this phone. Approve it there with your PIN; never type your PIN in this app. Payments are handled by Fapshi.', 'Une demande de paiement apparaît sur ce téléphone. Validez-la avec votre code PIN ; ne tapez jamais votre PIN dans l’application. Paiements traités par Fapshi.')}
                </T>
              </V>
            </>
          )}
        </V>
      </Screen>

      <Modal visible={!!payment} transparent animationType="slide" onRequestClose={() => (payment?.status !== 'PENDING' || payment?.link) && setPayment(null)}>
        <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="bg-surface-container-lowest rounded-t-xl p-space-lg gap-space-md">
            {payment?.status === 'SUCCESSFUL' ? (
              <>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Payment received', 'Paiement reçu')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant">{L('Klass8 is now open on your account, on any phone you log in to.', 'Klass8 est maintenant ouvert sur votre compte, sur tout téléphone où vous vous connectez.')}</T>
                <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} onPress={() => (setPayment(null), navigation.reset({ index: 0, routes: [{ name: 'Main' }] }))} />
              </>
            ) : payment?.status === 'PENDING' && payment.link ? (
              <>
                <ActivityIndicator size="large" color={C['primary-container']} />
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Pay on the Fapshi page', 'Payez sur la page Fapshi')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {L('Choose MTN MoMo or Orange Money there, enter your number and approve the request for', 'Choisissez MTN MoMo ou Orange Money, entrez votre numéro et validez la demande de')} {fcfa(payment.amount)} {L('on your phone. Then come back here: this screen updates by itself.', 'sur votre téléphone. Revenez ensuite ici : cet écran se met à jour seul.')}
                </T>
                <Cta variant="dark" icon={null} label={L('Open the payment page', 'Ouvrir la page de paiement')} onPress={() => openPage(payment.link)} />
                <Cta variant="soft" icon={null} label={L('Close: the course opens by itself once paid', 'Fermer : le cours s’ouvre seul une fois payé')} onPress={() => (clearTimeout(poll.current), setPayment(null))} />
              </>
            ) : payment?.status === 'PENDING' ? (
              <>
                <ActivityIndicator size="large" color={C['primary-container']} />
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Approve the payment on your phone', 'Validez le paiement sur votre téléphone')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {L('A request for', 'Une demande de')} {fcfa(payment.amount)} {L('was sent to', 'a été envoyée au')} +237 {phone}. {L('If it does not appear, dial', 'Si elle n’apparaît pas, composez le')} {prov.ussd} {L('to see pending approvals. This screen updates by itself.', 'pour voir les validations en attente. Cet écran se met à jour seul.')}
                </T>
              </>
            ) : (
              <>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {payment?.status === 'REVIEW' ? L('Payment under review', 'Paiement en vérification') : payment?.status === 'TIMEOUT' ? L('Still waiting for confirmation', 'Toujours en attente de confirmation') : L('Payment not completed', 'Paiement non abouti')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {payment?.error ||
                    (payment?.status === 'TIMEOUT'
                      ? L('If you approved it, the course opens by itself once the confirmation arrives.', 'Si vous l’avez validé, le cours s’ouvrira dès réception de la confirmation.')
                      : payment?.status === 'REVIEW'
                      ? L('The amount received did not match. Contact support with your payment reference.', 'Le montant reçu ne correspond pas. Contactez le support avec votre référence.')
                      : L('It was declined or expired, and no money was taken. You can try again.', 'Il a été refusé ou a expiré, et aucun argent n’a été pris. Vous pouvez réessayer.'))}
                </T>
                <Cta variant="soft" icon={null} label={L('Close', 'Fermer')} onPress={() => setPayment(null)} />
              </>
            )}
          </V>
        </V>
      </Modal>
    </V>
  );
}
