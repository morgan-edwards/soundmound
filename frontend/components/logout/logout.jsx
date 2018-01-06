import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import App from '../App';

const Logout = (props) => {
  if (props.logged_in) {
    return <Redirect to="/" />;
  } else {
    return(
      <div className="logout-splash">
        <h1>You are now logged out.</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
};

export default Logout;
