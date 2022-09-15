import React, { useEffect, useState } from 'react';
import {Text, View, FlatList} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Analytics from 'appcenter-analytics';
import { getDataFromLS, storeDataInLS } from 'data/localStorage';
import { ABOUT_PEDS_GUIDE_DISPLAYED } from 'data/localStorage/keys';
import { MODULES_NAVIGATOR } from 'Navigation/routes';
import DisclaimerDialog from 'UIToolkit/DisclaimerDialog';
import AboutModal from './AboutModal';
import {homeConfig, HomeConfigItem} from './conf';
import HomeCard from './HomeCard';
import styles from './styles';

interface Props {
  navigation: DrawerNavigationProp<any>;
}

const Home = React.memo(({navigation}: Props) => {
  const [disclaimerItem, setDisclaimerItem] = useState<HomeConfigItem | null>(null);
  const [showAboutPedsGuide, setShowAboutPedsGuide] = useState(false);

  useEffect(() => {
    getDataFromLS(ABOUT_PEDS_GUIDE_DISPLAYED).then(res => {
      if(!res || !res.value) {
        setShowAboutPedsGuide(true);
        storeDataInLS(ABOUT_PEDS_GUIDE_DISPLAYED, {value: true})
      }
    })
  }, [])

  const onItemPress = (item: HomeConfigItem) => {
    Analytics.trackEvent(`Guideline Chosen`, {name: item.title})
    if(item.disclaimer) {
      setDisclaimerItem(item);
    } else {
      navigation.navigate(MODULES_NAVIGATOR, {
        screen: item.route
      })
    }
  }

  const onAcceptDisclaimer = () => {
    if(disclaimerItem) {
      setDisclaimerItem(null);
      setTimeout(() => {
        navigation.navigate(MODULES_NAVIGATOR, {
          screen: disclaimerItem.route
        });
      }, 1)
    }
  }

  const onCloseDisclaimer = () => {
    setDisclaimerItem(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Select a decision support tool</Text>
      <FlatList
        data={homeConfig}
        contentContainerStyle={styles.list}
        renderItem={({item}) => <HomeCard config={item} key={item.title} onPress={onItemPress}/>}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      />
      <DisclaimerDialog
        onAccept={onAcceptDisclaimer}
        onClose={onCloseDisclaimer}
        visible={disclaimerItem !== null}
      >
        {disclaimerItem ? disclaimerItem.disclaimer && disclaimerItem.disclaimer({onClose: onCloseDisclaimer}) : undefined}
      </DisclaimerDialog>
      <AboutModal
        visible={showAboutPedsGuide}
        onDismiss={() => setShowAboutPedsGuide(false)}
      />
    </View>
  );
});

export default Home;
