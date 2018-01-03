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
import Hero from './landing/hero';
import FormModal from './session_modal/form_modal_container';
import LogoutContainer from './logout/logout_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main-content">
    <header>
    </header>
    <Hero />
    <FormModal />
    <Route path="/logout" component={LogoutContainer} />
  </div>
);

export default App;
