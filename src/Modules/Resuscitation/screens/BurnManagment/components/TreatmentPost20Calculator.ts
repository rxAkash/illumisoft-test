import { calculateNineToTwentyFourHourlyRate, calculateRemainingHourlyRate, getEquationReference, mathCeil, separateNum } from '../conf';


export const getFluidVolume = (electricalBurn: boolean, weight: number, results: number): number => {
    if (electricalBurn) {
      return 4 * weight * results;
    } else {
        if (weight < 60) {
            return 3 * weight * results;
        } else {
            return 2 * weight * results;
        };
    };
};

export const getOneEightHoursRate = (electricalBurn: boolean, weight: number, results: number, fluidVolume: string, hours: string): string => {
    const res = calculateRemainingHourlyRate(8, getFluidVolume(electricalBurn, weight, results), parseFloat(fluidVolume), parseFloat(hours));
    if (res > 0 && res != Infinity) {
        return `${res} mL/hr`;
    } else {
        return 'n/a';
    };
};

export const getD5LRValue = (weight: number): number => {
    let lblD5LRValue = 0;
    if (weight < 10) {
        lblD5LRValue = weight * 100;
    } else if (weight >= 10 && weight <= 20) {
        lblD5LRValue = 1000 + (weight - 10) * 50;
    } else {
        lblD5LRValue = 1500 + (weight - 20) * 20;
    };
    return lblD5LRValue;
};

export const getD5Value = (weight: number): number => {
    return Math.round(getD5LRValue(weight) / 24)
};

export const getNineTwentyFourHoursRate = (electricalBurn: boolean, weight: number, results: number, fluidVolume: string, hours: string) => {
    const res = calculateNineToTwentyFourHourlyRate(getFluidVolume(electricalBurn, weight, results), parseFloat(fluidVolume), parseFloat(hours));
    if(res > 0) {
        return `${Math.ceil(res)} mL/hr`;
    } else {
        return 'n/a';
    };
};

export const get24HoursLR = (electricalBurn: boolean, weight: number, results: number) => {
    if(electricalBurn) {
      return separateNum(mathCeil(4 * weight * results));
    } else {
        return separateNum(mathCeil(getFluidVolume(false, weight, results)));
    };
};  