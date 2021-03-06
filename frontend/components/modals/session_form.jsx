import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
                  password: "",
                  animation: props.animation
                };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ animation: nextProps.animation });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({username: this.state.username,
                        password: this.state.password
                      }
    ).then(this.props.closeModal, () => (
      this.setState({password: ""})
    ));
  }

  linkState(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const buttonText = (this.props.formType === 'login') ?
                        "Login" : "Sign up";
    return (
    <div className={`animated ${this.state.animation} form-container session-container`}>
      <form className="modal-form" onSubmit={this.handleSubmit}>
        <input type="text"
                value={this.state.username}
                placeholder="username *"
                onChange={this.linkState('username')}/>

        <input type="password"
                value={this.state.password}
                placeholder="password *"
                onChange={this.linkState('password')}/>

        <div className="session-errors">
          {this.renderErrors()}
        </div>

        <button className="form-button orange-btn"
                onClick={this.handleSubmit}>{buttonText}</button>

      </form>
    </div>
    );
  }

}

export default SessionForm;
