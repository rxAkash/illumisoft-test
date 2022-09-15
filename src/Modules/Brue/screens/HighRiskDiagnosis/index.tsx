import { NavigationProp } from '@react-navigation/native';
import BottomRestart from 'Modules/Brue/components/BottomRestart';
import { brueText } from 'Modules/Brue/config/strings';
import { HIGH_RISK_INPATIENT_INFO } from 'Modules/Brue/navigation/routes';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const HighRiskDiagnosis = React.memo(({navigation}: Props) => {
  const onInpatient = () => {
    navigation.navigate(HIGH_RISK_INPATIENT_INFO);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.diagnosis}</Text>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Card title={brueText.highRiskBrue}>
          <View style={styles.cardSection}>
            <Text style={styles.infoText}>{brueText.recommendation}</Text>
            <Text style={styles.regularText}>{brueText.highRiskRecommendation}</Text>
          </View>
          <CardNavigationButton
            title={brueText.inpatientEvaluation}
            onPress={onInpatient}
            subtitle={brueText.inpatientEvaluationInfo}
          />
        </Card>
      </ScrollView>
      <BottomRestart />
    </SafeAreaView>
  )
})

export default HighRiskDiagnosis;
