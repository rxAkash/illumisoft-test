import BottomRestart from 'Modules/Brue/components/BottomRestart';
import { brueText } from 'Modules/Brue/config/strings';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import YesNoButtons from 'UIToolkit/Inputs/YesNoButtons';
import styles from '../../styles';
import { SUGGESTIONS_LIST } from './conf';

const InpatientFinalQuestion = React.memo(() => {
  const [answer, setAnswer] = useState<number>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Card style={styles.card}>
          <>
            <Text style={styles.regularText}>{brueText.finalQuestion}</Text>
            <YesNoButtons
              answer={answer}
              onAnswer={setAnswer}
            />
            {answer === 1 && (
              <View style={styles.resultsSection}>
                <Text style={styles.infoText}>{brueText.suggestions}</Text>
                <Text style={styles.regularText}>{brueText.suggestionsInfo}</Text>
              </View>
            )}
            {answer === 0 && (
              <View style={styles.resultsSection}>
                <Text style={styles.infoText}>{brueText.suggestions}</Text>
                <BulletList
                  items={SUGGESTIONS_LIST}
                />
              </View>
            )}
          </>
        </Card>
      </ScrollView>
      <BottomRestart />
    </SafeAreaView>
  )
})

export default InpatientFinalQuestion;
