/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import CerebralEdemaCriteriaList from 'Modules/Diabetes/components/CerebralEdemaCriteriaList';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { CEREBRAL_EDEMA_TREATMENT } from 'Modules/Diabetes/navigation/routes';
import { DIAGNOSIS_QUESTIONS } from '../CerebralEdemaDiagnosis/conf';
import Card from 'UIToolkit/Card';
import styles from '../../styles';
import { MAJOR_CRITERIA } from '../CerebralEdemaMajorCriteria/conf';
import { MINOR_CRITERIA } from '../CerebralEdemaMinorCriteria/conf';

interface Props {
  route: {
    params: {
      diagnosisAnswers?: {[key: number]: number}
      majorAnswers?: {[key: number]: number}
      minorAnswers?: {[key: number]: number}
    }
  },
  navigation: NavigationProp<any>;
}

const CerebralEdemaLikely = React.memo(({route, navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(CEREBRAL_EDEMA_TREATMENT)
  }

  const getDiagnositcCriterias = () => {
    if(route.params?.diagnosisAnswers) {
      return Object.keys(route.params?.diagnosisAnswers)
        //@ts-ignore
        .filter(key => route.params?.diagnosisAnswers[parseInt(key, 10)] === 1)     
        .map((key) =>  DIAGNOSIS_QUESTIONS.find(item => item.id.toString() === key.toString())?.question || '')
    }
    return [];
  }

  const getMajorCriterias = () => {
    if(route.params?.majorAnswers) {
      return Object.keys(route.params?.majorAnswers)
        //@ts-ignore
        .filter(key => route.params?.majorAnswers[parseInt(key, 10)] === 1)
        .map((key) => MAJOR_CRITERIA.find(item => item.id.toString() === key.toString())?.question || '')
    }
    return [];
  }

  const getMinorCriterias = () => {
    if(route.params?.minorAnswers) {
      return Object.keys(route.params?.minorAnswers)
        //@ts-ignore
        .filter(key => route.params.minorAnswers[parseInt(key, 10)] === 1)
        .map(key => MINOR_CRITERIA.find(item => item.id.toString() === key.toString())?.question || '')
    }
    return [];
  }

  return (
    <DiabetesLayout title={diabetesText.cerebralEdemaDiagnosis.diagnosis}>
      <View style={styles.body}>
        <Card style={styles.card}>
          <View style={styles.warningCard}>
            <Text style={styles.warningText}>{diabetesText.cerebralEdemaDiagnosis.cerebralEdemaLikelyWarning}</Text>
            <Text style={styles.sectionSubtitle}>{diabetesText.cerebralEdemaDiagnosis.likelyWarningInfo}</Text>
          </View>
          <FullWidthButton
            text={diabetesText.cerebralEdemaDiagnosis.treatmentRecommendations}
            onPress={() => onNav()}
          />
        </Card>
        <CerebralEdemaCriteriaList
          diagnostic={getDiagnositcCriterias()}
          major={getMajorCriterias()}
          minor={getMinorCriterias()}
        />
      </View>
    </DiabetesLayout>
  )
})

export default CerebralEdemaLikely;