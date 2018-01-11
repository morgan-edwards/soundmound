import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LogoutContainer from '../../logout/logout_container';
import StreamContainer from './stream_container';
import UserProfileContainer from './user_profile_container';
import UploadContainer from './upload_container';
import SoundShowContainer from './sound_show_container';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';

const MainContent = (props) => {
  const modalClass = (props.modalOpen) ? "modal-open" : "";
  return (
    <div className={`${modalClass} main-content-container`}>
      <div className="app-content main-content">
        <Switch>
          <ProtectedRoute path="/stream" component={StreamContainer} />
          <Route path="/logout" component={LogoutContainer} />
          <ProtectedRoute path="/upload" component={UploadContainer} />
          <Route path="/artists/:userId" component={UserProfileContainer} />
          <Route path="/sounds/:songId" component={SoundShowContainer} />
        </Switch>
      </div>
    </div>
  );
};


export default withRouter(MainContent);
