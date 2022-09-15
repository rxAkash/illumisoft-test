import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text, View } from 'react-native';
import styles from '../../../styles';
import TwentyNineSixtyLayout from '../TwentyNineSixtyLayout';
import { HIGH_RISK_ADMISSION_ANTIBIOTICS } from './conf';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';

const HighRiskHospitalAdmissionFirst = React.memo(() => (
  <TwentyNineSixtyLayout
    restartButton
  >
    <View>
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.title}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.infoFirst}{'\n'}</Text>
      <Text style={[styles.regularText, styles.boldText]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.warning}{'\n'}
      </Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.infoSecond}{'\n'}</Text>
      {HIGH_RISK_ADMISSION_ANTIBIOTICS.map(item => (
        <View key={item.title} style={styles.textMargin}>
          <Text style={styles.titleText}>{item.heading}</Text>
          <AntibioticDisplay item={item} />
        </View>
      ))}
      <Text style={[styles.regularText, styles.textMargin]}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.optionFirst}</Text>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.optionFirstInfo}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.optionSecond}</Text>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.optionSecondInfo}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.note}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionSecond.secondNote}
      </Text>
    </View>
  </TwentyNineSixtyLayout>
))

export default HighRiskHospitalAdmissionFirst;
