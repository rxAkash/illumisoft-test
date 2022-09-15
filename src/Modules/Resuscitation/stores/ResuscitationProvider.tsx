import { Provider } from 'mobx-react';
import React from 'react';
import { ResuscitationStore } from './ResuscitationStore';

const resuscitationStore = new ResuscitationStore();

const ResuscitationProvider = React.memo(({children}: any) => {
  return (
    <Provider resuscitationStore={resuscitationStore}>
      {children}
    </Provider>
  )
})

export default ResuscitationProvider;
