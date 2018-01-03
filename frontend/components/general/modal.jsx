import React from 'react';

class Modal extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {isOpen: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(e) {
    e.preventDefault();
    this.setState({isOpen: true});
  }

  close(e) {
    e.preventDefault();
    this.setState({isOpen: false});
  }

  render() {
    const overlayClass = (this.state.isOpen) ? open : "";
    return (
      <div id="modal" className={overlayClass}>
      </div>
    );
  }
}

export default Modal;
