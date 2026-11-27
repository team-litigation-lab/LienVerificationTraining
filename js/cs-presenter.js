/* ============================================================
   🖥 Presenter view: a second window for the trainer, opened from the bar under the lesson (🖥 Presenter view).
   On a deck: the slide that's up, the next one, the speaker's notes for the slide (decks/<deck>/notes.json, built into
   js/cs-decks.js), the slide count and a timer. On any other step: the step, its note and the trainer's notes.
   ‹ Previous / Next › (or the ← → keys) in either window move both: the main window shows the slide to the room while
   the presenter reads the notes. The presenter window follows every change the main window makes (CSPresenter.refresh,
   called after each render and each slide move).
   ============================================================ */
(function(){
"use strict";
let win = null, started = 0, timer = null, bound = false;
const E = (t) => window.esc(String(t == null ? "" : t));
const U = (src) => E(new URL(src, location.href).href);   // the presenter window has no address of its own, so images need full URLs

const CSS = `
*{box-sizing:border-box;} html,body{margin:0;height:100%;}
body{font-family:Inter,system-ui,sans-serif;background:linear-gradient(135deg,#1E2340 0%,#2B3158 60%,#353C68 100%);color:#fff;display:flex;flex-direction:column;}
header{display:flex;align-items:center;gap:14px;padding:10px 18px;border-bottom:3px solid #DB8437;background:#1A1F38;}
header b{font-size:15px;letter-spacing:.06em;text-transform:uppercase;color:#F5C99A;}
header .where{flex:1;min-width:0;font-size:14px;font-weight:600;color:#D9DCEA;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.pill{border-radius:999px;padding:6px 14px;font-weight:800;font-size:14px;background:rgba(219,132,55,.18);border:1.5px solid rgba(240,192,138,.75);color:#fff;}
.clock{font-family:'IBM Plex Mono',monospace;}
main{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:16px;padding:16px 18px;}
.now,.side{min-height:0;display:flex;flex-direction:column;gap:10px;}
.lbl{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#F5C99A;text-align:center;}
.slide{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;background:#141832;border-radius:14px;overflow:hidden;border:3px solid #DB8437;}
.slide img{max-width:100%;max-height:100%;object-fit:contain;display:block;}
.next{height:30%;min-height:120px;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:12px;overflow:hidden;opacity:.92;}
.next img{max-width:100%;max-height:100%;object-fit:contain;}
.next.end{background:rgba(255,255,255,.08);color:#C9CCDD;font-weight:700;}
.notes{flex:1;min-height:0;overflow:auto;background:#FFFDF8;color:#141A2E;border-radius:14px;padding:18px 22px;font-size:20px;line-height:1.6;border:1px solid rgba(240,192,138,.6);}
.notes h2{margin:0 0 8px;font-size:22px;text-align:center;color:#1E2340;}
.notes .t{font-size:16px;font-weight:700;color:#8A4A12;text-align:center;margin:0 0 12px;}
.notes ul{margin:8px 0 0;padding-left:22px;font-size:17px;}
.notes .empty{color:#5A6078;font-style:italic;text-align:center;}
footer{display:flex;align-items:center;justify-content:center;gap:12px;padding:10px 18px;background:#1A1F38;border-top:1px solid rgba(255,255,255,.12);}
footer button{font:inherit;font-weight:800;font-size:16px;border-radius:999px;padding:10px 26px;cursor:pointer;border:1.5px solid rgba(240,192,138,.75);background:rgba(219,132,55,.18);color:#fff;}
footer button.go{background:linear-gradient(180deg, #fde7b0 0%, #f5c451 50%, #e0a43a 100%);border-color:#e0a43a;color:#1E2340;}
footer button.go:hover{background:linear-gradient(180deg, #ffefc4 0%, #f7cf6a 50%, #e8b04a 100%);filter:none;}
footer button:hover{filter:brightness(1.12);}
footer .count{font-family:'IBM Plex Mono',monospace;font-size:15px;color:#D9DCEA;min-width:150px;text-align:center;}
.step{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);border-radius:14px;padding:24px;}
.step h1{margin:0;font-size:32px;} .step p{margin:0;font-size:18px;color:#D9DCEA;max-width:60ch;}
@media (max-width:900px){ main{grid-template-columns:1fr;} }
`;

function where(){
  const S = window.state, d = window.dayByNum(S.dayNum); if(!d) return null;
  const steps = window.stepsOf(d), i = Math.max(0, Math.min(steps.length - 1, S.step || 0)), s = steps[i];
  return { d, steps, i, s };
}
function trainerList(d, s){
  if(!window.state.isAdmin || !d.trainerNotes) return [];
  return d.trainerNotes[s.type === "module" ? s.module.id : s.type] || [];
}
function body(){
  const w = where(); if(!w || window.state.view !== "player") return { where: "Open a day's lesson in the main window", main: `<div class="step"><h1>Waiting for the lesson</h1><p>Start a day in the main window; this window follows it.</p></div>`, side: "", count: "" };
  const { d, steps, i, s } = w, tl = trainerList(d, s);
  const extra = tl.length ? `<h2 style="margin-top:16px">🔒 Trainer notes</h2><ul>${tl.map((x) => `<li>${E(x)}</li>`).join("")}</ul>` : "";
  const place = `Day ${d.day} · ${E(d.title)} · Step ${i + 1} of ${steps.length}`;
  if(s.type === "module" && s.module.kind === "slides"){
    const m = s.module, deck = window.deckOf(m);
    if(deck){
      const k = window.slideAt(m), sl = deck.slides[k], nx = deck.slides[k + 1];
      return {
        where: `${place} · ${E(m.title)}`,
        main: `<div class="lbl">Now showing · slide ${k + 1} of ${deck.slides.length}${sl.section ? " · " + E(sl.section) : ""}</div><div class="slide"><img src="${U(sl.img)}" alt="${E(sl.title)}"></div>`,
        side: `<div class="lbl">Next</div>${nx ? `<div class="next"><img src="${U(nx.img)}" alt="${E(nx.title)}"></div>` : `<div class="next end">End of the deck · Next moves on to step ${i + 2}</div>`}
          <div class="lbl">Speaker's notes</div><div class="notes"><p class="t">${E(sl.title)}</p>${sl.notes ? `<div>${E(sl.notes)}</div>` : `<p class="empty">No notes for this slide.</p>`}${extra}</div>`,
        count: `Slide ${k + 1} / ${deck.slides.length}`
      };
    }
  }
  const head = s.type === "agenda" ? "Training Agenda" : s.type === "done" ? "Day Complete" : s.module.title;
  const note = s.type === "module" && s.module.note ? s.module.note : s.type === "agenda" ? d.objectives.join("; ") + "." : "";
  return {
    where: place,
    main: `<div class="step"><h1>${E(head)}</h1>${s.type === "module" ? `<p>${E(window.modLabel(s.module))}</p>` : ""}</div>`,
    side: `<div class="lbl">Notes</div><div class="notes"><p class="t">${E(head)}</p>${note ? `<div>${E(note)}</div>` : tl.length ? "" : `<p class="empty">No notes for this step.</p>`}${extra}</div>`,
    count: `Step ${i + 1} / ${steps.length}`
  };
}
function clock(){
  if(!win || win.closed){ clearInterval(timer); timer = null; return; }
  const el = win.document.getElementById("pv-clock"); if(!el) return;
  const t = Math.floor((Date.now() - started) / 1000);
  el.textContent = `⏱ ${String(Math.floor(t / 3600)).padStart(2, "0")}:${String(Math.floor(t / 60) % 60).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
}
function refresh(){
  if(!win || win.closed) return;
  const b = body(), doc = win.document;
  if(!bound || !doc.getElementById("pv-main")){
    bound = true;
    doc.open();
    doc.write(`<!doctype html><html><head><meta charset="utf-8"><title>🖥 Presenter view · ${E(window.LN_COURSE.track || "Closing Specialist Track")}</title><style>${CSS}</style></head><body>
      <header><b>🖥 Presenter view</b><span class="where" id="pv-where"></span><span class="pill clock" id="pv-clock">⏱ 00:00:00</span><button class="pill" id="pv-reset" style="cursor:pointer">Reset timer</button></header>
      <main><section class="now" id="pv-main"></section><section class="side" id="pv-side"></section></main>
      <footer><button id="pv-prev">‹ Previous</button><span class="count" id="pv-count"></span><button class="go" id="pv-next">Next ›</button></footer></body></html>`);
    doc.close();
    doc.getElementById("pv-prev").onclick = () => go(-1);
    doc.getElementById("pv-next").onclick = () => go(1);
    doc.getElementById("pv-reset").onclick = () => { started = Date.now(); clock(); };
    doc.addEventListener("keydown", (e) => { if(e.key === "ArrowRight" || e.key === "PageDown" || e.key === " "){ e.preventDefault(); go(1); } if(e.key === "ArrowLeft" || e.key === "PageUp"){ e.preventDefault(); go(-1); } });
  }
  doc.getElementById("pv-where").innerHTML = b.where;
  doc.getElementById("pv-main").innerHTML = b.main;
  doc.getElementById("pv-side").innerHTML = b.side;
  doc.getElementById("pv-count").textContent = b.count;
  const w = where();
  doc.getElementById("pv-next").textContent = w && w.i === w.steps.length - 1 && !(window.curSlidesModule() && hasNextSlide()) ? "Finish ›" : "Next ›";
}
function hasNextSlide(){ const m = window.curSlidesModule(), deck = m && window.deckOf(m); return !!(deck && window.slideAt(m) < deck.slides.length - 1); }
function go(delta){
  const m = window.curSlidesModule();
  if(m && window.slideGo(m.id, delta)) return;
  const w = where(); if(!w) return;
  const j = w.i + delta;
  if(j >= 0 && j < w.steps.length) window.stepTo(j);
  else if(j >= w.steps.length) window.goto("dashboard");
}
function open(){
  if(win && !win.closed){ win.focus(); refresh(); return; }
  win = window.open("", "cs-presenter", "width=1280,height=780");
  if(!win){ alert("Your browser blocked the Presenter view window. Allow pop-ups for this site and try again."); return; }
  started = Date.now(); bound = false;
  refresh(); clock();
  if(!timer) timer = setInterval(clock, 1000);
}
window.CSPresenter = { open, refresh };
window.openPresenter = open;
})();
