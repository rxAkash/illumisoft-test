import { NavigationProp } from '@react-navigation/native';
import { storeDataInLS } from 'data/localStorage';
import { STUDY_ID } from 'data/localStorage/keys';
import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import { ANTIBIOTICS_HOME } from 'Modules/Antibiotics/navigation/routes';
import { HOME_SCREEN } from 'Navigation/routes';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import Input from 'UIToolkit/Inputs/Input';

import styles from '../../styles';
import { checkStudyId } from './checkStudyId';

interface Props {
  navigation: NavigationProp<any>;
}

const StudyIdConfirmation = React.memo(({navigation}: Props) => {
  const [studyId, setStudyId] = useState("dldsbi95M3d1THZ4Qm5qVDB3OVpaRkJ6bi83bUI4aDhNbmozQnlkUHhqRT06Ot7gSlBYeWX6p3CbwUnvSW8=");
  const [showWarn, setShowWarn] = useState("");

  const onSubmit = async () => {
    const response = await checkStudyId(studyId)
    if(response === 200) {
      await storeDataInLS(STUDY_ID, {value: studyId})
      setShowWarn("");
      navigation.navigate(ANTIBIOTICS_HOME);
    }
    else {
      setShowWarn("Incorrect Study Id");
    }
  }

  const onBack = () => {
    navigation.reset({
      routes: [{name: HOME_SCREEN}], routeNames: [HOME_SCREEN]
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <GoBackHeader customOnBack={onBack} />
      {antibioticsText.studyIdConfirmation.title && (
        <Text style={styles.title}>{antibioticsText.studyIdConfirmation.title}</Text>
      )}
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Input
              keyboard='default'
              onChange={setStudyId}
              placeholder={antibioticsText.studyIdConfirmation.studyId}
              label={""}
              value={studyId}
              style={styles.studyIdInput}
            />
    
            <Text style={[styles.text, styles.warningText]}>                 
              {showWarn}
            </Text>
      
            <FullWidthButton
              text={antibioticsText.shared.submit}
              style={styles.submitButton}
              disabled={!studyId.length}
              onPress={onSubmit}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
})

export default StudyIdConfirmation;
