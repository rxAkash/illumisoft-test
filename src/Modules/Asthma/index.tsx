import { NavigationProp } from '@react-navigation/core';
import { asthmaIc } from 'assets/img';
import React from 'react';
import Analytics from 'appcenter-analytics';
import { Linking, ScrollView, View } from 'react-native';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import ModuleLogo from 'UIToolkit/ModuleLogo';
import { asthmaText } from './config/strings';
import { CARAT_ASTHMA_LINK, CHRONIC_ASTHMA_LINK } from './config/urls';
import { CARAT_ASSESMENT, CHRONIC_ASTHMA_ASSESMENT, ED_PATHWAY, INPATIENT_PATHWAY, MDI_VIDEOS, SMOKING_SCREENING } from './navigation/routes';
import styles from './styles';

interface Props {
  navigation: NavigationProp<any>;
}

const Asthma = React.memo(({navigation}: Props) => {
  const onNavPress = (screen: string) => {
    navigation.navigate(screen);
  }

  const onLinkPress = (link: string, screen: string) => {
    Analytics.trackEvent(`Screen Access, ${screen}`);
    Linking.openURL(link);
  }

  return(
    <ScrollView>
      <View style={styles.container}>
        <ModuleLogo
          icon={asthmaIc}
          title={asthmaText.home.title}
        />
        <Card
          title={asthmaText.home.pathways}
        >
          <CardNavigationButton
            title={asthmaText.home.emergDepPath}
            subtitle={asthmaText.home.emergDepPathSubtitle}
            onPress={() => onNavPress(ED_PATHWAY)}
          />
          <CardNavigationButton
            title={asthmaText.home.inpatientPath}
            subtitle={asthmaText.home.inpatientPathSubtitle}
            onPress={() => onNavPress(INPATIENT_PATHWAY)}
          />
        </Card>
        <Card
          title={asthmaText.home.otherTools}
        >
          <CardNavigationButton
            title={asthmaText.home.smokingScreening}
            subtitle={asthmaText.home.smokingScreeningDescription}
            onPress={() => onNavPress(SMOKING_SCREENING)}
          />
          <CardNavigationButton
            title={asthmaText.home.chronicAsthma}
            subtitle={asthmaText.home.chronicAsthmaDescription}
            onPress={() => onLinkPress(CHRONIC_ASTHMA_LINK, CHRONIC_ASTHMA_ASSESMENT)}
          />
          <CardNavigationButton
            title={asthmaText.home.carat}
            subtitle={asthmaText.home.caratDescription}
            onPress={() => onLinkPress(CARAT_ASTHMA_LINK, CARAT_ASSESMENT)}
          />
          <CardNavigationButton
            title={asthmaText.home.mdiVideos}
            subtitle={asthmaText.home.mdiVideosDescription}
            onPress={() => onNavPress(MDI_VIDEOS)}
          />
        </Card>
      </View>
    </ScrollView>
  )
})

export default Asthma;
