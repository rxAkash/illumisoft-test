import { getTitleForStep, calculateRemainingHourlyRate, calculateNineToTwentyFourHourlyRate, separateNum, mathCeil, getEquationReference } from '../../src/Modules/Resuscitation/screens/BurnManagment/conf';
import { getLRRate } from '../../src/Modules/Resuscitation/screens/BurnManagment/components/TreatmentLessThanTwentyCalculator';
import { get24HoursLR, getD5LRValue, getD5Value, getFluidVolume, getNineTwentyFourHoursRate, getOneEightHoursRate } from '../../src/Modules/Resuscitation/screens/BurnManagment/components/TreatmentPost20Calculator';

describe('Burn Management screen tests', () => {
    const GetTitleForStepCases = [
        {results: 10, step: 0,  expectedResult: 'Calculate TBSA 10.00%'},
        {results: 5, step: 1, expectedResult: 'Treatment recommendations'},
        {results: 5, step: 2, expectedResult: ''},
        {results: 19, step: 0, expectedResult: 'Calculate TBSA 19.00%'},
        {results: 20, step: 0, expectedResult: 'Calculate TBSA 20.00%'},
        {results: 20, step: 1, expectedResult: 'Pre-treatment questions'},
        {results: 20, step: 2, expectedResult: 'Treatment recommendations'},
        {results: 21, step: 0, expectedResult: 'Calculate TBSA 21.00%'},
        {results: 21, step: 1, expectedResult: 'Pre-treatment questions'},
        {results: 22, step: 2, expectedResult: 'Treatment recommendations'},
        {results: 22, step: 3, expectedResult: ''},
    ];
    GetTitleForStepCases.forEach(testCase => {
        it(`Test getTitleForStep func. Step - ${testCase.step} results - ${testCase.results}`, () => {
            const Result = getTitleForStep(testCase.step, testCase.results);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const CalculateRemainingHourlyRateCases = [
        {hoursRemaining: 2, totalFluidVolume: 500, fluidVolumeInfusedSinceBurn: 900, hoursElapsedSinceBurn: 4, expectedResult: 325},
        {hoursRemaining: 3, totalFluidVolume: 500, fluidVolumeInfusedSinceBurn: 900, hoursElapsedSinceBurn: 4, expectedResult: 650},
        {hoursRemaining: 3, totalFluidVolume: 500, fluidVolumeInfusedSinceBurn: 900, hoursElapsedSinceBurn: 4, expectedResult: 650},
        {hoursRemaining: 2, totalFluidVolume: 600, fluidVolumeInfusedSinceBurn: 900, hoursElapsedSinceBurn: 4, expectedResult: 300},
        {hoursRemaining: 2, totalFluidVolume: 500, fluidVolumeInfusedSinceBurn: 800, hoursElapsedSinceBurn: 4, expectedResult: 275},
        {hoursRemaining: 2, totalFluidVolume: 500, fluidVolumeInfusedSinceBurn: 900, hoursElapsedSinceBurn: 6, expectedResult: 163},
    ];
    CalculateRemainingHourlyRateCases.forEach(testCase => {
        it(`Test calculateRemainingHourlyRate func. 
        hoursRemaining - ${testCase.hoursRemaining}
        totalFluidVolume - ${testCase.totalFluidVolume}
        fluidVolumeInfusedSinceBurn - ${testCase.fluidVolumeInfusedSinceBurn}
        hoursElapsedSinceBurn - ${testCase.hoursElapsedSinceBurn}`, () => {
            const Result = calculateRemainingHourlyRate(
                testCase.hoursRemaining, testCase.totalFluidVolume, 
                testCase.fluidVolumeInfusedSinceBurn, testCase.hoursElapsedSinceBurn
            );

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const CalculateNineToTwentyFourHourlyRateCases = [

        {totalFluidVolume: 4000, fluidVolumeInfusedSinceBurn: 1000, hoursElapsedSinceBurn: 7, expectedResult: 125},
        {totalFluidVolume: 4000, fluidVolumeInfusedSinceBurn: 1000, hoursElapsedSinceBurn: 8, expectedResult: 125},
        {totalFluidVolume: 3000, fluidVolumeInfusedSinceBurn: 1000, hoursElapsedSinceBurn: 8, expectedResult: 94},
        {totalFluidVolume: 4000, fluidVolumeInfusedSinceBurn: 1500, hoursElapsedSinceBurn: 8, expectedResult: 125},
        {totalFluidVolume: 4000, fluidVolumeInfusedSinceBurn: 1000, hoursElapsedSinceBurn: 9, expectedResult: 200},
        {totalFluidVolume: 4000, fluidVolumeInfusedSinceBurn: 700, hoursElapsedSinceBurn: 9, expectedResult: 220},
        {totalFluidVolume: 4000, fluidVolumeInfusedSinceBurn: 1000, hoursElapsedSinceBurn: 14, expectedResult: 300},
        {totalFluidVolume: 3500, fluidVolumeInfusedSinceBurn: 1000, hoursElapsedSinceBurn: 14, expectedResult: 250},

    ];
    CalculateNineToTwentyFourHourlyRateCases.forEach(testCase => {
        it(`Test calculateNineToTwentyFourHourlyRate func. 
        totalFluidVolume - ${testCase.totalFluidVolume}
        fluidVolumeInfusedSinceBurn - ${testCase.fluidVolumeInfusedSinceBurn}
        hoursElapsedSinceBurn - ${testCase.hoursElapsedSinceBurn}`, () => {
            const Result = calculateNineToTwentyFourHourlyRate(
                testCase.totalFluidVolume, testCase.fluidVolumeInfusedSinceBurn, 
                testCase.hoursElapsedSinceBurn
            );

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const SeparateNumCases = [
        {value: 1, expectedResult: 1},
        {value: 10, expectedResult: 10},
        {value: 999, expectedResult: 999},
        {value: 1000, expectedResult: '1,000'},
        {value: 9999, expectedResult: '9,999'},
        {value: 10000, expectedResult: '10,000'},
        {value: 99999, expectedResult: '99,999'},
        {value: 100000, expectedResult: '100,000'},
        {value: 999999, expectedResult: '999,999'},
    ];
    SeparateNumCases.forEach(testCase => {
        it(`Test separateNum func. value - ${testCase.value}`, () => {
            const Result: number | string = separateNum(testCase.value);

            expect(Result).toStrictEqual(testCase.expectedResult);
        });
    });
    const MathCeilCases = [
        {value: 1, expectedResult: 1},
        {value: 2, expectedResult: 2},
        {value: 3, expectedResult: 3},
        {value: 1.1, expectedResult: 2},
        {value: 1.2, expectedResult: 2},
        {value: 3.9, expectedResult: 4},
        {value: 0, expectedResult: 0},
        {value: -0.1, expectedResult: -0},
        {value: -1.9, expectedResult: -1},
    ];
    MathCeilCases.forEach(testCase => {
        it(`Test mathCeil func. value - ${testCase.value}`, () => {
            const Result = mathCeil(testCase.value);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const GetEquationReferenceCases = [
        {weight: 10, weightUnit: 'kg', electricalBurn: true, expectedResult: '4 mL/kg x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 10, weightUnit: 'kg', electricalBurn: false, expectedResult: '3 mL/kg LR x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 29, weightUnit: 'kg', electricalBurn: true, expectedResult: '4 mL/kg x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 29, weightUnit: 'kg', electricalBurn: false, expectedResult: '3 mL/kg LR x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 30, weightUnit: 'kg', electricalBurn: true, expectedResult: '4 mL/kg x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 30, weightUnit: 'kg', electricalBurn: false, expectedResult: '3 mL/kg LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 31, weightUnit: 'kg', electricalBurn: true, expectedResult: '4 mL/kg x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 31, weightUnit: 'kg', electricalBurn: false, expectedResult: '3 mL/kg LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 59, weightUnit: 'kg', electricalBurn: true, expectedResult: '4 mL/kg x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 59, weightUnit: 'kg', electricalBurn: false, expectedResult: '3 mL/kg LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 60, weightUnit: 'kg', electricalBurn: true, expectedResult: '4 mL/kg x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 60, weightUnit: 'kg', electricalBurn: false, expectedResult: '2 mL/kg LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 61, weightUnit: 'kg', electricalBurn: true, expectedResult: '4 mL/kg x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 61, weightUnit: 'kg', electricalBurn: false, expectedResult: '2 mL/kg LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},

        {weight: 10, weightUnit: 'lbs', electricalBurn: true, expectedResult: '4 mL/lbs x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 10, weightUnit: 'lbs', electricalBurn: false, expectedResult: '3 mL/lbs LR x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 29, weightUnit: 'lbs', electricalBurn: true, expectedResult: '4 mL/lbs x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 29, weightUnit: 'lbs', electricalBurn: false, expectedResult: '3 mL/lbs LR x % TBSA \nGive half of the total volume over the first 8 hours from the time of burn injury plus D₅LR at maintenance rate'},
        {weight: 30, weightUnit: 'lbs', electricalBurn: true, expectedResult: '4 mL/lbs x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 30, weightUnit: 'lbs', electricalBurn: false, expectedResult: '3 mL/lbs LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 31, weightUnit: 'lbs', electricalBurn: true, expectedResult: '4 mL/lbs x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 31, weightUnit: 'lbs', electricalBurn: false, expectedResult: '3 mL/lbs LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 59, weightUnit: 'lbs', electricalBurn: true, expectedResult: '4 mL/lbs x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 59, weightUnit: 'lbs', electricalBurn: false, expectedResult: '3 mL/lbs LR x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 60, weightUnit: 'lbs', electricalBurn: true, expectedResult: '4 mL/lbs x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 60, weightUnit: 'lbs', electricalBurn: false, expectedResult: '2 mL/lbs LR x % TBSA\nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 61, weightUnit: 'lbs', electricalBurn: true, expectedResult: '4 mL/lbs x % TBSA \nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
        {weight: 61, weightUnit: 'lbs', electricalBurn: false, expectedResult: '2 mL/lbs LR x % TBSA\nFluid rates are calculated giving half the total volume over the first 8 hours from the time of burn injury.'},
    ];
    GetEquationReferenceCases.forEach(testCase => {
        it(`test getEquationReference func. weight: ${testCase.weight} weight unit: ${testCase.weightUnit} electric injure ${testCase.electricalBurn}`, () => {
            const Result = getEquationReference(testCase.weight, testCase.weightUnit, testCase.electricalBurn);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
});

describe('Burn Management components tests', () => {
    const GetLrRateCases = [
        // all the values are taken from excel sheet documentation
        {weight: 2, expectedResult: '12'},
        {weight: 2.5, expectedResult: '15'},
        {weight: 3, expectedResult: '18'},
        {weight: 3.5, expectedResult: '21'},
        {weight: 4, expectedResult: '24'},
        {weight: 4.5, expectedResult: '27'},
        {weight: 5, expectedResult: '30'},
        {weight: 5.5, expectedResult: '33'},
        {weight: 6, expectedResult: '36'},
        {weight: 7, expectedResult: '42'},
        {weight: 8, expectedResult: '48'},
        {weight: 9, expectedResult: '54'},
        {weight: 10, expectedResult: '60'},
        {weight: 11, expectedResult: '63'},
        {weight: 12, expectedResult: '66'},
        {weight: 13, expectedResult: '69'},
        {weight: 14, expectedResult: '72'},
        {weight: 15, expectedResult: '75'},
        {weight: 16, expectedResult: '78'},
        {weight: 17, expectedResult: '81'},
        {weight: 18, expectedResult: '84'},
        {weight: 19, expectedResult: '87'},
        {weight: 20, expectedResult: '90'},
        {weight: 21, expectedResult: '92'},
        {weight: 22, expectedResult: '93'},
        {weight: 23, expectedResult: '95'},
        {weight: 24, expectedResult: '96'},
        {weight: 25, expectedResult: '98'},
        {weight: 26, expectedResult: '99'},
        {weight: 27, expectedResult: '101'},
        {weight: 28, expectedResult: '102'},
        {weight: 29, expectedResult: '104'},
        {weight: 30, expectedResult: '105'},
        {weight: 31, expectedResult: '107'},
        {weight: 32, expectedResult: '108'},
        {weight: 33, expectedResult: '110'},
        {weight: 34, expectedResult: '111'},
        {weight: 35, expectedResult: '113'},
        {weight: 36, expectedResult: '114'},
        {weight: 37, expectedResult: '116'},
        {weight: 38, expectedResult: '117'},
        {weight: 39, expectedResult: '119'},
        {weight: 40, expectedResult: '120'},
        {weight: 41, expectedResult: '122'},
        {weight: 42, expectedResult: '123'},
        {weight: 43, expectedResult: '125'},
        {weight: 44, expectedResult: '126'},
        {weight: 45, expectedResult: '128'},
        {weight: 46, expectedResult: '129'},
        {weight: 47, expectedResult: '131'},
        {weight: 48, expectedResult: '132'},
        {weight: 49, expectedResult: '134'},
        {weight: 50, expectedResult: '135'},
        {weight: 51, expectedResult: '137'},
        {weight: 52, expectedResult: '138'},
        {weight: 53, expectedResult: '140'},
        {weight: 54, expectedResult: '141'},
        {weight: 55, expectedResult: '143'},
        {weight: 56, expectedResult: '144'},
        {weight: 57, expectedResult: '146'},
        {weight: 58, expectedResult: '147'},
        {weight: 59, expectedResult: '149'},
        {weight: 60, expectedResult: '150'},
        {weight: 61, expectedResult: '150'},
        {weight: 62, expectedResult: '150'},
        {weight: 63, expectedResult: '150'},
        {weight: 64, expectedResult: '150'},
        {weight: 65, expectedResult: '150'},
        {weight: 66, expectedResult: '150'},
        {weight: 67, expectedResult: '150'},
        {weight: 68, expectedResult: '150'},
        {weight: 69, expectedResult: '150'},
        {weight: 70, expectedResult: 150}
    ];
    GetLrRateCases.forEach(testCase => {
        it(`Test getLRRate func. Weight - ${testCase.weight}`, () => {
            const Result = getLRRate(testCase.weight);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const Get24HoursLR = [
        {electricalBurn: true, weight: 10, results: 10, expectedResult: 400},
        {electricalBurn: true, weight: 20, results: 10, expectedResult: 800},
        {electricalBurn: true, weight: 10, results: 25, expectedResult: '1,000'},
        {electricalBurn: false, weight: 10, results: 10, expectedResult: 300},
        {electricalBurn: false, weight: 20, results: 10, expectedResult: 600},
        {electricalBurn: false, weight: 10, results: 45, expectedResult: '1,350'},
    ];
    Get24HoursLR.forEach(testCase => {
        it(`Test get24HoursLR func. electricalBurn - ${testCase.electricalBurn} weight - ${testCase.weight} results - ${testCase.results}`, () => {
            const Result = get24HoursLR(testCase.electricalBurn, testCase.weight, testCase.results)


            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const GetD5LRValueCases = [
        {weight: 9, expectedResult: 900},
        {weight: 10, expectedResult: 1000},
        {weight: 11, expectedResult: 1050},
        {weight: 19, expectedResult: 1450},
        {weight: 20, expectedResult: 1500},
        {weight: 21, expectedResult: 1520},
        {weight: 30, expectedResult: 1700},
    ];
    GetD5LRValueCases.forEach(testCase => {
        it(`test getD5LRValue func. Weight - ${testCase.weight}`, () => {
            const Result = getD5LRValue(testCase.weight);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const GetD5ValueCases = [
        {weight: 9, expectedResult: 38},
        {weight: 10, expectedResult: 42},
        {weight: 11, expectedResult: 44},
        {weight: 19, expectedResult: 60},
        {weight: 20, expectedResult: 63},
        {weight: 21, expectedResult: 63},
        {weight: 30, expectedResult: 71},
    ];
    GetD5ValueCases.forEach(testCase => {
        it(`Test getD5Value func. weight - ${testCase.weight}`, () => {
            const Result = getD5Value(testCase.weight);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const GetFluidVolumeCases= [
        {electricalBurn: true, weight: 10, results: 10, expectedResult: 400},
        {electricalBurn: true, weight: 25, results: 10, expectedResult: 1000},
        {electricalBurn: true, weight: 10, results: 20, expectedResult: 800},
        {electricalBurn: true, weight: 59, results: 20, expectedResult: 4720},
        {electricalBurn: true, weight: 60, results: 20, expectedResult: 4800},
        {electricalBurn: true, weight: 61, results: 20, expectedResult: 4880},

        {electricalBurn: false, weight: 10, results: 10, expectedResult: 300},
        {electricalBurn: false, weight: 59, results: 10, expectedResult: 1770},
        {electricalBurn: false, weight: 59, results: 20, expectedResult: 3540},
        {electricalBurn: false, weight: 60, results: 20, expectedResult: 2400},
        {electricalBurn: false, weight: 61, results: 20, expectedResult: 2440},

    ];
    GetFluidVolumeCases.forEach(testCase => {
        it(`Test func. electricalBurn - ${testCase.electricalBurn} weight - ${testCase.weight} results - ${testCase.results}`, () => {
            const Result = getFluidVolume(testCase.electricalBurn, testCase.weight, testCase.results);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const GetNineTwentyFourHoursRateCases = [
        {electricalBurn: false, weight: 20, results: 50, fluidVolume: '500', hours: '7', expectedResult: 94},
        {electricalBurn: false, weight: 20, results: 50, fluidVolume: '250', hours: '8', expectedResult: 94},
        {electricalBurn: false, weight: 20, results: 50, fluidVolume: '500', hours: '8', expectedResult: 94},
        {electricalBurn: false, weight: 20, results: 30, fluidVolume: '500', hours: '9', expectedResult: 87}, // should be rounded from 86.66666666666667
        {electricalBurn: false, weight: 20, results: 30, fluidVolume: '500', hours: '14', expectedResult: 130},
        {electricalBurn: false, weight: 20, results: 30, fluidVolume: '450', hours: '14', expectedResult: 135},
        {electricalBurn: true, weight: 15, results: 30, fluidVolume: '450', hours: '14', expectedResult: 135},
        {electricalBurn: false, weight: 15, results: 30, fluidVolume: '450', hours: '14', expectedResult: 90},
        {electricalBurn: true, weight: 20, results: 30, fluidVolume: '450', hours: '14', expectedResult: 195},
        {electricalBurn: true, weight: 10, results: 10, fluidVolume: '500', hours: '7', expectedResult: 13},
        {electricalBurn: true, weight: 10, results: 10, fluidVolume: '2000', hours: '11', expectedResult: 0},
        {electricalBurn: true, weight: 25, results: 10, fluidVolume: '500', hours: '7', expectedResult: 32},
        {electricalBurn: true, weight: 10, results: 30, fluidVolume: '500', hours: '7', expectedResult: 38},
        {electricalBurn: true, weight: 59, results: 30, fluidVolume: '500', hours: '7', expectedResult: 222},
        {electricalBurn: true, weight: 61, results: 30, fluidVolume: '500', hours: '7', expectedResult: 229},
        {electricalBurn: false, weight: 10, results: 10, fluidVolume: '500', hours: '7', expectedResult: 10},
        {electricalBurn: false, weight: 59, results: 10, fluidVolume: '500', hours: '7', expectedResult: 56},
        {electricalBurn: false, weight: 59, results: 30, fluidVolume: '500', hours: '7', expectedResult: 166},
        {electricalBurn: false, weight: 60, results: 30, fluidVolume: '500', hours: '7', expectedResult: 113},
        {electricalBurn: false, weight: 61, results: 30, fluidVolume: '500', hours: '7', expectedResult: 115},
    ];
    GetNineTwentyFourHoursRateCases.forEach(testCase => {
        it(`Test getNineTwentyFourHoursRate func. electricalBurn - ${testCase.electricalBurn} weight - ${testCase.weight} results - ${testCase.results} fluidVolume - ${testCase.fluidVolume} hours - ${testCase.hours}`, () => {
            const Result = getNineTwentyFourHoursRate(testCase.electricalBurn, testCase.weight, testCase.results, testCase.fluidVolume, testCase.hours);
            const expectedResult = (testCase.expectedResult === 0)? 'n/a': `${testCase.expectedResult} mL/hr`

            expect(Result).toBe(expectedResult);
        });
    });
    const GetOneEightHoursRateCases = [
        {electricalBurn: false, weight: 20, results: 50, fluidVolume: '500', hours: '7', expectedResult: 1000},
        {electricalBurn: false, weight: 20, results: 50, fluidVolume: '250', hours: '8', expectedResult: 0}, // Infinity should be transformed to n/a
        {electricalBurn: false, weight: 20, results: 50, fluidVolume: '500', hours: '8', expectedResult: 0}, // Infinity should be transformed to n/a
        {electricalBurn: false, weight: 20, results: 30, fluidVolume: '500', hours: '9', expectedResult: 0},
        {electricalBurn: true, weight: 10, results: 10, fluidVolume: '2000', hours: '11', expectedResult: 600},
        {electricalBurn: true, weight: 10, results: 30, fluidVolume: '500', hours: '7', expectedResult: 100},
        {electricalBurn: true, weight: 59, results: 30, fluidVolume: '500', hours: '7', expectedResult: 3040},
        {electricalBurn: true, weight: 61, results: 30, fluidVolume: '500', hours: '7', expectedResult: 3160},
        {electricalBurn: false, weight: 59, results: 10, fluidVolume: '500', hours: '7', expectedResult: 385},
        {electricalBurn: false, weight: 59, results: 30, fluidVolume: '500', hours: '7', expectedResult: 2155},
        {electricalBurn: false, weight: 60, results: 30, fluidVolume: '500', hours: '7', expectedResult: 1300},
        {electricalBurn: false, weight: 61, results: 30, fluidVolume: '500', hours: '7', expectedResult: 1330},
        {electricalBurn: false, weight: 59, results: 10, fluidVolume: '500', hours: '7', expectedResult: 385},
    ];
    GetOneEightHoursRateCases.forEach(testCase => {
        it(`Test getOneEightHoursRate func. electricalBurn - ${testCase.electricalBurn} weight - ${testCase.weight} results - ${testCase.results} fluidVolume - ${testCase.fluidVolume} hours - ${testCase.hours}`, () => {
            const Result = getOneEightHoursRate(testCase.electricalBurn, testCase.weight, testCase.results, testCase.fluidVolume, testCase.hours);
            const expectedResult = (testCase.expectedResult === 0)? 'n/a': `${testCase.expectedResult} mL/hr`

            expect(Result).toBe(expectedResult);
        });
    });
});