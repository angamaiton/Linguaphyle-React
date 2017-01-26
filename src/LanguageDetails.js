import React from 'react';

class LanguageDetails extends React.Component {
  componentDidMount() {
    console.log(this.props.description);
  }
  render() {
    return (
      <div>Hello, {this.props.description}</div>
    );
  }
}

export default LanguageDetails;