import {ResuscitationStore} from '../../../src/Modules/Resuscitation/stores/ResuscitationStore';

let resuscitationStoreObject: ResuscitationStore;
beforeEach(() => {
  resuscitationStoreObject = new ResuscitationStore();
});

const LBS_COEF = 2.2046226218;

const isValueBetweenBorders = (value: any, borders: number [] | number): boolean => {
  const parsedValue = Number.parseFloat(value.toString());
  if ( Array.isArray(borders) ) {
    return ( parsedValue >= borders[0] && parsedValue <= borders[1] )? true : false;
  } else {
    return borders == parsedValue;
  }
};

const getAllPossiblePropertyCombinationValues = (property: string, mapping: any []): string [] => {
  const values: Set<string> = new Set();
  mapping.forEach(item => {
    if ( Array.isArray(item[property]) ) {
      values.add(item[property][0].toString());
      values.add(item[property][1].toString());
    } else {
      values.add(item[property].toString());
    }
  });
  return new Array( ...values );
};

const getTestCasesFromMapping = (mapping: any []) => {
  const transformedMapping: any [] = [];
  mapping.forEach(item => {
    if ( item['weight'] && Array.isArray(item.weight) ) {
      console.log('ARRAYY!')
      const tItem1 = { ...item };
      tItem1.weight = item.weight[0];
      transformedMapping.push(tItem1);
      if ( Number.isFinite(item.weight[1]) ) {
        const tItem2 = { ...item };
        tItem2.weight = item.weight[1];
        transformedMapping.push(tItem2);
      }
    } else if ( item['age'] && Array.isArray(item.age) ) {
      const tItem1 = { ...item };
      tItem1.age = item.age[0];
      transformedMapping.push(tItem1);
      if ( Number.isFinite(item.weight[1]) ) {
        const tItem2 = { ...item };
        tItem2.age = item.age[1];
        transformedMapping.push(tItem2);
      }
    } else {
      transformedMapping.push(item);
    }
  });
  return transformedMapping;
};

const getRandomColor = () => {
  return allColors[Math.floor(Math.random()*allColors.length)];
};

const getRandInt = (maxValue = 10) => {
  return Math.floor(Math.random() * maxValue).toString()
};

const weightToAgeMapping = [
  {weight: 0.5, age: 0, ageUnits: 'weeks'},
  {weight: 1, age: 0, ageUnits: 'weeks'},
  {weight: 1.5, age: 0, ageUnits: 'weeks'},
  {weight: 2, age: 1, ageUnits: 'weeks'},
  {weight: 2.5, age: 1, ageUnits: 'weeks'},
  {weight: 3, age: 1, ageUnits: 'weeks'},
  {weight: 3.5, age: 2, ageUnits: 'weeks'},
  {weight: 4, age: 1, ageUnits: 'months'},
  {weight: 4.5, age: 1, ageUnits: 'months'},
  {weight: 5, age: 2, ageUnits: 'months'},
  {weight: 5.5, age: 2, ageUnits: 'months'},
  {weight: 6, age: 3 , ageUnits: 'months'},
  {weight: 7, age: 4 ,ageUnits: 'months'},
  {weight: 8, age: 6 ,ageUnits: 'months'},
  {weight: 9, age: 9 ,ageUnits: 'months'},
  {weight: 10, age: 12, ageUnits: 'months'},
  {weight: 11, age: 18, ageUnits: 'months'},
  {weight: 12, age: 23, ageUnits: 'months'},
  {weight: [13, 14], age: 2, ageUnits: 'years'},
  {weight: [15, 16], age: 3, ageUnits: 'years'},
  {weight: 17, age: 4, ageUnits: 'years'},
  {weight: [18, 20], age: 5, ageUnits: 'years'},
  {weight: [21, 23], age: 6, ageUnits: 'years'},
  {weight: [24, 25], age: 7, ageUnits: 'years'},
  {weight: [26, 30], age: 8, ageUnits: 'years'},
  {weight: [31, 32], age: 9, ageUnits: 'years'},
  {weight: [33, 39], age: 10, ageUnits: 'years'},
  {weight: [40, 43], age: 11, ageUnits: 'years'},
  {weight: [44, 50], age: 12, ageUnits: 'years'},
  {weight: [51, 54], age: 13, ageUnits: 'years'},
  {weight: [55, 60], age: 14, ageUnits: 'years'},
  {weight: [61, 63], age: 15, ageUnits: 'years'},
  {weight: [64, 65], age: 16, ageUnits: 'years'},
  {weight: 65, age: [16, Infinity], ageUnits: 'years'},
];
const ageToWeightMapping = [
  {age: 0, ageUnits: "weeks", weight: 3},
  {age: 1, ageUnits: "weeks", weight: 4},
  {age: 2, ageUnits: "weeks", weight: 4},
  {age: 3, ageUnits: "weeks", weight: 4},
  {age: 1, ageUnits: "months", weight: 4},
  {age: 2, ageUnits: "months", weight: 5},
  {age: 3, ageUnits: "months", weight: 6},
  {age: 4, ageUnits: "months", weight: 7},
  {age: 5, ageUnits: "months", weight: 7},
  {age: 6, ageUnits: "months", weight: 8},
  {age: 7, ageUnits: "months", weight: 8},
  {age: 8, ageUnits: "months", weight: 8},
  {age: 9, ageUnits: "months", weight: 9},
  {age: 10, ageUnits: "months", weight: 9},
  {age: 11, ageUnits: "months", weight: 9},
  {age: 12, ageUnits: "months", weight: 10},
  {age: 13, ageUnits: "months", weight: 10},
  {age: 14, ageUnits: "months", weight: 10},
  {age: 15, ageUnits: "months", weight: 10},
  {age: 16, ageUnits: "months", weight: 10},
  {age: 17, ageUnits: "months", weight: 10},
  {age: 18, ageUnits: "months", weight: 11},
  {age: 19, ageUnits: "months", weight: 11},
  {age: 20, ageUnits: "months", weight: 11},
  {age: 21, ageUnits: "months", weight: 11},
  {age: 22, ageUnits: "months", weight: 11},
  {age: 23, ageUnits: "months", weight: 12},
  {age: 1, ageUnits: "years", weight: 10},
  {age: 2, ageUnits: "years", weight: 14},
  {age: 3, ageUnits: "years", weight: 16},
  {age: 4, ageUnits: "years", weight: 17},
  {age: 5, ageUnits: "years", weight: 20},
  {age: 6, ageUnits: "years", weight: 23},
  {age: 7, ageUnits: "years", weight: 25},
  {age: 8, ageUnits: "years", weight: 30},
  {age: 9, ageUnits: "years", weight: 32},
  {age: 10, ageUnits: "years", weight: 39},
  {age: 11, ageUnits: "years", weight: 43},
  {age: 12, ageUnits: "years", weight: 50},
  {age: 13, ageUnits: "years", weight: 54},
  {age: 14, ageUnits: "years", weight: 60},
  {age: 15, ageUnits: "years", weight: 63},
  {age: [16, Infinity], ageUnits: "years", weight: 65},
];
const colorToWeightMapping = [
  {color: 'Grey', weight: 4, age: 0, ageUnits: "weeks"},
  {color: 'Pink', weight: 6, age: 3, ageUnits: "months"},
  {color: 'Red', weight: 8, age: 6, ageUnits: "months"},
  {color: 'Purple', weight: 10, age: 1, ageUnits: "years"},
  {color: 'Yellow', weight: 13, age: 2, ageUnits: "years"},
  {color: 'White', weight: 16, age: 4, ageUnits: "years"},
  {color: 'Blue', weight: 20, age: 5, ageUnits: "years"},
  {color: 'Orange', weight: 26, age: 7, ageUnits: "years"},
  {color: 'Green', weight: 32, age: 9, ageUnits: "years"},
];
const weightToColorMapping = [
  {weight: [0, 5.5], color: 'Grey'},
  {weight: [6, 7], color: 'Pink'},
  {weight: [8, 9], color: 'Red'},
  {weight: [10, 11], color: 'Purple'},
  {weight: [12, 14], color: 'Yellow'},
  {weight: [15, 18], color: 'White'},
  {weight: [19, 23], color: 'Blue'},
  {weight: [24, 29], color: 'Orange'},
  {weight: [30, Infinity], color: 'Green'},
];

const allColors = colorToWeightMapping.map(item => item.color);

describe('ResuscitationStore class instanse default propetry', () => {
  it(`ageUnit value should be "weeks"`, () => {
    expect(resuscitationStoreObject.ageUnit).toBe('weeks');
  });
  it(`weightUnit value should be "kg"`, () => {
    expect(resuscitationStoreObject.weightUnit).toBe('kg');
  });
  it(`estimationMode value should be "default"`, () => {
    expect(resuscitationStoreObject.estimationMode).toBe('default');
  });
  it(`colorEstimated value should be false`, () => {
    expect(resuscitationStoreObject.colorEstimated).toBe(false);
  });
  it(`ageEstimated value should be false`, () => {
    expect(resuscitationStoreObject.ageEstimated).toBe(false);
  });
  it(`weightEstimated value should be false`, () => {
    expect(resuscitationStoreObject.ageEstimated).toBe(false);
  });
  it(`color value should be ""`, () => {
    expect(resuscitationStoreObject.color).toEqual('');
  });
  it(`age value should be ""`, () => {
    expect(resuscitationStoreObject.age).toEqual('');
  });
  it(`weight value should be ""`, () => {
    expect(resuscitationStoreObject.weight).toEqual('');
  });
});

describe('ResuscitationStore class setWeightUnit method', () => {
  const weightUnits = [
    {weightUnit: 'kg', expectedResult: 'kg'}, 
    {weightUnit: 'lbs', expectedResult: 'lbs'},
  ];
  weightUnits.forEach(testCase => {
    it(`sets weightUnit ${testCase.weightUnit}`, () => {
      resuscitationStoreObject.setWeightUnit(testCase.weightUnit);
      expect(resuscitationStoreObject.weightUnit).toBe(testCase.expectedResult);
    });
  });
});

describe('ResuscitationStore class setAgeUnit method', () => {
  const ageUnits = [
    {ageUnit: '', expectedResult: 'weeks'},
    {ageUnit: 'weeks', expectedResult: 'weeks'},
    {ageUnit: 'months', expectedResult: 'months'},
    {ageUnit: 'years', expectedResult: 'years'},
  ];
  ageUnits.forEach(testCase => {
    it(`sets ageUnit ${testCase.ageUnit}`, () => {
      resuscitationStoreObject.setAgeUnit(testCase.ageUnit);
      expect(resuscitationStoreObject.ageUnit).toBe(testCase.expectedResult);
    });
  });
});

describe('ResuscitationStore class setEstimationMode method', () => {
  const estimationModes = ['nbi', 'default'];
  estimationModes.forEach(mode => {
    it(`sets estimationMode ${mode}`, () => {
      resuscitationStoreObject.setEstimationMode(mode);
      expect(resuscitationStoreObject.estimationMode).toBe(mode);
    });
  });
});

describe('ResuscitationStore class clear method', () => {
  it('drops all instance property values to default values', () => {
    const randomTestColor = colorToWeightMapping.map(item => item.color)[Math.floor(Math.random()*colorToWeightMapping.length)];
    resuscitationStoreObject.weight = Math.floor(Math.random() * 50).toString();
    resuscitationStoreObject.age = Math.floor(Math.random() * 50).toString();
    resuscitationStoreObject.color = randomTestColor;
    resuscitationStoreObject.weightEstimated = true;
    resuscitationStoreObject.ageEstimated = true;
    resuscitationStoreObject.colorEstimated = true;
    resuscitationStoreObject.weightUnit = 'lbs';
    resuscitationStoreObject.ageUnit = 'months';
    resuscitationStoreObject.estimationMode = 'nbi';

    resuscitationStoreObject.clear()

    expect(resuscitationStoreObject.weight).toEqual('');
    expect(resuscitationStoreObject.age).toEqual('');
    expect(resuscitationStoreObject.color).toEqual('');
    expect(resuscitationStoreObject.weightEstimated).toBe(false);
    expect(resuscitationStoreObject.ageEstimated).toBe(false);
    expect(resuscitationStoreObject.colorEstimated).toBe(false);
    expect(resuscitationStoreObject.weightUnit).toBe('kg');
    expect(resuscitationStoreObject.ageUnit).toBe('weeks');
    expect(resuscitationStoreObject.estimationMode).toBe('default');
  });
});

describe('ResuscitationStore class setColor method', () => {
  const colors = [
    {colorName: 'Grey', weight: 4,age: 0, ageUnit: 'weeks'},
    {colorName: 'Pink', weight: 6, age: 3, ageUnit: 'months'},
    {colorName: 'Red', weight: 8, age: 6, ageUnit: 'months'},
    {colorName: 'Purple', weight: 10, age: 1, ageUnit: 'years'},
    {colorName: 'Yellow', weight: 13, age: 2, ageUnit: 'years'},
    {colorName: 'White', weight: 16, age: 4, ageUnit: 'years'},
    {colorName: 'Blue', weight: 20, age: 5, ageUnit: 'years'},
    {colorName: 'Orange', weight: 26, age: 7, ageUnit: 'years'},
    {colorName: 'Green', weight: 32, age: 9, ageUnit: 'years'},
  ];
  for (let setColorI = 0; setColorI < colors.length; setColorI++) {
    const preSetColorI = ( setColorI > 0 ) ? setColorI-1 : colors.length - (setColorI + 1);

    it(`should change only color to ${colors[setColorI].colorName} if other one (${colors[preSetColorI].colorName}) was set previusly`, () => {
      resuscitationStoreObject.setColor(colors[preSetColorI].colorName);
      resuscitationStoreObject.setColor(colors[setColorI].colorName);

      expect(resuscitationStoreObject.color).toBe(colors[setColorI].colorName);

      expect(resuscitationStoreObject.weight).toBe(colors[preSetColorI].weight.toString());
        
      expect(resuscitationStoreObject.age).toBe(colors[preSetColorI].age.toString());
      expect(resuscitationStoreObject.ageUnit).toBe(colors[preSetColorI].ageUnit);

      expect(resuscitationStoreObject.colorEstimated).toBe(false);
    });
  }
  colors.forEach(color => {
    it(`should calculate weight and age for ${color.colorName} if they are not set`, () => {
      resuscitationStoreObject.setColor(color.colorName);

      expect(resuscitationStoreObject.weight).toBe(color.weight.toString());
        
      expect(resuscitationStoreObject.age).toBe(color.age.toString());
      expect(resuscitationStoreObject.ageUnit).toBe(color.ageUnit);

      expect(resuscitationStoreObject.color).toBe(color.colorName);
      expect(resuscitationStoreObject.colorEstimated).toBe(false);
    });
  });
  colors.forEach(color => {
    it(`should not calculate weight for ${color.colorName} if it's already set`, () => {
      resuscitationStoreObject.weight = '1';
      resuscitationStoreObject.setColor(color.colorName);
      expect(resuscitationStoreObject.weight).toBe('1');

      expect(resuscitationStoreObject.age).toBe(color.age.toString());
      expect(resuscitationStoreObject.ageUnit).toBe(color.ageUnit);

      expect(resuscitationStoreObject.color).toBe(color.colorName);
      expect(resuscitationStoreObject.colorEstimated).toBe(false);
    });
  });
  colors.forEach(color => {
    it(`should not calculate age for ${color.colorName} if it's already set`, () => {
      const age = getRandInt()
      resuscitationStoreObject.age = age;
      resuscitationStoreObject.setColor(color.colorName);
      expect(resuscitationStoreObject.age).toBe(age);

      expect(resuscitationStoreObject.weight).toBe(color.weight.toString());

      expect(resuscitationStoreObject.color).toBe(color.colorName);
      expect(resuscitationStoreObject.colorEstimated).toBe(false);
    });
  });
  it('should not set color property if undefind is pushed as an argument', () => {
    resuscitationStoreObject.setColor(undefined);
    expect(resuscitationStoreObject.color).toEqual('');
  });
  allColors.forEach(color => {
    it(`should not change pre-set color (${color}) property if undefind is pushed as an argument`, () => {
      resuscitationStoreObject.color = color;
      resuscitationStoreObject.setColor(undefined);
      expect(resuscitationStoreObject.color).toBe(color);
    });
  });
});

describe('ResuscitationStore class setWeight method', () => {
  const weights = getAllPossiblePropertyCombinationValues('weight', weightToAgeMapping);
  weights.forEach(weight => {
    it(`set weight ${weight} kg and calculate age and color if they are not set`, () => {
      resuscitationStoreObject.setWeight(weight);
      const expectedCalculatedAge = weightToAgeMapping.find( item => isValueBetweenBorders(Number.parseFloat(weight), item.weight) )?.age.toString();
      const expectedCalculatedColor = weightToColorMapping.find( item => isValueBetweenBorders(Number.parseFloat(weight), item.weight) )?.color;

      expect(resuscitationStoreObject.weight).toEqual(weight);
      expect(resuscitationStoreObject.age).toBe(expectedCalculatedAge);
      expect(resuscitationStoreObject.color).toBe(expectedCalculatedColor);
    });
  });
  const lbsWeights = weights.map(
    item => { return {kg: item, lbs: Math.ceil(Number.parseFloat(item) * LBS_COEF).toString()} }
  );
  lbsWeights.forEach(weight => {
    it(`set weight ${weight.lbs} lbs and calculate age and color if they are not set`, () => {
      resuscitationStoreObject.weightUnit = 'lbs';
      resuscitationStoreObject.setWeight(weight.lbs);
      const expectedCalculatedAge = weightToAgeMapping.find( item => isValueBetweenBorders(Number.parseFloat(weight.kg), item.weight) )?.age.toString();
      const expectedCalculatedColor = weightToColorMapping.find( item => isValueBetweenBorders(Number.parseFloat(weight.kg), item.weight) )?.color;

      expect(resuscitationStoreObject.weight).toEqual(weight.lbs);
      expect(resuscitationStoreObject.age).toBe(expectedCalculatedAge);
      expect(resuscitationStoreObject.color).toBe(expectedCalculatedColor);
    });
  });

  weights.forEach(weight => {
    it(`set weight ${weight} kg when age is already set`, () => {
      const randCaseAgeValue = getRandInt(50);
      resuscitationStoreObject.age = randCaseAgeValue;
      resuscitationStoreObject.setWeight(weight);
      const expectedCalculatedColor = weightToColorMapping.find( item => isValueBetweenBorders(Number.parseFloat(weight), item.weight) )?.color;

      expect(resuscitationStoreObject.weight).toEqual(weight);
      expect(resuscitationStoreObject.age).toBe(randCaseAgeValue);
      expect(resuscitationStoreObject.ageUnit).toBe('weeks');
      expect(resuscitationStoreObject.color).toBe(expectedCalculatedColor);
    });
  });
    

  weights.forEach(weight => {
    it(`set weight ${weight} kg when color is already set`, () => {
      const testColor = 'FakeColor';
      resuscitationStoreObject.color = testColor;
      resuscitationStoreObject.setWeight(weight);
      const expectedCalculatedAge = weightToAgeMapping.find( item => isValueBetweenBorders(Number.parseFloat(weight), item.weight) )?.age.toString();

      expect(resuscitationStoreObject.weight).toEqual(weight);
      expect(resuscitationStoreObject.age).toBe(expectedCalculatedAge);
      expect(resuscitationStoreObject.color).toBe(testColor);
    });
  });

  it('should not set value if undefind is pushed as argument', () => {
    resuscitationStoreObject.setWeight(undefined);
    expect(resuscitationStoreObject.weight).toEqual('');
  });
  it('should not change value if undefind is pushed as argument', () => {
    const testAgeValue = getRandInt(50);
    resuscitationStoreObject.weight = testAgeValue;
    resuscitationStoreObject.setWeight(undefined);
    expect(resuscitationStoreObject.weight).toEqual(testAgeValue);
  });
});

describe('ResuscitationStore class setAge method', () => {
  const ageTestCases = getTestCasesFromMapping(ageToWeightMapping);
  ageTestCases.forEach(testCase => {
    it(`set age ${testCase.age} ${testCase.ageUnits} and calculate weight and color if they are not set`, () => {
      resuscitationStoreObject.ageUnit = testCase.ageUnits;
      resuscitationStoreObject.setAge(testCase.age.toString());
    
      expect(resuscitationStoreObject.age).toBe(testCase.age.toString());
      expect(resuscitationStoreObject.ageUnit).toBe(testCase.ageUnits);
      expect(resuscitationStoreObject.ageEstimated).toBe(false);

      expect(resuscitationStoreObject.weight).toBe(testCase.weight.toString());
      expect(resuscitationStoreObject.weightUnit).toBe('kg');
    });
  });
  ageTestCases.forEach(testCase => {
    it(`set age ${testCase.age} ${testCase.ageUnits} when weight is already set but color is not`, () => {
      const testWeightValue = getRandInt(50).toString();
      resuscitationStoreObject.weight = testWeightValue;
      resuscitationStoreObject.ageUnit = testCase.ageUnits;
      resuscitationStoreObject.setAge(testCase.age.toString());
    
      expect(resuscitationStoreObject.age).toBe(testCase.age.toString());
      expect(resuscitationStoreObject.ageUnit).toBe(testCase.ageUnits);
      expect(resuscitationStoreObject.ageEstimated).toBe(false);

      expect(resuscitationStoreObject.weight).toBe(testWeightValue);
      expect(resuscitationStoreObject.weightUnit).toBe('kg');
    });
  });
  ageTestCases.forEach(testCase => {
    it(`set age ${testCase.age} ${testCase.ageUnits} when color is already set but weight is not`, () => {
      const testColorValue = getRandomColor();
      resuscitationStoreObject.color = testColorValue;
      resuscitationStoreObject.ageUnit = testCase.ageUnits;
      resuscitationStoreObject.setAge(testCase.age.toString());
    
      expect(resuscitationStoreObject.age).toBe(testCase.age.toString());
      expect(resuscitationStoreObject.ageUnit).toBe(testCase.ageUnits);
      expect(resuscitationStoreObject.ageEstimated).toBe(false);

      expect(resuscitationStoreObject.color).toBe(testColorValue);
      expect(resuscitationStoreObject.weightUnit).toBe('kg');
    });
  });

  it('should not set value if undefind is pushed as argument', () => {
    resuscitationStoreObject.setWeight(undefined);
    expect(resuscitationStoreObject.weight).toEqual('');
  });
  it('should not change value if undefind is pushed as argument', () => {
    const testAgeValue = getRandInt(50).toString();
    resuscitationStoreObject.age = testAgeValue;
    resuscitationStoreObject.setWeight(undefined);
    expect(resuscitationStoreObject.age).toEqual(testAgeValue);
  });
});

describe('ResuscitationStore class getAgeDisplay method', () =>{
  const Near16AgeCases = [
    {weight: '65', age: '16', ageUnit: 'years', expectedResult: '16 years'},
    {weight: '66', age: '16', ageUnit: 'years', expectedResult: '> 16 years'},
    {weight: '67', age: '16', ageUnit: 'years', expectedResult: '> 16 years'},
  ];
  Near16AgeCases.forEach(testCase => {
    it(`should display age correct when weight is ${testCase.weight}`, () => {
      resuscitationStoreObject.ageEstimated = true;
      resuscitationStoreObject.ageUnit = testCase.ageUnit;
      resuscitationStoreObject.age = testCase.age;

      resuscitationStoreObject.weight = testCase.weight;
      const funcResult = resuscitationStoreObject.getAgeDisplay();
      expect(funcResult).toBe(testCase.expectedResult);
    });
  });
  const singleAgeUnitCases = [
    {weight: getRandInt().toString(), age: '1', ageUnit: 'weeks', expectedResult: '1 week'},
    {weight: getRandInt().toString(), age: '2', ageUnit: 'weeks', expectedResult: '2 weeks'},
    {weight: getRandInt().toString(), age: '1', ageUnit: 'months', expectedResult: '1 month'},
    {weight: getRandInt().toString(), age: '2', ageUnit: 'months', expectedResult: '2 months'},
    {weight: getRandInt().toString(), age: '1', ageUnit: 'years', expectedResult: '1 year'},
    {weight: getRandInt().toString(), age: '2', ageUnit: 'years', expectedResult: '2 years'},
  ];
  singleAgeUnitCases.forEach(testCase => {
    it(`should display age correctly when age is ${testCase.age} ${testCase.ageUnit}`, () => {
      resuscitationStoreObject.ageEstimated = true;
      resuscitationStoreObject.ageUnit = testCase.ageUnit;
      resuscitationStoreObject.age = testCase.age;
    
      resuscitationStoreObject.weight = testCase.weight;
      const funcResult = resuscitationStoreObject.getAgeDisplay();
      expect(funcResult).toBe(testCase.expectedResult);
    });
  });
});

describe('ResuscitationStore class nextEnabled getter', () => {
  const validResult = getRandInt().toString();
  const cases = [
    {age: getRandInt().toString(), expectedResult: ""},
    {weight: getRandInt().toString(), expectedResult: ""},
    {age: validResult, weight: getRandInt().toString(), expectedResult: validResult},
    {expectedResult: ""},
  ];
  cases.forEach(testCase => {
    it(`should return true only when weight and age are set. age: ${testCase.age}, weight: ${testCase.weight}`, () => {
      if ( testCase?.age ) {
        resuscitationStoreObject.age = testCase.age;
      }
      if ( testCase?.weight ) {
        resuscitationStoreObject.weight = testCase.weight;
      } 
      const result = resuscitationStoreObject.nextEnabled
      expect(result).toBe(testCase.expectedResult);
    });
  });
});

describe('ResuscitationStore class convertAge method', () => {
  const nbiModeValues = ['', '10', '15'];
  nbiModeValues.forEach(value => {
    it(`should return set age (${value}) value if NBI mode is set for class instance`, () => {
      resuscitationStoreObject.estimationMode = 'nbi';
      if ( value ) {
        resuscitationStoreObject.age = value;
      }
      const funcResult = resuscitationStoreObject.convertAge();
      expect(funcResult).toBe(value);
    });
  });

  const cases = [
    {age: '7', ageUnits: 'weeks', expectedAge: '7', expectedAgeUnits: 'weeks'},
    {age: '8', ageUnits: 'weeks', expectedAge: '2', expectedAgeUnits: 'months'},
    {age: '9', ageUnits: 'weeks', expectedAge: '2', expectedAgeUnits: 'months'},

    {age: '23', ageUnits: 'months', expectedAge: '23', expectedAgeUnits: 'months'},
    {age: '24', ageUnits: 'months', expectedAge: '2', expectedAgeUnits: 'years'},
    {age: '25', ageUnits: 'months', expectedAge: '2', expectedAgeUnits: 'years'},
  ];
  cases.forEach(testCase => {
    it(`should set age to months for class instance if age in weeks > 7. Age: ${testCase.age} ${testCase.ageUnits}`, () => {
      resuscitationStoreObject.age = testCase.age;
      resuscitationStoreObject.ageUnit = testCase.ageUnits;
      const funcResult = resuscitationStoreObject.convertAge();

      expect(funcResult).toBe(undefined);
      expect(resuscitationStoreObject.age).toBe(testCase.expectedAge);
      expect(resuscitationStoreObject.ageUnit).toBe(testCase.expectedAgeUnits);
    });
  });
    
});

describe('ResuscitationStore class recalculateWeightForPrematureInfant method', () => {
  const gestAges = {
    age_22_28: '22-28 weeks',
    age_29_36: '29-36 weeks'
  };
  const cases = [
    {gestAge: gestAges.age_22_28, age: '3', expectedWeight: '2'},
    {gestAge: gestAges.age_22_28, age: '4', expectedWeight: '2'},
    {gestAge: gestAges.age_22_28, age: '5', expectedWeight: '2.5'},

    {gestAge: gestAges.age_29_36, age: '3', expectedWeight: '3'},
    {gestAge: gestAges.age_29_36, age: '4', expectedWeight: '3'},
    {gestAge: gestAges.age_29_36, age: '5', expectedWeight: '3.5'},
  ];
  cases.forEach(testCase => {
    it(`should recalculate age for infants ${testCase.gestAge}`, () => {
      resuscitationStoreObject.age = testCase.age;
      resuscitationStoreObject.weight = '1';
      resuscitationStoreObject.recalculateWeightForPrematureInfant(testCase.gestAge);
      expect(resuscitationStoreObject.weight).toBe(testCase.expectedWeight);
    });
  });
});
