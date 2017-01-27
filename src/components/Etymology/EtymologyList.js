import React, { PropTypes } from 'react';
import './EtymologyList.css';

const EtymologyList = () => (
  <h4 className="listHeader">Word List</h4>
);

EtymologyList.propTypes = {
  words: PropTypes.array,
};

export default EtymologyList;

