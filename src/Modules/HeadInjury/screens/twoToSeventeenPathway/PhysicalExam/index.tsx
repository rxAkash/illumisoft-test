import React, { useState } from 'react';
import { Text, View } from 'react-native';
import HeadInjuryLayout from "Modules/HeadInjury/components/HeadInjuryLayout";
import styles from "../styles";
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { PHYSICAL_EXAM_ANSWERS, PHYSICAL_EXAM_QUESTIONS} from './conf';
import YesNoQuestion from 'UIToolkit/YesNoQuestion';
import { compareArrays } from 'utils/compareArray';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import { headInjuryText } from 'Modules/HeadInjury/config/strings';
import { primaryColor } from 'UIToolkit/theme/colors';
import {DISPOSITION_RECCOMENDATION_HMI, DISPOSITION_RECCOMENDATION_HMI_TEN, DISPOSITION_RECCOMENDATION_HMI_TWO, HEAD_INJURY_HOME  } from "../../../navigation/routes"
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any>;
  }

const PhysicalExamTwo = React.memo(({ navigation }: Props) => {
  const [answers, setAnswers] = useState<any>([]);
  const [displayedQuestions, setDisplayedQuestions] = useState(5);
  const [resultButton, setResultButton] = useState<any>()

  const updateAnswers = (id: number, answer: number) => {
    let newAnswers = [...answers];
    const answerIndex = newAnswers.findIndex(item => item.id === id);
    if(answerIndex >= 0) {
      newAnswers[answerIndex] = { id, answer };
    } else {
      newAnswers.push({ id, answer })
    }
    return newAnswers;
  }

  const findResultFromAnswers = (newAnswers: {id: number, answer: number}[]) => {
    const answerValues = newAnswers.map((item: any) => item.answer);
    console.log(answerValues);
      //if(answerValues.includes(1)){
      return DISPOSITION_RECCOMENDATION_HMI_TWO;
    //}
    //return PHYSICAL_EXAM_ANSWERSж
  }

  const onAnswer = (id: number, answer: number) => {
    const newAnswers = updateAnswers(id, answer);
    const result = findResultFromAnswers(newAnswers);
    setAnswers(newAnswers); 
    if(result) {
      setResultButton(result)
    } else {
      setResultButton(undefined);
    }
  }
  const isDisabled = () => {
    if(answers.length==5){
      return false;
    }
    else{
      return true;
    }
  };
  const onNav = () => {
    navigation.navigate(resultButton)
};
  
  const renderBottomPanel = () => (
    <View style={styles.bottomContainer}>
      <ColoredNavButton
        title={headInjuryText.zeroToNinePathway.PhysicalExam.btnTitle}
        backgroundColor={primaryColor}
        onPress={onNav}
        disabled={isDisabled()}
      />
    </View>
  );
  const renderScore = () => (
    <View>
      <Text style={styles.adittionalText}>{headInjuryText.zeroToNinePathway.GSC14}</Text>
    </View>
  );
  return (
    <HeadInjuryLayout
    renderBottomPanel={renderBottomPanel}
    customElement={renderScore}
    >
      <View style={styles.titleContainer}>
          <Text style={styles.blueTextTitile}>
            {headInjuryText.twoToSeventeenPathway.PhysicalExam.title}
          </Text>
        <Text style={styles.regularText}>{headInjuryText.twoToSeventeenPathway.PhysicalExam.question}</Text>
        {PHYSICAL_EXAM_QUESTIONS.slice(0, displayedQuestions).map((item, index) => (
          <View key={item.id.toString()}>
            <YesNoQuestion
              id={item.id}
              questionText={item.question}
              onAnswer={onAnswer}
              answer={answers[index]?.answer}
            />
          </View>
        ))}
      </View>
    </HeadInjuryLayout>
  )
})

export default PhysicalExamTwo;
