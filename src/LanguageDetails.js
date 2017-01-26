import React from 'react';
import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: 'AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac',
  authDomain: 'linguaphyle-react.firebaseapp.com',
  databaseURL: 'https://linguaphyle-react.firebaseio.com',
  storageBucket: 'linguaphyle-react.appspot.com',
  messagingSenderId: '1071573957158',
});

class LanguageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: {},
    };
  }
  componentDidMount() {
    this.ref = base.syncState(`/languages/${this.props.params.id}`, {
      context: this,
      asArray: false,
      state: 'language',
    });
  }
  render() {
    return (
      <div>{this.state.language.description}</div>
    );
  }
}

export default LanguageDetails;
