/* ============================================================
   🎬 Recorded videos stay locked until the trainer opens them, after the discussion (as on the CM and EA / PA courses).

   Every video module (kind "video" or "videos": the recorded sessions, tutorials and demos) shows a 🔒 panel to a
   trainee, and the day card's ▶ Video shows 🔒 Video, until a trainer ticks it in Admin → 🎬 Unlock videos, for every
   batch or for one. A trainer always sees and plays every video.

   Stored in one shared record, settings:openvideos = { all: [module id, …], batches: { "<BATCH>": [module id, …] } },
   which every trainee may read (worker.js PUBLIC_READ) and only a trainer writes. A trainee re-reads it at most once a
   minute and the page redraws when it changes; a failed read never locks a video that was open.
   ============================================================ */
(function(){
"use strict";
const KEY = "settings:openvideos";
const E = (t) => window.esc(t);
const S = () => window.state;
const bkey = (b) => String(b || "").trim().toUpperCase();
let loadedAt = 0, loading = null;

function modules(){ return window.LN_COURSE.days.flatMap((d) => d.modules.filter((m) => m.kind === "video" || m.kind === "videos").map((m) => Object.assign({ day: d.day }, m))); }
function shape(x){
  const ids = new Set(modules().map((m) => m.id)), clean = (a) => [...new Set((Array.isArray(a) ? a : []).filter((id) => ids.has(id)))];
  const o = { all: [], batches: {} }; if(!x || typeof x !== "object") return o;
  o.all = clean(x.all);
  Object.keys(x.batches || {}).forEach((k) => { const v = clean(x.batches[k]); if(v.length) o.batches[bkey(k)] = v; });
  return o;
}
function load(force){
  if(loading || (!force && Date.now() - loadedAt < 60000)) return loading;
  loadedAt = Date.now();
  return loading = kvGet(KEY).then((v) => {
    loading = null;
    if(v == null && S().openVideos) return;            // a failed read never locks a video again
    const next = shape(v), changed = JSON.stringify(next) !== JSON.stringify(S().openVideos);
    S().openVideos = next;
    if(changed && !S().isAdmin && /^(dashboard|player)$/.test(S().view)) render();
  }).catch(() => { loading = null; });
}
function unlocked(m){
  if(S().isAdmin) return true;
  load(false);
  const o = S().openVideos; if(!o) return false;
  const batch = bkey((S().trainee || {}).batch || S().traineeBatch);
  return o.all.includes(m.id) || (o.batches[batch] || []).includes(m.id);
}
function why(){ toast("🔒 Your trainer opens this video after the discussion. It appears here within a minute of that."); }
function lockedHtml(m){
  return `<div class="vl-lock"><div class="vl-ic" aria-hidden="true">🔒</div><h3>${E(m.title)}</h3>
    <p>This recording opens after the discussion. Your trainer unlocks it for your batch, and it appears here within a minute.</p>
    <p class="vl-sub">You can move on with Next; come back to it once it's open.</p></div>`;
}

/* ---------- Admin → 🎬 Unlock videos ---------- */
function adminSection(){
  const st = S(), o = st.openVideos || shape(null), sel = st.vidBatch || "__all";
  if(!st.openVideos) load(true);
  const batches = [...new Set((st.admin.rows || []).map((r) => bkey(r.batch)).filter(Boolean))].sort();
  const all = new Set(o.all), mine = new Set(sel === "__all" ? o.all : o.batches[sel] || []);
  const byDay = window.LN_COURSE.days.map((d) => {
    const ms = modules().filter((m) => m.day === d.day); if(!ms.length) return "";
    return `<div class="vl-day"><h4>Day ${d.day} · ${E(d.title)}</h4>${ms.map((m) => {
      const via = sel !== "__all" && all.has(m.id), on = via || mine.has(m.id);
      return `<label class="vl-item${on ? " on" : ""}"><input type="checkbox" ${on ? "checked" : ""} ${via ? "disabled" : ""} onchange="CSVideos.toggle('${m.id}', this.checked)">
        <span><b>🎬 ${E(m.label || m.title)}</b>${m.label && m.label !== m.title ? E(m.title) : ""}<small>${on ? (via || sel === "__all" ? "open for all batches" : "open for " + E(sel)) : "locked: trainees see 🔒"}</small></span></label>`;
    }).join("")}</div>`;
  }).join("");
  return `<section class="card sec" id="vl-admin"><div class="ad-bar"><h2>🎬 Unlock videos</h2>
      <select onchange="CSVideos.pick(this.value)"><option value="__all">All batches</option>${batches.map((b) => `<option ${b === sel ? "selected" : ""}>${E(b)}</option>`).join("")}</select></div>
    <p class="sc-note">Recorded videos stay locked for trainees until you open them here, after the discussion: for every batch, or for the batch picked. You can always play them yourself.</p>
    <div class="vl-days">${byDay}</div></section>`;
}
function pick(v){ S().vidBatch = v; render(); }
async function toggle(id, on){
  if(!S().isAdmin) return;
  let cur; try{ cur = await kvGet(KEY); }catch(e){ toast("Couldn't read the unlocked videos; nothing was changed. Try again."); render(); return; }
  const o = shape(cur), sel = S().vidBatch || "__all", list = new Set(sel === "__all" ? o.all : o.batches[sel] || []);
  if(on) list.add(id); else list.delete(id);
  if(sel === "__all") o.all = [...list]; else { o.batches[sel] = [...list]; if(!o.batches[sel].length) delete o.batches[sel]; }
  try{ await kvSet(KEY, o); }catch(e){ toast("Not saved: check your connection and try again."); render(); return; }
  S().openVideos = o;
  const m = modules().find((x) => x.id === id);
  toast(`${m ? m.title : "The video"}: ${on ? "opened" : "locked"} for ${sel === "__all" ? "all batches" : sel}. Trainees see it within a minute.`);
  render();
}
window.CSVideos = { KEY, unlocked, why, lockedHtml, adminSection, pick, toggle, load, shape };
})();
