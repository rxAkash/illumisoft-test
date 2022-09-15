import { resusText } from 'Modules/Resuscitation/config/strings';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import { getEquationReference } from '../conf';
import { get24HoursLR, getD5LRValue, getNineTwentyFourHoursRate, getOneEightHoursRate, getD5Value } from './TreatmentPost20Calculator';
import styles from '../styles';

interface Props {
  hours: string;
  electricalBurn: boolean;
  weight: number;
  results: number;
  fluidVolume: string;
  weightUnit: string;
  onBack: () => void;
  onRestart: () => void;
}

const TreatmentPost20 = React.memo(({
  hours,
  electricalBurn,
  weight,
  results,
  fluidVolume,
  weightUnit,
  onBack,
  onRestart
}: Props) => {
  const [showMoreHours, setShowMoreHours] = useState(false);
  const [showEquation, setShowEquation] = useState(false);

  return (
    <View>
      {parseFloat(hours) < 20 ? (
        <>
          <View style={styles.treatmentBox}>
            <Text style={[styles.info, styles.infoTitle]}>
              {resusText.burnManagment.nextSteps}
            </Text>
            <Text style={styles.info}>
              {resusText.burnManagment.burnResus}
            </Text>
            <Text style={[styles.info, {marginTop: 18}]}>
              {resusText.burnManagment.lrAst}
            </Text>
            <Text style={styles.medValue}>
              {getOneEightHoursRate(electricalBurn, weight, results, fluidVolume, hours)}
            </Text>
            {!showMoreHours ? (
              <HollowButton
                text={resusText.burnManagment.moreHours}
                onPress={() => setShowMoreHours(true)}
                style={{marginTop: 16}}
              />
            ) : (
              <View style={{marginTop: 16}}>
                <Text style={styles.info}>
                  {resusText.burnManagment.burnResusMoreHours}
                </Text>
                <Text style={[styles.info, {marginTop: 18}]}>
                  {resusText.burnManagment.lrAst}
                </Text>
                <Text style={styles.medValue}>
                  {getNineTwentyFourHoursRate(electricalBurn, weight, results, fluidVolume, hours)}
                </Text>
              </View>
            )}
          </View>
          {weight < 30 && (
            <View style={styles.treatmentBox}>
              <Text style={styles.info}>{resusText.burnManagment.plusD5}</Text>
              <Text style={styles.medValue}>
                {getD5Value(weight)} ml/hr
              </Text>
              <Text style={[styles.subInfo, {marginTop: 12}]}>
                {resusText.burnManagment.d5subInfo}
              </Text>
            </View>
          )}
          <View style={styles.treatmentBox}>
            <Text style={[styles.info, styles.infoTitle]}>
              {resusText.burnManagment.adjustedFluidRates}
            </Text>
            <Text style={[styles.info, {marginTop: 12}]}>
              {resusText.burnManagment.volume24Recommended}
            </Text>
            <Text style={styles.info}>
              LR: <Text style={styles.medValue}>{get24HoursLR(electricalBurn, weight, results)} mL</Text>
              {resusText.burnManagment.total24hoursVolume}
            </Text>
            {weight < 30 && (
              <Text style={styles.info}>
                D₅LR: <Text style={styles.medValue}>{getD5LRValue(weight)} mL</Text>
                {resusText.burnManagment.total24hoursVolume}
              </Text>
            )}
            {!showEquation ? (
              <HollowButton
                text={resusText.burnManagment.showEquation}
                onPress={() => setShowEquation(true)}
                style={{marginTop: 16}}
              />
            ) : (
              <View style={{marginTop: 16}}>
                <Text style={styles.info}>
                  {resusText.burnManagment.euqationReference}
                </Text>
                <Text style={[styles.info, {marginTop: 18}]}>
                  {getEquationReference(weight, weightUnit, electricalBurn)}
                </Text>
              </View>
            )}
          </View>
          <View style={[styles.resultContainer, {paddingHorizontal: 2}]}>
            <Text style={[styles.info, styles.redText]}>
              {resusText.burnManagment.warning}
            </Text>
          </View>
        </>
      ) : (
        <View style={styles.treatmentBox}>
          <Text style={[styles.info, styles.infoTitle]}>
            {resusText.burnManagment.nextSteps}
          </Text>
          <View style={[styles.resultContainer, {paddingHorizontal: 2, marginTop: 8}]}>
            <Text style={[styles.info, styles.redText]}>
              {resusText.burnManagment.warning}
            </Text>
          </View>
        </View>
      )}
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
    </View>
  )
})

export default TreatmentPost20;
