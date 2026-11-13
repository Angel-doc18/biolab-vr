// The admin's Team tab: the people shown on the public website's About page
// (and, for those marked, on its home page). Add, edit, order and remove them;
// each has a name, a role, a short bio, an optional link and a square photo.
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Avatar, C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote } from '../../ui/chrome';
import { Field, Label, Toggle } from '../../ui/form';
import { API_BASE } from '../../api/client';
import { del, get, patch, post, put } from '../../api/adminClient';
import { pickProfilePhoto } from '../../lib/photo';

const BIO_MAX = 280;
const blank = { name: '', role: '', bio: '', link: '', onHome: true, visible: true };
const photoUri = (m) => (m?.photo ? `${API_BASE}${m.photo}` : null);

function Switch({ label, hint, on, onPress }) {
  return (
    <P c="flex-row items-center gap-space-sm py-1.5" onPress={onPress} scale={1} accessibilityRole="switch" accessibilityState={{ checked: on }} accessibilityLabel={label}>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '600' }}>
          {label}
        </T>
        {!!hint && <T c="font-body-sm text-body-sm text-on-surface-variant">{hint}</T>}
      </V>
      <Toggle on={on} onPress={onPress} accessibilityLabel={label} />
    </P>
  );
}

// The form for a new person or for editing one. A new person is created on the
// first save; if the photo then fails, saving again edits them instead of
// adding them twice.
function Editor({ L, start, onSaved, onCancel }) {
  const [f, setF] = useState(start ? { name: start.name, role: start.role, bio: start.bio || '', link: start.link || '', onHome: start.onHome, visible: start.visible } : blank);
  const [id, setId] = useState(start?.id || null);
  const [current, setCurrent] = useState(start || null);
  const [photo, setPhoto] = useState(null); // a newly chosen picture, not yet sent
  const [dropPhoto, setDropPhoto] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const set = (k) => (v) => setF((x) => ({ ...x, [k]: v }));

  const choose = async () => {
    setError(null);
    try {
      const p = await pickProfilePhoto('library');
      if (p) {
        setPhoto(p);
        setDropPhoto(false);
      }
    } catch (e) {
      setError(e);
    }
  };

  const save = async () => {
    setError(null);
    if (f.name.trim().length < 2) return setError(L('Write the person’s name.', 'Écrivez le nom de la personne.'));
    if (f.role.trim().length < 2) return setError(L('Write their role, for example Founder.', 'Écrivez son rôle, par exemple Fondateur.'));
    const link = f.link.trim();
    if (link && !/^https:\/\//i.test(link)) return setError(L('The link must start with https://', 'Le lien doit commencer par https://'));
    setSaving(true);
    try {
      const body = { name: f.name.trim(), role: f.role.trim(), bio: f.bio.trim(), link, onHome: f.onHome, visible: f.visible };
      let m = id ? (await patch(`/v1/admin/team/${id}`, body)).member : (await post('/v1/admin/team', body)).member;
      if (!id) setId(m.id);
      setCurrent(m);
      if (photo) {
        m = (await put(`/v1/admin/team/${m.id}/photo`, photo)).member;
        setPhoto(null);
      } else if (dropPhoto && m.photo) {
        m = (await del(`/v1/admin/team/${m.id}/photo`)).member;
      }
      onSaved(m, !start);
    } catch (e) {
      setError(e);
    } finally {
      setSaving(false);
    }
  };

  const preview = photo ? `data:${photo.mediaType};base64,${photo.base64}` : dropPhoto ? null : photoUri(current);
  return (
    <V c="bg-surface-container-lowest rounded-xl border border-primary-container p-space-md gap-space-md">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
        {start ? L('Edit', 'Modifier') : L('Add a person', 'Ajouter une personne')}
      </T>
      <V c="flex-row items-center gap-space-md">
        <Avatar name={f.name || '?'} size={72} uri={preview} />
        <V c="flex-1 gap-1.5">
          <P c="h-10 px-3.5 rounded-lg bg-surface-container-low flex-row items-center gap-2 self-start" onPress={choose}>
            <Ic n="image" s={18} c="primary-container" />
            <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
              {preview ? L('Change the photo', 'Changer la photo') : L('Choose a photo', 'Choisir une photo')}
            </T>
          </P>
          {!!preview && (
            <P c="h-9 px-3 self-start justify-center" onPress={() => (setPhoto(null), setDropPhoto(true))}>
              <T c="font-label-md text-label-md text-error">{L('Remove the photo', 'Retirer la photo')}</T>
            </P>
          )}
        </V>
      </V>
      <T c="font-body-sm text-body-sm text-on-surface-variant">{L('A clear, recent photo of the face works best. It is cropped square.', 'Une photo récente et nette du visage convient le mieux. Elle est recadrée en carré.')}</T>
      <Field label={L('Name', 'Nom')} value={f.name} onChangeText={set('name')} maxLength={80} autoCapitalize="words" placeholder={L('e.g. Ama Ndi', 'ex. Ama Ndi')} />
      <Field label={L('Role', 'Rôle')} value={f.role} onChangeText={set('role')} maxLength={80} placeholder={L('e.g. Founder and director', 'ex. Fondateur et directeur')} />
      <V c="gap-1.5">
        <Label right={<T c="font-body-sm text-body-sm text-on-surface-variant">{`${f.bio.length}/${BIO_MAX}`}</T>}>{L('Short bio', 'Courte présentation')}</Label>
        <Input
          c="min-h-[104px] px-4 py-3 rounded-xl bg-surface-container-low shadow-sm text-body-md font-body-md text-on-surface"
          value={f.bio}
          onChangeText={set('bio')}
          maxLength={BIO_MAX}
          multiline
          textAlignVertical="top"
          accessibilityLabel={L('Short bio', 'Courte présentation')}
          placeholder={L('One or two sentences: what they do for Klass8.', 'Une ou deux phrases : ce qu’elle fait pour Klass8.')}
        />
      </V>
      <Field label={L('Link (optional)', 'Lien (facultatif)')} value={f.link} onChangeText={set('link')} maxLength={200} autoCapitalize="none" keyboardType="url" placeholder="https://" hint={L('For example a LinkedIn page.', 'Par exemple une page LinkedIn.')} />
      <V c="gap-1">
        <Switch label={L('Show on the website', 'Afficher sur le site')} hint={L('On the About page.', 'Sur la page À propos.')} on={f.visible} onPress={() => set('visible')(!f.visible)} />
        <Switch label={L('Show on the home page too', 'Afficher aussi sur l’accueil')} on={f.onHome} onPress={() => set('onHome')(!f.onHome)} />
      </V>
      <ErrorNote error={error} />
      <V c="flex-row gap-space-sm">
        <V c="flex-1">
          <Cta label={L('Cancel', 'Annuler')} variant="soft" icon={null} onPress={onCancel} disabled={saving} />
        </V>
        <V c="flex-1">
          <Cta label={L('Save', 'Enregistrer')} icon="check" onPress={save} loading={saving} />
        </V>
      </V>
    </V>
  );
}

function Person({ L, m, first, last, onEdit, onMove, onRemove, busy }) {
  const [confirm, setConfirm] = useState(false);
  return (
    <V c="bg-surface-container-lowest rounded-xl border border-surface-container p-space-md gap-space-sm">
      <V c="flex-row items-center gap-space-sm">
        <Avatar name={m.name} size={52} uri={photoUri(m)} />
        <V c="flex-1 gap-0.5">
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
            {m.name}
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
            {m.role}
          </T>
          <V c="flex-row flex-wrap gap-1.5 pt-0.5">
            {!m.visible && (
              <T c="font-label-sm text-label-sm text-error px-2 py-0.5 rounded-full bg-error-container" style={{ fontWeight: '700' }}>
                {L('Hidden', 'Masqué')}
              </T>
            )}
            {m.visible && m.onHome && (
              <T c="font-label-sm text-label-sm text-on-secondary-container px-2 py-0.5 rounded-full bg-secondary-container" style={{ fontWeight: '700' }}>
                {L('Home page', 'Accueil')}
              </T>
            )}
            {!m.photo && (
              <T c="font-label-sm text-label-sm text-on-surface-variant px-2 py-0.5 rounded-full bg-surface-container-low" style={{ fontWeight: '700' }}>
                {L('No photo', 'Sans photo')}
              </T>
            )}
          </V>
        </V>
      </V>
      {!!m.bio && <T c="font-body-sm text-body-sm text-on-surface">{m.bio}</T>}
      <V c="flex-row items-center gap-1.5 pt-1 border-t border-surface-container">
        <P c="h-10 px-3 rounded-lg flex-row items-center gap-1.5" onPress={onEdit} disabled={busy}>
          <Ic n="edit" s={18} c="primary-container" />
          <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
            {L('Edit', 'Modifier')}
          </T>
        </P>
        <P c="w-10 h-10 rounded-lg items-center justify-center" onPress={() => onMove('up')} disabled={busy || first} accessibilityLabel={L('Move up', 'Monter')}>
          <Ic n="arrow_upward" s={20} c={first ? 'outline-variant' : 'on-surface-variant'} />
        </P>
        <P c="w-10 h-10 rounded-lg items-center justify-center" onPress={() => onMove('down')} disabled={busy || last} accessibilityLabel={L('Move down', 'Descendre')}>
          <Ic n="arrow_downward" s={20} c={last ? 'outline-variant' : 'on-surface-variant'} />
        </P>
        <V c="flex-1" />
        <P
          c={`h-10 px-3 rounded-lg flex-row items-center gap-1.5 ${confirm ? 'bg-error-container' : ''}`}
          onPress={() => (confirm ? onRemove() : setConfirm(true))}
          disabled={busy}
        >
          <Ic n="delete" s={18} c="error" />
          <T c="font-label-md text-label-md text-error" style={{ fontWeight: '700' }}>
            {confirm ? L('Tap again to remove', 'Touchez encore pour retirer') : L('Remove', 'Retirer')}
          </T>
        </P>
      </V>
    </V>
  );
}

export default function AdminTeam({ L, showToast }) {
  const [members, setMembers] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null); // 'new', a person's id, or null
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let live = true;
    get('/v1/admin/team').then(
      (r) => live && setMembers(r.members),
      (e) => live && setError(e)
    );
    return () => {
      live = false;
    };
  }, []);

  const saved = (m, isNew) => {
    setMembers((list) => (isNew ? [...(list || []), m] : list.map((x) => (x.id === m.id ? m : x))));
    setEditing(null);
    showToast(isNew ? `${m.name} ${L('added to the team', 'ajouté à l’équipe')}` : `${m.name} ${L('saved', 'enregistré')}`);
  };
  const move = async (m, dir) => {
    setBusy(true);
    setError(null);
    try {
      setMembers((await post(`/v1/admin/team/${m.id}/move`, { dir })).members);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  const remove = async (m) => {
    setBusy(true);
    setError(null);
    try {
      await del(`/v1/admin/team/${m.id}`);
      setMembers((list) => list.filter((x) => x.id !== m.id));
      showToast(`${m.name} ${L('removed from the team', 'retiré de l’équipe')}`);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <V c="gap-space-md">
      <V c="bg-surface-container-low rounded-xl p-space-md flex-row gap-space-sm">
        <Ic n="groups" s={22} c="primary-container" />
        <T c="font-body-sm text-body-sm text-on-surface flex-1">
          {L(
            'The people on the website’s About page, in this order. Those marked for the home page are shown there too. Changes appear on the site within two minutes.',
            'Les personnes de la page À propos du site, dans cet ordre. Celles marquées pour l’accueil y apparaissent aussi. Les changements sont visibles sur le site en deux minutes.'
          )}
        </T>
      </V>
      {editing === 'new' ? (
        <Editor L={L} onSaved={saved} onCancel={() => setEditing(null)} />
      ) : (
        <Cta label={L('Add a person', 'Ajouter une personne')} lead="person_add" icon={null} onPress={() => setEditing('new')} />
      )}
      <ErrorNote error={error} />
      {!members && !error && <ActivityIndicator color={C['primary-container']} />}
      {members && !members.length && editing !== 'new' && (
        <T c="font-body-sm text-body-sm text-on-surface-variant">{L('No one yet. The team section stays off the website until you add someone.', 'Personne pour l’instant. La section équipe reste absente du site tant que personne n’est ajouté.')}</T>
      )}
      {members?.map((m, i) =>
        editing === m.id ? (
          <Editor key={m.id} L={L} start={m} onSaved={saved} onCancel={() => setEditing(null)} />
        ) : (
          <Person
            key={m.id}
            L={L}
            m={m}
            first={i === 0}
            last={i === members.length - 1}
            busy={busy}
            onEdit={() => setEditing(m.id)}
            onMove={(dir) => move(m, dir)}
            onRemove={() => remove(m)}
          />
        )
      )}
    </V>
  );
}
