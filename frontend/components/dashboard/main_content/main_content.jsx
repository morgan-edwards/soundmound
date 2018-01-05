import React from 'react';
import { Route } from 'react-router-dom';
import MusicIndexContainer from './music_index_container';
import UserProfileContainer from './user_profile_container';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content-container">
        <div className="app-content main-content">

          <Route path="/stream" component={MusicIndexContainer} />
          <Route path="/artists/:userId" component={UserProfileContainer}/>

        </div>
      </div>
    );
  }
}


export default MainContent;
