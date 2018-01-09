export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleModal = (formType, entityId) => {
  return {
    type: TOGGLE_MODAL,
    formType,
    entityId
  };
};
