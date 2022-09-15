import Analytics from 'appcenter-analytics';
import { getDataFromLS } from 'data/localStorage';
import { STUDY_ID } from 'data/localStorage/keys';
import { getScreenModuleName, getScreenNumber } from 'Navigation/screenMetadata';
import { SelectOption } from "UIToolkit/Inputs/@types";
import { DrawerData } from "./types";

const reportOptionsSelected = async (screenName: string, selectedOptions: string[], allOptions: SelectOption[]) => {
  const optionsMapped = allOptions.map(item => ({
    [item.title]: selectedOptions.includes(item.value) ? 'True' : 'Fasle'
  }))

  const pathway = getScreenModuleName(screenName);
  const screenData = await getScreenData(screenName);
  await Analytics.trackEvent(`${pathway} - OptionsSelected`, {
    ...screenData,
    ...optionsMapped
  })
}

const reportDrawerToggled = async (screenName: string, drawerData: DrawerData) => {
  const pathway = getScreenModuleName(screenName);
  const screenData = await getScreenData(screenName);
  await Analytics.trackEvent(`${pathway} - DrawerToggled`, {
    ...screenData,
    ...drawerData
  })
}

const reportScreenAccess = async (screenName: string) => {
  const data = await getScreenData(screenName);
  const pathway = getScreenModuleName(screenName);
  await Analytics.trackEvent(`${pathway} - Screen Access`, data);
}

const getScreenData = async (screenName: string) => {
  const options: any = {
    'Screen Name': screenName,
    'Screen Number': getScreenNumber(screenName).toString()
  }
  const studyId = await getDataFromLS(STUDY_ID)
  if(studyId && studyId.value) {
    options['Study Id'] = studyId.value;
  }
  return options;
}

export {
  reportOptionsSelected,
  reportDrawerToggled,
  reportScreenAccess
}