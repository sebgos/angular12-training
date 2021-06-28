import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { UsersService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class LoadUsersGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  private loadUsers() {
    return this.usersService.loadUsers().pipe(mapTo(true));
  }
}
