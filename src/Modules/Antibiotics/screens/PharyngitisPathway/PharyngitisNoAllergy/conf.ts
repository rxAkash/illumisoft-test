export const TREATMENT_NO_ALLERGY_CONF = {
  shouldShowFirstLineHeader: false,
  treatment: 'Amoxicillin',
  duration: ['Treatment Duration: 10 days'],
  alternateTreatment: 'Penicillin G Benzathine OR Penicillin VK',
  alternateDuration: 'See dosing below',
  expanded: [
    {
      medicine: 'Amoxicillin',
      dose: '50 mg/kg/dose PO Q24H',
      max: 'Max 1000 mg/day',
    },
    {
      medicine: 'Penicillin G Benzathine',
      dose: '≤ 27 kg: 600,000 units IM once',
      max: '> 27 kg: 1.2 million units IM once',
      duration: 'Treatment duration: 1 dose',
    },
    {
      medicine: 'Penicillin VK',
      dose: '≤ 27 kg: 250 mg PO Q8-12H',
      max: '> 27 kg: 500 mg PO Q8-12H',
      duration: 'Treatment Duration: 10 days',
    },
  ],
}