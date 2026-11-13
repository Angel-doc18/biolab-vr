// Admin More: the admin's own account, the rest of the tools (website
// messages, reports on AI answers, announcements, the team, app problems) and
// signing out, laid out like the student Me page.
import { Avatar, T, V } from '../../ui/kit';
import { Screen } from '../../ui/chrome';
import { useL } from '../../i18n';
import { adminSignOut, currentAdmin } from '../../api/adminClient';
import { AdminHeader, Card, Pill, Row, Section, phoneText, useAdminLoad } from './kit';

export default function AdminMore({ navigation }) {
  const L = useL();
  const admin = currentAdmin();
  const { data: d } = useAdminLoad('/v1/admin/overview');
  const signOut = async () => {
    await adminSignOut();
    (navigation.getParent() || navigation).reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };
  return (
    <Screen header={<AdminHeader title={L('More', 'Plus')} subtitle={L('Messages, team and your account', 'Messages, équipe et votre compte')} />}>
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <Card>
          <V c="flex-row items-center gap-space-md p-space-md">
            <Avatar name={admin?.name || 'Admin'} size={56} />
            <V c="flex-1 gap-1">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
                {admin?.name || L('Admin', 'Admin')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                {phoneText(admin?.login) || admin?.login}
              </T>
              <Pill text={L('Klass8 admin', 'Admin Klass8')} tone="info" />
            </V>
          </V>
        </Card>

        <Section title={L('Tools', 'Outils')}>
          <Card>
            <Row first icon="mail" title={L('Messages from the website', 'Messages du site')} sub={L('What visitors wrote on the contact page', 'Ce que les visiteurs ont écrit')} badge={d?.newMessages || 0} onPress={() => navigation.navigate('AdminMessages')} />
            <Row icon="flag" title={L('Reports on AI answers', 'Signalements de réponses IA')} sub={L('Answers students said were wrong', 'Réponses jugées fausses par les élèves')} badge={d?.openReports || 0} onPress={() => navigation.navigate('AdminReports')} />
            <Row icon="campaign" title={L('Send an announcement', 'Envoyer une annonce')} sub={L('A message in the app for everyone', 'Un message dans l’application pour tous')} onPress={() => navigation.navigate('AdminAnnounce')} />
            <Row icon="badge" title={L('The team on the website', 'L’équipe sur le site')} sub={L('The people on the About page', 'Les personnes de la page À propos')} onPress={() => navigation.navigate('AdminTeam')} />
            <Row icon="bug_report" title={L('App problems', 'Problèmes de l’application')} sub={L('Errors reported by phones', 'Erreurs signalées par les téléphones')} onPress={() => navigation.navigate('AdminProblems')} />
          </Card>
        </Section>

        <Card>
          <Row first icon="logout" title={L('Sign out', 'Se déconnecter')} onPress={signOut} />
        </Card>
        <T c="font-body-sm text-body-sm text-on-surface-variant text-center px-space-md">
          {L('To add another admin or change an admin password, ask the person who runs the Klass8 server.', 'Pour ajouter un admin ou changer un mot de passe admin, demandez à la personne qui gère le serveur Klass8.')}
        </T>
      </V>
    </Screen>
  );
}
