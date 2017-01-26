import React from 'react';
import { Link } from 'react-router';

class LanguageList extends React.Component {
  render() {
    const listItems = this.props.languages.map((lang) => {
      return (
        <Link key={lang.id} className="nav-item nav-link" to={`/language/${lang.id}`}>
          {lang.name}
        </Link>
      );
    });
    return (
      <nav>
        {listItems}
      </nav>
    );
  }
}

export default LanguageList;
