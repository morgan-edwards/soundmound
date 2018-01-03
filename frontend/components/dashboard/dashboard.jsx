import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogoutContainer from '../logout/logout_container';

const Dashboard = () => {
  return (
    <div className="main-container">
      <NavBarContainer />
    </div>

  );
};


export default Dashboard;
