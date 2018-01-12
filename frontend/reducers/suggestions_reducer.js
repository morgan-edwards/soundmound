import { RECEIVE_SONGS } from '../actions/song_actions';

const noSuggestions = Object.freeze({
  suggestions: [],
});

const suggestionsReducer = (state = noSuggestions, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONGS:
      if (action.suggestions ) {
        return { suggestions: action.suggestions };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default suggestionsReducer;
