import React from 'react';
import { Link } from 'react-router-dom';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.logout();
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
