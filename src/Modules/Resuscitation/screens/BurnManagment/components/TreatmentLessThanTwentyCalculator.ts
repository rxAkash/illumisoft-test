import { BURN_WEIGHT_MAP, mathCeil } from '../conf';

export const getLRRate = (weight: number) => {
    if (weight >= 70) {
        return 150;
    } else {
        for(let i=0; i<BURN_WEIGHT_MAP.length; i++) {
            if(((weight==1.5 || weight  == 2.5) || (weight == 3.5 || weight == 4.5)) || weight == 5.5){
                if (parseFloat(BURN_WEIGHT_MAP[i].Weight) === weight) {
                    return BURN_WEIGHT_MAP[i].value;
                }
            }
            else{
                if (parseFloat(BURN_WEIGHT_MAP[i].Weight) === mathCeil(weight)) {
                    return BURN_WEIGHT_MAP[i].value;
                }
            }
        };
    };
};