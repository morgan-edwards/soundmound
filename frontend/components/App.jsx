import React from 'react';
import { Provider, connect } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter,
} from 'react-router-dom';

import DashboardContainer from './dashboard/dashboard_container';
import HeroContainer from './landing/hero_container';
import FormModalContainer from './session_modal/form_modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={HeroContainer} />
        <Route path="/" component={DashboardContainer} />
      </Switch>
      <FormModalContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.currentUser)};
};

export default withRouter(connect(
  mapStateToProps,
  null
)(App));
