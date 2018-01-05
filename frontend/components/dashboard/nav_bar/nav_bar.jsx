import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {

  const { currentUser,
          logout,
          history,
          status,
          login,
          signup} = props;

  const logoutRedirect = () => {
    return (
      logout().then(() => history.push("/logout"))
    );
  };

  const logged_in = (
    <div>Logged In</div>
  );

  const logged_out = (
    <div>Logged Out</div>
  )
  return (
    <div className="navbar-container">
      <div className='navbar-content flex-nav'>

        <nav className="navbar-left flex-nav">

          <button className="navbar-logo"
                  onClick={() => history.push("/")}>
              <i className="fa fa-cloud" aria-hidden="true" />
          </button>

          <ul className="nav-links-left">
            <li>
              <NavLink to="/"
                activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${currentUser.id}`}
                activeClassName="selected">
                Collection
              </NavLink>
            </li>
          </ul>

        </nav>

        <div className="navbar-middle flex-nav">
          <form className="navbar-search">
            <input className="navbar-search-input"
              placeholder="Search"
              type="search"/>
            <button className="navbar-search-submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <nav className="navbar-right flex-nav">
          <NavLink to={`/upload`}
            activeClassName="selected">
            Upload
          </NavLink>
          <NavLink to={`/upload`}
            activeClassName="selected">
            <img src="https://i1.sndcdn.com/avatars-000147958145-wf0qkm-t50x50.jpg" alt="User Image"/>
            {`${currentUser.username}`}
          </NavLink>
          <button onClick={logoutRedirect}>Sign out</button>
        </nav>

      </div>
    </div>

  );
};

export default NavBar;
