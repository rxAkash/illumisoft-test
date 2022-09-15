/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NavigationProp } from '@react-navigation/core';
import { inject, observer } from 'mobx-react';
import CardiovascularDrips from 'Modules/Resuscitation/components/CardiovascularDrips';
import DrugListItem from 'Modules/Resuscitation/components/DrugListItem';
import ElectricalTherapyButton from 'Modules/Resuscitation/components/ElectricalTherapyButton';
import { getDrugByName } from 'Modules/Resuscitation/config/drugConfig';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { whiteColor } from 'UIToolkit/theme/colors';
import { getWeightInKg } from 'utils/weightConverter';
import { FLUIDS_CONF } from './fluidConf';
import { FLUID_RESUS_TEXT } from './staticText';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const Circulation = inject('resuscitationStore')(observer(({
  resuscitationStore
}: Props) => {
  const drugs = [
    getDrugByName("Atropine Sulfate"),
    getDrugByName("Bicarbonate"),
    getDrugByName("Dextrose (Glucose) Pediatric"),
    getDrugByName("Epinephrine")
  ]

  const fluidsConf = getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit) > 70 ?
    FLUIDS_CONF.find(item => item.weightValue === '70') :
    FLUIDS_CONF.find(item => 
      item.weightValue === getWeightInKg(
        resuscitationStore.weight,
        resuscitationStore.weightUnit
      ).toString()
    )

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: whiteColor}}>
      <GoBackHeader
        showBPM
        customElement={() => <ElectricalTherapyButton />}
      />
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
          <Text style={styles.sectionTitle}>{resusText.circulaton.codeDrugs}</Text>
          {drugs.map(item => item ? (
            <DrugListItem
              key={item.Drug}
              drug={item}
              patientWeight={getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit)}
              patientAge={resuscitationStore.age}
              ageUnit={resuscitationStore.ageUnit}
            />
          ) : null)}
          {fluidsConf && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{resusText.circulaton.fluidResus}</Text>
              <View style={styles.fluidsInfoContainer}>
                <Text style={styles.fluidsTitle}>{resusText.circulaton.maintanenceFluids}</Text>
                <Text style={styles.fluidValue}>{fluidsConf.maintenanceFluids} mL/hr</Text>
              </View>
              <View style={styles.fluidsInfoContainer}>
                <Text style={styles.fluidsTitle}>{resusText.circulaton.bolus20}</Text>
                <Text style={styles.fluidValue}>{fluidsConf.bolus20} mL</Text>
              </View>
              <View style={styles.fluidsInfoContainer}>
                <Text style={styles.fluidsTitle}>{resusText.circulaton.bolus10}</Text>
                <Text style={styles.fluidValue}>{fluidsConf.bolus10} mL</Text>
              </View>
              <View style={styles.staticTextContainer}>
                {FLUID_RESUS_TEXT}
              </View>
            </View>
          )}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{resusText.circulaton.cardioDrips}</Text>
            <CardiovascularDrips
              patientWeightKg={getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default Circulation;
