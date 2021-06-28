import { createAction, props } from '@ngrx/store';

import { User } from '../models';

export const navigateToUserPage = createAction(
  '[Users Page] Navigate To User Page',
  props<{ userId: User['id'] }>(),
);

export const loadUsers = createAction('[Users Page] Load Users');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);
