import { calculateResults } from '../../src/Modules/Resuscitation/components/CardiovascularDrips/cardvascularCalculator';

export const cardioVascularDripsData = [
    {
        drugTitle: 'Dopamine',
        validDosages: [5, 7.5, 10, 12.5, 15, 17.5, 20],
        concentrations: [1600, 3200],
        expectedResults: [
            [1.875, 2.8125, 3.75, 4.6875, 5.625, 6.5625, 7.5], [0.9375, 1.40625, 1.875, 2.34375, 2.8125, 3.28125, 3.75]
        ]
    },
    {
        drugTitle: 'Dobutamine',
        validDosages: [5, 7.5, 10, 12.5, 15, 17.5, 20],
        concentrations: [2000, 4000],
        expectedResults: [
            [1.5, 2.25, 3, 3.75, 4.5, 5.25, 6], [0.75, 1.125, 1.5, 1.875, 2.25, 2.625, 3]
        ]
    },
    {
        drugTitle: 'Epinephrine',
        validDosages: [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        concentrations: [16, 32],
        expectedResults: [
            [1.875, 2.25, 2.625, 3, 3.375, 3.75, 7.5, 11.25, 15, 18.75, 22.5, 26.25, 30, 33.75, 37.5], [0.9375, 1.125, 1.3125, 1.5, 1.6875, 1.875, 3.75, 5.625, 7.5, 9.375, 11.25, 13.125, 15, 16.875, 18.75]
        ]
    },
    {
        drugTitle: 'Norepinephrine',
        validDosages: [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        concentrations: [16, 32],
        expectedResults: [
            [1.875, 2.25, 2.625, 3, 3.375, 3.75, 7.5, 11.25, 15, 18.75, 22.5, 26.25, 30, 33.75, 37.5], [0.9375, 1.125, 1.3125, 1.5, 1.6875, 1.875, 3.75, 5.625, 7.5, 9.375, 11.25, 13.125, 15, 16.875, 18.75]
        ]
    },
    {
        drugTitle: 'Milrinone',
        validDosages: [0.25, 0.5, 0.75],
        concentrations: [200],
        expectedResults: [
            [0.75, 1.5, 2.25]
        ]
    },
    {
        drugTitle: 'Lidocaine',
        validDosages: [20, 25, 30, 35, 40, 45, 50],
        concentrations: [8000],
        expectedResults: [
            [1.5, 1.875, 2.25, 2.625, 3, 3.375, 3.75]
        ]
    },
    {
        drugTitle: 'Alprostadil (Prostaglandin)',
        validDosages: [0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
        concentrations: [20],
        expectedResults: [
            [1.5, 1.8, 2.1, 2.4, 2.7, 3]
        ]
    },

]

describe('Test cardio vascular drips calculations', () => {
    cardioVascularDripsData.forEach(drug => {
        drug.concentrations.forEach(drugConcentration => {
            const concentrationIndex = drug.concentrations.indexOf(drugConcentration);
            drug.validDosages.forEach(dosage => {
                const dosageIndex = drug.validDosages.indexOf(dosage);
                it(`for ${drug.drugTitle}. Weight - 10kg Dosage - ${dosage}. Concentration - ${drugConcentration}`, () => {
                    const result = calculateResults(dosage.toString(), 10, drugConcentration.toString());

                    expect(result.toFixed(2)).toBe(drug.expectedResults[concentrationIndex][dosageIndex].toFixed(2))
                });
                it(`for ${drug.drugTitle}. Weight - 20kg Dosage - ${dosage}. Concentration - ${drugConcentration}`, () => {
                    const result = calculateResults(dosage.toString(), 20, drugConcentration.toString());

                    expect(result.toFixed(2)).toBe( (drug.expectedResults[concentrationIndex][dosageIndex] * 2 ).toFixed(2) )
                });
            });
        });
    });
});