import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Stream from './stream';
import { fetchUser } from '../../../actions/user_actions';
import { fetchSuggested } from '../../../actions/song_actions';
import { followeeSongs } from '../../../reducers/selectors';

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  const followedSongs = followeeSongs(state, currentUser);
  const suggestedSongs = state.ui.suggestions.suggestions.map(id => state.entities.songs[id]);
  return { followedSongs, suggestedSongs, currentUser};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchSuggested: () => dispatch(fetchSuggested()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream));
