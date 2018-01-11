import React from 'react';
import { withRouter } from 'react-router-dom';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.linkState = this.linkState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  cancelForm() {
    this.setState({ query: "" });
    this.props.history.push("/search");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchSongs(this.state.query).then(this.cancelForm);
  }

  linkState(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <form className="navbar-search" onSubmit={this.handleSubmit}>
        <input className="navbar-search-input"
          onChange={this.linkState('query')}
          placeholder="Search for artists, bands, or tracks"
          type="text"/>
        <button className="navbar-search-submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}


export default withRouter(Searchbar);
