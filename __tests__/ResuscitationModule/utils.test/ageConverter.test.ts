import { getAgeInMonth, getAgeInWeeks, getAgeInYears } from '../../../src/utils/ageConverter';

const ageUnits = {
    weeks: 'weeks',
    months: 'months',
    years: 'years'
};

describe('Get age in month', () => {
    const cases = [
        {age: 0, ageUnit: ageUnits.months, expectedResult: 0},
        {age: 1, ageUnit: ageUnits.months, expectedResult: 1},
        {age: 10, ageUnit: ageUnits.months, expectedResult: 10},
        {age: 99, ageUnit: ageUnits.months, expectedResult: 99},
        {age: 100, ageUnit: ageUnits.months, expectedResult: 100},

        {age: 0, ageUnit: ageUnits.weeks, expectedResult: 0},
        {age: 1, ageUnit: ageUnits.weeks, expectedResult: 0.25},
        {age: 4, ageUnit: ageUnits.weeks, expectedResult: 1},
        {age: 6, ageUnit: ageUnits.weeks, expectedResult: 1.5},
        {age: 8, ageUnit: ageUnits.weeks, expectedResult: 2},
        {age: 40, ageUnit: ageUnits.weeks, expectedResult: 10},

        {age: 0, ageUnit: ageUnits.years, expectedResult: 0},
        {age: 1, ageUnit: ageUnits.years, expectedResult: 12},
        {age: 2, ageUnit: ageUnits.years, expectedResult: 24},
        {age: 5, ageUnit: ageUnits.years, expectedResult: 60},
        {age: 10, ageUnit: ageUnits.years, expectedResult: 120},

        {age: 0, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 1, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 2, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 5, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 10, ageUnit: 'invalidAgeUnit', expectedResult: 0},
    ];
    cases.forEach(testCase => {
        it(`from ${testCase.age} ${testCase.ageUnit}`, () => {
            const funcResult = getAgeInMonth(testCase.age.toString(), testCase.ageUnit);

            expect(funcResult).toBe(testCase.expectedResult);
        });
    });
});

describe('Get age in weeks', () => {
    const cases = [
        {age: 0, ageUnit: ageUnits.weeks, expectedResult: 0},
        {age: 1, ageUnit: ageUnits.weeks, expectedResult: 1},
        {age: 2, ageUnit: ageUnits.weeks, expectedResult: 2},
        {age: 5, ageUnit: ageUnits.weeks, expectedResult: 5},
        {age: 10, ageUnit: ageUnits.weeks, expectedResult: 10},
        {age: 13, ageUnit: ageUnits.weeks, expectedResult: 13},

        {age: 0, ageUnit: ageUnits.months, expectedResult: 0},
        {age: 1, ageUnit: ageUnits.months, expectedResult: 4},
        {age: 2, ageUnit: ageUnits.months, expectedResult: 8},
        {age: 3, ageUnit: ageUnits.months, expectedResult: 12},
        {age: 5, ageUnit: ageUnits.months, expectedResult: 20},
        {age: 10, ageUnit: ageUnits.months, expectedResult: 40},

        {age: 0, ageUnit: ageUnits.years, expectedResult: 0},
        {age: 1, ageUnit: ageUnits.years, expectedResult: 52},
        {age: 2, ageUnit: ageUnits.years, expectedResult: 104},
        {age: 3, ageUnit: ageUnits.years, expectedResult: 156},
        {age: 5, ageUnit: ageUnits.years, expectedResult: 260},
        {age: 10, ageUnit: ageUnits.years, expectedResult: 520},

        {age: 0, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 1, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 2, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 5, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 10, ageUnit: 'invalidAgeUnit', expectedResult: 0},
    ];
    cases.forEach(testCase => {
        it(`from ${testCase.age} ${testCase.ageUnit}`, () => {
            const funcResult = getAgeInWeeks(testCase.age.toString(), testCase.ageUnit);

            expect(funcResult).toBe(testCase.expectedResult);
        });
    });
});

describe('Get age in years', () => {
    const cases = [
        {age: 0, ageUnit: ageUnits.weeks, expectedResult: 0},
        {age: 52, ageUnit: ageUnits.weeks, expectedResult: 1},
        {age: 104, ageUnit: ageUnits.weeks, expectedResult: 2},
        {age: 156, ageUnit: ageUnits.weeks, expectedResult: 3},
        {age: 260, ageUnit: ageUnits.weeks, expectedResult: 5},
        {age: 520, ageUnit: ageUnits.weeks, expectedResult: 10},

        {age: 0, ageUnit: ageUnits.months, expectedResult: 0},
        {age: 6, ageUnit: ageUnits.months, expectedResult: 0.5},
        {age: 12, ageUnit: ageUnits.months, expectedResult: 1},
        {age: 24, ageUnit: ageUnits.months, expectedResult: 2},
        {age: 36, ageUnit: ageUnits.months, expectedResult: 3},
        {age: 60, ageUnit: ageUnits.months, expectedResult: 5},
        {age: 120, ageUnit: ageUnits.months, expectedResult: 10},

        {age: 0, ageUnit: ageUnits.years, expectedResult: 0},
        {age: 1, ageUnit: ageUnits.years, expectedResult: 1},
        {age: 2, ageUnit: ageUnits.years, expectedResult: 2},
        {age: 3, ageUnit: ageUnits.years, expectedResult: 3},
        {age: 5, ageUnit: ageUnits.years, expectedResult: 5},
        {age: 10, ageUnit: ageUnits.years, expectedResult: 10},

        {age: 0, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 1, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 2, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 5, ageUnit: 'invalidAgeUnit', expectedResult: 0},
        {age: 10, ageUnit: 'invalidAgeUnit', expectedResult: 0},
    ];
    cases.forEach(testCase => {
        it(`from ${testCase.age} ${testCase.ageUnit}`, () => {
            const funcResult = getAgeInYears(testCase.age.toString(), testCase.ageUnit);

            expect(funcResult).toBe(testCase.expectedResult);
        });
    });
});