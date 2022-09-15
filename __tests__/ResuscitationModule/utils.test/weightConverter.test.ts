import { getConvertedWeightValue, getWeightInKg } from '../../../src/utils/weightConverter';

describe('getConvertedWeightValue function', () => {
    const cases = [
        {weightUnit: 'kg', weight: 0.5, expectedResult: '1.1 lbs'},
        {weightUnit: 'kg', weight: 1, expectedResult: '2.2 lbs'},
        {weightUnit: 'kg', weight: 1.5, expectedResult: '3.3 lbs'},
        {weightUnit: 'kg', weight: 2, expectedResult: '4.4 lbs'},
        {weightUnit: 'kg', weight: 3, expectedResult: '6.6 lbs'},
        {weightUnit: 'kg', weight: 5, expectedResult: '11.0 lbs'},
        {weightUnit: 'kg', weight: 10, expectedResult: '22.0 lbs'},
        {weightUnit: 'kg', weight: 100, expectedResult: '220.5 lbs'},

        {weightUnit: 'lbs', weight: 1, expectedResult: '0.5 kg'},
        {weightUnit: 'lbs', weight: 2, expectedResult: '0.9 kg'},
        {weightUnit: 'lbs', weight: 3, expectedResult: '1.4 kg'},
        {weightUnit: 'lbs', weight: 5, expectedResult: '2.3 kg'},
        {weightUnit: 'lbs', weight: 10, expectedResult: '4.5 kg'},
        {weightUnit: 'lbs', weight: 100, expectedResult: '45.4 kg'},
    ];
    cases.forEach(testCase => {
        it(`should convert ${testCase.weightUnit} ${testCase.weight}`, () => {
            const funcResult = getConvertedWeightValue(testCase.weightUnit, testCase.weight.toString());

            expect(funcResult).toBe(`(${testCase.expectedResult})`);
        });
    });
});

describe('getWeightInKg function', () => {
    const cases = [
        {weightUnit: 'lbs', weight: '1', expectedResult: 0.45},
        {weightUnit: 'lbs', weight: '1.5', expectedResult: 0.68},
        {weightUnit: 'lbs', weight: '2', expectedResult: 0.91},
        {weightUnit: 'lbs', weight: '3', expectedResult: 1.36},
        {weightUnit: 'lbs', weight: '5', expectedResult: 2.27},
        {weightUnit: 'lbs', weight: '10', expectedResult: 4.54},
        {weightUnit: 'lbs', weight: '100', expectedResult: 45.36},

        {weightUnit: 'kg', weight: '1', expectedResult: 1},
        {weightUnit: 'kg', weight: '1.5', expectedResult: 1.5},
        {weightUnit: 'kg', weight: '2', expectedResult: 2},
        {weightUnit: 'kg', weight: '5', expectedResult: 5},
        {weightUnit: 'kg', weight: '10', expectedResult: 10},
    ];
    cases.forEach(testCase => {
        it(`should convert weight ${testCase.weight} ${testCase.weightUnit} to kg`, () => {
            const funcResult = getWeightInKg(testCase.weight, testCase.weightUnit);

            expect(funcResult).toBe(testCase.expectedResult);
        });
    });
});