import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Languages from './Languages';
import LanguageDetails from './LanguageDetails';
import Linguistics from './Linguistics';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/languages" component={Languages}>
        <Route path="/language/:id" component={LanguageDetails} />
      </Route>
      <Route path="/linguistics" />
    </Route>
  </Router>
);

export default Routes;
