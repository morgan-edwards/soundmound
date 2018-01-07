import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Upload from './upload';
import { fetchUser } from '../../../actions/user_actions';
import { userSongs } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return { currentUser };

};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
