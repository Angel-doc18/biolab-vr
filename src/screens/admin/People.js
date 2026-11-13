// Admin People: every student, parent and teacher, newest first. Search by
// name, phone or email, filter by kind of account, and open a person.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Avatar, Ic, Input, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen } from '../../ui/chrome';
import { useL } from '../../i18n';
import { AdminHeader, Card, Chips, Empty, Loading, Pill, Row, date, phoneText, useAdminLoad } from './kit';

// The short status shown beside each person.
export function personStatus(u, L) {
  if (u.blocked) return [L('Blocked', 'Bloqué'), 'bad'];
  if (u.role === 'parent') return [L('Parent', 'Parent'), 'muted'];
  if (u.role === 'teacher') return [L('Teacher', 'Enseignant'), 'muted'];
  if (!u.accessUntil) return [L('Open', 'Ouvert'), 'info'];
  const paid = u.proUntil && u.proUntil >= u.accessUntil;
  if (u.accessUntil > Date.now()) return paid ? [L('Paid', 'Payé'), 'ok'] : [L('Free month', 'Mois gratuit'), 'info'];
  return [L('Ended', 'Terminé'), 'warn'];
}

export function accessLine(u, L) {
  if (u.role !== 'student') return null;
  if (!u.accessUntil) return L('Everything is open.', 'Tout est ouvert.');
  const paid = u.proUntil && u.proUntil >= u.accessUntil;
  if (u.accessUntil > Date.now()) return `${paid ? L('Paid until', 'Payé jusqu’au') : L('Free month until', 'Mois gratuit jusqu’au')} ${date(u.accessUntil)}`;
  return `${L('Ended on', 'Terminé le')} ${date(u.accessUntil)}`;
}

export default function AdminPeople({ navigation, route }) {
  const L = useL();
  const [q, setQ] = useState('');
  const [query, setQuery] = useState('');
  const [role, setRole] = useState(route.params?.role || '');
  // Opened again from Home with a filter: show that filter.
  const [askedAt, setAskedAt] = useState(route.params?.at);
  if (route.params?.at !== askedAt) {
    setAskedAt(route.params?.at);
    setRole(route.params?.role || '');
  }
  const { data, error, busy, reload } = useAdminLoad(`/v1/admin/users?q=${encodeURIComponent(query)}${role ? `&role=${role}` : ''}`);
  const [refreshing, setRefreshing] = useState(false);
  const search = () => setQuery(q.trim());

  return (
    <Screen
      header={<AdminHeader title={L('People', 'Comptes')} subtitle={L('Students, parents and teachers', 'Élèves, parents et enseignants')} />}
      keyboard
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await reload(), setRefreshing(false))} />}
    >
      <V c="gap-space-md pt-space-md pb-space-xl">
        <V c="flex-row items-center h-[52px] rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm px-3.5 gap-2">
          <Ic n="search" s={22} c="outline" />
          <Input
            c="flex-1 h-full text-body-md font-body-md text-on-surface"
            placeholder={L('Search by name, phone or email', 'Chercher par nom, numéro ou e-mail')}
            value={q}
            onChangeText={setQ}
            onSubmitEditing={search}
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
          />
          {!!q && (
            <P c="w-9 h-9 items-center justify-center rounded-full" onPress={() => (setQ(''), setQuery(''))} accessibilityLabel={L('Clear the search', 'Effacer la recherche')}>
              <Ic n="close" s={20} c="outline" />
            </P>
          )}
        </V>

        <Chips
          value={role}
          onChange={setRole}
          items={[
            ['', L('Everyone', 'Tous')],
            ['student', L('Students', 'Élèves')],
            ['parent', L('Parents', 'Parents')],
            ['teacher', L('Teachers', 'Enseignants')],
          ]}
        />

        <ErrorNote error={error} />
        {busy && !data && <Loading />}
        {data && !data.items.length && (
          <Card>
            <Empty icon="person_search" text={query ? L('No account matches this search.', 'Aucun compte ne correspond.') : L('No accounts yet.', 'Aucun compte pour l’instant.')} />
          </Card>
        )}
        {data && data.items.length > 0 && (
          <Card>
            {data.items.map((u, i) => {
              const [label, tone] = personStatus(u, L);
              return (
                <Row
                  key={u.id}
                  first={i === 0}
                  lead={<Avatar name={u.name} size={44} />}
                  title={u.name}
                  sub={[phoneText(u.phone) || u.email, u.className].filter(Boolean).join(', ')}
                  right={<Pill text={label} tone={tone} />}
                  onPress={() => navigation.navigate('AdminPerson', { id: u.id, name: u.name })}
                />
              );
            })}
          </Card>
        )}
        {data?.items.length >= 60 && (
          <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Showing the 60 newest. Search to find someone else.', 'Les 60 plus récents. Cherchez pour trouver quelqu’un d’autre.')}</T>
        )}
      </V>
    </Screen>
  );
}
