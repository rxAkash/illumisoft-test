
const LBS_MULTIPLYER = 2.2046226218;
const KG = 'kg';
const LBS = 'lbs';

export const getConvertedWeightValue = (unit: string, value: string) => {
  if(unit === KG) {
    const convertedValue = parseFloat(value) * LBS_MULTIPLYER
    return `(${convertedValue.toFixed(1)} ${LBS})`
  } else {
    const convertedValue = parseFloat(value) / LBS_MULTIPLYER
    return `(${convertedValue.toFixed(1)} ${KG})`
  }
}

export const getWeightInKg = (weight: string, unit: string) => {
  return unit === LBS ?
    Math.round((parseFloat(weight) / LBS_MULTIPLYER + Number.EPSILON) * 100) / 100
    : parseFloat(weight);
}