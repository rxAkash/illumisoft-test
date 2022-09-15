import { NavigationProp } from '@react-navigation/native';
import { restartIc } from 'assets/img';
import Analytics from 'appcenter-analytics';
import { inject, observer } from 'mobx-react';
import GoBackModal from 'Modules/Resuscitation/components/GoBackModal';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { RESUS_HOME, RESUS_PATHWAYS } from 'Modules/Resuscitation/navigation/routes';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { getAgeInWeeks } from 'utils/ageConverter';
import AgeField from './components/AgeField';
import BornPrematurePopup from './components/BornPrematurePopup';
import ColorField from './components/ColorField';
import WeightField from './components/WeightField';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const PatientDetails = inject('resuscitationStore')(observer(({
  resuscitationStore,
  navigation
}: Props) => {
  const [showBackWarning, setShowBackWarning] = useState(false);
  const [showPrematureWarning, setShowPrematureWarning] = useState(false);

  const weightField = (
    <WeightField
      value={resuscitationStore.weight}
      unit={resuscitationStore.weightUnit}
      onValueChange={(value) => resuscitationStore.setWeight(value)}
      onUnitChange={(unit) => resuscitationStore.setWeightUnit(unit)}
      key="weight"
    />
  )
  
  const ageField = (
    <AgeField
      value={resuscitationStore.age}
      unit={resuscitationStore.ageUnit}
      display={resuscitationStore.getAgeDisplay()}
      onValueChange={(value) => resuscitationStore.setAge(value)}
      onUnitChange={(unit) => resuscitationStore.setAgeUnit(unit)}
      key="age"
    />
  )

  const colorField = (
    <ColorField
      value={resuscitationStore.color}
      onValueChange={(value) => resuscitationStore.setColor(value)}
      key="color"
    />
  )

  const getEnteredField = () => {
    const fields = [];
    if(!resuscitationStore.weightEstimated) {
      fields.push(weightField);
    } 
    if(!resuscitationStore.ageEstimated) {
      fields.push(ageField)
    }
    if(!resuscitationStore.colorEstimated) {
      fields.push(colorField);
    }
    return fields;
  }

  const getCalculatedFields = () => {
    const fields = [];
    if(resuscitationStore.weightEstimated) {
      fields.push(weightField);
    }
    if(resuscitationStore.ageEstimated) {
      fields.push(ageField)
    }
    if(resuscitationStore.colorEstimated) {
      fields.push(colorField);
    }

    return fields;
  }

  const onContinue = () => {
    if((getAgeInWeeks(resuscitationStore.age, resuscitationStore.ageUnit) <= 7) && resuscitationStore.weightEstimated) {
      setShowPrematureWarning(true)  
    } else {
      navigation.navigate(RESUS_PATHWAYS);
    }
  }

  const onBornPremature = (gestAge?: string) => {
    setShowPrematureWarning(false);
    if(gestAge) {
      resuscitationStore.recalculateWeightForPrematureInfant(gestAge);
      navigation.navigate(RESUS_PATHWAYS);
    } else {
      navigation.navigate(RESUS_PATHWAYS);
    }
  }

  const onBackAccept = () => {
    setShowBackWarning(false);
    Analytics.trackEvent("Guideline Restart", {guideline: 'Resuscitation'})
    navigation.reset({
      routes: [{name: RESUS_HOME}],
      routeNames: [RESUS_HOME]
    })
  }

  const onBackDismiss = () => {
    setShowBackWarning(false);
  }

  const onBack = () => {
    setShowBackWarning(true);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM border customOnBack={onBack} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Text style={styles.title}>Patient Details</Text>
            <Text style={styles.info}>{resusText.patientDetails.info}</Text>
            <View style={styles.innerCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.headerText}>
                  {resusText.patientDetails.youHaveEntered}
                </Text>
              </View>
              <View style={styles.cardBody}>
                {getEnteredField()}
              </View>
            </View>
            {getCalculatedFields().length ? (
              <View style={styles.innerCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.headerText}>
                    {resusText.patientDetails.weEstimated}
                  </Text>
                </View>
                <View style={styles.cardBody}>
                  {getCalculatedFields()}
                </View>
              </View>
            ) : <View />}
            <View style={styles.buttonsContainer}>
              <HollowButton
                text={resusText.shared.restart}
                icon={restartIc}
                style={styles.restartButton}
                onPress={onBack}
              />
              <FullWidthButton
                text={resusText.shared.continue}
                style={styles.continueButton}
                onPress={onContinue}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
      <GoBackModal
        visible={showBackWarning}
        onAccept={onBackAccept}
        onDismiss={onBackDismiss}
      />
      <BornPrematurePopup
        isVisible={showPrematureWarning}
        onClose={() => setShowPrematureWarning(false)}
        onFinish={onBornPremature}
      />
    </SafeAreaView>
  )
}))

export default PatientDetails;
