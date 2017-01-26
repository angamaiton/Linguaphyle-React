import React from 'react';
import Rebase from 're-base';

class LanguageList extends React.Component {
  render() {
    let listItems = this.props.items.map((lang) => {
      return (
        <li key={lang.id}>
          <span>{lang.name}</span>
        </li>
      );
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default LanguageList;