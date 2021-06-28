import { ActionReducerMap } from '@ngrx/store';

import * as fromLogin from './login.reducer';
import * as fromUser from './user.reducer';

export interface State {
  [fromLogin.loginFeatureKey]: fromLogin.State;
  [fromUser.usersFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromLogin.loginFeatureKey]: fromLogin.reducer,
  [fromUser.usersFeatureKey]: fromUser.reducer,
};
