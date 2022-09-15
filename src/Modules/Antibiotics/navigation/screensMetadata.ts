import AntibioticsNavigation from '.';

export const antibioticsScreenNumber = (screenName: string) => {
  const index = antibioticsPathwayScreens().findIndex(item => item === screenName);
  if(index > 0) {
    return index + 2;
  }
  return 0;
}

export const antibioticsPathwayScreens = () => {
  return AntibioticsNavigation.map(item => item.props['name'] as string)
}