import { arrowRightIc } from 'assets/img';
import React from 'react';
import { ScrollView, StatusBar, SafeAreaView, Text, View, Image, useColorScheme, TouchableOpacity } from 'react-native';
import Disclaimer from './Disclaimer';
import styles from './styles';

interface Props {
  onAccept: () => void;
}

const Welcome = React.memo(({onAccept}: Props) => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
        <Disclaimer />
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.acceptButton}
          activeOpacity={0.6}
          onPress={onAccept}
        >
          <View />
          <Text style={styles.acceptButtonText}>Accept</Text>
          <Image source={arrowRightIc} style={styles.acceptButtonImage}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
})

export default Welcome;
