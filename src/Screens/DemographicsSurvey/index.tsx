import React, { useState } from 'react';
import { PRIMARY_PRACTICE_OPTIONS, PROFESSIONAL_TRAINING_OPTIONS, QUALITY_IMPOROVEMENT_OPIONS } from 'data/staticValues/demographicSurvey';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {ScrollView, Text, View, SafeAreaView, TouchableOpacity, Platform} from 'react-native';
import Input from 'UIToolkit/Inputs/Input';
import Select from 'UIToolkit/Inputs/Select';
import { SelectOption } from 'UIToolkit/Inputs/@types';
import styles from './styles';

const DemographicsSurvey = React.memo(() => {
  const [primaryPractice, setPrimaryPractice] = useState('');
  const [professionalTraining, setProfessionalTraining] = useState('')
  const [years, setYears] = useState('');
  const [qualityImprovement, setQualityImprovement] = useState('');
  const [zipCode, setZipCode] = useState('');

  const onPracticeSelect = (item: SelectOption) => {
    setPrimaryPractice(item.value)
  }

  const onTrainingSelect = (item: SelectOption) => {
    setProfessionalTraining(item.value);
  }

  const onYearsChanged = (text: string) => {
    setYears(text.replace(/[^0-9]/g, ''));
  }

  const onZipCodeChanged = (text: string) => {
    setZipCode(text.replace(/[^0-9]/g, ''));
  }

  const onQualitySelected = (item: SelectOption) => {
    setQualityImprovement(item.value)
  }

  const onAccept = () => {
    //TODO
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Demographic Survey</Text>
          <Select
            label="What is your primary practice setting?"
            placeholder={"Select"}
            value={PRIMARY_PRACTICE_OPTIONS.find(item => item.value === primaryPractice)?.title}
            options={PRIMARY_PRACTICE_OPTIONS}
            onOptionPress={onPracticeSelect}
            style={styles.input}
          />
          <Select
            label="What professional training do you have?"
            placeholder={"Select"}
            value={PROFESSIONAL_TRAINING_OPTIONS.find(item => item.value === professionalTraining)?.title}
            options={PROFESSIONAL_TRAINING_OPTIONS}
            onOptionPress={onTrainingSelect}
            style={styles.input}
          />
          <Input
            label="How many years have you practiced?"
            placeholder="Years"
            onChange={onYearsChanged}
            value={years}
            keyboard="number-pad"
            maxLength={2}
            style={styles.input}
          />
          <Select
            label="What quality improvement project is your workplace participating in involving this app?"
            placeholder={"Select"}
            value={QUALITY_IMPOROVEMENT_OPIONS.find(item => item.value === qualityImprovement)?.title}
            options={QUALITY_IMPOROVEMENT_OPIONS}
            onOptionPress={onQualitySelected}
            style={styles.input}
          />
          <Input
            label="What is the zip code of your primary practice location?"
            placeholder="Zip Code (optional)"
            onChange={onZipCodeChanged}
            value={zipCode}
            keyboard="number-pad"
            maxLength={5}
            style={styles.input}
          />
        </View>
      </ScrollView>
      {Platform.OS === 'ios' && <KeyboardSpacer/>}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.acceptButton}
          activeOpacity={0.6}
          onPress={onAccept}
        >
          <Text style={styles.acceptButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

export default DemographicsSurvey;
