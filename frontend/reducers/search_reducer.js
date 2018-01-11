import { RECEIVE_SONGS } from '../actions/song_actions';

const noResults = Object.freeze({
  searchResults: [],
  query: ""
});

const searchReducer = (state = noResults, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SONGS:
      if (action.searchResults ) {
        newState = Object.assign({}, state);
        return Object.assign(
          newState,
          { searchResults: action.searchResults,
            query: action.query
          });
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default searchReducer;
