import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongList from './song_list';
import FollowButtonContainer from '../buttons/follow_button_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.fetchUser(nextProps.userId);
    }
    this.setState(nextProps);
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
        return (
          <div>
            <div className="user-banner">
              <div className="user-image-frame">
                <img className="user-banner-img" src={this.state.user.imageUrl} />
              </div>
              <div className="banner-content">
                <div className="artist-title">
                  {this.state.user.username}
                </div>
              </div>
            </div>

            <nav className="user-subnav">
              <ul className="subnav-left">
                <li>All</li>
              </ul>
              <div className="subnav-right">
                <FollowButtonContainer userId={this.state.user.id} />
              </div>
            </nav>

            <SongList user={this.state.user}
              songs={this.state.songs} />
          </div>
      );
    }
  }
}


export default withRouter(UserProfile);
