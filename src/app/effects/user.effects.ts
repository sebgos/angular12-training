import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';

import * as UserActions from '../actions/user.actions';
import { ApiService } from '../services';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.apiService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  navigateToUserPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.navigateToUserPage),
      tap(({userId}) =>
      this.router.navigate(['/users', userId])
      )
    ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}
}
