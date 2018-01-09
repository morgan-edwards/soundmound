import React from 'react';
import EditModalContainer from './edit_modal_container'

class ModalOverlay extends React.Component {
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      this.props.toggleSessionModal(null);
    }
  }

  render() {
    if (!this.props.modalIsOpen) {
      return<div></div>;
    } else {
      return (
        <div className="modal-overlay animated fadeIn" onClick={this.closeModal}>
          <button onClick={this.closeModal}
                  className="close-button">
            <i onClick={this.closeModal} className="fa fa-times fa-lg" aria-hidden="true"></i>
          </button>
          <EditModalContainer />
        </div>
      );
    }
  }

}

export default ModalOverlay;