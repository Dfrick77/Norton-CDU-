// Norton Hospital CDU Operations Manual — Condition-Specific Protocols
// Transcribed from "Norton CDU Manual - Appendix A boxed flowsheets.docx"
// NOTE: A few protocols (Appendicitis, Heart Failure, Vaginal Bleeding, Vertigo)
// are missing a criteria list or an order set in the source document itself —
// that gap is preserved here rather than invented.

const PROTOCOLS = [
  {
    id: "abdominal-pain",
    name: "Abdominal Pain/Colitis",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Stable vital signs",
        "Ancillary symptoms: anorexia, nausea/vomiting, fever, elevated WBC",
        "Negative pregnancy test",
        "Non-surgical abdomen",
        "High likelihood (~70%) of discharge within 15 hours"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Unstable VS (HR >110, SBP <100, RR >22)",
        "Immunocompromised patient (transplant, chemotherapy, T-cells <200)",
        "Pregnant patient",
        "Confirmed bowel obstruction (even partial) or ileus",
        "Cholecystitis (sonographic Murphy sign, wall thickening >4mm, dilated CBD)",
        "Surgical abdomen: free air, rigidity, rebound tenderness",
        "History of frequent ED visits / suspected narcotic abuse"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Analgesics, NPO, IV hydration, repeat CBC",
        "Imaging as indicated (CT abdomen/pelvis, ultrasound, MRI)",
        "Serial vital signs; serial abdominal exams Q2–4 hours while awake",
        "Surgical or GI consultation as needed"
      ]},
      { heading: "Discharge Parameters", items: [
        "Pain and/or tenderness resolved or significantly improved",
        "VS acceptable; no diagnosis requiring hospitalization"
      ]},
      { heading: "Admission Parameters", items: [
        "Persistent vomiting; pain not resolving or worsening",
        "Unstable VS; clinical condition or positive testing requiring hospitalization",
        "Surgical abdomen or consultant preference"
      ]}
    ],
    algorithms: [
      { title: "Abdominal Pain/Colitis", file: "images/abdominal-pain-colitis-algorithm.png" }
    ],
    orderSet: {
      title: "Abdominal Pain/Colitis Observation Order Set",
      diagnosis: "Abdominal Pain/Colitis",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO Immediately", "NPO after Midnight"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "Lactated Ringers 1000 mL @ 75 mL/hr"] },
        { label: "Consults", items: ["General Surgery"] },
        { label: "Medications", subheading: "Antiemetic", items: ["Ondansetron (Zofran) 4 mg IV Push q6h PRN nausea/vomiting"] },
        { label: "Medications", subheading: "Analgesics", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe Pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe Pain 7–10)"
        ]},
        { label: "Medications", subheading: "Antibiotics (select one regimen)", items: [
          "Ceftriaxone / Metronidazole (Flagyl)",
          "Piperacillin/Tazobactam (Zosyn)"
        ]},
        { label: "IV Fluid Orders", items: [
          "Normal Saline 1000 mL — Bag volume 1000 mL, Rate 75 mL/hr, IntraVENous, STAT",
          "Lactated Ringers 1000 mL — Bag volume 1000 mL, Rate 75 mL/hr, IntraVENous, STAT",
          "Normal Saline BOLUS 1000 mL — Bag volume 1000 mL"
        ]},
        { label: "Labs", items: ["CBC w/ Auto Diff", "BMP", "BMP q6h", "PT/PTT/INR", "Type and Screen"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "renal-colic",
    name: "Acute Kidney Injury / Renal Colic",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Diagnosis of renal colic established by helical CT, IVP, or ultrasound",
        "Uncomplicated stone with persistent pain or vomiting despite ED medication",
        "Stable vital signs, afebrile",
        "Urology notified for renal colic"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Unstable VS or sepsis in setting of nephrolithiasis",
        "Solitary kidney; large proximal stone (>6mm) with high-grade obstruction",
        "Acute renal failure not correctable within 18 hours",
        "End-stage renal failure or dialysis patient"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "IV hydration; IV narcotics, ketorolac, antiemetics as needed",
        "Medical expulsive therapy (tamsulosin/Flomax, steroids)",
        "Diagnostic tests as needed: delayed IVP, ultrasound, CT",
        "Serial exams and vital signs; strain urine for stone capture",
        "Urology consultation as needed"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS; pain and nausea resolved or controlled; passage of stone"
      ]},
      { heading: "Admission Parameters", items: [
        "Persistent vomiting or uncontrolled pain after 14 hours",
        "Coexistent infection or significant imaging abnormality",
        "Change in diagnosis requiring further therapy or workup"
      ]}
    ],
    algorithms: [
      { title: "Renal Colic Protocol", file: "images/renal-colic.png" }
    ],
    orderSet: {
      title: "Renal Colic Observation Order Set",
      diagnosis: "Renal Colic",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated"] },
        { label: "Diet", items: ["NPO", "Clears advancing to Regular Diet as tolerated", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS @ _____ mL/hr"] },
        { label: "Medications", subheading: "Expulsive Therapy", items: ["Tamsulosin (Flomax) 0.4 mg PO daily x 1 dose"] },
        { label: "Medications", subheading: "Antiemetic", items: ["Ondansetron (Zofran) 4 mg IV q4h PRN nausea x 3 doses"] },
        { label: "Medications", subheading: "Analgesics", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Ketorolac (Toradol) 15 mg IV q6h",
          "Morphine 2 mg IV q3h PRN x 2 doses (Moderate pain 5–7)",
          "Morphine 4 mg IV q4h PRN x 2 doses (Severe pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe pain 7–10)"
        ]},
        { label: "Nursing Orders", items: ["Strain all urine", "Saline Lock", "VS Q4hr", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "allergic-reaction",
    name: "Allergic Reaction",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Stable vitals / afebrile; established IV access",
        "Response to initial ED treatment",
        "Erythroderma, morbilliform rash, urticaria, or angioedema present",
        "If airway angioedema present, need for surgical airway judged HIGHLY UNLIKELY by attending",
        "Minimum 2 hours of stability after treatment"
      ]},
      { heading: "Exclusion Criteria", items: [
        "No response to initial ED interventions",
        "Concern for airway compromise; stridor or hoarseness",
        "Hypotension (MAP <65 or SBP <100), tachycardia >120 bpm",
        "Room-air saturation <92%",
        "Use of IV anaphylaxis-dose epinephrine or IV vasopressors",
        "Suspicion for acute coronary syndrome"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "IV fluids as needed; antihistamines, corticosteroids",
        "Frequent reassessment and documentation of airway status",
        "Inhaler or nebulizer treatments as indicated",
        "Cardiac monitoring (if indicated); repeat IM/SQ epinephrine if needed",
        "Pulse oximetry"
      ]},
      { heading: "Discharge Parameters", items: [
        "Resolution or improvement in clinical condition; stable VS",
        "No progression of symptoms for 4 hours; able to perform baseline ADLs"
      ]},
      { heading: "Admission Parameters", items: [
        "Delayed worsening of allergic symptoms; persistent wheezing or stridor",
        "Inadequate response to therapy; inability to take oral medications",
        "Abnormal vital signs: SBP <100 or RR >24 or hypoxia"
      ]}
    ],
    algorithms: [
      { title: "Allergic Reaction Protocol", file: "images/allergic-reaction.png" }
    ],
    orderSet: {
      title: "Allergic Reaction Observation Order Set",
      diagnosis: "Allergic Reaction",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clears", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS @ 75 mL/hr", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Medications", subheading: "Steroids", items: [
          "Methylprednisolone sodium succinate (Solumedrol) 125 mg IV Push x 1 dose",
          "Prednisone 40 mg PO daily x 1 dose"
        ]},
        { label: "Medications", subheading: "Antihistamines", items: [
          "Diphenhydramine (Benadryl) 25 mg IV Push q6h x 2 doses",
          "Famotidine (Pepcid) 20 mg IV q12h x 2 doses"
        ]},
        { label: "Medications", subheading: "Bronchodilators", items: [
          "Albuterol 2.5 mg/3 mL nebulized q4h PRN wheeze/SOB x 3 doses — If >3 doses needed, admit patient",
          "Albuterol 15 mg/3 mL nebulized q4h PRN x 2 doses — If >2 doses needed, admit patient"
        ]},
        { label: "Medications", subheading: "Smokers", items: ["Nicotine (Nicoderm) patch: 7 mg / 14 mg / 21 mg topically daily"] },
        { label: "Labs", items: ["CBC with Auto Diff, Stat", "BMP, Stat"] },
        { label: "Nursing Orders", items: [
          "Saline Lock", "VS Q4hr", "Cardiac Monitoring",
          "Peak Flow at admission and after each nebulizer treatment",
          "Oxygen Nasal Cannula _____ L/min PRN (O2 sat <92%)",
          "Oxygen Saturation While Ambulating"
        ]}
      ]
    }
  },
  {
    id: "appendicitis",
    name: "Appendicitis",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Stable vital signs",
        "Established IV access",
        "No significant laboratory abnormality (e.g., anion gap <20, severe renal failure)",
        "Confirmed appendicitis on CT and General Surgery consulted"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Evidence of hemodynamic compromise",
        "Pregnancy",
        "Hemoglobin <5",
        "Co-morbid conditions requiring admission or critical care consultation"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Monitoring for potential hemodynamic issues",
        "IV fluids",
        "Electrolyte replacement as indicated",
        "Repeat labs as indicated",
        "Antiemetics as indicated"
      ]},
      { heading: "Discharge Parameters", items: [
        "General Surgery attending recommends discharge or outpatient management with close follow-up"
      ]},
      { heading: "Admission Parameters", items: [
        "Worsening of clinical condition; patient becomes hypotensive",
        "Additional complications found requiring hospitalization",
        "Development of any exclusion criteria",
        "Progression of clinical disease",
        "Admission deemed necessary by consulting service",
        "Mental status decline"
      ]}
    ],
    orderSet: {
      title: "Appendicitis Observation Order Set",
      diagnosis: "Appendicitis",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO Immediately", "NPO after Midnight"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "Lactated Ringers 1000 mL @ 75 mL/hr"] },
        { label: "Consults", items: ["General Surgery"] },
        { label: "Medications", subheading: "Antiemetic", items: ["Ondansetron (Zofran) 4 mg IV Push q6h PRN nausea/vomiting"] },
        { label: "Medications", subheading: "Analgesics", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe Pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe Pain 7–10)"
        ]},
        { label: "Medications", subheading: "Antibiotics (select one regimen)", items: [
          "Ceftriaxone / Metronidazole (Flagyl)",
          "Piperacillin/Tazobactam (Zosyn)"
        ]},
        { label: "IV Fluid Orders", items: [
          "Normal Saline 1000 mL — Bag volume 1000 mL, Rate 75 mL/hr, IntraVENous, STAT",
          "Lactated Ringers 1000 mL — Bag volume 1000 mL, Rate 75 mL/hr, IntraVENous, STAT",
          "Normal Saline BOLUS 1000 mL — Bag volume 1000 mL"
        ]},
        { label: "Labs", items: ["CBC w/ Auto Diff", "BMP", "BMP q6h", "PT/PTT/INR", "Type and Screen"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "asthma-exacerbation",
    name: "Asthma Exacerbation",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Stable vitals / afebrile; established IV access; response to ED treatment",
        "Intermediate response — improving but still wheezing",
        "PEFR 40–70% predicted (or personal best) after beta-2 agonists",
        "Beta-2 agonist nebs (2 treatments or 10 mg albuterol) + steroids given in ED",
        "CXR with no acute findings (pneumonia, pneumothorax, CHF)",
        "SaO2 >95% on ≤2 L/min NC or >95% room air with RR <30"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Unstable VS or clinical condition; severe dyspnea, confusion, drowsiness",
        "Persistent use of accessory muscles, RR >40, or excessive effort",
        "If ABG done: elevated pCO2 (>45–50) plus decreased pH (<7.29)",
        "O2 Sat <92% on room air (unless documented chronic hypoxia)",
        "PEFR <40% predicted or personal best; BiPAP or CPAP required",
        "Suspicion of ACS, new-onset CHF, or pneumonia on CXR"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Serial treatments with nebulized beta-2 agonist Q2–4 hr and ipratropium Q6 hr",
        "IV Magnesium Sulfate as needed; systemic steroids (PO or IV)",
        "Pulse oximetry; ABG and oxygen with cardiac monitoring as needed; BNP if needed",
        "Frequent reassessment; peak flow at admission and after each nebulizer treatment",
        "Initiate corticosteroid controller inhaler before discharge"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS: HR <100, RR <20 after ambulation (if able)",
        "Pulse Ox >95% on RA (or return to baseline); PEFR >70% predicted or personal best",
        "Resolution of bronchospasm or return to baseline status"
      ]},
      { heading: "Admission Parameters", items: [
        "Progressive deterioration; failure to resolve bronchospasm within 15 hours",
        "Persistent PEFR <70% of predicted; hypoxic despite therapy if not chronic"
      ]}
    ],
    algorithms: [
      { title: "Asthma Exacerbation Protocol", file: "images/asthma-exacerbation.png" }
    ],
    orderSet: {
      title: "Asthma Exacerbation Observation Order Set",
      diagnosis: "Asthma Exacerbation",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated"] },
        { label: "Diet", items: ["Clears", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS @ 75 mL/hr", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Medications", subheading: "Steroids", items: [
          "Methylprednisolone sodium succinate (Solumedrol) 125 mg IV Push x 1 dose",
          "Prednisone 40 mg PO daily x 1 dose"
        ]},
        { label: "Medications", subheading: "Antihistamines", items: [
          "Diphenhydramine (Benadryl) 25 mg IV Push q6h x 2 doses",
          "Famotidine (Pepcid) 20 mg IV q12h x 2 doses"
        ]},
        { label: "Medications", subheading: "Bronchodilators", items: [
          "Albuterol 2.5 mg/3 mL nebulized q4h PRN wheeze/SOB x 3 doses — If >3 doses needed, admit patient",
          "Albuterol 15 mg/3 mL nebulized q4h PRN x 2 doses — If >2 doses needed, admit patient",
          "Duoneb 0.5 mg–2.5 mg / 3 mL nebulized q6h x 2 doses"
        ]},
        { label: "Medications", subheading: "Analgesics", items: ["Acetaminophen 650 mg PO q6h or q4h PRN pain"] },
        { label: "Medications", subheading: "Smokers", items: ["Nicotine (Nicoderm) patch: 7 mg / 14 mg / 21 mg topically daily"] },
        { label: "Nursing Orders", items: [
          "Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring",
          "Peak Flow at admission and after each nebulizer treatment",
          "Oxygen Nasal Cannula _____ L/min PRN (O2 sat <92%)",
          "Oxygen Saturation While Ambulating"
        ]}
      ]
    }
  },
  {
    id: "afib-dysrhythmia",
    name: "Atrial Fibrillation / Dysrhythmia",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Atrial fibrillation with onset clearly <48 hours; stable BP; HR <110 for one hour with treatment",
        "No chest pain when rate controlled; normal CXR; no evidence of acute comorbidities",
        "Stable dysrhythmia (SVT post-conversion, symptomatic PVCs, sinus bradycardia without hemodynamic compromise)",
        "Successful ED cardioversion or rate control; Cardiology consulted"
      ]},
      { heading: "Exclusion Criteria", items: [
        "HR >110 despite ED medications; IV vasoactive drips required (e.g., diltiazem)",
        "Hemodynamically unstable; ongoing ischemic chest pain after rate control",
        "AF onset >48 hours or unknown; chronic atrial fibrillation",
        "Acute comorbidities: evidence of acute MI, CHF, PE, sepsis, CVA/embolic event",
        "Troponin elevation; stable/unstable ventricular tachycardia or fibrillation",
        "High-grade AV block (II or III) or new wide-complex dysrhythmia",
        "Cardiologist or ED physician chooses inpatient admission"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Cardiac monitoring, pulse oximetry; VS Q2 hr x 6 hr, then Q4 hr",
        "Anticoagulate if not contraindicated — PO aspirin (325 mg) or SQ heparin (LMWH or UFH)",
        "Rate control options: oral Cardizem, verapamil, or beta blockers",
        "Serial Troponin and ECGs at 3 and 6 hours from first ED blood draw",
        "TSH, 2D echocardiogram if indicated; educate patient on cardioversion options",
        "Electrical cardioversion to occur outside of the CDU; initiate anticoagulation if indicated"
      ]},
      { heading: "Discharge Parameters", items: [
        "Patient converts and remains in NSR for >1 hour; negative diagnostic testing",
        "Hemodynamically stable for 4–6 hours; controlled rate <100 bpm; arranged follow-up"
      ]},
      { heading: "Admission Parameters", items: [
        "Failure to maintain rate control under 100; positive diagnostic testing",
        "Recurrence of dysrhythmia with symptoms; troponin elevation; new heart failure signs"
      ]}
    ],
    algorithms: [
      { title: "Dysrhythmia Protocol", file: "images/dysrhythmia.png" }
    ],
    orderSet: {
      title: "Dysrhythmia Observation Order Set",
      diagnosis: "Dysrhythmia",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      codeStatus: "Full Code",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clears", "Regular Diet", "Cardiac Diet"] },
        { label: "Medications", subheading: "Rate Control", items: [
          "Metoprolol 5 mg IV q6h PRN HR >110",
          "Diltiazem 10 mg IV PRN HR >110"
        ]},
        { label: "Medications", subheading: "Analgesic", items: ["Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)"] },
        { label: "IV Fluid Orders", items: [
          "Normal Saline 1000 mL — Bag volume 1000 mL, Rate 75 mL/hr, IntraVENous, STAT",
          "Lactated Ringers 1000 mL — Bag volume 1000 mL, Rate 75 mL/hr, IntraVENous, STAT",
          "Normal Saline BOLUS 1000 mL — Bag volume 1000 mL"
        ]},
        { label: "Labs", items: ["CBC", "BMP", "Magnesium", "Phosphorus", "Troponin x 2", "TSH", "BNP", "PT/PTT/INR", "Repeat EKG q6h or PRN symptoms"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring", "Notify MD for HR >120 or SBP <90"] },
        { label: "Consults", items: ["Physician to Physician Consult: Cardiology"] }
      ]
    }
  },
  {
    id: "back-pain-cauda-equina",
    name: "Back Pain / Cauda Equina Rule-Out",
    criteria: [
      { heading: "Inclusion Criteria — Back Pain", items: [
        "Inability to adequately control pain in ED with analgesics",
        "Normal neurological function; no risk of metastatic disease or epidural abscess",
        "Back pain without severe trauma; normal imaging (if obtained)",
        "Inability to ambulate because of pain"
      ]},
      { heading: "Exclusion Criteria — Back Pain", items: [
        "Age over 65 years old; frequent ED visits / suspected narcotic-seeking behavior",
        "Acute motor deficit (foot drop, loss of extension, loss of bowel/bladder control)",
        "Abnormal X-rays (burst fracture, spine canal involvement)",
        "High suspicion of cord compression, metastatic disease, epidural bleed/abscess, discitis; fever"
      ]},
      { heading: "Inclusion Criteria — Cauda Equina Rule-Out", items: [
        "Back pain with red-flag symptoms (urinary retention/incontinence, saddle anesthesia)",
        "Stable vitals; able to undergo MRI within observation time"
      ]},
      { heading: "Exclusion Criteria — Cauda Equina Rule-Out", items: [
        "Immediate operative intervention warranted; unstable vitals or sepsis",
        "Known spinal hardware or metal contraindicating MRI",
        "Poor rectal tone or focal neurologic deficit; unable to undergo MRI within 24 hours"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Analgesics (narcotic/NSAIDs); serial exams; physical therapy assessment",
        "MRI lumbar spine for cauda equina; neurosurgery consult; steroids if indicated",
        "Consultation as needed: PMR, Ortho/Spine, Social Services; imaging if acute surgical disease suspected",
        "Bladder scan Q6 hr for cauda equina; neuro checks Q2 hr"
      ]},
      { heading: "Discharge Parameters", items: [
        "Ability to ambulate and care for self at home with oral analgesics; pain at a tolerable level",
        "Normal MRI and neurosurgical evaluation negative; no progression of symptoms"
      ]},
      { heading: "Admission Parameters", items: [
        "Inability to tolerate pain on oral medications; worsening neurological exam",
        "Positive MRI findings; urinary retention not resolving; neurosurgical recommendation for admission"
      ]}
    ],
    algorithms: [
      { title: "Cauda Equina Rule Out Protocol", file: "images/cauda-equina.png" }
    ],
    orderSet: {
      title: "Back Pain / Cauda Equina Rule-Out Order Set",
      diagnosis: "Cauda Equina Rule Out",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      codeStatus: "Full Code",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "NPO until MRI completed", "Clears", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr IV STAT", "Lactated Ringers 1000 mL @ 75 mL/hr IV STAT", "0.9NS 1000 mL BOLUS"] },
        { label: "Medications", subheading: "Antiemetic", items: ["Ondansetron (Zofran) 4mg IV Push q6h PRN nausea/vomiting"] },
        { label: "Medications", subheading: "Steroid", items: ["Dexamethasone 10 mg IV x 1 dose"] },
        { label: "Medications", subheading: "Analgesics", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe pain 7–10)"
        ]},
        { label: "Labs", items: ["CBC w/ Diff", "CMP", "PT/PTT/INR", "Type and Screen", "Urinalysis"] },
        { label: "Imaging", items: ["MRI Lumbar Spine w/ and w/o contrast STAT"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring", "Neuro checks Q2hr", "Bladder scan Q6hr"] },
        { label: "Consults", items: ["Physician to Physician Consult: Neurosurgery"] }
      ]
    }
  },
  {
    id: "blood-transfusion",
    name: "Blood Transfusion",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Hemoglobin <7 with known/suspected cause, or symptomatic anemia requiring transfusion",
        "Stable vitals / afebrile; established IV access; no evidence of active bleeding",
        "Deficiency correctable by transfusion; recent labs verifying need"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Unstable VS or active bleeding",
        "End-stage renal failure or dialysis patients; pregnant >20 weeks",
        "Hemoglobin <5; coagulopathy; co-morbid conditions requiring critical care",
        "Requirement of >3 units of blood for transfusion"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "IV access; pre-medicate and IV hydration as needed",
        "Type and Cross match if not previously done; transfuse leukocyte-reduced red cells per protocol",
        "Repeat CBC at least 1–2 hours following transfusion",
        "Vital signs per blood bank policy: baseline, at 15 min, at 1 hr, and post-transfusion",
        "Cardiology/Hematology-Oncology consult as appropriate"
      ]},
      { heading: "Discharge Parameters", items: [
        "Stable vital signs; symptoms improved; satisfactory increase in hemoglobin following transfusion",
        "No fever for 1 hour after 1 unit PRBC or 2 hours after 2 units PRBC",
        "No evidence of fluid overload, CHF, or transfusion reaction"
      ]},
      { heading: "Admission Parameters", items: [
        "Transfusion reaction; unstable VS; fluid overload or CHF",
        "Inadequate response to therapy; requirement of >3 units of blood"
      ]}
    ],
    algorithms: [
      { title: "Blood Transfusion Protocol", file: "images/blood-transfusion.png" }
    ],
    orderSet: {
      title: "Blood Transfusion Observation Order Set",
      diagnosis: "Blood Transfusion",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clears", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Gastroenterology", "Hematology/Oncology"] },
        { label: "Medications", subheading: "Pre-Medications", items: [
          "Methylprednisolone sodium succinate (Solumedrol) 125 mg IV x 1 dose",
          "Diphenhydramine (Benadryl) 25 mg PO x 1 dose",
          "Acetaminophen 650 mg PO q6h or q4h PRN pain"
        ]},
        { label: "Medications", subheading: "Post-Transfusion", items: ["Furosemide 40 mg IV x 1 dose — After units of blood product (if fluid overload concern)"] },
        { label: "Labs", items: [
          "Type and Crossmatch", "Red Blood Cells Product Order — 2 units", "PT/PTT/INR",
          "CBC w/ Auto Diff, Stat", "CMP, Stat", "CBC (no Diff) — Post-Transfusion", "BMP — Post-Transfusion"
        ]},
        { label: "Imaging", items: ["Chest X-Ray, 1 view portable"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr (and per blood bank policy: baseline, 15 min after start, 1 hr after start, post-transfusion)", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "cellulitis",
    name: "Cellulitis",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Serial exams needed to exclude rapidly progressive cellulitis",
        "Cellulitis requiring >1 dose antibiotics in the ED",
        "Temp <104°F, WBC 4,000–16,000",
        "Cellulitis with a drained abscess requiring brief observation and wound care"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Septic/toxic patients with severe sepsis: Temp >104°F, SBP <100, RR >22, HR >100, lactate >4 mmol/L",
        "Immunocompromised: neutropenia, HIV, transplant, ESRD/hemodialysis, immunosuppressants, post-splenectomy",
        "High-risk infections: diabetic foot, prosthesis proximity, orbital/upper lip/nose/neck, >9% TBSA, osteomyelitis suspicion",
        "Poorly controlled diabetes; patient unable to care for self at home"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Mark edges of cellulitis with indelible marker to monitor progression",
        "Antibiotics per contemporary local guidelines (non-purulent: Cephalexin/Ceftriaxone; purulent/PCN allergy: Doxycycline/TMP-SMX or Vancomycin/Dalbavancin)",
        "Pertinent labs: CBC, glucose, blood/wound cultures PRN; elevate extremity"
      ]},
      { heading: "Discharge Parameters", items: [
        "Improvement or no progression of cellulitis; good clinical condition (no fever, good VS) for 8 hrs",
        "Able to perform wound care at home and take oral medications"
      ]},
      { heading: "Admission Parameters", items: [
        "Increase in skin involvement; clinical condition worse (rising temp, poor vitals)",
        "Unable to take oral medications or care for wound at home"
      ]}
    ],
    algorithms: [
      { title: "Cellulitis Protocol", file: "images/cellulitis.png" }
    ],
    orderSet: {
      title: "Cellulitis Observation Order Set",
      diagnosis: "Cellulitis",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated"] },
        { label: "Diet", items: ["Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Infectious Disease / SUDS as appropriate"] },
        { label: "Medications", subheading: "Antibiotics (select one)", items: [
          "Cefazolin (Ancef) 1 gm q8h IV Piggyback",
          "Vancomycin per Pharmacy Powerplan",
          "Dalbavancin per Pharmacy Power Plan"
        ]},
        { label: "Medications", subheading: "Analgesics (select one)", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe pain 7–10)"
        ]},
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring", "Elevate extremity", "Heat Therapy as appropriate"] }
      ]
    }
  },
  {
    id: "chest-pain-low-moderate",
    name: "Chest Pain (Low-Moderate Risk ACS)",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "ACS risk is low based on Reilly chest pain criteria; HEART score 3–6",
        "Chest discomfort potentially due to cardiac ischemia",
        "No acute ischemic ECG changes; negative initial troponin",
        "Acceptable vital signs; other life-threatening causes of chest pain ruled out"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Moderate-to-high risk criteria (Reilly/Goldman): pain worse than usual angina, recent revascularization, SBP <110, rales above both bases",
        "HEART score <3 or chest pain clearly non-cardiac",
        "New ECG changes consistent with ischemia; positive troponin not known to be chronic",
        "Stress test or cardiac imaging needed but NOT available in CDU",
        "Recent normal cardiac catheterization (no coronary stenosis)",
        "Delta troponin increase >15"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Saline lock, cardiac monitor, daily aspirin, nitrates PRN; NPO 6 hours before stress test; no caffeine if stress test planned",
        "Serial Troponin I and ECGs at 3 and 6 hours from first ED blood draw",
        "Repeat EKG based on symptoms or monitor alert — show to CDU/ED physician STAT",
        "Stress testing and cardiac imaging after negative serial troponins (exercise treadmill, Cardiac CTA, nuclear stress test, or echocardiography per protocol)",
        "Cardiology consultation; 2D echocardiography as indicated"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS; stable symptoms; no serious cause of symptoms identified",
        "Normal serial cardiac markers and EKGs; negative cardiac imaging for ACS"
      ]},
      { heading: "Admission Parameters", items: [
        "Unstable VS; positive cardiac markers or EKGs",
        "Positive provocative test (ischemic/reversible perfusion defect)",
        "CDU or personal physician discretion; serious alternative diagnosis (PE, aortic dissection)"
      ]}
    ],
    algorithms: [
      { title: "ED Chest Pain Algorithm with CDU Observation", file: "images/chest-pain-algorithm.png" },
      { title: "ED Chest Pain Imaging Guidance", file: "images/chest-pain-imaging-guidance.png" },
      { title: "Low to Moderate Risk Chest Pain Protocol", file: "images/chest-pain-low-moderate.png" },
      { title: "Guidelines for Stress Testing: ED Observation Unit", file: "images/stress-testing-guidelines.png" }
    ],
    orderSet: {
      title: "Chest Pain (Low-Moderate Risk) Observation Order Set",
      diagnosis: "Low-Moderate Risk Chest Pain",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Cardiac Diet", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Cardiology Service"] },
        { label: "Medications", items: [
          "Enteric coated aspirin 325 mg PO daily x 1 dose",
          "Metoprolol tartrate 25 mg PO q12h — Do NOT give if HR <60 bpm or SBP <100 mmHg",
          "Nitroglycerin 0.4 mg Topical Patch q8h"
        ]},
        { label: "Labs", items: ["Troponin I & EKG q2h x 6 hours", "EKG q4h — duration 8 hours", "Blood glucose ACHS (if glucose >120 or diabetic)", "PT/PTT/INR", "Type and Screen", "Lipid Panel"] },
        { label: "Imaging", items: ["2D Echocardiography Complete", "CTA Coronary Study W 3D", "EKG Stress Test Exercise", "Stress Echocardiogram (per Cardiology)"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring", "NPO after Midnight (if stress test planned)"] }
      ]
    }
  },
  {
    id: "copd-exacerbation",
    name: "COPD Exacerbation",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Good response to initial therapy (beta-agonists, ipratropium, steroids)",
        "No acute process on CXR (required); acceptable VS (PO2 >90 or baseline, HR <100–120, RR <24, SBP >100)",
        "Alert and oriented; no indication of impending respiratory fatigue",
        "SaO2 >94% on ≤2 L/min NC and RR <20, or >94% room air and RR <24"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Concurrent acute comorbidities: pneumonia, CHF, cardiac ischemia",
        "Unstable VS or clinical condition; acute confusion/lethargy or evidence of CO2 narcosis",
        "Poor response to initial therapy; BiPAP or CPAP required",
        "O2 Sat <88% on 2 L O2 after initial treatment; persistent use of accessory muscles RR >28"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Serial treatments: beta-agonists Q2–4 hr, ipratropium Q6 hr, steroids",
        "Hydration; antibiotics if indicated (based on contemporary guidelines)",
        "Pulse oximetry continuous or Q4 hr; ABG if indicated; supplemental oxygen; reassessment Q4 hr",
        "Cardiac monitoring, cardiac markers, ECGs, BNP as needed"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS; resolution of exacerbation or return to baseline status",
        "Pulse Ox >90% on room air or home FiO2"
      ]},
      { heading: "Admission Parameters", items: [
        "Progressive deterioration; failure to resolve exacerbation within 18 hours",
        "Co-existent pneumonia or CHF; uncompensated pCO2 retention; O2 sat <90% on room air or home FiO2"
      ]}
    ],
    algorithms: [
      { title: "COPD Exacerbation Protocol", file: "images/copd-exacerbation.png" }
    ],
    orderSet: {
      title: "COPD Exacerbation Observation Order Set",
      diagnosis: "COPD Exacerbation",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Pulmonology"] },
        { label: "Medications", subheading: "Steroids", items: [
          "Methylprednisolone sodium succinate (Solumedrol) 125 mg IV Push x 1 dose",
          "Prednisone 40 mg PO daily x 1 dose"
        ]},
        { label: "Medications", subheading: "Bronchodilators", items: [
          "Albuterol 2.5 mg/3 mL nebulized q4h PRN wheeze/SOB x 3 doses — If >3 doses needed, admit patient",
          "Albuterol 15 mg/3 mL nebulized q4h PRN x 2 doses — If >2 doses needed, admit patient",
          "Duoneb 0.5 mg–2.5 mg / 3 mL nebulized q6h x 2 doses"
        ]},
        { label: "Medications", subheading: "Analgesics", items: ["Acetaminophen 650 mg PO q6h PRN pain", "Acetaminophen 650 mg PO q4h PRN pain"] },
        { label: "Medications", subheading: "Smokers", items: ["Nicotine (Nicoderm) patch: 7 mg / 14 mg / 21 mg topically daily"] },
        { label: "Imaging", items: ["Chest X-Ray, 1 view portable"] },
        { label: "Nursing Orders", items: [
          "Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring",
          "Peak Flow at admission and after each nebulizer treatment",
          "Oxygen Nasal Cannula _____ L/min PRN (O2 sat <92%)",
          "Ambulatory Oxygen Saturation"
        ]}
      ]
    }
  },
  {
    id: "dehydration-nausea-vomiting",
    name: "Dehydration / Nausea & Vomiting",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Acceptable VS; mild to moderate dehydration; established IV access",
        "Self-limiting or treatable cause not requiring hospitalization",
        "Mild-to-moderate electrolyte abnormalities; if pregnant, first trimester only",
        "Evidence of dehydration: vomiting/diarrhea, elevated BUN/Cr ratio, orthostatic changes"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Dehydration is not clearly present; unstable VS (hypotension, tachycardia, severe dehydration)",
        "Severe (>15%) dehydration; severe electrolyte abnormalities; cardiovascular compromise",
        "Associated cause not amenable to short-term treatment: bowel obstruction, appendicitis, bowel ischemia, DTs, sepsis",
        "End-stage renal failure or dialysis patient"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "IV hydration (D5LR if starvation ketosis or hyperemesis gravidarum present)",
        "Antiemetics (Zofran Q4 hr, Reglan Q6 hr); advance diet as tolerated",
        "Serial exams; monitor intake and output; repeat labs; OB-Gyn consult if indicated"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS; resolution of symptoms; able to tolerate oral fluids; normal electrolytes (if done)"
      ]},
      { heading: "Admission Parameters", items: [
        "Unstable VS; associated cause requiring hospitalization; inability to tolerate oral fluids despite protocol; continued nausea/vomiting >12 hours"
      ]}
    ],
    algorithms: [
      { title: "Dehydration / Intractable Nausea & Vomiting Protocol", file: "images/dehydration-nausea-vomiting.png" }
    ],
    orderSet: {
      title: "Dehydration / Nausea & Vomiting Observation Order Set",
      diagnosis: "Dehydration / Intractable Nausea and Vomiting",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Medications", subheading: "Antiemetics", items: [
          "Ondansetron (Zofran) 4 mg IV q4h x 3 doses",
          "Metoclopramide (Reglan) 10 mg IV q6h x 2 doses",
          "Ondansetron (Zofran) ODT 4 mg PO q4h PRN nausea x 3 doses (when tolerating PO)"
        ]},
        { label: "Labs", items: ["BMP, Stat", "POC BMP, Stat", "BMP q6h (start in 6 hours)", "Urinalysis w/ microscopic", "Magnesium", "Phosphorous", "POC Glucose q6h"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "epistaxis",
    name: "Epistaxis",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Anterior epistaxis uncontrolled after initial measures; hemodynamically stable",
        "Normal coagulation labs or known minor anticoagulant use"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Posterior epistaxis requiring operative intervention; high-volume blood loss; airway compromise",
        "INR >5 or platelet <50K; unstable vitals"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Nasal packing (anterior); oxymetazoline; tranexamic acid topically or orally",
        "ENT consultation; CBC, PT/INR, Type & Screen; IV fluids if needed"
      ]},
      { heading: "Discharge Parameters", items: [
        "Bleeding stopped >2 hours; hemodynamically stable; close ENT follow-up arranged"
      ]},
      { heading: "Admission Parameters", items: [
        "Recurrent bleeding; unable to control bleeding in 16 hours; posterior packing required; airway or hemodynamic compromise"
      ]}
    ],
    algorithms: [
      { title: "Epistaxis Protocol", file: "images/epistaxis.png" }
    ],
    orderSet: {
      title: "Epistaxis Observation Order Set",
      diagnosis: "Epistaxis",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      codeStatus: "Full Code",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest with HOB elevated"] },
        { label: "Diet", items: ["NPO", "Clears", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr IV STAT", "Lactated Ringers 1000 mL @ 75 mL/hr IV STAT", "0.9NS 1000 mL BOLUS"] },
        { label: "Medications", items: [
          "Ondansetron (Zofran) 4 mg IV Push q6h PRN nausea/vomiting",
          "Tranexamic Acid Topical",
          "Oxymetazoline nasal spray BID"
        ]},
        { label: "Medications", subheading: "Analgesics", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe pain 7–10)"
        ]},
        { label: "Labs", items: ["CBC w/ Diff", "PT/PTT/INR", "Type and Screen"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring"] },
        { label: "Consults", items: ["Physician to Physician Consult: ENT"] }
      ]
    }
  },
  {
    id: "headache-intractable",
    name: "Headache (Intractable)",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Persistent pain in tension or migraine headache; hx of migraine with same aura/onset/location/pattern",
        "No focal neurological signs; normal CT scan (if done)",
        "If LP needed, it must be done and normal before CDU transfer",
        "Neurology, Neurosurgery, Neuro-ophthalmology consult completed in ED for complicated cases"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Focal neurologic signs; meningismus or high suspicion of meningitis, encephalitis, or SAH",
        "Elevated intraocular pressure (glaucoma); new CT abnormalities (hemorrhage, mass, abscess, midline shift)",
        "Abnormal LP if performed; hypertensive emergency (SBP >180 and DBP >120 with symptoms)",
        "Suspected temporal arteritis; blocked VP shunt; suspected narcotic-seeking behavior"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Serial exams with VS; neuro checks: level of alertness, speech, motor function",
        "Analgesics: Compazine or Reglan with Benadryl IV; Ketorolac; Solumedrol; Valproic acid; Migraine cocktail",
        "Neurology consult as indicated; MRI/MRA/MRV imaging as indicated"
      ]},
      { heading: "Discharge Parameters", items: [
        "Resolution of pain; no deterioration in clinical course; return to baseline neuro and vision status"
      ]},
      { heading: "Admission Parameters", items: [
        "No resolution in pain; deterioration in clinical course; rule-in of exclusionary causes; abnormal MRI/MRA/MRV if done"
      ]}
    ],
    algorithms: [
      { title: "Intractable Headache Protocol", file: "images/headache-intractable.png" }
    ],
    orderSet: {
      title: "Headache (Intractable Pain) Observation Order Set",
      diagnosis: "Headache — Intractable Pain",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clears advancing as tolerated", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Neurology"] },
        { label: "Medications", subheading: "Analgesics", items: [
          "Acetaminophen 650 mg PO q6h or q4h PRN pain",
          "Ketorolac 15 mg IV OR 30 mg IM x 1 dose PRN moderate pain"
        ]},
        { label: "Medications", subheading: "Antiemetics", items: [
          "Ondansetron (Zofran) 4 mg IV/PO q6h PRN nausea/vomiting",
          "Metoclopramide (Reglan) 5–10 mg IV/PO q6h PRN nausea/vomiting"
        ]},
        { label: "Medications", subheading: "Adjunct", items: ["Diphenhydramine 25 mg IV q8h for headache"] },
        { label: "Medications", subheading: "Migraine Cocktail", items: [
          "Ketorolac 15 mg IV OR 30 mg IM x 1 dose",
          "Prochlorperazine 10 mg IV x 1 dose",
          "Diphenhydramine 25 mg PO x 1 dose",
          "0.9NS or LR 1000 mL Bolus"
        ]},
        { label: "Imaging", items: ["CT Head w/o contrast", "MRI Brain w/o contrast"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Cardiac Monitoring", "Yale Swallow Screen"] }
      ]
    }
  },
  {
    id: "heart-failure",
    name: "Heart Failure (CHF)",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Previous history of CHF; acceptable VS: SBP >100, RR <32, HR <130",
        "Pulse Ox >90% on room air after initial treatment, correctable to >92% on O2 by NC",
        "High likelihood of correction to baseline status within 24 hours with good home support; no acute comorbidities"
      ]},
      { heading: "Exclusion Criteria", items: [
        "New-onset CHF; acute cardiac ischemia (EKG changes, positive troponin, ongoing ischemic chest pain)",
        "Unstable VS after treatment: HR >130, SBP <85 or >180, RR >32, Pox <92% on O2 by NC",
        "Acute comorbidities: sepsis, pneumonia, new murmur, confusion",
        "Severe anemia (Hgb <8), renal failure (BUN >40 or Cr >3), Na <135, BNP >1,000 (not strict exclusion — consider)",
        "Patients requiring vasoactive drips, invasive or noninvasive ventilation (BiPAP)"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Cardiac monitoring; strict I&O; VS Q4 hr; weight on arrival",
        "Oxygen per respiratory guidelines with continuous pulse oximetry",
        "Serial ECGs and cardiac markers (TnI) at 3 and 6 hr from first lab draw; repeat electrolytes Q6 hr and PRN",
        "IV diuretics (2× home dose) Q6 hr, nitroglycerin paste, ASA; echocardiography if not done within 30 days",
        "CHF, smoking cessation, and low-salt diet education; social worker consult as needed"
      ]},
      { heading: "Discharge Parameters", items: [
        "Subjective improvement; no chest pain, orthopnea, or exertional dyspnea above baseline",
        "Acceptable VS: O2 sat at baseline or >94%, RR <20, HR <100, SBP >100 or baseline",
        "Evidence of adequate diuresis: 1L urine output, decrease in weight/JVD; CHF discharge checklist completed"
      ]},
      { heading: "Admission Parameters", items: [
        "New ischemic EKG changes, arrhythmia, or positive cardiac markers; persistent hypoxia, rales, dyspnea",
        "Poor response to therapy; poor home support; physician judgment"
      ]}
    ],
    algorithms: [
      { title: "Heart Failure (CHF) Protocol", file: "images/heart-failure-chf-algorithm.png" }
    ],
    orderSet: null,
    orderSetNote: "No Order Set was present for this protocol in the source document."
  },
  {
    id: "hyperglycemia",
    name: "Hyperglycemia",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Non-compliance with insulin as primary cause; no other identifiable precipitant",
        "Hyperglycemia requiring treatment beyond ED visit; normal to near-normal pH and total CO2 (hyperglycemia without DKA)",
        "New-onset hyperglycemia / suspected undiagnosed DM"
      ]},
      { heading: "Exclusion Criteria", items: [
        "DKA: pH <7.3, anion gap >14, HCO3 <20; hyperosmolar non-ketotic coma or AMS",
        "Mental status changes; new-onset DM (first presentation requiring education and stabilization)",
        "Acute comorbidity/precipitant: infection, MI, surgery, trauma; hemodialysis patients"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "IV hydration: 1–2 L NS in ED, then NS at 150–250 cc/hr; when BS <250 change to D5NS",
        "Insulin: 0.2 u/kg initial dose in ED; CDU repeat doses 0.2 u/kg Q2 hr until BS <250, then 0.1 u/kg Q2 hr",
        "POC glucose on arrival then Q2 hr; BMP + BHB + VBG Q4 hr; Mg as needed; electrolyte replacement protocols",
        "When labs normalize (BS <250, pH >7.3, AG <14, HCO3 >18): transition to home subQ insulin with meal",
        "Diabetic nurse educator consult; arrange follow-up within 1–2 days"
      ]},
      { heading: "Discharge Parameters", items: [
        "Labs normalized: BS <250, pH >7.3, anion gap normal, bicarbonate normal",
        "Normal mentation and VS; no acute comorbid condition; follow-up within 1–2 days; discharged on insulin"
      ]},
      { heading: "Admission Parameters", items: [
        "Unable to correct within 18–24 hours; worsening clinical picture or anion gap",
        "Acute comorbid/precipitating condition identified; unable to tolerate PO"
      ]}
    ],
    algorithms: [
      { title: "Hyperglycemia Protocol", file: "images/hyperglycemia.png" }
    ],
    orderSet: {
      title: "Hyperglycemia Observation Order Set",
      diagnosis: "Hyperglycemia",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Adult Consistent Carbohydrate Diet — 60 gm carbs"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Medications", subheading: "Insulin", items: ["Insulin Correctional Scale (per Pharmacy Powerplan)"] },
        { label: "Medications", subheading: "Rescue Meds", items: ["Dextrose 50% IV 25 g", "Dextrose 50% IV 12.5 g"] },
        { label: "Labs", items: ["POC Glucose q1h"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "hypoglycemia",
    name: "Hypoglycemia",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Blood sugar below 40 mg% pre-Rx and >80 post-treatment; symptoms resolved with glucose",
        "Type I or Type II Diabetes; etiology determined (e.g., missed meal, accidental extra dose)",
        "Stable vitals; established IV access"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Intentional overdose of hypoglycemic medications; altered mental status or not at neurological baseline",
        "Long-acting oral hypoglycemic agent that does not initially respond to oral/IV dextrose or food",
        "Major comorbid condition: liver failure, insulinoma, sepsis; D10 drip required to maintain euglycemia",
        "Inability to tolerate oral intake; ESRD/dialysis patient"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Serial POC glucose Q1–2 hr until >80 × 2 and tolerating PO without supplemental sugar",
        "IV D50 (or oral juice if alert) for hypoglycemia; dietary food tray; IV hydration and electrolytes as indicated",
        "Hold all oral hypoglycemic agents and insulin until stable; diabetic counseling as needed"
      ]},
      { heading: "Discharge Parameters", items: [
        "Resolution of symptoms; capable adult supervision; two consecutive blood sugars >80 (1 hour apart without supplemental sugar)",
        "Resolution of precipitating factor; follow-up with primary care"
      ]},
      { heading: "Admission Parameters", items: [
        "Deterioration of clinical signs; persistent neuro or mental status deficits",
        "Bedside glucose repeatedly <80 despite trial of diet and IV glucose; requiring dextrose drip"
      ]}
    ],
    algorithms: [
      { title: "Hypoglycemia Protocol", file: "images/hypoglycemia.png" }
    ],
    orderSet: {
      title: "Hypoglycemia Observation Order Set",
      diagnosis: "Hypoglycemia",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Adult Consistent Carbohydrate Diet — 60 gm carbs"] },
        { label: "IVF", items: ["As clinically indicated"] },
        { label: "Medications", subheading: "Hold", items: ["Hold all oral hypoglycemic agents and insulin"] },
        { label: "Medications", subheading: "Dextrose", items: ["Dextrose 50% IV 25 g", "Dextrose 50% IV 12.5 g"] },
        { label: "Medications", subheading: "Oral Glucose", items: ["Oral glucose 15 gram Gel — 1 time"] },
        { label: "Labs", items: ["CBC w/ Auto Diff", "BMP", "POC Glucose q1h until >80 × 2 and tolerating PO without ongoing interventions"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "hypokalemia-electrolyte",
    name: "Hypokalemia / Electrolyte Abnormality",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Acceptable VS; cause of electrolyte disturbance does not require hospitalization",
        "No comorbidity requiring more prolonged hospitalization; mild and rapidly correctable electrolyte abnormality",
        "Hypokalemia >2.5 mEq/L with no ventricular ectopy; Hyponatremia >120 mEq/L with normal mentation and reversible etiology",
        "Hypomagnesemia >1.0 mEq/L; Hypocalcemia or Hypercalcemia within correctable range; no EKG changes"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Unstable VS or cardiovascular compromise; severe electrolyte abnormalities (K <2.5 or >6.0, Na <120 or >155)",
        "Mental status changes, seizure, or signs of cerebral edema",
        "Associated cause not amenable to short-term treatment: bowel obstruction, DTs, DKA, sepsis",
        "Unlikely to be corrected within 15 hours; more than two acute electrolyte disturbances; ESRD/dialysis patient"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Cardiac monitoring; IV electrolyte replacement/correction per protocols",
        "Repeat labs; serial VS and repeat clinical examination; monitor I&O"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS; resolution of symptoms; able to tolerate oral fluids; improved electrolytes"
      ]},
      { heading: "Admission Parameters", items: [
        "Unstable VS; associated cause requiring hospitalization; inability to tolerate oral fluids"
      ]}
    ],
    algorithms: [
      { title: "Hypokalemia Protocol", file: "images/hypokalemia.png" }
    ],
    orderSet: {
      title: "Hypokalemia / Hypomagnesemia Observation Order Set",
      diagnosis: "Hypokalemia / Hypomagnesemia",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated"] },
        { label: "Diet", items: ["NPO", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Medications", subheading: "Electrolytes", items: ["Potassium Chloride 40 mEq IV", "Potassium Chloride 20 mEq PO"] },
        { label: "Labs", items: ["CBC w/ Auto Diff", "BMP", "Magnesium level", "EKG"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Cardiac Monitoring"] }
      ]
    }
  },
  {
    id: "peritonsillar-abscess",
    name: "Peritonsillar Abscess",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Peritonsillar abscess confirmed on imaging or visual inspection",
        "No airway compromise or systemic signs of infection",
        "ENT clinician consulted prior to CDU placement"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Airway compromise or stridor; signs of deep neck space infection (Ludwig's, retropharyngeal abscess, epiglottitis)",
        "Inability to tolerate secretions; immunocompromised state"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "IV antibiotics: Unasyn or Clindamycin; pain control; ENT consult",
        "Imaging if concern for deep abscess (CT soft-tissue neck)"
      ]},
      { heading: "Discharge Parameters", items: [
        "Pain controlled; able to take oral medications and tolerate PO; afebrile, stable vitals",
        "ENT recommends discharge if abscess not lanced"
      ]},
      { heading: "Admission Parameters", items: [
        "Facial cellulitis extending to neck; drooling, stridor, or trismus despite ENT interventions",
        "Sepsis signs or failure of outpatient treatment"
      ]}
    ],
    algorithms: [
      { title: "Peritonsillar Abscess Protocol", file: "images/peritonsillar-abscess.png" }
    ],
    orderSet: {
      title: "Peritonsillar Abscess Observation Order Set",
      diagnosis: "Peritonsillar Abscess",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      codeStatus: "Full Code",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clears", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr IV STAT", "Lactated Ringers 1000 mL @ 75 mL/hr IV STAT", "0.9NS 1000 mL BOLUS"] },
        { label: "Medications", subheading: "Antiemetic", items: ["Ondansetron (Zofran) 4 mg IV Push q6h PRN nausea/vomiting"] },
        { label: "Medications", subheading: "Analgesics", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe pain 7–10)"
        ]},
        { label: "Medications", subheading: "Antibiotics", items: [
          "Ampicillin/Sulbactam (Unasyn) 3 g IV q6h",
          "Clindamycin 600 mg IV q8h (PCN allergy)"
        ]},
        { label: "Labs", items: ["CBC w/ Diff", "BMP", "PT/PTT/INR", "Type and Screen"] },
        { label: "Imaging", items: ["CT Maxillofacial w/ contrast (if not done in ED)"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring"] },
        { label: "Consults", items: ["Physician to Physician Consult: ENT"] }
      ]
    }
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "History, exam, and CXR consistent with acute pneumonia; PSI/PORT score class <3",
        "O2 saturation >92% on room air at time of CDU admission",
        "Able to return to previous living environment when discharged (outpatient support present)",
        "Initial dose of antibiotics given in the ED"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Persistently abnormal vitals after ED treatment: O2 sat <92% on RA, HR >120–130, SBP <100, RR >26–30, T <96°F or >104°F",
        "Significantly abnormal ABG (pCO2 >45, pH <7.35); potential respiratory failure; multi-lobar pneumonia",
        "Immunocompromised patients: AIDS, PCP pneumonia, chemotherapy, chronic steroids, active cancer, sickle cell disease, asplenic",
        "High-risk patients: nursing home, cirrhosis, ESRD, altered mental status, nosocomial/aspiration risk",
        "High suspicion of DVT/PE, SARS, H1N1, or TB"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Antibiotics per hospital guidelines (CAP: Azithromycin or Doxycycline; CAP with comorbidities: levofloxacin, ceftriaxone + azithromycin, or moxifloxacin)",
        "Supplemental oxygen and bronchodilators as needed; steroids as indicated; analgesics for pain or cough",
        "Serial VS; cardiac and O2 saturation monitoring; assistance with ADLs; incentive spirometry"
      ]},
      { heading: "Discharge Parameters", items: [
        "Subjective and clinical improvement; acceptable VS during observation; patient able to tolerate oral medications and diet"
      ]},
      { heading: "Admission Parameters", items: [
        "Patient not subjectively improved enough for discharge; lack of clinical progress or deterioration; CDU physician discretion"
      ]}
    ],
    algorithms: [
      { title: "Pneumonia Protocol", file: "images/pneumonia.png" }
    ],
    orderSet: {
      title: "Pneumonia Observation Order Set",
      diagnosis: "Pneumonia",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Infectious Disease (as indicated)"] },
        { label: "Medications", subheading: "Antibiotics (select one regimen)", items: [
          "Ceftriaxone (Rocephin) 1 g IV q24h WITH Azithromycin 500 mg PO q24h x 1 dose",
          "Moxifloxacin (Avelox) 400 mg IV q24h x 1 dose"
        ]},
        { label: "Medications", subheading: "Analgesics (select one)", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe pain 7–10)"
        ]},
        { label: "Imaging", items: ["Chest X-Ray 1 view portable"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Continuous Monitoring", "Incentive Spirometry"] }
      ]
    }
  },
  {
    id: "seizure",
    name: "Seizure",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Past history of seizures with breakthrough seizure or subtherapeutic anticonvulsant level",
        "No seizure in last 2 hours; vital signs normal; no new neurological deficits",
        "New-onset seizures with normal neuro exam, normal head CT, and Neurology agreement"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Ongoing seizures, post-ictal state, or status epilepticus",
        "Persistent focal neurological findings (Todd's paralysis)",
        "Clinical suspicion of meningitis, new stroke, or delirium of any etiology including alcohol withdrawal/DTs",
        "Seizures due to toxic exposure (CO, theophylline) or hypoxemia; pregnancy beyond first trimester/eclampsia",
        "New findings on head CT; new EKG changes or significant arrhythmias"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Appropriate anticonvulsant therapy guided by Neurology consult; seizure precautions",
        "Serial neuro checks and VS Q2–4 hr; cardiac and oximetry monitoring; EEG as indicated",
        "MRI Brain with and without contrast; toxicological testing PRN; NPO or liquid diet as indicated"
      ]},
      { heading: "Discharge Parameters", items: [
        "No deterioration in clinical status; therapeutic anticonvulsant levels (if indicated)",
        "Correction of abnormal labs; appropriate home environment; Neurology agrees with discharge"
      ]},
      { heading: "Admission Parameters", items: [
        "Deterioration of clinical status, mentation, or neuro exam; recurrent seizures or status epilepticus",
        "Rule-in for exclusionary causes; not sufficiently alert for discharge after 16–18 hours"
      ]}
    ],
    algorithms: [
      { title: "Seizure Protocol", file: "images/seizure.png" }
    ],
    orderSet: {
      title: "Seizure Observation Order Set",
      diagnosis: "Seizure",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      codeStatus: "Full Code",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Neurology", "PT/OT (as indicated)"] },
        { label: "Medications", subheading: "Seizure Rescue", items: [
          "Midazolam (Versed) 5 mg IM PRN seizures",
          "Midazolam (Versed) 2 mg IV PRN seizures",
          "Levetiracetam (Keppra) 1500 mg IV once"
        ]},
        { label: "Labs", items: ["EKG x 1", "Serum Toxicology Screen", "Urine Drugs of Abuse", "BMP q6h", "POC Glucose q4h", "Magnesium level", "Phosphorous level"] },
        { label: "Imaging", subheading: "EEG / Imaging", items: ["Continuous EEG (as indicated)", "1-hour EEG", "MRI Brain"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Cardiac Monitoring", "Neurological checks q4h"] }
      ]
    }
  },
  {
    id: "syncope",
    name: "Syncope",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Intermediate-risk syncope patient; minimum ED interventions: ECG, monitor, stool guaiac, orthostatic VS, IV, labs",
        "No acute dyspnea or history of CHF; no acute ECG changes or new bundle branch block",
        "Vital signs normal; no new neurologic deficits; Canadian Syncope Score ≤3"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Unstable VS: HR <50 or >100, SBP <100 or >200, SpO2 <94%, RR >24",
        "ECG: BB blocks (LBBB; RBBB+LAFB/LPFB esp. with 1st degree HB); QTc >500 ms; new ST/T changes",
        "Significant cardiac arrhythmias; serious cause suspected (ACS, PE, GI bleed, sepsis, AAA, IC bleed)",
        "Significant injury (subdural hematoma); new CT findings or elevated high-sensitivity troponin; unsafe home environment"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Serial VS, cardiac monitoring; postural BP; serial high-sensitivity troponin at 0, 3, and 6 hours",
        "IV hydration and diet; selective workup based on clinical suspicion:",
        "Cardiac: 2D echo, stress imaging, tilt testing, holter/Zio patch, EP/Cardiology consult",
        "PE: D-dimer, CTA chest, venous Doppler",
        "Neuro: serial neuro checks, HCT, Neurology consult, possible EEG"
      ]},
      { heading: "Discharge Parameters", items: [
        "Benign CDU course; stable VS; no arrhythmia on monitor history; acceptable home environment",
        "Ambulating; able to perform ADLs; follow-up with holter/event monitor as needed"
      ]},
      { heading: "Admission Parameters", items: [
        "Deterioration of clinical course; significant testing abnormalities; unsafe home environment; unable to perform ADLs"
      ]}
    ],
    algorithms: [
      { title: "Syncope Protocol", file: "images/syncope.png" }
    ],
    orderSet: {
      title: "Syncope Observation Order Set",
      diagnosis: "Syncope",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["Cardiac Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Cardiology", "PT/OT as indicated"] },
        { label: "Medications", items: [
          "Aspirin 81 mg — chew 3 tabs PO now (unless given in ED)",
          "Acetaminophen (Tylenol) 650 mg PO q4h x 3 doses PRN pain"
        ]},
        { label: "Labs", items: ["EKG q4h x 3 (or PRN for chest pain)", "Troponin q4h x 2"] },
        { label: "Imaging", items: ["2D Echocardiography (as indicated)", "Holter Monitor"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Continuous Monitoring", "Telemetry Monitoring", "Neurological checks q2h"] }
      ]
    }
  },
  {
    id: "tia-stroke",
    name: "Transient Ischemic Attack (TIA) / Rule-Out Stroke",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Transient ischemic attack — resolved acute deficit, not crescendo TIAs",
        "Sub-acute stroke (onset >72 hr; NIHSS <4; seen by Neurology in ED)",
        "No acute stroke on Head CT and CTA (unless prompt MRI planned, normal exam, not high risk for bleed)",
        "Workup can be completed within ~18 hours"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Head CT positive for bleed, mass, or acute infarction; TPA started in ED",
        "Known extra-cranial embolic source: decompensated cardiomyopathy, artificial heart valve, endocarditis, mural thrombus, recent MI",
        "Known carotid stenosis >50%; any persistent acute (<72 hr) neurological deficit or crescendo TIAs",
        "Non-focal symptoms: confusion, seizure, transient global amnesia; hypertensive encephalopathy",
        "Unable to ambulate independently or pass ED dysphagia screen; pregnancy; poor home support"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Neuro checks Q2 hr; Neurology consult (done in ED) to detect occult stroke",
        "Fasting lipid panel, HgA1c; carotid imaging with MRI/MRA (or CTA/Doppler if MRI contraindicated)",
        "2D echocardiography as indicated; cardiac monitoring ≥12 hours for paroxysmal AF",
        "Antiplatelet therapy: Aspirin; if on ASA then Plavix or Aggrenox; stroke-prevention education",
        "Rehab evaluation and outpatient treatment planning for subacute strokes"
      ]},
      { heading: "Discharge Parameters", items: [
        "No recurrent deficits; negative workup; MRI negative; Stroke service sign-off; stable for discharge on ASA 81 mg/day"
      ]},
      { heading: "Admission Parameters", items: [
        "Recurrent symptoms/deficit; evidence of treatable vascular disease (>50% stenosis) or embolic source requiring anticoagulation",
        "Paroxysmal AF; unable to complete workup or safely discharge within timeframe; CDU physician judgment"
      ]}
    ],
    algorithms: [
      { title: "Stroke Rule Out / TIA Protocol", file: "images/tia-stroke.png" }
    ],
    orderSet: {
      title: "Transient Ischemic Attack — Observation Order Set",
      diagnosis: "Rule Out Stroke / Transient Ischemic Attack",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr", "0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Consults", items: ["Neurology (Stroke Service)", "Speech Pathology", "PT/OT as indicated"] },
        { label: "Medications", subheading: "Antiemetics", items: [
          "Ondansetron (Zofran) 4 mg IV/PO q6h PRN nausea/vomiting",
          "Metoclopramide (Reglan) 5–10 mg IV/PO q6h PRN nausea/vomiting"
        ]},
        { label: "Labs", items: ["Lipid Panel", "Hemoglobin A1c"] },
        { label: "Imaging", items: ["MRI Brain w/o — Code Stroke", "2D Transthoracic Echocardiogram"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Continuous Monitoring", "Neurological checks Q2hr x 2, then Q4hr", "Yale Bedside Swallow Study"] }
      ]
    },
    orderSetAlt: {
      title: "Rule Out Stroke — Observation Order Set (Low NIH, Pending MRI)",
      diagnosis: "Rule Out Stroke (Low NIH, Pending MRI)",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      codeStatus: "Full Code",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 75 mL/hr IV STAT", "Lactated Ringers 1000 mL @ 75 mL/hr IV STAT"] },
        { label: "Medications", subheading: "Antiemetics", items: [
          "Ondansetron (Zofran) 4 mg PO q6h PRN nausea/vomiting",
          "Ondansetron (Zofran) 4 mg IV Push q6h PRN nausea/vomiting",
          "Metoclopramide (Reglan) 5–10 mg PO or IV q6h PRN nausea/vomiting"
        ]},
        { label: "Labs", items: ["Lipid Panel", "Hemoglobin A1c"] },
        { label: "Imaging", items: ["MRI Brain w/o — Code Stroke"] },
        { label: "Nursing Orders", items: ["Saline Lock Insert", "VS Q4hr", "Cardiac Monitoring", "Neurological checks Q2hr x 6 hours, then Q4hr"] },
        { label: "Consults", items: ["Physician to Physician Consult: Neurology — Stroke Service", "Consult to Speech Pathology", "Consult to PT", "Consult to OT"] }
      ]
    }
  },
  {
    id: "uti-pyelonephritis",
    name: "Urinary Tract Infection / Pyelonephritis",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Acceptable VS and normal mentation; clinical evidence of pyelonephritis (flank pain, urgency, frequency, dysuria)",
        "UA evidence of pyelonephritis (significant pyuria, nitrates, and/or leukocyte esterase); urine cultures obtained",
        "Not suitable for discharge from the ED; initial dose of antibiotics given in ED"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Pregnant females; male patients with complicated UTI",
        "Abnormal VS after ED treatment (SBP <90, HR >130, T <96°F or >104°F); mental status changes; sepsis",
        "Significant comorbidities: renal failure, sickle cell disease; immunosuppressed patients (HIV, transplant, high-dose steroids, asplenic)",
        "Urinary tract anatomic abnormality (solitary kidney, reflux, indwelling device); urethral or ureteral obstruction",
        "Poor candidate for outpatient treatment (poor home support)"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "IV hydration, antiemetics, antipyretics; advance to oral antibiotics as tolerated",
        "IV antibiotics: Ceftriaxone 1–2g IV Q24 hr or Ciprofloxacin 400 mg IV Q12 hr",
        "Imaging as needed (CT or ultrasound); PCP follow-up within 72 hours for culture results"
      ]},
      { heading: "Discharge Parameters", items: [
        "Resolution or improvement of systemic symptoms; ability to take PO medications; stable VS"
      ]},
      { heading: "Admission Parameters", items: [
        "Clinical deterioration or lack of adequate improvement; inability to tolerate oral meds or hydration",
        "Unstable VS or evidence of septic shock; abnormal imaging (ureteral obstruction, emphysematous pyelonephritis)"
      ]}
    ],
    algorithms: [
      { title: "UTI / Pyelonephritis Protocol", file: "images/uti-pyelonephritis.png" }
    ],
    orderSet: {
      title: "Urinary Tract Infection / Pyelonephritis Order Set",
      diagnosis: "Urinary Tract Infection / Pyelonephritis",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL Bolus", "Lactated Ringers @ 75 mL/hr"] },
        { label: "Medications", subheading: "Antibiotics (select one)", items: [
          "Ceftriaxone (Rocephin) 1 g IV q24h x 1 dose",
          "Ciprofloxacin 400 mg IV q12h x 1 dose"
        ]},
        { label: "Medications", subheading: "Antiemetic", items: ["Ondansetron (Zofran) 4 mg IV q4h PRN nausea x 3 doses"] },
        { label: "Medications", subheading: "Analgesics (select one)", items: [
          "Oxycodone/Acetaminophen (Percocet) 5/325 1–2 tabs PO q4h PRN pain x 3 doses",
          "Morphine 4 mg IV q4h PRN pain x 3 doses",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN pain x 3 doses"
        ]},
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Continuous Monitoring"] }
      ]
    }
  },
  {
    id: "vaginal-bleeding",
    name: "Vaginal Bleeding",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Heavy dysfunctional uterine bleeding; progestin ordered in ED",
        "Bleeding in early pregnancy (quant HCG <6000) with ultrasound showing no intrauterine or ectopic pregnancy",
        "Threatened abortion with ongoing bleeding; first-trimester missed or inevitable spontaneous abortion (OB-GYN input REQUIRED)",
        "CBC results available; blood bank tube sent"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Unresolved hemodynamic compromise in ED (HR >110, SBP <90, HR rise >30 on standing)",
        "Hematocrit <20; EGA >12 weeks; coagulopathy (prolonged PT/PTT, thrombocytopenia)"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Serial VS and bleeding intensity checks (pad count); IV saline infusion",
        "RhoGam for pregnant Rh-negative patients; repeat hematocrit; blood transfusion if Hgb <7"
      ]},
      { heading: "Discharge Parameters", items: [
        "Bleeding decreased; VS stable; repeat hematocrit acceptable",
        "Uterine evacuation performed if indicated (patient recovered from procedure)",
        "Follow-up to OB for 1st-trimester patients; follow-up to GYN for endometrial biopsy if indicated"
      ]},
      { heading: "Admission Parameters", items: [
        "Inpatient procedure required; VS unstable; bleeding intensity does not slow or increases"
      ]}
    ],
    orderSet: null,
    orderSetNote: "No Order Set was present for this protocol in the source document."
  },
  {
    id: "vte",
    name: "Venous Thromboembolism (VTE)",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "PE confirmed by radiology with PESI score <65 or <90 (class I–II)",
        "DVT: femoral/popliteal DVT with need for pain control; upper extremity DVT needing PICC replacement",
        "Hemodynamically stable; adequate home and outpatient support for safe discharge on anticoagulants",
        "Labs: normal PT, PTT, CBC, platelet count, and Cr"
      ]},
      { heading: "Exclusion Criteria", items: [
        "Abnormal VS: HR >110, SBP <100, SpO2 <90% with ambulation; currently on therapeutic anticoagulation",
        "Pregnancy; ESRD on HD; cancer on active chemo/radiation/palliation; CrCl <30 mL/min; BMI >40",
        "Contraindications to anticoagulation (coagulopathy, recent neuro/ophthalmologic surgery, recent intracranial hemorrhage)",
        "PE exclusions: RV strain on CT/echo, elevated troponin or BNP, ischemic EKG changes, extensive or saddle PE",
        "DVT exclusions: phlegmasia, iliac or common femoral DVT, upper extremity DVT due to pacer or vascular device not replaceable in 24 hr"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "VS and cardiac monitor ≥12 hours for bleeding or thromboembolic complications; pain control (avoid NSAIDs)",
        "Echo/venous Dopplers as needed; pharmacy consult for medication selection and 30-day supply",
        "Initiate DOAC (apixaban, rivaroxaban) or LMWH; VTE/anticoagulant education; schedule outpatient follow-up"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS; uncomplicated CDU course; able to ambulate without significant pain; can obtain 30-day anticoagulant",
        "Patient and caregiver understand diagnosis and return precautions for anticoagulant therapy"
      ]},
      { heading: "Admission Parameters", items: [
        "Bleeding or thromboembolic complications; failure of the above discharge parameters; PE attending consult if high-risk features occur"
      ]}
    ],
    algorithms: [
      { title: "Venous Thromboembolism (VTE) Protocol", file: "images/vte.png" }
    ],
    orderSet: {
      title: "Venous Thromboembolism Observation Order Set",
      diagnosis: "Venous Thromboembolism (DVT / PE)",
      admitTo: "Norton Hospital Emergency Department Observation Unit",
      fields: [
        { label: "Activity", items: ["Up as Tolerated", "Bed Rest"] },
        { label: "Diet", items: ["NPO", "Clear Liquids advancing to Regular Diet", "Regular Diet"] },
        { label: "IVF", items: ["0.9NS 1000 mL @ 20 mL/hr", "Lactated Ringers — rate as ordered"] },
        { label: "Medications", subheading: "Analgesics (select one — avoid NSAIDs)", items: [
          "Acetaminophen 650 mg PO q4h PRN (Mild Pain 1–3)",
          "Hydrocodone/Acetaminophen (Norco) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Oxycodone/Acetaminophen (Percocet) 5/325 1 tab PO q4h PRN (Moderate Pain 4–6)",
          "Morphine 2 mg IV q4h PRN (Severe pain 7–10)",
          "Hydromorphone (Dilaudid) 1 mg IV q4h PRN (Severe pain 7–10)"
        ]},
        { label: "Medications", subheading: "Anticoagulation (select one — Pharmacy to verify dosing)", items: [
          "Apixaban (Eliquis) 10 mg PO BID x 7 days, then 5 mg BID",
          "Rivaroxaban (Xarelto) per Pharmacy dosing per indication",
          "Enoxaparin (Lovenox) 1 mg/kg SQ q12h"
        ]},
        { label: "Labs", items: ["CBC", "BMP", "PT/PTT/INR", "EKG PRN chest pain", "Troponin PRN chest pain: q2h x 2, then q4h x 2"] },
        { label: "Nursing Orders", items: ["Saline Lock", "VS Q4hr", "Continuous Monitoring"] }
      ]
    }
  },
  {
    id: "vertigo",
    name: "Vertigo",
    criteria: [
      { heading: "Inclusion Criteria", items: [
        "Likely peripheral vertigo; acceptable VS",
        "Normal cerebellar exam (heel-shin or finger-nose testing); normal cranial nerve exam (corneal reflex, EOM intact)"
      ]},
      { heading: "Exclusion Criteria", items: [
        "If suspected TIA: use TIA guideline",
        "Acute hearing loss, double vision, or neuro deficits",
        "Severe headache or head trauma associated with vertigo; fever (Temp ≥38°C oral)",
        "Significant VS abnormalities; high clinical suspicion of central vertigo or stroke"
      ]},
      { heading: "Potential CDU Interventions", items: [
        "Benzodiazepines; anticholinergics (Antivert, Benadryl); antiemetics (Phenergan, Compazine)",
        "Appropriate IV hydration; further testing when indicated (blood work, head CT, Brain MRI)",
        "Consultation as indicated; advance diet and ambulate as tolerated"
      ]},
      { heading: "Discharge Parameters", items: [
        "Acceptable VS; able to ambulate and care for self at home; able to take PO medications"
      ]},
      { heading: "Admission Parameters", items: [
        "Unacceptable VS or clinical condition (e.g., stroke); significant lab or X-ray abnormalities",
        "Unable to take PO meds or care for self; unable to ambulate as well as before vertigo"
      ]}
    ],
    orderSet: null,
    orderSetNote: "No Order Set was present for this protocol in the source document."
  }
];

const ABSOLUTE_EXCLUSIONS = [
  { label: "Unstable Vital Signs", detail: "HR <40 or >130 bpm | RR <10 or >26 bpm | SBP <90 or >230 mmHg | DBP >120 mmHg | SpO2 <90% (COPD: <88%) | Temp <96°F or >104°F" },
  { label: "High Intensity of Service", detail: "Vasopressors, LVAD devices, continuous vasoactive drips" },
  { label: "Inpatient Admission Needed", detail: "If ED physician identifies clear need for traditional inpatient admission" },
  { label: "Complicated Disposition", detail: "Expected disposition complexity precludes CDU management" },
  { label: "Age", detail: "< 15 years of age" },
  { label: "Pregnancy", detail: "Gravid patients > 20 weeks (except cleared by OB for non-obstetric conditions)" },
  { label: "Anticipated LOS", detail: "Expected LOS < 4–8 hours OR > 24 hours" },
  { label: "Special Patient Conditions", detail: "Acute altered mental status (GCS <13 in CHI) | Transplant patients | High-risk chest pain | Sub-massive/Massive PE | MIW/Involuntary psychiatric hold | Failure to thrive | Suicidal and homicidal patients" }
];
