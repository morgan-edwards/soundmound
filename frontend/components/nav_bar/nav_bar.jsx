import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Sign In</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Create Account</Link>
  </nav>
);

const avatar = (currentUser) => (
  <span className="navbar-avatar">
    <img src="https://i1.sndcdn.com/avatars-000147958145-wf0qkm-t50x50.jpg" alt="User Image"/>
    {currentUser.username}
    <Link to="/logout">Sign out</Link>
  </span>
);

const NavBar= ({ currentUser }) => (
  currentUser ? avatar(currentUser) : sessionLinks()
);

export default NavBar;
