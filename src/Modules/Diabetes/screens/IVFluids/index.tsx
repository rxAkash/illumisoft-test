import React from 'react';
import { inject, observer } from 'mobx-react';
import { Text, View } from 'react-native';
import { DiabetesStore } from 'Modules/Diabetes/stores/DiabetesStore';
import DiabetesLayout from 'Modules/Diabetes/components/DiabetesLayout';
import { diabetesText } from 'Modules/Diabetes/config/strings';
import styles from '../../styles';
import Card from 'UIToolkit/Card';
import { NavigationProp } from '@react-navigation/native';
import { calculateMaintanenceRate, calculateMaintenanceRateOnePointFive, calculateSuggestedVolume } from '../../config/calculators';
import BulletList from 'UIToolkit/BulletList';
import { RECOMMEND_BOTH_BAGS, TWO_IVF_BAGS } from './conf';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import { INSULIN_QUESTION } from 'Modules/Diabetes/navigation/routes';

interface Props {
  diabetesStore: DiabetesStore;
  navigation: NavigationProp<any>;
}

const IVFluids = inject('diabetesStore')(observer(({
  diabetesStore,
  navigation
}: Props) => {

  const onNav = () => {
    navigation.navigate(INSULIN_QUESTION)
  }

  return (
    <DiabetesLayout
      title={diabetesText.ivFluids.title}
      showPatientDetailsHeader
    >
      <View style={styles.body}>
        <Card>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.ivFluids.recommendations}</Text>
            <Text style={styles.sectionSubtitle}>{diabetesText.ivFluids.recommendationsInfo}</Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>{diabetesText.ivFluids.suggestedVolume}
              <Text style={styles.medValue}>
                {calculateSuggestedVolume(parseFloat(diabetesStore.weight))} mL
              </Text>
            </Text>
            <Text style={styles.sectionHint}>{diabetesText.ivFluids.max}</Text>
            <Text style={[styles.sectionHint, {marginBottom: 18}]}>{diabetesText.ivFluids.followBolus}</Text>
            <Text style={styles.sectionTitle}>{diabetesText.ivFluids.maintanenceRate}
              <Text style={styles.medValue}>
                {calculateMaintanenceRate(parseFloat(diabetesStore.weight))} mL/hr
              </Text>
            </Text>
            <Text style={styles.sectionTitle}>{diabetesText.ivFluids.moreMaintananceRate}
              <Text style={styles.medValue}>
                {calculateMaintenanceRateOnePointFive(parseFloat(diabetesStore.weight))} mL/hr
              </Text>
            </Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={[styles.sectionSubtitle, {marginBottom: 12}]}>{diabetesText.ivFluids.twoIVF}</Text>
            <BulletList
              items={TWO_IVF_BAGS}
            />
            <Text style={[styles.sectionSubtitle, {marginBottom: 12}]}>{diabetesText.ivFluids.recommendBothBags}</Text>
            <BulletList
              items={RECOMMEND_BOTH_BAGS}
            />
          </View>
          <View style={styles.infoSection}>
            <FullWidthButton
              text={diabetesText.ivFluids.next}
              onPress={onNav}
            />
          </View>
        </Card>
      </View>
    </DiabetesLayout>
  )
}))

export default IVFluids;
