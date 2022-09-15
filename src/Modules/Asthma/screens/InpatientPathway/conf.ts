export const TREATMENT_OPTION_P1 = "A_IN_TS_20mgPerHr";
export const TREATMENT_OPTION_P2 = "A_IN_TS_8q2";
export const TREATMENT_OPTION_P3 = "A_IN_TS_8q4";
export const TREATMENT_OPTION_P4 = "A_IN_TS_4q4";

export const considerations = {
  text: "General considerations",
  hint: "Confirm Patient already received...",
  subitems: [
    {
      text: "Consider the context of patient presentation:",
      subitems: [
        {
          text: "Triggering events"
        },
        {
          text: "Medications prior to arrival"
        }
      ]
    },
    {
      text: "Oxygen requirement must be assessed during acute asthma care."
    },
    {
      text: "Confirm patient already received appropriately-dosed systemic steroid. Examples:",
      subitems: [
        {
          text: "Dexamethasone 0.6mg/kg x1 (16mg max)"
        },
        {
          text: "Prednisone/prednisolone 2mg/kg x1 (60mg max)"
        }
      ]
    },
    {
      text: "Consider giving ipratropium bromide neb 1.5mg if not already given"
    },
    {
      text: "Consider magnesium sulfate IV 50mg/kg (max 2grams) for patients with RS 9-12 if not already given"
    }
  ]
}

export const treatmentOptions = [
  {
    text: "Albuterol continuous neb",
    value: "A_IN_TS_20mgPerHr",
    EC: "User Decision",
    EA: "A_IN_TS_20mgPerHr",
    Description: "User selects an treatment (required) to navigate to the next screen"
  },
  {
    text: "Albuterol 8 puffs q2 hours",
    value: "A_IN_TS_8q2",
    EC: "User Decision",
    EA: "A_IN_TS_8q2",
    Description: "User selects an treatment (required) to navigate to the next screen"
  },
  {
    text: "Albuterol 8 puffs q4 hours",
    value: "A_IN_TS_8q4",
    EC: "User Decision",
    EA: "A_IN_TS_8q4",
    Description: "User selects an treatment (required) to navigate to the next screen"
  },
  {
    text: "Albuterol 4 puffs q4 hours",
    value: "A_IN_TS_4q4",
    EC: "User Decision",
    EA: "A_IN_TS_4q4",
    Description: "User selects an treatment (required) to navigate to the next screen"
  }
]