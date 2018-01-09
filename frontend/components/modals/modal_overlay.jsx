import React from 'react';
import EditModalContainer from './edit_modal_container'
import SessionFormContainer from './session_form_container'

class ModalOverlay extends React.Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      this.props.toggleModal(null);
    }
  }

  render() {
    let modalContent;
    switch (this.props.modalType) {
      case 'edit':
        modalContent = <EditModalContainer />;
        break;
      case 'login':
        modalContent = <SessionFormContainer formType='login'/>;
        break;
      case 'signup':
        modalContent = <SessionFormContainer formType='signup'/>;
        break;
      default:
        modalContent = <div style={{display: "none"}}></div>;

    }
    if (!this.props.modalIsOpen) {
      return<div></div>;
    } else {
      return (
        <div className="modal-overlay animated fadeIn" onClick={this.closeModal}>
          <button onClick={this.closeModal}
                  className="close-button">
            <i onClick={this.closeModal} className="fa fa-times fa-lg" aria-hidden="true"></i>
          </button>
          {modalContent}
        </div>
      );
    }
  }

}

export default ModalOverlay;
