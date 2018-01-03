import merge from 'lodash/merge';

import { TOGGLE_SESSION_MODAL } from '../actions/ui_actions';

const _modalClosed = Object.freeze({
  modalOpen: false
});

const uiReducer = (state = _modalClosed, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_SESSION_MODAL:
      return merge({}, { modalOpen: !state.modalOpen });
    default:
      return state;
  }
};

export default uiReducer;
