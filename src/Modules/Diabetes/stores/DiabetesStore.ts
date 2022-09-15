import { makeAutoObservable } from "mobx";

export class DiabetesStore {
  weight = ''
  age = ''
  glucose = ''
  insulin = ''
  basalInsulin = ''

  constructor() {
    makeAutoObservable(this);
  }

  public setWeight = (weight: string) => {
    if(parseInt(weight, 10) > 250) {
      weight = '250'
    }
    this.weight = weight
  }

  public setAge = (age?: string) => {
    if(age) {
      this.age = age
    }
  }

  public setGlucose = (glucose?: string) => {
    if(glucose !== undefined) {
      this.glucose = glucose
    }
  }

  public setInsulin = (insulin?: string) => {
    if(insulin !== undefined) {
      this.insulin = insulin
    }
  }

  public setBasalInsulin = (insulin?: string) => {
    if(insulin !== undefined) {
      this.basalInsulin = insulin
    }
  }

  public preferInsulin = () => {
    this.age = '';
    this.weight = '';
    this.basalInsulin = '';
  }

  public preferBasalInsulin = () => {
    this.age = '';
    this.weight = '';
    this.insulin = '';
  }

  public preferAgeWeight = () => {
    this.basalInsulin = '';
    this.insulin = '';
  }

  public clear() {
    this.age = ''
    this.weight = ''
    this.glucose = ''
    this.insulin = ''
    this.basalInsulin = ''
  }
}