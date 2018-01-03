import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, history }) => {
  const logoutRedirect = () => {
    return (
      logout().then(() => history.push("/logout"))
    );
  };
  return (
    <div className="navbar-container">
      <nav className="navbar-content">
        <img src="https://i1.sndcdn.com/avatars-000147958145-wf0qkm-t50x50.jpg" alt="User Image"/>
        <h1>{`Hi`}</h1>
        <button onClick={logoutRedirect}>Sign out</button>
      </nav>
    </div>
  );
};

export default NavBar;
