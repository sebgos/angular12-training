import { createAction, props } from '@ngrx/store';
import { User } from '../models';

export const login = createAction(
  '[Login] Login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: any }>()
);
