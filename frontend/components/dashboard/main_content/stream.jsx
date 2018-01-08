import React from 'react';

class Stream extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.currentUser.followerIds) {
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  render() {
    return (
      <div className="music-list">
        <h1>THE SONGS OF PEOPLE I FOLLOW</h1>
      </div>
    );
  }
}


export default Stream;
