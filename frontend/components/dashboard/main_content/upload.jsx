import React from 'react';
import { withRouter } from 'react-router-dom';
import { uploadSong } from '../../../util/song_api_util.js';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      title: '',
      audioFile: null,
      imageFile: null,
      imageUrl: props.currentUser.imageUrl,
    };
    this.linkState = this.linkState.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("song[user_id]", this.props.currentUser.id);
    formData.append("song[title]", this.state.title);
    formData.append("song[track]", this.state.audioFile);
    if (this.state.imageFile) {
      formData.append("song[image]", this.state.imageFile);
    }
    uploadSong(formData).then(() => this.props.history.push(`/artists/${this.props.currentUser.id}`));
  }

  render() {

    const form = (!this.state.formOpen) ? <div></div> :
      <div className="song-upload-form animated slideInDown">

        <div className="image-preview">
          <img className="track-art" src={this.state.imageUrl} />
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>Title<span>*</span>
            <input type="text"
              value={this.state.title}
              onChange={this.linkState('title')} />
          </label>

          <div className="upload-action-btns">
            <button onClick={this.cancelForm}>Cancel</button>
            <button onClick={this.handleSubmit}>Save</button>
          </div>
        </form>
      </div>;

    return (
      <div className="upload-page">
        <div className="upload-portal">
          <h1>Upload to SoundMound</h1>

          <div>
            <label htmlFor="files" className="choose-file-btn">Choose a sound to throw on the mound!</label>
            <input className="file-input"
              id="files"
              type="file"
              onChange={this.updateAudioFile} />
          </div>

        </div>
        {form}
      </div>
    );
  }
}


export default withRouter(Upload);
