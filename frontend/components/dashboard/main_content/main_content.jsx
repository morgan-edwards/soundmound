import React from 'react';
import { Route } from 'react-router-dom';
import MusicIndexContainer from './music_index/music_index_container';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content-container">
        <div className="app-content main-content">
          <Route path="/stream" component={MusicIndexContainer} />
        </div>
      </div>
    );
  }
}


export default MainContent;
