import { getVitalScoresByAge } from 'UIToolkit/GlasgowComaScore/conf';
import {NEONAL_VITALS, EXPECTED_VITALS } from '../../../src/Modules/Resuscitation/screens/VitalSigns/conf';

const expectedVitals = {
  age: ["23 weeks", "24 weeks", "25 weeks", "26 weeks", "27 weeks", "28 weeks", "29 weeks", "30 weeks", "31 weeks", "32 weeks", "33 weeks", "34 weeks", "35 weeks", "36 weeks", "37 weeks", "38 weeks", "39 weeks", "40 weeks", "41 weeks", "42 weeks", "0 weeks/0 months/0 years", "1 weeks", "2 weeks", "3 weeks", "1 months", "2 months", "3 months", "4 months", "5 months", "6 months", "7 months", "8 months", "9 months", "10 months", "11 months", "12 months", "13 months", "14 months", "15 months", "16 months", "17 months", "18 months", "19 months", "20 months", "21 months", "22 months", "23 months", "1 years", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years", "13 years", "14 years", "15 years", ">= 16 years"],
  heartRate: ["90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "90-180", "100-170", "110-170", "110-170", "125-164", "123-163", "122-162", "120-159", "119-155", "118-152", "117-151", "116-150", "114-149", "113-147", "111-145", "109-143", "107-143", "105-141", "103-140", "102-139", "101-138", "100-137", "99-137", "98-137", "97-136", "97-136", "96-135", "109-143", "95-135", "91-130", "86-120", "83-120", "78-119", "78-118", "72-108", "70-106", "68-103", "66-100", "64-98", "63-97", "62-96", "60-94", "58-92"],
  respiratoryyRate: ["35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "35-60", "30-50", "30-40", "30-40", "35-57", "34-57", "34-55", "33-55", "33-54", "32-53", "32-53", "32-53", "32-53", "31-52", "31-50", "30-49", "30-48", "29-46", "28-45", "27-44", "26-42", "25-40", "25-40", "25-39", "24-39", "24-38", "23-38", "30-49", "23-38", "22-31", "20-28", "20-27", "19-25", "19-25", "17-24", "17-23", "16-22", "16-22", "15-21", "15-21", "15-20", "14-20", "13-19"],
  bpSystolic: ["36-42", "37-43", "38-44", "39-45", "42-48", "43-50", "46-52", "47-53", "48-54", "50-56", "51-57", "52-58", "53-59", "54-60", "56-62", "57-63", "58-64", "59-65", "60-66", "61-67", "50-90", "60-100", "60-100", "60-100", "66-104", "66-104", "66-104", "68-106", "70-108", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "72-110", "73-111", "74-112", "76-114", "77-115", "79-116", "80-118", "82-120", "84-121", "86-123", "88-126", "90-128", "92-130", "90-140", "90-140"],
  bpMean: ["22-25", "22-26", "23-27", "24-28", "24-29", "25-30", "25-30", "28-32", "29-33", "30-34", "31-35", "32-36", "33-37", "34-38", "35-40", "35-40", "38-42", "38-42", "40-45", "40-45", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
};

const getExpectedVitalsByAge = (expectedAge: string) => {
  const ageIndex = expectedVitals.age.indexOf(expectedAge);
  return {
    heartRate: expectedVitals.heartRate[ageIndex],
    respiratoryyRate: expectedVitals.respiratoryyRate[ageIndex],
    bpSystolic: expectedVitals.bpSystolic[ageIndex],
    bpMean: expectedVitals.bpMean[ageIndex],
  }
}

interface IExpectedVitalsData {
  age: string;
  description: {
    label: string;
    values: string[];
  }[];
}

describe('EXPECTED_VITALS data', () => {
  expectedVitals.age.forEach((age, index) => {
    if ( index >= 20 ) { // delete tests for gestational age
      const ageData = getExpectedVitalsByAge(age);
      const verifyFoundExpectedVitalsData = (foundExpectedVitalsData: IExpectedVitalsData) => {
        const heartRateData = foundExpectedVitalsData.description.find(item => item.label === 'Heart Rate');
        const respiratoryyRateData = foundExpectedVitalsData.description.find(item => item.label === 'Respiratory Rate');
        const bpSystolicData = foundExpectedVitalsData.description.find(item => item.label === 'BP-Systolic');
        const bpMeanData = foundExpectedVitalsData.description.find(item => item.label === 'Heart Rate');

        expect(heartRateData?.values).toEqual([ageData.heartRate]);
        expect(respiratoryyRateData?.values).toEqual([ageData.respiratoryyRate]);
        expect(bpSystolicData?.values).toEqual([ageData.bpSystolic]);
        if ( ageData.bpMean ) {
          expect(bpMeanData?.values).toEqual([ageData.bpMean]);
        }
      };
      it(`should contain valid data for ${age} age`, () => {
        let foundExpectedVitalsData;
        if ( age === '0 weeks/0 months/0 years' ) {
          foundExpectedVitalsData = age.split('/').map(
            splitedAge => EXPECTED_VITALS.find(
              element => element.age === splitedAge
            )
          );
        }else if ( age === '>= 16 years' ) {
          foundExpectedVitalsData = [ 
            EXPECTED_VITALS.find(element => element.age === '16 years'), 
            EXPECTED_VITALS.find(element => element.age === '> 16 years') 
          ];
        } else {
          foundExpectedVitalsData = EXPECTED_VITALS.find(element => element.age === age);
        }

        if ( foundExpectedVitalsData && Array.isArray(foundExpectedVitalsData) ) {
          foundExpectedVitalsData.forEach((data: any) => {verifyFoundExpectedVitalsData(data)})
        } else if ( foundExpectedVitalsData ) {
          verifyFoundExpectedVitalsData(foundExpectedVitalsData);
        } else {
          throw new Error(`Can not find VITAL_SCORES data for age ${age}`)
        }
      })
    }
  });
});


const glasgowComaScoresCases = [
  {
    ages: [0.99],
    title: 'Infant Glasgow Coma Score',
    eyeOpening: [
      { lable: 'Spontaneous', value: 4 },
      { lable: 'To Shout', value: 3 },
      { lable: 'To Pain', value: 2 },
      { lable: 'No Response', value: 1 }
    ], verbalResponse: [
      { lable: 'Smiles/Coos Appropriately', value: 5 },
      { lable: 'Cries, Consolable', value: 4 },
      { lable: 'Cries to Pain/Irritable', value: 3 },
      { lable: 'Moans to Pain/Grunts', value: 2 },
      { lable: 'No Response', value: 1 },
    ], motorResponse: [
      { lable: 'Spontaneous Movements', value: 6 },
      { lable: 'Withdraws to Touch/Localizes Pain', value: 5 },
      { lable: 'Withdraws to Pain', value: 4 },
      { lable: 'Abnormal Flexion (Decorticate Posturing)', value: 3 },
      { lable: 'Abnormal Extension (Decerebrate Posturing)', value: 2 },
      { lable: 'No Response', value: 1 }
    ]
  },
  {
    ages: [1, 5],
    title: 'Pediatric Glasgow Coma Score',
    eyeOpening: [
      { lable: 'Spontaneous', value: 4 },
      { lable: 'To Speech', value: 3 },
      { lable: 'To Pain', value: 2 },
      { lable: 'No Response', value: 1 }
    ], verbalResponse: [
      { lable: 'Appropriate Words/Phrases', value: 5 },
      { lable: 'Inappropriate Words', value: 4 },
      { lable: 'Persistent Cries and Screams', value: 3 },
      { lable: 'Grunts', value: 2 },
      { lable: 'No Response', value: 1 },
    ], motorResponse: [
      { lable: 'Spontaneous Movements', value: 6 },
      { lable: 'Withdraws to Touch/Localizes Pain', value: 5 },
      { lable: 'Withdraws to Pain', value: 4 },
      { lable: 'Abnormal Flexion (Decorticate Posturing)', value: 3 },
      { lable: 'Abnormal Extension (Decerebrate Posturing)', value: 2 },
      { lable: 'No Response', value: 1 }
    ]
  },
  {
    ages: [6, 7],
    title: 'Adult Glasgow Coma Score',
    eyeOpening: [
      { lable: 'Spontaneous', value: 4 },
      { lable: 'To Speech', value: 3 },
      { lable: 'To Pain', value: 2 },
      { lable: 'No Response', value: 1 }
    ], verbalResponse: [
      { lable: 'Oriented, Appropriate', value: 5 },
      { lable: 'Confused', value: 4 },
      { lable: 'Inappropriate Word', value: 3 },
      { lable: 'Incomprehensible Sounds', value: 2 },
      { lable: 'No Response', value: 1 },
      { lable: 'Intubate', value: 'T' }
    ], motorResponse: [
      { lable: 'Obeys Commands', value: 6 },
      { lable: 'Localizes Pain', value: 5 },
      { lable: 'Withdraws to Pain', value: 4 },
      { lable: 'Abnormal Flexion (Decorticate Posturing)', value: 3 },
      { lable: 'Abnormal Flexion (Decerebrate Posturing)', value: 2 },
      { lable: 'No Response', value: 1 }
    ]
  }
];

describe('getVitalScoresByAge function', () => {
  glasgowComaScoresCases.forEach(testCases => {
    testCases.ages.forEach(age => {
      it(`should return valid data for age ${age}`, () => {
        const result: any = getVitalScoresByAge(age);
        const eyeOpeningListData = result.content.find((item: any) => item.title === 'Eye Opening').listData;
        const verbalResponseListData = result.content.find((item: any) => item.title === 'Verbal Response').listData;
        const motorResponseListData = result.content.find((item: any) => item.title === 'Motor Response').listData;

        expect(result?.titlehead).toBe(testCases.title)
        testCases.eyeOpening.forEach(item => {
          expect(eyeOpeningListData).toContainEqual(item);
        });
        testCases.verbalResponse.forEach(item => {
          expect(verbalResponseListData).toContainEqual(item);
        });
        testCases.motorResponse.forEach(item => {
          expect(motorResponseListData).toContainEqual(item);
        });
      });
    });
  });
});