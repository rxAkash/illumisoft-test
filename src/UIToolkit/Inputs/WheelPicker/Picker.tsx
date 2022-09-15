/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import IOSWheelPicker from '@gregfrench/react-native-wheel-picker';
import {
  WheelPicker
} from "react-native-wheel-picker-android";
import styles from './styles';
import { SelectOption } from '../@types';
import { Platform } from 'react-native';
import { whiteColor } from 'UIToolkit/theme/colors';

const PickerItem = IOSWheelPicker.Item;

interface Props {
  setOptionSelected: (item: string) => void;
  optionSelected?: string;
  options: SelectOption[];
  widePicker?: boolean;
}

const IOSPicker = React.memo(({setOptionSelected, optionSelected, options, widePicker}: Props) => {
  return (
    <IOSWheelPicker
      style={[styles.picker, widePicker && {width: 400}]}
      itemStyle={styles.pickerItem}
      onValueChange={setOptionSelected}
      selectedValue={optionSelected}
    >
      {options.map((item) => (
        <PickerItem label={item.title} value={item.value} key={item.value}/>
      ))}
    </IOSWheelPicker>
  )
})

const AndroidPicker = React.memo(({setOptionSelected, optionSelected, options, widePicker}: Props) => {
  return (
    //@ts-ignore
    <WheelPicker
      selectedItem={options.findIndex(item => item.value === optionSelected)}
      data={options.map(item => item.title)}
      onItemSelected={(res: number) => setOptionSelected(options[res].value)}
      selectedItemTextSize={22}
      selectedItemTextColor={whiteColor}
      indicatorColor={whiteColor}
      style={widePicker && {width: 400, height: 200, marginTop: 50}}
    />
  )
})

let Picker = IOSPicker;

if(Platform.OS === 'android') {
  Picker = AndroidPicker;
}

export default Picker;
