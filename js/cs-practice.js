/* ============================================================
   🎯 Practice sessions and simulations, played inside a day's steps (module kind "practice", sim: <id>).

   A sim is a run of scenarios; a scenario is a case brief and its steps, answered one at a time, each with
   feedback before the next. Step kinds:
     choice — a question (optionally a line someone says to you: who + line) and options; one is right (ok: true).
              Every option has feedback (fb). Worth 1 point.
     fields — boxes to type in (a file name, a subject line, a Notes entry …). Each box is checked against its
              rule (re: a regular expression, matched case-insensitively after the text is tidied: dashes made
              plain, spaces squeezed). Worth 1 point per box. answer: what a right answer looks like.
     number — a figure to work out. answer, tol (how close counts), unit ("$" or "%"). Worth 1 point.
     order  — steps to put in order (items, listed in the right order; the page shuffles them). Worth 1
              point per item in its right place.
   The score is the points earned out of the points there are, out of 100. Each run is saved to the trainee's
   progress:<id> as practice[<module id>] = { best, last, runs, at }, and Admin → Trainees → ✍️ Answers shows it.
   ============================================================ */
window.CS_PRACTICE = {
  lv: {
    title: "LV Request Drill",
    intro: "Three lien balance verification requests. For each, write what you would send and log, exactly as the LV Guide sets it out. Today's date in these cases is 11/26/2026, and (your first name) is your own first name.",
    scenarios: [
      {
        title: "Maria Santos · Riverside Orthopedics",
        brief: ["Client: Maria Santos", "Lien holder (medical provider): Riverside Orthopedics", "Today: 11/26/2026"],
        steps: [
          { t: "fields", q: "Name the file, write the subject line, and write the Notes and Tasks entries.", fields: [
            { label: "File name", re: "^med - riverside orthopedics - lien balance verification 11\\.26\\.2026 \\([a-z][a-z .'-]*\\)$", answer: "MED - Riverside Orthopedics - Lien Balance Verification 11.26.2026 (your first name)" },
            { label: "Subject line", re: "^maria santos - riverside orthopedics - request for lien verification$", answer: "Maria Santos - Riverside Orthopedics - Request for Lien Verification" },
            { label: "Notes tab", re: "^sent med - riverside orthopedics - lien balance verification 11\\.26\\.2026\\.? saved in meds and docs tab\\.? thank you\\.? \\([a-z][a-z .'-]*\\)$", answer: "Sent MED - Riverside Orthopedics - Lien Balance Verification 11.26.2026. Saved in Meds and Docs tab. Thank you. (your first name)" },
            { label: "Tasks tab", re: "^11/26/2026 sent lv request to riverside orthopedics\\.? saved in meds and docs tab\\.? thank you\\.? \\([a-z][a-z .'-]*\\)$", answer: "11/26/2026 Sent LV request to Riverside Orthopedics. Saved in Meds and Docs tab. Thank you. (your first name)" }
          ] }
        ]
      },
      {
        title: "James Carter · Coastal Pain Center (NPIM)",
        brief: ["Client: James Carter", "Lien holder: Coastal Pain Center, an NPIM provider", "Treating doctor: Dr. Alvarez", "Today: 11/26/2026"],
        steps: [
          { t: "fields", q: "Name the file. Remember the NPIM rule.", fields: [
            { label: "File name", re: "^med - coastal pain center ?\\(npim dr\\.? alvarez\\) - lien balance verification 11\\.26\\.2026 \\([a-z][a-z .'-]*\\)$", answer: "MED - Coastal Pain Center(NPIM Dr. Alvarez) - Lien Balance Verification 11.26.2026 (your first name)" }
          ] },
          { t: "choice", q: "How do you send the request?", options: [
            { a: "By e-mail or e-filing, then apply the Notes and Tasks templates", ok: true, fb: "Right: e-mail or e-filing, and the request isn't done until Notes and Tasks are logged." },
            { a: "By phone, and log it later in the week", fb: "An LV request is sent in writing (e-mail or e-filing) and logged the same day." },
            { a: "Ask the client to call the provider for their balance", fb: "Verifying the lien balance is our job, in writing, so the figure is on file." }
          ] },
          { t: "choice", q: "In the Notes entry, where does the internal link go?", options: [
            { a: "On the filename: highlight it, right-click and paste the internal link", ok: true, fb: "Right. The link sits on the filename, not loose in the entry." },
            { a: "At the end of the entry, after your name", fb: "Highlight the filename itself and paste the internal link there." },
            { a: "Nowhere: the Notes entry is text only", fb: "The Notes entry links the saved file: on the filename." }
          ] }
        ]
      },
      {
        title: "Your recorded LV demo",
        brief: ["You are scheduled for the recorded LV demo this afternoon."],
        steps: [
          { t: "choice", q: "What is the ideal completion time for the LV demo?", options: [
            { a: "45 minutes", ok: true, fb: "Right. Going beyond 45 minutes is a significant deduction under Time Management & Efficiency." },
            { a: "90 minutes", fb: "The ideal is 45 minutes; beyond it is a significant deduction." },
            { a: "There is no time limit", fb: "Time Management & Efficiency is a demo metric: the ideal is 45 minutes." }
          ] },
          { t: "choice", q: "You aren't ready when your demo slot comes. What happens?", options: [
            { a: "It counts as a missed performance and is not rescheduled", ok: true, fb: "Right. Only a Training Team factor (lack of time, a conflict the team caused, a technical limitation) reschedules a demo." },
            { a: "You can ask to go last instead", fb: "An unprepared slot is a missed one. Come to the slot ready." },
            { a: "The trainer reschedules it for tomorrow", fb: "A demo missed because you weren't prepared is not rescheduled." }
          ] }
        ]
      }
    ]
  },

  plans: {
    title: "Health Subrogation Simulation",
    intro: "Work a health plan's lien from the Notice of Lien to the final payoff, the HI Subro workflow in order, then sort six plans' documents by the rules that govern them and audit one plan's itemization.",
    scenarios: [
      {
        title: "The Notice of Lien: Global Health Blue-Shield",
        brief: ["Client: John Doe · Date of loss: 02/14/2026",
          "Global Health Blue-Shield's Subrogation Dept. asserts a First-Priority Lien for DOS 02/14/2026 – 05/30/2026:",
          "02/14/2026 Metro General ER · Emergency trauma care · $4,200.00",
          "03/10/2026 Metropolis Radiology · MRI lumbar/cervical · $850.00",
          "05/12/2026 Metro Surgical Ctr · Microdiscectomy (facility) · $6,150.00",
          "\"Do not issue settlement proceeds without a final payoff letter from this office.\""],
        steps: [
          { t: "choice", q: "What is this notice telling the firm?", options: [
            { a: "The plan paid accident-related claims and will be repaid from the settlement; it's a lien on the settlement", ok: true, fb: "Right. A Notice of Lien says the plan paid claims for the accident and waits to be reimbursed when the case resolves." },
            { a: "The plan is denying the client's claims", fb: "It's the opposite: the plan paid, and wants that money back from the settlement." },
            { a: "The client owes the plan now, before the case settles", fb: "The plan waits for the firm to reimburse it from the settlement, when the case resolves." }
          ] },
          { t: "number", q: "Check the plan's total. What does the lien come to?", answer: 11200, tol: 0.01, unit: "$", fb: "$4,200.00 + $850.00 + $6,150.00 = $11,200.00. It matches the notice's total, so save it in the health insurance tab and update the lien amount." },
          { t: "choice", who: "Member services", line: "Thanks for calling. Can you give me the other driver's insurance company and claim number?", q: "What do you say?", options: [
            { a: "You can't give out the defendant's insurance or claim number; you're calling about sending the LOR and HIPAA and whether they handle subrogation", ok: true, fb: "Right. Never provide the defendant's insurance, claim number or other pertinent information." },
            { a: "Give it to them: it helps the plan", fb: "Do not provide the defendant's insurance, claim number or other pertinent information." },
            { a: "Hang up", fb: "Stay on the call: you need to know how to send the LOR and HIPAA, and whether they handle subrogation." }
          ] },
          { t: "choice", q: "John's orthopedic bill shows Global Health paid $1,320.00 on 04/02/2026, but that claim isn't on the lien. What do you send?", options: [
            { a: "An Abundance Letter with the medical bill", ok: true, fb: "Right. When a bill shows a health insurance payment that isn't on the lien, send an Abundance Letter with the bill." },
            { a: "A Removal Request", fb: "A Removal Request takes an unrelated claim off. This one is related and missing." },
            { a: "Nothing: a smaller lien is better for the client", fb: "Every related claim belongs on the lien. Leaving one off now means a surprise at the final payoff." }
          ] },
          { t: "choice", q: "The updated ledger adds a 01/20/2026 dermatology visit, $1,450.00, from before the accident. What do you do?", options: [
            { a: "Send a Subrogation Removal Request for the unrelated claim", ok: true, fb: "Right. Unrelated claims come off the lien with a Removal Request." },
            { a: "Leave it: the plan decides what's on its lien", fb: "Dates and services must link to the incident. Ask for the unrelated claim to be removed." },
            { a: "Subtract it yourself on the Net Sheet", fb: "Get it removed in writing by the plan; the Net Sheet follows the plan's corrected lien." }
          ] },
          { t: "choice", q: "A $38.00 pharmacy charge looks unrelated, but proving it means requesting records that take weeks. What do you do?", options: [
            { a: "Weigh the cost-benefit: if removing it costs more time than it's worth, let it go and note why", ok: true, fb: "Right. Pick your battles: some bills cost more in time to remove than they're worth." },
            { a: "Always fight every unrelated charge, whatever it takes", fb: "Do a cost-benefit analysis: a $38.00 charge isn't worth weeks of records requests." },
            { a: "Ask the client to pay it separately", fb: "Weigh whether it's worth removing; don't hand the client a bill." }
          ] },
          { t: "choice", q: "The case moves to settlement. What's next with Global Health?", options: [
            { a: "Request the final lien (with the settlement information if they ask), and update the disbursement sheet", ok: true, fb: "Right. The final lien letter confirms the amount to repay; no proceeds go out without the final payoff letter." },
            { a: "Pay the $11,200.00 from the first notice", fb: "The notice says the amount is subject to update. Request the final lien first." },
            { a: "Disburse to the client and pay Global Health later", fb: "The notice is clear: no settlement proceeds without a final payoff letter." }
          ] },
          { t: "choice", who: "Global Health Subrogation Dept.", line: "We can't accept your reduction as asked. We'll take $9,000.00 if you send us the settlement information.", q: "Which reduction outcome is this, and what do you do?", options: [
            { a: "A counter offer: decide whether to provide the settlement information and accept, within your authority", ok: true, fb: "Right. The three outcomes are an approved reduction, a rejected request, or a counter offer like this one." },
            { a: "An approved reduction: pay $9,000.00 now", fb: "They've countered with a condition. Decide on the settlement information first, and get the agreed figure in writing." },
            { a: "A rejection: pay the full lien", fb: "It's a counter offer, not a rejection. Work it." }
          ] }
        ]
      },
      {
        title: "The HI Subro workflow",
        brief: ["Put the workflow in order, from the new case to the final lien."],
        steps: [
          { t: "order", q: "Put the steps in order.", items: [
            "Check the intake for the MVA questionnaire",
            "Confirm whether the client was transported to the hospital",
            "Get the health insurance information from member services",
            "Set up the health subro in the CMS",
            "Generate the Letter of Subrogation with the signed HIPAA",
            "Send the letter with the HI card",
            "Confirm receipt within 15 to 30 days",
            "Review the subro lien against the bills",
            "Request the final lien when the case moves to settlement"
          ] }
        ]
      },
      {
        title: "Who is asking to be repaid?",
        brief: ["Read each document as it would arrive on the file."],
        steps: [
          { t: "choice", who: "EOB", line: "Administered by BCBS of Georgia · Plan Sponsor: Hartwell Logistics, Inc. · Self-funded group health plan", q: "What kind of plan is this, and what governs its reduction?", options: [
            { a: "ERISA self-funded: federal law and the plan's own terms; Made Whole and Common Fund may not apply", ok: true, fb: "Right. BCBS here is only the administrator (ASO): the employer funds the plan, so it's ERISA self-funded." },
            { a: "Fully insured BCBS: state law governs", fb: "BCBS is acting as administrator (ASO) for a self-funded employer plan. That makes it ERISA self-funded, not state-regulated." },
            { a: "Medicaid: the state statute governs", fb: "There's no state agency here: an employer plan, self-funded, administered by BCBS." }
          ] },
          { t: "choice", who: "Lien letter", line: "Peach State Health Plan · Fully insured group policy GRP-41208 · Notice of subrogation interest", q: "What governs this plan's reduction?", options: [
            { a: "State law: it's a fully insured plan", ok: true, fb: "Right. A fully insured plan is regulated by the state, so the state's subrogation and reduction rules apply." },
            { a: "Federal ERISA preemption: the plan's terms override state law", fb: "That's for a self-funded plan. This policy is fully insured, so state law governs." },
            { a: "Nothing: health plans can't claim a share of a settlement", fb: "It can, through subrogation. The question is whose rules apply: here, the state's." }
          ] },
          { t: "choice", who: "Letter", line: "Benefits Coordination & Recovery Center · Conditional Payment Letter · Medicare beneficiary", q: "What does this mean for the settlement?", options: [
            { a: "Medicare has paid conditionally and must be repaid; get the final demand before disbursing", ok: true, fb: "Right. Medicare's recovery has its own process (conditional payments, then a final demand). Hold the amount until it's resolved." },
            { a: "It's a courtesy notice: disburse and let Medicare bill the client", fb: "Medicare's claim follows the settlement funds. It has to be resolved before money goes out." },
            { a: "Treat it like an ERISA plan and negotiate under the plan's terms", fb: "Medicare follows its own federal recovery rules, not an ERISA plan's terms." }
          ] },
          { t: "choice", who: "Notice", line: "Notice of Lien · State Department of Community Health (Medicaid) · Recipient: client", q: "What governs this lien?", options: [
            { a: "The state's Medicaid recovery statute and process", ok: true, fb: "Right. Medicaid is state-run: its lien and any reduction follow the state's statute." },
            { a: "ERISA: it's a health plan", fb: "Medicaid is a government program, not an ERISA plan." },
            { a: "The provider's billing policy", fb: "This is Medicaid's own lien, under state law." }
          ] },
          { t: "choice", who: "Letter", line: "Optum Subrogation Services, on behalf of the Hartwell Logistics, Inc. Employee Health Plan", q: "What do you do before you negotiate?", options: [
            { a: "Confirm the plan's funding and terms: ask for the plan document (SPD) and an itemized lien", ok: true, fb: "Right. A recovery vendor works for the plan. Verify self-funded or fully insured, and get the itemization, before you negotiate." },
            { a: "Pay the amount Optum states so the file can close", fb: "Never pay an unverified figure. Confirm the plan type and audit the itemization first." },
            { a: "Ignore it: vendors aren't lien holders", fb: "The vendor asserts the plan's rights. Verify the plan and the claim, then negotiate." }
          ] },
          { t: "choice", who: "Letter", line: "Department of Veterans Affairs · Office of General Counsel · Notice of claim for medical care provided", q: "How is this claim handled?", options: [
            { a: "As a federal recovery claim: resolve it with the VA before disbursing", ok: true, fb: "Right. VA and TRICARE recover under federal law and their own process. The amount is held until it's resolved." },
            { a: "Under state law, like a fully insured plan", fb: "The VA recovers under federal law, not state insurance law." },
            { a: "The client handles it after the settlement", fb: "The claim attaches to the recovery. Resolve it before funds go out." }
          ] }
        ]
      },
      {
        title: "Audit the lien: Peach State",
        brief: ["Client's date of loss: 03/14/2026", "Peach State's itemization claims $2,070.00:",
          "03/14/2026 Emergency department · $1,240.00", "03/28/2026 Orthopedic visit · $410.00",
          "01/09/2026 Annual physical · $210.00", "04/11/2026 Physical therapy · $210.00"],
        steps: [
          { t: "choice", q: "Which charge doesn't belong in the lien?", options: [
            { a: "01/09/2026 Annual physical, $210.00: it's before the date of loss and unrelated", ok: true, fb: "Right. Only accident-related care after the date of loss belongs in the lien." },
            { a: "04/11/2026 Physical therapy, $210.00", fb: "Physical therapy after the accident is accident-related. Look at the dates against the DOL." },
            { a: "None: the plan's itemization is always right", fb: "Audit every line. One charge here predates the accident." }
          ] },
          { t: "number", q: "What is the corrected lien amount?", answer: 1860, tol: 0.01, unit: "$", fb: "$2,070.00 − $210.00 = $1,860.00. Request the corrected lien in writing." },
          { t: "choice", q: "Peach State is fully insured. Under the course case's state rule, the reduction brings the lien to $1,240.00 (Track A). What do you do next?", options: [
            { a: "Send the reduction request with the reason and the math, and get the agreed figure in writing", ok: true, fb: "Right. A reduction needs a reason and the math, in writing, and a written confirmation back." },
            { a: "Call and ask them nicely to lower it", fb: "'Asking nicely' is not a reduction. Put the reason and the math in writing." },
            { a: "Pay $1,860.00 so the file can close", fb: "The plan's reduction rules apply. Request the reduction first." }
          ] }
        ]
      }
    ]
  },

  negotiation: {
    title: "Reduction Call Simulation",
    intro: "A settled case and a provider who wants to be paid in full. Work out the figures first, then take the call with the provider's billing office.",
    scenarios: [
      {
        title: "The numbers before the call",
        brief: ["Gross settlement: $25,000.00", "Attorney fee (33⅓%): $8,333.33", "Case costs: $650.00",
          "Riverton Spine & Rehab balance (squared with the PIP log): $6,400.00"],
        steps: [
          { t: "number", q: "The procurement costs (fee + costs) are what share of the gross settlement? (to two decimals)", answer: 35.93, tol: 0.02, unit: "%", fb: "($8,333.33 + $650.00) ÷ $25,000.00 = 35.93%." },
          { t: "number", q: "A pro-rata reduction asks the provider to share those costs. What payoff do you ask for?", answer: 4100.27, tol: 1, unit: "$", fb: "$6,400.00 × (1 − 0.3593) = $4,100.27. That's the ask, with the math shown." }
        ]
      },
      {
        title: "The call: Tammy Greer, Riverton Spine & Rehab",
        brief: ["You're calling the provider's billing office about the client's balance.", "Your Net Sheet's max offer for Riverton is $4,600.00."],
        steps: [
          { t: "choice", who: "Tammy Greer", line: "Riverton Spine & Rehab billing, this is Tammy.", q: "How do you open?", options: [
            { a: "Give your name and firm, the client's full name and DOL, and say you're calling about a reduction of the balance on a settled case", ok: true, fb: "Right. Identify the client and DOL first, so she can find the account, then say why you're calling." },
            { a: "\"Can you lower our client's bill?\"", fb: "She can't find the account without the client's name and DOL, and you haven't given a reason." },
            { a: "\"If you don't reduce it, the client won't be able to pay anything.\"", fb: "Don't open with pressure. Identify the case, then make the request with its reason." }
          ] },
          { t: "choice", who: "Tammy Greer", line: "We don't usually reduce more than 10%.", q: "What do you say?", options: [
            { a: "Explain the limited settlement and the pro-rata math, and offer to send the request in writing", ok: true, fb: "Right. The reason and the math are what move a provider: a limited settlement shared fairly among the liens." },
            { a: "Accept 10% to keep things friendly", fb: "10% leaves $5,760.00, above your max offer. Make the case with the math first." },
            { a: "Tell her the client will pay the rest himself later", fb: "That's not your call to make, and it leaves the client exposed. Negotiate the balance." }
          ] },
          { t: "choice", who: "Tammy Greer", line: "Send me something in writing and I'll take it to my manager.", q: "What do you send?", options: [
            { a: "The Bill Reduction Request, named and subject-lined to the firm's conventions, with the settlement and the math", ok: true, fb: "Right: MED - Riverton Spine & Rehab - Reduction Request (your first name), subject 'Billing Reduction Request | LAST NAME, FIRST NAME'." },
            { a: "Nothing: a verbal agreement is enough", fb: "Every reduction needs to be in writing, both the request and the agreement." },
            { a: "A copy of the full settlement release", fb: "Send the reduction request with the figures it needs, not the client's release." }
          ] },
          { t: "choice", who: "Tammy Greer", line: "My manager can do $4,800.00.", q: "Your max offer is $4,600.00. What do you do?", options: [
            { a: "Counter within your max offer, restating the reason and the math", ok: true, fb: "Right. $4,800.00 is above your max offer, so you can't accept it. Counter, and escalate if they won't move." },
            { a: "Accept: it's a big reduction from $6,400.00", fb: "It's above the max offer on your Net Sheet. Accepting it changes the client's net without approval." },
            { a: "Hang up and pay the full balance", fb: "Keep negotiating within your authority. Paying in full gives the client's money away." }
          ] },
          { t: "choice", who: "Tammy Greer", line: "Fine, $4,500.00. We're done here.", q: "Before you close the call?", options: [
            { a: "Ask for the agreed $4,500.00 in a written payoff letter, and update the Net Sheet when it arrives", ok: true, fb: "Right. No written payoff, no reduction: the closing statement uses the figure in the letter." },
            { a: "Thank her and put $4,500.00 on the closing statement", fb: "Get it in writing first. A verbal figure isn't a payoff." },
            { a: "Tell the client the bill is settled", fb: "Not until you have the written payoff and the balance is paid from the settlement." }
          ] }
        ]
      }
    ]
  },

  settlement: {
    title: "Settlement Negotiation Simulation",
    intro: "An offer comes in on a case you're closing. Prepare what the attorney needs, deal with a resistant client, and review the release, keeping to your role: the amount, offers and counteroffers are the attorney's decisions.",
    scenarios: [
      {
        title: "The offer: $40,000.00",
        brief: ["The adjuster emails a $40,000.00 offer on the BI claim, below the demand.",
          "Attorney fee: $13,333.33 · Case costs: $486.75 · Health lien (agreed): $1,240.00 · Provider payoffs (agreed): $4,580.00"],
        steps: [
          { t: "choice", who: "Adjuster", line: "We can offer $40,000.00 to resolve the claim. Let me know.", q: "What do you do?", options: [
            { a: "Log the offer, prepare the Net Sheet at $40,000.00, and send both to the attorney for the decision", ok: true, fb: "Right. You prepare the figures; accepting, rejecting or countering is the attorney's call, with the client." },
            { a: "Counter at the demand amount", fb: "Offers and counteroffers belong to the attorney. Prepare the file and flag the decision." },
            { a: "Accept: the client needs the money", fb: "You never accept an offer. That decision is the attorney's, with the client." }
          ] },
          { t: "number", q: "What would the client net at $40,000.00?", answer: 20359.92, tol: 0.01, unit: "$", fb: "$40,000.00 − $13,333.33 − $486.75 − $1,240.00 − $4,580.00 = $20,359.92." },
          { t: "order", q: "Put the settlement steps in order.", items: [
            "The offer is logged and the Net Sheet prepared at the offer",
            "The attorney decides with the client",
            "Acceptance is confirmed in writing",
            "The release is reviewed with the client and signed",
            "The settlement check is received",
            "The funds clear in the trust account"
          ] }
        ]
      },
      {
        title: "Settlement resistance",
        brief: ["The client has seen the Net Sheet."],
        steps: [
          { t: "choice", who: "Client", line: "My cousin got $100,000 for his accident. Why am I only getting $20,000?", q: "How do you respond?", options: [
            { a: "Walk them through the Net Sheet line by line, and tell them the attorney will discuss the offer and the decision with them", ok: true, fb: "Right. Be transparent about every deduction, and leave the advice and the decision to the attorney and the client." },
            { a: "Tell them it's a good offer and they should take it", fb: "Advising on value or pushing acceptance is the attorney's role, and pressure crosses the ethical line." },
            { a: "Tell them their cousin's case doesn't matter", fb: "Acknowledge the concern and explain the figures. The decision stays with the client and the attorney." }
          ] },
          { t: "choice", who: "Client", line: "Can you just make the lien go away so I get more?", q: "What do you say?", options: [
            { a: "Explain that the lien has to be repaid from the settlement, and that you've already negotiated it down in writing", ok: true, fb: "Right. Liens are paid before the client, but you work to reduce them, and you show the agreed figures." },
            { a: "Promise to get it waived", fb: "Don't promise an outcome you can't guarantee." },
            { a: "Leave it off the closing statement", fb: "Leaving a lien unpaid exposes the client and the firm. Every lien is on the statement." }
          ] }
        ]
      },
      {
        title: "The release",
        brief: ["The defense sends its release. One clause reads:",
          "\"Releasor shall indemnify and hold Releasee harmless from all liens and claims for medical expenses arising from the accident.\""],
        steps: [
          { t: "choice", q: "What do you do with this clause?", options: [
            { a: "Flag it for attorney review, and make sure it's explained to the client before they sign", ok: true, fb: "Right. An indemnity clause makes the client responsible for any lien left unpaid. The attorney approves it, and the client must understand it." },
            { a: "Have the client sign: releases are standard", fb: "The client gives up rights in a release. Terms like this are reviewed by the attorney and explained first." },
            { a: "Delete the clause and send it back", fb: "You don't edit the release yourself. Flag it for the attorney." }
          ] },
          { t: "choice", q: "After the client signs the release, can they bring another claim for this accident?", options: [
            { a: "No: the release is final and binding once signed", ok: true, fb: "Right. That's why the terms are reviewed with the client before they sign." },
            { a: "Yes, within 30 days", fb: "A signed release is final. The client waives further claims." },
            { a: "Only if their injuries get worse", fb: "The release covers future claims from the accident too, which is why the review matters." }
          ] }
        ]
      }
    ]
  },

  disbursement: {
    title: "Disbursement Simulation",
    intro: "The case is settled for $40,000.00 and every payoff is in writing. Close it: the order of the work, the trust ledger, and the mistakes that stop a disbursement.",
    scenarios: [
      {
        title: "Closing the file in order",
        brief: ["Settlement: $40,000.00 · Fee $13,333.33 · Costs $486.75 · Health lien $1,240.00 · Providers $4,580.00 · Client net $20,359.92"],
        steps: [
          { t: "order", q: "Put the closing steps in order.", items: [
            "Finalize the Net Sheet with the agreed payoffs",
            "Draft the Closing Statement to match the Net Sheet exactly",
            "The client signs the Closing Statement and the Settlement Release Form(s)",
            "The settlement funds clear in the trust account",
            "Pay the liens and providers from their payoff letters",
            "Disburse the client's net",
            "Reconcile the trust ledger to $0.00",
            "Send the closing letter and close the file"
          ] },
          { t: "number", q: "Deposited $40,000.00. Paid out the fee, costs, health lien, providers and client net. What's left in trust for this case?", answer: 0, tol: 0.005, unit: "$", fb: "$40,000.00 − $13,333.33 − $486.75 − $1,240.00 − $4,580.00 − $20,359.92 = $0.00. The ledger ends at $0.00." }
        ]
      },
      {
        title: "Stop and check",
        brief: ["It's the day the check was deposited."],
        steps: [
          { t: "choice", who: "Client", line: "The check came in today, right? Can I get my money this afternoon?", q: "What do you say?", options: [
            { a: "Not until the funds clear in the trust account; you'll let them know as soon as they do", ok: true, fb: "Right. No disbursement goes out before the funds clear." },
            { a: "Yes, you'll cut the check today", fb: "Disbursing before the funds clear pays out money the trust account doesn't have yet." },
            { a: "Pay half now and half later", fb: "Nothing goes out, in part or in full, until the funds clear." }
          ] },
          { t: "choice", q: "The Closing Statement shows Riverton at $4,800.00, but its payoff letter agrees $4,500.00. The client hasn't signed yet. What do you do?", options: [
            { a: "Correct the Closing Statement to the payoff letter, and check it still matches the Net Sheet, before the client signs", ok: true, fb: "Right. The Closing Statement must match the Net Sheet and the written payoffs exactly." },
            { a: "Leave it: the extra $300.00 can go back to the client later", fb: "A wrong statement means a wrong disbursement. Fix it before the client signs." },
            { a: "Pay Riverton $4,800.00 as written", fb: "The payoff letter is the agreed figure. Pay $4,500.00 and correct the statement." }
          ] },
          { t: "choice", q: "One provider hasn't sent its final payoff letter. Everything else is ready. What happens to its amount?", options: [
            { a: "Hold it in trust until the written payoff arrives; disburse everything else", ok: true, fb: "Right. The unconfirmed amount stays in trust until the payoff letter is in." },
            { a: "Release it to the client to save time", fb: "If the provider later claims it, the client and the firm are exposed. Hold it in trust." },
            { a: "Pay the provider the original balance", fb: "Wait for the written payoff. Paying the original balance gives up the reduction." }
          ] }
        ]
      }
    ]
  }
};

(function(){
  const E = (t) => window.esc(t);
  const tidy = (t) => String(t == null ? "" : t).replace(/[‐-―−]/g, "-").replace(/\s+/g, " ").trim();
  const sims = () => window.CS_PRACTICE;
  const runs = {};   // module id -> { si, k, got: [[earned, worth] per step], answered, input }
  function simOf(m){ return sims()[m.sim]; }
  function steps(sim){ return sim.scenarios.flatMap((s, si) => s.steps.map((st, k) => ({ si, k, st }))); }
  function worth(st){ return st.t === "fields" ? st.fields.length : st.t === "order" ? st.items.length : 1; }
  function run(id){ return runs[id] || (runs[id] = { at: 0, got: [], answered: false, input: null }); }
  function saved(id){ return (((window.state || {}).progress || {}).practice || {})[id] || null; }
  const money = (n) => "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmt = (st, v) => st.unit === "$" ? money(v) : st.unit === "%" ? Number(v).toFixed(2) + "%" : String(v);
  // The shuffled order of an order step's items, kept for the run (indices into items).
  function shuffled(r, n){ if(!r.perm || r.perm.length !== n){ const p = [...Array(n).keys()]; for(let i = n - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } if(p.every((x, i) => x === i) && n > 1) [p[0], p[1]] = [p[1], p[0]]; r.perm = p; } return r.perm; }

  function scoreOf(r){ const e = r.got.reduce((a, g) => a + g[0], 0), w = r.got.reduce((a, g) => a + g[1], 0); return w ? Math.round(100 * e / w) : 0; }

  function html(m){
    const sim = simOf(m);
    if(!sim) return `<div class="empty">This practice session isn't set up yet.</div>`;
    const r = run(m.id), all = steps(sim), prev = saved(m.id);
    if(r.at >= all.length) return doneHtml(m, sim, r);
    if(r.at === 0 && !r.started) return `<div class="px-card px-intro"><h3>🎯 ${E(sim.title)}</h3><p>${E(sim.intro)}</p>
      <p class="px-meta">${sim.scenarios.length} scenario${sim.scenarios.length === 1 ? "" : "s"} · ${all.length} step${all.length === 1 ? "" : "s"} · scored out of 100${prev ? ` · your best so far: <b>${prev.best}</b>` : ""}</p>
      <button class="btn btn-primary" type="button" onclick="CSPractice.start('${m.id}')">Start the practice →</button></div>`;
    const cur = all[r.at], sc = sim.scenarios[cur.si], st = cur.st;
    return `<div class="px-head"><span class="mono">Scenario ${cur.si + 1} of ${sim.scenarios.length} · Step ${r.at + 1} of ${all.length}</span><span class="mono">Score so far: ${scoreOf(r)}</span></div>
      <div class="px-card px-brief"><b>${E(sc.title)}</b><ul>${sc.brief.map((b) => `<li>${E(b)}</li>`).join("")}</ul></div>
      <div class="px-card px-step">${st.who ? `<div class="px-line"><span class="px-who">${E(st.who)}</span><span class="px-say">${E(st.line)}</span></div>` : ""}
        <p class="px-q">${E(st.q)}</p>${stepHtml(m, r, st)}</div>`;
  }

  function stepHtml(m, r, st){
    const id = m.id, done = r.answered;
    if(st.t === "choice"){
      return `<div class="px-opts" role="group" aria-label="Answers">${st.options.map((o, i) => {
        const cls = !done ? "" : o.ok ? " ok" : r.input === i ? " bad" : "";
        return `<button class="px-opt${cls}" type="button" ${done ? "disabled" : `onclick="CSPractice.choose('${id}', ${i})"`}>${E(o.a)}</button>`; }).join("")}</div>
        ${done ? `<div class="px-fb ${st.options[r.input].ok ? "ok" : "bad"}">${st.options[r.input].ok ? "✅ " : "✗ "}${E(st.options[r.input].fb)}</div>${nextBtn(id)}` : ""}`;
    }
    if(st.t === "fields"){
      return `<div class="px-fields">${st.fields.map((f, i) => {
        const v = done ? r.input[i] : "", ok = done && fieldOk(f, v);
        return `<label class="field"><span>${E(f.label)}</span><input id="px-${id}-f${i}" ${done ? `value="${E(v)}" disabled` : ""} spellcheck="false" autocomplete="off"></label>
          ${done ? `<div class="px-fb ${ok ? "ok" : "bad"}">${ok ? "✅ Right." : "✗ Expected: <span class=\"mono\">" + E(f.answer) + "</span>"}</div>` : ""}`; }).join("")}</div>
        ${done ? nextBtn(id) : `<button class="btn btn-primary" type="button" onclick="CSPractice.checkFields('${id}')">Check</button>`}`;
    }
    if(st.t === "number"){
      const ok = done && Math.abs(r.input - st.answer) <= st.tol;
      return `<label class="field px-num"><span>${st.unit === "$" ? "Amount ($)" : st.unit === "%" ? "Percent (%)" : "Answer"}</span><input id="px-${id}-n" inputmode="decimal" ${done ? `value="${E(r.input)}" disabled` : ""} autocomplete="off"></label>
        ${done ? `<div class="px-fb ${ok ? "ok" : "bad"}">${ok ? "✅ " : `✗ The answer is ${E(fmt(st, st.answer))}. `}${E(st.fb)}</div>${nextBtn(id)}` : `<button class="btn btn-primary" type="button" onclick="CSPractice.checkNumber('${id}')">Check</button>`}`;
    }
    if(st.t === "order"){
      const perm = shuffled(r, st.items.length), picked = r.pick || [];
      if(done) return `<ol class="px-order">${st.items.map((t, i) => { const ok = r.input[i] === i; return `<li class="${ok ? "ok" : "bad"}">${ok ? "✅" : "✗"} ${E(st.items[r.input[i]])}${ok ? "" : ` <span class="px-should">(should be: ${E(t)})</span>`}</li>`; }).join("")}</ol>${nextBtn(id)}`;
      return `<p class="px-meta">Click the steps in the order they happen.${picked.length ? ` <button class="btn btn-sm btn-ghost" type="button" onclick="CSPractice.unpick('${id}')">↶ Undo</button>` : ""}</p>
        <ol class="px-order">${picked.map((i) => `<li>${E(st.items[i])}</li>`).join("")}</ol>
        <div class="px-opts">${perm.filter((i) => !picked.includes(i)).map((i) => `<button class="px-opt" type="button" onclick="CSPractice.pick('${id}', ${i})">${E(st.items[i])}</button>`).join("")}</div>`;
    }
    return "";
  }
  function fieldOk(f, v){ try{ return new RegExp(f.re, "i").test(tidy(v).replace(/\s*-\s*/g, " - ")); }catch(e){ return false; } }
  function nextBtn(id){ return `<div class="px-next"><button class="btn btn-primary" type="button" onclick="CSPractice.next('${id}')">Next question →</button></div>`; }

  function doneHtml(m, sim, r){
    const s = scoreOf(r), prev = saved(m.id);
    return `<div class="px-card px-done"><h3>🎯 ${E(sim.title)}: ${s}/100</h3>
      <p>${s >= 80 ? "Well done: you're ready for the live work." : "Go back over the feedback, then practice again: aim for 80 or more."}${prev ? ` Your best: <b>${prev.best}</b> (${prev.runs} run${prev.runs === 1 ? "" : "s"}).` : ""}</p>
      <button class="btn btn-ghost" type="button" onclick="CSPractice.reset('${m.id}')">↻ Practice again</button></div>`;
  }

  // Draws the run again; after an answer the feedback and Next are scrolled into view, on a new step the first box is focused.
  function redraw(id){
    const el = document.getElementById("px-" + id), m = window.moduleById(id); if(!el || !m) return;
    el.innerHTML = html(m);
    const after = el.querySelector(".px-next, .px-done"), f = el.querySelector("input:not([disabled])");
    if(after && after.scrollIntoView) after.scrollIntoView({ block: "nearest" });
    else if(f) f.focus({ preventScroll: false });
    else { const st = el.querySelector(".px-step"); if(st && st.scrollIntoView) st.scrollIntoView({ block: "nearest" }); }
  }
  function record(id, st, earned){ const r = run(id); r.got[r.at] = [earned, worth(st)]; r.answered = true; }
  function current(id){ const m = window.moduleById(id), sim = simOf(m); return steps(sim)[run(id).at].st; }
  function finish(id){
    const m = window.moduleById(id), r = run(id), s = scoreOf(r), st = window.state;
    if(st.isAdmin || !st.progress) return;
    st.progress.practice = st.progress.practice || {};
    const p = st.progress.practice[id] || { best: 0, runs: 0 };
    st.progress.practice[id] = { best: Math.max(p.best || 0, s), last: s, runs: (p.runs || 0) + 1, at: new Date().toISOString(), sim: m.sim };
    window.saveProgress();
  }

  window.CSPractice = {
    sims: () => sims(), steps: (sim) => steps(sim), fieldOk,
    html: (m) => `<div class="px-box" id="px-${m.id}">${html(m)}</div>`,
    start(id){ const r = run(id); r.started = true; redraw(id); },
    choose(id, i){ const st = current(id), r = run(id); if(r.answered) return; r.input = i; record(id, st, st.options[i].ok ? 1 : 0); redraw(id); },
    checkFields(id){ const st = current(id), r = run(id); const v = st.fields.map((f, i) => (document.getElementById(`px-${id}-f${i}`) || {}).value || "");
      if(v.some((x) => !x.trim())){ window.toast("Fill in every box first."); return; }
      r.input = v; record(id, st, st.fields.filter((f, i) => fieldOk(f, v[i])).length); redraw(id); },
    checkNumber(id){ const st = current(id), r = run(id), raw = ((document.getElementById(`px-${id}-n`) || {}).value || "").replace(/[$,%\s]/g, "");
      if(raw === "" || isNaN(Number(raw))){ window.toast("Enter a number."); return; }
      r.input = Number(raw); record(id, st, Math.abs(r.input - st.answer) <= st.tol ? 1 : 0); redraw(id); },
    pick(id, i){ const st = current(id), r = run(id); r.pick = (r.pick || []).concat(i);
      if(r.pick.length === st.items.length){ r.input = r.pick; record(id, st, r.pick.filter((x, j) => x === j).length); }
      redraw(id); },
    unpick(id){ const r = run(id); r.pick = (r.pick || []).slice(0, -1); redraw(id); },
    next(id){ const r = run(id), m = window.moduleById(id), n = steps(simOf(m)).length;
      r.at++; r.answered = false; r.input = null; r.pick = null; r.perm = null;
      if(r.at >= n) finish(id); redraw(id); },
    reset(id){ runs[id] = { at: 0, got: [], answered: false, input: null, started: true }; redraw(id); },
    score: (id) => scoreOf(run(id)),
    // Where a run is: the step index, how many steps, and the step itself (the checks play every sim with it).
    where(id){ const m = window.moduleById(id), all = steps(simOf(m)), r = run(id); return { at: r.at, n: all.length, started: !!r.started, step: all[r.at] ? all[r.at].st : null }; }
  };
})();
