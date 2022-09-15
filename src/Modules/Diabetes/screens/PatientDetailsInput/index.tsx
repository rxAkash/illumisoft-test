import React, { useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import AgePicker from 'Modules/Diabetes/components/AgePicker';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import WeightInput from 'Modules/Diabetes/components/WeightInput';
import { AGE_OPTIONS } from 'Modules/Diabetes/config/dkaTreament';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import { Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import styles from '../../styles';
import { CEREBRAL_EDEMA, ROUTINE_RAPID_INSULIN_DOING } from 'Modules/Diabetes/navigation/routes';
import HollowButton from 'UIToolkit/Buttons/HollowButton';

interface Props {
  navigation: NavigationProp<any>;
  diabetesStore: DiabetesStore;
  route: {
    params?: {
      nextScreen?: string;
      showWarning?: boolean;
    }
  }
}

const PatientDetilsInput = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation,
  route
}: Props) => {

  useEffect(() => {
    diabetesStore.clear()
  }, [])

  const onNav = () => {
    if(route?.params?.nextScreen) {
      diabetesStore.preferAgeWeight();
      navigation.navigate(route?.params?.nextScreen);
    }
  }

  const ageOrWeightTooLow = () => {
    if(diabetesStore.age === AGE_OPTIONS[0].value) {
      return true
    }
    if(diabetesStore.weight && parseFloat(diabetesStore.weight) <= 10) {
      return true
    }
    return false;
  }
  
  return (
    <DiabetesLayout title={route?.params?.showWarning
      ? diabetesText.dkaTreatment.dkaTitle
      : diabetesText.dkaTreatment.title}
    >
      <View style={styles.body}>
        <Card style={styles.card}>
          <>
            {ageOrWeightTooLow() && (
              <View style={styles.warningCard}>
                <Text style={styles.warningText}>{diabetesText.dkaTreatment.ageWarning}</Text>
              </View>
            )}
            {route?.params?.showWarning ? (
              <View style={styles.warningCard}>
                <Text style={styles.warningText}>{diabetesText.dkaTreatment.warningTitle}</Text>
                <Text>{diabetesText.dkaTreatment.warningInfo}</Text>
              </View>
            ) : (
              <Text style={[styles.sectionTitle, {marginBottom: 16}]}>
                {diabetesText.dkaTreatment.ageAndWeight}
              </Text>
            )}
            <AgePicker
              options={AGE_OPTIONS}
              selectedOption={diabetesStore.age}
              onSelect={(age) => diabetesStore.setAge(age) }
            />
            <WeightInput
              value={diabetesStore.weight}
              setWeight={(weight) => diabetesStore.setWeight(weight)}
            />
            <FullWidthButton
              style={styles.cardButton}
              text={diabetesText.dkaTreatment.proceed}
              onPress={onNav}
              disabled={!diabetesStore.age || !diabetesStore.weight || ageOrWeightTooLow()}
            />
            {route?.params?.nextScreen === ROUTINE_RAPID_INSULIN_DOING && (
              <HollowButton
                text={diabetesText.dkaTreatment.iDontKnow}
                onPress={onNav}
                style={styles.cardButton}
              />
            )}
          </>
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default PatientDetilsInput;
