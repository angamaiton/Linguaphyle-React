import React, { Component } from 'react';
import LanguageSearchForm from '../components/Languages/LanguageSearchForm';
import LanguageSearchResults from '../components/Languages/LanguageSearchResults';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <input
                type="email" className="form-control" id="languageInput"
                aria-describedby="languageSearchHelp"
                placeholder="Search for a language (or a vocabulary word)"
              />
            </div>
          </form>
          <h4 id="resultsHeader">Results</h4>
          <LanguageSearchResults onTermChange={this.handleTermChange} />
        </div>
      </div>
    );
  }
}

export default Search;
