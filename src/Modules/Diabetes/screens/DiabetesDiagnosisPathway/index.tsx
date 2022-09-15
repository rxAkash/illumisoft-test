import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import Card from 'UIToolkit/Card';
import { primaryColor } from 'UIToolkit/theme/colors';
import DiabetesLayout from '../../components/DiabetesLayout';
import { diabetesText } from '../../config/strings';
import { DIAGNOSIS_DECISION_SUPPORT } from '../../navigation/routes';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const DiabetesDiagnosisPathway = React.memo(({navigation}: Props) => {
  const renderBottomPanel = () => {
    return (
      <View style={styles.bottomContainer}>
        <ColoredNavButton
          backgroundColor={primaryColor}
          title={diabetesText.diabetesDiagnosis.decisionSupport}
          onPress={() => navigation.navigate(DIAGNOSIS_DECISION_SUPPORT)}
          center
        />
      </View>
    )
  }

  return (
    <DiabetesLayout title={diabetesText.home.diabetesDiagnosis} renderBottomPanel={renderBottomPanel}>
      <View style={styles.body}>
        <Card title={diabetesText.diabetesDiagnosis.type1} collapsible blackTitle>
          <View style={styles.card}>
            <Text>{diabetesText.diabetesDiagnosis.type1Details}</Text>
          </View>
        </Card>
        <Card title={diabetesText.diabetesDiagnosis.type2} collapsible blackTitle>
          <View style={styles.card}>
            <Text>{diabetesText.diabetesDiagnosis.type2Details}</Text>
          </View>
        </Card>
        <Card title={diabetesText.diabetesDiagnosis.gestationalDiabetes} collapsible blackTitle>
          <View style={styles.card}>
            <Text>{diabetesText.diabetesDiagnosis.gestationalDetails}</Text>
          </View>
        </Card>
        <Card title={diabetesText.diabetesDiagnosis.lessCommonDiabetesDiagnoses} collapsible blackTitle>
          <View style={styles.card}>
            <Text>{diabetesText.diabetesDiagnosis.lessCommonDetails}</Text>
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default DiabetesDiagnosisPathway;
