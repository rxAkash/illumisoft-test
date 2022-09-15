export const A_AGE_23 = "A_AGE_23";
export const A_AGE_4 = "A_AGE_4";
export const A_AGE_5 = "A_AGE_5";
export const A_AGE_612 = "A_AGE_612";
export const A_AGE_12U = "A_AGE_12U";

export const ED_AGE_STEP = 
  {
    title: "How old is the patient?",
    EC: "Screen Access",
    EA: "A_AGE_SELECTION",
    options: [
      {
        title: "2-3 Years",
        value: A_AGE_23,
        EC: "User Decision",
        EA: "A_AGE_23"
      },
      {
        title: "4 Years",
        value: A_AGE_4,
        EC: "User Decision",
        EA: "A_AGE_4"
      },
      {
        title: "5 Years",
        value: A_AGE_5,
        EC: "User Decision",
        EA: "A_AGE_5",
      },
      {
        title: "6-12 Years",
        value: A_AGE_612,
        EC: "User Decision",
        EA: "A_AGE_612",
      },
      {
        title: ">12 Years",
        value: A_AGE_12U,
        EC: "User Decision",
        EA: "A_AGE_12U"
      }
    ]
  }