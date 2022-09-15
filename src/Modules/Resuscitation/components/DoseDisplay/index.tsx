import { blackboxIc, warningsIc } from 'assets/img/resus';
import { DOSING_SINGLE_DOSE, DOSING_LOW_MED_HIGH, ROCURONIUM, PHENOBARBITAL, DOSING_STEP_WISE, HYPERTONIC_SALINE } from 'Modules/Resuscitation/config/drugConfig';
import { resusText } from 'Modules/Resuscitation/config/strings';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import BulletList from 'UIToolkit/BulletList';
import { buttonPressed } from 'UIToolkit/theme/styles';
import { DRUG_WARNINGS } from '../../config/warnings';
import DrugWarning from '../DrugWarning';
import { getCustomLowDose, getCustomMaxDose } from './logicExceptions';
import LowMedHigh from './LowMedHigh';
import SingleDose from './SingleDose';
import StepWiseDose from './StepWiseDose';
import styles from './styles';

interface Props {
  drugRoute: any;
  patientWeight: number;
  patientAge: string;
  ageUnit: string;
  drugName: string;
  hasBlackBox: boolean;
  drugSubname: string;
  displayLowMedHighMaxDose?: boolean;
}

const DoseDisplay = React.memo(({
  drugRoute,
  patientWeight,
  drugName,
  hasBlackBox,
  drugSubname,
  patientAge,
  ageUnit,
  displayLowMedHighMaxDose
}: Props) => {
  const [showWarnings, setShowWarnings] = useState(false);
  const [warningConf, setWarningConf] = useState<any>({});

  useEffect(() => {
    const conf = DRUG_WARNINGS.find(item => item.Drug === drugName)
    setWarningConf(conf);
  }, [])
  
  

  const renderDosing = () => {
    switch(drugRoute.DosingType) {
      case DOSING_SINGLE_DOSE: return (
        <SingleDose
          drugRoute={drugRoute}
          patientWeight={patientWeight}
        />
      )
      case DOSING_LOW_MED_HIGH: return (
        <LowMedHigh
          drugRoute={drugRoute}
          patientWeight={patientWeight}
          customLowDose={getCustomLowDose(drugName, patientAge, ageUnit, patientWeight)}
          drugName={drugName}
        />
      )
      case DOSING_STEP_WISE: return (
        <StepWiseDose
          drugRoute={drugRoute}
          patientWeight={patientWeight}
        />
      )
    }
  }

  const getAdditionalDescriptionItem = () => {
    if((drugRoute.DosingType === DOSING_SINGLE_DOSE
      || (displayLowMedHighMaxDose && drugRoute.DosingType === DOSING_LOW_MED_HIGH))
      && drugName !== HYPERTONIC_SALINE) {
      if(drugName === ROCURONIUM || drugName === PHENOBARBITAL) {
        return {
          text: (
            <Text style={styles.warning}>
              {resusText.drugDosing.doNotExceed}
              {drugRoute.MaxDose + drugRoute.MaxDose_Units}
              {resusText.drugDosing.total}
              {drugRoute.MaxDose_Interval}
            </Text>
          )
        }
      }
      const maxDose = getCustomMaxDose(drugName, drugSubname, patientWeight) || drugRoute.MaxDose;
      if(maxDose) {
        return {
          text: (
            <Text style={styles.warning}>
              {resusText.drugDosing.doNotExceed}
              {maxDose + drugRoute.MaxDose_Units}
              {resusText.drugDosing.per}
              {drugRoute.MaxDose_Interval}
            </Text>
          )
        }
      }
    }
    return null
  }

  const toggleWarnings = () => {
    setShowWarnings(!showWarnings)
  }

  return (
    <View style={styles.container}>
      {renderDosing()}
      <View style={styles.descriptionSection}>
        <BulletList
          items={getAdditionalDescriptionItem() ? [
            getAdditionalDescriptionItem(),
            ...(drugRoute.Comments || [])
          ]: drugRoute.Comments || []}
        />
        {warningConf && (
          <View style={{flexDirection: 'row', marginTop: 12}}>
            {hasBlackBox && (
              <Pressable
                style={({pressed}) => [
                  styles.blackBoxButton,
                  pressed && buttonPressed
                ]}
                onPress={toggleWarnings}
              >
                <Image source={blackboxIc} style={styles.blackBoxIc} />
                <Text style={styles.blackButtonText}>{resusText.drugDosing.black}</Text>
              </Pressable>
            )}
            <Pressable
              style={({pressed}) => [
                styles.warningsButton,
                pressed && buttonPressed
              ]}
              onPress={toggleWarnings}
            >
              <Image source={warningsIc} style={styles.warningIc} />
              <Text style={styles.warningsText}>{resusText.drugDosing.warnings}</Text>
            </Pressable>
          </View>
        )}
      </View>
      {warningConf && (
        <DrugWarning
          visible={showWarnings}
          onDismiss={toggleWarnings}
          config={warningConf}
          hasBlackBox={hasBlackBox}
        />
      )}
    </View>
  )
})

export default DoseDisplay;
