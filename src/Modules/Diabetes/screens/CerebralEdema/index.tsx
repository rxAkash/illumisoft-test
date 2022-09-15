import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import styles from '../../styles';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { CEREBRAL_EDEMA_DIAGNOSIS, CEREBRAL_EDEMA_TREATMENT, DIABETIC_KETOACIDOSIS_TREATMENT } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const CerebralEdema = React.memo(({navigation}: Props) => {
  const [answer, setAnswer] = useState<number>();

  const onNav = (route: string) => {
    navigation.navigate(route);
  }

  const renderBottomPanel = () => answer !== undefined ? (
    <View style={styles.bottomContainer}>
      <FullWidthButton
        text={answer === 1
          ? diabetesText.cerebralEdema.cerebralTreatment
          : diabetesText.cerebralEdema.dkaTreatment}
        onPress={() => answer === 1
          ? onNav(CEREBRAL_EDEMA_TREATMENT)
          : onNav(DIABETIC_KETOACIDOSIS_TREATMENT)}
      />
    </View>
  ) : <View />

  return (
    <DiabetesLayout
      showPatientDetailsHeader
      title={diabetesText.cerebralEdema.title}
      renderBottomPanel={renderBottomPanel}
    >
      <View style={styles.body}>
        <YesNoQuestion
          questionText={diabetesText.cerebralEdema.question}
          answer={answer}
          onAnswer={(_, ans) => setAnswer(ans)}
          id={1}
        />
        <Text style={[styles.sectionTitle, styles.spacedText]}>
          {diabetesText.cerebralEdema.needToDiagnose}
        </Text>
        <HollowButton
          text={diabetesText.cerebralEdema.diagnosisAssistant}
          onPress={() => onNav(CEREBRAL_EDEMA_DIAGNOSIS)}
        />
      </View>
    </DiabetesLayout>
  )
})

export default CerebralEdema;
