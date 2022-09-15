import { resusText } from 'Modules/Resuscitation/config/strings';
import React from 'react';
import { Text, View } from 'react-native';
import FullWidthButton from 'UIToolkit/Buttons/FullWidthButton';
import HollowButton from 'UIToolkit/Buttons/HollowButton';
import Input from 'UIToolkit/Inputs/Input';
import YesNoButtons from 'UIToolkit/Inputs/YesNoButtons';
import styles from '../styles';

interface Props {
  electricalBurn?: number;
  setElectricalBurn: (answer: number) => void;
  hours: string;
  setHours: (hours: string) => void;
  fluidVol: string;
  setFluidVol: (vol: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const PreTretment = React.memo(({
  electricalBurn,
  setElectricalBurn,
  hours,
  setHours,
  fluidVol,
  setFluidVol,
  onBack,
  onNext
}: Props) => {
  return (
    <View style={{paddingBottom: 18}}>
      <Text style={[styles.info, {fontWeight: '500'}]}>
        {resusText.burnManagment.wasTheBurnCausedBy}
      </Text>
      <YesNoButtons
        answer={electricalBurn}
        onAnswer={setElectricalBurn}
      />
      <Input
        keyboard='number-pad'
        value={hours}
        onChange={setHours}
        placeholder="Hours"
        label={resusText.burnManagment.howManyHours}
        style={{marginTop: 14}}
      />
      <Input
        keyboard='number-pad'
        value={fluidVol}
        onChange={setFluidVol}
        placeholder="mL"
        label={resusText.burnManagment.totalFluidVolume}
        style={{marginTop: 14}}
      />
      <View style={styles.buttonsContainer}>
        <HollowButton
          text={resusText.burnManagment.back}
          style={{marginRight: 8}}
          onPress={onBack}
        />
        <FullWidthButton
          text={resusText.burnManagment.next}
          onPress={onNext}
          disabled={electricalBurn === undefined || hours === '' || fluidVol === ''}
        />
      </View>
    </View>
  )
})

export default PreTretment;
