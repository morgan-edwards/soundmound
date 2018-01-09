import { RECEIVE_SONG,
          RECEIVE_SONG_ERRORS} from '../actions/song_actions';

import { TOGGLE_MODAL } from '../actions/ui_actions';
import { RECEIVE_USER } from '../actions/user_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG_ERRORS:
      return action.errors;
    case RECEIVE_SONG:
      return [];
    case TOGGLE_MODAL:
      return [];
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};
