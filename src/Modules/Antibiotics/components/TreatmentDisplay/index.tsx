import { antibioticsText } from 'Modules/Antibiotics/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import DrugButton from './DrugButton';
import styles from './styles';

interface Props {
  config: any;
  onDrugPress: (drugInfo: any) => void;
}

const TreatmentDisplay = React.memo(({config, onDrugPress}: Props) => {
  return (
    <View>
      {config.treatment && (
        <View style={styles.treatmentContainer}>
          <Text style={styles.boldText}>{config.treatment}</Text>
          {config.duration && config.duration.map((item: string) => (
            <Text style={styles.regularText} key={item}>{item}</Text>
          ))}
          {config.alternateTreatment && (
            <View>
              <Text style={styles.boldText}>OR</Text>
              <Text style={styles.boldText}>{config.alternateTreatment}</Text>
              {config.alternateDuration && (
                <Text style={styles.regularText}>{config.alternateDuration}</Text>
              )}
            </View>
          )}
          {config.additionalTreatment && <Text style={styles.boldText}>{config.additionalTreatment}</Text>}
          {config.secondary && (
            <View style={styles.secondary}>
              <Text style={styles.boldText}>{config.secondary.title}</Text>
              <Text style={styles.boldText}>{config.secondary.medicine}</Text>
              <Text style={styles.regularText}>{config.secondary.duration}</Text>
            </View>
          )}
        </View>
      )}
      <View style={styles.listContainer}>
        {config.description && <Text style={[styles.boldText, styles.drugListTitle]}>{config.description}</Text>}
        {config.expanded.map((item: any) => (
          <DrugButton drugInfo={item} key={item.medicine} onDrugPress={onDrugPress} />
        ))}
      </View>
      {config.alternative && (
        <View style={styles.listContainer}>
          <Text style={[styles.boldText, styles.drugListTitle]}>
            {antibioticsText.shared.alternative}
            {config.alternative[0]?.infoDetail}
          </Text>
          {config.alternativeSubHeader && (
            <Text style={[styles.regularText, styles.drugListTitle]}>{config.alternativeSubHeader}</Text>
          )}
          {config.alternative.map((item: any) => (
            <DrugButton drugInfo={item} key={item.medicine} onDrugPress={onDrugPress} />
          ))}
        </View>
      )}
    </View>
  )
})

export default TreatmentDisplay;
