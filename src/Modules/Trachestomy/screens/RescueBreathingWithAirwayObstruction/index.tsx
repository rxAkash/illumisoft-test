import { NavigationProp } from "@react-navigation/core";
import DropDown from "Modules/Trachestomy/components/DropDown";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_AIRWAY_OBFUSCATION } from "Modules/Trachestomy/navigation/routes";
import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import BulletList from "UIToolkit/BulletList";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { primaryColor } from "UIToolkit/theme/colors";
import styles from "./styles";
import Card from "UIToolkit/Card";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import { INFO_LIST_AIRWAY_OBFUSCATION } from "Modules/Trachestomy/config/infoSet";

interface Props {
  navigation: NavigationProp<any>;
}

const RescueBreathingWithAirwayObstruction = React.memo(({ navigation }: Props) => {
  const onRestart = () => {
    navigation.navigate(TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_AIRWAY_OBFUSCATION);
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.rescueBreathingWithAirwayObstruction.backHeaderTitle}</Text>
      <ScrollView style={styles.container}>
        <Card style={styles.infoContainer}>
          <BulletList items={INFO_LIST_AIRWAY_OBFUSCATION} />
        </Card>
        <View style={styles.redBoxContainer}>
          <Text style={styles.warningText}>{trachText.rescueBreathingWithAirwayObstruction.title}</Text>
        </View>
        <DropDown
          title={trachText.rescueBreathingWithAirwayObstruction.dropdownTitle1}
          info={trachText.rescueBreathingWithAirwayObstruction.drawerText1}
          backgroundColor={primaryColor}
        />
        <DropDown
          title={trachText.rescueBreathingWithAirwayObstruction.dropdownTitle2}
          info={trachText.rescueBreathingWithAirwayObstruction.drawerText2}
          backgroundColor={primaryColor}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <ColoredNavButton
          title={trachText.rescueBreathingWithAirwayObstruction.btnTitle}
          onPress={onRestart}
          backgroundColor={primaryColor}
        />
      </View>
    </SafeAreaView>
  );
});

export default RescueBreathingWithAirwayObstruction;
