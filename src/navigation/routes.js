// Where a signed-in user lands: unfinished onboarding resumes, otherwise the tabs.
export function routeAfterAuth(user) {
  if (!user) return { index: 0, routes: [{ name: 'Login' }] };
  if (!user.onboarded) return { index: 0, routes: [{ name: 'Role' }] };
  return { index: 0, routes: [{ name: 'Main' }] };
}

// Onboarding step order per role, after "Who are you". A student answers one
// question per screen.
export const ONBOARDING = {
  student: ['SchoolKind', 'ClassPick', 'ExamYear', 'Series', 'Subjects', 'School', 'Grade', 'StudyTime', 'Reminder', 'SetupDone'],
  parent: ['LinkChild', 'SetupDone'],
  teacher: ['School', 'CreateClass', 'SetupDone'],
  partner: ['PartnerKind', 'SetupDone'],
};

// Short runs of the same steps, opened from Home, Me and Settings to change
// one thing; the last step returns to where the run started.
export const FLOWS = {
  class: ['SchoolKind', 'ClassPick', 'ExamYear', 'Series', 'Subjects'],
  changeClass: ['ClassPick', 'ExamYear', 'Series', 'Subjects'],
  subjects: ['Subjects'],
  plan: ['Grade', 'StudyTime', 'Reminder'],
};

// The series step is only for a general school's Sixth Form.
const SIXTH = ['Lower Sixth', 'Upper Sixth'];
const applies = (step, user) => step !== 'Series' || (SIXTH.includes(user?.className) && user?.schoolType !== 'technical');

export function stepsFor(user, flow) {
  const list = (flow && FLOWS[flow]) || ONBOARDING[user?.role] || ONBOARDING.student;
  return list.filter((s) => applies(s, user));
}

// The step after `current`, or null at the end of a run. `user` holds the
// answers so far, so a step that no longer applies is skipped.
export function nextStep(role, current, user = { role }, flow) {
  const list = stepsFor({ role, ...user }, flow);
  const i = list.indexOf(current);
  return list[i + 1] || (flow ? null : 'SetupDone');
}
