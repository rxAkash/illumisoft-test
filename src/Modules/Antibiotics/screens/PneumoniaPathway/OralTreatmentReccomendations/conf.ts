export const ORAL_TREATMENT_CONF = {
  shouldShowTreatmentHeader: false,
  shouldShowTreatmentHeaderSeparator: false,
  shouldShowFirstLineHeader: false,
  expanded: [
    {
      medicine: 'Amoxicillin',
      dose: '40-50 mg/kg/dose PO Q12H',
      max: 'Max 4000 mg/day',
      duration: 'Treatment Duration: 5-7 days',
      notes: [
        'Assess whether the patient has had 2 or more doses of the H. influenzae type B (HiB) vaccine and consider the risk for invasive H. influenzae B disease.​',
      ],
    },
  ],
  alternative: [
    {
      infoDetail: ' for patients who are not fully immunized',
      medicine: 'Amoxicillin-Clavulanate',
      dose: '40-50 mg/kg/dose amoxicillin component PO Q12H',
      max: 'Max 4000 mg amoxicillin component/day',
      notes: [
        'Assess whether the patient has had 2 or more doses of the H. influenzae type B (HiB) vaccine and consider the risk for invasive H. influenzae B disease.​',
        'Amoxicillin-Clavulanate ES (600mg/5mL) is the preferred suspension. For pills, use 1000mg XR tablets due to risk of developing diarrhea with higher clavulanate dosages.',
      ],
    },
  ],
}