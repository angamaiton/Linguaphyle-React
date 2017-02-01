import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <Navigation />
      <div className="container" id="appContainer">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
