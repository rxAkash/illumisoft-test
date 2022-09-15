import React from 'react';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { Text, View } from 'react-native';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import BulletList from 'UIToolkit/BulletList';
import { KEY_CONSIDERATIONS } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { NavigationProp } from '@react-navigation/native';
import { IV_FLUIDS } from 'Modules/Diabetes/navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const DiabeticKetoacidosisTreatment = React.memo(({navigation}: Props) => {
  const onNav = () => {
    navigation.navigate(IV_FLUIDS)
  }

  return (
    <DiabetesLayout
      title={diabetesText.dkaTreatment.treatmentTitle}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.dkaTreatment.treatmentSectionHeader}</Text>
            <BulletList
              items={KEY_CONSIDERATIONS}
            />
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.dkaTreatment.recommendation}</Text>
            <Text style={styles.sectionSubtitle}>{diabetesText.dkaTreatment.recommendationInfo}</Text>
            <FullWidthButton
              text={diabetesText.dkaTreatment.next}
              onPress={onNav}
              style={styles.cardButton}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default DiabeticKetoacidosisTreatment;
