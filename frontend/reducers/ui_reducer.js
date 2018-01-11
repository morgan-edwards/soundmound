import { combineReducers } from 'redux';

import modals from './modals_reducer';
import playback from './playback_reducer';
import search from './search_reducer';

export default combineReducers({
  modals,
  playback,
  search,
});
