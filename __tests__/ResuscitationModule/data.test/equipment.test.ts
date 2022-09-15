import { EQUIPMENT_SIZES } from '../../../src/Modules/Resuscitation/screens/EquipmentSizes/conf';
import { PIV_SIZES } from '../../../src/Modules/Resuscitation/screens/EquipmentSizes/conf';

const equipmentSizes = {
    weights: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, [12,13], [14,15], 16, [17,19], [20,22], [23,24], [25,29], [30,31], [32,38], [39,42], [43,49], [50,53], [54,59], [60,62], [63,64], 65 ],
    ngTubeFr: ["4", "4", "5", "5", "5", "5", "8", "8", "10", "10", "10", "10", "10", "12", "12", "12", "12", "12", "14", "14", "16", "16", "16-18", "16-18", "16-18", "16-18", "16-18", "16-18", "18", "18", "18", "18", "18"],
    chestTubeFr: ["6", "6", "6", "6", "6", "6", "8-10", "10-16", "10-16", "10-16", "10-16", "10-16", "10-16", "12-16", "12-16", "12-16", "12-16", "12-16", "16-20", "16-20", "16-24", "16-24", "20-28", "20-28", "20-28", "20-28", "24-28", "24-28", "24-32", "24-32", "28-32", "28-32", "32-40"],
    foleyFr: ["5-6", "5-6", "6", "6", "6", "6", "6", "6", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "10", "10", "10", "10", "10", "10", "12", "12", "12", "12", "12", "12", "14", "14", "16"],
    centralVenousAccess: ["UAC 3.5\nUVC 3.5", "UAC 3.5\nUVC 3.5", "UAC 3.5\nUVC 3.5", "UAC 3.5\nUVC 3.5", "UAC 3.5\nUVC 5.0", "UAC 3.5\nUVC 5.0", "UAC 3.5\nUVC 5.0", "UAC 3.5\nUVC 5.0", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4-5", "4-5", "5", "5", "5", "5", "5", "5", "5", "5", "7", "7", "7"],
};

describe('Check data for equipment sizes', () => {
    equipmentSizes.weights.forEach(weight => {
        let weightIndex = equipmentSizes.weights.indexOf(weight);
        let weights;
        if ( ! Array.isArray(weight) ) {
            weights = [weight]
        } else {
            weights = weight
        };
        weights.forEach(testCaseWeight => {
            it(`for ${testCaseWeight} kg weight`, () => {
                const foundEquipment = EQUIPMENT_SIZES.find(item => testCaseWeight >= item.weightKg.min && testCaseWeight <= item.weightKg.max );
                if ( foundEquipment ) {
                    expect(foundEquipment.content).toContainEqual( { lable: 'NG Tube (FR)', text: equipmentSizes.ngTubeFr[weightIndex] } );
                    expect(foundEquipment.content).toContainEqual( { lable: 'Chest Tube (FR)', text: equipmentSizes.chestTubeFr[weightIndex] } );
                    expect(foundEquipment.content).toContainEqual( { lable: 'Foley (FR)', text: equipmentSizes.foleyFr[weightIndex] } );
                    expect(foundEquipment.content).toContainEqual( { lable: 'Central Venous Access (FR)', text: equipmentSizes.centralVenousAccess[weightIndex] } );
                } else {
                    throw new Error(`Can not find equipment for ${testCaseWeight} weight`);
                };
            });
        })
    });
});

const pivSizes = {
    weights: [[0.5], [1], [1.5], [2], [2.5], [3], [3.5], [4], [4.5], [5], [5.5], [6], [7], [8], [9], [10], [11], [12, 13], [14, 15], [16], [17, 19], [20, 22], [23, 24], [25, 29], [30, 31], [32, 38], [39, 42], [43, 49], [50, 53], [54, 59], [60, 62], [63, 64], [65, 66]],
    sizes: ["24 Ga", "24 Ga", "24 Ga", "24 Ga", "24 Ga", "24 Ga", "22-24 Ga", "22-24 Ga", "22-24 Ga", "22-24 Ga", "22-24 Ga", "22-24 Ga", "22-24 Ga", "22-24 Ga", "22-24 Ga", "22 Ga", "22 Ga", "22 Ga", "22 Ga", "22 Ga", "22 Ga", "20-22 Ga", "20-22 Ga", "20-22 Ga", "20-22 Ga", "20-22 Ga", "18-20 Ga", "18-20 Ga", "18-20 Ga", "18-20 Ga", "18-20 Ga", "18 Ga", "18 Ga"]
};

describe('Check data for PIV size', () => {
    pivSizes.weights.forEach(weightRange => {
        const weightIndex = pivSizes.weights.indexOf(weightRange);
        weightRange.forEach(weight => {
            it(`for ${weight} weight`, () => {
                const foundPiv = PIV_SIZES.find(item => item.weightKg.min <= weight && item.weightKg.max >= weight);
                if ( foundPiv ) {
                    expect(foundPiv.content).toEqual([ { lable: 'Peripheral IV', text: pivSizes.sizes[weightIndex] } ])
                } else {
                    throw new Error(`Cant find an option for ${weight} weight`);
                };
            });     
        });
    });
});