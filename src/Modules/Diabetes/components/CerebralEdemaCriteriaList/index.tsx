import { diabetesText } from 'Modules/Diabetes/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import Card from 'UIToolkit/Card';
import styles from './styles';

interface Props {
  diagnostic: string[];
  major: string[];
  minor: string[];
}

const CerebralEdemaCriteriaList = React.memo(({diagnostic, major, minor}: Props) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.sectionTitle}>
        {diabetesText.cerebralEdemaDiagnosis.diagnosticCriteriaMet}
      </Text>
      {diagnostic.length ? (
        <View>
          <Text style={styles.diagnosisCriteriaTitle}>
            {diagnostic.length} {diabetesText.cerebralEdemaDiagnosis.diagnostic}
          </Text>
          <BulletList
            items={diagnostic.map(item => ({text: item.replace('?', '')}))}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.diagnosisCriteriaTitle}>
            {diabetesText.cerebralEdemaDiagnosis.diagnostic}
          </Text>
          <BulletList
            items={[{text: 'None'}]}
          />
        </View>
      )}
      {major.length ? (
        <View>
          <Text style={styles.diagnosisCriteriaTitle}>
            {major.length} {diabetesText.cerebralEdemaDiagnosis.major}
          </Text>
          <BulletList
            items={major.map(item => ({text: item.replace('?', '')}))}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.diagnosisCriteriaTitle}>
            {diabetesText.cerebralEdemaDiagnosis.major}
          </Text>
          <BulletList
            items={[{text: 'None'}]}
          />
        </View>
      )}
      {minor.length ? (
        <View>
          <Text style={styles.diagnosisCriteriaTitle}>
            {minor.length} {diabetesText.cerebralEdemaDiagnosis.minor}
          </Text>
          <BulletList
            items={minor.map(item => ({text: item.replace('?', '')}))}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.diagnosisCriteriaTitle}>
            {diabetesText.cerebralEdemaDiagnosis.minor}
          </Text>
          <BulletList
            items={[{text: 'None'}]}
          />
        </View>
      )}
    </Card>
  )
})

export default CerebralEdemaCriteriaList;
