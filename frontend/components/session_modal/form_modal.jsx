import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class FormModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: this.props.modalOpen, modalType: this.props.formType};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal(type) {
    return (e) => {
      e.preventDefault();
      this.setState({modalType: type});
      this.setState({modalIsOpen: true});
    };
  }

  afterOpenModal() {
    const modal = (document.getElementsByClassName('ReactModal__Content'));
    modal.item(0).classList.remove("bounceInDown");
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}>
          <SessionFormContainer formType={this.state.modalType} />
        </Modal>
      </div>
    );
  }

}

export default FormModal;
