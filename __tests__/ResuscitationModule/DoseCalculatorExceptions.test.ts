import { getCustomMaxDose, getCustomLowDose, getCustomModerateDose } from '../../src/Modules/Resuscitation/components/DoseDisplay/logicExceptions';

describe('Gentamicin should have have float min dose', () => {
    const gentamicinCustomLowDoses = [
        { drugTitle: 'Gentamicin', age: { ageNumber: 4, ageUnit: 'weeks' }, weight: 1, expectedResult: 3 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 4, ageUnit: 'weeks' }, weight: 2, expectedResult: 4 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 4, ageUnit: 'weeks' }, weight: 3, expectedResult: 4 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 3, ageUnit: 'weeks' }, weight: 1, expectedResult: 3 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 3, ageUnit: 'weeks' }, weight: 2, expectedResult: 4 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 3, ageUnit: 'weeks' }, weight: 3, expectedResult: 4 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 5, ageUnit: 'weeks' }, weight: 1, expectedResult: 5 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 5, ageUnit: 'weeks' }, weight: 2, expectedResult: 5 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 5, ageUnit: 'weeks' }, weight: 3, expectedResult: 5 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 5, ageUnit: 'weeks' }, weight: 1, expectedResult: 5 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 5, ageUnit: 'weeks' }, weight: 2, expectedResult: 5 },
        { drugTitle: 'Gentamicin', age: { ageNumber: 5, ageUnit: 'weeks' }, weight: 3, expectedResult: 5 },
        { drugTitle: 'SomeAnotherDrug', age: { ageNumber: 5, ageUnit: 'weeks' }, weight: 3, expectedResult: undefined },
    ];
    gentamicinCustomLowDoses.forEach(testCase => {
        it(`for age ${testCase.age.ageNumber} ${testCase.age.ageUnit} ${testCase.weight} kg weight`, () => {
            const result = getCustomLowDose(testCase.drugTitle, testCase.age.ageNumber.toString(), testCase.age.ageUnit, testCase.weight);
            expect(result).toBe(testCase.expectedResult);
        });
    });
});

describe('Max dose should be float', () => {
    const floatMaxDoseCases = [
        { drugTitle: 'Amiodarone', drugSubName: '', weight: 50, expectedResult: 750 },
        { drugTitle: 'Amiodarone', drugSubName: '', weight: 55, expectedResult: 825 },
        { drugTitle: 'Amiodarone', drugSubName: '', weight: 57, expectedResult: 855 },
        { drugTitle: 'Amiodarone', drugSubName: '', weight: 58, expectedResult: 300 },
        { drugTitle: 'Amiodarone', drugSubName: '', weight: 59, expectedResult: 300 },
        { drugTitle: 'Diazepam (Valium)', drugSubName: 'Sedative', weight: 48, expectedResult: 12 },
        { drugTitle: 'Diazepam (Valium)', drugSubName: 'Sedative', weight: 49, expectedResult: 5 },
        { drugTitle: 'Diazepam (Valium)', drugSubName: 'Sedative', weight: 50, expectedResult: 5 },
        { drugTitle: 'Diazepam (Valium)', drugSubName: 'AnyOtherSubName', weight: 50, expectedResult: undefined },
        { drugTitle: 'AnyOtherDrug', drugSubName: 'Sedative', weight: 50, expectedResult: undefined },
    ];
    floatMaxDoseCases.forEach(testCase => {
        it(`for ${testCase.drugTitle + ' ' + testCase.drugSubName}, weight ${testCase.weight} kg`, () => {
            const result = getCustomMaxDose(testCase.drugTitle, testCase.drugSubName, testCase.weight);
            expect(result).toBe(testCase.expectedResult);
        });
    });
});

describe('Moderate dose should be float for', () => {
    const moderateDoseCases = [
        {drugName: 'Midazolam (Versed)', weight: 1.5, maxDose: 5, expectedResult: {dose: 0.22, max: false}},
        {drugName: 'Midazolam (Versed)', weight: 4.5, maxDose: 5, expectedResult: {dose: 0.67, max: false}},
        {drugName: 'Midazolam (Versed)', weight: 4, maxDose: 5, expectedResult: null},
        {drugName: 'Midazolam (Versed)', weight: 4.5, maxDose: 4, expectedResult: null},
        {drugName: 'AnyOtherDrug', weight: 1.5, maxDose: 5, expectedResult: null},
    ];
    moderateDoseCases.forEach(testCase => {
        it(`${testCase.drugName} weight:${testCase.weight}kg, max dose: ${testCase.maxDose}`, () => {
            const result = getCustomModerateDose(testCase.drugName, testCase.weight, testCase.maxDose);
            expect(result).toStrictEqual(testCase.expectedResult);
        });
    });    
});