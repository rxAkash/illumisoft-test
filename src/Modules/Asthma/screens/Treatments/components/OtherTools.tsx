import React from 'react';
import { asthmaText } from 'Modules/Asthma/config/strings';
import { CHRONIC_ASTHMA_LINK, CARAT_ASTHMA_LINK } from 'Modules/Asthma/config/urls';
import { SMOKING_SCREENING, MDI_VIDEOS } from 'Modules/Asthma/navigation/routes';
import Card from 'UIToolkit/Card';
import CardNavigationButton from 'UIToolkit/CardNavigationButton';
import { useNavigation } from '@react-navigation/native';
import { Linking, Text } from 'react-native';
import styles from './styles';

const OtherTools = React.memo(() => {
  const navigation = useNavigation();

  const onNavPress = (screen: any) => {
    navigation.navigate(screen);
  }

  const onLinkPress = (link: string) => {
    Linking.openURL(link);
  }

  return (
    <Card
      title={asthmaText.home.otherTools}
    >
      <CardNavigationButton
        title={
          <Text>
            <Text style={styles.boldText}>{asthmaText.home.remember}</Text>
            : {asthmaText.home.smokingScreening}
          </Text>
        }
        onPress={() => onNavPress(SMOKING_SCREENING)}
      />
      <CardNavigationButton
        title={asthmaText.home.chronicAsthma}
        onPress={() => onLinkPress(CHRONIC_ASTHMA_LINK)}
      />
      <CardNavigationButton
        title={asthmaText.home.carat}
        onPress={() => onLinkPress(CARAT_ASTHMA_LINK)}
      />
      <CardNavigationButton
        title={asthmaText.home.mdiVideos}
        onPress={() => onNavPress(MDI_VIDEOS)}
      />
    </Card>
  )
})

export default OtherTools;
