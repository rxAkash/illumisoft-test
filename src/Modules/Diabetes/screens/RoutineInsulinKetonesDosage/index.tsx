import React, { useState } from 'react';
import Analytics from 'appcenter-analytics';
import { Text, TextInput, View } from 'react-native';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import InfoSectionHeader from 'Modules/Diabetes/components/InfoSectionHeader';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import AnswerButton from 'UIToolkit/Inputs/AnswerButton';
import { calculateKetonesDosage, calculateRaiDoseForKetoneCarbs, TREATMENT_CONSIDERATIONS } from './conf';
import BulletList from 'UIToolkit/BulletList';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { DIABETES_HOME, DIABETES_KETOACIDOSIS_DIAGNOSIS } from 'Modules/Diabetes/navigation/routes';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import { dkaIc } from 'assets/img';
import InsulinInput from 'Modules/Diabetes/components/InsulinInput';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
  route: {
    params?: {
      fromGlucose?: boolean;
      shortVersion?: boolean;
    }
  }
}

const RoutineInsulinKetonesDosage = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation,
  route
}: Props) => {
  const [ketoneLevel, setKetoneLevel] = useState<number>();
  const [totalDailyDose, setTotalDailyDose] = useState(diabetesStore.insulin);
  const [carbRatio, setCarbRatio] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');

  const onNav = () => {
    navigation.navigate(DIABETES_KETOACIDOSIS_DIAGNOSIS)
  }

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
          <View style={styles.infoSection}>
            <InfoSectionHeader
              title={diabetesText.rapidInsulin.totalDailyDose}
              info={diabetesText.rapidInsulin.totalDoseInfo}
              infoTitle={diabetesText.rapidInsulin.totalDailyDose}
            />
            {!route.params?.fromGlucose ? (
              <Text style={[styles.medInfoTitle, {marginTop: 12}]}>{diabetesStore.insulin} units</Text>
            ) : (
              <InsulinInput
                value={totalDailyDose}
                setInsulin={setTotalDailyDose}
              />
            )}
          </View>
          <View style={styles.infoSection}>
            <Text style={[styles.sectionTitle, {marginBottom: 16}]}>{diabetesText.rapidInsulin.ketoneLevel}</Text>
            <View style={styles.row}>
              <AnswerButton
                text={diabetesText.rapidInsulin.moderate}
                onAnswer={() => setKetoneLevel(0)}
                selected={ketoneLevel === 0}
              />
              <AnswerButton
                text={diabetesText.rapidInsulin.large}
                onAnswer={() => setKetoneLevel(1)}
                selected={ketoneLevel === 1}
              />
            </View>
            <Text style={styles.sectionSubtitle}>
              {diabetesText.rapidInsulin.bloodKetones}
            </Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={[styles.sectionTitle, {marginBottom: 16}]}>
              {diabetesText.rapidInsulin.doseForKetones}
            </Text>
            <Text style={styles.ketoneDose}>
              {calculateKetonesDosage(totalDailyDose, ketoneLevel)} units
            </Text>
          </View>
        </Card>
        {route.params?.fromGlucose && !route.params?.shortVersion && (
          <Card>
            <View style={styles.infoSection}>
              <InfoSectionHeader
                title={diabetesText.rapidInsulin.carbRatio}
                info={diabetesText.rapidInsulin.carbInfo}
                infoTitle={diabetesText.rapidInsulin.carbInfoTitle}
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
            <View style={styles.infoSection}>
              <InfoSectionHeader
                title={diabetesText.rapidInsulin.carbDose}
                info={diabetesText.rapidInsulin.carbDoseInfo}
                infoTitle={diabetesText.rapidInsulin.carbDoseInfoTitle}
              />
              <Text style={styles.ketoneDose}>
                {calculateRaiDoseForKetoneCarbs(carbohydrate, carbRatio, calculateKetonesDosage(totalDailyDose, ketoneLevel).toString())} units
              </Text>
            </View>
          </Card>
        )}
        <Card>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>
              {diabetesText.rapidInsulin.treatmentConsiderations}
            </Text>
            <BulletList
              items={TREATMENT_CONSIDERATIONS}
            />
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.rapidInsulin.proceedToDka}
              onPress={onNav}
            />
            <HollowButton
              icon={dkaIc}
              text={diabetesText.diagnosisSupport.home}
              onPress={onHome}
              style={styles.cardButton}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default RoutineInsulinKetonesDosage;
