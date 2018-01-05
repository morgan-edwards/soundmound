import { connect } from 'react-redux';
import MusicIndex from './music_index';
import { fetchUser, fetchFollows } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const indexType = ownProps.indexType;
  const loggedIn = Boolean(state.session.currentUser);

  return {loggedIn, indexType};
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicIndex);
