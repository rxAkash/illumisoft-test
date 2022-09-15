import { FLUIDS_CONF } from '../../../src/Modules/Resuscitation/screens/Circulation/fluidConf';
import { CARDIOVASCULAR_DRIPS } from '../../../src/Modules/Resuscitation/components/CardiovascularDrips/cardivascularConf'
import { cardioVascularDripsData } from '../advanced.life.support.test'


const fluidResuscitationCirculation = {
    weights: [ 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70 ],
    maintenanceFluids: [ 2, 4, 6, 8, 10, 12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ],
    bolus20: [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000 ],
    bolus10: [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500 ]
}

const getFluidResuscitationByWeight = (weight: number) => {
    const foundIndex = fluidResuscitationCirculation.weights.indexOf(weight);
    return {
        maintenanceFluids: fluidResuscitationCirculation.maintenanceFluids[foundIndex],
        bolus20: fluidResuscitationCirculation.bolus20[foundIndex],
        bolus10: fluidResuscitationCirculation.bolus10[foundIndex],
    };
}

describe('Test Fluid Resuscitation data', () => {
    fluidResuscitationCirculation.weights.forEach(weight => {
        it(`for weight ${weight}`, () => {
            const expectedData = getFluidResuscitationByWeight(weight);

            const foundItem = FLUIDS_CONF.find(element => element.weightValue === weight.toString());
            expect(foundItem?.maintenanceFluids).toBe(expectedData.maintenanceFluids);
            expect(foundItem?.bolus10).toBe(expectedData.bolus10);
            expect(foundItem?.bolus20).toBe(expectedData.bolus20);
        });
    });
});

describe('CARDIOVASCULAR_DRIPS data', () => {
    it(`contain all needed drugs`, () => {
        expect(CARDIOVASCULAR_DRIPS.map(item => item.drugText)).toStrictEqual(cardioVascularDripsData.map(item => item.drugTitle));
    });
    cardioVascularDripsData.forEach(drug => {
        it(`contain ${drug.drugTitle} data. And this data is valid`, () => {
            const foundCardioVascularDrip = CARDIOVASCULAR_DRIPS.find(item => item.drugText === drug.drugTitle);
            if ( foundCardioVascularDrip ) {
                expect(drug.validDosages).toStrictEqual(Object.keys(foundCardioVascularDrip.doseContent).map(item => + item));  
                expect(drug.concentrations).toStrictEqual(Object.keys(foundCardioVascularDrip.concentration).map(item => + item));  
            } else {
                throw new Error(`can not found ${drug.drugTitle}`);
            };
        });
    });
});