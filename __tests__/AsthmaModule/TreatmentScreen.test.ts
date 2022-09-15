import { calculateEDTreatment } from '../../src/Modules/Asthma/screens/Treatments/calculateEdTreatment';

interface EDTreatmentCase {
    score?: number,
    hourSelected?: string,
    esiScore?: string,
    treatment?: string,
    expectedResult: string | undefined
};

const Treatments = {
    option_1: 'A_IN_TS_20mgPerHr',
    option_2: 'A_IN_TS_8q2',
    option_3: 'A_IN_TS_8q4',
    option_4: 'A_IN_TS_4q4',
};
const Hours = {
    one_hour: 'A_ED_HS_1',
    two_hours: 'A_ED_HS_2',
    three_hours: 'A_ED_HS_3',
    four_hours: 'A_ED_HS_4',
};
const EtiScores = {
    score_1: 'A_ED_ESIS_1',
    score_2: 'A_ED_ESIS_2',
    score_3: 'A_ED_ESIS_3'
};

describe('Test Treatment screen logic.', () => {
    
    const Cases: EDTreatmentCase [] = [
        { score: 1, treatment: Treatments.option_1, expectedResult: 'Albuterol 8 puffs, q2 hours' },
        { score: 2, treatment: Treatments.option_1, expectedResult: 'Albuterol 8 puffs, q2 hours' },
        { score: 7, treatment: Treatments.option_1, expectedResult: 'Albuterol 8 puffs, q2 hours' },
        { score: 8, treatment: Treatments.option_1, expectedResult: 'Albuterol 8 puffs, q2 hours' },
        { score: 9, treatment: Treatments.option_1, expectedResult: 'Albuterol 20mg/hr' },
        { score: 10, treatment: Treatments.option_1, expectedResult: 'Albuterol 20mg/hr' },

        { score: 1, treatment: Treatments.option_2, expectedResult: 'Albuterol 8 puffs, q4 hours' },
        { score: 3, treatment: Treatments.option_2, expectedResult: 'Albuterol 8 puffs, q4 hours' },
        { score: 4, treatment: Treatments.option_2, expectedResult: 'Albuterol 8 puffs, q4 hours' },
        { score: 5, treatment: Treatments.option_2, expectedResult: 'Albuterol 8 puffs, q2 hours' },
        { score: 8, treatment: Treatments.option_2, expectedResult: 'Albuterol 8 puffs, q2 hours' },
        { score: 9, treatment: Treatments.option_2, expectedResult: 'Albuterol 20mg/hr' },
        { score: 10, treatment: Treatments.option_2, expectedResult: 'Albuterol 20mg/hr' },

        { score: 1, treatment: Treatments.option_3, expectedResult: 'Albuterol 4 puffs, q4 hours' },
        { score: 3, treatment: Treatments.option_3, expectedResult: 'Albuterol 4 puffs, q4 hours' },
        { score: 4, treatment: Treatments.option_3, expectedResult: 'Albuterol 4 puffs, q4 hours' },
        { score: 5, treatment: Treatments.option_3, expectedResult: 'Albuterol 8 puffs, q4 hours' },
        { score: 8, treatment: Treatments.option_3, expectedResult: 'Albuterol 8 puffs, q4 hours' },
        { score: 9, treatment: Treatments.option_3, expectedResult: 'Albuterol 8 puffs, q2 hours' },
        { score: 10, treatment: Treatments.option_3, expectedResult: 'Albuterol 8 puffs, q2 hours' },

        { score: 1, treatment: Treatments.option_4, expectedResult: 'Albuterol 4 puffs, q4 hours' },
        { score: 7, treatment: Treatments.option_4, expectedResult: 'Albuterol 4 puffs, q4 hours' },
        { score: 8, treatment: Treatments.option_4, expectedResult: 'Albuterol 4 puffs, q4 hours' },
        { score: 9, treatment: Treatments.option_4, expectedResult: 'Albuterol 8 puffs, q4 hours' },
        { score: 10, treatment: Treatments.option_4, expectedResult: 'Albuterol 8 puffs, q4 hours' },


        { hourSelected: Hours.one_hour, esiScore: EtiScores.score_1, expectedResult: 'User selected “1st Hour” AND (ESI Score = 1-2 OR RS = 9-12)' },
        { hourSelected: Hours.one_hour, esiScore: EtiScores.score_2, expectedResult: 'User selected “1st Hour” AND (ESI Score = 1-2 OR RS = 9-12)' },
        { hourSelected: Hours.one_hour, esiScore: EtiScores.score_3, expectedResult: 'User selected “1st Hour” AND (ESI Score = 3 OR RS = 6-8)' },
        { hourSelected: Hours.one_hour, esiScore: 'MockEtiScore', expectedResult: 'User selected “1st Hour” AND (ESI Score = 4-5 OR RS = 1-5)' },
        { hourSelected: Hours.one_hour, score: 1, expectedResult: 'User selected “1st Hour” AND (ESI Score = 4-5 OR RS = 1-5)' },
        { hourSelected: Hours.one_hour, score: 4, expectedResult: 'User selected “1st Hour” AND (ESI Score = 4-5 OR RS = 1-5)' },
        { hourSelected: Hours.one_hour, score: 5, expectedResult: 'User selected “1st Hour” AND (ESI Score = 4-5 OR RS = 1-5)' },
        { hourSelected: Hours.one_hour, score: 6, expectedResult: 'User selected “1st Hour” AND (ESI Score = 3 OR RS = 6-8)' },
        { hourSelected: Hours.one_hour, score: 8, expectedResult: 'User selected “1st Hour” AND (ESI Score = 3 OR RS = 6-8)' },
        { hourSelected: Hours.one_hour, score: 9, expectedResult: 'User selected “1st Hour” AND (ESI Score = 1-2 OR RS = 9-12)' },
        { hourSelected: Hours.one_hour, score: 10, expectedResult: 'User selected “1st Hour” AND (ESI Score = 1-2 OR RS = 9-12)' },

        { hourSelected: Hours.two_hours, score: 1, expectedResult: 'User selected “2nd Hour” AND RS = 1-4' },
        { hourSelected: Hours.two_hours, score: 3, expectedResult: 'User selected “2nd Hour” AND RS = 1-4' },
        { hourSelected: Hours.two_hours, score: 4, expectedResult: 'User selected “2nd Hour” AND RS = 1-4' },
        { hourSelected: Hours.two_hours, score: 5, expectedResult: 'User selected “2nd Hour” AND RS = 5-8' },
        { hourSelected: Hours.two_hours, score: 8, expectedResult: 'User selected “2nd Hour” AND RS = 5-8' },
        { hourSelected: Hours.two_hours, score: 9, expectedResult: 'User selected “2nd Hour” AND calculated RS = 9-12' },
        { hourSelected: Hours.two_hours, score: 10, expectedResult: 'User selected “2nd Hour” AND calculated RS = 9-12' },

        { hourSelected: Hours.three_hours, score: 1, expectedResult: 'User selected “3rd Hour” AND RS = 1-4' },
        { hourSelected: Hours.three_hours, score: 3, expectedResult: 'User selected “3rd Hour” AND RS = 1-4' },
        { hourSelected: Hours.three_hours, score: 4, expectedResult: 'User selected “3rd Hour” AND RS = 1-4' },
        { hourSelected: Hours.three_hours, score: 5, expectedResult: 'User selected “3rd Hour” AND RS = 5-8' },
        { hourSelected: Hours.three_hours, score: 8, expectedResult: 'User selected “3rd Hour” AND RS = 5-8' },
        { hourSelected: Hours.three_hours, score: 9, expectedResult: 'User selected “3rd Hour” AND RS = 9-12' },
        { hourSelected: Hours.three_hours, score: 10, expectedResult: 'User selected “3rd Hour” AND RS = 9-12' },

        { hourSelected: Hours.four_hours, score: 1, expectedResult: 'User selected “4th Hour” AND RS = 1-8' },
        { hourSelected: Hours.four_hours, score: 7, expectedResult: 'User selected “4th Hour” AND RS = 1-8' },
        { hourSelected: Hours.four_hours, score: 8, expectedResult: 'User selected “4th Hour” AND RS = 1-8' },
        { hourSelected: Hours.four_hours, score: 9, expectedResult: 'User selected “4th Hour” AND RS = 9-10' },
        { hourSelected: Hours.four_hours, score: 10, expectedResult: 'User selected “4th Hour” AND RS = 9-10' },
        { hourSelected: Hours.four_hours, score: 11, expectedResult: 'User selected “4th Hour” AND RS = 11-12' },
        { hourSelected: Hours.four_hours, score: 12, expectedResult: 'User selected “4th Hour” AND RS = 11-12' },
    ];
    Cases.forEach(testCase => {
        it(`Test calculateEDTreatment function with params: 
                Score: ${testCase.score} HourSelected: ${testCase.hourSelected} EsiScore: ${testCase.esiScore} Treatment: ${testCase.treatment}
        `, () => {
            const Result: any = calculateEDTreatment(testCase.score, testCase.hourSelected, testCase.esiScore, testCase.treatment);

            if ( Result && Result.treatmentTitle ) {
                expect(Result.treatmentTitle).toBe(testCase.expectedResult);
            } else if ( Result && Result.Description ) {
                expect(Result.Description).toBe(testCase.expectedResult);
            } else {
                throw new Error(`Result: ${Result}`);
            };
        });
    });
});;