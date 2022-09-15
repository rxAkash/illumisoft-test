import { useNavigation } from '@react-navigation/core';
import { dataprivacyIc, purposeIc, usersurveyIc } from 'assets/img';
import { DEMOGRAPHICS_SURVEY_SCREEN } from 'Navigation/routes';
import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Modal from "react-native-modal";
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import AboutSection from './AboutSection';
import styles from './styles';

const PURPOSE_TEXT = 'PedsGuide is a mobile app that provides pediatric electronic clinical decision support (eCDS) and reference tools for providers. This is often done in combination with ongoing projects seeking to improve and standardize pediatric care across multiple institutions.';
const DATA_PRIVACY_TEXT = 'Confidentiality is important, which is why we won’t be collecting any direct identifiers from you. Any and all data collected from the usage of this app is anonymous. Your phone’s IP address is automatically assigned a random number. This assures user confidentiality while still providing researchers with data in aggregate.';
const USER_SURVEY_TEXT = 'In an effort to better understand usage patterns, we would also like some basic demographic information, and if applicable, the improvement projects that you or your institution are involved in. The following survey is entirely voluntary and in no way affects your experience with this app.';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}


const AboutModal = React.memo(({visible, onDismiss}: Props) => {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();

  const onTakeSurvey = () => {
    navigation.navigate(DEMOGRAPHICS_SURVEY_SCREEN as never);
    onDismiss();
  }

  return (
    <Modal
      isVisible={visible}
      animationIn='slideInUp'
      deviceWidth={width}
      deviceHeight={height}
      onSwipeComplete={onDismiss}
      useNativeDriverForBackdrop
      swipeDirection={['down']}
      propagateSwipe
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
        >
          <View onStartShouldSetResponder={() => true} style={{flex: 1}}>
            <Text style={styles.title}>About PedsGuide</Text>
            <AboutSection
              icon={purposeIc}
              title="Purpose"
              text={PURPOSE_TEXT}
            />
            <AboutSection
              icon={dataprivacyIc}
              title="Data Privacy"
              text={DATA_PRIVACY_TEXT}
            />
            <AboutSection
              icon={usersurveyIc}
              title="User Survey"
              text={USER_SURVEY_TEXT}
            />
            <FullWidthButton
              text="Take Survey"
              onPress={onTakeSurvey}
              style={styles.takeSurveyButton}
            />
            <HollowButton
              text="I'll do this later"
              onPress={onDismiss}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
})

export default AboutModal;
