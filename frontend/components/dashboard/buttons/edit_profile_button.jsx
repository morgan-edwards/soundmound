import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../../actions/ui_actions';

const EditProfileButton = (props) => {
  return (
    <button onClick={() => props.toggleModal('editProfile', props.userId)}
            className="subnav-button">
      <i className="fa fa-pencil" aria-hidden="true"></i>
      <span>Edit</span>
    </button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: (formType, entityId) => dispatch(toggleModal(formType, entityId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileButton);
