/* ============================================================
   Lien Verification course: the knowledge checks and practical simulations for Days 1 to 3.
   Same format as js/cs-practice.js (see its header comment); this file only adds sims to window.CS_PRACTICE.
   Every fact comes from the day's deck (decks/lv-day1 … lv-day3) or the LV Guide in js/cs-course.js.
   Clients are always "John Doe"; every provider, funder and agency named here is fictional.
   ============================================================ */
Object.assign(window.CS_PRACTICE, {

  /* ---------------- Day 1 ---------------- */
  "lv1-check": {
    title: "Day 1 Knowledge Check",
    intro: "Ten questions on Day 1: what a lien is, the types of liens, why we verify, and the process and its non-negotiables.",
    scenarios: [
      {
        title: "Liens, their types and the workflow",
        brief: ["Answer each question from what the Day 1 deck teaches."],
        steps: [
          { t: "choice", q: "What is lien balance verification?", options: [
            { a: "Estimating what the client will probably owe, so the net sheet can be drafted early", fb: "We don't guess or estimate. The key word in the definition is accurate." },
            { a: "Confirming the accurate amount owed to healthcare providers, insurers or other third parties for services given to someone in a personal injury case", ok: true, fb: "Right. That confirmed figure comes straight out of the client's settlement, so it has to be the real one." },
            { a: "Asking every provider to lower its bill before the case settles", fb: "That's negotiation, which comes after verification. Verification confirms what is actually owed." }
          ] },
          { t: "choice", q: "Once a personal injury case settles, in what order is the money paid?", options: [
            { a: "The client is paid first, and the lienholders are paid from what's left", fb: "It's the other way round. The settlement is the asset the lien is placed against, so lienholders are paid first." },
            { a: "Lienholders and the client are paid at the same time, in equal shares", fb: "There's a fixed order: lienholders first, then the remaining amount goes to the client." },
            { a: "The lienholders are paid from the settlement first, then the remaining amount is disbursed to the client", ok: true, fb: "Right. That order is why verified balances must be ready before disbursement." }
          ] },
          { t: "choice", q: "What's in it for the client when liens are settled properly?", options: [
            { a: "A lower risk of bad credit, and all medical expenses covered once compensation is received", ok: true, fb: "Right. Careful verification is what keeps a collection notice from arriving months after the client got their check." },
            { a: "The client no longer needs a lawyer", fb: "That isn't a benefit the deck names. Settling liens reduces the risk of bad credit and covers the medical expenses." },
            { a: "The client can skip treatment until the case settles", fb: "Liens actually make timely treatment possible. The client's benefit here is less risk of bad credit and covered medical expenses." }
          ] },
          { t: "choice", q: "While the case was pending, John Doe took a cash advance from a funding company, to be repaid when the case settles. What type of lien is that?", options: [
            { a: "A medical lien", fb: "Medical liens are placed by healthcare providers for treatment. A funding company's advance is something else." },
            { a: "An attorney lien", fb: "Attorney liens are for unpaid legal services. This is a funding company's advance." },
            { a: "A pre-settlement lien", ok: true, fb: "Right. Clients sometimes don't think of these advances as debts, so ask directly whether they took any funding while the case was open." }
          ] },
          { t: "choice", q: "A notice on the file claims part of the settlement for unpaid child support. Where does that fall?", options: [
            { a: "A miscellaneous lien", ok: true, fb: "Right. Miscellaneous liens are claims that don't fit medical, attorney or pre-settlement liens, such as unpaid debts, child support or government claims." },
            { a: "A worker's compensation lien", fb: "That's an insurer recovering benefits paid to an injured employee. Child support is a miscellaneous lien." },
            { a: "It isn't a lien, so you can ignore it", fb: "It is a claim against the settlement. These are easy to miss because they don't come from treatment, so read every notice." }
          ] },
          { t: "choice", q: "John Doe was hurt on the job, and his employer's insurer paid his medical expenses and lost wages. He is now suing the third party who caused the accident. What should you watch for?", options: [
            { a: "Nothing: the insurer's payments were benefits, not loans", fb: "If the worker recovers from a third-party lawsuit, the insurer may place a lien for reimbursement." },
            { a: "A worker's compensation lien from the insurer", ok: true, fb: "Right. Whenever the injury happened on the job, flag the file for a possible workers' comp lien." },
            { a: "A pre-settlement lien from the employer", fb: "Pre-settlement liens come from funding companies. This is the workers' comp insurer recovering what it paid." }
          ] },
          { t: "choice", q: "Why does verifying lien balances help maximize the client's recovery?", options: [
            { a: "Because verified liens are always paid in full", fb: "Verification is what makes reductions possible, not full payment." },
            { a: "Because verification removes the attorney's fee", fb: "Fees are a separate line in the settlement calculation. Verification lets the attorneys negotiate lien reductions." },
            { a: "Because once balances are verified, the attorneys can negotiate reductions where they apply, and you can't negotiate a number you haven't confirmed", ok: true, fb: "Right. Verification is the foundation for every reduction request that follows." }
          ] },
          { t: "choice", q: "When does the lien balance verification process start?", options: [
            { a: "Under the lien negotiation phase: after the settlement and before negotiation", ok: true, fb: "Right: settlement, lien verification, then lien negotiation. Skip verification and you may negotiate against the wrong number." },
            { a: "On the date of loss, before the case is set up", fb: "Verification starts under the lien negotiation phase, once the case has settled." },
            { a: "After the client's disbursement", fb: "By then it's too late: lienholders are paid before the client, so balances must be verified first." }
          ] },
          { t: "choice", q: "Which of these is one of the four non-negotiables on every file?", options: [
            { a: "Get a reduction on every lien", fb: "Reductions are negotiated where they apply. The non-negotiables are: identify and compile the liens, verify them, resolve discrepancies, and do an accurate final review." },
            { a: "Resolve any discrepancies", ok: true, fb: "Right. The four are: accurately identify and compile liens, verify them, resolve any discrepancies, and conduct an accurate final review. Even when you're short on time, all four get done." },
            { a: "Call every provider before sending anything in writing", fb: "That isn't one of the four. They are: identify and compile, verify, resolve discrepancies, and an accurate final review." }
          ] },
          { t: "choice", q: "You're preparing the Release of Information (ROI) form. What must it include accurately?", options: [
            { a: "The defendant's insurance and claim number", fb: "That isn't on the ROI. It needs the provider's information, the date of service, the client's index information and the client's signature." },
            { a: "Only the client's name; the provider fills in the rest", fb: "If any item is wrong or missing, the provider can reject the form. Four things must be accurate." },
            { a: "The provider's information, the date of service, the client's index information and the client's signature", ok: true, fb: "Right. Check each against the file before the form goes out, or you lose days waiting for a corrected one." }
          ] }
        ]
      }
    ]
  },

  "lv1-sim": {
    title: "Day 1 Practical Simulation",
    intro: "Sort the liens on a settled file, work the settlement down to the client's net, then walk the verification process and its first calls.",
    scenarios: [
      {
        title: "What's claiming the settlement?",
        brief: ["Client: John Doe · Case: motor vehicle accident, now settled",
          "Harbor Point Chiropractic treated John for four months and is waiting to be paid from the settlement",
          "Bridgeway Funding advanced John $3,000.00 while the case was pending",
          "John's first law firm, Corley & Banks, claims fees for its work before he changed firms",
          "A notice from the state claims part of the settlement for unpaid child support"],
        steps: [
          { t: "choice", q: "What type of lien is Harbor Point Chiropractic's?", options: [
            { a: "A miscellaneous lien", fb: "Miscellaneous liens don't come from treatment. A provider's claim for care after the accident is a medical lien." },
            { a: "A medical lien", ok: true, fb: "Right. Medical liens are claims by healthcare providers for services given after the accident, attached to the settlement." },
            { a: "A pre-settlement lien", fb: "Pre-settlement liens come from funding companies. Harbor Point treated John." }
          ] },
          { t: "choice", q: "And Bridgeway Funding's $3,000.00 advance?", options: [
            { a: "A pre-settlement lien", ok: true, fb: "Right. Funding companies give loans or advances while the case is pending and expect to be repaid from the settlement." },
            { a: "A medical lien", fb: "Bridgeway didn't treat John. It's a funding company, so this is a pre-settlement lien." },
            { a: "Not a lien: it's a personal loan between John and Bridgeway", fb: "It's repaid from the settlement, so it's a pre-settlement lien. Clients often forget to mention these." }
          ] },
          { t: "choice", q: "And Corley & Banks's claim for its fees?", options: [
            { a: "A miscellaneous lien", fb: "There's a specific category for this: a claim by an attorney for unpaid legal services." },
            { a: "Nothing to account for: John has a new firm now", fb: "The earlier attorney's claim still has to be accounted for. Watch the file history for prior representation." },
            { a: "An attorney lien", ok: true, fb: "Right. An attorney lien makes sure the earlier attorney is paid for work on the case." }
          ] },
          { t: "choice", q: "And the state's child support claim?", options: [
            { a: "Ignore it: only treatment creates liens", fb: "Miscellaneous liens don't come from treatment, which is exactly why they're easy to miss." },
            { a: "A worker's compensation lien", fb: "That's an insurer recovering benefits paid to an injured employee. Child support is a miscellaneous lien." },
            { a: "A miscellaneous lien: it doesn't fit medical, attorney or pre-settlement liens", ok: true, fb: "Right. Unpaid debts, child support and government claims such as Medicare or Medicaid are miscellaneous liens." }
          ] },
          { t: "choice", q: "You've only been given Harbor Point's bills so far. What's the risk if you focus only on medical bills?", options: [
            { a: "None: medical liens are the only ones that matter at closing", fb: "Other liens can sit on the same file. Missing a pre-settlement funding lien is a common mistake." },
            { a: "You can miss liens like Bridgeway's or the child support claim, and they surface after the client is paid", ok: true, fb: "Right. Medical liens are most of the work, but the others show up on the same file, so read the whole file and every notice." },
            { a: "The case can't settle until every bill is reduced", fb: "That isn't the risk. The risk is missing a non-medical lien that has to be paid from the settlement." }
          ] }
        ]
      },
      {
        title: "From settlement to total net disbursement",
        brief: ["John Doe's case settled for $40,000.00.",
          "Medical bills and expenses not covered under liens (John's out-of-pocket pharmacy costs): $600.00",
          "Verified liens: Harbor Point Chiropractic $6,800.00 · Lakeview Imaging $2,400.00 · Bridgeway Funding $3,000.00",
          "Attorney's fees, as agreed: $13,000.00"],
        steps: [
          { t: "number", q: "What do the liens come to in total?", answer: 12200, tol: 0.01, unit: "$", fb: "$6,800.00 + $2,400.00 + $3,000.00 = $12,200.00." },
          { t: "number", q: "Work the deck's calculation. What is John's total net disbursement?", answer: 14200, tol: 0.01, unit: "$", fb: "Settlement − medical bills and expenses − liens − attorney's fees: $40,000.00 − $600.00 − $12,200.00 − $13,000.00 = $14,200.00." },
          { t: "order", q: "Put the settlement calculation in the order the deck sets it out.", items: [
            "Total settlement amount",
            "Subtract medical bills and expenses",
            "Subtract liens",
            "Subtract attorney's fees",
            "Total net disbursement"
          ] },
          { t: "number", q: "The file still showed Harbor Point's old bill at $8,100.00. Its verified balance is $6,800.00. How much would John have lost if you had paid the old figure?", answer: 1300, tol: 0.01, unit: "$", fb: "$8,100.00 − $6,800.00 = $1,300.00. Every overpaid dollar comes out of the client's pocket, and getting it back afterwards is slow and difficult. That's why we verify before we pay." },
          { t: "choice", q: "John asks why so much comes out of his settlement for liens. What helps him see it?", options: [
            { a: "Liens are what let him get timely care without paying upfront, eased the financial strain, and helped his recovery", ok: true, fb: "Right. Explaining the significance of liens helps clients see them with a more positive perspective." },
            { a: "Tell him liens are just how the system works and there's nothing to explain", fb: "The deck asks you to explain their significance: access to care, less financial burden and better health outcomes." },
            { a: "Tell him the firm will pay the liens out of its own fee", fb: "Never promise that. Liens are paid from the settlement before the client's portion." }
          ] }
        ]
      },
      {
        title: "Working the file: the first calls",
        brief: ["John Doe's case is now in the lien negotiation phase.", "Harbor Point Chiropractic and Lakeview Imaging both treated John."],
        steps: [
          { t: "order", q: "Put the lien verification steps in order.", items: [
            "Collect coverage information",
            "Confirm treatments",
            "Verify the last day of treatment",
            "Verify lien balances",
            "Request final lien balances",
            "Lien negotiation"
          ] },
          { t: "choice", q: "The file doesn't show John's health insurance coverage type, deductibles or copayments. What do you do?", options: [
            { a: "Assume he had no insurance and move on", fb: "Don't guess at coverage. A wrong assumption carries through every balance that follows." },
            { a: "Reach out to the insurance provider or to John directly", ok: true, fb: "Right. Coverage type, deductibles and copayments affect who paid what, so get them from the insurer or the client." },
            { a: "Wait until a provider mentions it", fb: "Collecting coverage data is step one. If it isn't in the file, ask the insurer or the client." }
          ] },
          { t: "choice", who: "Lakeview Imaging billing", line: "I can't discuss the patient's account over the phone.", q: "What does the provider most likely need?", options: [
            { a: "A signed Release of Information form from the client, in compliance with HIPAA", ok: true, fb: "Right. This is normal and protects the client's privacy. Having the signed form ready before you call saves back and forth." },
            { a: "The defendant's insurance and claim number", fb: "The provider needs the client's authorization to share information, which is the signed ROI." },
            { a: "Nothing: ask the client to call them instead", fb: "Getting the balance is our job. Send the signed ROI so the provider can release it." }
          ] },
          { t: "choice", who: "Harbor Point Chiropractic", line: "Yes, there's a lien on John Doe's account.", q: "What do you ask next?", options: [
            { a: "Whether a third-party handler manages the balances, and if so its name and contact information", ok: true, fb: "Right. Some providers hand lien accounts to outside companies. Otherwise your request can sit with a party that doesn't hold the balance." },
            { a: "Whether they'll accept half", fb: "You don't know the verified balance yet. First find out who manages it." },
            { a: "Nothing: the call is done once they confirm a lien", fb: "Ask whether a third-party handler manages the balance, then follow the call with the written request." }
          ] },
          { t: "choice", q: "How do you send the balance verification request and the ROI?", options: [
            { a: "Read them out over the phone", fb: "The written request is what produces the confirmed figure. Send both forms in writing." },
            { a: "Send only the ROI; the provider knows what you want", fb: "Send both together, so the provider has everything needed to answer in one go." },
            { a: "Together, by email or fax, whichever the provider prefers", ok: true, fb: "Right. Note the preferred method in the file so the next request goes the right way the first time." }
          ] },
          { t: "choice", q: "A week later Lakeview hasn't answered, and the provider's fax number in your CMS turned out to be old. What do you do?", options: [
            { a: "Wait: providers answer when they're ready", fb: "A request that is never chased is one of the most common reasons a closing stalls. Follow up." },
            { a: "Follow up on the request, and update the verified contact details in the CMS", ok: true, fb: "Right. Keep track of every request and follow up rather than waiting, and keep every facility's contact details verified and updated in your CMS." },
            { a: "Use the balance from the intake file instead", fb: "You need accurate, up-to-date balances, not old figures from the intake file." }
          ] },
          { t: "choice", q: "Lakeview emails back its balance. What do you do with that email?", options: [
            { a: "Read it and delete it once the figure is on the net sheet", fb: "Get confirmation of every communication and save it. If it isn't documented, assume it didn't happen." },
            { a: "Save it in your CMS or drives for future reference", ok: true, fb: "Right. If a lienholder later disputes what was agreed or when a request was sent, the saved confirmation is your proof." },
            { a: "Forward it to John and let him keep it", fb: "The confirmation belongs in the CMS or drives, where the team can find it as proof." }
          ] }
        ]
      }
    ]
  },

  /* ---------------- Day 2 ---------------- */
  "lv2-check": {
    title: "Day 2 Knowledge Check",
    intro: "Ten questions on Day 2: the Lien Balance Verification request, the CMS steps, the Final Lien Ledger and tracking.",
    scenarios: [
      {
        title: "The request, the CMS, the ledger and tracking",
        brief: ["Answer each question from what the Day 2 deck teaches."],
        steps: [
          { t: "choice", q: "In Step 1 of the request, which client details do you gather?", options: [
            { a: "Full name, claim number, date of birth and case number", ok: true, fb: "Right. Add the lienholder information and the service details (dates of service and the total claimed) before you draft." },
            { a: "Full name and phone number only", fb: "That's too little for the lienholder to find the account: you need full name, claim number, date of birth and case number." },
            { a: "The defendant's insurance and policy limits", fb: "Step 1 asks for the client's details: full name, claim number, date of birth and case number." }
          ] },
          { t: "choice", q: "Before you send the Request Letter for Lien Verification, what must you edit?", options: [
            { a: "Nothing: the letter is generated ready to send", fb: "The sample's callouts say to edit the mode of sending and the fax number or email, and add your initials." },
            { a: "The attorney's signature", fb: "The signature stays. Edit the mode of sending, the matching fax number or email, and add your initials beside SV's." },
            { a: "The mode of sending and the matching fax number or email address, and your initials beside SV's in small caps", ok: true, fb: "Right. A leftover fax number or name from the template is one of the most common mistakes on these letters." }
          ] },
          { t: "choice", q: "A provider has sent John Doe's account to a collections agency. What do you do?", options: [
            { a: "Mark the balance as $0.00: the provider closed the account", fb: "When an account moves to collections, the balance follows it. Contact the agency." },
            { a: "Contact the agency about the balance and request an email or fax confirmation that clearly shows it", ok: true, fb: "Right. Don't settle for a verbal figure: the file needs written proof of what the agency says is owed." },
            { a: "Ask the agency for the balance by phone and note it", fb: "A verbal figure isn't enough. Request an email or fax confirmation that clearly displays the balance." }
          ] },
          { t: "choice", q: "A billing representative verifies the balance over the phone. What's next?", options: [
            { a: "Send a confirmation letter or email that puts what you were told in writing", ok: true, fb: "Right. A phone call isn't documentation. The sample email says that if you don't hear otherwise within 10 business days, you treat the balance as correct and final." },
            { a: "Nothing more: a phone verification is enough", fb: "A phone call is not documentation. Confirm it in writing so the file has a record." },
            { a: "Ask the client to confirm the number", fb: "The provider confirms the balance. Put the phone verification in writing to the provider." }
          ] },
          { t: "choice", q: "How do you send the request in Step 3?", options: [
            { a: "Always by certified mail", fb: "Use whichever method the entity prefers: certified mail, email or fax." },
            { a: "By the entity's preferred method (certified mail, email or fax), keeping a record that it went out", ok: true, fb: "Right. The fax confirmation sheet or the saved sent email is what lets you follow up and show when the request was made." },
            { a: "By whatever is quickest for you, with no need to keep a record", fb: "Use the entity's preference, and keep a record for tracking and follow-up." }
          ] },
          { t: "choice", q: "The lienholder's response shows a balance higher than expected. What does Step 5 say?", options: [
            { a: "Pay it: the lienholder's figure is final", fb: "Step 4 is to review the response against your records; Step 5 is to negotiate if there are discrepancies or the lien is higher than expected." },
            { a: "Ignore the response and use your own figure", fb: "Don't overwrite the lienholder's figure yourself. Engage with them to resolve it." },
            { a: "Negotiate with the lienholder to resolve it, following the firm's approval process and getting any agreed amount in writing", ok: true, fb: "Right. Sometimes it's just correcting an error; sometimes it means a reduction request." }
          ] },
          { t: "choice", q: "Where do you find the template for the request in the CMS?", options: [
            { a: "In the Meds Tab: Medical LOR & Lien Balance Verification, then Lien BV for Provider and Lien Holder, template \"Lien BV v2 – Provider and Lien Holder (date)\"", ok: true, fb: "Right. Using the current template keeps every letter consistent and asks for all the right fields." },
            { a: "In the Intake section, under the client's questionnaire", fb: "The template is in the Meds Tab, in the Medical LOR & Lien Balance Verification section." },
            { a: "There's no template: draft every letter from scratch", fb: "Use the CMS template whenever it's available; draft from scratch only if it isn't." }
          ] },
          { t: "choice", q: "A lien has been fully paid. What should its Final Lien Ledger show?", options: [
            { a: "The original total charges", fb: "The ledger shows the charges, but once the lien is fully paid the balance should be $0." },
            { a: "A balance of $0, meaning the lien has been satisfied", ok: true, fb: "Right. The ledger also documents the original charges, the payments with dates and amounts, and any adjustments." },
            { a: "Only the last payment made", fb: "It summarizes every transaction, and once fully paid the balance should read $0." }
          ] },
          { t: "choice", q: "You've uploaded a confirmation to Processing Documents. When is the upload done?", options: [
            { a: "As soon as you click Upload", fb: "Don't assume an upload worked: confirm it on screen first." },
            { a: "When the provider emails to say they received it", fb: "This is your own upload to the CMS. Confirm the success banner, 100% complete, and the file in the list." },
            { a: "When you've seen the success message, the progress bar at 100% complete, and the file in the Processing Documents list", ok: true, fb: "Right. Only then treat it as done and record it in your tracker." }
          ] },
          { t: "choice", q: "Besides the Balance Verification Tracker, what does the deck strongly advise?", options: [
            { a: "Keep your own separate tracker as a backup", ok: true, fb: "Right. Systems go down and shared files change. A backup means you can still see where every request stands." },
            { a: "Keep balances only in your email inbox", fb: "Store confirmations in the CRM, and keep a separate tracker as your backup." },
            { a: "Nothing: one tracker is enough", fb: "The deck strongly advises a separate backup tracker, just in case." }
          ] }
        ]
      }
    ]
  },

  "lv2-sim": {
    title: "Day 2 Practical Simulation",
    intro: "Send John Doe's lien balance verification request and log it per the LV Guide, build it in the CMS, then read the ledger that comes back. Today's date in these cases is 12/02/2026, and (your first name) is your own first name.",
    scenarios: [
      {
        title: "The request: John Doe · Summit Ridge Physical Therapy",
        brief: ["Client: John Doe", "Lien holder (medical provider): Summit Ridge Physical Therapy",
          "Summit Ridge prefers requests by email", "Today: 12/02/2026"],
        steps: [
          { t: "order", q: "Put the steps of the Lien Balance Verification request in order.", items: [
            "Gather the relevant information",
            "Draft the request",
            "Send the request",
            "Review the lienholder's response",
            "Negotiate if necessary"
          ] },
          { t: "choice", q: "You're filling out the request form. Which fields must be complete before it goes out?", options: [
            { a: "Only the client's name", fb: "Fill out the necessary fields: date of service, account number, fax number, email and phone." },
            { a: "Date of service, account number, fax number, email and phone", ok: true, fb: "Right. Missing details slow everything down, and the billing office shouldn't have to call back to ask whose account this is." },
            { a: "The final lien balance", fb: "That's what the lienholder fills in and sends back. You complete the DOS, account number, fax, email and phone." }
          ] },
          { t: "fields", q: "Name the file, write the subject line, and write the Notes and Tasks entries.", fields: [
            { label: "File name", re: "^med - summit ridge physical therapy - lien balance verification 12\\.02\\.2026 \\([a-z][a-z .'-]*\\)$", answer: "MED - Summit Ridge Physical Therapy - Lien Balance Verification 12.02.2026 (your first name)" },
            { label: "Subject line", re: "^john doe - summit ridge physical therapy - request for lien verification$", answer: "John Doe - Summit Ridge Physical Therapy - Request for Lien Verification" },
            { label: "Notes tab", re: "^sent med - summit ridge physical therapy - lien balance verification 12\\.02\\.2026\\.? saved in meds and docs tab\\.? thank you\\.? \\([a-z][a-z .'-]*\\)$", answer: "Sent MED - Summit Ridge Physical Therapy - Lien Balance Verification 12.02.2026. Saved in Meds and Docs tab. Thank you. (your first name)" },
            { label: "Tasks tab", re: "^12/02/2026 sent lv request to summit ridge physical therapy\\.? saved in meds and docs tab\\.? thank you\\.? \\([a-z][a-z .'-]*\\)$", answer: "12/02/2026 Sent LV request to Summit Ridge Physical Therapy. Saved in Meds and Docs tab. Thank you. (your first name)" }
          ] },
          { t: "choice", q: "In the Notes entry, why does the filename appear without your name at the end?", options: [
            { a: "The Notes template is \"Sent filename w/o va's name\", and your first name goes once, at the end of the entry", ok: true, fb: "Right. Then highlight the filename, right-click and paste the internal link." },
            { a: "It's a mistake: copy the file name exactly, with your name", fb: "The LV Guide's Notes template says filename without the VA's name. Your name goes once, at the end." },
            { a: "The Notes tab doesn't allow parentheses", fb: "The template simply leaves your name off the filename, then signs off with (your first name)." }
          ] }
        ]
      },
      {
        title: "Building it in the CMS",
        brief: ["Same file: John Doe · Summit Ridge Physical Therapy", "Work it through the CMS, from the Meds Tab to the documentation."],
        steps: [
          { t: "order", q: "Put the CMS steps in order.", items: [
            "Locate the provider in the Meds Tab",
            "Extract the facility's contact information",
            "Open the Lien BV v2 – Provider and Lien Holder (date) template",
            "Download the file",
            "Update the highlighted fields in MS Word",
            "Send the letter to the appropriate entity",
            "Save the letter: upload it to Processing Documents",
            "Document all actions and update the BV fields"
          ] },
          { t: "choice", q: "Summit Ridge's record shows a red banner with an updated billing number. Which number do you use?", options: [
            { a: "The updated billing number in the banner", ok: true, fb: "Right. Current contact details mean the request reaches the right billing office the first time." },
            { a: "The number in the template", fb: "A leftover number from the template is a common mistake. Use the current contact details." },
            { a: "Whichever number is listed first", fb: "Watch for banners like this one: they give the updated billing number." }
          ] },
          { t: "choice", q: "You called Summit Ridge to confirm where to send the request. What do you do after the call?", options: [
            { a: "Nothing: the request itself is the record", fb: "After every call, summarize the conversation and outcome in the case notes within your CMS." },
            { a: "Summarize the call and its outcome in the case notes in your CMS: who you spoke with and what you learned", ok: true, fb: "Right. Anyone picking up the file later should know exactly where the balance stands." },
            { a: "Write it on your own notepad", fb: "Your notes belong in the CMS case notes, so the whole team can see them." }
          ] },
          { t: "choice", q: "You've downloaded the Lien BV v2 letter. What's next?", options: [
            { a: "Send it as it is: it was generated from the file", fb: "Open it in MS Word and update the highlighted fields first. Don't leave template placeholders behind." },
            { a: "Print it and ask the attorney to fill it in", fb: "You complete it: open it in MS Word and update the highlighted fields with this client's and provider's information." },
            { a: "Open it in MS Word and update the highlighted fields with accurate information for this client and provider", ok: true, fb: "Right. Then read it once more: clear, professional and complete." }
          ] },
          { t: "choice", q: "The letter is sent and uploaded to Processing Documents. Which medical record fields do you update?", options: [
            { a: "The BV requested date, the balance verified checkbox, the BV date and the BV notes, then save", ok: true, fb: "Right. Keeping these fields current lets everyone see the status at a glance." },
            { a: "None: uploading the letter is enough", fb: "Update the medical record's BV fields too, then save." },
            { a: "Only the provider's phone number", fb: "Update the BV requested date, the balance verified checkbox, the BV date and the BV notes." }
          ] }
        ]
      },
      {
        title: "The ledger comes back",
        brief: ["Summit Ridge Physical Therapy returns the verification form for John Doe:",
          "Last Day of Treatment: 10/14/2026 · Treatment complete: Yes",
          "Total Charges: $7,450.00 · Paid by Insurance: $2,180.00 · Adjustments: $1,020.00",
          "Final Lien Balance: $4,520.00 · Signed and dated 12/09/2026"],
        steps: [
          { t: "number", q: "Check the math. What should the final lien balance be (total charges − insurance payments − adjustments)?", answer: 4250, tol: 0.01, unit: "$", fb: "$7,450.00 − $2,180.00 − $1,020.00 = $4,250.00. The form says $4,520.00, so the figures don't reconcile." },
          { t: "choice", q: "The stated balance ($4,520.00) doesn't match the charges, payments and adjustments ($4,250.00). What do you do?", options: [
            { a: "Use $4,520.00: it's the lienholder's number", fb: "Review the response against your records. A ledger that doesn't reconcile has a discrepancy to resolve first." },
            { a: "Use $4,250.00 and file the form as final", fb: "Don't correct it on your own. Raise the discrepancy with the lienholder and get a corrected figure in writing." },
            { a: "Raise the discrepancy with Summit Ridge and resolve it before the number is relied on or the ledger is filed as final", ok: true, fb: "Right. The ledger must be free of discrepancies, because it serves as a reference for resolving the case." }
          ] },
          { t: "choice", q: "Before you save the corrected ledger, which details do you verify?", options: [
            { a: "The client's name, the medical provider's name, the last day of treatment, the final lien balance and the date signed", ok: true, fb: "Right. A ledger with the wrong client or the wrong provider should never be filed as final." },
            { a: "Only the final lien balance", fb: "Check all five: client's name, provider's name, LDT, final lien balance and the date signed." },
            { a: "The provider's logo and letterhead", fb: "Check the five key details: client, provider, LDT, final lien balance and date signed." }
          ] },
          { t: "choice", q: "Later, Summit Ridge agrees to a $500.00 negotiated discount. Where is that documented on the Final Lien Ledger?", options: [
            { a: "It doesn't: discounts are only agreed by phone", fb: "Any agreed amount must be in writing, and the ledger documents it." },
            { a: "Under adjustments: reductions or negotiated discounts applied to the lien are documented there", ok: true, fb: "Right. The key points are outstanding charges, payments with dates and amounts, adjustments, and a $0 balance once fully paid." },
            { a: "Under payments", fb: "Payments are money paid to the lienholder. A negotiated discount is an adjustment." }
          ] },
          { t: "choice", q: "The corrected ledger is verified and uploaded. What's left?", options: [
            { a: "Nothing: the upload is the record", fb: "Tracking is the last step: update the tracker with the balance, and keep your backup current." },
            { a: "Email the balance to yourself so you remember it", fb: "Update the Balance Verification Tracker (and your backup) with precise notes, and store the confirmation in the CRM." },
            { a: "Update the Balance Verification Tracker and your backup tracker with precise notes on what came back", ok: true, fb: "Right. The tracker should show the current verified number and the proof behind it, especially when a balance changes." }
          ] }
        ]
      }
    ]
  },

  /* ---------------- Day 3 ---------------- */
  "lv3-check": {
    title: "Day 3 Knowledge Check",
    intro: "Ten questions on Day 3: the entities that can hold a lien, funders, duplicate liens and ChartSwap.",
    scenarios: [
      {
        title: "Entities, duplicates and ChartSwap",
        brief: ["Answer each question from what the Day 3 deck teaches."],
        steps: [
          { t: "choice", q: "A health insurer wants back what it paid for the client's treatment, out of the settlement. What is that process called?", options: [
            { a: "Assignment", fb: "Assignment is how a provider transfers its right to be paid. The insurer's recovery is subrogation." },
            { a: "Subrogation", ok: true, fb: "Right. Subrogation lets the insurer reclaim its expenses from the settlement when the third party is deemed liable." },
            { a: "Disbursement", fb: "Disbursement is paying out the settlement. The deck names the insurer's recovery process subrogation." }
          ] },
          { t: "choice", q: "The client's own auto insurance paid some of his medical bills. Could it be a lienholder?", options: [
            { a: "Yes: an auto insurer may file a lien if it paid medical bills or other related costs that must be reimbursed", ok: true, fb: "Right. Look for any payments by an auto carrier, and ask whether a lien or reimbursement claim exists before funds go out." },
            { a: "No: only medical providers can hold liens", fb: "Several entities can hold liens, auto insurance companies among them." },
            { a: "Only if the client was at work", fb: "That's workers' compensation. An auto insurer may file a lien whenever it paid bills that must be reimbursed." }
          ] },
          { t: "choice", q: "A hospital's lien shows the full billed charges, though health insurance covered part of the bill. What do you do?", options: [
            { a: "Strike the lien: a hospital can't place one if insurance paid", fb: "In some cases a hospital may place a lien even when insurance covered some costs, depending on state law and specific agreements." },
            { a: "Pay the full billed charges", fb: "Don't assume. Confirm what is actually owed." },
            { a: "Verify what is actually owed, and flag anything unusual to the attorney", ok: true, fb: "Right. That's exactly why we verify instead of assuming." }
          ] },
          { t: "choice", q: "What is a third-party lien funder?", options: [
            { a: "A government program that paid for care", fb: "That's Medicare or Medicaid. A funder is a private company." },
            { a: "A private company that gives loans or cash advances for medical bills or legal fees in exchange for a claim against the settlement", ok: true, fb: "Right. It isn't the treating provider, so its paperwork and balances look different." },
            { a: "The client's health insurer", fb: "A funder is a private company that advances money in exchange for a claim on the settlement." }
          ] },
          { t: "choice", q: "You open a provider in the CMS, and a different company is listed in the lien holder field. What does that tell you?", options: [
            { a: "An additional company is involved, and you need to clarify all aspects before relying on any balance", ok: true, fb: "Right. The verification request may need to go to that company, not the clinic." },
            { a: "It's a data entry error: ignore it", fb: "Another entity in the lien holder field means another company is involved. Clarify it." },
            { a: "The provider has been paid in full", fb: "Not necessarily: the right to be paid may have moved to that company." }
          ] },
          { t: "choice", q: "Why do medical providers sell their invoices?", options: [
            { a: "To avoid HIPAA rules", fb: "That isn't the reason. It's common in personal injury cases where immediate payment isn't possible." },
            { a: "Because the client asked them to", fb: "Providers sell invoices when immediate payment isn't possible; the buyer then waits for the settlement." },
            { a: "Because immediate payment isn't possible, as in many personal injury claims; the buyer places a lien on the settlement and waits for the proceeds", ok: true, fb: "Right. So the company holding the lien may not be the one who treated the client, and it's the one you verify with." }
          ] },
          { t: "choice", q: "What's the rule on duplicate liens?", options: [
            { a: "Pay both lienholders and let them sort it out", fb: "Paying both reduces the client's net twice for the same treatment." },
            { a: "There must be only one valid lienholder for the same set of services", ok: true, fb: "Right. Watch for liens with the same dates of service and similar amounts from different companies." },
            { a: "Pay whichever lienholder contacted you first", fb: "Who called first doesn't decide it. Only one valid lienholder exists for a set of services; confirm which." }
          ] },
          { t: "choice", q: "When you suspect a duplicate, what documentation do you request?", options: [
            { a: "From every lien claimant: the lien agreement, proof of assignment from the medical provider, and supporting filings or notices", ok: true, fb: "Right. Then compare dates and details side by side to find inconsistencies or duplications." },
            { a: "Only the medical records", fb: "Request the lien documentation: the lien agreement, proof of assignment and supporting filings or notices." },
            { a: "Only from the claimant you think is wrong", fb: "Request it from all lien claimants, so you can compare them." }
          ] },
          { t: "choice", q: "When should duplicate lien issues be addressed?", options: [
            { a: "At disbursement, once the final numbers are in", fb: "A duplicate found at disbursement holds up the client's money while it's sorted out." },
            { a: "After the client has been paid", fb: "Too late. Address duplicates as early as possible." },
            { a: "As early as possible, ideally before settlement negotiations begin", ok: true, fb: "Right. Found early, a duplicate avoids delays and helps make sure funds are distributed appropriately." }
          ] },
          { t: "choice", q: "What is ChartSwap?", options: [
            { a: "A secure, HIPAA-compliant platform for exchanging medical records, bills and related documents between requesting parties and healthcare providers", ok: true, fb: "Right. Providers can also upload bills or lien information there for law firms to download and verify." },
            { a: "The firm's case management system", fb: "ChartSwap is a separate platform. Documents you download from it still get saved to the CMS." },
            { a: "A funder that buys providers' invoices", fb: "ChartSwap is a records-exchange platform, not a lienholder." }
          ] }
        ]
      }
    ]
  },

  "lv3-sim": {
    title: "Day 3 Practical Simulation",
    intro: "Find out who really holds John Doe's therapy lien, work through a duplicate claim with the deck's checks, then request the lien documents through ChartSwap.",
    scenarios: [
      {
        title: "Who holds the lien?",
        brief: ["Client: John Doe",
          "Provider: Cedar Point Physical Therapy, DOS 03/02/2026 – 05/18/2026",
          "In the CMS, Cedar Point's lien holder field shows: Northgate Medical Funding, LLC",
          "John also had an MRI paid by his own auto insurance, and he receives Medicaid"],
        steps: [
          { t: "choice", who: "Cedar Point billing", line: "Our system shows a $0.00 balance for John Doe.", q: "Does that mean nothing is owed for Cedar Point's care?", options: [
            { a: "Yes: close the provider out at $0.00", fb: "Not necessarily. If Cedar Point sold its invoices, the balance may now sit with the funder." },
            { a: "Not necessarily: Cedar Point may have sold its invoices, so the balance may sit with Northgate", ok: true, fb: "Right. When a provider sells its invoices, its right to reimbursement transfers to the third party." },
            { a: "Yes, and Northgate's listing is out of date", fb: "Another entity in the lien holder field means another company is involved. Clarify before you rely on any balance." }
          ] },
          { t: "choice", q: "Who do you send the verification request to?", options: [
            { a: "Cedar Point only: it treated John", fb: "The company holding the lien may not be the one who treated the client. Verify with the holder." },
            { a: "John, so he can confirm who he owes", fb: "Verify with the lienholder, not the client." },
            { a: "Northgate Medical Funding, the company holding the lien", ok: true, fb: "Right. A common mistake is paying the provider when the right to payment belongs to the funder." }
          ] },
          { t: "choice", q: "You open Northgate's contact card. What do you have ready before you reach out?", options: [
            { a: "The case details and lien information, including any relevant documentation", ok: true, fb: "Right. Then you can identify the client, the provider and the dates of service right away." },
            { a: "A reduction offer", fb: "First verify the balance. Have the case details and lien information ready." },
            { a: "Nothing: they'll look John up by name", fb: "Have the case details, lien information and documentation ready, so they can find the account at once." }
          ] },
          { t: "choice", q: "John's auto insurance paid for his MRI. What do you do about it?", options: [
            { a: "Nothing: auto insurers don't hold liens", fb: "An auto insurer may file a lien if it paid medical bills that must be reimbursed." },
            { a: "Ask whether the auto insurer has a lien or reimbursement claim before funds go out", ok: true, fb: "Right. An auto insurance company may file a lien when it paid medical bills or other related costs." },
            { a: "Pay the auto insurer the full MRI bill now", fb: "Confirm whether a lien exists and what is owed, in writing, before anything is paid." }
          ] },
          { t: "choice", q: "John receives Medicaid. What does that mean for the file?", options: [
            { a: "Medicaid can't claim anything from a settlement", fb: "Government programs like Medicare and Medicaid may file a lien for reimbursement." },
            { a: "It only matters if John was hurt at work", fb: "That's workers' compensation. Medicaid is a government program that may file its own lien." },
            { a: "Expect a possible reimbursement claim: government programs like Medicaid may file a lien, so note it early and verify it with the rest", ok: true, fb: "Right. Noting Medicare or Medicaid coverage early means those claims are identified and verified with everything else." }
          ] }
        ]
      },
      {
        title: "Two claims for the same therapy",
        brief: ["Two companies claim John Doe's Cedar Point Physical Therapy bills:",
          "Northgate Medical Funding, LLC: invoices #4471 ($3,120.00) and #4472 ($2,520.00), total $5,640.00",
          "Ridgeline Capital Partners: invoice #4472 ($2,520.00)",
          "Cedar Point's original billing statement lists two invoices: #4471 and #4472, total $5,640.00"],
        steps: [
          { t: "order", q: "Put the deck's duplicate lien checks in order.", items: [
            "Request lien documentation from all lien claimants",
            "Verify the assigned debt party with the original provider",
            "Compare the original billing statement against the lien claims",
            "Review prior payments and lien resolutions",
            "Seek legal advice if the situation is complicated"
          ] },
          { t: "number", q: "If both claims were paid as asserted, how much would be paid twice for the same services?", answer: 2520, tol: 0.01, unit: "$", fb: "Invoice #4472, $2,520.00, is claimed by both Northgate and Ridgeline. Each lien should line up with a distinct service or invoice." },
          { t: "number", q: "If both claims were paid as asserted, how much would come out of the settlement for Cedar Point's care?", answer: 8160, tol: 0.01, unit: "$", fb: "$5,640.00 + $2,520.00 = $8,160.00, instead of $5,640.00: the client's net would be reduced twice for the same treatment." },
          { t: "choice", q: "What do you ask Cedar Point, the original provider?", options: [
            { a: "To confirm, in writing, who the debt was assigned to, and whether multiple lienholders were assigned or it was an administrative error", ok: true, fb: "Right. The provider's written confirmation is what lets you pay only the legitimate lienholder." },
            { a: "To pay Ridgeline back itself", fb: "Your question is who the debt was assigned to. Clarify, in writing." },
            { a: "Nothing: the provider is no longer involved once it sells its invoices", fb: "The provider is the best party to confirm who the debt was assigned to." }
          ] },
          { t: "choice", q: "The file shows a lien resolution from an earlier settlement in which Ridgeline was already paid for invoice #4472. What does that mean?", options: [
            { a: "Ridgeline's current claim may be invalid: a duplicate lienholder that was already compensated", ok: true, fb: "Right. Reviewing prior payments before treating a claim as owed keeps an already-satisfied claim out of the client's net." },
            { a: "Pay Ridgeline again: the new claim replaces the old one", fb: "Paying a claim that was already satisfied comes straight out of the client's net." },
            { a: "Northgate's claim for #4472 is now invalid", fb: "The prior payment bears on Ridgeline's claim. Confirm the assignment with Cedar Point." }
          ] },
          { t: "choice", q: "Northgate and Ridgeline both insist they hold invoice #4472. Who decides?", options: [
            { a: "You do: pick the one with the earlier assignment date", fb: "Don't decide who is valid on your own. Document the conflict and escalate it." },
            { a: "Gather the documents, lay out the conflict clearly and bring it to the attorney; legal advice may be needed", ok: true, fb: "Right. Legal assistance may be needed to contest invalid liens or settle conflicts between competing lienholders." },
            { a: "Split the $2,520.00 between them", fb: "There's only one valid lienholder for a set of services. Escalate the conflict to the attorney." }
          ] }
        ]
      },
      {
        title: "ChartSwap: Bayside Orthopedic Group",
        brief: ["Bayside Orthopedic Group routes its records and lien requests through ChartSwap.",
          "You need Bayside's lien documents for John Doe."],
        steps: [
          { t: "order", q: "Put the ChartSwap steps in order, from logging in to recording the verification.", items: [
            "Sign up or log in to your ChartSwap dashboard",
            "Start a new request",
            "Enter the patient information",
            "Specify the records needed",
            "Identify the provider",
            "Attach authorizations",
            "Save the lien documents, named per the firm's convention",
            "Upload them to Processing Documents in the CMS",
            "Record the balance verification in the medical record"
          ] },
          { t: "choice", q: "What patient information do you enter?", options: [
            { a: "John's full name only", fb: "Enter his full name, date of birth and any other identifying information, so the provider doesn't return the wrong records." },
            { a: "John's full name, date of birth and any other identifying information", ok: true, fb: "Right. Accurate patient details keep the provider from returning the wrong records." },
            { a: "The defendant's name and claim number", fb: "The request is about the patient: full name, date of birth and other identifying information." }
          ] },
          { t: "choice", q: "There's no signed authorization in the file yet. What do you do?", options: [
            { a: "Get the signed authorization and attach it before you submit", ok: true, fb: "Right. Without the right authorization, many providers won't release anything." },
            { a: "Submit anyway and send it later", fb: "Check the file for a signed form before you submit; without it many providers won't release anything." },
            { a: "Use your ChartSwap login in place of an authorization", fb: "Your login isn't the patient's consent. Attach the authorization or consent forms required." }
          ] },
          { t: "choice", q: "Bayside's lien document is ready, and you download it. Where does it end up?", options: [
            { a: "In your downloads folder, ready if anyone asks", fb: "A common mistake is leaving it in your downloads folder. Save it and upload it to the CMS." },
            { a: "Back on ChartSwap: it stays there", fb: "Save it, upload it to Processing Documents in the CMS, and record the verification." },
            { a: "Saved with a clear name, uploaded to Processing Documents in the CMS, then recorded in the BV fields", ok: true, fb: "Right. It also gets the same review as any lien document: client, provider, dates and balance." }
          ] },
          { t: "choice", q: "The document is uploaded. Which medical record fields do you update?", options: [
            { a: "Only the provider's address", fb: "Record the BV requested date, the balance verified checkbox, the BV date and a BV note, then save." },
            { a: "The BV requested date, the balance verified checkbox, the BV date and a BV note that it was uploaded to the processing folder, then save", ok: true, fb: "Right. Anyone on the team can then see the verification status at a glance." },
            { a: "None: ChartSwap updates the CMS on its own", fb: "You update the medical record yourself: the BV requested date, balance verified, BV date and BV note." }
          ] }
        ]
      }
    ]
  }
});
