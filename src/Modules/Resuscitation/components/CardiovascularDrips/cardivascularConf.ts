export const CARDIOVASCULAR_DRIPS = [
  {
    drugText: 'Dopamine',
    concentration: { 1600: '1600', 3200: '3200' },
    doseContent: 
      { 5: '5', 7.5: '7.5', '10.0': '10', 12.5: '12.5', '15.0': '15', 17.5: '17.5', '20.0': '20' },
    rateMassLimit: null
  },
  {
    drugText: 'Dobutamine',
    concentration: { 2000: '2000', 4000: '4000' },
    doseContent:
      { 5: '5', 7.5: '7.5', '10.0': '10', 12.5: '12.5', '15.0': '15', 17.5: '17.5', '20.0': '20' },
    rateMassLimit: null
  },
  {
    drugText: 'Epinephrine',
    concentration: { 16: 16, 32: 32 },
    doseContent: 
      {
        0.05: '0.05',
        0.06: '0.06',
        0.07: '0.07',
        0.08: '0.08',
        0.09: '0.09',
        0.1: '0.1',
        0.2: '0.2',
        0.3: '0.3',
        0.4: '0.4',
        0.5: '0.5',
        0.6: '0.6',
        0.7: '0.7',
        0.8: '0.8',
        0.9: '0.9',
        '1.0': '1',
      },
    rateMassLimit: null
  },
  {
    drugText: 'Norepinephrine',
    concentration: { 16: 16, 32: 32 },
    doseContent: 
      {
        0.05: '0.05',
        0.06: '0.06',
        0.07: '0.07',
        0.08: '0.08',
        0.09: '0.09',
        0.1: '0.1',
        0.2: '0.2',
        0.3: '0.3',
        0.4: '0.4',
        0.5: '0.5',
        0.6: '0.6',
        0.7: '0.7',
        0.8: '0.8',
        0.9: '0.9',
        '1.0': '1',
      },
    rateMassLimit: null
  },
  {
    drugText: 'Milrinone',
    concentration: { 200: 200 },
    doseContent: { 0.25: '0.25', 0.5: '0.5', 0.75: '0.75' },
    rateMassLimit: null
  },
  {
    drugText: 'Lidocaine',
    concentration: { 8000: 8000 },
    doseContent: { 20: '20', 25: '25', 30: '30', 35: '35', 40: '40', 45: '45', 50: '50' },
    rateMassLimit: 240000
  },
  {
    drugText: 'Alprostadil (Prostaglandin)',
    concentration: { 20: 20 },
    doseContent: { 0.05: '0.05', 0.06: '0.06', 0.07: '0.07', 0.08: '0.08', 0.09: '0.09', 0.1: '0.1' },
    rateMassLimit: null
  },
];

export const DOSE_UNIT_DUMMY_OPTION = [{
  title: 'mcg/kg/min',
  value: 'mcg/kg/min'
}];

export const CONCENT_UNIT_DUMMY_OPTION = [{
  title: 'mcg/mL',
  value: 'mcg/mL'
}]