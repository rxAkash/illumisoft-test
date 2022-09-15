import { Provider } from 'mobx-react';
import React from 'react';
import { DiabetesStore } from './DiabetesStore';

const diabetesStore = new DiabetesStore();

const DiabetesProvider = React.memo(({children}: any) => {
  return (
    <Provider diabetesStore={diabetesStore}>
      {children}
    </Provider>
  )
})

export default DiabetesProvider;
