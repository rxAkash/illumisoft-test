import { AIRWAY_DEVICES, EXTENDED_AIRWAY_DEVICES } from "./conf"

export const calculateResult = (weight: number) => {
  return AIRWAY_DEVICES.find(item => item.weightKg.exact === weight);
}

export const calculateExtendedResult = (weight: number) => {
  return EXTENDED_AIRWAY_DEVICES.find(item => item.weightKg.min <= weight && item.weightKg.max > weight);
}