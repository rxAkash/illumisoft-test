import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text, View } from 'react-native';
import styles from '../../../styles';
import TwentyNineSixtyLayout from '../TwentyNineSixtyLayout';

const HighRiskHospitalAdmissionFirst = React.memo(() => (
  <TwentyNineSixtyLayout
    restartButton
  >
    <View>
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.title}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.firstInfo}{'\n'}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.secondInfo}{'\n'}</Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.firstOption}</Text>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.firstOptionInfo}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.secondOption}</Text>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.secondOptionInfo}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.note}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionFirst.secondNote}
      </Text>
    </View>
  </TwentyNineSixtyLayout>
))

export default HighRiskHospitalAdmissionFirst;
