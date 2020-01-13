import React, { ReactNode } from 'react';
const { create } = require('dva-core');
import { Provider, connect as connectComponent } from 'react-redux';
import { Reducer, Action, ReducersMapObject, Dispatch, Store } from 'redux';

export const connect = (mapStateToProps: any, actions?: any) => {
  return (target: any) =>
    connectComponent(mapStateToProps, actions)(target) as any;
};

export interface EffectsCommandMap {
  put: <A extends Action>(action: A) => any;
  call: Function;
  select: Function;
  take: Function;
  cancel: Function;
  [key: string]: any;
}
export interface EffectsMapObject {
  [key: string]: Effect | EffectWithType;
}
export interface ReducerEnhancer {
  (reducer: Reducer<any>): void;
}
export interface SubscriptionAPI {
  dispatch: Dispatch<any>;
}
export type ActionWithPayload = { action: Action; payload: any };
export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
export type EffectWithType = [Effect, { type: EffectType }];
export type Effect = (
  action: ActionWithPayload,
  effects: EffectsCommandMap
) => void;
export type ReducersMapObjectWithEnhancer = [
  ReducersMapObject,
  ReducerEnhancer
];
export type Subscription = (api: SubscriptionAPI, done: Function) => void;
export interface SubscriptionsMapObject {
  [key: string]: Subscription;
}
export interface Model<T = any> {
  namespace: string;
  state?: T;
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
  effects?: EffectsMapObject;
  subscriptions?: SubscriptionsMapObject;
}

export interface Options {
  models: Model[];
  extraReducers?: any;
  initialState: any;
  onError: (e: any) => void;
  onAction?: any[];
}

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
