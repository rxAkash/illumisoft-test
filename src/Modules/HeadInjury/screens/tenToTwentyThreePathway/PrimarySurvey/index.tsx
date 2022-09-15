import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";
import ExpandableSection from "Modules/Antibiotics/components/ExpandableSection";
import { NavigationProp } from "@react-navigation/native";
import HeadInjuryLayout from "Modules/HeadInjury/components/HeadInjuryLayout";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import { headInjuryText } from "Modules/HeadInjury/config/strings";
import { lightBlueColor, primaryColor } from "UIToolkit/theme/colors";
import { PRIMARY_SERVEY } from "./conf";
import { DISABILITY_ASSESSMENT, DISABILITY_ASSESSMENT_TEN } from "Modules/HeadInjury/navigation/routes";

interface Props {
  navigation: NavigationProp<any>;
}

const PrimaruSurveyTEN = React.memo(({ navigation }: Props) => {
  const onNav = () => {
    navigation.navigate(DISABILITY_ASSESSMENT_TEN);
  };

  const renderBottomPanel = () => (
    <View style={styles.bottomContainer}>
      <ColoredNavButton
        title={headInjuryText.zeroToNinePathway.PrimaryHiSurvey.btnTitle}
        backgroundColor={primaryColor}
        onPress={onNav}
      />
    </View>
  );

  return (
    <HeadInjuryLayout renderBottomPanel={renderBottomPanel}>
      <View style={styles.container}>
        <View style={{ padding: 5, marginBottom: 15 }}>
          <Text style={styles.title}>
            {headInjuryText.zeroToNinePathway.PrimaryHiSurvey.title}
          </Text>
          <Text style={styles.subtitle}>
            {headInjuryText.zeroToNinePathway.PrimaryHiSurvey.subtitle}
          </Text>
        </View>
        {PRIMARY_SERVEY.map((value) => (
          <ExpandableSection
            key={value.id}
            title={value.title}
            backgroundColor={lightBlueColor}
          >
            <View style={styles.content}>
              <Text style={styles.descriptionText} key={value.id}>
                {value.description}
              </Text>
            </View>
          </ExpandableSection>
        ))}
      </View>
    </HeadInjuryLayout>
  );
});

export default PrimaruSurveyTEN;
