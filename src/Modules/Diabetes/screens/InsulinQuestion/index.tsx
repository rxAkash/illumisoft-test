import React, { useState } from 'react';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import { Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'UIToolkit/Inputs/YesNoButtons';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { NavigationProp } from '@react-navigation/native';
import { BASAL_INSULIN } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const InsulinQuestion = React.memo(({navigation}: Props) => {
  const [answer, setAnswer] = useState<number>();

  const onNav = () => {
    navigation.navigate(BASAL_INSULIN)
  }

  return (
    <DiabetesLayout
      title={diabetesText.insulin.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.insulin.sectionTitle}</Text>
            <YesNoButtons
              answer={answer}
              onAnswer={setAnswer}
            />
            {answer === 1 && (
              <View style={[styles.warningCard, {marginTop: 16}]}>
                <Text style={styles.warningText}>{diabetesText.insulin.warning}</Text>
              </View>
            )}
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.insulin.next}
              disabled={answer === undefined}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default InsulinQuestion;
