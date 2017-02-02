import React, { Component, PropTypes } from 'react';
import Rebase from 're-base';
import { Link } from 'react-router';
import './SublanguageList.css';

const base = Rebase.createClass({
  apiKey: 'AIzaSyCcfqngXjxwKNjuj2stWhLwmH6D2IMd9ac',
  authDomain: 'linguaphyle-react.firebaseapp.com',
  databaseURL: 'https://linguaphyle-react.firebaseio.com',
  storageBucket: 'linguaphyle-react.appspot.com',
  messagingSenderId: '1071573957158',
});


class SublanguageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sublanguages: [],
    };
  }
  componentDidMount() {
    base.fetch(`/languages/${this.props.params.id}/sublanguages`, {
      context: this,
      asArray: true,
      then(sublanguages) {
        this.setState({ sublanguages });
        console.log(this.props.params);
      },
    });
  }
  render() {
    return (
      <nav id="sublanguageList">
        <h5>Sublanguages</h5>
        <nav>
          {this.state.sublanguages.map(sublang => (
            <Link key={sublang.id} className="nav-item nav-link" to="/">{sublang.name}</Link>
          ))}
        </nav>
      </nav>
    );
  }
}

SublanguageList.propTypes = {

};

export default SublanguageList;

