import React from 'react';
import { Highlight } from 'react-instantsearch';

const LanguageSearchResults = ({ hit }) => (
  <div>
    <Highlight attributeName="name" hit={hit} />
  </div>
);

LanguageSearchResults.propTypes = {
  hit: React.PropTypes.string,
};

export default LanguageSearchResults;
