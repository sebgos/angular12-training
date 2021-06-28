import { TestBed } from '@angular/core/testing';

import { LoadUsersGuard } from './load-users.guard';

describe('LoadUsersGuard', () => {
  let guard: LoadUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
