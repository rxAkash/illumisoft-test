import { NavigationProp } from '@react-navigation/core';
import { ED_ESI_CALCULATOR, ED_ESI_SELECT, INPATIENT_CALCULATOR } from 'Modules/Asthma/navigation/routes';
import React from 'react';
import { ScrollView, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import CardsSelect from 'UIToolkit/Inputs/CardsSelect';
import { defaultContainer } from 'UIToolkit/theme/styles';
import { FIRST_HOUR_VALUE } from '../EmergencyDeptartment/conf';
import { ED_AGE_STEP } from './conf';

interface Props {
  route: {
    params: {
      hourSelected?: SelectOption;
      treatment?: string;
      isInpatientPathway?: boolean;
    }
  },
  navigation: NavigationProp<any>;
}

const EDAgeSelect = React.memo(({route, navigation}: Props) => {

  const onOptionSelected = (item: SelectOption) => {
    const {hourSelected, treatment, isInpatientPathway} = route.params;
    if(hourSelected && hourSelected.value === FIRST_HOUR_VALUE) {
      navigation.navigate(ED_ESI_SELECT, {age: item, hourSelected})
    } else if(isInpatientPathway) {
      navigation.navigate(INPATIENT_CALCULATOR, {age: item, hourSelected, treatment, isInpatientPathway})
    } else {
      navigation.navigate(ED_ESI_CALCULATOR, {age: item, hourSelected, treatment})
    }
  }

  return (
    <ScrollView>
      <GoBackHeader border />
      <View style={defaultContainer}>
        <CardsSelect
          title={ED_AGE_STEP.title}
          options={ED_AGE_STEP.options}
          onOptionSelected={onOptionSelected}
        />
      </View>
    </ScrollView>
  )
})

export default EDAgeSelect;
