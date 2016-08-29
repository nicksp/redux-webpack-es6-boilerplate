import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div className="page-container">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
