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
import LogoutContainer from './logout/logout_container';
import UserProfileContainer from './dashboard/main_content/music_index_container';
import MusicIndexContainer from './dashboard/main_content/music_index_container';
import FormModalContainer from './session_modal/form_modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => {
  const home = (props.loggedIn) ?
    <DashboardContainer /> :
    <HeroContainer />;
  return(
    <div className="app-content">
      <Route exact path="/" render={() => home} />

      <Route path="/logout" component={LogoutContainer} />
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
