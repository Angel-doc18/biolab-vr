// Admin More: the admin's own account (tap to change it), their notices, the
// rest of the tools (partners, website messages, reports on AI answers,
// announcements, the team, and Schools for the CTO, whose tab is System) and
// signing out, laid out like the student Me page.
import { T, V, Avatar } from '../../ui/kit';
import { Screen } from '../../ui/chrome';
import { useL } from '../../i18n';
import { API_BASE } from '../../api/client';
import { adminSignOut } from '../../api/adminClient';
import { AdminHeader, Card, Pill, Row, Section, useAdminCan, useAdminLoad } from './kit';

export default function AdminMore({ navigation }) {
  const L = useL();
  const can = useAdminCan();
  const { data: d } = useAdminLoad('/v1/admin/overview');
  const { data: acc } = useAdminLoad('/v1/admin/account');
  const p = acc?.profile;
  const go = (name, params) => navigation.navigate(name, params);
  const signOut = async () => {
    await adminSignOut();
    (navigation.getParent() || navigation).reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };
  const title = p?.title || can.admin?.title || L('Admin', 'Admin');
  return (
    <Screen header={<AdminHeader title={L('More', 'Plus')} subtitle={L('Your account and the other tools', 'Votre compte et les autres outils')} />}>
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <Card>
          <Row
            first
            lead={<Avatar name={p?.name || can.admin?.name || 'Admin'} size={56} uri={p?.photo ? `${API_BASE}${p.photo}` : undefined} />}
            title={p?.name || can.admin?.name || L('Admin', 'Admin')}
            sub={`${title}${p?.login ? `, ${p.login}` : ''}`}
            onPress={() => go('AdminAccount')}
          />
          <V c="px-space-md pb-space-sm flex-row gap-2 flex-wrap">
            <Pill text={title} tone="info" />
            {p && <Pill text={p.onSite ? L('On the website', 'Sur le site') : L('Not on the website', 'Pas sur le site')} tone={p.onSite ? 'ok' : 'muted'} />}
          </V>
          <Row icon="notifications" title={L('Notices about your account', 'Avis sur votre compte')} sub={L('Sign-ins, password and email changes', 'Connexions, mot de passe, e-mail')} badge={d?.unreadNotices || 0} onPress={() => go('AdminNotices')} />
        </Card>

        <Section title={L('Running Klass8', 'Gérer Klass8')}>
          <Card>
            <Row first icon="handshake" iconBg="#fff3d6" iconTint="tertiary" title={L('Partners and promo codes', 'Partenaires et codes promo')} sub={L('Who brings people, shares, withdrawals', 'Qui amène du monde, parts, retraits')} badge={d?.withdrawRequests?.count || 0} onPress={() => go('AdminPartners')} />
            {can.system && <Row icon="school" title={L('Schools', 'Écoles')} sub={L('Codes and licences', 'Codes et licences')} onPress={() => go('AdminSchoolsPage')} />}
            <Row icon="mail" title={L('Messages from the website', 'Messages du site')} sub={L('What visitors wrote on the contact page', 'Ce que les visiteurs ont écrit')} badge={d?.newMessages || 0} onPress={() => go('AdminMessages')} />
            <Row icon="flag" title={L('Reports on AI answers', 'Signalements de réponses IA')} sub={L('Answers students said were wrong', 'Réponses jugées fausses par les élèves')} badge={d?.openReports || 0} onPress={() => go('AdminReports')} />
            <Row icon="campaign" title={L('Send an announcement', 'Envoyer une annonce')} sub={L('A message in the app for everyone', 'Un message dans l’application pour tous')} onPress={() => go('AdminAnnounce')} />
            <Row icon="badge" title={L('The team on the website', 'L’équipe sur le site')} sub={L('The people on the About page', 'Les personnes de la page À propos')} onPress={() => go('AdminTeam')} />
          </Card>
        </Section>

        {can.system && (
          <Section title={L('For the CTO', 'Pour le CTO')}>
            <Card>
              <Row first icon="bug_report" title={L('Problems on phones and the server', 'Problèmes sur téléphones et serveur')} sub={L('Most repeated first, copy in one tap', 'Les plus fréquents d’abord, copie en un geste')} onPress={() => go('AdminProblems')} />
              <Row icon="shield" title={L('Security', 'Sécurité')} sub={L('Sign-in attempts, blocked addresses', 'Tentatives de connexion, adresses bloquées')} onPress={() => go('AdminSecurity')} />
              <Row icon="system_update" title={L('Tell everyone about an update', 'Annoncer une mise à jour')} sub={L('What a new version changed', 'Ce qu’une nouvelle version change')} onPress={() => go('AdminAnnounce', { mode: 'update' })} />
            </Card>
          </Section>
        )}

        <Card>
          <Row first icon="logout" title={L('Sign out', 'Se déconnecter')} onPress={signOut} />
        </Card>
        <T c="font-body-sm text-body-sm text-on-surface-variant text-center px-space-md">
          {L('New admin accounts are made on the server by the CTO.', 'Les nouveaux comptes admin sont créés sur le serveur par le CTO.')}
        </T>
      </V>
    </Screen>
  );
}
