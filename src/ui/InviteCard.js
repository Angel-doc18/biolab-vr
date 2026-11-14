// "Invite and earn", where everyone sees it: on Home for students, parents
// and teachers, and on Me. Shows the person's promo code and their share; a
// tap opens the Invite page, the button shares the code at once.
import { useCallback, useState } from 'react';
import { Share } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ic, P, T, V } from './kit';
import { useL } from '../i18n';
import { get } from '../api/client';

// The last answer is kept while the app is open, so Home does not ask each time.
let cached = null;
let cachedAt = 0;
export async function loadPartner(force = false) {
  if (!force && cached && Date.now() - cachedAt < 5 * 60_000) return cached;
  cached = await get('/v1/partner');
  cachedAt = Date.now();
  return cached;
}
export const forgetPartner = () => {
  cached = null;
};

export function shareMessage(code, link, L) {
  return L(
    `Join me on Klass8, the study app for the Cameroon syllabus, Form 1 to Upper Sixth. Use my promo code ${code} when you create your account: ${link}`,
    `Rejoins-moi sur Klass8, l’application de révision du programme camerounais, de la Form 1 à l’Upper Sixth. Utilise mon code promo ${code} en créant ton compte : ${link}`
  );
}

export default function InviteCard({ navigation, compact = false }) {
  const L = useL();
  const [p, setP] = useState(cached);
  useFocusEffect(
    useCallback(() => {
      let live = true;
      loadPartner()
        .then((r) => live && setP(r))
        .catch(() => {});
      return () => {
        live = false;
      };
    }, [])
  );
  if (p && !p.programme?.on) return null;
  const rate = p?.programme?.rate;
  const share = () => p && Share.share({ message: shareMessage(p.code, p.link, L) }).catch(() => {});
  const open = () => navigation.navigate('Invite');
  // The card and the Share button are side by side, not one inside the other.
  return (
    <V c="rounded-xl overflow-hidden" style={{ backgroundColor: '#02287b' }}>
      <V c="p-space-md gap-space-sm">
        <P c="flex-row items-center gap-space-sm" onPress={open} scale={0.99} accessibilityRole="button" accessibilityLabel={L('Invite and earn', 'Inviter et gagner')}>
          <V c="w-11 h-11 rounded-full items-center justify-center" style={{ backgroundColor: '#FBAC02' }}>
            <Ic n="redeem" s={22} c="primary" fill />
          </V>
          <V c="flex-1 gap-0.5">
            <T c="font-headline-sm text-headline-sm" style={{ color: '#fff', fontWeight: '800' }}>
              {rate != null ? `${L('Invite friends, earn', 'Invitez, gagnez')} ${rate}%` : L('Invite friends and earn', 'Invitez et gagnez')}
            </T>
            {!compact && (
              <T c="font-body-sm text-body-sm" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 18 }}>
                {L('Each time someone who joined with your code pays, you earn money you can withdraw to mobile money.', 'Chaque fois qu’une personne inscrite avec votre code paie, vous gagnez de l’argent à retirer par mobile money.')}
              </T>
            )}
          </V>
          <Ic n="chevron_right" s={22} c="on-primary" />
        </P>
        <V c="flex-row items-center gap-2">
          <P c="flex-1 h-11 rounded-lg items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.12)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)', borderStyle: 'dashed' }} onPress={open} accessibilityLabel={L('Open Invite and earn', 'Ouvrir Inviter et gagner')}>
            <T c="font-headline-sm text-headline-sm" style={{ color: '#fff', fontWeight: '800', letterSpacing: 2 }}>
              {p?.code || '······'}
            </T>
          </P>
          <P c="h-11 px-4 rounded-lg flex-row items-center gap-1.5" style={{ backgroundColor: '#FBAC02' }} onPress={share} disabled={!p} accessibilityLabel={L('Share my code', 'Partager mon code')}>
            <Ic n="share" s={18} c="primary" />
            <T c="font-label-lg text-label-lg text-primary" style={{ fontWeight: '800' }}>
              {L('Share', 'Partager')}
            </T>
          </P>
        </V>
        {!!p && (p.balance.available > 0 || p.stats.signups > 0) && (
          <T c="font-label-md text-label-md" style={{ color: 'rgba(255,255,255,0.9)' }} onPress={open}>
            {p.stats.signups} {p.stats.signups === 1 ? L('person joined', 'personne inscrite') : L('people joined', 'personnes inscrites')}, {p.balance.available.toLocaleString('en-US')} FCFA {L('to withdraw', 'à retirer')}
          </T>
        )}
      </V>
    </V>
  );
}
