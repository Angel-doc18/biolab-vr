// "Join our community": the Klass8 social media pages, set by the founder or
// the CTO, as buttons in every account's Me page. Nothing shows until at least
// one link is set.
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { Ic, P, T, V } from './kit';
import { useL } from '../i18n';
import { get } from '../api/client';

// Name, colour and a plain icon for each platform (no brand logos needed).
export const PLATFORM_LOOK = {
  whatsapp: { name: 'WhatsApp', color: '#25D366', icon: 'chat' },
  facebook: { name: 'Facebook', color: '#1877F2', icon: 'groups' },
  tiktok: { name: 'TikTok', color: '#111111', icon: 'music_note' },
  instagram: { name: 'Instagram', color: '#E1306C', icon: 'photo_camera' },
  youtube: { name: 'YouTube', color: '#FF0000', icon: 'smart_display' },
  x: { name: 'X', color: '#111111', icon: 'tag' },
  telegram: { name: 'Telegram', color: '#229ED9', icon: 'send' },
  linkedin: { name: 'LinkedIn', color: '#0A66C2', icon: 'work' },
};
export const PLATFORMS = Object.keys(PLATFORM_LOOK);

let lastLinks = null;

export default function CommunityLinks() {
  const L = useL();
  const [links, setLinks] = useState(lastLinks || []);
  useEffect(() => {
    let live = true;
    get('/v1/community', { auth: false })
      .then((r) => {
        lastLinks = Array.isArray(r?.links) ? r.links : [];
        if (live) setLinks(lastLinks);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  const shown = links.filter((l) => PLATFORM_LOOK[l.kind]);
  if (!shown.length) return null;
  return (
    <V c="gap-space-xs">
      <V c="gap-0.5">
        <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
          {L('Join our community', 'Rejoignez notre communauté')}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant">{L('News, tips and other students, on your favourite app.', 'Actualités, conseils et autres élèves, sur votre application préférée.')}</T>
      </V>
      <V c="flex-row flex-wrap justify-between gap-y-space-xs">
        {shown.map((l) => {
          const look = PLATFORM_LOOK[l.kind];
          return (
            <P
              key={l.kind}
              c="w-[48.5%] h-14 px-space-sm rounded-2xl bg-surface-container-lowest border border-surface-container flex-row items-center gap-space-sm"
              onPress={() => Linking.openURL(l.url).catch(() => {})}
              accessibilityRole="link"
              accessibilityLabel={`${L('Open Klass8 on', 'Ouvrir Klass8 sur')} ${look.name}`}
            >
              <V c="w-9 h-9 rounded-xl items-center justify-center" style={{ backgroundColor: look.color }}>
                <Ic n={look.icon} s={20} c="#ffffff" fill />
              </V>
              <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '700' }} numberOfLines={1}>
                {look.name}
              </T>
              <Ic n="open_in_new" s={16} c="outline" />
            </P>
          );
        })}
      </V>
    </V>
  );
}
