import React, { Component } from 'react';
import Rebase from 're-base';

import EtymologyList from '../components/Etymology/EtymologyList';

const base = Rebase.createClass({
  apiKey: 'AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac',
  authDomain: 'linguaphyle-react.firebaseapp.com',
  databaseURL: 'https://linguaphyle-react.firebaseio.com',
  storageBucket: 'linguaphyle-react.appspot.com',
  messagingSenderId: '1071573957158',
});

class Etymology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
    };
  }
  componentDidMount() {
    base.fetch('etymology', {
      context: this,
      asArray: true,
      then(list) {
        this.setState({ list });
      },
    });
  }
  render() {
    return (
      <div className="row">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Etymology (TBD)</h1>
            <p className="lead">This is the section where you can look up etymology.</p>
          </div>
        </div>
        <div className="col">
          <EtymologyList />
        </div>
      </div>
    );
  }
}

export default Etymology;
