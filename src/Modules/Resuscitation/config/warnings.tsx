import React from 'react';
import BulletList from 'UIToolkit/BulletList';
import {Text, View, StyleSheet} from 'react-native';
import { blackColor } from 'UIToolkit/theme/colors';

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600',
    color: blackColor
  },
  text: {
    color: blackColor,
    marginBottom: 6,
    fontWeight: '400'
  }
})

export const DRUG_WARNINGS = [
  {
    Drug: "Acetaminophen (Tylenol)",
    USBlackBox: "Acetaminophen has been associated with acute liver failure, at times resulting in liver transplant and death usually associated with excessive intake. Do not exceed the maximum recommended doses.",
    Contraindications: (
      <BulletList
        items={[{ text:"Severe hepatic disease or impairment"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in: </Text>
        <BulletList
          items={[{ text:"Liver impairment"}, { text:"G6PD deficiency"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Rare: Anaphylaxis, acute generalized exanthematous pustulosis (AGEP), Stevens-Johnson syndrome (SJS), and toxic epidermal necrolysis (TEN)"
  },
  {
    Drug: "Adenosine (Adenocard)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{ text:">Known or suspected asthma"}, {text: "Second- or third-degree AV block"}, {text: "Sick sinus syndrome"}, {text: "Symptomatic bradycardia (unless functioning artificial pacemaker)"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Avoid use in: </Text>
        <BulletList
          items={[{text: "Irregular or polymorphic wide-complex tachycardias"}, {text: "WPW syndrome and preexcited atrial fibrillation/flutter"}]}
        />
        <Text style={styles.text}>Use with extreme caution in:</Text>
        <BulletList
          items={[{text: "Heart transplant recipients: may cause prolonged asystole; reduction of initial adenosine dose is recommended; considered by some to be contraindicated in this setting"}, {text: "May need to reduce dose if patient taking drugs that enhance adenosine effects (e.g., carBAMazepine, dipyridamole)"}]}
        />
      </View>
    ),
    ISMPHighAlert: "This drug has a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "AV block, cardiac arrhythmias, CVA, chest pain/pressure, dyspnea, hyperventilation, hypersensitivity reaction, hypotension. \n\nRare: A-Fib, blurred vision, bradycardia, bronchospasm, cardiac arrest, increased ICP, myocardial infarction, respiratory arrest, torsades de pointes"
  },
  {
    Drug: "Albumin 5%",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Heart failure"}, {text: "Patients at risk of volume overload (e.g., heart failure, renal insufficiency, severe anemia, or stabilized chronic anemia)"}, {text: "Severe anemia"}, {text: "Dilution: 25% albumin should only be diluted with NS or D5W (hemolysis or acute renal failure risk with sterile water use)"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in: </Text>
        <BulletList
          items={[{text: "Conditions where hypervolemia may increase risk of adverse effects (e.g., esophageal varices, heart failure, hemorrhagic diathesis, hypertension, pulmonary edema)"}, {text: "Hepatic or renal impairment"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Rapid infusion may cause vascular overload. Severe allergy/anaphylaxis, bronchospasm, cardiac or respiratory failure, coagulation abnormalities, edema, electrolyte imbalances, fever, hyper/hypotension, increased ICP, pulmonary edema, renal failure, tachycardia"
  },
  {
    Drug: "Albuterol",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in: </Text>
        <BulletList
          items={[{text: "Cardiovascular disease"}, {text: "Diabetes mellitus"}, {text: "Glaucoma"}, {text: "Seizure disorders"}, {text: "Beta-agonists may produce ECG changes (flattening of T wave, QTc prolongation, ST segment depression), hypertension, and increased heart rate or other arrhythmias"}, {text: "May result in CNS stimulation/excitation"}, {text: "Rare: Immediate hypersensitivity/anaphylaxis"}, {text: "Rare: Paradoxical bronchospasm"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "CNS stimulation more common in peds, anxiety, ataxia, oropharyngeal edema, rigors, vertigo, wheezing. \n\nRare: Anaphylaxis, A-Fib, exacerbation of diabetes mellitus, hyperglycemia, hypokalemia, hypotension, ketoacidosis, lactic acidosis, paradoxical bronchospasm, peripheral vasodilation, SVT"
  },
  {
    Drug: "Amiodarone",
    USBlackBox: (
      <BulletList
        items={[{text: "Only indicated for life-threatening arrhythmias after attempting alternative therapies. Amiodarone can exacerbate arrhythmias; initiate therapy in a clinical setting where continuous ECGs and cardiac resuscitation are available."}, {text: "Hepatotoxicity (may be fatal) can occur."}, {text: "Risk of pulmonary toxicity has been reported (including fatalities)."}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Cardiogenic shock"}, {text: "Hypersensitivity to iodine"}, {text: "Sick sinus syndrome, second- or third-degree AV block, bradycardia leading to syncope without a functioning pacemaker"}, {text: "WPW syndrome and preexcited atrial fibrillation/flutter since V-Fib may result "}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>May be a vesicant; Avoid extravasation </Text>
        <BulletList
          items={[{text: "Do not give with other drugs that prolong QT interval"}, {text: "Numerous significant drug-drug interactions; consult drug interaction references; amiodarone is a potent inhibitor of CYP enzymes and transport proteins"}, {text: "Bradycardia/hypotension: May cause hypotension and bradycardia (infusion-rate related)."}, {text: "Cardiac devices: Chronic use of antiarrhythmics may affect defibrillation or pacing thresholds. Assess when initiating amiodarone and during therapy."}, {text: "Dermatologic toxicity: May cause life-threatening or fatal cutaneous reactions, including Stevens-Johnson syndrome and toxic epidermal necrolysis (TEN). Immediately discontinue if symptoms or signs occur."}, {text: "Electrolytes: correct electrolyte disturbances (hypokalemia, hypomagnesemia, hypocalcemia) prior to use and during therapy"}, {text: "Metabolism: Amiodarone has a very long half-life; risk of continued interactions and adverse reactions"}]}
        />
      </View>
    ),
    ISMPHighAlert: "This drug has a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Acute respiratory distress syndrome, A-Fib, anaphylaxis, angioedema, asystole, AV block, bradycardia, cardiac arrhythmia, cardiogenic shock, CHF, edema, flushing, hyper/hypothryoidism, hypotension (fatal, in rare cases), increased ICP, nodal arrhythmia, optic neuritis, optic neuropathy, peripheral neuropathy (rare), photosensitivity, pneumonitis, prolonged Q-T, pulmonary edema, sinus node dysfunction, torsades de pointes, V-Fib/Tach  "
  },
  {
    Drug: "Ampicillin",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Hypersensitivity (e.g., anaphylaxis) to other penicillins"}, {text: "Infections caused by penicillinase-producing organisms"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in renal impairment</Text>
        <BulletList
          items={[{text: "Infectious mononucleosis: use not recommended "}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Anaphylaxis, enterocolitis, fever, glossalgia, glossitis, melanoglossia, pseudomembranous colitis, seizure, skin rash, stomatitis, stridor, urticaria, vomiting"
  },
  {
    Drug: "Ampicillin-Sulbactam (Unasyn)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Hypersensitivity (to other beta-lactam antibacterial drugs (e.g., penicillins, cephalosporins)"}, {text: "History of cholestatic jaundice or hepatic dysfunction associated with ampicillin/sulbactam"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Hepatic and renal impairment"}, {text: "Hepatotoxicity and cholestatic jaundice have been reported (including fatalities). Toxicity is usually reversible."}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Abdominal pain/nausea/vomiting, acute generalized exanthematous pustulosis, anaphylaxis, angioedema, chest pain, chills, constriction of pharynx, convulsions, dizziness, drowsiness, facial swelling, injection site reaction, pruritus, sedation, urticaria"
  },
  {
    Drug: "Atropine Sulfate",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Children may be more sensitive to anticholinergic effects of atropine"}, {text: "Avoid relying on atropine for effective treatment of type II second-degree or third-degree AV block"}, {text: "Asystole or bradycardic PEA: routine use not recommended."}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Autonomic neuropathy"}, {text: "Cardiac disease"}, {text: "Cardiovascular disease: blood pressure increases and tachycardia may lead to ischemia, precipitate MI, or increase arrhythmogenic potential"}, {text: "Children with spastic paralysis"}, {text: "Chronic lung disease"}, {text: "Diarrhea"}, {text: "GI infections "}, {text: "Glaucoma"}, {text: "Heart transplant recipients: May be ineffective for bradycardia due to lack of vagal innervation of transplanted heart"}, {text: "Hepatic or renal impairment"}, {text: "Hyperthermia"}, {text: "Myasthenia gravis: may precipitate a myasthenic crisis"}, {text: "Partial obstructive uropathy "}, {text: "Ulcerative colitis "}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Abnormal eye movements (cyclophoria and heterophoria), anaphylaxis, angle-closure glaucoma (acute), arrhythmias, asystole, bradypnea, changes in respiration (labored respiration), cyanosis, dehydration, dyspnea, hyperpyrexia, hypersensitivity reaction, hypo/hypertension, hypokalemia, hyponatremia, laryngospasm, mydriasis, psychosis, pulmonary edema, respiratory failure, salivation, seizure (generally tonic-clonic), strabismus, stridor (inspiratory), tachypnea, urinary retention, vomiting, xerostomia"
  },
  {
    Drug: "Bicarbonate",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Alkalosis "}, {text: "Hypernatremia"}, {text: "Hypocalcemia"}, {text: "Severe pulmonary edema "}, {text: "Unknown abdominal pain"}]}
      />
    ),
    SpecialPrecautions: (
      <BulletList
        items={[{text: "Vesicant (at concentrations ≥8.4%); Avoid extravasation "}, {text: "Rapid administration in neonates, infants, and children <2 years of age has led to hypernatremia, decreased CSF pressure, and intracranial hemorrhage"}]}
      />
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Acidosis (intracranial), cerebral hemorrhage, CHF exacerbation, hypocalcemia, hypokalemia, hypernatremia, metabolic alkalosis, pulmonary edema, tetany, tissue necrosis following extravasation"
  },
  {
    Drug: "Calcium Chloride",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Neonates: Concomitant use of IV calcium chloride with ceftriaxone in neonates (≤ 28 days of age)"}, {text: "Known or suspected digoxin toxicity "}, {text: "Not recommended as routine treatment in asystole, V-Fib, pulseless V-Tach, or PEA"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Vesicant; Avoid extravasation. Do not use scalp or small hand/foot veins"}, {text: "Central line preferred "}, {text: "Extravasation can result in severe necrosis and tissue sloughing"}, {text: "Do not infuse in same line as phosphate-containing solutions "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Digitalized patients: hypercalcemia may precipitate cardiac arrhythmias"}, {text: "Renal impairment"}, {text: "Respiratory acidosis"}, {text: "Respiratory failure"}, {text: "Severe hypokalemia: may cause life-threatening cardiac arrhythmias"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Arrhythmia, bradycardia, cardiac arrest, cutaneous calcification, hypercalcemia, hypotension, syncope, tissue necrosis following extravasation, vasodilatation"
  },
  {
    Drug: "Calcium Gluconate",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Hypercalcemia "}, {text: "Concomitant use of IV calcium gluconate with ceftriaxone in neonates (≤28 days of age)"}, {text: "Concurrent digoxin use"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Vesicant; Avoid extravasation. Do not use scalp or small hand/foot veins"}, {text: "Central line preferred "}, {text: "Extravasation can result in severe necrosis and tissue sloughing "}, {text: "Do not infuse in same line as phosphate-containing solutions "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Renal impairment"}, {text: "Respiratory acidosis "}, {text: "Respiratory failure"}, {text: "Severe hypokalemia: may cause life-threatening cardiac arrhythmias"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Arrhythmia, bradycardia, cardiac arrest, hypotension, syncope, vasodilation; tissue necrosis following extravasation"
  },
  {
    Drug: "Cefazolin",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Hypersensitivity to other cephalosporin antibiotics, penicillins, other beta-lactams"}]}
      />
    ),
    SpecialPrecautions: (
      <BulletList
        items={[{text: "Hypersensitivity reactions including anaphylaxis "}, {text: "Use caution with a history of penicillin allergy"}]}
      />
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Anaphylaxis, fever, localized phlebitis, pruritus, seizure, skin rash, Stevens-Johnson syndrome"
  },
  {
    Drug: "Ceftriaxone (Rocephin)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Hypersensitivity to other cephalosporins"}, {text: "Hyperbilirubinemic neonates, particularly with prematurity"}, {text: "Neonates: concomitant use with intravenous calcium-containing solutions/products"}, {text: "IV use of ceftriaxone solutions containing lidocaine"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Neonates: use extreme caution; risk of hyperbilirubinemia, particularly in premature infants (contraindicated in hyperbilirubinemic neonates and < 41 weeks PMA)"}, {text: "Parenteral: Do not coadminister with calcium-containing solutions (e.g. LR)"}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Gallbladder pseudolithiasis: abnormal gallbladder sonograms have been reported (possibly ceftriaxone-calcium precipitates); pediatric patients especially"}, {text: "GI disease: especially colitis"}, {text: "Concurrent renal / hepatic impairment"}]}
        />
        <Text style={styles.text}>Infusion rates vary:</Text>
        <BulletList
          items={[{text: "Neonates: Administer over 60 minutes to decrease risk of bilirubin encephalopathy"}, {text: "Infants, Children, and Adolescents: Administer over 30 minutes"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Acute generalized exanthematous pustulosis, allergic dermatitis, anaphylaxis, bronchospasm, edema, fever, flushing, gallbladder sludge, hypersensitivity pneumonitis, increased serum bilirubin, jaundice, kernicterus, seizure, skin rash"
  },
  {
    Drug: "Clindamycin",
    USBlackBox: (
      <BulletList
        items={[{text: "Can cause severe and possibly fatal colitis."}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Hypersensitivity to clindamycin, lincomycin"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Atopic patients reactions"}, {text: "History of GI disease, particularly colitis "}, {text: "Moderate to severe liver disease"}, {text: "Severe hypersensitivity"}, {text: "Severe skin reactions (eg, drug reaction with eosinophilia and systemic symptoms [DRESS], Stevens-Johnson syndrome [SJS], toxic epidermal necrolysis [TEN]), some fatal and anaphylactic reactions, including anaphylactic shock, have been reported"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Acute generalized exanthematous pustulosis, anaphylaxis with shock, angioedema, hypersensitivity reaction, hypotension, pruritus, rash, Stevens-Johnson syndrome (rare), thrombophlebitis, toxic epidermal necrolysis, urticaria "
  },
  {
    Drug: "Dexamethasone (Decadron)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Systemic fungal infections"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Acute MI "}, {text: "Adrenal insufficiency: NO mineralocorticoid activity"}, {text: "CHF and/or hypertension "}, {text: "Diabetes "}, {text: "Discontinuation of therapy: wean therapy "}, {text: "Epidural injection: not approved route "}, {text: "GI disease/surgery: perforation risk "}, {text: "Head injury "}, {text: "Hepatic impairment"}, {text: "Intra-articular injection: avoid unstable or infected joints "}, {text: "Myasthenia gravis "}, {text: "Ocular disease, ocular HSV "}, {text: "Renal impairment"}, {text: "Seizure disorders "}, {text: "Stress: may require higher doses "}, {text: "Thyroid disease "}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Anaphylaxis, angioedema, bradycardia, cardiac arrhythmia/ failure, circulatory shock, edema, fat embolism, hypersensitivity, hypertension, increased ICP, increased intraocular pressure, perineal burning, pulmonary edema, pruritus, syncope, tachycardia, thromboembolism"
  },
  {
    Drug: "Dextrose (Glucose)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Glucose-galactose malabsorption syndrome "}, {text: "Hypersensitivity to dextrose, corn or corn products"}, {text: "Hypertonic solutions in intracranial or intraspinal hemorrhage, hepatic or diabetic coma, or delirium tremens, especially if dehydrated "}, {text: "Severe dehydration; anuria"}]}
      />
    ),
    SpecialPrecautions: (
      <BulletList
        items={[{text: <Text style={styles.bold}>Vesicant (at concentrations {'>'} 10%); Avoid extravasation</Text>}, {text: "Bolus dosing for hypoglycemia only-D5W not for routine IVF therapy; may cause severe hyponatremia"}, {text: "Very low birth weight infants: Rapid administration may cause increased serum osmolality and possible intracerebral hemorrhage"}]}
      />
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (hypertonic solutions ≥20%) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Dehydration, hypersensitivity reaction (including anaphylaxis), hypokalemia, phlebitis, pulmonary edema, tissue necrosis following extravasation of hypertonic dextrose (>10%)"
  },
  {
    Drug: "Dextrose (Glucose) Pediatric",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Glucose-galactose malabsorption syndrome"}, {text: "Hypersensitivity to dextrose, corn or corn products"}, {text: "Hypertonic solutions in intracranial or intraspinal hemorrhage, hepatic or diabetic coma, or delirium tremens, especially if dehydrated "}, {text: "Severe dehydration; anuria"}]}
      />
    ),
    SpecialPrecautions: (
      <BulletList
        items={[{text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>}, {text: "Bolus dosing for hypoglycemia only-D5W not for routine IVF therapy; may cause severe hyponatremia"}, {text: "Very low birth weight infants: Rapid administration may cause increased serum osmolality and possible intracerebral hemorrhage"}]}
      />
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (hypertonic solutions ≥20%) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Dehydration, hypersensitivity reaction (including anaphylaxis), hypokalemia, phlebitis, pulmonary edema, tissue necrosis following extravasation of hypertonic dextrose (>10%)"
  },
  {
    Drug: "Diazepam (Valium)",
    USBlackBox: (
      <BulletList
        items={[{text: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death. Limit dosages and durations to minimum required. "}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Acute narrow-angle glaucoma "}, {text: "Myasthenia gravis "}, {text: "Severe respiratory impairment "}, {text: "Severe hepatic/renal impairment "}, {text: "Untreated open-angle glaucoma"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Vesicant; Avoid extravasation"}, {text: "Neonates/young infants may have increased toxicity risk due to decreased metabolism of diazepam and its metabolites"}, {text: "Paradoxical reactions may be increased in adolescent/pediatric patients "}]}
        />
        <Text style={styles.text}>Use with caution in: </Text>
        <BulletList
          items={[{text: "Depression / anxiety"}, {text: "Drug abuse"}, {text: "Renal impairment "}, {text: "Respiratory disease"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Agitation, anterograde amnesia, CNS depression, confusion, ECG changes, hypotension, vasodilation, venous thrombosis \n\nRare: bradycardia, circulatory shock, diaphoresis, hyperkinesia, mydriasis, nystagmus, pruritus, syncope, tonic clonic type status epilepticus, urticaria"
  },
  {
    Drug: "Diphenhydramine (Benadryl)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Neonates or premature infants"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Neonates and young children are highly sensitive to depressive effects "}, {text: "Antihistamines may cause excitation in young children "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Asthma "}, {text: "Cardiovascular disease: hypertension and ischemic heart disease "}, {text: "Increased intraocular pressure or angle-closure glaucoma "}, {text: "Prostatic hyperplasia/bladder neck obstruction/GU obstruction "}, {text: "Pyloroduodenal obstruction"}, {text: "Thyroid dysfunction "}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Anaphylactic shock, chest tightness, CNS depression, confusion, euphoria, extrasystoles, hypotension, palpitations, paresthesia, pharyngeal edema, seizure, tachycardia, thickening of bronchial secretions, tremor, wheezing"
  },
  {
    Drug: "Epinephrine",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "There are no absolute contraindications to the use of injectable epinephrine in a life-threatening situation"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "May precipitate angina pectoris or induce cardiac arrhythmias"}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Parkinson disease"}, {text: "Pheochromocytoma"}, {text: "Thyroid disease"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV, subcutaneous formulations) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Angina pectoris, cardiac arrhythmia, cerebral hemorrhage, chest pain, diaphoresis, gangrene at injection site, hyper/hypoglycemia, hypokalemia, hypertension, insulin resistance, ischemic heart disease, lactic acidosis, limb ischemia, myocardial infarction, pallor, palpitations, Parkinson disease exacerbation, peripheral vasoconstriction, psychomotor agitation, pulmonary edema, tachyarrhythmia, tachycardia, ventricular arrhythmia / V- fib"
  },
  {
    Drug: "Epinephrine, racemic",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "There are no absolute contraindications to the use of injectable epinephrine in a life-threatening situation"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "May precipitate angina pectoris or induce cardiac arrhythmias"}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Parkinson disease"}, {text: "Pheochromocytoma"}, {text: "Thyroid disease "}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV, subcutaneous formulations) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Angina pectoris, cardiac arrhythmia, cerebral hemorrhage, chest pain, diaphoresis, gangrene at injection site, hyper/hypoglycemia, hypokalemia, hypertension, insulin resistance, ischemic heart disease, lactic acidosis, limb ischemia, myocardial infarction, pallor, palpitations, Parkinson disease exacerbation, peripheral vasoconstriction, psychomotor agitation, pulmonary edema, tachyarrhythmia, tachycardia, ventricular arrhythmia / V- fib"
  },
  {
    Drug: "Etomidate For RSI",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Pediatric neurotoxicity: See disclaimer regarding risks of long term frequent exposures to anesthetics/sedatives "}, {text: "Adrenal supression: A single induction dose blocks stress-induced increase in adrenal cortisol production for 6 to 8 hours, up to 24 hours in elderly and debilitated patients. "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Myocardial dysfunction  "}, {text: "Renal impairment"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Adrenal suppression, apnea, bradycardia, cardiac arrhythmia, hyper/hypotension, hyper/ hypoventilation, laryngospasm, myoclonus, nystagmus, tachycardia, transient skeletal muscle movements"
  },
  {
    Drug: "Etomidate",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Pediatric neurotoxicity: See disclaimer regarding risks of long term frequent exposures to anesthetics/sedatives "}, {text: "Adrenal supression: A single induction dose blocks stress-induced increase in adrenal cortisol production for 6 to 8 hours, up to 24 hours in elderly and debilitated patients. "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Myocardial dysfunction  "}, {text: "Renal impairment"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Adrenal suppression, apnea, bradycardia, cardiac arrhythmia, hyper/hypotension, hyper/ hypoventilation, laryngospasm, myoclonus, nystagmus, tachycardia, transient skeletal muscle movements"
  },
  {
    Drug: "Fentanyl",
    USBlackBox: (
      <BulletList
        items={[{text: "Serious, life-threatening, or fatal respiratory depression may occur. "}, {text: "Concomitant use with all cytochrome P450 3A4 inhibitors may increase fentanyl plasma concentrations, which may cause potentially fatal respiratory depression."}, {text: "Concomitant use of opioids with benzodiazepines or other CNS depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death. Monitor closely during initiation or dose escalation "}]}
      />
    ),
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Adrenal insufficiency"}, {text: "Biliary tract impairment/ acute pancreatitis: constriction of sphincter of Oddi"}, {text: "Bradycardia "}, {text: "Cardiovascular disease "}, {text: "Concurrent use with antidepressant or migraine medications: risk of serotonin syndrome"}, {text: "Head trauma/elevated ICP"}, {text: "Hypovolemia/circulatory shock "}, {text: "Seizures "}, {text: "Thyroid dysfunction"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drug classes which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Agitation, apnea, asthma, cardiac arrhythmia, CNS depression, confusion, DVT, edema, hyper/hypotension (including orthostatic), hypertonia, hypoxia, mental status changes, MI, myalgia, pulmonary embolism (nasal spray), respiratory depression, sedation, tremor, vasodilation, wheezing \n\nRare: anaphylaxis, angina pectoris, bronchoconstriction, chest wall rigidity, clonus, cyanosis"
  },
  {
    Drug: "Fosphenytoin (Cerebyx)",
    USBlackBox: (
      <BulletList
        items={[{text: "The rate of fosphenytoin IV administration should not exceed 150 mg phenytoin equivalents (PE)/minute in adults and 2mg PE/kg/min up to 150mg PE/min in pediatrics. Severe hypotension and potentially fatal cardiac arrhthymias may occur. Careful cardiac (including respiratory) monitoring is necessary during and after administration of fosphenytoin IV; reduction in rate of administration or discontinuation of infusion may be necessary. Events have also been reported at or below the recommended infusion rate."}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Concurrent use with delavirdine "}, {text: "History of hepatotoxicity attributable to fosphenytoin or phenytoin "}, {text: "Second- and third-degree AV block, or Adams-Stokes syndrome "}, {text: "Sinoatrial block "}, {text: "Sinus bradycardia"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Hazardous agent (NIOSH 2016 [group 2]). Use appropriate precautions for receiving, handling, administration, and disposal.</Text>
        <Text style={styles.text}>{'\n'}</Text>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Dermatologic reactions: Severe cutaneous adverse reactions (some fatal), AGEP TEN,  DRESS, SJS have been reported. Discontinue if there are any signs of severe cutaneous reaction. "}, {text: "Diabetes"}, {text: "Hepatic impairment"}, {text: "Hyperbilirubinemia"}, {text: "Hypoalbuminemia"}, {text: "Hypotension"}, {text: "Hypothyroidism"}, {text: "Myocardial insufficiency"}, {text: "Patients of Asian ancestry: increased risk of SJS, TEN"}, {text: "Porphyria"}, {text: "Renal Impairment"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Acidosis, agitation, alkalosis, amblyopia, apnea, ataxia, bradycardia, cardiac arrhythmia, cardiac failure, cerebral edema, cerebral hemorrhage, cerebral infarction, CNS depression, coma, confusion, conjunctivitis, deafness, delirium, diabetes insipidus, diplopia, dyspnea, edema, encephalitis, extrapyramidal reaction, gastritis, genital edema, GI hemorrhage, hemiplegia, hyper/hypotension (including orthostatic), hyperglycemia, hyper/hypokalemia, hypophosphatemia, hypotonia, intracranial hypertension, intestinal obstruction, ketosis, migraine, myoclonus, nausea, oliguria, otalgia, palpitations, paralysis, photophobia, positive Babinski sign, prolonged QT, pruritus, psychosis, pulmonary embolism, \"purple glove syndrome,\" seizure, severe burning or itching and/or paresthesias, severe cutaneous reactions: (TEN, SJS, DRESS, AGEP), shock, skin rash, subdural hematoma, syncope, tenesmus, thrombophlebitis, tinnitus, urticaria, vasodilatation, visual field defect, vomiting, xerostomia   Hepatotoxicity (potentially severe or fatal) Immediately discontinue fosphenytoin in patients who develop acute hepatotoxicity and do not readminister. \n\nRare: anaphylaxis, angioedema, dyskinesia"
  },
  {
    Drug: "Furosemide (Lasix)",
    USBlackBox: "In excess, can lead to profound diuresis, resulting in fluid and electrolyte depletion.",
    Contraindications: (
      <BulletList
        items={[{text: "Anuria"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Pediatrics:  May prevent closure of PDA</Text>
        <Text style={styles.text}>{'\n'}</Text>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[ {text: "Adrenal insufficiency"}, {text: "Concomitant use with antihypertensives"}, {text: "Hyperuricemia: may precipitate gout"}, {text: "Hypokalemia"}, {text: "Ototoxicity: Rapid IV administration, severe renal impairment, excessive doses, hypoproteinemia, and concurrent use of other ototoxins is associated with ototoxicity"}, {text: 'Sulfonamide ("sulfa") allergy'}, {text: "Systemic lupus erythematosus (SLE)"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Acute generalized exanthematous pustulosis, anaphylactic shock, anaphylactoid reaction, anaphylaxis, bullous pemphigoid, DRESS syndrome, erythema multiforme, exfoliative dermatitis, necrotizing angiitis, orthostatic hypotension, pruritus, skin photosensitivity, skin rash, Stevens-Johnson syndrome, thrombophlebitis, toxic epidermal necrolysis, vasculitis, urticaria"
  },
  {
    Drug: "Gentamicin",
    USBlackBox: (
      <BulletList
        items={[{text: "May cause nephrotoxicity; Discontinue treatment if signs of nephrotoxicity occur; renal damage is usually reversible. "}, {text: "May cause neurotoxicity and ototoxicity. Tinnitus or vertigo may be indications of vestibular injury and impending bilateral irreversible damage. Discontinue treatment if signs of ototoxicity occur. "}, {text: "Aminoglycosides may cause fetal harm if administered to a pregnant woman "}, {text: "Avoid concomitant or sequential use of other neurotoxic and/or nephrotoxic drugs "}, {text: "Avoid concomitant use with potent diuretics "}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Administration soon after anesthesia or neuromuscular blockers due to neuromuscular blockade/respiratory paralysis"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Hypocalcemia "}, {text: "Hypokalemia "}, {text: "Hypomagnesemia "}, {text: "Neuromuscular disorders "}, {text: "Preexisting renal insufficiency (dosage modification required) "}, {text: "Preexisting vertigo, tinnitus, or hearing loss "}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (intrathecal administration) among its list of drug classes which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Anaphylaxis, ataxia, auditory impairment, dyspnea, edema, confusion, hearing loss, hepatomegaly, hyper/hypo-tension, hypocalcemia, hypokalemia, hypomagnesemia, hyponatremia, increased liver enzymes, laryngeal edema, mental status changes, nephrotoxicity, oliguria, proteinuria, respiratory depression, splenomegaly, thrombocytopenia, tinnitus, urticaria"
  },
  {
    Drug: "Glucagon",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Glucagonoma (excluding GlucaGen) "}, {text: "Insulinoma "}, {text: "Known hypersensitivity to lactose "}, {text: "Pheochromocytoma"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Adrenal insufficiency "}, {text: "Cardiac disease "}, {text: "Chronic hypoglycemia"}, {text: "Diabetes"}, {text: "Glucagonoma "}, {text: "Insulinoma"}, {text: "Pheochromocytoma "}, {text: "Starvation/Fasting"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Allergic reactions including skin rash and anaphylactic shock (with hypotension and respiratory difficulties), dyspnea,  hyper/hypotension, hypoglycemia, hypoglycemic coma, increased pulse, necrolytic migratory erythema (NME)"
  },
  {
    Drug: "Glucose (Dextrose) Pediatric",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Glucose-galactose malabsorption syndrome "}, {text: "Hypersensitivity to dextrose, corn or corn products"}, {text: "Hypertonic solutions in intracranial or intraspinal hemorrhage, hepatic or diabetic coma, or delirium tremens, especially if dehydrated "}, {text: "Severe dehydration; anuria"}]}
      />
    ),
    SpecialPrecautions: (
      <BulletList
        items={[{text: <Text style={styles.bold}>Vesicant (at concentrations {'>'}10%); Avoid extravasation</Text>}, {text: "Bolus dosing for hypoglycemia only-D5W not for routine IVF therapy; may cause severe hyponatremia"}, {text: "Very low birth weight infants: Rapid administration may cause increased serum osmolality and possible intracerebral hemorrhage"}]}
      />
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (hypertonic solutions ≥20%) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Dehydration, hypersensitivity reaction (including anaphylaxis), hypokalemia, phlebitis, pulmonary edema, tissue necrosis following extravasation of hypertonic dextrose (>10%)"
  },
  {
    Drug: "Hydrocortisone",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "ITP (IM administration only) "}, {text: "Intrathecal administration"}, {text: "Live or live, attenuated virus vaccines (with immunosuppressive doses)"}, {text: "Systemic fungal infections "}, {text: "Use in premature infants (formulations containing benzyl alcohol only)"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Dermal changes: Avoid injection or leakage into the dermis; dermal and/or subdermal skin depression may occur at the site of injection. Avoid deltoid muscle injection; subcutaneous atrophy may occur."}]}
        />
        <Text style={styles.text}>  Use with caution in: </Text>
        <BulletList
          items={[{text: "Acute MI "}, {text: "CHF and/or hypertension "}, {text: "Diabetes"}, {text: "Gastrointestinal disease "}, {text: "Head injury"}, {text: "Hepatic impairment"}, {text: "Myasthenia gravis "}, {text: "Ocular disease, ocular HSV "}, {text: "Osteoporosis "}, {text: "Pheochromocytoma "}, {text: "Psychiatric disturbances: Pre-existing psychiatric conditions may be exacerbated."}, {text: "Renal impairment "}, {text: "Seizure disorders "}, {text: "Septic shock or sepsis syndrome: Corticosteroids should not be administered for the treatment of sepsis in the absence of shock "}, {text: "Thyroid disease"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Adrenal suppression, anaphylaxis, angioedema, atheromatous embolism, atrophy at injection site, cardiac arrhythmia, cardiac failure  cardiomegaly, cataract, circulatory shock, Cushing syndrome, diabetes mellitus (latent), exophthalmos, glaucoma, headache, HPA-axis suppression, hyperglycemia, hypokalemia, hypokalemic alkalosis, hypertension, hypertrophic cardiomyopathy (premature infants), immunosuppression, increased ICP, increased intraocular pressure, myasthenia, myocardial rupture, myopathy, neuritis, neuropathy, pulmonary edema, seizure, skin edema, skin rash, suppression of skin test reaction, syncope, thromboembolism, thrombophlebitis, vasculitis, vertigo, urticaria, vomiting, wound healing impairment, xeroderma"
  },
  {
    Drug: "Hypertonic (3%) Saline",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Fluid retention "}, {text: "Hypernatremia "}, {text: "Hypertonic uterus"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Vesicant; Avoid extravasation "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Cirrhosis"}, {text: "Edema "}, {text: "Heart failure "}, {text: "Hypertension "}, {text: "Renal inpairment "}, {text: "Neonates, maximum serum concentration correction 10 mEq/L/day "}, {text: "Infants, children, adults: do not exceed a maximum serum concentration correction rate of 12 mEq/L/day"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV formulation >0.9% concentration) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Acid-base imbalance, chills, electrolyte disturbance, fever, hyperchloremia, hyperchloremic metabolic acidosis, hypernatremia, hypersensitivity reaction, hypervolemia, hyponatremia, hypotension, infusion site reaction, injection site infection, localized phlebitis, peripheral edema, pruritus, pulmonary edema, skin rash, tremor, urticaria, venous thrombosis"
  },
  {
    Drug: "Ibuprofen",
    USBlackBox: (
      <BulletList
        items={[{text: "NSAIDs cause an increased risk of serious (and potentially fatal) adverse cardiovascular thrombotic events "}, {text: "NSAIDs cause an increased risk of serious gastrointestinal inflammation, ulceration, bleeding, and perforation (may be fatal) "}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "History of asthma, urticaria, allergic-type reaction to aspirin or other NSAIDs Aspirin Triad: bronchial asthma, aspirin intolerance, rhinitis "}, {text: "Infants less than 6 months "}, {text: "Use in the setting of (CABG) surgery "}, {text: "Use of ibuprofen lysine (NeoProfen) is contraindicated in preterm infants with significant renal impairment"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "May increase the risk of aseptic meningitis "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Asthma: Contraindicated in patients with aspirin-sensitive asthma; severe and potentially fatal bronchospasm may occur. "}, {text: "Concurrent use of diuretics and ACE inhibitors "}, {text: "Dehydration"}, {text: "Heart failure"}, {text: "Hepatic impairment "}, {text: "Hypovolemia "}, {text: "Mixed connective tissue disorders "}, {text: "Renal Impairment "}, {text: "Skin reactions: SJS, TEN, may occur without warning; discontinue use at first sign of skin rash "}, {text: "Systemic lupus erythematosus"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Abdominal pain, anxiety, cardiac arrhythmia, dizziness, dyspnea, epigastric pain, fluid retention, GI bleeding, headache, malaise, nausea/vomiting/diarrhea, prolonged bleeding time, pruritus, skin rash \n\nRare: acidosis, acute renal failure,  anaphylactoid shock, apnea, cardiac failure, cataract, cerebrovascular accident, DRESS syndrome,    hepatotoxicity (idiosyncratic),  hyper/hypoglycemia,  Stevens-Johnson syndrome, toxic epidermal necrolysis"
  },
  {
    Drug: "Insulin (Regular Insulin)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Hypoglycemia"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Anaphylaxis "}, {text: "Cardiac disease: Concurrent use with peroxisome proliferator-activated receptor (PPAR)-gamma agonists, including thiazolidinediones (TZDs) may lead to or exacerbation of heart failure "}, {text: "Hepatic and/or Renal impairment "}, {text: "Hypokalemia"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (with special emphasis on U-500 insulin) among its list of drugs which have a heightened risk of causing significant patient harm when used in error. Due to the number of insulin preparations, it is essential to identify/clarify the type of insulin to be used.",
    AdditionalAdverseReactions: "Anaphylaxis, hypoglycemia, hypokalemia, injection site pruritus, peripheral edema"
  },
  {
    Drug: "Ipratropium (Atrovent)",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Paradoxical bronchospasm may occur</Text>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Narrow-angle glaucoma "}, {text: "Prostatic hyperplasia/bladder neck obstruction"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Cough, dizziness, dyspnea, exacerbation of chronic obstructive lung disease, headache, nausea \n\nRare: Accommodation disturbance, acute eye pain, anaphylaxis, angioedema, laryngospasm, palpitations, tachycardia, urinary retention"
  },
  {
    Drug: "Ketamine For Sedation",
    USBlackBox: (
      <BulletList
        items={[{text: "The 100 mg/mL concentration must be diluted prior to administration with sterile water, D5W, or NS."}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Infants <3 months of age"}, {text: "Conditions in which an increase in blood pressure would be hazardous "}, {text: "Known or suspected schizophrenia "}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Ketamine exposure during critical neurodevelopment periods (eg, neonates, infants, and young children) may negatively affect neurodevelopment "}, {text: "Patients with a history of airway instability, tracheal surgery, or tracheal stenosis may be at a higher risk of airway complications"}, {text: "Postanesthetic emergence reactions, which can manifest as vivid dreams, hallucinations, and/or frank delirium, may occur "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Cardiovascular disease: coronary artery disease, catecholamine depletion, hypertension, tachycardia"}, {text: "Cerebrospinal fluid (CSF) pressure elevation"}, {text: "Ethanol use: May produce postanesthetic emergence reactions"}, {text: "Increased intracranial pressure"}, {text: "Increased ocular pressure"}, {text: "Porphyria"}, {text: "Thyroid disorders "}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV, intranasal/inhaled administration, parenteral used orally for sedation in children) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Airway obstruction, anaphylaxis, apnea bladder dysfunction, cardiac arrhythmia, central diabetes insipidus, cystitis, diplopia, dysuria, hematuria, hydronephrosis, hypo/hyper-tension, hypertonia, increased ICP, increased intraocular pressure, laryngospasm, nausea, nystagmus, prolonged emergence from anesthesia, rash, respiratory depression, sialorrhea, urinary frequency or incontinence, vomiting"
  },
  {
    Drug: "Ketamine",
    USBlackBox: (
      <BulletList
        items={[{text: "The 100 mg/mL concentration must be diluted prior to administration with sterile water, D5W, or NS."}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Infants <3 months of age"}, {text: "Conditions in which an increase in blood pressure would be hazardous "}, {text: "Known or suspected schizophrenia "}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Ketamine exposure during critical neurodevelopment periods (eg, neonates, infants, and young children) may negatively affect neurodevelopment "}, {text: "Patients with a history of airway instability, tracheal surgery, or tracheal stenosis may be at a higher risk of airway complications"}, {text: "Postanesthetic emergence reactions, which can manifest as vivid dreams, hallucinations, and/or frank delirium, may occur "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Cardiovascular disease: coronary artery disease, catecholamine depletion, hypertension, tachycardia"}, {text: "Cerebrospinal fluid (CSF) pressure elevation"}, {text: "Ethanol use: May produce postanesthetic emergence reactions"}, {text: "Increased intracranial pressure"}, {text: "Increased ocular pressure"}, {text: "Porphyria"}, {text: "Thyroid disorders "}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV, intranasal/inhaled administration, parenteral used orally for sedation in children) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Airway obstruction, anaphylaxis, apnea bladder dysfunction, cardiac arrhythmia, central diabetes insipidus, cystitis, diplopia, dysuria, hematuria, hydronephrosis, hypo/hyper-tension, hypertonia, increased ICP, increased intraocular pressure, laryngospasm, nausea, nystagmus, prolonged emergence from anesthesia, rash, respiratory depression, sialorrhea, urinary frequency or incontinence, vomiting"
  },
  {
    Drug: "Labetalol",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Bronchial asthma "}, {text: "Cardiogenic shock"}, {text: "Heart block greater than first degree (except with functioning artificial pacemaker)"}, {text: "Obstructive airway disease"}, {text: "Severe bradycardia"} ,{text: "Severe and prolonged hypotension "}, {text: "Uncompensated cardiac failure "}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution with:</Text>
        <BulletList
          items={[{text: "Anaphylaxis "}, {text: "Bronchospastic disease "}, {text: "Diabetes "}, {text: "Heart failure: Use with extreme caution in patients with compensated heart failure"}, {text: "Hepatic impairment"}, {text: "Myasthenia gravis "}, {text: "Peripheral vascular disease (PVD) and Raynaud disease: may aggravate symptoms of arterial insufficiency "}, {text: "Pheochromocytoma: paradoxical hypertensive responses due to inadequate alpha-1 blockade "}, {text: "Psoriasis "}, {text: "Thyroid disease "}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV formulation) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Anaphylaxis, bradycardia, bronchospasm, cardiac failure, cholestatic jaundice, diabetes mellitus, diarrhea, dizziness, drowsiness, dyspnea, edema, fatigue, flushing, headache, heart block, hepatic injury/necrosis, hypoesthesia, hypotension, jaundice, lichenoid eruption, lichen planus, muscle cramps, myopathy, nausea, paresthesia, pruritus, pulmonary edema, rash, ventricular arrhythmia, vomiting, wheezing"
  },
  {
    Drug: "Levetiracetam (Keppra)",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Children may have increased incidence of psychiatric symptoms "}, {text: "Renal impairment "}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Abdominal pain, acute renal failure,  aggressive behavior, agitation,  anaphylaxis, ataxia  behavioral problems, choreoathetosis, confusion, conjunctivitis, dizziness, DRESS syndrome, dyskinesia, hepatitis, increased blood pressure (diastolic; infants and children), psychosis, skin rash, Stevens-Johnson syndrome, suicidal ideation, toxic epidermal necrolysis, vomiting"
  },
  {
    Drug: "Lidocaine",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Adam-Stokes syndrome"}, {text: "Allergy to corn or corn-related products "}, {text: "Hypersensitivity to amide-type local anesthetics "}, {text: "Severe degrees of SA, AV, or intraventricular heart block (except with functioning artificial pacemaker)"}, {text: "Wolff-Parkinson-White syndrome"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Hepatic dysfunction: increased risk of lidocaine toxicity "}, {text: "Pseudocholinesterase deficiency: increased risk of lidocaine toxicity. Constant ECG monitoring is necessary during IV administration"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (epidural administration; IV formulation) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Agitation, anaphylaxis, anxiety, apprehension, asystole, bronchospasm, cardiac arrhythmia, circulatory shock, coronary artery vasospasm, coma, confusion, dermatological reaction, dizziness, drowsiness, dyspnea, edema, flushing, hallucination, heart block, hyper/hypoesthesia, hypotension, lethargy, loss of consciousness, methemoglobinemia, nausea/vomiting, paresthesia, psychosis, respiratory depression, seizure slurred speech, twitching, weakness"
  },
  {
    Drug: "Lorazepam (Ativan)",
    USBlackBox: (
      <BulletList
        items={[{text: "Concomitant use of benzodiazepines and opioids may result in profound sedation, respiratory depression, coma, and death."}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Premature infants"}, {text: "Acute narrow-angle glaucoma "}, {text: "Hypersensitivity to polyethylene glycol, propylene glycol, or benzyl alcohol"}, {text: "Intra-arterial injection"}, {text: "Severe respiratory insufficiency"}, {text: "Sleep apnea "}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Neonates/preterm: risk of neurotoxicity and myoclonus. Risk of toxic propylene glycol exposure"}, {text: "Pediatric patients: Risk of paradoxical reactions "}, {text: "Drug abuse: Risk of dependence increases  with history of alcohol or drug abuse"}, {text: "Hepatic impairment"}, {text: "Psychiatric disorders: Not recommended for primary depressive or psychotic disorders"}, {text: "Renal impairment: Parenteral use not recommended "}, {text: "Respiratory disease"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV formulation) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Agranulocytosis, anaphylaxis, cardiac arrhythmia, cardiac failure, cerebral edema, chills, coma, delirium, depression, dizziness, dysarthria, erythema/pain at injection site, extrapyramidal reaction, gastrointestinal hemorrhage, heart block, hepatotoxicity, hypothermia, hyponatremia, hypo/hyper-tension, hypoventilation, jaundice, neuroleptic malignant syndrome, pancytopenia, paralysis, pulmonary edema, pulmonary hemorrhage, respiratory depression, respiratory failure, suicidal ideation, weakness"
  },
  {
    Drug: "Magnesium Sulfate",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Heart block "}, {text: "Myocardial damage "}, {text: "IV use for preeclampsia/eclampsia during the 2 hours prior to delivery "}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Myasthenia gravis or other neuromuscular disease "}, {text: "Renal impairment"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV formulation) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Flushing (dose related), hypermagnesemia, hypotension (rate related), vasodilation (rate related)"
  },
  {
    Drug: "Mannitol",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Active intracranial bleeding except during craniotomy "}, {text: "Progressive heart failure or pulmonary congestion after mannitol"}, {text: "Severe dehydration/hypovolemia"}, {text: "Severe pulmonary edema"}, {text: "Severe renal disease (anuria)"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Vesicant (at concentrations {'>'} 5%); Avoid extravasation Large central vein is recommended.</Text>
        <Text style={styles.text}>Use with caution in: </Text>
        <BulletList
          items={[{text: "Cerebral edema: mannitol may accumulate causing rebound increases in ICP"}, {text: "Neurosurgery post-op: increased risk of post-op bleeding or intracranial hypertension in children"}, {text: "Renal impairment (severe): do not use until adequacy of renal function and urine flow is established"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Acute renal failure, blurred vision, bullous rash, cardiac failure, chest pain, chills, dizziness, fluid and electrolyte disturbance, headache, hyper/hypo-tension, hypovolemia, nausea, peripheral edema, pulmonary edema, seizure, tachycardia, tissue necrosis, tubular necrosis, vomiting, water intoxication, xerostomia"
  },
  {
    Drug: "Methylprednisolone (Solu-medrol)",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Use in premature infants (formulations containing benzyl alcohol preservative only) "}, {text: "Hypersensitivity to dairy products (40 mg vial only) "}, {text: "Immune thrombocytopenia (IM  only)"}, {text: "Intrathecal administration"}, {text: "Live or attenuated virus vaccines (with immunosuppressive dosing)"}, {text: "Systemic fungal infection (except intra-articular injection for localized joint conditions)"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Pediatric: May affect growth velocity "}, {text: "Acute MI"}, {text: "Adrenal suppression: May cause hypercortisolism or suppression of hypothalamic-pituitary-adrenal (HPA) axis, particularly in younger children."}, {text: "CHF and/or hypertension "}, {text: "Diabetes "}, {text: "Gastrointestinal disease "}, {text: "Head injury "}, {text: "Hepatic impairment"}, {text: "Myasthenia gravis "}, {text: "Ocular disease, ocular HSV "}, {text: "Psychiatric disturbances "},{text: "Renal impairment "}, {text: "Seizure disorders "}, {text: "Septic shock/syndrome: Corticosteroids should not be administered for the treatment of sepsis in the absence of shock."}, {text: "Systemic sclerosis: increase in scleroderma renal crisis"}, {text: "Thyroid disease "}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Abdominal distention, adrenal suppression, allergic dermatitis, amyotrophy, anaphylaxis, angioedema, arachnoiditis, aseptic necrosis of femoral/humoral head,arthropathy, atrophic striae, bradycardia, calcinosis, cardiac arrest, cardiac arrhythmia, cardiac failure, cardiomegaly, circulatory shock, diabetes mellitus, diaphoresis, ecchymoses, edema, embolism (fat), erythema/rash, euphoria, exfoliation of skin, facial erythema, fluid retention,glaucoma, glycosuria, headache, hepatomegaly, hiccups, hyperglycemia, hyperlipidemia, hypokalemia, hypokalemic alkalosis, hyper/hypopigmentation, hypertension, hypertrichosis, hypertrophic cardiomyopathy (in neonates), immunosuppression, increased intracranial pressure, increased intraocular pressure, increased serum transaminases, increased  infection risk, insomnia, injection site infection, intestinal perforation, Kaposi sarcoma, leukocytosis (transient), lipotrophy, malaise, malignant neoplasm (secondary), meningitis, myasthenia, myocardial rupture (post MI), myopathy,  nausea, osteoporosis, personality changes,  pseudotumor cerebri (usually following discontinuation), pulmonary edema, rhinitis, seizure, sensory disturbance, septic arthritis, sodium retention,sterile abscess, subcapsular posterior cataract, suppression of skin test reaction, syncope, tachycardia, thromboembolism, thrombophlebitis, tissue sloughing, ulcerative esophagitis/peptic ulcer/GI perforation, vasculitis, vertebral compression fracture, vertigo, weight gain, wound healing impairment, xeroderma"
  },
  {
    Drug: "Midazolam (Versed)",
    USBlackBox: "Has been associated with respiratory depression and respiratory arrest, especially when used for sedation in noncritical care settings; airway obstruction, desaturation, hypoxia, and apnea have also been reported, most often when used concomitantly with other CNS depressants (e.g.,opiods). Death or hypoxic encephalopathy has occurred. Use only with continuous monitoring (i.e., oximetry). Doses of sedative medications in pediatric patients must be calculated on a mg/kg basis, and initial doses and all subsequent doses should always be titrated slowly. The initial pediatric dose of midazolam for sedation/anxiolysis/amnesia is age, procedure, and route dependent. Rapid injection may induce seizures in neonates.",
    Contraindications: (
      <BulletList
        items={[{text: "Use in premature infants, IV forms containing benzyl alcohol"}, {text: "Acute narrow-angle glaucoma"}, {text: "Concurrent use with protease inhibitors"}, {text: "Intrathecal or epidural injection of parenteral forms containing preservatives (ie, benzyl alcohol)"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[ {text: "Neonates: Avoid rapid IV injection; severe hypotension and seizures may occur, particularly with concomitant fentanyl. May cause profound and/or prolonged respiratory effects; myoclonus has been reported "}, {text: "Pediatric: patients with cardiac/respiratory compromise - higher risk of respiratory depression. Risk of desaturation and hypoventilation episodes during upper airway procedures. "}, {text: "Cardiovascular instability: avoid rapid IV administration in pediatrics due to adverse hemodynamic events "}, {text: "Acute illness (uncompensated)"}, {text: "Renal impairment "}, {text: "Respiratory disease "}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (IV, oral administration for sedation in children) among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Apnea, bradypnea, cough, decreased tidal volume, drowsiness, hypotension, injection site reaction, myoclonus (preterm infants), nausea, nystagmus, paradoxical reaction, seizure-like activity, severe sedation, vomiting \n\nRare: agitation, amnesia, bigeminy, bradycardia, bronchospasm, confusion, delirium, dyspnea, euphoria, hallucination, hyperventilation, laryngospasm, sialorrhea, skin rash, tachycardia, PVCs, wheezing"
  },
  {
    Drug: "Morphine Sulfate",
    USBlackBox: "Serious, life-threatening, or fatal respiratory depression may occur. Monitor closely for respiratory depression, especially during initiation or dose escalation. Concomitant use of opioids with benzodiazepines or other CNS depressants, including alcohol, may result in profound sedation, respiratory depression, coma, and death.",
    Contraindications: (
      <BulletList
        items={[{text: "Acute or severe bronchial asthma in an unmonitored setting or in the absence of resuscitative equipment "}, {text: "Concurrent use of monoamine oxidase inhibitors (MAOIs) or use of MAOIs within the last 14 days "}, {text: "GI obstruction, including paralytic ileus"}, {text: "Significant respiratory depression"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Pediatric: Infants <3 months of age/prematurity - increased risk of respiratory depression and/or apnea; reduce dose "}, {text: "Biliary tract impairment/ acute pancreatitis: constriction of sphincter of Oddi "}, {text: "CNS depression "}, {text: "Cardiovascular disease (including acute MI) "}, {text: "Circulatory shock "}, {text: "Constipation "}, {text: "Drugs that may exaggerate hypotensive effects (including phenothiazines or general anesthetics) "}, {text: "Delirium tremens: Some dosage forms contraindicated "}, {text: "Head trauma, intracranial lesions, or elevated intracranial pressure (ICP): use extreme caution, exaggerated elevation of ICP may occur "}, {text: "Hepatic impairment "}, {text: "Hypovolemia "}, {text: "Hypotension "}, {text: "Mental health conditions"}, {text: "Morbidly obese: avoid use "}, {text: "Prostatic hyperplasia/urinary stricture "}, {text: "Psychosis "}, {text: "Renal impairment "}, {text: "Respiratory disease: critical respiratory depression may occur, even at therapeutic dosages "}, {text: "Seizure disorders "}, {text: "Thyroid dysfunction"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drug classes which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Altered mental status, apnea, circulatory depression, confusion, constipation, decreased cough reflex, diarrhea, disruption of body temperature regulation, dizziness, erythema at injection site, gastrointestinal hypermotility (in patients with chronic ulcerative colitis), headache, hemorrhagic urticaria, hypoventilation, increased catecholamines, local irritation, local swelling, miosis, myoclonus/spasm, nausea, oliguria, orthostatic hypotension, palpitations, paradoxical central nervous system stimulation, peripheral edema, peripheral vascular insufficiency, respiratory depression, secondary hypogonadism, shock, toxic psychosis, toxic megacolon (patients with chronic ulcerative colitis), ureteral spasm, urinary retention, urticaria, vomiting \n\nRare: Anaphylaxis, bronchospasm, dehydration, fatigue, hyperalgesia, intestinal obstruction, sepsis"
  },
  {
    Drug: "Naloxone (Narcan)",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Chronic opiate users: causes the release of catecholamines, which may precipitate acute withdrawal or unmask pain in those who regularly take opioids"}, {text: "Cardiovascular disease: pulmonary edema and cardiovascular instability, including ventricular fibrillation, have been reported in association with abrupt reversal when using opioid antagonists "}, {text: "Seizures: Caution with history of seizures; avoid use in meperidine-induced seizures "}]}
        />
        <Text style={styles.text}>Dosage form specific issues:</Text>
        <BulletList
          items={[{text: "Auto-injector: infants <1 year of age, monitor injection site for residual needle parts and signs of infection "}, {text: "Opioid overdose: Recurrence of respiratory/CNS depression is possible if the opioid involved is long-acting; observe patients for recurrent respiratory or CNS depression "}, {text: "Partial opioid agonist and mixed opioid agonist/antagonist overdose: Reversal may be incomplete and repeat doses may be required"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Abdominal cramps, agitation, body pain, brain disease, coma, confusion, constipation  diaphoresis, diarrhea, disorientation dizziness, excessive crying (neonates), fever, flushing, hallucination, headache, hyperreflexia (neonates), hyper/hypotension, hypoxia, injection site reaction, irritability, muscle spasm/pain,  nausea, nervousness, paresthesia, pulmonary edema, respiratory depression, restlessness, seizure (neonates), rhinitis, shivering,  tachycardia, tonic-clonic seizures, tremor, V-Fib/V- Tach, vomiting, weakness "
  },
  {
    Drug: "Phenobarbital",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Dyspnea or airway obstruction "}, {text: "History of sedative/hypnotic addiction "}, {text: "Intra-arterial administration, subcutaneous administration "}, {text: "Marked hepatic impairment "}, {text: "Nephritic patients (large doses) "}, {text: "Porphyria (manifest and latent)"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Pediatric: Phenobarbital has been associated with cognitive deficits in children receiving therapy for complicated febrile seizure "}, {text: "Cardiac disease and in hemodynamically unstable patients (hypotension or shock) "}, {text: "CNS depression "}, {text: "Debilitated patients "}, {text: "Depression or suicidal tendencies"}, {text: "Diabetes "}, {text: "Fever "}, {text: "Hepatic impairment"}, {text: "History of drug abuse "}, {text: "Hypersensitivity: Exfoliative dermatitis and Stevens-Johnson syndrome, possibly fatal, may occur "}, {text: "Hyperthyroidism "}, {text: "Hypoadrenalism "}, {text: "Paradoxical stimulatory response: May cause paradoxical responses, including agitation and hyperactivity, particularly pediatric patients "}, {text: "Renal impairment "}, {text: "Respiratory disease, including status asthmaticus "}, {text: "Severe anemia"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Agitation, anxiety, apnea, ataxia, bradycardia, CNS depression/stimulation, confusion, constipation, dizziness, drowsiness, exfoliative dermatitis, hallucination, headache, hyperkinesia, hypotension, hypoventilation,  laryngospasm, lethargy, nausea, oliguria, pain at injection site, respiratory depression, skin rash, Stevens-Johnson syndrome, syncope, thrombophlebitis, vomiting"
  },
  {
    Drug: "Procainamide (Pronestyl)",
    USBlackBox: (
      <BulletList
        items={[{text: "Potentially fatal blood dyscrasias (eg, agranulocytosis) have occurred with therapeutic doses "}, {text: "Development of a positive antinuclear antibody (ANA) test in 50% of patients which may result in a drug-induced lupus erythematosus-like syndrome"}, {text: "The applicability of the CAST study results to other populations (e.g., those without recent myocardial infarctions) is indeterminate. Reserve use of procainamide and other antiarrhythmic agents for patients with life-threatening ventricular arrhythmias."}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Complete heart block/ second-degree AV block or various types of hemiblock"}, {text: "Hypersensitivity to other ester-type local anesthetics"}, {text: "Systemic lupus erythematosus  "}, {text: "Torsade de pointes"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Atrial fibrillation/flutter: May increase ventricular response rate; control AV conduction before initiating "}, {text: "Conduction disturbances: Reduce dose if first-degree heart block occurs "}, {text: "Electrolyte imbalance: Correct electrolyte disturbances, especially hypokalemia or hypomagnesemia, prior to use "}, {text: "Heart failure: negative inotropic "}, {text: "Myasthenia gravis "}, {text: "Renal impairment "}, {text: "Proarrhythmic effects: Watch for proarrhythmic effects; monitor and adjust dose to prevent QTc prolongation. Avoid use in patients with QT prolongation "}, {text: "Sodium metabisulfite: The injectable product may cause allergic-type reactions, including anaphylactic symptoms and life-threatening asthmatic episodes in susceptible people; more common in asthmatics"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Hypotension, lupus-like syndrome, positive ANA titer skin rash \n\nRare: Agranulocytosis, angioedema, anorexia, aplastic anemia, arthralgia, asystole, bone marrow depression, cerebellar ataxia, confusion, demyelinating disease, depression, dizziness,  exacerbation of cardiac arrhythmia, exacerbation of myasthenia gravis, fever, flushing, gastrointestinal pseudo-obstruction, granulomatous hepatitis, hallucination, hemolytic anemia, hepatic failure, hyperbilirubinemia, hypoplastic anemia, leukopenia, maculopapular rash, mania, myocarditis, myopathy, neuromuscular blockade, neutropenia, pancreatitis, pancytopenia, peripheral neuropathy, pleural effusion, polyneuropathy, positive direct Coombs test, prolonged Q-T interval on ECG, psychosis, pruritus, pulmonary embolism, first/ second degree AV block, tachycardia, thrombocytopenia, torsades de pointes, urticaria, vasculitis, V- Fib/Tach,  weakness"
  },
  {
    Drug: "Rocuronium (Zemuron) Paralytic",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: 'Hypersensitivity (e.g., anaphylaxis) to neuromuscular-blocking agents'}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Pediatric: Not recommended by the manufacturer for rapid sequence intubation in pediatric patients; however, it has been used successfully in clinical trials for this indication"}, {text: "Anaphylactoid/hypersensitivity reactions: Have been reported; immediate treatment for anaphylactoid reactions should be available during use"}, {text: "Neuromuscular cross-sensitivity: with other neuromuscular-blocking agents may occur; use is contraindicated in patients with previous anaphylactic reactions to other neuromuscular blockers"}, {text: "Prolonged paralysis: Patients should be adequately recovered prior to extubation"}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Burn injury: Resistance may occur in burn patients (≥20% of total body surface area)"}, {text: "Cardiovascular disease: (e.g., heart failure); delayed onset; prolonged duration"}, {text: "Hepatic impairment: prolonged duration"}, {text: "Pulmonary hypertension"}, {text: "Respiratory disease"}, {text: "Valvular heart disease"}]}
        />
        <Text style={styles.text}>Conditions that may <Text style={styles.bold}>antagonize</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Demyelinating lesions"}, {text: "Denervation"}, {text: "Diabetes mellitus"}, {text: "Hypercalcemia"}, {text: "Muscle trauma"}, {text: "Peripheral neuropathies"}, {text: "Respiratory alkalosis"}]}
        />
        <Text style={styles.text}>Conditions that may <Text style={styles.bold}>potentiate</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Eaton-Lambert syndrome"}, {text: "Severe electrolyte abnormalities"}, {text: "Metabolic acidosis Myasthenia gravis"}, {text: "Neuromuscular diseases"}, {text: "Respiratory acidosis"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: (
      <Text style={styles.text}>
        Anaphylaxis, hypertension, increased peripheral vascular resistance, tachycardia (more common in children), transient hypotension,
        {'\n\n'}
        Rare: Anaphylactoid reaction, asthma, cardiac arrhythmia, ECG abnormality, injection site edema, nausea, vomiting`
      </Text>
    ) 
  },
  {
    Drug: "Succinylcholine",
    USBlackBox: "Use caution in children and adolescents. Acute rhabdomyolysis with hyperkalemia, ventricular arrhythmias and cardiac arrest have been reported (rarely) in children with undiagnosed skeletal muscle myopathy; occurs soon after administration and requires immediate treatment of hyperkalemia. Prolonged resuscitation may be required. Reserve use in children to  airway emergencies.",
    Contraindications: (
      <BulletList
        items={[{text: "Personal or familial history of malignant hyperthermia "}, {text: "Skeletal muscle myopathies "}, {text: "Use after the acute phase of injury following major burns, multiple trauma, extensive denervation of skeletal muscle, or upper motor neuron injury"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Risk of bradycardia increased with second dose an may doccur more in children. Pretreating with atropine may prevent."}, {text: "Exacerbation of hyperkalemia may develop in patients with any conditions/injuries predisposing to hyperkalemia."}, {text: "Avoid use in narrow-angle glaucoma, penetrating eye injuries due to increase IOP."}, {text: "May increase intragastric pressure, resulting in regurgitation/aspiration."}, {text: "May increase vagal tone."}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Burn injury: risk of hyperkalemia. Onset and duration of risk variable, generally greatest 7 to 10 days after injury."}, {text: "Fractures/muscle spasm: initial muscle fasciculations may cause additional trauma"}, {text: "Intracranial pressure"}, {text: "Malignant hyperthermia: may cause acute onset; risk increased with concomitant administration of volatile anesthetics"}, {text: "Neuromuscular cross-sensitivity: Anaphylaxis may occur"}, {text: "Plasma pseudocholinesterase disorders:"}]}
        />
        <Text style={styles.text}>Conditions that may <Text style={styles.bold}>antagonize</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Demyelinating lesions"}, {text: "Denervation"}, {text: "Diabetes mellitus"}, {text: "Hypercalcemia"}, {text: "Muscle trauma"}, {text: "Peripheral neuropathies"}, {text: "Respiratory alkalosis"}]}
        />
        <Text style={styles.text}>Conditions that may <Text style={styles.bold}>potentiate</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Eaton-Lambert syndrome"}, {text: "Severe electrolyte abnormalities"}, {text: "Metabolic acidosis"}, {text: "Myasthenia gravis"}, {text: "Neuromuscular disease"}, {text: "Respiratory acidosis"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Arrhythmia, apnea, anaphylaxis, cardiac arrest, excessive salivation, hyper/hypotension, hyperkalemia, increased ICP, jaw rigidity, fasciculation, malignant hyperthermia, respiratory depression, rash, rhabdomyolysis,  tachycardia "
  },
  {
    Drug: "Terbutaline",
    USBlackBox: null,
    Contraindications: (
      <BulletList
        items={[{text: "Hypersensitivity to sympathomimetic amines"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Rarely, paradoxical bronchospasm may occur "}, {text: "Do not exceed recommended dose; serious adverse events, including fatalities, have been associated with excessive use of inhaled sympathomimetics "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Cardiovascular disease "}, {text: "Diabetes mellitus "}, {text: "Glaucoma"}, {text: "Hyperthyroidism "}, {text: "Hypokalemia"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Diaphoresis, dizziness, drowsiness, headache, hyperglycemia, hypertension, hypokalemia, insomnia, muscle cramps, nausea, nervousness, restlessness, tachycardia, tremor, vomiting, weakness, xerostomia \n\nRare: cardiac arrhythmia, chest pain, paradoxical bronchospasm"
  },
  {
    Drug: "Valproic Acid",
    USBlackBox: (
      <BulletList
        items={[{text: "Hepatic failure resulting in fatalities has occurred in patients, usually in the initial 6 months of therapy; children <2 years of age are at considerable risk."}, {text: "Valproate is contraindicated in patients known to have mitochondrial disorders caused by POLG mutations and children younger than 2 years who are clinically suspected of having a mitochondrial disorder. In patients >2 years, avoid as first line therapy. Older patients should be closely monitored during treatment for liver injury/failure."}, {text: "May have teratogenic effects. Only use in pregnant women as last resort. "}, {text: "Life-threatening pancreatitis has been reported. "}]}
      />
    ),
    Contraindications: (
      <BulletList
        items={[{text: "Hepatic disease or significant impairment "}, {text: "Known mitochondrial disorders"}, {text: "Prevention of migraine in pregnant women and women of childbearing potential who are not using effective contraception  "}, {text: "Urea cycle disorders"}]}
      />
    ),
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Hazardous agent (NIOSH 2016 [group 3]). Use appropriate precautions for receiving, handling, administration, and disposal.</Text>
        <BulletList
          items={[{text: "Neonates, infants, and children <2 years of age are at increased risk for hepatotoxicity/hepatic failure, especially with: anticonvulsant polytherapy, congenital metabolic disorders, seizure disorders, mental retardation, organic brain disease "}, {text: "Pediatric: Children <2 years: risk for fatal hepatotoxicity. Children all ages: Rare severe multi-organ hypersensitivity reactions have occurred in pediatric during therapy initiation. (DRESS)"}, {text: "Acute head trauma: Not recommended for post-traumatic seizure prophylaxis"}, {text: "Hepatic impairment: Contraindicated with significant impairment"}, {text: "Hypothermia: has been reported. May occur with concomitant topiramate therapy "}, {text: "Multiorgan hypersensitivity reactions (also known as DRESS) risk "}, {text: "Pancreatitis can occur at onset (may be life-threatening) "}, {text: "Suicidal ideation has been reported"}]}
        />
      </View>

    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Anxiety, arrhythmia, bleeding, cerebral and cerebellar atrophy, CNS depression, encephalopathy, dizziness, hyperammonemia, hypo/hypertension, hypothermia,  inhibition of platelet aggregation, muscle cramps, myelodysplasia, pancreatitis, skin rash, tachycardia, thrombocytopenia, tremors, viral replication"
  },
  {
    Drug: "Vancomycin",
    USBlackBox: "The formulation of vancomycin injection containing the excipients, polyethylene glycol (PEG 400) and N-acetyl D-alanine (NADA), is not recommended for use during pregnancy. PEG 400 and NADA have caused fetal malformations in animal reproduction studies. If use of vancomycin is needed during pregnancy, use other available formulations of vancomycin.",
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Irritant: avoid extravasation/thrombophlebitis"}, {text: "Do not use if pregnant "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Renal impairment; avoid concomitant nephrotoxic drugs"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication (intrathecal administration) among its list of drug classes which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Chills, drug fever, fatigue, flushing face/neck/trunk (Red man syndrome), headache, hypotension, nausea/vomiting/diarrhea, ototoxicity (with concomitant ototoxic drugs)"
  },
  {
    Drug: "Vecuronium Paralytic",
    USBlackBox: "Should be administered by adequately trained individuals familiar with its use.",
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Severe anaphylactic reactions have been reported; immediate treatment for anaphylactoid reactions should be available during use "}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Burn injury: Resistance may occur in burn patients (&ge;20% total body surface area) "}, {text: "Cardiovascular disease: (e.g., heart failure); delayed onset; prolonged duration"}, {text: "Hepatic impairment: prolonged duration"}, {text: "Respiratory disease "}, {text: "Conditions that may antagonize neuromuscular blockade  Demyelinating lesions Denervation Diabetes mellitus  Hypercalcemia Muscle trauma Peripheral neuropathies Respiratory alkalosis "}, {text: "Conditions that may potentiate neuromuscular blockade: Eaton-Lambert syndrome Severe electrolyte abnormalities Metabolic acidosis Myasthenia gravis  Neuromuscular diseases Respiratory acidosis "}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Rare: bradycardia, hypotension"
  },
  {
    Drug: "Xopenex",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Cardiovascular disease "}, {text: "Diabetes "}, {text: "Hyperthyroidism "}, {text: "Hypokalemia "}, {text: "Renal impairment "}, {text: "Seizures"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Arrhythmia, headache, hypersensitivity reaction, hypertension, muscle cramps, nervousness, paradoxical bronchospasm, tachycardia, tremor "
  },
  {
    Drug: "Sugammadex",
    USBlackBox: null,
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Should be administered by adequately trained individuals familiar with its use."}, {text: "After initial reversal with sugammadex, continue respiratory monitoring and ensure adequate ventilator support remains accessible following extubation."}, {text: "Slow IV push to reduce the incidence of serious adverse events (eg, bradycardia or asystole)"}, {text: "If pt on oral birth control, will need to use back up method for one week after sugammadex administration"}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Cardiovascular disease"}, {text: "Hepatic impairment, particularly if accompanied by coagulopathy or severe edema"}, {text: "Impaired hemostasis: Dose-dependent transient increases in activated partial thromboplastin time (aPTT) and normalized prothrombin time (PT [INR]) have been reported"}, {text: "Renal impairment (severe; CrCl <30 mL/minute or on dialysis): use not recommended"}]}
        />
      </View>
    ),
    ISMPHighAlert: null,
    AdditionalAdverseReactions: "Bradycardia, hypersensitivity reaction, hypo/hypertension, prolonged QT, recurrence of neuromuscular blockade, tachycardia "
  },
  {
    Drug: "Vecuronium",
    USBlackBox: "Should be administered by adequately trained individuals familiar with its use.",
    Contraindications: null,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Severe anaphylactic reactions have been reported; immediate treatment for anaphylactoid reactions should be available during use"}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[ {text: "Burn injury: Resistance may occur in burn patients (≥20% total body surface area)"}, {text: "Cardiovascular disease: (e.g., heart failure); delayed onset; prolonged duration"}, {text: "Hepatic impairment: prolonged duration"}, {text: "Respiratory disease"}]}
        />
        <Text style={styles.text}>Conditions that may <Text style={styles.bold}>antagonize</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Demyelinating lesions"}, {text: "Denervation"}, {text: "Diabetes mellitus"}, {text: "Hypercalcemia"}, {text: "Muscle trauma"}, {text: "Peripheral neuropathies"}, {text: "Respiratory alkalosis"}]}
        />
        <Text style={styles.text}>Conditions that may <Text style={styles.bold}>potentiate</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Eaton-Lambert syndrome"}, {text: "Severe electrolyte abnormalities"}, {text: "Metabolic acidosis"}, {text: "Myasthenia gravis"}, {text: "Neuromuscular diseases"}, {text: "Respiratory acidosis"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Bradycardia, hypersensitivity reaction, hypo/hypertension, prolonged QT, recurrence of neuromuscular blockade, tachycardia "
  },
  {
    Drug: "Rocuronium (Zemuron)",
    USBlackBox: null,
    Contraindications: <Text style={styles.text}>Hypersensitivity (e.g., anaphylaxis) to neuromuscular-blocking agents</Text>,
    SpecialPrecautions: (
      <View>
        <BulletList
          items={[{text: "Pediatric: Not recommended by the manufacturer for rapid sequence intubation in pediatric patients; however, it has been used successfully in clinical trials for this indication"}, {text: "Anaphylactoid/hypersensitivity reactions: Have been reported; immediate treatment for anaphylactoid reactions should be available during use"}, {text: "Neuromuscular cross-sensitivity: with other neuromuscular-blocking agents may occur; use is contraindicated in patients with previous anaphylactic reactions to other neuromuscular blockers"}, {text: "Prolonged paralysis: Patients should be adequately recovered prior to extubation"}]}
        />
        <Text style={styles.text}>Use with caution in:</Text>
        <BulletList
          items={[{text: "Burn injury: Resistance may occur in burn patients (≥20% of total body surface area)"}, {text: "Cardiovascular disease: (e.g., heart failure); delayed onset; prolonged duration"}, {text: "Hepatic impairment: prolonged duration"}, {text: "Pulmonary hypertension"}, {text: "Respiratory disease"}, {text: "Valvular heart disease"}]}
        />
        <Text style={styles.text}> Conditions that may <Text style={styles.bold}>antagonize</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Demyelinating lesions"}, {text: "Denervation"}, {text: "Diabetes mellitus"}, {text: "Hypercalcemia"}, {text: "Muscle trauma"}, {text: "Peripheral neuropathies"}, {text: "Respiratory alkalosis"}]}
        />
        <Text style={styles.text}> Conditions that may <Text style={styles.bold}>potentiate</Text> neuromuscular blockade:</Text>
        <BulletList
          items={[{text: "Eaton-Lambert syndrome"}, {text: "Severe electrolyte abnormalities"}, {text: "Metabolic acidosis"}, {text: "Myasthenia gravis"}, {text: "Neuromuscular diseases"}, {text: "Respiratory acidosis"}]}
        />
      </View>
    ),
    ISMPHighAlert: "The Institute for Safe Medication Practices (ISMP) includes this medication among its list of drugs which have a heightened risk of causing significant patient harm when used in error.",
    AdditionalAdverseReactions: "Bradycardia, hypersensitivity reaction, hypo/hypertension, prolonged QT, recurrence of neuromuscular blockade, tachycardia "
  }
];
