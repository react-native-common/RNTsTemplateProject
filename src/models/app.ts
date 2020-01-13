import { Model } from '@/types/redux';

export interface AppModelState {
  login: boolean;
  loading: boolean;
  fetching: boolean;
}

const model: Model<AppModelState> = {
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  reducers: {
    save(state: AppModelState, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  effects: {
    *login(_, { put }) {
      yield put({ type: 'save', payload: { login: true } });
    },
  },
};

export default model;
