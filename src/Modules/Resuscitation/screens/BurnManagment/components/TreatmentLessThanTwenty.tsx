import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import { ADDITIONAL_CONSIDERATIONS, BURN_INJURIES, BURN_SIZE, INJURY_LOCATIONS } from '../conf';
import { getLRRate } from './TreatmentLessThanTwentyCalculator';
import styles from '../styles';

interface Props {
  weight: number;
  onBack: () => void;
  onRestart: () => void;
}

const TreatmentLessThanTwenty = React.memo(({weight, onBack, onRestart}: Props) => {
  return (
    <>
      <View style={styles.treatmentContainer}>
        <Text style={[styles.info, styles.bold]}>
          {resusText.burnManagment.less20BurnTitle}
        </Text>
        <Text style={[styles.grayTitle, {marginTop: 16}]}>
          {resusText.burnManagment.lr}
          <Text style={[styles.info, styles.bold]}>
            {' '}{getLRRate(weight)}{' '}{resusText.circulaton.mlhr}
          </Text>
        </Text>
        <View style={styles.treatmentBox}>
          <Text style={[styles.info, styles.bold]}>
            {resusText.burnManagment.youHaveDetermined}
          </Text>
          <Text style={[styles.info, {marginTop: 8}]}>
            {resusText.burnManagment.treatmentLess20Info}
          </Text>
          <Text style={[styles.info, {marginTop: 8}]}>
            {resusText.burnManagment.burnSize}
          </Text>
          <BulletList
            items={BURN_SIZE}
            style={{marginTop: 8}}
          />
          <Text style={[styles.info, {marginTop: 8}]}>
            {resusText.burnManagment.burnInjury}
          </Text>
          <BulletList
            items={BURN_INJURIES}
            style={{marginTop: 8}}
          />
          <Text style={[styles.info, {marginTop: 8}]}>
            {resusText.burnManagment.injuryLocations}
          </Text>
          <BulletList
            items={INJURY_LOCATIONS}
            style={{marginTop: 8}}
          />
          <Text style={[styles.info, {marginTop: 8}]}>
            {resusText.burnManagment.additionalConsiderations}
          </Text>
          <BulletList
            items={ADDITIONAL_CONSIDERATIONS}
            style={{marginTop: 8}}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <HollowButton
          text={resusText.burnManagment.back}
          style={{marginRight: 8}}
          onPress={onBack}
        />
        <FullWidthButton
          text={resusText.burnManagment.restart}
          onPress={onRestart}
        />
      </View>
    </>
  )
})

export default TreatmentLessThanTwenty;
