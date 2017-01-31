import React, { Component } from 'react';
import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: 'AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac',
  authDomain: 'linguaphyle-react.firebaseapp.com',
  databaseURL: 'https://linguaphyle-react.firebaseio.com',
  storageBucket: 'linguaphyle-react.appspot.com',
  messagingSenderId: '1071573957158',
});

class LanguageSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }
  componentDidMount() {
    
  }
  onInputChange(term) {
    base.syncState('languages/', {
      context: this,
      state: 'term',
      asArray: true,
      queries: {
        orderByChild: 'name',
        limitToLast: 3
      }
    });
    this.props.onTermChange(term);
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="languageInput">Language lookup</label>
          <input
            type="text" className="form-control" id="languageInput"
            aria-describedby="languageSearchHelp"
            placeholder="Search for a language (or a vocabulary word)"
            onChange={event => this.onInputChange(event.target.value)}
          />
          <small id="languageSearchHelp" className="form-text text-muted">
            We don't share your data with anyone else.
          </small>
        </div>
      </form>
    );
  }
}

export default LanguageSearchForm;
