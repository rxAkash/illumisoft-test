import { NavigationProp } from "@react-navigation/core";
import DropDown from "Modules/Trachestomy/components/DropDown";
import { INFO_LIST_AIRWAY_OBFUSCATION } from "Modules/Trachestomy/config/infoSet";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_AIRWAY_OBFUSCATION, TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION } from "Modules/Trachestomy/navigation/routes";
import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import BulletList from "UIToolkit/BulletList";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import Card from "UIToolkit/Card";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { primaryColor } from "UIToolkit/theme/colors";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const RescueBreathingNoAirwayObstruction = React.memo(({ navigation }: Props) => {

  const onRestart = () => {
    navigation.navigate(TRACHESTOMY_NON_RESOPNSIVE_CHILD_NO_AIRWAY_OBFUSCATION)
  }

  const onDecision = () => {
    navigation.navigate(TRACHESTOMY_RESCUE_BREATHING_WITH_AIRWAY_OBFUSCATION)
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>
        {trachText.rescueBreathingNoAirwayObstruction.backHeaderTitle}
      </Text>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Card style={styles.infoList}>
          <BulletList items={INFO_LIST_AIRWAY_OBFUSCATION} />
        </Card>
        <ColoredNavButton 
          backgroundColor={primaryColor}
          center={true}
          title={trachText.rescueBreathingNoAirwayObstruction.btnTitle2}
          onPress={onDecision}
        />
        <View style={styles.redBoxContainer}>
          <Text style={styles.thankYouText}>{trachText.rescueBreathingNoAirwayObstruction.title}</Text>
        </View>
        <DropDown 
          title={trachText.rescueBreathingNoAirwayObstruction.dropdownTitle1}
          info={trachText.rescueBreathingNoAirwayObstruction.drawerText1}
          backgroundColor={primaryColor}
        />
        <DropDown 
          title={trachText.rescueBreathingNoAirwayObstruction.dropdownTitle2}
          info={trachText.rescueBreathingNoAirwayObstruction.drawerText2}
          backgroundColor={primaryColor}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <ColoredNavButton
          title={trachText.rescueBreathingNoAirwayObstruction.btnTitle}
          onPress={onRestart}
          backgroundColor={primaryColor}
        />
      </View>
    </SafeAreaView>
  );
});

export default RescueBreathingNoAirwayObstruction
