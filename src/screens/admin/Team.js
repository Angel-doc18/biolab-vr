// The team shown on the website, as its own page in the admin console.
import { V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import TeamEditor from './TeamEditor';

export default function AdminTeamScreen() {
  const L = useL();
  const [toast, showToast] = useToast();
  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('The team on the website', 'L’équipe sur le site')} avatar={false} />} keyboard>
        <V c="pt-space-md pb-space-xl">
          <TeamEditor L={L} showToast={showToast} />
        </V>
      </Screen>
      {toast}
    </V>
  );
}
