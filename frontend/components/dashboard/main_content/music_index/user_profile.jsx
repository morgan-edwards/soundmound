import React from 'react';

class UserProfile extends React.Component {
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
        const songs = this.props.songs.map(song => song.title);
        return (
          <div className="music-list">
            <h1>{this.props.user.username}</h1>
            <ul>
              {songs}
            </ul>
          </div>
      );
    }
  }
}


export default UserProfile;
