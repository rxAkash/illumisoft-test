import { NavigationProp } from "@react-navigation/core";
import { RESUS_HOME } from "Modules/Resuscitation/navigation/routes";
import { INFO_LIST } from "./conf";
import { trachText } from "Modules/Trachestomy/config/strings";
import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { primaryColor } from "UIToolkit/theme/colors";
import styles from "./styles";
import Card from "UIToolkit/Card";
import BulletList from "UIToolkit/BulletList";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";

interface Props {
  navigation: NavigationProp<any>;
}

const CPRWithTrachInPlace = React.memo(({ navigation }: Props) => {
  const onResusMod = () => {
    navigation.navigate(RESUS_HOME);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader />
      <Text style={styles.title}>{trachText.cPRWithTrachInPlace.backHeaderTitle}</Text>
      <ScrollView style={styles.container}>
        <View style={styles.boldTextContainer}>
          <Text style={styles.boldText}>
            {trachText.cPRWithTrachInPlace.listBoldText}
          </Text>
        </View>
        <Card style={styles.infoList}>
          <BulletList items={INFO_LIST} />
        </Card>
      </ScrollView>
      <View style={styles.btnContainer}>
        <ColoredNavButton
          title={trachText.cPRWithTrachInPlace.btnText}
          onPress={onResusMod}
          backgroundColor={primaryColor}
        />
      </View>
    </SafeAreaView>
  );
});

export default CPRWithTrachInPlace;
