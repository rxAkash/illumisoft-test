import FebrileInfantLayout from 'Modules/FebrileInfant/components/FebrileInfantLayout';
import React, { ReactElement } from 'react';
import InfantAppersIllNavLegend from './InfantAppearsIllNavLegend';

interface Props {
  children: ReactElement<any, any> | ReactElement<any, any>[];
  bottomButtonTitle?: string;
  bottomButtonRoute?: string;
  restartButton?: boolean;
}

const InfantAppearsIllLayout = React.memo(({
  children,
  bottomButtonRoute,
  bottomButtonTitle,
  restartButton
}: Props) => {
  return (
    <FebrileInfantLayout
      customHeaderComponent={() => <InfantAppersIllNavLegend />}
      bottomButtonTitle={bottomButtonTitle}
      bottomButtonRoute={bottomButtonRoute}
      restartButton={restartButton}
    >
      {children}
    </FebrileInfantLayout>
  )
})

export default InfantAppearsIllLayout;
