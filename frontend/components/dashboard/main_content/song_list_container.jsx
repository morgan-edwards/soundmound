import { connect } from 'react-redux';
import SongList from './song_list';
import { setQueue } from '../../../actions/playback_actions';

const mapStateToProps = (state, ownProps) => {
  const user = ownProps.user;
  const songs = ownProps.songs;
  const source = ownProps.source;
  return { user, songs, source };
};

const mapDispatchToProps = dispatch => {
  return {
    setQueue: (songs) => dispatch(setQueue(songs)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
