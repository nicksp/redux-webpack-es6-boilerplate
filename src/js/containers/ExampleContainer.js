import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExampleContainer extends Component {
  render() {
    if (!this.props.prop) {
      return <div>ExampleContainer::Initialize app state first.</div>;
    }

    return (
      <div>
        <h3>Example Container</h3>
        <p>Sample text for example container.</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    prop: state.prop
  };
}

export default connect(mapStateToProps)(ExampleContainer);
