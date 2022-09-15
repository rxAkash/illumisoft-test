export enum DrugDosingAdministrationKeys {
  IV = 'IV',
  IVP = 'IVP',
  IO = 'IO',
  INTRA_MUSCULAR = 'IntraMuscular',
  SUBQ = 'SubQ',
  PO_ORAL = 'PO-Oral',
  ET = 'ET',
  NASAL = 'Nasal',
  PR_RECTAL = 'PR-Rectal',
  NEBULIZATION = 'Nebulization',
}

export const DrugDosingRouteColors = {
  [DrugDosingAdministrationKeys.IV]: { color: '#3F51B5', selectedConcentration: '#EBEDF7' },
  [DrugDosingAdministrationKeys.IVP]: { color: '#3F51B5', selectedConcentration: '#EBEDF7' },
  [DrugDosingAdministrationKeys.IO]: { color: '#3F51B5', selectedConcentration: '#EBEDF7' },
  [DrugDosingAdministrationKeys.INTRA_MUSCULAR]: { color: '#880E4F', selectedConcentration: '#F3E6ED' },
  [DrugDosingAdministrationKeys.SUBQ]: { color: '#880E4F', selectedConcentration: '#F3E6ED' },
  [DrugDosingAdministrationKeys.PO_ORAL]: { color: '#BF360C', selectedConcentration: '#F8EAE6' },
  [DrugDosingAdministrationKeys.ET]: { color: '#9C27B0', selectedConcentration: '#F5E9F7' },
  [DrugDosingAdministrationKeys.NASAL]: { color: '#827717', selectedConcentration: '#F2F1E7' },
  [DrugDosingAdministrationKeys.PR_RECTAL]: { color: '#795548', selectedConcentration: '#F1EEEC' },
  [DrugDosingAdministrationKeys.NEBULIZATION]: { color: '#006064', selectedConcentration: '#E5EFEF' },
};

export enum DOSAGE_TYPE {
  SINGLE_DOSE = 1,
  LOW_MOD_HIGH = 2
}