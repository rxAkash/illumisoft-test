export const LBS_MULTIPLYER = 2.205;

export const NBI_EDITING_MODE = 'nbi';
export const DEFAULT_EDITING_MODE = 'default';

export const WEEKS = 'weeks';
export const MONTH = 'months';
export const YEARS = 'years';

export const WEEK = 'week';
export const MONT = 'month';
export const YEAR = 'year'

export const KG = 'kg';
export const LBS = 'lbs';

export const GEST_AGE_22_28 = '22-28 weeks';
export const GEST_AGE_29_36 = '29-36 weeks';

export const MAX_WEIGHT_AGE_VALUE = 66;

export const COLOR_OPTIONS = [{
  title: 'Grey',
  value: 'Grey',
},{
  title: 'Pink',
  value: 'Pink',
},{
  title: 'Red',
  value: 'Red',
},{
  title: 'Purple',
  value: 'Purple',
},{
  title: 'Yellow',
  value: 'Yellow',
},{
  title: 'White',
  value: 'White',
},{
  title: 'Blue',
  value: 'Blue',
},{
  title: 'Orange',
  value: 'Orange'
},{
  title: 'Green',
  value: 'Green'
}]

export const WEIGHT_COLOR_MAPPING = [{
  lowWeight: 0,
  weightValue: 4,
  highWeight: 5.99,
  color: 'Grey'
}, {
  lowWeight: 6,
  weightValue: 6,
  highWeight: 7.99,
  color: 'Pink'
}, {
  lowWeight: 8,
  weightValue: 8,
  highWeight: 9.99,
  color: 'Red'
}, {
  lowWeight: 10,
  weightValue: 10,
  highWeight: 11.99,
  color: 'Purple'
}, {
  lowWeight: 12,
  weightValue: 13,
  highWeight: 14.99,
  color: 'Yellow'
}, {
  lowWeight: 15,
  weightValue: 16,
  highWeight: 18.99,
  color: 'White'
}, {
  lowWeight: 19,
  weightValue: 20,
  highWeight: 23.99,
  color: 'Blue'
}, {
  lowWeight: 24,
  weightValue: 26,
  highWeight: 29.99,
  color: 'Orange'
}, {
  lowWeight: 30,
  weightValue: 32,
  highWeight: 9000,
  color: 'Green'
}]

export const COLOR_AGE_MAPPING = [
  {
    age: 0,
    ageUnit: WEEKS,
    color: 'Grey'
  }, {
    age: 3,
    ageUnit: MONTH,
    color: 'Pink'
  }, {
    age: 6,
    ageUnit: MONTH,
    color: 'Red'
  }, {
    age: 1,
    ageUnit: YEARS,
    color: 'Purple'
  }, {
    age: 2,
    ageUnit: YEARS,
    color: 'Yellow'
  }, {
    age: 4,
    ageUnit: YEARS,
    color: 'White'
  }, {
    age: 5,
    ageUnit: YEARS,
    color: 'Blue'
  }, {
    age: 7,
    ageUnit: YEARS,
    color: 'Orange'
  }, {
    age: 9,
    ageUnit: YEARS,
    color: 'Green'
  }
]

export const NBI_AGE_WEIGHT_MAPPING = [
  {
    ageValues: ['0'],
    value: '0'
  }, {
    ageValues: ['24', '25', '26'],
    value: '0.5',
  }, {
    ageValues: ['27', '28', '29'],
    value: '1',
  }, {
    ageValues: ['30', '31'],
    value: '1.5',
  }, {
    ageValues: ['32', '33', '34', '35'],
    value: '2',
  }, {
    ageValues: ['36', '37'],
    value: '2.5',
  }, {
    ageValues: ['38', '39', '40'],
    value: '3',
  }, {
    ageValues: ['41'],
    value: '3.5',
  }, {
    ageValues: ['42'],
    value: '4',
  }, {
    ageValues: ['42'],
    value: '4.5',
  }, {
    ageValues: ['42'],
    value: '5',
  }, {
    ageValues: ['42'],
    value: '5.5',
  }, {
    ageValues: ['42'],
    value: '6',
  }
]

export const colorHexMap = {
  Grey: '#808080',
  Pink: '#ff748c',
  Red: '#FF0000',
  Purple: '#800080',
  Yellow: '#FFFF00',
  White: '#FFFFFF',
  Blue: '#0000FF',
  Orange: '#FFA500',
  Green: '#00FF00'
}

export const AGE_OPTIONS = [
  {
    title: '1',
    value: '1'
  }, {
    title: '2',
    value: '2'
  }, {
    title: '3',
    value: '3'
  }, {
    title: '4',
    value: '4'
  }, {
    title: '5',
    value: '5'
  }, {
    title: '6',
    value: '6'
  }, {
    title: '7',
    value: '7'
  }, {
    title: '8',
    value: '8'
  }, {
    title: '9',
    value: '9'
  }, {
    title: '10',
    value: '10'
  }, {
    title: '11',
    value: '11'
  }, {
    title: '12',
    value: '12'
  }, {
    title: '13',
    value: '13'
  }, {
    title: '14',
    value: '14'
  }, {
    title: '15',
    value: '15'
  }, {
    title: '16',
    value: '16'
  }, {
    title: '17',
    value: '17'
  }, {
    title: '18',
    value: '18'
  }, {
    title: '19',
    value: '19'
  }, {
    title: '20',
    value: '20'
  }, {
    title: '21',
    value: '21'
  }, {
    title: '22',
    value: '22'
  }, {
    title: '23',
    value: '23'
  }
]

export const AGE_UNIT_OPTIONS = [
  {
    title: 'weeks',
    value: WEEKS
  },
  {
    title: 'months',
    value: MONTH
  },
  {
    title: 'years',
    value: YEARS
  }
]


export const AGE_WEIGHT_MAPPING = [
  {
    ageValues: ['0'],
    ageUnit: WEEKS,
    weightValue: '3'
  }, {
    ageValues: ['1', '2', '3', '4', '5', '6', '7'],
    ageUnit: WEEKS,
    weightValue: '4'
  }, {
    ageValues: ['1'],
    ageUnit: MONTH,
    weightValue: '4'
  }, {
    ageValues: ['2'],
    ageUnit: MONTH,
    weightValue: '5'
  }, {
    ageValues: ['3'],
    ageUnit: MONTH,
    weightValue: '6'
  }, {
    ageValues: ['4', '5'],
    ageUnit: MONTH,
    weightValue: '7'
  }, {
    ageValues: ['6', '7', '8'],
    ageUnit: MONTH,
    weightValue: '8'
  }, {
    ageValues: ['9', '10', '11'],
    ageUnit: MONTH,
    weightValue: '9'
  }, {
    ageValues: ['12', '13', '14', '15', '16', '17'],
    ageUnit: MONTH,
    weightValue: '10'
  }, {
    ageValues: ['18', '19', '20', '21', '22'],
    ageUnit: MONTH,
    weightValue: '11'
  }, {
    ageValues: ['23'],
    ageUnit: MONTH,
    weightValue: '12'
  }, {
    ageValues: ['1'],
    ageUnit: YEARS,
    weightValue: '10'
  }, {
    ageValues: ['2'],
    ageUnit: YEARS,
    weightValue: '14'
  }, {
    ageValues: ['3'],
    ageUnit: YEARS,
    weightValue: '16'
  }, {
    ageValues: ['4'],
    ageUnit: YEARS,
    weightValue: '17'
  }, {
    ageValues: ['5'],
    ageUnit: YEARS,
    weightValue: '20'
  }, {
    ageValues: ['6'],
    ageUnit: YEARS,
    weightValue: '23'
  }, {
    ageValues: ['7'],
    ageUnit: YEARS,
    weightValue: '25'
  }, {
    ageValues: ['8'],
    ageUnit: YEARS,
    weightValue: '30'
  }, {
    ageValues: ['9'],
    ageUnit: YEARS,
    weightValue: '32'
  }, {
    ageValues: ['10'],
    ageUnit: YEARS,
    weightValue: '39'
  }, {
    ageValues: ['11'],
    ageUnit: YEARS,
    weightValue: '43'
  }, {
    ageValues: ['12'],
    ageUnit: YEARS,
    weightValue: '50'
  }, {
    ageValues: ['13'],
    ageUnit: YEARS,
    weightValue: '54'
  }, {
    ageValues: ['14'],
    ageUnit: YEARS,
    weightValue: '60'
  }, {
    ageValues: ['15'],
    ageUnit: YEARS,
    weightValue: '63'
  }, {
    ageValues: ['16'],
    ageUnit: YEARS,
    weightValue: '65'
  }, {
    ageValues: ['17'],
    ageUnit: YEARS,
    weightValue: '65'
  }, {
    ageValues: ['18'],
    ageUnit: YEARS,
    weightValue: '65'
  }, {
    ageValues: ['19'],
    ageUnit: YEARS,
    weightValue: '65'
  }, {
    ageValues: ['20'],
    ageUnit: YEARS,
    weightValue: '65'
  }, {
    ageValues: ['21'],
    ageUnit: YEARS,
    weightValue: '65'
  }, {
    ageValues: ['22'],
    ageUnit: YEARS,
    weightValue: '65'
  }, {
    ageValues: ['23'],
    ageUnit: YEARS,
    weightValue: '65'
  }
]

export const WEIGHT_AGE_MAPPING = [
  {
    lowWeight: '0.1',
    highWeight: '1.99',
    ageValue: '0',
    ageUnit: WEEKS
  },
  {
    lowWeight: '2',
    highWeight: '3.49',
    ageValue: '1',
    ageUnit: WEEKS
  },
  {
    lowWeight: '3.5',
    highWeight: '3.99',
    ageValue: '2',
    ageUnit: WEEKS
  },
  {
    lowWeight: '4',
    highWeight: '4.99',
    ageValue: '1',
    ageUnit: MONTH
  }, {
    lowWeight: '5',
    highWeight: '5.99',
    ageValue: '2',
    ageUnit: MONTH
  }, {
    lowWeight: '6',
    highWeight: '6.99',
    ageValue: '3',
    ageUnit: MONTH
  }, {
    lowWeight: '7',
    highWeight: '7.99',
    ageValue: '4',
    ageUnit: MONTH
  }, {
    lowWeight: '8',
    highWeight: '8.99',
    ageValue: '6',
    ageUnit: MONTH
  }, {
    lowWeight: '9',
    highWeight: '9.99',
    ageValue: '9',
    ageUnit: MONTH
  }, {
    lowWeight: '10',
    highWeight: '10.99',
    ageValue: '12',
    ageUnit: MONTH
  }, {
    lowWeight: '11',
    highWeight: '11.99',
    ageValue: '18',
    ageUnit: MONTH
  }, {
    lowWeight: '12',
    highWeight: '12.99',
    ageValue: '23',
    ageUnit: MONTH
  }, {
    lowWeight: '13',
    highWeight: '14.99',
    ageValue: '2',
    ageUnit: YEARS
  }, {
    lowWeight: '15',
    highWeight: '16.99',
    ageValue: '3',
    ageUnit: YEARS
  }, {
    lowWeight: '17',
    highWeight: '17.99',
    ageValue: '4',
    ageUnit: YEARS
  }, {
    lowWeight: '18',
    highWeight: '20.99',
    ageValue: '5',
    ageUnit: YEARS
  }, {
    lowWeight: '21',
    highWeight: '23.99',
    ageValue: '6',
    ageUnit: YEARS
  }, {
    lowWeight: '24',
    highWeight: '25.99',
    ageValue: '7',
    ageUnit: YEARS
  }, {
    lowWeight: '26',
    highWeight: '30.99',
    ageValue: '8',
    ageUnit: YEARS
  }, {
    lowWeight: '31',
    highWeight: '32.99',
    ageValue: '9',
    ageUnit: YEARS
  }, {
    lowWeight: '33',
    highWeight: '39.99',
    ageValue: '10',
    ageUnit: YEARS
  }, {
    lowWeight: '40',
    highWeight: '43.99',
    ageValue: '11',
    ageUnit: YEARS
  }, {
    lowWeight: '44',
    highWeight: '50.99',
    ageValue: '12',
    ageUnit: YEARS
  }, {
    lowWeight: '51',
    highWeight: '54.99',
    ageValue: '13',
    ageUnit: YEARS
  }, {
    lowWeight: '55',
    highWeight: '60.99',
    ageValue: '14',
    ageUnit: YEARS
  }, {
    lowWeight: '61',
    highWeight: '63.99',
    ageValue: '15',
    ageUnit: YEARS
  }, {
    lowWeight: '64',
    highWeight: '65.99',
    ageValue: '16',
    ageUnit: YEARS
  }, {
    lowWeight: '66',
    highWeight: '9999',
    ageValue: '16',
    ageUnit: YEARS
  }
]
