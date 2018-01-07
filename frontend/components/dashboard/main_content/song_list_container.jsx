import { connect } from 'react-redux';
import SongList from './song_list';

const mapStateToProps = (state, ownProps) => {
  const user = ownProps.user;
  const songs = ownProps.songs;
  return { user, songs };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
