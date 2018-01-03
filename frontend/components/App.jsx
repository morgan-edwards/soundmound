import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import HeroContainer from './landing/hero_container';
import FormModalContainer from './session_modal/form_modal_container';
import LogoutContainer from './logout/logout_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main-content">
    <header>
    </header>
    <HeroContainer />
    <FormModalContainer />
    <Route path="/logout" component={LogoutContainer} />
  </div>
);

export default App;
