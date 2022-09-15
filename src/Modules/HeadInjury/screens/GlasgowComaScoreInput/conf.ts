export const getFinalScoreForGCS = (gcs: string) => {
  const numberGcs = parseInt(gcs);
  if(numberGcs <= 8) {
    return `<8 Critical`
  }
  if(numberGcs >= 9 && numberGcs < 14) {
    return `${numberGcs} Moderate`
  }
  if(numberGcs >= 14) {
    return `${numberGcs} Mild`
  }
}