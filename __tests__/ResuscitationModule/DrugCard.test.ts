import { getAgeRestrictionWarning } from '../../src/Modules/Resuscitation/components/DrugCard/conf';
import { handleRuleExceptions } from '../../src/Modules/Resuscitation/components/DrugCard/handleRuleExceptions';

const getDrugAgeRestrictionTestCases = (drugName: string, drugType: string, ageMsgPairs: {age: number, ageUnit: string, msgDisplayed: boolean} [], ageRestricted: boolean, msg: string) => {
  const testCases: any [] = [];
  const shouldMsgBeDisplayed = (caseAgeRestricted: boolean, drugAgeRestricted: boolean): boolean => {
    if ( !drugAgeRestricted ) {
      return true;
    } else if ( drugAgeRestricted && caseAgeRestricted ) {
      return true;
    } else {
      return false;
    }
  };
  ageMsgPairs.forEach(pair => {
    testCases.push(
      {
        drugName: drugName, 
        patientAge: pair.age, 
        ageUnit: pair.ageUnit, 
        drugType: drugType, 
        ageRestricted: true, 
        expectedMessage: (pair.msgDisplayed && shouldMsgBeDisplayed(true, ageRestricted)) ? msg : null
      }
    );
    testCases.push(
      {
        drugName: drugName, 
        patientAge: pair.age, 
        ageUnit: pair.ageUnit, 
        drugType: drugType, 
        ageRestricted: false, 
        expectedMessage: (pair.msgDisplayed && shouldMsgBeDisplayed(false, ageRestricted)) ? msg : null
      }
    );
  });
  return testCases;
};

describe('Drug Card component tests', () => {
  const GetAgeRestrictionWarningCases = 
    getDrugAgeRestrictionTestCases('Ketamine For Sedation', 'IV', [
      {age: 10, ageUnit: 'weeks', msgDisplayed: true},
      {age: 11, ageUnit: 'weeks', msgDisplayed: true},
      {age: 12, ageUnit: 'weeks', msgDisplayed: false},
      {age: 2, ageUnit: 'months', msgDisplayed: true},
      {age: 3, ageUnit: 'months', msgDisplayed: false},
      {age: 4, ageUnit: 'months', msgDisplayed: false},
    ], false, 'Contraindicated in infants < 3 months').concat(
      getDrugAgeRestrictionTestCases('Ketamine', 'IV', [
        {age: 10, ageUnit: 'weeks', msgDisplayed: true},
        {age: 11, ageUnit: 'weeks', msgDisplayed: true},        
        {age: 2, ageUnit: 'months', msgDisplayed: true},
        {age: 3, ageUnit: 'months', msgDisplayed: false},
        {age: 4, ageUnit: 'months', msgDisplayed: false},
      ], false, 'Contraindicated in infants < 3 months')).concat(
      getDrugAgeRestrictionTestCases('Dextrose (Glucose) Pediatric', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'See newly born drug dosing')).concat(
      getDrugAgeRestrictionTestCases('Dextrose (Glucose)', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'See newly born drug dosing')).concat(
      getDrugAgeRestrictionTestCases('Epinephrine', 'IntraMuscular', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], true, 'NOT recommended for infants < 1 month')).concat(
      getDrugAgeRestrictionTestCases('Epinephrine', 'ET', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], true, 'See newly born drug dosing')).concat(
      getDrugAgeRestrictionTestCases('Epinephrine', 'IV or IO', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: false},
        {age: 4, ageUnit: 'weeks', msgDisplayed: false},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: false},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], true, 'negative test')).concat(
      getDrugAgeRestrictionTestCases('Ceftriaxone (Rocephin)', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'NOT routinely recommended in infants < 1 month')).concat(
      getDrugAgeRestrictionTestCases('Clindamycin', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'NOT recommended in infants < 1 month')).concat(
      getDrugAgeRestrictionTestCases('Diphenhydramine (Benadryl)', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'Contraindicated for this age')).concat(
      getDrugAgeRestrictionTestCases('Glucose (Dextrose) Pediatric', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'See newly born drug dosing')).concat(
      getDrugAgeRestrictionTestCases('Ibuprofen', 'IV', [
        {age: 24, ageUnit: 'weeks', msgDisplayed: true},
        {age: 25, ageUnit: 'weeks', msgDisplayed: true},
        {age: 26, ageUnit: 'weeks', msgDisplayed: false},
        {age: 5, ageUnit: 'months', msgDisplayed: true},
        {age: 6, ageUnit: 'months', msgDisplayed: true},
        {age: 7, ageUnit: 'months', msgDisplayed: false},
      ], false, 'NOT recommended for infants < 6 months')).concat(
      getDrugAgeRestrictionTestCases('Mannitol', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'NOT recommended in infants < 1 month')).concat(
      getDrugAgeRestrictionTestCases('Valproic Acid', 'IV', [
        {age: 102, ageUnit: 'weeks', msgDisplayed: true},
        {age: 103, ageUnit: 'weeks', msgDisplayed: true},
        {age: 104, ageUnit: 'weeks', msgDisplayed: false},
        {age: 23, ageUnit: 'months', msgDisplayed: true},
        {age: 1, ageUnit: 'years', msgDisplayed: true},
        {age: 2, ageUnit: 'years', msgDisplayed: false},
      ], false, 'Avoid in children < 2 years')).concat(
      getDrugAgeRestrictionTestCases('Fentanyl', 'Nasal', [
        {age: 10, ageUnit: 'months', msgDisplayed: true},
        {age: 11, ageUnit: 'months', msgDisplayed: true},
        {age: 12, ageUnit: 'months', msgDisplayed: false},
        {age: 1, ageUnit: 'years', msgDisplayed: false},
      ], false, 'NOT recommended at this age')).concat(
      getDrugAgeRestrictionTestCases('Diazepam (Valium)', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], true, 'NOT recommended for infants < 1 month')).concat(
      getDrugAgeRestrictionTestCases('Hypertonic (3%) Saline', 'IV', [
        {age: 3, ageUnit: 'weeks', msgDisplayed: true},
        {age: 4, ageUnit: 'weeks', msgDisplayed: true},
        {age: 5, ageUnit: 'weeks', msgDisplayed: false},
        {age: 1, ageUnit: 'months', msgDisplayed: true},
        {age: 2, ageUnit: 'months', msgDisplayed: false},
      ], false, 'NOT recommended for infants < 1 month'))

  GetAgeRestrictionWarningCases.forEach(testCase => {
    it(`Test getAgeRestrictionWarning func. 
        drugName: ${testCase.drugName}, 
        patientAge: ${testCase.patientAge}, 
        ageUnit: ${testCase.ageUnit}, 
        drugType: ${testCase.drugType}, 
        ageRestricted: ${testCase.ageRestricted}`, () => {
      const Result = getAgeRestrictionWarning(testCase.drugName, testCase.patientAge, testCase.ageUnit, testCase.drugType, testCase.ageRestricted);

      expect(Result).toBe(testCase.expectedMessage);
    });
  });

  const gethandleRuleExceptionsTestCases = () => {
    const drugs = ['Dextrose (Glucose)', 'Dextrose (Glucose) Pediatric', 'Glucose (Dextrose) Pediatric'];
    const generatedTestCases: any [] = [];
    const testUnitsValue = 'test_units';
    drugs.forEach(drug => {
      const concentrations = [
        {value: 0.1, text: 'D10'},
        {value: 0.125, text: 'D12.5'},
        {value: 0.25, text: 'D25'},
        {value: 0.5, text: 'D50'},
      ];
      concentrations.forEach(concentration => {
        generatedTestCases.push({
          drugName: drug,
          drugInfo: {
            Concentration: concentration.value,
            Concentration_Units: testUnitsValue
          },
          expectedMsg: `${concentration.text} (${concentration.value}${testUnitsValue})`
        });
      });
    });
    drugs.forEach(drug => {
      generatedTestCases.push({
        drugName: drug,
        drugInfo: {
          Concentration: 1,
          Concentration_Units: testUnitsValue
        },
        expectedMsg: `1${testUnitsValue}`
      });
    });
    return generatedTestCases;
  };
    
  const HandleRuleExceptionsCases = gethandleRuleExceptionsTestCases();
  HandleRuleExceptionsCases.forEach(testCase => {
    it(`Test handleRuleExceptions func. drug ${testCase.drugName} concentration ${testCase.drugInfo.Concentration}`, () => {
      const Result = handleRuleExceptions(testCase.drugInfo, testCase.drugName);

      expect(Result).toBe(testCase.expectedMsg);
    });
  });
});
