import { BURN_MANAGEMENT_OPTIONS } from '../../../src/Modules/Resuscitation/screens/BurnManagment/conf'

const burnPercentageData = {
    ages: [[0, 0.99], [1, 4], [5, 9], [10, 14], [15], [16, 17]],
    head: [19, 17, 13, 11, 9, 7],
    neck: [2, 2, 2, 2, 2, 2],
    anteriorTrunk: [13, 13, 13, 13, 13, 13],
    posteriorTrunk: [13, 13, 13, 13, 13, 13],
    rightButtock: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
    leftButtock: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
    genitalia: [1, 1, 1, 1, 1, 1],
    rightUpperArm: [4, 4, 4, 4, 4, 4],
    leftUpperArm: [4, 4, 4, 4, 4, 4],
    rightLowerArm: [3, 3, 3, 3, 3, 3],
    leftLowerArm: [3, 3, 3, 3, 3, 3],
    rightHand: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
    leftHand: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
    rightThigh: [5.5, 6.5, 8, 8.5, 9, 9.5],
    leftThigh: [5.5, 6.5, 8, 8.5, 9, 9.5],
    rightLowerLeg: [5, 5, 5.5, 6, 6.5, 7],
    leftLowerLeg: [5, 5, 5.5, 6, 6.5, 7],
    rightFoot: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
    leftFoot: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5],    
};

describe(`Test BURN_MANAGEMENT_OPTIONS data`, () => {
    burnPercentageData.ages.forEach(ageRage => {
        const burnDataIndex = burnPercentageData.ages.indexOf(ageRage);
        ageRage.forEach(age => {
            it(`should be valid for ${age} years age`, () => {
                const foundOption = BURN_MANAGEMENT_OPTIONS.find(option => option.minAge <= age && option.maxAge > age);
                if ( foundOption ) {
                    expect(foundOption.content).toContainEqual({label: "Head", text:  burnPercentageData.head[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Neck", text:  burnPercentageData.neck[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Anterior Trunk", text:  burnPercentageData.anteriorTrunk[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Posterior Trunk", text:  burnPercentageData.posteriorTrunk[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Right Buttock", text:  burnPercentageData.rightButtock[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Left Buttock", text:  burnPercentageData.leftButtock[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Genitalia", text:  burnPercentageData.genitalia[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Right Upper Arm", text:  burnPercentageData.rightUpperArm[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Left Upper Arm", text:  burnPercentageData.leftUpperArm[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Right Lower Arm", text:  burnPercentageData.rightLowerArm[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Left Lower Arm", text:  burnPercentageData.leftLowerArm[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Right Hand", text:  burnPercentageData.rightHand[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Left Hand", text:  burnPercentageData.leftHand[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Right Thigh", text:  burnPercentageData.rightThigh[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Left Thigh", text:  burnPercentageData.leftThigh[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Right Lower Leg", text:  burnPercentageData.rightLowerLeg[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Left Lower Leg", text:  burnPercentageData.leftLowerLeg[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Right Foot", text:  burnPercentageData.rightFoot[burnDataIndex].toString()});
                    expect(foundOption.content).toContainEqual({label: "Left Foot", text:  burnPercentageData.leftFoot[burnDataIndex].toString()});
                } else {
                    throw new Error(`Can not find option for ${age} years age`);
                }
            });
        });
    })
});