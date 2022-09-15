import {calculateResult, calculateExtendedResult} from '../../src/Modules/Resuscitation/screens/AirwayAndBreathing/calculateResult'

describe('Airway and breathing screen unit tests.', () => {
    const NegativeCalculateResultCases = [
        {weight: 6.5, expectedResult: undefined},
        {weight: 0, expectedResult: undefined},
    ];
    NegativeCalculateResultCases.forEach(testCase => {
        it(`Test calculateResult func. With weight: ${testCase.weight}`, () => {
            const Result = calculateResult(testCase.weight);

            expect(Result).toBe(testCase.expectedResult);
        });
    });
    const CalculateResultCases = [
        {weight: 0.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'Suction Catheter (FR)']},
        {weight: 1, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'Suction Catheter (FR)']},
        {weight: 1.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 2, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 2.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 3, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 3.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 4, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 4.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 5.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
        {weight: 6, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade (Straight)', 'ET Tube Depth', 'LMA', 'Suction Catheter (FR)']},
    ];
    CalculateResultCases.forEach(testCase => {
        it(`Test calculateResult func. With weight: ${testCase.weight}`, () => {
            const Result = calculateResult(testCase.weight);

            expect(Result?.weightKg.exact).toBe(testCase.weight);
            expect(Result?.description).toStrictEqual([
                'Needle Thoracostomy',
                'Second Intercoastal Space',
                'Mid-Clavicular Line of Fourth Intercostal',
                'Space Anterior Axillary Line'
              ]);

            const lables: Set<string> = new Set(Result?.content.map(item => item.lable));
            const expectedLabes: Set<string> = new Set(testCase.expectedContent);

            expect(lables).toStrictEqual(expectedLabes);
        });
    });
    const isNumberInRange = (value: number, rangeMin: number, rangeMax: number): boolean => {
        return rangeMin <= value && value <= rangeMax
    };

    const PositiveCasesCalculateExtendedResult = [
        {weight: 0.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)']},
        {weight: 0.7, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)']},
        {weight: 0.8, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)']},
        {weight: 1.2, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)']},
        {weight: 1.3, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 1.7, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 1.8, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 2.2, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 2.3, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 2.7, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 2.8, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 3.2, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 3.3, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 3.7, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 3.8, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 4.2, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA']},
        {weight: 4.3, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 4.7, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 4.8, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 5.2, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 5.3, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 5.7, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 5.8, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 6.4, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 6.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 7.4, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 7.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 8.4, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 8.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 9.4, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 9.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 10.4, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 10.5, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 11, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 12, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 13, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 14, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 15, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 16, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 17, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 19, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 20, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 22, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 24, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 25, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 29, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 30, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 38, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 39, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 40, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 42, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 43, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 49, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 50, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 53, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 53, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 54, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 59, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 60, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 62, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 63, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 64, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 65, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
        {weight: 70, expectedContent: ['Endotracheal Tube (I.D.)', 'Laryngoscope Blade', 'Suction Catheter (FR)', 'LMA', "Microcuff Endotracheal Tubes"]},
    ];
    PositiveCasesCalculateExtendedResult.forEach(testCase => {
        it(`Test calculateExtendedResult func. With weight ${testCase.weight}`, () => {
            const Result = calculateExtendedResult(testCase.weight);

            if (Result) {
                expect(isNumberInRange(testCase.weight, Result.weightKg.min, Result.weightKg.max)).toBeTruthy();

                const lables: Set<string> = new Set(Result.content.map(item => item.lable));
                const expectedLabes: Set<string> = new Set(testCase.expectedContent);

                expect(lables).toStrictEqual(expectedLabes);
            } else {
                throw new Error(`Func result is not defined. Result - ${Result}`);
            };
        });
    });
});
