import React from 'react';
import { inject, observer } from 'mobx-react';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { containerPadding } from 'UIToolkit/theme/styles';
import styles from './styles';
import Card from 'UIToolkit/Card';
import { CIRCULATION_CONFIG, COMPRESSIONS_CONFIG } from './conf';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';

interface Props {
  resuscitationStore: ResuscitationStore;
}

const Compressions = inject('resuscitationStore')(observer(({
  resuscitationStore
}: Props ) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM />
      <PatientDetailsHeader
        weight={resuscitationStore.weight}
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weightUnit={resusText.shared.kg}
      />
      <ScrollView>
        <View style={containerPadding}>
          <Text style={styles.title}>{resusText.shared.comp}</Text>
          <Card style={styles.card}>
            <View>
              {COMPRESSIONS_CONFIG.map(item => (
                <SmallInfoSection
                  key={item.lable.toString()}
                  {...item}
                />
              ))}
            </View>
            <Text style={styles.subtitle}>{CIRCULATION_CONFIG.title}</Text>
            <View>
              {CIRCULATION_CONFIG.content.map(item => (
                <SmallInfoSection
                  key={item.lable}
                  {...item}
                />
              ))}
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default Compressions;
