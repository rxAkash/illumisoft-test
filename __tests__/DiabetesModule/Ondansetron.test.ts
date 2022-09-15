import {getOndansetronIVConf, getOndansetronPoOralConf} from '../../src/Modules/Diabetes/screens/Ondansetron/conf';

interface ExpectedDose {
    expectedDose?: number;
    expectedLowDose?: number;
    expectedMidDose?: number;
};

interface TestCase {
    weight: string;

    expectedTitle: string;
    expectedRecomendationText: string;
    expectedAdministrationType: string;
    expectedAdministrationTypeColor: string;

    expectedDosages: ExpectedDose;
    expectedSingleDose: boolean;
    expectedMax: number;
    expectedUnits: string;
    expectedDosageType?: number;

    expectedComments: {text: string} [];
};

const getTestData = () => {
    let testCases: {ondansetronIv: TestCase [], ondansetronPoOral: TestCase []} = {ondansetronIv: [], ondansetronPoOral: []};
    const weights = [2, 2.5, 5, 8, 9.5, 10, 12, 14, 15, 16, 20, 25, 29, 30, 31, 35, 40, 50, 60, 80, 100];
    const calculateIvDose = (dose: number, weight: number) => {
        const CalculatedDosage = Math.min(dose * weight, 8);
        return Math.round(100 * CalculatedDosage) / 100;
    };
    const calculatePoOrlaDose = (weight: number) => {
        if (weight < 10) {
            return undefined;
          } else if (weight >= 10 && weight < 15) {
            return 2;
          } else if (weight >= 15 && weight < 30) {
            return 4;
          } else if (weight >= 30) {
            return 8;
          };
    };

    weights.forEach(weight => {
        testCases.ondansetronIv.push({
            weight: weight.toString(),
            expectedTitle: 'Ondansetron',
            expectedRecomendationText: 'Dosing for Nausea/Vomiting*',
            expectedAdministrationType: 'IV',
            expectedAdministrationTypeColor: '#3F51B5',
            expectedDosages: {expectedLowDose: calculateIvDose(0.15, weight), expectedMidDose: calculateIvDose(0.3, weight)},
            expectedSingleDose: true,
            expectedUnits: 'mg',
            expectedMax: 8,
            expectedDosageType: 2,
            expectedComments: [
                {text: '* Please note that Ondansetron dosing is not required for treatment, but should be considered for patients with intractable vomiting or nausea.'}
            ]
        });
        testCases.ondansetronPoOral.push({
            weight: weight.toString(),
            expectedTitle: 'Ondansetron',
            expectedRecomendationText: 'Dosing for Nausea/Vomiting*',
            expectedAdministrationType: 'PO-Oral',
            expectedAdministrationTypeColor: '#BF360C',
            expectedDosages: {expectedDose: calculatePoOrlaDose(weight)},
            expectedSingleDose: true,
            expectedUnits: 'mg',
            expectedMax: 8,
            expectedComments: [
                {text: '* Please note that Ondansetron dosing is not required for treatment, but should be considered for patients with intractable vomiting or nausea.'}
            ]
        });
    });
    return testCases
}

describe('Ondansetron Screen tests', () => {
    const TestCases = getTestData();
    TestCases.ondansetronIv.forEach(testCase => {
        it(`Ondansetron IV calculation test with weight ${testCase.weight}`, () => {
            const OndansetronResult = getOndansetronIVConf(testCase.weight);
            
            expect(OndansetronResult.treatmentTitle).toBe(testCase.expectedTitle);
            expect(OndansetronResult.recommendationText).toBe(testCase.expectedRecomendationText);
            expect(OndansetronResult.administrationType).toBe(testCase.expectedAdministrationType);
            expect(OndansetronResult.administrationTypeColor).toBe(testCase.expectedAdministrationTypeColor);

            expect(OndansetronResult.suggestedLowDose).toBe(testCase.expectedDosages.expectedLowDose);
            expect(OndansetronResult.suggestedModerateDose).toBe(testCase.expectedDosages.expectedMidDose);
            expect(OndansetronResult.singleDose).toBe(testCase.expectedSingleDose);
            expect(OndansetronResult.max).toBe(testCase.expectedMax);
            expect(OndansetronResult.units).toBe(testCase.expectedUnits);
            expect(OndansetronResult.dosageType).toBe(testCase.expectedDosageType);
            testCase.expectedComments.forEach(expectedComment => {
                expect(OndansetronResult.comments).toContainEqual(expectedComment);
            });
        });
    });
    TestCases.ondansetronPoOral.forEach(testCase => {
        it(`Ondansetron IV calculation test with weight ${testCase.weight}`, () => {
            const OndansetronResult = getOndansetronPoOralConf(testCase.weight);

            expect(OndansetronResult.treatmentTitle).toBe(testCase.expectedTitle);
            expect(OndansetronResult.recommendationText).toBe(testCase.expectedRecomendationText);
            expect(OndansetronResult.administrationType).toBe(testCase.expectedAdministrationType);
            expect(OndansetronResult.administrationTypeColor).toBe(testCase.expectedAdministrationTypeColor);

            expect(OndansetronResult.suggestedDose).toBe(testCase.expectedDosages.expectedDose);
            expect(OndansetronResult.singleDose).toBe(testCase.expectedSingleDose);
            expect(OndansetronResult.max).toBe(testCase.expectedMax);
            expect(OndansetronResult.units).toBe(testCase.expectedUnits);
            testCase.expectedComments.forEach(expectedComment => {
                expect(OndansetronResult.comments).toContainEqual(expectedComment);
            });
        });
    });
});
