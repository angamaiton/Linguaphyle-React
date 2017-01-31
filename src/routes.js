import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/Home';
import Languages from './pages/Languages';
import LanguageDetails from './components/Languages/LanguageDetails';
import SublanguageList from './components/Languages/SublanguageList';
import Linguistics from './pages/Linguistics';
import Etymology from './pages/Etymology';
import EtymologyDetails from './components/Etymology/EtymologyDetails';
import Login from './pages/Login';
import Search from './pages/Search';
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
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
