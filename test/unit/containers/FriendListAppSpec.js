import { renderComponent, expect } from '../testHelper';
import FriendListApp from '../../../src/js/containers/FriendListApp/FriendListApp';

describe('FriendListApp', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(FriendListApp);
  });

  it('shows an input to add a new friend', () => {
    expect(component.find('.addFriendInput')).to.exist;
  });

  it('shows a friend list', () => {
    expect(component.find('.friendList')).to.exist;
  });
});
