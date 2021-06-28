import { User } from '../models';
import * as fromLogin from './login.actions';

describe('login', () => {
  it('should return an action', () => {
    expect(fromLogin.login().type).toBe('[Login Page] Login');
  });
});

describe('loginSuccess', () => {
  it('should return an action', () => {
    expect(fromLogin.loginSuccess({user: {} as User}).type).toBe('[Login/API] Login Success');
  });
});

describe('loginFailure', () => {
  it('should return an action', () => {
    expect(fromLogin.loginFailure({ error: {} }).type).toBe('[Login/API] Login Failure');
  });
});
