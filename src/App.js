import React, { PropTypes, Component } from 'react';
import qs from 'qs';
import { InstantSearch } from 'react-instantsearch/dom';
import Navigation from './Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchState: { ...qs.parse(this.props.router.location.query) } };
  }

  createURL() {
    this.state = `?${qs.stringify(this.state)}`;
  }

  render() {
    return (
      <div className="App">
        <InstantSearch
          appId="Y17G9F7VIZ"
          apiKey="57ab0370251fce96c5c0047cef2b4f69"
          indexName="dev_languages"
        >
          <Navigation />
          <div className="container" id="appContainer">
            {this.props.children}
          </div>
        </InstantSearch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
