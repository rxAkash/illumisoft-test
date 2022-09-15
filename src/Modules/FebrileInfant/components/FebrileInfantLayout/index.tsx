import { useNavigation } from '@react-navigation/native';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { FEBRILE_INFANT_HOME } from 'Modules/FebrileInfant/navigation/routes';
import React, { ReactElement } from 'react';
import Analytics from 'appcenter-analytics';
import { SafeAreaView, ScrollView, View } from 'react-native';
import ColoredNavButton from 'UIToolkit/Buttons/ColoredNavButton';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import GoBackHeader from 'UIToolkit/GoBackHeader';
import { primaryColor } from 'UIToolkit/theme/colors';
import styles from './styles';

interface Props {
  customHeaderComponent: () => Element;
  children: ReactElement<any, any> | ReactElement<any, any>[];
  bottomButtonTitle?: string;
  bottomButtonRoute?: string;
  restartButton?: boolean;
  routeParams?: any;
  hideButton?: boolean;
}

const FebrileInfantLayout = React.memo(({
  customHeaderComponent,
  children,
  bottomButtonTitle,
  bottomButtonRoute,
  restartButton,
  routeParams,
  hideButton
}: Props) => {
  const navigation = useNavigation();

  const reset = () => {
    Analytics.trackEvent("Guideline Restart", {guideline: 'Febrile Infant'})
    navigation.reset({
      routes: [{name: FEBRILE_INFANT_HOME as never}],
      routeNames: [FEBRILE_INFANT_HOME as never]
    })
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBackHeader border customElement={customHeaderComponent}/>
      <ScrollView style={styles.container}  contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
      {!hideButton && (
        <View style={styles.bottomContainer}>
          {!restartButton && bottomButtonRoute && bottomButtonTitle ? (
            <ColoredNavButton
              backgroundColor={primaryColor}
              title={bottomButtonTitle}
              onPress={() => navigation.navigate(bottomButtonRoute as never, routeParams as never)}
              center
            />
          ) : (
            <FullWidthButton
              text={febrileText.home.restart}
              onPress={reset}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  )
})

export default FebrileInfantLayout;
