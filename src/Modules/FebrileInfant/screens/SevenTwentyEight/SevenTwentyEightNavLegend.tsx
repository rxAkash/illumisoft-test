import NavLegend from 'Modules/FebrileInfant/components/NavLegend';
import React from 'react';
import { SEVEN_TWENTY_EIGHT_NAV_LEGEND } from './navConfig';

const SevenTwentyEightNavLegend = React.memo(() => {
  return (
    <NavLegend
      items={SEVEN_TWENTY_EIGHT_NAV_LEGEND}
      pathway='Febrile 8-21 Pathway'
    />
  )
})

export default SevenTwentyEightNavLegend;
