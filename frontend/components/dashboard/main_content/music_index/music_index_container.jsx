import { connect } from 'react-redux';
import MusicIndex from './music_index';

const mapStateToProps = state => {
  const loggedIn = Boolean(state.session.currentUser);
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicIndex);
