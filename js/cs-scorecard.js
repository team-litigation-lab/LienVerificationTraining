/* ============================================================
   🏅 The Scorecard: every graded piece of the Closing Specialist Track in one place, against one pass mark.

   For each day: the practice session or simulation (its best score), the case work (the Lien Desk's automated
   grader, Days 3 and 5) and the process questions (the answer grader, Day 4), the day's score (the average of its
   graded pieces), whether the day's steps are done, and a result:
     Passed       the day's steps are done and every graded piece is at the pass mark or above
     Needs work   a graded piece is below the pass mark
     In progress  started, with something still to do
     Not started
   and a remark written from the scores (what to redo, or what's left). The course is "Ready for certification" when
   every day is Passed. The card shows it as the standard "why this score" table: each day's score, result and remark,
   then a row per graded piece with its score, 🧾 why it scored that, ⭐ what was done great, ❌ what was wrong and
   💡 what could have been done better, all written from what was saved (and saying so when a detail wasn't).

   Nothing new is saved: it reads what the course already keeps. The trainee record (trainee:<id>: dayProgress, with
   each day's done flag and the Lien Desk's deskScore) and the progress record (progress:<id>: practice[<module>]
   {best, last, runs}, answerGrades[<module>] {score, covered, total, per}, answers, and desk: the Lien Desk's grade by part).
   Trainees open it from 🏅 Scorecard in the top bar; trainers see every trainee in Admin → 🏅 Scorecards, and
   a trainee's card with View.
   ============================================================ */
(function(){
"use strict";
const PASS = 80;
const E = (t) => window.esc(t);
const COURSE = () => window.LN_COURSE;

// The graded pieces of a day, in the order the trainee meets them.
function piecesOf(d, rec, prog){
  const dp = ((rec || {}).dayProgress || {})[d.day] || ((rec || {}).dayProgress || {})[String(d.day)] || {};
  const px = (prog || {}).practice || {}, ag = (prog || {}).answerGrades || {};
  const out = [];
  d.modules.forEach((m) => {
    if(m.kind === "practice") out.push({ kind: "practice", label: "Practice", title: m.title, score: px[m.id] ? px[m.id].best : null, extra: px[m.id] ? `${px[m.id].runs} run${px[m.id].runs === 1 ? "" : "s"}, last ${px[m.id].last}` : "" });
    if(m.kind === "lab") out.push({ kind: "case", label: "Case work", title: m.title, score: typeof dp.deskScore === "number" ? dp.deskScore : null, extra: "Lien Desk, automated grader" });
    if(m.kind === "questions") out.push({ kind: "questions", label: "Process questions", title: m.title, score: ag[m.id] ? ag[m.id].score : null, extra: ag[m.id] ? `${ag[m.id].covered} of ${ag[m.id].total} key concepts` : "" });
  });
  return { pieces: out, done: !!dp.done, started: !!(dp.done || dp.step || Object.keys(dp.modules || {}).length) };
}

function dayCard(d, rec, prog){
  const { pieces, done, started } = piecesOf(d, rec, prog);
  const scored = pieces.filter((p) => typeof p.score === "number");
  const score = scored.length ? Math.round(scored.reduce((s, p) => s + p.score, 0) / scored.length) : null;
  const low = scored.filter((p) => p.score < PASS), missing = pieces.filter((p) => typeof p.score !== "number");
  let result = "Not started";
  if(low.length) result = "Needs work";
  else if(done && !missing.length) result = "Passed";
  else if(started || scored.length) result = "In progress";
  let remark;
  if(result === "Passed") remark = score >= 95 ? "Excellent: every piece well above the pass mark." : "Passed: every graded piece is at the pass mark or above.";
  else if(result === "Needs work") remark = `Below ${PASS}: ${low.map((p) => `${p.label.toLowerCase()} (${p.score})`).join(", ")}. Go back over the feedback and try again.`;
  else if(result === "In progress") remark = [missing.length ? `Still to do: ${missing.map((p) => p.label.toLowerCase()).join(", ")}.` : "", done ? "" : "Finish the day's steps."].filter(Boolean).join(" ");
  else remark = "Not started yet.";
  return { day: d.day, title: d.title, pieces, score, done, result, remark };
}

function compute(rec, prog){
  const days = COURSE().days.map((d) => dayCard(d, rec, prog));
  const scored = days.filter((x) => typeof x.score === "number");
  const all = days.flatMap((x) => x.pieces), graded = all.filter((p) => typeof p.score === "number");
  return {
    days,
    daysDone: days.filter((x) => x.done).length,
    average: scored.length ? Math.round(scored.reduce((s, x) => s + x.score, 0) / scored.length) : null,
    piecesPassed: graded.filter((p) => p.score >= PASS).length, piecesTotal: all.length,
    result: days.every((x) => x.result === "Passed") ? "Ready for certification" : days.some((x) => x.result === "Needs work") ? "Needs work" : days.some((x) => x.result !== "Not started") ? "In progress" : "Not started"
  };
}

const CLS = { "Passed": "sc-ok", "Ready for certification": "sc-ok", "Needs work": "sc-bad", "In progress": "sc-mid", "Not started": "sc-none" };
const pill = (t) => `<span class="sc-pill ${CLS[t] || "sc-none"}">${E(t)}</span>`;
const num = (v) => typeof v === "number" ? `<b class="sc-num ${v >= PASS ? "sc-ok-t" : "sc-bad-t"}">${v}</b>` : `<span class="sc-dash">—</span>`;
const isNum = (v) => typeof v === "number" && isFinite(v);
const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const passLine = (v) => v >= PASS ? `${PASS} passes: this passes.` : `${PASS} passes: this is below the pass mark.`;

/* ---------- 🧾 why each score: a row per graded piece, explained from what the course already saved ----------
   Practice: practice[<module>] {best, last, runs} (the run's step-by-step feedback is shown during the run, not saved).
   Case work: the Lien Desk's grade, kept in progress.desk.cases[<case>].grade[<stage>] {score, items: label, max, got, note}.
   Process questions: answerGrades[<module>] {score, covered, total, per: [{c, t, w}]}, and the saved answers (the
   concepts an answer missed are named only when re-checking that answer gives the count the grader saved). */
function deskGrade(prog, stage){
  const d = (prog || {}).desk, w = d && d.cases && d.cases[d.caseId];
  return (w && w.grade && w.grade[stage]) || null;
}
function practiceRow(d, m, prog){
  const r = ((prog || {}).practice || {})[m.id];
  if(!r || !isNum(r.best)) return { name: m.title, sub: "Practice · not run yet", score: null,
    why: ["Not run yet, so it isn't in the day's score."], great: [], wrong: [], better: [`Open ${m.title} in Day ${d.day}'s steps and play it through (${PASS} passes).`] };
  const runs = r.runs || 1, b = r.best;
  return { name: m.title, sub: `Practice · best of ${plural(runs, "run")}`, score: b,
    why: [runs > 1 ? `Best of ${plural(runs, "run")}${isNum(r.last) ? ` (last run ${r.last})` : ""}: a lower run never lowers it.` : "1 run so far.",
      "Points earned out of the points there are, out of 100.", passLine(b)],
    great: b >= 100 ? ["Every step answered right."] : b >= PASS ? [`Passed at ${b}: most of the steps answered right.`] : b > 0 ? [`${b} of the 100 points earned.`] : [],
    wrong: b < 100 ? [`${100 - b} of the 100 points were lost. Which steps were missed wasn't recorded: the session shows each step's feedback during the run only.`] : [],
    better: b >= 100 ? [] : [b >= PASS ? "Practice again to lift the score: read each step's feedback before moving on." : `Go back over the feedback, then practice again: aim for ${PASS} or more.`] };
}
function caseRow(d, m, rec, prog){
  const dp = ((rec || {}).dayProgress || {})[d.day] || ((rec || {}).dayProgress || {})[String(d.day)] || {};
  const s = isNum(dp.deskScore) ? dp.deskScore : null;
  if(s == null) return { name: m.title, sub: "Case work · not graded yet", score: null,
    why: ["Not graded yet, so it isn't in the day's score."], great: [], wrong: [], better: ["Work the case in the Lien Desk: the automated grader scores it as you go."] };
  const g = deskGrade(prog, m.stage), items = g && g.score === s && Array.isArray(g.items) ? g.items : null;
  const pts = (i) => `${i.got}/${i.max}`;
  if(!items) return { name: m.title, sub: "Case work · Lien Desk grader", score: s,
    why: [`The Lien Desk's automated grader: ${s} of 100 points.`, passLine(s)],
    great: s >= PASS ? [`Passed at ${s}: most of the case work done right.`] : [],
    wrong: s < 100 ? [`${100 - s} of the 100 points were lost. Which parts lost them wasn't saved with this score.`] : [],
    better: s < 100 ? ["Open the Lien Desk: its score card lists each part's points, so you can see what's left to finish."] : [] };
  const full = items.filter((i) => i.got >= i.max), lost = items.filter((i) => i.got < i.max);
  return { name: m.title, sub: "Case work · Lien Desk grader", score: s,
    why: [`The Lien Desk's automated grader: the points of its ${items.length} parts add up to ${s} of 100.`,
      `By part: ${items.map((i) => pts(i)).join(" · ")}.`, passLine(s)],
    great: full.map((i) => `${i.label}: full marks (${pts(i)}).`),
    wrong: lost.map((i) => `${i.label}: ${pts(i)}${i.note ? ` (${i.note})` : ""}.`),
    better: lost.map((i) => `${i.label}: finish it in the Lien Desk (${Math.round((i.max - i.got) * 10) / 10} points to gain).`) };
}
function questionsRow(d, m, prog){
  const g = ((prog || {}).answerGrades || {})[m.id];
  if(!g || !isNum(g.score)) return { name: m.title, sub: "Process questions · not checked yet", score: null,
    why: ["Not checked yet, so it isn't in the day's score."], great: [], wrong: [], better: ["Answer every question, then press Check to have the answer grader score them."] };
  const s = g.score, per = Array.isArray(g.per) ? g.per : null, qs = m.questions || [];
  const answers = (((prog || {}).answers || {})[m.id]) || [];
  const missedOf = (j, x) => {   // the concepts an answer missed, only when re-checking it matches what the grader saved
    const q = qs[j]; if(!q || typeof window.gradeAnswer !== "function") return [];
    const r = window.gradeAnswer(q, answers[j]); if(r.covered !== x.c || r.total !== x.t) return [];
    return (q.keys || []).filter((_, k) => !r.hit[k]).map((grp) => grp[0]);
  };
  const why = [`The answer grader: ${isNum(g.covered) && isNum(g.total) ? `${g.covered} of ${g.total} key concepts covered` : "the share of key concepts covered"}${per ? ` across ${plural(per.length, "question")}` : ""}.`];
  const short = per ? per.filter((x) => x.w < 25).length : 0;
  if(short) why.push(`${plural(short, "answer")} under 25 words earned at most half.`);
  why.push(passLine(s));
  if(!per) return { name: m.title, sub: "Process questions · answer grader", score: s, why,
    great: s >= PASS ? [`Passed at ${s}: most of the key concepts covered.`] : isNum(g.covered) && g.covered ? [`${g.covered} key concepts covered.`] : [],
    wrong: s < 100 ? [isNum(g.covered) && isNum(g.total) && g.total > g.covered ? `${g.total - g.covered} key concepts not covered. Which questions missed them wasn't saved with this score.` : `${100 - s} of the 100 points were lost. Which questions lost them wasn't saved with this score.`] : [],
    better: s < 100 ? ["Re-read your answers against the lesson, add the missing concepts in full sentences, then Check again."] : [] };
  const great = [], wrong = [], better = [];
  per.forEach((x, j) => {
    const n = `Q${j + 1}`, miss = missedOf(j, x);
    if(x.c >= x.t && x.w >= 25) great.push(`${n}: every key concept covered (${x.c}/${x.t}).`);
    if(x.c < x.t) wrong.push(`${n}: ${x.c} of ${x.t} key concepts${miss.length ? `; missed: ${miss.join(", ")}` : ""}.`);
    if(x.w < 25) wrong.push(`${n}: under 25 words, so it earned at most half.`);
    if(x.c < x.t || x.w < 25) better.push(`${n}: ${[x.c < x.t ? (miss.length ? `cover ${miss.join(", ")}` : "add the missing concepts") : "", x.w < 25 ? "explain it in 25 words or more" : ""].filter(Boolean).join(", and ")}.`);
  });
  if(better.length) better.push("Then press Check again.");
  return { name: m.title, sub: `Process questions · ${plural(per.length, "question")}`, score: s, why, great, wrong, better };
}
function rowsOf(d, rec, prog){
  const out = [];
  d.modules.forEach((m) => {
    if(m.kind === "practice") out.push(practiceRow(d, m, prog));
    if(m.kind === "lab") out.push(caseRow(d, m, rec, prog));
    if(m.kind === "questions") out.push(questionsRow(d, m, prog));
  });
  return out;
}
const cellList = (xs, none) => (xs = (xs || []).filter(Boolean)).length ? `<ul>${xs.map((x) => `<li>${E(x)}</li>`).join("")}</ul>` : `<i>${none}</i>`;
function rowHtml(x){
  const has = isNum(x.score);
  return `<tr class="sc-act"><th scope="row"><b>${E(x.name)}</b><small>${E(x.sub)}</small></th>
    <td class="sc-sc"><span class="sc-spill ${has ? (x.score >= PASS ? "sc-ok" : "sc-bad") : "sc-none"}">${has ? x.score : "—"}</span></td>
    <td class="sc-w">${cellList(x.why, "—")}</td>
    <td class="sc-g">${cellList(x.great, has ? "Nothing noted." : "—")}</td>
    <td class="sc-b">${cellList(x.wrong, has ? (x.score >= 100 ? "Nothing — full marks." : "Nothing noted.") : "—")}</td>
    <td class="sc-n">${cellList(x.better, has ? "Keep the same approach." : "—")}</td></tr>`;
}

// The card: the totals, then each day (its score, result and remark) with a row per graded piece explaining its score.
function cardHtml(rec, prog){
  const s = compute(rec, prog), n = COURSE().days.length;
  return `<div class="sc-tiles">
      <div class="sc-tile"><span>Days completed</span><b>${s.daysDone}<small>/${n}</small></b></div>
      <div class="sc-tile"><span>Average score</span><b>${s.average == null ? "—" : s.average}</b></div>
      <div class="sc-tile"><span>Graded pieces passed</span><b>${s.piecesPassed}<small>/${s.piecesTotal}</small></b></div>
      <div class="sc-tile"><span>Result</span>${pill(s.result)}</div>
    </div>
    <div class="sc-sw"><table class="sc-st-t"><thead><tr><th>Activity</th><th>Score</th><th>🧾 Why this score</th><th>⭐ What you did great</th><th>❌ What was wrong</th><th>💡 What could have been done better</th></tr></thead>
      ${s.days.map((x, i) => { const d = COURSE().days[i], rows = rowsOf(d, rec, prog); return `<tbody>
      <tr class="sc-day"><th colspan="6" scope="rowgroup"><span class="sc-day-h"><b>Day ${x.day}</b> <span class="sc-day-t">${E(x.title)}</span></span>
        <span class="sc-day-s">Day score ${num(x.score)}</span>${pill(x.result)}<span class="sc-remark">${E(x.remark)}</span></th></tr>
      ${rows.length ? rows.map(rowHtml).join("") : `<tr class="sc-act"><td colspan="6"><i>No graded pieces this day.</i></td></tr>`}</tbody>`; }).join("")}
    </table></div>
    <p class="sc-note">Pass mark: ${PASS} on every graded piece. A day's score is the average of its graded pieces; a day is Passed when its steps are done and every piece is at ${PASS} or above. Practice shows your best run; a lower run never lowers it.</p>`;
}

// 🏅 Scorecard, the trainee's own page.
function view(){
  const S = window.state;
  return `<section class="page-hero"><p class="eyebrow">Scorecard</p><h1>🏅 Your Scorecard</h1>
      <p class="lead">Every graded piece of the course in one place: each day's practice session, case work and process questions, against a pass mark of ${PASS}.</p></section>
    <section class="card sec sc-card">${cardHtml(S.trainee, S.progress)}</section>`;
}

// Admin → 🏅 Scorecards: the batch, a row per trainee.
function adminSection(){
  const S = window.state, rows = S.admin.rows || [], P = S.admin.progress || {};
  const body = !rows.length ? `<tr><td colspan="${COURSE().days.length + 5}">No trainees yet.</td></tr>` : rows.map((r) => {
    const s = compute(r, P[r.id]);
    return `<tr><td>${E(r.name || r.id)}</td><td class="mono">${E(r.batch || "")}</td>${s.days.map((x) => `<td title="${E(x.result)}">${num(x.score)}</td>`).join("")}<td>${s.daysDone}/${s.days.length}</td><td>${num(s.average)}</td><td>${pill(s.result)}</td><td><button class="btn btn-ghost btn-sm" onclick="CSScore.show('${E(r.id)}')">View</button></td></tr>`;
  }).join("");
  return `<section class="card sec" id="sc-admin"><h2>🏅 Scorecards</h2>
      <p class="sc-note">Each day's score is the average of its graded pieces (practice, case work, process questions); pass mark ${PASS}.</p>
      <div class="table-wrap"><table class="admin-table"><thead><tr><th>Name</th><th>Batch</th>${COURSE().days.map((d) => `<th>Day ${d.day}</th>`).join("")}<th>Days done</th><th>Average</th><th>Result</th><th></th></tr></thead><tbody>${body}</tbody></table></div>
    </section>`;
}
function show(id){
  const S = window.state, r = (S.admin.rows || []).find((x) => x.id === id); if(!r) return;
  window.overlay(`<div class="mh-day">${E(r.batch || "")} · Scorecard</div><div class="mh-title">${E(r.name || r.id)}</div>`, `<div class="sc-card">${cardHtml(r, (S.admin.progress || {})[id])}</div>`);
}

// Trainers open the batch's Scorecards from 🏅 Scorecards in the top bar.
function openAdmin(){ window.goto("admin"); setTimeout(() => { const el = document.getElementById("sc-admin"); if(el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 350); }

window.CSScore = { PASS, compute, rowsOf, view, cardHtml, adminSection, show, openAdmin };
})();
