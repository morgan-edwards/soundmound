import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      title: '',
      image: ''
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.linkState = this.linkState.bind(this);
  }

  toggleForm() {
    return this.setState({ formOpen: !this.state.formOpen })
  }

  linkState(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render() {
    const form = (!this.state.formOpen) ? <div></div> :
      <div className="song-upload-form">
        <img src="https://www.cheatsheet.com/wp-content/uploads/2016/10/Ken_By_Request_Only-500x500.jpg" />
        <form onSubmit={() => console.log("SUBMIT FORM!")}>
          <label>Title<span>*</span>
            <input type="text"
              value={this.state.title}
              onChange={this.linkState('title')} />
          </label>
        </form>
      </div>;

    return (
      <div className="upload-page">
        <div className="upload-portal">
          <h1>Upload to SoundMound</h1>
          <button className="choose-file"
            onClick={this.toggleForm}>
            Choose a file to upload
          </button>
        </div>
        {form}
      </div>
    );
  }
}


export default Upload;
