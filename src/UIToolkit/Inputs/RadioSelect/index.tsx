import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { buttonPressed } from 'UIToolkit/theme/styles';
import {SelectOption} from '../@types';
import styles from './styles';

interface Props {
  title?: string;
  options: SelectOption[]
  onChange: (value: string) => void;
  renderAdditionalStep?: (value: string) => Element | null;
  value?: string;
  active?: any;
  noBorder?: boolean;
}

const RadioSelect = React.memo(({title, options, onChange, value, active, renderAdditionalStep, noBorder}: Props) => {
  
  const renderContent = () => (
    <View style={styles.container}>
      {title !== undefined && <Text style={styles.title}>{title}</Text>}
      {options.map(item => (
        <>
          <Pressable
            key={item.value}
            style={({pressed}) => [styles.optionContainer, noBorder && {borderBottomWidth: 0}, pressed && buttonPressed]}
            onPress={() => {active && onChange(item.value.toString())}}
          >
            {value === item.value ? (
              <View style={styles.optionIndicatorSelected}>
                <View style={styles.optionIndicatorBullet} />
              </View>
            ) : (
              <View style={styles.optionIndicator} />
            )}
            <Text style={styles.optionText}>{item.title}</Text>
          </Pressable>
          {renderAdditionalStep && renderAdditionalStep(item.value)}
        </>
      ))}
    </View>
  )

  return active ? renderContent() : (
    <Pressable style={styles.inactiveContainer} onPress={(e) => {e.stopPropagation()}}>
      {renderContent()}
    </Pressable>
  )
})

export default RadioSelect;
