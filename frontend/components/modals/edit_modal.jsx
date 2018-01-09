import React from 'react';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  linkState(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    console.log(this.props.formType);
    if (this.props.formType === "edit") {
      return (
        <div className="animated bounceInDown edit-form-container">
          <div className="edit-form"></div>
        </div>
      );
    } else {
        return <div style={{display: 'none'}}></div>;
    }
  }
}


export default EditModal;
