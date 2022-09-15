import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles';

export const CARD_SECTIONS = [
  {
    title: 'Considerations during hospital observation',
    items: [
      {
        text: 'Observed repeated events',
      },
      {
        text: 'Better characterization of events',
      },
      {
        text: 'Feeding evaluation by feeding specialist',
      }
    ]
  },
  {
    title: 'Evaluations to consider based on event characteristics',
    items: [
      {
        text: <Text style={styles.regularText}><Text style={styles.infoText}>Concern for obstructive apnea:{'\n'}</Text>ENT consultation for airway evaluation</Text>,
      },
      {
        text: 'Pulmononology consultation',
      },
      {
        text: 'Polysomnography',
      },
      {
        text: <Text style={styles.regularText}><Text style={styles.infoText}>Concern for child abuse:{'\n'}</Text>Head MRI/CT</Text>,
        subitems: [{
          text: 'Rapid MRI or CT preferred to avoid sedation risks'
        }]
      },
      {
        text: 'Pulmonary consultation',
      },
      {
        text: <Text style={styles.regularText}><Text style={styles.infoText}>Concern for episodic hypoglycemia or acidosis:{'\n'}</Text>Biochemical genetics consult</Text>,
      },
      {
        text: <Text style={styles.regularText}><Text style={styles.infoText}>Concern for seizures:{'\n'}</Text>Neurology consult and EEG</Text>,
      },
      {
        text: <Text style={styles.regularText}><Text style={styles.infoText}>Concern for arrhythmia or CHD:{'\n'}</Text>Neurology consult and EEG</Text>,
      }
    ]
  }
]