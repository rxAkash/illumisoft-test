import { infoIc } from 'assets/img';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import InfoModal from 'UIToolkit/InfoModal';
import styles from './styles';

interface Props {
  title: string;
  info: string;
  infoTitle: string;
  lightText?: boolean;
}

const InfoSectionHeader = React.memo(({title, info, lightText, infoTitle}: Props) => {
  const [showInfo, setShowInfo] = useState(false);

  const onClose = () => {
    setShowInfo(false)
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, lightText && {fontWeight: '300'}]}>
        {title}
      </Text>
      <Pressable onPress={() => setShowInfo(true)}>
        <Image
          source={infoIc}
          style={styles.info}
        />
      </Pressable>
      <InfoModal
        visible={showInfo}
        onClose={onClose}
        title={infoTitle}
        info={info}
      />
    </View>
  )
})

export default InfoSectionHeader;
