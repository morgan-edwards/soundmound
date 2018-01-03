import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal);
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
    console.log(this.props);
    const buttonText = (this.props.formType === 'login') ?
                        "Login" : "Sign up";
    return (
    <div className="session-form">
      {this.renderErrors()}
      <form onSubmit={this.handleSubmit}>
        <input type="text"
                value={this.state.username}
                placeholder="username"
                onChange={this.linkState('username')}/>

        <input type="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.linkState('password')}/>

        <button onClick={this.handleSubmit}>{buttonText}</button>

      </form>
    </div>
    );
  }

}

export default SessionForm;
