import { NavigationProp } from '@react-navigation/core';
import Analytics from 'appcenter-analytics';
import { homeIc, restartIc } from 'assets/img';
import { linkArrowIc } from 'assets/img/asthma';
import { asthmaText } from 'Modules/Asthma/config/strings';
import { ASTHMA_HOME, ED_PATHWAY, INPATIENT_PATHWAY } from 'Modules/Asthma/navigation/routes';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import { calculateEDTreatment } from './calculateEdTreatment';
import OtherTools from './components/OtherTools';
import ResultSection from './components/ResultSection';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
  route: {
    params: {
      score?: number;
      hourSelected: SelectOption;
      esiScore?: string;
      treatment?: string;
    }
  }
}

const Treatments = React.memo(({navigation, route}: Props) => {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const {score, hourSelected, esiScore, treatment} = route.params;
    const result = calculateEDTreatment(score, hourSelected && hourSelected.value, esiScore, treatment);
    setResult(result);
  }, [])

  const onHome = () => {
    Analytics.trackEvent("Guideline Restart", {guideline: 'Asthma'})
    navigation.reset({
      routes: [{name: ASTHMA_HOME}],
      routeNames: [ASTHMA_HOME]
    })
  }

  const onRestart = () => {
    navigation.reset({
      routes: [{name: ASTHMA_HOME}, {name: ED_PATHWAY}],
      routeNames: [ASTHMA_HOME, ED_PATHWAY]
    })
  }

  const onInpatient = () => {
    navigation.reset({
      routes: [{name: ASTHMA_HOME}, {name: INPATIENT_PATHWAY}],
      routeNames: [ASTHMA_HOME, INPATIENT_PATHWAY]
    })
  }

  if (!result) return null;

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader border />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{asthmaText.edPathway.treatmentTitle}</Text>
          <Card title={result.text}>
            {result.treatmentTitle && <Text style={styles.treatmentTitle}>{result.treatmentTitle}</Text>}
            {result.sections.map((item: any) => (
              <ResultSection item={item} key={item.item} />
            ))}
            {result.admitLink && (
              <Pressable style={styles.admitSection} onPress={onInpatient}>
                <Image source={linkArrowIc} style={styles.admitIcon}/>
                <Text style={styles.admitText}>{result.admitLink}</Text>
              </Pressable>
            )}
          </Card>
          {result.discharge && (
            <OtherTools />
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomButtons}>
        <HollowButton
          text="Asthma Home"
          onPress={onHome}
          style={styles.button}
          icon={homeIc}
        />
        <FullWidthButton
          text="Restart Pathway"
          onPress={onRestart}
          style={styles.button}
          icon={restartIc}
        />
      </View>
    </SafeAreaView>
  )
})

export default Treatments;
