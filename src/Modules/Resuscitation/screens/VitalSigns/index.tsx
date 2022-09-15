/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, observer } from 'mobx-react';
import { colorHexMap, YEARS } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GlasgowCommaCalculator from 'UIToolkit/GlasgowComaScore';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';
import { getAgeInYears } from 'utils/ageConverter';
import { getWeightInKg } from 'utils/weightConverter';
import { BP_SYSTOLIC, EXPECTED_VITALS, NEONAL_VITALS } from './conf';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
}

const VitalSigns = inject('resuscitationStore')(observer(({
  resuscitationStore
}: Props) => {
  const [vitalsConf, setVitalsConf] = useState<any>(null);

  useEffect(() => {
    getVitalsConf();
  }, [])

  const getVitalsConf = () => {
    if(parseInt(resuscitationStore.age, 10) > 16 && resuscitationStore.ageUnit === YEARS) {
      setVitalsConf(EXPECTED_VITALS[EXPECTED_VITALS.length - 1]);
    } else {
      const conf = EXPECTED_VITALS.find(item => {
        const itemAge = item.age.split(' ')[0];
        const itemUnit = item.age.split(' ')[1];
        return itemAge === resuscitationStore.age && itemUnit === resuscitationStore.ageUnit
      })
      setVitalsConf(conf);
    }
  }

  const showAdjustedBPSystolic = () => {
    return getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit) <= 3.5
  }

  const getAdjustedBPSystolic = () => {
    return NEONAL_VITALS.find(item => item.weight === getWeightInKg(
      resuscitationStore.weight, resuscitationStore.weightUnit)
    )?.systolicValues.reduce((acc, item ) => acc += '\n' + item);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM />
      <PatientDetailsHeader
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weight={resuscitationStore.weight}
        weightUnit={resuscitationStore.weightUnit}
        convertWeight
        color={resuscitationStore.color}
        //@ts-ignore
        colorHex={colorHexMap[resuscitationStore.color]}
      />
      <ScrollView style={{flex: 1}} keyboardDismissMode="interactive">
        <View style={styles.container}>
          <Text style={styles.title}>{resusText.vitalSigns.title}</Text>
          <Card style={styles.card}>
            <Text style={styles.sectionTitle}>{resusText.vitalSigns.expectedVitals}</Text>
            {vitalsConf && (
              <View>
                {vitalsConf.description.map((item: any) => item.label === BP_SYSTOLIC && showAdjustedBPSystolic() ? (
                  <SmallInfoSection
                    key={item.label}
                    lable={item.label}
                    text={getAdjustedBPSystolic() || item.values[0]}
                  />
                ) : (
                  <SmallInfoSection
                    key={item.label}
                    lable={item.label}
                    text={item.values[0]}
                  />
                ))}
              </View>
            )}
            <Text style={styles.sectionTitle}>{resusText.vitalSigns.avpu}</Text>
            <View>
              <Text style={styles.avpuText}><Text style={styles.avpuRed}>A</Text>lert</Text>
              <Text style={styles.avpuText}>Responds to <Text style={styles.avpuRed}>V</Text>oice</Text>
              <Text style={styles.avpuText}>Responds to <Text style={styles.avpuRed}>P</Text>ain</Text>
              <Text style={styles.avpuText}><Text style={styles.avpuRed}>U</Text>nresponsive</Text>
            </View>
            <GlasgowCommaCalculator
              age={getAgeInYears(resuscitationStore.age, resuscitationStore.ageUnit)}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default VitalSigns;
