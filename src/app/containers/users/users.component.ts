import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { UsersService } from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  readonly usersList$ = this.usersService.getUsersList();
  readonly isLoading$ = this.usersService.isLoading();

  constructor(private readonly usersService: UsersService) {}

  ngOnInit() {
    this.usersService.loadUsersIfNeeded();
  }
}
