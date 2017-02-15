import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Login from './login';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));
