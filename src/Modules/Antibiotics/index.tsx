import { NavigationProp } from '@react-navigation/native';
import { antibioticsIc } from 'assets/img';
import { getDataFromLS } from 'data/localStorage';
import { STUDY_ID } from 'data/localStorage/keys';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import ModuleLogo from 'UIToolkit/ModuleLogo';
import { antibioticsText } from './config/strings';
import { ACUTE_BACTERIAL_RHINOSINUSITIS, ACUTE_OTITIS_HOME, BRONCHIOLITIS, SKIN_INFECTION_HOME, PNEUMONIA_HOME, PHARYNGITIS_HOME, URINARY_TRACT_HOME, STUDY_ID_CONFIRMATION } from './navigation/routes';
import styles from './styles';
interface Props {
  navigation: NavigationProp<any>;
}

const Antibiotics = React.memo(({navigation}: Props) => {
  const [checkingStudyId, setCheckingStudyId] = useState(true);

  useEffect(() => {
    getDataFromLS(STUDY_ID).then((res) => {
      setCheckingStudyId(false);
      if(!res || !res.value) {
        navigation.navigate(STUDY_ID_CONFIRMATION)
      }
    })
  }, [])

  const onNavPress = (screen: string) => {
    navigation.navigate(screen)
  }

  return !checkingStudyId ? (
    <ScrollView>
      <View style={styles.container}>
        <ModuleLogo
          icon={antibioticsIc}
          title={antibioticsText.home.title}
        />
        <Card title={antibioticsText.home.pathways}>
          <CardNavigationButton
            title={antibioticsText.home.acuteBacterial}
            onPress={() => onNavPress(ACUTE_BACTERIAL_RHINOSINUSITIS)}
          />
          <CardNavigationButton
            title={antibioticsText.home.acuteOtitis}
            onPress={() => onNavPress(ACUTE_OTITIS_HOME)}
          />
          <CardNavigationButton
            title={antibioticsText.home.bronchiolitis}
            onPress={() => onNavPress(BRONCHIOLITIS)}
          />
          <CardNavigationButton
            title={antibioticsText.home.pneumonia}
            onPress={() => onNavPress(PNEUMONIA_HOME)}
          />
          <CardNavigationButton
            title={antibioticsText.home.skinInfection}
            onPress={() => onNavPress(SKIN_INFECTION_HOME)}
          />
          <CardNavigationButton
            title={antibioticsText.home.strepPharyngitis}
            onPress={() => onNavPress(PHARYNGITIS_HOME)}
          />
          <CardNavigationButton
            title={antibioticsText.home.urinaryTractInfection}
            onPress={() => onNavPress(URINARY_TRACT_HOME)}
          />
          <View style={styles.disclaimerContainer}>
            <Text style={styles.text}>
              <Text style={styles.boldTitle}>{antibioticsText.home.disclaimer}</Text>
              {antibioticsText.home.disclaimerFirst}
              <Text style={styles.italic}>{antibioticsText.home.disclaimerItalic}</Text>
              {antibioticsText.home.disclaimerSecond}
            </Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  ) : null
})

export default Antibiotics;
