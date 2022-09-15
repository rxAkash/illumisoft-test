import FebrileInfantLayout from 'Modules/FebrileInfant/components/FebrileInfantLayout';
import React, { ReactElement } from 'react';
import ZeroSixNavLegend from './ZeroSixNavLegend';

interface Props {
  children: ReactElement<any, any> | ReactElement<any, any>[];
  bottomButtonTitle?: string;
  bottomButtonRoute?: string;
  restartButton?: boolean;
  routeParams?: any;
}

const ZeroSixLayout = React.memo(({
  children,
  bottomButtonRoute,
  bottomButtonTitle,
  restartButton,
  routeParams
}: Props) => {
  return (
    <FebrileInfantLayout
      customHeaderComponent={() => <ZeroSixNavLegend />}
      bottomButtonTitle={bottomButtonTitle}
      bottomButtonRoute={bottomButtonRoute}
      restartButton={restartButton}
      routeParams={routeParams}
    >
      {children}
    </FebrileInfantLayout>
  )
})

export default ZeroSixLayout;
