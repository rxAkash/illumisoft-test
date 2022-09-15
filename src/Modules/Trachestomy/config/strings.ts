export const trachText = {
  home: {
    title: `Proceed to Emergency Algorithm`,
    prompt: 'Choose specific topic'
  },
  emergencyAlgorithm: {
    title: 'Begin Emergency Algorithm',
    question: "Is there a tracheostomy tube in place?",
  },
  insertSameTube: {
    title: "Insert same tube or clean spare tube of same size"
  },
  attemptToPassSuctionCatheter: {
    title: "Attempt to pass suction catheter",
    noText: "Tracheostomy Tube Obstruction is Likely",
  },
  tracheostomyTubeChange: {
    title: "Perform tracheostomy tube change",
  },
  insertSmallerTracheostomyTube: {
    title: "Insert next size smaller tracheostomy tube",
  },
  childWithPersistentDistress: {
    title: "Child with patent trach in place with persistent respiratory distress",
    question: "Is the child responsive?",
  },
  thankYou: {
    title: "Thank you for using the Tracheostomy Emergency Algorithm",
    dropdownTitle1: "Oxygen Administration",
    dropdownTitle2: "Inhaled Medications",
    drawerText1: "If no trach tube in place and no history of critical upper airway, cover stoma and provide oxygen over mouth and nose with mask. Assess clinical response closely as patient may respond better to supplemental oxygen via trach mask over the stoma.",
    drawerText2: "If no trach tube in place and no history of critical upper airway, cover stoma and provide inhaled medication if needed over mouth and nose with mask. Assess clinical response closely as patient may respond better to inhaled medications via trach mask over the stoma.",
    btnTitle: "Restart Algorithm"
  },
  childWithNoTrach: {
    title: "Child with NO trach in place",
    warning: "Transport to nearest Emergency Department for Evaluation while providing Rescue Breathing."
  },
  rescueBreathing: {
    backHeaderTitle: 'Rescue Breathing: Child with patent trach in place',
    title: "Transport to nearest Emergency Department for Evaluation while providing respiratory support:",
    dropdownTitle1: "Oxygen Administration",
    dropdownTitle2: "Inhaled Medications",
    drawerText1: "• If no trach tube in place and no history of critical upper airway, cover stoma and provide oxygen over mouth and nose with mask. Assess clinical response closely as patient may respond better to supplemental oxygen via trach mask over the stoma.",
    drawerText2: "• Always provide inhaled medications through the trach tube when it is in place and patent.",
    btnTitle: "Child is Non-Responsive"
  },
  rescueBreathingWithAirwayObstruction: {
    backHeaderTitle: 'Rescue Breathing without trach tube, child WITH known upper airway obstruction',
    title: "Transport to nearest Emergency Department for Evaluation while providing respiratory support:",
    dropdownTitle1: "Supplemental Oxygen Administration",
    dropdownTitle2: "Inhaled Medications",
    drawerText1: "• If no tracheostomy tube is in place, and child has a known critical upper airway, always provide passive supplemental oxygen with trach mask over the stoma.",
    drawerText2: "• If no tracheostomy tube is in place, and child has a known critical upper airway, provide inhaled medications with trach mask over the stoma.",
    btnTitle: "Child is Non-Responsive"
  },
  rescueBreathingNoAirwayObstruction: {
    backHeaderTitle: 'Rescue Breathing without trach tube, child WITH NO known upper airway obstruction ',
    title: "Transport to nearest Emergency Department for Evaluation while providing respiratory support:",
    dropdownTitle1: "Supplemental Oxygen Administration",
    dropdownTitle2: "Inhaled Medications",
    drawerText1: "• If no trach tube in place and no history of critical upper airway, cover stoma and provide oxygen over mouth and nose with mask. Assess clinical response closely as patient may respond better to supplemental oxygen via trach mask over the stoma.",
    drawerText2: "• If no trach tube in place and no history of critical upper airway, cover stoma and provide inhaled medications if needed over mouth and nose with mask. Assess clinical response closely as patient may respond better to inhaled medications via trach mask over the stoma.",
    btnTitle: "Child is Non-Responsive",
    btnTitle2: 'Unable to establish Patent Airway Bagging over Mouth and Nose with covered stoma'
  },
  nonResponsiveChildWithTrach: {
    title: "Non-responsive child with trach in place",
    Q1: "Feel for pulse for no more than 10 seconds",
    btnTitle1: "Pulse < 60",
    btnTitle2: "Pulse > 60"
  },
  nonResponsiveChildNoTrach: {
    title: "Non-responsive child with NO trach in place"
  },
  nonResponsiveChildAirwayObstruction: {
    withTitle: "Non-responsive child with KNOWN upper airway obstruction and NO trach in place",
    noTitle: "Non-responsive child with NO known upper airway obstruction and NO trach in place",
    question: "Feel for pulse for no more than 10 seconds",
    btnTitle1: "Pulse < 60",
    btnTitle2: "Pulse > 60"
  },
  CPRairwayObfuscation: {
    knownTitle: "CPR with KNOWN upper airway obstruction and NO trach in place",
    noKnownTitle: "CPR with NO known upper airway obstruction and NO trach in place",
    btnText: "Go to Resuscitation Module",
    listBoldText: "Begin immediate, high-quality CPR",
    infoText:"If unable to establish Patent Airway Bagging over mouth and nose with covered stoma, bag over the stoma with neonatal mask",
  },
  cPRWithTrachInPlace: {
    backHeaderTitle: "CPR with Trach in Place",
    btnText: "Go to Resuscitation Module",
    listBoldText: "Begin immediate, high-quality CPR: Trach Tube in Place"
  },
};
