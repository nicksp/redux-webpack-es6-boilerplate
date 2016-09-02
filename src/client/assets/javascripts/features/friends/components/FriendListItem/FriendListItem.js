import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './FriendListItem.scss';

export default class FriendListItem extends Component {
  static propTypes = {
    deleteFriend: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starFriend: PropTypes.func.isRequired,
    starred: PropTypes.bool
  };

  render() {
    return (
      <li className="friendListItem">
        <div className="friendInfos">
          <div><span>{this.props.name}</span></div>
        <div><small>xx friends in common</small></div>
        </div>
        <div className="friendActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className="btn btn-default btnAction" onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}
