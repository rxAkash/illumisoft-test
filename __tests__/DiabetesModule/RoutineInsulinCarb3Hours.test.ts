import {calcualteRapidActingInsulinDose, calculateRaiDoseWithoutCarbInfo} from '../../src/Modules/Diabetes/screens/RoutineInsulinCarb3Hours/calculator';

describe('Routine Insulin Carb 3 Hours Screen tests', () => {

    // ------------calcualteRapidActingInsulinDose
    const WrongParameterCases = [
        {carbConsumed: '', carbRatio: '10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', wrong: 'carbConsumed'},
        {carbConsumed: '10', carbRatio: '', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', wrong: 'carbRatio'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '', targetBG: '10', insulinSensitivityFactor: '10', wrong: 'currentBG'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '10', targetBG: '', insulinSensitivityFactor: '10', wrong: 'targetBG'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '', wrong: 'insulinSensitivityFactor'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '', wrong: 'insulinSensitivityFactor'},
    ];
    
    WrongParameterCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose calculation. With empty value.
        carbConsumed - ${testCase.carbConsumed} 
        carbRatio - ${testCase.carbRatio} 
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calcualteRapidActingInsulinDose(
                testCase.carbConsumed, testCase.carbRatio, testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor
                );
            
            expect(Result).toBe('-');
        });
    });
    const ErrorParameterCases = [
        {carbConsumed: 'a', carbRatio: '10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'carbConsumed: a'},
        {carbConsumed: '#', carbRatio: '10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'carbConsumed: -'},
        {carbConsumed: '10', carbRatio: 'a', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'carbRatio: a'},
        {carbConsumed: '10', carbRatio: '#', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'carbRatio: -'},
        {carbConsumed: '10', carbRatio: '10', currentBG: 'a', targetBG: '10', insulinSensitivityFactor: '10', negative: 'currentBG: a'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '#', targetBG: '10', insulinSensitivityFactor: '10', negative: 'currentBG: -'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '10', targetBG: 'a', insulinSensitivityFactor: '10', negative: 'targetBG: a'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '10', targetBG: '#', insulinSensitivityFactor: '10', negative: 'targetBG: -'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '20', targetBG: '10', insulinSensitivityFactor: 'a', negative: 'insulinSensitivityFactor: a'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '20', targetBG: '10', insulinSensitivityFactor: '#', negative: 'insulinSensitivityFactor: -'},
    ];
    ErrorParameterCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose calculation. With wrong parameter type.
        carbConsumed - ${testCase.carbConsumed} 
        carbRatio - ${testCase.carbRatio} 
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calcualteRapidActingInsulinDose(
                testCase.carbConsumed, testCase.carbRatio, testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor
                );
            
            expect(Result).toBe('0.0');
        });
    });
    const NegativeParameterCases = [
        {carbConsumed: '-10', carbRatio: '10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'carbConsumed'},
        {carbConsumed: '10', carbRatio: '-10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'carbRatio'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '-10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'currentBG'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '10', targetBG: '50', insulinSensitivityFactor: '10', negative: 'targetBG'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '20', targetBG: '10', insulinSensitivityFactor: '-1', negative: 'insulinSensitivityFactor'},
        {carbConsumed: '10', carbRatio: '-10', currentBG: '10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'carbRatio'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '-10', targetBG: '10', insulinSensitivityFactor: '10', negative: 'currentBG'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '10', targetBG: '50', insulinSensitivityFactor: '10', negative: 'targetBG'},
        {carbConsumed: '10', carbRatio: '10', currentBG: '20', targetBG: '10', insulinSensitivityFactor: '-1', negative: 'insulinSensitivityFactor'},
    ];
    NegativeParameterCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose calculation. With negative values. 
        carbConsumed - ${testCase.carbConsumed} 
        carbRatio - ${testCase.carbRatio} 
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calcualteRapidActingInsulinDose(
                testCase.carbConsumed, testCase.carbRatio, testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor
                );
            
            expect(Result).toBe('0.0');
        });
    });
    const PositiveCases = [
        {carbConsumed: '1', carbRatio: '1', currentBG: '1', targetBG: '1', insulinSensitivityFactor: '1', expectedResult: '1.0'},
        {carbConsumed: '80', carbRatio: '15', currentBG: '141', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '76.5'},
        {carbConsumed: '150', carbRatio: '15', currentBG: '141', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '81.0'},
        {carbConsumed: '80', carbRatio: '50', currentBG: '141', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '72.5'},
        {carbConsumed: '80', carbRatio: '15', currentBG: '239', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '174.5'},
        {carbConsumed: '80', carbRatio: '15', currentBG: '141', targetBG: '100', insulinSensitivityFactor: '1', expectedResult: '46.5'},
        {carbConsumed: '80', carbRatio: '15', currentBG: '141', targetBG: '70', insulinSensitivityFactor: '20', expectedResult: '9.0'},
    ];
    PositiveCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose calculation. Positive tests. Formula calculation.
        carbConsumed - ${testCase.carbConsumed} 
        carbRatio - ${testCase.carbRatio} 
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calcualteRapidActingInsulinDose(
                testCase.carbConsumed, testCase.carbRatio, testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor
                );
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });


    // ------------calculateRaiDoseWithoutCarbInfo
    const NoCarbRatioWrongParametersCases = [
        {currentBG: '', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '-'},
        {currentBG: '141', targetBG: '', insulinSensitivityFactor: '1', expectedResult: '-'},
        {currentBG: '141', targetBG: '70', insulinSensitivityFactor: '', expectedResult: '-'},
    ];
    NoCarbRatioWrongParametersCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose without Carb Ratio calculation. With empty values.
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calculateRaiDoseWithoutCarbInfo(testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const NoCarbRatioWrongTypeParametersCases = [
        {currentBG: 'a', targetBG: '70', insulinSensitivityFactor: '15', expectedResult: '0.0'},
        {currentBG: '141', targetBG: 'a', insulinSensitivityFactor: '15', expectedResult: '0.0'},
        {currentBG: '141', targetBG: '70', insulinSensitivityFactor: 'a', expectedResult: '0.0'},
        {currentBG: '#', targetBG: '70', insulinSensitivityFactor: '15', expectedResult: '0.0'},
        {currentBG: '141', targetBG: '#', insulinSensitivityFactor: '15', expectedResult: '0.0'},
        {currentBG: '141', targetBG: '70', insulinSensitivityFactor: '#', expectedResult: '0.0'},
    ];
    NoCarbRatioWrongTypeParametersCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose without Carb Ratio calculation. With wrong type values.
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calculateRaiDoseWithoutCarbInfo(testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const NoCarbRatioNegativeParametersCases = [
        {currentBG: '-200', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '0.0'},
        {currentBG: '141', targetBG: '70', insulinSensitivityFactor: '-200', expectedResult: '0.0'},
    ];
    NoCarbRatioNegativeParametersCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose without Carb Ratio calculation. With negative values.
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calculateRaiDoseWithoutCarbInfo(testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const NoCarbRatioCases = [
        {currentBG: '141', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '71.0'},
        {currentBG: '239', targetBG: '70', insulinSensitivityFactor: '1', expectedResult: '169.0'},
        {currentBG: '141', targetBG: '90', insulinSensitivityFactor: '1', expectedResult: '51.0'},
        {currentBG: '141', targetBG: '70', insulinSensitivityFactor: '15', expectedResult: '4.5'},
    ];
    NoCarbRatioCases.forEach(testCase => {
        it(`Rapid Acting Insulin Dose without Carb Ratio calculation. Positive tests. Formula calculation.
        currentBG - ${testCase.currentBG} 
        targetBG - ${testCase.targetBG} 
        insulinSensitivityFactor - ${testCase.insulinSensitivityFactor}
        `, () => {
            const Result = calculateRaiDoseWithoutCarbInfo(testCase.currentBG, testCase.targetBG, testCase.insulinSensitivityFactor);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
});
