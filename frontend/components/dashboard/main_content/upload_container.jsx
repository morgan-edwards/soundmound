import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Upload from './upload';
import { fetchUser } from '../../../actions/user_actions';
import { userSongs } from '../../../reducers/selectors';
import { uploadSong } from '../../../util/song_api_util.js';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  return { currentUser };

};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    uploadSong: (formData) => dispatch(uploadSong(formData)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload));
