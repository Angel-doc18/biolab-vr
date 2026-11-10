import { useState } from 'react';
import { Cta } from './chrome';
import { Ic, P, T, V } from './kit';
import { useL } from '../i18n';
import { PLANS, fcfa } from '../data/plan';

// The platform charges in plain sight for students, on Home and Me: the price
// and a Pay button, so nobody has to look for where to pay. Shown only while
// the charges are on (the server sends trialUntil only then); admins, parents
// and teachers never pay.
const STORE_BUILD = process.env.EXPO_PUBLIC_STORE === 'play';
const longDate = (t) => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const daysBetween = (from, to) => Math.ceil((to - from) / 86_400_000);

export default function ChargesCard({ user, onPress }) {
  const L = useL();
  // Read the clock once when the card appears; the screen re-mounts it when opened again.
  const [now] = useState(() => Date.now());
  if (!user || user.role !== 'student' || user.isAdmin || user.trialUntil == null) return null;
  const paidUntil = user.proUntil && user.proUntil > now ? user.proUntil : null;

  if (paidUntil) {
    return (
      <P
        c="p-space-md rounded-xl bg-surface-container-low border border-outline-variant flex-row items-center gap-space-sm"
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={L('Platform charges', 'Frais de plateforme')}
      >
        <Ic n="verified" s={22} c="primary-container" fill />
        <V c="flex-1 gap-0.5">
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
            {L('Paid until', 'Payé jusqu’au')} {longDate(paidUntil)}
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Pay again at any time to add days.', 'Payez à nouveau quand vous voulez pour ajouter des jours.')}</T>
        </V>
        <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
          {STORE_BUILD ? L('Voucher', 'Code') : L('Add time', 'Prolonger')}
        </T>
      </P>
    );
  }

  const left = user.trialUntil > now ? daysBetween(now, user.trialUntil) : 0;
  const title =
    left > 1
      ? `${L('Free month', 'Mois gratuit')}: ${left} ${L('days left', 'jours restants')}`
      : left === 1
      ? L('Your free month ends tomorrow', 'Votre mois gratuit se termine demain')
      : L('Your free month has ended', 'Votre mois gratuit est terminé');
  const body = STORE_BUILD
    ? L('Ask your school for a voucher to keep every subject, lesson and paper open.', 'Demandez un code à votre école pour garder toutes les matières, leçons et épreuves ouvertes.')
    : `${L('Pay', 'Payez')} ${fcfa(PLANS.month.amount)} ${L('a month or', 'par mois ou')} ${fcfa(PLANS.year.amount)} ${L('a year with MTN MoMo or Orange Money to keep every subject, lesson and paper open.', 'par an avec MTN MoMo ou Orange Money pour garder toutes les matières, leçons et épreuves ouvertes.')}`;

  return (
    <V c="bg-primary-container rounded-xl p-space-md gap-space-sm">
      <V c="flex-row items-center gap-space-sm">
        <Ic n="payments" s={22} c="on-primary" />
        <T c="font-headline-sm text-headline-sm text-on-primary flex-1" style={{ fontWeight: '700' }}>
          {title}
        </T>
      </V>
      <T c="font-body-md text-body-md text-on-primary" style={{ opacity: 0.9, lineHeight: 22 }}>
        {body}
      </T>
      <Cta variant="white" h="h-12" label={STORE_BUILD ? L('Enter a voucher', 'Entrer un code') : L('Pay now', 'Payer maintenant')} onPress={onPress} />
    </V>
  );
}
