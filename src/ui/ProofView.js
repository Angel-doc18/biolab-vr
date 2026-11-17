// The screenshot of a withdrawal's payment, shown full screen. It is loaded only
// when opened: by the partner it was paid to, or by an admin.
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Modal, useWindowDimensions } from 'react-native';
import { Ic, P, T, V } from './kit';
import { useL } from '../i18n';
import { get } from '../api/client';
import { get as adminGet } from '../api/adminClient';

export default function ProofView({ path, admin = false, onClose }) {
  const L = useL();
  const { width, height } = useWindowDimensions();
  const [img, setImg] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let live = true;
    (admin ? adminGet : get)(path).then(
      (r) => live && setImg(`data:${r.mediaType};base64,${r.base64}`),
      (e) => live && setError(e?.message || 'The screenshot could not be loaded.')
    );
    return () => {
      live = false;
    };
  }, [path, admin]);
  return (
    <Modal visible transparent animationType="fade" onRequestClose={onClose}>
      <V style={{ flex: 1, backgroundColor: '#0a1120' }}>
        <V c="flex-row items-center px-space-md pt-space-xl pb-space-sm gap-space-sm">
          <T c="flex-1 font-label-lg text-label-lg" style={{ color: '#ffffff', fontWeight: '700' }}>
            {L('Payment screenshot', 'Capture du paiement')}
          </T>
          <P c="w-11 h-11 rounded-full items-center justify-center" style={{ backgroundColor: '#ffffff' }} onPress={onClose} accessibilityRole="button" accessibilityLabel={L('Close', 'Fermer')}>
            <Ic n="close" s={22} c="on-surface" />
          </P>
        </V>
        {img ? (
          <Image source={{ uri: img }} style={{ width, height: height - 140 }} resizeMode="contain" accessibilityLabel={L('Screenshot of the mobile money payment', 'Capture du paiement mobile money')} />
        ) : error ? (
          <T c="font-body-md text-body-md px-space-md" style={{ color: '#ffffff' }}>
            {error}
          </T>
        ) : (
          <ActivityIndicator color="#ffffff" style={{ marginTop: height / 3 }} />
        )}
      </V>
    </Modal>
  );
}
