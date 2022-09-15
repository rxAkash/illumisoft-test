import {calculateSuggestedVolume, calculateMaintanenceRate, calculateMaintenanceRateOnePointFive, getSuggestedRatesCalculations, roundToHalfUnit} from '../../src/Modules/Diabetes/config/calculators';

import * as FS from 'fs'

describe('Diabetes Calculators tests', () => {
    const SuggestedVolumeCases = [
        {weight: 2.5, expectedResult: 25},
        {weight: 5, expectedResult: 50},
        {weight: 10, expectedResult: 100},
        {weight: 50, expectedResult: 500},
        {weight: 90, expectedResult: 900},
    ];
    SuggestedVolumeCases.forEach(testCase => {
        it(`Suggested Volume test. Weight - ${testCase.weight}`, () => {
            const Result = calculateSuggestedVolume(testCase.weight);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const MaintanenceRateCases = [
        {weight: 9, expectedResult: '36'},
        {weight: 9.5, expectedResult: '38'},
        {weight: 10, expectedResult: '40'},
        {weight: 11, expectedResult: '42'},
        {weight: 19, expectedResult: '58'},
        {weight: 20, expectedResult: '60'},
        {weight: 21, expectedResult: '61'},
    ];
    MaintanenceRateCases.forEach(testCase => {
        it(`Maintanence Rate test. Weight - ${testCase.weight}`, () => {
            const Result = calculateMaintanenceRate(testCase.weight);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const MaintenanceRateOnePointFiveCases = [
        {weight: 9, expectedResult: 54},
        {weight: 9.5, expectedResult: 57},
        {weight: 10, expectedResult: 60},
        {weight: 11, expectedResult: 63},
        {weight: 19, expectedResult: 87},
        {weight: 20, expectedResult: 90},
        {weight: 21, expectedResult: 91.5},
    ];
    MaintenanceRateOnePointFiveCases.forEach(testCase => {
        it(`Maintenance Rate One Point Five test. Weight - ${testCase.weight}`, () => {
            const Result = calculateMaintenanceRateOnePointFive(testCase.weight);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const SuggestedRatesCalculations = [
        {weight: 9, bloodGlucose: 250, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 54, expectedD10BagRate: 0, expectedFinalDextroseConcentration: 0},
        {weight: 9, bloodGlucose: 249, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 27, expectedD10BagRate: 27, expectedFinalDextroseConcentration: 5},
        {weight: 9, bloodGlucose: 248, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 27, expectedD10BagRate: 27, expectedFinalDextroseConcentration: 5},
        {weight: 9, bloodGlucose: 200, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 27, expectedD10BagRate: 27, expectedFinalDextroseConcentration: 5},
        {weight: 9, bloodGlucose: 199, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 13.5, expectedD10BagRate: 40.5, expectedFinalDextroseConcentration: 7.5},
        {weight: 9, bloodGlucose: 198, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 13.5, expectedD10BagRate: 40.5, expectedFinalDextroseConcentration: 7.5},
        {weight: 9, bloodGlucose: 150, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 13.5, expectedD10BagRate: 40.5, expectedFinalDextroseConcentration: 7.5},
        {weight: 9, bloodGlucose: 149, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 0, expectedD10BagRate: 54, expectedFinalDextroseConcentration: 10},
        {weight: 9, bloodGlucose: 148, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 0, expectedD10BagRate: 54, expectedFinalDextroseConcentration: 10},
        {weight: 9, bloodGlucose: 100, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 0, expectedD10BagRate: 54, expectedFinalDextroseConcentration: 10},
        {weight: 9, bloodGlucose: 70, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '0.9', expectedNsBagRate: 0, expectedD10BagRate: 54, expectedFinalDextroseConcentration: 10},
        {weight: 9.5, bloodGlucose: 250, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 57, expectedD10BagRate: 0, expectedFinalDextroseConcentration: 0},
        {weight: 9.5, bloodGlucose: 249, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 28.5, expectedD10BagRate: 28.5, expectedFinalDextroseConcentration: 5},
        {weight: 9.5, bloodGlucose: 248, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 28.5, expectedD10BagRate: 28.5, expectedFinalDextroseConcentration: 5},
        {weight: 9.5, bloodGlucose: 200, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 28.5, expectedD10BagRate: 28.5, expectedFinalDextroseConcentration: 5},
        {weight: 9.5, bloodGlucose: 199, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 14.25, expectedD10BagRate: 42.75, expectedFinalDextroseConcentration: 7.5},
        {weight: 9.5, bloodGlucose: 198, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 14.25, expectedD10BagRate: 42.75, expectedFinalDextroseConcentration: 7.5},
        {weight: 9.5, bloodGlucose: 150, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 14.25, expectedD10BagRate: 42.75, expectedFinalDextroseConcentration: 7.5},
        {weight: 9.5, bloodGlucose: 149, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 57, expectedFinalDextroseConcentration: 10},
        {weight: 9.5, bloodGlucose: 148, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 57, expectedFinalDextroseConcentration: 10},
        {weight: 9.5, bloodGlucose: 100, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 57, expectedFinalDextroseConcentration: 10},
        {weight: 9.5, bloodGlucose: 70, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 57, expectedFinalDextroseConcentration: 10},
        {weight: 10, bloodGlucose: 250, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 60, expectedD10BagRate: 0, expectedFinalDextroseConcentration: 0},
        {weight: 10, bloodGlucose: 249, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 30, expectedD10BagRate: 30, expectedFinalDextroseConcentration: 5},
        {weight: 10, bloodGlucose: 248, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 30, expectedD10BagRate: 30, expectedFinalDextroseConcentration: 5},
        {weight: 10, bloodGlucose: 200, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 30, expectedD10BagRate: 30, expectedFinalDextroseConcentration: 5},
        {weight: 10, bloodGlucose: 199, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 15, expectedD10BagRate: 45, expectedFinalDextroseConcentration: 7.5},
        {weight: 10, bloodGlucose: 198, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 15, expectedD10BagRate: 45, expectedFinalDextroseConcentration: 7.5},
        {weight: 10, bloodGlucose: 150, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 15, expectedD10BagRate: 45, expectedFinalDextroseConcentration: 7.5},
        {weight: 10, bloodGlucose: 149, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 60, expectedFinalDextroseConcentration: 10},
        {weight: 10, bloodGlucose: 148, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 60, expectedFinalDextroseConcentration: 10},
        {weight: 10, bloodGlucose: 100, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 60, expectedFinalDextroseConcentration: 10},
        {weight: 10, bloodGlucose: 70, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.0', expectedNsBagRate: 0, expectedD10BagRate: 60, expectedFinalDextroseConcentration: 10},
        {weight: 11, bloodGlucose: 250, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 63, expectedD10BagRate: 0, expectedFinalDextroseConcentration: 0},
        {weight: 11, bloodGlucose: 249, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 31.5, expectedD10BagRate: 31.5, expectedFinalDextroseConcentration: 5},
        {weight: 11, bloodGlucose: 248, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 31.5, expectedD10BagRate: 31.5, expectedFinalDextroseConcentration: 5},
        {weight: 11, bloodGlucose: 200, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 31.5, expectedD10BagRate: 31.5, expectedFinalDextroseConcentration: 5},
        {weight: 11, bloodGlucose: 199, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 15.75, expectedD10BagRate: 47.25, expectedFinalDextroseConcentration: 7.5},
        {weight: 11, bloodGlucose: 198, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 15.75, expectedD10BagRate: 47.25, expectedFinalDextroseConcentration: 7.5},
        {weight: 11, bloodGlucose: 150, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 15.75, expectedD10BagRate: 47.25, expectedFinalDextroseConcentration: 7.5},
        {weight: 11, bloodGlucose: 149, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 0, expectedD10BagRate: 63, expectedFinalDextroseConcentration: 10},
        {weight: 11, bloodGlucose: 148, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 0, expectedD10BagRate: 63, expectedFinalDextroseConcentration: 10},
        {weight: 11, bloodGlucose: 100, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 0, expectedD10BagRate: 63, expectedFinalDextroseConcentration: 10},
        {weight: 11, bloodGlucose: 70, expectedRegularInsulinRate: 0.5, expectedRegularInsulinRateOver79kg: '1.1', expectedNsBagRate: 0, expectedD10BagRate: 63, expectedFinalDextroseConcentration: 10},
        {weight: 19, bloodGlucose: 250, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 87, expectedD10BagRate: 0, expectedFinalDextroseConcentration: 0},
        {weight: 19, bloodGlucose: 249, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 43.5, expectedD10BagRate: 43.5, expectedFinalDextroseConcentration: 5},
        {weight: 19, bloodGlucose: 248, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 43.5, expectedD10BagRate: 43.5, expectedFinalDextroseConcentration: 5},
        {weight: 19, bloodGlucose: 200, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 43.5, expectedD10BagRate: 43.5, expectedFinalDextroseConcentration: 5},
        {weight: 19, bloodGlucose: 199, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 21.75, expectedD10BagRate: 65.25, expectedFinalDextroseConcentration: 7.5},
        {weight: 19, bloodGlucose: 198, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 21.75, expectedD10BagRate: 65.25, expectedFinalDextroseConcentration: 7.5},
        {weight: 19, bloodGlucose: 150, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 21.75, expectedD10BagRate: 65.25, expectedFinalDextroseConcentration: 7.5},
        {weight: 19, bloodGlucose: 149, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 0, expectedD10BagRate: 87, expectedFinalDextroseConcentration: 10},
        {weight: 19, bloodGlucose: 148, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 0, expectedD10BagRate: 87, expectedFinalDextroseConcentration: 10},
        {weight: 19, bloodGlucose: 100, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 0, expectedD10BagRate: 87, expectedFinalDextroseConcentration: 10},
        {weight: 19, bloodGlucose: 70, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '1.9', expectedNsBagRate: 0, expectedD10BagRate: 87, expectedFinalDextroseConcentration: 10},
        {weight: 20, bloodGlucose: 250, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 90, expectedD10BagRate: 0, expectedFinalDextroseConcentration: 0},
        {weight: 20, bloodGlucose: 249, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 45, expectedD10BagRate: 45, expectedFinalDextroseConcentration: 5},
        {weight: 20, bloodGlucose: 248, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 45, expectedD10BagRate: 45, expectedFinalDextroseConcentration: 5},
        {weight: 20, bloodGlucose: 200, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 45, expectedD10BagRate: 45, expectedFinalDextroseConcentration: 5},
        {weight: 20, bloodGlucose: 199, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 22.5, expectedD10BagRate: 67.5, expectedFinalDextroseConcentration: 7.5},
        {weight: 20, bloodGlucose: 198, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 22.5, expectedD10BagRate: 67.5, expectedFinalDextroseConcentration: 7.5},
        {weight: 20, bloodGlucose: 150, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 22.5, expectedD10BagRate: 67.5, expectedFinalDextroseConcentration: 7.5},
        {weight: 20, bloodGlucose: 149, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 0, expectedD10BagRate: 90, expectedFinalDextroseConcentration: 10},
        {weight: 20, bloodGlucose: 148, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 0, expectedD10BagRate: 90, expectedFinalDextroseConcentration: 10},
        {weight: 20, bloodGlucose: 100, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 0, expectedD10BagRate: 90, expectedFinalDextroseConcentration: 10},
        {weight: 20, bloodGlucose: 70, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.0', expectedNsBagRate: 0, expectedD10BagRate: 90, expectedFinalDextroseConcentration: 10},
        {weight: 21, bloodGlucose: 250, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 91.5, expectedD10BagRate: 0, expectedFinalDextroseConcentration: 0},
        {weight: 21, bloodGlucose: 249, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 45.75, expectedD10BagRate: 45.75, expectedFinalDextroseConcentration: 5},
        {weight: 21, bloodGlucose: 248, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 45.75, expectedD10BagRate: 45.75, expectedFinalDextroseConcentration: 5},
        {weight: 21, bloodGlucose: 200, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 45.75, expectedD10BagRate: 45.75, expectedFinalDextroseConcentration: 5},
        {weight: 21, bloodGlucose: 199, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 22.875, expectedD10BagRate: 68.625, expectedFinalDextroseConcentration: 7.5},
        {weight: 21, bloodGlucose: 198, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 22.875, expectedD10BagRate: 68.625, expectedFinalDextroseConcentration: 7.5},
        {weight: 21, bloodGlucose: 150, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 22.875, expectedD10BagRate: 68.625, expectedFinalDextroseConcentration: 7.5},
        {weight: 21, bloodGlucose: 149, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 0, expectedD10BagRate: 91.5, expectedFinalDextroseConcentration: 10},
        {weight: 21, bloodGlucose: 148, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 0, expectedD10BagRate: 91.5, expectedFinalDextroseConcentration: 10},
        {weight: 21, bloodGlucose: 100, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 0, expectedD10BagRate: 91.5, expectedFinalDextroseConcentration: 10},
        {weight: 21, bloodGlucose: 70, expectedRegularInsulinRate: 1, expectedRegularInsulinRateOver79kg: '2.1', expectedNsBagRate: 0, expectedD10BagRate: 91.5, expectedFinalDextroseConcentration: 10}
        ];
    SuggestedRatesCalculations.forEach(testCase => {
        it(`Suggested Rates Calculations test. Weight - ${testCase.weight} blood glucose - ${testCase.bloodGlucose}`, () => {
            const expectedSuffixes = {
                regularInsulinRateSuffix: 'units/hr',
                regularInsulinRateOver79kgSuffix: 'units/hr',
                nsBagRateSuffix: 'mL/hr',
                d10BagRateSuffix: 'mL/hr',
                finalDextroseConcentrationSuffix: '%'
            };
            const Result = getSuggestedRatesCalculations(testCase.weight, testCase.bloodGlucose);

            expect(Result.regularInsulinRate.result).toBe(testCase.expectedRegularInsulinRate);
            expect(Result.regularInsulinRateOver79kg.result).toBe(testCase.expectedRegularInsulinRateOver79kg);
            expect(Result.nsBagRate.result).toBe(testCase.expectedNsBagRate);
            expect(Result.d10BagRate.result).toBe(testCase.expectedD10BagRate);
            expect(Result.finalDextroseConcentration.result).toBe(testCase.expectedFinalDextroseConcentration);

            expect(Result.regularInsulinRate.suffix).toBe(expectedSuffixes.regularInsulinRateSuffix);
            expect(Result.regularInsulinRateOver79kg.suffix).toBe(expectedSuffixes.regularInsulinRateOver79kgSuffix);
            expect(Result.nsBagRate.suffix).toBe(expectedSuffixes.nsBagRateSuffix);
            expect(Result.d10BagRate.suffix).toBe(expectedSuffixes.d10BagRateSuffix);
            expect(Result.finalDextroseConcentration.suffix).toBe(expectedSuffixes.finalDextroseConcentrationSuffix);
        });
    });
});