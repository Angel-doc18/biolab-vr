// Where a signed-in user lands: unfinished onboarding resumes, otherwise the tabs.
export function routeAfterAuth(user) {
  if (!user) return { index: 0, routes: [{ name: 'Login' }] };
  if (!user.onboarded) return { index: 0, routes: [{ name: 'Role' }] };
  return { index: 0, routes: [{ name: 'Main' }] };
}

// Onboarding step order per role, after "Who are you".
export const ONBOARDING = {
  student: ['ExamClass', 'Guardian', 'School', 'Goals', 'SetupDone'],
  parent: ['LinkChild', 'SetupDone'],
  teacher: ['School', 'CreateClass', 'SetupDone'],
};

export function nextStep(role, current) {
  const list = ONBOARDING[role] || ONBOARDING.student;
  const i = list.indexOf(current);
  return list[i + 1] || 'SetupDone';
}
