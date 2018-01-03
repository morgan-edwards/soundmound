import React from 'react';
import { Route, Link } from 'react-router-dom';
import App from '../App';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="logout-splash">
        <h1>You are now logged out.</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Logout;
