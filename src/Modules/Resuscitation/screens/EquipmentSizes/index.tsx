/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, observer } from 'mobx-react';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';
import { EXTENDED_AIRWAY_DEVICES } from '../AirwayAndBreathing/conf';
import { EQUIPMENT_SIZES, PIV_SIZES } from './conf';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
}


const EquipmentSizes = inject('resuscitationStore')(observer(({
  resuscitationStore
}: Props) => {
  const [airwayConf, setAirwayConf] = useState<any>(null);
  const [eqConf, setEqConf] = useState<any>(null);
  const [pivConf, setPivConf] = useState<any>(null);

  useEffect(() => {
    setAirwayConf(getAirwayConf());
    setEqConf(getEquipmentConf());
    setPivConf(getPivConf())
  }, [])

  const getAirwayConf = () => {
    const index = EXTENDED_AIRWAY_DEVICES.findIndex(item => 
      item.weightKg.min < parseFloat(resuscitationStore.weight)
      && item.weightKg.max > parseFloat(resuscitationStore.weight)
    )
    if(index >= 0) {
      return EXTENDED_AIRWAY_DEVICES[index].content
    }
    return null;
  }

  const getEquipmentConf = () => {
    const index = EQUIPMENT_SIZES.findIndex(item => 
      item.weightKg.min < parseFloat(resuscitationStore.weight)
      && item.weightKg.max > parseFloat(resuscitationStore.weight)
    )
    if(index >= 0) {
      return EQUIPMENT_SIZES[index].content
    }
    return null;
  }

  const getPivConf = () => {
    const index = PIV_SIZES.findIndex(item => 
      item.weightKg.min < parseFloat(resuscitationStore.weight)
      && item.weightKg.max > parseFloat(resuscitationStore.weight)
    )
    if(index >= 0) {
      return PIV_SIZES[index].content
    }
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM />
      <PatientDetailsHeader
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weight={resuscitationStore.weight}
        weightUnit={resusText.shared.kg}
        convertWeight
        color={resuscitationStore.color}
        //@ts-ignore
        colorHex={colorHexMap[resuscitationStore.color]}
      />
      <ScrollView style={{flex: 1}} keyboardDismissMode="interactive">
        <View style={styles.container}>
          {airwayConf && (
            <View>
              <Text style={styles.title}>{resusText.shared.airway}</Text>
              {airwayConf.map((item: any, index: number) => (
                <SmallInfoSection
                  {...item}
                  key={index.toString()}
                />
              ))}
            </View>
          )}
          {eqConf && (
            <View>
              <Text style={styles.title}>{resusText.resusPathways.equipemntSizes}</Text>
              {eqConf.map((item: any, index: number) => (
                <SmallInfoSection
                  {...item}
                  key={index.toString()}
                />
              ))}
            </View>
          )}
          {pivConf && (
            <View>
              <Text style={styles.title}>{resusText.shared.pivSizes}</Text>
              {pivConf.map((item: any, index: number) => (
                <SmallInfoSection
                  {...item}
                  key={index.toString()}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default EquipmentSizes;
