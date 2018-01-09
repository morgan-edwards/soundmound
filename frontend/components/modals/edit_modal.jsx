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
    if (this.props.formType === "edit") {
      return (
        <div className="animated bounceInDown form-container edit-container">
          <div className="modal-form">

            <div className="song-update-form">
              <div className="song-update-container">
                <div className="image-preview-container">
                  <div className="image-preview">
                    <img className="track-art" src={"this.state.imageUrl"} />
                    <div className="update-image-btn">
                      <label htmlFor="song-image" className="choose-file-btn">
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        Update image
                      </label>
                      <input className="file-input"
                        id="song-image"
                        type="file"
                        onChange={"this.updateImageFile"} />
                    </div>
                  </div>
                </div>



                <form onSubmit={"this.handleSubmit"}>
                  <label htmlFor="title">Title<span className="orange">*</span></label>
                  <input type="text"
                    id="title"
                    value={"this.state.title"}
                    onChange={"this.linkState('title')"} />

                <div className="upload-action-btns">
                  <button onClick={"this.cancelForm"}
                    className="cancel">Cancel</button>
                  <button onClick={"this.handleSubmit"}
                    className="save">Save</button>
                </div>
              </form>
            </div>
          </div>

          </div>
        </div>
      );
    } else {
        return <div style={{display: 'none'}}></div>;
    }
  }
}


export default EditModal;
