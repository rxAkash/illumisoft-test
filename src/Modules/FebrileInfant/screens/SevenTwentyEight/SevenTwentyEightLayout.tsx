import FebrileInfantLayout from 'Modules/FebrileInfant/components/FebrileInfantLayout';
import React, { ReactElement } from 'react';
import SevenTwentyEightNavLegend from './SevenTwentyEightNavLegend';

interface Props {
  children: ReactElement<any, any> | ReactElement<any, any>[];
  bottomButtonTitle?: string;
  bottomButtonRoute?: string;
  restartButton?: boolean;
  routeParams?: any;
}

const SevenTwentyEightLayout = React.memo(({
  children,
  bottomButtonRoute,
  bottomButtonTitle,
  restartButton,
  routeParams
}: Props) => {
  return (
    <FebrileInfantLayout
      customHeaderComponent={() => <SevenTwentyEightNavLegend />}
      bottomButtonTitle={bottomButtonTitle}
      bottomButtonRoute={bottomButtonRoute}
      restartButton={restartButton}
      routeParams={routeParams}
    >
      {children}
    </FebrileInfantLayout>
  )
})

export default SevenTwentyEightLayout;
