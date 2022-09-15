import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { Text, View } from 'react-native';
import styles from '../../../styles';
import SixtyNineNinetyLayout from "../SixtyNineNinetyLayout";
import { HIGH_RISK_ADMISSION_ANTIBIOTICS } from './conf';
import AntibioticDisplay from 'Modules/FebrileInfant/components/AntibioticDisplay';
import { primaryColor } from 'UIToolkit/theme/colors';
import { HOSPITAL_ADMISSION_LIST } from '../HospitalAdmission/conf';
import BulletList from 'UIToolkit/BulletList';

const HighRiskHospitalAdmissionSecond = React.memo(() => (
  <>
    <SixtyNineNinetyLayout
    >
      <Text style={styles.titleText}>{febrileText.sixtyOneNinety.hospitalAdmission.headingTitle}</Text>
      <Text style={[styles.regularText]}>
        {febrileText.sixtyOneNinety.hospitalAdmission.headingSubText}
        {"\n"}
      </Text>

      <Text style={[styles.regularText,{fontWeight: "700"}]}>
        {febrileText.sixtyOneNinety.hospitalAdmission.secondaryHeaderText}
        {"\n"}
      </Text>
      <Text style={[styles.regularText]}>
        {febrileText.sixtyOneNinety.hospitalAdmission.secondarySubText}
        {"\n"}
      </Text>

      <Text style={[styles.regularText,{fontWeight: "700", color:primaryColor,  lineHeight:15}]}>
        {febrileText.sixtyOneNinety.hospitalAdmission.thirdText}
        {"\n"}
      </Text>
      <Text style={styles.regularText}>
        {febrileText.sixtyOneNinety.hospitalAdmission.thirdTextDesc}
        {"\n"}
      </Text>

      <Text style={[styles.regularText,{fontWeight: "700", color:primaryColor, lineHeight:15}]}>
        {febrileText.sixtyOneNinety.hospitalAdmission.fourthText}
        {"\n"}
      </Text>
      <Text style={styles.regularText}>
        {febrileText.sixtyOneNinety.hospitalAdmission.fourthTextDesc}
        {"\n"}
      </Text>

      <BulletList
        lightText
        largeText
        items={HOSPITAL_ADMISSION_LIST}
      />
    </SixtyNineNinetyLayout>
  </>
))

export default HighRiskHospitalAdmissionSecond;
