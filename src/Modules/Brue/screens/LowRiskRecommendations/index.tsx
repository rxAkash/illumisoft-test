import BottomRestart from 'Modules/Brue/components/BottomRestart';
import { brueText } from 'Modules/Brue/config/strings';
import React from 'react';
import { SafeAreaView, Text, ScrollView, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import styles from '../../styles';
import { CARD_SECTIONS } from './conf';

const LowRiskRecommendations = React.memo(() => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{brueText.lowRiskRecommendations}</Text>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
          </>
        </Card>
      </ScrollView>
      <BottomRestart />
    </SafeAreaView>
  )
})

export default LowRiskRecommendations;
