import PhysicalExam from "../screens/zeroToNinePathway/PhysicalExam";

export const headInjuryText = {
  home: {
    title: "Head Injury",
    heading1:"Pathways",
    headingSubtext: `Determine child’s Head Injury Risk and review treatment recommendations`,
  },
  twoToSeventeenPathway: {
    RiskStartication: {
      headerText: "Head Injury Risk Stratification: Injury History for mild Head Injury (GCS:15), Children 2-17 Years",
      title: "Does the patient have any of the following:",
      btnTitle: "Next"
    },
    RiskStartication2: {
      headerText: "Head Injury Risk Stratification: Injury History for mild Head Injury (GCS:15), Children 2-17 Years",
      title: "Do any of the following mechanisms of injury or historical circumstances apply:",
      btnTitle: "Proceed to Physical Exam"
    },
    PhysicalExam:{
      title:'Physical Exam 2-17 Years',
      question:'Do any of the following physical exam findings present:',
      btnTitle:'Proceed to Disposition Recommendations'
    },
    DisposistionRecommnedation:{
      parag1:'This child low risk for significant closed head injury',
      parag2:'May discharge home',
      parag3:'Return precautions: Seizures, does not awaken, unequal pupils',
      title:'Disposition Recommendations',
      months:'2-17 Years',
      btnTitle:'Restart Guideline'
    },
  },
  tenToTwentyThreePathway: {
    RiskStartication: {
      headerText: "Head Injury Risk Stratification: Injury History for mild Head Injury (GCS:15), Children 10-23 months",
      title: "Does the patient have any of the following:",
      btnTitle: "Next"
    },
    RiskStartication2: {
      headerText: "Head Injury Risk Stratification: Injury History for mild Head Injury (GCS:15), Children 10-23 months",
      title: "Do any of the following mechanisms of injury or historical circumstances apply:",
      btnTitle: "Proceed to Physical Exam"
    },
    PhysicalExam:{
      title:'Physical Exam 10-23 months',
      question:'Do any of the following physical exam findings present:',
      btnTitle:'Proceed to Disposition Recommendations'
    },
    DisposistionRecommnedation:{
      parag1:'This child low risk for significant closed head injury',
      parag2:'May discharge home',
      parag3:'Return precautions: Seizures, does not awaken, unequal pupils',
      title:'Disposition Recommendations',
      months:'10-23 months',
      btnTitle:'Restart Guideline'
    },
  },
  zeroToNinePathway: {
    GSC0:'PGCS: <8',
    GSC9:'PGCS: 9-13',
    GSC14:'PGCS: 14-15',
    PrimaryHiSurvey: {
      title: "Pediatric Head Injury Primary Survey",
      subtitle: "Select an assessment",
      btnTitle: "Proceed to Disability Assessment ",
    },
    DisablityAssessment: {
      title: "Disability Assessment: Altered Mental Status",
      btnTitle: "Proceed to Glasgow Coma Score"
    },
    RiskStartication: {
      headerText: "Head Injury Risk Stratification: Injury History for mild Head Injury (GCS:15), Children 0-9 months",
      title: "Does the patient have any of the following:",
      btnTitle: "Next"
    },
    RiskStartication2: {
      headerText: "Head Injury Risk Stratification: Injury History for mild Head Injury (GCS:15), Children 0-9 months",
      title: "Do any of the following mechanisms of injury or historical circumstances apply:",
      btnTitle: "Proceed to Physical Exam"
    },
    PhysicalExam:{
      title:'Physical Exam 0-9 months',
      question:'Do any of the following physical exam findings present:',
      btnTitle:'Proceed to Disposition Recommendations'
    },
    DisposistionRecommnedation:{
      parag1:'This child low risk for significant closed head injury',
      parag2:'May discharge home',
      parag3:'Return precautions: Seizures, does not awaken, unequal pupils',
      title:'Disposition Recommendations',
      months:'0-9 months',
      btnTitle:'Restart Guideline'
    },
    NeuroprotectiveMeasures: {
      title:'Neuroprotective measures prior to and during possible intubation',
      actions:'Actions:',
      btnTitle:'Assess for Intubation'
    },
    NeuroprotectiveMeasuresRapid: {
      title:'Neuroprotective Measures Rapid Sequence Intubation',
      important:'IMPORTANT:',
      btnTitle:'Restart Guideline',
      linkBtnTitle:'Link to Rapid Sequence Intubation'
    }
  },
  pediatricGlasgowScore: {
    title: 'Pediatric Glasgow Score Calculation Assistant',
    inputTitle: 'Pediatric Glasgow Coma\nScore Calculation',
    doYouKnowTheGCS: "Do you know the GCS?",
    inputLabel: 'Enter Modified PGCS Score',
    scoreTitle: 'Final Score Report',
    assistantButton: 'PGCS Calculation Assistant',
    next: 'Proceed to Further Assessments'
  }
}