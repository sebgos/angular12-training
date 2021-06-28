import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { UsersService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  readonly usersCount$ = this.usersService.getUsersCount();
  readonly isLoading$ = this.usersService.isLoading();

  constructor(private readonly usersService: UsersService) {}

  ngOnInit() {
    this.usersService.loadUsersIfNeeded();
  }
}
