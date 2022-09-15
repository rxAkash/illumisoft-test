import { DEXTROSE_GLUCOSE, DEXTROSE_GLUCOSE_PEDIATRIC, GLUCOSE_DEXTROSE } from "Modules/Resuscitation/config/drugConfig"

export const handleRuleExceptions = (drugInfo: any, drugName: string) => {
  if(drugName === DEXTROSE_GLUCOSE || drugName === DEXTROSE_GLUCOSE_PEDIATRIC || drugName === GLUCOSE_DEXTROSE) {
    if(drugInfo.Concentration === 0.1) {
      return `D10 (${drugInfo.Concentration}${drugInfo.Concentration_Units})`
    } else if(drugInfo.Concentration === 0.125) {
      return `D12.5 (${drugInfo.Concentration}${drugInfo.Concentration_Units})`
    } else if(drugInfo.Concentration === 0.25) {
      return `D25 (${drugInfo.Concentration}${drugInfo.Concentration_Units})`
    } else if(drugInfo.Concentration === 0.5) {
      return `D50 (${drugInfo.Concentration}${drugInfo.Concentration_Units})`
    }
    return drugInfo.Concentration + drugInfo.Concentration_Units
  }
  return drugInfo.Concentration + drugInfo.Concentration_Units
}