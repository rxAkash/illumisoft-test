import React from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DrugCard from 'Modules/Diabetes/components/DrugCard';
import { getBasalInsulinConfig } from './config';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { ONDANSETRON } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const BasalInsulin = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {

  const onNav = () => {
    navigation.navigate(ONDANSETRON)
  }

  return (
    <DiabetesLayout
      title={diabetesText.basalInsulin.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <DrugCard
              config={getBasalInsulinConfig(diabetesStore.weight, diabetesStore.age)}
            />
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.basalInsulin.next}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default BasalInsulin;
