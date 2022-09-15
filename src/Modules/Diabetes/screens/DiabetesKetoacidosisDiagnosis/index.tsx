import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import DiabetesLayout from '../../components/DiabetesLayout';
import { diabetesText } from '../../config/strings';
import { DIABETES_KETOACIDOSIS_SECOND, DIABETES_RESUS_REDIRECT } from '../../navigation/routes';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const DiabetesKetoacidosisDiagnosis = React.memo(({navigation}: Props) => {
  const onNav = (route: string) => {
    navigation.navigate(route);
  }

  return (
    <DiabetesLayout title={diabetesText.ketoacidosis.title}>
      <View style={styles.verticalContainer}>
        <View style={[styles.sectionTitleContainer, {marginBottom: 12}]}>
          <Text style={styles.sectionTitle}>{diabetesText.ketoacidosis.question}</Text>
        </View>
        <CardNavigationButton
          title={diabetesText.ketoacidosis.yes}
          onPress={() => onNav(DIABETES_RESUS_REDIRECT)}
        />
        <CardNavigationButton
          title={diabetesText.ketoacidosis.no}
          onPress={() => onNav(DIABETES_KETOACIDOSIS_SECOND)}
        />
      </View>
    </DiabetesLayout>
  )
})

export default DiabetesKetoacidosisDiagnosis;
