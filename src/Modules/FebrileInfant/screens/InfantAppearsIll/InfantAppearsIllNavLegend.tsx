import NavLegend from 'Modules/FebrileInfant/components/NavLegend';
import React from 'react';
import { INFANT_APPEARS_NAV_CONF } from './config';

const InfantAppersIllNavLegend = React.memo(() => {
  return (
    <NavLegend
      items={INFANT_APPEARS_NAV_CONF}
      pathway='Febrile - Infant Appears Ill'
    />
  )
})

export default InfantAppersIllNavLegend;
