import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { ZERO_SIX_ANTIBIOTICS } from 'Modules/FebrileInfant/navigation/routes';
import DiagnosticTests from '.';
import { ANTIBIOTIC_OPTIONS } from '../SevenTwentyEight/routes';
import ZeroSixLayout from '../ZeroSIxPathway/ZeroSixLayout';

interface Props {
  route: {
    params: {
      zeroSix?: boolean;
    }
  }
}

const ZeroSixTests = React.memo(({route}: Props) => {
  return (
    <ZeroSixLayout
      bottomButtonTitle={febrileText.diagnosticTests.antibiotic}
      bottomButtonRoute={route?.params?.zeroSix ? ZERO_SIX_ANTIBIOTICS : ANTIBIOTIC_OPTIONS}
    >
      <DiagnosticTests />
    </ZeroSixLayout>
  )
})

export default ZeroSixTests;
