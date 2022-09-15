import React, { useState } from 'react';
import { View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import { DrugDosingAdministrationKeys } from 'Modules/Diabetes/components/DrugCard/config';
import AnswerButton from 'UIToolkit/Inputs/AnswerButton';
import { inject, observer } from 'mobx-react';
import { NavigationProp } from '@react-navigation/native';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DrugCard from 'Modules/Diabetes/components/DrugCard';
import { getOndansetronIVConf, getOndansetronPoOralConf } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { INSULIN_DRIP } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const Ondansetron = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {
  const [selectedOption, setSelectedOption] = useState(DrugDosingAdministrationKeys.IV)

  const onNav = () => {
    navigation.navigate(INSULIN_DRIP);
  }

  return (
    <DiabetesLayout
      title={diabetesText.ondansetron.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <View style={styles.row}>
              <AnswerButton
                selected={selectedOption === DrugDosingAdministrationKeys.IV}
                onAnswer={() => setSelectedOption(DrugDosingAdministrationKeys.IV)}
                text={DrugDosingAdministrationKeys.IV}
              />
              <AnswerButton
                selected={selectedOption === DrugDosingAdministrationKeys.PO_ORAL}
                onAnswer={() => setSelectedOption(DrugDosingAdministrationKeys.PO_ORAL)}
                text={DrugDosingAdministrationKeys.PO_ORAL}
              />
            </View>
            {selectedOption === DrugDosingAdministrationKeys.IV ? (
              <DrugCard
                config={getOndansetronIVConf(diabetesStore.weight)}
              />
            ) : (
              <DrugCard
                config={getOndansetronPoOralConf(diabetesStore.weight)}
              />
            )}
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.ondansetron.next}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default Ondansetron;
