import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class GuestNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.props;
  }

  render() {
    const { toggleSessionModal } = this.state;

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
              <button onClick={this.loginRedirect}
                className="nav-btn dark-nav-btn"
                onClick={() => toggleSessionModal('login')}>
                Sign in
              </button>
            </li>
            <li>
              <button onClick={this.signupRedirect}
                className="nav-btn orange-nav-btn"
                onClick={() => toggleSessionModal('signup')}>
                Create account
              </button>
            </li>
            <li>
              <NavLink to={`/upload`}
                activeClassName="selected">
                Upload
              </NavLink>
            </li>
            <li>
              <button className="options-btn"
                onClick={this.logoutRedirect}>
                <span className="options-icon">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </button>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default GuestNavBar;
