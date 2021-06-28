import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly isLoading$ = this.loginService.isLoading();
  readonly error$ = this.loginService.getError();

  readonly loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private readonly loginService: LoginService) {}

  login() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.loginService.login(username, password);
  }
}
