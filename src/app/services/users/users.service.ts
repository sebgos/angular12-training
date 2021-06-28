import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { User } from '../../models';
import * as UserActions from '../../actions/user.actions';
import * as fromUser from '../../reducers/user.reducer';
import {
  selectError,
  selectIsLoaded,
  selectIsLoading,
  selectUser,
  selectUserCount,
  selectUsersList,
  shouldLoadUsers,
} from '../../selectors/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly store$: Store<fromUser.State>) {}

  loadUsers(): void {
    this.store$.dispatch(UserActions.loadUsers());
  }

  loadUsersIfNeeded(): void {
    this.shouldLoadUsers()
      .pipe(
        take(1),
        tap((shouldLoadUsers) => shouldLoadUsers && this.loadUsers())
      )
      .subscribe();
  }

  navigateToUsersPage(userId: User['id']): void {
    this.store$.dispatch(UserActions.navigateToUserPage({ userId }));
  }

  getUsersCount(): Observable<number> {
    return this.store$.select(selectUserCount);
  }

  getUsersList(): Observable<User[]> {
    return this.store$.select(selectUsersList);
  }

  getSelectedUser(): Observable<User | null> {
    return this.store$.select(selectUser);
  }

  isLoading(): Observable<boolean> {
    return this.store$.select(selectIsLoading);
  }

  isLoaded(): Observable<boolean> {
    return this.store$.select(selectIsLoaded);
  }

  getError(): Observable<any> {
    return this.store$.select(selectError);
  }

  shouldLoadUsers(): Observable<boolean> {
    return this.store$.select(shouldLoadUsers);
  }
}
