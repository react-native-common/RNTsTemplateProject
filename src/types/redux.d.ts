import { Reducer, Action, ReducersMapObject, Dispatch } from 'redux';

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

export interface Options {
  models: Model[];
  extraReducers?: any;
  initialState: any;
  onError: (e: any) => void;
  onAction?: any[];
}

export interface Model<T = any> {
  namespace: string;
  state?: T;
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
  effects?: EffectsMapObject;
  subscriptions?: SubscriptionsMapObject;
}
