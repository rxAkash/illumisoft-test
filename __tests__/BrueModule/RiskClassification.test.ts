import { AGE_OPTIONS } from '../../src/Modules/Brue/screens/RiskClassification/conf';

describe('Age options', () => {
    const options = [
        {age: '< 32 weeks', text: 'Infant born at < 32 weeks Gestational age'},
        {age: '32-37 weeks', text: 'Infant born at 32-37 weeks'},
        {age: '38+ weeks', text: 'Infant born at 38+ weeks'},
    ];
    options.forEach(expectedAgeOption => {
        it(`should have an option "${expectedAgeOption.age}"`, () => {
            const foundOption = AGE_OPTIONS.find(item => item.value === expectedAgeOption.age);
            if ( foundOption ) {
                expect(foundOption.title).toBe(expectedAgeOption.text);
            } else {
                throw new Error(`Age option ${expectedAgeOption.age} is not found`);
            };
        });
    });
});
