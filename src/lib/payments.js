// Shared by the platform charges screens (Plans, Pay, Voucher).

// Builds published on Google Play sell nothing inside the app (Play's payments
// policy); students there unlock the course with a voucher from their school.
export const STORE_BUILD = process.env.EXPO_PUBLIC_STORE === 'play';

export const PROVIDERS = [
  { id: 'mobile money', name: 'MTN MoMo', ussd: '*126#' },
  { id: 'orange money', name: 'Orange Money', ussd: '#150#' },
];

// Cameroon mobile numbers: MTN 67/68/650-654, Orange 69/655-659.
export function operatorFor(d) {
  if (/^6(7|8)\d{7}$/.test(d) || /^65[0-4]\d{6}$/.test(d)) return 'mobile money';
  if (/^69\d{7}$/.test(d) || /^65[5-9]\d{6}$/.test(d)) return 'orange money';
  return null;
}

export const longDate = (t) => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// Where a student stands, from the server's user: the free month still running
// (and nothing paid on top), or paid until a date.
export function accessState(user, now) {
  const paidUntil = user?.proUntil && user.proUntil > now ? user.proUntil : null;
  const freeUntil = !paidUntil && user?.trialUntil && user.trialUntil > now ? user.trialUntil : null;
  const hadFree = !!user?.trialUntil && user.trialUntil - (user.createdAt || 0) >= 86_400_000;
  return { paidUntil, freeUntil, hadFree };
}
