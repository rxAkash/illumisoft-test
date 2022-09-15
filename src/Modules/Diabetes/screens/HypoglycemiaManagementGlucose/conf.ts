export const HYPOGLYCEMIA_ITEMS = [
  {
    text: 'If able to eat/drink safely',
    subitems: [
      {
        text: '15 grams of fast-acting carbohydrate (4 ounces juice) by mouth',
      },
      {
        text: 'Cake gel inside cheek',
      },
    ],
  },
  {
    text: 'If not able to eat/drink safely (e.g., seizures or loss of consciousness), pick ONE of the treatments below',
    subitems: [
      {
        text: 'D10W 4 mL/kg IV x1',
      },
      {
        text: 'Glucagon IV/IM/SQ (see product specific directions)',
        subitems: [
          { 
            text: 'For children less than 5 years: 0.5 mg' 
          },
          { 
            text: 'For children 5 years and older: 1 mg' 
          },
        ],
      },
      {
        text: 'Glucagon Intranasal (see product specific directions)',
        subitems: [
          {
            text: 'For children 4 years and older: 3 mg' 
          },
        ],
      },
    ],
  },
  {
    text: 'Once BG is > 70 mg/dL give a complex carbohydrate snack (e.g., cheese & crackers, protein bar) to prevent reoccurring hypoglycemia.',
  },
]