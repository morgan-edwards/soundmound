import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongList from './song_list';

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
    this.setState(nextProps.songs);
  }

  render() {
    if (!this.props.user) {
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
                <img className="user-banner-img" src={this.props.user.imageUrl} />
              </div>
              <div className="banner-content">
                <div className="artist-title">
                  {this.props.user.username}
                </div>
              </div>
            </div>
            <SongList user={this.props.user}
              songs={this.props.songs} />
          </div>
      );
    }
  }
}


export default withRouter(UserProfile);
