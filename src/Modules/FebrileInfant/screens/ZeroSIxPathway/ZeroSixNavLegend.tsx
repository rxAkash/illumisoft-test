import NavLegend from 'Modules/FebrileInfant/components/NavLegend';
import React from 'react';
import { ZERO_SIX_NAV_LEGEND } from './config';

const ZeroSixNavLegend = React.memo(() => {
  return (
    <NavLegend
      items={ZERO_SIX_NAV_LEGEND}
      pathway='Febrile 0-7 Pathway'
    />
  )
})

export default ZeroSixNavLegend;
