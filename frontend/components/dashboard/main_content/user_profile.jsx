import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongList from './song_list';
import FollowButtonContainer from '../buttons/follow_button_container';
import EditProfileButton from '../buttons/edit_profile_button';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    if (!this.props.user) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
        const currentUser = this.props.currentUser;
        const backgroundUrl = this.props.user.bannerUrl;
        const userId = this.props.user.id;
        const rightButton = (currentUser &&  userId === this.props.currentUser.id) ?
                            <EditProfileButton userId={userId} /> :
                            <FollowButtonContainer userId={userId} />;

        const background = (backgroundUrl) ? { "background": `url(${backgroundUrl})`,
                                                "backgroundSize": "cover",
                                                "backgroundPosition": "center center",
                                                "backgroundRepeat": "no-repeat",
                                              } : {};

        return (
          <div>
            <div className="user-banner" style={background}>
              <div className="user-image-frame">
                <img className="user-banner-img" src={this.props.user.imageUrl} />
              </div>
              <div className="banner-content">
                <div className="artist-title">
                  {this.props.user.username}
                </div>
              </div>
            </div>

            <nav className="user-subnav">
              <ul className="subnav-left">
                <li>All</li>
              </ul>
              <div className="subnav-right">
                {rightButton}
              </div>
            </nav>

            <SongList user={this.props.user}
              songs={this.props.songs} />
          </div>
      );
    }
  }
}


export default withRouter(UserProfile);
