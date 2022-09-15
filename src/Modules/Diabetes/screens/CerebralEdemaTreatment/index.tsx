import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import BulletList from 'UIToolkit/BulletList';
import { BEDSIDE_MEASURES, getHypertonicSalineConfig, getMannitolConfig, SELECT_OPTIONS } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { DIABETIC_KETOACIDOSIS_TREATMENT } from 'Modules/Diabetes/navigation/routes';
import DrugCard from 'Modules/Diabetes/components/DrugCard';
import RadioSelect from 'UIToolkit/Inputs/RadioSelect';
interface Props {
  navigation: NavigationProp<any>;
  diabetesStore: DiabetesStore;
}

const CerebralEdemaTreatment = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>();

  const onNav = () => {
    navigation.navigate(DIABETIC_KETOACIDOSIS_TREATMENT);
  }

  const renderDrugCard = (value: string) => {
    if(selectedValue === 'Mannitol' && value === 'Mannitol') {
      return (
        <DrugCard
          config={getMannitolConfig(diabetesStore.weight)}
        />
      )
    }
    if(selectedValue === 'Hypertonic (3%) Saline' && value === 'Hypertonic (3%) Saline') {
      return (
        <DrugCard
          config={getHypertonicSalineConfig(diabetesStore.weight)}
        />
      )
    }
    return null;
  }
  
  return (
    <DiabetesLayout
      title={diabetesText.cerebralEdema.cerebralTreatmentTitle}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={{paddingHorizontal: 12, paddingTop: 12}}>
            <View style={styles.warningCard}>
              <Text style={styles.warningText}>{diabetesText.cerebralEdema.warning}</Text>
            </View>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.cerebralEdema.bedsideMeasures}</Text>
            <BulletList
              items={BEDSIDE_MEASURES}
            />
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.cerebralEdema.pharmacologicTherapy}</Text>
            <Text style={styles.sectionSubtitle}>{diabetesText.cerebralEdema.pharmacologicSubtitle}</Text>
            <RadioSelect
              options={SELECT_OPTIONS}
              value={selectedValue}
              onChange={setSelectedValue}
              active
              renderAdditionalStep={renderDrugCard}
              noBorder
            />
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.cerebralEdema.imagingStudies}</Text>
            <Text style={styles.sectionSubtitle}>{diabetesText.cerebralEdema.imagingStudiesSubtitle}</Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.cerebralEdema.disposition}</Text>
            <Text style={styles.sectionSubtitle}>{diabetesText.cerebralEdema.dispositionSubtitle}</Text>
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.cerebralEdema.next}
              onPress={onNav}
              disabled={!selectedValue}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default CerebralEdemaTreatment;
