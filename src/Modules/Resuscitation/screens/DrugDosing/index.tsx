/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import Analytics from 'appcenter-analytics';
import { inject, observer } from 'mobx-react';
import { ResuscitationStore } from 'Modules/Resuscitation/stores/ResuscitationStore';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import PatientDetailsHeader from 'UIToolkit/PatinetDetailsHeader';
import { resusText } from 'Modules/Resuscitation/config/strings';
import { whiteColor } from 'UIToolkit/theme/colors';
import MedicationsAndFluids from './components/MedicationsAndFluids';
import styles from './styles';
import { closeIc, searchIc } from 'assets/img';
import { TextInput } from 'react-native-gesture-handler';
import DrugListItem from 'Modules/Resuscitation/components/DrugListItem';
import { NBI_DRUGS, RESUS_DRUGS } from 'Modules/Resuscitation/config/drugConfig';
import { colorHexMap } from 'Modules/Resuscitation/config/sharedConf';
import { getWeightInKg } from 'utils/weightConverter';

interface Props {
  resuscitationStore: ResuscitationStore;
  route: {
    params?: {
      fromNewlyBorn?: boolean;
    }
  }
}

const DrugDosing = inject('resuscitationStore')(observer(({
  resuscitationStore,
  route
}: Props ) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [drugs, setDrugs] = useState(route.params?.fromNewlyBorn ? NBI_DRUGS : RESUS_DRUGS);

  useEffect(() => {
    if(route.params?.fromNewlyBorn) {
      const newDrugs = NBI_DRUGS.filter(item => item.Drug.toLowerCase().includes(searchText.toLowerCase()))
      setDrugs(newDrugs);
    } else {
      const newDrugs = RESUS_DRUGS.filter(item => item.Drug.toLowerCase().includes(searchText.toLowerCase()))
      setDrugs(newDrugs)
    }
    
  }, [searchText])

  const hideSearch = () => {
    setShowSearch(false);
    setSearchText('')
  }

  const logSearch = () => {
    if(searchText) {
      Analytics.trackEvent('DDS', {search: searchText})
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader showBPM />
      <PatientDetailsHeader
        weight={resuscitationStore.weight}
        ageDisplay={resuscitationStore.getAgeDisplay()}
        weightUnit={resusText.shared.kg}
        convertWeight={!route.params?.fromNewlyBorn}
        color={!route?.params?.fromNewlyBorn ? resuscitationStore.color : undefined}
        //@ts-ignore
        colorHex={!route?.params?.fromNewlyBorn ? colorHexMap[resuscitationStore.color] : undefined}
      />
      <ScrollView style={{backgroundColor: whiteColor}}>
        {route.params?.fromNewlyBorn && (
          <View>
            <MedicationsAndFluids weight={parseFloat(resuscitationStore.weight)}/>
          </View>
        )}
        <View>
          {showSearch ? (
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Search..."
                style={styles.input}
                onChangeText={setSearchText}
                onBlur={logSearch}
              />
              <Pressable hitSlop={25} onPress={hideSearch}>
                <Image source={closeIc} style={styles.searchIc} />
              </Pressable>
            </View>
          ) : (
            <View style={styles.titleContainer}>
              <View style={styles.placeholder} />
              <Text style={styles.title}>{resusText.drugDosing.drugDosing}</Text>
              <Pressable hitSlop={25} onPress={() => {setShowSearch(true)}}>
                <Image source={searchIc} style={styles.searchIc} />
              </Pressable>
            </View>
          )}
          {route.params?.fromNewlyBorn && (
            <Text style={styles.redWarning}>{resusText.drugDosing.disclaimer}</Text>
          )}
          {drugs.sort((i1, i2) => i1.Drug > i2.Drug ? 1 : -1).map(item => (
            <DrugListItem
              displayLowMedHighMaxDose={!route.params?.fromNewlyBorn}
              drug={item}
              key={item.Drug}
              patientWeight={getWeightInKg(resuscitationStore.weight, resuscitationStore.weightUnit)}
              patientAge={resuscitationStore.age}
              ageUnit={resuscitationStore.ageUnit}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}))

export default DrugDosing;


