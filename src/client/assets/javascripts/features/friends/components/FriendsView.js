import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as friendsActions, selector } from '../';
import FriendsLayout from './FriendsLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(friendsActions, dispatch)
}))
export default class FriendsView extends Component {
  render() {
    return (
      <div>
        <FriendsLayout {...this.props} />
      </div>
    );
  }
}
