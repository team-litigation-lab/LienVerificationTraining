/* ============================================================
   📚 The Lien Verification course, in the CM course's format:
   the dashboard's Day cards → a day's Objectives page (what the trainee
   will be able to do, and the day's outline) → the day's steps, one at a
   time: the Training Agenda, then each module, then Day complete.
   This is the one place the course content is written down.

   day        — the day's number. Progress is saved against it (the trainee
                record's dayProgress[<day>], which the Portal reads), so never
                renumber a day.
   title      — the day's title (the Day card's head, the day's pages).
   theme      — the short theme on the Day card's pill and the agenda.
   objectives — "By the end of today you'll be able to …".
   topics     — the day's outline, in deck order, with the slides each covers.
   modules    — the day's modules, in order. Each has a stable id (progress is
                saved against it too) and is one of:
                  kind "slides" — a lesson deck kept on this site: deck is its id in
                                 js/cs-decks.js (the slide images in decks/<deck>/,
                                 built by decks/build_decks.py).
                  kind "practice" — a practice session or simulation, played on the
                                 stage: sim is its id in js/cs-practice.js.
                  kind "deck"  — a Canva deck. link: the Canva view link
                                 (canva.com/design/<id>/<token>/view); the page
                                 embeds it as …/view?embed, so trainees see the
                                 slides, never the editor.
                  kind "video" — a recorded session on Google Drive. link: the
                                 file link (drive.google.com/file/d/<id>/view);
                                 the page embeds it as …/preview. The file must
                                 be shared with whoever takes the course (the
                                 legalsupporthelp.com Workspace, or anyone with
                                 the link), or the player asks them to sign in.
   A module is complete when the trainee moves on from it (Next), and the day
   when they finish its last step.

   An admin can replace a module's address without a deploy: Admin → Course
   links (stored in settings:course by module id; an empty box goes back to
   this file).
   ============================================================ */
window.LN_COURSE = {
  title: "Lien Verification Training",
  track: "Lien Verification Track",
  headline: "Medical Lien Balance Verification Professional Development Workshop",
  role: "Lien Verification Specialist",
  days: [
    {
      day: 1,
      title: "Lien Balance Verification Overview",
      theme: "Liens, Their Types & the Workflow",
      icon: "\ud83d\udd0e",
      objectives: [
        "Explain what a lien is, how it works, and what it means for the client and the firm",
        "Name the types of liens: medical, attorney, pre-settlement, workers' compensation and miscellaneous",
        "Explain the purpose of verification: accurate recovery, no overpayment, compliance, maximum client recovery and no delays",
        "Walk the lien verification process and its non-negotiables",
        "Work a sample settlement from settlement to total net disbursement",
        "Explain why medical liens matter, and collect coverage data"
      ],
      topics: [
        { h: "Overview: What a Lien Is and How It Works" },
        { h: "Types of Liens" },
        { h: "Purpose of Lien Verification" },
        { h: "The Workflow & Non-Negotiables" },
        { h: "Medical Liens: Sample Scenario & Settlement Calculation" },
        { h: "Significance & the Mainstream Process" },
        { h: "Recorded Session: Liens, Lien Holders & Reductions" }
      ],
      modules: [
        { id: "d1-deck", kind: "slides", deck: "lv-day1", title: "Medical Lien Balance Verification Training \u00b7 Day 1", slides: 59 },
        { id: "d1-video", kind: "video", title: "Liens, Lien Holders & Reductions",
          link: "https://drive.google.com/file/d/1rmdqifC5m_3c9FYDZkrzsUampVKmUMaY/view" },
        { id: "d1-check", kind: "practice", sim: "lv1-check", title: "Knowledge Check", label: "Knowledge Check", note: "Questions on today's lesson, scored out of 100, with feedback on every answer." },
        { id: "d1-sim", kind: "practice", sim: "lv1-sim", title: "Practical Simulation", label: "Simulation", note: "Work today's lesson on a case, step by step, scored out of 100." },
        { id: "d1-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Medical Lien Balance Verification Training \u00b7 Day 1", link: "/handouts/lv-day1.pdf" }
          ] }
      ]
    },
    {
      day: 2,
      title: "The Lien Balance Verification Request",
      theme: "The Request, the CMS, the Final Lien Ledger & Tracking",
      icon: "\ud83d\udce8",
      objectives: [
        "Follow the process flow of a Lien Balance Verification request",
        "Draft and send the request, and review the lienholder's response",
        "Navigate the CMS with its best practices",
        "Read a Final Lien Ledger and its key points",
        "Keep the balance verification tracker current",
        "Name the LV file and log it with the Notes and Tasks templates",
        "Complete the recorded LV demo in 45 minutes or less"
      ],
      topics: [
        { h: "Lien Balance Verification Request: Steps 1 to 5" },
        { h: "CMS Navigation and Best Practices" },
        { h: "Final Lien Ledger" },
        { h: "Tracking" },
        { h: "Tutorial Video: Lien Balance Verification Request" },
        { h: "LV Guide" },
        { h: "Practice Session: LV Request Drill" },
        { h: "Recorded Demo" }
      ],
      trainerNotes: {"agenda": ["AM: the deck, then the LV Tutorial Video. PM: the recorded LV demo (45 minutes max), then shadowing."], "d2-lv-demo": ["All trainees must be fully prepared to perform their scheduled demonstrations. A missed demonstration due to unpreparedness counts as a missed performance and is not rescheduled.", "The only valid reason to reschedule is a Training Team factor: lack of time in the session, a scheduling conflict the training team caused, or a technical limitation.", "LV Demo metric, Time Management & Efficiency: the ideal completion time is 45 minutes. Going beyond it is a significant deduction."]},
      modules: [
        { id: "d2-deck", kind: "slides", deck: "lv-day2", title: "Medical Lien Balance Verification Training \u00b7 Day 2", slides: 53 },
        { id: "d2-lv-tutorial", kind: "video", title: "Tutorial Video: Lien Balance Verification Request", label: "LV Tutorial",
          note: "Take notes as you watch: they become your process guide for the demo.",
          link: "https://drive.google.com/file/d/1wRXRh8TySsosyxurXzhtCYwbXDJyN9A9/view" },
        { id: "d2-lv-guide", kind: "guide", title: "LV Guide", label: "LV Guide",
          sections: [
            { h: "Naming convention", rows: [
              ["File name", "MED – Lien Holder(Provider) – Lien Balance Verification mm.dd.yyyy (your first name)"],
              ["NPIM", "Put the doctor's name after the medical provider's name"],
              ["Example", "MED - RDG(NPIM Dr. Fabito) - Lien Balance Verification 08.17.2022 (jane)"]
            ] },
            { h: "Sending the request", rows: [
              ["How", "E-mail or e-filing"],
              ["Subject line", "Name of the client - Name of the lien holder (medical provider) - Request for Lien Verification"]
            ] },
            { h: "Report format, Notes tab", preLabel: "Notes tab template", pre: "Sent filename w/o va's name. Saved in Meds and Docs tab. Thank you. (va's first name)",
              p: "Highlight the filename, right-click and paste the internal link." },
            { h: "Report format, Tasks tab", preLabel: "Tasks tab template", pre: "mm/dd/yyyy Sent LV request to lien holder (medical provider). Saved in Meds and Docs tab. Thank you. (va's first name)" },
            { h: "The demo", rows: [
              ["Time limit", "45 minutes. Going beyond it is a significant deduction under Time Management & Efficiency."],
              ["Graded on", "Drafting, naming, dispatch and the Notes/Tasks templates"],
              ["Be ready", "A demo missed because you weren't prepared counts as a missed performance and is not rescheduled."]
            ] }
          ] },
        { id: "d2-practice", kind: "practice", sim: "lv", title: "Practice Session: LV Request Drill", label: "Practice Session",
          note: "Practice the LV request before your recorded demo: the file name, the subject line and the Notes and Tasks entries, checked as you go." },
        { id: "d2-lv-demo", kind: "video", title: "Recorded Demo: Sending a Lien Balance Verification Request", label: "LV Recorded Demo",
          note: "Watch this while you wait for your turn to perform your own LV demo.",
          link: "https://drive.google.com/file/d/1Q55zhsC-Oi2A1kQSo-CoBr3C7DsFmFmv/view" },
        { id: "d2-check", kind: "practice", sim: "lv2-check", title: "Knowledge Check", label: "Knowledge Check", note: "Questions on today's lesson, scored out of 100, with feedback on every answer." },
        { id: "d2-sim", kind: "practice", sim: "lv2-sim", title: "Practical Simulation", label: "Simulation", note: "Work today's lesson on a case, step by step, scored out of 100." },
        { id: "d2-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Medical Lien Balance Verification Training \u00b7 Day 2", link: "/handouts/lv-day2.pdf" }
          ] }
      ]
    },
    {
      day: 3,
      title: "Entities, Duplicate Liens & ChartSwap",
      theme: "Who Can Hold a Lien, Duplicates & ChartSwap",
      icon: "\ud83d\uddc2",
      objectives: [
        "Name the entities that can hold a lien: providers, hospitals, health and auto insurers, workers' compensation, government programs and third-party funders",
        "Handle a lien held by a funder, and know why providers sell their invoices",
        "Check for duplicate liens and address them early",
        "Request lien documents through ChartSwap and save them to the file"
      ],
      topics: [
        { h: "Participating Entities" },
        { h: "Lien Handlers, Funders & the Lienholder's Contact Card" },
        { h: "Duplicate Liens" },
        { h: "ChartSwap: Requesting Lien Documents" },
        { h: "Summary" }
      ],
      modules: [
        { id: "d3-deck", kind: "slides", deck: "lv-day3", title: "Medical Lien Balance Verification Training \u00b7 Day 3", slides: 48 },
        { id: "d3-check", kind: "practice", sim: "lv3-check", title: "Knowledge Check", label: "Knowledge Check", note: "Questions on today's lesson, scored out of 100, with feedback on every answer." },
        { id: "d3-sim", kind: "practice", sim: "lv3-sim", title: "Practical Simulation", label: "Simulation", note: "Work today's lesson on a case, step by step, scored out of 100." },
        { id: "d3-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Medical Lien Balance Verification Training \u00b7 Day 3", link: "/handouts/lv-day3.pdf" }
          ] }
      ]
    }
  ]
};

/* The embeddable address for a share link. Returns "" for anything that isn't
   a Canva design or a Drive file, so a typo never puts a stranger's page in the frame. */
window.lnEmbed = {
  deck: function(link){
    var m = /^https:\/\/(?:www\.)?canva\.com\/design\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)/.exec(String(link || "").trim());
    return m ? "https://www.canva.com/design/" + m[1] + "/" + m[2] + "/view?embed" : "";
  },
  video: function(link){
    var s = String(link || "").trim();
    var m = /^https:\/\/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/.exec(s) || /^https:\/\/drive\.google\.com\/open\?id=([A-Za-z0-9_-]+)/.exec(s);
    return m ? "https://drive.google.com/file/d/" + m[1] + "/preview" : "";
  },
  // The embed address for a module of either kind, and the page "Open in a new tab" goes to (the viewer, never the Canva editor).
  embed: function(kind, link){ return kind === "video" ? this.video(link) : this.deck(link); },
  page: function(kind, link){ var e = this.embed(kind, link); return kind === "video" ? e.replace(/\/preview$/, "/view") : e.replace(/\?embed$/, ""); }
};
