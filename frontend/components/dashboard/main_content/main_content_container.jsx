import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainContent from './main_content';

const mapStateToProps = state => {
  const loggedIn = Boolean(state.session.currentUser);
  return { loggedIn };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent));
