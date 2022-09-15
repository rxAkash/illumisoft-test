/* eslint-disable @typescript-eslint/ban-ts-comment */
import { downArrowIc } from 'assets/img';
import { resusText } from 'Modules/Resuscitation/config/strings';
import React, { useState } from 'react';
import { Image, LayoutAnimation, Pressable, Text, View } from 'react-native';
import DoseDisplay from '../DoseDisplay';
import { drugColors, getAgeRestrictionWarning } from './conf';
import { handleRuleExceptions } from './handleRuleExceptions';
import styles from './styles';

interface Props {
  drugDetails: any;
  drugName: string;
  patientAge: string;
  patientWeight: number;
  hasBlackBox: boolean;
  ageUnit: string;
  drugSubname: string;
  displayLowMedHighMaxDose?: boolean;
}

const DrugCard = React.memo(({
  drugDetails,
  drugName,
  patientAge,
  patientWeight,
  hasBlackBox,
  ageUnit,
  drugSubname,
  displayLowMedHighMaxDose
}: Props) => {
  const [expand, setExpand] = useState(!drugDetails.Concentration);

  const getDrugColor = (title: string) => {
    //@ts-ignore
    return drugColors[title]?.color;
  }

  const getDrugNames = () => {
    if(drugDetails.title.trim().includes('or')) {
      const drugItems = drugDetails.title.trim().split('or');
      //@ts-ignore
      return drugItems.map(item => item.trim())
    }
    //@ts-ignore
    return [drugDetails.title.trim()]
  }

  const toggleExpand = () => {
    LayoutAnimation.easeInEaseOut();
    setExpand(!expand);
  }

  const showAgeRestrictionWarning = () => {
    return getAgeRestrictionWarning(
      drugName,
      patientAge,
      ageUnit,
      getDrugNames()[0],
      drugDetails.isAgeRestricted
    )
  }

  return (
    <View style={[styles.container, {
      borderLeftColor: getDrugColor(getDrugNames()[0])
    }]} >
      <View style={styles.drugTitleContainer}>
        {getDrugNames().map((item: string) => (
          <View
            style={[
              styles.drugIndicatorContainer, {
                backgroundColor: getDrugColor(item)
              }
            ]} 
            key={item}
          >
            <Text style={styles.drugIndicator}>{item}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.drugName}>{drugName}</Text>
      {drugDetails.Concentration && !showAgeRestrictionWarning() && (
        <Pressable
          style={[styles.concentrationExpandContainer, expand && styles.concentrationExpanded]}
          onPress={toggleExpand}
        >
          <Text style={styles.admText}>{resusText.drugDosing.administer}</Text>
          <View style={styles.concentrationRow}>
            <Image source={downArrowIc} style={[styles.arrow, expand && styles.arrowActive]} />
            <Text style={styles.text}>{resusText.drugDosing.concentration} -{' '}
              <Text style={styles.bold}>
                {handleRuleExceptions(drugDetails, drugName)}
              </Text>
            </Text>
          </View>
        </Pressable>
      )}
      {showAgeRestrictionWarning() && (
        <Text style={styles.warning}>{showAgeRestrictionWarning()}</Text>
      )}
      {expand && !showAgeRestrictionWarning() && (
        <DoseDisplay
          drugRoute={drugDetails}
          patientAge={patientAge}
          patientWeight={patientWeight}
          drugName={drugName}
          hasBlackBox={hasBlackBox}
          drugSubname={drugSubname}
          ageUnit={ageUnit}
          displayLowMedHighMaxDose={displayLowMedHighMaxDose}
        />
      )}
    </View>
  )
})

export default DrugCard;
