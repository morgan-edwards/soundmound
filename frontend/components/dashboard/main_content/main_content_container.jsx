import { connect } from 'react-redux';
import MainContent from './main_content';

const mapStateToProps = state => {
  const loggedIn = Boolean(state.session.currentUser);
  return { loggedIn };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);
