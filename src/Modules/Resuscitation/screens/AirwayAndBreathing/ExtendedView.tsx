import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import SmallInfoSection from 'UIToolkit/SmallInfoSection';
import { rapidSequenceIntubationConf, tracheostomyConf } from './conf';
import BulletList from 'UIToolkit/BulletList';
import DrugListItem from 'Modules/Resuscitation/components/DrugListItem';
import { MEDICATIONS } from './drugConf';

interface Props {
  conf: any;
  weight: number;
  age: string;
  ageUnit: string;
}

const ExtendedView = React.memo(({conf, weight, age, ageUnit}: Props) => {
  return (
    <View>
      {conf && conf.content.map((item: any) => (
        <SmallInfoSection
          key={item.lable}
          lable={item.lable}
          text={item.text}
        />
      ))}
      <Text style={styles.sectionTitle}>{resusText.shared.tracheostomy}</Text>
      {tracheostomyConf.map(confItem => (
        <View key={confItem.title} style={styles.tracheostomySection}>
          <Text style={styles.tracheostomyTitle}>{confItem.title}</Text>
          <BulletList
            items={confItem.list}
          />
        </View>
      ))}
      <Text style={styles.sectionTitle}>{resusText.shared.rapidIntubation}</Text>
      {rapidSequenceIntubationConf.map(item => (
        <SmallInfoSection
          key={item.text}
          lable={item.lable}
          text={item.text}
        />
      ))}
      <Text style={styles.sectionTitle}>{resusText.shared.medications}</Text>
      {MEDICATIONS.map(item => (
        <View key={item.Category}>
          <Text style={styles.drugCategory}>{item.Category}</Text>
          {item.CategoryItem.sort((i1, i2) => i1.Drug > i2.Drug ? 1 : -1).map((drug, index) => (
            <DrugListItem
              drug={drug}
              key={index.toString()}
              patientAge={age}
              patientWeight={weight}
              ageUnit={ageUnit}
              displayLowMedHighMaxDose
            />
          ))}
        </View>
      ))}
    </View>
  )
})

export default ExtendedView;
