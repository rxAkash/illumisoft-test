import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import styles from '../../styles';
const DiagnosticTests = React.memo(() => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.titleText}>{febrileText.diagnosticTests.title}</Text>
      <Text style={styles.regularText}>{febrileText.diagnosticTests.infoTitle}{'\n'}</Text>
      <BulletList
        lightText
        largeText
        items={[{
          text: febrileText.diagnosticTests.item1
        },{
          text: febrileText.diagnosticTests.item2
        },{
          text: febrileText.diagnosticTests.item3
        },{
          text: febrileText.diagnosticTests.item4
        },{
          text: febrileText.diagnosticTests.item5
        },{
          text: febrileText.diagnosticTests.item6
        },{
          text: febrileText.diagnosticTests.item7
        }]}
      />
    </View>
  )
})

export default DiagnosticTests;
