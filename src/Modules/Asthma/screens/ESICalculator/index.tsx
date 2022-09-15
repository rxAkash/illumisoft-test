import { NavigationProp } from '@react-navigation/core';
import Analytics from 'appcenter-analytics';
import { asthmaText } from 'Modules/Asthma/config/strings';
import { ED_TREATMENTS, INPATIENT_TREATMENTS } from 'Modules/Asthma/navigation/routes';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import CheckboxGroup from 'UIToolkit/Inputs/CheckboxGroup';
import RadioSelect from 'UIToolkit/Inputs/RadioSelect';
import { A_AGE_12U, A_AGE_23, A_AGE_4, A_AGE_5, A_AGE_612 } from '../EDAgeSelect/conf';
import { a12UCalculator } from './calculators/a12UCalculator';
import { a23Calculator } from './calculators/a23Calculator';
import { a4Calculator } from './calculators/a4Calculator';
import { a5Calculator } from './calculators/a5Calculator';
import { a612Calculator } from './calculators/a612Calculator';
import { A_12U_SCORING } from './confs/a12Uconf';
import { A_23_SCORING } from './confs/a23conf';
import { A_4_SCORING } from './confs/a4conf';
import { A_5_SCORING } from './confs/a5conf';
import { A_612_SCORING } from './confs/a612conf';
import styles from './styles';
interface Props {
  route: {
    params: {
      age: SelectOption;
      hourSelected: SelectOption;
      treatment?: string;
      isInpatientPathway?: boolean;
    }
  },
  navigation: NavigationProp<any>;
}

const ESICalculator = React.memo(({route, navigation}: Props) => {
  const [scoring, setScoring] = useState(A_23_SCORING);
  const [results, setResults] = useState<{[key: string]: string | string[]}>({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const {age} = route.params;
    switch(age.value) {
      case A_AGE_23: {
        Analytics.trackEvent(`Screen Access: A_23_SCORING`);
        setScoring(A_23_SCORING); 
      }
        break;
      case A_AGE_4: {
        Analytics.trackEvent(`Screen Access: A_4_SCORING`);
        setScoring(A_4_SCORING);
      }
        break;
      case A_AGE_5: {
        Analytics.trackEvent(`Screen Access: A_5_SCORING`);
        setScoring(A_5_SCORING);
      }
        break;
      case A_AGE_612: {
        Analytics.trackEvent(`Screen Access: A_612_SCORING`);
        setScoring(A_612_SCORING);
      }
        break;
      case A_AGE_12U: {
        Analytics.trackEvent(`Screen Access: A_12U_SCORING`);
        setScoring(A_12U_SCORING);
      }
    }
  }, [])

  const onScoringChange = (scoring: string, value: string | string[]) => {
    const newResults = {
      ...results,
      [scoring]: value
    }
    setResults(newResults)
    calculateScore(newResults);
  }

  const calculateScore = (results: any) => {
    if(scoring === A_23_SCORING) {
      setScore(a23Calculator(results));
    } else if(scoring === A_4_SCORING) {
      setScore(a4Calculator(results));
    } else if(scoring === A_5_SCORING) {
      setScore(a5Calculator(results));
    } else if(scoring === A_612_SCORING) {
      setScore(a612Calculator(results));
    } else if(scoring === A_12U_SCORING) {
      setScore(a12UCalculator(results));
    }
  }

  const onViewTreatment = () => {
    const {hourSelected, treatment, isInpatientPathway} = route.params;
    if(isInpatientPathway) {
      navigation.navigate(INPATIENT_TREATMENTS, {score, hourSelected, treatment})  
    } else {
      navigation.navigate(ED_TREATMENTS, {score, hourSelected, treatment})
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader border />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{asthmaText.esiCalculator.title}</Text>
        <Text style={styles.subtitle}>{scoring.age}</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.info}>{asthmaText.esiCalculator.info}</Text>
        {scoring.scores.map((item, index) => item.type === 'radio' ? (
          <RadioSelect
            key={item.name}
            title={item.title}
            options={item.options}
            onChange={(value) => onScoringChange(item.name, value)}
            value={results[item.name] as string}
            active={index === 0 ? true : results[scoring.scores[index - 1].name]}
          />
        ) : (
          <CheckboxGroup
            key={item.name}
            title={item.title}
            options={item.options}
            values={results[item.name] as string[]}
            onChange={(value) => onScoringChange(item.name, value)}
            active={index === 0 ? true : results[scoring.scores[index - 1].name]}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.subtitle}>Calculated Score: <Text style={styles.calculatedScore}>{score}</Text></Text>
        <FullWidthButton
          text="View Treatment"
          onPress={onViewTreatment}
        />
      </View>
    </SafeAreaView>
  )
})

export default ESICalculator;
