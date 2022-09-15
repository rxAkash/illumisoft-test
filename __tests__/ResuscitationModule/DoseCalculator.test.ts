import {calculatePatientDose, calculateVolumeOnly} from '../../src/Modules/Resuscitation/components/DoseDisplay/doseCalculators';
import {getDrugByName} from '../../src/Modules/Resuscitation/config/drugConfig';

function getResusDrugRoute(drugName: string, drugIndicationValue: string, drugRouteTitle: string, concentration?: number): any {
    const drug: any = getDrugByName(drugName);
    for (let i=0; i<drug.Indication.length; i++) {
        let findedElem;
        if (concentration) {
            findedElem = drug.Indication[i].Route.find((elem: any) => elem.title === drugRouteTitle && elem.Concentration == concentration);
        } else {
            findedElem = drug.Indication[i].Route.find((elem: any) => elem.title === drugRouteTitle);
        }
        if (findedElem && drug.Indication[i].value === drugIndicationValue) {
            return findedElem
        };
    };
};

interface DrugCalculationResult {
    patientDose: number;
    max: boolean;
    volume?: number;
};
interface DrugDosageCalculationTestCase {
    weight: number;
    dose: number;
    expected: DrugCalculationResult;
};
interface DosageTestCase {
    dosageName: string; 
    dosageValue: number;
};
interface TestData{
    drugDosages: DosageTestCase [];
    calculations: DrugDosageCalculationTestCase [];
};

function getTestData(dosages: number [], maxDosage: number, volumeCoeficient?: number, additionalWeights?: number []): TestData {
    let drugCalculationCases: DrugDosageCalculationTestCase [] = [];
    let dosagesCases: DosageTestCase [] = [];
    let weights = [2, 2.5, 5, 8, 10, 15, 20, 25, 30, 35, 45, 55, 67, 90, 100, 120]
    if (additionalWeights) {
        additionalWeights.forEach(additionalWeight => {
            if (! weights.includes(additionalWeight)) {
                weights.push(additionalWeight);
            };
        });
    };
    if (dosages.length === 1) {
        dosagesCases.push({dosageName: 'LowDose', dosageValue: dosages[0]});
    } else if (dosages.length === 2) {
        dosagesCases.push({dosageName: 'LowDose', dosageValue: dosages[0]});
        dosagesCases.push({dosageName: 'ModerateDose', dosageValue: dosages[1]});
    } else if (dosages.length === 3) {
        dosagesCases.push({dosageName: 'LowDose', dosageValue: dosages[0]});
        dosagesCases.push({dosageName: 'ModerateDose', dosageValue: dosages[1]});
        dosagesCases.push({dosageName: 'HighDose', dosageValue: dosages[2]});
    }

    const generateDrugCalculationTestCaseToResults = (weight: number, dosage: number): void => {
        let calculatedPatientDose = Number.parseFloat((weight * dosage).toFixed(2));
            let calculatedMax: boolean;
            if (maxDosage && calculatedPatientDose >= maxDosage) {
                calculatedPatientDose = maxDosage;
                calculatedMax = true;
            }
            else {
                calculatedMax = false;
            };
            let caseResult: DrugDosageCalculationTestCase = {weight: weight, dose: dosage, expected: {patientDose: calculatedPatientDose, max: calculatedMax}}
            if (volumeCoeficient) {
                caseResult.expected.volume = Number.parseFloat((caseResult.expected.patientDose / volumeCoeficient).toFixed(2));
            };
            drugCalculationCases.push(caseResult);
    };
    const calculateDosagesBorderValues = (dosages: number [], maxDosage: number): {weight: number, dosage: number} [] => {
        let calculatedBorderValues: {weight: number, dosage: number} [] = []
        dosages.forEach(dosage => {
            let weight = maxDosage / dosage;
            let firstBorderWeight: number;
            let secondBorderWeight: number;
            let step: number;
            if (weight < 10) {
                firstBorderWeight = Number.parseFloat((weight * 2).toFixed()) / 2;
                step = 0.5;
            } else {
                firstBorderWeight = Number.parseFloat(weight.toFixed());
                step = 1;
            };
            if ((firstBorderWeight * dosage) >= maxDosage) {
                secondBorderWeight = firstBorderWeight - step;
            } else {
                secondBorderWeight = firstBorderWeight + step;
            };
            calculatedBorderValues.push({weight: firstBorderWeight, dosage: dosage}, {weight: secondBorderWeight, dosage: dosage});
        })
        return calculatedBorderValues
    };

    weights.forEach(weight => {
        dosages.forEach(dosage => {
            generateDrugCalculationTestCaseToResults(weight, dosage);
        });
    });
    if (maxDosage) {
        let borderWeightValues = calculateDosagesBorderValues(dosages, maxDosage);
        borderWeightValues.forEach(borderWeightElement => {
            if (!Boolean(drugCalculationCases.find(item => item.weight == borderWeightElement.weight))) {
                generateDrugCalculationTestCaseToResults(borderWeightElement.weight, borderWeightElement.dosage);
            };
        });
    };
    return {drugDosages: dosagesCases, calculations: drugCalculationCases}
};

function verifyFloatValue(actualValue: number, expectedValue: any, decimalPlaceDifference: number): void {
    let possibleDifference: number;
    if (decimalPlaceDifference === 1) {
        possibleDifference = 0.1;
    } else if (decimalPlaceDifference === 2) {
        possibleDifference = 0.01;
    } else if (decimalPlaceDifference === 3) {
        possibleDifference = 0.001;
    } else {
        throw new Error('possibleDifference can not be initialized')
    }
    const possibleValues = [
        expectedValue, 
        Number.parseFloat((expectedValue + possibleDifference).toFixed(decimalPlaceDifference)),
        Number.parseFloat((expectedValue - possibleDifference).toFixed(decimalPlaceDifference)),
    ]
    expect(possibleValues).toContain(actualValue);
}

describe('Acetaminophen (Tylenol)', () => {
    const Parameters = getTestData([10, 12.5, 15], 1000, 32);
    Parameters.calculations.forEach(param => {
        it(`test Acetaminophen (Tylenol) PO-Oral weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Acetaminophen (Tylenol)', 'NA', 'PO-Oral');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        })
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Acetaminophen (Tylenol) PO-Oral. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Acetaminophen (Tylenol)', 'NA', 'PO-Oral');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Adenosine (Adenocard)', () => {
    const Parameters = getTestData([0.1, 0.2], 12, 3);
    Parameters.calculations.forEach(param => {
        it(`test Adenosine (Adenocard) IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Adenosine (Adenocard)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Adenosine (Adenocard) IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Adenosine (Adenocard)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Albumin 5%', () => {
    const Parameters = getTestData([10, 15, 20], 500, 1); // clarify 1 coef
    Parameters.calculations.forEach(param => {
        it(`test Albumin 5% IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Albumin 5%', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Albumin 5%. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Albumin 5%', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Amiodarone', () => {
    const Parameters = getTestData([5], 300, 2);
    Parameters.calculations.forEach(param => {
        it(`test Amiodarone IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Amiodarone', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Amiodarone. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Amiodarone', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Ampicillin', () => {
    const MeningitisParameters = getTestData([100], 2000, 20);
    MeningitisParameters.calculations.forEach(param => {
        it(`test Ampicillin Meningitis IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin', 'Meningitis', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    MeningitisParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ampicillin Meningitis IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin', 'Meningitis', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const OtherIvParams = getTestData([50], 2000, 20);
    OtherIvParams.calculations.forEach(param => {
        it(`test Ampicillin Other IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin', 'Other', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    OtherIvParams.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ampicillin Other IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin', 'Other', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const OtherIntraMuscularParams = getTestData([50], 2000, 250);
    OtherIntraMuscularParams.calculations.forEach(param => {
        it(`test Ampicillin Other IntraMuscular weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin', 'Other', 'IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    OtherIntraMuscularParams.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ampicillin Other IntraMuscular. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin', 'Other', 'IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Ampicillin-Sulbactam (Unasyn)', () => {
    const MeningitisParameters = getTestData([100], 2000, 20);
    MeningitisParameters.calculations.forEach(param => {
        it(`test Ampicillin-Sulbactam (Unasyn) Meningitis IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin-Sulbactam (Unasyn)', 'Meningitis', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    MeningitisParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ampicillin-Sulbactam (Unasyn) Meningitis IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin-Sulbactam (Unasyn)', 'Meningitis', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const OtherIvParams = getTestData([25, 37.5, 50], 2000, 20);
    OtherIvParams.calculations.forEach(param => {
        it(`test Ampicillin-Sulbactam (Unasyn) Other IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin-Sulbactam (Unasyn)', 'Other', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    OtherIvParams.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ampicillin-Sulbactam (Unasyn) Other IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ampicillin-Sulbactam (Unasyn)', 'Other', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Atropine Sulfate', () => {
    const IvParameters = getTestData([0.02], 0.5, 0.1);
    IvParameters.calculations.forEach(param => {
        it(`test Atropine Sulfate IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Atropine Sulfate', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    IvParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Atropine Sulfate IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Atropine Sulfate', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const EtParams = getTestData([0.04, 0.05, 0.06], 1, 0.1);
    EtParams.calculations.forEach(param => {
        it(`test Atropine Sulfate ET weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Atropine Sulfate', 'NA', 'ET');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    EtParams.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Atropine Sulfate ET. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Atropine Sulfate', 'NA', 'ET');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Bicarbonate', () => {
    const ChildrenLessThan2YearsParameters = getTestData([1], 50, 0.5);
    ChildrenLessThan2YearsParameters.calculations.forEach(param => {
        it(`test Bicarbonate children < 2 years weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Bicarbonate', 'Infant & child < 2 years', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    ChildrenLessThan2YearsParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Bicarbonate children < 2 years. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Bicarbonate', 'Infant & child < 2 years', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const ChildrenMoreThan2YearsParameters = getTestData([1], 50, 1);
    ChildrenMoreThan2YearsParameters.calculations.forEach(param => {
        it(`test Bicarbonate children > 2 years weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Bicarbonate', 'Children > 2 years', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    ChildrenMoreThan2YearsParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Bicarbonate children > 2 years. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Bicarbonate', 'Children > 2 years', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Calcium Chloride', () => {
    const Parameters = getTestData([20], 1000, 20);
    Parameters.calculations.forEach(param => {
        it(`test Calcium Chloride weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Calcium Chloride', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Calcium Chloride. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Calcium Chloride', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Calcium Gluconate', () => {
    const Parameters = getTestData([60, 80, 100], 3000, 50);
    Parameters.calculations.forEach(param => {
        it(`test Calcium Gluconate weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Calcium Gluconate', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Calcium Gluconate. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Calcium Gluconate', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Cefazolin', () => {
    const Parameters = getTestData([50], 2000, 100);
    Parameters.calculations.forEach(param => {
        it(`test Cefazolin weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Cefazolin', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Cefazolin. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Cefazolin', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Ceftriaxone (Rocephin)', () => {
    const Parameters = getTestData([100], 2000, 40);
    Parameters.calculations.forEach(param => {
        it(`test Ceftriaxone (Rocephin) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ceftriaxone (Rocephin)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ceftriaxone (Rocephin). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ceftriaxone (Rocephin)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Clindamycin', () => {
    const Parameters = getTestData([10], 900, 12);
    Parameters.calculations.forEach(param => {
        it(`test Clindamycin weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Clindamycin', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Clindamycin. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Clindamycin', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Dexamethasone (Decadron)', () => {
    const AirwayEdemaParameters = getTestData([0.5], 10, 4);
    AirwayEdemaParameters.calculations.forEach(param => {
        it(`test Dexamethasone (Decadron) Airway Edema weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Airway Edema', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    AirwayEdemaParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Dexamethasone (Decadron) Airway Edema. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Airway Edema', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const CroupPoOralParameters = getTestData([0.6], 16);
    CroupPoOralParameters.calculations.forEach(param => {
        it(`test Dexamethasone (Decadron) Croup PO-Oral weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Croup', 'PO-Oral');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
        });
    });
    CroupPoOralParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Dexamethasone (Decadron) Croup PO-Oral. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Croup', 'PO-Oral');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const IvParameters = getTestData([0.6], 16, 4);
    IvParameters.calculations.forEach(param => {
        it(`test Dexamethasone (Decadron) IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Croup', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    IvParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Dexamethasone (Decadron) IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Croup', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const IntraMuscularParameters = getTestData([0.6], 16, 10);
    IntraMuscularParameters.calculations.forEach(param => {
        it(`test Dexamethasone (Decadron) IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Croup', 'IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    IntraMuscularParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Dexamethasone (Decadron) IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Dexamethasone (Decadron)', 'Croup', 'IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Dextrose (Glucose) Pediatric', () => {
    function getsDextroseDrugRoute(drugName: string, drugIndicationValue: string, drugRouteTitle: string, concentration: number): any {
        const drug: any = getDrugByName(drugName);
        for (let i=0; i<drug.Indication.length; i++) {
            const findedElem = drug.Indication[i].Route.find((elem: any) => elem.title === drugRouteTitle && elem.Concentration === concentration);
            if (findedElem && drug.Indication[i].value === drugIndicationValue) {
                return findedElem
            };
        };
    };
    const ZeroOneParameters = getTestData([0.5, 0.75, 1], 25, 0.1);
    ZeroOneParameters.calculations.forEach(param => {
        it(`test Dextrose (Glucose) Pediatric 0.1 Concentration weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getsDextroseDrugRoute('Dextrose (Glucose) Pediatric', 'NA', 'IV', 0.1);

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    ZeroOneParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Dextrose (Glucose) Pediatric 0.1 Concentration. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getsDextroseDrugRoute('Dextrose (Glucose) Pediatric', 'NA', 'IV', 0.1);

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const ZeroOneTwoFiveParameters = getTestData([0.5, 0.75, 1], 25, 0.125);
    ZeroOneTwoFiveParameters.calculations.forEach(param => {
        it(`test Dextrose (Glucose) Pediatric 0.125 Concentration weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getsDextroseDrugRoute('Dextrose (Glucose) Pediatric', 'NA', 'IV', 0.125);

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    ZeroOneTwoFiveParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Dextrose (Glucose) Pediatric 0.125 Concentration. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getsDextroseDrugRoute('Dextrose (Glucose) Pediatric', 'NA', 'IV', 0.125);

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Diazepam (Valium)', () => {
    const SedativeParameters = getTestData([0.1], 7.5, 5, [49, 50]);
    SedativeParameters.calculations.forEach(param => {
        it(`test Diazepam (Valium) Sedative weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Diazepam (Valium)', 'Sedative', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    SedativeParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Diazepam (Valium) Sedative. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Diazepam (Valium)', 'Sedative', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const StatusEpilepticusParameters = getTestData([0.15, 0.175, 0.2], 10, 5);
    StatusEpilepticusParameters.calculations.forEach(param => {
        it(`test Diazepam (Valium) Status Epilepticus weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Diazepam (Valium)', 'Status Epilepticus', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            verifyFloatValue(patientDose.dose, param.expected.patientDose, 2);
            expect(patientDose.max).toBe(param.expected.max);
            verifyFloatValue(volume, param.expected.volume, 2);
        });
    });
    StatusEpilepticusParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Diazepam (Valium) Status Epilepticus. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Diazepam (Valium)', 'Status Epilepticus', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const AcuteSeizureParameters = getTestData([0.5, 0.25], 20, 5);
    AcuteSeizureParameters.calculations.forEach(param => {
        it(`test Diazepam (Valium) Acute Seizure weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Diazepam (Valium)', 'Acute Seizure', 'PR-Rectal');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    AcuteSeizureParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Diazepam (Valium) Acute Seizure. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Diazepam (Valium)', 'Acute Seizure', 'PR-Rectal');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Diphenhydramine (Benadryl)', () => {
    const Parameters = getTestData([1], 50, 25);
    Parameters.calculations.forEach(param => {
        it(`test Diphenhydramine (Benadryl) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Diphenhydramine (Benadryl)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Diphenhydramine (Benadryl). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Diphenhydramine (Benadryl)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Epinephrine', () => {
    const AnaphylaxisStatusAsthmaticusParameters = getTestData([0.01], 0.3, 1);
    AnaphylaxisStatusAsthmaticusParameters.calculations.forEach(param => {
        it(`test Epinephrine Anaphylaxis/Status Asthmaticus weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine', 'Anaphylaxis/Status Asthmaticus', 'IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    AnaphylaxisStatusAsthmaticusParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Epinephrine Anaphylaxis/Status Asthmaticus. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine', 'Anaphylaxis/Status Asthmaticus', 'IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const HighDoseEndotracheal= getTestData([0.1], 2.5, 1);
    HighDoseEndotracheal.calculations.forEach(param => {
        it(`test Epinephrine High Dose Endotracheal weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine', 'High Dose Endotracheal', 'ET');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    HighDoseEndotracheal.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Epinephrine High Dose Endotracheal. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine', 'High Dose Endotracheal', 'ET');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const SymptomaticBradycardiaEndotracheal= getTestData([0.01], 1, 0.1);
    SymptomaticBradycardiaEndotracheal.calculations.forEach(param => {
        it(`test Epinephrine Symptomatic Bradycardia and/or Pulseless State weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine', 'Symptomatic Bradycardia and/or Pulseless State', 'IV or IO');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    SymptomaticBradycardiaEndotracheal.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Epinephrine Symptomatic Bradycardia and/or Pulseless State. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine', 'Symptomatic Bradycardia and/or Pulseless State', 'IV or IO');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Epinephrine, racemic', () => {
    const Parameters = getTestData([0.25, 0.375, 0.5], 0.5, 1);
    Parameters.calculations.forEach(param => {
        it(`test Epinephrine, racemic weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine, racemic', 'NA', 'Nebulization');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Epinephrine, racemic. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Epinephrine, racemic', 'NA', 'Nebulization');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Etomidate For RSI', () => {
    const Parameters = getTestData([0.3], 20, 2);
    Parameters.calculations.forEach(param => {
        it(`test Etomidate For RSI weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Etomidate For RSI', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Etomidate For RSI. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Etomidate For RSI', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Fentanyl', () => {
    const IVParameters = getTestData([1], 100, 50);
    IVParameters.calculations.forEach(param => {
        it(`test Fentanyl IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Fentanyl', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    IVParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Fentanyl IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Fentanyl', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const NasalParameters = getTestData([1.5, 1.75, 2], 100, 50);
    NasalParameters.calculations.forEach(param => {
        it(`test Fentanyl Nasal weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Fentanyl', 'NA', 'Nasal');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            verifyFloatValue(volume, param.expected.volume, 2);
        });
    });
    NasalParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Fentanyl Nasal. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Fentanyl', 'NA', 'Nasal');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Fosphenytoin (Cerebyx)', () => {
    const Parameters = getTestData([20], 1500, 25);
    Parameters.calculations.forEach(param => {
        it(`test Fosphenytoin (Cerebyx) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Fosphenytoin (Cerebyx)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Fosphenytoin (Cerebyx). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Fosphenytoin (Cerebyx)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Furosemide (Lasix)', () => {
    const Parameters = getTestData([1], 40, 10);
    Parameters.calculations.forEach(param => {
        it(`test Furosemide (Lasix) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Furosemide (Lasix)', 'NA', 'IV or IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Furosemide (Lasix). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Furosemide (Lasix)', 'NA', 'IV or IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Gentamicin', () => {
    const ChildGreater1MonthParameters = getTestData([2.5], 0, 5);
    ChildGreater1MonthParameters.calculations.forEach(param => {
        it(`test Gentamicin Infant and child > 1 month weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Gentamicin', 'Infant and child > 1 month', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, 0);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    ChildGreater1MonthParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Gentamicin Infant and child > 1 month. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Gentamicin', 'Infant and child > 1 month', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const ChildLess1MonthParameters = getTestData([3, 4], 0, 5);
    ChildLess1MonthParameters.calculations.forEach(param => {
        it(`test Gentamicin Infant and child < 1 month weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Gentamicin', 'Infants < 1 month ', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, 0);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    ChildLess1MonthParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Gentamicin Infant and child < 1 month. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Gentamicin', 'Infants < 1 month ', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Glucagon', () => {
    const Parameters = getTestData([0.05], 10, 1);
    Parameters.calculations.forEach(param => {
        it(`test Glucagon Beta/Calcium channel blocker overdose weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Glucagon', 'Beta/Calcium channel blocker overdose', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Glucagon Beta/Calcium channel blocker overdose. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Glucagon', 'Beta/Calcium channel blocker overdose', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const HypoglycemiaParameters = getTestData([0.03], 1, 1);
    HypoglycemiaParameters.calculations.forEach(param => {
        it(`test Glucagon Hypoglycemia weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Glucagon', 'Hypoglycemia', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            verifyFloatValue(patientDose.dose, param.expected.patientDose, 2);
            expect(patientDose.max).toBe(param.expected.max);
            verifyFloatValue(volume, param.expected.volume, 2);
        });
    });
    HypoglycemiaParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Glucagon Hypoglycemia. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Glucagon', 'Hypoglycemia', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Glucose (Dextrose) Pediatric', () => {
    const D10Parameters = getTestData([0.5, 0.75, 1], 25, 0.1);
    D10Parameters.calculations.forEach(param => {
        it(`test Glucose (Dextrose) Pediatric D10 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Glucose (Dextrose) Pediatric', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    D10Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Glucose (Dextrose) Pediatric D10. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Glucose (Dextrose) Pediatric', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const D12_5Parameters = getTestData([0.5, 0.75, 1], 25, 0.125);
    D12_5Parameters.calculations.forEach(param => {
        it(`test Glucose (Dextrose) Pediatric D12.5 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Glucose (Dextrose) Pediatric', 'NA', 'IV', 0.125);

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    D12_5Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Glucose (Dextrose) Pediatric D12.5. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Glucose (Dextrose) Pediatric', 'NA', 'IV', 0.125);

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Hydrocortisone', () => {
    const Parameters = getTestData([2], 100, 5);
    Parameters.calculations.forEach(param => {
        it(`test Hydrocortisone weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Hydrocortisone', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Hydrocortisone (Tylenol) PO-Oral. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Hydrocortisone', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Hypertonic (3%) Saline', () => {
    const Parameters = getTestData([3, 4.5, 6], 500, 1);
    Parameters.calculations.forEach(param => {
        it(`test Hypertonic (3%) Saline weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Hypertonic (3%) Saline', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Hypertonic (3%) Saline. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Hypertonic (3%) Saline', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Ibuprofen', () => {
    const Parameters = getTestData([10], 400, 20);
    Parameters.calculations.forEach(param => {
        it(`test Ibuprofen weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ibuprofen', 'NA', 'PO-Oral');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ibuprofen. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ibuprofen', 'NA', 'PO-Oral');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Insulin (Regular Insulin)', () => {
    const Parameters = getTestData([0.05, 0.075, 0.1], 0, 1);
    Parameters.calculations.forEach(param => {
        it(`test Insulin (Regular Insulin) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Insulin (Regular Insulin)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Insulin (Regular Insulin). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Insulin (Regular Insulin)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Ketamine For Sedation', () => {
    const Parameters = getTestData([1, 1.5, 2], 150, 50);
    Parameters.calculations.forEach(param => {
        it(`test Ketamine For Sedation weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ketamine For Sedation', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            verifyFloatValue(volume, param.expected.volume, 2);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ketamine For Sedation. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ketamine For Sedation', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Ketamine', () => {
    const Parameters = getTestData([4, 4.5, 5], 150, 100);
    Parameters.calculations.forEach(param => {
        it(`test Ketamine IntraMuscular weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Ketamine For Sedation', 'NA', 'IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Ketamine IntraMuscular. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Ketamine For Sedation', 'NA', 'IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Labetalol', () => {
    const Parameters = getTestData([0.2, 0.6, 1], 40, 5);
    Parameters.calculations.forEach(param => {
        it(`test Labetalol weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Labetalol', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Labetalol. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Labetalol', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Levetiracetam (Keppra)', () => {
    const Parameters = getTestData([60], 4500, 15);
    Parameters.calculations.forEach(param => {
        it(`test Levetiracetam (Keppra) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Levetiracetam (Keppra)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Levetiracetam (Keppra). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Levetiracetam (Keppra)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Lidocaine', () => {
    const IvIoParameters = getTestData([1], 100, 20);
    IvIoParameters.calculations.forEach(param => {
        it(`test Lidocaine IV or IO weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Lidocaine', 'NA', 'IV or IO');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    IvIoParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Lidocaine IV or IO. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Lidocaine', 'NA', 'IV or IO');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const EtParameters = getTestData([2, 2.5, 3], 100, 20);
    EtParameters.calculations.forEach(param => {
        it(`test Lidocaine ET weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Lidocaine', 'NA', 'ET');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    EtParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Lidocaine ET. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Lidocaine', 'NA', 'ET');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Lorazepam (Ativan)', () => {
    const Parameters = getTestData([0.1], 4, 1);
    Parameters.calculations.forEach(param => {
        it(`test Lorazepam (Ativan) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Lorazepam (Ativan)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Lorazepam (Ativan). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Lorazepam (Ativan)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Magnesium Sulfate', () => {
    const Parameters = getTestData([25, 37.5, 50], 2000, 60);
    Parameters.calculations.forEach(param => {
        it(`test Magnesium Sulfate weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Magnesium Sulfate', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Magnesium Sulfate. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Magnesium Sulfate', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Mannitol', () => {
    const Parameters = getTestData([0.5, 0.75, 1], 0, 0.2);
    Parameters.calculations.forEach(param => {
        it(`test Mannitol weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Mannitol', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Mannitol. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Mannitol', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Methylprednisolone (Solu-medrol)', () => {
    const Parameters = getTestData([2], 80, 10);
    Parameters.calculations.forEach(param => {
        it(`test Methylprednisolone (Solu-medrol) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Methylprednisolone (Solu-medrol)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Methylprednisolone (Solu-medrol). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Methylprednisolone (Solu-medrol)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Midazolam (Versed)', () => {
    const RapidSequenceIntubationParameters = getTestData([0.1], 5, 5);
    RapidSequenceIntubationParameters.calculations.forEach(param => {
        it(`test Midazolam (Versed) Rapid Sequence Intubation weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Rapid Sequence Intubation', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    RapidSequenceIntubationParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Midazolam (Versed) Rapid Sequence Intubation. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Rapid Sequence Intubation', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const SedationIvParameters = getTestData([0.1], 2.5, 5);
    SedationIvParameters.calculations.forEach(param => {
        it(`test Midazolam (Versed) Sedation IV weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Sedation', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    SedationIvParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Midazolam (Versed) Sedation IV. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Sedation', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const SedationIntraMuscularParameters = getTestData([0.15], 6, 5);
    SedationIntraMuscularParameters.calculations.forEach(param => {
        it(`test Midazolam (Versed) Sedation IntraMuscular weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Sedation', 'IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    SedationIntraMuscularParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Midazolam (Versed) Sedation IntraMuscular. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Sedation', 'IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const SedationNasalParameters = getTestData([0.2], 10, 5);
    SedationNasalParameters.calculations.forEach(param => {
        it(`test Midazolam (Versed) Sedation Nasal weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Sedation', 'Nasal');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    SedationNasalParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Midazolam (Versed) Sedation Nasal. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Midazolam (Versed)', 'Sedation', 'Nasal');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Morphine Sulfate', () => {
    const Concentration4Parameters = getTestData([0.1], 5, 4);
    Concentration4Parameters.calculations.forEach(param => {
        it(`test Morphine Sulfate Concentration 4 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Morphine Sulfate', 'NA', 'IV or IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, 4, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Concentration4Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Morphine Sulfate Concentration 4. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Morphine Sulfate', 'NA', 'IV or IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const Concentration2Parameters = getTestData([0.1], 5, 2);
    Concentration2Parameters.calculations.forEach(param => {
        it(`test Morphine Sulfate Concentration 2 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Morphine Sulfate', 'NA', 'IV or IntraMuscular');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, 2, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Concentration2Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Morphine Sulfate Concentration 2. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Morphine Sulfate', 'NA', 'IV or IntraMuscular');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Naloxone (Narcan)', () => {
    const IvIoParameters = getTestData([0.1], 2, 0.4);
    IvIoParameters.calculations.forEach(param => {
        it(`test Naloxone (Narcan) Opioid intoxication/overdose IV or IO weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'IV or IO');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            verifyFloatValue(patientDose.dose, param.expected.patientDose, 2);
            expect(patientDose.max).toBe(param.expected.max);
            if (param.expected.volume){
                expect(volume).toBeCloseTo(param.expected.volume, 0);
            };
        });
    });
    IvIoParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Naloxone (Narcan) Opioid intoxication/overdose IV or IO. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'IV or IO');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const Et1Parameters = getTestData([0.2], 5, 1);
    Et1Parameters.calculations.forEach(param => {
        it(`test Naloxone (Narcan) Opioid intoxication/overdose ET Concentration 1 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'ET', 1);

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Et1Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Naloxone (Narcan) Opioid intoxication/overdose ET Concentration 1. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'ET', 1);

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const Et0_4Parameters = getTestData([0.2], 5, 0.4);
    Et0_4Parameters.calculations.forEach(param => {
        it(`test Naloxone (Narcan) Opioid intoxication/overdose ET Concentration 0.4 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'ET', 0.4);

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Et0_4Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Naloxone (Narcan) Opioid intoxication/overdose ET Concentration 0.4. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'ET', 0.4);

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const IntraMuscularSubO1Parameters = getTestData([0.1], 2, 1);
    IntraMuscularSubO1Parameters.calculations.forEach(param => {
        it(`test Naloxone (Narcan) Opioid intoxication/overdose IntraMuscular or subQ Concentration 1 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'IntraMuscular or SubQ', 1);

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    IntraMuscularSubO1Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Naloxone (Narcan) Opioid intoxication/overdose IntraMuscular or subQ Concentration 1. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'IntraMuscular or SubQ', 1);

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const IntraMuscularSubO0_4Parameters = getTestData([0.1], 2, 0.4);
    IntraMuscularSubO0_4Parameters.calculations.forEach(param => {
        it(`test Naloxone (Narcan) Opioid intoxication/overdose IntraMuscular or subQ Concentration 0.4 weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'IntraMuscular or SubQ', 0.4);

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    IntraMuscularSubO0_4Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Naloxone (Narcan) Opioid intoxication/overdose IntraMuscular or subQ Concentration 0.4. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Opioid intoxication/overdose (full reversal)', 'IntraMuscular or SubQ', 0.4);

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
    const NasalParameters = getTestData([0.001, 0.008, 0.015], 0, 0.04);
    NasalParameters.calculations.forEach(param => {
        it(`test Naloxone (Narcan) Respiratory depression from therapeutic opioid dosing weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Respiratory depression from therapeutic opioid dosing', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));
            if (patientDose && param.expected.volume) {
                verifyFloatValue(patientDose.dose, param.expected.patientDose, 2);
                expect(patientDose.max).toBe(param.expected.max);
                expect(volume).toBeCloseTo(param.expected.volume, 0);
            };
        });
    });
    NasalParameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Naloxone (Narcan) Respiratory depression from therapeutic opioid dosing. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Naloxone (Narcan)', 'Respiratory depression from therapeutic opioid dosing', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Phenobarbital', () => {
    const Parameters = getTestData([15, 17.5, 20], 1000, 10);
    Parameters.calculations.forEach(param => {
        it(`test Phenobarbital weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Phenobarbital', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Phenobarbital. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Phenobarbital', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Procainamide (Pronestyl)', () => {
    const Parameters = getTestData([15], 100, 20);
    Parameters.calculations.forEach(param => {
        it(`test Procainamide (Pronestyl) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Procainamide (Pronestyl)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Procainamide (Pronestyl). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Procainamide (Pronestyl)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Rocuronium (Zemuron)', () => {
    const Parameters = getTestData([1], 100, 10);
    Parameters.calculations.forEach(param => {
        it(`test Rocuronium (Zemuron) weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Rocuronium (Zemuron)', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Rocuronium (Zemuron). Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Rocuronium (Zemuron)', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Succinylcholine', () => {
    const Parameters = getTestData([1, 1.5, 2], 150, 20);
    Parameters.calculations.forEach(param => {
        it(`test Succinylcholine weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Succinylcholine', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            if (param.expected.volume) {
                verifyFloatValue(volume, param.expected.volume, 2);
            } else {
                throw new Error('no param.expected.volume value');
            };
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Succinylcholine. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Succinylcholine', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Terbutaline', () => {
    const Parameters = getTestData([5, 7.5, 10], 250, 1000);
    Parameters.calculations.forEach(param => {
        it(`test Terbutaline weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Terbutaline', 'NA', 'SubQ');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBeCloseTo(param.expected.patientDose, 1);
            expect(patientDose.max).toBe(param.expected.max);
            if (param.expected.volume) {
                verifyFloatValue(volume, param.expected.volume, 2);
            } else {
                throw new Error('no param.expected.volume value');
            };
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Terbutaline. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Terbutaline', 'NA', 'SubQ');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Valproic Acid', () => {
    const Parameters = getTestData([20, 30, 40], 3000, 5);
    Parameters.calculations.forEach(param => {
        it(`test Valproic Acid weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Valproic Acid', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Valproic Acid. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Valproic Acid', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Vancomycin', () => {
    const Parameters = getTestData([10, 12.5, 15], 1000, 5);
    Parameters.calculations.forEach(param => {
        it(`test Vancomycin weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Vancomycin', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Vancomycin. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Vancomycin', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});

describe('Vecuronium', () => {
    const Parameters = getTestData([0.1], 20, 1);
    Parameters.calculations.forEach(param => {
        it(`test Vecuronium weight:${param.weight} dose:${param.dose}`, () => {
            let drugRoute = getResusDrugRoute('Vecuronium', 'NA', 'IV');

            let patientDose = calculatePatientDose(param.weight, param.dose, drugRoute.MaxDose);
            let volume = Number.parseFloat(calculateVolumeOnly(patientDose.dose, drugRoute.Concentration, drugRoute.DoseUnits, drugRoute.Concentration_Units));

            expect(patientDose.dose).toBe(param.expected.patientDose);
            expect(patientDose.max).toBe(param.expected.max);
            expect(volume).toBe(param.expected.volume);
        });
    });
    Parameters.drugDosages.forEach(param => {
        it(`test ${param.dosageName} dosage for Vecuronium. Expect to get ${param.dosageValue}`, () => {
            let drugRoute = getResusDrugRoute('Vecuronium', 'NA', 'IV');

            expect(drugRoute[param.dosageName]).toBe(param.dosageValue);
        });
    });
});