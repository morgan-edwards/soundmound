import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LogoutContainer from '../../logout/logout_container';
import MusicIndexContainer from './music_index_container';
import UserProfileContainer from './user_profile_container';

const MainContent = (props) => {
  let content;
  switch (props.content) {
    case "stream":
      content = <MusicIndexContainer />;
      break;
    case "userProfile":
      content = <UserProfileContainer user={props.user} />;
      break;
    default:
      content = <MusicIndexContainer />;
  }

  return (
    <div className="main-content-container">
      <div className="app-content main-content">
        <Switch>
          <Route path="/stream" component={MusicIndexContainer} />
          <Route path="/logout" component={LogoutContainer} />
          <Route exact path="/:userId" component={UserProfileContainer} />
        </Switch>
      </div>
    </div>
  );
};


export default withRouter(MainContent);
