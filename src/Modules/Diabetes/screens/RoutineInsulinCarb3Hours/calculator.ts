export const calcualteRapidActingInsulinDose = (carbConsumed: string, carbRatio: string, currentBG: string, targetBG: string, isf: string) => {
  if (!carbConsumed || !carbRatio || !currentBG || !targetBG || !isf) {
    return '-';
  }
  const inputOne = parseFloat(carbConsumed) / parseFloat(carbRatio);
  const inputTwo =
    (parseFloat(currentBG) - parseFloat(targetBG)) / parseFloat(isf);
  // Round to nearest half
  const result = (Math.round((inputOne + inputTwo) * 2) / 2).toFixed(1);
  return parseFloat(result) > 0.0 ? result : '0.0';
};

export const calculateRaiDoseWithoutCarbInfo = (currentBG: string, targetBG: string, isf: string) => {
  if (!currentBG || !targetBG || !isf) {
    return '-';
  }

  const bgDifference = parseFloat(currentBG) - parseFloat(targetBG);
  const result = (
    Math.round((bgDifference / parseFloat(isf)) * 2) / 2
  ).toFixed(1);
  return parseFloat(result) > 0.0 ? result : '0.0';
};
