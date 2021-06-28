import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from '../reducers/user.reducer';
import { User } from '../models';
import { selectRouteParam } from './router.selectors';
import { Dictionary } from '@ngrx/entity';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.usersFeatureKey
);

const { selectAll, selectEntities, selectTotal } =
  fromUser.adapter.getSelectors();

export const selectUsersList = createSelector(selectUserState, selectAll);
export const selectUserCount = createSelector(selectUserState, selectTotal);

const selectUsersDictionary = createSelector(selectUserState, selectEntities);
const selectSelectedCarId = selectRouteParam('userId');
export const selectUser = createSelector(
  selectUsersDictionary,
  selectSelectedCarId,
  (users: Dictionary<User>, userId): User | null => {
    return userId ? users[userId] ?? null : null;
  }
);

export const selectIsLoading = createSelector(
  selectUserState,
  (state: fromUser.State): boolean => state.isLoading
);

export const selectIsLoaded = createSelector(
  selectUserState,
  (state: fromUser.State): boolean => state.isLoaded
);

export const shouldLoadUsers = createSelector(
  selectUserState,
  (state: fromUser.State): boolean => !state.isLoaded && !state.isLoading
);

export const selectError = createSelector(
  selectUserState,
  (state: fromUser.State): any => state.error
);
