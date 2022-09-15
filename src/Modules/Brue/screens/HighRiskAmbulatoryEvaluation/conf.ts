export const CARD_SECTIONS = [
  {
    title: 'Initial Evaluation: Ambulatory setting monitoring',
    items: [{
      text: 'Continuous pulse oximetry monitoring for 4 hours'
    }]
  },
  {
    title: 'Consultation',
    items: [{
      text: "Social work screen for child abuse, social and mental health contributors",
      subitems: [{
        text: 'Provide parenting support'
      }]
    }, {
      text: 'Feeding specialist evaluation (if available)'
    }]
  },
  {
    title: 'Diagnostic Testing',
    items: [{
      text: 'ECG'
    }, {
      text: 'Rapid viral respiratory panel'
    },  {
      text: 'Serum glucose',
    }, {
      text: 'Bicarbonate',
    }, {
      text: 'Lactic acid',
    }, {
      text: 'Hematocrit',
    }, {
      text: 'Pertussis in under-immunized/exposed patient in endemic regions outbreaks',
      subitems: [{text:'This assumes availability of pertussis results within a few hours'}],
    }, {
      text: 'If concern for child abuse (e.g., bruising, torn frenulum, concerning history, etc.), then CT or MRI of head, skeletal survey, consultation with child abuse expert',
    }]
  }
]