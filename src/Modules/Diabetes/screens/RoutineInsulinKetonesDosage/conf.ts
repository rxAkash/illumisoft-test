export const calculateKetonesDosage = (tdd: string, ketoneLevel?: number) => {
  if (!tdd) return '-';

  if (ketoneLevel === 0) {
    return Math.round(parseFloat(tdd) * 0.1);
  } else if (ketoneLevel === 1) {
    return Math.round(parseFloat(tdd) * 0.2);
  }
  return '-';
};

export const calculateRaiDoseForKetoneCarbs = (carbConsumed: string, carbRatio: string, ketonesDose: string) => {
  if (!carbConsumed || !carbRatio || !ketonesDose || ketonesDose === '-') {
    return '-';
  }

  const inputOne = parseFloat(carbConsumed) / parseFloat(carbRatio)
  const inputTwo = parseFloat(ketonesDose)
  if (typeof inputTwo == 'number') {
    // Round to nearest half
    const result = (Math.round((inputOne + inputTwo) * 2) / 2).toFixed(1);
    return parseFloat(result) > 0.0 ? result : '0.0';
  } else {
    return '-';
  }
};

export const TREATMENT_CONSIDERATIONS = [
  {text: 'No eating until ketones are cleared.'},
  {text: 'Presence of ketones may be suggestive of DKA.'},
  {text: 'If on an insulin pump, have patient change infusion site.  Give ketone correction by SQ injection.  NOT through pump.'},
  {text: 'May repeat ketone dosing up to every 2 hours'},
  {text: 'If complaining of abdominal pain or vomiting, consider following DKA module recommendations'},
]