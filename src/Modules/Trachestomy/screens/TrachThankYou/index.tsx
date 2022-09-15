import { NavigationProp } from "@react-navigation/core";
import { restartIc } from "assets/img";
import DropDown from "Modules/Trachestomy/components/DropDown";
import { trachText } from "Modules/Trachestomy/config/strings";
import { TRACHESTOMY_HOME } from "Modules/Trachestomy/navigation/routes";
import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import BulletList from "UIToolkit/BulletList";
import HollowButton from "UIToolkit/Buttons/HollowButton";
import Card from "UIToolkit/Card";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { primaryColor, whiteColor } from "UIToolkit/theme/colors";
import { THANK_YOU_INFO } from "./conf";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const TrachThankYou = React.memo(({ navigation }: Props) => {
  const onRestart = () => {
    navigation.navigate(TRACHESTOMY_HOME);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: whiteColor }}>
      <GoBackHeader />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.thankYouText}>{trachText.thankYou.title}</Text>
          <Card style={styles.infoList}>
            <BulletList
              items={THANK_YOU_INFO}
            />
          </Card>
        </View>
        <DropDown
          title={trachText.thankYou.dropdownTitle1}
          info={trachText.thankYou.drawerText1}
          backgroundColor={primaryColor}
        />
        <DropDown
          title={trachText.thankYou.dropdownTitle2}
          info={trachText.thankYou.drawerText2}
          backgroundColor={primaryColor}
        />
      </ScrollView>
      <View style={styles.btnContainer}>
        <HollowButton
          icon={restartIc}
          text={trachText.thankYou.btnTitle}
          onPress={onRestart}
        />
      </View>
    </SafeAreaView>
  );
});

export default TrachThankYou;
