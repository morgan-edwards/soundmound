import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SearchbarContainer from '../search/searchbar_container'

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
      this.props.props.logout().then(() => this.props.history.push("/"))
    );
  }

  render() {
    const { currentUser } = this.props.props;

    return (
      <div className="navbar-content">
        <nav className="navbar-left">

          <button className="navbar-logo"
            onClick={() => this.props.history.push("/")}>
            <i className="fa fa-cloud" aria-hidden="true" />
          </button>

          <ul className="nav-links-left">
            <li>
              <NavLink to="/stream"
                activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/artists/${currentUser.id}`}
                activeClassName="selected">
                Collection
              </NavLink>
            </li>
          </ul>

        </nav>

        <div className="navbar-middle">
          <SearchbarContainer />
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
              <NavLink to={`/artists/${currentUser.id}`}
                        className="navbar-user-btn">
                <img src={currentUser.imageUrl} />
                {`${currentUser.username}`}
                <span className="dropdown-icon">
                </span>
              </NavLink>
            </li>
            <li>
              <button className="options-btn"
                onClick={this.logoutRedirect}>
                <span className="options-icon">
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default withRouter(UserNavBar);
