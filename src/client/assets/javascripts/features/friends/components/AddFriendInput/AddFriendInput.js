import React, { Component, PropTypes } from 'react';

import './AddFriendInput.scss';

export default class AddFriendInput extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    name: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.props.name || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend(name);
      this.setState({ name: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        autoFocus="true"
        className="form-control addFriendInput"
        placeholder="Type the name of a rapper"
        value={this.state.name}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    );
  }
}
