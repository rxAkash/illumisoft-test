import {handleAnswerWithNone} from '../../src/Modules/Antibiotics/utils';

describe('Antibiotics Module utils tests', () => {
    const Cases = [
        {values: ['value1', 'value2'], answers: ['answer1', 'answer2'], expectedResult: ['value1', 'value2']},
        {values: ['value1', 'none'], answers: ['answer1', 'answer2'], expectedResult: ['none']},
        {values: ['value1', 'none'], answers: ['answer1', 'none'], expectedResult: ['value1']},
        {values: ['none'], answers: ['answer1', 'none'], expectedResult: ['none']},
        {values: ['value1', 'value2'], answers: ['answer1', 'none'], expectedResult: ['value1', 'value2']},
    ];
    Cases.forEach(testCase => {
        it(`Test handleAnswerWithNone func with values ${testCase.values} and answers ${testCase.answers}`, () => {
            const Result = handleAnswerWithNone(testCase.values, testCase.answers);

            expect(Result).toStrictEqual(testCase.expectedResult);
        });
    });
  });