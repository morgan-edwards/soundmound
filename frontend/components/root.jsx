import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import LogoutContainer from './logout/logout_container';
import DashboardContainer from './dashboard/dashboard_container';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>

        <App />
        <Route path="/stream" component={DashboardContainer} />
        <Route path="/logout" component={LogoutContainer} />

      </div>
    </HashRouter>
  </Provider>
);

export default Root;
