// A partner account's Home: the Invite and earn page, under the usual tab header.
import { TabHeader } from '../../ui/chrome';
import { useL } from '../../i18n';
import { InviteBody } from '../me/Invite';

export default function PartnerHome() {
  const L = useL();
  return <InviteBody header={<TabHeader subtitle={L('Klass8 partner', 'Partenaire Klass8')} />} />;
}
