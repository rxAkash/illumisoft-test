import React from 'react';
import AntibioticOptions from '.';
import ZeroSixLayout from '../ZeroSIxPathway/ZeroSixLayout';

const ZeroSixAntibioticOptions = React.memo(() => {
  return (
    <ZeroSixLayout restartButton>
      <AntibioticOptions />
    </ZeroSixLayout>
  )
})

export default ZeroSixAntibioticOptions;
