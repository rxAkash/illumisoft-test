import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import BottomRestart from '../../components/BottomRestart';
import { brueText } from '../../config/strings';
import styles from './styles';

const NotABrue = React.memo(() => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader border />
      <ScrollView style={styles.container}>
        <Card title={brueText.notABrue} >
          <View style={styles.card}>
            <Text style={[styles.regularText, styles.boldText, styles.textMargin]}>
              {brueText.notABrueInfoFirst}
            </Text>
            <Text style={[styles.regularText, styles.textMargin]}>
              {brueText.notABrueInfoSecond}
            </Text>
            <Text style={[styles.regularText, styles.boldText]}>
              {brueText.recommendation}
            </Text>
            <Text style={styles.regularText}>
              {brueText.notABrueRecommendation}
            </Text>
          </View>
        </Card>
      </ScrollView>
      <BottomRestart />
    </SafeAreaView>
  )
})

export default NotABrue;
