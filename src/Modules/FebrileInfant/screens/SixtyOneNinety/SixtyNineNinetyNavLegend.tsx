import NavLegend from 'Modules/FebrileInfant/components/NavLegend';
import React from 'react';
import { SIXTY_ONE_NINETY_NAV_LEGEND} from './navConf';

const SixtyNineNinetyNavLegend = React.memo(() => {
  return (
    <NavLegend
      items={SIXTY_ONE_NINETY_NAV_LEGEND}
      pathway='Febrile 29-60 Days Pathway'
    />
  )
})

export default SixtyNineNinetyNavLegend;
