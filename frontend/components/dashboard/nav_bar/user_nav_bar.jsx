import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const UserNavBar = ({props}) => {

  const { currentUser,
          logout,
          history,
        } = props;

  const logoutRedirect = () => {
    return (
      logout().then(() => history.push("/logout"))
    );
  };

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
          <form className="navbar-search" >
            <input className="navbar-search-input"
              placeholder="Search"
              type="search"/>
            <button className="navbar-search-submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <nav className="navbar-right flex-nav">
          <ul className="nav-links-right">
            <li>
              <NavLink to={`/upload`}
                activeClassName="selected">
                Upload
              </NavLink>
            </li>
            <li>
              <NavLink to={`/upload`}
                className="navbar-user"
                activeClassName="selected">
                <img src="https://i1.sndcdn.com/avatars-000147958145-wf0qkm-t50x50.jpg" alt="User Image"/>
                {`${currentUser.username}`}
              </NavLink>
            </li>
            <li>
              <button onClick={logoutRedirect}>Sign out</button>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default UserNavBar;
