export const getAgeInYears = (age: string, ageUnit: string) => {
  if(ageUnit === 'years') {
    return parseInt(age, 10);
  }
  if(ageUnit === 'weeks') {
    return parseInt(age, 10) / 52 
  }
  if(ageUnit === 'months') {
    return parseInt(age, 10) / 12
  }
  return 0;
}

export const getAgeInMonth = (age: string, ageUnit: string) => {
  if(ageUnit === 'years') {
    return parseInt(age, 10) * 12;
  }
  if(ageUnit === 'weeks') {
    return parseInt(age, 10) / 4;
  }
  if(ageUnit === 'months') {
    return parseInt(age, 10);
  }
  return 0;
}

export const getAgeInWeeks = (age: string, ageUnit: string) => {
  if(ageUnit === 'years') {
    return parseInt(age, 10) * 52;
  }
  if(ageUnit === 'weeks') {
    return parseInt(age, 10);
  }
  if(ageUnit === 'months') {
    return parseInt(age, 10) * 4;
  }
  return 0;
}
