import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap, tap } from 'rxjs/operators';

import * as LoginActions from '../actions/login.actions';
import { ApiService, LoginService } from '../services';



@Injectable()
export class LoginEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      concatMap(({ username, password}) =>this.apiService.login(username, password)
        .pipe(
          map(user => LoginActions.loginSuccess({ user })),
          catchError(error => of(LoginActions.loginFailure({ error })))
        )
      )
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService,
  ) {}

}
