import React from 'react';
import SongListContainer from './song_list_container';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "suggested" };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
    this.props.fetchSuggested();
  }

  setView(view) {
    return () => {
      this.setState({ view });
    };
  }

  render() {
    const content = (this.state.view === "suggested") ?
      <SongListContainer user={this.props.currentUser}
        songs={this.props.suggestedSongs} /> :
      <SongListContainer user={this.props.currentUser}
        songs={this.props.followedSongs} />;

    return (
      <div className="stream">
        <nav className="user-subnav">
          <ul className="subnav-left">
            <li onClick={this.setView('suggested')}
                className={(this.state.view === 'suggested') ? "selected" : "" }>
              Suggested sounds</li>
            <li onClick={this.setView('following')}
                className={(this.state.view === 'following') ? "selected" : "" }>
              Artists you follow</li>
          </ul>
        </nav>

        { content }

      </div>
    );
  }
}


export default Stream;
