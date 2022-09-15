import FebrileInfantLayout from 'Modules/FebrileInfant/components/FebrileInfantLayout';
import React, { ReactElement } from 'react';
import SixtyNineNinetyNavLegend from './SixtyNineNinetyNavLegend';

interface Props {
  children: ReactElement<any, any> | ReactElement<any, any>[];
  bottomButtonTitle?: string;
  bottomButtonRoute?: string;
  restartButton?: boolean;
  routeParams?: any;
  hideButton?: boolean;

}

const SixtyNineNinetyLayout = React.memo(({
  children,
  bottomButtonRoute,
  bottomButtonTitle,
  restartButton,
  routeParams,
  hideButton

}: Props) => {
  return (
    <FebrileInfantLayout
      customHeaderComponent={() => <SixtyNineNinetyNavLegend />}
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

export default SixtyNineNinetyLayout;
