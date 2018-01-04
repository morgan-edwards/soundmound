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
      <div className='navbar-content'>

        <div className="navbar-left">
          <div className="navbar-logo">
          </div>
          <nav className="left-nav">
            <ul>
              <li>Home</li>
              <li>Collection</li>
            </ul>
          </nav>
        </div>

        <div className="navbar-middle">
          <form className="navbar-search">
            <input className="navbar-search-input"
              placeholder="Search"
              type="search"/>
            <button className="navbar-search-submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <div className="navbar-right">
          <div className="navbar-upload">
            <span className="navbar-button">Upload</span>
          </div>
          <div className="navbar-user">
            <img src="https://i1.sndcdn.com/avatars-000147958145-wf0qkm-t50x50.jpg" alt="User Image"/>
            <h1>{`Hi, currentUser`}</h1>
            <button onClick={logoutRedirect}>Sign out</button>
          </div>

        </div>
      </div>

    </div>

  );
};

export default NavBar;
