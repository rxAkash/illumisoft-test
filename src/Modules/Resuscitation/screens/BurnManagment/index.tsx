/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import Accordion from 'react-native-collapsible/Accordion';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import styles from './styles';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { getAgeInYears } from 'utils/ageConverter';
import { BURN_MANAGEMENT_ANSWERS, CALCULATOR_KEY, getTitleForStep, POST_20_SECTIONS, PRE_20_SECTIONS, PRE_TREATMENT_KEY, TREATMENT_KEY } from './conf';
import { getWeightInKg } from 'utils/weightConverter';
import BurnManagementQuiz from './components/BurnManagementQuiz';
import QuizMatrixHeader from 'Modules/Resuscitation/screens/BurnManagment/components/QuizMatrix/QuizMatrixHeader';
import { pencilIc } from 'assets/img';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import TreatmentLessThanTwenty from './components/TreatmentLessThanTwenty';
import IntroSection from './components/IntroSection';
import PreTretment from './components/PreTreatment';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import TreatmentPost20 from './components/TreatmentPost20';

interface Props {
  resuscitationStore: ResuscitationStore;
}

const BurnManagemnt = inject('resuscitationStore')(observer(({
  resuscitationStore
}: Props ) => {
  const [results, setResults] = useState<number>(0);
  const [sections, setSections] = useState(PRE_20_SECTIONS);
  const [activeSections, setActiveSections] = useState([0]);
  const [calculatorRef, setCalculatorRef] = useState<{reset: () => void}>();
  const [calculationFinished, setCalculationFinished] = useState(false);
  const [preTreatmentFinished, setPreTreatmentFinished] = useState(false);
  const [electricalBurn, setElectricalBurn] = useState<number>();
  const [hours, setHours] = useState('');
  const [fluidVol, setFluidVol] = useState('');

  useEffect(() => {
    if(results >= 20) {
      setSections(POST_20_SECTIONS);
    } else {
      setSections(PRE_20_SECTIONS);
    }
  }, [results])

  const onChangeSections = (sections: number[]) => {
    if(sections[0] === 0) {
      setActiveSections(sections);
    }
    if(results >= 20) {
      if(sections[0] === 1 && calculationFinished) {
        setActiveSections(sections);
      }
      if(sections[0] === 2 && preTreatmentFinished) {
        setActiveSections(sections)
      }
    } else {
      if(sections[0] === 1 && calculationFinished) {
        setActiveSections(sections)
      }
    }
  }

  const onNext = () => {
    setActiveSections([1]);
    setCalculationFinished(true);
  }

  const onTreatmentBack = () => {
    setActiveSections([activeSections[0] - 1])
  }

  const onPreNext = () => {
    setActiveSections([2]);
    setPreTreatmentFinished(true);
  }

  const onPreBack = () => {
    setActiveSections([0]);
  }

  const onRestart = () => {
    setActiveSections([0]);
    setCalculationFinished(false);
    setPreTreatmentFinished(false);
    setHours('');
    setFluidVol('');
    setElectricalBurn(undefined);
    calculatorRef?.reset();
  }

  const treatmentActive = () => {
    if(results < 20) {
      return calculationFinished;
    } else {
      return preTreatmentFinished;
    }
  }

  const sectionIsEnabled = (title: string) => {
    switch(title) {
      case CALCULATOR_KEY: return true;
      case PRE_TREATMENT_KEY: return calculationFinished;
      case TREATMENT_KEY: return treatmentActive();
    }
  }

  const renderSectionHeader = (content: {title: string}, index: number) => {
    const stepCompleted = activeSections[0] > index;

    return (
      <View style={styles.headerContainer}>
        <View style={[styles.headerIcon, !sectionIsEnabled(content.title) && styles.headerDisabled]}>
          {stepCompleted ? (
            <Image
              source={pencilIc}
              style={styles.headerIconImage}
            />
          ) : (
            <Text style={styles.headerItem}>{index + 1}</Text>
          )}
        </View>
        <Text>{getTitleForStep(index, results)}</Text>
      </View>
    )
  }

  const renderCalculator = () => (
    <View style={{marginTop: 16}}>
      <Text style={[styles.info, {marginBottom: 12}]}>
        {resusText.burnManagment.calcInfo}
      </Text>
      <QuizMatrixHeader
        title="Area"
        answers={BURN_MANAGEMENT_ANSWERS.map(item => item.title)}
      />
      <BurnManagementQuiz
        age={getAgeInYears(resuscitationStore.age, resuscitationStore.ageUnit)}
        onResultChange={setResults}
        setRef={setCalculatorRef}
      />
      <View style={styles.nextButtonContainer}>
        <FullWidthButton
          text={resusText.burnManagment.next}
          onPress={onNext}
          style={styles.nextButton}
        />
      </View>
    </View>
  )

  const renderPreTreatment = () => (
    <PreTretment
      electricalBurn={electricalBurn}
      setElectricalBurn={setElectricalBurn}
      hours={hours}
      setHours={setHours}
      fluidVol={fluidVol}
      setFluidVol={setFluidVol}
      onNext={onPreNext}
      onBack={onPreBack}
    />
  )
  
  const renderPre20Treatment = () => (
    <TreatmentLessThanTwenty
      weight={getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit)}
      onBack={onTreatmentBack}
      onRestart={onRestart}
    />
  )

  const renderPost20Treatemnt = () => (
    <TreatmentPost20
      hours={hours}
      weight={getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit)}
      fluidVolume={fluidVol}
      electricalBurn={electricalBurn === 1}
      results={results}
      weightUnit={resuscitationStore.weightUnit}
      onBack={onTreatmentBack}
      onRestart={onRestart}
    />
  )

  const renderContent = (content: {title: string}, index: number, isActive: boolean, sections: any[]) => {
    if(sections.length === 3) {
      switch(index) {
        case 0: return renderCalculator();
        case 1: return renderPreTreatment();
        case 2: return renderPost20Treatemnt();
      }
    } else {
      switch(index) {
        case 0: return renderCalculator();
        case 1: return renderPre20Treatment();
      }
    }
    return <View />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM/>
      <PatientDetailsHeader
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weight={resuscitationStore.weight}
        weightUnit={resuscitationStore.weightUnit}
        convertWeight
        color={resuscitationStore.color}
        //@ts-ignore
        colorHex={colorHexMap[resuscitationStore.color]}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{resusText.burnManagment.title}</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <IntroSection
            age={resuscitationStore.age}
            unit={resuscitationStore.ageUnit}
          />
          <Accordion
            activeSections={activeSections}
            sections={sections}
            renderHeader={renderSectionHeader}
            renderContent={renderContent}
            onChange={onChangeSections}
            touchableComponent={TouchableOpacity}
            underlayColor="#ffffff00"
          />
        </ScrollView>
      </View>
      <KeyboardSpacer />
    </SafeAreaView>
  )
}))

export default BurnManagemnt;
