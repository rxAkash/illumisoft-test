import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text, View } from 'react-native';
import styles from '../../../styles';
import TwentyNineSixtyLayout from '../TwentyNineSixtyLayout';
import { HIGH_RISK_ADMISSION_ANTIBIOTICS } from './conf';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';

const HighRiskHospitalAdmissionThird = React.memo(() => (
  <TwentyNineSixtyLayout
    restartButton
  >
    <View>
      <Text style={styles.titleText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.title}</Text>
      <Text style={styles.regularText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.infoFirst}{'\n'}</Text>
      {HIGH_RISK_ADMISSION_ANTIBIOTICS.map(item => (
        <View key={item.title} style={styles.textMargin}>
          <Text style={styles.titleText}>{item.heading}</Text>
          <AntibioticDisplay item={item} />
        </View>
      ))}
      <Text style={[styles.regularText, styles.boldText]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.warning}{'\n'}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.optionFirst}</Text>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.optionFirstInfo}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        <Text style={styles.underlineText}>{febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.optionSecond}</Text>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.optionSecondInfo}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.note}
      </Text>
      <Text style={[styles.regularText, styles.textMargin]}>
        {febrileText.twentyNineSixty.highRiskHospitalAdmissionThird.secondNote}
      </Text>
    </View>
  </TwentyNineSixtyLayout>
))

export default HighRiskHospitalAdmissionThird;
