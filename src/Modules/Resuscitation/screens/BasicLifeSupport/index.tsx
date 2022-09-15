/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, observer } from 'mobx-react';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';
import { getConf } from './conf';
import styles from './styles';

interface Props {
  resuscitationStore: ResuscitationStore;
}

const BasicLifeSupport = inject('resuscitationStore')(observer(({
  resuscitationStore
}: Props) => {

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
          <Text style={styles.title}>{resusText.resusPathways.basicLifeSupport}</Text>
          {getConf(resuscitationStore.age, resuscitationStore.ageUnit) && getConf(resuscitationStore.age, resuscitationStore.ageUnit).map((item, index) => (
            <View key={index.toString()}>
              {item.HeadTitle !== '' && (
                <Text style={styles.sectionTitle}>{item.HeadTitle}</Text>
              )}
              {item.description !== '' && (
                <Text style={styles.description}>{item.description}</Text>
              )}
              {item.content.map(item => (
                <SmallInfoSection
                  key={item.lable}
                  lable={item.lable}
                  text={item.text}
                />
              ))}
              {item.descriptionOther !== '' && (
                <Text style={styles.description}>{item.descriptionOther}</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default BasicLifeSupport;
