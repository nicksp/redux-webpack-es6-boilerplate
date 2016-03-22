import React, { Component } from 'react';

import ExampleContainer from '../containers/ExampleContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux minimal boilerplate</h1>
        <ExampleContainer />
      </div>
    );
  }
}
