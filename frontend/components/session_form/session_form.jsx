import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.user).then(() =>
    this.props.history.push('/'));
  }

  linkState(field) {
    return e => {
      this.setState({user: {[field]: e.target.value}});
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
    const buttonText = (this.props.formType === 'login') ? "Login" : "Sign up";
    return (
    <div className="session-form-modal animate fadeIn">

      <form onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <input type="text"
                value={this.state.username}
                placeholder="username"
                onChange={this.linkState('username')}/>

              <input type="password"
                      value={this.state.password}
                      placeholder="password"
                      onChange={this.linkState('password')}/>

        <button>{buttonText}</button>

      </form>
    </div>
    );
  }

}

export default SessionForm;
