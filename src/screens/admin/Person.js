// One person, for an admin: who they are, their access (with days to give or
// take back), their payments, and the two big actions: block and delete.
import { useState } from 'react';
import { Avatar, Input, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import { fcfa } from '../../data/plan';
import { del, post } from '../../api/adminClient';
import { Card, Loading, Pill, Row, Section, Sheet, ago, date, phoneText, roleName, useAdminLoad } from './kit';
import { accessLine, personStatus } from './People';
import { PAY_STATUS, planName } from './Home';

function Give({ label, onPress, busy, soft }) {
  return (
    <P c={`flex-1 h-12 rounded-xl items-center justify-center ${soft ? 'bg-surface-container-low' : 'bg-primary'}`} onPress={onPress} disabled={busy}>
      <T c={`font-label-lg text-label-lg ${soft ? 'text-on-surface' : 'text-on-primary'}`} style={{ fontWeight: '700' }}>
        {label}
      </T>
    </P>
  );
}

export default function AdminPerson({ navigation, route }) {
  const { id } = route.params;
  const L = useL();
  const { data, error, busy, reload, setData } = useAdminLoad(`/v1/admin/users/${id}`);
  const [toast, showToast] = useToast();
  const [note, setNote] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [sheet, setSheet] = useState(null); // 'block', 'unblock' or 'delete'
  const [acting, setActing] = useState(false);
  const [actError, setActError] = useState(null);
  const [reason, setReason] = useState('');
  const u = data?.user;
  const name = u?.name || route.params.name || '';

  const give = async (days) => {
    setSaving(true);
    setSaveError(null);
    try {
      const r = await post(`/v1/admin/users/${id}/days`, { days, note: note.trim() || undefined });
      setData((d) => ({ ...d, user: r.user }));
      setNote('');
      showToast(days > 0 ? `${days} ${L('days given to', 'jours donnés à')} ${name}` : `${-days} ${L('days taken back from', 'jours retirés à')} ${name}`);
      reload();
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
      if (sheet === 'delete') {
        await del(`/v1/admin/users/${id}`, { confirm: true });
        setSheet(null);
        navigation.goBack();
        return;
      }
      if (sheet === 'block' && reason.trim().length < 5) {
        setActError(L('Write the reason. The person sees it when they try to sign in.', 'Écrivez la raison. La personne la verra en essayant de se connecter.'));
        return;
      }
      const r = await post(`/v1/admin/users/${id}/block`, sheet === 'block' ? { blocked: true, reason: reason.trim() } : { blocked: false });
      setReason('');
      setData((d) => ({ ...d, user: r.user }));
      showToast(sheet === 'block' ? L(`${name} is blocked`, `Compte de ${name} bloqué`) : L(`${name} can sign in again`, `Compte de ${name} débloqué`));
      setSheet(null);
    } catch (e) {
      setActError(e);
    } finally {
      setActing(false);
    }
  };

  const status = u ? personStatus(u, L) : null;
  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={name} subtitle={u ? roleName(u.role, L) : ''} avatar={false} />} keyboard>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <ErrorNote error={error} />
          {busy && !u && <Loading />}
          {!!u && (
            <>
              <Card>
                <V c="items-center gap-space-xs px-space-md pt-space-lg pb-space-md">
                  <Avatar name={u.name} size={72} />
                  <T c="font-headline-md text-headline-md text-on-surface text-center" style={{ fontWeight: '700' }}>
                    {u.name}
                  </T>
                  <V c="flex-row gap-2">
                    <Pill text={roleName(u.role, L)} tone="info" />
                    {status[0] !== roleName(u.role, L) && <Pill text={status[0]} tone={status[1]} />}
                  </V>
                </V>
                {u.blocked && !!u.blockedReason && <Row icon="block" iconBg="#fdecea" iconTint="error" title={u.blockedReason} sub={L('Why the account is blocked (the person sees this)', 'Pourquoi le compte est bloqué (la personne le voit)')} />}
                {!!u.phone && <Row icon="call" title={phoneText(u.phone)} sub={L('Phone number', 'Numéro de téléphone')} />}
                {!!u.email && <Row icon="alternate_email" title={u.email} sub={L('Email', 'E-mail')} />}
                {!!(u.className || u.schoolName) && <Row icon="school" title={[u.className, u.schoolName].filter(Boolean).join(', ')} sub={L('Class and school', 'Classe et école')} />}
                <Row icon="event" title={date(u.createdAt)} sub={L('Joined Klass8', 'Inscrit sur Klass8')} />
                {u.role === 'student' && <Row icon="schedule" title={ago(u.lastActive, L)} sub={L('Last used the app', 'Dernière utilisation')} />}
                {data.linked.length > 0 && <Row icon="group" title={data.linked.map((x) => x.name).join(', ')} sub={u.role === 'parent' ? L('Their children', 'Ses enfants') : L('Their parents', 'Ses parents')} />}
                {data.classes > 0 && <Row icon="groups" title={`${data.classes}`} sub={u.role === 'teacher' ? L('Classes they teach', 'Classes enseignées') : L('Classes joined', 'Classes rejointes')} />}
              </Card>

              {u.role === 'student' && (
                <Section title={L('Access to Klass8', 'Accès à Klass8')}>
                  <Card>
                    <V c="p-space-md gap-space-sm">
                      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                        {accessLine(u, L)}
                      </T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Give days for charges paid another way (cash, a bank transfer), or take back days given by mistake.', 'Donnez des jours pour des frais payés autrement (espèces, virement), ou retirez des jours donnés par erreur.')}</T>
                      <Input
                        c="h-12 px-4 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface"
                        placeholder={L('Why (optional), e.g. paid 350 FCFA in cash', 'Pourquoi (facultatif), ex. 350 FCFA payés en espèces')}
                        value={note}
                        onChangeText={setNote}
                        maxLength={200}
                      />
                      <V c="flex-row gap-2">
                        <Give label={L('+ 1 week', '+ 1 semaine')} onPress={() => give(7)} busy={saving} />
                        <Give label={L('+ 1 month', '+ 1 mois')} onPress={() => give(30)} busy={saving} />
                        <Give label={L('+ 1 year', '+ 1 an')} onPress={() => give(365)} busy={saving} />
                      </V>
                      <Give soft label={L('Take back 1 month', 'Retirer 1 mois')} onPress={() => give(-30)} busy={saving} />
                      <ErrorNote error={saveError} />
                    </V>
                  </Card>
                </Section>
              )}

              <Section title={L('Invite and earn', 'Inviter et gagner')}>
                <Card>
                  <Row
                    first
                    icon="redeem"
                    iconBg="#fff3d6"
                    iconTint="tertiary"
                    title={data.partner?.code ? `${L('Promo code', 'Code promo')} ${data.partner.code}` : L('No promo code yet', 'Pas encore de code promo')}
                    sub={`${data.partner?.invited || 0} ${L('people joined with it', 'personnes inscrites avec')}`}
                    onPress={data.partner?.code ? () => navigation.navigate('AdminPartner', { id: u.id, name: u.name }) : undefined}
                  />
                  {!!data.partner?.invitedBy && (
                    <Row
                      icon="person_add"
                      title={`${L('Joined with', 'Inscrit avec le code de')} ${data.partner.invitedBy.name || L('a deleted account', 'un compte supprimé')}`}
                      sub={`${data.partner.invitedBy.code}, ${date(data.partner.invitedBy.at)}`}
                      onPress={data.partner.invitedBy.id ? () => navigation.push('AdminPerson', { id: data.partner.invitedBy.id, name: data.partner.invitedBy.name }) : undefined}
                    />
                  )}
                </Card>
              </Section>

              {data.payments.length > 0 && (
                <Section title={L('Payments', 'Paiements')}>
                  <Card>
                    {data.payments.map((p, i) => {
                      const st = PAY_STATUS[p.status] || [p.status, p.status, 'muted'];
                      return <Row key={p.id} first={i === 0} icon="payments" title={`${planName(p.plan, L)}, ${fcfa(p.amount)}`} sub={date(p.createdAt)} right={<Pill text={L(st[0], st[1])} tone={st[2]} />} />;
                    })}
                  </Card>
                </Section>
              )}

              {data.grants.length > 0 && (
                <Section title={L('Days given by an admin', 'Jours donnés par un admin')}>
                  <Card>
                    {data.grants.map((g, i) => (
                      <Row key={`${g.createdAt}-${i}`} first={i === 0} icon={g.days > 0 ? 'add_circle' : 'remove_circle'} title={`${g.days > 0 ? '+' : ''}${g.days} ${L('days', 'jours')}`} sub={[date(g.createdAt), g.note].filter(Boolean).join(', ')} />
                    ))}
                  </Card>
                </Section>
              )}

              <Section title={L('Account', 'Compte')}>
                <Card>
                  {u.blocked ? (
                    <Row first icon="lock_open" title={L('Unblock this account', 'Débloquer ce compte')} sub={L('They can sign in and use Klass8 again.', 'La personne pourra se reconnecter et utiliser Klass8.')} onPress={() => (setActError(null), setSheet('unblock'))} />
                  ) : (
                    <Row first icon="block" iconBg="#fff3d6" iconTint="tertiary" title={L('Block this account', 'Bloquer ce compte')} sub={L('They are signed out and cannot sign in until you unblock them.', 'La personne est déconnectée et ne peut plus se connecter jusqu’au déblocage.')} onPress={() => (setActError(null), setSheet('block'))} />
                  )}
                  <Row danger icon="delete_forever" title={L('Delete this account', 'Supprimer ce compte')} sub={L('Removes the account and everything in it, for ever.', 'Supprime le compte et tout son contenu, pour toujours.')} onPress={() => (setActError(null), setSheet('delete'))} />
                </Card>
              </Section>
            </>
          )}
        </V>
      </Screen>
      <Sheet
        visible={!!sheet}
        onClose={() => !acting && setSheet(null)}
        icon={sheet === 'delete' ? 'delete_forever' : sheet === 'block' ? 'block' : 'lock_open'}
        danger={sheet === 'delete'}
        busy={acting}
        cancel={L('Cancel', 'Annuler')}
        title={
          sheet === 'delete' ? `${L('Delete', 'Supprimer')} ${name}?` : sheet === 'block' ? `${L('Block', 'Bloquer')} ${name}?` : `${L('Unblock', 'Débloquer')} ${name}?`
        }
        text={
          sheet === 'delete'
            ? L(
                'The account is removed from Klass8 with everything in it: progress, pictures, messages, classes and links to parents. Payments stay in the records for the accounts, without their name or number. This cannot be undone.',
                'Le compte est retiré de Klass8 avec tout son contenu : progrès, photos, messages, classes et liens avec les parents. Les paiements restent dans les registres, sans nom ni numéro. Impossible d’annuler.'
              )
            : sheet === 'block'
              ? L('They are signed out on every phone at once and cannot sign in until you unblock the account. Nothing is deleted.', 'La personne est déconnectée sur tous ses téléphones et ne peut plus se connecter jusqu’au déblocage. Rien n’est supprimé.')
              : L('They can sign in again with their usual password.', 'La personne pourra se reconnecter avec son mot de passe habituel.')
        }
        action={sheet === 'delete' ? L('Delete for ever', 'Supprimer pour toujours') : sheet === 'block' ? L('Block the account', 'Bloquer le compte') : L('Unblock the account', 'Débloquer le compte')}
        onAction={act}
      >
        {sheet === 'block' && (
          <V c="gap-1.5">
            <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
              {L('Reason (the person sees it)', 'Raison (la personne la voit)')}
            </T>
            <Input
              c="min-h-[84px] px-4 py-3 rounded-xl bg-surface-container-low text-body-md font-body-md text-on-surface"
              placeholder={L('e.g. Sharing answers during the mock exam.', 'ex. Partage de réponses pendant l’examen blanc.')}
              value={reason}
              onChangeText={setReason}
              maxLength={200}
              multiline
              textAlignVertical="top"
            />
          </V>
        )}
        <ErrorNote error={actError} />
      </Sheet>
      {toast}
    </V>
  );
}
