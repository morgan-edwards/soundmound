export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleModal = (formType) => {
  return {
    type: TOGGLE_MODAL,
    formType
  };
};
