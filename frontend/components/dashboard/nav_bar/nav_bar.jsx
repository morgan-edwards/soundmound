import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserNavBar from './user_nav_bar';
import GuestNavBar from './guest_nav_bar';


const NavBar = (props) => {

  const { currentUser,
          logout,
          history,
          status,
          login,
          signup,
          toggleSessionModal
          } = props;

  if (status === "logged_in") {
    return <UserNavBar props={{logout, history, currentUser}} />;
  } else {
    return <GuestNavBar props={{history, login, signup, toggleSessionModal}} />;
  }
};

export default NavBar;
