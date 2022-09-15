import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';
import { NRPFluids } from './conf';
import styles from './styles';

interface Props {
  weight: number;
}

const MedicationsAndFluids = React.memo(({weight}: Props) => {
  const config = NRPFluids.find(item => item.weight === weight);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resusText.drugDosing.medicationsAndFluids}</Text>
      {config && <Text style={styles.subtitle}>{resusText.drugDosing.fluidResus}</Text>}
      {config && config.content.map(item => (
        <SmallInfoSection
          key={item.lable}
          {...item}
        />
      ))}
    </View>
  )
})

export default MedicationsAndFluids;