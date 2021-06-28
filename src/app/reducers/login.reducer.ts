import { createReducer, on } from '@ngrx/store';

import * as LoginActions from '../actions/login.actions';
import { User } from '../models';

export const loginFeatureKey = 'login';

export interface State {
  user: User | null;
  isLoading: boolean;
  isLoaded: boolean;
  error: any | null;
}

export const initialState: State = {
  user: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(LoginActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    isLoaded: true,
    error: null,
  })),
  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
