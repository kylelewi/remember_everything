import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { logout } from '../../actions/session_actions';


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps
)(Searchbar);
