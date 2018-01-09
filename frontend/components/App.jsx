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
import ModalOverlayContainer from './modals/modal_overlay_container';
import EditModalContainer from './modals/edit_modal_container';
import PlayerContainer from './player/player_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => {
  const modalClass = (props.modalOpen) ? "modal-open" : "";
  return(
    <div className={modalClass}>
      <Switch>
        <Route exact path="/" component={HeroContainer} />
        <Route path="/" component={DashboardContainer} />
      </Switch>
      <PlayerContainer />

      <FormModalContainer />
      <ModalOverlayContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    modalOpen: state.ui.modals.modalOpen,
  };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(App));
