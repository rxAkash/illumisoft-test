import { ANTIBIOTCN_PATHWAY_TITLE } from "Modules/Antibiotics/navigation/routes";
import { antibioticsPathwayScreens, antibioticsScreenNumber } from "Modules/Antibiotics/navigation/screensMetadata";
import { HOME_SCREEN, rootPathwayScreens, ROOT_MODULE_NAME } from "./routes";

export const getScreenNumber = (screenName: string) => {
  if(screenName === HOME_SCREEN) return 0;
  if(antibioticsScreenNumber(screenName)) {
    return antibioticsScreenNumber(screenName);
  }
  return 0;
}

export const getScreenModuleName = (screenName: string) => {
  const antibioticScreens = antibioticsPathwayScreens();
  const rootScreens = rootPathwayScreens();
  if(antibioticScreens.includes(screenName)) {
    return ANTIBIOTCN_PATHWAY_TITLE;
  }
  if(rootScreens.includes(screenName)) {
    return ROOT_MODULE_NAME;
  }
}