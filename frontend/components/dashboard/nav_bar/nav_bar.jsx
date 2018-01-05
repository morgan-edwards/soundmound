import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserNavBar from './user_nav_bar';


const NavBar = (props) => {

  const { currentUser,
          logout,
          history,
          status,
          login,
          signup} = props;

  if (status === "logged_in") {
    return <UserNavBar props={{logout, history, currentUser}}/>
  } else {
    return (
      <div className="navbar-container">
        <div className='navbar-content flex-nav'>
          <h1>Logged Out</h1>
        </div>
      </div>
    );
  }
};

export default NavBar;
