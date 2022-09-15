/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NavigationProp } from '@react-navigation/native';
import { inject, observer } from 'mobx-react';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from 'UIToolkit/Card';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';
import { whiteColor } from 'UIToolkit/theme/colors';
import { DEFIBRILLATION_DOSAGE, DEFIBRILLATION_DOSAGE_ADULT, SYNCRONIZED_CARDIOVERSION } from './conf';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
  navigation: NavigationProp<any>;
}

const ElectricalTherapy = inject('resuscitationStore')(observer(({
  resuscitationStore
}: Props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: whiteColor}}>
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
          <Text style={styles.sectionTitle}>{resusText.electricalTherapy.title}</Text>
          <Card style={styles.card}>
            <Text style={styles.subtitle}>{resusText.electricalTherapy.indications}</Text>
            <Text style={styles.infoText}>{resusText.electricalTherapy.indicationsInfo}</Text>
            <Text style={styles.subtitle}>{resusText.electricalTherapy.defibrillation}</Text>
            <Text style={styles.title}>{resusText.electricalTherapy.child}</Text>
            <View>
              {DEFIBRILLATION_DOSAGE.map(item => (
                <SmallInfoSection
                  key={item.lable}
                  lable={item.lable}
                  text={item.text}
                />
              ))}
            </View>
            <Text style={styles.title}>{resusText.electricalTherapy.adult}</Text>
            <View>
              {DEFIBRILLATION_DOSAGE_ADULT.map(item => (
                <SmallInfoSection
                  key={item.lable}
                  lable={item.lable}
                  text={item.text}
                />
              ))}
              <Text style={styles.warning}>{resusText.electricalTherapy.warning}</Text>
            </View>
            <Text style={styles.subtitle}>{resusText.electricalTherapy.synchronizedCardio}</Text>
            <View>
              {SYNCRONIZED_CARDIOVERSION.map(item => (
                <SmallInfoSection
                  key={item.lable}
                  lable={item.lable}
                  text={item.text}
                />
              ))}
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default ElectricalTherapy;
