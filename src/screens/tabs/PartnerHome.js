// A partner account's Home: the Invite and earn page, under the usual tab header.
import { TabHeader } from '../../ui/chrome';
import { useL } from '../../i18n';
import { InviteBody, StoreNote } from '../me/Invite';
import { STORE_BUILD } from '../../lib/payments';

export default function PartnerHome() {
  const L = useL();
  const header = <TabHeader subtitle={L('Klass8 partner', 'Partenaire Klass8')} />;
  return STORE_BUILD ? <StoreNote header={header} /> : <InviteBody header={header} />;
}
