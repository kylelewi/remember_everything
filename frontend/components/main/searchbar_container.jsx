import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { logout } from '../../actions/session_actions';
import { filterTasks } from '../../actions/task_actions';

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  filterTasks: filterId => dispatch(filterTasks(filterId))
});

export default connect(
  null,
  mapDispatchToProps
)(Searchbar);
