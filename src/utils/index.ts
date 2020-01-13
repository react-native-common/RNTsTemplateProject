import { DispatchProp } from 'react-redux';
import { NavigationStackScreenProps } from 'react-navigation-stack';

export { default as Storage } from './storage';

export const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export const createAction = (type: string) => (payload?: any) => ({
  type,
  payload,
});

export type PageBaseProps = DispatchProp & NavigationStackScreenProps;
