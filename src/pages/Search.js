import React, { Component } from 'react';
import Rebase from 're-base';
import LanguageSearchForm from '../components/Languages/LanguageSearchForm';
import LanguageSearchResults from '../components/Languages/LanguageSearchResults';
import './Search.css';

const base = Rebase.createClass({
  apiKey: 'AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac',
  authDomain: 'linguaphyle-react.firebaseapp.com',
  databaseURL: 'https://linguaphyle-react.firebaseio.com',
  storageBucket: 'linguaphyle-react.appspot.com',
  messagingSenderId: '1071573957158',
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  componentDidMount() {
    base.fetch('languages', {
      context: this,
      asArray: true,
      then(term) {
        this.setState({ term });
      },
    });
  }
  handleTermChange(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <input
                type="text" className="form-control" id="languageInput"
                aria-describedby="languageSearchHelp"
                placeholder="Search for a language (or a vocabulary word)"
              />
            </div>
          </form>
          <h4 id="resultsHeader">Results</h4>
          <LanguageSearchResults results={this.state.term} />
        </div>
      </div>
    );
  }
}

export default Search;
