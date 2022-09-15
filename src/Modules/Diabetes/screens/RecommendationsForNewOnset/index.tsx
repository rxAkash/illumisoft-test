import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import DiabetesLayout from '../../components/DiabetesLayout';
import { RECOMMENDATIONS_FOR_NEW_ONSET_1 } from './conf';
import { diabetesText } from '../../config/strings';
import { LABORATORY_RESULTS } from '../../navigation/routes';
import styles from '../../styles';

interface Props {
  navigation: NavigationProp<any>;
}

const RecommendationsForNewOnset = React.memo(({navigation}: Props) => {
  const onNext = () => {
    navigation.navigate(LABORATORY_RESULTS)
  }
  
  return (
    <DiabetesLayout title={diabetesText.recommendations.onsetType1}>
      <View style={styles.body}>
        <Card>
          <>
            {RECOMMENDATIONS_FOR_NEW_ONSET_1.map(item => (
              <View key={item.sectionHeader} style={styles.infoSection}>
                <Text style={[styles.sectionTitle, styles.bold]}>{item.sectionHeader}</Text>
                <BulletList
                  items={item.items}
                />
              </View>
            ))}
          </>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.recommendations.nextLaboratoryResults}
              onPress={onNext}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default RecommendationsForNewOnset;
