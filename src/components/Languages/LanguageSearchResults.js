import React from 'react';
import { Link } from 'react-router';

const LanguageSearchResults = ({ hit }) => (
  <div>
    <Link key={hit.id} className="nav-item nav-link" to={`/language/${hit.id}`} activeClassName="active">
      {hit.name}
    </Link>
  </div>
);

LanguageSearchResults.propTypes = {
  hit: React.PropTypes.string,
};

export default LanguageSearchResults;
