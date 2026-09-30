import { HttpError, created, limit, now, ok, readJson } from '../lib/http.js';
import { requireUser } from '../lib/auth.js';
import { randomCode, uuid } from '../lib/crypto.js';
import { int, oneOf, str } from '../lib/validate.js';
import { notify } from '../lib/notify.js';
import { buildReport } from './me.js';

const REGIONS = ['Adamawa', 'Centre', 'East', 'Far North', 'Littoral', 'North', 'North West', 'South', 'South West', 'West'];

// ---------- schools (created by teachers, searched by everyone) ----------
export async function searchSchools(request, env) {
  await requireUser(request, env);
  const q = (new URL(request.url).searchParams.get('q') || '').trim().slice(0, 60);
  const stmt = q
    ? env.DB.prepare(
        `SELECT s.id, s.name, s.town, s.region,
           (SELECT COUNT(*) FROM classes c JOIN class_members m ON m.class_id = c.id WHERE c.school_id = s.id) AS students
         FROM schools s WHERE s.name LIKE ? OR s.town LIKE ? ORDER BY s.name LIMIT 20`
      ).bind(`%${q}%`, `%${q}%`)
    : env.DB.prepare('SELECT id, name, town, region, 0 AS students FROM schools ORDER BY created_at DESC LIMIT 20');
  const { results } = await stmt.all();
  return ok({ items: results });
}

export async function createSchool(request, env) {
  const user = await requireUser(request, env, ['teacher']);
  await limit(env.WRITE_LIMITER, `school:${user.id}`);
  const b = await readJson(request);
  const name = str(b.name, 'School name', { min: 3, max: 120 });
  const town = str(b.town, 'Town', { min: 2, max: 60 });
  const region = oneOf(b.region, 'Region', REGIONS);
  const dup = await env.DB.prepare('SELECT id FROM schools WHERE lower(name) = lower(?) AND lower(town) = lower(?)').bind(name, town).first();
  if (dup) return ok({ school: { id: dup.id, name, town, region } });
  const id = uuid();
  await env.DB.prepare('INSERT INTO schools (id, name, town, region, created_by, created_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(id, name, town, region, user.id, now())
    .run();
  await env.DB.prepare('UPDATE users SET school_id = ?, school_name = ?, updated_at = ? WHERE id = ?').bind(id, name, now(), user.id).run();
  return created({ school: { id, name, town, region } });
}

// ---------- classes ----------
export async function createClass(request, env) {
  const user = await requireUser(request, env, ['teacher']);
  await limit(env.WRITE_LIMITER, `class:${user.id}`);
  const b = await readJson(request);
  const name = str(b.name, 'Class name', { min: 2, max: 60 });
  const count = await env.DB.prepare('SELECT COUNT(*) AS n FROM classes WHERE teacher_id = ?').bind(user.id).first();
  if (count.n >= 30) throw new HttpError(400, 'You have reached the limit of 30 classes.', 'limit');
  const prefix = (user.school_name || 'CLASS').replace(/[^A-Za-z]/g, '').slice(0, 4).toUpperCase() || 'CLASS';
  let code;
  for (let i = 0; i < 5; i++) {
    code = `${prefix}-${randomCode(6)}`;
    const clash = await env.DB.prepare('SELECT 1 FROM classes WHERE join_code = ?').bind(code).first();
    if (!clash) break;
  }
  const id = uuid();
  await env.DB.prepare('INSERT INTO classes (id, school_id, teacher_id, name, join_code, created_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(id, user.school_id, user.id, name, code, now())
    .run();
  return created({ class: { id, name, joinCode: code, students: 0 } });
}

export async function listMyClasses(request, env) {
  const user = await requireUser(request, env, ['teacher']);
  const { results } = await env.DB.prepare(
    `SELECT c.id, c.name, c.join_code AS joinCode,
       (SELECT COUNT(*) FROM class_members m WHERE m.class_id = c.id) AS students
     FROM classes c WHERE c.teacher_id = ? ORDER BY c.created_at`
  )
    .bind(user.id)
    .all();
  return ok({ items: results });
}

async function ownedClass(env, user, classId) {
  const cls = await env.DB.prepare('SELECT * FROM classes WHERE id = ? AND teacher_id = ?').bind(classId, user.id).first();
  if (!cls) throw new HttpError(404, 'Class not found.', 'not_found');
  return cls;
}

// Cohort diagnostics for the teacher portal.
export async function classDetail(request, env, classId) {
  const user = await requireUser(request, env, ['teacher']);
  const cls = await ownedClass(env, user, classId);
  const { results: students } = await env.DB.prepare(
    `SELECT u.id, u.name, p.mastery, p.xp, p.streak, p.labs_done, p.mocks_done, p.best_mock, p.unit_mastery, p.last_active
     FROM class_members m JOIN users u ON u.id = m.student_id AND u.deleted_at IS NULL
     LEFT JOIN progress p ON p.user_id = u.id WHERE m.class_id = ? ORDER BY u.name`
  )
    .bind(classId)
    .all();
  const { results: assignments } = await env.DB.prepare(
    `SELECT a.id, a.kind, a.ref, a.title, a.due_at AS dueAt, a.created_at AS createdAt,
       (SELECT COUNT(*) FROM assignment_done d WHERE d.assignment_id = a.id) AS done
     FROM assignments a WHERE a.class_id = ? ORDER BY a.due_at DESC LIMIT 30`
  )
    .bind(classId)
    .all();
  const rows = students.map((s) => ({
    id: s.id,
    name: s.name,
    mastery: s.mastery ?? 0,
    xp: s.xp ?? 0,
    streak: s.streak ?? 0,
    labsDone: s.labs_done ?? 0,
    mocksDone: s.mocks_done ?? 0,
    bestMock: s.best_mock,
    unitMastery: s.unit_mastery ? JSON.parse(s.unit_mastery) : {},
    lastActive: s.last_active,
  }));
  const n = rows.length || 1;
  const withMock = rows.filter((r) => r.bestMock != null);
  return ok({
    class: { id: cls.id, name: cls.name, joinCode: cls.join_code },
    summary: {
      students: rows.length,
      mastery: Math.round(rows.reduce((a, r) => a + r.mastery, 0) / n),
      practicalRate: Math.round((rows.filter((r) => r.labsDone > 0).length / n) * 100),
      mockAverage: withMock.length ? Math.round(withMock.reduce((a, r) => a + r.bestMock, 0) / withMock.length) : null,
    },
    students: rows,
    assignments,
  });
}

export async function joinClass(request, env) {
  const user = await requireUser(request, env, ['student']);
  await limit(env.AUTH_LIMITER, `join:${user.id}`, 'Too many attempts. Wait a minute and try again.');
  const b = await readJson(request);
  const code = str(b.code, 'Class code', { min: 6, max: 20 }).toUpperCase();
  const cls = await env.DB.prepare('SELECT c.*, s.name AS school_name FROM classes c LEFT JOIN schools s ON s.id = c.school_id WHERE c.join_code = ?')
    .bind(code)
    .first();
  if (!cls) throw new HttpError(404, 'No class uses that code. Check it with your teacher.', 'not_found');
  await env.DB.prepare('INSERT OR IGNORE INTO class_members (class_id, student_id, joined_at) VALUES (?, ?, ?)').bind(cls.id, user.id, now()).run();
  if (cls.school_id) {
    await env.DB.prepare('UPDATE users SET school_id = ?, school_name = ?, updated_at = ? WHERE id = ?').bind(cls.school_id, cls.school_name, now(), user.id).run();
  }
  await notify(env, cls.teacher_id, 'class', 'New student joined', `${user.name} joined ${cls.name}.`);
  return ok({ class: { id: cls.id, name: cls.name, schoolName: cls.school_name } });
}

export async function myClasses(request, env) {
  const user = await requireUser(request, env, ['student']);
  const { results } = await env.DB.prepare(
    `SELECT c.id, c.name, s.name AS schoolName, t.name AS teacherName FROM class_members m
     JOIN classes c ON c.id = m.class_id LEFT JOIN schools s ON s.id = c.school_id LEFT JOIN users t ON t.id = c.teacher_id
     WHERE m.student_id = ?`
  )
    .bind(user.id)
    .all();
  return ok({ items: results });
}

// ---------- assignments ----------
export async function createAssignment(request, env, classId) {
  const user = await requireUser(request, env, ['teacher']);
  const cls = await ownedClass(env, user, classId);
  await limit(env.WRITE_LIMITER, `assign:${user.id}`);
  const b = await readJson(request);
  const kind = oneOf(b.kind, 'Kind', ['quiz', 'mock', 'lab']);
  const ref = str(b.ref, 'Reference', { max: 40, pattern: /^[a-z0-9-]+$/ });
  const title = str(b.title, 'Title', { min: 3, max: 120 });
  const dueInDays = int(b.dueInDays, 'Due in', { min: 1, max: 60 });
  const id = uuid();
  const dueAt = now() + dueInDays * 86_400_000;
  await env.DB.prepare('INSERT INTO assignments (id, class_id, teacher_id, kind, ref, title, due_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, classId, user.id, kind, ref, title, dueAt, now())
    .run();
  const { results } = await env.DB.prepare('SELECT student_id FROM class_members WHERE class_id = ?').bind(classId).all();
  for (const r of results) {
    await notify(env, r.student_id, 'assignment', `${user.name} set new work`, `${title} for ${cls.name}.`, { assignmentId: id, kind, ref, dueAt });
  }
  return created({ assignment: { id, kind, ref, title, dueAt } });
}

export async function myAssignments(request, env) {
  const user = await requireUser(request, env, ['student']);
  const { results } = await env.DB.prepare(
    `SELECT a.id, a.kind, a.ref, a.title, a.due_at AS dueAt, c.name AS className, d.done_at AS doneAt, d.score
     FROM assignments a JOIN class_members m ON m.class_id = a.class_id AND m.student_id = ?
     JOIN classes c ON c.id = a.class_id
     LEFT JOIN assignment_done d ON d.assignment_id = a.id AND d.student_id = ?
     ORDER BY a.due_at DESC LIMIT 50`
  )
    .bind(user.id, user.id)
    .all();
  return ok({ items: results });
}

export async function completeAssignment(request, env, assignmentId) {
  const user = await requireUser(request, env, ['student']);
  const b = await readJson(request);
  const score = int(b.score, 'Score', { min: 0, max: 100, optional: true });
  const a = await env.DB.prepare(
    'SELECT a.id FROM assignments a JOIN class_members m ON m.class_id = a.class_id AND m.student_id = ? WHERE a.id = ?'
  )
    .bind(user.id, assignmentId)
    .first();
  if (!a) throw new HttpError(404, 'Assignment not found.', 'not_found');
  await env.DB.prepare(
    `INSERT INTO assignment_done (assignment_id, student_id, score, done_at) VALUES (?, ?, ?, ?)
     ON CONFLICT(assignment_id, student_id) DO UPDATE SET score = MAX(COALESCE(assignment_done.score, 0), COALESCE(excluded.score, 0)), done_at = excluded.done_at`
  )
    .bind(assignmentId, user.id, score, now())
    .run();
  return ok();
}

// ---------- parent links ----------
// The student creates a short-lived code and gives it to their parent.
export async function createLinkCode(request, env) {
  const user = await requireUser(request, env, ['student']);
  await limit(env.WRITE_LIMITER, `link:${user.id}`);
  await env.DB.prepare('DELETE FROM link_codes WHERE student_id = ? OR expires_at < ?').bind(user.id, now()).run();
  const code = randomCode(8);
  await env.DB.prepare('INSERT INTO link_codes (code, student_id, expires_at) VALUES (?, ?, ?)').bind(code, user.id, now() + 48 * 3600_000).run();
  return created({ code, expiresAt: now() + 48 * 3600_000 });
}

export async function linkChild(request, env) {
  const user = await requireUser(request, env, ['parent']);
  await limit(env.AUTH_LIMITER, `plink:${user.id}`, 'Too many attempts. Wait a minute and try again.');
  const b = await readJson(request);
  const code = str(b.code, 'Link code', { min: 8, max: 8 }).toUpperCase();
  const row = await env.DB.prepare('SELECT * FROM link_codes WHERE code = ? AND expires_at > ?').bind(code, now()).first();
  if (!row) throw new HttpError(404, 'That code is not valid or has expired. Ask your child for a new one.', 'not_found');
  await env.DB.batch([
    env.DB.prepare('INSERT OR IGNORE INTO parent_links (parent_id, student_id, created_at) VALUES (?, ?, ?)').bind(user.id, row.student_id, now()),
    env.DB.prepare('DELETE FROM link_codes WHERE code = ?').bind(code),
  ]);
  await notify(env, row.student_id, 'parent', 'Parent linked', `${user.name} can now see your progress reports.`);
  const child = await env.DB.prepare('SELECT id, name, class_name, school_name FROM users WHERE id = ?').bind(row.student_id).first();
  return ok({ child: { id: child.id, name: child.name, className: child.class_name, schoolName: child.school_name } });
}

export async function myChildren(request, env) {
  const user = await requireUser(request, env, ['parent']);
  const { results } = await env.DB.prepare('SELECT student_id FROM parent_links WHERE parent_id = ?').bind(user.id).all();
  const reports = [];
  for (const r of results) {
    try {
      reports.push(await buildReport(env, r.student_id));
    } catch {
      // deleted student: skip
    }
  }
  return ok({ items: reports });
}
