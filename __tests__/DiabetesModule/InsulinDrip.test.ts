import {getInsulinDripConf} from '../../src/Modules/Diabetes/screens/InsulinDrip/config'

interface TestCase {
    weight: number;
    expectedDose: string;
};

const getTestData = (): TestCase [] => {
    const generatedTestCases: TestCase [] = [];
    const weights = [2, 2.5, 5, 8, 9.5, 10, 12, 15, 20, 25, 30, 35, 40, 50, 60, 80, 100];
    const calculateDose = (weight: number): string => {
        return (Math.round(0.1 * weight * 10) / 10).toFixed(1)
    };
    weights.forEach(weight => {
        generatedTestCases.push(
            {weight: weight, expectedDose: calculateDose(weight)}
        );
    });
    return generatedTestCases
};

describe('Insulin Drip Screen tests', () => {
    const testCases = getTestData();

    testCases.forEach(testCase => {
        it(`Insulin Drip calculation for weight ${testCase.weight}`, () => {
            const InsulinDripResult = getInsulinDripConf(testCase.weight.toString());
    
            expect(InsulinDripResult.treatmentTitle).toBe('Insulin Drip');
            expect(InsulinDripResult.administrationType).toBe('IV');
            expect(InsulinDripResult.administrationTypeColor).toBe('#3F51B5');
            expect(InsulinDripResult.recommendationText).toBe('Target to keep BG between 150-250 mg/dL');
            expect(InsulinDripResult.nextButtonText).toBe('Next: Insulin Drip & IVF Titration');
            expect(InsulinDripResult.suggestedDose).toBe(testCase.expectedDose);
            expect(InsulinDripResult.units).toBe('units/hr');
            expect(InsulinDripResult.comments).toContainEqual(
                {text: 'Check POC blood glucose and titrate dextrose content and insulin infusion rate as needed.'}
            );
            expect(InsulinDripResult.comments).toContainEqual(
                {text: 'Titration instructions are on following slides.'}
            );
        });
    });
});