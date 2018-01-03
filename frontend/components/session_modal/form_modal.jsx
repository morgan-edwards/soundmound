import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class FormModal extends React.Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      this.props.toggleSessionModal();
    }
  }

  render() {

    if (!this.props.modalIsOpen) {
      return<div></div>;
    } else {
      return (
        <div className="modal-overlay" onClick={this.closeModal}>
          <button onClick={this.closeModal}>X</button>
          <SessionFormContainer formType={this.props.modalType} closeModal={this.props.toggleSessionModal} />
        </div>
      );
    }
  }

}

export default FormModal;
