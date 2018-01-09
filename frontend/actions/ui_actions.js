export const TOGGLE_SESSION_MODAL = 'TOGGLE_SESSION_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleSessionModal = (formType) => {
  return {
    type: TOGGLE_SESSION_MODAL,
    formType
  };
};

export const toggleModal = (formType) => {
  return {
    type: TOGGLE_MODAL,
    formType
  };
};
