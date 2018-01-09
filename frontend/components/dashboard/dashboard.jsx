import React from 'react';
import { Route } from 'react-router-dom';
import LogoutContainer from '../logout/logout_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainContentContainer from './main_content/main_content_container';
import UserProfileContainer from './main_content/user_profile_container';

const Dashboard = (props) => {
  const modalClass = (props.modalOpen) ? "modal-open" : "";
  return (
    <div className={modalClass}>
      <NavBarContainer />
      <MainContentContainer />
    </div>

  );
};


export default Dashboard;
