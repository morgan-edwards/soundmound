import React from 'react';
import SongListContainer from './song_list_container';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  render() {
    return (
      <div className="stream">
        <nav className="stream-subnav">
          <ul className="subnav-left">
            <li>Stream</li>
          </ul>
        </nav>

        <SongListContainer user={this.state.user}
          songs={this.state.songs} />

      </div>
    );
  }
}


export default Stream;
