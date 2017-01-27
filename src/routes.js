import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Languages from './Languages';
import LanguageDetails from './LanguageDetails';
import SublanguageList from './SublanguageList';
import Linguistics from './Linguistics';
import Etymology from './Etymology';
import EtymologyDetails from './EtymologyDetails';
import NotFound from './NotFound';

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/languages" component={Languages}>
        <Route path="/language/:id" component={LanguageDetails}>
          <Route path="/language/:id/sublanguages" component={SublanguageList} />
        </Route>
      </Route>
      <Route path="/linguistics" component={Linguistics} />
      <Route path="/etymology" component={Etymology}>
        <Route path="/etymology/:id" component={EtymologyDetails} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
