import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
} from '../../selectors/login.selectors';
import * as LoginActions from '../../actions/login.actions';
import * as fromLogin from '../../reducers/login.reducer';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly store$: Store<fromLogin.State>) {}

  login(username: string, password: string): void {
    this.store$.dispatch(LoginActions.login({ username, password }));
  }

  isLoggedIn(): Observable<boolean> {
    return this.store$.select(selectIsLoggedIn);
  }

  isLoading(): Observable<boolean> {
    return this.store$.select(selectIsLoading);
  }

  getError(): Observable<any> {
    return this.store$.select(selectError);
  }
}
