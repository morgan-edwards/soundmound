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
import SessionFormContainer from './session_form/session_form_container';
import LogoutContainer from './logout/logout_container';

const App = () => (
  <div>
    <header>
      <h1>SoundMound</h1>
      <NavBarContainer />
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <Route path="/logout" component={LogoutContainer} />
  </div>
);

export default App;
