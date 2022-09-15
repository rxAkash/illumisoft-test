import { NavigationProp } from "@react-navigation/core";
import { HOME_SCREEN } from "Navigation/routes";
import React from "react";
import {  View, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ColoredNavButton from "UIToolkit/Buttons/ColoredNavButton";
import Card from "UIToolkit/Card";
import CardNavigationButton from "UIToolkit/CardNavigationButton";
import GoBackHeader from "UIToolkit/GoBackHeader";
import { primaryColor } from "UIToolkit/theme/colors";
import { trachText } from "./config/strings";
import { Topics } from "./config/topicsArray";
import {
  TRACHESTOMY_BEGIN_EMERGENCY_ALGORITHM
} from "./navigation/routes";
import styles from "./styles";

interface Props {
  navigation: NavigationProp<any>;
}

const Trachestomy = React.memo(({ navigation }: Props) => {
  const onGoPress = (route: string) => {
    navigation.navigate(route);
  };

  const onEmergencyAlgorithm = () => {
    navigation.navigate(TRACHESTOMY_BEGIN_EMERGENCY_ALGORITHM);
  };

  const onHome = () => {
    navigation.reset({
      routes: [{name: HOME_SCREEN}],
      routeNames: [HOME_SCREEN]
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GoBackHeader border customOnBack={onHome}/>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <ColoredNavButton
            style={styles.firstContainer}
            title={trachText.home.title}
            backgroundColor={primaryColor}
            onPress={onEmergencyAlgorithm}
          />
          <Card
            title={trachText.home.prompt}
            style={styles.secondSection}
          >
            <FlatList
              data={Topics}
              renderItem={({ item }) => (
                <View>
                  <CardNavigationButton
                    title={item.title}
                    onPress={() => {
                      onGoPress(item.route);
                    }}
                  />
                </View>
              )}
            />
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
});

export default Trachestomy;
