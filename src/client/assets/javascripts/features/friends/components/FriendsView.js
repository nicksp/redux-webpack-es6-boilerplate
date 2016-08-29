import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as friendsActions, selector } from '../';
import AddFriendInput from './AddFriendInput';
import FriendList from './FriendList';
import './FriendListApp.scss';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(friendsActions, dispatch)
}))
export default class FriendsView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    friends: PropTypes.object.isRequired
  };

  render () {
    const { friends: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">
        <h1>Best Rappers List</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}
