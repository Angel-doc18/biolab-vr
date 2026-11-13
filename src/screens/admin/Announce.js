// Send an announcement: a message that appears in the Notifications page of
// everyone, or of every student, parent or teacher. Shown as they will see it
// before it goes, and confirmed once more, since it cannot be called back.
import { useState } from 'react';
import { Ic, Input, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Field, Label } from '../../ui/form';
import { useL } from '../../i18n';
import { post } from '../../api/adminClient';
import { Card, Chips, Sheet } from './kit';

const BODY_MAX = 500;

export default function AdminAnnounce({ navigation }) {
  const L = useL();
  const [audience, setAudience] = useState('everyone');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, showToast] = useToast();

  const who = {
    everyone: L('everyone on Klass8', 'tout le monde sur Klass8'),
    student: L('every student', 'chaque élève'),
    parent: L('every parent', 'chaque parent'),
    teacher: L('every teacher', 'chaque enseignant'),
  }[audience];

  const check = () => {
    setError(null);
    if (title.trim().length < 3) return setError(L('Write a short title.', 'Écrivez un titre court.'));
    if (body.trim().length < 3) return setError(L('Write the message.', 'Écrivez le message.'));
    setConfirm(true);
  };
  const send = async () => {
    setSending(true);
    setError(null);
    try {
      const r = await post('/v1/admin/announce', { audience, title: title.trim(), body: body.trim() });
      setConfirm(false);
      showToast(`${L('Sent to', 'Envoyé à')} ${r.sent} ${r.sent === 1 ? L('person', 'personne') : L('people', 'personnes')}`);
      setTitle('');
      setBody('');
      setTimeout(() => navigation.goBack(), 1200);
    } catch (e) {
      setError(e);
    } finally {
      setSending(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Send an announcement', 'Envoyer une annonce')} avatar={false} />} keyboard>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('It appears in the Notifications page of each person you choose, the next time they open Klass8.', 'Elle apparaît dans la page Notifications de chaque personne choisie, à sa prochaine ouverture de Klass8.')}
          </T>
          <V c="gap-1.5">
            <Label>{L('Who it is for', 'Pour qui')}</Label>
            <Chips
              value={audience}
              onChange={setAudience}
              items={[
                ['everyone', L('Everyone', 'Tout le monde')],
                ['student', L('Students', 'Élèves')],
                ['parent', L('Parents', 'Parents')],
                ['teacher', L('Teachers', 'Enseignants')],
              ]}
            />
          </V>
          <Field label={L('Title', 'Titre')} value={title} onChangeText={setTitle} maxLength={120} placeholder={L('e.g. Mock exams start on Monday', 'ex. Les examens blancs commencent lundi')} />
          <V c="gap-1.5">
            <Label right={<T c="font-label-sm text-label-sm text-outline">{`${body.length}/${BODY_MAX}`}</T>}>{L('Message', 'Message')}</Label>
            <Input
              c="min-h-[140px] px-4 py-3 rounded-xl bg-surface-container-low shadow-sm text-body-md font-body-md text-on-surface"
              value={body}
              onChangeText={setBody}
              maxLength={BODY_MAX}
              multiline
              textAlignVertical="top"
              placeholder={L('Say it in a few plain sentences.', 'Dites-le en quelques phrases simples.')}
            />
          </V>

          {(!!title.trim() || !!body.trim()) && (
            <V c="gap-1.5">
              <Label>{L('How it will look', 'Aperçu')}</Label>
              <Card>
                <V c="flex-row gap-space-sm p-space-md">
                  <V c="w-10 h-10 rounded-full bg-surface-container items-center justify-center">
                    <Ic n="campaign" s={21} c="primary-container" />
                  </V>
                  <V c="flex-1 gap-0.5 min-w-0">
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                      {title.trim() || L('Title', 'Titre')}
                    </T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                      {body.trim()}
                    </T>
                  </V>
                </V>
              </Card>
            </V>
          )}

          <ErrorNote error={confirm ? null : error} />
          <Cta variant="dark" icon={null} lead="send" label={L('Send', 'Envoyer')} onPress={check} />
        </V>
      </Screen>
      <Sheet
        visible={confirm}
        onClose={() => !sending && setConfirm(false)}
        icon="campaign"
        busy={sending}
        cancel={L('Not yet', 'Pas encore')}
        title={`${L('Send to', 'Envoyer à')} ${who}?`}
        text={L('Once sent, it cannot be called back.', 'Une fois envoyée, elle ne peut pas être retirée.')}
        action={L('Send now', 'Envoyer maintenant')}
        onAction={send}
      >
        <ErrorNote error={confirm ? error : null} />
      </Sheet>
      {toast}
    </V>
  );
}
