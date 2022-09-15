import { AIRWAY_DEVICES, EXTENDED_AIRWAY_DEVICES } from '../../../src/Modules/Resuscitation/screens/AirwayAndBreathing/conf'

const airwayDevices: any = {
    kgWeightIndexes: [ 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6 ],
    suctionCatheter: { title: 'Suction Catheter (FR)', values: [ '5 or 6', '5 or 6', '6 or 8', '6 or 8', '8', '8', '8', '8', '8', '8', '8', '8' ] },
    lma: { title: 'LMA', values: [ '', '', '1', '1', '1', '1', '1', '1', '1', '1.5', '1.5', '1.5' ] },
    etTubeDepth: { title: 'ET Tube Depth', values: [ '5.5', '6.5', '7.5', '8', '8.5', '8.5', '9', '9', '10', '11', '11.5', '12' ] },
    laryngoscopeBlade: { title: 'Laryngoscope Blade (Straight)', values: [ '00', '0', '0', '0', '0', '0 or 1', '1', '1', '1', '1', '1', '1' ] },
    endotrachealTube: { title: 'Endotracheal Tube (I.D.)', values: [ '2.5', '2.5', '3', '3', '3.5', '3.5', '3.5', '3.5', '4', '4', '4', '4' ] },
};
const properties = ['suctionCatheter', 'lma', 'etTubeDepth', 'laryngoscopeBlade', 'endotrachealTube'];

const getPropByIndex = (prop: string, index: number) => {
    return {title: airwayDevices[prop].title, value: airwayDevices[prop].values[index]}
};

const getDeviceByWeight = ( weight: number ): {title: string, value: string} [] => {
    const deviceIndex = airwayDevices.kgWeightIndexes.indexOf(weight);
    const deviceArray: {title: string, value: string} [] = [];
    
    properties.forEach(property => {
        const item = getPropByIndex(property, deviceIndex);
        if ( item.value ) {
            deviceArray.push(item);
        };
    });
    return deviceArray;
}; 


describe('AIRWAY_DEVICES', () => {
    airwayDevices.kgWeightIndexes.forEach((weight: number) => {
        it(`should contain valid content items for ${weight} weight`, () => {
            const foundDevice = AIRWAY_DEVICES.find(item => item.weightKg.exact === weight);
            const expectedDevice = getDeviceByWeight(weight);
            if ( foundDevice ) {
                expect(foundDevice.content.length).toBe(expectedDevice.length);
            } else {
                throw new Error(`Device is not found for weight ${weight}`)
            }
        });
    });

    airwayDevices.kgWeightIndexes.forEach((weight: number) => {
        const deviceIndex = airwayDevices.kgWeightIndexes.indexOf(weight);
        const foundDevices = AIRWAY_DEVICES.find(item => item.weightKg.exact === weight);
        if ( foundDevices ) {
            for (const property in airwayDevices) {
                if ( ! Array.isArray(airwayDevices[property]) ) {
                    it(`property "${property}" should contain valid content for ${weight} weight`, () => {
                        const foundDevice = foundDevices.content.find(item => item.lable === airwayDevices[property].title);
                        const expectedDevice = getPropByIndex(property, deviceIndex);
                        if ( expectedDevice.value ) {
                            expect(foundDevice?.text).toBe(expectedDevice.value);
                        } else {
                            expect(foundDevice).toBe(undefined);
                        };
                    });
                };
            };
        } else {
            throw new Error(`Devices are not found for weight ${weight}`)
        };   
    });
});


describe('EXTENDED_AIRWAY_DEVICES', () => {
    let weights = [ '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '19', '20', '22', '23', '24', '25', '29', '30', '31', '32', '38', '39', '42', '43', '49', '50', '53', '54', '59', '60', '62', '63', '64', '65', '66' ];
    const extendedAirwayDevices: any = {
        weights: ["0.5","1","1.5","2","2.5","3","3.5","4","4.5","5","5.5","6","7","8","9","10","11","12-13","14-15","16","17-19","20-22","23-24","25-29","30-31","32-38","39-42","43-49","50-53","54-59","60-62","63-64","65-66"],
        suctionCatheter: { title: 'Suction Catheter (FR)', values: ["5 or 6","5 or 6","6 or 8","6 or 8","8","8","8","8","8-10","8-10","8-10","8-10","8-10","10","10","10","10","10","10-12","12","14","14","14","14","14","14","14","14","14","14","14","14","14"] },
        lma: { title: 'LMA', values: ["", "", "1", "1", "1", "1", "1", "1", "1", "1 1/2", "1 1/2", "1 1/2", "1 1/2", "1 1/2", "1 1/2", "1 1/2 - 2", "2", "2", "2", "2", "2", "2 - 2 1/2", "2 1/2", "2 1/2", "3", "3", "3", "3", "3 - 4", "4", "4", "4", "5"]},
        laryngoscopeBlade: { title: 'Laryngoscope Blade', values: ["00", "0", "0", "0", "0", "0-1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1 1/2", "1 1/2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2-3", "2-3", "2-3", "2-3", "3-4", "3-4"] },
        microCuffTubes: {title: 'Microcuff Endotracheal Tubes', values: ["","","","","","","","","3.5","3.5","3.5","3.0","3.0","3.0","3.0","3.5","3.5","3.5","4.0","4.0","4.5","4.5","5.0","5.0","5.5","5.5","6.0","6.0","6.5","6.5","7.0","7.0","7.0-7.5"]},
        endotrachealTube: { title: 'Endotracheal Tube (I.D.)', values: ["2.5", "2.5", "3", "3", "3.5", "3.5", "3.5", "3.5", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.0", "4.5 Consider Cuffed Tube", "4.5 Consider Cuffed Tube", "4.5 Consider Cuffed Tube", "5.0 Consider Cuffed Tube", "5.0 Consider Cuffed Tube", "5.5 Consider Cuffed Tube", "5.5 Consider Cuffed Tube", "6.0 Consider Cuffed Tube", "6.0 Consider Cuffed Tube", "6.5 Cuffed", "6.5 Cuffed", "6.5 Cuffed", "6.5 Cuffed", "6.5-7.0 Cuffed", "6.5-7.0 Cuffed", "7.0 Cuffed", "7.0 Cuffed", "7.0-7.5 Cuffed"]}
    }
    
    const getPropByWeight = (property: string, weight: number) => {
        const getWeightIndex = (weight: number) => {
            for( const value of extendedAirwayDevices.weights ) {
                if ( value.includes('-') ) {
                    const borders = value.split('-').map( (borderValue: string) => Number.parseFloat(borderValue));
                    if ( borders[0] <= weight && borders[1] >= weight ) {
                        return extendedAirwayDevices.weights.indexOf(value);
                    }
                } else {
                    if ( Number.parseFloat(value) === weight ) {
                        return extendedAirwayDevices.weights.indexOf(value);
                    };
                };
            };
        };
    
        for(const prop in extendedAirwayDevices) {
            if ( extendedAirwayDevices[prop].title === property) {
                const foundIndex = getWeightIndex(weight);
                return extendedAirwayDevices[prop].values[foundIndex];
            };
        };
    };
    weights.forEach(weight => {
        const numeralWeight = Number.parseFloat(weight);
        const foundDevice = EXTENDED_AIRWAY_DEVICES.find( item => item.weightKg.min <= numeralWeight && numeralWeight <= item.weightKg.max );
        if ( foundDevice ) {
            for(const label in extendedAirwayDevices) {
                if ( label !== 'weights' ) {
                    const expectedText: string = getPropByWeight(extendedAirwayDevices[label].title, numeralWeight);
                    if ( expectedText ) {
                        const itemTitle = extendedAirwayDevices[label].title;
                        it(`propery "${itemTitle}" should contain valid data for weight ${weight} kg`, () => {
                            const foundItem: any = foundDevice.content.find(item => item.lable === itemTitle);
                            expect(foundItem.text).toBe(expectedText);
                        });
                    }

                }
            };
        } else {
            throw new Error(`Device for weight ${weight} is not found`)
        };
    });
});