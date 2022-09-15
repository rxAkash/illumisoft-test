export const calculateSuggestedVolume = (patientWeight: number) => patientWeight * 10;

export const calculateMaintanenceRate = (weight: number) => {
  if (weight < 10) return `${weight * 4}`;
  if (weight > 20) return `${weight + 40}`;
  return `${40 + 2 * (weight - 10)}`;
}

export const calculateMaintenanceRateOnePointFive = (weight: number) => 
  parseFloat(calculateMaintanenceRate(weight)) * 1.5


export const getSuggestedRatesCalculations = (weight: number, bloodGlucose: number) => {
  const maintenanceRateOnePointFive = calculateMaintenanceRateOnePointFive(weight);
  
  let nsBagRate: number;
  let d10BagRate: number;
  let finalDextroseConcentration: number;
  
  if (bloodGlucose > 249) {
    nsBagRate = maintenanceRateOnePointFive;
    d10BagRate = 0;
    finalDextroseConcentration = 0;
  } else if (bloodGlucose > 199) {
    nsBagRate = 0.5 * maintenanceRateOnePointFive;
    d10BagRate = 0.5 * maintenanceRateOnePointFive;
    finalDextroseConcentration = 5; // Displayed as a percent.  e.g. 5%
  } else if (bloodGlucose > 149) {
    nsBagRate = 0.25 * maintenanceRateOnePointFive;
    d10BagRate = 0.75 * maintenanceRateOnePointFive;
    finalDextroseConcentration = 7.5; // Displayed as a percent.  e.g. 7.5%
  } else {
    nsBagRate = 0;
    d10BagRate = maintenanceRateOnePointFive;
    finalDextroseConcentration = 10; // Displayed as a percent.  e.g. 10%
  }
  
  const insulinRate = roundToHalfUnit(weight * 0.05);
  const insulinRateOver79kg = (weight * 0.1).toFixed(1);
  
  return {
    regularInsulinRate: {
      result: insulinRate,
      suffix: 'units/hr',
    },
    regularInsulinRateOver79kg: {
      result: insulinRateOver79kg,
      suffix: 'units/hr',
    },
    nsBagRate: {
      result: nsBagRate,
      suffix: 'mL/hr',
    },
    d10BagRate: {
      result: d10BagRate,
      suffix: 'mL/hr',
    },
    finalDextroseConcentration: {
      result: finalDextroseConcentration,
      suffix: '%',
    },
  };
};
  
/**
   * Rounds a decimal number to the nearest half unit.
   *
   * @example roundToHalfUnit(1.49627) -> 1.5
   * @example roundToHalfUnit(1.86) -> 2.0
   *
   * @param {number} value The number being rounded.
   * @return {number}
   */
export const roundToHalfUnit = (value: number) => {
  const result = Math.round(value * 2) / 2;
  return result > 0.0 ? result : 0;
}