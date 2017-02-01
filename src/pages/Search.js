import React, { Component } from 'react';
import Rebase from 're-base';
import { InstantSearch, SearchBox, Hits, RefinementList, ClearAll, CurrentRefinements } from 'react-instantsearch/dom';
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
      term: '',
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

  render() {
    return (
      <div className="row">
        <div className="col">
          <InstantSearch
            appId="Y17G9F7VIZ"
            apiKey="57ab0370251fce96c5c0047cef2b4f69"
            indexName="dev_languages"
          >
            <CurrentRefinements />
            <SearchBox />
            <ClearAll />
            <RefinementList attributeName="category" />
            <h4 id="resultsHeader">Results</h4>
            <Hits hitsComponent={LanguageSearchResults} />
          </InstantSearch>
        </div>
      </div>
    );
  }
}

export default Search;
