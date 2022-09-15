import { downArrowIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, LayoutAnimation, Pressable, Text, View } from 'react-native';
import { whiteColor } from 'UIToolkit/theme/colors';
import { buttonPressed } from 'UIToolkit/theme/styles';
import DrugCard from '../DrugCard';
import DrugIndicationItem from '../DrugIndicationItem';
import { renderCardivascularDrips, shouldCollapseRoutes } from './logicExceptions';
import styles from './styles';

interface Props {
  drug: any;
  patientWeight: number;
  patientAge: string;
  ageUnit: string;
  displayLowMedHighMaxDose?: boolean;
}

const DrugListItem = React.memo(({
  drug,
  patientWeight,
  patientAge,
  ageUnit,
  displayLowMedHighMaxDose
}: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    LayoutAnimation.easeInEaseOut();
    setShowDetails(!showDetails);
  }

  const renderIndications = () => {
    return drug.Indication.map((indication: any, indIndex: number) => {
      const routeCollapse = shouldCollapseRoutes(drug, patientAge, ageUnit)
      if(routeCollapse) {
        return (
          <DrugCard
            key={drug.Drug}
            drugDetails={indication.Route[0]}
            drugName={drug.Drug}
            patientWeight={patientWeight}
            patientAge={patientAge}
            ageUnit={ageUnit}
            hasBlackBox={drug.hasBlackBox}
            drugSubname=""
            displayLowMedHighMaxDose={displayLowMedHighMaxDose}
          />
        )
      }
      return (
        <DrugIndicationItem
          indication={indication.value}
          key={indIndex.toString()}
        >
          {indication.Route.map((item: any, index: number) => (
            <DrugCard
              key={index.toString()}
              drugDetails={item}
              drugName={drug.Drug}
              patientWeight={patientWeight}
              patientAge={patientAge}
              ageUnit={ageUnit}
              hasBlackBox={drug.hasBlackBox}
              drugSubname={indication.value}
              displayLowMedHighMaxDose={displayLowMedHighMaxDose}
            />
          ))}
        </DrugIndicationItem>
      )
    })
  }

  return (
    <View style={{backgroundColor: whiteColor}}>
      <Pressable
        style={({pressed}) => [styles.container, pressed && buttonPressed]}
        onPress={toggleDetails}
      >
        <Image
          source={downArrowIc}
          style={[styles.arrow, showDetails && styles.iconActive]}
        />
        <Text style={styles.title}>{drug.Drug} <Text style={styles.paralytic}>{drug.Paralytic}</Text></Text>
      </Pressable>
      {showDetails && (
        <View style={styles.detailsContainer}>
          {renderIndications()}
          {renderCardivascularDrips(drug.Drug, patientWeight)}
        </View>
      )}
    </View>
  )
})

export default DrugListItem;
