import merge from 'lodash/merge';

import { TOGGLE_MODAL } from '../actions/ui_actions';

const _modalClosed = Object.freeze({
  modalOpen: false,
  formType: null,
  entityId: null,
});

const uiReducer = (state = _modalClosed, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case TOGGLE_MODAL:
      newState = (!state.modalOpen) ?
                  { modalOpen: !state.modalOpen, formType: action.formType, entityId: action.entityId } :
                  { modalOpen: !state.modalOpen, formType: null, entityId: null };
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
