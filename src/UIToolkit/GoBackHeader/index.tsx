import { useNavigation } from '@react-navigation/core';
import { arrowLeftIc } from 'assets/img';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import BPMPlayer from 'UIToolkit/BPMPlayer';
import styles from './styles';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  showBPM?: boolean;
  hideBack?: boolean;
  border?: boolean;
  customElement?: () => Element;
  customOnBack?: () => void;
}

const GoBackHeader = React.memo(({
  hideBack,
  showBPM,
  border,
  customElement,
  customOnBack
}: Props) => {
  const navigation = useNavigation();
  
  const onBack = () => {
    if(!customOnBack) {
      navigation.goBack()
    } else {
      customOnBack();
    }
  }

  return (
    <View style={[styles.button, border ? styles.border : null]}>
      {!hideBack ? (
        <Pressable onPress={onBack} style={styles.back}>
          <Image source={arrowLeftIc} style={styles.icon} />
          <Text style={styles.backText} { ...getTestProps('go_back_btn') } >BACK</Text>          
        </Pressable>
      ) : (
        <View />
      )}
      <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:"space-between", flex:1}}>
        <View />
        {customElement && customElement()}
        {showBPM ? (
          <BPMPlayer />
        ) : (
          <View />
        )}
       
      </View>
    </View>
  )
})

export default GoBackHeader;
