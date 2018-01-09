import React from 'react';
import { withRouter } from 'react-router-dom';
import { uploadSong } from '../../../util/song_api_util.js';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      uploading: false,
      title: '',
      audioFile: null,
      imageFile: null,
      imageUrl: props.currentUser.imageUrl,
    };
    this.linkState = this.linkState.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  updateAudioFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = function () {
      this.setState({formOpen: true, audioFile: file, title: file.name});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateImageFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  linkState(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  cancelForm(e) {
    e.preventDefault();
  }

  goHome(res) {
    console.log('res');
    return this.props.history.push(`/artists/${this.props.currentUser.id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({uploading: true});
    const formData = new FormData();
    formData.append("song[user_id]", this.props.currentUser.id);
    formData.append("song[title]", this.state.title);
    formData.append("song[track]", this.state.audioFile);
    if (this.state.imageFile) {
      formData.append("song[image]", this.state.imageFile);
    }
    uploadSong(formData).then(this.goHome);
  }

  render() {
    const form = (!this.state.formOpen || this.state.uploading) ? <div></div> :
      <div className="song-upload-form animated slideInUp">
        <div className="full-form-container">
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
    </div>;

    const uploading = (!this.state.uploading) ? <div></div> :
      <div className="spinner-container">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
          <h1>Tossing your sound on the mound...</h1>
        </div>
      </div>;


    return (
      <div className="upload-page">
        <div className="upload-portal">
          <h1>Upload to SoundMound</h1>

          <div className="upload-btn">
            <label htmlFor="audio-file" className="choose-file-btn">Throw another sound on the mound!</label>
            <input className="file-input"
              id="audio-file"
              type="file"
              onChange={this.updateAudioFile} />
          </div>
        </div>
        {form}
        {uploading}
      </div>
    );
  }
}


export default withRouter(Upload);
