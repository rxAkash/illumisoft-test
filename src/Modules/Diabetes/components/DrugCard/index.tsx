import React from 'react';
import { Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import { DOSAGE_TYPE } from './config';
import LowModHigh from './LowModHigh';
import SingleDose from './SingleDose';
import styles from './styles';

interface Props {
  config: any;
}

const DrugCard = React.memo(({config}: Props) => {
  return (
    <View style={[styles.container, {borderLeftColor: config.administrationTypeColor}]}>
      <View style={styles.titleContainer}>
        <View style={[styles.indicationContainer, {backgroundColor: config.administrationTypeColor}]}>
          <Text style={styles.indicationText}>{config.administrationType}</Text>
        </View>
        <Text style={styles.titleText}>{config.treatmentTitle}</Text>
      </View>
      {config.administrationConcentration !== undefined && (
        <View style={styles.concentrationContainer}>
          <Text style={styles.regularText}>Administer</Text>
          <Text style={styles.regularText}>Concentration -{' '}
            <Text style={styles.dosageTitle}>{config.administrationConcentration}</Text>
          </Text>
        </View>
      )}
      {config.dosageType === DOSAGE_TYPE.LOW_MOD_HIGH ? (
        <LowModHigh conf={config}/>
      ) : (
        <SingleDose conf={config}/>
      )}
      {config.recommendationText !== undefined && (
        <View style={styles.sectionContainer}>
          <Text style={styles.regularText}>{config.recommendationText}</Text>
        </View>
      )}
      <View style={styles.sectionContainer}>
        <BulletList
          items={config.comments}
        />
      </View>
    </View>
  )
})

export default DrugCard;
