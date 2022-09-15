export const compareArrays = (first: any[], second: any[]) => {
  if(first.length !== second.length) {
    return false;
  }
  let result = true;
  for(let i = 0; i < first.length; i++) {
    if(first[i] !== second[i]) {
      result = false;
    }
  }
  return result;
}