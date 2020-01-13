import React, { ReactNode } from 'react';
const { create } = require('dva-core');
import { Provider, connect as connectComponent } from 'react-redux';
import { Store } from 'redux';
import { Options } from '@/types/redux';

export const connect = (mapStateToProps: any, actions?: any) => {
  return (target: any) =>
    connectComponent(mapStateToProps, actions)(target) as any;
};

export default function(options: Options) {
  const app = create(options);
  // HMR workaround
  if (!global.registered) {
    options.models.forEach(model => app.model(model));
  }
  global.registered = true;

  app.start();
  // eslint-disable-next-line no-underscore-dangle
  const store: Store = app._store;

  app.start = (container: ReactNode) => () => (
    <Provider store={store}>{container}</Provider>
  );
  app.getStore = () => store;

  return app;
}
