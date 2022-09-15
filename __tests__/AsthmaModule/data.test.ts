import { ED_AGE_STEP } from '../../src/Modules/Asthma/screens/EDAgeSelect/conf';
import { ED_HOUR_SELECTION } from '../../src/Modules/Asthma/screens/EmergencyDeptartment/conf';
import { A_23_SCORING } from '../../src/Modules/Asthma/screens/ESICalculator/confs/a23conf';
import { A_4_SCORING } from '../../src/Modules/Asthma/screens/ESICalculator/confs/a4conf';
import { A_5_SCORING } from '../../src/Modules/Asthma/screens/ESICalculator/confs/a5conf';
import { A_612_SCORING } from '../../src/Modules/Asthma/screens/ESICalculator/confs/a612conf';
import { A_12U_SCORING } from '../../src/Modules/Asthma/screens/ESICalculator/confs/a12Uconf';

describe('On age secetion screen there should be', () => {
    it('valid question', () => {
        expect(ED_AGE_STEP.title).toBe('How old is the patient?');
    });
    const AgeOptions = [
        {title: '2-3 Years', value: 'A_AGE_23'}, 
        {title: '4 Years', value: 'A_AGE_4'}, 
        {title: '5 Years', value: 'A_AGE_5'}, 
        {title: '6-12 Years', value: 'A_AGE_612'}, 
        {title: '>12 Years', value: 'A_AGE_12U'}
    ];
    AgeOptions.forEach(testCase => {
        it(`age option ${testCase.title}`, () => {
            const FoundOption = ED_AGE_STEP.options.find(item => item.title === testCase.title);

            if ( FoundOption ) {
                expect(FoundOption.EC).toBe('User Decision');
                expect(FoundOption.EA).toBe(testCase.value);
                expect(FoundOption.value).toBe(testCase.value);
            } else {
                throw new Error(`Option "${testCase.title}" is not found in ED_AGE_STEP.`)
            };
        });
    });
});

describe('On treatment hour selection screen there should be', () => {
    it('valid question', () => {
        expect(ED_HOUR_SELECTION.title).toBe('What hour of treatment is the patient in?');
    });
    const HourOptions = [
        {text: '1st Hour', hour: 1},
        {text: '2nd Hour', hour: 2},
        {text: '3rd Hour', hour: 3},
        {text: '4th Hour', hour: 4},
    ];
    HourOptions.forEach(testCase => {
        it(`hour option ${testCase.text}`, () => {
            const FoundOption = ED_HOUR_SELECTION.options.find(item => item.title === testCase.text);

            if ( FoundOption ) {
                expect(FoundOption.value).toBe(`A_ED_HS_${testCase.hour}`);
            };
        });
    });
});
const Ages = [
    {ageTitle: '(2-3yrs)', ageData: A_23_SCORING, shortAge: '23', longAge: '2-3 Years'},
    {ageTitle: '(4yrs)', ageData: A_4_SCORING, shortAge: '4', longAge: '4 Years'},
    {ageTitle: '(5yrs)', ageData: A_5_SCORING, shortAge: '5', longAge: '5 Years'},
    {ageTitle: '(6-12yrs)', ageData: A_612_SCORING, shortAge: '612', longAge: '6-12 Years'},
    {ageTitle: '(> 12yrs)', ageData: A_12U_SCORING, shortAge: '12U', longAge: '>12 Years'},
];
Ages.forEach(age => {
    describe(`Calculating Respiratory Score for age ${age.ageTitle}`, () => {
        it('should have valid data', () => {
            expect(age.ageData.name).toBe('ESI score');
            expect(age.ageData.title).toBe('Calculate Respiratory Score');
            expect(age.ageData.age).toBe(age.ageTitle);
            expect(age.ageData.EC).toBe('Screen Access');
            expect(age.ageData.EA).toBe(`A_${age.shortAge}_SCORING`);
            expect(age.ageData.EA_ENDSCORE).toBe(`A_${age.shortAge}_RS_ENDSCORE`);
            expect(age.ageData.Description).toBe(`User selected the “${age.longAge}” age from the A_AGE_SELECTION`);
        });
        it(`Respiratory Rate buttons should be radio button`, () => {
            expect(age.ageData.scores.find(score => score.title === 'Respiratory Rate')?.type).toBe('radio');
        });
        const RespiratoryRate: any = {
            '23': [
                {expectedTitle: '<= 34', expectedPoints: 1},
                {expectedTitle: '35-39', expectedPoints: 2},
                {expectedTitle: '>= 40', expectedPoints: 3},
            ],
            '4': [
                {expectedTitle: '<= 30', expectedPoints: 1},
                {expectedTitle: '31-35', expectedPoints: 2},
                {expectedTitle: '>= 36', expectedPoints: 3},
            ],
            '5': [
                {expectedTitle: '<= 30', expectedPoints: 1},
                {expectedTitle: '31-35', expectedPoints: 2},
                {expectedTitle: '>= 36', expectedPoints: 3},
            ],
            '612': [
                {expectedTitle: '<= 26', expectedPoints: 1},
                {expectedTitle: '27-30', expectedPoints: 2},
                {expectedTitle: '>= 31', expectedPoints: 3},
            ],
            '12U': [
                {expectedTitle: '<= 23', expectedPoints: 1},
                {expectedTitle: '24-27', expectedPoints: 2},
                {expectedTitle: '>= 28', expectedPoints: 3},
            ]
        };
        RespiratoryRate[age.shortAge].forEach((respiratoryOption: any) => {
            it(`should have ${respiratoryOption.expectedTitle} option with valid values`, () => {
                const FoundScore = age.ageData.scores.find(score => score.title === 'Respiratory Rate');
                const FoundScoreOption = FoundScore?.options.find(option => option.title === respiratoryOption.expectedTitle);

                if ( FoundScoreOption ) {
                    expect(FoundScoreOption.points).toBe(respiratoryOption.expectedPoints);
                } else {
                    throw new Error(`Score option ${respiratoryOption.expectedTitle} is not found for age ${age.ageTitle}`);
                };
            });
        });
        it(`Retractions buttons should be checkboxes`, () => {
            expect(age.ageData.scores.find(score => score.title === 'Retractions (Select all that apply)')?.type).toBe('checkbox');
        });
        const ExpectedRetractions = [
            {title: 'None', points: 0},
            {title: 'Subcostal', points: 1},
            {title: 'Intercostal', points: 1},
            {title: 'Substernal', points: 1},
            {title: 'Suprasternal', points: 1},
            {title: 'Suprasternal', points: 1},
            {title: 'Supraclavicular', points: 1},
            {title: 'Supraclavicular', points: 1},
        ];
        ExpectedRetractions.forEach(expectedRetraction => {
            it(`should be retraction ${expectedRetraction.title} with valid values`, () => {
                const FoundOption = age.ageData.scores.find(score => score.title === 'Retractions (Select all that apply)')
                    ?.options.find(option => option.title === expectedRetraction.title);

                if ( FoundOption ) {
                    expect(FoundOption.points).toBe(expectedRetraction.points);
                } else {
                    throw new Error(`Option ${expectedRetraction.title} is not found.`);
                };
            });
        });
        const ExpectedDyspnea: any = {
            '23': [
                {title: 'Normal feeding, vocalizations, play', points: 0},
                {title: 'Decreased appetite', points: 1},
                {title: 'Increased coughing after play', points: 1},
                {title: 'Hyperactivity', points: 1},
                {title: 'Stops eating or drinking', points: 3},
                {title: 'Stops playing', points: 3},
                {title: 'Drowsy and confused', points: 3},
            ],
            '4': [
                {title: 'Normal feeding, vocalizations, play', points: 0},
                {title: 'Decreased appetite', points: 1},
                {title: 'Increased coughing after play', points: 1},
                {title: 'Hyperactivity', points: 1},
                {title: 'Stops eating or drinking', points: 3},
                {title: 'Stops playing', points: 3},
                {title: 'Drowsy and confused', points: 3},
            ],
            '5': [
                {title: 'Counts to >= 10 in one breath', points: 0},
                {title: 'Counts to 7-9 in one breath', points: 1},
                {title: 'Counts to 4-6 in one breath', points: 2},
                {title: 'Counts to <= 3 in one breath', points: 3},
            ],
            '612': [
                {title: 'Counts to >= 10 in one breath', points: 0},
                {title: 'Counts to 7-9 in one breath', points: 1},
                {title: 'Counts to 4-6 in one breath', points: 2},
                {title: 'Counts to <= 3 in one breath', points: 3},
            ],
            '12U': [
                {title: 'Counts to >= 10 in one breath', points: 0},
                {title: 'Counts to 7-9 in one breath', points: 1},
                {title: 'Counts to 4-6 in one breath', points: 2},
                {title: 'Counts to <= 3 in one breath', points: 3},
            ]
        };
        const DyspneaButtonsTypes: any = {
            '23': 'checkbox',
            '4': 'checkbox',
            '5': 'radio',
            '612': 'radio',
            '12U': 'radio',
        };
        it(`Dyspnea buttons should be radio buttons`, () => {
            expect(age.ageData.scores.find(score => score.name === 'Dyspnea')?.type).toBe(DyspneaButtonsTypes[age.shortAge]);
        });
        ExpectedDyspnea[age.shortAge].forEach((testCase: any) => {
            it(`should be dyspnea option ${testCase.title} with values`, () => {
                const FoundOption = age.ageData.scores.find(score => score.name === 'Dyspnea')
                    ?.options.find(item => item.title === testCase.title);
                
                if ( FoundOption ) {
                    expect(FoundOption.points).toBe(testCase.points);
                } else {
                    throw new Error(`Option ${testCase.title} is not found`);
                };
            });
        });
        it(`Auscultation buttons should be checkboxes`, () => {
            expect(age.ageData.scores.find(score => score.name === 'Auscultation')?.type).toBe('checkbox');
        });
        const ExpectedAuscultation = [
            {title: 'Normal breath sounds; no wheezing', points: 0},
            {title: 'End-expiratory wheeze only', points: 1},
            {title: 'Expiratory phase wheeze (greater than end-expiratory)', points: 1},
            {title: 'Inspiratory wheeze', points: 1},
            {title: 'Diminished breath sounds', points: 1},
        ];
        ExpectedAuscultation.forEach(testCase => {
            it(`should be auscultation option ${testCase.title}`, () => {
                const FoundOption = age.ageData.scores.find(score => score.name === 'Auscultation')
                    ?.options.find(item => item.title === testCase.title);
                
                if ( FoundOption ) {
                    expect(FoundOption.points).toBe(testCase.points);
                } else {
                    throw new Error(`Option ${testCase.title} is not found`)
                };
            });
        });
    });
});