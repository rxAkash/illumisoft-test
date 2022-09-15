import React from 'react';
import AntibioticOptions from '.';
import InfantAppearsIllLayout from '../InfantAppearsIll/InfantAppearsIllLayout';

const InfantAppearIllAntibioticOptions = React.memo(() => {
  return (
    <InfantAppearsIllLayout restartButton>
      <AntibioticOptions />
    </InfantAppearsIllLayout>
  )
})

export default InfantAppearIllAntibioticOptions;
