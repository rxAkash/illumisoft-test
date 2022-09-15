import { NavigationProp } from '@react-navigation/native';
import { dkaTransparentIc } from 'assets/img';
import { inject, observer } from 'mobx-react';
import Analytics from 'appcenter-analytics';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import GlucoseInput from 'Modules/Diabetes/components/GlucoseInput';
import InfoSectionHeader from 'Modules/Diabetes/components/InfoSectionHeader';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import { DIABETES_HOME } from 'Modules/Diabetes/navigation/routes';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import Card from 'UIToolkit/Card';
import YesNoButtons from 'UIToolkit/Inputs/YesNoButtons';
import styles from '../../styles';
import { calcualteRapidActingInsulinDose, calculateRaiDoseWithoutCarbInfo } from './calculator';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
  route: {
    params?: {
      shortVersion?: boolean;
    }
  }
}

const RoutineInsulinCarb3Hours = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation,
  route
}: Props) => {
  const [carbRatio, setCarbRatio] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');
  const [bg, setBg] = useState(diabetesStore.glucose);
  const [targetBg, setTargetBg] = useState('120');
  const [was3Hours, setWas3Hours] = useState<number>();
  const [isf, setIsf] = useState('');

  const onHome = () => {
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
          {!route.params?.shortVersion ? (
            <>
              <View style={styles.infoSection}>
                <InfoSectionHeader
                  title={diabetesText.rapidInsulin.carbRatio}
                  infoTitle={diabetesText.rapidInsulin.carbInfoTitle}
                  info={diabetesText.rapidInsulin.carbInfo}
                />
                <View style={styles.inputContainer}>
                  <TextInput
                    placeholder='XX'
                    style={styles.input}
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
            </>
          ) : <View />}
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.currentBG}
              info={diabetesText.rapidInsulin.curretnBGInfo}
              infoTitle={diabetesText.rapidInsulin.currentBGInfoTitle}
            />
            <GlucoseInput
              value={bg}
              setGlucose={setBg}
            />
          </View>
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.targetBG}
              info={diabetesText.rapidInsulin.targetBGInfo}
              infoTitle={diabetesText.rapidInsulin.targetBGInfoTitle}
            />
            <GlucoseInput
              value={targetBg}
              setGlucose={setTargetBg}
            />
          </View>
        </Card>
        <Card>
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.threeHours}
              info={diabetesText.rapidInsulin.activeInsulinInfo}
              infoTitle={diabetesText.rapidInsulin.activeInsulinTime}
            />
            <YesNoButtons
              answer={was3Hours}
              onAnswer={setWas3Hours}
            />
          </View>
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.inulinSensetivity}
              info={diabetesText.rapidInsulin.inulinSensetivityInfo}
              infoTitle={diabetesText.rapidInsulin.inulinSensetivityInfoTitle}
            />
            <GlucoseInput
              value={isf}
              setGlucose={setIsf}
            />
          </View>
          {was3Hours === 1 ? (
            <View style={styles.infoSection}>
              <InfoSectionHeader
                title={diabetesText.rapidInsulin.carbDose}
                info={diabetesText.rapidInsulin.rapidInsulinInfo}
                infoTitle={diabetesText.rapidInsulin.rapidInsulin}
              />
              <Text style={styles.ketoneDose}>
                {route.params?.shortVersion ? calculateRaiDoseWithoutCarbInfo(bg, targetBg, isf)
                  : calcualteRapidActingInsulinDose(carbohydrate, carbRatio, bg, targetBg, isf)} units
              </Text>
            </View>
          ) : was3Hours === 0 ? (
            <View style={styles.infoSection}>
              <View style={styles.warningCard}>
                <Text style={styles.warningText}>
                  {diabetesText.rapidInsulin.warningInsulin}
                </Text>
              </View>
            </View>
          ) : <View />}
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.diagnosisSupport.home}
              onPress={onHome}
              icon={dkaTransparentIc}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default RoutineInsulinCarb3Hours;
