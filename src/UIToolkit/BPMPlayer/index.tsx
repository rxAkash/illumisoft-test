import { bpmIc } from 'assets/img/resus';
import Analytics from 'appcenter-analytics';
import React, { useEffect, useState } from 'react';
import { Image, Platform, Pressable } from 'react-native';
import Sound from 'react-native-sound';
import { primaryColorOpaque } from 'UIToolkit/theme/colors';
import styles from './styles';

const AndroidSource = 'bpm_100.mp3';
const IOSSource = 'bpm_100.mp3'

export const player = new Sound(Platform.select({
  android: AndroidSource,
  ios: IOSSource
}), Sound.MAIN_BUNDLE, (error) => {
  console.log(error);
});

const BPMPlayer = React.memo(() => {
  const[isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    Sound.setCategory('Playback');
    if(player.isPlaying()) {
      setIsPlaying(true)
    }
  }, [])

  const onPlay = () => {
    if(player && player.isPlaying()) {
      player.stop()
      setIsPlaying(false)
    } else if(player) {
      player.play((success?: boolean) => {
        if(success) {
          player.play()
        }
      });
      Analytics.trackEvent('Metronome')
      setIsPlaying(true)
    }
  }

  return (
    <Pressable
      onPress={onPlay}
      style={[styles.container, {backgroundColor: isPlaying ? primaryColorOpaque : 'transparent'}]}
    >
      <Image
        source={bpmIc}
        style={styles.icon}
        resizeMode='contain'
        resizeMethod='scale'
      />
    </Pressable>
  )
})

export default BPMPlayer;
