import React from 'react';
import { DEXTROSE_GLUCOSE, DEXTROSE_GLUCOSE_PEDIATRIC, EPINEPHRINE, GLUCOSE_DEXTROSE, LIDOCAINE } from "Modules/Resuscitation/config/drugConfig"
import { getAgeInWeeks } from "utils/ageConverter"
import CardiovascularDrips from "../CardiovascularDrips"
import DrugIndicationItem from '../DrugIndicationItem';

//Some drug dosings should bot be displayed if infant is younger then certian age
//in this case we collapse all drug indications into one card and display age warning there
export const shouldCollapseRoutes = (drug: any, patientAge: string, ageUnit: string) => {
  if(drug.Drug === DEXTROSE_GLUCOSE || drug.Drug === DEXTROSE_GLUCOSE_PEDIATRIC && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return true
  } 
  if(drug.Drug === GLUCOSE_DEXTROSE && getAgeInWeeks(patientAge, ageUnit) <= 4) {
    return true
  }
  return false
}

//For Epinephrine and Lidocaine we should render Cardiovascular Drips as one of the drug routes
export const renderCardivascularDrips = (drugName: string, weightInKg: number) => {
  if(drugName === EPINEPHRINE || drugName === LIDOCAINE) {
    return (
      <DrugIndicationItem indication="Cardiovascular Drips">
        <CardiovascularDrips patientWeightKg={weightInKg} preselectedDrug={drugName} />
      </DrugIndicationItem>
    )
  }
  return null;
}