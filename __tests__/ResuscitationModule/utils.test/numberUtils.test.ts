import { roundToNearestHalf } from '../../../src/utils/numberUtils';

describe('roundToNearestHalf function', () => {
    const cases = [
        {value: '0', expectedResult: 0},
        {value: '1', expectedResult: 1},
        {value: '0.1', expectedResult: 0.5},
        {value: '0.4', expectedResult: 0.5},
        {value: '0.5', expectedResult: 0.5},
        {value: '0.6', expectedResult: 1},
        {value: '0.9', expectedResult: 1},
        {value: '1.11', expectedResult: 1.5},
        {value: '1.49', expectedResult: 1.5},
        {value: '1.601', expectedResult: 2},
        {value: '1.999', expectedResult: 2},
        {value: '2.0', expectedResult: 2},
    ];
    cases.forEach(testCase => {
        it(`should round ${testCase.value} to ${testCase.expectedResult}`, () => {
            const funcResult = roundToNearestHalf(testCase.value);

            expect(funcResult).toBe(testCase.expectedResult);
        });
    });
});