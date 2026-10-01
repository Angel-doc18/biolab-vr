// Marks teacher-set work as done when the student finishes the matching activity.
import { get, post } from '../api/client';

export async function completeMatchingAssignment(kind, ref, score) {
  try {
    const r = await get('/v1/me/assignments');
    const open = r.items.filter((a) => a.kind === kind && a.ref === ref && !a.doneAt);
    for (const a of open) await post(`/v1/assignments/${a.id}/complete`, { score: Math.max(0, Math.min(100, Math.round(score))) });
  } catch {
    // offline or not a class member: nothing to mark
  }
}
