import { a12UCalculator } from '../../src/Modules/Asthma/screens/ESICalculator/calculators/a12UCalculator';
import { a23Calculator } from '../../src/Modules/Asthma/screens/ESICalculator/calculators/a23Calculator';
import { a4Calculator } from '../../src/Modules/Asthma/screens/ESICalculator/calculators/a4Calculator';
import { a5Calculator } from '../../src/Modules/Asthma/screens/ESICalculator/calculators/a5Calculator';
import { a612Calculator } from '../../src/Modules/Asthma/screens/ESICalculator/calculators/a612Calculator';
import { 
    calculateRespiratoryResult, 
    calculateRetractions, 
    calculateDyspnea, 
    calculateAuscultation, 
    calculateDyspneaByCount 
} from '../../src/Modules/Asthma/screens/ESICalculator/calculators/sharedCalculations';

const getScoring = (points: number [], optionValue: string []) => {
    let scoring: {scores: any [], points: number [], optionValue: string []} = {
        scores: [], 
        points: points,
        optionValue 
    };
    for (let i = 0; i < points.length; i++) {
        scoring.scores.push(
            {
                title: "Mock data",
                name: 'Mock data',
                type: "Mock data",
                options: [
                    {
                        title: "Mock data",
                        value: optionValue[i],
                        points: points[i],
                        EC: "Mock data",
                        EA: "Mock data"
                    }
                ]
            }
        );
    };
    
    return scoring;
};

describe('Test Shared Calculators', () => {
    const CalculateRespiratoryResultCases = [
        {results: {Respiratory: 'T1'}, scoring: getScoring([10], ['T1']), expectedResult: 10},
        {results: {Respiratory: 'T1'}, scoring: getScoring([15], ['T1']), expectedResult: 15},
        {results: {Respiratory: 'T2'}, scoring: getScoring([20], ['T2']), expectedResult: 20},
        {results: {Respiratory: 'T2'}, scoring: getScoring([0], ['T2']), expectedResult: 0},
        {results: {Respiratory: 'T1'}, scoring: getScoring([10], ['T2']), expectedResult: 0},
        {results: {Respiratory: []}, scoring: getScoring([10], ['T1']), expectedResult: 0},
    ];
    CalculateRespiratoryResultCases.forEach(testCase => {
        it(`Test calculateRespiratoryResult calculations with results: ${testCase.results.Respiratory} scoring points: ${testCase.scoring.points}, scoring value: ${testCase.scoring.optionValue}`, () => {
            const FunctionResult = calculateRespiratoryResult(testCase.results, testCase.scoring);

            expect(FunctionResult).toBe(testCase.expectedResult);
        });
    });
    const CalculateRetractionsCases = [
        {results: {Retractions: ['T2']}, scoring: getScoring([1, 2], ['T1', 'T2']), expectedResult: 2},
        {results: {Retractions: ['T1']}, scoring: getScoring([1, 2], ['T1', 'T1']), expectedResult: 2},
        {results: {Retractions: ['T1']}, scoring: getScoring([1, 1], ['T1', 'T1']), expectedResult: 1},
        {results: {Retractions: ['T1']}, scoring: getScoring([1, 0], ['T1', 'T1']), expectedResult: 0},
        {results: {Retractions: ['T1']}, scoring: getScoring([1, 3], ['T1', 'T1']), expectedResult: 3},
        {results: {Retractions: ['T1']}, scoring: getScoring([1, 4], ['T1', 'T1']), expectedResult: 3},
        {results: {Retractions: ['T0']}, scoring: getScoring([1, 4], ['T1', 'T1']), expectedResult: 0},
        {results: {Retractions: ['T1']}, scoring: getScoring([1, 4], ['T1', 'T0']), expectedResult: 0},

    ];
    CalculateRetractionsCases.forEach(testCase => {
        it(`Test calculateRetractions calculations with results: ${testCase.results.Retractions} scoring points: ${testCase.scoring.points}, scoring value: ${testCase.scoring.optionValue}`, () => {
            const FunctionResult = calculateRetractions(testCase.results, testCase.scoring);

            expect(FunctionResult).toBe(testCase.expectedResult);
        });
    });
    const CalculateDyspneaCases = [
        {results: { Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK'] }, expectedResult: 3},
        {results: { Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 3},
        {results: { Dyspnea: ['A_RS_DYSPNEA_STOPPLAY', 'A_RS_DYSPNEA_NORMAL', 'Mock_Data'] }, expectedResult: 3},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DROWSYCONFUSED', 'A_RS_DYSPNEA_NORMAL', 'Mock_Data'] }, expectedResult: 3},
        {results: { Dyspnea: ['MockData', 'A_RS_DYSPNEA_DROWSYCONFUSED', 'A_RS_DYSPNEA_STOPPLAY', 'A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 3},
        {results: { Dyspnea: ['MockData', 'A_RS_DYSPNEA_DROWSYCONFUSED', 'A_RS_DYSPNEA_DECREASEDAPP', 'A_RS_DYSPNEA_HYPERACTIVITY', 'A_RS_DYSPNEA_COUGHING'] }, expectedResult: 3},

        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP'] }, expectedResult: 1},
        {results: { Dyspnea: ['A_RS_DYSPNEA_COUGHING'] }, expectedResult: 1},
        {results: { Dyspnea: ['A_RS_DYSPNEA_HYPERACTIVITY'] }, expectedResult: 1},

        {results: { Dyspnea: ['A_RS_DYSPNEA_HYPERACTIVITY', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 1},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 1},
        {results: { Dyspnea: ['A_RS_DYSPNEA_COUGHING', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 1},

        {results: { Dyspnea: ['A_RS_DYSPNEA_COUGHING', 'A_RS_DYSPNEA_DECREASEDAPP', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_HYPERACTIVITY', 'A_RS_DYSPNEA_DECREASEDAPP'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP', 'MockData1'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP', 'MockData1', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP', 'A_RS_DYSPNEA_HYPERACTIVITY'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP', 'A_RS_DYSPNEA_HYPERACTIVITY', 'A_RS_DYSPNEA_COUGHING'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP', 'A_RS_DYSPNEA_HYPERACTIVITY', 'A_RS_DYSPNEA_COUGHING', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_DECREASEDAPP', 'A_RS_DYSPNEA_HYPERACTIVITY', 'A_RS_DYSPNEA_COUGHING', 'A_RS_DYSPNEA_NORMAL'] }, expectedResult: 2},
        {results: { Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'MockData1', 'A_RS_DYSPNEA_DECREASEDAPP'] }, expectedResult: 2},

        {results: { Dyspnea: [] }, expectedResult: 0},
        {results: { Dyspnea: ['A_RS_DYSPNEA_NORMAL'] }, expectedResult: 0},

    ];
    CalculateDyspneaCases.forEach(testCase => {
        it(`Test calculateDyspnea calculations with results: ${testCase.results.Dyspnea}`, () => {
            const FunctionResult = calculateDyspnea(testCase.results);

            expect(FunctionResult).toBe(testCase.expectedResult);
        });
    });
    const CalculateAuscultationCases = [
        {results: {Auscultation: ['A_RS_AUSC_NORMAL']}, expectedResult: 0},
        {results: {Auscultation: []}, expectedResult: 0},

        {results: {Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE']}, expectedResult: 3},
        {results: {Auscultation: ['A_RS_AUSC_DIMINISHEDSOUNDS']}, expectedResult: 3},
        {results: {Auscultation: ['A_RS_AUSC_DIMINISHEDSOUNDS', 'A_RS_AUSC_INSPWHEEZE']}, expectedResult: 3},
        {results: {Auscultation: ['A_RS_AUSC_DIMINISHEDSOUNDS', 'A_RS_AUSC_EXPWHEEZE']}, expectedResult: 3},
        {results: {Auscultation: ['A_RS_AUSC_DIMINISHEDSOUNDS', 'A_RS_AUSC_NORMAL']}, expectedResult: 3},
        {results: {Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE', 'A_RS_AUSC_NORMAL']}, expectedResult: 3},

        
        {results: {Auscultation: ['A_RS_AUSC_EXPWHEEZE']}, expectedResult: 2},
        {results: {Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_NORMAL']}, expectedResult: 2},
        {results: {Auscultation: ['A_RS_AUSC_INSPWHEEZE']}, expectedResult: 2},
        {results: {Auscultation: ['A_RS_AUSC_INSPWHEEZE', 'A_RS_AUSC_NORMAL']}, expectedResult: 2},
        {results: {Auscultation: ['A_RS_AUSC_ENDEXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE']}, expectedResult: 2},
        {results: {Auscultation: ['A_RS_AUSC_ENDEXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE', 'A_RS_AUSC_NORMAL']}, expectedResult: 2},

        {results: {Auscultation: ['A_RS_AUSC_ENDEXPWHEEZE']}, expectedResult: 1},
        {results: {Auscultation: ['A_RS_AUSC_ENDEXPWHEEZE', 'A_RS_AUSC_NORMAL']}, expectedResult: 1},

    ];
    CalculateAuscultationCases.forEach(testCase => {
        it(`Test calculateAuscultation calculations with results: ${testCase.results.Auscultation}`, () => {
            const FunctionResult = calculateAuscultation(testCase.results);

            expect(FunctionResult).toBe(testCase.expectedResult);calculateDyspneaByCount
        });
    });
    const CalculateDyspneaByCountCases = [
        { results: { Dyspnea: 'T3' }, scoring: getScoring([1,1,10], ['T1', 'T2', 'T3']), expectedResult: 10},
        { results: { Dyspnea: 'T3' }, scoring: getScoring([1,1,5], ['T1', 'T2', 'T3']), expectedResult: 5},

        { results: { Dyspnea: 'T3' }, scoring: getScoring([1,1,5], ['T1', 'T2', 'T2']), expectedResult: 0},
        { results: { Dyspnea: 'T2' }, scoring: getScoring([1,1,5], ['T1', 'T2', 'T3']), expectedResult: 0},
    ];
    CalculateDyspneaByCountCases.forEach(testCase => {
        it(`Test calculateDyspneaByCount calculations with results: ${testCase.results.Dyspnea}, scoring points: ${testCase.scoring.points}, scoring value: ${testCase.scoring.optionValue}`, () => {
            const FunctionResult = calculateDyspneaByCount(testCase.results, testCase.scoring);

            expect(FunctionResult).toBe(testCase.expectedResult);
        });
    });
});

describe('Test age calculator', () => {
    const A12UCalculatorCases = [
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 5},
        {result: {
             Respiratory: 'A_RS_SECOND', 
             Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
             Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
             Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 6},
       {result: {
        Respiratory: 'A_RS_SECOND', 
        Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
        Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
        Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 5},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
    ];
    A12UCalculatorCases.forEach(testCase => {
        it(`Test a12UCalculator calculator with:
                Respiratory: ${testCase.result.Respiratory}
                Retractions: ${testCase.result.Retractions}
                Dyspnea: ${testCase.result.Dyspnea}
                Auscultation: ${testCase.result.Auscultation}`, () => {
            const Result = a12UCalculator(testCase.result);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const A23CalculatorCases = [
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 8},
        {result: {
             Respiratory: 'A_RS_SECOND', 
             Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
             Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
             Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 9},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 6},
       {result: {
        Respiratory: 'A_RS_SECOND', 
        Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
        Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
        Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 5},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
    ];
    A23CalculatorCases.forEach(testCase => {
        it(`Test a23Calculator calculator with:
                Respiratory: ${testCase.result.Respiratory}
                Retractions: ${testCase.result.Retractions}
                Dyspnea: ${testCase.result.Dyspnea}
                Auscultation: ${testCase.result.Auscultation}`, () => {
            const Result = a23Calculator(testCase.result);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const A4CalculatorCases = [
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 8},
        {result: {
             Respiratory: 'A_RS_SECOND', 
             Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
             Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
             Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 9},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 6},
       {result: {
        Respiratory: 'A_RS_SECOND', 
        Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
        Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
        Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 5},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
    ];
    A4CalculatorCases.forEach(testCase => {
        it(`Test a4Calculator calculator with:
                Respiratory: ${testCase.result.Respiratory}
                Retractions: ${testCase.result.Retractions}
                Dyspnea: ${testCase.result.Dyspnea}
                Auscultation: ${testCase.result.Auscultation}`, () => {
            const Result = a4Calculator(testCase.result);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const A5CalculatorCases = [
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 5},
        {result: {
             Respiratory: 'A_RS_SECOND', 
             Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
             Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
             Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 6},
       {result: {
        Respiratory: 'A_RS_SECOND', 
        Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
        Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
        Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 5},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
    ];
    A5CalculatorCases.forEach(testCase => {
        it(`Test a5Calculator calculator with:
                Respiratory: ${testCase.result.Respiratory}
                Retractions: ${testCase.result.Retractions}
                Dyspnea: ${testCase.result.Dyspnea}
                Auscultation: ${testCase.result.Auscultation}`, () => {
            const Result = a5Calculator(testCase.result);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const A612CalculatorCases = [
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 5},
        {result: {
             Respiratory: 'A_RS_SECOND', 
             Retractions: ['A_RS_RETRACTIONS_SUBSTERNAL'], 
             Dyspnea: ['A_RS_DYSPNEA_STOPEATORDRINK', 'A_RS_DYSPNEA_NORMAL'], 
             Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
       }, expectedResult: 6},
       {result: {
        Respiratory: 'A_RS_SECOND', 
        Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
        Dyspnea: ['A_RS_DYSPNEA_NORMAL'], 
        Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 6},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
        {result: {
            Respiratory: 'A_RS_FIRST', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_INSPWHEEZE'] 
            }, expectedResult: 5},
        {result: {
            Respiratory: 'A_RS_SECOND', 
            Retractions: ['A_RS_RETRACTIONS_SUPRACLAVICULAR', 'A_RS_RETRACTIONS_SUBSTERNAL'], 
            Dyspnea: ['A_RS_DYSPNEA_NORMAL', 'A_RS_DYSPNEA_46'], 
            Auscultation: ['A_RS_AUSC_EXPWHEEZE', 'A_RS_AUSC_INSPWHEEZE'] 
        }, expectedResult: 7},
    ];
    A612CalculatorCases.forEach(testCase => {
        it(`Test a612Calculator calculator with:
                Respiratory: ${testCase.result.Respiratory}
                Retractions: ${testCase.result.Retractions}
                Dyspnea: ${testCase.result.Dyspnea}
                Auscultation: ${testCase.result.Auscultation}`, () => {
            const Result = a612Calculator(testCase.result);
            
            expect(Result).toBe(testCase.expectedResult);
        });
    });
});