import { getConf } from '../../src/Modules/Resuscitation/screens/BasicLifeSupport/conf';

describe('Test getConf function and check all data inside', () => {
    const cases = [
        {age: '4', ageUnit: 'weeks', expectedResult: {
            baseObjContent: [
                { lable: 'Compression Depth', text: 'At least 1/3 AP diameter or 1.5 inches' },
                { lable: 'Rate', text: '100-120/minute' },
                { lable: 'Compression Ventilation Ratio', text: '30:2 (single rescuer),\n15:2 (2 rescuers)' }
            ],
            circulationContent: [
                { lable: 'Pulse Check', text: 'Brachial' },
                { lable: 'Compression Indication', text: 'Signs of circulation absent, or HR<60 and poor perfusion' },
                { lable: 'Landmarks', text: 'Just below nipple line' },
                { lable: 'Method', text: 'Push hard and fast, 1 rescuer: 2 fingers,\n2 rescuers: 2 thumb-encircling hands'}
            ],
            breathingContent: [
                { lable: 'Rescue Breathing without CPR', text: '1 breath every 2-3 seconds\nor\n20-30 breaths/minute' },
                { lable: 'Rescue Breathing with CPR and Advanced Airway', text: '1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR' }
            ],
            defibrillationContent: [
                { lable: 'AED', text: 'Manual defibrillator preferred for <1 y/o after 5 cycles of CPR. Use Child pads/system if available.' }
            ]
        }},
        {age: '11', ageUnit: 'months', expectedResult: {
            baseObjContent: [
                { lable: 'Compression Depth', text: 'At least 1/3 AP diameter or 1.5 inches' },
                { lable: 'Rate', text: '100-120/minute' },
                { lable: 'Compression Ventilation Ratio', text: '30:2 (single rescuer),\n15:2 (2 rescuers)' }
            ],
            circulationContent: [
                { lable: 'Pulse Check', text: 'Brachial' },
                { lable: 'Compression Indication', text: 'Signs of circulation absent, or HR<60 and poor perfusion' },
                { lable: 'Landmarks', text: 'Just below nipple line' },
                { lable: 'Method', text: 'Push hard and fast, 1 rescuer: 2 fingers,\n2 rescuers: 2 thumb-encircling hands'}
            ],
            breathingContent: [
                { lable: 'Rescue Breathing without CPR', text: '1 breath every 2-3 seconds\nor\n20-30 breaths/minute' },
                { lable: 'Rescue Breathing with CPR and Advanced Airway', text: '1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR' }
            ],
            defibrillationContent: [
                { lable: 'AED', text: 'Manual defibrillator preferred for <1 y/o after 5 cycles of CPR. Use Child pads/system if available.' }
            ]
        }},
        {age: '12', ageUnit: 'months', expectedResult: {
            baseObjContent: [
                { lable: 'Compression Depth', text: 'At least 1/3 AP diameter or 2 inches' },
                { lable: 'Rate', text: '100-120/minute' },
                { lable: 'Compression Ventilation Ratio', text: '30:2 (single rescuer), 15:2 (2 rescuers)' }
            ],
            circulationContent: [
                { lable: 'Pulse Check', text: 'Carotid or Femoral' },
                { lable: 'Compression Indication', text: 'Signs of circulation absent, or HR<60 and poor perfusion' },
                { lable: 'Landmarks', text: 'Lower 1/2 of sternum' },
                { lable: 'Method', text: 'Push hard and fast, Heel of hand, other hand on top or heel of 1 hand'}
            ],
            breathingContent: [
                { lable: 'Rescue Breathing without CPR', text: '1 breath every 2-3 seconds\nor\n20-30 breaths/minute' },
                { lable: 'Rescue Breathing with CPR and Advanced Airway', text: '1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR' }
            ],
            defibrillationContent: [
                { lable: 'AED', text: 'Manual defibrillator preferred for <1 y/o after 5 cycles of CPR. Use Child pads/system if available.' }
            ]
        }},
        {age: '1', ageUnit: 'years', expectedResult: {
            baseObjContent: [
                { lable: 'Compression Depth', text: 'At least 1/3 AP diameter or 2 inches' },
                { lable: 'Rate', text: '100-120/minute' },
                { lable: 'Compression Ventilation Ratio', text: '30:2 (single rescuer), 15:2 (2 rescuers)' }
            ],
            circulationContent: [
                { lable: 'Pulse Check', text: 'Carotid or Femoral' },
                { lable: 'Compression Indication', text: 'Signs of circulation absent, or HR<60 and poor perfusion' },
                { lable: 'Landmarks', text: 'Lower 1/2 of sternum' },
                { lable: 'Method', text: 'Push hard and fast, Heel of hand, other hand on top or heel of 1 hand'}
            ],
            breathingContent: [
                { lable: 'Rescue Breathing without CPR', text: '1 breath every 2-3 seconds\nor\n20-30 breaths/minute' },
                { lable: 'Rescue Breathing with CPR and Advanced Airway', text: '1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR' }
            ],
            defibrillationContent: [
                { lable: 'AED', text: 'Manual defibrillator preferred for <1 y/o after 5 cycles of CPR. Use Child pads/system if available.' }
            ]
        }},
        {age: '10', ageUnit: 'years', expectedResult: {
            baseObjContent: [
                { lable: 'Compression Depth', text: 'At least 1/3 AP diameter or 2 inches' },
                { lable: 'Rate', text: '100-120/minute' },
                { lable: 'Compression Ventilation Ratio', text: '30:2 (single rescuer), 15:2 (2 rescuers)' }
            ],
            circulationContent: [
                { lable: 'Pulse Check', text: 'Carotid or Femoral' },
                { lable: 'Compression Indication', text: 'Signs of circulation absent, or HR<60 and poor perfusion' },
                { lable: 'Landmarks', text: 'Lower 1/2 of sternum' },
                { lable: 'Method', text: 'Push hard and fast, Heel of hand, other hand on top or heel of 1 hand'}
            ],
            breathingContent: [
                { lable: 'Rescue Breathing without CPR', text: '1 breath every 2-3 seconds\nor\n20-30 breaths/minute' },
                { lable: 'Rescue Breathing with CPR and Advanced Airway', text: '1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR' }
            ],
            defibrillationContent: [
                { lable: 'AED', text: 'Manual defibrillator preferred for <1 y/o after 5 cycles of CPR. Use Child pads/system if available.' }
            ]
        }},
        {age: '11', ageUnit: 'years', expectedResult: {
            baseObjContent: [
                { lable: 'Compression Depth', text: 'At least 2 inches' },
                { lable: 'Rate', text: '100-120/minute' },
                { lable: 'Compression Ventilation Ratio', text: '30:2' }
            ],
            circulationContent: [
                { lable: 'Pulse Check', text: 'Carotid' },
                { lable: 'Compression Indication', text: 'Signs of circulation absent' },
                { lable: 'Landmarks', text: 'Lower 1/2 of sternum' },
                { lable: 'Method', text: 'Push hard and fast, Heel of 1 hand, other hand on top'}
            ],
            breathingContent: [
                { lable: 'Rescue Breathing without CPR', text: '1 breath every 2-3 seconds\nor\n20-30 breaths/minute' },
                { lable: 'Rescue Breathing with CPR and Advanced Airway', text: '1 breath every 2-3 seconds or 20-30 breaths/minute continuous with CPR' }
            ],
            defibrillationContent: [
                { lable: 'AED', text: 'May provide 5 cycles (2 minutes) of CPR before shock if response > 4 or 5 min. and arrest not witnessed' }
            ]
        }},
    ];
    cases.forEach(testCase => {
        it(`for age ${testCase.age} ${testCase.ageUnit}`, () => {
            const allAgesDescriptionOther = 'Allow complete chest recoil between each compression';
            const allAgesAirwayDescription = 'Jaw thrust (if not effective, use head tilt-chin lift)';
            const allAgesBreathingDescription = 'Enough pressure to achieve chest rise';
            const allAgesBreathingContent = [
              { lable: 'Rescue Breathing without CPR', text: '12-20 breaths/minute' },
              { lable: 'Rescue Breathing with CPR and Advanced Airway', text: '10 breaths/minute' }
            ]

            const result = getConf(testCase.age, testCase.ageUnit)

            const baseObj = result.find(item => item.style === 'basiclife');
            expect(baseObj).toBeTruthy();
            const airway = result.find(item => item.style === 'Airway');
            expect(airway).toBeTruthy();
            const circulation = result.find(item => item.style === 'Circulation');
            expect(circulation).toBeTruthy();
            const breathing = result.find(item => item.style === 'Breathing');
            expect(breathing).toBeTruthy();
            const defibrillation = result.find(item => item.style === 'Defibrillation');
            expect(defibrillation).toBeTruthy();

            expect(baseObj?.descriptionOther).toBe(allAgesDescriptionOther);
            expect(baseObj?.content).toEqual(testCase.expectedResult.baseObjContent);

            expect(airway?.description).toBe(allAgesAirwayDescription)
            expect(airway?.content.length).toBe(0);

            expect(breathing?.description).toBe(allAgesBreathingDescription)
            // todo not clear documentation according to breathing content add checks

            expect(defibrillation?.content).toEqual(testCase.expectedResult.defibrillationContent);
        });
    });
});