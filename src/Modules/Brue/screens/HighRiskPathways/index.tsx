import { NavigationProp } from '@react-navigation/native';
import BottomRestart from 'Modules/Brue/components/BottomRestart';
import { brueText } from 'Modules/Brue/config/strings';
import { HIGH_RISK_AMBULATORY_INFO, HIGH_RISK_INPATIENT_INFO } from 'Modules/Brue/navigation/routes';
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const HighRiskPathways = React.memo(({navigation}: Props) => {
  const onNav = (route: string) => {
    navigation.navigate(route);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.highRiskClassifications}</Text>
      <ScrollView style={styles.container}>
        <Card title={brueText.whatPracticeSetting}>
          <CardNavigationButton
            title={brueText.ambulatoryEvaluation}
            subtitle={brueText.ambulatoryEvaluationInfo}
            onPress={() => onNav(HIGH_RISK_AMBULATORY_INFO)}
          />
          <CardNavigationButton
            title={brueText.inpatientEvaluation}
            subtitle={brueText.inpatientEvaluationInfo}
            onPress={() => onNav(HIGH_RISK_INPATIENT_INFO)}
          />
        </Card>
      </ScrollView>
      <BottomRestart />
    </SafeAreaView>
  )
})

export default HighRiskPathways;
