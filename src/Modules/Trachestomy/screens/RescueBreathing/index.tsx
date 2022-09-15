import { NavigationProp } from "@react-navigation/core";
import DropDown from "Modules/Trachestomy/components/DropDown";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_TRACH } from "Modules/Trachestomy/navigation/routes";
import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import BulletList from "UIToolkit/BulletList";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import Card from "UIToolkit/Card";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { primaryColor } from "UIToolkit/theme/colors";
import { RESCUE_BREATHING_INFO } from "./conf";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const RescueBreathing = React.memo(({ navigation }: Props) => {
  const onRestart = () => {
    navigation.navigate(TRACHESTOMY_NON_RESOPNSIVE_CHILD_WITH_TRACH);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.rescueBreathing.backHeaderTitle}</Text>
      <ScrollView style={styles.container}>
        <Card style={styles.infoContainer}>
          <BulletList items={RESCUE_BREATHING_INFO} />
        </Card>
        <View style={styles.redBoxContainer}>
          <Text style={styles.warningText}>{trachText.rescueBreathing.title}</Text>
        </View>
        <DropDown
          title={trachText.rescueBreathing.dropdownTitle1}
          info={trachText.rescueBreathing.drawerText1}
          backgroundColor={primaryColor}
        />
        <DropDown
          title={trachText.rescueBreathing.dropdownTitle2}
          info={trachText.rescueBreathing.drawerText2}
          backgroundColor={primaryColor}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <ColoredNavButton
          style={styles.nextButton}
          title={trachText.rescueBreathing.btnTitle}
          onPress={onRestart}
          backgroundColor={primaryColor}
        />
      </View>
    </SafeAreaView>
  );
});

export default RescueBreathing;
