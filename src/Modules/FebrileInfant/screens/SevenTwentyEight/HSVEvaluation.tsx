import React from 'react';
import { Image, Text, View } from 'react-native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import styles from '../../styles';
import { hsvHighRiskIc } from 'assets/img/febrileInfant';
import { ANTIBIOTIC_ANTIVIRAL_RECCOMENDATIONS } from './routes';
import { HSV_EVALUATION_TESTING_FROM, HSV_EVALUATION_TESTING_LESS_THAN_2_WEEKS } from './config';
import BulletList from 'UIToolkit/BulletList';
import SevenTwentyEightLayout from './SevenTwentyEightLayout';

const HSVEvaluation = React.memo(() => (
  <SevenTwentyEightLayout
    bottomButtonTitle={febrileText.sevenTwentyEight.antibioticAntiviral}
    bottomButtonRoute={ANTIBIOTIC_ANTIVIRAL_RECCOMENDATIONS}
  >
    <Text style={styles.titleText}>{febrileText.sevenTwentyEight.hsvEvaluation}</Text>
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.hsvEvaluationInfoFirst}</Text>
    <Image source={hsvHighRiskIc} style={styles.image} resizeMode="contain" />
    <Text style={[styles.regularText, styles.textMargin]}>{febrileText.sevenTwentyEight.hsvEvaluationInfoSecond}</Text>
    <BulletList
      lightText
      largeText
      items={HSV_EVALUATION_TESTING_FROM.map(item => ({text: item}))}
    />
    <Text style={[styles.centerOrangeText, styles.textMargin]}>{febrileText.sevenTwentyEight.lessThan2Weeks}</Text>
    <BulletList
      lightText
      largeText
      items={HSV_EVALUATION_TESTING_LESS_THAN_2_WEEKS.map(item => ({text: item}))}
    />
    <View style={styles.textMargin} />
    <Text style={styles.regularText}>{febrileText.sevenTwentyEight.hsvEvaluationInfoThird}</Text>
  </SevenTwentyEightLayout>
))

export default HSVEvaluation;
