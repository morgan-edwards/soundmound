import React from 'react';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      uploading: false,
      title: props.song.title,
      imageFile: null,
      imageUrl: props.song.imageUrl,
      defaultFile: "",
      animation: props.animation,
    };
    this.linkState = this.linkState.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goHome = this.goHome.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ animation: nextProps.animation });
  }

  updateImageFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
    e.currentTarget.value = null;
  }

  cancelForm(e) {
    if (e) e.preventDefault();
    this.setState({
      formOpen: false,
      uploading: false,
      title: '',
      audioFile: null,
      imageFile: null,
      imageUrl: this.props.song.imageUrl,
      defaultFile: "",
    });
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({uploading: true});
    const formData = new FormData();
    formData.append("song[id]", this.props.song.id);
    formData.append("song[user_id]", this.props.currentUser.id);
    formData.append("song[title]", this.state.title);
    formData.append("song[track]", this.state.audioFile);
    if (this.state.imageFile) {
      formData.append("song[image]", this.state.imageFile);
    }
    this.props.updateSong(formData).then(this.goHome);
  }

  goHome(res) {
    console.log(res);
    return this.cancelForm();
  }

  linkState(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    if (this.props.formType === "edit") {
      return (
        <div className={`animated ${this.state.animation} form-container edit-container`}>
          <div className="modal-form">

            <div className="song-update-form">
              <div className="song-update-container">
                <div className="image-preview-container">
                  <div className="image-preview">
                    <img className="track-art" src={this.state.imageUrl} />

                    <div className="update-image-btn">
                      <label htmlFor="song-image" className="choose-file-btn">
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        Update image
                      </label>
                      <input className="file-input"
                        id="song-image"
                        type="file"
                        value={this.state.defaultFile}
                        onChange={this.updateImageFile} />
                    </div>

                  </div>
                </div>



                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="title">Title<span className="orange">*</span></label>
                  <input type="text"
                    id="title"
                    value={this.state.title}
                    onChange={this.linkState('title')} />

                <div className="upload-action-btns">
                  <button onClick={this.cancelForm}
                    className="cancel">Cancel</button>
                  <button onClick={this.handleSubmit}
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
