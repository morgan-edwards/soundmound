import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = state => {
  const query = state.ui.search.query;
  const songs = state.ui.search.searchResults.map(
                id => state.entities.songs[id]
              );
  return { songs, query};
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
