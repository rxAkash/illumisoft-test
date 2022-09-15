import React, { ReactElement } from 'react';
import {ImageSourcePropType} from 'react-native';
import {
  antibioticsDisabledIc,
  antibioticsIc,
  asthmaIc,
  brueDisabledIc,
  brueIc,
  dkaDisabledIc,
  dkaIc,
  febrileIc,
  resusIc,
  trachActiveIc,
  trachIC,
} from 'assets/img';
import ResuscitationDisclaimer from './disclaimers/resuscitation';
import AshtmaDisclaimer from './disclaimers/ashtma';
import { ASTHMA_HOME } from 'Modules/Asthma/navigation/routes';
import { RESUS_HOME } from 'Modules/Resuscitation/navigation/routes';
import { FEBRILE_INFANT_HOME } from 'Modules/FebrileInfant/navigation/routes';
import BrueDisclaimer from './disclaimers/brue';
import { BRUE_HOME } from 'Modules/Brue/navigation/routes';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';
import DiabetesDisclaimer from './disclaimers/diabetes';
import { ANTIBIOTICS_HOME } from 'Modules/Antibiotics/navigation/routes';
import AntibioticsDisclaimer from './disclaimers/antibiotics';
import { TRACHESTOMY_HOME, TRACHESTOMY_HOME_TITLE } from 'Modules/Trachestomy/navigation/routes';
import TrachDisclaimer from './disclaimers/trachestomy';
import { HEAD_INJURY_HOME, HEAD_INJURY_TITLE } from 'Modules/HeadInjury/navigation/routes';
import HeadInjuryDisclaimer from './disclaimers/headInjury';

export interface HomeConfigItem {
  route: string;
  title: string;
  subtext: string;
  image: ImageSourcePropType;
  color: string;
  available: boolean;
  disabledIcon?: ImageSourcePropType,
  disclaimer?: (props: any) => ReactElement;
}

export const homeConfig: HomeConfigItem[] = [
  {
    route: RESUS_HOME,
    title: 'Resuscitation',
    subtext: 'Emergency Life Support and Burn Fluid Management',
    image: resusIc,
    color: '#FE2851',
    available: true,
    disclaimer: (props: any) => <ResuscitationDisclaimer {...props} />
  },
  {
    route: ASTHMA_HOME,
    title: 'Asthma',
    subtext: 'Acute Asthma Exacerbation Management',
    image: asthmaIc,
    color: '#005CB9',
    available: true,
    disclaimer: () => <AshtmaDisclaimer />
  },
  {
    route: FEBRILE_INFANT_HOME,
    title: 'Febrile Infant',
    subtext: 'Infant Sepsis Evaluation and Risk Stratification',
    image: febrileIc,
    color: '#005CB9',
    available: true,
  },
  {
    route: ANTIBIOTICS_HOME,
    title: 'Antibiotics',
    subtext: 'Condition Based Antibiotic Guidance',
    image: antibioticsIc,
    color: '#005CB9',
    available: true,
    disabledIcon: antibioticsDisabledIc,
    disclaimer: (props: any) => <AntibioticsDisclaimer {...props} />
  },
  {
    route: BRUE_HOME,
    title: 'BRUE',
    subtext: 'Brief Resolved Unexplained Event Evaluation and Management',
    image: brueIc,
    color: '#005CB9',
    available: true,
    disabledIcon: brueDisabledIc,
    disclaimer: (props: any) => <BrueDisclaimer {...props}/>
  },
  {
    route: DIABETES_HOME,
    title: 'Diabetes & DKA',
    subtext: 'Diabetes: DKA & routine insulin dosing',
    image: dkaIc,
    color: '#005CB9',
    available: true,
    disabledIcon: dkaDisabledIc,
    disclaimer: (props: any) => <DiabetesDisclaimer {...props} />
  },{
    route: TRACHESTOMY_HOME,
    title: TRACHESTOMY_HOME_TITLE,
    subtext: 'Tracheostomy Emergency',
    image: trachActiveIc,
    color: '#005CB9',
    available: true,
    disabledIcon: trachIC,
    disclaimer: (props: any) => <TrachDisclaimer {...props} />
  },
  {
    route: HEAD_INJURY_HOME,
    title: HEAD_INJURY_TITLE,
    subtext: 'Head Injury Determination',
    image: trachActiveIc,
    color: '#005CB9',
    available: true,
    disabledIcon: trachIC,
    disclaimer: (props: any) => <HeadInjuryDisclaimer {...props} />
  }
];
