import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LanguageList = ({ languages }) => {
  const listItems = languages.map(lang => (
    <Link key={lang.id} className="nav-item nav-link" to={`/language/${lang.id}`}>
      {lang.name}
    </Link>
  ));
  return (
    <nav>
      {listItems}
    </nav>
  );
};

LanguageList.propTypes = {
  languages: PropTypes.array,
};

export default LanguageList;

