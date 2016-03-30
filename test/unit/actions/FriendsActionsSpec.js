import { expect } from '../testHelper';
import * as types from '../../../src/js/constants/ActionTypes';
import { addFriend, deleteFriend, starFriend } from '../../../src/js/actions/FriendsActions';

describe('Actions', () => {

  describe('addFriend', () => {

    it('has the correct type', () => {
      const action = addFriend();
      expect(action.type).to.equal(types.ADD_FRIEND);
    });

    it('has the correct payload', () => {
      const action = addFriend('Eminem');
      expect(action.name).to.equal('Eminem');
    });
  });

  describe('deleteFriend', () => {

    it('has the correct type', () => {
      const action = deleteFriend();
      expect(action.type).to.equal(types.DELETE_FRIEND);
    });

    it('has the correct payload', () => {
      const action = deleteFriend(0);
      expect(action.id).to.equal(0);
    });
  });

  describe('starFriend', () => {

    it('has the correct type', () => {
      const action = starFriend();
      expect(action.type).to.equal(types.STAR_FRIEND);
    });

    it('has the correct payload', () => {
      const action = starFriend(1);
      expect(action.id).to.equal(1);
    });
  });
});
