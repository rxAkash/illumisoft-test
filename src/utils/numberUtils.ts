export const roundToNearestHalf = (number: string) => {
  const converted = parseFloat(number);
  let decimal = (converted - parseInt(number, 10));
  decimal = Math.round(decimal * 10);
  if (decimal == 5) { return (parseInt(converted.toString(), 10)+0.5); }
  if (decimal <= 4 && decimal !== 0) {
    return Math.round(converted) + 0.5;
  } else if(decimal >= 6){
    return Math.round(converted);
  }
  return converted;
}