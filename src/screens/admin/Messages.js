// Messages visitors sent from the website's contact page. New ones first; an
// admin marks each as answered once they have replied, or deletes it.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ic, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import { del, post } from '../../api/adminClient';
import { Card, Chips, Empty, Loading, Pill, Sheet, date, useAdminLoad } from './kit';

const TOPIC = {
  app: ['The app', 'L’application'],
  payment: ['A payment', 'Un paiement'],
  school: ['A school', 'Une école'],
  account: ['An account', 'Un compte'],
  other: ['Something else', 'Autre chose'],
};

function Action({ icon, label, onPress, danger, busy }) {
  return (
    <P c={`flex-1 h-10 rounded-xl flex-row items-center justify-center gap-1.5 ${danger ? '' : 'bg-surface-container-low'}`} style={danger ? { backgroundColor: '#fdecea' } : null} onPress={onPress} disabled={busy}>
      <Ic n={icon} s={18} c={danger ? 'error' : 'primary-container'} />
      <T c={`font-label-md text-label-md ${danger ? 'text-error' : 'text-primary-container'}`} style={{ fontWeight: '700' }}>
        {label}
      </T>
    </P>
  );
}

export default function AdminMessages() {
  const L = useL();
  const { data, error, busy, reload, setData } = useAdminLoad('/v1/admin/contact-messages');
  const [show, setShow] = useState('new');
  const [working, setWorking] = useState(null);
  const [actError, setActError] = useState(null);
  const [removing, setRemoving] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, showToast] = useToast();

  const items = (data?.items || []).filter((m) => (show === 'new' ? !m.doneAt : show === 'done' ? !!m.doneAt : true));
  const newCount = (data?.items || []).filter((m) => !m.doneAt).length;

  const mark = async (m, done) => {
    setWorking(m.id);
    setActError(null);
    try {
      await post(`/v1/admin/contact-messages/${m.id}/done`, { done });
      setData((d) => ({ ...d, items: d.items.map((x) => (x.id === m.id ? { ...x, doneAt: done ? Date.now() : null } : x)) }));
      showToast(done ? L('Marked as answered', 'Marqué comme répondu') : L('Marked as new', 'Marqué comme nouveau'));
    } catch (e) {
      setActError(e);
    } finally {
      setWorking(null);
    }
  };
  const remove = async () => {
    setWorking(removing.id);
    setActError(null);
    try {
      await del(`/v1/admin/contact-messages/${removing.id}`);
      setData((d) => ({ ...d, items: d.items.filter((x) => x.id !== removing.id) }));
      setRemoving(null);
      showToast(L('Message deleted', 'Message supprimé'));
    } catch (e) {
      setActError(e);
    } finally {
      setWorking(null);
    }
  };
  const copy = async (text) => {
    try {
      await Clipboard.setStringAsync(text);
      showToast(L('Copied', 'Copié'));
    } catch {
      // the contact can be selected on screen
    }
  };

  return (
    <V c="flex-1">
      <Screen
        header={<StackHeader title={L('Messages from the website', 'Messages du site')} avatar={false} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await reload(), setRefreshing(false))} />}
      >
        <V c="gap-space-md pt-space-md pb-space-xl">
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Reply to each person by phone, WhatsApp or email, then mark the message as answered.', 'Répondez à chaque personne par téléphone, WhatsApp ou e-mail, puis marquez le message comme répondu.')}
          </T>
          <Chips
            value={show}
            onChange={setShow}
            items={[
              ['new', `${L('New', 'Nouveaux')}${newCount ? ` (${newCount})` : ''}`],
              ['done', L('Answered', 'Répondus')],
              ['all', L('All', 'Tous')],
            ]}
          />
          <ErrorNote error={error || (!removing ? actError : null)} />
          {busy && !data && <Loading />}
          {!!data && !items.length && (
            <Card>
              <Empty icon="mark_email_read" text={show === 'new' ? L('No new messages. You are up to date.', 'Aucun nouveau message. Tout est à jour.') : L('No messages here.', 'Aucun message ici.')} />
            </Card>
          )}
          {items.map((m) => {
            const topic = TOPIC[m.topic] || TOPIC.other;
            return (
              <Card key={m.id}>
                <V c="p-space-md gap-space-sm">
                  <V c="flex-row items-start gap-space-sm">
                    <V c="flex-1 gap-0.5 min-w-0">
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
                        {m.name}
                      </T>
                      <T c="font-label-sm text-label-sm text-outline">
                        {L(topic[0], topic[1])}, {date(m.createdAt)}
                      </T>
                    </V>
                    <Pill text={m.doneAt ? L('Answered', 'Répondu') : L('New', 'Nouveau')} tone={m.doneAt ? 'ok' : 'warn'} />
                  </V>
                  <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }} selectable>
                    {m.message}
                  </T>
                  <P c="flex-row items-center gap-2 p-space-sm rounded-xl bg-surface-container-low" onPress={() => copy(m.contact)} accessibilityLabel={`${L('Copy', 'Copier')} ${m.contact}`}>
                    <Ic n="contact_phone" s={18} c="primary-container" />
                    <T c="font-body-md text-body-md text-on-surface flex-1" selectable numberOfLines={1}>
                      {m.contact}
                    </T>
                    <Ic n="content_copy" s={16} c="outline" />
                  </P>
                  <V c="flex-row gap-2">
                    {m.doneAt ? (
                      <Action icon="mark_email_unread" label={L('Mark as new', 'Marquer nouveau')} onPress={() => mark(m, false)} busy={working === m.id} />
                    ) : (
                      <Action icon="done" label={L('Mark as answered', 'Marquer répondu')} onPress={() => mark(m, true)} busy={working === m.id} />
                    )}
                    <Action danger icon="delete" label={L('Delete', 'Supprimer')} onPress={() => (setActError(null), setRemoving(m))} busy={working === m.id} />
                  </V>
                </V>
              </Card>
            );
          })}
        </V>
      </Screen>
      <Sheet
        visible={!!removing}
        onClose={() => !working && setRemoving(null)}
        icon="delete"
        danger
        busy={!!working}
        cancel={L('Cancel', 'Annuler')}
        title={L('Delete this message?', 'Supprimer ce message ?')}
        text={removing ? `${L('The message from', 'Le message de')} ${removing.name} ${L('is removed for good.', 'est supprimé définitivement.')}` : ''}
        action={L('Delete the message', 'Supprimer le message')}
        onAction={remove}
      >
        <ErrorNote error={removing ? actError : null} />
      </Sheet>
      {toast}
    </V>
  );
}
