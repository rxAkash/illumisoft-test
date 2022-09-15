import React from 'react';
import { comingSoonIc } from 'assets/img';
import {Image, Text, View, Pressable} from 'react-native';
import { grayColor } from 'UIToolkit/theme/colors';
import { buttonPressed } from 'UIToolkit/theme/styles';
import { HomeConfigItem } from './conf';
import styles from './styles';
import { getTestProps } from '../../utils/test.id.creator';

interface Props {
  config: HomeConfigItem;
  onPress: (item: HomeConfigItem) => void;
}

const HomeCard = React.memo(({config, onPress}: Props) => {
  const getCardStyles = () => {
    return {
      card: {
        ...styles.card,
        borderColor: config.available ? config.color : grayColor
      },
      title: {
        ...styles.itemTitle,
        color: config.available ? styles.itemTitle.color : grayColor
      }
    }
  }

  const getImageSource = () => {
    if(config.available) {
      return config.image
    } else if(config.disabledIcon) {
      return config.disabledIcon
    }
    return config.image
  }

  return (
    <Pressable
      disabled={!config.available}
      onPress={() => onPress(config)}
      style={({ pressed }) => [getCardStyles().card, pressed && buttonPressed]}
    >
      <Image
        source={getImageSource()}
        style={styles.itemIcon}
      />
      <View style={styles.itemTextContainer}>
        <Text style={getCardStyles().title} { ...getTestProps(config.title + '_btn_title') }>
          {config.title}
        </Text>
        {config.available && <Text style={styles.itemSubtitle}>{config.subtext}</Text>}
      </View>
      {!config.available && (
        <Image source={comingSoonIc} style={styles.comingSoon} resizeMode='contain' />
      )}
    </Pressable>
  );
});

export default HomeCard;
