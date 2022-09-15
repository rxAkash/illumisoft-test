import React from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import styles from './styles';

interface Props {
  onNext: () => void;
  text?: string;
  buttonDisabled: boolean;
  buttonTextOverrride?: string;
  subinfo?: string;
  icon?: ImageSourcePropType;
  infoText?: string;
  column?: boolean;
}

const ResultDisplayBottomPanel = React.memo(({
  onNext,
  text,
  buttonDisabled,
  buttonTextOverrride,
  subinfo,
  icon,
  infoText,
  column
}: Props) => {
  return (
    <View style={[column ? styles.column : styles.bottomPanelContainer]}>
      <View>
        {text !== undefined ? (
          <>
            {subinfo ? <Text style={styles.bottomSubinfo}>{subinfo}:</Text> : null}
            <Text style={styles.bottomText}>{text}</Text>
            {infoText && <Text style={styles.infoText}>{infoText}</Text>}
          </>
        ) : null}
      </View>
      <FullWidthButton
        text={buttonTextOverrride ? buttonTextOverrride : 'Next'}
        onPress={onNext}
        disabled={buttonDisabled}
        icon={icon}
      />
    </View>
  )
})

export default ResultDisplayBottomPanel;
