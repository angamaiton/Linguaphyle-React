import React, { Component } from 'react';
import { SearchBox, Hits, RefinementList, CurrentRefinements } from 'react-instantsearch/dom';
import LanguageSearchResults from '../components/Languages/LanguageSearchResults';
import './Search.css';

class Search extends Component {
  componentDidMount() {
    console.log('hello');
  }
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <CurrentRefinements />
          <SearchBox />
          <RefinementList attributeName="name" />
          <h4 id="resultsHeader">Results</h4>
          <Hits hitComponent={LanguageSearchResults} />
        </div>
        <div className="col-9">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Search;
