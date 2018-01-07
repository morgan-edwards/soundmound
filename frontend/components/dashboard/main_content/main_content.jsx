import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LogoutContainer from '../../logout/logout_container';
import StreamContainer from './stream_container';
import UserProfileContainer from './user_profile_container';
import UploadContainer from './upload_container';

const MainContent = (props) => {
  return (
    <div className="main-content-container">
      <div className="app-content main-content">
        <Switch>
          <Route path="/stream" component={StreamContainer} />
          <Route path="/logout" component={LogoutContainer} />
          <Route path="/upload" component={UploadContainer} />
          <Route path="/artists/:userId" component={UserProfileContainer} />
        </Switch>
      </div>
    </div>
  );
};


export default withRouter(MainContent);
