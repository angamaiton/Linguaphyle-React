import React, { Component } from 'react';
import Rebase from 're-base';
import LanguageList from './LanguageList';
import LanguageSearchForm from './LanguageSearchForm';

const base = Rebase.createClass({
  apiKey: 'AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac',
  authDomain: 'linguaphyle-react.firebaseapp.com',
  databaseURL: 'https://linguaphyle-react.firebaseio.com',
  storageBucket: 'linguaphyle-react.appspot.com',
  messagingSenderId: '1071573957158',
});

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
    };
  }
  componentDidMount() {
    base.fetch('languages', {
      context: this,
      asArray: true,
      then(list) {
        this.setState({ list });
        console.log(this.state.list);
      },
    });
  }
  render() {
    return (
      <div className="row">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Languages (TBD)</h1>
            <p className="lead">This is the section where you can look up languages.</p>
          </div>
        </div>
        <div className="col-12">
          <LanguageSearchForm />
        </div>
        <div className="col-3">
          <h4>Languages</h4>
          <LanguageList languages={this.state.list} />
        </div>
        <div className="col-9">
          <h4>Details</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Languages;
