import { NONE_VALUE } from "./config/noneValue";

export const handleAnswerWithNone = (values: string[], answers: string[]) => {
  if(!answers.includes(NONE_VALUE) && values.includes(NONE_VALUE)) {
    return [NONE_VALUE]
  } else if(answers.includes(NONE_VALUE) && values.includes(NONE_VALUE) && values.length > 1) {
    const valuesWithoutNone = [...values]
    valuesWithoutNone.splice(values.indexOf(NONE_VALUE), 1);
    return valuesWithoutNone;
  } else {
    return values;
  }
}