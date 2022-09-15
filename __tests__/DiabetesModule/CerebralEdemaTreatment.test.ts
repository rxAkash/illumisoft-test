import {getMannitolConfig, getHypertonicSalineConfig} from '../../src/Modules/Diabetes/screens/CerebralEdemaTreatment/conf'

interface TestCaseData {
    weight: string;

    expectedLowDosage: string;
    expectedLowVolume: string;
    
    expectedMidDosage: string;
    expectedMidVolume: string;
    
    expectedHighDosage: string;
    expectedHighVolume: string;

    expectedMaxDose?: number;
}

const getTestData = (): {MannitolCases: TestCaseData [], hypertonicSalineCases: TestCaseData []} => {
    const roundToTwo = (num: number): number => {
        const decimals = 2;
        return Number(Math.round(Number(num + 'e' + decimals)) + 'e-' + decimals);
    };
    const calculateMannitolDosage = (weight: number, dosage: number) => {
        const dose = ((0.5 * weight * dosage * 10) / 10)
        if (dose % 1 === 0) {
            return Number(dose).toString();
        };
        return dose.toString();
    };
    const calculateHypertonicSalineDosage = (weight: number, dosage: number) => {
        return Math.min(5 * weight * dosage, 500).toString();
    };
    const calculateMannitolDoseVolume = (dose: string) => {
        return roundToTwo(Number.parseFloat(dose) / 0.2).toString()
    };
    const calculateHypertonicSalineDoseVolume = (dose: string, maxDose: number) => {
        return Math.min(roundToTwo(Number.parseFloat(dose) / 1), maxDose).toString();
    };
    let generatedMannitolTestCases: TestCaseData [] = [];
    let generatedHypertonicSalineTestCases: TestCaseData [] = [];
    const weights = [2, 2.5, 5, 8, 9.5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80];

    weights.forEach(weight => {
        generatedMannitolTestCases.push({
            weight: weight.toString(),
            expectedLowDosage: calculateMannitolDosage(weight, 1),
            expectedLowVolume: calculateMannitolDoseVolume(calculateMannitolDosage(weight, 1)),
            expectedMidDosage: calculateMannitolDosage(weight, 1.5),
            expectedMidVolume: calculateMannitolDoseVolume(calculateMannitolDosage(weight, 1.5)),
            expectedHighDosage: calculateMannitolDosage(weight, 2),
            expectedHighVolume: calculateMannitolDoseVolume(calculateMannitolDosage(weight, 2)),
        });
    });
    weights.forEach(weight => {
        const maxDose = 500;
        generatedHypertonicSalineTestCases.push({
            weight: weight.toString(),
            expectedLowDosage: calculateHypertonicSalineDosage(weight, 1),
            expectedLowVolume: calculateHypertonicSalineDoseVolume(calculateHypertonicSalineDosage(weight, 1), maxDose),
            expectedMidDosage: calculateHypertonicSalineDosage(weight, 1.5),
            expectedMidVolume: calculateHypertonicSalineDoseVolume(calculateHypertonicSalineDosage(weight, 1.5), maxDose),
            expectedHighDosage: calculateHypertonicSalineDosage(weight, 2),
            expectedHighVolume: calculateHypertonicSalineDoseVolume(calculateHypertonicSalineDosage(weight, 2), maxDose),
            expectedMaxDose: maxDose
        });
    });

    return {MannitolCases: generatedMannitolTestCases, hypertonicSalineCases: generatedHypertonicSalineTestCases}
}

describe('Cerebral Edema Treatment Screen tests', () => {
    const TestCases = getTestData();
    TestCases.MannitolCases.forEach((param: TestCaseData) => {
        it(`Mannitol calculation for weight: ${param.weight}`, () => {
            const MannitolResult = getMannitolConfig(param.weight);

            expect(MannitolResult.treatmentTitle).toBe('Mannitol');
            expect(MannitolResult.administrationConcentration).toBe('0.2g/mL(200mg/mL)');
            expect(MannitolResult.administrationType).toBe('IV');
            expect(MannitolResult.administrationTypeColor).toBe('#3F51B5');
            expect(MannitolResult.hasWarning).toBe(true);

            expect(MannitolResult.suggestedLowDose).toBe(param.expectedLowDosage);
            expect(MannitolResult.suggestedModerateDose).toBe(param.expectedMidDosage);
            expect(MannitolResult.suggestedHighDose).toBe(param.expectedHighDosage);

            expect(MannitolResult.suggestLowVolume).toBe(param.expectedLowVolume);
            expect(MannitolResult.suggestModerateVolume).toBe(param.expectedMidVolume);
            expect(MannitolResult.suggestHighVolume).toBe(param.expectedHighVolume);

            expect(MannitolResult.recommendationText).toBe('Administer over 20 minutes');
            expect(MannitolResult.units).toBe('grams');
            expect(MannitolResult.dosageType).toBe(2);

            expect(MannitolResult.comments).toContainEqual({
                text: 'Unless otherwise noted, start with low dose and titrate to response'
            });
            expect(MannitolResult.comments).toContainEqual({
                text: 'Infuse no faster than 5 mL/kg/hour'
            });
            expect(MannitolResult.comments).toContainEqual({
                text: 'For emergent correction of hypnoatremic seizure or increased intracranial pressure'
            });
        });
    });
    TestCases.hypertonicSalineCases.forEach((param: TestCaseData) => {
        it(`Hypertonic Saline calculation for weight: ${param.weight}`, () => {
            const hypertonicSalineResult = getHypertonicSalineConfig(param.weight);

            expect(hypertonicSalineResult.treatmentTitle).toBe('Hypertonic (3%) Saline');
            expect(hypertonicSalineResult.administrationConcentration).toBe('3%');
            expect(hypertonicSalineResult.administrationType).toBe('IV');
            expect(hypertonicSalineResult.administrationTypeColor).toBe('#3F51B5');
            expect(hypertonicSalineResult.hasWarning).toBe(true);

            expect(hypertonicSalineResult.suggestedLowDose).toBe(param.expectedLowDosage);
            expect(hypertonicSalineResult.suggestedModerateDose).toBe(param.expectedMidDosage);
            expect(hypertonicSalineResult.suggestedHighDose).toBe(param.expectedHighDosage);

            expect(hypertonicSalineResult.suggestLowVolume).toBe(param.expectedLowVolume);
            expect(hypertonicSalineResult.suggestModerateVolume).toBe(param.expectedMidVolume);
            expect(hypertonicSalineResult.suggestHighVolume).toBe(param.expectedHighVolume);

            expect(hypertonicSalineResult.maxDose).toBe(param.expectedMaxDose)

            expect(hypertonicSalineResult.recommendationText).toBe('Administer over 30 minutes');
            expect(hypertonicSalineResult.units).toBe('mL');
            expect(hypertonicSalineResult.dosageType).toBe(2);

            expect(hypertonicSalineResult.comments).toContainEqual({
                text: 'Unless otherwise noted, start with low dose and titrate to response'
            });
            expect(hypertonicSalineResult.comments).toContainEqual({
                text: 'Infuse no faster than 5 mL/kg/hour'
            });
            expect(hypertonicSalineResult.comments).toContainEqual({
                text: 'For emergant correction of hyponatremic seizure or increased intracranial pressure'
            });
        });
    });
});

