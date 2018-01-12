import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      username: props.currentUser.username,
      imageFile: "",
      imageUrl: props.currentUser.imageUrl,
      bannerFile: "",
      bannerUrl: props.currentUser.bannerUrl,
      defaultFile: "",
      animation: props.animation,
    };
    this.linkState = this.linkState.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.updateBannerFile = this.updateBannerFile.bind(this);
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

  updateBannerFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ bannerFile: file, bannerUrl: fileReader.result });
    };

    if (file) fileReader.readAsDataURL(file);
    e.currentTarget.value = null;
  }

  cancelForm(e) {
    if (e) e.preventDefault();
    this.setState({
      formOpen: false,
      username: "",
      imageFile: "",
      imageUrl: "",
      bannerFile: "",
      bannerUrl: "",
      defaultFile: "",
    });
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({uploading: true});
    const formData = new FormData();
    formData.append("user[id]", this.props.currentUser.id);
    formData.append("user[username]", this.state.username);

    if (this.state.bannerFile !== "") {
      formData.append("user[banner]", this.state.bannerFile);
    }
    if (this.state.imageFile !== "") {
      formData.append("user[image]", this.state.imageFile);
    }
    this.props.updateUser(formData).then(this.goHome);
  }

  goHome() {
    return this.cancelForm();
  }

  linkState(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const background = (this.state.bannerUrl) ? { "background": `url(${this.state.bannerUrl})`,
                                                  "backgroundSize": "100%",
                                                  "backgroundPosition": "center center",
                                                  "backgroundRepeat": "no-repeat",
                                                } : {};
    return (
      <div className={`animated ${this.state.animation} form-container edit-container`}>
        <div className="modal-form">

          <div className="profile-update-form">
            <div className="profile-update-container">

              <div className="preview-banner">

                <div className="user-banner" style={background}>
                  <div className="user-image-frame">
                    <img className="user-banner-img" src={this.state.imageUrl} />
                  </div>
                  <div className="banner-content" >
                    <div className="artist-title">
                      {this.state.username}
                    </div>
                  </div>
                </div>

                <div className="user-image-input-button">
                  <label>
                    Choose profile image
                    <input
                      type="file"
                      value={this.state.defaultFile}
                      onChange={this.updateImageFile} />
                  </label>
                </div>

                <div className="user-banner-input-button">
                  <label>
                    Choose a header image
                    <input
                      type="file"
                      value={this.state.defaultFile}
                      onChange={this.updateBannerFile} />
                  </label>
                </div>

              </div>

              <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Username<span className="orange">*</span></label>
                <input type="text"
                  id="title"
                  value={this.state.username}
                  onChange={this.linkState('username')} />

              <div className="upload-action-btns">
                <button onClick={this.cancelForm}
                  className="cancel">Cancel</button>
                <button onClick={this.handleSubmit}
                  className="save">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


export default EditProfile;
