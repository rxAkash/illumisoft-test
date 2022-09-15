import React from 'react';
import { View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import Card from 'UIToolkit/Card';
import DrugCard from 'Modules/Diabetes/components/DrugCard';
import styles from '../../styles';
import { getInsulinDripConf } from './config';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { INSULIN_DRIP_AND_TITRATION } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const InsulinDrip = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {

  const onNav = () => {
    navigation.navigate(INSULIN_DRIP_AND_TITRATION)
  }

  return (
    <DiabetesLayout
      title={diabetesText.insulinDrip.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <DrugCard config={getInsulinDripConf(diabetesStore.weight)}/>
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.insulinDrip.next}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
}));

export default InsulinDrip;
