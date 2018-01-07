import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        const songs = this.props.songs.map(song => <li>{song.title}</li>);
        return (
          <div className="music-list">
            <h1>{this.props.user.username}</h1>
            <img style={{width: 400}} src={this.props.user.imageUrl} />
            <ul>
              {songs}
            </ul>
            <Link to={`/${this.props.user.id + 1}`}>Next</Link>
          </div>
      );
    }
  }
}


export default withRouter(UserProfile);