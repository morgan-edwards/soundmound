import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SearchbarContainer from '../search/searchbar_container';

class GuestNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.props;
  }

  render() {
    const { toggleModal, history } = this.state;

    return (
      <div className='navbar-content'>

        <nav className="navbar-left">
          <button className="navbar-logo navbar-logo-lrg"
            onClick={() => history.push("/")}>
            <i className="fa fa-cloud" aria-hidden="true" />
            <span>SOUNDMOUND</span>
          </button>

          <ul className="nav-links-left">
            <li>
              <NavLink to="/"
                activeClassName="selected">
                Charts
              </NavLink>
            </li>
          </ul>

        </nav>

        <div className="navbar-middle">
          <SearchbarContainer />
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
              <button onClick={this.loginRedirect}
                className="nav-btn dark-nav-btn"
                onClick={() => toggleModal('login')}>
                Sign in
              </button>
            </li>
            <li>
              <button onClick={this.signupRedirect}
                className="nav-btn orange-nav-btn"
                onClick={() => toggleModal('signup')}>
                Create account
              </button>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default GuestNavBar;
