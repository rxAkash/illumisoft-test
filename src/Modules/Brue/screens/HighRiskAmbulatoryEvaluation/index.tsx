import { NavigationProp } from '@react-navigation/native';
import { brueText } from 'Modules/Brue/config/strings';
import { HIGH_RISK_DIAGNOSIS, NOT_A_BRUE } from 'Modules/Brue/navigation/routes';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from '../../styles';
import { CARD_SECTIONS } from './conf';

interface Props {
  navigation: NavigationProp<any>;
}

const HighRiskAmbulatoryEvaluation = React.memo(({navigation}: Props) => {
  const onYes = () => {
    navigation.navigate(NOT_A_BRUE)
  }

  const onNo = () => {
    navigation.navigate(HIGH_RISK_DIAGNOSIS)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.highRiskAmbulatory}</Text>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.regularText}>{brueText.highRiskAmbulatoryInfo}</Text>
        <Card>
          <>
            {CARD_SECTIONS.map((item, index) => (
              <View key={index.toString()} style={styles.cardSection}>
                <Text style={styles.infoText}>{item.title}</Text>
                <BulletList
                  items={item.items}
                />
              </View>
            ))}
            <View style={styles.cardSection}>
              <Text style={styles.infoText}>{brueText.newDiagnosis}</Text>
              <FullWidthButton
                text={brueText.yes}
                onPress={onYes}
                style={styles.button}
              />
              <HollowButton
                text={brueText.no}
                onPress={onNo}
              />
            </View>
          </>
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
})

export default HighRiskAmbulatoryEvaluation;
