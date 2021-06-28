import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLogin from '../reducers/login.reducer';

export const selectLoginState = createFeatureSelector<fromLogin.State>(
  fromLogin.loginFeatureKey
);

export const selectIsLoggedIn = createSelector(
  selectLoginState,
  (state: fromLogin.State): boolean => !!state?.user?.id
);

export const selectIsLoading = createSelector(
  selectLoginState,
  (state: fromLogin.State): boolean => state.isLoading
);

export const selectError = createSelector(
  selectLoginState,
  (state: fromLogin.State): any => state.error
);
