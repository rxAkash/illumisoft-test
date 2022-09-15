import { makeAutoObservable } from "mobx";
import { getAgeInWeeks } from "utils/ageConverter";
import { getWeightInKg } from "utils/weightConverter";
import { WEIGHT_COLOR_MAPPING, DEFAULT_EDITING_MODE, WEEKS, KG, NBI_EDITING_MODE, NBI_AGE_WEIGHT_MAPPING, MONTH, YEARS, AGE_WEIGHT_MAPPING, WEIGHT_AGE_MAPPING, MAX_WEIGHT_AGE_VALUE, WEEK, MONT, YEAR, COLOR_AGE_MAPPING, GEST_AGE_22_28, GEST_AGE_29_36 } from "../config/sharedConf";

export class ResuscitationStore {
  weight = '';
  age = '';
  color = '';

  weightEstimated = false;
  ageEstimated = false;
  colorEstimated = false;

  weightUnit = KG;
  ageUnit = WEEKS;

  estimationMode = DEFAULT_EDITING_MODE;

  constructor() {
    makeAutoObservable(this);
  }

  public setWeight(value?: string) {
    if(value !== undefined && value !== null) {
      this.weight = value;
      this.weightEstimated = false;
      if(this.age === '') {
        const res = this.calculateAgeFromWeight();
        this.age = res.age;
        this.ageUnit = res.unit;
        this.ageEstimated = true;
      }
      if(this.color === '') {
        this.color = this.calculateColorFromWeight();
        this.colorEstimated = true;
      }
    }
  }

  public setAge(value?: string) {
    if(value) {
      this.age = value
      this.ageEstimated = false;
      this.convertAge();
      if(this.weight === '') {
        this.weight = this.calculateWeightFromAge(); 
        this.weightUnit = KG;
        this.weightEstimated = true;
      }
      if(this.color === '') {
        this.color = this.calculateColorFromWeight();
        this.colorEstimated = true;
      }
    }
  }

  public setAgeUnit(value?: string) {
    if(value) {
      this.ageUnit = value
    }
  }

  public setColor(value?: string) {
    if(value) {
      this.color = value
      this.colorEstimated = false;
      if(this.weight === '') {
        this.weight = this.calculateWeightFromColor(); 
        this.weightEstimated = true;
      }
      if(this.age === '') {
        const res = this.calculateAgeFromColor()
        this.age = res.age;
        this.ageUnit = res.unit;
        this.ageEstimated = true;
      }
    }
  }

  public getAgeDisplay() {
    if(this.ageEstimated && parseFloat(this.weight) >= MAX_WEIGHT_AGE_VALUE) {
      return "> 16 years"
    }
    if(this.age === '1') {
      if(this.ageUnit === WEEKS) {
        return this.age + ' ' + WEEK
      }
      if(this.ageUnit === MONTH) {
        return this.age + ' ' + MONT
      }
      if(this.ageUnit === YEARS) {
        return this.age + ' ' + YEAR
      }
    }
    return this.age + ' ' + this.ageUnit
  }

  public setWeightUnit(unit: string) {
    this.weightUnit = unit;
  }

  public setEstimationMode = (mode: string) => {
    this.estimationMode = mode;
  }

  get nextEnabled() {
    return this.weight && this.age
  }

  public clearNBI() {
    this.weight = '';
    this.age = '';
    this.color = '';
    this.colorEstimated = false;
    this.weightEstimated = false;
    this.ageEstimated = false;
    this.weightUnit = KG;
    this.ageUnit = WEEKS;
    this.estimationMode = NBI_EDITING_MODE;
  }

  public clear() {
    this.weight = '';
    this.age = '';
    this.color = '';
    this.colorEstimated = false;
    this.weightEstimated = false;
    this.ageEstimated = false;
    this.weightUnit = KG;
    this.ageUnit = WEEKS;
    this.estimationMode = DEFAULT_EDITING_MODE;
  }

  public convertAge = () => {
    if(this.estimationMode === NBI_EDITING_MODE) {
      return this.age;
    }
    let result = 0;
    if(this.ageUnit === WEEKS && parseInt(this.age) > 7) {
      result = Math.round(parseInt(this.age) / 4)
      this.ageUnit = MONTH;
    } 

    if(this.ageUnit === MONTH && parseInt(this.age) >= 24) {
      result = Math.round(parseInt(this.age) / 12);
      this.ageUnit = YEARS;
    }
    if(result !== 0) {
      this.age = result.toString();
    }
  }

  public recalculateWeightForPrematureInfant = (gestAge: string) => {
    if(gestAge === GEST_AGE_22_28) {
      if(getAgeInWeeks(this.age, this.ageUnit) <= 4) {
        this.weight = '2'
      } else {
        this.weight = '2.5'
      }
    }
    if(gestAge === GEST_AGE_29_36) {
      if(getAgeInWeeks(this.age, this.ageUnit) <= 4) {
        this.weight = '3'
      } else {
        this.weight = '3.5'
      }
    }
  }

  private calculateWeightFromAge() {
    if(this.estimationMode === NBI_EDITING_MODE) {
      const index = NBI_AGE_WEIGHT_MAPPING.findIndex(item => item.ageValues.includes(this.age));
      if(index >= 0) {
        return NBI_AGE_WEIGHT_MAPPING[index].value
      }
      return '0'
    } else {
      const index = AGE_WEIGHT_MAPPING.findIndex(item => item.ageUnit === this.ageUnit && item.ageValues.includes(this.age));
      if(index >= 0) {
        return AGE_WEIGHT_MAPPING[index].weightValue
      }
      return '0'    
    }
  }

  private calculateAgeFromWeight() {
    if(this.estimationMode === NBI_EDITING_MODE) {
      const index = NBI_AGE_WEIGHT_MAPPING.findIndex(item => item.value === this.weight);
      if(index >= 0) {
        return {age: NBI_AGE_WEIGHT_MAPPING[index].ageValues[0], unit: WEEKS }
      }
      return {age: '0', unit: WEEKS}
    } else {
      const weightKg = getWeightInKg(this.weight, this.weightUnit);
      const index = WEIGHT_AGE_MAPPING.findIndex(item => parseFloat(item.lowWeight) <= weightKg && parseFloat(item.highWeight) >= weightKg)
      if(index >= 0) {
        return {age: WEIGHT_AGE_MAPPING[index].ageValue, unit: WEIGHT_AGE_MAPPING[index].ageUnit} 
      }
    }
    return {age: '0', unit: WEEKS}
  }

  private calculateColorFromWeight() {
    const weightInKg = getWeightInKg(this.weight, this.weightUnit);
    const index = WEIGHT_COLOR_MAPPING.findIndex(item => item.lowWeight <= weightInKg && item.highWeight > weightInKg);
    if(index >= 0) {
      return WEIGHT_COLOR_MAPPING[index].color;
    }
    return '--'
  }

  private calculateWeightFromColor = () => {
    const index = WEIGHT_COLOR_MAPPING.findIndex(item => item.color === this.color);
    if(index >= 0) {
      return WEIGHT_COLOR_MAPPING[index].weightValue.toString();
    }
    return '--'
  }

  private calculateAgeFromColor = () => {
    const index = COLOR_AGE_MAPPING.findIndex(item => item.color === this.color);
    if(index >= 0) {
      return {age: COLOR_AGE_MAPPING[index].age.toString(), unit: COLOR_AGE_MAPPING[index].ageUnit};
    }
    return {age: '0', unit: WEEKS}
  }
}