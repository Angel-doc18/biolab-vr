import { HttpError, now, ok, readJson } from '../lib/http.js';
import { publicUser, requireUser, isPro } from '../lib/auth.js';
import { bool, int, oneOf, phone, str } from '../lib/validate.js';
import { verifyPassword } from '../lib/crypto.js';

export async function getMe(request, env) {
  const user = await requireUser(request, env);
  return ok({ user: publicUser(user), pro: isPro(user) });
}

// Only these profile fields can be changed by the user. Role and billing fields cannot.
export async function patchMe(request, env) {
  const user = await requireUser(request, env);
  const b = await readJson(request);
  const fields = {};
  if ('name' in b) fields.name = str(b.name, 'Full name', { min: 2, max: 80 });
  if ('lang' in b) fields.lang = oneOf(b.lang, 'Language', ['en', 'fr']);
  if ('level' in b) fields.level = oneOf(b.level, 'Level', ['O', 'A']);
  if ('examYear' in b) fields.exam_year = int(b.examYear, 'Exam year', { min: 2024, max: 2040 });
  if ('className' in b) fields.class_name = str(b.className, 'Class', { max: 40 });
  if ('schoolName' in b) fields.school_name = str(b.schoolName, 'School', { max: 120, optional: true });
  if ('schoolId' in b) {
    if (b.schoolId === null) fields.school_id = null;
    else {
      const school = await env.DB.prepare('SELECT id, name FROM schools WHERE id = ?').bind(str(b.schoolId, 'School', { max: 64 })).first();
      if (!school) throw new HttpError(404, 'School not found.', 'not_found');
      fields.school_id = school.id;
      fields.school_name = school.name;
    }
  }
  if ('targetGrade' in b) fields.target_grade = oneOf(b.targetGrade, 'Target grade', ['A', 'B', 'C']);
  if ('dailyMinutes' in b) fields.daily_minutes = int(b.dailyMinutes, 'Daily goal', { min: 5, max: 240 });
  if ('reminderTime' in b) fields.reminder_time = str(b.reminderTime, 'Reminder time', { pattern: /^([01]\d|2[0-3]):[0-5]\d$/ });
  if ('parentPhone' in b) fields.parent_phone = b.parentPhone === null ? null : phone(b.parentPhone, 'Parent phone');
  if ('parentReportFreq' in b) fields.parent_report_freq = oneOf(b.parentReportFreq, 'Report frequency', ['weekly', 'mocks', 'monthly']);
  if ('parentReportLang' in b) fields.parent_report_lang = oneOf(b.parentReportLang, 'Report language', ['en', 'fr']);
  if ('inactivityAlert' in b) fields.inactivity_alert = bool(b.inactivityAlert, 'Inactivity alert') ? 1 : 0;
  if ('onboarded' in b) fields.onboarded = bool(b.onboarded, 'Onboarded') ? 1 : 0;
  const keys = Object.keys(fields);
  if (keys.length) {
    await env.DB.prepare(`UPDATE users SET ${keys.map((k) => `${k} = ?`).join(', ')}, updated_at = ? WHERE id = ?`)
      .bind(...keys.map((k) => fields[k]), now(), user.id)
      .run();
  }
  const fresh = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(user.id).first();
  return ok({ user: publicUser(fresh), pro: isPro(fresh) });
}

// Account deletion: requires the password, removes personal data.
export async function deleteMe(request, env) {
  const user = await requireUser(request, env);
  const b = await readJson(request);
  if (!(await verifyPassword(str(b.password, 'Password', { max: 128 }), user.password_hash, user.password_salt))) {
    throw new HttpError(400, 'Password is not correct.', 'invalid_credentials');
  }
  const id = user.id;
  await env.DB.batch([
    env.DB.prepare("UPDATE users SET deleted_at = ?, name = 'Deleted user', phone = 'deleted:' || id, email = NULL, parent_phone = NULL WHERE id = ?").bind(now(), id),
    env.DB.prepare('UPDATE refresh_tokens SET revoked = 1 WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM progress WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM notifications WHERE user_id = ?').bind(id),
    env.DB.prepare('DELETE FROM class_members WHERE student_id = ?').bind(id),
    env.DB.prepare('DELETE FROM parent_links WHERE student_id = ? OR parent_id = ?').bind(id, id),
  ]);
  return ok({ deleted: true });
}

// ---------- progress sync ----------
export async function getProgress(request, env) {
  const user = await requireUser(request, env, ['student']);
  const row = await env.DB.prepare('SELECT data, updated_at FROM progress WHERE user_id = ?').bind(user.id).first();
  return ok({ data: row ? JSON.parse(row.data) : null, updatedAt: row?.updated_at || null });
}

export async function putProgress(request, env) {
  const user = await requireUser(request, env, ['student']);
  const b = await readJson(request, 512 * 1024);
  if (!b.data || typeof b.data !== 'object' || Array.isArray(b.data)) throw new HttpError(400, 'data must be an object.', 'invalid_input');
  const s = b.stats || {};
  const unitMastery = {};
  if (s.unitMastery && typeof s.unitMastery === 'object') {
    for (const [k, v] of Object.entries(s.unitMastery).slice(0, 40)) {
      if (/^[a-z0-9-]{1,40}$/.test(k)) unitMastery[k] = int(v, 'Unit mastery', { min: 0, max: 100 });
    }
  }
  const stats = {
    mastery: int(s.mastery ?? 0, 'Mastery', { min: 0, max: 100 }),
    xp: int(s.xp ?? 0, 'XP', { min: 0, max: 10_000_000 }),
    streak: int(s.streak ?? 0, 'Streak', { min: 0, max: 5000 }),
    labsDone: int(s.labsDone ?? 0, 'Labs', { min: 0, max: 100000 }),
    mocksDone: int(s.mocksDone ?? 0, 'Mocks', { min: 0, max: 100000 }),
    bestMock: s.bestMock == null ? null : int(s.bestMock, 'Best mock', { min: 0, max: 100 }),
    minutesWeek: int(s.minutesWeek ?? 0, 'Minutes', { min: 0, max: 10080 }),
    lastActive: s.lastActive == null ? null : int(s.lastActive, 'Last active', { min: 0, max: now() + 86_400_000 }),
  };
  await env.DB.prepare(
    `INSERT INTO progress (user_id, data, mastery, xp, streak, labs_done, mocks_done, best_mock, unit_mastery, minutes_week, last_active, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, mastery = excluded.mastery, xp = excluded.xp, streak = excluded.streak,
       labs_done = excluded.labs_done, mocks_done = excluded.mocks_done, best_mock = excluded.best_mock, unit_mastery = excluded.unit_mastery,
       minutes_week = excluded.minutes_week, last_active = excluded.last_active, updated_at = excluded.updated_at`
  )
    .bind(user.id, JSON.stringify(b.data), stats.mastery, stats.xp, stats.streak, stats.labsDone, stats.mocksDone, stats.bestMock, JSON.stringify(unitMastery), stats.minutesWeek, stats.lastActive, now())
    .run();
  return ok({ savedAt: now() });
}

// ---------- notifications ----------
export async function listNotifications(request, env) {
  const user = await requireUser(request, env);
  const { results } = await env.DB.prepare(
    'SELECT id, kind, title, body, data, read, created_at FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 100'
  )
    .bind(user.id)
    .all();
  return ok({
    items: results.map((n) => ({ ...n, read: Boolean(n.read), data: n.data ? JSON.parse(n.data) : null, createdAt: n.created_at })),
  });
}

export async function markNotifications(request, env) {
  const user = await requireUser(request, env);
  const b = await readJson(request);
  if (b.all === true) {
    await env.DB.prepare('UPDATE notifications SET read = 1 WHERE user_id = ?').bind(user.id).run();
  } else if (Array.isArray(b.ids)) {
    const ids = b.ids.filter((x) => typeof x === 'string' && x.length < 64).slice(0, 100);
    for (const id of ids) {
      await env.DB.prepare('UPDATE notifications SET read = 1 WHERE id = ? AND user_id = ?').bind(id, user.id).run();
    }
  }
  return ok();
}

export async function clearNotifications(request, env) {
  const user = await requireUser(request, env);
  await env.DB.prepare('DELETE FROM notifications WHERE user_id = ?').bind(user.id).run();
  return ok();
}

// ---------- weekly report (used by the student and linked parents) ----------
export async function buildReport(env, studentId) {
  const student = await env.DB.prepare('SELECT id, name, class_name, school_name, parent_phone, parent_report_lang FROM users WHERE id = ? AND deleted_at IS NULL')
    .bind(studentId)
    .first();
  if (!student) throw new HttpError(404, 'Student not found.', 'not_found');
  const p = await env.DB.prepare('SELECT * FROM progress WHERE user_id = ?').bind(studentId).first();
  const unitMastery = p ? JSON.parse(p.unit_mastery || '{}') : {};
  const sorted = Object.entries(unitMastery).sort((a, b) => a[1] - b[1]);
  return {
    student: { id: student.id, name: student.name, className: student.class_name, schoolName: student.school_name },
    readiness: p?.mastery ?? 0,
    streak: p?.streak ?? 0,
    minutesWeek: p?.minutes_week ?? 0,
    xp: p?.xp ?? 0,
    labsDone: p?.labs_done ?? 0,
    mocksDone: p?.mocks_done ?? 0,
    bestMock: p?.best_mock ?? null,
    unitMastery,
    weakest: sorted.slice(0, 2).map(([unit, pct]) => ({ unit, pct })),
    strongest: sorted.slice(-2).reverse().map(([unit, pct]) => ({ unit, pct })),
    lastActive: p?.last_active ?? null,
    generatedAt: now(),
  };
}

export async function myReport(request, env) {
  const user = await requireUser(request, env, ['student']);
  return ok({ report: await buildReport(env, user.id) });
}
