export const FURTHER_INSTRUCTIONS = [
  {
    text: 'Pause insulin infusion until BG > 100 mg/dL',
  },
  {
    text: 'Maximize D10 to 100% of fluid infusion rate',
  },
  {
    text: 'Recheck BG in 15 minutes.  If still < 80 mg/dL',
    subitems: [
      {
        text: 'Give 15 grams of fast acting carbs PO (i.e. 4 ounces of juice). Recheck in 15 minutes.  Repeat PRN',
      },
      {
        text: 'Give 1mL/kg D25W IV.  Recheck in 15 minutes.  Repeat PRN',
      }
    ],
  },
  {
    text: 'When BG > 100 mg/dL, restart insulin infusion at 0.05 units/kg/hr',
  },
]