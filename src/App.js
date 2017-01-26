import React, { Component } from 'react';
import Navigation from './Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container" id="appContainer">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
