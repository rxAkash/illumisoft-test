/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { containerPadding } from 'UIToolkit/theme/styles';
import styles from './styles';
import { calculateExtendedResult, calculateResult } from './calculateResult';
import NbiView from './NbiView';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import ExtendedView from './ExtendedView';
import { getWeightInKg } from 'utils/weightConverter';
import { whiteColor } from 'UIToolkit/theme/colors';
import ElectricalTherapyButton from 'Modules/Resuscitation/components/ElectricalTherapyButton';

interface Props {
  resuscitationStore: ResuscitationStore;
  route: {
    params: {
      extended?: boolean;
    }
  }
}

const AirwayAndBreathing = inject('resuscitationStore')(observer(({
  resuscitationStore,
  route
}: Props ) => {
  const [config, setConfig] = useState<any>(null);
  
  useEffect(() => {
    if(route?.params?.extended) {
      setConfig(calculateExtendedResult(parseFloat(resuscitationStore.weight)))
    } else {
      setConfig(calculateResult(parseFloat(resuscitationStore.weight)))
    }
    return () => {
      setConfig(null)
    }
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: whiteColor}}>
      <GoBackHeader
        showBPM
        customElement={route?.params?.extended ? () => <ElectricalTherapyButton /> : undefined}
      />
      <PatientDetailsHeader
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weight={resuscitationStore.weight}
        weightUnit={resuscitationStore.weightUnit}
        convertWeight
        color={route?.params?.extended ? resuscitationStore.color : undefined}
        //@ts-ignore
        colorHex={route?.params?.extended ? colorHexMap[resuscitationStore.color] : undefined}
      />
      <ScrollView>
        <View style={containerPadding}>
          <Text style={styles.title}>{resusText.shared.airway}</Text>
          {!route?.params?.extended ? (
            <NbiView config={config} />
          ) : (
            <ExtendedView
              conf={config}
              weight={getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit)}
              age={resuscitationStore.age}
              ageUnit={resuscitationStore.ageUnit}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default AirwayAndBreathing;
