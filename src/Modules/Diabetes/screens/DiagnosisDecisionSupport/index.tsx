import { NavigationProp } from '@react-navigation/native';
import Analytics from 'appcenter-analytics';
import { dkaTransparentIc } from 'assets/img';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CheckboxGroup from 'UIToolkit/Inputs/CheckboxGroup';
import ResultDisplayBottomPanel from 'UIToolkit/ResultDisplayBottomPanel';
import DiabetesLayout from '../../components/DiabetesLayout';
import { DIAGNOSIS_LABORATORY_TESTING, SIGNS_AND_SYMPTOMS } from './conf';
import { diabetesText } from '../../config/strings';
import { DIABETES_HOME, DIABETES_KETOACIDOSIS_DIAGNOSIS } from '../../navigation/routes';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const DiagnosisDecisionSupport = React.memo(({navigation}: Props) => {
  const [laboratoryTesting, setLaboratoyTesting] = useState<string[]>([]);
  const [signsAndSymptoms, setSignsAndSymptoms] = useState<string[]>([]);

  const isCriteriaMet = () => {
    if(laboratoryTesting.length >= 2) {
      return true
    } else if(laboratoryTesting.length > 0 && signsAndSymptoms.length >= 1) {
      return true
    }
    return false;
  }

  const getBottomPanelText = () => {
    if(!laboratoryTesting.length && !signsAndSymptoms.length) {
      return '--'
    } else if(isCriteriaMet()) {
      return diabetesText.diagnosisSupport.criteriaMet
    } else {
      return diabetesText.diagnosisSupport.criteriaNotMet
    }
  }

  const haveAnyInput = () => {
    return laboratoryTesting.length || signsAndSymptoms.length
  }

  const onButtonPress = () => {
    if(haveAnyInput() && !isCriteriaMet()) {
      Analytics.trackEvent("Guideline Restart", {guideline: 'Diabetes'})
      navigation.reset({
        routes: [{name: DIABETES_HOME}],
        routeNames: [DIABETES_HOME]
      })
    } else if(isCriteriaMet()) {
      navigation.navigate(DIABETES_KETOACIDOSIS_DIAGNOSIS)
    }
  }

  const renderBottomPanel = () => {
    return (
      <ResultDisplayBottomPanel
        onNext={onButtonPress}
        text={getBottomPanelText()}
        buttonDisabled={!haveAnyInput()}
        buttonTextOverrride={haveAnyInput() && !isCriteriaMet() ?
          diabetesText.diagnosisSupport.home
          : undefined}
        subinfo={diabetesText.home.diabetesDiagnosis}
        icon={haveAnyInput() && !isCriteriaMet() ? dkaTransparentIc : undefined}
      />
    )
  }

  return (
    <DiabetesLayout
      title={diabetesText.home.diabetesDiagnosis}
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.verticalContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text>
            <Text style={[styles.sectionTitle, styles.bold]}>
              {diabetesText.diagnosisSupport.laboratoryTesting}
            </Text>
            <Text style={styles.sectionHint}>
              {diabetesText.diagnosisSupport.selectAllThatApply}
            </Text>
          </Text>
          <Text style={styles.noteText}>
            <Text style={styles.bold}>
              {diabetesText.diagnosisSupport.note}
            </Text>
            {diabetesText.diagnosisSupport.laboratoryNote}
          </Text>
        </View>
        <CheckboxGroup
          values={laboratoryTesting}
          options={DIAGNOSIS_LABORATORY_TESTING}
          onChange={setLaboratoyTesting}
          active
        />
        <View style={[styles.sectionTitleContainer, {paddingTop: 16}]}>
          <Text>
            <Text style={[styles.sectionTitle, styles.bold]}>
              {diabetesText.diagnosisSupport.signsAndSymptoms}
            </Text>
            <Text style={styles.sectionHint}>
              {diabetesText.diagnosisSupport.selectAllThatApply}
            </Text>
          </Text>
        </View>
        <CheckboxGroup
          values={signsAndSymptoms}
          options={SIGNS_AND_SYMPTOMS}
          onChange={setSignsAndSymptoms}
          active
        />
      </View>
    </DiabetesLayout>
  )
})

export default DiagnosisDecisionSupport;
