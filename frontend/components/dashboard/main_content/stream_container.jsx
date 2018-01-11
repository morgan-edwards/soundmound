import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Stream from './stream';
import { fetchUser } from '../../../actions/user_actions';
import { followeeSongs } from '../../../reducers/selectors';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  const songs = followeeSongs(state, currentUser);
  return { songs, currentUser};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream));
