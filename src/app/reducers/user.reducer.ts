import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UsersActions from '../actions/user.actions';
import { User } from '../models';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> {
  isLoading: boolean;
  isLoaded: boolean;
  error: any | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  isLoading: false,
  isLoaded: false,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(UsersActions.loadUsersSuccess, (state, { users }) => {
    return adapter.addMany(users, {
      ...state,
      isLoading: false,
      isLoaded: true,
      error: null,
    });
  }),
  on(UsersActions.loadUsersFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error,
    };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
