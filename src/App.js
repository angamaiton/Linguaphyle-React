import React, { Component } from 'react';
import Rebase from 're-base';
import LanguageList from './LanguageList';
import LanguageDetails from './LanguageDetails';
import logo from './logo.svg';
import './App.css';

const base = Rebase.createClass({
  apiKey: "AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac",
  authDomain: "linguaphyle-react.firebaseapp.com",
  databaseURL: "https://linguaphyle-react.firebaseio.com",
  storageBucket: "linguaphyle-react.appspot.com",
  messagingSenderId: "1071573957158"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true
    }
  }
  componentDidMount() {
    base.fetch('languages', {
      context: this,
      asArray: true,
      then(list){
        this.setState({list});
        console.log(this.state.list);
      }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <LanguageList items={this.state.list} />
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
