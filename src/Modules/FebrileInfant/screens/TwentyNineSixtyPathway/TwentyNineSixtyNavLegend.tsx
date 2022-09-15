import NavLegend from 'Modules/FebrileInfant/components/NavLegend';
import React from 'react';
import { TWENTY_NINE_SIXTY_NAV_LEGEND } from './navConfig';

const TwentyNineSixtyNavLegend = React.memo(() => {
  return (
    <NavLegend
      items={TWENTY_NINE_SIXTY_NAV_LEGEND}
      pathway='Febrile 22-28 Pathway'
    />
  )
})

export default TwentyNineSixtyNavLegend;
