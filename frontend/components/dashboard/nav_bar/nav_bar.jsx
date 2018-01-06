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
  let navbar;
  if (status === "logged_in") {
    navbar = <UserNavBar props={{logout, history, currentUser}} />;
  } else {
    navbar = <GuestNavBar props={{history, login, signup, toggleSessionModal}} />;
  }

  return (
    <div className="navbar-container">
      <div className='app-content'>
        {navbar}
      </div>
    </div>
  );
};



export default NavBar;
