import {getBasalInsulinConfig} from '../../src/Modules/Diabetes/screens/BasalInsulin/config'
import {AGE_OPTIONS} from '../../src/Modules/Diabetes/config/dkaTreament'

interface TestCase {
    ageName: string;
    weight: string;
    expectedDose: number;
}

const generateTestCases = () => {
    let generatedTestCases: TestCase [] = [];
    const weights = [2, 2.5, 5, 8, 9.5, 10, 12, 15, 20, 25, 30, 35, 40, 50, 60, 80, 100];
    const ages = [
        {ageName: '1 month - 1.99 years', ageCoeficient: 0.2},
        {ageName: '2 - 4.99 years', ageCoeficient: 0.2},
        {ageName: '5 - 7.99 years', ageCoeficient: 0.3},
        {ageName: '8 - 10.99 years', ageCoeficient: 0.4},
        {ageName: '11+ years', ageCoeficient: 0.5},
    ];
    const calculateDose = (ageCoeficient: number, weight: number) => {
        return Math.round(ageCoeficient * weight)
    }
    weights.forEach(weight => {
        ages.forEach(age => {
            generatedTestCases.push(
                {ageName: age.ageName, weight: weight.toString(), expectedDose: calculateDose(age.ageCoeficient, weight)}
            );
        });
    });
    return generatedTestCases
};

describe('BasalInsulin Screen tests', () => {
    const testCases = generateTestCases();
    testCases.forEach(testCase => {
        it(`Calculate Basal Insulin for age: ${testCase.ageName}, weight ${testCase.weight}.`, () => {
            const BasalInsulinResult = getBasalInsulinConfig(testCase.weight, testCase.ageName);

            expect(BasalInsulinResult.treatmentTitle).toBe('Basal Insulin Glargine');
            expect(BasalInsulinResult.recommendationText).toBe('Administer SQ X1 now');
            expect(BasalInsulinResult.administrationType).toBe('SubQ');
            expect(BasalInsulinResult.administrationTypeColor).toBe('#880E4F');
            expect(BasalInsulinResult.suggestedDose).toBe(testCase.expectedDose);
            expect(BasalInsulinResult.units).toBe('units');
            expect(BasalInsulinResult.comments).toContainEqual(
                {text: 'Basal insulin is given to aid in transition of insulin drip. '}
            );
            expect(BasalInsulinResult.comments).toContainEqual(
                {text: 'If glargine is unavailable, recommend speaking with endocrinologist for dosing recommendations.'}
            );
        });
    });
});