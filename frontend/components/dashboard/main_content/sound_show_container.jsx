import { connect } from 'react-redux';
import { fetchSong } from '../../../actions/song_actions';
import SoundShow from './sound_show';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const songId = ownProps.match.params.songId;
  const song = state.entities.songs[songId];
  const artist = (song) ? state.entities.users[song.userId] : {};
  return { artist, songId, song, currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundShow);
