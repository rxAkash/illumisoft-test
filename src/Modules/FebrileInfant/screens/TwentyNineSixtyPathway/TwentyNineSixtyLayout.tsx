import FebrileInfantLayout from 'Modules/FebrileInfant/components/FebrileInfantLayout';
import React, { ReactElement } from 'react';
import TwentyNineSixtyNavLegend from './TwentyNineSixtyNavLegend';

interface Props {
  children: ReactElement<any, any> | ReactElement<any, any>[];
  bottomButtonTitle?: string;
  bottomButtonRoute?: string;
  restartButton?: boolean;
  routeParams?: any;
  hideButton?: boolean;
}

const TwentyNineSixtyLayout = React.memo(({
  children,
  bottomButtonRoute,
  bottomButtonTitle,
  restartButton,
  routeParams,
  hideButton
}: Props) => {
  return (
    <FebrileInfantLayout
      customHeaderComponent={() => <TwentyNineSixtyNavLegend />}
      bottomButtonTitle={bottomButtonTitle}
      bottomButtonRoute={bottomButtonRoute}
      restartButton={restartButton}
      routeParams={routeParams}
      hideButton={hideButton}
    >
      {children}
    </FebrileInfantLayout>
  )
})

export default TwentyNineSixtyLayout;
