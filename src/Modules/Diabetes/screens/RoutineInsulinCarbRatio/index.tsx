import React, { useState } from 'react';
import Analytics from 'appcenter-analytics';
import { Text, View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import InfoSectionHeader from 'Modules/Diabetes/components/InfoSectionHeader';
import { TextInput } from 'react-native-gesture-handler';
import { roundToHalfUnit } from 'Modules/Diabetes/config/calculators';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { NavigationProp } from '@react-navigation/native';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';
import { dkaTransparentIc } from 'assets/img';

interface Props {
  navigation: NavigationProp<any>;
}

const RoutineInsulineCarbRatio = React.memo(({navigation}: Props) => {
  const [carbRatio, setCarbRatio] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');

  const calculateDose = () => {
    return roundToHalfUnit(parseFloat(carbohydrate) / parseFloat(carbRatio))
  }

  const onNav = () => {
    Analytics.trackEvent("Guideline Restart", {guideline: 'Diabetes'})
    navigation.reset({
      routes: [{name: DIABETES_HOME}],
      routeNames: [DIABETES_HOME]
    })
  }

  return (
    <DiabetesLayout
      title={diabetesText.rapidInsulin.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.carbRatio}
              info={diabetesText.rapidInsulin.carbInfo}
              infoTitle={diabetesText.rapidInsulin.carbInfoTitle}
            />
            <View style={styles.inputContainer}>
              <Text>1: </Text>
              <TextInput
                placeholder='XX'
                style={[styles.input, {width: '50%'}]}
                maxLength={4}
                keyboardType='number-pad'
                value={carbRatio}
                onChangeText={newText=>{
                  if(parseInt(newText)>0){
                    setCarbRatio(newText);
                  }
                  else{
                    setCarbRatio('');
                  }
                }}
              />
            </View>
          </View>
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.carbohydrate}
              info={diabetesText.rapidInsulin.carbohydrateInfo}
              infoTitle={diabetesText.rapidInsulin.carbohydrateInfoTitle}
            />
            <View style={styles.inputContainer}>
              <TextInput
                placeholder='g'
                style={styles.input}
                maxLength={3}
                keyboardType='number-pad'
                value={carbohydrate}
                onChangeText={setCarbohydrate}
              />
            </View>
          </View>
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.carbDose}
              info={diabetesText.rapidInsulin.carbDoseInfo}
              infoTitle={diabetesText.rapidInsulin.carbDoseInfoTitle}
            />
            <Text style={styles.ketoneDose}>
              {carbRatio && carbohydrate ? calculateDose() : '-'} units
            </Text>
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.diagnosisSupport.home}
              icon={dkaTransparentIc}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
})

export default RoutineInsulineCarbRatio;
