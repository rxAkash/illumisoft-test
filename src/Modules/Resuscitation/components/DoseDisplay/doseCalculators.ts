export const calculatePatientDose = (weight: number, dose: number, maxDose: number) => {
  const lowDoseMass = dose * weight;
  if(maxDose && lowDoseMass >= maxDose) {
    return {
      dose: maxDose,
      max: true
    };
  }
  return {
    dose: Math.round((lowDoseMass + Number.EPSILON) * 100) / 100,
    max: false
  }
}

export const calculateVolumeOnly = (
  patientDose: number | undefined, 
  concentration: number,
  units: string,
  concentrationUnit: string
) => {
  if(concentrationUnit === '%') {
    return `${patientDose} ${units}`;
  }
  if(patientDose) {
    const result = Math.round((patientDose / concentration)*100 + JS_DIVISION_OFFSET)/100
    return result ? `${result} ${units}` : ''
  }
  return ''
}

const JS_DIVISION_OFFSET = 0.001;