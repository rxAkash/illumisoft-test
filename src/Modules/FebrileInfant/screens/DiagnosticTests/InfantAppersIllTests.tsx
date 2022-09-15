import React from 'react';
import { febrileText } from 'Modules/FebrileInfant/config/strings';
import { ANTIBIOTIC_OPTIONS, ZERO_SIX_ANTIBIOTICS } from 'Modules/FebrileInfant/navigation/routes';
import DiagnosticTests from '.';
import InfantAppearsIllLayout from '../InfantAppearsIll/InfantAppearsIllLayout';

interface Props {
  route: {
    params: {
      zeroSix?: boolean;
    }
  }
}

const InfantAppearIllTests = React.memo(({route}: Props) => {
  return (
    <InfantAppearsIllLayout
      bottomButtonTitle={febrileText.diagnosticTests.antibiotic}
      bottomButtonRoute={route?.params?.zeroSix ? ZERO_SIX_ANTIBIOTICS : ANTIBIOTIC_OPTIONS}
    >
      <DiagnosticTests />
    </InfantAppearsIllLayout>
  )
})

export default InfantAppearIllTests;
