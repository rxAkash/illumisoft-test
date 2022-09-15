import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import DiabetesLayout from '../../components/DiabetesLayout';
import { diabetesText } from '../../config/strings';
import { RECOMMENDATIONS_FOR_NEW_ONSET, RECOMMENDATIONS_FOR_TYPE_1 } from '../../navigation/routes';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const DiabetesKetoacidosisSecond = React.memo(({navigation}: Props) => {
  const onNav = (route: string) => {
    navigation.navigate(route);
  }

  return (
    <DiabetesLayout title={diabetesText.ketoacidosis.title}>
      <View style={styles.verticalContainer}>
        <View style={[styles.sectionTitleContainer, {marginBottom: 12}]}>
          <Text style={styles.sectionTitle}>{diabetesText.ketoacidosis.secondQuestion}</Text>
        </View>
        <CardNavigationButton
          title={diabetesText.ketoacidosis.yes}
          onPress={() => onNav(RECOMMENDATIONS_FOR_TYPE_1)}
        />
        <CardNavigationButton
          title={diabetesText.ketoacidosis.no}
          onPress={() => onNav(RECOMMENDATIONS_FOR_NEW_ONSET)}
        />
      </View>
    </DiabetesLayout>
  )
})

export default DiabetesKetoacidosisSecond;
