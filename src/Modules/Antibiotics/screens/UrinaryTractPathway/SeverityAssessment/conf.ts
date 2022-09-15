import { NONE_VALUE } from "Modules/Antibiotics/config/noneValue";

export const ILL_APPEARING_VALUE = 'ill';

export const SEVRITY_QUESTIONS = [
  {
    title: 'Patient is ill appearing',
    value: ILL_APPEARING_VALUE,
  },
  {
    title: 'Concern for pyelonephritis',
    value: 'pyelonephritis',
  },
  {
    title: '2 to 24 months with a febrile UTI',
    value: 'febrile',
  },
  {
    title: 'None',
    value: NONE_VALUE,
  },
];