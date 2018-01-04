import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainContentContainer from './main_content/main_content_container';
import PlayerContainer from './player/player_container';

const Dashboard = () => {
  return (
    <div>
      <NavBarContainer />
      <MainContentContainer />
      <PlayerContainer />
    </div>

  );
};


export default Dashboard;
