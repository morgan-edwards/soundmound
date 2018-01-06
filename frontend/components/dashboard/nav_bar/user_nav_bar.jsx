import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class UserNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutRedirect = this.logoutRedirect.bind(this);
  }

  componentDidMount() {
    const currentUser = this.props.props.currentUser;
    if (!currentUser.imageUrl) {
      this.props.props.fetchUser(currentUser.id);
    }
  }

  logoutRedirect() {
    return (
      this.props.props.logout().then(() => this.props.props.history.push("/logout"))
    );
  }

  render() {
    const { currentUser, logoutRedirect } = this.props.props;

    return (
      <div className="navbar-content">
        <nav className="navbar-left">

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

        <div className="navbar-middle">
          <form className="navbar-search" >
            <input className="navbar-search-input"
              placeholder="Search"
              type="search"/>
            <button className="navbar-search-submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <nav className="navbar-right">
          <ul className="nav-links-right">
            <li>
              <NavLink to={`/upload`}
                activeClassName="selected">
                Upload
              </NavLink>
            </li>
            <li>
              <button className="navbar-user-btn">
                <img src={currentUser.imageUrl} />
                {`${currentUser.username}`}
                <span className="dropdown-icon">
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </button>
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

export default UserNavBar;
