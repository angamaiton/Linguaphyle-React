import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
