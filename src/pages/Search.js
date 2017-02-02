import React, { Component, PropTypes } from 'react';
import { SearchBox, Hits, RefinementList, CurrentRefinements } from 'react-instantsearch/dom';
import LanguageSearchResults from '../components/Languages/LanguageSearchResults';
import './Search.css';

class Search extends Component {
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

Search.propTypes = {
  children: PropTypes.node,
};

export default Search;
