import {calculateKetonesDosage, calculateRaiDoseForKetoneCarbs} from '../../src/Modules/Diabetes/screens/RoutineInsulinKetonesDosage/conf';

describe('Routine Insulin Ketones Dosage Screen tests', () => {

    // -------------------------------------calculateKetonesDosage
    const WrongValuesCases = [
        {tdd: '', ketoneLevel: 1, expectedResult: '-'},
        {tdd: '', expectedResult: '-'},
    ];
    WrongValuesCases.forEach(testCase => {
        it(`Routine Insulin Ketones Dosage calculation. With wrong values. tdd - ${testCase.tdd} ketoneLevel - ${testCase.ketoneLevel}`, () => {
            const Result = calculateKetonesDosage(testCase.tdd, testCase.ketoneLevel);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const PositiveValuesCases = [
        {tdd: '1', expectedResult: '-'},
        {tdd: '8', expectedResult: '-'},
        {tdd: '4', ketoneLevel: 0, expectedResult: 0},
        {tdd: '5', ketoneLevel: 0, expectedResult: 1},
        {tdd: '10', ketoneLevel: 0, expectedResult: 1},
        {tdd: '11', ketoneLevel: 0, expectedResult: 1},
        {tdd: '14', ketoneLevel: 0, expectedResult: 1},
        {tdd: '15', ketoneLevel: 0, expectedResult: 2},
        {tdd: '16', ketoneLevel: 0, expectedResult: 2},

        {tdd: '1', ketoneLevel: 1, expectedResult: 0},
        {tdd: '3', ketoneLevel: 1, expectedResult: 1},
        {tdd: '4', ketoneLevel: 1, expectedResult: 1},
        {tdd: '5', ketoneLevel: 1, expectedResult: 1},
        {tdd: '8', ketoneLevel: 1, expectedResult: 2},
        {tdd: '15', ketoneLevel: 1, expectedResult: 3},
        {tdd: '16', ketoneLevel: 1, expectedResult: 3},
    ];
    PositiveValuesCases.forEach(testCase => {
        it(`Routine Insulin Ketones Dosage calculation. Positive test tdd - ${testCase.tdd}, ketoneLevel - ${testCase.ketoneLevel}`, () => {
            const Result = calculateKetonesDosage(testCase.tdd, testCase.ketoneLevel);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });

    // -------------------------------------calculateRaiDoseForKetoneCarbs
    const WrongCarbsValuesCases = [
        {carbConsumed: '', carbRatio: '10', ketonesDose: '10', expectedResult: '-'},
        {carbConsumed: '10', carbRatio: '', ketonesDose: '10', expectedResult: '-'},
        {carbConsumed: '10', carbRatio: '10', ketonesDose: '', expectedResult: '-'},
    ];
    WrongCarbsValuesCases.forEach(testCase => {
        it(`Routine Insulin Ketones Dosage calculation. With wrong values. 
        carbConsumed - ${testCase.carbConsumed} 
        carbRatio - ${testCase.carbRatio}
        ketonesDose - ${testCase.ketonesDose}
        `, () => {
            const Result = calculateRaiDoseForKetoneCarbs(testCase.carbConsumed, testCase.carbRatio, testCase.ketonesDose);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const PositiveCarbsValuesCases = [
        {carbConsumed: '10', carbRatio: '10', ketonesDose: '10', expectedResult: '11.0'},
        {carbConsumed: '15', carbRatio: '10', ketonesDose: '10', expectedResult: '11.5'},
        {carbConsumed: '10', carbRatio: '5', ketonesDose: '10', expectedResult: '12.0'},
        {carbConsumed: '10', carbRatio: '10', ketonesDose: '15', expectedResult: '16.0'},
        {carbConsumed: '10', carbRatio: '10', ketonesDose: '-500', expectedResult: '0.0'},
    ];
    PositiveCarbsValuesCases.forEach(testCase => {
        it(`Routine Insulin Ketones Dosage calculation. Positive tests. 
        carbConsumed - ${testCase.carbConsumed} 
        carbRatio - ${testCase.carbRatio}
        ketonesDose - ${testCase.ketonesDose}
        `, () => {
            const Result = calculateRaiDoseForKetoneCarbs(testCase.carbConsumed, testCase.carbRatio, testCase.ketonesDose);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
});
