import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Searchbar from './searchbar';
import { searchSongs } from '../../../actions/song_actions';

const mapStateToProps = (state) => {
  return { };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchSongs: (query) => dispatch(searchSongs(query)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar));
