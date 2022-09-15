export const calculateResults = (selectedDose: string, patientWeightKg: number, selectedConcentration: string) => {
    const CONSTANT = 60;
    const result = (parseFloat(selectedDose) * patientWeightKg * CONSTANT) / parseFloat(selectedConcentration);
    return Math.round((result + Number.EPSILON) * 100) / 100;
};
