import React from 'react';
import Router from './Router';
import dva from './utils/dva';
import models from './models';

const App = dva({
  initialState: {},
  models: models,
  onError: (e: any) => {
    console.log('onError', e);
  },
}).start(<Router />);

export default App;
