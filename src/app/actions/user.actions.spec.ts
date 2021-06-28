import * as fromUser from './user.actions';


describe('navigateToUserPage', () => {
  it('should return an action', () => {
    expect(fromUser.loadUsers().type).toBe('[Users Page] Navigate To User Page');
  });
});

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(fromUser.loadUsers().type).toBe('[User Page] Load Users');
  });
});

describe('loadUsersSuccess', () => {
  it('should return an action', () => {
    expect(fromUser.loadUsersSuccess({ users: [] }).type).toBe('[Users/API] Load Users Success');
  });
});

describe('loadUsersFailure', () => {
  it('should return an action', () => {
    expect(fromUser.loadUsersFailure({ error: {} }).type).toBe('[Users/API] Load Users Failure');
  });
});


